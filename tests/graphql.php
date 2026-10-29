<?php

use craft\elements\Entry;
use craft\models\GqlSchema;
use verbb\buttonbox\fields\Buttons;
use verbb\buttonbox\fields\Colours;
use verbb\buttonbox\fields\Position;
use verbb\buttonbox\fields\Rating;
use verbb\buttonbox\fields\Stars;
use verbb\buttonbox\fields\TextSize;
use verbb\buttonbox\fields\VisualChoice;
use verbb\buttonbox\fields\VisualMultiChoice;
use verbb\buttonbox\fields\WidthChoice as Width;

require __DIR__ . '/support/isolated.php';

$options = [
    ['label' => 'Zero', 'value' => '0', 'color' => '#123456', 'surface' => ['mode' => 'solid', 'color' => '#123456']],
    ['label' => 'One', 'value' => 'one'],
    ['label' => 'Two', 'value' => 'two'],
    ['label' => 'Disabled', 'value' => 'disabled', 'disabled' => true],
];
$fields = [
    'choice' => ButtonBoxFixtures::field(VisualChoice::class, ['options' => $options]),
    'multi' => ButtonBoxFixtures::field(VisualMultiChoice::class, ['options' => $options, 'maxSelections' => 2]),
    'position' => ButtonBoxFixtures::field(Position::class),
    'width' => ButtonBoxFixtures::field(Width::class),
    'rating' => ButtonBoxFixtures::field(Rating::class, ['max' => 5, 'defaultValue' => 3]),
];
foreach (['buttons' => Buttons::class, 'colours' => Colours::class, 'textSize' => TextSize::class] as $key => $class) {
    $fields[$key] = ButtonBoxFixtures::field($class, ['options' => [['label' => 'Zero', 'value' => '0']]]);
}
$fields['stars'] = ButtonBoxFixtures::field(Stars::class);
$section = ButtonBoxFixtures::section(array_values($fields));
$limited = ButtonBoxFixtures::field(VisualMultiChoice::class, ['options' => $options, 'minSelections' => 2, 'maxSelections' => 2]);
$requiredSection = ButtonBoxFixtures::section([$limited, $fields['rating']], [$fields['rating']->handle]);
$entryType = $section->getEntryTypes()[0];
$schema = new GqlSchema(['name' => 'Button Box isolated mutations', 'scope' => [
    "sections.{$section->uid}:read", "sections.{$section->uid}:create", "sections.{$section->uid}:save",
    "sections.{$requiredSection->uid}:read", "sections.{$requiredSection->uid}:create", "sections.{$requiredSection->uid}:save",
    'sites.' . Craft::$app->getSites()->getPrimarySite()->uid . ':read',
]]);
$suite->check(Craft::$app->getGql()->saveSchema($schema), 'Cannot save fixture schema.');
$types = ['choice' => 'String', 'multi' => '[String]', 'position' => 'String', 'width' => 'String', 'rating' => 'Int', 'buttons' => 'String', 'colours' => 'String', 'textSize' => 'String', 'stars' => 'String'];
$selection = 'id ';
foreach ($fields as $key => $field) {
    $selection .= "$key: {$field->handle}" . match ($key) {
        'choice', 'multi' => ' { value label valid disabled color } ',
        'position' => ' { value valid horizontal vertical x y } ',
        default => ' ',
    };
}
$execute = fn(string $query, array $variables = []) => Craft::$app->getGql()->executeQuery($schema, $query, $variables, debugMode: true);
$success = function(array $result) use ($suite): array {
    $suite->check(empty($result['errors']), json_encode($result['errors'] ?? [], JSON_PRETTY_PRINT));
    return $result['data'];
};
$mutate = function(array $values, ?int $id = null) use ($execute, $fields, $types, $section, $entryType, $selection): array {
    $declarations = ['$title: String', '$id: ID'];
    $arguments = ['title: $title', 'id: $id', 'enabled: true'];
    $variables = ['title' => 'GraphQL fixture', 'id' => $id];
    foreach ($values as $key => $value) {
        $declarations[] = '$' . $key . ': ' . $types[$key];
        $arguments[] = $fields[$key]->handle . ': $' . $key;
        $variables[$key] = $value;
    }
    return $execute('mutation(' . implode(', ', $declarations) . ') { saved: save_' . $section->handle . '_' . $entryType->handle . '_Entry(' . implode(', ', $arguments) . ') { ' . $selection . ' } }', $variables);
};
$assertStored = function(int $id, array $values) use ($fields): void {
    $expected = [];
    foreach ($values as $key => $value) {
        $field = $fields[$key];
        $expected[] = ['id' => $id, 'handle' => $field->handle, 'class' => $field::class, 'stored' => $value, 'serialized' => $value];
    }
    ButtonBoxFixtures::assertFreshProcess($expected);
};

