<?php
namespace verbb\buttonbox\assetbundles;

use Craft;
use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

use verbb\base\assetbundles\CpAsset as VerbbCpAsset;

class ButtonBoxAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    public function init()
    {
        $this->sourcePath = "@verbb/buttonbox/resources/dist";

        $this->depends = [
            VerbbCpAsset::class,
            CpAsset::class,
        ];

        $this->css = [
            'css/buttonbox.css',
        ];

        $this->js = [
            'js/buttonbox.js',
            'js/settings-triggers.js',
        ];

        parent::init();
    }
}

