<?php
namespace verbb\buttonbox\migrations;

use verbb\buttonbox\fields\Buttons;
use verbb\buttonbox\fields\Colours;
use verbb\buttonbox\fields\Width;

use craft\db\Migration;

class m190506_031734_migrate_buttonbox extends Migration
{
    // Public Methods
    // =========================================================================

    public function safeUp(): bool
    {
        $this->update('{{%fields}}', ['type' => Colours::class], ['type' => 'ButtonBox_Colours']);
        $this->update('{{%fields}}', ['type' => Buttons::class], ['type' => 'ButtonBox_Buttons']);
        $this->update('{{%fields}}', ['type' => Width::class], ['type' => 'ButtonBox_Width']);
    
        return true;
    }

    public function safeDown(): bool
    {
        echo "m190506_031734_migrate_buttonbox cannot be reverted.\n";
        return false;
    }
}