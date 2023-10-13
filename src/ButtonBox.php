<?php
namespace verbb\buttonbox;

use verbb\buttonbox\base\PluginTrait;
use verbb\buttonbox\fields\Stars as StarsField;
use verbb\buttonbox\fields\Colours as ColoursField;
use verbb\buttonbox\fields\TextSize as TextSizeField;
use verbb\buttonbox\fields\Buttons as ButtonsField;
use verbb\buttonbox\fields\Width as WidthField;
use verbb\buttonbox\fields\Triggers as TriggersField;

use craft\base\Plugin;
use craft\events\RegisterComponentTypesEvent;
use craft\services\Fields;

use yii\base\Event;

class ButtonBox extends Plugin
{
    // Properties
    // =========================================================================

    public string $schemaVersion = '3.0.0';
    public string $minVersionRequired = '3.0.0';


    // Traits
    // =========================================================================

    use PluginTrait;


    // Public Methods
    // =========================================================================

    public function init(): void
    {
        parent::init();

        self::$plugin = $this;

        $this->_registerFieldTypes();
    }


    // Private Methods
    // =========================================================================

    private function _registerFieldTypes(): void
    {
        Event::on(Fields::class, Fields::EVENT_REGISTER_FIELD_TYPES, function(RegisterComponentTypesEvent $event) {
            $event->types[] = StarsField::class;
            $event->types[] = ColoursField::class;
            $event->types[] = TextSizeField::class;
            $event->types[] = ButtonsField::class;
            $event->types[] = WidthField::class;
            $event->types[] = TriggersField::class;
        });
    }
}
