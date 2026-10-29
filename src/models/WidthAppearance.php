<?php
namespace verbb\buttonbox\models;

class WidthAppearance extends Appearance
{
    // Properties
    // =========================================================================

    public string $fillColor = '';


    // Public Methods
    // =========================================================================

    public function getStyle(): string
    {
        $style = parent::getStyle();

        return $style !== '' && $this->fillColor !== '' ? $style . ';--buttonbox-width-fill:' . $this->fillColor : $style;
    }


    // Protected Methods
    // =========================================================================

    protected function defineRules(): array
    {
        return array_merge(parent::defineRules(), [[['fillColor'], 'match', 'pattern' => '/^#(?:[a-f0-9]{3}|[a-f0-9]{6})$/i']]);
    }
}
