import{B as e,F as t,L as n,M as r,N as i,O as a,P as o,a as s,c,j as l,k as u,o as d,r as f,s as p,t as m,v as h,z as g}from"./chunks/has-slot-DJv86HKx-De_feHaV.js";import{n as _,r as v,t as y}from"./chunks/pk-copy-button-Dfji6-PV-DXFOo7g7.js";var b=class extends r{constructor(...e){super(...e),this.icon=``,this.name=``,this.unsubscribeRegistry=null}connectedCallback(){super.connectedCallback(),this.unsubscribeRegistry=c(()=>{this.requestUpdate()})}disconnectedCallback(){var e;(e=this.unsubscribeRegistry)==null||e.call(this),this.unsubscribeRegistry=null,super.disconnectedCallback()}render(){let e=p(this.icon||this.name);return e?n`${h(d(e,{title:this.label}))}`:t}},x=(b.styles=e`
        :host {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex: none;
            /* Square em box + slight baseline nudge for inline text. Flex
             * parents (e.g. button slots) should zero vertical-align. */
            width: 1em;
            height: 1em;
            line-height: 1;
            vertical-align: -0.125em;
        }

        svg {
            display: block;
            width: 100%;
            height: 100%;
            fill: currentColor;
            /* Allow intentional path overhang past the icon canvas. */
            overflow: visible;
        }
    `,b);i([l()],x.prototype,`icon`,void 0),i([l()],x.prototype,`name`,void 0),i([l()],x.prototype,`label`,void 0),x=i([o(`pk-icon`)],x);var S,C=e`
    @layer pk-component {
        :host {
            display: flex;
            flex: 1 1 auto;
            box-sizing: border-box;
            align-items: center;
            justify-content: center;
            width: 100%;
            min-height: var(--pk-state-panel-min-height, var(--_pk-state-panel-min-height));
            padding: var(--pk-state-panel-padding, var(--_pk-state-panel-padding));
            color: var(--pk-state-panel-body-color, var(--pk-color-gray-500));
            font-family: var(--pk-font-family);
            font-size: var(--_pk-state-panel-font-size);
            line-height: var(--pk-line-height);
            text-align: center;
            --pk-state-panel-accent: var(--pk-color-slate-500);
            --pk-state-panel-icon-background: color-mix(
                in srgb,
                var(--pk-color-slate-200) 55%,
                transparent
            );
            --_pk-state-panel-font-size: var(--pk-font-size-sm);
            --_pk-state-panel-title-size: var(--pk-font-size-base);
            --_pk-state-panel-content-width: 32rem;
            --_pk-state-panel-min-height: 11rem;
            --_pk-state-panel-padding: 2rem 0.875rem;
            --_pk-state-panel-icon-shell-size: 2.125rem;
            --_pk-state-panel-icon-size: 1.0625rem;
            --_pk-state-panel-icon-radius: var(--pk-radius-lg);
            --_pk-state-panel-icon-margin-bottom: 0.625rem;
            --_pk-state-panel-body-margin-top: 0.375rem;
            --_pk-state-panel-details-margin-top: 0.75rem;
            --_pk-state-panel-details-font-size: 0.75rem;
            --_pk-state-panel-details-content-margin-top: 0.625rem;
            --_pk-state-panel-details-max-height: 14rem;
            --_pk-state-panel-details-pre-padding: 0.625rem;
            --_pk-state-panel-details-pre-radius: var(--pk-radius-md);
            --_pk-state-panel-details-pre-font-size: 0.6875rem;
            --_pk-state-panel-copy-button-size: var(--pk-btn-height-xs);
            --_pk-state-panel-copy-icon-size: var(--pk-btn-icon-size-xs);
            --_pk-state-panel-copy-inset: 0.375rem;
            --_pk-state-panel-copy-radius: var(--pk-radius-md);
            --_pk-state-panel-copy-status-size: 0.6875rem;
            --_pk-state-panel-actions-gap: 0.4375rem;
            --_pk-state-panel-actions-margin-top: 1rem;
            --_pk-state-panel-action-height: var(--pk-btn-height-sm);
            --_pk-state-panel-action-font: var(--pk-btn-font-sm);
            --_pk-state-panel-action-padding-inline: var(--pk-btn-padding-inline-sm);
            --_pk-state-panel-action-icon-size: var(--pk-btn-icon-size-sm);
            --_pk-state-panel-action-icon-gap: var(--pk-btn-icon-gap-sm);
            --_pk-state-panel-action-caret-size: var(--pk-btn-caret-size-sm);
            --_pk-state-panel-action-radius: var(--pk-btn-radius-sm);
        }

        :host([size='sm']) {
            --_pk-state-panel-font-size: var(--pk-btn-font-xs);
            --_pk-state-panel-title-size: var(--pk-font-size-sm);
            --_pk-state-panel-content-width: 28rem;
            --_pk-state-panel-min-height: 8rem;
            --_pk-state-panel-padding: 1.25rem 0.75rem;
            --_pk-state-panel-icon-shell-size: 1.75rem;
            --_pk-state-panel-icon-size: 0.875rem;
            --_pk-state-panel-icon-radius: var(--pk-radius-md);
            --_pk-state-panel-icon-margin-bottom: 0.5rem;
            --_pk-state-panel-body-margin-top: 0.25rem;
            --_pk-state-panel-details-margin-top: 0.625rem;
            --_pk-state-panel-details-font-size: 0.6875rem;
            --_pk-state-panel-details-content-margin-top: 0.5rem;
            --_pk-state-panel-details-max-height: 10rem;
            --_pk-state-panel-details-pre-padding: 0.5rem;
            --_pk-state-panel-details-pre-radius: var(--pk-radius-sm);
            --_pk-state-panel-details-pre-font-size: 0.6875rem;
            --_pk-state-panel-copy-button-size: var(--pk-btn-height-xxs);
            --_pk-state-panel-copy-icon-size: var(--pk-btn-icon-size-xxs);
            --_pk-state-panel-copy-inset: 0.3125rem;
            --_pk-state-panel-copy-radius: var(--pk-radius-sm);
            --_pk-state-panel-copy-status-size: 0.6875rem;
            --_pk-state-panel-actions-gap: 0.375rem;
            --_pk-state-panel-actions-margin-top: 0.75rem;
            --_pk-state-panel-action-height: var(--pk-btn-height-xs);
            --_pk-state-panel-action-font: var(--pk-btn-font-xs);
            --_pk-state-panel-action-padding-inline: var(--pk-btn-padding-inline-xs);
            --_pk-state-panel-action-icon-size: var(--pk-btn-icon-size-xs);
            --_pk-state-panel-action-icon-gap: var(--pk-btn-icon-gap-xs);
            --_pk-state-panel-action-caret-size: var(--pk-btn-caret-size-xs);
            --_pk-state-panel-action-radius: var(--pk-btn-radius-xs);
        }

        :host([size='lg']) {
            --_pk-state-panel-font-size: var(--pk-font-size-base);
            --_pk-state-panel-title-size: 1rem;
            --_pk-state-panel-content-width: 35rem;
            --_pk-state-panel-min-height: 14rem;
            --_pk-state-panel-padding: 2.5rem 1rem;
            --_pk-state-panel-icon-shell-size: 2.5rem;
            --_pk-state-panel-icon-size: 1.25rem;
            --_pk-state-panel-icon-radius: 0.625rem;
            --_pk-state-panel-icon-margin-bottom: 0.75rem;
            --_pk-state-panel-body-margin-top: 0.5rem;
            --_pk-state-panel-details-margin-top: 1rem;
            --_pk-state-panel-details-font-size: 0.8125rem;
            --_pk-state-panel-details-content-margin-top: 0.75rem;
            --_pk-state-panel-details-max-height: 18rem;
            --_pk-state-panel-details-pre-padding: 0.75rem;
            --_pk-state-panel-details-pre-radius: var(--pk-radius-lg);
            --_pk-state-panel-details-pre-font-size: 0.75rem;
            --_pk-state-panel-copy-button-size: var(--pk-btn-height-sm);
            --_pk-state-panel-copy-icon-size: var(--pk-btn-icon-size-sm);
            --_pk-state-panel-copy-inset: 0.5rem;
            --_pk-state-panel-copy-radius: var(--pk-radius-lg);
            --_pk-state-panel-copy-status-size: 0.75rem;
            --_pk-state-panel-actions-gap: 0.5rem;
            --_pk-state-panel-actions-margin-top: 1.25rem;
            --_pk-state-panel-action-height: 2.125rem;
            --_pk-state-panel-action-font: var(--pk-font-size-base);
            --_pk-state-panel-action-padding-inline: 9px;
            --_pk-state-panel-action-icon-size: 14px;
            --_pk-state-panel-action-icon-gap: 6px;
            --_pk-state-panel-action-caret-size: 12px;
            --_pk-state-panel-action-radius: var(--pk-radius-lg);
        }

        :host([variant='info']) {
            --pk-state-panel-accent: var(--pk-color-sky-600);
            --pk-state-panel-icon-background: var(--pk-color-sky-50);
        }

        :host([variant='success']) {
            --pk-state-panel-accent: var(--pk-color-teal-600);
            --pk-state-panel-icon-background: var(--pk-color-teal-50);
        }

        :host([variant='warning']) {
            --pk-state-panel-accent: var(--pk-color-amber-600);
            --pk-state-panel-icon-background: var(--pk-color-amber-50);
        }

        :host([variant='error']) {
            --pk-state-panel-accent: var(--pk-color-rose-600);
            --pk-state-panel-icon-background: color-mix(
                in srgb,
                var(--pk-color-rose-500) 12%,
                transparent
            );
        }

        /* A page-level state has nothing around it, so it gets more presence: a larger icon, or a plugin's own spot
           illustration in the icon slot, centred in concentric rings that fade outward. The icon sits straight on
           the page, without a shell. After the size and variant rules, so its scale wins. */
        :host([layout='page']) {
            overflow: hidden;
            --pk-state-panel-icon-background: transparent;
            --_pk-state-panel-font-size: var(--pk-font-size-base);
            --_pk-state-panel-title-size: 1.125rem;
            --_pk-state-panel-content-width: 30rem;
            --_pk-state-panel-min-height: 22rem;
            /* The top leaves room for the filled rings, three gaps out from the icon's centre, so none is cut off. */
            --_pk-state-panel-padding: calc(var(--_pk-state-panel-ring-gap) * 3 - 2rem) 1rem 4rem;
            --_pk-state-panel-icon-shell-size: 4rem;
            --_pk-state-panel-icon-size: 2rem;
            --_pk-state-panel-icon-radius: 0;
            --_pk-state-panel-icon-margin-bottom: 1.75rem;
            --_pk-state-panel-body-margin-top: 0.5rem;
            --_pk-state-panel-ring-gap: 3rem;
        }

        /* Slotted art fills the whole icon area, keeping its own proportions. */
        :host([layout='page']) .icon:has(slot[name='icon']) {
            width: 100%;
            height: 100%;
        }

        /* The panel holds the rings' stacking, so they paint under the shell's background and over nothing outside. */
        :host([layout='page']) .panel {
            position: relative;
            z-index: 0;
        }

        :host([layout='page']) .icon-shell {
            position: relative;
        }

        /* Absolutely positioned, so the rings never change the panel's size. The first ring clears the icon. Each
           ring's band is filled, whitest at the centre and stepping down outward, under the ring lines. */
        :host([layout='page']) .icon-shell::before {
            --_pk-state-panel-ring-fill: var(--pk-state-panel-ring-fill, var(--pk-color-white));
            content: '';
            position: absolute;
            z-index: -1;
            top: 50%;
            left: 50%;
            width: 24rem;
            height: 24rem;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            background:
                repeating-radial-gradient(
                    circle,
                    transparent 0 calc(var(--_pk-state-panel-ring-gap) - 1px),
                    var(--pk-state-panel-ring-color, var(--pk-color-gray-200))
                        calc(var(--_pk-state-panel-ring-gap) - 1px) var(--_pk-state-panel-ring-gap)
                ),
                radial-gradient(
                    circle,
                    color-mix(in srgb, var(--_pk-state-panel-ring-fill) 90%, transparent) 0
                        var(--_pk-state-panel-ring-gap),
                    color-mix(in srgb, var(--_pk-state-panel-ring-fill) 50%, transparent)
                        var(--_pk-state-panel-ring-gap) calc(var(--_pk-state-panel-ring-gap) * 2),
                    color-mix(in srgb, var(--_pk-state-panel-ring-fill) 25%, transparent)
                        calc(var(--_pk-state-panel-ring-gap) * 2) calc(var(--_pk-state-panel-ring-gap) * 3),
                    transparent calc(var(--_pk-state-panel-ring-gap) * 3)
                );
            mask-image: radial-gradient(circle closest-side, #000 15%, transparent 100%);
            pointer-events: none;
        }

        .panel {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: min(
                100%,
                var(--pk-state-panel-content-width, var(--_pk-state-panel-content-width))
            );
            min-width: 0;
        }

        .icon-shell {
            display: inline-flex;
            flex: 0 0 auto;
            align-items: center;
            justify-content: center;
            width: var(--pk-state-panel-icon-shell-size, var(--_pk-state-panel-icon-shell-size));
            height: var(--pk-state-panel-icon-shell-size, var(--_pk-state-panel-icon-shell-size));
            margin-bottom: var(--_pk-state-panel-icon-margin-bottom);
            border-radius: var(--pk-state-panel-icon-radius, var(--_pk-state-panel-icon-radius));
            background: var(--pk-state-panel-icon-background);
            color: var(--pk-state-panel-accent);
        }

        .icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: var(--pk-state-panel-icon-size, var(--_pk-state-panel-icon-size));
            height: var(--pk-state-panel-icon-size, var(--_pk-state-panel-icon-size));
            font-size: var(--pk-state-panel-icon-size, var(--_pk-state-panel-icon-size));
        }

        .icon svg,
        .icon pk-icon,
        .icon ::slotted(*) {
            display: block;
            width: 100%;
            height: 100%;
            fill: currentColor;
        }

        .title {
            margin: 0;
            color: var(--pk-state-panel-title-color, var(--pk-color-gray-900));
            font-size: var(--pk-state-panel-title-size, var(--_pk-state-panel-title-size));
            font-weight: 600;
            line-height: 1.4;
        }

        .title ::slotted(*) {
            margin: 0;
            color: inherit;
            font: inherit;
        }

        .body {
            max-width: 100%;
            margin-top: var(--_pk-state-panel-body-margin-top);
        }

        .body ::slotted(*) {
            margin-block: 0;
        }

        .details {
            width: 100%;
            margin-top: var(--_pk-state-panel-details-margin-top);
            color: var(--pk-state-panel-accent);
            font-size: var(--_pk-state-panel-details-font-size);
        }

        summary {
            width: fit-content;
            margin-inline: auto;
            border-radius: var(--pk-radius-sm);
            cursor: pointer;
        }

        summary:focus-visible,
        .copy:focus-visible {
            outline: none;
            box-shadow: var(--pk-shadow-focus);
        }

        .details-content {
            position: relative;
            margin-top: var(--_pk-state-panel-details-content-margin-top);
            color: var(--pk-color-gray-800);
            text-align: start;
        }

        .details-scroll {
            min-width: 0;
        }

        .details-content ::slotted(pre) {
            box-sizing: border-box;
            max-height: var(
                --pk-state-panel-details-max-height,
                var(--_pk-state-panel-details-max-height)
            );
            margin: 0;
            padding: var(--_pk-state-panel-details-pre-padding);
            overflow: auto;
            border: 1px solid var(--pk-color-gray-200);
            border-radius: var(--_pk-state-panel-details-pre-radius);
            background: var(--pk-color-white);
            color: var(--pk-color-gray-800);
            font:
                var(--_pk-state-panel-details-pre-font-size)/1.5 ui-monospace,
                SFMono-Regular,
                Consolas,
                'Liberation Mono',
                monospace;
            overflow-wrap: anywhere;
            user-select: text;
            white-space: pre-wrap;
        }

        :host([copyable]) .details-content ::slotted(pre) {
            max-height: none;
            padding-inline-end: calc(
                var(--_pk-state-panel-details-pre-padding) +
                    var(--_pk-state-panel-copy-button-size) +
                    var(--_pk-state-panel-copy-inset)
            );
            overflow: visible;
            border: 0;
            border-radius: 0;
            background: transparent;
        }

        :host([copyable]) .details-content {
            overflow: hidden;
            border: 1px solid var(--pk-color-gray-200);
            border-radius: var(--_pk-state-panel-details-pre-radius);
            background: var(--pk-color-white);
        }

        :host([copyable]) .details-scroll {
            position: relative;
            max-height: var(
                --pk-state-panel-details-max-height,
                var(--_pk-state-panel-details-max-height)
            );
            overflow: auto;
        }

        .copy-overlay {
            position: sticky;
            z-index: 1;
            top: 0;
            display: flex;
            justify-content: flex-end;
            height: 0;
            pointer-events: none;
        }

        .copy {
            flex: none;
            margin-block-start: var(--_pk-state-panel-copy-inset);
            margin-inline-end: var(--_pk-state-panel-copy-inset);
            pointer-events: auto;
            --pk-btn-height-default: var(--_pk-state-panel-copy-button-size);
            --pk-btn-icon-size-default: var(--_pk-state-panel-copy-icon-size);
            --pk-btn-radius-default: var(--_pk-state-panel-copy-radius);
            --pk-copy-button-background: var(--pk-color-white);
            --pk-copy-button-border-color: transparent;
            --pk-copy-button-hover-border-color: transparent;
            --pk-copy-button-color: var(--pk-color-gray-300);
            --pk-copy-button-hover-color: var(--pk-color-gray-500);
            --pk-copy-button-hover-background: color-mix(
                in srgb,
                var(--pk-color-gray-300) 6%,
                var(--pk-color-white)
            );
        }

        .copy-status {
            display: block;
            margin-top: 0.375rem;
            color: var(--pk-color-red-700);
            font-size: var(--_pk-state-panel-copy-status-size);
            text-align: start;
        }

        .copy-status:not([data-error]) {
            position: absolute;
            width: 1px;
            height: 1px;
            margin: -1px;
            padding: 0;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        .actions {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: var(--_pk-state-panel-actions-gap);
            margin-top: var(--_pk-state-panel-actions-margin-top);
        }

        .actions slot::slotted(pk-button) {
            --pk-btn-height-default: var(--_pk-state-panel-action-height);
            --pk-btn-font-default: var(--_pk-state-panel-action-font);
            --pk-btn-padding-inline-default: var(--_pk-state-panel-action-padding-inline);
            --pk-btn-icon-size-default: var(--_pk-state-panel-action-icon-size);
            --pk-btn-icon-gap-default: var(--_pk-state-panel-action-icon-gap);
            --pk-btn-caret-size-default: var(--_pk-state-panel-action-caret-size);
            --pk-btn-radius-default: var(--_pk-state-panel-action-radius);
        }
    }
`,w=3e3,T={empty:f.emptySet,info:f.circleInfo,success:f.circleCheck,warning:f.triangleExclamation,error:f.triangleExclamation},E=(S=class extends r{constructor(...e){super(...e),this.hasSlotController=new m(this,`title`,`icon`,`details`,`actions`),this.variant=`empty`,this.size=`default`,this.layout=`region`,this.heading=``,this.headingLevel=2,this.icon=``,this.hideIcon=!1,this.announce=`off`,this.detailsLabel=`Details`,this.detailsOpen=!1,this.copyable=!1,this.copyLabel=`Copy details`,this.copiedLabel=`Details copied.`,this.copyErrorLabel=`Copy failed. Select the details and copy them manually.`,this.copyStatus=``,this.copyFailed=!1}disconnectedCallback(){window.clearTimeout(this.copyStatusResetTimer),super.disconnectedCallback()}hasTitle(){return!!this.heading||this.hasSlotController.test(`title`)}get detailsValue(){var e,t;return((e=(t=this.detailsSlot)==null?void 0:t.assignedNodes({flatten:!0}))==null?[]:e).map(e=>{var t;return(t=e.textContent)==null?``:t}).join(``).trim()}resetCopyStatusLater(){window.clearTimeout(this.copyStatusResetTimer),this.copyStatusResetTimer=window.setTimeout(()=>{this.copyStatus=``,this.copyFailed=!1},w)}showCopySuccess(){this.copyFailed=!1,this.copyStatus=this.copiedLabel,this.resetCopyStatusLater()}showCopyError(){this.copyFailed=!0,this.copyStatus=this.copyErrorLabel,this.resetCopyStatusLater()}handleCopySuccess(){this.showCopySuccess()}handleCopyError(){this.showCopyError(),this.selectDetails()}selectDetails(){var e,t;let n=(e=(t=this.detailsSlot)==null?void 0:t.assignedNodes({flatten:!0}))==null?[]:e,r=n[0],i=n[n.length-1];if(!r||!i)return;this.detailsOpen=!0;let a=document.createRange();a.setStartBefore(r),a.setEndAfter(i);let o=window.getSelection();o==null||o.removeAllRanges(),o==null||o.addRange(a)}copyDetails(){var e=this;return g(function*(){let t=e.detailsValue;if(!t)e.showCopyError(),e.dispatchEvent(new y);else if(e.copyButton)e.copyButton.value=t,yield e.copyButton.copy();else try{yield v(t),e.showCopySuccess();let n=new _(t);e.dispatchEvent(n)}catch(t){e.showCopyError(),e.selectDetails(),e.dispatchEvent(new y)}})()}handleDetailsToggle(e){this.detailsOpen=e.currentTarget.open}renderIcon(){var e;if(this.hideIcon)return t;let r;return r=this.hasSlotController.test(`icon`)?n`<slot name="icon"></slot>`:this.icon?n`<pk-icon .icon=${this.icon}></pk-icon>`:h(s((e=T[this.variant])==null?T.empty:e)),n`
            <span part="icon-shell" class="icon-shell" aria-hidden="true">
                <span part="icon" class="icon">${r}</span>
            </span>
        `}render(){let e=this.announce===`assertive`?`alert`:this.announce===`polite`?`status`:t,r=this.announce===`off`?t:this.announce,i=this.hasSlotController.test(`details`),a=this.hasSlotController.test(`actions`);return n`
            <div
                part="base"
                class="panel"
                role=${e}
                aria-live=${r}
                aria-atomic=${this.announce===`off`?t:`true`}
            >
                ${this.renderIcon()}

                ${this.hasTitle()?n`
                        <div
                            part="title"
                            class="title"
                            role="heading"
                            aria-level=${this.headingLevel}
                        >
                            ${this.hasSlotController.test(`title`)?n`<slot name="title"></slot>`:this.heading}
                        </div>
                    `:t}

                <div part="body" class="body"><slot></slot></div>

                ${i?n`
                        <details
                            part="details"
                            class="details"
                            ?open=${this.detailsOpen}
                            @toggle=${this.handleDetailsToggle}
                        >
                            <summary part="details-summary">${this.detailsLabel}</summary>
                            <div part="details-content" class="details-content">
                                <div class="details-scroll">
                                    ${this.copyable?n`
                                            <div class="copy-overlay">
                                                <pk-copy-button
                                                    part="copy-button"
                                                    class="copy"
                                                    variant="transparent"
                                                    aria-label=${this.copyLabel}
                                                    .copiedLabel=${this.copiedLabel}
                                                    .value=${this.detailsValue}
                                                    @pk-copy=${this.handleCopySuccess}
                                                    @pk-copy-error=${this.handleCopyError}
                                                ></pk-copy-button>
                                            </div>
                                        `:t}
                                    <slot name="details"></slot>
                                </div>
                            </div>

                            ${this.copyable?n`
                                    <span
                                        part="copy-status"
                                        class="copy-status"
                                        data-error=${this.copyFailed?``:t}
                                        role="status"
                                        aria-live="polite"
                                    >${this.copyStatus}</span>
                                `:t}
                        </details>
                    `:t}

                ${a?n`<div part="actions" class="actions"><slot name="actions"></slot></div>`:t}
            </div>
        `}},S.styles=C,S);i([l({reflect:!0})],E.prototype,`variant`,void 0),i([l({reflect:!0})],E.prototype,`size`,void 0),i([l({reflect:!0})],E.prototype,`layout`,void 0),i([l()],E.prototype,`heading`,void 0),i([l({type:Number,attribute:`heading-level`})],E.prototype,`headingLevel`,void 0),i([l()],E.prototype,`icon`,void 0),i([l({type:Boolean,attribute:`hide-icon`,reflect:!0})],E.prototype,`hideIcon`,void 0),i([l({reflect:!0})],E.prototype,`announce`,void 0),i([l({attribute:`details-label`})],E.prototype,`detailsLabel`,void 0),i([l({type:Boolean,attribute:`details-open`,reflect:!0})],E.prototype,`detailsOpen`,void 0),i([l({type:Boolean,reflect:!0})],E.prototype,`copyable`,void 0),i([l({attribute:`copy-label`})],E.prototype,`copyLabel`,void 0),i([l({attribute:`copied-label`})],E.prototype,`copiedLabel`,void 0),i([l({attribute:`copy-error-label`})],E.prototype,`copyErrorLabel`,void 0),i([a(`slot[name="details"]`)],E.prototype,`detailsSlot`,void 0),i([a(`pk-copy-button.copy`)],E.prototype,`copyButton`,void 0),i([u()],E.prototype,`copyStatus`,void 0),i([u()],E.prototype,`copyFailed`,void 0),E=i([o(`pk-state-panel`)],E);
//# sourceMappingURL=option-sets.js.map