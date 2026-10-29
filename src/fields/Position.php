<?php
namespace verbb\buttonbox\fields;

use verbb\buttonbox\ButtonBox;
use verbb\buttonbox\fields\data\OptionData;
use verbb\buttonbox\fields\data\PositionData;
use verbb\buttonbox\gql\types\generators\PositionType;
use verbb\buttonbox\models\Appearance;
use verbb\buttonbox\models\Preset;
use verbb\buttonbox\web\assets\cp\ButtonBoxAsset;
use verbb\buttonbox\web\assets\cp\SettingsAsset;

use Craft;
use craft\base\ElementInterface;
use craft\base\InlineEditableFieldInterface;
use craft\base\SortableFieldInterface;
use craft\helpers\Json;
use craft\helpers\StringHelper;

use GraphQL\Type\Definition\Type;

class Position extends BaseChoiceField implements InlineEditableFieldInterface, SortableFieldInterface
{
    // Static Methods
    // =========================================================================

    public static function displayName(): string
    {
        return Craft::t('buttonbox', 'Button Box - Position');
    }

    public static function icon(): string
    {
        return 'crosshairs';
    }

    public static function phpType(): string
    {
        return sprintf('\\%s', PositionData::class);
    }

    public static function getPresets(): array
    {
        return ButtonBox::$plugin->getPresets()->getCatalog('position');
    }

    public static function getBuiltInPresets(): array
    {
        $grid = [
            ['label' => 'Top left', 'value' => 'top-left'],
            ['label' => 'Top center', 'value' => 'top-center'],
            ['label' => 'Top right', 'value' => 'top-right'],
            ['label' => 'Center left', 'value' => 'center-left'],
            ['label' => 'Center', 'value' => 'center'],
            ['label' => 'Center right', 'value' => 'center-right'],
            ['label' => 'Bottom left', 'value' => 'bottom-left'],
            ['label' => 'Bottom center', 'value' => 'bottom-center'],
            ['label' => 'Bottom right', 'value' => 'bottom-right'],
        ];

        return [
            'grid' => ['label' => Craft::t('buttonbox', 'Focal point'), 'mode' => 'grid', 'columns' => 3, 'options' => $grid],
            'horizontal' => ['label' => Craft::t('buttonbox', 'Horizontal alignment'), 'mode' => 'horizontal', 'columns' => 3, 'options' => [
                ['label' => 'Left', 'value' => 'left'],
                ['label' => 'Center', 'value' => 'center'],
                ['label' => 'Right', 'value' => 'right'],
            ]],
            'vertical' => ['label' => Craft::t('buttonbox', 'Vertical alignment'), 'mode' => 'vertical', 'columns' => 1, 'options' => [
                ['label' => 'Top', 'value' => 'top'],
                ['label' => 'Center', 'value' => 'center'],
                ['label' => 'Bottom', 'value' => 'bottom'],
            ]],
            'corners' => ['label' => Craft::t('buttonbox', 'Four corners'), 'mode' => 'grid', 'columns' => 2, 'options' => [$grid[0], $grid[2], $grid[6], $grid[8]]],
        ];
    }


    // Constants
    // =========================================================================

    public const MODES = [
        'grid',
        'horizontal',
        'vertical',
    ];


    // Properties
    // =========================================================================

    public string $mode = 'grid';
    public int $columns = 3;
    public bool $showTooltips = true;
    public array $appearance = [];
    public array $allowedPositions = [];
    public ?string $defaultPosition = null;


    // Public Methods
    // =========================================================================

    public function __construct($config = [])
    {
        // Materialise the original mode settings only when no editable options exist.
        // An explicitly empty table must stay empty through validation and resaves.
        if (!array_key_exists('options', $config)) {
            $mode = $config['mode'] ?? 'grid';
            $preset = self::getBuiltInPresets()[$mode] ?? self::getBuiltInPresets()['grid'];
            $allowed = array_intersect(array_column($preset['options'], 'value'), $config['allowedPositions'] ?? []);
            $default = $config['defaultPosition'] ?? null;
            $config['options'] = array_map(fn(array $option) => array_merge($option, [
                'disabled' => $allowed && !in_array($option['value'], $allowed, true),
                'default' => $option['value'] === $default,
            ]), $preset['options']);
        }

        parent::__construct($config);
        $this->options = $this->getPositionOptions();
    }

