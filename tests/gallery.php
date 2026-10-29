<?php

use verbb\buttonbox\ButtonBox;
use verbb\buttonbox\services\Gallery;
use craft\helpers\FileHelper;

$basePath = $argv[1] ?? null;
if (!$basePath || !is_file($basePath . '/bootstrap.php')) {
    throw new RuntimeException('Pass the installed Craft project path.');
}
require $basePath . '/bootstrap.php';
$app = require CRAFT_VENDOR_PATH . '/craftcms/cms/bootstrap/console.php';
$app->init();

function check(bool $condition, string $message): void
{
    if (!$condition) {
        throw new RuntimeException($message);
    }
}

$root = Craft::$app->getPath()->getTempPath() . '/buttonbox-gallery-' . bin2hex(random_bytes(5));
$settings = ButtonBox::$plugin->getSettings();
$originalIcons = $settings->iconsPath;
$originalImages = $settings->imagesPath;
$gallery = ButtonBox::$plugin->getGallery();
$published = null;
try {
    FileHelper::createDirectory($root . '/icons/group/deep');
    FileHelper::createDirectory($root . '/images/group');
    $svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><path d="M0 0h10v10H0z"/></svg>';
    file_put_contents($root . '/icons/example.svg', $svg);
    file_put_contents($root . '/icons/group/second.SVG', $svg);
    file_put_contents($root . '/icons/group/deep/hidden.svg', $svg);
    file_put_contents($root . '/icons/ignore.txt', 'not an icon');
    file_put_contents($root . '/outside.svg', $svg);
    symlink($root . '/outside.svg', $root . '/icons/escape.svg');
    file_put_contents($root . '/images/group/pixel.png', base64_decode('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+j5xkAAAAASUVORK5CYII='));
    file_put_contents($root . '/images/ignore.svg', $svg);
    Craft::setAlias('@bbGalleryFixture', $root);
    $settings->iconsPath = '@bbGalleryFixture/icons/';
    $settings->imagesPath = '@bbGalleryFixture/images/';
    check($settings->getIconsPath() === $root . '/icons', 'Icon alias did not resolve.');
    $icons = $gallery->getItems('icon');
    check(count($icons) === 2, 'Icon catalog included an unsupported file, nested folder or escaping symlink.');
    check($icons[0]['value'] === Gallery::ICON_PREFIX . 'example.svg', 'Icon reference is not portable.');
    check(str_contains($icons[0]['preview'], '<svg'), 'Custom icon did not render.');
    check(str_contains($gallery->resolveIconSvg('star') ?? '', '<svg'), 'Built-in icons regressed.');
    $images = $gallery->getItems('image');
    check(count($images) === 1 && $images[0]['value'] === Gallery::IMAGE_PREFIX . 'group/pixel.png', 'Image catalog was not filtered or portable.');
    check($images[0]['preview'] !== '' && !str_contains($images[0]['preview'], '@buttonboxImages'), 'Image preview URL was not published.');
    $published = Craft::$app->getAssetManager()->getPublishedPath($root . '/images/group/pixel.png');
    check($published && is_file($published), 'Image was not published as a file.');
    check(ButtonBox::$plugin->getOptions()->resolveImageUrl($images[0]['value']) === $images[0]['preview'], 'Stored image reference did not resolve.');
    foreach (['../outside.svg', 'group/../../outside.svg', '/example.svg', 'group/deep/hidden.svg', 'escape.svg'] as $relative) {
        check($gallery->resolvePath('icon', Gallery::ICON_PREFIX . $relative) === null, 'Invalid icon path accepted: ' . $relative);
    }
    check($gallery->resolveImageUrl(Gallery::IMAGE_PREFIX . 'missing.png') === '', 'Missing image did not resolve gracefully.');
    $settings->iconsPath = '';
    check($gallery->getItems('icon') === [] && $gallery->resolvePath('icon', Gallery::ICON_PREFIX . 'example.svg') === null, 'Empty path did not disable the custom gallery.');
    $settings->imagesPath = '@bbGalleryFixture/missing';
    check($gallery->getItems('image') === [], 'Missing folder did not produce an empty gallery.');
    putenv('BUTTONBOX_GALLERY_TEST_PATH=' . $root . '/icons');
    $settings->iconsPath = '$BUTTONBOX_GALLERY_TEST_PATH';
    check(count($gallery->getItems('icon')) === 2, 'Environment-variable path did not resolve.');
    echo "Button Box gallery tests passed.\n";
} finally {
    $settings->iconsPath = $originalIcons;
    $settings->imagesPath = $originalImages;
    putenv('BUTTONBOX_GALLERY_TEST_PATH');
    if ($published && is_file($published)) {
        unlink($published);
    }
    FileHelper::removeDirectory($root);
}
