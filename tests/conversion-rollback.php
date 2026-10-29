<?php

use craft\events\FieldEvent;
use craft\events\FieldLayoutEvent;
use craft\services\Fields;
use verbb\buttonbox\ButtonBox;
use verbb\buttonbox\fields\ActionLinks;
use verbb\buttonbox\fields\Buttons;
use verbb\buttonbox\fields\Colours;
use verbb\buttonbox\fields\Rating;
use verbb\buttonbox\fields\Stars;
use verbb\buttonbox\fields\TextSize;
use verbb\buttonbox\fields\Triggers;

require __DIR__ . '/support/isolated.php';
require __DIR__ . '/support/ConversionFixtures.php';

$suite->test('Triggers conversion restores its original field and placements after layout write failure', function() use ($suite) {
    $field = ButtonBoxFixtures::field(Triggers::class, ['options' => [['label' => 'Docs', 'value' => '/docs', 'type' => 'link']]]);
    $rating = ButtonBoxFixtures::field(Rating::class);
    $section = ButtonBoxFixtures::section([$field, $rating]);
    ButtonBoxFixtures::save(ButtonBoxFixtures::entry($section, [$rating->handle => 4]));
    $second = ButtonBoxFixtures::section([$field]);
    $layoutUids = [$section->getEntryTypes()[0]->getFieldLayout()->uid, $second->getEntryTypes()[0]->getFieldLayout()->uid];
    Craft::$app->getProjectConfig()->flush();
    $before = ButtonBoxConversionFixtures::snapshot();
    $writes = 0;
    $handler = function(FieldLayoutEvent $event) use ($layoutUids, &$writes): void {
        if (in_array($event->layout->uid, $layoutUids, true) && ++$writes === 2) {
            throw new RuntimeException('Injected layout write failure');
        }
    };
    $fields = Craft::$app->getFields();
    $fields->on(Fields::EVENT_AFTER_SAVE_FIELD_LAYOUT, $handler);
    try {
        try {
            ButtonBox::$plugin->getConversions()->convert($field->handle);
            throw new RuntimeException('Expected layout failure was not reached.');
        } catch (RuntimeException $exception) {
            $suite->same('Injected layout write failure', $exception->getMessage());
        }
    } finally {
        $fields->off(Fields::EVENT_AFTER_SAVE_FIELD_LAYOUT, $handler);
    }
    $suite->same(2, $writes);
    $after = ButtonBoxConversionFixtures::snapshot();
    foreach ($before as $part => $expected) $suite->check($expected === $after[$part], "Rollback changed $part.");
    ButtonBoxFixtures::runInFreshProcess('rollback-readback.php', $before);
    ButtonBox::$plugin->getConversions()->convert($field->handle);
    $suite->same(ActionLinks::class, Craft::$app->getFields()->getFieldByUid($field->uid)::class);
    foreach ($layoutUids as $layoutUid) {
        $placement = Craft::$app->getFields()->getLayoutByUid($layoutUid)->getFieldByHandle($field->handle)->layoutElement;
        $suite->check($placement->alwaysRefresh(), 'Converted links must refresh.');
    }
});

foreach ([Buttons::class, Colours::class, TextSize::class, Stars::class, Triggers::class] as $class) {
    $suite->test('Legacy conversion rolls back a failed field write: ' . $class, function() use ($suite, $class) {
        $settings = $class === Stars::class ? [] : ['options' => [['label' => 'One', 'value' => $class === Triggers::class ? '/docs' : 'one', 'type' => 'link']]];
        $field = ButtonBoxFixtures::field($class, $settings);
        $section = ButtonBoxFixtures::section([$field]);
        $value = $class === Stars::class ? 4 : ($class === Triggers::class ? null : 'one');
        $entry = ButtonBoxFixtures::entry($section, [$field->handle => $value]);
        ButtonBoxFixtures::save($entry);
        Craft::$app->getProjectConfig()->flush();
        $before = ButtonBoxConversionFixtures::snapshot();
        $writes = 0;
        $handler = function(FieldEvent $event) use ($field, &$writes): void {
            if ($event->field->uid === $field->uid) {
                $writes++;
                throw new RuntimeException('Injected conversion failure');
            }
        };
        $fields = Craft::$app->getFields();
        $fields->on(Fields::EVENT_AFTER_SAVE_FIELD, $handler);
        try {
            try {
                ButtonBox::$plugin->getConversions()->convert($field->handle);
                throw new RuntimeException('Expected conversion failure was not reached.');
            } catch (RuntimeException $exception) {
                $suite->same('Injected conversion failure', $exception->getMessage());
            }
        } finally {
            $fields->off(Fields::EVENT_AFTER_SAVE_FIELD, $handler);
        }
        $suite->same(1, $writes);
        $after = ButtonBoxConversionFixtures::snapshot();
        foreach ($before as $part => $expected) $suite->check($expected === $after[$part], "Conversion rollback changed $part.");
        ButtonBoxFixtures::runInFreshProcess('rollback-readback.php', $before);
        ButtonBox::$plugin->getConversions()->convert($field->handle);
        $suite->same($value, ButtonBoxFixtures::raw(ButtonBoxFixtures::reload($entry->id), $field->handle));
    });
}

$suite->finish();
