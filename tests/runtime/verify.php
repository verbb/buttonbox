<?php

require __DIR__ . '/bootstrap.php';
$app = require CRAFT_VENDOR_PATH . '/craftcms/cms/bootstrap/console.php';
$app->init();
$plugin = Craft::$app->getPlugins()->getPlugin('buttonbox');
if (!$plugin instanceof verbb\buttonbox\ButtonBox || !(new ReflectionClass($plugin))->getFileName() || realpath($plugin->getBasePath()) !== '/plugin/src') {
    throw new RuntimeException('The isolated site must have this Button Box checkout installed and enabled.');
}
if (Craft::$app->getDb()->createCommand('SELECT DATABASE()')->queryScalar() !== 'buttonbox_test' || Craft::$app->getConfig()->getDb()->server !== 'database') {
    throw new RuntimeException('Unexpected test database connection.');
}
echo 'Verified isolated Button Box ' . $plugin->version . ', Craft ' . Craft::$app->getVersion() . ', PHP ' . PHP_VERSION . ".\n";
