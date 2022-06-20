<?php
namespace verbb\buttonbox\base;

use verbb\buttonbox\ButtonBox;

use Craft;

use yii\log\Logger;

use verbb\base\BaseHelper;

trait PluginTrait
{
    // Static Properties
    // =========================================================================

    public static ButtonBox $plugin;


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

    private function _setPluginComponents()
    {
        BaseHelper::registerModule();
    }

    private function _setLogging()
    {
        BaseHelper::setFileLogging('buttonbox');
    }

}