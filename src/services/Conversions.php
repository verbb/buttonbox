<?php
namespace verbb\buttonbox\services;

use verbb\buttonbox\fieldlayoutelements\ActionLinksField;
use verbb\buttonbox\fields\ActionLinks;
use verbb\buttonbox\fields\Buttons;
use verbb\buttonbox\fields\Colours;
use verbb\buttonbox\fields\Rating;
use verbb\buttonbox\fields\Stars;
use verbb\buttonbox\fields\TextSize;
use verbb\buttonbox\fields\Triggers;
use verbb\buttonbox\fields\VisualChoice;
use verbb\buttonbox\fields\Width;
use verbb\buttonbox\fields\WidthChoice;

use Craft;
use craft\base\Component;
use craft\base\FieldInterface;
use craft\db\Query;
use craft\db\Table;
use craft\fieldlayoutelements\CustomField;
use craft\helpers\ArrayHelper;
use craft\helpers\Json;

use InvalidArgumentException;
use RuntimeException;
use Throwable;

class Conversions extends Component
{
    // Constants
    // =========================================================================

    public const LEGACY_FIELDS = [
        Buttons::class,
        Colours::class,
        TextSize::class,
        Stars::class,
        Triggers::class,
        Width::class,
    ];


    // Public Methods
    // =========================================================================

    public function getPlans(?string $handle = null): array
    {
        $plans = [];

        foreach (Craft::$app->getFields()->getAllFields() as $field) {
            if (!in_array($field::class, self::LEGACY_FIELDS, true)) {
                continue;
            }

            if ($handle !== null && $field->handle !== $handle) {
                continue;
            }

            $plans[] = $this->plan($field);
        }

        return $plans;
    }

    public function plan(FieldInterface $field): array
    {
        if (!in_array($field::class, self::LEGACY_FIELDS, true)) {
            return $this->_plan($field, null, ['This field is not a legacy Button Box field.']);
        }

        if ($field instanceof Triggers) {
            return $this->_planTriggers($field);
        }

        $target = $this->createReplacement($field);
        $blockers = [];
        $warnings = [];
        $contentCounts = null;

        if (!$target || !$target->validate()) {
            $blockers[] = $target
                ? implode(' ', $target->getErrorSummary(true))
                : 'No conversion target is available.';
        }

        if ($field instanceof Width) {
            $warnings[] = 'Width settings and input presentation will change. Stored values and equal-step geometry are preserved; review the new field before applying.';
        }

        if ($field instanceof Buttons) {
            $warnings = array_merge($warnings, $this->_buttonsWarnings($field));
        }

        if ($field instanceof Stars) {
            $contentCounts = $this->_starsContentCounts($field);
            $warnings[] = sprintf(
                'Stored field values: %d empty, %d zero, %d valid and %d out of range.',
                $contentCounts['empty'],
                $contentCounts['zero'],
                $contentCounts['valid'],
                $contentCounts['outOfRange'],
            );
            $warnings[] = 'Stored zero values normalize to null in Rating; positive values remain unchanged.';

            if ($contentCounts['outOfRange'] > 0) {
                $blockers[] = 'Out-of-range Stars values require review before conversion.';
            }

            if ($contentCounts['zero'] > 0 && $this->_starsContentCounts($field, true)['zero'] > 0) {
                $blockers[] = 'Required Stars placements contain zero values that would become null.';
            }
        }

        $plan = $this->_plan($field, $target, $blockers, $warnings);

        if ($contentCounts !== null) {
            $plan['contentCounts'] = $contentCounts;
        }

        return $plan;
    }

    public function createReplacement(FieldInterface $field): ?FieldInterface
    {
        $config = $this->_baseFieldConfig($field);

        if ($field instanceof Width) {
            $settings = array_intersect_key($field->getSettings(), array_flip(['appearance', 'displayStyle', 'labelDisplay', 'showTooltips', 'options']));

            return new WidthChoice(array_merge($config, $settings));
        }

        if ($field instanceof Stars) {
            return new Rating(array_merge($config, [
                'max' => $field->totalStars,
                'allowClear' => true,
            ]));
        }

        if (!$field instanceof Buttons && !$field instanceof Colours && !$field instanceof TextSize && !$field instanceof Width) {
            return null;
        }

        [$presentation, $options] = $this->_visualSettings($field);

        return new VisualChoice(array_merge($config, [
            'presentation' => $presentation,
            'options' => $options,
            'appearance' => $field instanceof Buttons ? $this->_buttonsAppearance($field) : [],
        ]));
    }

