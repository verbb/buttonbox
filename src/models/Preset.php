<?php
namespace verbb\buttonbox\models;

use verbb\buttonbox\fields\Position;
use verbb\buttonbox\fields\Rating;
use verbb\buttonbox\fields\VisualChoice;
use verbb\buttonbox\fields\WidthChoice as Width;

use Craft;
use craft\base\Field;
use craft\base\Model;

use InvalidArgumentException;
use Throwable;

class Preset extends Model
{
    // Constants
    // =========================================================================

    public const ATTRIBUTES = [
        'visual' => ['options', 'presentation', 'columns', 'iconSize', 'imageSize', 'imageFit', 'appearance'],
        'position' => ['options', 'mode', 'columns', 'showTooltips', 'appearance'],
        'width' => ['options', 'displayStyle', 'labelDisplay', 'showTooltips', 'appearance'],
        'rating' => ['symbol', 'activeColor', 'inactiveColor'],
    ];


    // Properties
    // =========================================================================

    public ?string $id = null;
    public string $name = '';
    public string $family = 'visual';
    public array $settings = [];
    public bool $builtIn = false;
    public bool $customized = false;


    // Public Methods
    // =========================================================================

    public function createField(): Field
    {
        $class = match ($this->family) {
            'visual' => VisualChoice::class,
            'position' => Position::class,
            'width' => Width::class,
            'rating' => Rating::class,
            default => throw new InvalidArgumentException('Unknown preset family.'),
        };

        // Presets can copy presentation settings, never field identity or option-source references.
        return new $class(array_intersect_key($this->settings, array_flip(self::ATTRIBUTES[$this->family])));
    }

    public function validateSettings(): void
    {
        if (!isset(self::ATTRIBUTES[$this->family])) {
            return;
        }

        try {
            $field = $this->createField();
            $field->validate(self::ATTRIBUTES[$this->family]);
            $this->addErrors($field->getErrors());

            if ($this->family === 'visual' && $field->presentation === 'width') {
                $this->addError('presentation', Craft::t('buttonbox', 'Use a Width preset for cumulative widths.'));
            }

            if ($this->family !== 'rating' && !$field->options) {
                $this->addError('options', Craft::t('buttonbox', 'Add at least one option.'));
            }
        } catch (Throwable) {
            $this->addError('settings', Craft::t('buttonbox', 'The preset contains invalid settings.'));
        }
    }

    public function getSettings(): array
    {
        $field = $this->createField();
        $settings = [];

        foreach (self::ATTRIBUTES[$this->family] as $attribute) {
            $settings[$attribute] = $field->$attribute;
        }

        return $settings;
    }

    public function toConfig(): array
    {
        return ['name' => $this->name, 'family' => $this->family, 'settings' => $this->getSettings()];
    }


    // Protected Methods
    // =========================================================================

    protected function defineRules(): array
    {
        return [
            [['name'], 'trim'],
            [['name', 'family'], 'required'],
            [['name'], 'string', 'max' => 255],
            [['family'], 'in', 'range' => array_keys(self::ATTRIBUTES)],
            [['settings'], 'validateSettings', 'skipOnEmpty' => false],
        ];
    }
}