$suite->test('GraphQL creates canonical values and preserves legacy scalar output', function() use ($suite, $mutate, $success, $execute, $selection, $entryType, $assertStored) {
    $values = ['choice' => '0', 'multi' => ['0', 'one'], 'position' => 'bottom-right', 'width' => '50', 'rating' => 5, 'buttons' => '0', 'colours' => '0', 'textSize' => '0', 'stars' => '4'];
    $data = $success($mutate($values))['saved'];
    $suite->same(['value' => '0', 'label' => 'Zero', 'valid' => true, 'disabled' => false, 'color' => '#123456'], $data['choice']);
    $suite->same(['0', 'one'], array_column($data['multi'], 'value'));
    $suite->same([true, true], array_column($data['multi'], 'valid'));
    $suite->same(['value' => 'bottom-right', 'valid' => true, 'horizontal' => 'right', 'vertical' => 'bottom', 'x' => 1, 'y' => 1], $data['position']);
    foreach (['width', 'rating', 'buttons', 'colours', 'textSize', 'stars'] as $key) $suite->same($values[$key], $data[$key]);
    $read = $success($execute('{ entries(id: [' . $data['id'] . ']) { ... on ' . $entryType->handle . '_Entry { ' . $selection . ' } } }'));
    $suite->same($data, $read['entries'][0]);
    $assertStored((int)$data['id'], $values);
});

$suite->test('Width GraphQL preserves value and label arguments', function() use ($suite, $mutate, $success, $execute, $entryType, $fields) {
    $id = $success($mutate(['width' => '50']))['saved']['id'];
    $handle = $fields['width']->handle;
    $result = $success($execute('{ entries(id: [' . $id . ']) { ... on ' . $entryType->handle . '_Entry { identity: ' . $handle . ' label: ' . $handle . '(label: true) } } }'));
    $suite->same(['identity' => '50', 'label' => '50%'], $result['entries'][0]);
});

$suite->test('GraphQL updates distinguish omitted fields from explicit clears', function() use ($suite, $mutate, $success, $assertStored) {
    $original = ['choice' => 'one', 'multi' => ['one'], 'position' => 'top-left', 'width' => '25', 'rating' => 4];
    $id = (int)$success($mutate($original))['saved']['id'];
    $success($mutate(['rating' => 2], $id));
    $assertStored($id, array_replace($original, ['rating' => 2]));
    $cleared = ['choice' => null, 'multi' => [], 'position' => null, 'width' => null, 'rating' => null];
    $data = $success($mutate($cleared, $id))['saved'];
    $suite->same([], $data['multi']);
    $suite->same(null, $data['choice']['value']);
    $suite->same(null, $data['position']['value']);
    $suite->same(null, $data['rating']);
    $assertStored($id, array_fill_keys(array_keys($cleared), null));
});

$suite->test('GraphQL fresh Rating defaults and explicit null have distinct meanings', function() use ($suite, $mutate, $success, $assertStored) {
    $defaulted = $success($mutate([]))['saved'];
    $suite->same(3, $defaulted['rating']);
    $cleared = $success($mutate(['rating' => null]))['saved'];
    $suite->same(null, $cleared['rating']);
    $assertStored((int)$cleared['id'], ['rating' => null]);
});

foreach ([['choice' => 'removed'], ['choice' => 'disabled'], ['multi' => ['one', 'removed']], ['multi' => ['disabled']], ['multi' => ['0', 'one', 'two']], ['position' => 'invalid'], ['width' => 'invalid'], ['rating' => 6], ['rating' => -1], ['rating' => 2.5], ['rating' => 'bad']] as $invalid) {
    $suite->test('GraphQL rejects invalid mutation ' . json_encode($invalid), function() use ($suite, $invalid, $mutate, $success, $assertStored) {
        $original = ['choice' => 'one', 'multi' => ['one'], 'position' => 'top-left', 'width' => '25', 'rating' => 4];
        $id = (int)$success($mutate($original))['saved']['id'];
        $result = $mutate($invalid, $id);
        $suite->check(!empty($result['errors']), 'Invalid mutation unexpectedly succeeded.');
        $suite->same(null, $result['data']['saved'] ?? null, 'Failed mutation returned saved content.');
        $assertStored($id, $original);
    });
}

