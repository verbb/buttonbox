<?php

use craft\elements\Entry;
use verbb\buttonbox\fields\ActionLinks;
use verbb\buttonbox\fields\Position;
use verbb\buttonbox\fields\Rating;
use verbb\buttonbox\fields\VisualChoice;
use verbb\buttonbox\fields\VisualMultiChoice;
use verbb\buttonbox\fields\WidthChoice;

require __DIR__ . '/runtime/bootstrap.php';
$app = require CRAFT_VENDOR_PATH . '/craftcms/cms/bootstrap/console.php';
$app->init();
$options = [
    ['label' => 'Alpha', 'value' => 'alpha'],
    ['label' => 'Beta', 'value' => 'beta & "quoted"', 'surface' => ['mode' => 'text', 'size' => 28]],
    ['label' => 'Disabled', 'value' => 'disabled', 'disabled' => true, 'explanation' => 'Unavailable now'],
];
$fields = [
    'dropdown' => [new VisualChoice(['presentation' => 'dropdown', 'options' => $options]), 'alpha'],
    'orphanDropdown' => [new VisualChoice(['presentation' => 'dropdown', 'options' => $options]), 'removed'],
    'choice' => [new VisualChoice(['options' => $options]), 'alpha'],
    'multi' => [new VisualMultiChoice(['options' => $options]), ['alpha']],
    'width' => [new WidthChoice(['showTooltips' => false]), '50'],
    'orphanWidth' => [new WidthChoice(['showTooltips' => false]), 'removed'],
    'position' => [new Position(['showTooltips' => false]), 'center'],
    'orphanPosition' => [new Position(['showTooltips' => false]), 'removed'],
    'rating' => [new Rating(['allowClear' => true]), 2],
];
$entry = new Entry(['id' => 123, 'siteSettingsId' => 123]);
$entry->setIsFresh(false);
$html = '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Button Box browser fixture</title><link rel="stylesheet" href="/dist/buttonbox.css"><style>body{font:16px sans-serif;padding:20px}fieldset{margin:15px 0;max-width:600px}.visually-hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}</style></head><body><form id="fixture" method="post" action="/submitted.html" target="submission"><div id="fields">';
foreach ($fields as $handle => [$field, $raw]) {
    $field->handle = $handle;
    $field->name = $handle;
    $value = $field->normalizeValue($raw, $entry);
    $html .= '<fieldset id="' . $handle . '"><legend>' . $handle . '</legend>' . Craft::$app->getView()->namespaceInputs($field->getInputHtml($value, $entry), 'fields[nested]') . '</fieldset>';
}
foreach (['choice', 'multi', 'width', 'position', 'rating'] as $handle) {
    [$field, $raw] = $fields[$handle];
    $staticField = clone $field;
    $staticField->handle = 'static' . ucfirst($handle);
    $html .= '<fieldset id="static-' . $handle . '"><legend>Static ' . $handle . '</legend>' . $staticField->getStaticHtml($staticField->normalizeValue($raw, $entry), $entry) . '</fieldset>';
}
$static = $fields['dropdown'][0];
$static->handle = 'staticDropdown';
$html .= '<fieldset id="static"><legend>Static</legend>' . $static->getStaticHtml($static->normalizeValue('alpha', $entry), $entry) . '</fieldset></div><button type="submit">Submit</button><button type="reset">Reset</button><button type="button" id="remount">Remount</button><label><input id="cancel-reset" type="checkbox">Cancel reset</label></form><iframe name="submission" title="Submission"></iframe><script src="/jquery.js"></script><script>window.Craft = {};</script><script src="/dist/buttonbox.js"></script><script>
document.querySelector("#remount").addEventListener("click", () => { const fields = document.querySelector("#fields"); fields.remove(); document.querySelector("#fixture").prepend(fields); });
document.querySelector("#fixture").addEventListener("reset", event => { if (document.querySelector("#cancel-reset").checked) event.preventDefault(); });
window.events = [];
for (const type of ["input", "change"]) document.querySelector("#fixture").addEventListener(type, event => { if (event.target.matches("[data-dropdown-value]")) window.events.push([type, event.target.name, event.target.value]); });
</script></body></html>';
file_put_contents('/app/web/index.html', $html);
file_put_contents('/app/web/submitted.html', '<!doctype html><title>Submitted</title><p>Submitted</p>');

$view = Craft::$app->getView();
$view->setTemplateMode('cp');
$settingsHtml = '';
foreach ([
    'visual' => new VisualChoice(['options' => $options]),
    'width' => new WidthChoice(),
    'position' => new Position(),
    'rating' => new Rating(['showLabels' => true]),
    'actions' => new ActionLinks(['actions' => [['label' => 'Go', 'url' => '/go', 'urlType' => 'url']]]),
] as $handle => $field) {
    $view->setNamespace('types[' . $handle . ']');
    $view->startJsBuffer();
    $settings = $view->namespaceInputs($field->getSettingsHtml());
    $settingsHtml .= '<form id="settings-' . $handle . '" onsubmit="return false">' . $settings . '</form><script>$("#settings-' . $handle . '").data("initialSerializedValue", $("#settings-' . $handle . '").serialize());</script>' . $view->clearJsBuffer();
}
$view->setNamespace(null);
// Field settings need Craft's real Garnish classes, but no Craft requests.
file_put_contents('/app/web/settings.html', '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Button Box settings fixture</title><link rel="stylesheet" href="/dist/settings.css"></head><body><script src="/jquery.js"></script><script src="/garnish.js"></script><script>window.Craft = { t: (category, message) => message, sendActionRequest: async () => ({ data: { html: "", errors: [] } }), getActionUrl: () => "/" }; Craft.ButtonBoxSettingsReady = import("/dist/settings.js");</script>' . $settingsHtml . '</body></html>');
echo "Rendered browser fixture from Craft field templates.\n";
