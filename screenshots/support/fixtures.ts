import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { ScreenshotSetupContext } from '@verbb/craft-screenshots/types';

type ButtonBoxFixture = {
    entryEditRoute: string;
};

const supportDir = dirname(fileURLToPath(import.meta.url));
const seedScript = readFileSync(join(supportDir, 'seed', 'seed-button-box-entry.php'), 'utf8');

/** Seed the visual Button Box controls used by the feature-page overview. */
export async function seedButtonBoxFixture(context: ScreenshotSetupContext): Promise<ButtonBoxFixture> {
    const output = await context.runCraftScript(seedScript, { label: 'seed-button-box-entry' });
    const fixture = JSON.parse(output.trim()) as ButtonBoxFixture;

    if (!fixture.entryEditRoute) {
        throw new Error(`Invalid Button Box fixture payload: ${output}`);
    }

    return fixture;
}
