<?php
namespace verbb\buttonbox\controllers;

use verbb\buttonbox\fields\Position;

use Craft;
use craft\helpers\StringHelper;
use craft\web\Controller;

use yii\web\Response;

class PositionController extends Controller
{
    // Public Methods
    // =========================================================================

    public function actionPreview(): Response
    {
        $this->requirePostRequest();
        $this->requireAdmin(false);

        $request = Craft::$app->getRequest();
        $options = $request->getBodyParam('options', []);

        $field = new Position([
            'name' => Craft::t('buttonbox', 'Preview'),
            'handle' => 'positionPreview' . StringHelper::randomString(10),
            'mode' => $request->getBodyParam('mode', 'grid'),
            'columns' => (int)$request->getBodyParam('columns', 3),
            'showTooltips' => filter_var($request->getBodyParam('showTooltips', true), FILTER_VALIDATE_BOOLEAN),
            'appearance' => (array)$request->getBodyParam('appearance', []),
            'options' => is_array($options) ? $options : [],
        ]);

        if (!$field->validate(['options', 'mode', 'columns', 'appearance'])) {
            return $this->asJson(['html' => '', 'errors' => $field->getErrorSummary(true)]);
        }

        return $this->asJson(['html' => $field->getInputHtml($field->normalizeValue(null, null), null), 'errors' => []]);
    }
}
