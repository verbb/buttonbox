<?php
namespace verbb\buttonbox\fields;

use verbb\buttonbox\fields\conditions\ChoiceConditionRule;
use verbb\buttonbox\fields\data\MultiVisualOptionData;
use verbb\buttonbox\fields\data\OptionData;

use Craft;
use craft\base\ElementInterface;
use craft\fields\BaseOptionsField;

abstract class BaseChoiceField extends BaseOptionsField
{
    // Public Methods
    // =========================================================================

    public function serializeValue(mixed $value, ?ElementInterface $element): mixed
    {
        if ($value instanceof MultiVisualOptionData) {
            $selected = [];

            // Persist configured choices in option order, then retain removed identities.
            foreach ($value->getOptions() as $option) {
                if ($value->contains($option->value)) {
                    $selected[] = $option->value;
                }
            }

            foreach ($value as $option) {
                if ($option->value !== null && !in_array($option->value, $selected, true)) {
                    $selected[] = $option->value;
                }
            }

            return $selected ?: null;
        }

        return $value instanceof OptionData ? $value->value : parent::serializeValue($value, $element);
    }

    public function getElementValidationRules(): array
    {
        return [[function(ElementInterface $element) {
            $value = $element->getFieldValue($this->handle);
            $options = $value instanceof MultiVisualOptionData ? $value : [$value];

            foreach ($options as $option) {
                if (!$option->valid) {
                    $element->addError($this->handle, Craft::t('yii', '{attribute} is invalid.', [
                        'attribute' => Craft::t('site', $this->name),
                    ]));

                    break;
                }
            }
        }, 'when' => fn() => !$this->customOptions]];
    }

    public function isValueEmpty(mixed $value, ElementInterface $element): bool
    {
        if ($value instanceof MultiVisualOptionData) {
            return count($value) === 0;
        }

        return $value->value === null || $value->value === '';
    }

    public function getElementConditionRuleType(): array|string|null
    {
        // Scalar rules accept stringable values; retain their identity for converted fields.
        return static::$multi ? ChoiceConditionRule::class : parent::getElementConditionRuleType();
    }


    // Protected Methods
    // =========================================================================

    protected function encodeValue(mixed $value): string|array|null
    {
        if ($value instanceof MultiVisualOptionData) {
            return array_map(fn(OptionData $option) => $this->encodeValue($option), iterator_to_array($value));
        }

        if ($value instanceof OptionData) {
            if (!$value->valid) {
                return $value->value;
            }

            $value = $value->value;
        }

        if ($value === null || $value === '') {
            return $value;
        }

        return sprintf('base64:%s', base64_encode($value));
    }
}
