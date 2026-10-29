<?php
namespace verbb\buttonbox\fields;

use verbb\buttonbox\ButtonBox;
use verbb\buttonbox\fields\data\OptionData;
use verbb\buttonbox\fields\data\WidthData;
use verbb\buttonbox\gql\resolvers\WidthResolver;
use verbb\buttonbox\models\Preset;
use verbb\buttonbox\models\WidthAppearance;
use verbb\buttonbox\web\assets\cp\ButtonBoxAsset;
use verbb\buttonbox\web\assets\cp\SettingsAsset;

use Craft;
use craft\base\ElementInterface;
use craft\base\InlineEditableFieldInterface;
use craft\base\SortableFieldInterface;
use craft\events\DefineInputOptionsEvent;
use craft\helpers\Json;
use craft\helpers\StringHelper;

use yii\db\Schema;

use GraphQL\Type\Definition\Type;

class WidthChoice extends BaseChoiceField implements InlineEditableFieldInterface, SortableFieldInterface
{
    // Static Methods
    // =========================================================================

    public static function displayName(): string
    {
        return Craft::t('buttonbox', 'Button Box - Width');
    }

    public static function icon(): string
    {
        return 'arrows-left-right';
    }

    public static function dbType(): string
    {
        return Schema::TYPE_TEXT;
    }

    public static function phpType(): string
    {
        return '\\' . WidthData::class;
    }

    public static function getPresets(): array
    {
        return ButtonBox::$plugin->getPresets()->getCatalog('width');
    }

    public static function getBuiltInPresets(): array
    {
        $presets = [];

        foreach (['halves' => [2, 'Halves'], 'thirds' => [3, 'Thirds'], 'quarters' => [4, 'Quarters'], 'columns' => [12, 'Grid columns']] as $key => [$count, $label]) {
            $options = [];

            for ($i = 1; $i <= $count; $i++) {
                $percentage = round($i / $count * 100, 4);
                $options[] = [
                    'label' => $key === 'columns' ? (string)$i : ($count === 3 ? "$i/3" : $percentage . '%'),
                    'value' => $key === 'columns' ? (string)$i : (string)$percentage,
                    'percentage' => $percentage,
                ];
            }

            $presets[$key] = ['label' => Craft::t('buttonbox', $label), 'displayStyle' => 'bar', 'options' => $options];
        }

        return $presets;
    }


    // Properties
    // =========================================================================

    public string $displayStyle = 'bar';
    public string $labelDisplay = 'selected';
    public bool $showTooltips = true;
    public array $appearance = [];


    // Public Methods
    // =========================================================================

    public function __construct($config = [])
    {
        if (!array_key_exists('options', $config)) {
            $config['options'] = self::getBuiltInPresets()['quarters']['options'];
        }

        parent::__construct($config);

        // Released Width options were equal steps, independent of their stored values.
        // Materialise that geometry once; subsequent edits use explicit percentages.
        $this->options = $this->_widthOptions($this->options);
    }

    public function settingsAttributes(): array
    {
        return array_values(array_diff(parent::settingsAttributes(), ['customOptions']));
    }

    public function getWidthOptions(): array
    {
        return $this->_widthOptions($this->options);
    }

    public function getSettingsHtml(bool $presetEditor = false): ?string
    {
        $view = Craft::$app->getView();
        $view->registerAssetBundle(SettingsAsset::class);
        $view->registerTranslations('buttonbox', ['Label', 'Value', 'Width (%)', 'Default', 'Option', 'Edit option…', 'Edit option: {label}', 'Setting', 'Add an option to preview this field.', 'Preview unavailable. Your options have been preserved.']);
        $settingsId = 'buttonbox-width-settings-' . StringHelper::randomString(10);
        $presets = $presetEditor ? [] : self::getPresets();
        $presetPreviews = [];

        foreach ($presets as $key => $preset) {
            $preview = new self(array_merge(array_intersect_key($preset, array_flip(Preset::ATTRIBUTES['width'])), ['handle' => 'widthPreset' . StringHelper::randomString(10), 'showTooltips' => false]));
            $option = $preset['options'][max(0, (int)ceil(count($preset['options']) / 2) - 1)];
            $presetPreviews[$key] = $preview->getInputHtml($preview->normalizeValue($option['value'], null), null);
        }

        $html = $view->renderTemplate('buttonbox/_field/width/settings', [
            'field' => $this, 'settingsId' => $settingsId, 'rows' => $this->getWidthOptions(), 'presets' => $presets, 'presetEditor' => $presetEditor, 'presetPreviews' => $presetPreviews,
        ]);
        $view->registerJs(sprintf('Craft.ButtonBoxSettingsReady.then(() => new Craft.ButtonBoxWidthSettings(%s));', Json::encode($view->namespaceInputId($settingsId))));

        return $html;
    }

