<?php
namespace verbb\buttonbox\fields;

use verbb\buttonbox\ButtonBox;
use verbb\buttonbox\helpers\Compatibility;
use verbb\buttonbox\models\ActionLinksConfig;
use verbb\buttonbox\web\assets\cp\LegacyAsset;
use verbb\buttonbox\web\assets\cp\TriggersSettingsAsset;

use Craft;
use craft\base\ElementInterface;
use craft\events\DefineInputOptionsEvent;
use craft\fields\BaseOptionsField;
use craft\helpers\Cp;
use craft\helpers\UrlHelper;

use Twig\Error\Error as TwigError;

class Triggers extends BaseOptionsField
{
    // Static Methods
    // =========================================================================

    public static function displayName(): string
    {
        return Craft::t('buttonbox', 'Button Box - Triggers (Legacy)');
    }

    public static function icon(): string
    {
        return '@verbb/buttonbox/icon-mask.svg';
    }


    // Properties
    // =========================================================================

    public ?bool $displayAsGraphic = null;
    public ?bool $displayFullwidth = null;


    // Public Methods
    // =========================================================================

    public function getSettingsHtml(): ?string
    {
        Craft::$app->getView()->registerAssetBundle(TriggersSettingsAsset::class);

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

        return Compatibility::settingsNotice(Craft::t('buttonbox', 'the Action Links field')) . $displayAsGraphic . $displayFullwidth . $table;
    }


    // Protected Methods
    // =========================================================================

    protected function inputHtml(mixed $value, ?ElementInterface $element, bool $inline): string
    {
        Compatibility::logInput($this, $element);

        $name = $this->handle;
        $options = $this->translatedOptions(false, $value, $element);

        if (!$value->valid) {
            Craft::$app->getView()->setInitialDeltaValue($this->handle, $this->encodeValue($value->value));
            $default = $this->defaultValue();

            if ($default !== null) {
                $value = $this->normalizeValue($this->defaultValue(), $element);
            } else {
                $value = null;
            }
        }

        Craft::$app->getView()->registerAssetBundle(LegacyAsset::class);
        Craft::$app->getView()->registerJs('new Craft.ButtonBoxButtons("' . Craft::$app->getView()->namespaceInputId($name) . '");');

        // JavaScript braces aren't templates, and element values can't be safely placed in a script.
        foreach ($options as $i => $opt) {
            if ($opt['type'] !== 'js') {
                $options[$i]['value'] = $this->_linkUrl($opt['value'], $element);
            }
        }

        return Craft::$app->getView()->renderTemplate('buttonbox/_field/triggers/input', [
            'name' => $name,
            'value' => $this->encodeValue($value),
            'options' => $options,
            'displayAsGraphic' => $this->displayAsGraphic,
            'displayFullwidth' => $this->displayFullwidth,
        ]);
    }

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


    // Private Methods
    // =========================================================================

    private function _linkUrl(string $url, ?ElementInterface $element): string
    {
        try {
            $url = Craft::$app->getView()->renderObjectTemplate($url, $element);
        } catch (TwigError $e) {
            ButtonBox::warning("Skipped a Triggers link with an invalid template: {$e->getMessage()}");

            return '#';
        }

        if (ActionLinksConfig::hasUnsafeScheme($url)) {
            ButtonBox::warning("Skipped a Triggers link with an unsafe scheme: {$url}");

            return '#';
        }

        return $url;
    }
}
