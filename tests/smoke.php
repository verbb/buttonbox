<?php

use verbb\buttonbox\ButtonBox;
use verbb\buttonbox\events\DefineVisualOptionsEvent;
use verbb\buttonbox\fields\ActionLinks;
use verbb\buttonbox\fields\BaseVisualOptionsField;
use verbb\buttonbox\fields\Buttons;
use verbb\buttonbox\fields\Position;
use verbb\buttonbox\fields\Rating;
use verbb\buttonbox\fields\Stars;
use verbb\buttonbox\fields\Triggers;
use verbb\buttonbox\fields\VisualChoice;
use verbb\buttonbox\fields\VisualMultiChoice;
use verbb\buttonbox\fields\data\PositionData;
use verbb\buttonbox\fields\data\VisualOptionData;

use craft\elements\Entry;
use verbb\buttonbox\fields\data\MultiVisualOptionData;
use craft\models\FieldLayout;

function assertTest(bool $condition, string $message): void
{
    if (!$condition) {
        throw new RuntimeException($message);
    }
}

$craftBasePath = $argv[1] ?? getenv('BUTTONBOX_CRAFT_BASE_PATH') ?: null;

if (!$craftBasePath || !is_file($craftBasePath . '/bootstrap.php')) {
    fwrite(STDERR, "Usage: php tests/smoke.php /path/to/craft\n");
    exit(64);
}

require $craftBasePath . '/bootstrap.php';

/** @var craft\console\Application $app */
$app = require CRAFT_VENDOR_PATH . '/craftcms/cms/bootstrap/console.php';
$app->init();

$presets = ButtonBox::$plugin->getOptions()->getPresets();
assertTest(isset($presets['alignment'], $presets['aspectRatio'], $presets['typography'], $presets['imageFit'], $presets['shape'], $presets['intent'], $presets['surface'], $presets['spacing'], $presets['colourScheme']), 'The initial preset catalogue is incomplete.');

foreach (['spacing' => ['none', 'small', 'medium', 'large'], 'colourScheme' => ['light', 'dark', 'auto']] as $handle => $values) {
    $preset = $presets[$handle];
    $presetField = new VisualChoice(['name' => 'Preset', 'handle' => 'presetTest', 'presentation' => $preset['presentation'], 'options' => $preset['options']]);
    assertTest($presetField->validate(['options', 'presentation']), 'New preset options failed validation.');
    assertTest(array_column($preset['options'], 'value') === $values, 'Preset values are not semantic.');
    foreach ($preset['options'] as $option) {
        assertTest(str_contains(ButtonBox::$plugin->getGallery()->resolveIconSvg($option['icon']) ?? '', '<svg'), 'Preset icon did not resolve.');
    }
    assertTest(str_contains($presetField->getInputHtml(null, null), 'buttonbox-visual__icon'), 'Preset artwork did not render.');
}
assertTest(ButtonBox::$plugin->getGallery()->resolveIconSvg('buttonbox:../missing') === null, 'Unknown bundled icon resolved.');

$visual = new VisualChoice([
    'name' => 'Visual Choice Smoke',
    'handle' => 'visualChoiceSmoke',
    'presentation' => 'card',
    'options' => [[
        'label' => 'Ocean',
        'value' => 'ocean',
        'description' => 'Blue gradient',
        'surface' => ['mode' => 'gradient', 'from' => '#0ea5e9', 'to' => '#2563eb'],
        'default' => true,
    ]],
]);
$visualValue = $visual->normalizeValue('ocean', null);
assertTest($visualValue instanceof VisualOptionData, 'Visual Choice did not return typed data.');
assertTest($visualValue->surface->mode === 'gradient', 'Visual Choice did not expose typed surface metadata.');
assertTest(str_contains(ButtonBox::$plugin->getOptions()->getSurfaceStyle([
    'surface' => ['mode' => 'split', 'from' => '#111111', 'to' => '#eeeeee'],
]), '50%'), 'Split surface metadata did not produce a bounded preview.');
assertTest(str_contains(ButtonBox::$plugin->getOptions()->getSurfaceStyle([
    'surface' => ['mode' => 'foregroundBackground', 'from' => '#111111', 'to' => '#eeeeee'],
]), 'box-shadow'), 'Foreground/background surface metadata did not produce a bounded preview.');
assertTest(str_contains($visual->getInputHtml($visualValue, null), 'buttonbox-visual--card'), 'Visual Choice input did not render its presentation.');
assertTest(str_contains($visual->getInputHtml($visual->normalizeValue('removed-value', null), null), 'Unavailable: removed-value'), 'Visual Choice did not preserve an unavailable stored value in the input.');
assertTest(str_contains($visual->getSettingsHtml(), 'data-bb-table'), 'Visual Choice settings did not render the editable option table.');
assertTest($visual->getContentGqlType()->name === 'ButtonBoxVisualOption', 'Visual Choice did not expose its GraphQL object type.');

