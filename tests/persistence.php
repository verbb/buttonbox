<?php

use craft\elements\Entry;
use verbb\buttonbox\fields\ActionLinks;
use verbb\buttonbox\fields\Position;
use verbb\buttonbox\fields\Rating;
use verbb\buttonbox\fields\VisualChoice;
use verbb\buttonbox\fields\VisualMultiChoice;
use verbb\buttonbox\fields\WidthChoice as Width;

require __DIR__ . '/support/isolated.php';

$suite->test('Every canonical content field saves and reloads in a new process', function() use ($suite) {
    $rows = [['label' => 'One', 'value' => 'one'], ['label' => 'Zero', 'value' => '0']];
    $cases = [
        [VisualChoice::class, ['options' => $rows], '0'],
        [VisualMultiChoice::class, ['options' => $rows], ['one', '0']],
        [Position::class, [], 'bottom-right'],
        [Width::class, [], '50'],
        [Rating::class, [], 4],
    ];
    $fields = []; $values = [];
    foreach ($cases as [$class, $settings, $value]) {
        $field = ButtonBoxFixtures::field($class, $settings);
        $fields[] = $field; $values[$field->handle] = $value;
    }
    $actions = ButtonBoxFixtures::field(ActionLinks::class, ['actions' => [['label' => 'Docs', 'url' => '/docs']]]);
    $fields[] = $actions; $values[$actions->handle] = 'ignored';
    $section = ButtonBoxFixtures::section($fields);
    $entry = ButtonBoxFixtures::entry($section, $values);
    ButtonBoxFixtures::save($entry);
    $fresh = ButtonBoxFixtures::reload($entry->id);
    $expected = [];
    foreach ($fields as $field) {
        $stored = $field instanceof ActionLinks ? null : $values[$field->handle];
        $suite->same($stored, ButtonBoxFixtures::raw($fresh, $field->handle));
        $expected[] = ['id' => $entry->id, 'handle' => $field->handle, 'class' => $field::class, 'stored' => $stored, 'serialized' => $stored];
    }
    ButtonBoxFixtures::save($fresh);
    ButtonBoxFixtures::assertFreshProcess($expected);
});

$suite->test('Multi-choice removed identities survive non-validating resaves but fail ordinary validation', function() use ($suite) {
    $field = ButtonBoxFixtures::field(VisualMultiChoice::class, ['options' => [['label' => 'One', 'value' => 'one'], ['label' => 'Removed', 'value' => 'removed']]]);
    $section = ButtonBoxFixtures::section([$field]);
    $entry = ButtonBoxFixtures::entry($section, [$field->handle => ['one', 'removed']]);
    ButtonBoxFixtures::save($entry);
    $field->options = [['label' => 'One', 'value' => 'one']];
    $suite->check(Craft::$app->getFields()->saveField($field), 'Cannot change options.');
    foreach ([['one', 'removed'], ['removed']] as $values) {
        $fresh = ButtonBoxFixtures::reload($entry->id);
        $fresh->setFieldValue($field->handle, $values);
        $suite->same(false, Craft::$app->getElements()->saveElement($fresh));
        $suite->check($fresh->hasErrors($field->handle), 'Unavailable selection did not report an error.');
        ButtonBoxFixtures::save($fresh, false);
        $suite->same($values, ButtonBoxFixtures::raw($fresh, $field->handle));
        ButtonBoxFixtures::assertFreshProcess([['id' => $entry->id, 'handle' => $field->handle, 'class' => VisualMultiChoice::class, 'stored' => $values, 'serialized' => $values]]);
    }
});

$suite->test('Multi-choice minimum and maximum are enforced on saved content', function() use ($suite) {
    $field = ButtonBoxFixtures::field(VisualMultiChoice::class, ['minSelections' => 1, 'maxSelections' => 2, 'options' => [['label' => 'A', 'value' => 'a'], ['label' => 'B', 'value' => 'b'], ['label' => 'C', 'value' => 'c']]]);
    $section = ButtonBoxFixtures::section([$field]);
    foreach ([[], ['a', 'b', 'c']] as $values) {
        $entry = ButtonBoxFixtures::entry($section, [$field->handle => $values]);
        $suite->same(false, Craft::$app->getElements()->saveElement($entry));
        $suite->check($entry->hasErrors($field->handle), 'Selection limit did not report a field error.');
    }
    foreach ([['a'], ['a', 'b']] as $values) {
        $entry = ButtonBoxFixtures::entry($section, [$field->handle => $values]);
        ButtonBoxFixtures::save($entry);
        $suite->same($values, ButtonBoxFixtures::raw(ButtonBoxFixtures::reload($entry->id), $field->handle));
    }
});

$suite->test('Rating defaults, clears and invalid submissions follow the real save pipeline', function() use ($suite) {
    $field = ButtonBoxFixtures::field(Rating::class, ['max' => 5, 'defaultValue' => 3]);
    $section = ButtonBoxFixtures::section([$field]);
    foreach ([[null, 3], ['', null], ['0', null], ['5', 5]] as [$raw, $expected]) {
        $entry = ButtonBoxFixtures::entry($section, [$field->handle => $raw]);
        ButtonBoxFixtures::save($entry);
        $suite->same($expected, ButtonBoxFixtures::raw($entry, $field->handle));
        $fresh = ButtonBoxFixtures::reload($entry->id);
        $suite->same($expected, $fresh->getFieldValue($field->handle));
        $fresh->setFieldValue($field->handle, '');
        ButtonBoxFixtures::save($fresh);
        $suite->same(null, ButtonBoxFixtures::reload($entry->id)->getFieldValue($field->handle));
    }
    $entry = ButtonBoxFixtures::entry($section, [$field->handle => 4]);
    ButtonBoxFixtures::save($entry);
    foreach (['2.9', 2.9, 'invalid', true, [], -1, 6] as $invalid) {
        $fresh = ButtonBoxFixtures::reload($entry->id);
        $fresh->setFieldValue($field->handle, $invalid);
        $suite->same(false, Craft::$app->getElements()->saveElement($fresh), 'Invalid Rating was saved.');
        $suite->check($fresh->hasErrors($field->handle), 'Invalid Rating has no error.');
        $suite->same(4, ButtonBoxFixtures::raw($fresh, $field->handle));
    }
    $required = ButtonBoxFixtures::section([$field], [$field->handle]);
    $empty = ButtonBoxFixtures::entry($required, [$field->handle => '']);
    $suite->same(false, Craft::$app->getElements()->saveElement($empty), 'Required Rating accepted clearing.');
    $suite->check($empty->hasErrors($field->handle), 'Required Rating has no error.');
});

$suite->finish();
