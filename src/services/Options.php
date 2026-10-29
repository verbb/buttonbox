<?php
namespace verbb\buttonbox\services;

use verbb\buttonbox\ButtonBox;

use Craft;
use craft\base\Component;
use craft\helpers\App;
use craft\validators\ColorValidator;

class Options extends Component
{
    // Constants
    // =========================================================================

    public const SURFACE_MODES = [
        'solid',
        'split',
        'foregroundBackground',
        'gradient',
        'width',
        'ratio',
        'text',
        'shape',
    ];


    // Public Methods
    // =========================================================================

    public function getPresets(bool $multi = false): array
    {
        return ButtonBox::$plugin->getPresets()->getCatalog('visual', $multi);
    }

    public function getBuiltInPresets(): array
    {
        return [
            'alignment' => [
                'label' => Craft::t('buttonbox', 'Alignment'),
                'presentation' => 'segmented',
                'options' => [
                    ['label' => Craft::t('buttonbox', 'Left'), 'value' => 'left', 'icon' => 'align-left'],
                    ['label' => Craft::t('buttonbox', 'Center'), 'value' => 'center', 'icon' => 'align-center'],
                    ['label' => Craft::t('buttonbox', 'Right'), 'value' => 'right', 'icon' => 'align-right'],
                ],
            ],
            'spacing' => [
                'label' => Craft::t('buttonbox', 'Spacing'),
                'presentation' => 'generated',
                'options' => [
                    ['label' => Craft::t('buttonbox', 'None'), 'value' => 'none', 'icon' => 'buttonbox:spacing-none'],
                    ['label' => Craft::t('buttonbox', 'Small'), 'value' => 'small', 'icon' => 'buttonbox:spacing-small'],
                    ['label' => Craft::t('buttonbox', 'Medium'), 'value' => 'medium', 'icon' => 'buttonbox:spacing-medium'],
                    ['label' => Craft::t('buttonbox', 'Large'), 'value' => 'large', 'icon' => 'buttonbox:spacing-large'],
                ],
            ],
            'colourScheme' => [
                'label' => Craft::t('buttonbox', 'Colour scheme'),
                'presentation' => 'segmented',
                'options' => [
                    ['label' => Craft::t('buttonbox', 'Light'), 'value' => 'light', 'icon' => 'sun'],
                    ['label' => Craft::t('buttonbox', 'Dark'), 'value' => 'dark', 'icon' => 'moon'],
                    ['label' => Craft::t('buttonbox', 'Automatic'), 'value' => 'auto', 'icon' => 'circle-half-stroke'],
                ],
            ],
            'aspectRatio' => [
                'label' => Craft::t('buttonbox', 'Aspect ratio'),
                'presentation' => 'generated',
                'options' => [
                    ['label' => 'Square', 'value' => '1:1', 'surface' => ['mode' => 'ratio', 'value' => '1:1']],
                    ['label' => 'Landscape', 'value' => '4:3', 'surface' => ['mode' => 'ratio', 'value' => '4:3']],
                    ['label' => 'Widescreen', 'value' => '16:9', 'surface' => ['mode' => 'ratio', 'value' => '16:9']],
                    ['label' => 'Portrait', 'value' => '3:4', 'surface' => ['mode' => 'ratio', 'value' => '3:4']],
                ],
            ],
            'typography' => [
                'label' => Craft::t('buttonbox', 'Typography scale'),
                'presentation' => 'list',
                'options' => [
                    ['label' => Craft::t('buttonbox', 'Small'), 'value' => 'small', 'description' => '14px', 'surface' => ['mode' => 'text', 'size' => 14]],
                    ['label' => Craft::t('buttonbox', 'Body'), 'value' => 'body', 'description' => '16px', 'surface' => ['mode' => 'text', 'size' => 16]],
                    ['label' => Craft::t('buttonbox', 'Lead'), 'value' => 'lead', 'description' => '20px', 'surface' => ['mode' => 'text', 'size' => 20]],
                    ['label' => Craft::t('buttonbox', 'Heading'), 'value' => 'heading', 'description' => '28px', 'surface' => ['mode' => 'text', 'size' => 28]],
                ],
            ],
            'imageFit' => [
                'label' => Craft::t('buttonbox', 'Image fit'),
                'presentation' => 'chip',
                'options' => [
                    ['label' => Craft::t('buttonbox', 'Cover'), 'value' => 'cover'],
                    ['label' => Craft::t('buttonbox', 'Contain'), 'value' => 'contain'],
                    ['label' => Craft::t('buttonbox', 'Fill'), 'value' => 'fill'],
                    ['label' => Craft::t('buttonbox', 'Scale down'), 'value' => 'scale-down'],
                ],
            ],
            'shape' => [
                'label' => Craft::t('buttonbox', 'Shape'),
                'presentation' => 'generated',
                'options' => [
                    ['label' => Craft::t('buttonbox', 'Square'), 'value' => 'square', 'surface' => ['mode' => 'shape', 'radius' => 0, 'aspectRatio' => '1:1']],
                    ['label' => Craft::t('buttonbox', 'Rounded'), 'value' => 'rounded', 'surface' => ['mode' => 'shape', 'radius' => 8]],
                    ['label' => Craft::t('buttonbox', 'Pill'), 'value' => 'pill', 'surface' => ['mode' => 'shape', 'radius' => 999]],
                    ['label' => Craft::t('buttonbox', 'Circle'), 'value' => 'circle', 'surface' => ['mode' => 'shape', 'radius' => 999, 'aspectRatio' => '1:1']],
                ],
            ],
            'intent' => [
                'label' => Craft::t('buttonbox', 'Intent and status'),
                'presentation' => 'swatch',
                'options' => [
                    ['label' => Craft::t('buttonbox', 'Neutral'), 'value' => 'neutral', 'color' => '#64748b'],
                    ['label' => Craft::t('buttonbox', 'Info'), 'value' => 'info', 'color' => '#2563eb'],
                    ['label' => Craft::t('buttonbox', 'Success'), 'value' => 'success', 'color' => '#16a34a'],
                    ['label' => Craft::t('buttonbox', 'Warning'), 'value' => 'warning', 'color' => '#d97706'],
                    ['label' => Craft::t('buttonbox', 'Danger'), 'value' => 'danger', 'color' => '#dc2626'],
                ],
            ],
            'surface' => [
                'label' => Craft::t('buttonbox', 'Compound surfaces'),
                'presentation' => 'swatch',
                'options' => [
                    ['label' => Craft::t('buttonbox', 'Solid ocean'), 'value' => 'solid-ocean', 'surface' => ['mode' => 'solid', 'value' => '#2563eb']],
                    ['label' => Craft::t('buttonbox', 'Split brand'), 'value' => 'split-brand', 'surface' => ['mode' => 'split', 'from' => '#2563eb', 'to' => '#db2777', 'angle' => 90]],
                    ['label' => Craft::t('buttonbox', 'Ink on paper'), 'value' => 'ink-paper', 'surface' => ['mode' => 'foregroundBackground', 'from' => '#292524', 'to' => '#f5f5f4']],
                    ['label' => Craft::t('buttonbox', 'Ocean gradient'), 'value' => 'ocean-gradient', 'surface' => ['mode' => 'gradient', 'from' => '#0ea5e9', 'to' => '#2563eb', 'angle' => 135]],
                ],
            ],
        ];
    }