    public function validateOptions(): void
    {
        $values = [];
        $labels = [];
        $defaults = 0;
        $enabled = 0;
        $previous = 0;

        foreach ($this->getWidthOptions() as $index => $option) {
            if (trim($option['label']) === '' || trim($option['value']) === '') {
                $this->addError('options', Craft::t('buttonbox', 'Option {number} needs a label and a value.', ['number' => $index + 1]));
            }

            if (in_array($option['value'], $values, true) || in_array($option['label'], $labels, true)) {
                $this->addError('options', Craft::t('buttonbox', 'Option labels and values must be unique.'));
            }

            if (!is_numeric($option['percentage']) || !is_finite((float)$option['percentage']) || (float)$option['percentage'] <= $previous || (float)$option['percentage'] > 100) {
                $this->addError('options', Craft::t('buttonbox', 'Widths must increase in table order, above 0 and up to 100%.'));
            }

            $previous = is_numeric($option['percentage']) ? (float)$option['percentage'] : $previous;

            if ($option['default'] && $option['disabled']) {
                $this->addError('options', Craft::t('buttonbox', 'A disabled width cannot be the default.'));
            }

            $values[] = $option['value'];
            $labels[] = $option['label'];
            $defaults += (int)$option['default'];
            $enabled += (int)!$option['disabled'];
        }

        if ($defaults > 1) {
            $this->addError('options', Craft::t('buttonbox', 'Choose at most one default option.'));
        }

        if (!$enabled) {
            $this->addError('options', Craft::t('buttonbox', 'Enable at least one width.'));
        }
    }

    public function validateAppearance(): void
    {
        $model = $this->_appearanceModel();
        $model->validate();

        foreach ($model->getErrorSummary(true) as $error) {
            $this->addError('appearance', $error);
        }
    }

    public function getAppearanceStyle(): string
    {
        return $this->_appearanceModel()->getStyle();
    }

    public function useFieldset(): bool
    {
        return true;
    }

    public function normalizeValue(mixed $value, ?ElementInterface $element): WidthData
    {
        if ($value instanceof WidthData) {
            return $value;
        }

        if ($value instanceof OptionData) {
            $value = $value->value;
        }

        if (is_string($value) && (str_starts_with($value, '[') || str_starts_with($value, '{'))) {
            $value = Json::decodeIfJson($value);
        }

        if (is_array($value)) {
            $value = $value ? reset($value) : '';
        }

        if ($value === null && $this->isFresh($element)) {
            $value = $this->defaultValue();
        } elseif (is_string($value) && strtolower($value) === '__blank__') {
            $value = '';
        } elseif (is_string($value) && str_starts_with($value, 'base64:')) {
            $value = base64_decode(substr($value, 7), true);
        }

        $value = $value === null || $value === '' ? null : (string)$value;
        $options = [];
        $selected = null;

        foreach ($this->getWidthOptions() as $option) {
            $percentage = is_numeric($option['percentage']) ? (float)$option['percentage'] : null;
            $optionData = new WidthData(
                $option['label'],
                $option['value'],
                $option['value'] === $value,
                !$option['disabled'],
                $percentage !== null && is_finite($percentage) && $percentage > 0 && $percentage <= 100 ? $percentage : null,
                $option['disabled'],
                $option['explanation'],
            );
            $options[] = $optionData;

            if ($optionData->selected) {
                $selected = clone $optionData;
            }
        }

        $normalized = $selected ?? new WidthData(null, $value, true, false);
        $normalized->setOptions($options);

        return $normalized;
    }

