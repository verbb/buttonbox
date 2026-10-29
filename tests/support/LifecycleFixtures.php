<?php

use craft\base\Field;
use craft\elements\Entry;
use craft\fields\Matrix;
use craft\models\Section;
use craft\models\Section_SiteSettings;
use craft\models\Site;
use verbb\buttonbox\fields\Position;
use verbb\buttonbox\fields\Rating;
use verbb\buttonbox\fields\VisualChoice;
use verbb\buttonbox\fields\VisualMultiChoice;
use verbb\buttonbox\fields\WidthChoice as Width;

class ButtonBoxLifecycleFixtures
{
    public static function fields(string $translation = Field::TRANSLATION_METHOD_NONE): array
    {
        $options = [['label' => 'One', 'value' => 'one'], ['label' => 'Zero', 'value' => '0']];
        $settings = ['translationMethod' => $translation];
        return [
            'choice' => ButtonBoxFixtures::field(VisualChoice::class, $settings + ['options' => $options]),
            'multi' => ButtonBoxFixtures::field(VisualMultiChoice::class, $settings + ['options' => $options]),
            'position' => ButtonBoxFixtures::field(Position::class, $settings),
            'width' => ButtonBoxFixtures::field(Width::class, $settings),
            'rating' => ButtonBoxFixtures::field(Rating::class, $settings + ['defaultValue' => 3]),
        ];
    }

    public static function values(string $set = 'a'): array
    {
        return match ($set) {
            'a' => ['choice' => 'one', 'multi' => ['one', '0'], 'position' => 'bottom-right', 'width' => '50', 'rating' => 4],
            'b' => ['choice' => '0', 'multi' => ['0'], 'position' => 'top-left', 'width' => '25', 'rating' => 2],
            'empty' => ['choice' => null, 'multi' => null, 'position' => null, 'width' => null, 'rating' => null],
        };
    }

    public static function handles(array $fields, array $values): array
    {
        $result = [];
        foreach ($values as $key => $value) $result[$fields[$key]->handle] = $value;
        return $result;
    }

    public static function section(array $fields, array $sites = [], bool $versioning = false): Section
    {
        $section = ButtonBoxFixtures::section(array_values($fields));
        $section->enableVersioning = $versioning;
        if ($sites) {
            $section->setSiteSettings(array_map(fn(Site $site) => new Section_SiteSettings([
                'siteId' => $site->id, 'enabledByDefault' => true, 'hasUrls' => false,
            ]), $sites));
        }
        if (!Craft::$app->getEntries()->saveSection($section)) throw new RuntimeException('Cannot configure lifecycle section.');
        return $section;
    }

    public static function site(string $language = 'fr'): Site
    {
        $site = new Site([
            'groupId' => Craft::$app->getSites()->getPrimarySite()->groupId,
            'name' => 'Lifecycle ' . bin2hex(random_bytes(4)), 'handle' => 'lifecycle' . bin2hex(random_bytes(4)),
            'language' => $language, 'hasUrls' => false,
        ]);
        if (!Craft::$app->getSites()->saveSite($site)) throw new RuntimeException(json_encode($site->getErrors()));
        // Site creation and content tests share one request here. Refresh both
        // application caches that would normally be rebuilt on the next request.
        Craft::$app->getIsMultiSite(refresh: true);
        Craft::$app->getIsMultiSite(refresh: true, withTrashed: true);
        return $site;
    }

    public static function load(int $id, ?int $siteId = null): Entry
    {
        $siteId ??= Craft::$app->getSites()->getPrimarySite()->id;
        $entry = Entry::find()->id($id)->siteId($siteId)
            ->drafts(null)->provisionalDrafts(null)->revisions(null)->status(null)
            ->allowOwnerDrafts(true)->allowOwnerRevisions(true)->one();
        if (!$entry) throw new RuntimeException("Cannot reload lifecycle entry $id for site $siteId.");
        if ($entry->siteId !== $siteId) throw new RuntimeException('The lifecycle query returned the wrong site.');
        $entry->setScenario(Entry::SCENARIO_LIVE);
        return $entry;
    }

    public static function expectation(Entry $entry, array $fields, array $values): array
    {
        $expected = [
            'id' => $entry->id, 'siteId' => $entry->siteId, 'canonicalId' => $entry->getCanonicalId(),
            'draft' => $entry->getIsDraft(), 'provisional' => $entry->isProvisionalDraft,
            'revision' => $entry->getIsRevision(), 'primaryOwnerId' => $entry->getPrimaryOwnerId(), 'fields' => [],
        ];
        foreach ($values as $key => $value) {
            $expected['fields'][] = ['handle' => $fields[$key]->handle, 'class' => $fields[$key]::class, 'value' => $value];
        }
        return $expected;
    }

    public static function assertReadback(ButtonBoxTestSuite $suite, array $expected): void
    {
        $entry = self::load($expected['id'], $expected['siteId']);
        $suite->same($expected['canonicalId'], $entry->getCanonicalId(), 'Canonical identity changed.');
        $suite->same($expected['draft'], $entry->getIsDraft());
        $suite->same($expected['provisional'], $entry->isProvisionalDraft);
        $suite->same($expected['revision'], $entry->getIsRevision());
        $suite->same($expected['primaryOwnerId'], $entry->getPrimaryOwnerId(), 'Nested ownership changed.');
        foreach ($expected['fields'] as $item) {
            $field = $entry->getFieldLayout()->getFieldByHandle($item['handle']);
            $suite->same($item['class'], $field::class);
            $suite->same($item['value'], ButtonBoxFixtures::raw($entry, $item['handle']), 'Lifecycle storage changed: ' . $item['handle']);
            $suite->same($item['value'], $field->serializeValue($entry->getFieldValue($item['handle']), $entry), 'Lifecycle normalization changed: ' . $item['handle']);
        }
    }

    public static function verify(ButtonBoxTestSuite $suite, array $expectations): void
    {
        foreach ($expectations as $expected) self::assertReadback($suite, $expected);
        ButtonBoxFixtures::runInFreshProcess('lifecycle-readback.php', $expectations);
    }

    public static function matrix(array $fields): Matrix
    {
        // Craft entry types may be shared between sections and Matrix fields.
        $type = self::section($fields)->getEntryTypes()[0];
        return ButtonBoxFixtures::field(Matrix::class, ['entryTypes' => [$type]]);
    }

    public static function nestedInput(Matrix $matrix, array $fields, array $values, string|int $id = 'new1'): array
    {
        return ['sortOrder' => [$id], 'entries' => [$id => [
            'type' => $matrix->getEntryTypes()[0]->handle, 'enabled' => true, 'title' => 'Nested lifecycle fixture',
            'fields' => self::handles($fields, $values),
        ]]];
    }
}
