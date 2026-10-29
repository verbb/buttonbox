<?php
namespace verbb\buttonbox\controllers;

use verbb\buttonbox\ButtonBox;
use verbb\buttonbox\models\Settings;

use Craft;
use craft\web\Controller;

use yii\web\Response;

class SettingsController extends Controller
{
    // Public Methods
    // =========================================================================

    public function actionIndex(?Settings $settings = null): Response
    {
        $this->requireAdmin(false);

        return $this->renderTemplate('buttonbox/settings/index', [
            'settings' => $settings ?? ButtonBox::$plugin->getSettings(),
            'readOnly' => !Craft::$app->getConfig()->getGeneral()->allowAdminChanges,
        ]);
    }

    public function actionSaveSettings(): ?Response
    {
        $this->requirePostRequest();
        $this->requireAdmin();

        $plugin = ButtonBox::$plugin;
        $submitted = (array)$this->request->getBodyParam('settings', []);
        $submitted = array_intersect_key($submitted, array_flip(['iconsPath', 'imagesPath']));
        $settings = clone $plugin->getSettings();
        $settings->setAttributes($submitted, false);

        if ($settings->validate()) {
            $stored = Craft::$app->getPlugins()->getStoredPluginInfo('buttonbox')['settings'] ?? [];

            if (Craft::$app->getPlugins()->savePluginSettings($plugin, array_replace($stored, $submitted))) {
                $this->setSuccessFlash(Craft::t('buttonbox', 'Settings saved.'));

                return $this->redirectToPostedUrl();
            }
        }

        $this->setFailFlash(Craft::t('buttonbox', 'Couldn’t save settings.'));
        Craft::$app->getUrlManager()->setRouteParams(['settings' => $settings]);

        return null;
    }
}
