import '@verbb/plugin-kit-web/components/tooltip/pk-tooltip.js';
import '@verbb/plugin-kit-web/components/button.js';
import './visual-dropdown.js';
import { positionTarget } from './position-navigation.js';

function selectedWidthLabel(field) {
    return field.querySelector('.buttonbox-width-field__input:checked, .buttonbox-visual__input:checked')?.getAttribute('aria-label') || '—';
}

function refreshNativeField(field) {
    const inputs = [...field.querySelectorAll('input[type=radio], input[type=checkbox]')];
    // Read-only inputs are disabled but still own the displayed selection.
    const selected = inputs.find((input) => input.checked);
    const rating = field.matches('.buttonbox-rating');
    for (const input of inputs) {
        input.closest('label').classList.toggle('is-selected', rating ? Boolean(selected) && Number(input.value) <= Number(selected.value) : input.checked);
    }
    const label = field.querySelector('.buttonbox-width-field__value, .buttonbox-width-choice__value');
    if (label) label.textContent = selectedWidthLabel(field);
    const host = field.closest('[data-bb-clearable]') || field;
    const fallback = host.querySelector('[data-bb-fallback]');
    const warning = field.querySelector('[data-width-invalid], [data-position-invalid]');
    if (warning) warning.hidden = Boolean(selected && !selected.disabled) || fallback?.value === '';
    const clear = host.querySelector('[data-bb-clear]');
    if (clear) clear.hidden = !selected && !fallback?.value;
    if (host.matches('[data-bb-clearable]')) host.dataset.bbSelected = selected?.value ?? '';
}

// Reset restores checked properties without emitting change. Keep the original
// hidden fallback and warning in the DOM so unavailable saved values reset too.
document.addEventListener('reset', (event) => {
    const form = event.target;
    // A microtask can run before the default action of a trusted Reset click.
    setTimeout(() => {
        if (event.defaultPrevented || !form.isConnected) return;
        // Hidden inputs have no separate default value, so Clear's change survives a native reset.
        for (const fallback of form.querySelectorAll('[data-bb-fallback]')) fallback.value = fallback.dataset.bbFallback;
        for (const field of form.querySelectorAll('.buttonbox-visual, .buttonbox-width-field, .buttonbox-width-choice, .buttonbox-position-field, .buttonbox-rating')) {
            if ([...field.querySelectorAll('input')].some((input) => input.form === form)) refreshNativeField(field);
        }
    });
});

function clearChoice(host, focusTarget) {
    const inputs = [...host.querySelectorAll('input[type=radio]')];
    const checked = inputs.find((input) => input.checked);
    const fallback = host.querySelector('[data-bb-fallback]');
    for (const input of inputs) input.checked = false;
    if (fallback) fallback.value = '';
    refreshNativeField(host);
    // Craft's editors watch native events; the empty fallback is what now submits.
    const target = checked || fallback;
    target?.dispatchEvent(new Event('input', { bubbles: true }));
    target?.dispatchEvent(new Event('change', { bubbles: true }));
    (focusTarget || inputs.find((input) => !input.disabled))?.focus();
}

$(document).on('click.buttonboxClear', '[data-bb-clear]', function(event) {
    // The hidden Clear button can no longer hold focus, so focus moves to the first option.
    clearChoice(event.currentTarget.closest('[data-bb-clearable]'));
});

// A radio is already checked when its click event fires, so compare against the selection
// recorded by the last refresh (or the rendered default before any change).
function wasSelected(input) {
    const host = input.closest('[data-bb-clearable]');
    return (host.dataset.bbSelected ?? (input.defaultChecked ? input.value : '')) === input.value;
}

// Clicking the selected option of an optional single choice clears it.
$(document).on('click.buttonboxDeselect', '[data-bb-clearable] input[type=radio]', function(event) {
    const input = event.currentTarget;
    // Firefox still activates a radio after a handled Space; cancelling restores it unchecked.
    if (input.dataset.bbKeyCleared) {
        event.preventDefault();
        return;
    }
    if (input.disabled || !wasSelected(input)) return;
    // Let the browser finish activating the radio before unchecking it.
    setTimeout(() => clearChoice(input.closest('[data-bb-clearable]'), input));
});

// Chromium and WebKit do not click an already-checked radio on Space, so handle the keyboard here.
$(document).on('keydown.buttonboxDeselect', '[data-bb-clearable] input[type=radio]', function(event) {
    const input = event.currentTarget;
    if (![' ', 'Delete', 'Backspace'].includes(event.key) || !input.checked) return;
    event.preventDefault();
    input.dataset.bbKeyCleared = '1';
    clearChoice(input.closest('[data-bb-clearable]'), input);
});

$(document).on('keyup.buttonboxDeselect blur.buttonboxDeselect', '[data-bb-clearable] input[type=radio]', function(event) {
    const input = event.currentTarget;
    // Any activation click follows keyup synchronously; blur covers a key released elsewhere.
    setTimeout(() => delete input.dataset.bbKeyCleared);
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
        // A cleared input stays cleared rather than being reselected.
        choice.checked = input.checked && choice === input;
    }
    refreshNativeField(field);
});

// The bar previews the hovered width, so the readout follows it until the pointer leaves.
$(document).on('mouseenter.buttonboxWidth mouseleave.buttonboxWidth', '.buttonbox-width-field:not(.buttonbox-width-field--static) .buttonbox-width-field__option', function(event) {
    const field = event.currentTarget.closest('.buttonbox-width-field');
    const label = field.querySelector('.buttonbox-width-field__value');
    const input = event.currentTarget.querySelector('.buttonbox-width-field__input');
    if (!label || !input) return;
    label.textContent = event.type === 'mouseenter' && !input.disabled ? input.getAttribute('aria-label') : selectedWidthLabel(field);
});
