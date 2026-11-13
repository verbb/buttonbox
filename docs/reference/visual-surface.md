# Visual Surface

A visual option’s `surface` property is a `verbb\buttonbox\fields\data\VisualSurfaceData` object describing colour, dimensions or typography. Obtain it with `{% set surface = entry.brandSurface.surface %}`. The object exists even when no surface is configured. Its `mode` is then null.

See [Surface Definitions](../developers/option-data.md#surface-definitions) for supported modes, configuration keys and bounds. These describe authoring previews and do not impose frontend styles.

## Properties

Properties that do not apply, or were not supplied, are null. Rendering defaults are not necessarily populated into the data object. See the [`ButtonBoxVisualSurface` type](../graphql/interfaces-types.md#the-buttonboxvisualsurface-type) for schema types.

::: reference
### `mode`

**Type:** `string|null`

The surface mode, such as `solid`, `gradient` or `text`, or null when the option has no surface. [Surface Definitions](../developers/option-data.md#surface-definitions) lists every mode.
:::

::: reference
### `value`

**Type:** `mixed`

The surface’s single value, such as a colour for `solid`, a percentage for `width` or a ratio for `ratio`. This is null when the mode doesn’t use one.
:::

::: reference
### `from`

**Type:** `string|null`

The first colour in a split or gradient, or the foreground colour for `foregroundBackground`.
:::

::: reference
### `to`

**Type:** `string|null`

The second colour in a split or gradient, or the background colour for `foregroundBackground`.
:::

::: reference
### `angle`

**Type:** `float|null`

The split or gradient direction in degrees.
:::

::: reference
### `radius`

**Type:** `float|null`

The corner radius of a `shape` surface, in pixels.
:::

::: reference
### `size`

**Type:** `float|null`

The preview font size of a `text` surface, in pixels.
:::

::: reference
### `aspectRatio`

**Type:** `string|null`

The proportions of a `shape` surface, such as `1:1`.
:::

For a Visual Choice field with handle `brandSurface` using the [example option set](../developers/option-data.md#defining-options), this entry-template snippet reports the selected gradient metadata:

```twig
{% set option = entry.brandSurface %}
{% if option.valid and option.surface.mode == 'gradient' %}
    <p>{{ option.label }}: {{ option.surface.from }} to {{ option.surface.to }}, {{ option.surface.angle ?? 135 }} degrees.</p>
{% endif %}
```

For public components, prefer mapping stable values to your project's classes or design tokens. Button Box does not provide a public rendering helper or load its control-panel CSS on your site.
