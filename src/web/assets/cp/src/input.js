import '@verbb/plugin-kit-web/components/tooltip/pk-tooltip.js';
import '@verbb/plugin-kit-web/components/button.js';
import './visual-dropdown.js';
import { positionTarget } from './position-navigation.js';

function refreshNativeField(field) {
    const inputs = [...field.querySelectorAll('input[type=radio], input[type=checkbox]')];
    // Read-only inputs are disabled but still own the displayed selection.
    const selected = inputs.find((input) => input.checked);
    const rating = field.matches('.buttonbox-rating');
    for (const input of inputs) {
        input.closest('label').classList.toggle('is-selected', rating ? Boolean(selected) && Number(input.value) <= Number(selected.value) : input.checked);
    }
    const label = field.querySelector('.buttonbox-width-field__value, .buttonbox-width-choice__value');
    if (label) label.textContent = selected?.getAttribute('aria-label') || '—';
    const warning = field.querySelector('[data-width-invalid], [data-position-invalid]');
    if (warning) warning.hidden = Boolean(selected && !selected.disabled);
}

// Reset restores checked properties without emitting change. Keep the original
// hidden fallback and warning in the DOM so unavailable saved values reset too.
document.addEventListener('reset', (event) => {
    const form = event.target;
    // A microtask can run before the default action of a trusted Reset click.
    setTimeout(() => {
        if (event.defaultPrevented || !form.isConnected) return;
        for (const field of form.querySelectorAll('.buttonbox-visual, .buttonbox-width-field, .buttonbox-width-choice, .buttonbox-position-field, .buttonbox-rating')) {
            if ([...field.querySelectorAll('input')].some((input) => input.form === form)) refreshNativeField(field);
        }
    });
});

(function($) {

$(document).on('change.buttonboxVisual', '.buttonbox-visual__input', function(event) {
    const input = event.currentTarget;
    const field = input.closest('.buttonbox-width-choice') || input.closest('.buttonbox-visual');
    refreshNativeField(field);
});

// The visible label anchors the tooltip; keyboard focus stays on its native input.
$(document).on('focusin.buttonboxVisualTooltip focusout.buttonboxVisualTooltip', '.buttonbox-visual__input[data-bb-tooltip], .buttonbox-width-field__input[data-bb-tooltip]', function(event) {
    const tooltip = document.getElementById(event.currentTarget.closest('label').id + '-tooltip');
    if (event.type === 'focusin') tooltip?.show();
    else tooltip?.hide();
});

$(document).on('keydown.buttonboxVisualTooltip', function(event) {
    if (event.key !== 'Escape') return;
    for (const tooltip of document.querySelectorAll('.buttonbox-visual__tooltip')) {
        if (tooltip.open) {
            tooltip.hide();
            event.stopPropagation();
        }
    }
});

$(document).on('change.buttonboxRating', '.buttonbox-rating__input', function(event) {
    refreshNativeField(event.currentTarget.closest('.buttonbox-rating'));
});

$(document).on('change.buttonboxPosition', '.buttonbox-position__input', function(event) {
    const $input = $(event.currentTarget);
    const $field = $input.closest('.buttonbox-position-field');
    const $inputs = $field.find('.buttonbox-position__input');
    $inputs.not($input).prop('checked', false);
    refreshNativeField($field[0]);
});

$(document).on('keydown.buttonboxPosition', '.buttonbox-position__input', function(event) {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
    // Prevent the browser's linear radio navigation, including at grid boundaries.
    event.preventDefault();
    const $input = $(event.currentTarget);
    const $container = $input.closest('.buttonbox-position');
    const $inputs = $container.find('.buttonbox-position__input');
    const columns = Number($container.data('columns')) || 1;
    const current = $inputs.index($input);
    const target = positionTarget(current, columns, $inputs.toArray().map((input) => input.disabled), event.key);
    if (target !== current) $inputs.eq(target).prop('checked', true).trigger('change').trigger('focus');
});

})(jQuery);

$(document).on('change.buttonboxWidth', '.buttonbox-width-field__input', function(event) {
    const input = event.currentTarget;
    const field = input.closest('.buttonbox-width-field');
    for (const choice of field.querySelectorAll('.buttonbox-width-field__input')) {
        // Settings previews omit form names, so keep their radios exclusive here too.
        choice.checked = choice === input;
    }
    refreshNativeField(field);
});
