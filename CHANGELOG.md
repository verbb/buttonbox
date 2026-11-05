# Changelog

## Unreleased

### Added
- Added Visual Choice and Visual Multi-Choice fields for single and multiple selections, with configurable options and selection limits.
- Added Position fields with configurable spatial arrangements and keyboard navigation.
- Added a new Width field with explicit percentage stops, Bar and Width samples styles, and configurable labels and tooltips.
- Added Rating fields with whole-number values, configurable limits and defaults, optional clearing, and star, heart, circle or diamond symbols.
- Added reusable Action Links fields for conditional editor links, with configurable labels, icons, images and button styles.
- Added Buttons, Button group, Chips, List, Tiles, Cards, Swatches and Visual samples presentations for visual choices, plus Dropdown for single choices.
- Added visual option metadata for descriptions, icons, images, colours, split colours, foreground/background pairs, gradients, width, aspect ratio, typography and shapes.
- Added shared option sets managed in the control panel or configuration files, with project-config support and the option to copy choices into individual fields. Visual choices can also receive options dynamically through PHP events.
- Added built-in and customisable presets for visual choices, Position, Width and Rating, with appearance settings and live field previews.
- Added configurable icon and image galleries, with support for selecting Craft assets.
- Added typed Twig values for visual choices, Position and Width, typed GraphQL output for visual choices and Position, and integer GraphQL output for Rating.
- Added element previews, search, conditions, sorting and inline editing for the new content fields, according to each field’s capabilities.
- Added command-line previews and optional conversion of existing Buttons, Colours, Text Size, Width, Stars and Triggers fields to their replacements.

### Changed
- Button Box now requires Craft CMS 5.10.11 or greater.
- Triggers field JavaScript values are now output as written, without parsing element tags.
- Triggers field links no longer output `javascript:`, `data:` or `vbscript:` URLs. Use a JavaScript trigger instead.

### Fixed
- Fixed Triggers field buttons outputting encoded `base64:` values for their link or JavaScript, and links not parsing element tags.
- Fixed the plugin bootstrap handle used during application configuration.

### Deprecated
- Deprecated the original Buttons, Colours, Text Size, Width, Stars and Triggers fields, which now display a Legacy label and log control-panel deprecation notices. Existing fields retain their settings, stored values and template behaviour; conversion is optional.

## 5.0.5 - 2026-10-22

### Changed
- Updated the frontend build toolchain to Vite 8.3.4.

## 5.0.4 - 2026-10-02

### Changed
- Updated the required version of `verbb/base` to 3.0.19.

## 5.0.3 - 2026-09-14

### Changed
- Updated documentation for clearer, more consistent guidance.

## 5.0.2 - 2026-07-15

### Fixed
- Fix large button style for Triggers and Width types.

## 5.0.1 - 2025-07-18

### Changed
- Update English translations.

## 5.0.0 - 2024-05-11

### Changed
- Now requires PHP `8.2.0+`.
- Now requires Craft `5.0.0+`.

### Fixed
- Fix an error with `normalizeValue()` when editing fields.

## 4.2.6 - 2026-07-15

### Fixed
- Fix large button style for Triggers and Width types.

## 4.2.5 - 2025-07-18

### Changed
- Update English translations.

## 4.2.4 - 2024-03-04

### Fixed
- Fix an issue where fields weren’t being initialized properly when in Matrix/Super Table/Neo blocks.

## 4.2.3 - 2024-02-08

### Added
- Added “Placeholder Text” field setting for Colour and Text Size fields.

### Changed
- Colour and Text Size fields now show a dropdown consistent with Craft’s UI.

### Fixed
- Fix Colour and Text Size fields not triggering an updated value call when changing their value.
- Fix double-binding of JS menubtn for some fields.
- Fix an error when displaying Colour and Text Size buttons for new elements.

## 4.2.2 - 2023-10-05

### Added
- Add “Image Align” option to “Buttons” buttons.

### Changed
- Improve alignment of “Buttons” type fields.

### Fixed
- Fix default value for fields not working correctly in some instances.
- Fix invalid (removed) options causing issues when save fields.

## 4.2.1 - 2023-08-12

### Changed
- Update color for button labels for better contrast.

### Fixed
- Fix some fields using the first option automatically as the default value.

## 4.2.0 - 2023-03-09

### Changed
- Now requires Craft 4.4.0+.

### Fixed
- Fix a type error occurring on Craft 4.4.0+.

## 4.1.0 - 2022-06-29

### Changed
- Now requires Craft 4.1.0+.

### Fixed
- Fix a type error occurring on Craft 4.1.0.

## 4.0.3 - 2022-06-21

### Changed
- Now requires Button Box `3.0.0` in order to update from Craft 3.

### Removed
- Removed Craft 2 migration.

## 4.0.2 - 2022-06-21

### Fixed
- Fix an error when creating new fields.

## 4.0.1 - 2022-06-21

### Fixed
- Merge fixes from `3.0.2`.

## 4.0.0 - 2022-06-20

### Changed
- Now requires PHP `8.0.2+`.
- Now requires Craft `4.0.0+`.

## 3.1.0 - 2022-06-29

### Changed
- Now requires Craft 3.7.46+.

### Fixed
- Fix a type error occurring on Craft 3.7.46.
- Fix colour field default value not being set correctly.

## 3.0.2 - 2022-06-21

### Fixed
- Fix an error when saving a Colour field.

## 3.0.1 - 2022-06-20

### Added
- Add Craft 2 migration (thanks @bossanova808).
- New icon.

## 3.0.0 - 2022-06-04

### Changed
- Migration to `verbb/buttonbox`.
- Now requires Craft 3.7+.

## 2.0.4 - 2019-06-20

### Fixed
- Merge the fix by @lindseydiloreto about Trigger field

## 2.0.3 - 2019-04-08

### Fixed
- Fixes Mulitsite error normalizeValue #25

## 2.0.2 - 2018-07-13

### Fixed
- Fix PHP 7.2 count error for buttons, text size and width field types

## 2.0.1 - 2018-06-14

### Fixed
- Fix PHP 7.2 count error

## 2.0.0 - 2018-04-09

### Added
- Initial Craft CMS 3 release
