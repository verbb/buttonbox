<?php

use craft\elements\Entry;
use craft\fields\data\OptionData as CraftOptionData;
use craft\fields\data\MultiOptionsFieldData as CraftMultiOptionsFieldData;
use verbb\buttonbox\fields\Position;
use verbb\buttonbox\fields\VisualChoice;
use verbb\buttonbox\fields\VisualMultiChoice;
use verbb\buttonbox\fields\WidthChoice;
use verbb\buttonbox\fields\data\MultiVisualOptionData;
use verbb\buttonbox\fields\data\SingleVisualOptionData;
use verbb\buttonbox\fields\data\VisualOptionData;
use verbb\buttonbox\fields\data\WidthData;
use Twig\Extension\SandboxExtension;

require __DIR__ . '/support/isolated.php';
$existing = new Entry(['id' => 123, 'siteSettingsId' => 123]);
$existing->setIsFresh(false);
$options = [
    ['label' => 'Zero', 'value' => '0', 'default' => true, 'description' => 'Zero choice'],
    ['label' => 'One', 'value' => 'one'],
    ['label' => 'Disabled', 'value' => 'disabled', 'disabled' => true, 'explanation' => 'Retired'],
];

$suite->test('Owned single and multiple visual values retain their Twig contracts', function() use ($suite, $options, $existing) {
    $single = new VisualChoice(['options' => $options]);
    $value = $single->normalizeValue('0', $existing);
    $suite->check($value instanceof SingleVisualOptionData && !$value instanceof CraftOptionData, 'Single choice still depends on Craft data.');
    $suite->same('0', (string)$value);
    $suite->same('0', $value->serialize());
    $suite->same('0', $single->normalizeValue(null, null)->value);
    $suite->same(null, $single->normalizeValue(null, $existing)->value);
    $suite->same(VisualOptionData::class, $value->getOptions()[0]::class);
    $suite->check(!method_exists($value->getOptions()[0], 'getOptions'), 'An individual option must not be a field selection.');
    $multi = new VisualMultiChoice(['options' => $options]);
    $values = $multi->normalizeValue(['one', '0', 'removed'], $existing);
    $suite->check($values instanceof MultiVisualOptionData && !$values instanceof CraftMultiOptionsFieldData, 'Collection still depends on Craft data.');
    $suite->same(3, count($values));
    $suite->same('one', $values[0]->value);
    $suite->check($values->contains(0) && $values->contains('removed') && !$values->contains('missing'), 'Membership lost zero or unavailable identities.');
    $suite->same(['0', 'one', 'removed'], $multi->serializeValue($values, $existing));
    $suite->same(null, $multi->serializeValue($multi->normalizeValue([], $existing), $existing));
    $suite->same(VisualOptionData::class, $values[0]::class);
    $selectedOption = $single->normalizeValue($values[0], $existing);
    $suite->check($selectedOption instanceof SingleVisualOptionData, 'An individual option was not promoted to a field selection.');
    $suite->same('one', $selectedOption->value);
    $suite->same(3, count($selectedOption->getOptions()));
    $suite->check($multi->normalizeValue($value, $existing) instanceof MultiVisualOptionData, 'A single choice did not become a multi-choice collection.');

    $encode = new ReflectionMethod($single, 'encodeValue');
    $suite->same('base64:MA==', $encode->invoke($single, $value));
    $suite->same('removed', $encode->invoke($single, $single->normalizeValue('removed', $existing)));
    $suite->same(null, $encode->invoke($single, $single->normalizeValue(null, $existing)));
    $suite->same('', $encode->invoke($single, ''));
    $suite->same('base64:' . base64_encode('café & tea'), $encode->invoke($single, 'café & tea'));
    $suite->same(['base64:b25l', 'base64:MA==', 'removed'], $encode->invoke($multi, $values));

    $twig = Craft::$app->getView()->getTwig();
    $sandbox = $twig->getExtension(SandboxExtension::class);
    $sandbox->enableSandbox();
    try {
        $html = $twig->createTemplate('{{ single }}|{{ single.description }}|{{ single.options|length }}|{{ multiple|length }}|{{ multiple.contains("0") ? "yes" : "no" }}|{% for option in multiple %}{{ option.value }};{% endfor %}|{{ multiple.options|length }}')->render(['single' => $value, 'multiple' => $values]);
        $suite->same('0|Zero choice|3|3|yes|one;0;removed;|3', $html);
    } finally {
        $sandbox->disableSandbox();
    }
});

