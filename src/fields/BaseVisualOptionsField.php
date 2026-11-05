<?php
namespace verbb\buttonbox\fields;

use verbb\buttonbox\ButtonBox;
use verbb\buttonbox\events\DefineVisualOptionsEvent;
use verbb\buttonbox\fields\data\MultiVisualOptionData;
use verbb\buttonbox\fields\data\OptionData;
use verbb\buttonbox\fields\data\SingleVisualOptionData;
use verbb\buttonbox\fields\data\VisualOptionData;
use verbb\buttonbox\gql\types\generators\VisualOptionType;
use verbb\buttonbox\models\Appearance;
use verbb\buttonbox\models\Preset;
use verbb\buttonbox\services\Options;
use verbb\buttonbox\web\assets\cp\ButtonBoxAsset;
use verbb\buttonbox\web\assets\cp\SettingsAsset;

use Craft;
use craft\base\ElementInterface;
use craft\events\DefineInputOptionsEvent;
use craft\helpers\Json;
use craft\helpers\StringHelper;
use craft\validators\ColorValidator;

use yii\db\Schema;

use GraphQL\Type\Definition\Type;

abstract class BaseVisualOptionsField extends BaseChoiceField
{
    // Static Methods
    // =========================================================================

    public static function phpType(): string
    {
        return static::$multi ? sprintf('\\%s', MultiVisualOptionData::class) : sprintf('\\%s', SingleVisualOptionData::class);
    }

    public static function dbType(): string
    {
        return static::$multi ? Schema::TYPE_JSON : Schema::TYPE_TEXT;
    }


    // Constants
    // =========================================================================

    public const EVENT_DEFINE_VISUAL_OPTIONS = 'defineVisualOptions';

    public const OPTION_SOURCES = [
        'local',
        'projectSet',
        'provider',
    ];

    public const PRESENTATIONS = [
        'buttons',
        'segmented',
        'chip',
        'dropdown',
        'width',
        'list',
        'tile',
        'card',
        'swatch',
        'generated',
    ];


    // Properties
    // =========================================================================

    public string $optionSource = 'local';
    public ?string $projectSet = null;
    public string $presentation = 'segmented';
    public int $columns = 3;
    public string $iconSize = 'medium';
    public string $imageSize = 'auto';
    public string $imageFit = 'cover';
    public array $appearance = [];
    public bool $showClearButton = false;

    protected static bool $optionIcons = true;
    protected static bool $optionColors = true;


    // Public Methods
    // =========================================================================

    public function settingsAttributes(): array
    {
        return array_merge(parent::settingsAttributes(), [
            'optionSource',
            'projectSet',
            'presentation',
            'columns',
            'iconSize',
            'imageSize',
            'imageFit',
            'appearance',
            'showClearButton',
        ]);
    }

    public function validateAppearance(): void
    {
        $appearance = new Appearance();
        $appearance->setAttributes($this->appearance, false);
        $appearance->validate();

        foreach ($appearance->getErrorSummary(true) as $error) {
            $this->addError('appearance', $error);
        }
    }

    public function getAppearanceStyle(): string
    {
        $appearance = new Appearance();
        $appearance->setAttributes($this->appearance, false);

        return $appearance->getStyle();
    }

    public function useFieldset(): bool
    {
        return true;
    }

    public function getSettingsHtml(): ?string
    {
        return $this->getOptionEditorHtml(true);
    }

