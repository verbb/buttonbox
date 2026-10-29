<?php

use craft\db\Query;
use craft\db\Table;

class ButtonBoxConversionFixtures
{
    public static function snapshot(): array
    {
        $state = [];
        foreach ([Table::FIELDS, Table::FIELDLAYOUTS, Table::ENTRYTYPES, Table::ELEMENTS_SITES] as $table) {
            $state['database'][$table] = (new Query())->from($table)->orderBy('id asc')->all();
        }
        $config = Craft::$app->getProjectConfig();
        $state['config'] = ['fields' => $config->get('fields'), 'entryTypes' => $config->get('entryTypes')];
        foreach (Craft::$app->getFields()->getAllFields() as $field) $state['fieldTypes'][$field->uid] = $field::class;
        foreach (Craft::$app->getFields()->getAllLayouts() as $layout) $state['layouts'][$layout->uid] = $layout->getConfig();
        return self::canonical($state);
    }

    private static function canonical(array $value): array
    {
        if (!array_is_list($value)) ksort($value);
        foreach ($value as &$item) if (is_array($item)) $item = self::canonical($item);
        return $value;
    }
}
