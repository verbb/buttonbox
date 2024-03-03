<?php
namespace verbb\buttonbox\fields;

use verbb\buttonbox\assetbundles\ButtonBoxAsset;

use Craft;
use craft\base\ElementInterface;
use craft\events\DefineInputOptionsEvent;
use craft\fields\BaseOptionsField;
use craft\fields\data\OptionData;
use craft\fields\data\SingleOptionFieldData;
use craft\helpers\ArrayHelper;
use craft\helpers\Cp;

use yii\db\Schema;

class Width extends BaseOptionsField
{
    // Static Methods
    // =========================================================================

    public static function displayName(): string
    {
        return Craft::t('buttonbox', 'Button Box - Width');
    }

    public static function icon(): string
    {
        return '@verbb/buttonbox/icon-mask.svg';
    }

    public static function dbType(): string
    {
        return Schema::TYPE_TEXT;
    }


    // Public Methods
    // =========================================================================

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


    // Protected Methods
    // =========================================================================

    protected function inputHtml(mixed $value, ?ElementInterface $element, bool $inline): string
    {
        $name = $this->handle;
        $options = $this->translatedOptions(true, $value, $element);

        if (!$value->valid) {
            Craft::$app->getView()->setInitialDeltaValue($this->handle, $this->encodeValue($value->value));
            $default = $this->defaultValue();

            if ($default !== null) {
                $value = $this->normalizeValue($this->defaultValue());
            } else {
                $value = null;
            }
        }

        Craft::$app->getView()->registerAssetBundle(ButtonBoxAsset::class);
        Craft::$app->getView()->registerJs('new Craft.ButtonBoxHovers("' . Craft::$app->getView()->namespaceInputId($name) . '");');

        return Craft::$app->getView()->renderTemplate('buttonbox/_field/width/input', [
            'name' => $name,
            'value' => $this->encodeValue($value),
            'options' => $options,
        ]);
    }

    protected function optionsSettingLabel(): string
    {
        return Craft::t('buttonbox', 'Width Options');
    }

    protected function translatedOptions(bool $encode = false, mixed $value = null, ?ElementInterface $element = null): array
    {
        $options = $this->options();
        $translatedOptions = [];

        if ($this->hasEventHandlers(self::EVENT_DEFINE_OPTIONS)) {
            $event = new DefineInputOptionsEvent([
                'options' => $options,
                'value' => $value,
                'element' => $element,
            ]);
            $this->trigger(self::EVENT_DEFINE_OPTIONS, $event);
            $options = $event->options;
        }

        foreach ($options as $option) {
            $translatedOptions[] = [
                'label' => Craft::t('site', $option['label']),
                'value' => $encode ? $this->encodeValue($option['value']) : $option['value'],
                'default' => $option['default'],
            ];
        }

        return $translatedOptions;
    }
}
