import '@verbb/plugin-kit-web/components/input/pk-input.js';
import '@verbb/plugin-kit-web/components/checkbox/pk-checkbox.js';
import '@verbb/plugin-kit-web/components/color-input/pk-color-input.js';
import '@verbb/plugin-kit-web/components/select/pk-select.js';
import '@verbb/plugin-kit-web/components/select/pk-option.js';
import '@verbb/plugin-kit-web/components/image-browser/pk-image-browser.js';
import { getCustomCellSlotName, nextRowId } from '@verbb/plugin-kit-web/components/editable-table/pk-editable-table.js';
import { chooseAssetImage } from './asset-image.js';
import { optionFormValues, changeVisualType, shapeName, shapeValues } from './visual-options.js';

const translate = (message) => Craft.t('buttonbox', message);

const secondaryTypes = ['image', 'shape', 'split', 'gradient', 'foregroundBackground'];
const catalogs = new Map();

// Share catalogs across rows, while leaving search and gallery navigation to Plugin Kit.
export function loadCatalog(type) {
    if (!catalogs.has(type)) {
        const request = type === 'icon'
            ? Promise.all([
                Craft.sendActionRequest('POST', 'app/icon-picker-options', { data: { search: '' } }),
                Craft.sendActionRequest('POST', 'buttonbox/option-sets/icons'),
            ]).then(([builtIn, custom]) => {
                const template = document.createElement('template');
                template.innerHTML = builtIn.data.listHtml;
                const items = [...template.content.querySelectorAll('button')].map((button) => ({
                    value: button.getAttribute('title'), label: button.getAttribute('aria-label'), preview: button.innerHTML,
                }));
                return [
                    { name: custom.data.presetLabel, items: custom.data.presetItems },
                    { name: translate('Custom icons'), items: custom.data.items },
                    { name: translate('Craft icons'), items },
                ];
            })
            : Craft.sendActionRequest('POST', 'buttonbox/option-sets/images').then(({ data }) => data.groups);
        catalogs.set(type, request.catch((error) => { catalogs.delete(type); throw error; }));
    }
    return catalogs.get(type);
}

// Plugin Kit owns the table, menus and controls; Button Box owns option metadata.
export class OptionTable {
    constructor($container, config, onChange) {
        this.$container = $container;
        this.table = $container.find('[data-bb-table]')[0];
        this.$values = $container.find('[data-bb-option-values]');
        this.name = $container.find('[data-bb-options-name]').attr('name');
        this.template = $container.find('[data-bb-row-template]').html();
        this.onChange = onChange;
        this.width = Boolean(config.width);
        this.position = Boolean(config.position || config.width);
        this.cells = new Map();
        this.rows = [];
        this.table.columns = [
            { name: 'label', label: translate('Label'), type: 'text' },
            { name: 'value', label: translate('Value'), type: 'value' },
            ...(this.width ? [{ name: 'percentage', label: translate('Width (%)'), type: 'custom', thin: true }] : []),
            ...(!this.position ? [{ name: 'visual', label: translate('Type'), type: 'custom', thin: true }] : []),
            { name: 'default', label: translate('Default'), type: config.multi ? 'checkbox' : 'radio', allowUnselect: true },
        ];
        this.table.newRowDefaults = optionFormValues({});
        this.table.modifyRow = (row) => ({ title: String(row.label || translate('Option')), tone: row.disabled ? 'muted' : undefined });
        this.table.getRowMenuItems = () => [
            { label: translate('Edit option…'), icon: 'gear', action: 'edit' },
        ];
        this.handleRowMenu = (event) => {
            const cell = this.cells.get(event.detail.row._id);
            if (cell && event.detail.action === 'edit') this.openOption(cell);
        };
        this.table.addEventListener('pk-row-menu-select', this.handleRowMenu);
        this.handleTableChange = (event) => {
            if (event.target !== this.table || !Array.isArray(event.detail?.rows)) return;
            this.rows = event.detail.rows;
            // Selecting a default makes that position available; disabling it in
            // the option dialog clears the default instead.
            if (this.position && this.rows.some((row) => row.default && row.disabled)) {
                this.rows = this.rows.map((row) => row.default ? { ...row, disabled: false } : row);
                this.table.rows = this.rows;
                for (const row of this.rows) {
                    const cell = this.cells.get(row._id);
                    if (cell) this.updateVisual(cell, row);
                }
            }
            this.syncCells();
            this.changed();
        };
        this.table.addEventListener('pk-change', this.handleTableChange);
        this.replaceRows(config.rows || []);
    }

    readRows() {
        return this.rows.map((row) => this.position ? {
            label: String(row.label || ''), value: String(row.value || ''),
            default: Boolean(row.default), disabled: Boolean(row.disabled), explanation: String(row.explanation || ''),
            ...(this.width ? { percentage: row.percentage ?? '' } : {}),
        } : optionFormValues(row));
    }

