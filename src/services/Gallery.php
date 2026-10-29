<?php
namespace verbb\buttonbox\services;

use verbb\buttonbox\ButtonBox;

use Craft;
use craft\base\Component;
use craft\helpers\Cp;
use craft\helpers\FileHelper;

class Gallery extends Component
{
    // Constants
    // =========================================================================

    public const ICON_PREFIX = '@buttonboxIcons/';
    public const IMAGE_PREFIX = '@buttonboxImages/';

    private const PRESET_ICONS = [
        'spacing-none' => 'No spacing',
        'spacing-small' => 'Small spacing',
        'spacing-medium' => 'Medium spacing',
        'spacing-large' => 'Large spacing',
    ];

    private const IMAGE_EXTENSIONS = ['png', 'jpg', 'jpeg', 'webp', 'gif', 'avif'];


    // Public Methods
    // =========================================================================

    public function getItems(string $type): array
    {
        $root = $this->_root($type);

        if ($root === '' || !is_dir($root) || !is_readable($root)) {
            return [];
        }

        $items = [];
        $folders = array_merge([$root], FileHelper::findDirectories($root, ['recursive' => false]));

        foreach ($folders as $folder) {
            if (!is_readable($folder)) {
                continue;
            }

            foreach (FileHelper::findFiles($folder, ['recursive' => false]) as $file) {
                $relative = str_replace(DIRECTORY_SEPARATOR, '/', substr($file, strlen($root) + 1));
                $value = ($type === 'icon' ? self::ICON_PREFIX : self::IMAGE_PREFIX) . $relative;

                if ($this->resolvePath($type, $value) === null) {
                    continue;
                }

                $preview = $type === 'icon' ? $this->resolveIconSvg($value) : $this->resolveImageUrl($value);

                if ($preview) {
                    $items[] = ['value' => $value, 'label' => $relative, 'preview' => $preview];
                }
            }
        }

        usort($items, static fn(array $a, array $b): int => strnatcasecmp($a['label'], $b['label']));

        return $items;
    }

    public function resolvePath(string $type, string $value): ?string
    {
        $prefix = $type === 'icon' ? self::ICON_PREFIX : self::IMAGE_PREFIX;

        if (!str_starts_with($value, $prefix)) {
            return null;
        }

        $relative = substr($value, strlen($prefix));

        // Catalogs support files in the root or a single subfolder, never arbitrary paths.
        if (!preg_match('/^[A-Za-z0-9_ .-]+(?:\/[A-Za-z0-9_ .-]+)?$/D', $relative) || str_contains($relative, '..')) {
            return null;
        }

        $configuredRoot = $this->_root($type);
        $root = $configuredRoot !== '' ? realpath($configuredRoot) : false;
        $path = $root ? realpath($root . DIRECTORY_SEPARATOR . $relative) : false;
        $extensions = $type === 'icon' ? ['svg'] : self::IMAGE_EXTENSIONS;

        if (!$root || !$path || !str_starts_with($path, $root . DIRECTORY_SEPARATOR) || !is_file($path) || !is_readable($path) || !in_array(strtolower(pathinfo($path, PATHINFO_EXTENSION)), $extensions, true)) {
            return null;
        }

        return $path;
    }

    public function getPresetIcons(): array
    {
        $items = [];

        foreach (self::PRESET_ICONS as $name => $label) {
            $value = 'buttonbox:' . $name;
            $items[] = ['value' => $value, 'label' => Craft::t('buttonbox', $label), 'preview' => $this->resolveIconSvg($value)];
        }

        return $items;
    }

    public function resolveIconSvg(string $value): ?string
    {
        if (str_starts_with($value, 'buttonbox:')) {
            $name = substr($value, strlen('buttonbox:'));

            return isset(self::PRESET_ICONS[$name]) ? Cp::iconSvg(dirname(__DIR__) . '/icons/' . $name . '.svg') : null;
        }

        if (!str_starts_with($value, self::ICON_PREFIX)) {
            return Cp::iconSvg($value);
        }

        $path = $this->resolvePath('icon', $value);

        return $path ? Cp::iconSvg($path) : null;
    }

    public function resolveImageUrl(string $value): string
    {
        $path = $this->resolvePath('image', $value);

        if (!$path) {
            return '';
        }

        // Publish only the selected raster file, not its containing directory.
        return (string)Craft::$app->getAssetManager()->getPublishedUrl($path, true);
    }


    // Private Methods
    // =========================================================================

    private function _root(string $type): string
    {
        $settings = ButtonBox::$plugin->getSettings();

        return rtrim($type === 'icon' ? $settings->getIconsPath() : $settings->getImagesPath(), DIRECTORY_SEPARATOR);
    }
}
