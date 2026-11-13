# Width Data

A Width field returns a `verbb\buttonbox\fields\data\WidthData` object. Obtain it with `{% set width = entry.layoutWidth %}`. Printing it returns the stored identity. See [Using Field Values](../template-guides/using-field-values.md#width) for a layout-class example.

## Properties

Treat metadata as read-only and edit the field settings to change it.

::: reference
### `value`

**Type:** `string|null`

The stored width identity, or null when nothing is selected. Printing the object outputs this value.
:::

::: reference
### `label`

**Type:** `string|null`

The width’s configured label, or null when nothing is selected or the stored identity was removed.
:::

::: reference
### `selected`

**Type:** `bool`

Whether this option is selected.
:::

::: reference
### `valid`

**Type:** `bool`

Whether the value matches an enabled width in the field’s settings.
:::

::: reference
### `percentage`

**Type:** `float|null`

The width’s configured percentage, greater than 0 and up to 100, or null when nothing matches.
:::

::: reference
### `disabled`

**Type:** `bool`

Whether the width is configured as unavailable for selection.
:::

::: reference
### `explanation`

**Type:** `string|null`

The reason a disabled width is unavailable, from its **Unavailable reason** setting.
:::

::: reference
### `options`

**Type:** `WidthData[]`

All the field’s configured widths, in the order of its settings table.
:::

The stored identity is independent of the percentage: `wide` can represent 75%. A disabled width retains its label, percentage and explanation but has `valid: false`. A removed identity retains its value, with null metadata and `valid: false`. An empty selection has a null value and percentage and is also invalid. An optional field can still be saved empty.

The `options` list includes disabled widths and excludes removed identities. Only the field selection’s list is populated. Its items describe individual widths. Input-only changes from the `defineOptions` event do not alter this metadata.

## Using Percentages

For a Width field with handle `layoutWidth`, apply the configured percentage to a layout that supports it:

```twig
{% set width = entry.layoutWidth %}
{% if width.valid and width.percentage is not null %}
    <div style="width: {{ width.percentage }}%">{{ entry.title }}</div>
{% endif %}
```

Button Box supplies the number. Your templates and styles decide how it affects the frontend. GraphQL returns the stored string rather than this object.
