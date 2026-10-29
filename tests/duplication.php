<?php

use craft\base\Field;
use craft\elements\Entry;

require __DIR__ . '/support/isolated.php';
require __DIR__ . '/support/LifecycleFixtures.php';

use ButtonBoxLifecycleFixtures as Lifecycle;

$create = function(array $fields, ?craft\models\Section $section = null): Entry {
    $entry = ButtonBoxFixtures::entry($section ?? Lifecycle::section($fields), Lifecycle::handles($fields, Lifecycle::values()));
    ButtonBoxFixtures::save($entry);
    return $entry;
};
$duplicate = function(Entry $entry, bool $asDraft = false) use ($suite): Entry {
    $copy = Craft::$app->getElements()->duplicateElement($entry, asUnpublishedDraft: $asDraft);
    $suite->check($entry->id !== $copy->id && $entry->uid !== $copy->uid, 'Duplicate reused the original identity.');
    $suite->same($asDraft, $copy->getIsDraft());
    return $copy;
};

foreach ([false, true] as $asDraft) {
    $suite->test(($asDraft ? 'Unpublished draft' : 'Canonical') . ' duplicates preserve values and edit independently', function() use ($suite, $create, $duplicate, $asDraft) {
        $fields = Lifecycle::fields();
        $original = $create($fields);
        $copy = $duplicate(Lifecycle::load($original->id), $asDraft);
        Lifecycle::verify($suite, [Lifecycle::expectation($copy, $fields, Lifecycle::values())]);
        $copy = Lifecycle::load($copy->id);
        $copy->setFieldValues(Lifecycle::handles($fields, Lifecycle::values('b')));
        ButtonBoxFixtures::save($copy);
        Lifecycle::verify($suite, [
            Lifecycle::expectation($copy, $fields, Lifecycle::values('b')),
            Lifecycle::expectation($original, $fields, Lifecycle::values()),
        ]);
        if ($asDraft) {
            $published = Craft::$app->getDrafts()->applyDraft(Lifecycle::load($copy->id));
            $suite->check($published->id !== $original->id, 'Publishing a duplicate overwrote its source.');
            Lifecycle::verify($suite, [Lifecycle::expectation($published, $fields, Lifecycle::values('b'))]);
            $copy = $published;
        }
        $original = Lifecycle::load($original->id);
        foreach ($fields as $field) $original->setFieldValueFromRequest($field->handle, null);
        ButtonBoxFixtures::save($original);
        Lifecycle::verify($suite, [
            Lifecycle::expectation($original, $fields, Lifecycle::values('empty')),
            Lifecycle::expectation($copy, $fields, Lifecycle::values('b')),
        ]);
    });
}

$suite->test('Duplication preserves stored defaults and explicit empty values without reinitializing them', function() use ($suite, $duplicate) {
    $fields = Lifecycle::fields();
    foreach (['choice', 'multi'] as $key) {
        $options = $fields[$key]->options;
        $options[0]['default'] = true;
        $fields[$key]->options = $options;
        $suite->check(Craft::$app->getFields()->saveField($fields[$key]), 'Cannot configure a default.');
    }
    $section = Lifecycle::section($fields);
    $original = ButtonBoxFixtures::entry($section, []);
    ButtonBoxFixtures::save($original);
    $defaults = array_replace(Lifecycle::values('empty'), ['choice' => 'one', 'multi' => ['one'], 'rating' => 3]);
    Lifecycle::verify($suite, [Lifecycle::expectation($original, $fields, $defaults)]);
    $copy = $duplicate(Lifecycle::load($original->id));
    Lifecycle::verify($suite, [Lifecycle::expectation($copy, $fields, $defaults)]);
    $original = Lifecycle::load($original->id);
    foreach ($fields as $field) $original->setFieldValueFromRequest($field->handle, null);
    ButtonBoxFixtures::save($original);
    foreach ([false, true] as $asDraft) {
        $emptyCopy = $duplicate(Lifecycle::load($original->id), $asDraft);
        ButtonBoxFixtures::save($emptyCopy);
        Lifecycle::verify($suite, [Lifecycle::expectation($emptyCopy, $fields, Lifecycle::values('empty'))]);
    }
    Lifecycle::verify($suite, [Lifecycle::expectation($copy, $fields, $defaults)]);
});

$suite->test('Removed and disabled identities survive duplication and still fail live validation', function() use ($suite, $create, $duplicate) {
    $fields = Lifecycle::fields();
    $original = $create($fields);
    foreach (['choice', 'multi'] as $key) {
        $fields[$key]->options = [['label' => 'Zero', 'value' => '0', 'disabled' => true]];
        $suite->check(Craft::$app->getFields()->saveField($fields[$key]), 'Cannot change availability.');
    }
    $original = ButtonBoxFixtures::reload($original->id);
    // Serialization follows current configured order, then appends removed identities.
    $copiedValues = array_replace(Lifecycle::values(), ['multi' => ['0', 'one']]);
    foreach ([false, true] as $asDraft) {
        $copy = $duplicate(Lifecycle::load($original->id), $asDraft);
        Lifecycle::verify($suite, [Lifecycle::expectation($copy, $fields, $copiedValues)]);
        $copy = Lifecycle::load($copy->id);
        $suite->same(false, Craft::$app->getElements()->saveElement($copy), 'Unavailable choices passed validation.');
        foreach (['choice', 'multi'] as $key) $suite->check($copy->hasErrors($fields[$key]->handle), "Missing $key validation error.");
        $multi = $copy->getFieldValue($fields['multi']->handle);
        foreach ($multi as $option) {
            $suite->same(false, $option->valid, 'Copied unavailable selection became valid.');
            if ($option->value === '0') $suite->same(true, $option->disabled);
        }
        ButtonBoxFixtures::save($copy, false);
        Lifecycle::verify($suite, [Lifecycle::expectation($copy, $fields, $copiedValues)]);
    }
    $expected = [];
    foreach ($fields as $key => $field) {
        $expected[] = ['id' => $original->id, 'handle' => $field->handle, 'class' => $field::class, 'stored' => Lifecycle::values()[$key], 'serialized' => $copiedValues[$key]];
    }
    ButtonBoxFixtures::assertFreshProcess($expected);
});