$suite->test('GraphQL exposes unavailable stored identities without losing metadata validity', function() use ($suite, $fields, $section, $execute, $success, $selection, $entryType) {
    $entry = ButtonBoxFixtures::entry($section, [$fields['choice']->handle => 'removed', $fields['multi']->handle => ['0', 'removed'], $fields['position']->handle => 'removed']);
    ButtonBoxFixtures::save($entry, false);
    $data = $success($execute('{ entries(id: [' . $entry->id . ']) { ... on ' . $entryType->handle . '_Entry { ' . $selection . ' } } }'))['entries'][0];
    $suite->same('removed', $data['choice']['value']);
    $suite->same(false, $data['choice']['valid']);
    $suite->same(['0', 'removed'], array_column($data['multi'], 'value'));
    $suite->same([true, false], array_column($data['multi'], 'valid'));
    $suite->same(false, $data['position']['valid']);
});

$suite->test('GraphQL field filters use stored numeric and JSON query conditions', function() use ($suite, $fields, $execute, $success, $mutate) {
    $first = $success($mutate(['choice' => '0', 'multi' => ['0', 'one'], 'rating' => 2]))['saved']['id'];
    $second = $success($mutate(['choice' => 'one', 'multi' => ['one'], 'rating' => 5]))['saved']['id'];
    $third = $success($mutate(['multi' => [], 'rating' => null]))['saved']['id'];
    $ids = implode(', ', [$first, $second, $third]);
    foreach ([['choice', '["0"]', [$first]], ['multi', '["0"]', [$first]], ['multi', '[":empty:"]', [$third]], ['rating', '[">= 4"]', [$second]]] as [$key, $argument, $expected]) {
        $data = $success($execute('{ entries(id: [' . $ids . '], ' . $fields[$key]->handle . ': ' . $argument . ') { id } }'));
        $suite->same($expected, array_column($data['entries'], 'id'));
    }
});

$suite->test('GraphQL enforces required Rating and unique multi-choice minimums without overwriting content', function() use ($suite, $fields, $limited, $requiredSection, $execute, $success) {
    $entry = ButtonBoxFixtures::entry($requiredSection, [$limited->handle => ['0', 'one'], $fields['rating']->handle => 4]);
    ButtonBoxFixtures::save($entry);
    $type = $requiredSection->getEntryTypes()[0];
    $query = 'mutation($id: ID, $multi: [String], $rating: Int) { saved: save_' . $requiredSection->handle . '_' . $type->handle . '_Entry(id: $id, ' . $limited->handle . ': $multi, ' . $fields['rating']->handle . ': $rating) { id } }';
    $valid = ['id' => $entry->id, 'multi' => ['0', 'one'], 'rating' => 4];
    $success($execute($query, $valid));
    foreach ([['multi' => []], ['multi' => ['one']], ['multi' => ['one', 'one']], ['rating' => null]] as $invalid) {
        $result = $execute($query, array_replace($valid, $invalid));
        $suite->check(!empty($result['errors']), 'Required/minimum validation was bypassed.');
        $fresh = ButtonBoxFixtures::reload($entry->id);
        $suite->same(['0', 'one'], ButtonBoxFixtures::raw($fresh, $limited->handle));
        $suite->same(4, ButtonBoxFixtures::raw($fresh, $fields['rating']->handle));
    }
    ButtonBoxFixtures::assertFreshProcess([
        ['id' => $entry->id, 'handle' => $limited->handle, 'class' => VisualMultiChoice::class, 'stored' => ['0', 'one'], 'serialized' => ['0', 'one']],
        ['id' => $entry->id, 'handle' => $fields['rating']->handle, 'class' => Rating::class, 'stored' => 4, 'serialized' => 4],
    ]);
});

$suite->test('Disabled stored choices retain their identity and metadata during GraphQL reads', function() use ($suite, $fields, $section, $execute, $success, $selection, $entryType) {
    $entry = ButtonBoxFixtures::entry($section, [$fields['choice']->handle => 'disabled', $fields['multi']->handle => ['disabled']]);
    ButtonBoxFixtures::save($entry, false);
    $data = $success($execute('{ entries(id: [' . $entry->id . ']) { ... on ' . $entryType->handle . '_Entry { ' . $selection . ' } } }'))['entries'][0];
    foreach ([$data['choice'], $data['multi'][0]] as $option) {
        $suite->same('disabled', $option['value']);
        $suite->same(true, $option['disabled']);
        $suite->same(false, $option['valid']);
    }
    ButtonBoxFixtures::assertFreshProcess([
        ['id' => $entry->id, 'handle' => $fields['choice']->handle, 'class' => VisualChoice::class, 'stored' => 'disabled', 'serialized' => 'disabled'],
        ['id' => $entry->id, 'handle' => $fields['multi']->handle, 'class' => VisualMultiChoice::class, 'stored' => ['disabled'], 'serialized' => ['disabled']],
    ]);
});

$suite->finish();
