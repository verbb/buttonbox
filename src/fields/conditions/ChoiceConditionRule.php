<?php
namespace verbb\buttonbox\fields\conditions;

use verbb\buttonbox\fields\data\MultiVisualOptionData;
use verbb\buttonbox\fields\data\OptionData;

use craft\fields\conditions\OptionsFieldConditionRule;

class ChoiceConditionRule extends OptionsFieldConditionRule
{
    // Protected Methods
    // =========================================================================

    protected function matchFieldValue($value): bool
    {
        if ($value instanceof MultiVisualOptionData) {
            $value = array_map(fn(OptionData $option) => $option->value, iterator_to_array($value));
        } elseif ($value instanceof OptionData) {
            $value = $value->value;
        }

        return $this->matchValue($value);
    }
}
