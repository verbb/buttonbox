<?php

require dirname(__DIR__) . '/support/isolated.php';
require dirname(__DIR__) . '/support/LifecycleFixtures.php';
foreach (json_decode(file_get_contents($argv[1]), true, 512, JSON_THROW_ON_ERROR) as $expected) {
    ButtonBoxLifecycleFixtures::assertReadback($suite, $expected);
}
echo "Fresh-process lifecycle readback passed.\n";
