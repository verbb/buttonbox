// Keep blank strings and numeric zero distinct when editing existing option metadata.
export function flattenOption(option) {
    const surface = option.surface || {};
    return {
        ...option,
        visualType: option.visualType ?? (option.imageUrl ? 'image' : option.icon ? 'icon' : surface.mode ?? option.surfaceMode ?? (option.color ? 'solid' : '')),
        surfaceValue: option.surfaceValue ?? surface.value ?? surface.from ?? surface.radius ?? surface.size ?? option.color ?? '',
        surfaceSecondary: option.surfaceSecondary ?? surface.to ?? surface.aspectRatio ?? '',
        surfaceAngle: option.surfaceAngle ?? surface.angle ?? 135,
    };
}

export function hexColor(value) {
    const hex = String(value || '').replace(/^#/, '');
    if (/^[0-9a-f]{3}$/i.test(hex)) return '#' + [...hex].map((letter) => letter + letter).join('');
    return /^[0-9a-f]{6}$/i.test(hex) ? '#' + hex : null;
}

// Flatten the supported editor fields so inactive visuals survive edits and row moves.
export function optionFormValues(option) {
    const flat = flattenOption(option);
    const result = {};
    for (const key of ['label', 'value', 'description', 'visualType', 'icon', 'imageUrl', 'imageAlt', 'surfaceValue', 'surfaceSecondary', 'surfaceAngle', 'category', 'explanation']) {
        result[key] = flat[key] ?? '';
    }
    result.default = Boolean(flat.default);
    result.disabled = Boolean(flat.disabled);
    return result;
}

const colourTypes = ['solid', 'split', 'gradient', 'foregroundBackground'];

export function changeVisualType(row, type) {
    if (row.visualType === type) return {};
    const values = { visualType: type };
    if (colourTypes.includes(type)) {
        values.surfaceValue = colourTypes.includes(row.visualType) && hexColor(row.surfaceValue) ? row.surfaceValue : '#64748b';
        if (type !== 'solid') values.surfaceSecondary = colourTypes.includes(row.visualType) && hexColor(row.surfaceSecondary) ? row.surfaceSecondary : '#2563eb';
        values.surfaceAngle = row.surfaceAngle === '' ? 135 : (row.surfaceAngle ?? 135);
    } else if (type === 'width') values.surfaceValue = '50';
    else if (type === 'text') values.surfaceValue = '16';
    else if (type === 'ratio') values.surfaceValue = '1:1';
    else if (type === 'shape') Object.assign(values, shapeValues('square'));
    return values;
}

export function shapeValues(name) {
    return {
        square: { surfaceValue: '0', surfaceSecondary: '1:1' },
        rounded: { surfaceValue: '8', surfaceSecondary: '' },
        pill: { surfaceValue: '999', surfaceSecondary: '' },
        circle: { surfaceValue: '999', surfaceSecondary: '1:1' },
    }[name] || {};
}

export function shapeName(row) {
    return ['square', 'rounded', 'pill', 'circle'].find((name) => {
        const values = shapeValues(name);
        return String(row.surfaceValue) === values.surfaceValue && String(row.surfaceSecondary || '') === values.surfaceSecondary;
    }) || 'custom';
}
