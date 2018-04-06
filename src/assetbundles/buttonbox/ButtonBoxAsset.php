<?php
/**
 * ButtonBox plugin for Craft CMS 3.x
 *
 * ButtonBox
 *
 * @link      http://supercooldesig.co.uk
 * @copyright Copyright (c) 2017 Supercool
 */

namespace supercool\buttonbox\assetbundles\buttonbox;

use Craft;
use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

/**
 *
 * AssetBundle represents a collection of asset files, such as CSS, JS, images.
 *
 * @author    Supercool
 * @package   ButtonBox
 * @since     1.0.0
 */

class ButtonBoxAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    /**
     * Initializes the bundle.
     */
    public function init()
    {
        // define the path that your publishable resources live
        $this->sourcePath = "@supercool/buttonbox/assetbundles/buttonbox/dist";

        // define the dependencies
        $this->depends = [
            CpAsset::class,
        ];

        // define the relative path to CSS/JS files that should be registered with the page
        // when this asset bundle is registered
        $this->js = [
            'js/buttonbox.js',
            'js/settings-triggers.js'
        ];

        $this->css = [
            'css/buttonbox.css',
        ];

        parent::init();
    }
}