    public function settingsAttributes(): array
    {
        return array_values(array_diff(parent::settingsAttributes(), ['customOptions', 'allowedPositions', 'defaultPosition']));
    }

    public function getSettingsHtml(bool $presetEditor = false): ?string
    {
        $view = Craft::$app->getView();
        $view->registerAssetBundle(SettingsAsset::class);
        $view->registerTranslations('buttonbox', [
            'Label', 'Value', 'Default', 'Option', 'Edit option…', 'Edit option: {label}', 'Setting',
            'Add an option to preview this field.', 'Preview unavailable. Your options have been preserved.',
        ]);
        $settingsId = 'buttonbox-position-settings-' . StringHelper::randomString(10);
        $presets = $presetEditor ? [] : self::getPresets();
        $presetPreviews = [];

        foreach ($presets as $key => $preset) {
            $preview = new self(array_merge(array_intersect_key($preset, array_flip(Preset::ATTRIBUTES['position'])), [
                'handle' => 'positionPreset' . StringHelper::randomString(10),
                'mode' => $preset['mode'],
                'columns' => $preset['columns'],
                'showTooltips' => false,
                'options' => $preset['options'],
            ]));
            $presetPreviews[$key] = $preview->getInputHtml($preview->normalizeValue(null, null), null);
        }

        $html = $view->renderTemplate('buttonbox/_field/position/settings', [
            'field' => $this,
            'settingsId' => $settingsId,
            'rows' => $this->getPositionOptions(),
            'presets' => $presets, 'presetEditor' => $presetEditor,
            'presetPreviews' => $presetPreviews,
        ]);
        $view->registerJs(sprintf('Craft.ButtonBoxSettingsReady.then(() => new Craft.ButtonBoxPositionSettings(%s));', Json::encode($view->namespaceInputId($settingsId))));

        return $html;
    }

    public function getPositionOptions(): array
    {
        return array_values(array_map(fn(array $option) => [
            'label' => (string)($option['label'] ?? ''),
            'value' => (string)($option['value'] ?? ''),
            'default' => !empty($option['default']),
            'disabled' => !empty($option['disabled']),
            'explanation' => (string)($option['explanation'] ?? ''),
        ], $this->options));
    }

    public function getGridColumns(): int
    {
        return match ($this->mode) {
            'horizontal' => max(1, count($this->options)),
            'vertical' => 1,
            default => max(1, $this->columns),
        };
    }

    public function validateAppearance(): void
    {
        $appearance = $this->_appearanceModel();
        $appearance->validate();

        foreach ($appearance->getErrorSummary(true) as $error) {
            $this->addError('appearance', $error);
        }
    }

    public function getAppearanceStyle(): string
    {
        return $this->_appearanceModel()->getStyle();
    }

    public function validateOptions(): void
    {
        $labels = [];
        $values = [];
        $defaults = 0;
        $enabled = 0;

        foreach ($this->getPositionOptions() as $index => $option) {
            if (trim($option['label']) === '' || trim($option['value']) === '') {
                $this->addError('options', Craft::t('buttonbox', 'Option {number} needs a label and a value.', ['number' => $index + 1]));
            }

            if (in_array($option['label'], $labels, true) || in_array($option['value'], $values, true)) {
                $this->addError('options', Craft::t('buttonbox', 'Option labels and values must be unique.'));
            }

            if ($option['default'] && $option['disabled']) {
                $this->addError('options', Craft::t('buttonbox', 'A disabled position cannot be the default.'));
            }

            $labels[] = $option['label'];
            $values[] = $option['value'];
            $defaults += (int)$option['default'];
            $enabled += (int)!$option['disabled'];
        }

        if ($defaults > 1) {
            $this->addError('options', Craft::t('buttonbox', 'Choose at most one default option.'));
        }

        if (!$enabled) {
            $this->addError('options', Craft::t('buttonbox', 'Enable at least one position.'));
        }
    }