    replaceRows(options) {
        if (this.rows.length) {
            // Full replacements reset table-owned drag/row DOM as well as data.
            // Plugin Kit 2.0.27 can retain a seated drag row across a keyed reset.
            const previous = this.table;
            const replacement = previous.cloneNode(false);
            replacement.columns = previous.columns;
            replacement.newRowDefaults = previous.newRowDefaults;
            replacement.modifyRow = previous.modifyRow;
            replacement.getRowMenuItems = previous.getRowMenuItems;
            previous.removeEventListener('pk-row-menu-select', this.handleRowMenu);
            previous.removeEventListener('pk-change', this.handleTableChange);
            for (const cell of this.cells.values()) this.disposeCell(cell);
            this.cells.clear();
            previous.replaceWith(replacement);
            this.table = replacement;
            this.table.addEventListener('pk-change', this.handleTableChange);
            this.table.addEventListener('pk-row-menu-select', this.handleRowMenu);
        }
        this.rows = options.map((option) => ({ ...optionFormValues(option), ...(this.width ? { percentage: option.percentage ?? '' } : {}), _id: nextRowId() }));
        this.table.rows = this.rows;
        this.syncCells();
        this.syncSubmission();
    }

    syncCells() {
        const ids = new Set(this.rows.map((row) => row._id));
        for (const [id, cell] of this.cells) {
            if (!ids.has(id)) {
                this.disposeCell(cell);
                this.cells.delete(id);
            }
        }
        for (const row of this.rows) {
            if (!this.cells.has(row._id)) this.createCell(row);
        }
    }

