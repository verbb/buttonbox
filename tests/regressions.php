<?php

use craft\elements\Entry;
use verbb\buttonbox\fields\Rating;
use verbb\buttonbox\fields\VisualMultiChoice;
use yii\validators\Validator;

require ($argv[1] ?? throw new RuntimeException('Pass a Craft application path.')) . '/bootstrap.php';
$app = require CRAFT_VENDOR_PATH . '/craftcms/cms/bootstrap/console.php';
$app->init();
require __DIR__ . '/support/Suite.php';
$suite = new ButtonBoxTestSuite();
$existing = new Entry(['id' => 123, 'siteSettingsId' => 123]);
$existing->setIsFresh(false);

foreach ([['one', 'removed'], ['removed'], ['0', 'removed', 'one']] as $values) {
    $suite->test('Multi-choice retains unavailable identities: ' . json_encode($values), function() use ($suite, $values, $existing) {
        $field = new VisualMultiChoice(['options' => [['label' => 'One', 'value' => 'one'], ['label' => 'Zero', 'value' => '0']]]);
        $normalized = $field->normalizeValue($values, $existing);
        $stored = $field->serializeValue($normalized, $existing);
        $expected = array_values(array_filter(['one', '0'], fn($value) => in_array($value, $values, true)));
        $expected[] = 'removed';
        $suite->same($expected, $stored);
        $restored = iterator_to_array($field->normalizeValue($stored, $existing));
        $suite->same('removed', end($restored)->value);
        $suite->same(false, end($restored)->valid);
    });
}
$suite->test('Multi-choice retains Craft option order, deduplication and empty storage', function() use ($suite, $existing) {
    $field = new VisualMultiChoice(['options' => [['label' => 'One', 'value' => 'one'], ['label' => 'Two', 'value' => 'two']]]);
    $suite->same(['one', 'two', 'removed'], $field->serializeValue($field->normalizeValue(['two', 'one', 'one', 'removed', 'removed'], $existing), $existing));
    $suite->same(null, $field->serializeValue($field->normalizeValue([], $existing), $existing));
    $suite->same(1, count($field->normalizeValue(['one', 'one'], $existing)), 'Duplicate identities must not count as multiple selections.');
});
$suite->test('Rating applies defaults only to missing fresh values', function() use ($suite, $existing) {
    $field = new Rating(['defaultValue' => 3]);
    $suite->same(3, $field->normalizeValue(null, null));
    $suite->same(null, $field->normalizeValue(null, $existing));
    foreach (['', 0, '0'] as $empty) {
        $suite->same(null, $field->normalizeValue($empty, null), 'Explicit clear must not reapply a default.');
        $suite->same(null, $field->normalizeValue($empty, $existing));
    }
});
foreach (['2.9', 2.9, 'not-a-rating', true, [], '999999999999999999999999999'] as $raw) {
    $suite->test('Rating rejects invalid input ' . json_encode($raw), function() use ($suite, $existing, $raw) {
        $field = new Rating(['max' => 5]);
        $normalized = $field->normalizeValue($raw, $existing);
        $rule = $field->getElementValidationRules()[0];
        $type = array_shift($rule);
        $validator = Validator::createValidator($type, new Entry(), ['rating'], $rule);
        $suite->check($normalized !== null && !$validator->validate($normalized), 'Invalid input became a valid integer or empty value.');
    });
}
$suite->test('Rating accepts integer identities and rejects out-of-range values', function() use ($suite, $existing) {
    $field = new Rating(['max' => 5]);
    foreach ([1, '1', 5, '5'] as $raw) {
        $suite->same((int)$raw, $field->normalizeValue($raw, $existing));
    }
    $suite->same(-1, $field->normalizeValue('-1', $existing));
    $suite->same(6, $field->normalizeValue('6', $existing));
});
$suite->finish();
