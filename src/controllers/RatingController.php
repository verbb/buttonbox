<?php
namespace verbb\buttonbox\controllers;

use verbb\buttonbox\fields\Rating;

use Craft;
use craft\helpers\StringHelper;
use craft\web\Controller;

use yii\web\Response;

class RatingController extends Controller
{
    // Public Methods
    // =========================================================================

    public function actionPreview(): Response
    {
        $this->requirePostRequest();
        $this->requireAdmin(false);

        $request = Craft::$app->getRequest();
        $default = $request->getBodyParam('defaultValue');

        $field = new Rating([
            'name' => Craft::t('buttonbox', 'Preview'),
            'handle' => 'ratingPreview' . StringHelper::randomString(10),
            'max' => (int)$request->getBodyParam('max', 5),
            'defaultValue' => $default === '' || $default === null ? null : (int)$default,
            'showClearButton' => filter_var($request->getBodyParam('showClearButton', false), FILTER_VALIDATE_BOOLEAN),
            'symbol' => (string)$request->getBodyParam('symbol', 'star'),
            'activeColor' => (string)$request->getBodyParam('activeColor', '#f4b638'),
            'inactiveColor' => (string)$request->getBodyParam('inactiveColor', '#cdd8e4'),
            'showLabels' => filter_var($request->getBodyParam('showLabels', false), FILTER_VALIDATE_BOOLEAN),
        ]);

        if (!$field->validate(['max', 'defaultValue', 'showClearButton', 'symbol', 'activeColor', 'inactiveColor', 'showLabels'])) {
            return $this->asJson(['html' => '', 'errors' => $field->getErrorSummary(true)]);
        }

        return $this->asJson(['html' => $field->getInputHtml($field->getDefaultValue(), null), 'errors' => []]);
    }
}
