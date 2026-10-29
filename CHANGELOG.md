# Changelog

## Unreleased

### Added
- Added Visual Choice and Visual Multi-Choice fields with selection limits, custom options and typed option metadata.
- Added Buttons, Button group, Chips, List, Tiles, Cards, Swatches and Visual samples presentations, plus Dropdown for single choices.
- Added option descriptions, icons, images, colours, split colours, foreground/background pairs, gradients, width, aspect-ratio, typography and shape previews.
- Added Position fields with configurable spatial arrangements, grid columns, presets and keyboard navigation.
- Added a separate Width field with percentage stops, Bar and Width samples styles, Halves, Thirds, Quarters and Grid columns presets, and configurable labels and tooltips.
- Added Rating fields with whole-number values, configurable limits, defaults, clearing and four symbol presets.
- Added reusable Action Links fields with labelled destinations, icons or images, button styles and layout visibility conditions.
- Added reusable option sets managed in the control panel and project config, with field-level creation, editing and conversion to custom options, plus dynamic PHP option providers.
- Added customisable presets for visual choices, Position, Width and Rating, shared Appearance controls and live field previews.
- Added configurable icon and image galleries, with Craft’s asset selector for asset images.
- Added Button Box value objects and collections for Twig, including visual metadata, position coordinates and width percentages, plus GraphQL access and field-specific previews, search, conditions, sorting and inline editing.
- Added command-line conversion previews and optional conversions for Buttons, Colours, Text Size, Width, Stars and Triggers.

### Changed
- Button Box now requires Craft CMS 5.10.11 or greater.

### Fixed
- Fixed the plugin bootstrap handle used during application configuration.

### Deprecated
- Deprecated the original Buttons, Colours, Text Size, Width, Stars and Triggers fields. They are labelled Legacy and record a Craft deprecation notice when rendered for an element in the control panel. Existing settings, inputs and stored values are retained; fields are not automatically converted.

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
