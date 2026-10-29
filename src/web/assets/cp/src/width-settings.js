import { applyPresetSettings } from './preset-settings.js';
// Width shares the option-table/disclosure lifecycle with Position, with its own contract.
Craft.ButtonBoxWidthSettings = Craft.ButtonBoxPositionSettings.extend({
    previewAction: 'buttonbox/width/preview',

    applyPreset: function(preset) {
        this.optionTable.replaceRows(preset.options);
        this.control('displayStyle').each((index, input) => { input.checked = input.value === preset.displayStyle; });
        applyPresetSettings(this.$container[0], preset, ['labelDisplay', 'showTooltips']);
    },

    previewData: function(options) {
        return {
            options,
            displayStyle: this.control('displayStyle').filter(':checked').val(),
            labelDisplay: this.control('labelDisplay').val(),
            showTooltips: this.$container.find('[data-bb-show-tooltips]')[0].checked,
            appearance: this.appearance(),
        };
    },

    updateAppearanceSummary: function() {
        const summary = this.$container.find('[data-bb-appearance-summary]')[0];
        const labels = JSON.parse(summary.dataset.labels);
        const appearance = this.appearance();
        const parts = [];
        const labelDisplay = this.control('labelDisplay').val();
        if (labelDisplay !== 'selected') parts.push(labels[labelDisplay]);
        if (!this.$container.find('[data-bb-show-tooltips]')[0].checked) parts.push(labels.tooltipsOff);
        if (appearance.size && appearance.size !== 'default') parts.push(appearance.size.toUpperCase());
        if (['textColor', 'backgroundColor', 'fillColor', 'selectionColor', 'borderColor'].some((key) => appearance[key])) parts.push(labels.colours);
        if (appearance.borderWidth !== '' || appearance.radius !== '') parts.push(labels.borders);
        summary.textContent = parts.length ? parts.join(' · ') : labels.default;
    },
});
