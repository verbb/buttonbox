<?php

require dirname(__DIR__) . '/support/isolated.php';
require dirname(__DIR__) . '/support/ConversionFixtures.php';
$expected = json_decode(file_get_contents($argv[1]), true, 512, JSON_THROW_ON_ERROR);
$actual = ButtonBoxConversionFixtures::snapshot();
foreach ($expected as $part => $value) {
    $suite->check($value === $actual[$part], "Rollback state differs in a fresh process: $part.");
}
echo "Fresh-process rollback readback passed.\n";
