import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import { defineConfig } from 'vite';

const root = resolve(import.meta.dirname, 'src/web/assets/cp');
const entries = ['input.js', 'settings.js', 'legacy.js', 'settings-triggers.js', 'buttonbox.css', 'settings.css', 'legacy.css'];

export default defineConfig({
    root,
    input: Object.fromEntries(entries.map((entry) => [entry, resolve(root, 'src', entry)])),
    plugins: [{
        name: 'buttonbox-classic-loaders',
        generateBundle() {
            // Craft executes these as classic scripts, including in AJAX slide-outs.
            // Preserve native import() rather than adding an ESM preload-helper import.
            for (const name of ['buttonbox.js', 'settings-loader.js']) {
                this.emitFile({ type: 'asset', fileName: name, source: readFileSync(resolve(root, 'src', name), 'utf8') });
            }
        },
    }],
    build: {
        outDir: resolve(root, 'dist'),
        emptyOutDir: true,
        assetsDir: '',
        cssMinify: 'esbuild',
        cssTarget: ['chrome61', 'safari10'],
        minify: 'oxc',
        sourcemap: true,
        target: 'es2015',
        rolldownOptions: {
            output: {
                entryFileNames: '[name]',
                chunkFileNames: 'chunks/[name]-[hash].js',
                assetFileNames: '[name][extname]',
                format: 'es',
            },
        },
    },
});