    createCell(row) {
        const $parts = $(this.template.replaceAll('__ROW__', row._id));
        const cell = {
            id: row._id,
            $visual: $parts.filter('[data-bb-visual-cell]'),
            $visualSettings: $parts.find('[data-bb-visual-settings]'),
            $details: $parts.filter('[data-bb-details-content]'),
            dialog: null,
            catalogTypes: new Set(),
        };
        cell.$controls = cell.$visual.add(cell.$details);
        // Only the ordered hidden inputs submit. Slotted fields and dialog controls
        // are editors, so their names cannot duplicate or retain old row indexes.
        cell.$controls.find('[name], [data-bb-key]').each((index, input) => {
            const key = input.dataset.bbKey || input.name.match(/\[([^\]]+)\]$/)?.[1];
            input.dataset.bbKey = key;
            input.removeAttribute('name');
            if (input.type === 'checkbox' || input.localName === 'pk-checkbox') input.checked = Boolean(row[key]);
            else input.value = row[key] ?? '';
        });
        cell.$visual.attr('slot', getCustomCellSlotName(row._id, this.width ? 'percentage' : 'visual')).appendTo(this.table);
        this.cells.set(row._id, cell);
        cell.$controls.on('input.buttonbox change.buttonbox', (event) => {
            const input = event.target;
            // Checkbox's native input precedes its host checked-state update.
            if (input.localName === 'pk-checkbox' && event.type !== 'change') return;
            const row = this.rows.find((item) => item._id === cell.id);
            if (!row) return;
            if (input.hasAttribute('data-bb-direction')) {
                cell.customDirection = input.value === 'custom';
                if (cell.customDirection) this.updateVisual(cell, row);
                else this.writeCell(cell, { surfaceAngle: input.value });
                return;
            }
            if (input.hasAttribute('data-bb-shape')) {
                if (input.value === 'custom') this.openOption(cell);
                else this.writeCell(cell, shapeValues(input.value));
                return;
            }
            if (input.dataset.bbRatio) {
                const values = {};
                cell.$visual.find('[data-bb-ratio]').each((index, control) => { values[control.dataset.bbRatio] = control.value; });
                this.writeCell(cell, { surfaceValue: `${values.width}:${values.height}` });
                return;
            }
            const key = input.dataset.bbKey;
            if (!key) return;
            const value = input.localName === 'pk-checkbox' ? input.checked : input.value;
            this.writeCell(cell, key === 'visualType' ? changeVisualType(row, value) : { [key]: value });
        });
        cell.$controls.on('click.buttonbox', '[data-bb-swap-colours]', () => {
            const current = this.rows.find((item) => item._id === cell.id);
            if (current) this.writeCell(cell, { surfaceValue: current.surfaceSecondary, surfaceSecondary: current.surfaceValue });
        });
        cell.$controls.on('click.buttonbox', '[data-bb-asset-image]', (event) => {
            chooseAssetImage(event.currentTarget, (url) => {
                if (this.cells.has(cell.id)) this.writeCell(cell, { imageUrl: url });
            });
        });
        this.updateVisual(cell, row);
    }

    async populateBrowser(cell, type) {
        if (cell.catalogTypes.has(type)) return;
        cell.catalogTypes.add(type);
        const browser = cell.$visual.find(`pk-image-browser[mode="${type}"]`)[0];
        browser.loading = true;
        try {
            const groups = await loadCatalog(type);
            if (!this.cells.has(cell.id)) return;
            browser.groups = groups.filter((group) => group.items.length);
            cell.$visual.find('[data-bb-catalog-error]').prop('hidden', true);
        } catch (error) {
            cell.catalogTypes.delete(type);
            if (this.cells.has(cell.id)) cell.$visual.find('[data-bb-catalog-error]').text(translate('Gallery unavailable. Change the visual type to retry.')).prop('hidden', false);
        } finally {
            browser.loading = false;
        }
    }

    writeCell(cell, changes) {
        if (this.position && changes.disabled) changes.default = false;
        this.rows = this.rows.map((row) => row._id === cell.id ? { ...row, ...changes } : row);
        this.table.rows = this.rows;
        const row = this.rows.find((item) => item._id === cell.id);
        if (row) this.updateVisual(cell, row);
        this.changed();
    }

    updateVisual(cell, row) {
        const type = row.visualType || '';
        cell.$visualSettings.prop('hidden', !secondaryTypes.includes(type));
        cell.$controls.find('[data-bb-visual]').each((index, element) => {
            element.hidden = !element.dataset.bbVisual.split(' ').includes(type);
        });
        cell.$controls.find('[data-bb-key]').each((index, input) => {
            const value = row[input.dataset.bbKey] ?? '';
            if (input.localName === 'pk-checkbox') input.checked = Boolean(value);
            else if (String(input.value) !== String(value)) input.value = String(value);
        });
        const angle = Number(row.surfaceAngle);
        const customDirection = cell.customDirection || ![0, 45, 90, 135, 180, 225, 270, 315].includes(angle);
        const direction = cell.$visualSettings.find('[data-bb-direction]')[0];
        if (direction) direction.value = customDirection ? 'custom' : String(angle);
        cell.$visualSettings.find('[data-bb-custom-angle]').prop('hidden', !customDirection);
        cell.$details.find('[data-bb-disabled-details]').prop('hidden', !row.disabled);
        // Inactive form-associated controls must not block saving another visual type.
        cell.$controls.find('pk-input, pk-color-input, pk-select, pk-image-browser').each((index, input) => {
            input.disabled = Boolean(input.closest('[data-bb-visual][hidden], [data-bb-disabled-details][hidden], [data-bb-custom-angle][hidden]'));
        });
        const ratio = String(row.surfaceValue || '').split(':');
        cell.$visual.find('[data-bb-ratio]').each((index, input) => { input.value = ratio[index] || ''; });
        const shape = cell.$visual.find('[data-bb-shape]')[0];
        if (shape) shape.value = shapeName(row);
        const foreground = type === 'foregroundBackground';
        cell.$visual.find('pk-color-input[data-bb-key=surfaceValue]').attr('aria-label', translate(foreground ? 'Foreground colour' : 'Colour'));
        cell.$visual.find('pk-color-input[data-bb-key=surfaceSecondary]').attr('aria-label', translate(foreground ? 'Background colour' : 'Second colour'));
        if (type === 'icon' || type === 'image') {
            const browser = cell.$visual.find(`pk-image-browser[mode="${type}"]`)[0];
            browser.selectedLabel = type === 'icon' ? String(row.icon || '') : String(row.label || translate('Image'));
            browser.selectedPreview = type === 'image' && /^(https?:|\/)/.test(row.imageUrl || '') ? row.imageUrl : '';
            this.populateBrowser(cell, type);
        }
    }

    async openOption(cell) {
        if (!cell.dialog) {
            const dialog = document.createElement('pk-dialog');
            dialog.className = 'buttonbox-option-dialog';
            const done = document.createElement('button');
            done.type = 'button';
            done.className = 'btn submit';
            done.slot = 'footer';
            done.textContent = Craft.t('app', 'Done');
            done.addEventListener('click', () => dialog.hide('api'));
            dialog.append(cell.$details[0], done);
            document.body.append(dialog);
            cell.dialog = dialog;
        }
        const dialog = cell.dialog;
        const row = this.rows.find((item) => item._id === cell.id);
        dialog.label = translate('Edit option: {label}').replace('{label}', row?.label || translate('Option'));
        await dialog.updateComplete;
        if (dialog.isConnected && !dialog.open) await dialog.show();
    }

    syncSubmission() {
        const fragment = document.createDocumentFragment();
        this.readRows().forEach((row, index) => {
            Object.entries(row).forEach(([key, value]) => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = `${this.name}[${index}][${key}]`;
                input.value = typeof value === 'boolean' ? (value ? '1' : '') : String(value ?? '');
                fragment.append(input);
            });
        });
        this.$values.empty().append(fragment);
    }

    changed() {
        this.syncSubmission();
        this.onChange();
    }

    disposeCell(cell) {
        cell.dialog?.remove();
        cell.$controls.off('.buttonbox');
        cell.$controls.remove();
    }

    destroy() {
        this.table.removeEventListener('pk-row-menu-select', this.handleRowMenu);
        this.table.removeEventListener('pk-change', this.handleTableChange);
        for (const cell of this.cells.values()) this.disposeCell(cell);
        this.cells.clear();
    }
}
