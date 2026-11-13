# Queries

Button Box doesn’t add its own GraphQL queries. Its fields add their values to Craft’s element types, so you query them through Craft’s own queries, such as `entries`, the same way as any other custom field. Visual Choice and Position return objects, Visual Multi-Choice returns a list, and Width and Rating return scalar values. [Interfaces & Types](interfaces-types.md) lists every field on the returned objects.

## Set Up the Schema

Create the fields on an entry type and add that type to a section before querying them. The examples use a Blog section with handle `blog`, a Post entry type with handle `post`, and these field handles:

| Handle | Field type | Example options |
| --- | --- | --- |
| `cardTreatment` | Visual Choice | Quiet (`quiet`), Featured (`featured`) |
| `features` | Visual Multi-Choice | Analytics (`analytics`), Search (`search`) |
| `focalPosition` | Position | Focal point preset, including `bottom-right` |
| `editorialRating` | Rating | Maximum 5 |

In **GraphQL → Schemas**, allow reading the Blog section in the schema used by your request. Use Craft's GraphiQL explorer to inspect the resulting schema and run the query. Authenticated requests use a token associated with that schema. Send it in the `Authorization: Bearer <token>` header to your configured GraphQL endpoint. Only deliberately public content should be enabled in the public schema. Craft edition and API access requirements follow [Craft's GraphQL documentation](https://craftcms.com/docs/5.x/development/graphql.html).

Replace the section, entry-type and field handles throughout the examples with your own. The fragment type `post_Entry` comes from the entry type handle. Button Box does not create this section, entry type or content for you.

## Query Field Values

After saving a Blog entry with Featured, Analytics, Bottom right and a rating of four, run:

```graphql
query ButtonBoxExample {
  entries(section: "blog", limit: 1) {
    id
    title
    ... on post_Entry {
      cardTreatment {
        value
        label
        valid
        disabled
      }
      features {
        value
        label
      }
      focalPosition {
        value
        row
        column
        x
        y
      }
      editorialRating
    }
  }
}
```

For an entry with ID 42 and title “Example post”, representative output is:

```json
{
  "data": {
    "entries": [
      {
        "id": "42",
        "title": "Example post",
        "cardTreatment": {"value": "featured", "label": "Featured", "valid": true, "disabled": false},
        "features": [{"value": "analytics", "label": "Analytics"}],
        "focalPosition": {"value": "bottom-right", "row": 3, "column": 3, "x": 1, "y": 1},
        "editorialRating": 4
      }
    ]
  }
}
```

Action Links fields aren’t included in the GraphQL schema.

## Query Visual Surfaces

Request the nested `surface` object when you configure a surface on a field’s options. This fragment adds it to the `cardTreatment` selection in the example above:

```graphql
fragment TreatmentSurface on post_Entry {
  cardTreatment {
    value
    surface {
      mode
      from
      to
      angle
    }
  }
}
```

For a split surface running from navy to white, the `cardTreatment` result is:

```json
{
  "cardTreatment": {
    "value": "featured",
    "surface": {
      "mode": "split",
      "from": "#1f2a44",
      "to": "#ffffff",
      "angle": 135
    }
  }
}
```

## Query a Width Label

A Width field accepts one argument, `label`.

| Argument | Type | Description |
| --- | --- | --- |
| `label` | `Boolean` | Return the selected width’s configured label instead of its stored identity. |

```graphql
{
  entries(section: "blog", limit: 1) {
    ... on post_Entry {
      layoutWidth
      layoutWidthLabel: layoutWidth(label: true)
    }
  }
}
```

```json
{
  "data": {
    "entries": [
      {
        "layoutWidth": "50",
        "layoutWidthLabel": "Half"
      }
    ]
  }
}
```

An empty selection returns null, and a removed identity returns its stored string with a null label. Percentage and availability metadata are available through the [Width Data](../reference/width-data.md) object in Twig and PHP.

## Empty and Unavailable Values

An empty Visual Choice returns an object with a null value and `valid: false`. An empty Position has a null value and `valid: true`, so check its value before using its alignment metadata. Removed selections retain their stored identity with `valid: false`. An empty multi-choice returns an empty list. An unset Rating returns null. Check the value and validity rather than assuming that every returned object represents an available selection.

Saving these fields through Craft’s entry mutations is covered in [Mutations](mutations.md).
