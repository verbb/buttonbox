# Position Data

A Position field returns a `verbb\buttonbox\fields\data\PositionData` object. Obtain it with `{% set position = entry.focalPosition %}`. Printing it outputs the stored identity. See [Using Field Values](../template-guides/using-field-values.md#position) for an image-positioning example.

## Properties

Treat returned metadata as read-only and edit the field settings to change it.

::: reference
### `value`

**Type:** `string|null`

The stored position identity, such as `bottom-right`, or null when nothing is selected.
:::

::: reference
### `label`

**Type:** `string|null`

The position’s configured label, or null when nothing is selected.
:::

::: reference
### `valid`

**Type:** `bool`

Whether the value is an enabled position or an empty selection. Removed and disabled positions are invalid.
:::

::: reference
### `disabled`

**Type:** `bool`

Whether the configured position is unavailable for selection.
:::

::: reference
### `row`

**Type:** `int|null`

The one-based row of the position in the current arrangement, or null when no configured option matches.
:::

::: reference
### `column`

**Type:** `int|null`

The one-based column of the position in the current arrangement, or null when no configured option matches.
:::

::: reference
### `horizontal`

**Type:** `string|null`

The named horizontal alignment, `left`, `center` or `right`.
:::

::: reference
### `vertical`

**Type:** `string|null`

The named vertical alignment, `top`, `center` or `bottom`.
:::

::: reference
### `x`

**Type:** `int|null`

The horizontal position, `-1` for left, `0` for centre and `1` for right.
:::

::: reference
### `y`

**Type:** `int|null`

The vertical position, `-1` for top, `0` for centre and `1` for bottom.
:::

::: reference
### `selected`

**Type:** `bool`

Whether this option is selected.
:::

::: reference
### `options`

**Type:** `PositionData[]`

All the field’s configured positions, in arrangement order.
:::

Rows and columns are one-based and null when no configured option matches. Reordering positions or changing grid columns updates this metadata without changing stored values. Custom identities have null `horizontal`, `vertical`, `x` and `y` properties. The x/y scale is not a CSS percentage.

An empty selection has a null value and `valid: true`, with centre alignment (`horizontal` and `vertical` are `center`, and `x` and `y` are `0`). Removed identities retain their value with `valid: false`, and disabled positions retain their label and coordinates but are also invalid. Check `value` as well as `valid` when a selection is required. Only the field selection’s `options` list is populated. Its items describe individual positions.

## Available Positions

For a Position field with handle `focalPosition`, list configured positions and their selection state:

```twig
{% for position in entry.focalPosition.options %}
    <p>{{ position.label }}{{ position.selected ? ' (selected)' : '' }}</p>
{% endfor %}
```

The list includes disabled positions. Removed identities are absent from the list even when they remain stored as the field’s value.