    public function getOptionEditorHtml(bool $includeSource = false, bool $presetEditor = false): string
    {
        $service = ButtonBox::$plugin->getOptions();
        $sets = $service->getProjectSets();
        $settingsId = 'buttonbox-settings-' . StringHelper::randomString(10);
        $view = Craft::$app->getView();
        $view->registerAssetBundle(SettingsAsset::class);
        $view->registerTranslations('buttonbox', [
            'Colour', 'First colour', 'Foreground colour', 'Second colour', 'Background colour',
            'Width (%)', 'Aspect ratio (e.g. 16:9)', 'Text size (px)', 'Corner radius (px)',
            'Aspect ratio (optional, e.g. 1:1)', 'Value', 'Image', 'Edit', 'Close',
            'Options copied into this field.', 'Label', 'Visual', 'Default', 'Option',
            'Option details', 'Option details: {label}', 'Choose icon', 'Remove icon',
            'Edit details…', 'Visual settings…', 'Visual settings: {label}',
            'Gallery unavailable. Change the visual type to retry.',
            'Dynamic options are available when editing an entry.',
            'Choose an option set to preview it.', 'Add an option to preview this field.',
            'Preview unavailable. Your options have been preserved.', 'The selected icon could not be previewed.',
        ]);
        $presets = $presetEditor ? [] : $service->getPresets(static::$multi);

        $presetPreviews = [];

        foreach ($presets as $key => $preset) {
            $previewField = new VisualChoice(array_merge(array_intersect_key($preset, array_flip(Preset::ATTRIBUTES['visual'])), [
                'handle' => 'preset' . StringHelper::randomString(10),
                'options' => $preset['options'],
                'presentation' => $preset['presentation'],
            ]));
            $presetPreviews[$key] = $previewField->getInputHtml($previewField->normalizeValue($preset['presentation'] === 'width' ? '50' : null, null), null);
        }

        // The editor initializes native pickers for both existing rows and cloned row templates.
        $view->startJsBuffer();

        try {
            $html = $view->renderTemplate('buttonbox/_field/visual/settings', [
                'field' => $this,
                'settingsId' => $settingsId,
                'includeSource' => $includeSource,
                'supportsIconPicker' => version_compare(Craft::$app->getVersion(), '5.8.0', '>='),
                'multi' => static::$multi,
                'rows' => array_map(fn(array $option) => $this->_settingsRow($option), $this->options),
                'sets' => $sets,
                'editableSetUids' => array_keys(ButtonBox::$plugin->getOptionSets()->getAll()),
                'canManageSets' => Craft::$app->getUser()->getIsAdmin() && Craft::$app->getConfig()->getGeneral()->allowAdminChanges,
                'presets' => $presets, 'presetEditor' => $presetEditor,
                'presetPreviews' => $presetPreviews,
                'presentations' => array_filter([
                    'buttons' => Craft::t('buttonbox', 'Buttons'),
                    'segmented' => Craft::t('buttonbox', 'Button group'),
                    'chip' => Craft::t('buttonbox', 'Chips'),
                    'dropdown' => !static::$multi ? Craft::t('buttonbox', 'Dropdown') : null,
                    'width' => $this->presentation === 'width' ? Craft::t('buttonbox', 'Width') : null,
                    'list' => Craft::t('buttonbox', 'List'),
                    'tile' => Craft::t('buttonbox', 'Tiles'),
                    'card' => Craft::t('buttonbox', 'Cards'),
                    'swatch' => Craft::t('buttonbox', 'Swatches'),
                    'generated' => Craft::t('buttonbox', 'Visual samples'),
                ]),
            ]);
        } finally {
            $view->clearJsBuffer();
        }

        $view->registerJs(sprintf('Craft.ButtonBoxSettingsReady.then(() => new Craft.ButtonBoxVisualSettings(%s));', Json::encode($view->namespaceInputId($settingsId))));

        return $html;
    }

    public function validateOptions(): void
    {
        if ($this->optionSource === 'provider') {
            return;
        }

        // Validate the resolved source without mutating option values into table-cell error arrays.
        $labels = [];
        $values = [];
        $defaults = 0;

        foreach ($this->resolveOptions() as $index => $option) {
            if ($option['label'] === '' || $option['value'] === '') {
                $this->addError('options', Craft::t('buttonbox', 'Option {number} needs a label and a value.', ['number' => $index + 1]));
            }

            if (in_array($option['label'], $labels, true) || in_array($option['value'], $values, true)) {
                $this->addError('options', Craft::t('buttonbox', 'Option labels and values must be unique.'));
            }

            $labels[] = $option['label'];
            $values[] = $option['value'];
            $defaults += !empty($option['default']) ? 1 : 0;

            if (!empty($option['color']) && !(new ColorValidator())->validate($option['color'])) {
                $this->addError('options', Craft::t('buttonbox', 'Option {number} has an invalid color.', ['number' => $index + 1]));
            }
        }

        if (!static::$multi && $defaults > 1) {
            $this->addError('options', Craft::t('buttonbox', 'Choose at most one default option.'));
        }
    }

