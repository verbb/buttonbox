# Upgrading from v5.0

Button Box 5.1 requires **Craft CMS 5.10.11 or greater**. Existing fields keep their settings, stored values and template behaviour. No field conversion is required when updating.

## Legacy Fields

Buttons, Colours, Text Size, Width, Stars and Triggers remain supported in Button Box 5.x. They appear as **(Legacy)** in the field picker and record a Craft deprecation notice when rendered in the control panel.

| Legacy field | Replacement |
| --- | --- |
| Buttons | [Visual Choice](../feature-tour/visual-choices.md) |
| Colours | [Visual Choice](../feature-tour/visual-choices.md) with Swatches |
| Text Size | [Visual Choice](../feature-tour/visual-choices.md) with List |
| Width | [Width](../feature-tour/width.md) |
| Stars | [Rating](../feature-tour/rating.md) |
| Triggers | [Action Links](../feature-tour/action-links.md) |

## Optional Field Conversion

List available conversions and any blockers:

```shell
php craft buttonbox/convert
```

Preview a field by its handle, then use `--apply=1` to convert it:

```shell
php craft buttonbox/convert/field layoutStyle
php craft buttonbox/convert/field layoutStyle --apply=1
```

Conversion preserves field identity and layout placements, but appearance and returned values can change. Templates and application code are not updated automatically. See [Using Field Values](../template-guides/using-field-values.md) for Twig examples and [GraphQL](../developers/graphql.md) for queries. PHP integrations that target legacy field classes or Craft’s option-data classes need updating.

### Buttons, Colours and Text Size

Stored string values are preserved. Buttons uses Button group or Tiles, Colours uses Swatches, and Text Size uses List with typography metadata; not all legacy appearance settings are copied. Buttons whose images all hide their labels keep those labels hidden and show them as tooltips. The conversion preview warns about mixed label settings, image alignment and full-width display, which aren’t copied.

Values become [SingleVisualOptionData](../developers/visual-option.md) objects. GraphQL output changes from a string to an object: select properties such as `value` and `label`. Mutation input remains a string.

### Stars to Rating

The configured maximum is retained and must be between 2 and 20. Invalid stored values block conversion, as do zeros in required placements. Optional zeros become `null` when read and are stored as null on the next save. GraphQL output and mutation input change from `String` to `Int`.

### Triggers to Action Links

Complete links retain their labels, URLs, images and new-window settings. JavaScript rows, missing labels or URLs, and invalid link settings block conversion. Hidden-label and graphic/full-width settings are not copied.

Action Links has no content value or GraphQL field. Remove any template or GraphQL references to the converted field’s content.

### Width

Stored strings and scalar GraphQL output are preserved; equally spaced options become explicit percentages. Values become [WidthData](../developers/width-data.md) objects, retaining `.value`, `.label`, `.valid` and string output while adding percentage metadata. The field class changes from `Width` to `WidthChoice`.
