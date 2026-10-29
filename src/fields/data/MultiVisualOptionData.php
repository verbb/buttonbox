<?php
namespace verbb\buttonbox\fields\data;

use craft\web\twig\AllowedInSandbox;

use ArrayObject;

class MultiVisualOptionData extends ArrayObject
{
    // Traits
    // =========================================================================

    use OptionsTrait;


    // Public Methods
    // =========================================================================

    #[AllowedInSandbox]
    public function contains(mixed $value): bool
    {
        $value = (string)$value;

        foreach ($this as $option) {
            if ($option->value === $value) {
                return true;
            }
        }

        return false;
    }
}