    public function getContentGqlType(): Type|array
    {
        $type = parent::getContentGqlType();
        $type['resolve'] = WidthResolver::class . '::resolve';

        return $type;
    }

    public function getStaticHtml(mixed $value, ElementInterface $element): string
    {
        return $this->_inputHtml($value, $element, true);
    }


    // Protected Methods
    // =========================================================================

    protected function defineRules(): array
    {
        $rules = parent::defineRules();
        $rules[] = [['displayStyle'], 'in', 'range' => ['bar', 'samples'], 'skipOnEmpty' => false];
        $rules[] = [['labelDisplay'], 'in', 'range' => ['selected', 'all', 'hidden'], 'skipOnEmpty' => false];
        $rules[] = [['appearance'], 'validateAppearance', 'skipOnEmpty' => false];
        $rules[] = [['options'], 'validateOptions', 'when' => fn() => !$this->options, 'skipOnEmpty' => false];

        return $rules;
    }

    protected function options(): array
    {
        return array_values(array_filter($this->getWidthOptions(), fn(array $option) => !$option['disabled']));
    }

    protected function inputHtml(mixed $value, ?ElementInterface $element, bool $inline): string
    {
        return $this->_inputHtml($value, $element, false);
    }


    // Private Methods
    // =========================================================================

    private function _widthOptions(array $options): array
    {
        $result = [];

        foreach (array_values($options) as $index => $option) {
            $result[] = [
                'label' => (string)($option['label'] ?? ''), 'value' => (string)($option['value'] ?? ''),
                'percentage' => $option['percentage'] ?? round(($index + 1) / max(1, count($options)) * 100, 4),
                'default' => !empty($option['default']), 'disabled' => !empty($option['disabled']), 'explanation' => (string)($option['explanation'] ?? ''),
            ];
        }

        return $result;
    }

    private function _appearanceModel(): WidthAppearance
    {
        $appearance = new WidthAppearance();
        $appearance->setAttributes($this->appearance, false);

        return $appearance;
    }

    private function _inputHtml(mixed $value, ?ElementInterface $element, bool $static): string
    {
        if (!$value instanceof WidthData) {
            $value = $this->normalizeValue($value, $element);
        }

        $options = $this->getWidthOptions();

        if ($this->hasEventHandlers(self::EVENT_DEFINE_OPTIONS)) {
            $event = new DefineInputOptionsEvent(['options' => $options, 'value' => $value, 'element' => $element]);
            $this->trigger(self::EVENT_DEFINE_OPTIONS, $event);
            $options = $this->_widthOptions($event->options);
        }

        $selectedLabel = null;
        $previous = 0;

        foreach ($options as &$option) {
            // Provider data must never become unchecked CSS; invalid geometry uses equal steps.
            $percentage = is_numeric($option['percentage']) ? (float)$option['percentage'] : 0;

            if (!is_finite($percentage) || $percentage <= $previous || $percentage > 100) {
                $percentage = min(100, $previous + 100 / max(1, count($options)));
            }

            $option['span'] = $percentage - $previous;
            $option['percentage'] = $percentage;
            $previous = $percentage;
            $option['label'] = Craft::t('site', $option['label']);

            if ($option['value'] === $value->value && !$option['disabled']) {
                $selectedLabel = $option['label'];
            }

            $option['value'] = $this->encodeValue($option['value']);
        }

        unset($option);
        $invalid = $value->value !== null && $value->value !== '' && $selectedLabel === null;
        Craft::$app->getView()->registerAssetBundle(ButtonBoxAsset::class);

        return Craft::$app->getView()->renderTemplate('buttonbox/_field/width/input', [
            'name' => $this->handle, 'value' => $this->encodeValue($value->value), 'rawValue' => $value->value,
            'options' => $options, 'selectedLabel' => $selectedLabel, 'invalid' => $invalid,
            'displayStyle' => $this->displayStyle, 'labelDisplay' => $this->labelDisplay,
            'showTooltips' => $this->showTooltips, 'appearanceStyle' => $this->getAppearanceStyle(), 'static' => $static,
        ]);
    }
}
