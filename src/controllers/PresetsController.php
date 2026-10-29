<?php
namespace verbb\buttonbox\controllers;

use verbb\buttonbox\ButtonBox;
use verbb\buttonbox\fields\BaseVisualOptionsField;
use verbb\buttonbox\models\Preset;

use Craft;
use craft\web\Controller;

use yii\web\BadRequestHttpException;
use yii\web\NotFoundHttpException;
use yii\web\Response;

class PresetsController extends Controller
{
    // Public Methods
    // =========================================================================

    public function actionIndex(?string $family = null): Response
    {
        $this->requireAdmin(false);

        if ($family === null) {
            return $this->redirect('buttonbox/settings/presets/visual');
        }

        $service = ButtonBox::$plugin->getPresets();

        if (!isset($service->getFamilies()[$family])) {
            throw new NotFoundHttpException();
        }

        return $this->renderTemplate('buttonbox/settings/presets/index', [
            'family' => $family,
            'familyLabel' => $family === 'visual' ? Craft::t('buttonbox', 'Visual Choice') : $service->getFamilies()[$family],
            'presets' => $service->getAll($family),
            'readOnly' => !Craft::$app->getConfig()->getGeneral()->allowAdminChanges,
        ]);
    }

    public function actionEdit(?string $id = null, ?Preset $preset = null): Response
    {
        $this->requireAdmin(false);

        $service = ButtonBox::$plugin->getPresets();
        $request = Craft::$app->getRequest();

        if (!$preset) {
            $preset = $id ? $service->getById($id) : new Preset(['family' => $request->getQueryParam('family', 'visual')]);

            if (!$preset || !isset(Preset::ATTRIBUTES[$preset->family])) {
                throw new NotFoundHttpException();
            }

            if ($request->getQueryParam('duplicate')) {
                $preset->id = null;
                $preset->name = Craft::t('buttonbox', '{name} copy', ['name' => $preset->name]);
                $preset->builtIn = false;
                $preset->customized = false;
            }
        }

        $field = $preset->createField();
        $field->addErrors($preset->getErrors());
        $editorHtml = $field instanceof BaseVisualOptionsField ? $field->getOptionEditorHtml(false, true) : $field->getSettingsHtml(true);

        return $this->renderTemplate('buttonbox/settings/presets/edit', [
            'preset' => $preset, 'familyLabel' => $service->getFamilies()[$preset->family], 'editorHtml' => $editorHtml,
            'readOnly' => !Craft::$app->getConfig()->getGeneral()->allowAdminChanges,
        ]);
    }

    public function actionSave(): ?Response
    {
        $this->requirePostRequest();
        $this->requireAdmin();

        $request = Craft::$app->getRequest();
        $service = ButtonBox::$plugin->getPresets();
        $id = $request->getBodyParam('id') ?: null;
        $existing = $id ? $service->getById($id) : null;
        $family = $existing?->family ?? $request->getBodyParam('family', '');

        if (($id && !$existing) || !isset(Preset::ATTRIBUTES[$family])) {
            throw new BadRequestHttpException('Unknown preset or field family.');
        }

        $settings = [];
        $defaults = (new Preset(['family' => $family]))->getSettings();

        foreach (Preset::ATTRIBUTES[$family] as $attribute) {
            $value = $request->getBodyParam($attribute, $defaults[$attribute]);

            if ($attribute === 'options') {
                $value = is_array($value) ? array_values($value) : [];
            } elseif ($attribute === 'appearance') {
                $value = is_array($value) ? $value : [];
            } elseif ($attribute === 'columns') {
                $value = (int)$value;
            } elseif ($attribute === 'showTooltips') {
                $value = filter_var($value, FILTER_VALIDATE_BOOLEAN);
            } elseif (!is_string($value)) {
                throw new BadRequestHttpException('Invalid preset setting.');
            }

            $settings[$attribute] = $value;
        }

        $preset = new Preset([
            'id' => $id, 'name' => $request->getBodyParam('name', ''), 'family' => $family, 'settings' => $settings,
            'builtIn' => $existing?->builtIn ?? false, 'customized' => $existing?->customized ?? false,
        ]);

        if (!$service->save($preset)) {
            Craft::$app->getSession()->setError(Craft::t('buttonbox', 'Couldn’t save the preset.'));
            Craft::$app->getUrlManager()->setRouteParams(['preset' => $preset]);

            return null;
        }

        Craft::$app->getSession()->setNotice(Craft::t('buttonbox', 'Preset saved.'));

        return $this->redirect('buttonbox/settings/presets/' . $preset->family);
    }

    public function actionDelete(): Response
    {
        $this->requirePostRequest();
        $this->requireAdmin();
        $this->requireAcceptsJson();

        $id = Craft::$app->getRequest()->getRequiredBodyParam('id');
        $service = ButtonBox::$plugin->getPresets();
        $preset = $service->getById($id);

        if (!$preset) {
            throw new NotFoundHttpException();
        }

        // Built-ins are restored from their editor, never deleted from the catalogue.
        if ($preset->builtIn) {
            throw new BadRequestHttpException('Built-in presets cannot be deleted.');
        }

        $service->remove($id);

        return $this->asJson(['success' => true]);
    }

    public function actionRemove(): Response
    {
        $this->requirePostRequest();
        $this->requireAdmin();

        $id = Craft::$app->getRequest()->getRequiredBodyParam('id');
        $service = ButtonBox::$plugin->getPresets();
        $preset = $service->getById($id);

        if (!$preset) {
            throw new NotFoundHttpException();
        }

        $service->remove($id);
        Craft::$app->getSession()->setNotice(Craft::t('buttonbox', $preset->builtIn ? 'Original preset restored.' : 'Preset deleted.'));

        return $this->redirect('buttonbox/settings/presets/' . $preset->family);
    }
}
