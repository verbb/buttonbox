<?php

use craft\helpers\StringHelper;
use verbb\buttonbox\ButtonBox;
use verbb\buttonbox\fields\Position;
use verbb\buttonbox\fields\Rating;
use verbb\buttonbox\fields\VisualChoice;
use verbb\buttonbox\fields\VisualMultiChoice;
use verbb\buttonbox\fields\WidthChoice as Width;
use verbb\buttonbox\models\Preset;
use verbb\buttonbox\services\Presets;

$basePath = $argv[1] ?? null;
if (!$basePath || !is_file($basePath . '/bootstrap.php')) throw new RuntimeException('Pass the installed Craft project path.');
require $basePath . '/bootstrap.php';
$app = require CRAFT_VENDOR_PATH . '/craftcms/cms/bootstrap/console.php';
$app->init();

function presetCheck(bool $condition, string $message): void
{
    if (!$condition) throw new RuntimeException($message);
}

$service = ButtonBox::$plugin->getPresets();
foreach ($service->getAll() as $preset) {
    presetCheck($preset->validate(), $preset->id . ': ' . json_encode($preset->getErrors()));
    $field = $preset->createField();
    $html = $field instanceof VisualChoice ? $field->getOptionEditorHtml(false, true) : $field->getSettingsHtml(true);
    presetCheck(str_contains($html, 'data-bb-preview'), 'Preset has no live preview.');
    presetCheck(!str_contains($html, 'data-bb-choose-preset'), 'Preset editor recursively includes its chooser.');
}

$rating = new Preset(['name' => 'Brand stars', 'family' => 'rating', 'settings' => ['symbol' => 'star', 'activeColor' => '#112233', 'inactiveColor' => '#eeeeee', 'max' => 20, 'handle' => 'ignored']]);
presetCheck($rating->validate(), json_encode($rating->getErrors()));
presetCheck(array_keys($rating->getSettings()) === ['symbol', 'activeColor', 'inactiveColor'], 'Rating copied numeric settings or identity.');
presetCheck($rating->createField()->max === 5 && $rating->createField()->handle === null, 'Preset escaped its allowed settings.');
$rating->settings['symbol'] = 'custom';
presetCheck(!$rating->validate() && $rating->hasErrors('symbol'), 'Unknown rating symbol accepted.');
$rating->settings['symbol'] = 'star';
$rating->settings['activeColor'] = 'not-a-colour';
presetCheck(!$rating->validate(), 'Invalid colour accepted.');

$visual = new Preset(['name' => 'Brand dropdown', 'settings' => ['presentation' => 'dropdown', 'appearance' => ['size' => 'lg', 'showLabels' => false], 'options' => [['label' => 'Blue', 'value' => 'blue', 'color' => '#299bd6']]]]);
presetCheck($visual->validate(), json_encode($visual->getErrors()));
presetCheck($visual->getSettings()['appearance']['size'] === 'lg', 'Visual appearance was lost.');
$visual->settings['options'] = [];
presetCheck(!$visual->validate() && $visual->hasErrors('options'), 'Empty visual preset accepted.');
$width = new Preset(['name' => 'Wrong order', 'family' => 'width', 'settings' => ['options' => [['label' => 'Full', 'value' => 'full', 'percentage' => 100], ['label' => 'Half', 'value' => 'half', 'percentage' => 50]]]]);
presetCheck(!$width->validate(), 'Invalid width geometry accepted.');
$position = new Preset(['name' => 'Bad columns', 'family' => 'position', 'settings' => ['columns' => 99]]);
presetCheck(!$position->validate(), 'Invalid position columns accepted.');

foreach ([new VisualChoice(), new VisualMultiChoice(), new Position(), new Width(), new Rating()] as $field) {
    presetCheck(str_contains($field->getSettingsHtml(), 'data-bb-choose-preset'), 'Field chooser disappeared.');
}

if (in_array('--persist', $argv, true)) {
    $config = Craft::$app->getProjectConfig();
    $starPath = Presets::CONFIG_PATH . '.builtin-rating-star';
    $original = $config->get($starPath);
    $created = [];
    $unchanged = new Rating(['symbol' => 'star', 'activeColor' => '#f4b638', 'max' => 7, 'allowClear' => false]);
    try {
        foreach (['visual', 'position', 'width', 'rating'] as $family) {
            $preset = new Preset(['name' => 'Temporary ' . StringHelper::randomString(8), 'family' => $family]);
            if ($family === 'visual') $preset->settings = ['presentation' => 'dropdown', 'options' => [['label' => 'Blue', 'value' => 'blue', 'color' => '#299bd6']], 'appearance' => ['radius' => '9']];
            presetCheck($service->save($preset), json_encode($preset->getErrors()));
            $created[] = $preset->id;
            $config->flush();
            $saved = $service->getById($preset->id);
            presetCheck($saved->getSettings() === $preset->getSettings(), 'Project-config round trip lost settings.');
            presetCheck(isset($service->getCatalog($family)[$preset->id]), 'Saved preset missing from chooser.');
            if ($family === 'visual') presetCheck(!isset($service->getCatalog('visual', true)[$preset->id]), 'Dropdown offered to multi-choice.');
        }
        $star = $service->getById('builtin-rating-star');
        $star->settings['activeColor'] = '#112233';
        presetCheck($service->save($star), 'Built-in override failed.');
        $config->flush();
        presetCheck(Rating::getPresets()['star']['activeColor'] === '#112233', 'Override missing from field chooser.');
        presetCheck($service->getById($star->id)->customized, 'Override is not marked customised.');
        presetCheck($unchanged->activeColor === '#f4b638' && $unchanged->max === 7 && !$unchanged->allowClear, 'Existing field mutated.');
        $service->remove($star->id);
        presetCheck(Rating::getPresets()['star']['activeColor'] === Rating::getBuiltInPresets()['star']['activeColor'], 'Original was not restored.');
        foreach ($created as $id) {
            $service->remove($id);
            presetCheck($service->getById($id) === null, 'Custom preset was not removed.');
        }
        presetCheck((new Width())->getWidthOptions() === (new Width(['options' => Width::getBuiltInPresets()['quarters']['options']]))->getWidthOptions(), 'Default width geometry changed.');
    } finally {
        foreach ($created as $id) $config->remove(Presets::CONFIG_PATH . '.' . $id);
        if ($original === null) $config->remove($starPath);
        else $config->set($starPath, $original);
        $config->flush();
    }
}

echo "Button Box preset tests passed.\n";
