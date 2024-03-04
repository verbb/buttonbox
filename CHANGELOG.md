# Changelog

## 5.0.0-beta.1 - 2024-03-04

### Changed
- Now requires PHP `8.2.0+`.
- Now requires Craft `5.0.0-beta.1+`.

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
