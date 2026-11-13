# Visual Option

A Visual Choice field returns `verbb\buttonbox\fields\data\SingleVisualOptionData`. Each item in a Visual Multi-Choice collection, or in either field’s `options` list, is a `verbb\buttonbox\fields\data\VisualOptionData`. Both expose the properties below. The single-selection object also provides the full `options` list.

Obtain a selection with `{% set option = entry.cardTreatment %}`, or loop over `entry.features` to obtain individual options. [Using Field Values](../template-guides/using-field-values.md) shows complete rendering examples. Treat metadata as read-only: change the field, option set or provider to update it.

Printing an option returns its stored value. An empty single selection is still an object, with `value: null` and `valid: false`. Removed selections retain their original identity with `valid: false`. Disabled selections retain their metadata and also have `valid: false`.

## Properties

::: reference
### `value`

**Type:** `string|null`

The stored identity. Printing the option in Twig casts it to this value. An empty single choice has a null value, and an unavailable stored identity retains its original string.
:::

::: reference
### `label`

**Type:** `string|null`

The configured label. Empty or removed selections can have a null label, so use `value` as a diagnostic fallback.
:::

::: reference
### `selected`

**Type:** `bool`

Whether this option is selected. Selected field values have this set to true, while options obtained from the field value's `options` collection also include unselected choices.
:::

::: reference
### `valid`

**Type:** `bool`

Whether the identity matches an enabled option in the current source. Empty single selections, removed identities and disabled choices have `valid: false`, and Craft's required setting determines whether an empty field prevents saving. Check `disabled` to distinguish a configured but unavailable choice from a removed identity.
:::

::: reference
### `description`

**Type:** `string|null`

The option’s supporting text, or null when none is set. It’s plain metadata, not executable markup.
:::

::: reference
### `icon`

**Type:** `string|null`

A Craft system icon identifier, a configured custom-gallery reference such as `@buttonboxIcons/arrows/next.svg`, or a bundled identifier such as `buttonbox:spacing-small`. It is an identifier rather than SVG markup or an image URL.
:::

::: reference
### `color`

**Type:** `string|null`

An optional simple colour cue. Structured surfaces use the separate `surface` property.
:::

::: reference
### `imageUrl`

**Type:** `string|null`

The resolved image URL. Configured image-folder references are published through Craft's asset manager. A selected Craft asset contributes its public URL, and this property is not an Asset element or asset ID.
:::

::: reference
### `imageAlt`

**Type:** `string|null`

The alternative text for the option’s image, or null when none is set. Choose appropriate alternative text for your public context rather than assuming the control-panel label describes a public image.
:::

::: reference
### `category`

**Type:** `string|null`

The option’s category, for templates and integrations to group or filter by. It does not create control-panel groups and has no field-settings editor.
:::

::: reference
### `disabled`

**Type:** `bool`

Whether this configured option is disabled in the control-panel input. A disabled option remains available as metadata but has `valid: false` and cannot pass ordinary entry validation. Availability is not an application permission check.
:::

::: reference
### `explanation`

**Type:** `string|null`

The unavailable reason for a disabled option. Field settings label this **Unavailable reason**.
:::

::: reference
### `surface`

**Type:** `verbb\buttonbox\fields\data\VisualSurfaceData`

The option’s colour, dimension or typography metadata. The object is present even when no surface is configured, and its `mode` is then null. See [Visual Surface](visual-surface.md) for its properties and [surface definitions](../developers/option-data.md#surface-definitions) for supported modes. A configured `default` flag is used to initialise content and is not a property of the returned option object.
:::

## Available Options

A single-selection value’s `options` property is an array of `VisualOptionData` objects in configured order, including disabled and unselected choices. Each item’s `selected` flag indicates whether it matches the stored selection. Removed identities remain on the selected value but are absent from `options`.

For a Visual Choice field with handle `cardTreatment`, list its configured choices:

```twig
{% for option in entry.cardTreatment.options %}
    <p>{{ option.label }}{{ option.selected ? ' (selected)' : '' }}</p>
{% endfor %}
```

For Visual Multi-Choice, the [collection](visual-options.md) provides `options`. Individual options do not have a nested options list.
