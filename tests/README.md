# Tests

The PHP runner requires Python 3, Docker, Composer, a MySQL 8 image, and a Linux PHP image with Craft's required extensions, `proc_open`, and `sleep`. Install the test dependencies with PHP 8.2 or later:

```shell
composer install --working-dir=tests/runtime
python3 tests/run.py --vendor tests/runtime/vendor --php-image your-craft-php-image
```

Replace `your-craft-php-image` with your image name. Use `--php-bin php8.3` if its PHP executable has a versioned name. The runner creates a fresh Craft application and database on an internal Docker network, mounts source and dependencies read-only, and removes its containers, network and temporary application afterwards. It does not use an existing site's configuration or database. Logs are saved under `.cache/buttonbox-tests/`.

Use `--suite regressions`, `--suite persistence`, `--suite conversions`, `--suite queries`, `--suite graphql`, `--suite rollback`, or `--suite lifecycle` for a focused run. Tests that save content or configuration require this disposable runtime. The default run also includes the existing component scripts, Action Links reuse and conversion and preset persistence checks.

Run the standalone JavaScript checks with Node.js:

```shell
node --experimental-default-type=module tests/visual-options.mjs
node --experimental-default-type=module tests/position-navigation.mjs
```

For browser checks, install Playwright CLI and a supported browser, then start a disposable fixture:

```shell
python3 tests/run.py --vendor tests/runtime/vendor --php-image your-craft-php-image --suite browser
```

In another terminal, open the printed URL and run the checks:

```shell
playwright-cli --session buttonbox-browser open http://127.0.0.1:8765/
playwright-cli --session buttonbox-browser run-code "$(cat tests/browser.mjs)"
playwright-cli --session buttonbox-browser close
```

Use `--browser-port 0` to choose an available port. The loopback server echoes form submissions without saving content. Stop the fixture with Ctrl-C to remove its owned runtime.

Run the automated browser checks with Node.js, an installed `playwright` package and its Chromium, Firefox and WebKit browsers:

```shell
python3 tests/run.py --vendor tests/runtime/vendor --php-image your-craft-php-image --suite browser --browser-port 0 --playwright /path/to/node_modules/playwright
```

Use `--browsers chromium` for one browser. The automated run also checks captured submissions through Craft saves, then cleans up. Omit `--playwright` to leave the disposable fixture open for manual inspection; stop it with Ctrl-C.