    public function convert(string $handle): array
    {
        $field = Craft::$app->getFields()->getFieldByHandle($handle);

        if (!$field) {
            throw new InvalidArgumentException("Unable to find a field with the handle “{$handle}”.");
        }

        $plan = $this->plan($field);

        if ($plan['status'] !== 'ready') {
            throw new RuntimeException(implode(' ', $plan['blockers']));
        }

        // Field save callbacks run after Craft's own field-record transaction.
        // Keep the entire conversion atomic, including callbacks and layout changes.
        $transaction = Craft::$app->getDb()->beginTransaction();

        try {
            if ($field instanceof Triggers) {
                $this->_convertTriggers($field, $plan);
            } else {
                $replacement = $this->createReplacement($field);

                if (!$replacement || !Craft::$app->getFields()->saveField($replacement)) {
                    $errors = $replacement?->getErrorSummary(true) ?? ['Unknown conversion error.'];

                    throw new RuntimeException(implode(' ', $errors));
                }
            }

            $transaction->commit();
        } catch (Throwable $exception) {
            $transaction->rollBack();
            Craft::$app->getProjectConfig()->reset();
            Craft::$app->getFields()->refreshFields();

            throw $exception;
        }

        return $plan;
    }


    // Private Methods
    // =========================================================================

    private function _plan(FieldInterface $field, ?FieldInterface $target, array $blockers = [], array $warnings = []): array
    {
        return [
            'field' => $field->handle,
            'name' => $field->name,
            'source' => $field::class,
            'target' => $target ? $target::class : ($field instanceof Triggers ? ActionLinks::class : null),
            'status' => $blockers ? 'blocked' : 'ready',
            'blockers' => array_values(array_filter($blockers)),
            'warnings' => array_values(array_unique($warnings)),
            'settings' => $target?->getSettings(),
        ];
    }

    private function _planTriggers(Triggers $field): array
    {
        $blockers = [];
        $warnings = [];
        $actions = [];

        foreach ($field->options as $index => $option) {
            $label = trim((string)($option['label'] ?? ''));
            $value = trim((string)($option['value'] ?? ''));
            $number = $index + 1;

            if (($option['type'] ?? 'link') === 'js') {
                $blockers[] = "Row {$number} contains JavaScript, which Action Links intentionally does not execute.";

                continue;
            }

            if ($label === '' || $value === '') {
                $blockers[] = "Row {$number} requires a label and URL before it can be converted.";

                continue;
            }

            $actions[] = [
                'label' => $label,
                'urlType' => 'url',
                'url' => $value,
                'imageUrl' => (string)($option['imageUrl'] ?? ''),
                'imageAlt' => $label,
                'style' => 'default',
                'newWindow' => (bool)($option['newWindow'] ?? false),
            ];
        }

        $placements = $this->_fieldPlacements($field);

        $actionLinks = new ActionLinks(['actions' => $actions]);

        if (!$blockers && !$actionLinks->validate(['actions'])) {
            $blockers = array_merge($blockers, $actionLinks->getErrorSummary(true));
        }

        if (count($placements) > 1) {
            $warnings[] = sprintf('All %d field-layout placements will use the converted field.', count($placements));
        }

        $plan = $this->_plan($field, null, $blockers, $warnings);
        $plan['placements'] = array_map(fn(array $placement) => [
            'layoutId' => $placement['layout']->id,
            'layoutType' => $placement['layout']->type,
            'tab' => $placement['tab']->name,
            'elementUid' => $placement['element']->uid,
        ], $placements);
        $plan['actions'] = $actions;

        return $plan;
    }

    private function _convertTriggers(Triggers $field, array $plan): void
    {
        $replacement = new ActionLinks(array_merge($this->_baseFieldConfig($field), [
            'actions' => $plan['actions'],
            'searchable' => false,
            'translationMethod' => ActionLinks::TRANSLATION_METHOD_NONE,
            'translationKeyFormat' => null,
        ]));

        if (!Craft::$app->getFields()->saveField($replacement)) {
            throw new RuntimeException(implode(' ', $replacement->getErrorSummary(true)));
        }

        $this->_convertTriggerLayouts($field);
    }

