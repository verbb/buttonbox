// Craft's slideouts and delta forms submit jQuery serialize(), which skips form-associated Kit controls.
export function syncKitValues($container) {
    let $values = $container.children('[data-bb-kit-values]');
    if (!$values.length) $values = $('<div hidden data-bb-kit-values/>').appendTo($container);
    $values.empty();
    $container.find('[name]').each((index, control) => {
        if (!control.localName.startsWith('pk-') || control.matches(':disabled')) return;
        if ($(control).closest('[data-bb-preview], [data-actions-preview]').length) return;
        $('<input/>', {
            type: 'hidden', name: control.getAttribute('name'),
            value: control.localName === 'pk-lightswitch' ? (control.checked ? '1' : '0') : control.value,
        }).appendTo($values);
    });
}

// Craft records its unsaved-changes baseline before settings scripts build their submitted inputs
// (Kit mirrors, ordered option rows). Call before setup and run the result afterwards; the baseline
// only moves when the form was unchanged beforehand, so real edits still prompt.
export function trackSetupChanges($container) {
    const $form = $container.closest('form');
    // Slideouts may supply their own serializer, matching Craft's dirty check.
    const serialize = () => ($form.data('serializer') || (() => $form.serialize()))();
    const pristine = $form.length > 0 && $form.data('initialSerializedValue') === serialize();
    return () => {
        if (pristine) $form.data('initialSerializedValue', serialize());
    };
}
