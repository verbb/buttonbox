<?php
namespace verbb\buttonbox\base;

use verbb\buttonbox\ButtonBox;
use verbb\buttonbox\services\Conversions;
use verbb\buttonbox\services\Gallery;
use verbb\buttonbox\services\Options;
use verbb\buttonbox\services\OptionSets;
use verbb\buttonbox\services\Presets;

use verbb\base\helpers\Plugin;
use verbb\base\LogTrait;

trait PluginTrait
{
    // Static Methods
    // =========================================================================

    public static function config(): array
    {
        Plugin::bootstrapPlugin('buttonbox');

        return [
            'components' => [
                'conversions' => Conversions::class,
                'gallery' => Gallery::class,
                'options' => Options::class,
                'optionSets' => OptionSets::class,
                'presets' => Presets::class,
            ],
        ];
    }


    // Traits
    // =========================================================================

    use LogTrait;


    // Properties
    // =========================================================================

    public static ?ButtonBox $plugin = null;


    // Public Methods
    // =========================================================================

    public function getPresets(): Presets
    {
        return $this->get('presets');
    }

    public function getOptionSets(): OptionSets
    {
        return $this->get('optionSets');
    }

    public function getGallery(): Gallery
    {
        return $this->get('gallery');
    }

    public function getOptions(): Options
    {
        return $this->get('options');
    }

    public function getConversions(): Conversions
    {
        return $this->get('conversions');
    }
}
