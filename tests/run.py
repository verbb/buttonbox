#!/usr/bin/env python3
"""Run Craft tests with a new database, app root and internal Docker network."""

import argparse
import json
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import shutil
import signal
import subprocess
import tempfile
from threading import Thread
import time
import uuid
from urllib.parse import parse_qsl


class BrowserFixtureHandler(SimpleHTTPRequestHandler):
    def do_POST(self):
        # Echo the browser's native form body; never write to Craft or a database.
        body = self.rfile.read(int(self.headers.get('Content-Length', '0')))
        payload = json.dumps(parse_qsl(body.decode(), keep_blank_values=True)).encode()
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--vendor', type=Path, required=True)
    parser.add_argument('--php-image', required=True)
    parser.add_argument('--php-bin', default='php')
    parser.add_argument('--mysql-image', default='mysql:8.0')
    parser.add_argument('--suite', choices=['all', 'regressions', 'persistence', 'conversions', 'queries', 'graphql', 'rollback', 'lifecycle', 'legacy', 'assets', 'browser'], default='all')
    parser.add_argument('--browser-port', type=int, default=8765)
    parser.add_argument('--playwright', type=Path, help='Installed playwright package for an automated browser suite')
    parser.add_argument('--browsers', default='chromium,firefox,webkit')
    args = parser.parse_args()
    root = Path(__file__).resolve().parent.parent
    vendor = args.vendor.resolve()
    if args.playwright and not (args.playwright / 'index.mjs').is_file():
        parser.error('--playwright must point to an installed playwright package')
    if any(browser not in ['chromium', 'firefox', 'webkit'] for browser in args.browsers.split(',')):
        parser.error('--browsers must be a comma-separated list of chromium, firefox and webkit')
    if not (vendor / 'autoload.php').is_file() or not (vendor / 'craftcms/cms/bootstrap/console.php').is_file():
        parser.error('--vendor must contain installed Craft 5 dependencies')
    token = uuid.uuid4().hex
    name = 'buttonbox-tests-' + token[:12]
    label = 'com.verbb.buttonbox.test-run=' + token
    resources = []
    logs = root / '.cache' / 'buttonbox-tests'
    logs.mkdir(parents=True, exist_ok=True)
    log_path = logs / (token + '.log')

    def docker(*command, capture=False, check=True):
        return subprocess.run(['docker', *command], check=check, text=True,
                              stdout=subprocess.PIPE if capture else None,
                              stderr=subprocess.STDOUT if capture else None)

    def interrupt(_signum, _frame):
        raise KeyboardInterrupt

    signal.signal(signal.SIGTERM, interrupt)
    with tempfile.TemporaryDirectory(prefix='buttonbox-tests-') as temporary:
        app = Path(temporary)
        (app / 'owner.json').write_text(json.dumps({'token': token, 'source': '/plugin'}))
        try:
            # Never connect to DDEV or mount a developer app/configuration/DB volume.
            resources.append(('network', name))
            docker('network', 'create', '--internal', '--label', label, name, capture=True)
            resources.append(('container', name + '-db'))
            docker('run', '-d', '--name', name + '-db', '--label', label,
                   '--network', name, '--network-alias', 'database',
                   '--tmpfs', '/var/lib/mysql', '-e', 'MYSQL_ROOT_PASSWORD=isolated-root',
                   '-e', 'MYSQL_DATABASE=buttonbox_test', '-e', 'MYSQL_USER=buttonbox_test',
                   '-e', 'MYSQL_PASSWORD=isolated-test', args.mysql_image, capture=True)
            resources.append(('container', name + '-php'))
            docker('run', '-d', '--name', name + '-php', '--label', label, '--network', name,
                   '--mount', f'type=bind,src={root},dst=/plugin,readonly',
                   '--mount', f'type=bind,src={vendor},dst=/dependencies/vendor,readonly',
                   '--mount', f'type=bind,src={app},dst=/app',
                   '-e', 'BUTTONBOX_TEST_TOKEN=' + token,
                   '--entrypoint', 'sleep', args.php_image, 'infinity', capture=True)
            print('Waiting for the disposable database…', flush=True)
            for _ in range(60):
                ready = docker('exec', name + '-db', 'mysqladmin', 'ping', '-h', '127.0.0.1',
                               '-uroot', '-pisolated-root', capture=True, check=False)
                if ready.returncode == 0:
                    break
                time.sleep(1)
            else:
                raise RuntimeError('The disposable database did not become ready.')

            def php(*command, check=True, quiet=False):
                result = docker('exec', '-w', '/app', name + '-php', args.php_bin, *command, capture=True, check=False)
                with log_path.open('a') as log:
                    log.write('RUN ' + ' '.join(command) + '\n' + result.stdout)
                if not quiet or result.returncode:
                    print(result.stdout, end='', flush=True)
                if check and result.returncode:
                    raise RuntimeError('PHP command failed; see ' + str(log_path))
                return result

            php('/plugin/tests/runtime/prepare.php')
            print('Installing Craft in the disposable application…', flush=True)
            php('/plugin/tests/runtime/craft.php', 'install/craft', '--interactive=0',
                '--username=admin', '--email=admin@example.test', '--password=isolated-test-password',
                '--siteName=Button Box Tests', '--siteUrl=https://buttonbox.test', '--language=en-US', quiet=True)
            php('/plugin/tests/runtime/craft.php', 'plugin/install', 'buttonbox', '--interactive=0')
            php('/plugin/tests/runtime/verify.php')
            if args.suite == 'browser':
                php('/plugin/tests/browser.php', '/app')
                shutil.copytree(root / 'src/web/assets/cp/dist', app / 'web/dist')
                shutil.copyfile(vendor / 'craftcms/cms/src/web/assets/jquery/dist/jquery.js', app / 'web/jquery.js')
                shutil.copyfile(vendor / 'craftcms/cms/src/web/assets/garnish/dist/garnish.js', app / 'web/garnish.js')
                # Serve only this run's generated fixture, bound to loopback.
                with ThreadingHTTPServer(('127.0.0.1', args.browser_port), partial(BrowserFixtureHandler, directory=str(app / 'web'))) as server:
                    url = f'http://127.0.0.1:{server.server_port}/'
                    print(f'Browser fixture: {url}', flush=True)
                    if not args.playwright:
                        print('Ctrl-C to clean up.', flush=True)
                        server.serve_forever()
                    else:
                        thread = Thread(target=server.serve_forever, daemon=True)
                        thread.start()
                        try:
                            submissions = logs / (token + '-submissions.json')
                            result = subprocess.run(['node', str(root / 'tests/browser-contracts.mjs'), url,
                                                     str(args.playwright.resolve()), args.browsers, str(submissions)],
                                                    text=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
                            with log_path.open('a') as log:
                                log.write(result.stdout)
                            print(result.stdout, end='', flush=True)
                            if result.returncode:
                                raise RuntimeError('Browser contracts failed; see ' + str(log_path))
                            php('/plugin/tests/browser-submission.php', '/plugin/' + str(submissions.relative_to(root)))
                        finally:
                            server.shutdown()
                            thread.join()
                return
            suites = {
                'regressions': [('regressions.php', []), ('value-data.php', [])],
                'persistence': [('persistence.php', [])],
                'conversions': [('conversions.php', []), ('action-links.php', ['--persist'])],
                'queries': [('queries.php', [])],
                'graphql': [('graphql.php', [])],
                'rollback': [('conversion-rollback.php', [])],
                'lifecycle': [('lifecycle.php', []), ('duplication.php', [])],
                'legacy': [('legacy.php', [])],
                'assets': [('asset-images.php', [])],
            }
            scripts = suites.get(args.suite)
            if scripts is None:
                scripts = [item for group in suites.values() for item in group]
                scripts += [(f'{test}.php', []) for test in
                            ['smoke', 'position', 'width', 'visual-labels', 'dropdown', 'option-sets', 'gallery']]
                scripts += [('presets.php', ['--persist'])]
            failed = []
            for script, flags in scripts:
                print(f'RUN {script} {" ".join(flags)}', flush=True)
                if php('/plugin/tests/' + script, '/app', *flags, check=False).returncode:
                    failed.append(script)
            if failed:
                raise RuntimeError('Failed suites: ' + ', '.join(failed))
            print(f'PASS: {len(scripts)} scripts in a fresh isolated Craft installation.', flush=True)
        finally:
            # Include partially created resources after a failed start, but require matching ownership.
            for kind, resource in reversed(resources):
                inspected = docker(kind, 'inspect', resource, capture=True, check=False)
                if inspected.returncode:
                    continue
                data = json.loads(inspected.stdout)[0]
                labels = data.get('Labels', {}) if kind == 'network' else data['Config'].get('Labels', {})
                if labels.get('com.verbb.buttonbox.test-run') != token:
                    raise RuntimeError('Refusing cleanup of a resource owned by another run.')
                docker(kind, 'rm', *(['-f', '-v'] if kind == 'container' else []), resource, capture=True)


if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print('Stopped; owned test resources cleaned up.', flush=True)
