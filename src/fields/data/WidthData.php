<?php
namespace verbb\buttonbox\fields\data;

use craft\web\twig\AllowedInSandbox;

class WidthData extends SingleOptionData
{
    // Properties
    // =========================================================================

    #[AllowedInSandbox]
    public ?float $percentage;

    #[AllowedInSandbox]
    public bool $disabled;

    #[AllowedInSandbox]
    public ?string $explanation;


    // Public Methods
    // =========================================================================

    public function __construct(?string $label, ?string $value, bool $selected, bool $valid = true, ?float $percentage = null, bool $disabled = false, ?string $explanation = null)
    {
        parent::__construct($label, $value, $selected, $valid);

        $this->percentage = $percentage;
        $this->disabled = $disabled;
        $this->explanation = $explanation === '' ? null : $explanation;
    }
}
