<?php
namespace verbb\buttonbox\services;

use verbb\buttonbox\ButtonBox;
use verbb\buttonbox\fields\Position;
use verbb\buttonbox\fields\Rating;
use verbb\buttonbox\fields\WidthChoice as Width;
use verbb\buttonbox\models\Preset;

use Craft;
use craft\base\Component;
use craft\helpers\ProjectConfig;
use craft\helpers\StringHelper;

use yii\base\InvalidArgumentException;

class Presets extends Component
{
    // Constants
    // =========================================================================

    public const CONFIG_PATH = 'plugins.buttonbox.presets';


    // Public Methods
    // =========================================================================

    public function getFamilies(): array
    {
        return [
            'visual' => Craft::t('buttonbox', 'Visual Choice / Visual Multi-Choice'),
            'position' => Craft::t('buttonbox', 'Position'),
            'width' => Craft::t('buttonbox', 'Width'),
            'rating' => Craft::t('buttonbox', 'Rating'),
        ];
    }

    public function getBuiltIns(string $family): array
    {
        return match ($family) {
            'visual' => ButtonBox::$plugin->getOptions()->getBuiltInPresets(),
            'position' => Position::getBuiltInPresets(),
            'width' => Width::getBuiltInPresets(),
            'rating' => Rating::getBuiltInPresets(),
            default => [],
        };
    }

    public function getAll(?string $family = null): array
    {
        $presets = [];

        foreach (array_keys($this->getFamilies()) as $type) {
            foreach ($this->getBuiltIns($type) as $key => $definition) {
                $id = 'builtin-' . $type . '-' . $key;
                $name = $definition['label'];
                unset($definition['label']);
                $presets[$id] = new Preset(['id' => $id, 'name' => $name, 'family' => $type, 'settings' => $definition, 'builtIn' => true]);
            }
        }

        foreach (Craft::$app->getProjectConfig()->get(self::CONFIG_PATH) ?? [] as $id => $config) {
            $config = ProjectConfig::unpackAssociativeArrays($config);
            $existing = $presets[$id] ?? null;

            // A removed built-in override must not turn into a custom preset on an upgrade.
            if (!$existing && !StringHelper::isUUID($id)) {
                continue;
            }

            $type = $existing?->family ?? ($config['family'] ?? '');

            if (!isset(Preset::ATTRIBUTES[$type])) {
                continue;
            }

            $presets[$id] = new Preset([
                'id' => $id, 'name' => $config['name'], 'family' => $type,
                'settings' => $config['settings'], 'builtIn' => $existing !== null, 'customized' => $existing !== null,
            ]);
        }

        return $family === null ? $presets : array_filter($presets, fn(Preset $preset) => $preset->family === $family);
    }

    public function getById(string $id): ?Preset
    {
        return $this->getAll()[$id] ?? null;
    }

    public function getCatalog(string $family, bool $multi = false): array
    {
        $catalog = [];

        foreach ($this->getAll($family) as $preset) {
            if ($multi && in_array($preset->settings['presentation'] ?? '', ['dropdown', 'width'], true)) {
                continue;
            }

            $key = $preset->builtIn ? substr($preset->id, strlen('builtin-' . $family . '-')) : $preset->id;

            // Untouched built-ins keep their established copy contract; saved styles include appearance.
            $catalog[$key] = array_merge($preset->settings, ['label' => $preset->name]);
        }

        return $catalog;
    }

    public function save(Preset $preset): bool
    {
        $existing = $preset->id ? $this->getById($preset->id) : null;

        if ($preset->id && (!$existing || $existing->family !== $preset->family)) {
            throw new InvalidArgumentException('Unknown preset or mismatched family.');
        }

        if (!$preset->validate()) {
            return false;
        }

        $preset->id ??= StringHelper::UUID();
        Craft::$app->getProjectConfig()->set(self::CONFIG_PATH . '.' . $preset->id, ProjectConfig::packAssociativeArrays($preset->toConfig()), 'Save Button Box preset “' . $preset->name . '”');

        return true;
    }

    public function remove(string $id): void
    {
        if (!$this->getById($id)) {
            throw new InvalidArgumentException('Unknown preset.');
        }

        // Removing an override exposes its shipped original; fields never reference preset IDs.
        Craft::$app->getProjectConfig()->remove(self::CONFIG_PATH . '.' . $id, 'Remove Button Box preset or restore original');
    }
}
