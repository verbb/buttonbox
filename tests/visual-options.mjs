import assert from 'node:assert/strict';
import { flattenOption, hexColor, optionFormValues, changeVisualType, shapeName, shapeValues } from '../src/web/assets/cp/src/visual-options.js';

const shape = flattenOption({ surface: { mode: 'shape', radius: 0, aspectRatio: '1:1', angle: 0 } });
assert.equal(shape.surfaceValue, 0);
assert.equal(shape.surfaceAngle, 0);
assert.equal(shape.surfaceSecondary, '1:1');
assert.equal(shape.visualType, 'shape');
assert.equal(flattenOption({ color: '#f00' }).visualType, 'solid');
assert.equal(flattenOption({ visualType: '', icon: 'star' }).visualType, '');
assert.equal(flattenOption({ surfaceValue: '', surface: { value: '#f00' } }).surfaceValue, '');
assert.equal(hexColor('abc'), '#aabbcc');
assert.equal(hexColor('#aabbcc'), '#aabbcc');
assert.equal(hexColor('red;position:absolute'), null);
const edited = optionFormValues({
    _id: 'editor-row', label: 'Square', value: 0, default: true, disabled: false,
    visualType: 'shape', icon: 'star', imageUrl: '/retained.png', description: 'Details',
    surface: { mode: 'shape', radius: 0, aspectRatio: '1:1', angle: 0 },
});
assert.equal(edited.value, 0);
assert.equal(edited.surfaceValue, 0);
assert.equal(edited.surfaceSecondary, '1:1');
assert.equal(edited.surfaceAngle, 0);
assert.equal(edited.icon, 'star');
assert.equal(edited.imageUrl, '/retained.png');
assert.equal(edited.description, 'Details');
assert.equal(edited.default, true);
assert.equal(edited.disabled, false);
assert.ok(!('_id' in edited));
assert.ok(!('surface' in edited));
assert.deepEqual(optionFormValues(edited), edited);
assert.equal(optionFormValues({}).default, false);
// Changing visual families must not reinterpret a hex colour as a numeric sample.
assert.equal(changeVisualType({ visualType: 'solid', surfaceValue: '#ff0000' }, 'text').surfaceValue, '16');
assert.equal(changeVisualType({ visualType: 'text', surfaceValue: '24' }, 'ratio').surfaceValue, '1:1');
assert.deepEqual(changeVisualType({ visualType: 'text', surfaceValue: '24' }, 'text'), {});
const gradient = changeVisualType({ visualType: 'solid', surfaceValue: '#ff0000', surfaceAngle: 0 }, 'gradient');
assert.equal(gradient.surfaceValue, '#ff0000');
assert.equal(gradient.surfaceSecondary, '#2563eb');
assert.equal(gradient.surfaceAngle, 0);
assert.equal(shapeName({ surfaceValue: 0, surfaceSecondary: '1:1' }), 'square');
assert.equal(shapeName({ surfaceValue: 0, surfaceSecondary: '' }), 'custom');
assert.deepEqual(shapeValues('square'), { surfaceValue: '0', surfaceSecondary: '1:1' });
assert.equal(shapeName({ surfaceValue: 12, surfaceSecondary: '' }), 'custom');
assert.deepEqual(shapeValues('circle'), { surfaceValue: '999', surfaceSecondary: '1:1' });
console.log('Visual option metadata checks passed.');
