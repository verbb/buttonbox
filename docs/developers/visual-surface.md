# Visual Surface

A visual option’s `surface` property is a `verbb\buttonbox\fields\data\VisualSurfaceData` object describing colour, dimensions or typography. Obtain it with `{% set surface = entry.brandSurface.surface %}`. The object exists even when no surface is configured; its `mode` is then null.

See [Surface Definitions](option-data.md#surface-definitions) for supported modes, configuration keys and bounds. These describe authoring previews and do not impose frontend styles.

## Properties

Properties that do not apply, or were not supplied, are null; rendering defaults are not necessarily populated into the data object. See the [GraphQL surface table](graphql.md#visual-surface) for schema types.

::: reference
### `mode`

**Type:** `string|null`

Surface mode identifier.
:::

::: reference
### `value`

**Type:** `mixed`

Configured scalar colour, percentage or ratio, or null when absent.
:::

::: reference
### `from`

**Type:** `string|null`

First colour in a split or gradient, or the foreground colour.
:::

::: reference
### `to`

**Type:** `string|null`

Second colour in a split or gradient, or the background colour.
:::

::: reference
### `angle`

**Type:** `float|null`

Split or gradient direction in degrees.
:::

::: reference
### `radius`

**Type:** `float|null`

Shape corner radius in pixels.
:::

::: reference
### `size`

**Type:** `float|null`

Typography preview size in pixels.
:::

::: reference
### `aspectRatio`

**Type:** `string|null`

Shape proportions, such as `1:1`.
:::

For a Visual Choice field with handle `brandSurface` using the [example option set](option-data.md#defining-options), this entry-template snippet reports the selected gradient metadata:

```twig
{% set option = entry.brandSurface %}
{% if option.valid and option.surface.mode == 'gradient' %}
    <p>{{ option.label }}: {{ option.surface.from }} to {{ option.surface.to }}, {{ option.surface.angle ?? 135 }} degrees.</p>
{% endif %}
```

For public components, prefer mapping stable values to your project's classes or design tokens. Button Box does not provide a public rendering helper or load its control-panel CSS on your site.
