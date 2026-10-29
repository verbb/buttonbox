<?php
namespace verbb\buttonbox\web\assets\cp;

use craft\web\AssetBundle;

class TriggersSettingsAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    public function init(): void
    {
        $this->sourcePath = '@verbb/buttonbox/web/assets/cp/dist';

        $this->depends = [
            LegacyAsset::class,
        ];

        $this->js = [
            'settings-triggers.js',
        ];

        parent::init();
    }
}
