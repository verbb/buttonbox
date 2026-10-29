<?php

use craft\elements\Entry;
use craft\services\Deprecator;
use craft\web\Request;
use verbb\buttonbox\ButtonBox;
use verbb\buttonbox\fields\Buttons;
use verbb\buttonbox\fields\Colours;
use verbb\buttonbox\fields\Stars;
use verbb\buttonbox\fields\TextSize;
use verbb\buttonbox\fields\Triggers;
use verbb\buttonbox\fields\Width;
use verbb\buttonbox\fields\WidthChoice;
use verbb\buttonbox\web\assets\cp\ButtonBoxAsset;
use verbb\buttonbox\web\assets\cp\LegacyAsset;
use verbb\buttonbox\web\assets\cp\SettingsAsset;
use verbb\buttonbox\web\assets\cp\TriggersSettingsAsset;

require __DIR__ . '/support/isolated.php';

$suite->test('Released Width identity, settings, markup and saved content remain independent', function() use ($suite) {
    $rows = [['label' => 'Narrow', 'value' => 'narrow', 'default' => true], ['label' => 'Full', 'value' => 'full', 'default' => false]];
    $legacy = ButtonBoxFixtures::field(Width::class, ['options' => $rows]);
    $suite->same($rows, $legacy->options, 'Legacy options were rewritten.');
    $suite->check(!array_key_exists('appearance', $legacy->getSettings()), 'Legacy settings gained modern options.');
    $suite->check(!str_contains($legacy->getSettingsHtml(), 'pk-editable-table'), 'Legacy settings switched editor.');
    $html = $legacy->getInputHtml($legacy->normalizeValue('full', null), null);
    $suite->check(str_contains($html, 'buttonbox-width  btngroup') && !str_contains($html, 'buttonbox-width-field'), 'Legacy input switched presentation.');
    $suite->same('String', $legacy->getContentGqlType()['type']->name);
    $section = ButtonBoxFixtures::section([$legacy]);
    $entry = ButtonBoxFixtures::entry($section, [$legacy->handle => 'full']);
    ButtonBoxFixtures::save($entry);
    ButtonBoxFixtures::assertFreshProcess([['id' => $entry->id, 'handle' => $legacy->handle, 'class' => Width::class, 'stored' => 'full', 'serialized' => 'full']]);
    $replacement = ButtonBox::$plugin->getConversions()->createReplacement($legacy);
    $suite->check($replacement instanceof WidthChoice, 'Opt-in Width conversion targets the wrong class.');
    $suite->same([50.0, 100.0], array_column($replacement->getWidthOptions(), 'percentage'));
    $suite->same(['narrow', 'full'], array_column($replacement->getWidthOptions(), 'value'));
    $suite->check(str_contains(Width::displayName(), '(Legacy)') && !str_contains(WidthChoice::displayName(), '(Legacy)'), 'Field picker identities are not distinct.');
    ButtonBox::$plugin->getConversions()->convert($legacy->handle);
    ButtonBoxFixtures::assertFreshProcess([['id' => $entry->id, 'handle' => $legacy->handle, 'class' => WidthChoice::class, 'stored' => 'full', 'serialized' => 'full']]);
});

$suite->test('Pre-release Width settings survive without changing the legacy input', function() use ($suite) {
    $settings = ['displayStyle' => 'samples', 'labelDisplay' => 'all', 'showTooltips' => false, 'appearance' => ['size' => 'small']];
    $legacy = ButtonBoxFixtures::field(Width::class, $settings + ['options' => [['label' => 'Half', 'value' => 'half', 'percentage' => 50, 'default' => true], ['label' => 'Full', 'value' => 'full', 'percentage' => 100, 'default' => false]]]);
    foreach ($settings as $key => $value) $suite->same($value, $legacy->getSettings()[$key]);
    $reloaded = Craft::$app->getFields()->getFieldById($legacy->id);
    foreach ($settings as $key => $value) $suite->same($value, $reloaded->getSettings()[$key]);
    $suite->check(!str_contains($reloaded->getSettingsHtml(), 'pk-editable-table'), 'Pre-release settings enabled the modern editor.');
    $replacement = ButtonBox::$plugin->getConversions()->createReplacement($reloaded);
    foreach ($settings as $key => $value) $suite->same($value, $replacement->getSettings()[$key]);
});

