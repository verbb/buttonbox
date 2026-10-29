<?php

use craft\base\Field;
use craft\elements\Entry;

require __DIR__ . '/support/isolated.php';
require __DIR__ . '/support/LifecycleFixtures.php';

use ButtonBoxLifecycleFixtures as Lifecycle;

$creatorId = Craft::$app->getUsers()->getUserByUsernameOrEmail('admin')->id;
$create = function(array $fields, $section = null): Entry {
    $section ??= Lifecycle::section($fields);
    $entry = ButtonBoxFixtures::entry($section, Lifecycle::handles($fields, Lifecycle::values()));
    ButtonBoxFixtures::save($entry);
    return $entry;
};

foreach ([false, true] as $provisional) {
    $suite->test(($provisional ? 'Provisional' : 'Saved') . ' draft isolates edits and publishes every canonical field', function() use ($suite, $create, $creatorId, $provisional) {
        $fields = Lifecycle::fields();
        $canonical = $create($fields);
        $draft = Craft::$app->getDrafts()->createDraft($canonical, $creatorId, provisional: $provisional);
        $suite->same($provisional, $draft->isProvisionalDraft);
        Lifecycle::verify($suite, [Lifecycle::expectation($draft, $fields, Lifecycle::values())]);
        $draft->setFieldValues(Lifecycle::handles($fields, Lifecycle::values('b')));
        ButtonBoxFixtures::save($draft);
        Lifecycle::verify($suite, [
            Lifecycle::expectation($canonical, $fields, Lifecycle::values()),
            Lifecycle::expectation($draft, $fields, Lifecycle::values('b')),
        ]);
        $published = Craft::$app->getDrafts()->applyDraft(Lifecycle::load($draft->id));
        $suite->same($canonical->id, $published->id);
        $suite->same(false, $published->getIsDraft());
        Lifecycle::verify($suite, [Lifecycle::expectation($published, $fields, Lifecycle::values('b'))]);
    });
}

$suite->test('Unpublished drafts preserve defaults and explicit clears through publish', function() use ($suite, $creatorId) {
    $fields = Lifecycle::fields();
    $section = Lifecycle::section($fields);
    foreach ([false, true] as $clear) {
        $draft = ButtonBoxFixtures::entry($section, []);
        if ($clear) $draft->setFieldValueFromRequest($fields['rating']->handle, null);
        $suite->check(Craft::$app->getDrafts()->saveElementAsDraft($draft, $creatorId), 'Cannot save unpublished draft.');
        $expected = $clear ? null : 3;
        Lifecycle::verify($suite, [Lifecycle::expectation($draft, $fields, ['rating' => $expected])]);
        $published = Craft::$app->getDrafts()->applyDraft(Lifecycle::load($draft->id));
        $suite->same(false, $published->getIsDraft());
        Lifecycle::verify($suite, [Lifecycle::expectation($published, $fields, ['rating' => $expected])]);
    }
});

$suite->test('Draft merge retains edits to other canonical fields', function() use ($suite, $create, $creatorId) {
    $fields = Lifecycle::fields();
    $canonical = $create($fields);
    $draft = Craft::$app->getDrafts()->createDraft($canonical, $creatorId);
    $draft->setFieldValue($fields['choice']->handle, '0');
    ButtonBoxFixtures::save($draft);
    $canonical = Lifecycle::load($canonical->id);
    $canonical->setFieldValue($fields['rating']->handle, 5);
    $canonical->setFieldValue($fields['width']->handle, '25');
    ButtonBoxFixtures::save($canonical);
    // Exercise the merge explicitly rather than depending on second-resolution timestamps.
    $draft = Lifecycle::load($draft->id);
    Craft::$app->getElements()->mergeCanonicalChanges($draft);
    $published = Craft::$app->getDrafts()->applyDraft($draft);
    $expected = array_replace(Lifecycle::values(), ['choice' => '0', 'rating' => 5, 'width' => '25']);
    Lifecycle::verify($suite, [Lifecycle::expectation($published, $fields, $expected)]);
});

$suite->test('Cleared values stay empty through draft publish and revision restoration', function() use ($suite, $create, $creatorId) {
    $fields = Lifecycle::fields();
    $entry = $create($fields);
    $draft = Craft::$app->getDrafts()->createDraft($entry, $creatorId);
    foreach ($fields as $field) $draft->setFieldValueFromRequest($field->handle, null);
    ButtonBoxFixtures::save($draft);
    $entry = Craft::$app->getDrafts()->applyDraft(Lifecycle::load($draft->id));
    Lifecycle::verify($suite, [Lifecycle::expectation($entry, $fields, Lifecycle::values('empty'))]);
    $revisionId = Craft::$app->getRevisions()->createRevision($entry, $creatorId, force: true);
    $entry->setFieldValues(Lifecycle::handles($fields, Lifecycle::values('b')));
    ButtonBoxFixtures::save($entry);
    $restored = Craft::$app->getRevisions()->revertToRevision(Lifecycle::load($revisionId), $creatorId);
    Lifecycle::verify($suite, [Lifecycle::expectation($restored, $fields, Lifecycle::values('empty'))]);
});

