<?php

use verbb\buttonbox\ButtonBox;
use verbb\buttonbox\fields\Buttons;
use verbb\buttonbox\fields\Colours;
use verbb\buttonbox\fields\Rating;
use verbb\buttonbox\fields\Stars;
use verbb\buttonbox\fields\TextSize;
use verbb\buttonbox\fields\VisualChoice;

require __DIR__ . '/support/isolated.php';

foreach ([Buttons::class, Colours::class, TextSize::class] as $class) {
    $suite->test('Saved legacy conversion preserves identity and content: ' . $class, function() use ($suite, $class) {
        $field = ButtonBoxFixtures::field($class, ['options' => [
            ['label' => 'First', 'value' => 'first', 'default' => true, 'showLabel' => true, 'imageUrl' => '/first.png', 'cssColour' => '#123456', 'pxVal' => 16],
            ['label' => 'Zero', 'value' => '0', 'default' => false, 'showLabel' => true, 'imageUrl' => '', 'cssColour' => '#ffffff', 'pxVal' => 24],
        ]]);
        $section = ButtonBoxFixtures::section([$field]);
        $entries = [];
        foreach (['first', '0', 'removed'] as $value) {
            $entry = ButtonBoxFixtures::entry($section, [$field->handle => $value]);
            ButtonBoxFixtures::save($entry, $value !== 'removed');
            $entries[] = [$entry, $value];
        }
        $placementUid = $entries[0][0]->getFieldLayout()->getFieldByHandle($field->handle)->layoutElement->uid;
        $plan = ButtonBox::$plugin->getConversions()->plan($field);
        $suite->same('ready', $plan['status']);
        ButtonBox::$plugin->getConversions()->convert($field->handle);
        $converted = Craft::$app->getFields()->getFieldByHandle($field->handle);
        $suite->same(VisualChoice::class, $converted::class);
        $suite->same($field->uid, $converted->uid);
        $suite->same($field->id, $converted->id);
        $suite->same($field->translationMethod, $converted->translationMethod);
        $expected = [];
        foreach ($entries as [$entry, $value]) {
            $fresh = ButtonBoxFixtures::reload($entry->id);
            $suite->same($placementUid, $fresh->getFieldLayout()->getFieldByHandle($field->handle)->layoutElement->uid);
            $suite->same($value, (string)$fresh->getFieldValue($field->handle));
            $suite->same($value !== 'removed', $fresh->getFieldValue($field->handle)->valid);
            ButtonBoxFixtures::save($fresh, $value !== 'removed');
            $expected[] = ['id' => $entry->id, 'handle' => $field->handle, 'class' => VisualChoice::class, 'stored' => $value, 'serialized' => $value];
        }
        $first = ButtonBoxFixtures::reload($entries[0][0]->id)->getFieldValue($field->handle);
        if ($class === Colours::class) $suite->same('#123456', $first->color);
        if ($class === TextSize::class) $suite->same(16.0, $first->surface->size);
        if ($class === Buttons::class) $suite->same('/first.png', $first->imageUrl);
        ButtonBoxFixtures::assertFreshProcess($expected);
    });
}

$suite->test('Buttons conversion carries image-only labels and warns about uncopied settings', function() use ($suite) {
    $option = fn(string $value, string $imageUrl, bool $showLabel, string $imageAlign = 'left') => ['label' => ucfirst($value), 'value' => $value, 'default' => false, 'imageUrl' => $imageUrl, 'showLabel' => $showLabel, 'imageAlign' => $imageAlign];
    $plan = fn(array $config) => ButtonBox::$plugin->getConversions()->plan(new Buttons(['name' => 'Buttons', 'handle' => 'buttons' . bin2hex(random_bytes(3))] + $config));

    $imageOnly = $plan(['options' => [$option('left', '/left.png', false), $option('right', '/right.png', false), $option('text', '', true)]]);
    $suite->same('ready', $imageOnly['status']);
    $suite->same(['showLabels' => false, 'labelTooltips' => true], $imageOnly['settings']['appearance']);
    $suite->same([], $imageOnly['warnings']);

    $labelled = $plan(['options' => [$option('left', '/left.png', true), $option('text', '', false)]]);
    $suite->same([], $labelled['settings']['appearance']);
    $suite->same([], $labelled['warnings']);

    $mixed = $plan(['displayFullwidth' => true, 'options' => [$option('left', '/left.png', false), $option('right', '/right.png', true, 'right')]]);
    $suite->same('ready', $mixed['status']);
    $suite->same([], $mixed['settings']['appearance']);
    $suite->same(3, count($mixed['warnings']));

    // Hidden labels make alignment irrelevant, so only a shown label warns about it.
    $hidden = $plan(['options' => [$option('left', '/left.png', false, 'right')]]);
    $suite->same([], $hidden['warnings']);
});

