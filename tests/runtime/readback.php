<?php

require dirname(__DIR__) . '/support/isolated.php';
foreach (json_decode(file_get_contents($argv[1]), true, 512, JSON_THROW_ON_ERROR) as $expected) {
    $entry = ButtonBoxFixtures::reload($expected['id']);
    $field = $entry->getFieldLayout()->getFieldByHandle($expected['handle']);
    $suite->same($expected['class'], $field::class, 'Field class changed.');
    $suite->same($expected['stored'], ButtonBoxFixtures::raw($entry, $expected['handle']), 'Stored content changed.');
    $suite->same($expected['serialized'], $field->serializeValue($entry->getFieldValue($field->handle), $entry), 'Readback changed normalized content.');
}
echo "Fresh-process readback passed.\n";
