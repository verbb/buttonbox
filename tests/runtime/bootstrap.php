<?php

require_once __DIR__ . '/ownership.php';
assertButtonBoxTestOwnership();
// Do not read .env, shared-site configuration or inherited Craft connection settings.
foreach (getenv() as $key => $value) {
    if (str_starts_with($key, 'CRAFT_') || in_array($key, ['ENVIRONMENT', 'PRIMARY_SITE_URL', 'DOTENV_FILE'], true)) {
        putenv($key);
        unset($_ENV[$key], $_SERVER[$key]);
    }
}
putenv('CRAFT_SECURITY_KEY=buttonbox-isolated-test-key-not-for-production');
define('CRAFT_ENVIRONMENT', 'testing');
define('CRAFT_BASE_PATH', '/app');
define('CRAFT_VENDOR_PATH', '/app/vendor');
define('CRAFT_CONFIG_PATH', '/app/config');
define('CRAFT_STORAGE_PATH', '/app/storage');
define('CRAFT_WEB_ROOT', '/app/web');
error_reporting(E_ALL & ~E_DEPRECATED & ~E_USER_DEPRECATED);
$loader = require '/dependencies/vendor/autoload.php';
$loader->addPsr4('verbb\\buttonbox\\', '/plugin/src', true);
// Optimized dependency autoloaders can contain paths from a different checkout.
foreach ($loader->getClassMap() as $class => $path) {
    if (str_starts_with($class, 'verbb\\buttonbox\\')) {
        $loader->addClassMap([$class => '/plugin/src/' . str_replace('\\', '/', substr($class, strlen('verbb\\buttonbox\\'))) . '.php']);
    }
}
