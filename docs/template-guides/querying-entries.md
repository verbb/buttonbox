# Querying Entries

Use field handles as parameters on Craft entry queries. These examples belong in a Twig template and assume a Blog section with handle `blog`, a Visual Choice field `cardTreatment`, a Visual Multi-Choice field `features`, a Position field `focalPosition`, a Width field `layoutWidth` and a Rating field `editorialRating`. Replace those handles with your own. Query stored values, not labels or visual metadata.

## Single Choices

Find entries whose Card Treatment stores `featured`:

```twig
{% set entries = craft.entries()
    .section('blog')
    .cardTreatment('featured')
    .all() %}

{% for entry in entries %}
    <h2>{{ entry.title }}</h2>
{% endfor %}
```

Position and Width also filter by stored identity. For example, `.focalPosition('bottom-right')` selects that named position and `.layoutWidth('wide')` selects your `wide` option, regardless of its configured percentage.

## Multiple Choices

A single value tests membership. This query finds entries whose features include `analytics`:

```twig
{% set entries = craft.entries()
    .section('blog')
    .features('analytics')
    .all() %}
```

Use `or` for any matching choice and `and` when every named choice must be present. These do not require the selected set to match exactly:

```twig
{% set anyFeature = craft.entries()
    .section('blog')
    .features(['or', 'analytics', 'search'])
    .all() %}

{% set bothFeatures = craft.entries()
    .section('blog')
    .features(['and', 'analytics', 'search'])
    .all() %}
```

Use `['not', 'analytics']` to find entries that exclude Analytics, including entries with no selections. Add a separate `:notempty:` constraint if empty fields should be excluded.

## Empty Values

Craft's empty-value parameters work for choice and rating fields. For example:

```twig
{% set unclassified = craft.entries()
    .section('blog')
    .cardTreatment(':empty:')
    .all() %}

{% set withFeatures = craft.entries()
    .section('blog')
    .features(':notempty:')
    .all() %}
```

An unavailable stored identity is not empty. It remains stored until corrected, so an empty-value query is not an invalid-value inventory.

## Ratings and Sorting

Rating supports numeric comparisons. Find ratings of at least four and put the highest first:

```twig
{% set highlyRated = craft.entries()
    .section('blog')
    .editorialRating('>= 4')
    .orderBy('editorialRating desc')
    .all() %}
```

Visual Choice, Position and Width sort by their stored strings, not by option label, table order, coordinate or configured percentage. For example, `.orderBy('cardTreatment asc')` sorts the stored treatment identities. Multi-choice sorting uses the stored list representation; it does not rank entries by selection count or by the first label. Use a dedicated numeric sort field when the project needs an explicit ranking.

## Control-Panel Queries

Add a stored field to an element index's available columns to see its compact value. Searchable choice fields contribute selected values and labels to Craft's search index when **Use this field's values as search keywords** is enabled. Descriptions and surface metadata are not additional search terms. Position and Width use option conditions; Rating uses numeric conditions. Action Links has no stored value to query or sort.
