<?php
namespace verbb\buttonbox\web\assets\cp;

use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

use verbb\base\web\assets\cp\CpAsset as VerbbCpAsset;

class OptionSetsAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    public function init(): void
    {
        $this->sourcePath = '@verbb/buttonbox/web/assets/cp/dist';

        $this->depends = [
            VerbbCpAsset::class,
            CpAsset::class,
        ];

        $this->css = [
            'buttonbox.css',
        ];

        $this->js = [
            'option-sets.js',
        ];

        $this->jsOptions = [
            'type' => 'module',
        ];

        parent::init();
    }
}