$suite->test('Revisions retain historical content and restore all canonical fields', function() use ($suite, $create, $creatorId) {
    $fields = Lifecycle::fields();
    $canonical = $create($fields);
    $revisionId = Craft::$app->getRevisions()->createRevision($canonical, $creatorId, force: true);
    $revision = Lifecycle::load($revisionId);
    $suite->same(true, $revision->getIsRevision());
    $canonical->setFieldValues(Lifecycle::handles($fields, Lifecycle::values('b')));
    ButtonBoxFixtures::save($canonical);
    Lifecycle::verify($suite, [
        Lifecycle::expectation($revision, $fields, Lifecycle::values()),
        Lifecycle::expectation($canonical, $fields, Lifecycle::values('b')),
    ]);
    $restored = Craft::$app->getRevisions()->revertToRevision(Lifecycle::load($revisionId), $creatorId);
    $suite->same($canonical->id, $restored->id);
    Lifecycle::verify($suite, [Lifecycle::expectation($restored, $fields, Lifecycle::values())]);
});

$suite->test('Removed identities survive draft and revision duplication and non-validating saves', function() use ($suite, $create, $creatorId) {
    $fields = Lifecycle::fields();
    $canonical = $create($fields);
    $orphan = array_replace(Lifecycle::values(), ['choice' => 'removed', 'multi' => ['one', 'removed'], 'position' => 'removed', 'width' => 'removed']);
    $canonical->setFieldValues(Lifecycle::handles($fields, $orphan));
    ButtonBoxFixtures::save($canonical, false);
    $draft = Craft::$app->getDrafts()->createDraft($canonical, $creatorId);
    $revisionId = Craft::$app->getRevisions()->createRevision($canonical, $creatorId, force: true);
    $draft = Lifecycle::load($draft->id);
    $suite->same(false, Craft::$app->getElements()->saveElement($draft), 'Live validation accepted removed selections.');
    foreach (['choice', 'multi', 'position', 'width'] as $key) $suite->check($draft->hasErrors($fields[$key]->handle), "Missing $key error.");
    ButtonBoxFixtures::save($draft, false);
    Lifecycle::verify($suite, [
        Lifecycle::expectation($canonical, $fields, $orphan), Lifecycle::expectation($draft, $fields, $orphan),
        Lifecycle::expectation(Lifecycle::load($revisionId), $fields, $orphan),
    ]);
});

foreach ([Field::TRANSLATION_METHOD_NONE, Field::TRANSLATION_METHOD_SITE] as $translation) {
    $suite->test('Multisite propagation respects translation method ' . $translation, function() use ($suite, $create, $translation) {
        $fields = Lifecycle::fields($translation);
        $primary = Craft::$app->getSites()->getPrimarySite();
        $secondary = Lifecycle::site();
        $section = Lifecycle::section($fields, [$primary, $secondary]);
        $entry = $create($fields, $section);
        $local = Lifecycle::load($entry->id, $secondary->id);
        foreach ($fields as $field) {
            $placed = $local->getFieldLayout()->getFieldByHandle($field->handle);
            $suite->same($translation, $placed->translationMethod, 'Fixture translation method was not persisted.');
        }
        Lifecycle::verify($suite, [Lifecycle::expectation($local, $fields, Lifecycle::values())]);
        $local->setFieldValues(Lifecycle::handles($fields, Lifecycle::values('b')));
        ButtonBoxFixtures::save($local);
        $primaryValues = $translation === Field::TRANSLATION_METHOD_NONE ? Lifecycle::values('b') : Lifecycle::values();
        Lifecycle::verify($suite, [Lifecycle::expectation($entry, $fields, $primaryValues), Lifecycle::expectation($local, $fields, Lifecycle::values('b'))]);
        foreach ($fields as $field) $local->setFieldValueFromRequest($field->handle, null);
        ButtonBoxFixtures::save($local);
        Lifecycle::verify($suite, [
            Lifecycle::expectation($entry, $fields, $translation === Field::TRANSLATION_METHOD_NONE ? Lifecycle::values('empty') : Lifecycle::values()),
            Lifecycle::expectation($local, $fields, Lifecycle::values('empty')),
        ]);
    });
}

