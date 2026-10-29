<?php

use verbb\buttonbox\fields\VisualChoice;
use verbb\buttonbox\fields\VisualMultiChoice;
use verbb\buttonbox\models\OptionSet;

use craft\elements\Entry;

$basePath = $argv[1] ?? null;
if (!$basePath || !is_file($basePath . '/bootstrap.php')) {
    throw new RuntimeException('Pass the installed Craft project path.');
}
require $basePath . '/bootstrap.php';
$app = require CRAFT_VENDOR_PATH . '/craftcms/cms/bootstrap/console.php';
$app->init();

function check(bool $condition, string $message): void
{
    if (!$condition) {
        throw new RuntimeException($message);
    }
}

function elements(string $html): DOMXPath
{
    $document = new DOMDocument();
    $previous = libxml_use_internal_errors(true);
    $document->loadHTML('<?xml encoding="UTF-8">' . $html);
    libxml_clear_errors();
    libxml_use_internal_errors($previous);
    return new DOMXPath($document);
}

$options = [
    ['label' => 'Align left', 'value' => 'left', 'icon' => 'align-left'],
    ['label' => 'Text only', 'value' => 'text'],
    ['label' => 'Landscape', 'value' => 'image', 'imageUrl' => '/landscape.jpg', 'imageAlt' => 'Mountain landscape'],
    ['label' => 'Ocean', 'value' => 'ocean', 'surface' => ['mode' => 'solid', 'value' => '#123456']],
];

foreach ([VisualChoice::class, VisualMultiChoice::class] as $class) {
    foreach (array_diff(VisualChoice::PRESENTATIONS, ['width', 'dropdown']) as $presentation) {
        $field = new $class(['name' => 'Labels', 'handle' => 'labelTest', 'options' => $options, 'presentation' => $presentation]);
        $visible = elements($field->getInputHtml(null, null));
        check($visible->query('//span[@class="buttonbox-visual__label"]')->length === 4, 'Default labels were hidden.');
        check($visible->query('//pk-tooltip')->length === 0, 'Default visible labels acquired tooltips.');

        $field->appearance = ['showLabels' => '0'];
        check(elements($field->getInputHtml(null, null))->query('//pk-tooltip')->length === 0, 'Hiding labels unexpectedly enabled tooltips.');
        foreach (['0' => 0, '1' => 4] as $mode => $count) {
            $field->appearance['labelTooltips'] = (string)$mode;
            foreach ([false, true] as $static) {
                $html = $static ? $field->getStaticHtml(null, new Entry()) : $field->getInputHtml(null, null);
                $xpath = elements($html);
                $labels = $xpath->query('//span[@class="buttonbox-visual__label"]');
                check($labels->length === 1 && $labels->item(0)->textContent === 'Text only', 'Hidden labels or text-only fallback failed.');
                check($xpath->query('//pk-tooltip')->length === $count, 'Tooltip policy failed for ' . $presentation . '/' . $mode);
                check($xpath->query('//input[@aria-label]')->length === 4, 'An option lost its accessible name.');
                check($xpath->query('//label[.//img]/input')->item(0)->getAttribute('aria-label') === 'Landscape', 'Image alt replaced the option name.');
                check($xpath->query('//img')->item(0)->getAttribute('alt') === 'Mountain landscape', 'Image alternative text changed.');
                foreach ($xpath->query('//pk-tooltip') as $tooltip) {
                    $target = $tooltip->getAttribute('for');
                    check($xpath->query('//*[@id="' . $target . '"]')->length === 1, 'Tooltip target is missing.');
                    check($tooltip->getAttribute('id') === $target . '-tooltip', 'Keyboard tooltip lookup is inconsistent.');
                }
            }
        }
        $field->appearance = ['showLabels' => '1', 'labelTooltips' => '1'];
        check(elements($field->getInputHtml(null, null))->query('//pk-tooltip')->length === 4, 'Enabled tooltips did not apply to visible labels.');
    }
}