    public function getPreset(string $handle): ?array
    {
        return $this->getPresets()[$handle] ?? null;
    }

    public function getProjectSets(): array
    {
        $sets = ButtonBox::$plugin->getSettings()->optionSets;

        foreach (ButtonBox::$plugin->getOptionSets()->getAll() as $uid => $set) {
            $sets[$uid] = array_merge($set->toConfig(), ['label' => $set->name]);
        }

        return $sets;
    }

    public function getProjectSet(string $handle): ?array
    {
        $set = $this->getProjectSets()[$handle] ?? null;

        return is_array($set) ? $set : null;
    }

    public function normalizeOptions(array $options): array
    {
        $normalized = [];

        foreach ($options as $option) {
            if (!is_array($option) || array_key_exists('optgroup', $option)) {
                continue;
            }

            $surface = is_array($option['surface'] ?? null) ? $option['surface'] : [];

            if (!$surface && !empty($option['surfaceMode'])) {
                $surface = array_filter([
                    'mode' => (string)$option['surfaceMode'],
                    'value' => $option['surfaceValue'] ?? null,
                    'from' => $option['surfaceValue'] ?? null,
                    'to' => $option['surfaceSecondary'] ?? null,
                    'angle' => $option['surfaceAngle'] ?? null,
                    'radius' => $option['surfaceValue'] ?? null,
                    'size' => $option['surfaceValue'] ?? null,
                    'aspectRatio' => $option['surfaceSecondary'] ?? null,
                ], fn(mixed $value) => $value !== null && $value !== '');
            }

            // The editor retains inactive visual settings, but only the selected visual is rendered.
            if (array_key_exists('visualType', $option)) {
                $visual = $option['visualType'];
                $primary = $option['surfaceValue'] ?? '';
                $secondary = $option['surfaceSecondary'] ?? '';
                $surface = match ($visual) {
                    '', 'image', 'icon' => [],
                    'solid', 'width', 'ratio' => ['mode' => $visual, 'value' => $primary],
                    'split', 'gradient' => ['mode' => $visual, 'from' => $primary, 'to' => $secondary, 'angle' => $option['surfaceAngle'] ?? 135],
                    'foregroundBackground' => ['mode' => $visual, 'from' => $primary, 'to' => $secondary],
                    'text' => ['mode' => $visual, 'size' => $primary],
                    'shape' => ['mode' => $visual, 'radius' => $primary, 'aspectRatio' => $secondary],
                    default => ['mode' => $visual],
                };
                $option['icon'] = $visual === 'icon' ? ($option['icon'] ?? null) : null;
                $option['imageUrl'] = $visual === 'image' ? ($option['imageUrl'] ?? '') : '';
                $option['color'] = null;
            }

            $normalized[] = [
                'label' => (string)($option['label'] ?? ''),
                'value' => (string)($option['value'] ?? ''),
                'description' => (string)($option['description'] ?? ''),
                'icon' => $option['icon'] ?? null,
                'color' => $option['color'] ?? null,
                'imageUrl' => $this->resolveImageUrl((string)($option['imageUrl'] ?? '')),
                'imageAlt' => (string)($option['imageAlt'] ?? ''),
                'surface' => $surface,
                'category' => (string)($option['category'] ?? ''),
                'disabled' => (bool)($option['disabled'] ?? false),
                'explanation' => (string)($option['explanation'] ?? ''),
                'default' => (bool)($option['default'] ?? false),
            ];
        }

        return $normalized;
    }

