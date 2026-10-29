<?php
namespace verbb\buttonbox\fields;

use verbb\buttonbox\models\ActionLinksConfig;
use verbb\buttonbox\web\assets\cp\SettingsAsset;

use Craft;
use craft\base\ElementInterface;
use craft\base\Field;
use craft\helpers\StringHelper;
use craft\models\GqlSchema;

class ActionLinks extends Field
{
    // Static Methods
    // =========================================================================

    public static function displayName(): string
    {
        return Craft::t('buttonbox', 'Button Box - Action Links');
    }

    public static function icon(): string
    {
        return 'arrow-up-right-from-square';
    }

    public static function dbType(): null
    {
        return null;
    }

    public static function isRequirable(): bool
    {
        return false;
    }

    public static function isMultiInstance(): bool
    {
        return true;
    }


    // Properties
    // =========================================================================

    public array $actions = [];
    public string $size = 'default';
    public string $alignment = 'start';
    public string $spacing = 'normal';


    // Public Methods
    // =========================================================================

    public function normalizeValue(mixed $value, ?ElementInterface $element = null): mixed
    {
        return null;
    }

    public function serializeValue(mixed $value, ?ElementInterface $element = null): mixed
    {
        return null;
    }

    public function includeInGqlSchema(GqlSchema $schema): bool
    {
        return false;
    }

    public function getActionConfig(): ActionLinksConfig
    {
        return new ActionLinksConfig(['actions' => $this->actions, 'size' => $this->size, 'alignment' => $this->alignment, 'spacing' => $this->spacing]);
    }

    public function validateActionConfig(string $attribute): void
    {
        $model = $this->getActionConfig();
        $model->validate([$attribute]);

        foreach ($model->getErrors($attribute) as $error) {
            $this->addError($attribute, $error);
        }
    }

    public function getSettingsHtml(): ?string
    {
        $view = Craft::$app->getView();
        $view->registerAssetBundle(SettingsAsset::class);
        $id = 'buttonbox-actions-' . StringHelper::randomString(10);
        $html = $view->renderTemplate('buttonbox/_field/actions/settings', ['field' => $this, 'settingsId' => $id]);
        $view->registerJs('Craft.ButtonBoxSettingsReady.then(() => new Craft.ButtonBoxActionSettings(' . json_encode($view->namespaceInputId($id)) . '));');

        return $html;
    }

    public function getStaticHtml(mixed $value, ?ElementInterface $element): string
    {
        return $this->getActionConfig()->render($element);
    }


    // Protected Methods
    // =========================================================================

    protected function defineRules(): array
    {
        $rules = parent::defineRules();
        $rules[] = [['actions', 'size', 'alignment', 'spacing'], 'validateActionConfig'];

        return $rules;
    }

    protected function inputHtml(mixed $value, ?ElementInterface $element, bool $inline): string
    {
        return $this->getActionConfig()->render($element);
    }
}
