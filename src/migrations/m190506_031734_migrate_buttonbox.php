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

class m190506_031734_migrate_buttonbox extends Migration
{
    // Public Methods
    // =========================================================================

    public function safeUp()
    {
        $this->update('{{%fields}}', ['type' => Colours::class], ['type' => 'ButtonBox_Colours']);
        $this->update('{{%fields}}', ['type' => Buttons::class], ['type' => 'ButtonBox_Buttons']);
        $this->update('{{%fields}}', ['type' => Width::class], ['type' => 'ButtonBox_Width']);
    }

    public function safeDown()
    {
        echo "m190506_031734_migrate_buttonbox cannot be reverted.\n";
        return false;
    }
}