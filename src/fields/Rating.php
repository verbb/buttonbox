<?php
namespace verbb\buttonbox\fields;

use verbb\buttonbox\ButtonBox;
use verbb\buttonbox\web\assets\cp\ButtonBoxAsset;
use verbb\buttonbox\web\assets\cp\SettingsAsset;

use Craft;
use craft\base\CrossSiteCopyableFieldInterface;
use craft\base\DefaultableFieldInterface;
use craft\base\ElementInterface;
use craft\base\Field;
use craft\base\InlineEditableFieldInterface;
use craft\base\MergeableFieldInterface;
use craft\base\PreviewableFieldInterface;
use craft\base\SortableFieldInterface;
use craft\fields\conditions\NumberFieldConditionRule;
use craft\helpers\Db;
use craft\helpers\Json;
use craft\helpers\StringHelper;
use craft\validators\ColorValidator;

use yii\db\Schema;

use GraphQL\Type\Definition\Type;

class Rating extends Field implements
    CrossSiteCopyableFieldInterface,
    DefaultableFieldInterface,
    InlineEditableFieldInterface,
    MergeableFieldInterface,
    PreviewableFieldInterface,
    SortableFieldInterface
{
    // Static Methods
    // =========================================================================

    public static function displayName(): string
    {
        return Craft::t('buttonbox', 'Button Box - Rating');
    }

    public static function icon(): string
    {
        return 'star';
    }

    public static function phpType(): string
    {
        return 'int|null';
    }

    public static function dbType(): string
    {
        return Schema::TYPE_INTEGER;
    }

    public static function queryCondition(array $instances, mixed $value, array &$params): ?array
    {
        return Db::parseNumericParam(static::valueSql($instances), $value, columnType: static::dbType());
    }

    public static function getPresets(): array
    {
        return ButtonBox::$plugin->getPresets()->getCatalog('rating');
    }

    public static function getBuiltInPresets(): array
    {
        $presets = [];

        foreach ([
            'star' => ['Stars', '#f4b638'],
            'heart' => ['Hearts', '#db2777'],
            'circle' => ['Circles', '#2563eb'],
            'diamond' => ['Diamonds', '#9333ea'],
        ] as $symbol => [$label, $colour]) {
            $presets[$symbol] = [
                'label' => Craft::t('buttonbox', $label),
                'symbol' => $symbol,
                'activeColor' => $colour,
                'inactiveColor' => '#cdd8e4',
            ];
        }

        return $presets;
    }


    // Constants
    // =========================================================================

    public const SYMBOLS = [
        'star',
        'heart',
        'circle',
        'diamond',
    ];


    // Properties
    // =========================================================================

    public int $max = 5;
    public ?int $defaultValue = null;
    public bool $allowClear = true;
    public string $symbol = 'star';
    public string $activeColor = '#f4b638';
    public string $inactiveColor = '#cdd8e4';
    public bool $showLabels = false;


    // Public Methods
    // =========================================================================

    public function getSettingsHtml(bool $presetEditor = false): ?string
    {
        $view = Craft::$app->getView();
        $view->registerAssetBundle(SettingsAsset::class);
        $view->registerTranslations('buttonbox', ['Setting', 'Value', 'Preview unavailable. Your settings have been preserved.']);
        $settingsId = 'buttonbox-rating-settings-' . StringHelper::randomString(10);
        $presets = $presetEditor ? [] : self::getPresets();
        $presetPreviews = [];

        foreach ($presets as $key => $preset) {
            $preview = new self([
                'symbol' => $preset['symbol'],
                'activeColor' => $preset['activeColor'],
                'inactiveColor' => $preset['inactiveColor'],
            ]);
            $presetPreviews[$key] = $preview->_inputHtml(3, true);
        }

        $html = $view->renderTemplate('buttonbox/_field/rating/settings', [
            'field' => $this,
            'settingsId' => $settingsId,
            'presets' => $presets, 'presetEditor' => $presetEditor,
            'presetPreviews' => $presetPreviews, 'ratingDefaults' => self::getBuiltInPresets(),
        ]);
        $view->registerJs(sprintf('Craft.ButtonBoxSettingsReady.then(() => new Craft.ButtonBoxRatingSettings(%s));', Json::encode($view->namespaceInputId($settingsId))));

        return $html;
    }

    public function useFieldset(): bool
    {
        return true;
    }

    public function getDefaultValue(): ?int
    {
        return $this->defaultValue;
    }

    public function normalizeValue(mixed $value, ?ElementInterface $element): mixed
    {
        if ($value === null && $this->isFresh($element)) {
            return $this->defaultValue;
        }

        if ($value === null || $value === '' || $value === 0 || $value === '0') {
            return null;
        }

        // Preserve invalid submissions for element validation instead of truncating
        // fractions or silently turning malformed input into an optional empty value.
        if ((is_string($value) || is_float($value)) && is_numeric($value)) {
            $number = (float)$value;

            if (is_finite($number) && floor($number) === $number && $number >= PHP_INT_MIN && $number < PHP_INT_MAX) {
                return (int)$value;
            }
        }

        return $value;
    }

    public function getStaticHtml(mixed $value, ElementInterface $element): string
    {
        return $this->_inputHtml($value, true);
    }

    public function normalizeValueFromRequest(mixed $value, ?ElementInterface $element): mixed
    {
        // A supplied null is an explicit clear (including GraphQL mutations).
        // Missing values still receive the fresh-entry default via normalizeValue().
        return $value === null ? null : $this->normalizeValue($value, $element);
    }

    public function getElementValidationRules(): array
    {
        return [
            ['integer', 'min' => 1, 'max' => $this->max, 'skipOnEmpty' => false, 'when' => fn(ElementInterface $element) => $element->getFieldValue($this->handle) !== null],
        ];
    }

    public function getElementConditionRuleType(): array|string|null
    {
        return NumberFieldConditionRule::class;
    }

    public function getPreviewHtml(mixed $value, ElementInterface $element): string
    {
        // Drafts can store values that haven't been validated, which aren't ratings to display.
        return !is_int($value) ? '' : Craft::t('buttonbox', '{rating} of {max}', [
            'rating' => $value,
            'max' => $this->max,
        ]);
    }

    public function getContentGqlType(): Type|array
    {
        return Type::int();
    }

    public function getContentGqlMutationArgumentType(): Type|array
    {
        return [
            'name' => $this->handle,
            'type' => Type::int(),
            'description' => Craft::t('buttonbox', 'An integer from 1 to {max}, or null.', ['max' => $this->max]),
        ];
    }


    // Protected Methods
    // =========================================================================

    protected function defineRules(): array
    {
        $rules = parent::defineRules();
        $rules[] = [['max'], 'integer', 'min' => 2, 'max' => 20];
        $rules[] = [['defaultValue'], 'integer', 'min' => 1, 'max' => $this->max, 'skipOnEmpty' => true];
        $rules[] = [['allowClear', 'showLabels'], 'boolean'];
        $rules[] = [['symbol'], 'in', 'range' => self::SYMBOLS];
        $rules[] = [['activeColor', 'inactiveColor'], ColorValidator::class];

        return $rules;
    }

    protected function inputHtml(mixed $value, ?ElementInterface $element, bool $inline): string
    {
        return $this->_inputHtml($value, false);
    }


    // Private Methods
    // =========================================================================

    private function _inputHtml(mixed $value, bool $static): string
    {
        Craft::$app->getView()->registerAssetBundle(ButtonBoxAsset::class);

        return Craft::$app->getView()->renderTemplate('buttonbox/_field/rating/input', [
            'name' => $this->handle,
            'value' => $value,
            'max' => $this->max,
            'allowClear' => $this->allowClear,
            'symbol' => $this->symbol,
            'activeColor' => ColorValidator::normalizeColor($this->activeColor),
            'inactiveColor' => ColorValidator::normalizeColor($this->inactiveColor),
            'showLabels' => $this->showLabels,
            'static' => $static,
        ]);
    }
}
