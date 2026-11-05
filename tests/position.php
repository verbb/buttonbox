<?php

use craft\elements\Entry;
use verbb\buttonbox\fields\Position;
use verbb\buttonbox\fields\data\PositionData;

$craftBasePath = $argv[1] ?? null;
if (!$craftBasePath || !is_file($craftBasePath . '/bootstrap.php')) {
    fwrite(STDERR, "Usage: php tests/position.php /path/to/craft\n");
    exit(64);
}
require $craftBasePath . '/bootstrap.php';
$app = require CRAFT_VENDOR_PATH . '/craftcms/cms/bootstrap/console.php';
$app->init();

function positionAssert(bool $condition, string $message): void
{
    if (!$condition) {
        throw new RuntimeException($message);
    }
}

$legacy = new Position(['name' => 'Legacy', 'handle' => 'positionTest', 'mode' => 'horizontal', 'allowedPositions' => ['left', 'right'], 'defaultPosition' => 'right']);
positionAssert(count($legacy->options) === 3 && $legacy->options[1]['disabled'], 'Legacy restrictions must retain the middle cell.');
positionAssert($legacy->getDefaultValue() === 'right', 'Legacy default was not imported.');
positionAssert($legacy->normalizeValue('right', null)->x === 1, 'Named alignment metadata changed.');
positionAssert(!$legacy->normalizeValue('center', null)->valid, 'Disabled stored positions must remain unavailable.');
$staleMode = new Position(['mode' => 'horizontal', 'allowedPositions' => ['top-left']]);
positionAssert(!array_filter($staleMode->options, fn($option) => $option['disabled']), 'Legacy mode changes must retain their complete-mode fallback.');
$settings = $legacy->getSettings();
positionAssert(isset($settings['mode'], $settings['columns'], $settings['options']), 'Editable settings are missing from serialization.');
positionAssert(!isset($settings['allowedPositions'], $settings['defaultPosition']), 'Retired settings must not override editable options.');
$restored = new Position($settings + ['name' => 'Restored', 'handle' => 'restoredPosition']);
positionAssert($restored->options === $legacy->options && $restored->getDefaultValue() === 'right', 'Settings round-trip changed options.');

$rows = [];
for ($i = 0; $i < 16; $i++) {
    $rows[] = ['label' => "Position $i", 'value' => "custom-$i", 'disabled' => $i === 9, 'default' => $i === 10];
}
$field = new Position(['name' => 'Custom', 'handle' => 'customPosition', 'columns' => 8, 'options' => $rows]);
positionAssert($field->validate(), 'A custom 8-column grid should validate: ' . implode(' ', $field->getErrorSummary(true)));
$value = $field->normalizeValue('custom-10', null);
positionAssert($value instanceof PositionData && $value->row === 2 && $value->column === 3, 'Custom coordinates do not match the grid.');
positionAssert($value->horizontal === null && $value->vertical === null && $value->x === null && $value->y === null, 'Custom values must not invent alignment meanings.');
positionAssert($field->normalizeValue('base64:' . base64_encode('custom-10'), null)->value === 'custom-10', 'Encoded input did not round-trip.');
positionAssert($field->normalizeValue(null, null)->value === 'custom-10', 'Fresh input did not use the default.');
$existing = new Entry(['id' => 123, 'siteSettingsId' => 123]);
$existing->setIsFresh(false);
positionAssert($field->normalizeValue(null, $existing)->value === null, 'An existing empty value must not receive a default.');
positionAssert($field->normalizeValue('', null)->value === null, 'Explicitly empty input must stay empty.');
$html = $field->getInputHtml($value, null);
positionAssert(substr_count($html, 'type="radio"') === 16 && str_contains($html, 'data-columns="8"'), 'Custom input geometry is incorrect.');
positionAssert(str_contains($html, 'is-disabled'), 'Disabled cells disappeared from the input.');
positionAssert(substr_count($html, '<pk-tooltip ') === 16, 'Position tooltips should be enabled by default.');
positionAssert(str_contains($html, 'content="Position 9"'), 'A disabled position without a reason should only show its label.');
$field->options[9]['explanation'] = '   ';
positionAssert(str_contains($field->getInputHtml($value, null), 'content="Position 9"'), 'A blank reason should not add tooltip text.');
$field->options[9]['explanation'] = 'Reserved for featured content';
positionAssert(str_contains($field->getInputHtml($value, null), 'content="Position 9 — Reserved for featured content"'), 'An explicit unavailable reason should appear in the tooltip.');
$field->options[9]['explanation'] = '';
$field->showTooltips = false;
$withoutTooltips = $field->getInputHtml($value, null);
positionAssert(!str_contains($withoutTooltips, '<pk-tooltip'), 'Disabled tooltips still render.');
positionAssert(str_contains($withoutTooltips, 'aria-label="Position 9"') && str_contains($withoutTooltips, 'visually-hidden">Position 10'), 'Turning off tooltips removed accessible position labels.');
positionAssert(!str_contains($field->getStaticHtml($value, $existing), '<pk-tooltip'), 'Static rendering ignores the tooltip setting.');
$restoredWithoutTooltips = new Position($field->getSettings());
positionAssert(!$restoredWithoutTooltips->showTooltips, 'The tooltip preference was lost when settings were restored.');
$field->showTooltips = true;
$field->appearance = ['size' => 'xl', 'backgroundColor' => '#f0e8ff', 'textColor' => '#635070', 'selectionColor' => '#8a32c2'];
positionAssert($field->validate(['appearance']), 'Valid Position appearance settings were rejected.');
$styledHtml = $field->getInputHtml($value, null);
positionAssert(str_contains($styledHtml, '--pk-btn-height-xl') && str_contains($styledHtml, '--buttonbox-choice-background:#f0e8ff') && str_contains($styledHtml, '--buttonbox-choice-text:#635070') && str_contains($styledHtml, '--buttonbox-choice-accent:#8a32c2'), 'Position appearance settings did not reach the author input.');
positionAssert(str_contains($field->getStaticHtml($value, $existing), '--buttonbox-choice-accent:#8a32c2'), 'Static Position output lost its appearance.');
$appearanceRestored = new Position($field->getSettings());
positionAssert($appearanceRestored->appearance === $field->appearance, 'Position appearance settings did not round-trip.');
$appearanceSettings = $field->getSettingsHtml();
positionAssert(substr_count($appearanceSettings, 'data-bb-appearance-row=') === 6 && str_contains($appearanceSettings, 'data-bb-show-tooltips') && str_contains($appearanceSettings, 'data-bb-show-clear') && !str_contains($appearanceSettings, 'appearance[borderWidth]') && !str_contains($appearanceSettings, 'name="imageFit"'), 'Position must expose its tooltip and clear-button switches and four appearance controls.');
$field->appearance['borderWidth'] = '8';
positionAssert(!str_contains($field->getAppearanceStyle(), '--buttonbox-choice-border-width'), 'Position applied an unsupported appearance override.');
$field->appearance['selectionColor'] = 'red;display:none';
positionAssert(!$field->validate(['appearance']) && $field->getAppearanceStyle() === '', 'Invalid Position appearance must fail validation and not produce styles.');
$field->appearance = ['size' => 'unsupported'];
positionAssert(!$field->validate(['appearance']), 'An unsupported Position size was accepted.');
$field->appearance = [];
positionAssert($field->validate(['appearance']), 'Resetting Position appearance should restore valid defaults.');
positionAssert(str_contains($field->getStaticHtml($value, $existing), 'buttonbox-position--static'), 'Static rendering lost Position geometry.');
$orphan = $field->normalizeValue('removed', $existing);
positionAssert(!$orphan->valid && $orphan->value === 'removed', 'Orphaned values were replaced.');
positionAssert(str_contains($field->getInputHtml($orphan, $existing), 'Unavailable: removed'), 'Orphaned values lack an input diagnostic.');
positionAssert($field->serializeValue($orphan, $existing) === 'removed', 'Orphaned storage changed.');
$disabled = $field->normalizeValue('custom-9', $existing);
positionAssert(!$disabled->valid && $disabled->disabled && $disabled->row === 2 && $disabled->column === 2, 'Disabled value metadata is incorrect.');
$validationElement = new class extends Entry {
    public mixed $positionValue;
    public function getFieldValue(string $fieldHandle): mixed
    {
        return $this->positionValue;
    }
};
$validationElement->positionValue = $disabled;
$rules = $field->getElementValidationRules();
$rules[0][0]($validationElement);
positionAssert($validationElement->hasErrors($field->handle), 'Disabled values bypassed element validation.');

