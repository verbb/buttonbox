<?php

use craft\elements\Entry;
use verbb\buttonbox\fields\Position;
use verbb\buttonbox\fields\Rating;
use verbb\buttonbox\fields\VisualChoice;
use verbb\buttonbox\fields\VisualMultiChoice;
use verbb\buttonbox\fields\WidthChoice as Width;

require __DIR__ . '/support/isolated.php';

foreach ([VisualChoice::class, Position::class, Width::class] as $class) {
    $suite->test('Stored scalar queries: ' . $class, function() use ($suite, $class) {
        $values = match ($class) {
            Position::class => ['top-left', 'bottom-right'],
            Width::class => ['25', '50'],
            default => ['0', 'one'],
        };
        $settings = $class === VisualChoice::class ? ['options' => [['label' => 'Zero', 'value' => '0'], ['label' => 'One', 'value' => 'one']]] : [];
        $field = ButtonBoxFixtures::field($class, $settings);
        $section = ButtonBoxFixtures::section([$field]);
        $ids = [];
        foreach ([...$values, '', 'removed'] as $value) {
            $entry = ButtonBoxFixtures::entry($section, [$field->handle => $value]);
            ButtonBoxFixtures::save($entry, $value !== 'removed');
            $ids[] = $entry->id;
        }
        $find = fn($value) => Entry::find()->sectionId($section->id)->status(null)->{$field->handle}($value)->orderBy('id asc')->ids();
        $suite->same([$ids[0]], $find($values[0]), 'Exact identity query failed.');
        $suite->same([$ids[0], $ids[1]], $find($values), 'OR query failed.');
        $suite->same([$ids[2]], $find(':empty:'), 'Empty query failed.');
        $suite->same([$ids[0], $ids[1], $ids[3]], $find(':notempty:'), 'Non-empty query failed.');
        $suite->same([$ids[3]], $find('removed'), 'Removed identities must remain queryable.');
    });
}

$suite->test('Multi-choice JSON membership, combinations, exclusion and emptiness', function() use ($suite) {
    $field = ButtonBoxFixtures::field(VisualMultiChoice::class, ['options' => [
        ['label' => 'Zero', 'value' => '0'], ['label' => 'One', 'value' => 'one'], ['label' => 'Stone', 'value' => 'stone'],
    ]]);
    $section = ButtonBoxFixtures::section([$field]);
    $ids = [];
    foreach ([['0', 'one'], ['one'], ['stone'], [], ['removed']] as $values) {
        $entry = ButtonBoxFixtures::entry($section, [$field->handle => $values]);
        ButtonBoxFixtures::save($entry, $values !== ['removed']);
        $ids[] = $entry->id;
    }
    $find = fn($value) => Entry::find()->sectionId($section->id)->status(null)->{$field->handle}($value)->orderBy('id asc')->ids();
    $suite->same([$ids[0]], $find('0'));
    $suite->same([$ids[0], $ids[1]], $find('one'), 'Membership must not match substrings.');
    $suite->same([$ids[0]], $find(['and', '0', 'one']));
    $suite->same([$ids[0], $ids[1], $ids[2]], $find(['or', 'one', 'stone']));
    $suite->same([$ids[2], $ids[3], $ids[4]], $find(['not', 'one']));
    $suite->same([$ids[3]], $find(':empty:'));
    $suite->same([$ids[0], $ids[1], $ids[2], $ids[4]], $find(':notempty:'));
    $suite->same([$ids[4]], $find('removed'));
});

$suite->test('Rating queries compare and sort numerically, including null', function() use ($suite) {
    $field = ButtonBoxFixtures::field(Rating::class, ['max' => 20]);
    $section = ButtonBoxFixtures::section([$field]);
    $ids = [];
    foreach ([2, 10, 1, null] as $value) {
        $entry = ButtonBoxFixtures::entry($section, [$field->handle => $value]);
        ButtonBoxFixtures::save($entry);
        $ids[] = $entry->id;
    }
    $find = fn($value) => Entry::find()->sectionId($section->id)->status(null)->{$field->handle}($value)->orderBy('id asc')->ids();
    $suite->same([$ids[0], $ids[1]], $find('>= 2'));
    $suite->same([$ids[0]], $find(['and', '>= 2', '< 10']));
    $suite->same([$ids[1]], $find(10));
    $suite->same([$ids[3]], $find(':empty:'));
    $query = fn() => Entry::find()->sectionId($section->id)->status(null)->{$field->handle}(':notempty:');
    $suite->same([$ids[2], $ids[0], $ids[1]], $query()->orderBy([$field->handle => SORT_ASC])->ids());
    $suite->same([$ids[1], $ids[0], $ids[2]], $query()->orderBy([$field->handle => SORT_DESC])->ids());
});

$suite->finish();
