# Position Data

A Position field returns a `verbb\buttonbox\fields\data\PositionData` object. Obtain it with `{% set position = entry.focalPosition %}`. Printing it outputs the stored identity. See [Using Field Values](../template-guides/using-field-values.md#position) for an image-positioning example.

## Properties

Treat returned metadata as read-only and edit the field settings to change it.

::: reference
### `value`

**Type:** `string|null`

Stored position identity.
:::

::: reference
### `label`

**Type:** `string|null`

Configured label.
:::

::: reference
### `valid`

**Type:** `bool`

Enabled position or an empty selection.
:::

::: reference
### `disabled`

**Type:** `bool`

Whether the configured position is unavailable for selection.
:::

::: reference
### `row`

**Type:** `int|null`

One-based row in the current arrangement.
:::

::: reference
### `column`

**Type:** `int|null`

One-based column in the current arrangement.
:::

::: reference
### `horizontal`

**Type:** `string|null`

`left`, `center` or `right`.
:::

::: reference
### `vertical`

**Type:** `string|null`

`top`, `center` or `bottom`.
:::

::: reference
### `x`

**Type:** `int|null`

-1 for left, 0 for centre, 1 for right.
:::

::: reference
### `y`

**Type:** `int|null`

-1 for top, 0 for centre, 1 for bottom.
:::

::: reference
### `selected`

**Type:** `bool`

Whether this option is selected.
:::

::: reference
### `options`

**Type:** `PositionData[]`

All configured positions, in arrangement order.
:::

Rows and columns are one-based and null when no configured option matches. Reordering positions or changing grid columns updates this metadata without changing stored values. Custom identities have null `horizontal`, `vertical`, `x` and `y` properties. The x/y scale is not a CSS percentage.

An empty selection has a null value and `valid: true`, with centre alignment (`horizontal` and `vertical` are `center`; `x` and `y` are `0`). Removed identities retain their value with `valid: false`; disabled positions retain their label and coordinates but are also invalid. Check `value` as well as `valid` when a selection is required. Only the field selection’s `options` list is populated; its items describe individual positions.

## Available Positions

For a Position field with handle `focalPosition`, list configured positions and their selection state:

```twig
{% for position in entry.focalPosition.options %}
    <p>{{ position.label }}{{ position.selected ? ' (selected)' : '' }}</p>
{% endfor %}
```

The list includes disabled positions. Removed identities are absent from the list even when they remain stored as the field’s value.
