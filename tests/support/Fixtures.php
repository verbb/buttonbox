<?php

use craft\base\Field;
use craft\elements\Entry;
use craft\fieldlayoutelements\CustomField;
use craft\fieldlayoutelements\entries\EntryTitleField;
use craft\helpers\Json;
use craft\models\EntryType;
use craft\models\FieldLayout;
use craft\models\FieldLayoutTab;
use craft\models\Section;
use craft\models\Section_SiteSettings;

class ButtonBoxFixtures
{
    public static function field(string $class, array $settings = []): Field
    {
        $handle = 'bbTest' . bin2hex(random_bytes(5));
        $field = new $class($settings + ['name' => $handle, 'handle' => $handle]);
        if (!Craft::$app->getFields()->saveField($field)) {
            throw new RuntimeException('Cannot save field: ' . Json::encode($field->getErrors()));
        }
        return $field;
    }

    public static function section(array $fields, array $required = []): Section
    {
        $handle = 'bbSection' . bin2hex(random_bytes(5));
        $layout = new FieldLayout(['type' => Entry::class]);
        $tab = new FieldLayoutTab(['name' => 'Content', 'layout' => $layout]);
        $tab->setElements([
            new EntryTitleField(['required' => true]),
            ...array_map(fn($field) => new CustomField($field, ['required' => in_array($field->handle, $required, true)]), $fields),
        ]);
        $layout->setTabs([$tab]);
        $type = new EntryType(['name' => $handle, 'handle' => $handle]);
        $type->setFieldLayout($layout);
        if (!Craft::$app->getEntries()->saveEntryType($type)) {
            throw new RuntimeException(Json::encode($type->getErrors()));
        }
        $section = new Section(['name' => $handle, 'handle' => $handle, 'type' => Section::TYPE_CHANNEL, 'enableVersioning' => false]);
        $section->setEntryTypes([$type]);
        $section->setSiteSettings([new Section_SiteSettings([
            'siteId' => Craft::$app->getSites()->getPrimarySite()->id,
            'enabledByDefault' => true, 'hasUrls' => false,
        ])]);
        if (!Craft::$app->getEntries()->saveSection($section)) {
            throw new RuntimeException(Json::encode($section->getErrors()));
        }
        return $section;
    }

    public static function entry(Section $section, array $values): Entry
    {
        $entry = new Entry([
            'sectionId' => $section->id, 'typeId' => $section->getEntryTypes()[0]->id,
            'siteId' => Craft::$app->getSites()->getPrimarySite()->id,
            'title' => 'Fixture ' . bin2hex(random_bytes(5)),
        ]);
        $entry->setScenario(Entry::SCENARIO_LIVE);
        $entry->setFieldValues($values);
        return $entry;
    }

    public static function save(Entry $entry, bool $validate = true): void
    {
        if (!Craft::$app->getElements()->saveElement($entry, $validate)) {
            throw new RuntimeException('Cannot save entry: ' . Json::encode($entry->getErrors()));
        }
    }

    public static function reload(int $id): Entry
    {
        Craft::$app->getFields()->refreshFields();
        Craft::$app->getEntries()->refreshEntryTypes();
        // Craft memoizes cloned fields inside layouts for the lifetime of a request.
        // Rebind them after fixture configuration edits; separate-process readbacks
        // independently prove the persisted configuration without these caches.
        foreach (Craft::$app->getFields()->getAllLayouts() as $layout) {
            foreach ($layout->getCustomFieldElements() as $placement) {
                $placement->setField(Craft::$app->getFields()->getFieldByUid($placement->getFieldUid()));
            }
            $layout->reset();
        }
        $entry = Entry::find()->id($id)->status(null)->one();
        if (!$entry) {
            throw new RuntimeException('Saved entry was not found.');
        }
        $entry->setScenario(Entry::SCENARIO_LIVE);
        return $entry;
    }

    public static function raw(Entry $entry, string $handle): mixed
    {
        $content = (new craft\db\Query())->select('content')->from(craft\db\Table::ELEMENTS_SITES)
            ->where(['elementId' => $entry->id, 'siteId' => $entry->siteId])->scalar();
        $content = is_array($content) ? $content : Json::decodeIfJson($content);
        $field = $entry->getFieldLayout()->getFieldByHandle($handle);
        return $content[$field->layoutElement->uid] ?? null;
    }

    public static function assertFreshProcess(array $expectations): void
    {
        self::runInFreshProcess('readback.php', $expectations);
    }

    public static function runInFreshProcess(string $script, array $payload): void
    {
        $path = tempnam(CRAFT_STORAGE_PATH, 'readback-');
        // Preserve float types in settings snapshots passed to another PHP process.
        file_put_contents($path, Json::encode($payload, JSON_PRESERVE_ZERO_FRACTION));
        Craft::$app->getProjectConfig()->flush();
        try {
            $process = proc_open([PHP_BINARY, dirname(__DIR__) . '/runtime/' . $script, $path], [0 => ['pipe', 'r'], 1 => ['pipe', 'w'], 2 => ['redirect', 1]], $pipes);
            if (!is_resource($process)) {
                throw new RuntimeException('Could not start a fresh readback process.');
            }
            fclose($pipes[0]);
            $output = stream_get_contents($pipes[1]);
            fclose($pipes[1]);
            if (proc_close($process) !== 0) {
                throw new RuntimeException('Fresh-process readback failed: ' . $output);
            }
        } finally {
            unlink($path);
        }
    }
}
