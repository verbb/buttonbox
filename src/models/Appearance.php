<?php
namespace verbb\buttonbox\models;

use craft\base\Model;

class Appearance extends Model
{
    // Properties
    // =========================================================================

    public string $size = 'default';
    public string $textColor = '';
    public string $backgroundColor = '';
    public string $borderColor = '';
    public string $selectionColor = '';
    public string $borderWidth = '';
    public string $radius = '';
    public bool|string $showLabels = true;
    public bool|string $labelTooltips = false;


    // Public Methods
    // =========================================================================

    public function getStyle(): string
    {
        if (!$this->validate()) {
            return '';
        }

        $styles = [];

        foreach (['height', 'font', 'icon-size', 'icon-gap', 'padding-inline'] as $token) {
            $styles[] = "--buttonbox-choice-$token:var(--pk-btn-$token-$this->size)";
        }

        foreach (['textColor' => 'text', 'backgroundColor' => 'background', 'borderColor' => 'border', 'selectionColor' => 'accent'] as $attribute => $variable) {
            if ($this->$attribute !== '') {
                $styles[] = "--buttonbox-choice-$variable:" . $this->$attribute;
            }
        }

        foreach (['borderWidth' => 'border-width', 'radius' => 'radius'] as $attribute => $variable) {
            if ($this->$attribute !== '') {
                $styles[] = "--buttonbox-choice-$variable:" . (int)$this->$attribute . 'px';
            }
        }

        if ($this->selectionColor !== '') {
            $styles[] = '--buttonbox-choice-selected-background:color-mix(in srgb, var(--buttonbox-choice-accent) 12%, var(--buttonbox-choice-background, var(--gray-050)))';
            // Checkmarks sit on the selection colour, so keep them legible on pale colours.
            $styles[] = '--buttonbox-choice-accent-text:' . ($this->_prefersDarkText($this->selectionColor) ? '#1f2933' : '#fff');
        }

        return implode(';', $styles);
    }


    // Protected Methods
    // =========================================================================

    protected function defineRules(): array
    {
        return [
            [['showLabels', 'labelTooltips'], 'boolean', 'skipOnEmpty' => false],
            [['size'], 'in', 'range' => ['xxs', 'xs', 'sm', 'default', 'lg', 'xl'], 'skipOnEmpty' => false],
            [['textColor', 'backgroundColor', 'borderColor', 'selectionColor'], 'match', 'pattern' => '/^#(?:[a-f0-9]{3}|[a-f0-9]{6})$/i'],
            [['borderWidth'], 'integer', 'min' => 0, 'max' => 8],
            [['radius'], 'integer', 'min' => 0, 'max' => 100],
        ];
    }


    // Private Methods
    // =========================================================================

    private function _prefersDarkText(string $color): bool
    {
        $hex = ltrim($color, '#');

        if (strlen($hex) === 3) {
            $hex = $hex[0] . $hex[0] . $hex[1] . $hex[1] . $hex[2] . $hex[2];
        }

        // WCAG relative luminance: dark text has the higher contrast above roughly 0.18.
        $channels = array_map(function(string $channel): float {
            $value = hexdec($channel) / 255;

            return $value <= 0.04045 ? $value / 12.92 : (($value + 0.055) / 1.055) ** 2.4;
        }, str_split($hex, 2));
        $luminance = 0.2126 * $channels[0] + 0.7152 * $channels[1] + 0.0722 * $channels[2];

        return ($luminance + 0.05) / 0.05 > 1.05 / ($luminance + 0.05);
    }
}
