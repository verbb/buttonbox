<?php
namespace verbb\buttonbox\controllers;

use verbb\buttonbox\ButtonBox;
use verbb\buttonbox\fields\VisualChoice;
use verbb\buttonbox\fields\VisualMultiChoice;
use verbb\buttonbox\models\OptionSet;

use Craft;
use craft\elements\Asset;
use craft\helpers\Html;
use craft\helpers\StringHelper;
use craft\web\Controller;

use yii\base\InvalidArgumentException;
use yii\web\BadRequestHttpException;
use yii\web\NotFoundHttpException;
use yii\web\Response;

class OptionSetsController extends Controller
{
    // Public Methods
    // =========================================================================

    public function actionIndex(): Response
    {
        $this->requireAdmin(false);

        $service = ButtonBox::$plugin->getOptionSets();
        $sets = $service->getAll();

        return $this->renderTemplate('buttonbox/settings/option-sets/index', [
            'sets' => $sets,
            'deletableUids' => array_keys(array_filter($sets, fn(OptionSet $set) => !$service->getUsages($set->uid))),
            'configuredSets' => ButtonBox::$plugin->getSettings()->optionSets,
            'readOnly' => !Craft::$app->getConfig()->getGeneral()->allowAdminChanges,
        ]);
    }

    public function actionEdit(?string $uid = null, ?OptionSet $optionSet = null): Response
    {
        $this->requireAdmin(false);

        if (!$optionSet) {
            $service = ButtonBox::$plugin->getOptionSets();
            $request = Craft::$app->getRequest();
            $configuredHandle = $request->getQueryParam('duplicateHandle');
            $configuredSets = ButtonBox::$plugin->getSettings()->optionSets;
            $optionSet = $uid ? $service->getByUid($uid) : new OptionSet();

            if ($configuredHandle !== null) {
                $definition = $configuredSets[$configuredHandle] ?? null;

                if (!$definition) {
                    throw new NotFoundHttpException();
                }

                $optionSet = new OptionSet([
                    'name' => $definition['label'] ?? $configuredHandle,
                    'handle' => $configuredHandle,
                    'options' => $definition['options'] ?? [],
                ]);
            }

            if ($optionSet && ($request->getQueryParam('duplicate') || $configuredHandle !== null)) {
                $optionSet = new OptionSet($optionSet->toConfig());
                $optionSet->name = Craft::t('buttonbox', '{name} copy', ['name' => mb_substr($optionSet->name, 0, 240)]);
                $handles = array_map('strtolower', array_merge(array_keys($configuredSets), array_map(fn(OptionSet $set) => $set->handle, $service->getAll())));
                $baseHandle = substr($optionSet->handle, 0, 240) . 'Copy';
                $optionSet->handle = $baseHandle;

                for ($suffix = 2; in_array(strtolower($optionSet->handle), $handles, true); $suffix++) {
                    $optionSet->handle = $baseHandle . $suffix;
                }
            }
        }

        if (!$optionSet) {
            throw new NotFoundHttpException();
        }

        $field = $optionSet->createField();

        foreach (['options', 'presentation', 'columns', 'iconSize', 'imageSize', 'imageFit', 'appearance'] as $attribute) {
            $field->addErrors([$attribute => $optionSet->getErrors($attribute)]);
        }

        $variables = [
            'optionSet' => $optionSet,
            'field' => $field,
            'usages' => $optionSet->uid ? ButtonBox::$plugin->getOptionSets()->getUsages($optionSet->uid) : [],
            'readOnly' => !Craft::$app->getConfig()->getGeneral()->allowAdminChanges,
            'slideout' => Craft::$app->getRequest()->getAcceptsJson(),
        ];

        if ($variables['slideout']) {
            // Render the editor inside Craft's namespace, including its initialization script.
            $screen = $this->asCpScreen()
                ->title($optionSet->uid ? $optionSet->name : Craft::t('buttonbox', 'New Option Set'))
                ->contentTemplate('buttonbox/settings/option-sets/_edit', $variables);

            if (!$variables['readOnly']) {
                $screen->action('buttonbox/option-sets/save');
            } else {
                $screen->submitButtonLabel(null);
            }

            return $screen;
        }

        return $this->renderTemplate('buttonbox/settings/option-sets/edit', $variables);
    }

