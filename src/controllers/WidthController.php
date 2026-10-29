<?php
namespace verbb\buttonbox\controllers;

use verbb\buttonbox\fields\WidthChoice as Width;

use Craft;
use craft\helpers\StringHelper;
use craft\web\Controller;

use yii\web\Response;

class WidthController extends Controller
{
    // Public Methods
    // =========================================================================

    public function actionPreview(): Response
    {
        $this->requirePostRequest();
        $this->requireAdmin(false);

        $request = Craft::$app->getRequest();
        $options = $request->getBodyParam('options', []);

        $field = new Width([
            'name' => Craft::t('buttonbox', 'Preview'),
            'handle' => 'widthPreview' . StringHelper::randomString(10),
            'displayStyle' => $request->getBodyParam('displayStyle', 'bar'),
            'labelDisplay' => $request->getBodyParam('labelDisplay', 'selected'),
            'showTooltips' => filter_var($request->getBodyParam('showTooltips', true), FILTER_VALIDATE_BOOLEAN),
            'appearance' => (array)$request->getBodyParam('appearance', []),
            'options' => is_array($options) ? $options : [],
        ]);

        if (!$field->validate(['options', 'displayStyle', 'labelDisplay', 'appearance'])) {
            return $this->asJson(['html' => '', 'errors' => $field->getErrorSummary(true)]);
        }

        return $this->asJson(['html' => $field->getInputHtml($field->normalizeValue(null, null), null), 'errors' => []]);
    }
}
