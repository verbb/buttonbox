# Console Commands

Button Box includes console commands you can run from your Craft project’s directory.

## Field Conversion

These commands convert fields marked **(Legacy)** in the field picker, such as Buttons, Colours, Stars and Triggers, to their replacement field types. [Optional Field Conversion](../get-started/upgrading-from-v5-0.md#optional-field-conversion) on the upgrade page explains what each conversion keeps and changes.

::: reference
### `buttonbox/convert`

Lists every legacy Button Box field with its conversion status, the field type it converts to, and any warnings or blockers. Pass a field handle to show only that field. The command doesn’t change anything, and exits with an error when any listed field is blocked.

```shell
php craft buttonbox/convert
php craft buttonbox/convert layoutStyle
```
:::

::: reference
### `buttonbox/convert/field`

Previews the conversion of one legacy field, given by its handle, and converts it when you pass `--apply`. A field with blockers isn’t converted.

| Option | Description | Default |
| --- | --- | --- |
| `--apply`, `-a` | Set to `1` to save the conversion. Without it, the command only shows the preview. | `0` |

```shell
php craft buttonbox/convert/field layoutStyle
php craft buttonbox/convert/field layoutStyle --apply=1
```
:::