    private function _convertTriggerLayouts(Triggers $field): void
    {
        $projectConfig = Craft::$app->getProjectConfig();
        $owners = [];

        foreach ($this->_projectConfigLayouts($projectConfig->get()) as $path => $layout) {
            $changed = false;

            foreach ($layout['tabs'] ?? [] as $tabIndex => $tab) {
                foreach ($tab['elements'] ?? [] as $index => $element) {
                    if (($element['type'] ?? null) !== CustomField::class || ($element['fieldUid'] ?? null) !== $field->uid) {
                        continue;
                    }

                    // Preserve placement identity, conditions and appearance while enabling link refreshes.
                    $element['type'] = ActionLinksField::class;
                    $element['required'] = false;
                    $layout['tabs'][$tabIndex]['elements'][$index] = $element;
                    $changed = true;
                }
            }

            if (!$changed) {
                continue;
            }

            $parts = explode('.', $path);
            $ownerPath = implode('.', array_slice($parts, 0, $parts[1] === 'fieldLayouts' ? 1 : 2));
            $owners[$ownerPath] ??= $projectConfig->get($ownerPath);
            ArrayHelper::setValue($owners[$ownerPath], substr($path, strlen($ownerPath) + 1), $layout);
        }

        foreach ($owners as $path => $config) {
            // Replay the owner handler so its database layout matches project config within the conversion transaction.
            $projectConfig->set($path, $config, 'Convert Button Box Triggers placements to Action Links', force: true);
        }
    }

    private function _projectConfigLayouts(array $config, string $prefix = ''): array
    {
        $layouts = [];

        foreach ($config as $key => $value) {
            if (!is_array($value)) {
                continue;
            }

            $path = $prefix === '' ? (string)$key : $prefix . '.' . $key;

            if ($key === 'fieldLayouts') {
                foreach ($value as $uid => $layout) {
                    if (is_array($layout)) {
                        $layouts[$path . '.' . $uid] = $layout;
                    }
                }
            } else {
                $layouts += $this->_projectConfigLayouts($value, $path);
            }
        }

        return $layouts;
    }

    private function _fieldPlacements(FieldInterface $field): array
    {
        $placements = [];

        foreach (Craft::$app->getFields()->getAllLayouts() as $layout) {
            foreach ($layout->getTabs() as $tab) {
                foreach ($tab->getElements() as $element) {
                    if ($this->_isPlacementFor($element, $field)) {
                        $placements[] = compact('layout', 'tab', 'element');
                    }
                }
            }
        }

        return $placements;
    }

    private function _starsContentCounts(Stars $field, bool $requiredOnly = false): array
    {
        $counts = [
            'empty' => 0,
            'zero' => 0,
            'valid' => 0,
            'outOfRange' => 0,
        ];

        if (!$field->uid) {
            return $counts;
        }

        // Craft 5 content belongs to field-layout instances, not the reusable field
        // UID. Limit empty-value counts to elements that actually use this field.
        $layoutKeys = [];

        foreach ($this->_fieldPlacements($field) as $placement) {
            if (!$requiredOnly || $placement['element']->required) {
                $layoutKeys[$placement['layout']->id][] = $placement['element']->uid;
            }
        }

        if (!$layoutKeys) {
            return $counts;
        }

        $query = (new Query())
            ->select(['sites.content', 'layoutId' => 'elements.fieldLayoutId'])
            ->from(['sites' => Table::ELEMENTS_SITES])
            ->innerJoin(['elements' => Table::ELEMENTS], '[[elements.id]] = [[sites.elementId]]')
            ->where(['elements.fieldLayoutId' => array_keys($layoutKeys)]);

        foreach ($query->batch(1000) as $rows) {
            foreach ($rows as $row) {
                $content = $row['content'];
                $content = is_array($content) ? $content : Json::decodeIfJson($content);

                $content = is_array($content) ? $content : [];

                foreach ($layoutKeys[$row['layoutId']] as $key) {
                    $value = $content[$key] ?? null;

                    if ($value === null || $value === '') {
                        $counts['empty']++;
                    } elseif (!is_numeric($value) || !is_finite((float)$value) || floor((float)$value) !== (float)$value) {
                        $counts['outOfRange']++;
                    } elseif ((float)$value === 0.0) {
                        $counts['zero']++;
                    } elseif ($value >= 1 && $value <= $field->totalStars) {
                        $counts['valid']++;
                    } else {
                        $counts['outOfRange']++;
                    }
                }
            }
        }

        return $counts;
    }

