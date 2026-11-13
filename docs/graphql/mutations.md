# Mutations

Button Box doesn’t add its own GraphQL mutations. Its fields add arguments to Craft’s element mutations, such as `save_blog_post_Entry`, and each argument takes the stored identity of a choice rather than its visual metadata.

| Field | Mutation Argument |
| --- | --- |
| Visual Choice | `String` |
| Visual Multi-Choice | `[String]` |
| Position | `String` |
| Width | `String` |
| Rating | `Int` |

## Save Field Values

Use a private schema and token with permission to edit entries in the Blog section. Mutation names include both the section and entry-type handles. Inspect your schema for the exact name. This example updates an existing entry, preserving unrelated fields because they are omitted. Run it against a development entry first:

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

For optional fields, use an empty list to clear multiple choices and null to clear an existing single choice, position or rating. Required fields and minimum-selection settings still apply. A supplied null clears Rating even on a new entry. Omitting the field lets its configured default initialise the value. Omit an argument when that field should remain unchanged. A rating must be a whole integer within its configured maximum. Send no label, image or surface data as mutation input.

After a successful mutation, query the same entry again to verify the stored identities. Handle GraphQL errors explicitly. A response containing `errors` is not confirmation that the requested save succeeded.
