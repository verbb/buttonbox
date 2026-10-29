import '@verbb/plugin-kit-web/components/dialog.js';
import '@verbb/plugin-kit-web/components/field.js';
import '@verbb/plugin-kit-web/components/button.js';
import { getCustomCellSlotName, nextRowId } from '@verbb/plugin-kit-web/components/editable-table/pk-editable-table.js';
import { chooseAssetImage } from './asset-image.js';
import { loadCatalog } from './option-table.js';

const t = (message) => Craft.t('buttonbox', message);
const defaults = { label: '', urlType: 'url', url: '', icon: '', imageUrl: '', imageAlt: '', iconPosition: 'start', style: 'default', newWindow: false };

Craft.ButtonBoxActionSettings = Garnish.Base.extend({
    init: function(id) {
        this.$container = $('#' + id);
        if (!this.$container.length || this.$container.data('buttonboxActions')) return;
        this.$container.data('buttonboxActions', this);
        this.name = this.$container.find('[data-actions-name]').attr('name');
        this.table = this.$container.find('[data-actions-table]')[0];
        this.template = this.$container.find('[data-actions-row]').html();
        this.cells = new Map();
        this.request = 0;
        this.table.columns = [
            { name: 'label', label: t('Label'), type: 'text' },
            { name: 'url', label: t('URL'), type: 'text' },
            { name: 'visual', label: t('Visual'), type: 'custom', thin: true },
            { name: 'style', label: t('Style'), type: 'custom', thin: true },
        ];
        this.table.newRowDefaults = { ...defaults, visualType: 'none' };
        this.table.modifyRow = (row) => ({ title: String(row.label || t('Action')) });
        this.table.getRowMenuItems = () => [{ label: t('Edit action…'), icon: 'gear', action: 'edit' }];
        this.handleMenu = (event) => {
            if (event.detail.action === 'edit') this.openDetails(event.detail.row._id);
        };
        this.handleRows = (event) => {
            if (event.target !== this.table || !Array.isArray(event.detail?.rows)) return;
            this.rows = event.detail.rows;
            this.syncCells();
            this.changed();
        };
        this.table.addEventListener('pk-change', this.handleRows);
        this.table.addEventListener('pk-row-menu-select', this.handleMenu);
        this.rows = (this.$container.data('config').rows || []).map((row) => ({ ...defaults, ...row, storedUrl: row.url, url: row.displayUrl ?? row.url, visualType: row.imageUrl ? 'image' : row.icon ? 'icon' : 'none', _id: nextRowId() }));
        this.table.rows = this.rows;
        this.initAppearance();
        this.syncCells();
        this.changed();
        this.observer = new MutationObserver(() => {
            if (!this.$container[0].isConnected) this.destroy();
        });
        this.observer.observe(document.body, { childList: true, subtree: true });
    },

    initAppearance: function() {
        const table = this.$container.find('[data-actions-appearance]')[0];
        table.allowAdd = table.allowInsert = table.allowDelete = table.allowReorder = false;
        table.columns = [{ name: 'label', label: t('Setting'), type: 'custom', thin: true }, { name: 'control', label: t('Value'), type: 'custom' }];
        table.rows = [...table.querySelectorAll('[data-appearance-row]')].map((element) => {
            const row = { _id: element.dataset.appearanceRow };
            for (const column of ['label', 'control']) {
                const cell = element.querySelector('[data-appearance-' + column + ']');
                cell.slot = getCustomCellSlotName(row._id, column);
                table.append(cell);
                if (column === 'control') this.addListener($(cell), 'input change', () => this.schedulePreview());
            }
            element.remove();
            return row;
        });
    },

    updateAppearanceSummary: function() {
        const summary = this.$container.find('[data-actions-appearance-summary]')[0];
        const defaults = { size: 'default', alignment: 'start', spacing: 'normal' };
        const parts = [];
        this.$container.find('[data-action-appearance]').each((index, control) => {
            if (control.value === defaults[control.dataset.actionAppearance]) return;
            const option = [...control.querySelectorAll('pk-option')].find((item) => item.value === control.value);
            if (option) parts.push(option.textContent.trim());
        });
        summary.textContent = parts.length ? parts.join(' · ') : summary.dataset.default;
    },

    syncCells: function() {
        for (const [id, cell] of this.cells) {
            if (!this.rows.some((row) => row._id === id)) {
                cell.dialog?.remove();
                cell.$parts.off('.actions').remove();
                this.cells.delete(id);
            }
        }
        for (const row of this.rows) {
            let cell = this.cells.get(row._id);
            if (!cell) {
                const $parts = $(this.template);
                cell = { id: row._id, $parts, loaded: new Set() };
                this.cells.set(row._id, cell);
                $parts.filter('[data-action-cell]').each((index, part) => {
                    part.slot = getCustomCellSlotName(row._id, part.dataset.actionCell);
                    this.table.append(part);
                });
                $parts.on('click.actions', '[data-action-asset-image]', (event) => {
                    chooseAssetImage(event.currentTarget, (url) => {
                        if (!this.cells.has(cell.id)) return;
                        this.rows = this.rows.map((item) => item._id === cell.id ? { ...item, imageUrl: url } : item);
                        this.table.rows = this.rows;
                        this.updateCell(cell, this.rows.find((item) => item._id === cell.id));
                        this.changed();
                    });
                });
                $parts.on('input.actions change.actions', (event) => {
                    const control = event.target;
                    const key = control.dataset.actionKey;
                    if (!key || (control.localName === 'pk-checkbox' && event.type !== 'change')) return;
                    const value = control.localName === 'pk-checkbox' ? control.checked : control.value;
                    this.rows = this.rows.map((item) => item._id === cell.id ? { ...item, [key]: value } : item);
                    this.table.rows = this.rows;
                    this.updateCell(cell, this.rows.find((item) => item._id === cell.id));
                    this.changed();
                });
            }
            this.updateCell(cell, row);
        }
    },

    updateCell: function(cell, row) {
        cell.$parts.find('[data-action-key]').each((index, control) => {
            if (control.localName === 'pk-checkbox') control.checked = Boolean(row[control.dataset.actionKey]);
            else control.value = String(row[control.dataset.actionKey] ?? '');
        });
        cell.$parts.find('pk-image-browser').each((index, browser) => {
            browser.hidden = row.visualType !== browser.mode;
            browser.disabled = browser.hidden;
            if (!browser.hidden) this.populateBrowser(cell, browser);
        });
        cell.$parts.find('[data-action-asset-image]').prop('hidden', row.visualType !== 'image');
        cell.$parts.find('[data-image-alt]').prop('hidden', row.visualType !== 'image');
    },

    populateBrowser: async function(cell, browser) {
        if (cell.loaded.has(browser.mode)) return;
        cell.loaded.add(browser.mode);
        browser.loading = true;
        try {
            const groups = await loadCatalog(browser.mode);
            if (!this.cells.has(cell.id)) return;
            browser.groups = groups.filter((group) => group.items.length);
            cell.$parts.find('[data-gallery-error]').prop('hidden', true);
        } catch (error) {
            cell.loaded.delete(browser.mode);
            cell.$parts.find('[data-gallery-error]').text(t('Gallery unavailable. Change the visual type to retry.')).prop('hidden', false);
        } finally {
            browser.loading = false;
        }
    },

    openDetails: async function(id) {
        const cell = this.cells.get(id);
        if (!cell) return;
        if (!cell.dialog) {
            const dialog = document.createElement('pk-dialog');
            dialog.className = 'buttonbox-option-dialog';
            const done = document.createElement('pk-button');
            done.variant = 'primary';
            done.type = 'button';
            done.slot = 'footer';
            done.textContent = Craft.t('app', 'Done');
            done.addEventListener('click', () => dialog.hide('api'));
            dialog.append(cell.$parts.filter('[data-action-details]')[0], done);
            document.body.append(dialog);
            cell.dialog = dialog;
        }
        cell.dialog.label = t('Edit action: {label}').replace('{label}', this.rows.find((row) => row._id === id)?.label || t('Action'));
        await cell.dialog.updateComplete;
        if (cell.dialog.isConnected) await cell.dialog.show();
    },

    readRows: function() {
        return this.rows.map((row) => {
            const action = Object.fromEntries(Object.keys(defaults).map((key) => [key,
                (key === 'icon' && row.visualType !== 'icon') || (key === 'imageUrl' && row.visualType !== 'image') ? '' : row[key] ?? defaults[key],
            ]));
            // Keep environment-aware legacy paths until their displayed URL is edited.
            if (row.url === row.displayUrl) action.url = row.storedUrl;
            else action.urlType = 'url';
            return action;
        });
    },

    changed: function() {
        const fragment = document.createDocumentFragment();
        this.readRows().forEach((row, index) => {
            for (const [key, value] of Object.entries(row)) {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = `${this.name}[${index}][${key}]`;
                input.value = typeof value === 'boolean' ? (value ? '1' : '') : String(value);
                fragment.append(input);
            }
        });
        this.$container.find('[data-actions-values]').empty().append(fragment);
        this.schedulePreview();
    },

    schedulePreview: function() {
        clearTimeout(this.timer);
        this.updateAppearanceSummary();
        const version = ++this.request;
        this.timer = setTimeout(() => this.preview(version), 250);
    },

    preview: async function(version) {
        const $status = this.$container.find('[data-actions-status]');
        const $preview = this.$container.find('[data-actions-preview]');
        const data = { actions: this.readRows() };
        this.$container.find('[data-action-appearance]').each((index, control) => { data[control.dataset.actionAppearance] = control.value; });
        if (!data.actions.length) {
            $preview.empty();
            $status.text(t('Add an action to preview this field.'));
            return;
        }
        try {
            const response = await Craft.sendActionRequest('POST', 'buttonbox/action-links/preview', { data });
            if (version !== this.request || !this.$container[0].isConnected) return;
            $preview.html(response.data.html);
            $status.text(response.data.errors.join(' '));
        } catch (error) {
            if (version === this.request) $status.text(t('Preview unavailable. Your actions have been preserved.'));
        }
    },

    destroy: function() {
        clearTimeout(this.timer);
        this.request++;
        this.observer?.disconnect();
        this.table.removeEventListener('pk-change', this.handleRows);
        this.table.removeEventListener('pk-row-menu-select', this.handleMenu);
        for (const cell of this.cells.values()) {
            cell.dialog?.remove();
            cell.$parts.off('.actions').remove();
        }
        this.$container.removeData('buttonboxActions');
        this.base();
    },
});
