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
}
