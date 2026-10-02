import { resolve } from 'node:path';

import { defineConfig } from 'vite';

const root = resolve(import.meta.dirname, 'src/web/assets/cp');
const builds = {
    buttonbox: 'buttonbox.js',
    css: 'buttonbox.css',
    'settings-triggers': 'settings-triggers.js',
};

export default defineConfig(({ mode }) => {
    const input = builds[mode];

    if (!input) {
        throw new Error(`Unknown asset build mode: ${mode}`);
    }

    const isCssBuild = mode === 'css';
    let output;

    if (isCssBuild) {
        output = {
            assetFileNames: '[name][extname]',
        };
    } else {
        output = {
            codeSplitting: false,
            entryFileNames: '[name].js',
            format: 'iife',
        };
    }

    return {
        root,
        input: resolve(root, 'src', input),
        build: {
            outDir: resolve(root, 'dist'),
            emptyOutDir: isCssBuild,
            assetsDir: '',
            cssMinify: 'esbuild',
            cssTarget: ['chrome61', 'safari10'],
            minify: 'oxc',
            sourcemap: !isCssBuild,
            target: 'es2015',
            rolldownOptions: {
                output,
            },
        },
    };
});
