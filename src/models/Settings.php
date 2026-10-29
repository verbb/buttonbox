<?php
namespace verbb\buttonbox\models;

use Craft;
use craft\base\Model;
use craft\helpers\App;
use craft\helpers\FileHelper;

class Settings extends Model
{
    // Properties
    // =========================================================================

    /**
     * Named, project-owned option sets keyed by handle.
     *
     * Each set can contain a `label` and an `options` array using the same shape as
     * Visual Choice field options.
     */
    public array $optionSets = [];
    public string $iconsPath = '@webroot/buttonbox/icons/';
    public string $imagesPath = '@webroot/buttonbox/images/';


    // Public Methods
    // =========================================================================

    public function getIconsPath(): string
    {
        return $this->_resolvePath($this->iconsPath);
    }

    public function getImagesPath(): string
    {
        return $this->_resolvePath($this->imagesPath);
    }

    public function validateOptionSets(): void
    {
        foreach ($this->optionSets as $handle => $set) {
            if (!is_string($handle) || $handle === '' || !is_array($set)) {
                $this->addError('optionSets', 'Option sets must be arrays keyed by a non-empty handle.');

                return;
            }

            if (!isset($set['options']) || !is_array($set['options'])) {
                $this->addError('optionSets', "The option set “{$handle}” must define an options array.");

                return;
            }
        }
    }


    // Protected Methods
    // =========================================================================

    protected function defineRules(): array
    {
        $rules = parent::defineRules();
        $rules[] = [['optionSets'], 'validateOptionSets'];
        $rules[] = [['iconsPath', 'imagesPath'], 'string', 'max' => 2048];

        return $rules;
    }


    // Private Methods
    // =========================================================================

    private function _resolvePath(string $path): string
    {
        $path = trim((string)App::parseEnv($path));
        $resolved = Craft::getAlias($path, false);

        if ($path === '' || !is_string($resolved) || str_contains($resolved, '://')) {
            return '';
        }

        return FileHelper::normalizePath($resolved);
    }
}