$suite->test('Legacy assets never pull in modern input or settings code', function() use ($suite) {
    $view = Craft::$app->getView();
    $view->assetBundles = [];
    $field = new Width(['handle' => 'width', 'options' => [['label' => 'Full', 'value' => 'full', 'default' => true]]]);
    $field->getInputHtml($field->normalizeValue('full', null), null);
    $suite->check(isset($view->assetBundles[LegacyAsset::class]) && !isset($view->assetBundles[ButtonBoxAsset::class]) && !isset($view->assetBundles[SettingsAsset::class]), 'Legacy input loads the modern runtime.');
    $suite->check(!isset($view->assetBundles[TriggersSettingsAsset::class]), 'Legacy input loads Triggers settings.');
    $view->assetBundles = [];
    $modern = new WidthChoice(['handle' => 'modernWidth']);
    $modern->getInputHtml($modern->normalizeValue('50', null), null);
    $suite->check(isset($view->assetBundles[ButtonBoxAsset::class]) && !isset($view->assetBundles[LegacyAsset::class]) && !isset($view->assetBundles[SettingsAsset::class]), 'Modern input loads unrelated assets.');
    $modern->getSettingsHtml();
    $suite->check(isset($view->assetBundles[SettingsAsset::class]), 'Modern settings are missing their runtime.');
});

$suite->test('Only element CP inputs emit non-throwing legacy deprecations', function() use ($suite) {
    $originalRequest = Craft::$app->getRequest();
    $originalDeprecator = Craft::$app->getDeprecator();
    $deprecator = new Deprecator(['throwExceptions' => true]);
    Craft::$app->set('deprecator', $deprecator);
    $request = new Request(['isCpRequest' => false, 'scriptFile' => __FILE__, 'scriptUrl' => '/index.php']);
    Craft::$app->set('request', $request);
    try {
        $entry = new Entry();
        foreach ([Buttons::class, Colours::class, TextSize::class, Stars::class, Triggers::class, Width::class] as $index => $class) {
            $settings = ['name' => 'Legacy notice ' . $index, 'handle' => 'legacyNotice' . $index, 'uid' => craft\helpers\StringHelper::UUID()];
            if ($class !== Stars::class) $settings['options'] = [['label' => 'One', 'value' => 'one', 'default' => true, 'type' => 'link', 'showLabel' => true, 'imageUrl' => '', 'newWindow' => false, 'cssColour' => '#000000', 'pxVal' => 16]];
            $field = new $class($settings);
            $request->setIsCpRequest(false);
            $field->getInputHtml($field->normalizeValue('one', $entry), $entry);
            $suite->same($index, count($deprecator->getRequestLogs()), 'Frontend input emitted a notice.');
            $request->setIsCpRequest(true);
            $field->getInputHtml($field->normalizeValue('one', null), null);
            $suite->same($index, count($deprecator->getRequestLogs()), 'Settings preview emitted a notice.');
            $field->getInputHtml($field->normalizeValue('one', $entry), $entry);
            $suite->same($index + 1, count($deprecator->getRequestLogs()), 'Element input did not emit its notice.');
            $field->getInputHtml($field->normalizeValue('one', $entry), $entry);
            $suite->same($index + 1, count($deprecator->getRequestLogs()), 'Repeated input duplicated its notice.');
            $suite->same(true, $deprecator->throwExceptions, 'Global deprecation policy changed.');
        }
        $suite->check($deprecator->getTotalLogs() >= 6, 'Strict-mode notices were not stored.');
        $modern = new WidthChoice(['handle' => 'modernWidth']);
        $modern->getInputHtml($modern->normalizeValue('50', $entry), $entry);
        $suite->same(6, count($deprecator->getRequestLogs()), 'Modern field emitted a legacy notice.');
    } finally {
        Craft::$app->set('request', $originalRequest);
        Craft::$app->set('deprecator', $originalDeprecator);
    }
});
$suite->finish();
