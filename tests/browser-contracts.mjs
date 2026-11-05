import assert from 'node:assert/strict';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { runInNewContext } from 'node:vm';

const [url, packagePath, engines = 'chromium,firefox,webkit', output] = process.argv.slice(2);
if (!url || !packagePath) throw new Error('Pass the isolated fixture URL and installed playwright package directory.');
const playwright = await import(pathToFileURL(resolve(packagePath, 'index.mjs')));
// The CLI-compatible scenario is also executable by this standalone multi-browser runner.
const sharedScenario = runInNewContext(readFileSync(new URL('./browser.mjs', import.meta.url), 'utf8'));
const submissions = [];
let failures = 0;
let passes = 0;
for (const engine of engines.split(',')) {
    const browser = await playwright[engine].launch();
    const test = async (name, callback) => {
        const page = await browser.newPage();
        page.setDefaultTimeout(5000);
        const errors = [];
        page.on('pageerror', (error) => errors.push(error.message));
        try {
            await page.goto(url);
            await page.evaluate(() => window.Craft.ButtonBoxReady);
            await page.waitForFunction(() => document.querySelector('buttonbox-dropdown')?.onSelection);
            await callback(page);
            assert.deepEqual(errors, [], 'Browser errors');
            console.log(`PASS ${engine}: ${name}`);
            passes++;
        } catch (error) {
            console.error(`FAIL ${engine}: ${name}\n${error.stack}`);
            failures++;
        } finally {
            await page.close();
        }
    };
    const select = async (page, id, label) => {
        await page.locator(`#${id}`).scrollIntoViewIfNeeded();
        await settle(page);
        const trigger = page.locator(`#${id}`).getByRole('button');
        const panelId = await trigger.getAttribute('aria-controls');
        await trigger.click();
        const option = page.getByRole('option', { name: label, exact: true }).and(page.locator(`[id^="${panelId}-option-"]`));
        await option.click();
        await option.waitFor({ state: 'hidden' });
    };
    const radio = (page, id, label) => page.locator(`#${id}`).getByRole('radio', { name: label, exact: true }).press('Space');
    const settle = (page) => page.evaluate(() => new Promise((done) => requestAnimationFrame(() => requestAnimationFrame(done))));
    const initial = { choice: 'alpha', multi: ['alpha'], dropdown: 'alpha', width: '50', position: 'center', rating: 2 };
    const submit = async (page, expected, name) => {
        const responsePromise = page.waitForResponse((response) => response.request().method() === 'POST' && response.url().endsWith('/submitted.html'));
        await page.getByRole('button', { name: 'Submit', exact: true }).click();
        const response = await responsePromise;
        const query = response.request().postData();
        const data = await page.evaluate(() => [...new FormData(document.querySelector('#fixture'))]);
        assert.deepEqual(await response.json(), data, 'Received HTTP form body differs from native form data');
        assert.deepEqual([...new URLSearchParams(query)], data, 'Submitted values differ from native form data');
        submissions.push({ name: `${engine}: ${name}`, query, expected });
    };

    await test('shared submission/reset/remount scenario', async (page) => {
        const result = await sharedScenario(page);
        console.log(`  ${result.passed} shared assertions; browser ${result.browser}`);
    });
    await test('field settings serialize the same values as a native form submission', async (page) => {
        await page.goto(new URL('settings.html', url).href);
        await page.waitForFunction(() => document.querySelectorAll('[data-bb-kit-values]').length === 5);
        const values = (name) => page.evaluate((formName) => {
            const form = document.querySelector(`#settings-${formName}`);
            // PHP keeps the last repeated scalar, as with lightswitch fallbacks.
            const lastWins = (entries) => Object.fromEntries(entries.filter(([, value]) => typeof value === 'string'));
            return { native: lastWins([...new FormData(form)]), serialized: lastWins($(form).serializeArray().map(({ name: key, value }) => [key, value])) };
        }, name);
        const change = (name, value) => page.evaluate(([controlName, nextValue]) => {
            const control = document.querySelector(`pk-select[name="${controlName}"], pk-input[name="${controlName}"], pk-color-input[name="${controlName}"], pk-lightswitch[name="${controlName}"]`);
            if (control.localName === 'pk-lightswitch') control.checked = nextValue;
            else control.value = nextValue;
            control.dispatchEvent(new Event('change', { bubbles: true }));
        }, [name, value]);
        const changes = {
            visual: { 'types[visual][appearance][size]': ['lg', 'lg'], 'types[visual][appearance][textColor]': ['#112233', '#112233'], 'types[visual][imageFit]': ['contain', 'contain'], 'types[visual][appearance][showLabels]': [false, '0'] },
            width: { 'types[width][labelDisplay]': ['all', 'all'], 'types[width][appearance][radius]': ['4', '4'], 'types[width][showTooltips]': [true, '1'] },
            position: { 'types[position][appearance][size]': ['lg', 'lg'], 'types[position][appearance][selectionColor]': ['#445566', '#445566'], 'types[position][showTooltips]': [true, '1'] },
            rating: { 'types[rating][symbol]': ['heart', 'heart'], 'types[rating][activeColor]': ['#778899', '#778899'], 'types[rating][showLabels]': [false, '0'] },
            actions: { 'types[actions][size]': ['lg', 'lg'], 'types[actions][alignment]': ['end', 'end'], 'types[actions][spacing]': ['relaxed', 'relaxed'] },
        };
        for (const [form, controls] of Object.entries(changes)) {
            let { native, serialized } = await values(form);
            assert.deepEqual(serialized, native, `${form} initial settings differ`);
            for (const [name, [value, posted]] of Object.entries(controls)) {
                await change(name, value);
                ({ native, serialized } = await values(form));
                assert.equal(serialized[name], posted, `${name} was not serialized`);
                assert.deepEqual(serialized, native, `${form} settings differ after changing ${name}`);
            }
        }
        // Rating has no option rows, so mirroring its values must not read as an unsaved edit.
        await page.reload();
        await page.waitForFunction(() => document.querySelectorAll('[data-bb-kit-values]').length === 5);
        assert.ok(await page.evaluate(() => { const form = $('#settings-rating'); return form.data('initialSerializedValue') === form.serialize(); }), 'Mirroring Rating settings marked the form as edited');
    });
    await test('choice and multi-choice visual selection follows native values and reset', async (page) => {
        await radio(page, 'choice', 'Beta');
        await page.locator('#multi').getByRole('checkbox', { name: 'Beta', exact: true }).press('Space');
        assert.deepEqual(await page.locator('#choice .is-selected input').evaluateAll((nodes) => nodes.map((node) => node.value)), ['base64:YmV0YSAmICJxdW90ZWQi']);
        assert.equal(await page.locator('#multi .is-selected').count(), 2);
        await page.getByRole('button', { name: 'Reset', exact: true }).click();
        await settle(page);
        assert.deepEqual(await page.locator('#choice .is-selected input').evaluateAll((nodes) => nodes.map((node) => node.value)), ['base64:YWxwaGE=']);
        assert.equal(await page.locator('#multi .is-selected').count(), 1);
    });
    await test('native submissions for persistence: selected, cleared and reset', async (page) => {
        await radio(page, 'choice', 'Beta');
        await page.locator('#multi').getByRole('checkbox', { name: 'Beta', exact: true }).press('Space');
        await select(page, 'dropdown', 'Beta');
        await radio(page, 'width', '75%');
        await radio(page, 'position', 'Bottom right');
        await radio(page, 'rating', '4 of 5');
        await submit(page, { choice: 'beta & "quoted"', multi: ['alpha', 'beta & "quoted"'], dropdown: 'beta & "quoted"', width: '75', position: 'bottom-right', rating: 4 }, 'selected');
        await select(page, 'dropdown', 'None');
        await radio(page, 'rating', 'Clear rating');
        for (const label of ['Alpha', 'Beta']) await page.locator('#multi').getByRole('checkbox', { name: label, exact: true }).press('Space');
        await submit(page, { choice: 'beta & "quoted"', multi: null, dropdown: null, width: '75', position: 'bottom-right', rating: null }, 'cleared');
        await page.getByRole('button', { name: 'Reset', exact: true }).click();
        await settle(page);
        await submit(page, initial, 'reset');
    });
    await test('moving a dropdown to another form removes the old reset listener', async (page) => {
        await select(page, 'dropdown', 'Beta');
        await page.locator('#dropdown').evaluate((field) => {
            const form = document.createElement('form');
            form.id = 'second';
            const reset = document.createElement('button');
            reset.type = 'reset';
            reset.textContent = 'Reset second';
            document.body.append(form);
            form.append(field, reset);
        });
        await settle(page);
        await page.getByRole('button', { name: 'Reset', exact: true }).click();
        await settle(page);
        assert.equal(await page.locator('#dropdown [data-dropdown-value]').inputValue(), 'base64:YmV0YSAmICJxdW90ZWQi');
        await page.getByRole('button', { name: 'Reset second', exact: true }).click();
        await settle(page);
        assert.equal(await page.locator('#dropdown [data-dropdown-value]').inputValue(), 'base64:YWxwaGE=');
        assert.equal(await page.locator('#dropdown pk-select').evaluate((select) => select.value), 'base64:YWxwaGE=');
    });
    await test('read-only controls retain their display through reset and remount', async (page) => {
        const display = () => page.locator('[id^="static-"]').evaluateAll((fields) => fields.map((field) => ({
            id: field.id,
            selected: [...field.querySelectorAll('.is-selected input')].map((input) => input.value),
            label: field.querySelector('.buttonbox-width-field__value')?.textContent,
            disabled: [...field.querySelectorAll('input')].every((input) => input.disabled),
        })));
        const initialDisplay = await display();
        assert.equal(initialDisplay.length, 5);
        assert.ok(initialDisplay.every((field) => field.disabled));
        await page.getByRole('button', { name: 'Reset', exact: true }).click();
        await settle(page);
        assert.deepEqual(await display(), initialDisplay);
        await page.getByRole('button', { name: 'Remount', exact: true }).click();
        await page.getByRole('button', { name: 'Reset', exact: true }).click();
        await settle(page);
        assert.deepEqual(await display(), initialDisplay);
        assert.equal(await page.evaluate(() => [...new FormData(document.querySelector('#fixture')).keys()].some((key) => key.includes('static'))), false);
    });
    await test('rapid detach/reconnect and repeated classic loading do not multiply events', async (page) => {
        await page.locator('#dropdown buttonbox-dropdown').evaluate(async (element) => {
            const parent = element.parentElement;
            for (let index = 0; index < 8; index++) { element.remove(); parent.append(element); }
            for (let index = 0; index < 3; index++) {
                const script = document.createElement('script');
                script.src = '/dist/buttonbox.js';
                await new Promise((done, reject) => { script.onload = done; script.onerror = reject; document.head.append(script); });
            }
            window.events = [];
        });
        await settle(page);
        await select(page, 'dropdown', 'Beta');
        assert.deepEqual(await page.evaluate(() => window.events.map(([type]) => type)), ['input', 'change']);
        await page.locator('#dropdown').getByRole('button').click();
        assert.equal(await page.getByRole('option', { name: /^Disabled/ }).getAttribute('aria-disabled'), 'true');
        await page.keyboard.press('Escape');
        await page.waitForFunction(() => document.querySelector('#dropdown pk-select').matches(':focus-within'));
    });
    await browser.close();
}
if (output) writeFileSync(output, JSON.stringify(submissions, null, 2) + '\n');
console.log(`${passes} cases passed; ${failures} failed.`);
process.exitCode = failures ? 1 : 0;
