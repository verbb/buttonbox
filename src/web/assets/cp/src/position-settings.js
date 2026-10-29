import { applyPresetSettings } from './preset-settings.js';
import '@verbb/plugin-kit-web/components/dialog.js';
import '@verbb/plugin-kit-web/components/field.js';
import '@verbb/plugin-kit-web/components/button.js';
import '@verbb/plugin-kit-web/components/lightswitch.js';
import { getCustomCellSlotName } from '@verbb/plugin-kit-web/components/editable-table/pk-editable-table.js';
import { OptionTable } from './option-table.js';

Craft.ButtonBoxPositionSettings = Garnish.Base.extend({
    init: function(id) {
        this.$container = $('#' + id);
        if (!this.$container.length || this.$container.data('buttonboxPositionSettings')) return;
        this.$container.data('buttonboxPositionSettings', this);
        this.config = this.$container.data('config');
        this.request = 0;
        this.initAppearance();
        this.optionTable = new OptionTable(this.$container, this.config, () => this.schedulePreview());
        this.addListener(this.$container.find('[data-bb-presets]'), 'click', () => this.openPresets());
        this.addListener(this.$container.find('[data-bb-reset-appearance]'), 'click', (event) => {
            const key = $(event.currentTarget).attr('data-bb-reset-appearance');
            this.$container.find('[data-bb-appearance-key="' + key + '"]').val('');
            this.schedulePreview();
        });
        this.addListener(this.$container, 'input change', (event) => {
            if (!$(event.target).closest('[data-bb-preview]').length) this.schedulePreview();
        });
        this.observer = new MutationObserver(() => {
            if (!this.$container[0].isConnected) this.destroy();
        });
        this.observer.observe(document.body, { childList: true, subtree: true });
        this.schedulePreview();
    },

    control: function(name) {
        return this.$container.find('[name="' + name + '"], [name$="[' + name + ']"]');
    },

    mode: function() {
        return this.control('mode').filter(':checked').val() || 'grid';
    },

    initAppearance: function() {
        const table = this.$container.find('[data-bb-appearance-table]')[0];
        table.allowAdd = false;
        table.allowInsert = false;
        table.allowDelete = false;
        table.allowReorder = false;
        table.columns = [
            { name: 'label', label: Craft.t('buttonbox', 'Setting'), type: 'custom', thin: true },
            { name: 'control', label: Craft.t('buttonbox', 'Value'), type: 'custom' },
        ];
        table.rows = [...table.querySelectorAll('[data-bb-appearance-row]')].map((element) => {
            const row = { _id: element.dataset.bbAppearanceRow };
            for (const column of ['label', 'control']) {
                const cell = element.querySelector('[data-bb-appearance-' + column + ']');
                cell.slot = getCustomCellSlotName(row._id, column);
                table.append(cell);
                // Slotted controls keep their form names; the table contains input events.
                if (column === 'control') this.addListener($(cell), 'input change', () => this.schedulePreview());
            }
            element.remove();
            return row;
        });
    },

    appearance: function() {
        const appearance = {};
        this.$container.find('[data-bb-appearance-key]').each((index, control) => {
            appearance[control.dataset.bbAppearanceKey] = control.value;
        });
        return appearance;
    },

    updateAppearanceSummary: function() {
        const summary = this.$container.find('[data-bb-appearance-summary]')[0];
        const labels = JSON.parse(summary.dataset.labels);
        const appearance = this.appearance();
        const parts = [];
        if (!this.$container.find('[data-bb-show-tooltips]')[0].checked) parts.push(labels.tooltipsOff);
        if (appearance.size && appearance.size !== 'default') {
            const option = [...this.$container.find('[data-bb-appearance-key="size"] pk-option')].find((item) => item.value === appearance.size);
            if (option) parts.push(option.textContent.trim());
        }
        if (['textColor', 'backgroundColor', 'selectionColor'].some((key) => appearance[key])) parts.push(labels.colours);
        summary.textContent = parts.length ? parts.join(' · ') : labels.default;
    },

    openPresets: async function() {
        if (!this.presetDialog) {
            const $dialog = $(this.$container.find('[data-bb-presets-template]').html()).appendTo(document.body);
            $dialog.find('.buttonbox-preset-card__preview input').remove();
            this.presetDialog = $dialog[0];
            this.addListener($dialog.find('[data-bb-choose-preset]'), 'click', async (event) => {
                const preset = this.config.presets[$(event.currentTarget).attr('data-bb-choose-preset')];
                if (!preset || this.applyingPreset) return;
                this.applyingPreset = true;
                try {
                    this.applyPreset(preset);
                    this.schedulePreview();
                    await this.presetDialog.hide('api');
                } finally {
                    this.applyingPreset = false;
                }
            });
        }
        const empty = this.optionTable.readRows().length === 0;
        $(this.presetDialog).find('[data-bb-preset-help="empty"]').toggle(empty);
        $(this.presetDialog).find('[data-bb-preset-help="filled"]').toggle(!empty);
        await this.presetDialog.updateComplete;
        if (this.presetDialog.isConnected) await this.presetDialog.show();
    },

    applyPreset: function(preset) {
        this.optionTable.replaceRows(preset.options);
        this.control('mode').each((index, input) => { input.checked = input.value === preset.mode; });
        this.control('columns').val(preset.columns);
        applyPresetSettings(this.$container[0], preset, ['showTooltips']);
    },

    previewData: function(options) {
        return { options, mode: this.mode(), columns: this.control('columns').val(), showTooltips: this.$container.find('[data-bb-show-tooltips]')[0].checked, appearance: this.appearance() };
    },

    previewAction: 'buttonbox/position/preview',

    schedulePreview: function() {
        clearTimeout(this.timer);
        this.updateAppearanceSummary();
        const grid = this.mode() === 'grid';
        this.$container.find('[data-bb-columns]').prop('hidden', !grid);
        this.control('columns').prop('disabled', !grid);
        const version = ++this.request;
        this.timer = setTimeout(() => this.updatePreview(version), 250);
    },

    updatePreview: async function(version) {
        if (!this.$container[0].isConnected) return;
        const $preview = this.$container.find('[data-bb-preview]');
        const $status = this.$container.find('[data-bb-status]');
        const options = this.optionTable.readRows();
        if (!options.length) {
            $preview.empty();
            $status.text(Craft.t('buttonbox', 'Add an option to preview this field.'));
            return;
        }
        try {
            const response = await Craft.sendActionRequest('POST', this.previewAction, {
                data: this.previewData(options),
            });
            if (version !== this.request || !this.$container[0].isConnected) return;
            $preview.html(response.data.html);
            // The preview uses real input markup, but owns no submitted settings.
            $preview.find('input[type=hidden]').remove();
            $preview.find('input').removeAttr('name');
            $status.text(response.data.errors.join(' '));
        } catch (error) {
            if (version === this.request) {
                $preview.empty();
                $status.text(Craft.t('buttonbox', 'Preview unavailable. Your options have been preserved.'));
            }
        }
    },

    destroy: function() {
        clearTimeout(this.timer);
        this.request++;
        this.observer?.disconnect();
        this.presetDialog?.remove();
        this.optionTable.destroy();
        this.$container.removeData('buttonboxPositionSettings');
        this.base();
    },
});