    private function _isPlacementFor(mixed $element, FieldInterface $field): bool
    {
        if (!$element instanceof CustomField) {
            return false;
        }

        try {
            return $element->getField()->uid === $field->uid;
        } catch (Throwable) {
            return false;
        }
    }

    private function _baseFieldConfig(FieldInterface $field): array
    {
        return [
            'id' => $field->id,
            'uid' => $field->uid,
            'name' => $field->name,
            'handle' => $field->handle,
            'context' => $field->context,
            'columnSuffix' => $field->columnSuffix,
            'instructions' => $field->instructions,
            'searchable' => $field->searchable,
            'translationMethod' => $field->translationMethod,
            'translationKeyFormat' => $field->translationKeyFormat,
        ];
    }

    private function _visualSettings(Buttons|Colours|TextSize|Width $field): array
    {
        $options = [];

        foreach ($field->options as $option) {
            $converted = [
                'label' => $option['label'] ?? '',
                'value' => $option['value'] ?? '',
                'default' => (bool)($option['default'] ?? false),
            ];

            if ($field instanceof Buttons) {
                $converted['imageUrl'] = $option['imageUrl'] ?? '';
                $converted['imageAlt'] = $option['label'] ?? '';
            } elseif ($field instanceof Colours) {
                $converted['color'] = $option['cssColour'] ?? '';
            } elseif ($field instanceof TextSize && is_numeric($option['pxVal'] ?? null)) {
                $converted['description'] = $option['pxVal'] . 'px';
                $converted['surface'] = ['mode' => 'text', 'size' => (float)$option['pxVal']];
            } elseif ($field instanceof Width && ($width = $this->_numericWidth($option['value'] ?? null)) !== null) {
                $converted['surface'] = ['mode' => 'width', 'value' => $width];
            }

            $options[] = $converted;
        }

        $presentation = match (true) {
            $field instanceof Colours => 'swatch',
            $field instanceof TextSize => 'list',
            $field instanceof Width => 'generated',
            $field instanceof Buttons && $field->displayAsGraphic => 'tile',
            default => 'segmented',
        };

        return [$presentation, $options];
    }

    private function _buttonsAppearance(Buttons $field): array
    {
        // Legacy image-only buttons name themselves with a title, which tooltips replace.
        if ($this->_imageOptions($field) && !$this->_imageOptions($field, true)) {
            return ['showLabels' => false, 'labelTooltips' => true];
        }

        return [];
    }

    private function _buttonsWarnings(Buttons $field): array
    {
        $images = $this->_imageOptions($field);
        $labelled = $this->_imageOptions($field, true);
        $warnings = [];

        if ($labelled && count($labelled) < count($images)) {
            $warnings[] = 'Some image buttons hide their labels, but Visual Choice shows or hides labels for the whole field. All labels will be shown.';
        }

        if (array_filter($labelled, fn(array $option) => !in_array($option['imageAlign'] ?? '', ['', 'left'], true))) {
            $warnings[] = 'Image alignment is not copied. Images will appear in their default position.';
        }

        if ($field->displayFullwidth) {
            $warnings[] = 'Full-width display is not copied. Review the field’s width after converting.';
        }

        return $warnings;
    }

    private function _imageOptions(Buttons $field, bool $labelled = false): array
    {
        return array_values(array_filter($field->options, fn(array $option) => !empty($option['imageUrl']) && (!$labelled || !empty($option['showLabel']))));
    }

    private function _numericWidth(mixed $value): ?float
    {
        if (!is_string($value) && !is_numeric($value)) {
            return null;
        }

        $value = trim((string)$value);

        if (!preg_match('/^(\d+(?:\.\d+)?)%?$/', $value, $matches)) {
            return null;
        }

        return max(5, min(100, (float)$matches[1]));
    }
}
