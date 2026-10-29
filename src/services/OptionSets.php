<?php
namespace verbb\buttonbox\services;

use verbb\buttonbox\ButtonBox;
use verbb\buttonbox\fields\BaseVisualOptionsField;
use verbb\buttonbox\models\OptionSet;

use Craft;
use craft\base\Component;
use craft\helpers\ProjectConfig;
use craft\helpers\StringHelper;

use yii\base\InvalidArgumentException;

class OptionSets extends Component
{
    // Constants
    // =========================================================================

    public const CONFIG_PATH = 'plugins.buttonbox.optionSets';


    // Public Methods
    // =========================================================================

    public function getAll(): array
    {
        $sets = [];

        foreach (Craft::$app->getProjectConfig()->get(self::CONFIG_PATH) ?? [] as $uid => $config) {
            $sets[$uid] = new OptionSet(array_merge(ProjectConfig::unpackAssociativeArrays($config), ['uid' => $uid]));
        }

        uasort($sets, fn(OptionSet $a, OptionSet $b) => strnatcasecmp($a->name, $b->name));

        return $sets;
    }

    public function getByUid(string $uid): ?OptionSet
    {
        return $this->getAll()[$uid] ?? null;
    }

    public function save(OptionSet $set): bool
    {
        if (!$set->validate()) {
            return false;
        }

        foreach ($this->getAll() as $existing) {
            if ($existing->uid !== $set->uid && strcasecmp($existing->handle, $set->handle) === 0) {
                $set->addError('handle', Craft::t('buttonbox', 'This handle is already used by another option set.'));
            }
        }

        foreach (array_keys(ButtonBox::$plugin->getSettings()->optionSets) as $handle) {
            if (strcasecmp((string)$handle, $set->handle) === 0) {
                $set->addError('handle', Craft::t('buttonbox', 'This handle is already used by an option set defined in config/buttonbox.php.'));
            }
        }

        if ($set->hasErrors()) {
            return false;
        }

        $set->uid ??= StringHelper::UUID();

        // References use the UID, so editing names and handles never changes field identity.
        Craft::$app->getProjectConfig()->set(self::CONFIG_PATH . '.' . $set->uid, ProjectConfig::packAssociativeArrays($set->toConfig()), 'Save Button Box option set “' . $set->name . '”');

        return true;
    }

    public function getUsages(string $uid): array
    {
        return array_values(array_filter(Craft::$app->getFields()->getAllFields(false), fn($field) => $field instanceof BaseVisualOptionsField && $field->optionSource === 'projectSet' && $field->projectSet === $uid));
    }

    public function delete(string $uid): void
    {
        if (!$this->getByUid($uid)) {
            throw new InvalidArgumentException('Unknown option set.');
        }

        if ($this->getUsages($uid)) {
            throw new InvalidArgumentException(Craft::t('buttonbox', 'This option set is used by a field. Choose another set or copy its options into the field before deleting it.'));
        }

        Craft::$app->getProjectConfig()->remove(self::CONFIG_PATH . '.' . $uid, 'Delete Button Box option set');
    }
}
