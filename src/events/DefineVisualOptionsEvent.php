<?php
namespace verbb\buttonbox\events;

use craft\base\ElementInterface;

use yii\base\Event;

class DefineVisualOptionsEvent extends Event
{
    // Properties
    // =========================================================================

    public array $options = [];
    public mixed $value = null;
    public ?ElementInterface $element = null;
}