    public function actionSave(): ?Response
    {
        $this->requirePostRequest();
        $this->requireAdmin();

        $request = Craft::$app->getRequest();
        $uid = $request->getBodyParam('uid') ?: null;

        if ($uid && !ButtonBox::$plugin->getOptionSets()->getByUid($uid)) {
            throw new NotFoundHttpException();
        }

        $options = $request->getBodyParam('options', []);

        $set = new OptionSet([
            'uid' => $uid,
            'name' => $request->getBodyParam('name', ''),
            'handle' => $request->getBodyParam('handle', ''),
            'options' => is_array($options) ? array_values($options) : [],
            'presentation' => $request->getBodyParam('presentation', 'segmented'),
            'columns' => (int)$request->getBodyParam('columns', 3),
            'iconSize' => $request->getBodyParam('iconSize', 'medium'),
            'imageSize' => $request->getBodyParam('imageSize', 'auto'),
            'imageFit' => $request->getBodyParam('imageFit', 'cover'),
            'appearance' => (array)$request->getBodyParam('appearance', []),
        ]);

        if (!ButtonBox::$plugin->getOptionSets()->save($set)) {
            return $this->asModelFailure($set, Craft::t('buttonbox', 'Couldn’t save the option set.'), 'optionSet', [
                'errorSummary' => Html::errorSummary($set),
            ]);
        }

        return $this->asSuccess(Craft::t('buttonbox', 'Option set saved.'), [
            'optionSet' => array_merge($set->toConfig(), ['uid' => $set->uid, 'label' => $set->name]),
        ]);
    }

    public function actionDelete(): Response
    {
        $this->requirePostRequest();
        $this->requireAdmin();

        $request = Craft::$app->getRequest();
        $uid = $request->getBodyParam('uid') ?? $request->getRequiredBodyParam('id');

        try {
            ButtonBox::$plugin->getOptionSets()->delete($uid);
        } catch (InvalidArgumentException $exception) {
            throw new BadRequestHttpException($exception->getMessage());
        }

        if ($request->getAcceptsJson()) {
            return $this->asJson(['success' => true]);
        }

        Craft::$app->getSession()->setNotice(Craft::t('buttonbox', 'Option set deleted.'));

        return $this->redirect('buttonbox/settings/option-sets');
    }

    public function actionPreview(): Response
    {
        $this->requirePostRequest();
        $this->requireAdmin(false);

        $request = Craft::$app->getRequest();
        $options = $request->getBodyParam('options', []);
        $class = $request->getBodyParam('multi') ? VisualMultiChoice::class : VisualChoice::class;

        $field = new $class([
            'name' => Craft::t('buttonbox', 'Preview'),
            'handle' => 'buttonboxPreview' . StringHelper::randomString(10),
            'options' => is_array($options) ? $options : [],
            'presentation' => $request->getBodyParam('presentation', 'segmented'),
            'columns' => (int)$request->getBodyParam('columns', 3),
            'iconSize' => $request->getBodyParam('iconSize', 'medium'),
            'imageSize' => $request->getBodyParam('imageSize', 'auto'),
            'imageFit' => $request->getBodyParam('imageFit', 'cover'),
            'appearance' => (array)$request->getBodyParam('appearance', []),
            'showClearButton' => filter_var($request->getBodyParam('showClearButton', false), FILTER_VALIDATE_BOOLEAN),
        ]);

        if (!$field->validate(['options', 'presentation', 'columns', 'iconSize', 'imageSize', 'imageFit', 'appearance'])) {
            return $this->asJson(['html' => '', 'errors' => $field->getErrorSummary(true)]);
        }

        // Render through the same Twig and normalisation path as the actual author input.
        return $this->asJson(['html' => $field->getInputHtml($field->normalizeValue(null, null), null), 'errors' => []]);
    }

    public function actionIcons(): Response
    {
        $this->requirePostRequest();
        $this->requireAdmin(false);

        return $this->asJson([
            'items' => ButtonBox::$plugin->getGallery()->getItems('icon'),
            'presetItems' => ButtonBox::$plugin->getGallery()->getPresetIcons(),
            'presetLabel' => Craft::t('buttonbox', 'Button Box icons'),
        ]);
    }

    public function actionImages(): Response
    {
        $this->requirePostRequest();
        $this->requireAdmin(false);

        return $this->asJson(['groups' => [
            ['name' => Craft::t('buttonbox', 'Custom images'), 'items' => ButtonBox::$plugin->getGallery()->getItems('image')],
        ]]);
    }

    public function actionAssetImage(): Response
    {
        $this->requirePostRequest();
        $this->requireAdmin(false);

        $id = (int)Craft::$app->getRequest()->getRequiredBodyParam('id');
        $asset = $id > 0 ? Asset::find()->id($id)->kind(Asset::KIND_IMAGE)->one() : null;
        $url = $asset?->getUrl();

        if (!$url) {
            throw new BadRequestHttpException(Craft::t('buttonbox', 'Choose an image with a public URL.'));
        }

        // Store the portable URL contract, not an asset relationship.
        return $this->asJson(['url' => $url]);
    }
}