    public function useFieldset(): bool
    {
        return true;
    }

    public function getDefaultValue(): ?string
    {
        return $this->defaultValue();
    }

    public function normalizeValue(mixed $value, ?ElementInterface $element): PositionData
    {
        if ($value instanceof PositionData) {
            return $value;
        }

        if ($value instanceof OptionData) {
            $value = $value->value;
        }

        if (is_string($value) && str_starts_with($value, 'base64:')) {
            $value = base64_decode(substr($value, 7), true);
        } elseif ($value === '__blank__') {
            $value = '';
        } elseif ($value === null && $this->isFresh($element)) {
            $value = $this->defaultValue();
        }

        $value = $value === null || $value === '' ? null : (string)$value;
        $options = [];
        $selected = null;

        foreach ($this->getPositionOptions() as $index => $option) {
            $optionData = new PositionData(
                Craft::t('site', $option['label']),
                $option['value'],
                $option['value'] === $value,
                !$option['disabled'],
                intdiv($index, $this->getGridColumns()) + 1,
                $index % $this->getGridColumns() + 1,
                $option['disabled'],
            );
            $options[] = $optionData;

            if ($optionData->selected) {
                $selected = clone $optionData;
            }
        }

        $normalized = $selected ?? new PositionData(null, $value, true, $value === null);
        $normalized->setOptions($options);

        return $normalized;
    }

    public function getStaticHtml(mixed $value, ElementInterface $element): string
    {
        return $this->_inputHtml($value, $element, true);
    }

    public function getContentGqlType(): Type|array
    {
        return PositionType::generate();
    }

    public function getContentGqlMutationArgumentType(): Type|array
    {
        return [
            'name' => $this->handle,
            'type' => Type::string(),
            'description' => Craft::t('buttonbox', 'One of: {values}.', [
                'values' => implode(', ', array_column($this->options(), 'value')),
            ]),
        ];
    }


    // Protected Methods
    // =========================================================================

    protected function defineRules(): array
    {
        $rules = parent::defineRules();
        $rules[] = [['mode'], 'in', 'range' => self::MODES];
        $rules[] = [['appearance'], 'validateAppearance', 'skipOnEmpty' => false];
        $rules[] = [['columns'], 'integer', 'min' => 1, 'max' => 12, 'when' => fn() => $this->mode === 'grid'];

        // The parent validator skips empty arrays; an empty Position table is invalid.
        $rules[] = [['options'], 'validateOptions', 'when' => fn() => !$this->options, 'skipOnEmpty' => false];

        return $rules;
    }

    protected function options(): array
    {
        return array_values(array_filter($this->getPositionOptions(), fn(array $option) => !$option['disabled']));
    }

    protected function inputHtml(mixed $value, ?ElementInterface $element, bool $inline): string
    {
        return $this->_inputHtml($value, $element, false);
    }


    // Private Methods
    // =========================================================================

    private function _appearanceModel(): Appearance
    {
        $appearance = new Appearance();
        $appearance->setAttributes(array_intersect_key($this->appearance, array_flip(['size', 'textColor', 'backgroundColor', 'selectionColor'])), false);

        return $appearance;
    }

    private function _inputHtml(mixed $value, ?ElementInterface $element, bool $static): string
    {
        if (!$value instanceof PositionData) {
            $value = $this->normalizeValue($value, $element);
        }

        Craft::$app->getView()->registerAssetBundle(ButtonBoxAsset::class);

        $options = array_map(fn(array $option) => array_merge($option, [
            'label' => Craft::t('site', $option['label']),
            'value' => $this->encodeValue($option['value']),
        ]), $this->getPositionOptions());

        return Craft::$app->getView()->renderTemplate('buttonbox/_field/position/input', [
            'name' => $this->handle,
            'value' => $this->encodeValue($value->value),
            'invalid' => !$value->valid && $value->value !== null,
            'rawValue' => $value->value,
            'options' => $options,
            'mode' => $this->mode,
            'columns' => $this->getGridColumns(),
            'showTooltips' => $this->showTooltips,
            'appearanceStyle' => $this->getAppearanceStyle(),
            'static' => $static,
        ]);
    }
}
