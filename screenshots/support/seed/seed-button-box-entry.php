/** Seed an entry containing the visual Button Box field types used by the feature screenshot. */

use craft\elements\Entry;
use craft\fieldlayoutelements\CustomField;
use craft\helpers\Json;
use craft\models\EntryType;
use craft\models\FieldLayout;
use craft\models\FieldLayoutTab;
use craft\models\Section;
use craft\models\Section_SiteSettings;
use verbb\buttonbox\fields\Buttons;
use verbb\buttonbox\fields\Colours;
use verbb\buttonbox\fields\Stars;
use verbb\buttonbox\fields\TextSize;
use verbb\buttonbox\fields\Width;

$fieldsService = Craft::$app->getFields();
$entries = Craft::$app->getEntries();
$site = Craft::$app->getSites()->getPrimarySite();
$sectionHandle = 'docsScreenshotButtonBox';

$definitions = [
    [Buttons::class, 'Buttons', 'docsScreenshotButtons', [
        'options' => [
            ['label' => 'Male', 'value' => 'male', 'showLabel' => true, 'imageUrl' => '', 'imageAlign' => 'left', 'default' => true],
            ['label' => 'Female', 'value' => 'female', 'showLabel' => true, 'imageUrl' => '', 'imageAlign' => 'left', 'default' => false],
            ['label' => 'Left', 'value' => 'left', 'showLabel' => true, 'imageUrl' => '', 'imageAlign' => 'left', 'default' => false],
            ['label' => 'Centre', 'value' => 'centre', 'showLabel' => true, 'imageUrl' => '', 'imageAlign' => 'left', 'default' => false],
            ['label' => 'Right', 'value' => 'right', 'showLabel' => true, 'imageUrl' => '', 'imageAlign' => 'left', 'default' => false],
        ],
    ]],
    [Width::class, 'Width', 'docsScreenshotWidth', [
        'options' => [
            ['label' => '25%', 'value' => '25', 'default' => false],
            ['label' => '50%', 'value' => '50', 'default' => true],
            ['label' => '75%', 'value' => '75', 'default' => false],
            ['label' => '100%', 'value' => '100', 'default' => false],
        ],
    ]],
    [Stars::class, 'Stars', 'docsScreenshotStars', ['totalStars' => 5]],
    [Colours::class, 'Colours', 'docsScreenshotColours', [
        'options' => [
            ['label' => 'Blue', 'value' => 'blue', 'cssColour' => '#2d9cdb', 'default' => true],
            ['label' => 'Orange', 'value' => 'orange', 'cssColour' => '#f2994a', 'default' => false],
            ['label' => 'Teal', 'value' => 'teal', 'cssColour' => '#27aeae', 'default' => false],
            ['label' => 'Magenta', 'value' => 'magenta', 'cssColour' => '#bb2f6b', 'default' => false],
            ['label' => 'Navy', 'value' => 'navy', 'cssColour' => '#274c5e', 'default' => false],
            ['label' => 'Red', 'value' => 'red', 'cssColour' => '#eb5757', 'default' => false],
        ],
    ]],
    [TextSize::class, 'Text size', 'docsScreenshotTextSize', [
        'options' => [
            ['label' => 'Small', 'value' => 'small', 'pxVal' => 14, 'default' => true],
            ['label' => 'Regular', 'value' => 'regular', 'pxVal' => 16, 'default' => false],
            ['label' => 'Large', 'value' => 'large', 'pxVal' => 22, 'default' => false],
            ['label' => 'Huge', 'value' => 'huge', 'pxVal' => 32, 'default' => false],
        ],
    ]],
];

$fixtureFields = [];

foreach ($definitions as [$class, $name, $handle, $settings]) {
    $field = $fieldsService->getFieldByHandle($handle);

    if (!$field instanceof $class) {
        $field = new $class(array_merge(['name' => $name, 'handle' => $handle], $settings));

        if (!$fieldsService->saveField($field)) {
            throw new RuntimeException("Unable to save {$name} field: " . Json::encode($field->getErrors()));
        }
    }

    $fixtureFields[$handle] = $field;
}

$section = $entries->getSectionByHandle($sectionHandle);

if (!$section) {
    $entryType = new EntryType([
        'name' => 'Button Box showcase',
        'handle' => $sectionHandle . 'Type',
        'hasTitleField' => true,
    ]);
    $layout = new FieldLayout(['type' => Entry::class]);
    $tab = new FieldLayoutTab(['name' => Craft::t('app', 'Content'), 'layout' => $layout]);
    $tab->setElements(array_map(fn($field) => new CustomField($field), array_values($fixtureFields)));
    $layout->setTabs([$tab]);
    $entryType->setFieldLayout($layout);

    if (!$entries->saveEntryType($entryType)) {
        throw new RuntimeException('Unable to save Button Box entry type: ' . Json::encode($entryType->getErrors()));
    }

    $section = new Section(['name' => 'Button Box showcase', 'handle' => $sectionHandle, 'type' => Section::TYPE_CHANNEL]);
    $section->setEntryTypes([$entryType]);
    $section->setSiteSettings([new Section_SiteSettings([
        'siteId' => $site->id,
        'enabledByDefault' => true,
        'hasUrls' => false,
    ])]);

    if (!$entries->saveSection($section)) {
        throw new RuntimeException('Unable to save Button Box section: ' . Json::encode($section->getErrors()));
    }
}

$entryType = $entries->getEntryTypesBySectionId($section->id)[0] ?? null;
$entry = Entry::find()->sectionId($section->id)->siteId($site->id)->status(null)->one();

if (!$entry) {
    $entry = new Entry([
        'sectionId' => $section->id,
        'typeId' => $entryType->id,
        'siteId' => $site->id,
        'slug' => 'button-box-showcase',
        'enabled' => true,
    ]);
}

$entry->title = 'Button Box showcase';
$entry->setFieldValues([
    'docsScreenshotButtons' => 'male',
    'docsScreenshotWidth' => '50',
    'docsScreenshotStars' => 4,
    'docsScreenshotColours' => 'blue',
    'docsScreenshotTextSize' => 'small',
]);

if (!Craft::$app->getElements()->saveElement($entry)) {
    throw new RuntimeException('Unable to save Button Box entry: ' . Json::encode($entry->getErrors()));
}

echo Json::encode([
    'entryEditRoute' => parse_url((string)$entry->getCpEditUrl(), PHP_URL_PATH),
], JSON_THROW_ON_ERROR);
