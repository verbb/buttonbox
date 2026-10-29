<?php

use verbb\buttonbox\fields\Position;
use verbb\buttonbox\fields\Rating;
use verbb\buttonbox\fields\VisualChoice;
use verbb\buttonbox\fields\VisualMultiChoice;
use verbb\buttonbox\fields\WidthChoice;

require __DIR__ . '/support/isolated.php';

$submissions = json_decode(file_get_contents($argv[1]), true, 512, JSON_THROW_ON_ERROR);
if (!$submissions) throw new RuntimeException('No browser submissions provided.');
$options = [
    ['label' => 'Alpha', 'value' => 'alpha', 'default' => true],
    ['label' => 'Beta', 'value' => 'beta & "quoted"'],
];
$fields = [
    'choice' => ButtonBoxFixtures::field(VisualChoice::class, ['options' => $options]),
    'multi' => ButtonBoxFixtures::field(VisualMultiChoice::class, ['options' => $options]),
    'dropdown' => ButtonBoxFixtures::field(VisualChoice::class, ['options' => $options, 'presentation' => 'dropdown']),
    'width' => ButtonBoxFixtures::field(WidthChoice::class),
    'position' => ButtonBoxFixtures::field(Position::class),
    'rating' => ButtonBoxFixtures::field(Rating::class, ['defaultValue' => 2]),
];
$section = ButtonBoxFixtures::section(array_values($fields));
$initial = ['choice' => 'alpha', 'multi' => ['alpha'], 'dropdown' => 'alpha', 'width' => '50', 'position' => 'center', 'rating' => 2];
foreach ($submissions as $submission) {
    $suite->test($submission['name'], function() use ($submission, $fields, $section, $suite, $initial) {
        // Parse the browser's actual encoded HTTP form query, including duplicate
        // fallback/radio keys and checkbox arrays, before Craft request normalisation.
        parse_str($submission['query'], $request);
        $posted = $request['fields']['nested'];
        foreach ([false, true] as $existing) {
            $values = [];
            foreach ($fields as $key => $field) $values[$field->handle] = $initial[$key];
            $entry = ButtonBoxFixtures::entry($section, $values);
            if ($existing) ButtonBoxFixtures::save($entry);
            foreach ($fields as $key => $field) {
                $suite->check(array_key_exists($key, $posted), 'Submission omitted ' . $key);
                $entry->setFieldValueFromRequest($field->handle, $posted[$key]);
            }
            ButtonBoxFixtures::save($entry);
            $readback = [];
            foreach ($fields as $key => $field) {
                $expected = $submission['expected'][$key];
                $suite->same($expected, ButtonBoxFixtures::raw($entry, $field->handle), $key . ' stored value');
                $readback[] = ['id' => $entry->id, 'handle' => $field->handle, 'class' => $field::class, 'stored' => $expected, 'serialized' => $expected];
            }
            ButtonBoxFixtures::assertFreshProcess($readback);
        }
    });
}
$suite->finish();
