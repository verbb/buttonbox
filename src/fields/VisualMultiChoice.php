<?php
namespace verbb\buttonbox\fields;

use Craft;
use craft\base\InlineEditableFieldInterface;
use craft\base\SortableFieldInterface;
use craft\helpers\Cp;
use craft\validators\ArrayValidator;

class VisualMultiChoice extends BaseVisualOptionsField implements InlineEditableFieldInterface, SortableFieldInterface
{
    // Static Methods
    // =========================================================================

    public static function displayName(): string
    {
        return Craft::t('buttonbox', 'Button Box - Visual Multi-Choice');
    }

    public static function icon(): string
    {
        return '@verbb/buttonbox/icon-mask.svg';
    }


    // Properties
    // =========================================================================

    public int $minSelections = 0;
    public ?int $maxSelections = null;

    protected static bool $multi = true;


    // Public Methods
    // =========================================================================

    public function getSettingsHtml(): ?string
    {
        return parent::getSettingsHtml() . Cp::textFieldHtml([
            'label' => Craft::t('buttonbox', 'Minimum selections'),
            'instructions' => Craft::t('buttonbox', 'Use zero to allow an empty selection.'),
            'id' => 'minSelections',
            'name' => 'minSelections',
            'type' => 'number',
            'min' => 0,
            'value' => $this->minSelections,
            'errors' => $this->getErrors('minSelections'),
        ]) . Cp::textFieldHtml([
            'label' => Craft::t('buttonbox', 'Maximum selections'),
            'instructions' => Craft::t('buttonbox', 'Leave empty for no maximum.'),
            'id' => 'maxSelections',
            'name' => 'maxSelections',
            'type' => 'number',
            'min' => 1,
            'value' => $this->maxSelections,
            'errors' => $this->getErrors('maxSelections'),
        ]);
    }

    public function getElementValidationRules(): array
    {
        return array_merge(parent::getElementValidationRules(), [[
            ArrayValidator::class,
            'skipOnEmpty' => false,
            'min' => $this->minSelections ?: null,
            'max' => $this->maxSelections ?: null,
        ]]);
    }


    // Protected Methods
    // =========================================================================

    protected function defineRules(): array
    {
        $rules = parent::defineRules();
        $rules[] = [['minSelections'], 'integer', 'min' => 0];
        $rules[] = [['maxSelections'], 'integer', 'min' => 1, 'skipOnEmpty' => true];
        $rules[] = [['maxSelections'], 'compare', 'compareAttribute' => 'minSelections', 'operator' => '>=', 'when' => fn() => $this->maxSelections !== null];

        return $rules;
    }
}
