<?php

use craft\elements\Entry;
use verbb\buttonbox\events\DefineVisualOptionsEvent;
use verbb\buttonbox\fields\VisualChoice;
use verbb\buttonbox\fields\VisualMultiChoice;
use verbb\buttonbox\models\OptionSet;

$basePath = $argv[1] ?? null;
if (!$basePath || !is_file($basePath . '/bootstrap.php')) {
    throw new RuntimeException('Pass the installed Craft project path.');
}
require $basePath . '/bootstrap.php';
$app = require CRAFT_VENDOR_PATH . '/craftcms/cms/bootstrap/console.php';
$app->init();

function dropdownCheck(bool $condition, string $message): void
{
    if (!$condition) throw new RuntimeException($message);
}

function dropdownDom(string $html): DOMXPath
{
    $dom = new DOMDocument();
    @$dom->loadHTML('<?xml encoding="UTF-8">' . $html);
    return new DOMXPath($dom);
}

$options = [
    ['label' => 'Blue', 'value' => 'blue & "<value>"', 'surface' => ['mode' => 'solid', 'value' => '#299bd6'], 'default' => true],
    ['label' => 'Small', 'value' => 'small', 'surface' => ['mode' => 'text', 'size' => 14]],
    ['label' => 'Heading', 'value' => 'heading', 'surface' => ['mode' => 'text', 'size' => 28]],
    ['label' => 'Disabled', 'value' => 'disabled', 'disabled' => true, 'explanation' => 'Not in this theme'],
];
$field = new VisualChoice(['name' => 'Colour or text size', 'handle' => 'dropdownTest', 'presentation' => 'dropdown', 'options' => $options]);
dropdownCheck($field->validate(), json_encode($field->getErrors()));
dropdownCheck(!(new VisualMultiChoice(['presentation' => 'dropdown']))->validate(['presentation']), 'Multi-choice accepted a single-choice presentation.');
dropdownCheck(!str_contains((new VisualMultiChoice())->getSettingsHtml(), 'value="dropdown"'), 'Multi-choice advertises Dropdown.');
dropdownCheck(str_contains($field->getSettingsHtml(), 'value="dropdown"'), 'Single-choice settings lost Dropdown.');

$value = $field->normalizeValue($options[0]['value'], null);
$html = $field->getInputHtml($value, null);
$dom = dropdownDom($html);
dropdownCheck(str_contains($html, 'background-color:#299bd6'), 'Solid swatch artwork was lost.');
dropdownCheck($dom->query('//pk-option/span[@slot="start"]')->length === 1, 'The swatch is not mirrored through the supported decoration slot.');
dropdownCheck($dom->query('//pk-select[@name]')->length === 0 && $dom->query('//input[@name]')->length === 1, 'Submission needs exactly one native input.');
dropdownCheck($dom->query('//pk-option[@disabled]')->length === 1, 'Disabled options remain selectable.');
dropdownCheck(str_contains($html, 'Not in this theme'), 'Disabled reason was lost.');
$encoded = $dom->query('//input')->item(0)->getAttribute('value');
dropdownCheck((string)$field->normalizeValue($encoded, null) === $options[0]['value'], 'Encoded identities did not round-trip.');
dropdownCheck((new VisualChoice($field->getSettings()))->presentation === 'dropdown', 'Presentation did not round-trip.');

$field->appearance = ['showLabels' => false, 'labelTooltips' => true, 'size' => 'lg', 'textColor' => '#123456', 'radius' => '0'];
$html = $field->getInputHtml($field->normalizeValue('heading', null), null);
dropdownCheck(str_contains($html, '--buttonbox-dropdown-font:28px') && str_contains($html, '--buttonbox-visual-font-size:14px'), 'Selected and menu typography previews were lost.');
dropdownCheck(str_contains($html, '--buttonbox-choice-text:#123456') && str_contains($html, '--buttonbox-choice-radius:0px'), 'Appearance overrides were lost.');
dropdownCheck(dropdownDom($html)->query('//pk-option[@label="Heading"]')->length === 1, 'Labels must remain available in Dropdown.');

$cleared = $field->normalizeValue('', null);
dropdownCheck($cleared->value === null && $field->isValueEmpty($cleared, new Entry()), 'Clearing reapplied the default or became an invalid option.');
dropdownCheck(!str_contains($field->getInputHtml($cleared, null), 'Unavailable:'), 'Cleared selections acquired an orphan warning.');
dropdownCheck((string)$field->normalizeValue(null, null) === $options[0]['value'], 'Fresh defaults stopped working.');
$existing = new Entry(['id' => 123, 'siteSettingsId' => 123]);
$existing->setIsFresh(false);
dropdownCheck($field->normalizeValue(null, $existing)->value === null, 'Existing empty content acquired a default.');

$orphan = $field->normalizeValue('removed', $existing);
$html = $field->getInputHtml($orphan, $existing);
$dom = dropdownDom($html);
dropdownCheck(!$orphan->valid && (string)$orphan === 'removed', 'An orphan was replaced.');
dropdownCheck($dom->query('//pk-select[@invalid]')->length === 1 && str_contains($html, 'Unavailable: removed'), 'An orphan lost its selected warning.');
dropdownCheck($dom->query('//pk-option[@disabled and contains(@label,"Unavailable:")]')->length === 1, 'Removed options can be selected again.');
$disabled = dropdownDom($field->getInputHtml($field->normalizeValue('disabled', null), null));
dropdownCheck($disabled->query('//pk-select[@invalid]')->length === 1, 'An existing disabled selection is not identified.');

$static = dropdownDom($field->getStaticHtml($value, new Entry()));
dropdownCheck($static->query('//pk-select[@disabled]')->length === 1 && $static->query('//input[@disabled]')->length === 1, 'Static output is interactive or submits content.');
$nested = dropdownDom(Craft::$app->getView()->namespaceInputs($field->getInputHtml($value, null), 'fields[nested][choice]'));
dropdownCheck($nested->query('//input')->item(0)->getAttribute('name') === 'fields[nested][choice][dropdownTest]', 'Native submission was not namespaced.');

$set = new OptionSet(['name' => 'Dropdown set', 'handle' => 'dropdownSet', 'presentation' => 'dropdown', 'options' => $options]);
dropdownCheck($set->validate() && $set->createField()->presentation === 'dropdown', 'Option sets cannot retain the presentation.');
$field->optionSource = 'provider';
$field->on(VisualChoice::EVENT_DEFINE_VISUAL_OPTIONS, function(DefineVisualOptionsEvent $event) {
    $event->options = [['label' => 'Dynamic colour', 'value' => 'dynamic', 'color' => '#123456']];
});
dropdownCheck(str_contains($field->getInputHtml('dynamic', null), 'Dynamic colour'), 'Provider options did not render.');
dropdownCheck($field->getContentGqlType()->name === 'ButtonBoxVisualOption', 'Dropdown changed the GraphQL output.');
echo "Button Box Dropdown integration tests passed.\n";
