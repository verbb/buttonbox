<?php

use craft\elements\Entry;
use craft\events\DefineInputOptionsEvent;
use verbb\buttonbox\fields\data\WidthData;
use verbb\buttonbox\fields\WidthChoice as Width;
use verbb\buttonbox\ButtonBox;

$craftBasePath = $argv[1] ?? null;
if (!$craftBasePath || !is_file($craftBasePath . '/bootstrap.php')) {
    fwrite(STDERR, "Usage: php tests/width.php /path/to/craft\n");
    exit(64);
}
require $craftBasePath . '/bootstrap.php';
$app = require CRAFT_VENDOR_PATH . '/craftcms/cms/bootstrap/console.php';
$app->init();

function widthAssert(bool $condition, string $message): void
{
    if (!$condition) throw new RuntimeException($message);
}
function widthDom(string $html): DOMXPath
{
    $dom = new DOMDocument();
    @$dom->loadHTML('<?xml encoding="utf-8" ?>' . $html);
    return new DOMXPath($dom);
}

$legacy = new Width(['name' => 'Width', 'handle' => 'widthTest', 'options' => [['label' => 'Narrow', 'value' => 'narrow'], ['label' => 'Full', 'value' => 'full', 'default' => true]]]);
widthAssert(array_column($legacy->options, 'percentage') === [50.0, 100.0], 'Legacy equal-step geometry changed.');
$value = $legacy->normalizeValue('full', null);
widthAssert($value instanceof WidthData && (string)$value === 'full' && $value->label === 'Full', 'Scalar template contract changed.');
widthAssert($legacy->normalizeValue(null, null)->value === 'full', 'Default was lost.');
widthAssert($legacy->getContentGqlType()['type']->name === 'String', 'Legacy scalar GraphQL changed.');
widthAssert((new Width($legacy->getSettings()))->options === $legacy->options, 'Settings round-trip changed widths.');
$existing = new Entry(['id' => 123, 'siteSettingsId' => 123]);
$existing->setIsFresh(false);
widthAssert($legacy->normalizeValue(null, $existing)->value === null, 'Existing empty content received a default.');
widthAssert($legacy->normalizeValue('base64:' . base64_encode('narrow'), null)->value === 'narrow', 'Encoded identity changed.');
widthAssert(!in_array(Width::class, \verbb\buttonbox\services\Conversions::LEGACY_FIELDS, true), 'Width is still advertised for legacy conversion.');
widthAssert(!isset(ButtonBox::$plugin->getOptions()->getPresets()['width']), 'Width still appears in visual presets.');

foreach (Width::getPresets() as $preset) {
    $field = new Width(['name' => 'Widths', 'handle' => 'widthTest', 'options' => $preset['options']]);
    widthAssert($field->validate(), implode(' ', $field->getErrorSummary(true)));
    foreach (['bar', 'samples'] as $style) {
        $field->displayStyle = $style;
        foreach (['selected', 'all', 'hidden'] as $labels) {
            $field->labelDisplay = $labels;
            $value = $field->normalizeValue($field->options[0]['value'], null);
            $dom = widthDom($field->getInputHtml($value, null));
            widthAssert($dom->query('//input[@type="radio" and @checked]')->length === 1, 'Width must store one selected stop.');
            widthAssert($dom->query('//input[@type="radio" and @aria-label]')->length === count($field->options), 'Accessible labels missing.');
            widthAssert($dom->query('//span[@class="buttonbox-width-field__label"]')->length === ($labels === 'all' ? count($field->options) : 0), 'Per-option label policy ignored.');
            widthAssert($dom->query('//span[@class="buttonbox-width-field__value"]')->length === (int)($labels === 'selected'), 'Selected label policy ignored.');
            widthAssert($dom->query('//pk-tooltip')->length === count($field->options), 'Enabled tooltips missing.');
        }
    }
    $field->showTooltips = false;
    widthAssert(widthDom($field->getInputHtml($value, null))->query('//pk-tooltip')->length === 0, 'Tooltips cannot be disabled.');
    widthAssert(widthDom($field->getStaticHtml($value, $existing))->query('//input[@type="radio" and not(@disabled)]')->length === 0, 'Static widths are interactive.');
}
$field = new Width(['name' => 'Widths', 'handle' => 'widthTest']);
$field->options[1]['disabled'] = true;
$value = $field->normalizeValue('50', null);
widthAssert(!$value->valid, 'Disabled width remains valid.');
$dom = widthDom($field->getInputHtml($value, null));
widthAssert($dom->query('//p[@data-width-invalid]')->length === 1 && $dom->query('//input[@type="hidden"]')->item(0)->getAttribute('value') === 'base64:NTA=', 'Unavailable stored width was replaced.');
$field->options[1]['default'] = true;
widthAssert(!$field->validate(['options']), 'Disabled default accepted.');
$field->options[1]['default'] = false;
$field->options[1]['percentage'] = 10;
widthAssert(!$field->validate(['options']), 'Out-of-order stops accepted.');
$field->options = [];
widthAssert(!$field->validate(['options']), 'Empty widths accepted.');
$field->appearance = ['fillColor' => 'red;display:none'];
widthAssert(!$field->validate(['appearance']) && $field->getAppearanceStyle() === '', 'Unsafe appearance escaped validation.');
$field->appearance = ['fillColor' => '#778899', 'selectionColor' => '#225588', 'borderWidth' => '0', 'radius' => '0'];
widthAssert($field->validate(['appearance']) && str_contains($field->getAppearanceStyle(), '--buttonbox-width-fill:#778899'), 'Fill override missing.');
$field->on(Width::EVENT_DEFINE_OPTIONS, function(DefineInputOptionsEvent $event) { $event->options = [['label' => 'Dynamic', 'value' => 'dynamic']]; });
widthAssert(str_contains($field->getInputHtml($field->normalizeValue('dynamic', null), null), 'aria-label="Dynamic"'), 'Legacy option event no longer renders.');
$partial = new Width(['options' => [['label' => 'Small', 'value' => 'small', 'percentage' => 20], ['label' => 'Medium', 'value' => 'medium', 'percentage' => 50]], 'handle' => 'partialWidth']);
$partialDom = widthDom($partial->getInputHtml($partial->normalizeValue('medium', null), null));
widthAssert($partialDom->query('//span[@class="buttonbox-width-field__tail"]')->item(0)->getAttribute('style') === 'flex-basis:50%', 'Partial ranges must retain the full-width reference track.');
$settings = (new Width())->getSettingsHtml();
widthAssert(str_contains($settings, 'data-bb-show-tooltips') && str_contains($settings, 'name="labelDisplay"'), 'Width settings missing label/tooltip controls.');
echo "Button Box Width integration tests passed.\n";
