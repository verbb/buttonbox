<?php
use verbb\buttonbox\fields\ActionLinks;
use verbb\buttonbox\fieldlayoutelements\ActionLinksField;
use verbb\buttonbox\models\ActionLinksConfig;
use verbb\buttonbox\ButtonBox;
use verbb\buttonbox\fields\Triggers;
use craft\elements\Entry;
use craft\fieldlayoutelements\CustomField;
use craft\helpers\StringHelper;
use craft\models\EntryType;
use craft\models\FieldLayout;
use craft\models\FieldLayoutTab;

$basePath = $argv[1] ?? null;
if (!$basePath || !is_file($basePath . '/bootstrap.php')) throw new RuntimeException('Pass the installed Craft project path.');
require $basePath . '/bootstrap.php';
$app = require CRAFT_VENDOR_PATH . '/craftcms/cms/bootstrap/console.php';
$app->init();
function checkAction(bool $ok, string $message): void { if (!$ok) throw new RuntimeException($message); }
$actions = [['label' => 'View {title}', 'urlType' => 'url', 'url' => 'https://example.com/{slug}', 'icon' => 'book', 'iconPosition' => 'end', 'style' => 'outline', 'newWindow' => true]];
$field = new ActionLinks(['name' => 'Actions', 'handle' => 'actionTest', 'actions' => $actions, 'size' => 'xs', 'alignment' => 'end', 'spacing' => 'compact']);
checkAction($field->validate(), implode(' ', $field->getErrorSummary(true)));
checkAction(ActionLinks::dbType() === null && !ActionLinks::isRequirable() && ActionLinks::isMultiInstance(), 'Incorrect content capabilities.');
checkAction(!$field->includeInGqlSchema(new craft\models\GqlSchema()), 'Action Links must not expose GraphQL content.');
checkAction($field->normalizeValue('old', null) === null && $field->serializeValue('old', null) === null, 'Must not store content.');
$entry = new Entry(['title' => 'Example', 'slug' => 'example']);
$html = $field->getInputHtml(null, $entry);
checkAction(str_contains($html, 'View Example') && str_contains($html, 'https://example.com/example'), 'Element templates did not resolve.');
checkAction(str_contains($html, 'slot="end"') && str_contains($html, 'size="xs"') && str_contains($html, 'variant="outline"'), 'Button configuration was lost.');
checkAction(str_contains($html, 'target="_blank"') && str_contains($html, 'noopener noreferrer'), 'New-window attributes were lost.');
checkAction(!str_contains($field->getActionConfig()->render(null, true), 'href='), 'Preview buttons must not navigate.');
foreach (['https://example.com/{{ oops', '{% if %}', '{{ nope() }}'] as $template) {
    foreach (['url', 'label'] as $key) {
        $invalid = ['label' => 'Bad', 'url' => '/bad', $key => $template];
        $invalidField = new ActionLinks(['name' => 'Actions', 'handle' => 'invalidActions', 'actions' => [$invalid]]);
        checkAction(!$invalidField->validate(['actions']), 'Invalid template passed validation: ' . $template);
        // Previously saved configuration must not stop the element editor from opening.
        $saved = (new ActionLinksConfig(['actions' => [$invalid, ['label' => 'Good', 'url' => '/good']]]))->render($entry);
        checkAction(!str_contains($saved, '/bad') && str_contains($saved, 'href="/good"'), 'Invalid template was not skipped: ' . $template);
    }
}
foreach (['https://example.com/?q={', '/news/{slug}', '{{ object.slug }}', '{% if true %}/yes{% endif %}'] as $template) {
    checkAction((new ActionLinksConfig(['actions' => [['label' => 'Link', 'url' => $template]]]))->validate(), 'Valid template failed validation: ' . $template);
}
$templateMode = Craft::$app->getView()->getTemplateMode();
(new ActionLinksConfig(['actions' => [['label' => 'Link', 'url' => '/{slug}']]]))->validate();
checkAction(Craft::$app->getView()->getTemplateMode() === $templateMode, 'Validation changed the template mode.');
foreach (['/admin/my-page', '/my-page', 'https://example.com/my-page', '/news/{slug}', '//example.com/path', '#details', '?view=full', 'mailto:editor@example.com', 'tel:+61312345678', 'slack://channel'] as $url) {
    $config = new ActionLinksConfig(['actions' => [['label' => 'Link', 'url' => $url]]]);
    checkAction($config->validate(), 'Plain URL configuration was rejected.');
    checkAction(str_contains($config->render($entry), 'href="' . str_replace('{slug}', 'example', $url) . '"'), 'Plain URL was unexpectedly rebased.');
    checkAction($config->getSettingsActions()[0]['displayUrl'] === $url, 'Plain URL changed in settings.');
}
foreach (["java\tscript:alert(1)", "JaVa\nScRiPt:alert(1)", "java\r\nscript:alert(1)", "\x01javascript:alert(1)", "da\tta:text/html,test", "vb\rscript:msgbox(1)"] as $unsafe) {
    $config = new ActionLinksConfig(['actions' => [['label' => 'Unsafe', 'url' => $unsafe]]]);
    checkAction(!$config->validate(), 'Obfuscated executable URL passed settings validation.');
    checkAction(!str_contains($config->render($entry), 'href='), 'Unvalidated executable URL reached the rendered link.');
    $dynamic = new ActionLinksConfig(['actions' => [['label' => 'Dynamic', 'url' => '{title}']]]);
    checkAction(!str_contains($dynamic->render(new Entry(['title' => $unsafe])), 'href='), 'Element-derived executable URL reached the rendered link.');
    Craft::setAlias('@buttonboxUnsafeImage', $unsafe);
    $image = new ActionLinksConfig(['actions' => [['label' => 'Safe', 'url' => '/safe', 'imageUrl' => '@buttonboxUnsafeImage', 'icon' => 'book']]]);
    $imageHtml = $image->render();
    checkAction(!str_contains($imageHtml, '<img') && str_contains($imageHtml, '<svg') && str_contains($imageHtml, 'href="/safe"'), 'Unsafe resolved artwork did not preserve the safe link and icon fallback.');
}
Craft::setAlias('@buttonboxUnsafeImage', null);
foreach (['cp', 'site'] as $type) {
    $config = new ActionLinksConfig(['actions' => [['label' => 'Legacy', 'urlType' => $type, 'url' => 'news/{slug}']]]);
    $expected = $type === 'cp' ? craft\helpers\UrlHelper::cpUrl('news/example') : craft\helpers\UrlHelper::siteUrl('news/example');
    checkAction(str_contains($config->render($entry), 'href="' . craft\helpers\Html::encode($expected) . '"'), 'Legacy destination changed.');
    $settings = $config->getSettingsActions()[0];
    checkAction($settings['url'] === 'news/{slug}' && $settings['urlType'] === $type, 'Settings discarded the stored legacy path.');
    checkAction(str_contains($settings['displayUrl'], '{slug}'), 'Settings resolved element tags prematurely.');
}
$restricted = new ActionLinksConfig(['actions' => [['label' => 'Restricted', 'url' => '/entries', 'permission' => 'performUpdates', 'requireEditable' => true]]]);
checkAction(str_contains($restricted->render(), 'href="/entries"') && !str_contains($restricted->render(), 'disabled'), 'Removed availability settings must not disable links.');
foreach ([['size' => 'huge'], ['alignment' => 'bad'], ['spacing' => 'bad'], ['actions' => [['label' => 'Unsafe', 'url' => 'javascript:alert(1)']]], ['actions' => [['label' => 'Bad', 'url' => '/', 'iconPosition' => 'bad']]]] as $config) {
    checkAction(!(new ActionLinksConfig($config))->validate(), 'Invalid settings accepted.');
}
if (!in_array('--persist', $argv, true)) { echo "Action Links rendering and validation passed.\n"; exit; }
$types = []; $createdFields = []; $legacyField = null;
$suffix = bin2hex(random_bytes(5)); $original = [];
try {
    $shared = new ActionLinks(['name' => 'Shared actions', 'handle' => 'sharedActions' . $suffix, 'actions' => $actions]);
    checkAction(Craft::$app->getFields()->saveField($shared), 'Cannot create shared field.');
    $createdFields[$shared->uid] = $shared;
    $legacyField = new Triggers(['name' => 'Trigger conversion test', 'handle' => 'triggerConversion' . $suffix, 'options' => [['label' => 'Docs', 'value' => 'https://example.com', 'type' => 'link']]]);
    checkAction(Craft::$app->getFields()->saveField($legacyField), 'Cannot create legacy fixture.');
    foreach ([0, 1] as $index) {
        $layout = new FieldLayout(['type' => Entry::class]);
        $tab = new FieldLayoutTab(['name' => 'Content', 'layout' => $layout]);
        $placement = new CustomField($legacyField, ['uid' => StringHelper::UUID(), 'width' => 50, 'required' => true, 'label' => 'Links', 'layout' => $layout]);
        $condition = craft\elements\User::createCondition();
        $condition->setConditionRules([['class' => craft\elements\conditions\users\AdminConditionRule::class, 'value' => true]]);
        $placement->setUserCondition($condition);
        // A separate standard placement must not be rewritten by another field's conversion.
        $tab->setElements([new ActionLinksField($shared, ['layout' => $layout]), $placement, new CustomField($shared, ['layout' => $layout, 'handle' => 'secondaryActions'])]);
        $layout->setTabs([$tab]);
        $type = new EntryType(['name' => "Action reuse $suffix $index", 'handle' => "actionReuse{$suffix}x{$index}"]);
        $type->setFieldLayout($layout);
        checkAction(Craft::$app->getEntries()->saveEntryType($type), 'Cannot save field layout: ' . implode(' ', $type->getErrorSummary(true)));
        $types[] = $type;
        $original[$type->uid] = Craft::$app->getProjectConfig()->get('entryTypes.' . $type->uid . '.fieldLayouts.' . $type->getFieldLayout()->uid);
    }
    $shared->actions[0]['label'] = 'Updated shared action';
    checkAction(Craft::$app->getFields()->saveField($shared), 'Cannot update shared field.');
    ButtonBox::$plugin->getConversions()->convert($legacyField->handle);
    foreach ($types as $type) {
        $config = Craft::$app->getProjectConfig()->get('entryTypes.' . $type->uid . '.fieldLayouts.' . $type->getFieldLayout()->uid);
        $expected = $original[$type->uid];
        $expected['tabs'][0]['elements'][1]['type'] = ActionLinksField::class;
        $expected['tabs'][0]['elements'][1]['required'] = false;
        checkAction($config === $expected, 'Conversion changed unrelated layout settings or placement metadata.');
        $placements = Craft::$app->getFields()->getLayoutByUid($type->getFieldLayout()->uid)->getTabs()[0]->getElements();
        checkAction($placements[1] instanceof ActionLinksField && $placements[1]->alwaysRefresh(), 'Converted links must refresh.');
        checkAction(str_contains($placements[0]->getField()->getInputHtml(null, $entry), 'Updated shared action'), 'Shared edit did not reach every placement.');
    }
    $converted = Craft::$app->getFields()->getFieldByUid($legacyField->uid);
    checkAction($converted instanceof ActionLinks && $converted->id === $legacyField->id && $converted->actions[0]['url'] === 'https://example.com', 'Triggers conversion lost identity or links.');
    echo "Action Links reuse and Triggers conversion passed.\n";
} finally {
    foreach ($types as $type) Craft::$app->getEntries()->deleteEntryType($type);
    foreach ($createdFields as $created) Craft::$app->getFields()->deleteField($created);
    if ($legacyField) Craft::$app->getFields()->deleteField(Craft::$app->getFields()->getFieldByUid($legacyField->uid));
    // Standalone scripts do not dispatch Craft's normal after-request flush.
    Craft::$app->getProjectConfig()->flush();
}