    public function normalizeValue(mixed $value, ?ElementInterface $element): mixed
    {
        if ((static::$multi && $value instanceof MultiVisualOptionData) || (!static::$multi && $value instanceof SingleVisualOptionData)) {
            return $value;
        }

        if ($value instanceof OptionData) {
            $value = $value->value;
        } elseif ($value instanceof MultiVisualOptionData) {
            $value = array_map(fn(OptionData $option) => $option->value, iterator_to_array($value));
        }

        if (is_string($value) && (str_starts_with($value, '[') || str_starts_with($value, '{'))) {
            $value = Json::decodeIfJson($value);
        } elseif ($value === '' && static::$multi) {
            $value = [];
        } elseif ($value === '') {
            // A cleared single choice submits its empty fallback: an explicit empty selection, not a missing option or a fresh default.
            $value = [];
        } elseif (is_string($value) && strtolower($value) === '__blank__') {
            $value = '';
        } elseif ($value === null && $this->isFresh($element)) {
            $value = $this->defaultValue();
        }

        $selectedValues = [];

        foreach ((array)$value as $selectedValue) {
            $selectedValue = (string)$selectedValue;

            if (str_starts_with($selectedValue, 'base64:')) {
                $selectedValue = base64_decode(StringHelper::removeLeft($selectedValue, 'base64:'));
            }

            $selectedValues[] = $selectedValue;
        }

        $selectedValues = array_values(array_unique($selectedValues));
        $options = [];
        $optionValues = [];
        $resolvedOptions = $this->resolveOptions($value, $element);

        foreach ($resolvedOptions as $option) {
            $optionValue = (string)$option['value'];
            $options[] = $this->_createOptionData($option, in_array($optionValue, $selectedValues, true));
            $optionValues[] = $optionValue;
        }

        if (static::$multi) {
            $selectedOptions = [];

            foreach ($selectedValues as $selectedValue) {
                $index = array_search($selectedValue, $optionValues, true);
                $selectedOptions[] = $index === false
                    ? new VisualOptionData(null, $selectedValue, true, false)
                    : $this->_createOptionData($resolvedOptions[$index], true);
            }

            $normalized = new MultiVisualOptionData($selectedOptions);
        } elseif ($selectedValues) {
            $selectedValue = reset($selectedValues);
            $index = array_search($selectedValue, $optionValues, true);
            $normalized = $index === false
                ? new SingleVisualOptionData(null, $selectedValue, true, false)
                : $this->_createOptionData($resolvedOptions[$index], true, true);
        } else {
            $normalized = new SingleVisualOptionData(null, null, true, false);
        }

        $normalized->setOptions($options);

        return $normalized;
    }

    public function getStaticHtml(mixed $value, ElementInterface $element): string
    {
        return $this->_inputHtml($value, $element, false, true);
    }

    public function getContentGqlType(): Type|array
    {
        $type = VisualOptionType::generate();

        return static::$multi ? Type::listOf($type) : $type;
    }

    public function getContentGqlMutationArgumentType(): Type|array
    {
        return [
            'name' => $this->handle,
            'type' => static::$multi ? Type::listOf(Type::string()) : Type::string(),
            'description' => $this->instructions,
        ];
    }

    public function resolveOptions(mixed $value = null, ?ElementInterface $element = null): array
    {
        if ($this->optionSource === 'projectSet') {
            $set = ButtonBox::$plugin->getOptions()->getProjectSet((string)$this->projectSet);
            $options = $set['options'] ?? [];
        } else {
            $options = $this->options ?? [];
        }

        $options = ButtonBox::$plugin->getOptions()->normalizeOptions($options);

        if ($this->optionSource === 'provider') {
            $event = new DefineVisualOptionsEvent([
                'options' => $options,
                'value' => $value,
                'element' => $element,
            ]);
            $this->trigger(self::EVENT_DEFINE_VISUAL_OPTIONS, $event);
            $options = ButtonBox::$plugin->getOptions()->normalizeOptions($event->options);
        }

        if ($this->hasEventHandlers(self::EVENT_DEFINE_OPTIONS)) {
            $event = new DefineInputOptionsEvent([
                'options' => $options,
                'value' => $value,
                'element' => $element,
            ]);
            $this->trigger(self::EVENT_DEFINE_OPTIONS, $event);
            $options = ButtonBox::$plugin->getOptions()->normalizeOptions($event->options);
        }

        return array_values($options);
    }

