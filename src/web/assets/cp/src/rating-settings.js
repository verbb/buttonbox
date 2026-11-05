import { syncKitValues, trackSetupChanges } from './kit-values.js';
import { restorePreviewSelection } from './preview-selection.js';
import '@verbb/plugin-kit-web/components/dialog.js';
import '@verbb/plugin-kit-web/components/select.js';
import '@verbb/plugin-kit-web/components/color-input.js';
import '@verbb/plugin-kit-web/components/lightswitch.js';
import '@verbb/plugin-kit-web/components/button.js';
import { getCustomCellSlotName } from '@verbb/plugin-kit-web/components/editable-table/pk-editable-table.js';

Craft.ButtonBoxRatingSettings = Garnish.Base.extend({
    init: function(id) {
        this.$container = $('#' + id);
        if (!this.$container.length || this.$container.data('buttonboxRatingSettings')) return;
        this.$container.data('buttonboxRatingSettings', this);
        const setupComplete = trackSetupChanges(this.$container);
        this.config = this.$container.data('config');
        this.request = 0;
        this.previewSelection = {};
        this.initAppearance();
        this.addListener(this.$container.find('[data-bb-presets]'), 'click', () => this.openPresets());
        this.addListener(this.$container, 'input change', (event) => {
            if (!$(event.target).closest('[data-bb-preview]').length) this.schedulePreview();
        });
        this.observer = new MutationObserver(() => {
            if (!this.$container[0].isConnected) this.destroy();
        });
        this.observer.observe(document.body, { childList: true, subtree: true });
        this.schedulePreview();
        setupComplete();
    },

    control: function(name) {
        return this.$container.find('[name="' + name + '"], [name$="[' + name + ']"]');
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
                // The table contains input events, so listen on the slotted controls too.
                if (column === 'control') this.addListener($(cell), 'input change', () => this.schedulePreview());
            }
            element.remove();
            return row;
        });
    },

    updateAppearanceSummary: function() {
        const summary = this.$container.find('[data-bb-appearance-summary]')[0];
        const labels = JSON.parse(summary.dataset.labels);
        const symbol = this.control('symbol').val();
        const preset = this.config.ratingDefaults[symbol];
        const parts = [labels[symbol] || symbol];
        if (this.$container.find('[data-bb-show-labels]')[0]?.checked || false) parts.push(labels.numeric);
        if (this.$container.find('[data-bb-show-clear]')[0]?.checked) parts.push(labels.clearButton);
        if (preset && ['activeColor', 'inactiveColor'].some((key) => String(this.control(key).val()).toLowerCase() !== preset[key])) parts.push(labels.colours);
        summary.textContent = parts.join(' · ');
    },

    openPresets: async function() {
        if (!this.presetDialog) {
            const $dialog = $(this.$container.find('[data-bb-presets-template]').html()).appendTo(document.body);
            $dialog.find('.buttonbox-preset-card__preview input').remove();
            $dialog.find('[data-bb-preset-help="empty"]').remove();
            this.presetDialog = $dialog[0];
            this.addListener($dialog.find('[data-bb-choose-preset]'), 'click', async (event) => {
                const preset = this.config.presets[$(event.currentTarget).attr('data-bb-choose-preset')];
                if (!preset || this.applyingPreset) return;
                this.applyingPreset = true;
                try {
                    // Presets only copy appearance; numeric behaviour and labels stay field-owned.
                    for (const key of ['symbol', 'activeColor', 'inactiveColor']) this.control(key).val(preset[key]);
                    this.schedulePreview();
                    await this.presetDialog.hide('api');
                } finally {
                    this.applyingPreset = false;
                }
            });
        }
        await this.presetDialog.updateComplete;
        if (this.presetDialog.isConnected) await this.presetDialog.show();
    },

    schedulePreview: function() {
        clearTimeout(this.timer);
        this.updateAppearanceSummary();
        this.control('defaultValue').attr('max', this.control('max').val());
        syncKitValues(this.$container);
        const version = ++this.request;
        this.timer = setTimeout(() => this.updatePreview(version), 250);
    },

    updatePreview: async function(version) {
        if (!this.$container[0].isConnected) return;
        const $preview = this.$container.find('[data-bb-preview]');
        const $status = this.$container.find('[data-bb-status]');
        const data = {};
        for (const key of ['max', 'defaultValue', 'symbol', 'activeColor', 'inactiveColor', 'showLabels']) {
            data[key] = key === 'showLabels' ? Boolean(this.$container.find('[data-bb-show-labels]')[0]?.checked) : this.control(key).val();
        }
        data.showClearButton = Boolean(this.$container.find('[data-bb-show-clear]')[0]?.checked);
        if (this.config.presetEditor) Object.assign(data, { max: 5, defaultValue: 3, showClearButton: false, showLabels: false });
        try {
            const response = await Craft.sendActionRequest('POST', 'buttonbox/rating/preview', { data });
            if (version !== this.request || !this.$container[0].isConnected) return;
            $preview.html(response.data.html);
            // Keep native radio grouping and keyboard behaviour without submitting preview values.
            $preview.find('input').attr('form', this.$container.attr('id') + '-preview-form');
            restorePreviewSelection($preview, this.previewSelection);
            $status.text(response.data.errors.join(' '));
        } catch (error) {
            if (version === this.request && this.$container[0].isConnected) {
                $preview.empty();
                $status.text(Craft.t('buttonbox', 'Preview unavailable. Your settings have been preserved.'));
            }
        }
    },

    destroy: function() {
        clearTimeout(this.timer);
        this.request++;
        this.observer?.disconnect();
        this.presetDialog?.remove();
        this.$container.removeData('buttonboxRatingSettings');
        this.base();
    },
});
