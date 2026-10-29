<?php

class ButtonBoxTestSuite
{
    private int $passed = 0;
    private int $failed = 0;

    public function test(string $name, callable $test): void
    {
        try {
            $test();
            $this->passed++;
            echo "PASS $name\n";
        } catch (Throwable $exception) {
            $this->failed++;
            fwrite(STDERR, "FAIL $name: {$exception->getMessage()}\n{$exception->getTraceAsString()}\n");
        }
    }

    public function same(mixed $expected, mixed $actual, string $message = ''): void
    {
        if ($expected !== $actual) {
            throw new RuntimeException($message . ' expected ' . var_export($expected, true) . ', got ' . var_export($actual, true));
        }
    }

    public function check(bool $condition, string $message): void
    {
        $this->same(true, $condition, $message);
    }

    public function finish(): never
    {
        echo "{$this->passed} passed; {$this->failed} failed.\n";
        exit($this->failed ? 1 : 0);
    }
}
