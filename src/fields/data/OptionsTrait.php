<?php
namespace verbb\buttonbox\fields\data;

use craft\web\twig\AllowedInSandbox;

trait OptionsTrait
{
    // Properties
    // =========================================================================

    private array $_options = [];


    // Public Methods
    // =========================================================================

    #[AllowedInSandbox]
    public function getOptions(): array
    {
        return $this->_options;
    }

    public function setOptions(array $options): void
    {
        $this->_options = $options;
    }
}
