<?php
namespace verbb\buttonbox\fields\data;

use craft\base\Serializable;
use craft\web\twig\AllowedInSandbox;

class VisualSurfaceData implements Serializable
{
    // Properties
    // =========================================================================

    #[AllowedInSandbox]
    public ?string $mode = null;

    #[AllowedInSandbox]
    public mixed $value = null;

    #[AllowedInSandbox]
    public ?string $from = null;

    #[AllowedInSandbox]
    public ?string $to = null;

    #[AllowedInSandbox]
    public ?float $angle = null;

    #[AllowedInSandbox]
    public ?float $radius = null;

    #[AllowedInSandbox]
    public ?float $size = null;

    #[AllowedInSandbox]
    public ?string $aspectRatio = null;


    // Public Methods
    // =========================================================================

    public function __construct(array $config = [])
    {
        $this->mode = isset($config['mode']) ? (string)$config['mode'] : null;
        $this->value = $config['value'] ?? null;
        $this->from = isset($config['from']) ? (string)$config['from'] : null;
        $this->to = isset($config['to']) ? (string)$config['to'] : null;
        $this->angle = isset($config['angle']) ? (float)$config['angle'] : null;
        $this->radius = isset($config['radius']) ? (float)$config['radius'] : null;
        $this->size = isset($config['size']) ? (float)$config['size'] : null;
        $this->aspectRatio = isset($config['aspectRatio']) ? (string)$config['aspectRatio'] : null;
    }

    public function serialize(): array
    {
        return array_filter(get_object_vars($this), fn(mixed $value) => $value !== null);
    }
}