$field = new VisualChoice([
    'name' => 'Disabled labels', 'handle' => 'disabledLabels',
    'appearance' => ['showLabels' => false, 'labelTooltips' => '0'],
    'options' => [['label' => 'Unavailable icon', 'value' => 'disabled', 'icon' => 'star', 'disabled' => true, 'explanation' => 'Requires approval', 'description' => 'A description']],
]);
$xpath = elements($field->getInputHtml(null, null));
check($xpath->query('//pk-tooltip')->item(0)->getAttribute('content') === 'Requires approval', 'Disabling label tooltips suppressed the unavailable reason.');
check($xpath->query('//label[@tabindex="0"]')->length === 1, 'Disabled tooltip cannot receive keyboard focus.');
$descriptionId = $xpath->query('//input')->item(0)->getAttribute('aria-describedby');
check($xpath->query('//*[@id="' . $descriptionId . '"]')->item(0)->textContent === 'A description — Requires approval', 'Accessible descriptions were lost.');
$field->appearance['labelTooltips'] = true;
check(elements($field->getInputHtml(null, null))->query('//pk-tooltip')->item(0)->getAttribute('content') === 'Unavailable icon — Requires approval', 'Label and unavailable reason produced competing tooltips.');
$field->options[0]['explanation'] = '   ';
check(elements($field->getInputHtml(null, null))->query('//pk-tooltip')->item(0)->getAttribute('content') === 'Unavailable icon', 'Blank reason produced a tooltip suffix.');

$field->options = $options;
$nested = Craft::$app->getView()->namespaceInputs($field->getInputHtml(null, null), 'fields[nested][choice]');
$xpath = elements($nested);
foreach ($xpath->query('//pk-tooltip') as $tooltip) {
    check($xpath->query('//*[@id="' . $tooltip->getAttribute('for') . '"]')->length === 1, 'Namespaced tooltip target was lost.');
    check($tooltip->getAttribute('id') === $tooltip->getAttribute('for') . '-tooltip', 'Namespaced keyboard tooltip lookup failed.');
}
$orphan = elements($field->getInputHtml($field->normalizeValue('removed', null), null));
check($orphan->query('//span[@class="buttonbox-visual__label" and contains(text(), "Unavailable:")]')->length === 1, 'Removed values lost their visible warning.');
$settings = $field->getSettingsHtml();
check(str_contains($settings, 'name="appearance[showLabels]" value="0"'), 'Unchecked labels have no submitted value.');
check(str_contains($settings, 'name="appearance[labelTooltips]" value="0"'), 'Unchecked tooltips have no submitted value.');
check(elements($settings)->query('//pk-lightswitch[@data-bb-appearance-key="labelTooltips"]')->length === 1, 'Tooltip settings must use a lightswitch.');
$field->options = [['label' => '0', 'value' => 'zero', 'icon' => 'star']];
check($field->validate(['options']), 'A zero label was rejected.');
check(elements($field->getInputHtml(null, null))->query('//pk-tooltip')->item(0)->getAttribute('content') === '0', 'A zero label lost its tooltip.');
foreach (['', '   '] as $label) {
    $field->options = [['label' => $label, 'value' => 'empty', 'icon' => 'star']];
    check(!$field->validate(['options']), 'An unnamed icon choice passed validation.');
    $set = new OptionSet(['name' => 'Labels', 'handle' => 'labels', 'options' => $field->options]);
    check(!$set->validate(['options']), 'An unnamed option-set choice passed validation.');
}

$width = new VisualChoice(['handle' => 'widthTest', 'presentation' => 'width', 'options' => [['label' => '25%', 'value' => '25'], ['label' => '50%', 'value' => '50']]]);
$widthHtml = $width->getInputHtml($width->normalizeValue('50', null), null);
$widthDom = elements($widthHtml);
check($widthDom->query('//input[@checked]')->length === 1, 'Width stored cumulative values instead of one value.');
check($widthDom->query('//span[@class="buttonbox-width-choice__value"]')->item(0)->textContent === '50%', 'Initial width label was incorrect.');
check($widthDom->query('//pk-tooltip')->length === 0, 'Width tooltips ignored their default off setting.');
$width->appearance['labelTooltips'] = '1';
check(elements($width->getInputHtml($width->normalizeValue('50', null), null))->query('//pk-tooltip')->length === 2, 'Width segments lost their enabled label tooltips.');
check(!(new VisualMultiChoice(['presentation' => 'width']))->validate(['presentation']), 'Cumulative width was accepted for multi-choice.');
check(elements($width->getStaticHtml($width->normalizeValue('50', null), new Entry()))->query('//input[@disabled]')->length === 2, 'Static width is interactive.');

echo "Button Box visual label integration tests passed.\n";
