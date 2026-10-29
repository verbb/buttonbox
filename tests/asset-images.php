<?php

use craft\elements\Asset;
use craft\elements\User;
use craft\fs\Local;
use craft\models\Volume;
use craft\web\Request;
use craft\web\Response;
use verbb\buttonbox\ButtonBox;
use verbb\buttonbox\controllers\OptionSetsController;
use yii\web\BadRequestHttpException;
use yii\web\ForbiddenHttpException;

require __DIR__ . '/support/isolated.php';

$ids = [];
foreach ([true, false] as $public) {
    $handle = $public ? 'bbPublicImages' : 'bbPrivateImages';
    $fs = new Local(['name' => $handle, 'handle' => $handle, 'path' => '/app/storage/' . $handle, 'hasUrls' => $public, 'url' => $public ? 'https://buttonbox.test/images/' : null]);
    if (!Craft::$app->getFs()->saveFilesystem($fs)) throw new RuntimeException(json_encode($fs->getErrors()));
    $volume = new Volume(['name' => $handle, 'handle' => $handle, 'fsHandle' => $handle]);
    if (!Craft::$app->getVolumes()->saveVolume($volume)) throw new RuntimeException(json_encode($volume->getErrors()));
    $file = '/app/storage/' . $handle . '.png';
    $image = imagecreatetruecolor(2, 2);
    imagepng($image, $file);
    imagedestroy($image);
    $asset = new Asset(['tempFilePath' => $file, 'filename' => 'pixel.png', 'newFolderId' => Craft::$app->getAssets()->getRootFolderByVolumeId($volume->id)->id, 'volumeId' => $volume->id]);
    $asset->setScenario(Asset::SCENARIO_CREATE);
    if (!Craft::$app->getElements()->saveElement($asset)) throw new RuntimeException(json_encode($asset->getErrors()));
    $ids[$public ? 'public' : 'private'] = $asset->id;
}

$_SERVER['REQUEST_METHOD'] = 'POST';
$request = new Request(['isCpRequest' => true, 'scriptFile' => __FILE__, 'scriptUrl' => '/index.php']);
Craft::$app->set('request', $request);
Craft::$app->set('response', new Response());
$user = Craft::$app->getUser();
$user->setIdentity(User::find()->admin(true)->one());
$controller = new OptionSetsController('option-sets', ButtonBox::$plugin);

$suite->test('Asset picker resolves one public image and keeps the custom catalogue separate', function() use ($suite, $controller, $request, $ids) {
    $request->setBodyParams(['id' => $ids['public']]);
    $suite->same('https://buttonbox.test/images/pixel.png', $controller->actionAssetImage()->data['url']);
    $suite->same(1, count($controller->actionImages()->data['groups']));
    $suite->same('Custom images', $controller->actionImages()->data['groups'][0]['name']);
});
$suite->test('Private and missing images are rejected', function() use ($suite, $controller, $request, $ids) {
    foreach ([$ids['private'], 0, 99999999] as $id) {
        $request->setBodyParams(['id' => $id]);
        try { $controller->actionAssetImage(); throw new RuntimeException('Invalid image accepted.'); }
        catch (BadRequestHttpException $error) { $suite->same(400, $error->statusCode); }
    }
});
$suite->test('Non-admin users cannot resolve asset images or list custom images', function() use ($suite, $controller, $user) {
    $user->setIdentity(new User(['id' => 999, 'admin' => false]));
    foreach (['actionAssetImage', 'actionImages'] as $method) {
        try { $controller->$method(); throw new RuntimeException('Non-admin access accepted.'); }
        catch (ForbiddenHttpException $error) { $suite->same(403, $error->statusCode); }
    }
});
$suite->finish();