$invalidVisual = new VisualChoice([
    'name' => 'Invalid Visual Choice Smoke',
    'handle' => 'invalidVisualChoiceSmoke',
    'presentation' => 'generated',
    'options' => [[
        'label' => 'Invalid width',
        'value' => 'invalid-width',
        'surface' => ['mode' => 'width', 'value' => 500],
    ]],
]);
assertTest(!$invalidVisual->validate() && $invalidVisual->hasErrors('options'), 'Visual Choice accepted out-of-bounds primitive metadata.');

$multi = new VisualMultiChoice([
    'name' => 'Visual Multi Smoke',
    'handle' => 'visualMultiSmoke',
    'options' => [
        ['label' => 'One', 'value' => 'one'],
        ['label' => 'Two', 'value' => 'two'],
    ],
]);
$multiValue = $multi->normalizeValue(['one', 'two'], null);
assertTest($multiValue instanceof MultiVisualOptionData && count($multiValue) === 2, 'Visual Multi-Choice did not normalize all selected values.');

$provider = new VisualChoice([
    'name' => 'Provider Smoke',
    'handle' => 'providerSmoke',
    'optionSource' => 'provider',
]);
$providerCalls = 0;
$provider->on(BaseVisualOptionsField::EVENT_DEFINE_VISUAL_OPTIONS, function(DefineVisualOptionsEvent $event) use (&$providerCalls): void {
    $providerCalls++;
    $event->options = [['label' => 'Provided', 'value' => 'provided']];
});
assertTest($provider->normalizeValue('provided', null)->valid, 'Runtime provider options were not applied.');
assertTest($providerCalls === 1, 'Runtime provider options were resolved more than once during normalization.');

$originalSets = ButtonBox::$plugin->getSettings()->optionSets;
ButtonBox::$plugin->getSettings()->optionSets = [
    'editorialIntent' => [
        'label' => 'Editorial intent',
        'options' => [['label' => 'Feature', 'value' => 'feature']],
    ],
];
$projectSet = new VisualChoice([
    'name' => 'Project Set Smoke',
    'handle' => 'projectSetSmoke',
    'optionSource' => 'projectSet',
    'projectSet' => 'editorialIntent',
]);
assertTest($projectSet->normalizeValue('feature', null)->valid, 'Project option sets were not resolved.');
ButtonBox::$plugin->getSettings()->optionSets = $originalSets;

$position = new Position([
    'name' => 'Position Smoke',
    'handle' => 'positionSmoke',
]);
$positionValue = $position->normalizeValue('bottom-right', null);
assertTest($positionValue instanceof PositionData && $positionValue->x === 1 && $positionValue->y === 1, 'Position did not expose semantic coordinates.');
assertTest(str_contains($position->getInputHtml($positionValue, null), 'buttonbox-position'), 'Position input did not render.');
assertTest($position->getContentGqlType()->name === 'ButtonBoxPosition', 'Position did not expose its GraphQL object type.');

$horizontalPosition = new Position([
    'name' => 'Horizontal Position Smoke',
    'handle' => 'horizontalPositionSmoke',
    'mode' => 'horizontal',
    'allowedPositions' => ['left', 'right'],
]);
$horizontalValue = $horizontalPosition->normalizeValue('left', null);
assertTest($horizontalValue->valid && $horizontalValue->x === -1 && $horizontalValue->y === 0, 'Horizontal Position did not expose semantic coordinates.');
assertTest(str_contains($horizontalPosition->getInputHtml($horizontalValue, null), 'buttonbox-position--horizontal'), 'Horizontal Position did not render its geometry.');

$verticalPosition = new Position([
    'name' => 'Vertical Position Smoke',
    'handle' => 'verticalPositionSmoke',
    'mode' => 'vertical',
]);
$verticalValue = $verticalPosition->normalizeValue('bottom', null);
assertTest($verticalValue->valid && $verticalValue->x === 0 && $verticalValue->y === 1, 'Vertical Position did not expose semantic coordinates.');

