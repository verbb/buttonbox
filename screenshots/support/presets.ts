import type { ScreenshotStep } from '@verbb/craft-screenshots/types';

/** Compose the real field controls into the same compact overview used by the production page. */
export function createButtonBoxFrameStep(): ScreenshotStep {
    return {
        type: 'evaluate',
        expression: `
            (() => {
                document.getElementById('button-box-screenshot-frame')?.remove();

                const handles = [
                    'docsScreenshotButtons',
                    'docsScreenshotWidth',
                    'docsScreenshotStars',
                    'docsScreenshotColours',
                    'docsScreenshotTextSize',
                ];
                const fields = handles.map((handle) => {
                    const input = document.querySelector('[name="fields[' + handle + ']"]')
                        || document.querySelector('#fields-' + handle)
                        || document.querySelector('#' + handle);
                    return input?.closest('.field');
                });

                if (fields.some((field) => !(field instanceof HTMLElement))) {
                    throw new Error('One or more Button Box fields were not found.');
                }

                const frame = document.createElement('div');
                frame.id = 'button-box-screenshot-frame';
                frame.style.cssText = [
                    'position:fixed',
                    'left:0',
                    'top:0',
                    'width:734px',
                    'height:285px',
                    'box-sizing:border-box',
                    'padding:30px',
                    'display:grid',
                    'grid-template-columns:1fr 1fr',
                    'grid-auto-rows:min-content',
                    'gap:28px 42px',
                    'overflow:hidden',
                    'background:#ffffff',
                    'z-index:2147483646',
                ].join(';');

                fields.forEach((field, index) => {
                    field.style.margin = '0';
                    field.style.minWidth = '0';
                    field.style.alignSelf = 'start';
                    if (index === 0) {
                        field.style.gridColumn = '1 / -1';
                    }
                    frame.appendChild(field);
                });

                document.body.appendChild(frame);
                document.documentElement.style.background = '#ffffff';
                document.body.style.margin = '0';
                document.body.style.overflow = 'hidden';
                window.scrollTo(0, 0);

                const colourButton = frame.querySelector('.buttonbox-colours .menubtn');
                if (colourButton instanceof HTMLElement) {
                    colourButton.click();
                }
            })();
        `,
    };
}