$suite->test('Width exposes geometry and distinguishes disabled from removed choices', function() use ($suite, $existing) {
    $field = new WidthChoice(['options' => [
        ['label' => 'Narrow', 'value' => 'narrow', 'percentage' => 25, 'default' => true],
        ['label' => 'Wide', 'value' => 'wide', 'percentage' => 75, 'disabled' => true, 'explanation' => 'Unavailable here'],
    ]]);
    $value = $field->normalizeValue('wide', $existing);
    $suite->check($value instanceof WidthData && !$value instanceof CraftOptionData, 'Width still depends on Craft data.');
    $suite->same([75.0, true, false, 'Wide', 'Unavailable here'], [$value->percentage, $value->disabled, $value->valid, $value->label, $value->explanation]);
    $suite->same('wide', $field->serializeValue($value, $existing));
    $suite->same(2, count($value->getOptions()));
    $removed = $field->normalizeValue('removed', $existing);
    $suite->same([null, false, false, null, null], [$removed->percentage, $removed->disabled, $removed->valid, $removed->label, $removed->explanation]);
    $suite->same('narrow', $field->normalizeValue(null, null)->value);
    $suite->same(null, $field->normalizeValue('', null)->value);
    $suite->same(null, $field->normalizeValue(null, $existing)->value);
    $suite->same(null, $field->normalizeValue([], null)->value);
    $suite->same('narrow', $field->normalizeValue('["narrow"]', $existing)->value);
    $suite->same('narrow', $field->normalizeValue('base64:' . base64_encode('narrow'), $existing)->value);
    $suite->same('wide:75:Unavailable here', Craft::$app->getView()->renderString('{{ width }}:{{ width.percentage }}:{{ width.explanation }}', ['width' => $value]));
});

