<?php
namespace verbb\buttonbox\web\assets\cp;

use craft\web\AssetBundle;

class SettingsAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    public function init(): void
    {
        $this->sourcePath = '@verbb/buttonbox/web/assets/cp/dist';

        $this->depends = [
            ButtonBoxAsset::class,
        ];

        $this->css = [
            'settings.css',
        ];

        $this->js = [
            'settings-loader.js',
        ];

        parent::init();
    }
}