$suite->test('Colours conversion normalises hex values and blocks named colours', function() use ($suite) {
    $plan = fn(string $color) => ButtonBox::$plugin->getConversions()->plan(new Colours(['name' => 'Colours', 'handle' => 'colours' . bin2hex(random_bytes(3)), 'options' => [['label' => 'A', 'value' => 'a', 'cssColour' => $color, 'default' => false]]]));
    foreach (['#2563EB', '#fff', '#FFF', '#2563eb'] as $color) {
        $suite->same('ready', $plan($color)['status'], $color);
    }
    $suite->same('blocked', $plan('red')['status']);
});

$suite->test('Stars inventory reads actual layout-keyed content, including empty and invalid rows', function() use ($suite) {
    $field = ButtonBoxFixtures::field(Stars::class, ['totalStars' => 5]);
    $section = ButtonBoxFixtures::section([$field]);
    foreach ([null, 0, 4, 6, '2.5', 'invalid'] as $value) {
        $entry = ButtonBoxFixtures::entry($section, [$field->handle => $value]);
        ButtonBoxFixtures::save($entry, false);
    }
    $plan = ButtonBox::$plugin->getConversions()->plan($field);
    $suite->same(['empty' => 1, 'zero' => 1, 'valid' => 1, 'outOfRange' => 3], $plan['contentCounts']);
    $suite->same('blocked', $plan['status']);
    try {
        ButtonBox::$plugin->getConversions()->convert($field->handle);
        throw new RuntimeException('An invalid Stars field was converted.');
    } catch (RuntimeException $exception) {
        $suite->check(str_contains($exception->getMessage(), 'Out-of-range'), 'Unexpected conversion outcome.');
    }
    $suite->same(Stars::class, Craft::$app->getFields()->getFieldByHandle($field->handle)::class);
});

$suite->test('Required Stars zero blocks conversion without altering content', function() use ($suite) {
    $field = ButtonBoxFixtures::field(Stars::class);
    $section = ButtonBoxFixtures::section([$field], [$field->handle]);
    $entry = ButtonBoxFixtures::entry($section, [$field->handle => 0]);
    ButtonBoxFixtures::save($entry, false);
    $plan = ButtonBox::$plugin->getConversions()->plan($field);
    $suite->same('blocked', $plan['status']);
    $suite->same(1, $plan['contentCounts']['zero']);
    $suite->check(str_contains(implode(' ', $plan['blockers']), 'Required Stars'), 'Required-zero blocker was lost.');
    $suite->same(0, ButtonBoxFixtures::raw($entry, $field->handle));
});

$suite->test('Optional Stars zero does not block an unrelated required placement', function() use ($suite) {
    $field = ButtonBoxFixtures::field(Stars::class);
    $optional = ButtonBoxFixtures::section([$field]);
    $required = ButtonBoxFixtures::section([$field], [$field->handle]);
    ButtonBoxFixtures::save(ButtonBoxFixtures::entry($optional, [$field->handle => 0]));
    ButtonBoxFixtures::save(ButtonBoxFixtures::entry($required, [$field->handle => 4]));
    $plan = ButtonBox::$plugin->getConversions()->plan($field);
    $suite->same(['empty' => 0, 'zero' => 1, 'valid' => 1, 'outOfRange' => 0], $plan['contentCounts']);
    $suite->same('ready', $plan['status']);
});

$suite->test('Stars conversion keeps positive values and maps zero to null on resave', function() use ($suite) {
    $field = ButtonBoxFixtures::field(Stars::class, ['totalStars' => 7]);
    $section = ButtonBoxFixtures::section([$field]);
    $entries = [];
    foreach ([0, 7] as $value) {
        $entry = ButtonBoxFixtures::entry($section, [$field->handle => $value]);
        ButtonBoxFixtures::save($entry);
        $entries[] = [$entry, $value];
    }
    $suite->same(['empty' => 0, 'zero' => 1, 'valid' => 1, 'outOfRange' => 0], ButtonBox::$plugin->getConversions()->plan($field)['contentCounts']);
    ButtonBox::$plugin->getConversions()->convert($field->handle);
    $converted = Craft::$app->getFields()->getFieldByHandle($field->handle);
    $suite->same(Rating::class, $converted::class);
    $suite->same($field->uid, $converted->uid);
    $suite->same(7, $converted->max);
    $expected = [];
    foreach ($entries as [$entry, $raw]) {
        $value = $raw === 0 ? null : $raw;
        $fresh = ButtonBoxFixtures::reload($entry->id);
        $suite->same($value, $fresh->getFieldValue($field->handle));
        $fresh->setFieldValue($field->handle, $value);
        ButtonBoxFixtures::save($fresh);
        $expected[] = ['id' => $entry->id, 'handle' => $field->handle, 'class' => Rating::class, 'stored' => $value, 'serialized' => $value];
    }
    ButtonBoxFixtures::assertFreshProcess($expected);
});

$suite->finish();
