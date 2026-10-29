# Configuration

You can customise Button Box’s settings using a PHP configuration file. This is optional: each setting has a default, so you only need to include the values you want to change.

To override a setting, create `buttonbox.php` in your Craft project’s `/config` directory and return an array of setting names and values. For example, the following will use a custom image directory:

```php
<?php

return [
    'imagesPath' => '@webroot/images/field-choices',
];
```

All other settings keep their defaults. Add any further settings you want to change to the same array. The options below explain the available settings and their defaults.

Values in `config/buttonbox.php` override the corresponding values saved in the control panel. To manage a setting through the control panel again, remove its override from the file.

## Environment Overrides

Craft can apply different settings to each environment. Use `*` for shared values and a key matching `CRAFT_ENVIRONMENT` for an environment-specific override. For example:

```php
<?php

return [
    '*' => [
        'imagesPath' => '@webroot/images/field-choices',
    ],
    'dev' => [
        'imagesPath' => '@webroot/images/field-choices-preview',
    ],
];
```

This replaces the simple array above. The `dev` values apply only when `CRAFT_ENVIRONMENT` is `dev`; other environments use the shared values. Merge your own overrides into the appropriate array.

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

## Control Panel

Open **Settings → Plugins → Button Box → General Settings** to configure the gallery folders. Settings saved here are deployed through Craft’s project config. Values defined in `config/buttonbox.php` take precedence over the corresponding control-panel settings.

The plugin settings also include [Option Sets](../feature-tour/option-sets.md) and [Presets](../feature-tour/presets.md) for sharing choices and creating reusable starting points.

## Gallery Folders

Under **Settings → Plugins → Button Box → General Settings**, set **Icons Path** and **Images Path** to local folders. Both accept Craft aliases and environment variables. The galleries include files in the configured folder and one level of subfolders. Leave a path empty to disable its custom files; a missing folder gives an empty custom gallery.

Icons accept SVG files, which Craft sanitizes when rendering. Images accept PNG, JPEG, WebP, GIF and AVIF files. Image files offered by the gallery are published through Craft’s asset manager and are publicly accessible. Only place images intended for display in this folder. Craft’s built-in icons remain available in their own gallery group. For asset images, use **Choose asset…** to open Craft’s searchable asset selector. The selected image must have a public URL; Button Box stores that URL.

Selections store portable references such as `@buttonboxIcons/arrows/next.svg` and `@buttonboxImages/layouts/card.png`. Deploy the folders alongside the project; absolute server paths and published resource URLs are not saved in the option configuration. Resolved option `imageUrl` metadata contains the current published URL. Moving or deleting a file requires updating its selected reference.