    public function getSurfaceStyle(array $option): string
    {
        $surface = $option['surface'] ?? [];
        $mode = $surface['mode'] ?? null;
        $styles = [];

        if (!$mode && !empty($option['color'])) {
            $color = $this->_validColor($option['color']);

            if ($color) {
                $styles[] = "background-color:{$color}";
            }
        } elseif ($mode === 'gradient') {
            $from = $this->_validColor($surface['from'] ?? null);
            $to = $this->_validColor($surface['to'] ?? null);
            $angle = max(0, min(360, (int)($surface['angle'] ?? 135)));

            if ($from && $to) {
                $styles[] = "background:linear-gradient({$angle}deg,{$from},{$to})";
            }
        } elseif ($mode === 'split') {
            $from = $this->_validColor($surface['from'] ?? null);
            $to = $this->_validColor($surface['to'] ?? null);
            $angle = max(0, min(360, (int)($surface['angle'] ?? 90)));

            if ($from && $to) {
                $styles[] = "background:linear-gradient({$angle}deg,{$from} 0 50%,{$to} 50% 100%)";
            }
        } elseif ($mode === 'foregroundBackground') {
            $foreground = $this->_validColor($surface['from'] ?? null);
            $background = $this->_validColor($surface['to'] ?? null);

            if ($foreground && $background) {
                $styles[] = "background-color:{$foreground}";
                $styles[] = "box-shadow:inset 0 0 0 7px {$background}";
            }
        } elseif ($mode === 'solid') {
            $color = $this->_validColor($surface['value'] ?? null);

            if ($color) {
                $styles[] = "background-color:{$color}";
            }
        } elseif ($mode === 'width') {
            $width = max(5, min(100, (float)($surface['value'] ?? 50)));
            $styles[] = "--buttonbox-visual-width:{$width}%";
        } elseif ($mode === 'ratio') {
            $ratio = (string)($surface['value'] ?? '1:1');

            if (preg_match('/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?)$/', $ratio, $matches)) {
                $width = (float)$matches[1];
                $height = (float)$matches[2];

                if ($width > 0 && $height > 0) {
                    $scale = max($width, $height);
                    $styles[] = '--buttonbox-visual-ratio-width:' . ($width / $scale * 100) . '%';
                    $styles[] = '--buttonbox-visual-ratio-height:' . ($height / $scale * 100) . '%';
                }
            }
        } elseif ($mode === 'text') {
            $size = max(10, min(64, (float)($surface['size'] ?? 16)));
            $styles[] = "--buttonbox-visual-font-size:{$size}px";
        } elseif ($mode === 'shape') {
            $radius = max(0, min(999, (float)($surface['radius'] ?? 0)));
            $styles[] = "--buttonbox-visual-radius:{$radius}px";

            if (($surface['aspectRatio'] ?? null) === '1:1') {
                $styles[] = '--buttonbox-visual-shape-height:100%';
            }
        }

        if (!$styles) {
            $color = $this->_validColor($option['color'] ?? null);

            if ($color) {
                $styles[] = "background-color:{$color}";
            }
        }

        return implode(';', $styles);
    }

    public function resolveImageUrl(string $url): string
    {
        if (str_starts_with($url, Gallery::IMAGE_PREFIX)) {
            return ButtonBox::$plugin->getGallery()->resolveImageUrl($url);
        }

        $url = (string)App::parseEnv($url);

        if (str_starts_with($url, '@')) {
            $resolved = Craft::getAlias($url, false);

            if (is_string($resolved)) {
                return $resolved;
            }
        }

        return $url;
    }


    // Private Methods
    // =========================================================================

    private function _validColor(mixed $color): ?string
    {
        if (!is_string($color) || $color === '') {
            return null;
        }

        $color = ColorValidator::normalizeColor($color);
        $validator = new ColorValidator();

        return $validator->validate($color) ? $color : null;
    }
}
