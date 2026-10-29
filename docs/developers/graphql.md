# GraphQL

Button Box adds field types to Craft's GraphQL schema. Visual Choice and Position return objects, Visual Multi-Choice returns a list, and Rating returns an integer or null. Mutations accept stored identities rather than visual metadata.

## Schema and Example Setup

Create the fields on an entry type and add that type to a section before querying them. The examples use a Blog section with handle `blog`, a Post entry type with handle `post`, and these field handles:

| Handle | Field type | Example options |
| --- | --- | --- |
| `cardTreatment` | Visual Choice | Quiet (`quiet`), Featured (`featured`) |
| `features` | Visual Multi-Choice | Analytics (`analytics`), Search (`search`) |
| `focalPosition` | Position | Focal point preset, including `bottom-right` |
| `editorialRating` | Rating | Maximum 5 |

In **GraphQL → Schemas**, allow reading the Blog section in the schema used by your request. Use Craft's GraphiQL explorer to inspect the resulting schema and run the query. Authenticated requests use a token associated with that schema; send it in the `Authorization: Bearer <token>` header to your configured GraphQL endpoint. Only deliberately public content should be enabled in the public schema. Craft edition and API access requirements follow [Craft's GraphQL documentation](https://craftcms.com/docs/5.x/development/graphql.html).

Replace the section, entry-type and field handles throughout the examples with your own. The fragment type `post_Entry` comes from the entry type handle. Button Box does not create this section, entry type or content for you.

## Reading Values

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

## Output Types

| Field | Output | Mutation input |
| --- | --- | --- |
| Visual Choice | `ButtonBoxVisualOption` | `String` |
| Visual Multi-Choice | `[ButtonBoxVisualOption]` | `[String]` |
| Position | `ButtonBoxPosition` | `String` |
| Width | `String` | `String` |
| Rating | `Int` | `Int` |
| Action Links | Excluded | Excluded |

The object fields below use GraphQL type notation: `!` means non-null; types without it are nullable.

### Visual Option

`ButtonBoxVisualOption` describes a selected choice and its visual metadata.

| Property | Type | Description |
| --- | --- | --- |
| `value` | `String` | Stored option identity. |
| `label` | `String` | Configured display label. |
| `selected` | `Boolean!` | Whether the option is selected. |
| `valid` | `Boolean!` | Matches an enabled option in the current source. |
| `disabled` | `Boolean!` | Unavailable for selection. |
| `description` | `String` | Supporting text for the option. |
| `icon` | `String` | Craft, custom-gallery or bundled icon identifier. |
| `color` | `String` | Simple colour cue. |
| `imageUrl` | `String` | Resolved image URL. |
| `imageAlt` | `String` | Alternative text for the image. |
| `category` | `String` | Metadata for templates and integrations. |
| `explanation` | `String` | Reason a disabled option is unavailable. |
| `surface` | `ButtonBoxVisualSurface` | Nested visual metadata. |

### Visual Surface

`ButtonBoxVisualSurface` describes the option’s colour, dimensions or typography. Properties that do not apply or were not supplied are null. See [Option Data](option-data.md#surface-definitions) for supported modes, bounds and definitions.

| Property | Type | Description |
| --- | --- | --- |
| `mode` | `String` | Surface mode identifier. |
| `value` | `String` | Colour, percentage or ratio as a string. |
| `from` | `String` | First colour in a split or gradient, or the foreground colour. |
| `to` | `String` | Second colour in a split or gradient, or the background colour. |
| `angle` | `Float` | Split or gradient direction in degrees. |
| `radius` | `Float` | Shape corner radius in pixels. |
| `size` | `Float` | Typography preview size in pixels. |
| `aspectRatio` | `String` | Shape proportions, such as `1:1`. |

Add a surface selection to `cardTreatment` when you configure a surface on those options:

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

### Position

`ButtonBoxPosition` describes the selected position and its placement in the configured arrangement. Alignment is inferred from standard named values; custom identities have null `horizontal`, `vertical`, `x` and `y` properties.

Rows and columns are null when no configured option matches. The x/y coordinates are not CSS percentages.

| Property | Type | Description |
| --- | --- | --- |
| `value` | `String` | Stored position identity. |
| `label` | `String` | Configured display label. |
| `valid` | `Boolean!` | Enabled position or an empty selection. |
| `disabled` | `Boolean!` | Whether the configured position is unavailable for selection. |
| `row` | `Int` | One-based row in the arrangement. |
| `column` | `Int` | One-based column in the arrangement. |
| `horizontal` | `String` | Named horizontal alignment: `left`, `center` or `right`. |
| `vertical` | `String` | Named vertical alignment: `top`, `center` or `bottom`. |
| `x` | `Int` | -1 for left, 0 for centre, 1 for right. |
| `y` | `Int` | -1 for top, 0 for centre, 1 for bottom. |

### Width

Width returns its stored identity as a `String`. Use the `label: true` argument to request its configured label instead, for example `layoutWidth(label: true)` for a field with handle `layoutWidth`. An empty selection returns null; a removed identity returns its stored string with a null label. Percentage and availability metadata are available through the [WidthData](width-data.md) object in Twig and PHP.

### Empty and Unavailable Values

An empty Visual Choice returns an object with a null value and `valid: false`. An empty Position has a null value and `valid: true`, so check its value before using its alignment metadata. Removed selections retain their stored identity with `valid: false`. An empty multi-choice returns an empty list. An unset Rating returns null. Check the value and validity rather than assuming that every returned object represents an available selection.

## Saving Values

Use a private schema and token with permission to edit entries in the Blog section. Mutation names include both the section and entry-type handles; inspect your schema for the exact name. This example updates an existing entry, preserving unrelated fields because they are omitted. Run it against a development entry first:

```graphql
mutation UpdateChoices($id: ID!, $treatment: String, $features: [String], $position: String, $rating: Int) {
  save_blog_post_Entry(
    id: $id
    cardTreatment: $treatment
    features: $features
    focalPosition: $position
    editorialRating: $rating
  ) {
    id
    cardTreatment { value valid }
    features { value }
    focalPosition { value }
    editorialRating
  }
}
```

Supply variables using the ID of an existing Blog entry:

```json
{
  "id": "42",
  "treatment": "featured",
  "features": ["analytics", "search"],
  "position": "bottom-right",
  "rating": 4
}
```

For optional fields, use an empty list to clear multiple choices and null to clear an existing single choice, position or rating. Required fields and minimum-selection settings still apply. A supplied null clears Rating even on a new entry; omitting the field lets its configured default initialise the value. Omit an argument when that field should remain unchanged. A rating must be a whole integer within its configured maximum; send no label, image or surface data as mutation input.

After a successful mutation, query the same entry again to verify the stored identities. Handle GraphQL errors explicitly; a response containing `errors` is not confirmation that the requested save succeeded.
