<?php

use verbb\buttonbox\ButtonBox;
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

function check(bool $condition, string $message): void
{
    if (!$condition) {
        throw new RuntimeException($message);
    }
}

$service = ButtonBox::$plugin->getOptionSets();
$set = new OptionSet([
    'name' => 'Option set integration fixture',
    'handle' => 'buttonBoxTest' . bin2hex(random_bytes(5)),
    'iconSize' => 'large',
    'imageSize' => 'small',
    'imageFit' => 'contain',
    'appearance' => ['size' => 'xs', 'textColor' => '#123456', 'backgroundColor' => '#ffffff', 'borderColor' => '#ccc', 'selectionColor' => '#147d35', 'borderWidth' => '0', 'radius' => '0', 'showLabels' => '0', 'labelTooltips' => '1'],
    'options' => [['label' => 'Zero', 'value' => 'zero', 'visualType' => 'shape', 'surfaceValue' => '0', 'surfaceSecondary' => '1:1', 'default' => true]],
]);
$field = null;
try {
    check($service->save($set), json_encode($set->getErrors()));
    $uid = $set->uid;
    check($service->getByUid($uid)?->options === $set->options, 'Option metadata did not round-trip.');
    $restored = $service->getByUid($uid);
    check($restored->createField()->iconSize === 'large' && $restored->createField()->imageSize === 'small' && $restored->createField()->imageFit === 'contain', 'Media settings did not round-trip into the preview field.');
    check($restored->createField()->appearance === $set->appearance, 'Appearance did not round-trip into the preview field.');
    $field = new VisualChoice([
        'name' => 'Button Box option-set test',
        'handle' => $set->handle,
        'optionSource' => 'projectSet',
        'projectSet' => $uid,
        'iconSize' => 'small',
        'imageSize' => 'large',
        'imageFit' => 'contain',
        'appearance' => $set->appearance,
    ]);
    check(Craft::$app->getFields()->saveField($field), json_encode($field->getErrors()));
    $reloadedField = Craft::$app->getFields()->getFieldById($field->id);
    check($reloadedField->getSettings()['iconSize'] === 'small' && $reloadedField->getSettings()['imageSize'] === 'large' && $reloadedField->getSettings()['imageFit'] === 'contain', 'Field media settings were not serialized.');
    check($reloadedField->getSettings()['appearance'] === $set->appearance, 'Field appearance was not serialized.');
    check(str_contains($field->getAppearanceStyle(), '--buttonbox-choice-border-width:0px') && str_contains($field->getAppearanceStyle(), '--buttonbox-choice-radius:0px'), 'Zero appearance overrides were lost.');
    foreach (VisualChoice::PRESENTATIONS as $presentation) {
        $field->presentation = $presentation;
        $html = $field->getInputHtml(null, null);
        check(str_contains($html, '--buttonbox-choice-text:#123456') && str_contains($html, '--buttonbox-choice-radius:0px'), 'Appearance missing from ' . $presentation);
        if (in_array($presentation, ['tile', 'card'], true)) {
            check(str_contains($html, '--buttonbox-visual-columns:3'), 'Appearance replaced grid columns.');
        }
    }
    $field->presentation = 'segmented';
    foreach ([['size' => 'huge'], ['textColor' => 'red;display:none'], ['borderWidth' => '-1'], ['radius' => '101'], ['showLabels' => 'invalid'], ['labelTooltips' => 'invalid'], ['labelTooltips' => '']] as $appearance) {
        $invalidAppearance = new VisualChoice(['appearance' => $appearance]);
        check(!$invalidAppearance->validate(['appearance']), 'Invalid appearance accepted.');
        check($invalidAppearance->getAppearanceStyle() === '', 'Invalid appearance rendered CSS.');
    }
    $defaults = new VisualChoice(['appearance' => ['textColor' => '', 'borderWidth' => '', 'radius' => '']]);
    check($defaults->validate(['appearance']) && !str_contains($defaults->getAppearanceStyle(), '--buttonbox-choice-radius:'), 'Empty appearance did not restore defaults.');
    $invalidMedia = new VisualChoice(['iconSize' => 'huge', 'imageSize' => 'huge', 'imageFit' => 'stretch']);
    check(!$invalidMedia->validate(['iconSize', 'imageSize', 'imageFit']) && count($invalidMedia->getErrors()) === 3, 'Invalid media settings accepted.');
    $ratioStyle = ButtonBox::$plugin->getOptions()->getSurfaceStyle(['surface' => ['mode' => 'ratio', 'value' => '1:100']]);
    check(str_contains($ratioStyle, '--buttonbox-visual-ratio-width:1%') && str_contains($ratioStyle, '--buttonbox-visual-ratio-height:100%'), 'Tall ratio was not fitted proportionally.');
    check(count($service->getUsages($uid)) === 1, 'Field usage not found.');
    try {
        $service->delete($uid);
        throw new RuntimeException('An in-use set was deleted.');
    } catch (yii\base\InvalidArgumentException $exception) {
        check($service->getByUid($uid) !== null, 'In-use set was not preserved.');
    }
    $set->name = 'Renamed test set';
    $set->handle .= 'Renamed';
    check($service->save($set), 'Could not rename set.');
    check($field->resolveOptions()[0]['value'] === 'zero', 'Renaming broke a field reference.');
    check($field->normalizeValue('zero', null)->surface->radius === 0.0 || $field->normalizeValue('zero', null)->surface->radius === 0, 'Zero-radius metadata was lost.');
    $set->options[0]['label'] = 'Updated zero';
    check($service->save($set), 'Could not update set options.');
    check($field->resolveOptions()[0]['label'] === 'Updated zero', 'Referenced options did not refresh.');

    $duplicate = new OptionSet(['name' => 'Duplicate', 'handle' => $set->handle, 'options' => $set->options]);
    check(!$service->save($duplicate) && $duplicate->hasErrors('handle'), 'Duplicate handle accepted.');
    $invalid = new OptionSet(['name' => 'Invalid', 'handle' => 'invalid', 'options' => [
        ['label' => 'One', 'value' => 'same'], ['label' => 'Two', 'value' => 'same'],
    ]]);
    check(!$invalid->validate(), 'Duplicate option values accepted.');
    check(is_string($invalid->options[1]['value']), 'Failed validation corrupted the submitted values.');
    $invalid->options = [['label' => 'Broken', 'value' => 'broken', 'visualType' => 'gradient', 'surfaceValue' => 'invalid', 'surfaceSecondary' => '#fff']];
    check(!$invalid->validate(), 'Invalid gradient accepted.');
    $invalid->options = [['label' => 'Broken', 'value' => 'broken', 'visualType' => 'unknown']];
    check(!$invalid->validate(), 'Unknown visual accepted.');

    $options = [
        ['label' => 'One', 'value' => 'one', 'default' => true],
        ['label' => 'Two', 'value' => 'two', 'default' => true],
    ];
    check(!(new VisualChoice(['options' => $options]))->validate(['options']), 'Single choice accepted multiple defaults.');
    check((new VisualMultiChoice(['options' => $options]))->validate(['options']), 'Multi-choice rejected multiple defaults.');

    $raw = ['label' => 'Shape', 'value' => 'shape', 'visualType' => 'shape', 'surfaceValue' => 0, 'surfaceAngle' => 0, 'icon' => 'star', 'imageUrl' => '/old.png'];
    $resolved = ButtonBox::$plugin->getOptions()->normalizeOptions([$raw])[0];
    check($resolved['surface']['radius'] === 0, 'Zero metadata lost.');
    check($resolved['icon'] === null && $resolved['imageUrl'] === '', 'Inactive visual metadata leaked into rendering.');
    check($raw['icon'] === 'star' && $raw['imageUrl'] === '/old.png', 'Inactive editor metadata was erased.');

    $html = (new VisualChoice(['options' => [['label' => 'A', 'value' => 'a', 'default' => '', 'disabled' => '']]]))->getOptionEditorHtml();
    check(str_contains($html, 'data-bb-row-template') && str_contains($html, '<pk-editable-table'), 'Editable option table not rendered.');
    check(!str_contains($html, 'checked=""'), 'Empty checkbox values rendered as checked.');
    echo "Button Box option-set integration tests passed.\n";
} finally {
    if ($field?->id) {
        Craft::$app->getFields()->deleteField($field);
    }
    if ($set->uid && $service->getByUid($set->uid)) {
        $service->delete($set->uid);
    }
}