$suite->test('Publishing a translated draft preserves the other site', function() use ($suite, $create, $creatorId) {
    $fields = Lifecycle::fields(Field::TRANSLATION_METHOD_SITE);
    $secondary = Lifecycle::site();
    $section = Lifecycle::section($fields, [Craft::$app->getSites()->getPrimarySite(), $secondary]);
    $canonical = $create($fields, $section);
    $local = Lifecycle::load($canonical->id, $secondary->id);
    $draft = Craft::$app->getDrafts()->createDraft($local, $creatorId);
    $draft->setFieldValues(Lifecycle::handles($fields, Lifecycle::values('b')));
    ButtonBoxFixtures::save($draft);
    Lifecycle::verify($suite, [Lifecycle::expectation($canonical, $fields, Lifecycle::values()), Lifecycle::expectation($local, $fields, Lifecycle::values())]);
    Craft::$app->getDrafts()->applyDraft(Lifecycle::load($draft->id, $secondary->id));
    Lifecycle::verify($suite, [Lifecycle::expectation($canonical, $fields, Lifecycle::values()), Lifecycle::expectation($local, $fields, Lifecycle::values('b'))]);
});

$suite->test('Automatic revisions preserve the prior state during ordinary entry saves', function() use ($suite, $create, $creatorId) {
    $fields = Lifecycle::fields();
    $entry = $create($fields, Lifecycle::section($fields, versioning: true));
    $revision = Entry::find()->revisionOf($entry)->siteId($entry->siteId)->status(null)->orderBy('id asc')->one();
    $suite->check($revision !== null, 'Saving an entry with versioning enabled did not create a revision.');
    $entry->setFieldValues(Lifecycle::handles($fields, Lifecycle::values('b')));
    ButtonBoxFixtures::save($entry);
    Lifecycle::verify($suite, [Lifecycle::expectation($revision, $fields, Lifecycle::values()), Lifecycle::expectation($entry, $fields, Lifecycle::values('b'))]);
    $restored = Craft::$app->getRevisions()->revertToRevision(Lifecycle::load($revision->id), $creatorId);
    Lifecycle::verify($suite, [Lifecycle::expectation($restored, $fields, Lifecycle::values())]);
});

$suite->test('Language translation shares values only between matching site languages', function() use ($suite, $create) {
    $primary = Craft::$app->getSites()->getPrimarySite();
    $sameLanguage = Lifecycle::site($primary->language);
    $otherLanguage = Lifecycle::site('de');
    $fields = Lifecycle::fields(Field::TRANSLATION_METHOD_LANGUAGE);
    $entry = $create($fields, Lifecycle::section($fields, [$primary, $sameLanguage, $otherLanguage]));
    $local = Lifecycle::load($entry->id, $sameLanguage->id);
    $local->setFieldValues(Lifecycle::handles($fields, Lifecycle::values('b')));
    ButtonBoxFixtures::save($local);
    Lifecycle::verify($suite, [
        Lifecycle::expectation($entry, $fields, Lifecycle::values('b')),
        Lifecycle::expectation($local, $fields, Lifecycle::values('b')),
        Lifecycle::expectation(Lifecycle::load($entry->id, $otherLanguage->id), $fields, Lifecycle::values()),
    ]);
});

$suite->test('Matrix owner saves persist nested values and reject invalid nested submissions', function() use ($suite) {
    $fields = Lifecycle::fields();
    $matrix = Lifecycle::matrix($fields);
    $owner = ButtonBoxFixtures::entry(Lifecycle::section([$matrix]), []);
    $owner->setFieldValueFromRequest($matrix->handle, Lifecycle::nestedInput($matrix, $fields, Lifecycle::values()));
    ButtonBoxFixtures::save($owner);
    $nested = Lifecycle::load($owner->id)->getFieldValue($matrix->handle)->one();
    $suite->same($owner->id, $nested->getPrimaryOwnerId());
    Lifecycle::verify($suite, [Lifecycle::expectation($nested, $fields, Lifecycle::values())]);
    $fresh = Lifecycle::load($owner->id);
    $fresh->setFieldValueFromRequest($matrix->handle, Lifecycle::nestedInput($matrix, $fields, ['rating' => '2.9'], $nested->id));
    $suite->same(false, Craft::$app->getElements()->saveElement($fresh), 'Invalid nested Rating saved.');
    $suite->check($fresh->getFieldValue($matrix->handle)->one()->hasErrors($fields['rating']->handle), 'Nested rejection did not report the Rating error.');
    Lifecycle::verify($suite, [Lifecycle::expectation($nested, $fields, Lifecycle::values())]);
    $fresh = Lifecycle::load($owner->id);
    $fresh->setFieldValueFromRequest($matrix->handle, Lifecycle::nestedInput($matrix, $fields, Lifecycle::values('b'), $nested->id));
    ButtonBoxFixtures::save($fresh);
    Lifecycle::verify($suite, [Lifecycle::expectation($nested, $fields, Lifecycle::values('b'))]);
});

