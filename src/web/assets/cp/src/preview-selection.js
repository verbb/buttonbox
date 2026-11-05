const checkedValues = ($inputs) => $inputs.filter(':checked').map((index, input) => input.value).get();

// Settings previews are re-rendered from the server after every change. Keep what the author
// clicked so selection colours stay visible, unless the configured defaults themselves change.
export function restorePreviewSelection($preview, state) {
    const $inputs = $preview.find('input[type=radio], input[type=checkbox]');
    const defaults = checkedValues($inputs).join('\n');
    if (state.defaults !== defaults) state.values = null;
    state.defaults = defaults;
    const enabled = $inputs.filter(':not(:disabled)').get();
    if (state.values && state.values.every((value) => enabled.some((input) => input.value === value))) {
        $inputs.each((index, input) => { input.checked = state.values.includes(input.value); });
        // The inputs' own change handlers refresh their selected styling.
        ($inputs.filter(':checked')[0] || $inputs[0])?.dispatchEvent(new Event('change', { bubbles: true }));
    }
    $inputs.on('change', () => { state.values = checkedValues($inputs); });
}
