<?php
namespace verbb\buttonbox\fields\data;

use craft\web\twig\AllowedInSandbox;

class PositionData extends SingleOptionData
{
    // Static Methods
    // =========================================================================

    public static function coordinates(?string $value): array
    {
        if ($value === null || $value === '') {
            return ['center', 'center'];
        }

        if (in_array($value, ['top', 'bottom'], true)) {
            return [$value, 'center'];
        }

        if (in_array($value, ['left', 'right'], true)) {
            return ['center', $value];
        }

        if ($value === 'center') {
            return ['center', 'center'];
        }

        // Custom values are identities, not strings from which alignment can be inferred.
        $parts = explode('-', $value, 2);

        return count($parts) === 2 && in_array($parts[0], ['top', 'center', 'bottom'], true) && in_array($parts[1], ['left', 'center', 'right'], true)
            ? $parts
            : [null, null];
    }


    // Properties
    // =========================================================================

    #[AllowedInSandbox]
    public ?string $horizontal;

    #[AllowedInSandbox]
    public ?string $vertical;

    #[AllowedInSandbox]
    public ?int $x;

    #[AllowedInSandbox]
    public ?int $y;

    #[AllowedInSandbox]
    public ?int $row;

    #[AllowedInSandbox]
    public ?int $column;

    #[AllowedInSandbox]
    public bool $disabled;


    // Public Methods
    // =========================================================================

    public function __construct(
        ?string $label,
        ?string $value,
        bool $selected,
        bool $valid = true,
        ?int $row = null,
        ?int $column = null,
        bool $disabled = false,
    ) {
        parent::__construct($label, $value, $selected, $valid);

        $this->row = $row;
        $this->column = $column;
        $this->disabled = $disabled;

        [$vertical, $horizontal] = self::coordinates($value);
        $this->horizontal = $horizontal;
        $this->vertical = $vertical;
        $this->x = match ($horizontal) {
            'left' => -1,
            'right' => 1,
            'center' => 0,
            default => null,
        };
        $this->y = match ($vertical) {
            'top' => -1,
            'bottom' => 1,
            'center' => 0,
            default => null,
        };
    }
}
