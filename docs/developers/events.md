# Events

Button Box provides events for extending its functionality. Modules and plugins can register event listeners, typically in their `init()` methods, to change Button Box’s behaviour.

Target the relevant field class and check the sender’s handle, so a listener only changes the intended field.

## Option Events

### The `defineVisualOptions` Event

The event that is triggered when a Visual Choice or Visual Multi-Choice field resolves its options with **Options Type** set to **Dynamic (PHP)**. It runs after the initial options are normalised and before Craft’s inherited `defineOptions` event. Assign the resulting choices to `$event->options`, and Button Box normalises them again before continuing.

Listen on `BaseVisualOptionsField::EVENT_DEFINE_VISUAL_OPTIONS` to handle either visual field type. This example supplies choices for a field with handle `publishingChannel`:

```php
<?php

use verbb\buttonbox\events\DefineVisualOptionsEvent;
use verbb\buttonbox\fields\BaseVisualOptionsField;

use yii\base\Event;

Event::on(
    BaseVisualOptionsField::class,
    BaseVisualOptionsField::EVENT_DEFINE_VISUAL_OPTIONS,
    function(DefineVisualOptionsEvent $event): void {
        if ($event->sender->handle !== 'publishingChannel') {
            return;
        }

        $event->options = [
            ['label' => 'Editorial', 'value' => 'editorial', 'icon' => 'newspaper'],
            ['label' => 'Commerce', 'value' => 'commerce', 'icon' => 'cart-shopping'],
            ['label' => 'Support', 'value' => 'support', 'icon' => 'life-ring'],
        ];
    },
);
```

The payload is `verbb\buttonbox\events\DefineVisualOptionsEvent`. Types below use PHP notation, where `?` permits null.

| Property | Type | Description |
| --- | --- | --- |
| `options` | `array` | Normalised choices to replace or modify. |
| `value` | `mixed` | Current field value supplied by the caller; may be null. |
| `element` | `?craft\base\ElementInterface` | Associated element, when available. |
| `sender` | `BaseVisualOptionsField` | Field that triggered the event. |

Return the shared [option definition](option-data.md#defining-options), with stable string values and labels. [Custom Option Providers](custom-option-providers.md) explains field setup, context handling and how to verify the resulting choices.

### The `defineOptions` Event

The event that is triggered when supported fields allow adjustments through Craft’s inherited `BaseOptionsField::EVENT_DEFINE_OPTIONS`.

Visual Choice and Visual Multi-Choice trigger it after resolving Custom, Option set or Dynamic (PHP) options. For Dynamic (PHP), it follows `defineVisualOptions`. Modified options are normalised again.

Width (`WidthChoice`) triggers it while rendering the input or static display, after loading the configured width options. Changes affect that rendering, not the field’s stored option configuration or validation rules.

Position, Rating and Action Links do not emit these option events.

This example adjusts a label after a visual field’s source has been resolved. Register it on `BaseVisualOptionsField` so it applies only to Visual Choice and Visual Multi-Choice:

```php
<?php

use verbb\buttonbox\fields\BaseVisualOptionsField;

use craft\events\DefineInputOptionsEvent;

use yii\base\Event;

Event::on(
    BaseVisualOptionsField::class,
    BaseVisualOptionsField::EVENT_DEFINE_OPTIONS,
    function(DefineInputOptionsEvent $event): void {
        if ($event->sender->handle !== 'publishingChannel') {
            return;
        }

        foreach ($event->options as $index => $option) {
            if ($option['value'] === 'commerce') {
                $event->options[$index]['label'] = 'Online store';
            }
        }
    },
);
```

The payload is `craft\events\DefineInputOptionsEvent`:

| Property | Type | Description |
| --- | --- | --- |
| `options` | `array` | Resolved choices to modify. |
| `value` | `mixed` | Current field value supplied by the caller. |
| `element` | `?craft\base\ElementInterface` | Associated element, when available. |
| `sender` | `BaseVisualOptionsField` or `WidthChoice` | Field that triggered the event. |

Visual fields use the shared option definition. Width options contain `label`, `value`, `percentage`, `default`, `disabled` and `explanation`.

For a Width listener, import `verbb\buttonbox\fields\WidthChoice` and register on `WidthChoice::class` with `WidthChoice::EVENT_DEFINE_OPTIONS`. Keep configured identities intact and percentages increasing from greater than zero up to 100. Use the Dynamic (PHP) source on a visual field when you need to supply choices consistently beyond input rendering.

Neither event is cancellable through an `isValid` flag. Modify `options` to change the choices. Changing `value` or `element` on the event does not update stored content.
