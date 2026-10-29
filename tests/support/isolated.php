<?php

require_once dirname(__DIR__) . '/runtime/ownership.php';
assertButtonBoxTestOwnership();
require '/app/bootstrap.php';
$app = require CRAFT_VENDOR_PATH . '/craftcms/cms/bootstrap/console.php';
$app->init();
if (Craft::$app->getConfig()->getDb()->server !== 'database' || Craft::$app->getConfig()->getDb()->database !== 'buttonbox_test') {
    throw new RuntimeException('Refusing persistence tests outside the isolated database.');
}
require __DIR__ . '/Suite.php';
require __DIR__ . '/Fixtures.php';
$suite = new ButtonBoxTestSuite();
