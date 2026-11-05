import { applyPresetSettings } from './preset-settings.js';
import { syncKitValues } from './kit-values.js';
import '@verbb/plugin-kit-web/components/alert.js';
import '@verbb/plugin-kit-web/components/dialog.js';
import '@verbb/plugin-kit-web/components/field.js';
import '@verbb/plugin-kit-web/components/button.js';
import '@verbb/plugin-kit-web/components/lightswitch.js';
import { getCustomCellSlotName } from '@verbb/plugin-kit-web/components/editable-table/pk-editable-table.js';
import { OptionTable } from './option-table.js';

Craft.ButtonBoxVisualSettings = Garnish.Base.extend({
    init: function(id) {
        this.$container = $('#' + id);
        if (!this.$container.length || this.$container.data('buttonboxSettings')) return;
        this.$container.data('buttonboxSettings', this);
        this.config = this.$container.data('config');
        this.request = 0;
        this.timer = null;
        this.presetDialog = null;
        this.applyingPreset = false;
        if (this.$container.find('[data-bb-action="customise-set"]').length) {
            this.addListener($(document), 'buttonboxOptionSetSaved', (event) => this.refreshSet(event.optionSet));
        }
        this.addListener(this.$container, 'click', (event) => this.handleClick(event));
        this.addListener(this.$container, 'change input', (event) => this.handleChange(event));
        this.initAppearance();
        this.optionTable = new OptionTable(this.$container, this.config, () => this.schedulePreview());
        this.updateSource();
        this.updatePresentation();
        this.schedulePreview();
        // Craft field settings can be replaced in slideouts without a page navigation.
        this.observer = new MutationObserver(() => {
            if (!this.$container[0].isConnected) this.destroy();
        });
        this.observer.observe(document.body, { childList: true, subtree: true });
    },

    source: function() {
        return this.$container.find('select[name$="[optionSource]"], select[name="optionSource"]').val() || 'local';
    },

    presentation: function() {
        return this.$container.find('input[name$="[presentation]"]:checked, input[name="presentation"]:checked').val() || 'segmented';
    },

    control: function(name) {
        return this.$container.find('[name="' + name + '"], [name$="[' + name + ']"]');
    },

    readRows: function() {
        return this.optionTable.readRows();
    },

    replaceRows: function(options) {
        this.optionTable.replaceRows(options);
    },

    updateSource: function() {
        const source = this.source();
        this.$container.find('[data-source]').each((index, element) => { element.hidden = element.dataset.source !== source; });
        const uid = this.control('projectSet').val();
        const exists = Boolean(this.config.sets[uid]);
        const editable = exists && this.config.canManageSets && this.config.editableSetUids?.includes(uid);
        this.$container.find('[data-bb-set-customise]').toggleClass('hidden', !exists);
        this.$container.find('[data-bb-action="edit-set"]').prop('disabled', !editable).toggleClass('hidden', !editable);
    },

    openSet: function(uid, trigger) {
        if (!this.config.canManageSets || (uid && !this.config.editableSetUids.includes(uid))) return;
        if (this.setSlideout) return;
        const slideout = new Craft.CpScreenSlideout('buttonbox/option-sets/edit', { params: uid ? { uid } : {} });
        this.setSlideout = slideout;
        slideout.on('submit', (event) => {
            const saved = event.response?.data?.optionSet;
            if (!saved?.uid) return;
            // Other open field settings also need fresh options after a shared edit.
            $(document).trigger({ type: 'buttonboxOptionSetSaved', optionSet: saved });
            this.control('projectSet').val(saved.uid).trigger('change');
        });
        slideout.on('close', () => {
            this.setSlideout = null;
            if (trigger.isConnected) trigger.focus();
        });
    },

    refreshSet: function(set) {
        this.config.sets[set.uid] = set;
        if (!this.config.editableSetUids.includes(set.uid)) this.config.editableSetUids.push(set.uid);
        const select = this.control('projectSet')[0];
        let option = [...select.options].find((item) => item.value === set.uid);
        if (!option) {
            option = document.createElement('option');
            option.value = set.uid;
            select.append(option);
        }
        option.textContent = set.label;
        this.updateSource();
        this.schedulePreview();
    },

    customiseSet: function() {
        const set = this.config.sets[this.control('projectSet').val()];
        if (!set) return;
        this.replaceRows(set.options);
        this.control('optionSource').val('local');
        this.control('projectSet').val('');
        this.control('optionSource').trigger('change');
        // The source change hides the link, so return focus to the source selector.
        this.control('optionSource').trigger('focus');
    },

    updatePresentation: function() {
        this.$container.find('[data-bb-columns]').prop('hidden', !['tile', 'card'].includes(this.presentation()));
    },

    initAppearance: function() {
        this.appearanceTable = this.$container.find('[data-bb-appearance-table]')[0];
        this.appearanceTable.allowAdd = false;
        this.appearanceTable.allowInsert = false;
        this.appearanceTable.allowDelete = false;
        this.appearanceTable.allowReorder = false;
        this.appearanceTable.columns = [
            { name: 'label', label: Craft.t('buttonbox', 'Setting'), type: 'custom', thin: true },
            { name: 'control', label: Craft.t('buttonbox', 'Value'), type: 'custom' },
        ];
        this.appearanceRows = [...this.appearanceTable.querySelectorAll('[data-bb-appearance-row]')].map((element) => {
            const row = { _id: element.dataset.bbAppearanceRow, group: element.dataset.bbAppearanceGroup };
            for (const column of ['label', 'control']) {
                const cell = element.querySelector('[data-bb-appearance-' + column + ']');
                cell.slot = getCustomCellSlotName(row._id, column);
                this.appearanceTable.append(cell);
                // Slotted controls keep their form names; the table contains their input events.
                if (column === 'control') this.addListener($(cell), 'input change', () => this.schedulePreview());
            }
            element.remove();
            return row;
        });
    },

    updateAppearance: function() {
        const source = this.source();
        const rows = source === 'projectSet' ? this.config.sets[this.control('projectSet').val()]?.options || [] : this.readRows();
        const images = source === 'provider' || rows.some((row) => row.visualType === 'image' || (!row.visualType && row.imageUrl));
        // Keep invalid controls reachable even when their presentation is inactive.
        const dropdown = this.presentation() === 'dropdown';
        const visibleRows = this.appearanceRows.filter((row) => {
            if (dropdown && ['showLabels', 'labelTooltips', 'imageSize', 'imageFit'].includes(row._id) && this.appearanceTable.dataset.appearanceErrors !== '1' && this.appearanceTable.dataset.imageErrors !== '1') return false;
            return row.group !== 'image' || images || this.appearanceTable.dataset.imageErrors === '1';
        });
        const rowKeys = visibleRows.map((row) => row._id).join(',');
        if (rowKeys !== this.appearanceRowKeys) {
            this.appearanceTable.rows = visibleRows;
            this.appearanceRowKeys = rowKeys;
        }
        this.$container.find('[data-bb-appearance]').prop('hidden', visibleRows.length === 0);
        this.updateAppearanceSummary(images);
    },

    updateAppearanceSummary: function(images) {
        const summary = this.$container.find('[data-bb-appearance-summary]')[0];
        const labels = JSON.parse(summary.dataset.labels);
        const appearance = this.appearance();
        const parts = [];
        if (this.presentation() !== 'dropdown' && appearance.showLabels === '0') parts.push(labels.labels);
        if (this.presentation() !== 'dropdown' && appearance.labelTooltips === '1') parts.push(labels.tooltips);
        if (appearance.size && appearance.size !== 'default') {
            const option = [...this.$container.find('[data-bb-appearance-key="size"] pk-option')].find((item) => item.value === appearance.size);
            if (option) parts.push(option.textContent.trim());
        }
        if (['textColor', 'backgroundColor', 'borderColor', 'selectionColor'].some((key) => appearance[key])) parts.push(labels.colours);
        if (['borderWidth', 'radius'].some((key) => appearance[key] !== '')) parts.push(labels.borders);
        if (this.presentation() !== 'dropdown' && images && (this.control('imageSize').val() !== 'auto' || this.control('imageFit').val() !== 'cover')) parts.push(labels.images);
        summary.textContent = parts.length ? parts.join(' · ') : labels.default;
    },

    appearance: function() {
        const appearance = {};
        this.$container.find('[data-bb-appearance-key]').each((index, control) => {
            appearance[control.dataset.bbAppearanceKey] = control.localName === 'pk-lightswitch' ? (control.checked ? '1' : '0') : control.value;
        });
        return appearance;
    },

    setPresentation: function(value) {
        this.control('presentation').each((index, input) => { input.checked = input.value === value; });
        this.updatePresentation();
    },

    openPresets: async function() {
        if (!this.presetDialog) {
            const $dialog = $(this.$container.find('[data-bb-presets-template]').html()).appendTo(document.body);
            // Gallery previews are illustrative and must never submit values or receive focus.
            $dialog.find('.buttonbox-preset-card__preview input').remove();
            this.presetDialog = $dialog[0];
            this.addListener($dialog.find('[data-bb-choose-preset]'), 'click', async (event) => {
                const preset = this.config.presets[$(event.currentTarget).attr('data-bb-choose-preset')];
                if (!preset || this.applyingPreset) return;
                this.applyingPreset = true;
                try {
                    this.replaceRows(preset.options);
                    this.setPresentation(preset.presentation);
                    applyPresetSettings(this.$container[0], preset, ['columns', 'iconSize', 'imageSize', 'imageFit']);
                    this.schedulePreview();
                    await this.presetDialog.hide('api');
                } finally {
                    this.applyingPreset = false;
                }
            });
        }
        const empty = this.readRows().length === 0;
        $(this.presetDialog).find('[data-bb-preset-help="empty"]').toggle(empty);
        $(this.presetDialog).find('[data-bb-preset-help="filled"]').toggle(!empty);
        // The lazy-mounted custom element must finish rendering before its first show().
        await this.presetDialog.updateComplete;
        if (this.presetDialog.isConnected) await this.presetDialog.show();
    },

    handleChange: function(event) {
        const $target = $(event.target);
        if ($target.closest('[data-bb-preview]').length) return;
        this.updateSource();
        this.updatePresentation();
        this.schedulePreview();
    },

    handleClick: function(event) {
        const $reset = $(event.target).closest('[data-bb-reset-appearance]');
        if ($reset.length) {
            const key = $reset.attr('data-bb-reset-appearance');
            this.$container.find('[data-bb-appearance-key="' + key + '"]').val('');
            this.schedulePreview();
            return;
        }
        const $button = $(event.target).closest('[data-bb-action]');
        if (!$button.length) return;
        event.preventDefault();
        const action = $button.data('bb-action');
        if (action === 'customise-set') {
            this.customiseSet();
            return;
        }
        if (action === 'new-set' || action === 'edit-set') {
            this.openSet(action === 'edit-set' ? this.control('projectSet').val() : null, $button[0]);
            return;
        }
        if (action === 'presets') {
            this.openPresets();
            return;
        }
        this.schedulePreview();
    },

    status: function(message) {
        this.$container.find('[data-bb-status]').text(Craft.t('buttonbox', message));
    },

    schedulePreview: function() {
        clearTimeout(this.timer);
        this.updateAppearance();
        syncKitValues(this.$container);
        const version = ++this.request;
        this.timer = setTimeout(() => this.updatePreview(version), 250);
    },

    updatePreview: async function(version) {
        if (!this.$container[0].isConnected) return;
        const $preview = this.$container.find('[data-bb-preview]');
        if (this.source() === 'provider') {
            $preview.empty();
            this.status('Dynamic options are available when editing an entry.');
            return;
        }
        const options = this.source() === 'projectSet' ? this.config.sets[this.control('projectSet').val()]?.options || [] : this.readRows();
        if (!options.length) {
            $preview.empty();
            this.status(this.source() === 'projectSet' ? 'Choose an option set to preview it.' : 'Add an option to preview this field.');
            return;
        }
        try {
            const response = await Craft.sendActionRequest('POST', 'buttonbox/option-sets/preview', { data: { options, presentation: this.presentation(), columns: this.control('columns').val(), appearance: this.appearance(), imageSize: this.control('imageSize').val(), imageFit: this.control('imageFit').val(), multi: this.config.multi ? 1 : 0 } });
            if (version !== this.request || !this.$container[0].isConnected) return;
            $preview.html(response.data.html);
            // Preview inputs are interactive but must never become part of the settings POST.
            $preview.find('input').removeAttr('name').on('change', (event) => {
                const $input = $(event.target);
                if (!this.config.multi) $preview.find('input').not($input).prop('checked', false);
                $preview.find('input').each((index, input) => $(input).closest('.buttonbox-visual__option').toggleClass('is-selected', input.checked));
            });
            this.$container.find('[data-bb-status]').text(response.data.errors.join(' '));
        } catch {
            if (version === this.request) this.status('Preview unavailable. Your options have been preserved.');
        }
    },

    destroy: function() {
        clearTimeout(this.timer);
        this.request++;
        this.observer?.disconnect();
        this.presetDialog?.remove();
        this.setSlideout?.close();
        this.optionTable.destroy();
        this.$container.removeData('buttonboxSettings');
        this.base();
    },
});
