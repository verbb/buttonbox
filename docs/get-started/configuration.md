# Configuration

You can customise Button Box’s settings using a PHP configuration file. This is optional: each setting has a default, so you only need to include the values you want to change.

To override a setting, create `buttonbox.php` in your Craft project’s `/config` directory and return an array of setting names and values. For example, the following will use a custom image directory:

```php
<?php

return [
    'imagesPath' => '@webroot/images/field-choices',
];
```

All other settings keep their defaults. Add any further settings you want to change to the same array. The options below explain the available settings and their defaults. You can also manage these settings in the control panel under **Settings → Button Box**.

## Configuration Options

::: reference
### `iconsPath`

**Type:** `string` · **Default:** `'@webroot/buttonbox/icons/'`

Local folder of custom SVG icons. Supports aliases and environment variables.
:::

::: reference
### `imagesPath`

**Type:** `string` · **Default:** `'@webroot/buttonbox/images/'`

Local folder of custom gallery images. Supports aliases and environment variables. Images from this folder are published as public resources.
:::

::: reference
### `optionSets`

**Type:** `array` · **Default:** `[]`

Named sets of visual options keyed by a project-stable handle. Each set accepts an optional `label` and an `options` array. Every option requires `label` and `value`; see the [option metadata table](../feature-tour/visual-choices.md#option-metadata) for supported keys, types and descriptions.

Stored content contains the selected option value, not the set handle or the metadata. Keep values stable when changing a shared set.

See [Config-Defined Sets](../feature-tour/option-sets.md#config-defined-sets) for a complete example and how to select a set in a field. The [option data reference](../developers/option-data.md) covers option and surface definitions.
:::

## Gallery Folders

Under **Settings → Plugins → Button Box → General Settings**, set **Icons Path** and **Images Path** to local folders. Both accept Craft aliases and environment variables. The galleries include files in the configured folder and one level of subfolders. Leave a path empty to disable its custom files; a missing folder gives an empty custom gallery.

Icons accept SVG files, which Craft sanitizes when rendering. Images accept PNG, JPEG, WebP, GIF and AVIF files. Image files offered by the gallery are published through Craft’s asset manager and are publicly accessible. Only place images intended for display in this folder.

Selections store portable references such as `@buttonboxIcons/arrows/next.svg` and `@buttonboxImages/layouts/card.png`. Deploy the folders alongside the project; absolute server paths and published resource URLs are not saved in the option configuration. Resolved option `imageUrl` metadata contains the current published URL. Moving or deleting a file requires updating its selected reference.
