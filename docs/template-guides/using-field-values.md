# Using Field Values

These examples belong in the Twig template for an entry whose layout contains the named fields. Replace the example field handles with your own. Craft supplies `entry` for a section's entry template; other templates must obtain an entry first.

## Visual Choice

A Visual Choice field returns a [SingleVisualOptionData](../developers/visual-option.md) object. Use `.value` for the stored identity and `.label` for its display label. Check `.valid` before rendering a choice that might have been removed or disabled.

```twig
{% set option = entry.cardTreatment %}

{% if option.valid %}
    <article class="card card--{{ option.value }}">
        <h2>{{ entry.title }}</h2>
        {% if option.description %}<p>{{ option.description }}</p>{% endif %}
    </article>
{% endif %}
```

Printing `{{ entry.cardTreatment }}` outputs its stored identity. The [visual option reference](../developers/visual-option.md) describes additional metadata, including images, icons and [surfaces](../developers/visual-surface.md).

## Visual Multi-Choice

Visual Multi-Choice returns a [MultiVisualOptionData](../developers/visual-options.md) collection. Loop over it to render selected choices, or use `contains()` to check for a stored identity. Each item is a [VisualOptionData](../developers/visual-option.md) object with the same label and visual metadata as a single choice:

```twig
{% if entry.features.contains('analytics') %}
    <aside>Analytics enabled</aside>
{% endif %}

{% for option in entry.features %}
    {% if option.valid %}
        <span class="feature feature--{{ option.value }}">{{ option.label }}</span>
    {% endif %}
{% endfor %}
```

`contains()` checks the stored identity, including removed or disabled selections. Use each option’s `.valid` property when deciding whether to render it.

## Position

Position returns a [PositionData](../developers/position-data.md) object. Use `.horizontal` and `.vertical` to position an image when your options use standard names such as `bottom-right`. Custom position values need your own mapping.

For this example, use a Position field with handle `focalPosition`. Add an Assets field with handle `heroImage`, limit it to images, and select an image on the entry. Your stylesheet must give the image a constrained box with `object-fit` for `object-position` to affect cropping.

```twig
{% set image = entry.heroImage.one() %}
{% set position = entry.focalPosition %}
{% if image and position.value is not null and position.valid and position.horizontal is not null and position.vertical is not null %}
    <img src="{{ image.url }}" alt="" style="object-position: {{ position.horizontal }} {{ position.vertical }}">
{% endif %}
```

## Width

Width returns a [WidthData](../developers/width-data.md) object. Use `.value` to choose your project’s layout class and `.label` for display text. Check `.valid` before using the selection. This example uses a field with handle `layoutWidth`:

```twig
{% set width = entry.layoutWidth %}
{% if width.valid %}
    <div class="layout layout--{{ width.value }}">{{ entry.title }}</div>
{% endif %}
```

Define the matching layout classes in your project. You can also use `.percentage` when your layout should follow the configured width; Button Box does not add frontend styles for you.

## Rating

Rating is an integer or `null`. This example uses a field with handle `rating` and a maximum of five; use your configured maximum in the output:

```twig
{% set rating = entry.rating %}
{{ rating is null ? 'Not rated' : rating ~ ' / 5' }}
```

## Invalid Stored Values

A removed selection keeps its `value` but has `valid` set to `false`. This applies to visual choices, positions and widths; for multiple choices, check each selected item. Craft will report the field as invalid when the element is saved. This makes accidental option removal visible instead of silently substituting another choice.

To select entries by these values rather than render one entry, follow [Querying Entries](querying-entries.md).
