<?php
namespace verbb\buttonbox\migrations;

use verbb\buttonbox\fields\Buttons;
use verbb\buttonbox\fields\Colours;
use verbb\buttonbox\fields\Stars;
use verbb\buttonbox\fields\TextSize;
use verbb\buttonbox\fields\Triggers;
use verbb\buttonbox\fields\Width;

use Craft;
use craft\db\Migration;

class m220604_000000_verbb_migration extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->update('{{%fields}}', ['type' => Buttons::class], ['type' => 'supercool\buttonbox\fields\Buttons']);
        $this->update('{{%fields}}', ['type' => Colours::class], ['type' => 'supercool\buttonbox\fields\Colours']);
        $this->update('{{%fields}}', ['type' => Stars::class], ['type' => 'supercool\buttonbox\fields\Stars']);
        $this->update('{{%fields}}', ['type' => TextSize::class], ['type' => 'supercool\buttonbox\fields\TextSize']);
        $this->update('{{%fields}}', ['type' => Triggers::class], ['type' => 'supercool\buttonbox\fields\Triggers']);
        $this->update('{{%fields}}', ['type' => Width::class], ['type' => 'supercool\buttonbox\fields\Width']);

        // Don't make the same config changes twice
        $projectConfig = Craft::$app->getProjectConfig();
        $schemaVersion = $projectConfig->get('plugins.buttonbox.schemaVersion', true);

        if (version_compare($schemaVersion, '2.0.0', '>=')) {
            return true;
        }

        $fields = $projectConfig->get('fields') ?? [];

        $fieldMap = [
            'supercool\\buttonbox\\fields\\Buttons' => Buttons::class,
            'supercool\\buttonbox\\fields\\Colours' => Colours::class,
            'supercool\\buttonbox\\fields\\Stars' => Stars::class,
            'supercool\\buttonbox\\fields\\TextSize' => TextSize::class,
            'supercool\\buttonbox\\fields\\Triggers' => Triggers::class,
            'supercool\\buttonbox\\fields\\Width' => Width::class,
        ];

        foreach ($fields as $fieldUid => $field) {
            $type = $field['type'] ?? null;

            if (isset($fieldMap[$type])) {
                $field['type'] = $fieldMap[$type];

                $projectConfig->set('fields.' . $fieldUid, $field);
            }
        }

        return true;
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "m220604_000000_verbb_migration cannot be reverted.\n";
        return false;
    }
}