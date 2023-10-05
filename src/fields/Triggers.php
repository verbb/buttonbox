<?php
namespace verbb\buttonbox\fields;

use verbb\buttonbox\assetbundles\ButtonBoxAsset;

use Craft;
use craft\base\ElementInterface;
use craft\events\DefineInputOptionsEvent;
use craft\fields\BaseOptionsField;
use craft\helpers\ArrayHelper;
use craft\helpers\Cp;
use craft\helpers\UrlHelper;

class Triggers extends BaseOptionsField
{
    // Static Methods
    // =========================================================================

    public static function displayName(): string
    {
        return Craft::t('buttonbox', 'Button Box - Triggers');
    }

    public static function hasContentColumn(): bool
    {
        return false;
    }


    // Properties
    // =========================================================================

    public ?bool $displayAsGraphic = null;
    public ?bool $displayFullwidth = null;


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
                    'showLabel' => false,
                    'imageUrl' => '',
                    'type' => '',
                    'link' => '',
                    'newWindow' => false,
                ],
            ];
        }

        $table = Cp::editableTableFieldHtml([
            'label' => $this->optionsSettingLabel(),
            'instructions' => Craft::t('buttonbox', 'Image URLs are relative to your `@webroot` e.g. `/images/align-left.png` is `{url}`.', [
                'url' => UrlHelper::siteUrl('/images/align-left.png'),
            ]),
            'id' => 'options',
            'name' => 'options',
            'addRowLabel' => Craft::t('buttonbox', 'Add a trigger'),
            'cols' => [
                'label' => [
                    'heading' => Craft::t('buttonbox', 'Option Label'),
                    'type' => 'singleline',
                ],
                'showLabel' => [
                    'heading' => Craft::t('buttonbox', 'Show Label?'),
                    'type' => 'checkbox',
                    'class' => 'thin',
                ],
                'imageUrl' => [
                    'heading' => Craft::t('buttonbox', 'Image URL'),
                    'type' => 'singleline',
                ],
                'type' => [
                    'heading' => Craft::t('buttonbox', 'Trigger Type'),
                    'class' => 'thin triggerType',
                    'type' => 'select',
                    'options' => [
                        'link' => 'Link',
                        'js' => 'JavaScript',
                    ],
                ],
                'value' => [
                    'heading' => Craft::t('buttonbox', 'HREF or Custom JS'),
                    'type' => 'singleline',
                    'class' => 'code triggerValue',
                ],
                'newWindow' => [
                    'heading' => Craft::t('buttonbox', 'New window?'),
                    'type' => 'checkbox',
                    'class' => 'thin newWindow',
                ],
            ],
            'rows' => $options,
            'static' => false,
            'allowAdd' => true,
            'allowDelete' => true,
            'allowReorder' => true,
        ]);

        $displayAsGraphic = Cp::checkboxFieldHtml([
            'checkboxLabel' => Craft::t('buttonbox', 'Display as graphic'),
            'instructions' => Craft::t('buttonbox', 'This will take the height restrictions off the buttons to allow for larger images.'),
            'id' => 'displayAsGraphic',
            'name' => 'displayAsGraphic',
            'class' => 'displayAsGraphic',
            'value' => 1,
            'checked' => $this->displayAsGraphic,
        ]);

        $displayFullwidth = Cp::checkboxFieldHtml([
            'checkboxLabel' => Craft::t('buttonbox', 'Display full width'),
            'instructions' => Craft::t('buttonbox', 'Allow the button group to be fullwidth, useful for allowing larger graphics to be more responsive.'),
            'id' => 'displayFullwidth',
            'name' => 'displayFullwidth',
            'class' => 'displayFullwidth',
            'value' => 1,
            'checked' => $this->displayFullwidth,
        ]);

        return $displayAsGraphic . $displayFullwidth . $table;
    }

    public function getInputHtml(mixed $value, ElementInterface $element = null): string
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
        Craft::$app->getView()->registerJs('new Craft.ButtonBoxButtons("' . Craft::$app->getView()->namespaceInputId($name) . '");');

        // Parse element tags in links
        foreach ($options as $i => $opt) {
            $options[$i]['value'] = Craft::$app->getView()->renderObjectTemplate($opt['value'], $element);
        }

        return Craft::$app->getView()->renderTemplate('buttonbox/_field/triggers/input', [
            'name' => $name,
            'value' => $this->encodeValue($value),
            'options' => $options,
            'displayAsGraphic' => $this->displayAsGraphic,
            'displayFullwidth' => $this->displayFullwidth,
        ]);
    }


    // Protected Methods
    // =========================================================================

    protected function optionsSettingLabel(): string
    {
        return Craft::t('buttonbox', 'Triggers Options');
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
                'showLabel' => $option['showLabel'],
                'imageUrl' => $option['imageUrl'],
                'type' => $option['type'],
                'newWindow' => $option['newWindow'],
            ];
        }

        return $translatedOptions;
    }
}
