# Visual Options

A Visual Multi-Choice field returns a `verbb\buttonbox\fields\data\MultiVisualOptionData` collection. Obtain it with `{% set choices = entry.features %}`. Each selected item is a [VisualOptionData](visual-option.md) object. An empty field returns an empty collection.

[Using Field Values](../template-guides/using-field-values.md#visual-multi-choice) shows rendering examples. The collection supports iteration, numeric indexing and Twig’s `length` filter. Check each item’s `valid` property before rendering it: removed and disabled selections remain in the collection.

## Selected Choices

```twig
{% set choices = entry.features %}

<p>{{ choices|length }} selected</p>
{% for option in choices %}
    {% if option.valid %}
        <span>{{ option.label }}</span>
    {% endif %}
{% endfor %}
```

Selections are a set of identities, not a ranking. Saved configured choices follow option order. Removed identities follow those choices and remain available for diagnostics. Treat the returned collection as read-only. Update the entry’s field value to save a different selection.

## Available Choices

The `options` property is an array of every configured [VisualOptionData](visual-option.md), including unselected and disabled choices. Each item’s `selected` flag reports whether it is selected. Removed identities are absent from this list.

```twig
{% for option in entry.features.options %}
    <p>{{ option.label }}{{ option.selected ? ' (selected)' : '' }}</p>
{% endfor %}
```

## Methods

::: reference
### `contains(value)`

**Argument:** Stored identity · **Returns:** `bool`

Checks whether the selected collection contains the identity, converting the argument to a string. It includes unavailable selections. Check the matching option’s `valid` property when availability matters.

```twig
{% if entry.features.contains('analytics') %}
    <p>Analytics is selected.</p>
{% endif %}
```
:::
