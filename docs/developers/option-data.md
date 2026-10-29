# Option Data

Custom field settings, option sets and PHP providers use arrays to define choices. This page covers those definitions. For values returned to templates, see [Visual Option](visual-option.md), [Visual Options](visual-options.md) and [Visual Surface](visual-surface.md).

## Defining Options

Custom options, config-defined option sets and PHP providers share the same definition. Every option requires a non-empty `label` and stable string `value`; labels and values must be unique within the set. Single-choice fields permit at most one default. Multiple-choice fields can have several defaults. Keep default selections within the field's selection limits.

This complete `/config/buttonbox.php` example defines two surface choices:

```php
<?php

return [
    'optionSets' => [
        'brandSurfaces' => [
            'label' => 'Brand surfaces',
            'options' => [
                [
                    'label' => 'Ocean',
                    'value' => 'ocean',
                    'description' => 'Use for the lead story.',
                    'surface' => [
                        'mode' => 'gradient',
                        'from' => '#0ea5e9',
                        'to' => '#2563eb',
                        'angle' => 135,
                    ],
                ],
                [
                    'label' => 'Ink on paper',
                    'value' => 'ink-paper',
                    'surface' => [
                        'mode' => 'foregroundBackground',
                        'from' => '#292524',
                        'to' => '#f5f5f4',
                    ],
                ],
            ],
        ],
    ],
];
```

Choose **Option set → Brand surfaces** in a Visual Choice field. Its content stores `ocean` or `ink-paper`; it does not duplicate the surface definition into each entry. A [Dynamic (PHP) provider](option-providers.md) assigns the same option arrays to the event's `options` property.

## Surface Definitions

Use these exact mode identifiers in PHP definitions. Numeric sizes are control-panel preview dimensions and do not impose frontend styles.

| `mode` | Definition | Meaning and bounds |
| --- | --- | --- |
| `solid` | `value: '#2563eb'` | One valid colour. |
| `split` | `from`, `to`, optional `angle` | Two colours split evenly. |
| `foregroundBackground` | `from`, `to` | Foreground and background colours, respectively. |
| `gradient` | `from`, `to`, optional `angle` | Two-colour linear gradient. |
| `width` | `value: 75` | Visual-sample percentage, 5–100. |
| `ratio` | `value: '16:9'` | Width:height with positive numeric parts. |
| `text` | `size: 20` | Preview font size from 10 to 64 pixels. |
| `shape` | `radius: 8`, optional `aspectRatio: '1:1'` | Corner radius, 0–999 pixels. |

Split and gradient angles range from 0 to 360 degrees, defaulting to 90 for splits and 135 for gradients. Gradients support two colours, without arbitrary stop lists. Shape ratio `1:1` gives equal width and height. The dedicated Width field accepts stops greater than zero up to 100; the 5–100 range above applies to visual samples.

For example, a provider can use `['mode' => 'text', 'size' => 20]` for typography or `['mode' => 'shape', 'radius' => 8, 'aspectRatio' => '1:1']` for a rounded square. Use validated colour values such as hex colours for `value`, `from` and `to`; arbitrary CSS declarations are not surface values.
