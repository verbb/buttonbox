<?php

function assertButtonBoxTestOwnership(): void
{
    $token = getenv('BUTTONBOX_TEST_TOKEN');
    $owner = json_decode((string)@file_get_contents('/app/owner.json'), true);
    if (!$token || !preg_match('/^[a-f0-9]{32}$/', $token) || ($owner['token'] ?? null) !== $token || ($owner['source'] ?? null) !== '/plugin' || realpath(dirname(__DIR__, 2)) !== '/plugin' || is_link('/app')) {
        throw new RuntimeException('This suite requires the disposable runtime created by tests/run.py.');
    }
}
