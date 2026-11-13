# Interfaces & Types

Button Box adds three object types to Craft’s GraphQL schema for the values of its fields. The other fields return scalar values. [Queries](queries.md) shows how to request these values through Craft’s entry queries.

| Field | GraphQL Type |
| --- | --- |
| Visual Choice | `ButtonBoxVisualOption` |
| Visual Multi-Choice | `[ButtonBoxVisualOption]` |
| Position | `ButtonBoxPosition` |
| Width | `String`, with a `label` argument |
| Rating | `Int` |

Action Links fields aren’t included in the schema.

## Field Value Types

A `!` after a field’s type means it’s never null.

### The `ButtonBoxVisualOption` Type

A Visual Choice field returns one `ButtonBoxVisualOption`, and a Visual Multi-Choice field returns a list of them. Each describes a choice and its visual metadata.

```graphql
cardTreatment {
  value
  label
  valid
  icon
  imageUrl
  imageAlt
}
```

```json
{
  "cardTreatment": {
    "value": "featured",
    "label": "Featured",
    "valid": true,
    "icon": "star",
    "imageUrl": null,
    "imageAlt": null
  }
}
```

::: reference
#### `category`

**Type:** `String`

The option’s category metadata, for templates and integrations.
:::

::: reference
#### `color`

**Type:** `String`

A simple colour cue for the option.
:::

::: reference
#### `description`

**Type:** `String`

The supporting text for the option.
:::

::: reference
#### `disabled`

**Type:** `Boolean!`

Whether the option is unavailable for selection.
:::

::: reference
#### `explanation`

**Type:** `String`

The reason a disabled option is unavailable.
:::

::: reference
#### `icon`

**Type:** `String`

A Craft, custom gallery or bundled icon identifier.
:::

::: reference
#### `imageAlt`

**Type:** `String`

The alternative text for the option’s image.
:::

::: reference
#### `imageUrl`

**Type:** `String`

The resolved URL of the option’s image.
:::

::: reference
#### `label`

**Type:** `String`

The option’s configured label.
:::

::: reference
#### `selected`

**Type:** `Boolean!`

Whether the option is selected.
:::

::: reference
#### `surface`

**Type:** `ButtonBoxVisualSurface`

The option’s colour, dimension or typography metadata. See [the `ButtonBoxVisualSurface` type](#the-buttonboxvisualsurface-type).
:::

::: reference
#### `valid`

**Type:** `Boolean!`

Whether the value matches an enabled option in the field’s current options.
:::

::: reference
#### `value`

**Type:** `String`

The option’s stored identity.
:::

### The `ButtonBoxVisualSurface` Type

`ButtonBoxVisualSurface` describes a visual option’s colour, dimensions or typography. Request it through an option’s `surface` field. Properties that don’t apply to the mode, or weren’t supplied, are null. [Option Data](../developers/option-data.md#surface-definitions) lists the supported modes and their bounds.

::: reference
#### `angle`

**Type:** `Float`

The split or gradient direction in degrees.
:::

::: reference
#### `aspectRatio`

**Type:** `String`

The shape’s proportions, such as `1:1`.
:::

::: reference
#### `from`

**Type:** `String`

The first colour in a split or gradient, or the foreground colour.
:::

::: reference
#### `mode`

**Type:** `String`

The surface mode, such as `solid`, `gradient` or `text`. This is null when no surface is configured.
:::

::: reference
#### `radius`

**Type:** `Float`

The shape’s corner radius in pixels.
:::

::: reference
#### `size`

**Type:** `Float`

The typography preview size in pixels.
:::

::: reference
#### `to`

**Type:** `String`

The second colour in a split or gradient, or the background colour.
:::

::: reference
#### `value`

**Type:** `String`

A colour, percentage or ratio, as a string.
:::

### The `ButtonBoxPosition` Type

A Position field returns a `ButtonBoxPosition`, describing the selected position and where it sits in the configured arrangement. Alignment is worked out from the standard named values, so a custom identity has null `horizontal`, `vertical`, `x` and `y` values.

```graphql
focalPosition {
  value
  label
  horizontal
  vertical
}
```

```json
{
  "focalPosition": {
    "value": "bottom-right",
    "label": "Bottom right",
    "horizontal": "right",
    "vertical": "bottom"
  }
}
```

::: reference
#### `column`

**Type:** `Int`

The one-based column in the arrangement, or null when no configured option matches.
:::

::: reference
#### `disabled`

**Type:** `Boolean!`

Whether the configured position is unavailable for selection.
:::

::: reference
#### `horizontal`

**Type:** `String`

The named horizontal alignment, `left`, `center` or `right`.
:::

::: reference
#### `label`

**Type:** `String`

The position’s configured label.
:::

::: reference
#### `row`

**Type:** `Int`

The one-based row in the arrangement, or null when no configured option matches.
:::

::: reference
#### `valid`

**Type:** `Boolean!`

Whether the value is an enabled position or an empty selection.
:::

::: reference
#### `value`

**Type:** `String`

The stored position identity.
:::

::: reference
#### `vertical`

**Type:** `String`

The named vertical alignment, `top`, `center` or `bottom`.
:::

::: reference
#### `x`

**Type:** `Int`

The horizontal position, `-1` for left, `0` for centre and `1` for right. These aren’t CSS percentages.
:::

::: reference
#### `y`

**Type:** `Int`

The vertical position, `-1` for top, `0` for centre and `1` for bottom.
:::
