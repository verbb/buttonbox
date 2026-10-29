<?php
namespace verbb\buttonbox;

use verbb\buttonbox\base\PluginTrait;
use verbb\buttonbox\fieldlayoutelements\ActionLinksField;
use verbb\buttonbox\fields\ActionLinks;
use verbb\buttonbox\fields\Buttons as ButtonsField;
use verbb\buttonbox\fields\Colours as ColoursField;
use verbb\buttonbox\fields\Position as PositionField;
use verbb\buttonbox\fields\Rating as RatingField;
use verbb\buttonbox\fields\Stars as StarsField;
use verbb\buttonbox\fields\TextSize as TextSizeField;
use verbb\buttonbox\fields\Triggers as TriggersField;
use verbb\buttonbox\fields\VisualChoice as VisualChoiceField;
use verbb\buttonbox\fields\VisualMultiChoice as VisualMultiChoiceField;
use verbb\buttonbox\fields\Width as WidthField;
use verbb\buttonbox\fields\WidthChoice;
use verbb\buttonbox\models\Settings;

use Craft;
use craft\base\Plugin;
use craft\events\DefineFieldLayoutCustomFieldsEvent;
use craft\events\RegisterComponentTypesEvent;
use craft\events\RegisterUrlRulesEvent;
use craft\fieldlayoutelements\CustomField;
use craft\helpers\UrlHelper;
use craft\models\FieldLayout;
use craft\services\Fields;
use craft\web\UrlManager;

use yii\base\Event;
use yii\web\Response;

class ButtonBox extends Plugin
{
    // Traits
    // =========================================================================

    use PluginTrait;


    // Properties
    // =========================================================================

    public bool $hasCpSettings = true;
    public string $schemaVersion = '3.1.0';
    public string $minVersionRequired = '3.0.0';


    // Public Methods
    // =========================================================================

    public function init(): void
    {
        parent::init();

        self::$plugin = $this;

        if (Craft::$app->getRequest()->getIsCpRequest()) {
            $this->_registerCpRoutes();
        }

        $this->_registerAliases();
        $this->_registerFieldTypes();
        $this->_registerFieldLayoutListener();
    }

    public function getSettingsResponse(): Response
    {
        return Craft::$app->getResponse()->redirect(UrlHelper::cpUrl('buttonbox/settings'));
    }

    public function getReadOnlySettingsResponse(): Response
    {
        return $this->getSettingsResponse();
    }


    // Protected Methods
    // =========================================================================

    protected function createSettingsModel(): Settings
    {
        return new Settings();
    }


    // Private Methods
    // =========================================================================

    private function _registerCpRoutes(): void
    {
        Event::on(UrlManager::class, UrlManager::EVENT_REGISTER_CP_URL_RULES, function(RegisterUrlRulesEvent $event) {
            $event->rules['buttonbox/settings'] = 'buttonbox/settings/index';
            $event->rules['buttonbox/settings/presets'] = 'buttonbox/presets/index';
            $event->rules['buttonbox/settings/presets/<family:visual|position|width|rating>'] = 'buttonbox/presets/index';
            $event->rules['buttonbox/settings/presets/new'] = 'buttonbox/presets/edit';
            $event->rules['buttonbox/settings/presets/<id:[a-zA-Z0-9-]+>'] = 'buttonbox/presets/edit';
            $event->rules['buttonbox/settings/option-sets'] = 'buttonbox/option-sets/index';
            $event->rules['buttonbox/settings/option-sets/new'] = 'buttonbox/option-sets/edit';
            $event->rules['buttonbox/settings/option-sets/<uid:[a-f0-9-]{36}>'] = 'buttonbox/option-sets/edit';
        });
    }

    private function _registerAliases(): void
    {
        $iconsPath = $this->getSettings()->getIconsPath();

        if ($iconsPath !== '') {
            Craft::setAlias('@buttonboxIcons', $iconsPath);
        }
    }

    private function _registerFieldTypes(): void
    {
        Event::on(Fields::class, Fields::EVENT_REGISTER_FIELD_TYPES, function(RegisterComponentTypesEvent $event) {
            $event->types[] = ActionLinks::class;
            $event->types[] = VisualChoiceField::class;
            $event->types[] = VisualMultiChoiceField::class;
            $event->types[] = PositionField::class;
            $event->types[] = RatingField::class;
            $event->types[] = WidthChoice::class;
            $event->types[] = StarsField::class;
            $event->types[] = ColoursField::class;
            $event->types[] = TextSizeField::class;
            $event->types[] = ButtonsField::class;
            $event->types[] = WidthField::class;
            $event->types[] = TriggersField::class;
        });
    }

    private function _registerFieldLayoutListener(): void
    {
        Event::on(FieldLayout::class, FieldLayout::EVENT_DEFINE_CUSTOM_FIELDS, function(DefineFieldLayoutCustomFieldsEvent $event) {
            foreach ($event->fields as &$group) {
                foreach ($group as &$element) {
                    if ($element instanceof CustomField && $element->getField() instanceof ActionLinks) {
                        $element = new ActionLinksField($element->getField(), ['layout' => $event->sender]);
                    }
                }
            }
        });
    }
}