$suite->test('Matrix edits in owner drafts remain isolated until publishing', function() use ($suite, $creatorId) {
    $fields = Lifecycle::fields();
    $matrix = Lifecycle::matrix($fields);
    $owner = ButtonBoxFixtures::entry(Lifecycle::section([$matrix]), []);
    $owner->setFieldValueFromRequest($matrix->handle, Lifecycle::nestedInput($matrix, $fields, Lifecycle::values()));
    ButtonBoxFixtures::save($owner);
    $nested = Lifecycle::load($owner->id)->getFieldValue($matrix->handle)->one();
    $draft = Craft::$app->getDrafts()->createDraft($owner, $creatorId);
    $draft->setFieldValueFromRequest($matrix->handle, Lifecycle::nestedInput($matrix, $fields, Lifecycle::values('b'), $nested->id));
    ButtonBoxFixtures::save($draft);
    $draftNested = Lifecycle::load($draft->id)->getFieldValue($matrix->handle)->one();
    $suite->check($nested->id !== $draftNested->id, 'Draft modified the original nested entry.');
    Lifecycle::verify($suite, [Lifecycle::expectation($nested, $fields, Lifecycle::values()), Lifecycle::expectation($draftNested, $fields, Lifecycle::values('b'))]);
    $published = Craft::$app->getDrafts()->applyDraft(Lifecycle::load($draft->id));
    $publishedNested = Lifecycle::load($published->id)->getFieldValue($matrix->handle)->one();
    Lifecycle::verify($suite, [Lifecycle::expectation($publishedNested, $fields, Lifecycle::values('b'))]);
});

$suite->test('Matrix revision restore recovers historical nested values', function() use ($suite, $creatorId) {
    $fields = Lifecycle::fields();
    $matrix = Lifecycle::matrix($fields);
    $owner = ButtonBoxFixtures::entry(Lifecycle::section([$matrix]), []);
    $owner->setFieldValueFromRequest($matrix->handle, Lifecycle::nestedInput($matrix, $fields, Lifecycle::values()));
    ButtonBoxFixtures::save($owner);
    $nested = Lifecycle::load($owner->id)->getFieldValue($matrix->handle)->one();
    $revisionId = Craft::$app->getRevisions()->createRevision($owner, $creatorId, force: true);
    $revisionNested = Lifecycle::load($revisionId)->getFieldValue($matrix->handle)->one();
    $owner = Lifecycle::load($owner->id);
    $owner->setFieldValueFromRequest($matrix->handle, Lifecycle::nestedInput($matrix, $fields, Lifecycle::values('b'), $nested->id));
    ButtonBoxFixtures::save($owner);
    Lifecycle::verify($suite, [Lifecycle::expectation($revisionNested, $fields, Lifecycle::values())]);
    $restored = Craft::$app->getRevisions()->revertToRevision(Lifecycle::load($revisionId), $creatorId);
    $restoredNested = Lifecycle::load($restored->id)->getFieldValue($matrix->handle)->one();
    Lifecycle::verify($suite, [Lifecycle::expectation($restoredNested, $fields, Lifecycle::values())]);
});

$suite->test('Matrix propagation keeps translated nested values independent across sites', function() use ($suite) {
    $fields = Lifecycle::fields(Field::TRANSLATION_METHOD_SITE);
    $matrix = Lifecycle::matrix($fields);
    $secondary = Lifecycle::site();
    $section = Lifecycle::section([$matrix], [Craft::$app->getSites()->getPrimarySite(), $secondary]);
    $owner = ButtonBoxFixtures::entry($section, []);
    $owner->setFieldValueFromRequest($matrix->handle, Lifecycle::nestedInput($matrix, $fields, Lifecycle::values()));
    ButtonBoxFixtures::save($owner);
    $primaryNested = Lifecycle::load($owner->id)->getFieldValue($matrix->handle)->one();
    $localOwner = Lifecycle::load($owner->id, $secondary->id);
    $localNested = $localOwner->getFieldValue($matrix->handle)->one();
    $suite->same($secondary->id, $localNested->siteId);
    $suite->same($primaryNested->id, $localNested->id, 'Default Matrix propagation should share nested identity.');
    $localOwner->setFieldValueFromRequest($matrix->handle, Lifecycle::nestedInput($matrix, $fields, Lifecycle::values('b'), $localNested->id));
    ButtonBoxFixtures::save($localOwner);
    Lifecycle::verify($suite, [Lifecycle::expectation($primaryNested, $fields, Lifecycle::values()), Lifecycle::expectation($localNested, $fields, Lifecycle::values('b'))]);
});

$suite->finish();
