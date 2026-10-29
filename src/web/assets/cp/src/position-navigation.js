// Keep disabled cells in the geometry and move along the requested axis without wrapping.
export function positionTarget(current, columns, disabled, key) {
    const step = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -columns, ArrowDown: columns }[key];
    if (!step || current < 0) return current;
    const horizontal = key === 'ArrowLeft' || key === 'ArrowRight';
    for (let target = current + step; target >= 0 && target < disabled.length; target += step) {
        if (horizontal && Math.floor(target / columns) !== Math.floor(current / columns)) break;
        if (!disabled[target]) return target;
    }
    return current;
}
