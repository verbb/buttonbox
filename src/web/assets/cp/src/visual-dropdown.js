import '@verbb/plugin-kit-web/components/select.js';

// Own only the Craft value bridge and visual metadata. Plugin Kit owns the listbox lifecycle.
class VisualDropdown extends HTMLElement {
    connectedCallback() {
        this.connectVersion = (this.connectVersion || 0) + 1;
        const version = this.connectVersion;
        customElements.whenDefined('pk-select').then(async () => {
            if (!this.isConnected || version !== this.connectVersion) return;
            this.select = this.querySelector('pk-select');
            this.input = this.querySelector('[data-dropdown-value]');
            if (!this.select || !this.input) return;
            this.metadata = JSON.parse(this.dataset.options || '{}');
            this.initialValue ??= this.input.value;
            await this.select.updateComplete;
            if (!this.isConnected || version !== this.connectVersion) return;
            this.onSelection = () => {
                if (this.select.disabled) return;
                this.input.value = this.select.value;
                this.updateVisual();
                // Native inputs keep Craft's delta detection and nested/inline forms working.
                this.input.dispatchEvent(new Event('input', { bubbles: true }));
                this.input.dispatchEvent(new Event('change', { bubbles: true }));
            };
            this.onInput = () => {
                this.select.value = this.input.value;
                this.updateVisual();
            };
            this.onReset = (event) => setTimeout(() => {
                if (!this.isConnected || event.defaultPrevented) return;
                // Hidden inputs reflect value changes into their default value, so retain the original explicitly.
                this.input.value = this.initialValue;
                this.onInput();
            });
            this.select.addEventListener('pk-change', this.onSelection);
            this.input.addEventListener('change', this.onInput);
            this.form = this.input.form;
            this.form?.addEventListener('reset', this.onReset);
            this.onInput();
        });
    }

    disconnectedCallback() {
        this.connectVersion = (this.connectVersion || 0) + 1;
        this.select?.removeEventListener('pk-change', this.onSelection);
        this.input?.removeEventListener('change', this.onInput);
        this.form?.removeEventListener('reset', this.onReset);
    }

    updateVisual() {
        const option = this.metadata[this.input.value];
        if (option?.size) this.style.setProperty('--buttonbox-dropdown-font', `${option.size}px`);
        else this.style.removeProperty('--buttonbox-dropdown-font');
        this.select.setAttribute('aria-label', `${this.dataset.label}: ${option?.label || this.dataset.placeholder}`);
        this.select.invalid = Boolean(option?.unavailable);
        const warning = this.querySelector('[data-dropdown-warning]');
        warning.hidden = !option?.unavailable;
        warning.textContent = option?.unavailable ? option.reason || option.label : '';
    }
}

if (!customElements.get('buttonbox-dropdown')) customElements.define('buttonbox-dropdown', VisualDropdown);
