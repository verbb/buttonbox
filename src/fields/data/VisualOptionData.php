<?php
namespace verbb\buttonbox\fields\data;

use craft\web\twig\AllowedInSandbox;

class VisualOptionData extends OptionData
{
    // Static Methods
    // =========================================================================

    private static function _nullableString(mixed $value): ?string
    {
        return $value === null || $value === '' ? null : (string)$value;
    }


    // Properties
    // =========================================================================

    #[AllowedInSandbox]
    public ?string $description = null;

    #[AllowedInSandbox]
    public ?string $imageUrl = null;

    #[AllowedInSandbox]
    public ?string $imageAlt = null;

    #[AllowedInSandbox]
    public ?string $category = null;

    #[AllowedInSandbox]
    public bool $disabled = false;

    #[AllowedInSandbox]
    public ?string $explanation = null;

    #[AllowedInSandbox]
    public VisualSurfaceData $surface;


    // Public Methods
    // =========================================================================

    public function __construct(
        ?string $label,
        ?string $value,
        bool $selected,
        bool $valid = true,
        ?string $icon = null,
        ?string $color = null,
        array $metadata = [],
    ) {
        parent::__construct($label, $value, $selected, $valid, $icon, $color);

        $this->description = self::_nullableString($metadata['description'] ?? null);
        $this->imageUrl = self::_nullableString($metadata['imageUrl'] ?? null);
        $this->imageAlt = self::_nullableString($metadata['imageAlt'] ?? null);
        $this->category = self::_nullableString($metadata['category'] ?? null);
        $this->disabled = (bool)($metadata['disabled'] ?? false);
        $this->explanation = self::_nullableString($metadata['explanation'] ?? null);
        $this->surface = new VisualSurfaceData($metadata['surface'] ?? []);
    }
}
