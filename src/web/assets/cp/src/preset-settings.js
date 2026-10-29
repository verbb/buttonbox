// Set the existing controls so their submission and live-preview paths remain authoritative.
export function applyPresetSettings(container, preset, attributes) {
    for (const attribute of attributes) {
        if (!Object.hasOwn(preset, attribute)) continue;
        const value = preset[attribute];
        container.querySelectorAll('[name]').forEach((control) => {
            if (control.name !== attribute && !control.name?.endsWith(`[${attribute}]`)) return;
            if (control.localName === 'pk-lightswitch') control.checked = value === true || value === '1' || value === 1;
            else if (control.type === 'radio') control.checked = control.value === String(value);
            else if (control.type !== 'hidden' || !container.querySelector(`pk-lightswitch[name="${control.name}"]`)) control.value = value;
        });
    }
    if (Object.hasOwn(preset, 'appearance')) {
        const defaults = { size: 'default', showLabels: true, labelTooltips: false };
        container.querySelectorAll('[data-bb-appearance-key]').forEach((control) => {
            const key = control.dataset.bbAppearanceKey;
            const value = preset.appearance[key] ?? defaults[key] ?? '';
            if (control.localName === 'pk-lightswitch') control.checked = value === true || value === '1' || value === 1;
            else control.value = value;
        });
    }
}