foreach ([VisualChoice::class, VisualMultiChoice::class, Position::class, WidthChoice::class] as $class) {
    $suite->test('Owned values integrate with validation, conditions, search and previews: ' . $class, function() use ($suite, $class) {
        $field = ButtonBoxFixtures::field($class, ['options' => [
            ['label' => 'First', 'value' => 'first', 'percentage' => 25],
            ['label' => 'Second', 'value' => 'second', 'percentage' => 75, 'disabled' => true],
        ]]);
        $section = ButtonBoxFixtures::section([$field]);
        $multi = $class === VisualMultiChoice::class;
        $entry = ButtonBoxFixtures::entry($section, [$field->handle => $multi ? ['first'] : 'first']);
        ButtonBoxFixtures::save($entry);
        $value = $entry->getFieldValue($field->handle);
        $suite->check(!$value instanceof CraftOptionData && !$value instanceof CraftMultiOptionsFieldData, 'Owned field returned a Craft object.');
        foreach ($value->getOptions() as $option) {
            $suite->check(!$option instanceof CraftOptionData, 'Configured option still depends on Craft data.');
            $suite->check($option !== $value, 'Selection contains itself in its options list.');
            if (method_exists($option, 'getOptions')) {
                $suite->same([], $option->getOptions(), 'Individual option has a nested options list.');
            }
        }
        json_encode($value, JSON_THROW_ON_ERROR);
        $suite->same('first First', $field->getSearchKeywords($value, $entry));
        $suite->check(str_contains($field->getPreviewHtml($value, $entry), 'First'), 'Preview lost its label.');
        $suite->check(!$field->isValueEmpty($value, $entry), 'Selection became empty.');
        $condition = Entry::createCondition();
        $condition->setFieldLayouts([$entry->getFieldLayout()]);
        $condition->setConditionRules([[
            'class' => $field->getElementConditionRuleType(), 'fieldUid' => $field->uid,
            'operator' => 'in', 'values' => ['first'],
        ]]);
        $suite->same(1, count($condition->getConditionRules()));
        $suite->check($condition->matchElement($entry), 'Condition failed to match an owned selection.');
        if (!$multi) {
            $legacyCondition = Entry::createCondition();
            $legacyCondition->setFieldLayouts([$entry->getFieldLayout()]);
            $legacyCondition->setConditionRules([[
                'class' => \craft\fields\conditions\OptionsFieldConditionRule::class, 'fieldUid' => $field->uid,
                'operator' => 'in', 'values' => ['first'],
            ]]);
            $suite->same(1, count($legacyCondition->getConditionRules()), 'Existing condition was dropped.');
            $suite->check($legacyCondition->matchElement($entry), 'Existing scalar condition lost its match.');
        }
        $entry->setFieldValue($field->handle, $multi ? ['second'] : 'second');
        if (!$multi) {
            $suite->check(!$legacyCondition->matchElement($entry), 'Existing scalar condition matched the wrong value.');
        }
        $suite->check(!$condition->matchElement($entry), 'Condition matched the wrong value.');
        $suite->check(!$entry->validate(), 'Disabled selection passed validation.');
        $entry->setFieldValue($field->handle, $multi ? ['removed'] : 'removed');
        $suite->check(!$entry->validate(), 'Removed selection passed validation.');
        $entry->setFieldValue($field->handle, $multi ? [] : '');
        $suite->check($field->isValueEmpty($entry->getFieldValue($field->handle), $entry), 'Empty selection was not empty.');
        $suite->check($entry->validate(), 'Optional empty selection failed validation.');
    });
}
$suite->test('Published Twig examples render owned field values', function() use ($suite, $existing) {
    $choice = new VisualChoice(['options' => [['label' => 'Featured', 'value' => 'featured', 'description' => 'Lead story']]]);
    $multi = new VisualMultiChoice(['options' => [['label' => 'Analytics', 'value' => 'analytics']]]);
    $surface = new VisualChoice(['options' => [['label' => 'Ocean', 'value' => 'ocean', 'surface' => ['mode' => 'gradient', 'from' => '#0ea5e9', 'to' => '#2563eb', 'angle' => 135]]]]);
    $context = ['entry' => [
        'title' => 'A story',
        'cardTreatment' => $choice->normalizeValue('featured', $existing),
        'features' => $multi->normalizeValue(['analytics'], $existing),
        'focalPosition' => (new Position())->normalizeValue('bottom-right', $existing),
        'focalPoint' => (new Position())->normalizeValue('bottom-right', $existing),
        'layoutWidth' => (new WidthChoice())->normalizeValue('75', $existing),
        'brandSurface' => $surface->normalizeValue('ocean', $existing),
        'rating' => 4,
        'heroImage' => new class {
            public function one(): object { return (object)['url' => '/example.jpg']; }
        },
    ]];
    $pages = ['template-guides/using-field-values', 'developers/visual-option', 'developers/visual-options', 'developers/visual-surface', 'developers/position-data', 'developers/width-data', 'feature-tour/position'];
    $count = 0;
    foreach ($pages as $page) {
        preg_match_all('/```twig\n(.*?)```/s', file_get_contents(dirname(__DIR__) . '/docs/' . $page . '.md'), $matches);
        foreach ($matches[1] as $snippet) {
            $html = Craft::$app->getView()->renderString($snippet, $context);
            $suite->check(trim($html) !== '', 'Documented example produced no output: ' . $page);
            if (($page === 'template-guides/using-field-values' && str_contains($snippet, 'entry.focalPosition')) || $page === 'feature-tour/position') {
                $emptyContext = $context;
                $emptyContext['entry']['focalPosition'] = (new Position())->normalizeValue(null, $existing);
                $emptyContext['entry']['focalPoint'] = $emptyContext['entry']['focalPosition'];
                $suite->same('', trim(Craft::$app->getView()->renderString($snippet, $emptyContext)), 'Position example rendered an empty selection.');
            }
            $count++;
        }
    }
    $suite->same(13, $count);
});
$suite->finish();
