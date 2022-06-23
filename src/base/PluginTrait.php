<?php
namespace verbb\buttonbox\base;

use Craft;

use yii\log\Logger;

use verbb\base\BaseHelper;

trait PluginTrait
{
    // Static Properties
    // =========================================================================

    public static $plugin;


    // Public Methods
    // =========================================================================

    public static function log($message, $attributes = []): void
    {
        if ($attributes) {
            $message = Craft::t('buttonbox', $message, $attributes);
        }

        Craft::getLogger()->log($message, Logger::LEVEL_INFO, 'buttonbox');
    }

    public static function error($message, $attributes = []): void
    {
        if ($attributes) {
            $message = Craft::t('buttonbox', $message, $attributes);
        }

        Craft::getLogger()->log($message, Logger::LEVEL_ERROR, 'buttonbox');
    }


    // Private Methods
    // =========================================================================

    private function _setPluginComponents(): void
    {
        BaseHelper::registerModule();
    }

    private function _setLogging(): void
    {
        BaseHelper::setFileLogging('buttonbox');
    }

}