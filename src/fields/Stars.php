<?php
namespace verbb\buttonbox\fields;

use verbb\buttonbox\assetbundles\ButtonBoxAsset;

use Craft;
use craft\base\ElementInterface;
use craft\base\Field;

use yii\db\Schema;

class Stars extends Field
{
    // Static Methods
    // =========================================================================

    public static function displayName(): string
    {
        return Craft::t('buttonbox', 'Button Box - Stars');
    }


    // Properties
    // =========================================================================

    public $totalStars = 5;


    // Public Methods
    // =========================================================================

    public function defineRules(): array
    {
        $rules = parent::defineRules();

        $rules[] = [['totalStars'], 'required'];
        $rules[] = [['totalStars'], 'integer', 'min' => 2];

        return $rules;
    }

    public function getContentColumnType(): string
    {
        return Schema::TYPE_INTEGER;
    }

    public function getSettingsHtml(): ?string
    {
        return Craft::$app->getView()->renderTemplate('buttonbox/_field/stars/settings', [
            'settings' => $this->getSettings(),
        ]);
    }

    public function getInputHtml($value, ElementInterface $element = null): string
    {
        $name = $this->handle;

        Craft::$app->getView()->registerAssetBundle(ButtonBoxAsset::class);
        Craft::$app->getView()->registerJs('new Craft.ButtonBoxHovers("' . Craft::$app->getView()->namespaceInputId($name) . '");');

        return Craft::$app->getView()->renderTemplate('buttonbox/_field/stars/input', [
            'name' => $name,
            'value' => $value,
            'totalStars' => $this->totalStars,
        ]);
    }
}
