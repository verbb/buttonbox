<?php
namespace verbb\buttonbox\helpers;

use Craft;
use craft\base\ElementInterface;
use craft\base\FieldInterface;
use craft\helpers\Html;
use craft\web\Request;

class Compatibility
{
    // Static Methods
    // =========================================================================

    public static function logInput(FieldInterface $field, ?ElementInterface $element): void
    {
        $request = Craft::$app->getRequest();

        if ($element === null || !$request instanceof Request || !$request->getIsCpRequest()) {
            return;
        }

        $deprecator = Craft::$app->getDeprecator();
        $throwExceptions = $deprecator->throwExceptions;

        // These supported fields should remain editable even in strict development mode.
        $deprecator->throwExceptions = false;

        try {
            $deprecator->log('buttonbox:legacy-field:' . ($field->uid ?? $field->handle), Craft::t('buttonbox', 'The “{name}” field ({handle}) uses {type}. It remains supported in Button Box 5.x. Use a current Button Box field for new work; existing fields are not converted automatically.', [
                'name' => $field->name,
                'handle' => $field->handle,
                'type' => $field::displayName(),
            ]), __FILE__, __LINE__);

            // A service initialised in exception mode has no after-request DB handler.
            if ($throwExceptions && $deprecator->logTarget === 'db') {
                $deprecator->storeLogs();
            }
        } finally {
            $deprecator->throwExceptions = $throwExceptions;
        }
    }

    public static function settingsNotice(string $replacement): string
    {
        return Html::tag('div', Html::tag('p', Craft::t('buttonbox', 'This legacy field remains supported in Button Box 5.x. New fields should use {replacement}; preview a conversion with `php craft buttonbox/convert/field <handle>`.', [
            'replacement' => $replacement,
        ])), [
            'class' => ['readable', 'pane', 'notice', 'mb-l'],
        ]);
    }
}