    public function validateProjectSet(): void
    {
        if ($this->optionSource !== 'projectSet') {
            return;
        }

        if (!$this->projectSet || ButtonBox::$plugin->getOptions()->getProjectSet($this->projectSet) === null) {
            $this->addError('projectSet', Craft::t('buttonbox', 'Select an available option set.'));
        }
    }

    public function validateVisualOptions(): void
    {
        if ($this->optionSource === 'provider') {
            return;
        }

        foreach ($this->resolveOptions() as $index => $option) {
            if (trim($option['label']) === '') {
                $this->addError('options', Craft::t('buttonbox', 'Option {number} needs a label.', ['number' => $index + 1]));
            }

            $surface = $option['surface'];
            $mode = $surface['mode'] ?? null;
            $error = null;

            if ($mode && !in_array($mode, Options::SURFACE_MODES, true)) {
                $this->addError('options', Craft::t('buttonbox', 'Option {number} has an unsupported visual.', [
                    'number' => $index + 1,
                ]));

                continue;
            }

            if (in_array($mode, ['solid', 'split', 'foregroundBackground', 'gradient'], true) && ButtonBox::$plugin->getOptions()->getSurfaceStyle($option) === '') {
                $error = Craft::t('buttonbox', 'incomplete or invalid color metadata');
            } elseif (in_array($mode, ['split', 'gradient'], true) && isset($surface['angle']) && (!is_numeric($surface['angle']) || (float)$surface['angle'] < 0 || (float)$surface['angle'] > 360)) {
                $error = Craft::t('buttonbox', 'an angle outside the 0–360 range');
            } elseif ($mode === 'width' && (!is_numeric($surface['value'] ?? null) || (float)$surface['value'] < 5 || (float)$surface['value'] > 100)) {
                $error = Craft::t('buttonbox', 'a width outside the 5–100 range');
            } elseif ($mode === 'ratio' && !preg_match('/^\d+(?:\.\d+)?:\d+(?:\.\d+)?$/', (string)($surface['value'] ?? ''))) {
                $error = Craft::t('buttonbox', 'an invalid aspect ratio');
            } elseif ($mode === 'text' && (!is_numeric($surface['size'] ?? null) || (float)$surface['size'] < 10 || (float)$surface['size'] > 64)) {
                $error = Craft::t('buttonbox', 'a text size outside the 10–64 range');
            } elseif ($mode === 'shape' && (!is_numeric($surface['radius'] ?? null) || (float)$surface['radius'] < 0 || (float)$surface['radius'] > 999)) {
                $error = Craft::t('buttonbox', 'a radius outside the 0–999 range');
            }

            if ($error !== null) {
                $this->addError('options', Craft::t('buttonbox', 'Option {number} has {error}.', [
                    'number' => $index + 1,
                    'error' => $error,
                ]));
            }
        }
    }


    // Protected Methods
    // =========================================================================

    protected function defineRules(): array
    {
        $rules = parent::defineRules();
        $rules[] = [['optionSource'], 'in', 'range' => self::OPTION_SOURCES];
        $rules[] = [['presentation'], 'in', 'range' => static::$multi ? array_diff(self::PRESENTATIONS, ['width', 'dropdown']) : self::PRESENTATIONS];
        $rules[] = [['columns'], 'integer', 'min' => 1, 'max' => 6];
        $rules[] = [['iconSize'], 'in', 'range' => ['small', 'medium', 'large']];
        $rules[] = [['imageSize'], 'in', 'range' => ['auto', 'small', 'medium', 'large']];
        $rules[] = [['imageFit'], 'in', 'range' => ['contain', 'cover']];
        $rules[] = [['showClearButton'], 'boolean'];
        $rules[] = [['appearance'], 'validateAppearance', 'skipOnEmpty' => false];
        $rules[] = [['projectSet'], 'validateProjectSet'];
        $rules[] = [['options'], 'validateVisualOptions'];

        return $rules;
    }

