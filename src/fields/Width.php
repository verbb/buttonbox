<?php
namespace verbb\buttonbox\fields;

use verbb\buttonbox\assetbundles\ButtonBoxAsset;

use Craft;
use craft\base\ElementInterface;
use craft\fields\BaseOptionsField;
use craft\fields\data\OptionData;
use craft\fields\data\SingleOptionFieldData;
use craft\helpers\Cp;
use craft\helpers\Db;
use craft\helpers\Json;
use craft\helpers\Template;

use yii\db\Schema;

class Width extends BaseOptionsField
{
    // Static Methods
    // =========================================================================
    
    public static function displayName(): string
    {
        return Craft::t('buttonbox', 'Button Box - Width');
    }


    // Properties
    // =========================================================================

    public array $options = [];


    // Public Methods
    // =========================================================================

    public function getContentColumnType(): string
    {
        return Schema::TYPE_TEXT;
    }

    public function normalizeValue(mixed $value, ElementInterface $element = null): mixed
    {
        if (!$value) {
            $value = $this->defaultValue();
        }
        
        if ($value instanceof SingleOptionFieldData) {
            $value = $value->value;
        }

        $selectedValues = (array)$value;

        $value = reset($selectedValues) ?: null;
        $label = $this->optionsSettingLabel();
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

    public function getSettingsHtml(): ?string
    {
        $options = $this->translatedOptions();

        if (!$options) {
            $options = [
                [
                    'label' => '',
                    'value' => '',
                ],
            ];
        }

        return Cp::editableTableFieldHtml([
            'label' => $this->optionsSettingLabel(),
            'instructions' => Craft::t('buttonbox', 'Define the available options.'),
            'id' => 'options',
            'name' => 'options',
            'addRowLabel' => Craft::t('buttonbox', 'Add an option'),
            'cols' => [
                'label' => [
                    'heading' => Craft::t('buttonbox', 'Option Label'),
                    'type' => 'singleline',
                    'autopopulate' => 'value',
                ],
                'value' => [
                    'heading' => Craft::t('buttonbox', 'Value'),
                    'type' => 'singleline',
                    'class' => 'code',
                ],
                'default' => [
                    'heading' => Craft::t('buttonbox', 'Default?'),
                    'type' => 'checkbox',
                    'class' => 'thin',
                ],
            ],
            'rows' => $options,
            'static' => false,
            'allowAdd' => true,
            'allowDelete' => true,
            'allowReorder' => true,
        ]);
    }

    public function getInputHtml(mixed $value, ElementInterface $element = null): string
    {
        $name = $this->handle;
        $options = $this->translatedOptions();

        // If this is a new entry, look for a default option
        if ($this->isFresh($element)) {
            $value = $this->defaultValue();
        }

        Craft::$app->getView()->registerAssetBundle(ButtonBoxAsset::class);
        Craft::$app->getView()->registerJs('new Craft.ButtonBoxHovers("' . Craft::$app->getView()->namespaceInputId($name) . '");');

        return Craft::$app->getView()->renderTemplate('buttonbox/_field/width/input', [
            'name' => $name,
            'value' => $value,
            'options' => $options,
        ]);

    }


    // Protected Methods
    // =========================================================================
    
    protected function optionsSettingLabel() : string
    {
        return Craft::t('buttonbox', 'Width Options');
    }

    protected function defaultValue(): array|string|null
    {
        $options = $this->translatedOptions();

        foreach ($options as $option) {
            if (!empty($option['default'])) {
                return $option['value'];
            }
        }

        return $options[0]['value'];
    }

    protected function translatedOptions(bool $encode = false): array
    {
        $translatedOptions = [];

        foreach ($this->options as $option) {
            $translatedOptions[] = [
                'label' => Craft::t('site', $option['label']),
                'value' => $option['value'],
                'default' => $option['default'],
            ];
        }

        return $translatedOptions;
    }
}
