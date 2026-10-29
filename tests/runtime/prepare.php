<?php

require __DIR__ . '/ownership.php';
assertButtonBoxTestOwnership();

foreach (['config', 'storage', 'web/cpresources', 'vendor/craftcms'] as $directory) {
    mkdir('/app/' . $directory, 0777, true);
}
// Composer dependencies remain read-only; only this app's plugin manifest is generated.
foreach (new DirectoryIterator('/dependencies/vendor') as $entry) {
    if (!$entry->isDot() && $entry->getFilename() !== 'craftcms') {
        symlink($entry->getPathname(), '/app/vendor/' . $entry->getFilename());
    }
}
symlink('/dependencies/vendor/craftcms/cms', '/app/vendor/craftcms/cms');
$package = json_decode(file_get_contents('/plugin/composer.json'), true, 512, JSON_THROW_ON_ERROR);
$info = $package['extra'] + [
    'basePath' => '/plugin/src',
    'aliases' => ['@verbb/buttonbox' => '/plugin/src'],
    'version' => $package['version'],
];
file_put_contents('/app/vendor/craftcms/plugins.php', '<?php return ' . var_export(['verbb/buttonbox' => $info], true) . ';');
file_put_contents('/app/composer.json', json_encode(['name' => 'verbb/buttonbox-tests', 'require' => ['verbb/buttonbox' => '*']]));
file_put_contents('/app/bootstrap.php', "<?php require '/plugin/tests/runtime/bootstrap.php';");
file_put_contents('/app/config/general.php', "<?php return \\craft\\config\\GeneralConfig::create()->devMode(true)->allowAdminChanges(true)->timezone('UTC')->runQueueAutomatically(false);");
file_put_contents('/app/config/db.php', "<?php return ['driver'=>'mysql','server'=>'database','port'=>3306,'database'=>'buttonbox_test','user'=>'buttonbox_test','password'=>'isolated-test'];");
file_put_contents('/app/config/app.php', "<?php return ['id'=>'ButtonBoxIsolatedTests','baseApiUrl'=>'http://127.0.0.1:9/'];");
echo "Prepared owned isolated application.\n";
