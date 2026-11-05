// Craft's slideouts and delta forms submit jQuery serialize(), which skips form-associated Kit controls.
export function syncKitValues($container) {
    let $values = $container.children('[data-bb-kit-values]');
    const first = !$values.length;
    const $form = $container.closest('form');
    const before = first ? $form.serialize() : null;
    if (first) $values = $('<div hidden data-bb-kit-values/>').appendTo($container);
    $values.empty();
    $container.find('[name]').each((index, control) => {
        if (!control.localName.startsWith('pk-') || control.matches(':disabled')) return;
        if ($(control).closest('[data-bb-preview], [data-actions-preview]').length) return;
        $('<input/>', {
            type: 'hidden', name: control.getAttribute('name'),
            value: control.localName === 'pk-lightswitch' ? (control.checked ? '1' : '0') : control.value,
        }).appendTo($values);
    });
    // Craft may capture its unsaved-changes baseline before this runs; the mirror itself is not an edit.
    if (first && $form.data('initialSerializedValue') === before) $form.data('initialSerializedValue', $form.serialize());
}
