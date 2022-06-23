<?php
namespace verbb\buttonbox\fields;

use verbb\buttonbox\assetbundles\ButtonBoxAsset;

use Craft;
use craft\base\ElementInterface;
use craft\fields\BaseOptionsField;
use craft\fields\data\OptionData;
use craft\fields\data\SingleOptionFieldData;
use craft\helpers\Db;
use craft\helpers\Json;
use craft\helpers\Template;
use craft\helpers\UrlHelper;

use yii\db\Schema;

class Buttons extends BaseOptionsField
{
    // Static Methods
    // =========================================================================

    public static function displayName(): string
    {
        return Craft::t('buttonbox', 'Button Box - Buttons');
    }


    // Properties
    // =========================================================================

    public $displayAsGraphic;
    public $displayFullwidth;
    public $options;


    // Public Methods
    // =========================================================================

    public function getContentColumnType(): string
    {
        return Schema::TYPE_TEXT;
    }

    public function normalizeValue($value, ElementInterface $element = null)
    {
        if (!$value) {
            $value = $this->defaultValue();
        }

        if ($value instanceof SingleOptionFieldData) {
            $value = $value->value;
        }

        $selectedValues = (array)$value;

        $value = reset($selectedValues) ?: null;
        $label = $this->optionLabel($value);
        $value = new SingleOptionFieldData($label, $value, true);

        $options = [];

        if ($this->options) {
            foreach ($this->options as $option) {
                $selected = in_array($option['value'], $selectedValues, true);
                $options[] = new OptionData($option['label'], $option['value'], $selected);
            }
        }

        $value->setOptions($options);

        return $value;
    }

    public function getSettingsHtml()
    {
        $options = $this->translatedOptions();

        if (!$options) {
            $options = [
                [
                    'label' => '',
                    'showLabel' => false,
                    'value' => '',
                    'imageUrl' => '',
                ],
            ];
        }

        $table = Craft::$app->getView()->renderTemplateMacro('_includes/forms', 'editableTableField', [
            [
                'label' => $this->optionsSettingLabel(),
                'instructions' => Craft::t('buttonbox', 'Image URLs are relative to your `@webroot` e.g. `/images/align-left.png` is `{url}`.', [
                    'url' => UrlHelper::siteUrl('/images/align-left.png'),
                ]),
                'id' => 'options',
                'name' => 'options',
                'addRowLabel' => Craft::t('buttonbox', 'Add an option'),
                'cols' => [
                    'label' => [
                        'heading' => Craft::t('buttonbox', 'Option Label'),
                        'type' => 'singleline',
                        'autopopulate' => 'value',
                    ],
                    'showLabel' => [
                        'heading' => Craft::t('buttonbox', 'Show Label?'),
                        'type' => 'checkbox',
                        'class' => 'thin',
                    ],
                    'value' => [
                        'heading' => Craft::t('buttonbox', 'Value'),
                        'type' => 'singleline',
                        'class' => 'code',
                    ],
                    'imageUrl' => [
                        'heading' => Craft::t('buttonbox', 'Image URL'),
                        'type' => 'singleline',
                    ],
                    'default' => [
                        'heading' => Craft::t('buttonbox', 'Default?'),
                        'type' => 'checkbox',
                        'class' => 'thin',
                    ],
                ],
                'rows' => $options,
            ],
        ]);

        $displayAsGraphic = Craft::$app->getView()->renderTemplateMacro('_includes/forms', 'checkboxField', [
            [
                'label' => Craft::t('buttonbox', 'Display as graphic'),
                'instructions' => Craft::t('buttonbox', 'This will take the height restrictions off the buttons to allow for larger images.'),
                'id' => 'displayAsGraphic',
                'name' => 'displayAsGraphic',
                'class' => 'displayAsGraphic',
                'value' => 1,
                'checked' => $this->displayAsGraphic,
            ],
        ]);

        $displayFullwidth = Craft::$app->getView()->renderTemplateMacro('_includes/forms', 'checkboxField', [
            [
                'label' => Craft::t('buttonbox', 'Display full width'),
                'instructions' => Craft::t('buttonbox', 'Allow the button group to be fullwidth, useful for allowing larger graphics to be more responsive.'),
                'id' => 'displayFullwidth',
                'name' => 'displayFullwidth',
                'class' => 'displayFullwidth',
                'value' => 1,
                'checked' => $this->displayFullwidth,
            ],
        ]);

        return $displayAsGraphic . $displayFullwidth . $table;
    }

    public function getInputHtml($value, ElementInterface $element = null): string
    {
        $name = $this->handle;
        $options = $this->translatedOptions();

        // If this is a new entry, look for a default option
        if ($this->isFresh($element)) {
            $value = $this->defaultValue();
        }

        Craft::$app->getView()->registerAssetBundle(ButtonBoxAsset::class);
        Craft::$app->getView()->registerJs('new Craft.ButtonBoxButtons("' . Craft::$app->getView()->namespaceInputId($name) . '");');

        return Craft::$app->getView()->renderTemplate('buttonbox/_field/buttons/input', [
            'name' => $name,
            'value' => $value,
            'options' => $options,
            'displayAsGraphic' => $this->displayAsGraphic,
            'displayFullwidth' => $this->displayFullwidth,
        ]);
    }


    // Protected Methods
    // =========================================================================

    protected function optionsSettingLabel(): string
    {
        return Craft::t('buttonbox', 'Button Options');
    }

    protected function defaultValue()
    {
        $options = $this->translatedOptions();

        foreach ($options as $option) {
            if (!empty($option['default'])) {
                return $option['value'];
            }
        }

        return $options[0]['value'];
    }

    protected function translatedOptions(): array
    {
        $translatedOptions = [];

        foreach ($this->options as $option) {
            $translatedOptions[] = [
                'label' => Craft::t('site', $option['label']),
                'value' => $option['value'],
                'showLabel' => $option['showLabel'],
                'imageUrl' => $option['imageUrl'],
                'default' => $option['default'],
            ];
        }

        return $translatedOptions;
    }
}
