<?php
namespace verbb\buttonbox\controllers;

use verbb\buttonbox\models\ActionLinksConfig;

use Craft;
use craft\web\Controller;

use yii\web\Response;

class ActionLinksController extends Controller
{
    // Public Methods
    // =========================================================================

    public function actionPreview(): Response
    {
        $this->requirePostRequest();
        $this->requireAdmin(false);

        $request = Craft::$app->getRequest();

        $model = new ActionLinksConfig([
            'actions' => (array)$request->getBodyParam('actions', []),
            'size' => (string)$request->getBodyParam('size', 'default'),
            'alignment' => (string)$request->getBodyParam('alignment', 'start'),
            'spacing' => (string)$request->getBodyParam('spacing', 'normal'),
        ]);

        if (!$model->validate()) {
            return $this->asJson(['html' => '', 'errors' => $model->getErrorSummary(true)]);
        }

        return $this->asJson(['html' => $model->render(null, true), 'errors' => []]);
    }
}