$rating = new Rating([
    'name' => 'Rating Smoke',
    'handle' => 'ratingSmoke',
    'max' => 7,
    'symbol' => 'heart',
    'activeColor' => '#db2777',
    'inactiveColor' => '#cbd5e1',
    'showLabels' => true,
]);
assertTest($rating->normalizeValue('6', null) === 6, 'Rating did not normalize an integer.');
assertTest($rating->normalizeValue('0', null) === null, 'Rating did not normalize zero to null.');
assertTest(str_contains($rating->getInputHtml(6, null), 'buttonbox-rating'), 'Rating input did not render.');
assertTest(str_contains($rating->getInputHtml(6, null), '♥'), 'Rating did not render its configured symbol.');
assertTest(str_contains($rating->getInputHtml(6, null), '--buttonbox-rating-active:#db2777'), 'Rating did not render its configured active color.');

assertTest(in_array(ActionLinks::class, Craft::$app->getFields()->getAllFieldTypes(), true), 'Action Links was not registered as a field.');
$actionLinks = new ActionLinks([
    'name' => 'Useful actions', 'handle' => 'usefulActions',
    'actions' => [
        ['label' => 'Entries', 'urlType' => 'cp', 'url' => 'entries', 'style' => 'primary'],
        ['label' => 'Docs', 'urlType' => 'url', 'url' => 'https://craftcms.com/docs/5.x/', 'imageUrl' => '/favicon.ico', 'imageAlt' => '', 'newWindow' => true],
    ],
]);
assertTest($actionLinks->validate(), 'Action Links rejected safe links.');
assertTest(str_contains($actionLinks->getInputHtml(null, null), '<pk-button'), 'Action Links did not render Plugin Kit buttons.');
assertTest(str_contains($actionLinks->getInputHtml(null, null), 'buttonbox-action-links__image'), 'Action Links did not render portable project artwork.');
$restrictedAction = new ActionLinks(['actions' => [[
    'label' => 'Restricted', 'urlType' => 'cp', 'url' => 'settings', 'permission' => 'performUpdates',
]]]);
assertTest(str_contains($restrictedAction->getInputHtml(null, null), 'href=') && !str_contains($restrictedAction->getInputHtml(null, null), 'aria-disabled="true"'), 'Removed Action Links permission settings still disable links.');
$unsafe = new ActionLinks(['actions' => [['label' => 'Unsafe', 'urlType' => 'url', 'url' => 'javascript:alert(1)']]]);
assertTest(!$unsafe->validate(['actions']), 'Action Links accepted an unsafe URL scheme.');

$buttons = new Buttons([
    'name' => 'Legacy Buttons',
    'handle' => 'legacyButtons',
    'options' => [
        ['label' => 'Alpha', 'value' => 'alpha', 'showLabel' => true, 'imageUrl' => '', 'default' => true],
        ['label' => 'Beta', 'value' => 'beta', 'showLabel' => true, 'imageUrl' => '', 'default' => false],
    ],
]);
$buttonsPlan = ButtonBox::$plugin->getConversions()->plan($buttons);
assertTest($buttonsPlan['status'] === 'ready' && $buttonsPlan['settings']['options'][0]['value'] === 'alpha', 'Buttons compatibility mapping was not lossless.');
assertTest(is_array($buttons->getContentGqlType()), 'The Buttons adapter no longer exposes its scalar GraphQL contract.');

$stars = new Stars([
    'name' => 'Legacy Stars',
    'handle' => 'legacyStars',
    'totalStars' => 7,
]);
$starsPlan = ButtonBox::$plugin->getConversions()->plan($stars);
assertTest($starsPlan['status'] === 'ready' && $starsPlan['settings']['max'] === 7 && $starsPlan['warnings'], 'Stars compatibility mapping lost its range or zero-value diagnostic.');
assertTest($starsPlan['contentCounts'] === ['empty' => 0, 'zero' => 0, 'valid' => 0, 'outOfRange' => 0], 'Stars conversion did not expose deterministic content-state counts.');

$triggers = new Triggers([
    'name' => 'Legacy Triggers',
    'handle' => 'legacyTriggers',
    'options' => [[
        'label' => 'Unsafe',
        'value' => 'alert(1)',
        'showLabel' => true,
        'imageUrl' => '',
        'type' => 'js',
        'newWindow' => false,
    ]],
]);
$triggerPlan = ButtonBox::$plugin->getConversions()->plan($triggers);
assertTest($triggerPlan['status'] === 'blocked' && str_contains(implode(' ', $triggerPlan['blockers']), 'JavaScript'), 'Triggers diagnostics did not block JavaScript.');

echo "Button Box smoke tests passed.\n";