foreach (Position::getPresets() as $preset) {
    $presetField = new Position(['name' => 'Preset', 'handle' => 'presetPosition', 'mode' => $preset['mode'], 'columns' => $preset['columns'], 'options' => $preset['options']]);
    positionAssert($presetField->validate(), 'A built-in preset failed validation.');
    positionAssert(!str_contains($presetField->getSettingsHtml(), 'data-bb-source'), 'Position settings exposed Visual Choice sources.');
}
$invalidCases = [
    [],
    [['label' => '', 'value' => 'missing-label']],
    [['label' => 'One', 'value' => 'same'], ['label' => 'Two', 'value' => 'same']],
    [['label' => 'One', 'value' => 'one', 'default' => true], ['label' => 'Two', 'value' => 'two', 'default' => true]],
    [['label' => 'One', 'value' => 'one', 'disabled' => true]],
    [['label' => 'One', 'value' => 'one', 'disabled' => true, 'default' => true], ['label' => 'Two', 'value' => 'two']],
];
foreach ($invalidCases as $options) {
    $invalid = new Position(['name' => 'Invalid', 'handle' => 'invalidPosition', 'options' => $options]);
    $before = $invalid->options;
    positionAssert(!$invalid->validate(['options']) && $invalid->hasErrors('options'), 'Invalid settings were accepted.');
    positionAssert($before === $invalid->options, 'Validation mutated editable rows.');
}
$zero = new Position(['options' => [['label' => 'Zero', 'value' => '0', 'default' => true]]]);
positionAssert($zero->normalizeValue('0', null)->x === null, 'Zero must remain a custom identity, not an empty alignment.');
positionAssert($zero->getDefaultValue() === '0' && $zero->normalizeValue('base64:MA==', null)->value === '0', 'Zero identity was lost.');
$field->columns = 0;
positionAssert(!$field->validate(['columns']), 'Zero columns were accepted.');
$field->mode = 'horizontal';
positionAssert($field->validate(['columns']), 'An inactive grid setting blocked a horizontal arrangement.');
$gql = $field->getContentGqlType()->getFields();
positionAssert(isset($gql['row'], $gql['column'], $gql['disabled']), 'GraphQL lacks custom-grid metadata.');
echo "Position integration tests passed.\n";