$suite->test('Multisite duplication retains each translated value and independent copy identity', function() use ($suite, $create, $duplicate) {
    $primary = Craft::$app->getSites()->getPrimarySite();
    $secondary = Lifecycle::site();
    $fields = Lifecycle::fields(Field::TRANSLATION_METHOD_SITE);
    $original = $create($fields, Lifecycle::section($fields, [$primary, $secondary]));
    $local = Lifecycle::load($original->id, $secondary->id);
    $local->setFieldValues(Lifecycle::handles($fields, Lifecycle::values('b')));
    ButtonBoxFixtures::save($local);
    $copy = $duplicate(Lifecycle::load($original->id));
    $localCopy = Lifecycle::load($copy->id, $secondary->id);
    Lifecycle::verify($suite, [
        Lifecycle::expectation($copy, $fields, Lifecycle::values()),
        Lifecycle::expectation($localCopy, $fields, Lifecycle::values('b')),
    ]);
    foreach ($fields as $field) $localCopy->setFieldValueFromRequest($field->handle, null);
    ButtonBoxFixtures::save($localCopy);
    ButtonBoxFixtures::save(Lifecycle::load($copy->id));
    Lifecycle::verify($suite, [
        Lifecycle::expectation($copy, $fields, Lifecycle::values()),
        Lifecycle::expectation($localCopy, $fields, Lifecycle::values('empty')),
        Lifecycle::expectation($original, $fields, Lifecycle::values()),
        Lifecycle::expectation($local, $fields, Lifecycle::values('b')),
    ]);
});

foreach (['a', 'empty'] as $values) {
    $suite->test("Matrix duplication preserves $values values, order and separate child ownership", function() use ($suite, $duplicate, $values) {
        $fields = Lifecycle::fields();
        $matrix = Lifecycle::matrix($fields);
        $owner = ButtonBoxFixtures::entry(Lifecycle::section([$matrix]), []);
        $first = Lifecycle::nestedInput($matrix, $fields, Lifecycle::values($values), 'new1');
        $second = Lifecycle::nestedInput($matrix, $fields, Lifecycle::values('b'), 'new2');
        $owner->setFieldValueFromRequest($matrix->handle, ['sortOrder' => ['new1', 'new2'], 'entries' => $first['entries'] + $second['entries']]);
        ButtonBoxFixtures::save($owner);
        $originalChildren = Lifecycle::load($owner->id)->getFieldValue($matrix->handle)->all();
        $suite->same(2, count($originalChildren));
        $copy = $duplicate(Lifecycle::load($owner->id));
        $copyChildren = Lifecycle::load($copy->id)->getFieldValue($matrix->handle)->all();
        $suite->same(2, count($copyChildren));
        foreach ($copyChildren as $i => $child) {
            $suite->check($child->id !== $originalChildren[$i]->id, 'Duplicate reused the original nested entry.');
            $suite->same($copy->id, $child->getPrimaryOwnerId());
            Lifecycle::verify($suite, [Lifecycle::expectation($child, $fields, Lifecycle::values($i === 0 ? $values : 'b'))]);
        }
        $copy = Lifecycle::load($copy->id);
        // Replace/reorder via Craft's actual Matrix request normalization and owner save.
        $changed = Lifecycle::nestedInput($matrix, $fields, Lifecycle::values('b'), $copyChildren[0]->id);
        $unchanged = Lifecycle::nestedInput($matrix, $fields, Lifecycle::values('b'), $copyChildren[1]->id);
        $copy->setFieldValueFromRequest($matrix->handle, ['sortOrder' => [$copyChildren[1]->id, $copyChildren[0]->id], 'entries' => $changed['entries'] + $unchanged['entries']]);
        ButtonBoxFixtures::save($copy);
        ButtonBoxFixtures::save(Lifecycle::load($copy->id));
        $suite->same([$copyChildren[1]->id, $copyChildren[0]->id], Lifecycle::load($copy->id)->getFieldValue($matrix->handle)->ids());
        Lifecycle::verify($suite, [
            Lifecycle::expectation($originalChildren[0], $fields, Lifecycle::values($values)),
            Lifecycle::expectation($originalChildren[1], $fields, Lifecycle::values('b')),
            Lifecycle::expectation($copyChildren[0], $fields, Lifecycle::values('b')),
        ]);
    });
}

$suite->finish();
