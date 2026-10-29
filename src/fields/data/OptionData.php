<?php
namespace verbb\buttonbox\fields\data;

use craft\base\Serializable;
use craft\web\twig\AllowedInSandbox;

class OptionData implements Serializable
{
    // Properties
    // =========================================================================

    #[AllowedInSandbox]
    public ?string $label;

    #[AllowedInSandbox]
    public ?string $value;

    #[AllowedInSandbox]
    public bool $selected;

    #[AllowedInSandbox]
    public bool $valid;

    #[AllowedInSandbox]
    public ?string $icon;

    #[AllowedInSandbox]
    public ?string $color;


    // Public Methods
    // =========================================================================

    public function __construct(?string $label, ?string $value, bool $selected, bool $valid = true, ?string $icon = null, ?string $color = null)
    {
        $this->label = $label;
        $this->value = $value;
        $this->selected = $selected;
        $this->valid = $valid;
        $this->icon = $icon === '' ? null : $icon;
        $this->color = $color === '' ? null : $color;
    }

    #[AllowedInSandbox]
    public function __toString(): string
    {
        return $this->value ?? '';
    }

    public function serialize(): ?string
    {
        return $this->value;
    }
}