    protected function options(): array
    {
        return $this->resolveOptions();
    }

    protected function translatedOptions(bool $encode = false, mixed $value = null, ?ElementInterface $element = null): array
    {
        $translated = [];

        foreach ($this->resolveOptions($value, $element) as $option) {
            $translated[] = array_merge($option, [
                'label' => Craft::t('site', $option['label']),
                'value' => $encode ? $this->encodeValue((string)$option['value']) : (string)$option['value'],
                'iconSvg' => !empty($option['icon']) ? ButtonBox::$plugin->getGallery()->resolveIconSvg($option['icon']) : null,
                'surfaceStyle' => ButtonBox::$plugin->getOptions()->getSurfaceStyle($option),
            ]);
        }

        return $translated;
    }

    protected function inputHtml(mixed $value, ?ElementInterface $element, bool $inline): string
    {
        return $this->_inputHtml($value, $element, $inline, false);
    }

    protected function optionsSettingLabel(): string
    {
        return Craft::t('buttonbox', 'Visual options');
    }


    // Private Methods
    // =========================================================================

    private function _inputHtml(mixed $value, ?ElementInterface $element, bool $inline, bool $static): string
    {
        if (!$value instanceof MultiVisualOptionData && !$value instanceof SingleVisualOptionData) {
            $value = $this->normalizeValue($value, $element);
        }

        Craft::$app->getView()->registerAssetBundle(ButtonBoxAsset::class);

        $options = $this->translatedOptions(true, $value, $element);

        if ($value instanceof MultiVisualOptionData) {
            foreach ($value as $selectedOption) {
                if (!$selectedOption->valid) {
                    $options[] = $this->_invalidInputOption((string)$selectedOption->value);
                }
            }
        } elseif ($value instanceof SingleVisualOptionData && !$value->valid && $value->value !== null) {
            if (!$static) {
                Craft::$app->getView()->setInitialDeltaValue($this->handle, $this->encodeValue($value->value));
            }

            $options[] = $this->_invalidInputOption((string)$value->value);
        }

        $template = $this->presentation === 'dropdown' && !static::$multi ? 'dropdown' : 'input';

        return Craft::$app->getView()->renderTemplate('buttonbox/_field/visual/' . $template, [
            'field' => $this,
            'name' => $this->handle,
            'value' => $this->encodeValue($value),
            'options' => $options,
            'multi' => static::$multi,
            'inline' => $inline,
            'static' => $static,
        ]);
    }

    private function _createOptionData(array $option, bool $selected, bool $single = false): VisualOptionData
    {
        $class = $single ? SingleVisualOptionData::class : VisualOptionData::class;

        return new $class(
            $option['label'],
            $option['value'],
            $selected,
            empty($option['disabled']),
            $option['icon'] ?? null,
            $option['color'] ?? null,
            $option,
        );
    }

    private function _invalidInputOption(string $value): array
    {
        return [
            'label' => Craft::t('buttonbox', 'Unavailable: {value}', ['value' => $value]),
            'value' => $this->encodeValue($value),
            'description' => Craft::t('buttonbox', 'This stored value is no longer present in the field’s option source.'),
            'icon' => null,
            'color' => null,
            'imageUrl' => '',
            'imageAlt' => '',
            'surface' => [],
            'category' => '',
            'disabled' => false,
            'explanation' => '',
            'default' => false,
            'iconSvg' => null,
            'surfaceStyle' => '',
            'invalid' => true,
            'selected' => true,
        ];
    }

    private function _settingsRow(array $option): array
    {
        $surface = is_array($option['surface'] ?? null) ? $option['surface'] : [];

        return array_merge($option, [
            'surfaceMode' => $option['surfaceMode'] ?? ($surface['mode'] ?? ''),
            'surfaceValue' => $option['surfaceValue'] ?? ($surface['value'] ?? $surface['from'] ?? $surface['radius'] ?? $surface['size'] ?? $option['color'] ?? ''),
            'surfaceSecondary' => $option['surfaceSecondary'] ?? ($surface['to'] ?? $surface['aspectRatio'] ?? ''),
            'surfaceAngle' => $option['surfaceAngle'] ?? ($surface['angle'] ?? ''),
        ]);
    }
}
