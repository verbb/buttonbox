import { defineScreenshotScenario } from '@verbb/craft-screenshots/api';

import { seedButtonBoxFixture } from '../../support/fixtures';
import { createButtonBoxFrameStep } from '../../support/presets';

let entryEditRoute = '/admin/entries';

export default defineScreenshotScenario({
    id: 'button-box-feature-tour-overview',
    output: 'feature-tour/button-box-controls.png',
    route: () => entryEditRoute,
    viewport: {
        width: 900,
        height: 700,
        deviceScaleFactor: 2,
    },
    expectedOutput: {
        width: 1467,
        height: 569,
    },
    async setup(context) {
        const fixture = await seedButtonBoxFixture(context);
        entryEditRoute = fixture.entryEditRoute;
    },
    waitFor: [
        { type: 'loadState', state: 'networkidle' },
        { type: 'selector', selector: '.buttonbox-buttons', state: 'visible' },
        { type: 'selector', selector: '.buttonbox-colours', state: 'visible' },
    ],
    preSteps: [
        createButtonBoxFrameStep(),
        { type: 'wait', waitFor: { type: 'selector', selector: '#button-box-screenshot-frame', state: 'visible' } },
        { type: 'wait', waitFor: { type: 'timeout', ms: 250 } },
    ],
    target: {
        type: 'selector',
        selector: '#button-box-screenshot-frame',
        padding: 0,
    },
    caption: 'Button Box fields showing visual choices for buttons, widths, ratings, colours and text sizes.',
    intent: 'Recreates the production feature image with the current Craft 5 field controls in one compact, reusable frame.',
});
