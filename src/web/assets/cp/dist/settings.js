const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["chunks/markdown-BdZjEZfi.js","chunks/has-slot-DJv86HKx-De_feHaV.js"])))=>i.map(i=>d[i]);
import{A as e,B as t,C as n,D as r,E as i,F as a,I as o,L as s,M as c,N as l,O as u,P as d,R as f,S as p,T as m,_ as h,a as g,b as ee,d as te,f as ne,g as re,h as ie,i as ae,j as _,k as v,l as oe,m as se,n as ce,p as le,r as y,s as ue,t as b,u as de,v as x,w as S,x as fe,y as C,z as w}from"./chunks/has-slot-DJv86HKx-De_feHaV.js";import{A as T,C as pe,D as me,E as he,O as ge,S as _e,T as ve,_ as ye,a as be,b as xe,c as Se,d as Ce,f as we,g as E,h as Te,i as Ee,k as De,l as Oe,m as D,n as ke,o as Ae,p as je,r as Me,s as Ne,t as Pe,u as Fe,v as Ie,w as Le,x as Re,y as O}from"./input.js";import{n as ze,r as Be,t as Ve}from"./chunks/pk-copy-button-Dfji6-PV-DXFOo7g7.js";function*He(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*He(e.shadowRoot.activeElement)))}function Ue(e,t,n){for(let r of n){if(!Object.hasOwn(t,r))continue;let n=t[r];e.querySelectorAll(`[name]`).forEach(t=>{var i;(t.name===r||(i=t.name)!=null&&i.endsWith(`[${r}]`))&&(t.localName===`pk-lightswitch`?t.checked=n===!0||n===`1`||n===1:t.type===`radio`?t.checked=t.value===String(n):t.type===`hidden`&&e.querySelector(`pk-lightswitch[name="${t.name}"]`)||(t.value=n))})}if(Object.hasOwn(t,`appearance`)){let n={size:`default`,showLabels:!0,labelTooltips:!1};e.querySelectorAll(`[data-bb-appearance-key]`).forEach(e=>{var r,i;let a=e.dataset.bbAppearanceKey,o=(r=(i=t.appearance[a])==null?n[a]:i)==null?``:r;e.localName===`pk-lightswitch`?e.checked=o===!0||o===`1`||o===1:e.value=o})}}function We(e){let t=e.children(`[data-bb-kit-values]`);t.length||(t=$(`<div hidden data-bb-kit-values/>`).appendTo(e)),t.empty(),e.find(`[name]`).each((e,n)=>{n.localName.startsWith(`pk-`)&&!n.matches(`:disabled`)&&($(n).closest(`[data-bb-preview], [data-actions-preview]`).length||$(`<input/>`,{type:`hidden`,name:n.getAttribute(`name`),value:n.localName===`pk-lightswitch`?n.checked?`1`:`0`:n.value}).appendTo(t))})}function Ge(e){let t=e.closest(`form`),n=()=>(t.data(`serializer`)||(()=>t.serialize()))(),r=t.length>0&&t.data(`initialSerializedValue`)===n();return()=>{r&&t.data(`initialSerializedValue`,n())}}var Ke=e=>e.filter(`:checked`).map((e,t)=>t.value).get();function qe(e,t){let n=e.find(`input[type=radio], input[type=checkbox]`),r=Ke(n).join(`
`);t.defaults!==r&&(t.values=null),t.defaults=r;let i=n.filter(`:not(:disabled)`).get();if(t.values&&t.values.every(e=>i.some(t=>t.value===e))){var a;n.each((e,n)=>{n.checked=t.values.includes(n.value)}),(a=n.filter(`:checked`)[0]||n[0])==null||a.dispatchEvent(new Event(`change`,{bubbles:!0}))}n.on(`change`,()=>{t.values=Ke(n)})}var Je,Ye=class extends Event{constructor(){super(`pk-dismiss`,{bubbles:!0,cancelable:!0,composed:!0})}},Xe=t`
    @layer pk-component {
        :host {
            display: block;
            width: 100%;
            color: var(--pk-alert-color);
            font-family: var(--pk-font-family);
            font-size: var(--_pk-alert-font-size);
            line-height: var(--pk-line-height);
            --pk-alert-accent: var(--pk-color-sky-600);
            --pk-alert-background: var(--pk-color-sky-50);
            --pk-alert-border: var(--pk-color-sky-300);
            --pk-alert-color: var(--pk-color-sky-800);
            --_pk-alert-font-size: var(--pk-font-size-sm);
            --_pk-alert-padding: 0.625rem 0.75rem;
            --_pk-alert-radius: var(--pk-radius-md);
            --_pk-alert-gap: 0.5rem;
            --_pk-alert-icon-size: 1.125rem;
            --_pk-alert-title-size: var(--pk-font-size-base);
            --_pk-alert-dismiss-size: 1.5rem;
            --_pk-alert-dismiss-padding: 0.375rem;
            --_pk-alert-dismiss-margin: -0.125rem -0.1875rem -0.125rem 0;
            --_pk-alert-section-margin-top: 0.625rem;
            --_pk-alert-details-padding-top: 0.5rem;
            --_pk-alert-details-content-margin-top: 0.625rem;
            --_pk-alert-details-pre-padding: 0.625rem;
            --_pk-alert-details-pre-radius: var(--pk-radius-md);
            --_pk-alert-details-pre-font-size: 0.6875rem;
            --_pk-alert-copy-button-size: var(--pk-btn-height-xs);
            --_pk-alert-copy-icon-size: var(--pk-btn-icon-size-xs);
            --_pk-alert-copy-inset: 0.375rem;
            --_pk-alert-copy-radius: var(--pk-radius-md);
            --_pk-alert-copy-status-size: 0.6875rem;
            --_pk-alert-action-height: var(--pk-btn-height-sm);
            --_pk-alert-action-font: var(--pk-btn-font-sm);
            --_pk-alert-action-padding-inline: var(--pk-btn-padding-inline-sm);
            --_pk-alert-action-icon-size: var(--pk-btn-icon-size-sm);
            --_pk-alert-action-icon-gap: var(--pk-btn-icon-gap-sm);
            --_pk-alert-action-caret-size: var(--pk-btn-caret-size-sm);
            --_pk-alert-action-radius: var(--pk-btn-radius-sm);
        }

        :host([hidden]) {
            display: none;
        }

        :host([size='sm']) {
            --_pk-alert-font-size: var(--pk-btn-font-xs);
            --_pk-alert-padding: 0.5rem 0.625rem;
            --_pk-alert-radius: var(--pk-radius-sm);
            --_pk-alert-gap: 0.4375rem;
            --_pk-alert-icon-size: 1rem;
            --_pk-alert-title-size: var(--pk-font-size-sm);
            --_pk-alert-dismiss-size: 1.375rem;
            --_pk-alert-dismiss-padding: 0.3125rem;
            --_pk-alert-dismiss-margin: -0.125rem -0.125rem -0.125rem 0;
            --_pk-alert-section-margin-top: 0.5rem;
            --_pk-alert-details-padding-top: 0.375rem;
            --_pk-alert-details-content-margin-top: 0.5rem;
            --_pk-alert-details-pre-padding: 0.5rem;
            --_pk-alert-details-pre-radius: var(--pk-radius-sm);
            --_pk-alert-details-pre-font-size: 0.6875rem;
            --_pk-alert-copy-button-size: var(--pk-btn-height-xxs);
            --_pk-alert-copy-icon-size: var(--pk-btn-icon-size-xxs);
            --_pk-alert-copy-inset: 0.3125rem;
            --_pk-alert-copy-radius: var(--pk-radius-sm);
            --_pk-alert-copy-status-size: 0.6875rem;
            --_pk-alert-action-height: var(--pk-btn-height-xs);
            --_pk-alert-action-font: var(--pk-btn-font-xs);
            --_pk-alert-action-padding-inline: var(--pk-btn-padding-inline-xs);
            --_pk-alert-action-icon-size: var(--pk-btn-icon-size-xs);
            --_pk-alert-action-icon-gap: var(--pk-btn-icon-gap-xs);
            --_pk-alert-action-caret-size: var(--pk-btn-caret-size-xs);
            --_pk-alert-action-radius: var(--pk-btn-radius-xs);
        }

        :host([size='lg']) {
            --_pk-alert-font-size: var(--pk-font-size-base);
            --_pk-alert-padding: 0.875rem 1rem;
            --_pk-alert-radius: var(--pk-radius-lg);
            --_pk-alert-gap: 0.75rem;
            --_pk-alert-icon-size: 1.375rem;
            --_pk-alert-title-size: 0.9375rem;
            --_pk-alert-dismiss-size: 1.75rem;
            --_pk-alert-dismiss-padding: 0.4375rem;
            --_pk-alert-dismiss-margin: -0.1875rem -0.25rem -0.1875rem 0;
            --_pk-alert-section-margin-top: 0.75rem;
            --_pk-alert-details-padding-top: 0.625rem;
            --_pk-alert-details-content-margin-top: 0.75rem;
            --_pk-alert-details-pre-padding: 0.75rem;
            --_pk-alert-details-pre-radius: var(--pk-radius-lg);
            --_pk-alert-details-pre-font-size: 0.75rem;
            --_pk-alert-copy-button-size: var(--pk-btn-height-sm);
            --_pk-alert-copy-icon-size: var(--pk-btn-icon-size-sm);
            --_pk-alert-copy-inset: 0.5rem;
            --_pk-alert-copy-radius: var(--pk-radius-lg);
            --_pk-alert-copy-status-size: 0.75rem;
            --_pk-alert-action-height: 2.125rem;
            --_pk-alert-action-font: var(--pk-font-size-base);
            --_pk-alert-action-padding-inline: 9px;
            --_pk-alert-action-icon-size: 14px;
            --_pk-alert-action-icon-gap: 6px;
            --_pk-alert-action-caret-size: 12px;
            --_pk-alert-action-radius: var(--pk-radius-lg);
        }

        .alert {
            box-sizing: border-box;
            width: 100%;
            padding: var(--pk-alert-padding, var(--_pk-alert-padding));
            border: 1px solid var(--pk-alert-border);
            border-inline-start: 4px solid var(--pk-alert-accent);
            border-radius: var(--pk-alert-radius, var(--_pk-alert-radius));
            background: var(--pk-alert-background);
        }

        :host([variant='success']) {
            --pk-alert-accent: var(--pk-color-teal-600);
            --pk-alert-background: var(--pk-color-teal-50);
            --pk-alert-border: var(--pk-color-teal-400);
            --pk-alert-color: var(--pk-color-teal-800);
        }

        :host([variant='neutral']) {
            --pk-alert-accent: var(--pk-color-gray-600);
            --pk-alert-background: var(--pk-color-gray-50);
            --pk-alert-border: var(--pk-color-gray-300);
            --pk-alert-color: var(--pk-color-gray-800);
        }

        :host([variant='warning']) {
            --pk-alert-accent: var(--pk-color-amber-600);
            --pk-alert-background: var(--pk-color-amber-50);
            --pk-alert-border: var(--pk-color-amber-300);
            --pk-alert-color: var(--pk-color-amber-800);
        }

        :host([variant='error']) {
            --pk-alert-accent: var(--pk-color-red-600);
            --pk-alert-background: var(--pk-color-red-50);
            --pk-alert-border: var(--pk-color-red-300);
            --pk-alert-color: var(--pk-color-red-800);
        }

        :host([appearance='filled-outlined']) .alert {
            border-inline-start-width: 1px;
            border-inline-start-color: var(--pk-alert-border);
        }

        :host([appearance='filled']) .alert {
            border-color: transparent;
            border-inline-start-width: 1px;
        }

        :host([appearance='outlined']) .alert {
            border-color: var(--pk-alert-accent);
            border-inline-start-width: 1px;
            background: transparent;
        }

        :host([appearance='plain']) .alert {
            border-color: transparent;
            border-inline-start-width: 1px;
            background: transparent;
        }

        /* For tinted surfaces, such as a control panel page: a raised white card with a whisper of the variant
           colour, so the alert keeps its edge where a pale tint would blend in. Only the edge, icon and title
           carry colour. */
        :host([appearance='raised']) {
            --pk-alert-title-color: var(--pk-alert-color);
            --pk-alert-body-color: var(--pk-color-gray-700);
        }

        /* The outline is a real border, not a ring shadow, so the accent edge replaces it on the leading side
           instead of sitting inside it. */
        :host([appearance='raised']) .alert {
            border-color: color-mix(in oklab, var(--pk-color-gray-400) 45%, transparent);
            border-inline-start-color: var(--pk-alert-accent);
            background: color-mix(in srgb, var(--pk-alert-accent) 5%, var(--pk-color-white, #fff));
            background-clip: padding-box;
            box-shadow: var(
                --pk-alert-raised-shadow,
                0 2px 8px -2px color-mix(in oklab, var(--pk-color-gray-900) 12%, transparent)
            );
        }


        .notice {
            display: flex;
            align-items: flex-start;
            gap: var(--_pk-alert-gap);
            min-width: 0;
        }

        .icon {
            display: inline-flex;
            flex: 0 0 auto;
            align-items: center;
            justify-content: center;
            width: var(--_pk-alert-icon-size);
            height: var(--_pk-alert-icon-size);
            margin-top: 0.0625rem;
            color: var(--pk-alert-accent);
        }

        .icon svg,
        .dismiss svg {
            display: block;
            width: 100%;
            height: 100%;
            fill: currentColor;
        }

        .content {
            min-width: 0;
            flex: 1 1 auto;
        }

        .title {
            display: block;
            margin: 0 0 0.125rem;
            color: var(--pk-alert-title-color, var(--pk-alert-accent));
            font-size: var(--pk-alert-title-size, var(--_pk-alert-title-size));
            font-weight: 700;
            line-height: 1.4;
        }

        .body {
            color: var(
                --pk-alert-body-color,
                var(--pk-alert-title-color, var(--pk-alert-accent))
            );
        }

        .body ::slotted(*) {
            /* Host document styles outrank normal shadow rules for slotted elements. */
            margin-block: 0 !important;
        }

        .dismiss {
            display: inline-flex;
            flex: 0 0 auto;
            align-items: center;
            justify-content: center;
            width: var(--_pk-alert-dismiss-size);
            height: var(--_pk-alert-dismiss-size);
            margin: var(--_pk-alert-dismiss-margin);
            padding: var(--_pk-alert-dismiss-padding);
            border: 0;
            border-radius: var(--pk-radius-md);
            background: transparent;
            color: var(--pk-alert-accent);
            cursor: pointer;
        }

        .dismiss:hover {
            background: color-mix(
                in srgb,
                var(--pk-alert-accent) 10%,
                transparent
            );
        }

        .dismiss:focus-visible,
        .copy:focus-visible,
        summary:focus-visible {
            outline: none;
            box-shadow: var(--pk-shadow-focus);
        }

        .actions,
        .details {
            margin-inline-start: calc(var(--_pk-alert-icon-size) + var(--_pk-alert-gap));
        }

        :host([hide-icon]) .actions,
        :host([hide-icon]) .details {
            margin-inline-start: 0;
        }

        .actions {
            margin-top: var(--_pk-alert-section-margin-top);
        }

        .actions slot::slotted(pk-button) {
            --pk-btn-height-default: var(--_pk-alert-action-height);
            --pk-btn-font-default: var(--_pk-alert-action-font);
            --pk-btn-padding-inline-default: var(--_pk-alert-action-padding-inline);
            --pk-btn-icon-size-default: var(--_pk-alert-action-icon-size);
            --pk-btn-icon-gap-default: var(--_pk-alert-action-icon-gap);
            --pk-btn-caret-size-default: var(--_pk-alert-action-caret-size);
            --pk-btn-radius-default: var(--_pk-alert-action-radius);
        }

        .details {
            margin-top: var(--_pk-alert-section-margin-top);
            padding-top: var(--_pk-alert-details-padding-top);
            border-top: 1px solid var(--pk-alert-border);
            color: var(--pk-color-gray-800);
        }

        summary {
            width: fit-content;
            border-radius: var(--pk-radius-sm);
            font-weight: 600;
            cursor: pointer;
        }

        .details-content {
            position: relative;
            margin-top: var(--_pk-alert-details-content-margin-top);
        }

        .details-scroll {
            min-width: 0;
        }

        .details-content ::slotted(pre) {
            box-sizing: border-box;
            max-height: var(--pk-alert-details-max-height, 16rem);
            margin: 0;
            padding: var(--_pk-alert-details-pre-padding);
            overflow: auto;
            border: 1px solid var(--pk-color-gray-200);
            border-radius: var(--_pk-alert-details-pre-radius);
            background: var(--pk-color-white);
            color: var(--pk-color-gray-800);
            /* Keep host pre resets from changing diagnostic typography. */
            font:
                var(--_pk-alert-details-pre-font-size)/1.5 ui-monospace,
                SFMono-Regular,
                Consolas,
                'Liberation Mono',
                monospace !important;
            overflow-wrap: anywhere;
            user-select: text;
            white-space: pre-wrap;
        }

        :host([copyable]) .details-content ::slotted(pre) {
            max-height: none;
            padding-inline-end: calc(
                var(--_pk-alert-details-pre-padding) + var(--_pk-alert-copy-button-size) +
                    var(--_pk-alert-copy-inset)
            );
            overflow: visible;
            border: 0;
            border-radius: 0;
            background: transparent;
        }

        :host([copyable]) .details-content {
            overflow: hidden;
            border: 1px solid var(--pk-color-gray-200);
            border-radius: var(--_pk-alert-details-pre-radius);
            background: var(--pk-color-white);
        }

        :host([copyable]) .details-scroll {
            position: relative;
            max-height: var(--pk-alert-details-max-height, 16rem);
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
            margin-block-start: var(--_pk-alert-copy-inset);
            margin-inline-end: var(--_pk-alert-copy-inset);
            pointer-events: auto;
            --pk-btn-height-default: var(--_pk-alert-copy-button-size);
            --pk-btn-icon-size-default: var(--_pk-alert-copy-icon-size);
            --pk-btn-radius-default: var(--_pk-alert-copy-radius);
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
            font-size: var(--_pk-alert-copy-status-size);
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

        @media (max-width: 480px) {
            .actions,
            .details {
                margin-inline-start: 0;
            }
        }
    }
`,Ze=3e3,Qe={neutral:y.circleInfo,info:y.circleInfo,success:y.circleCheck,warning:y.triangleExclamation,error:y.circleExclamation},k=(Je=class extends c{constructor(...e){super(...e),this.hasSlotController=new b(this,`title`,`icon`,`actions`,`details`),this.variant=`info`,this.size=`default`,this.appearance=`accent`,this.heading=``,this.hideIcon=!1,this.dismissible=!1,this.announce=`off`,this.detailsLabel=`Details`,this.detailsOpen=!1,this.copyable=!1,this.copyLabel=`Copy details`,this.copiedLabel=`Details copied.`,this.copyErrorLabel=`Copy failed. Select the details and copy them manually.`,this.dismissLabel=`Dismiss`,this.copyStatus=``,this.copyFailed=!1}disconnectedCallback(){window.clearTimeout(this.copyStatusResetTimer),super.disconnectedCallback()}hasTitle(){return!!this.heading||this.hasSlotController.test(`title`)}hasDetails(){return this.hasSlotController.test(`details`)}get detailsValue(){var e,t;return((e=(t=this.detailsSlot)==null?void 0:t.assignedNodes({flatten:!0}))==null?[]:e).map(e=>{var t;return(t=e.textContent)==null?``:t}).join(``).trim()}resetCopyStatusLater(){window.clearTimeout(this.copyStatusResetTimer),this.copyStatusResetTimer=window.setTimeout(()=>{this.copyStatus=``,this.copyFailed=!1},Ze)}showCopySuccess(){this.copyFailed=!1,this.copyStatus=this.copiedLabel,this.resetCopyStatusLater()}showCopyError(){this.copyFailed=!0,this.copyStatus=this.copyErrorLabel,this.resetCopyStatusLater()}handleCopySuccess(){this.showCopySuccess()}handleCopyError(){this.showCopyError(),this.selectDetails()}selectDetails(){var e,t;let n=(e=(t=this.detailsSlot)==null?void 0:t.assignedNodes({flatten:!0}))==null?[]:e,r=n[0],i=n[n.length-1];if(!r||!i)return;this.detailsOpen=!0;let a=document.createRange();a.setStartBefore(r),a.setEndAfter(i);let o=window.getSelection();o==null||o.removeAllRanges(),o==null||o.addRange(a)}copyDetails(){var e=this;return w(function*(){let t=e.detailsValue;if(!t)e.showCopyError(),e.dispatchEvent(new Ve);else if(e.copyButton)e.copyButton.value=t,yield e.copyButton.copy();else try{yield Be(t),e.showCopySuccess();let n=new ze(t);e.dispatchEvent(n)}catch(t){e.showCopyError(),e.selectDetails(),e.dispatchEvent(new Ve)}})()}dismiss(){this.dispatchEvent(new Ye)&&(this.hidden=!0)}show(){this.hidden=!1}handleDetailsToggle(e){this.detailsOpen=e.currentTarget.open}renderIcon(){var e;if(this.hideIcon)return a;let t=this.hasSlotController.test(`icon`)?s`<slot name="icon"></slot>`:x(g((e=Qe[this.variant])==null?Qe.info:e));return s`<span part="icon" class="icon" aria-hidden="true">${t}</span>`}render(){let e=this.announce===`assertive`?`alert`:this.announce===`polite`?`status`:a,t=this.announce===`off`?a:this.announce,n=this.hasSlotController.test(`actions`),r=this.hasDetails();return s`
            <div
                part="base"
                class="alert"
                role=${e}
                aria-live=${t}
                aria-atomic=${this.announce===`off`?a:`true`}
            >
                <div part="notice" class="notice">
                    ${this.renderIcon()}

                    <div part="content" class="content">
                        ${this.hasTitle()?s`
                                <strong part="title" class="title">
                                    ${this.hasSlotController.test(`title`)?s`<slot name="title"></slot>`:this.heading}
                                </strong>
                            `:a}

                        <div part="body" class="body"><slot></slot></div>
                    </div>

                    ${this.dismissible?s`
                            <button
                                part="dismiss-button"
                                class="dismiss"
                                type="button"
                                aria-label=${this.dismissLabel}
                                @click=${this.dismiss}
                            >
                                ${x(g(y.xmark))}
                            </button>
                        `:a}
                </div>

                ${n?s`<div part="actions" class="actions"><slot name="actions"></slot></div>`:a}

                ${r?s`
                        <details
                            part="details"
                            class="details"
                            ?open=${this.detailsOpen}
                            @toggle=${this.handleDetailsToggle}
                        >
                            <summary part="details-summary">${this.detailsLabel}</summary>
                            <div part="details-content" class="details-content">
                                <div class="details-scroll">
                                    ${this.copyable?s`
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
                                        `:a}
                                    <slot name="details"></slot>
                                </div>
                            </div>

                            ${this.copyable?s`
                                    <span
                                        part="copy-status"
                                        class="copy-status"
                                        data-error=${this.copyFailed?``:a}
                                        role="status"
                                        aria-live="polite"
                                    >${this.copyStatus}</span>
                                `:a}
                        </details>
                    `:a}
            </div>
        `}},Je.styles=Xe,Je);l([_({reflect:!0})],k.prototype,`variant`,void 0),l([_({reflect:!0})],k.prototype,`size`,void 0),l([_({reflect:!0})],k.prototype,`appearance`,void 0),l([_()],k.prototype,`heading`,void 0),l([_({type:Boolean,attribute:`hide-icon`,reflect:!0})],k.prototype,`hideIcon`,void 0),l([_({type:Boolean,reflect:!0})],k.prototype,`dismissible`,void 0),l([_({reflect:!0})],k.prototype,`announce`,void 0),l([_({attribute:`details-label`})],k.prototype,`detailsLabel`,void 0),l([_({type:Boolean,attribute:`details-open`,reflect:!0})],k.prototype,`detailsOpen`,void 0),l([_({type:Boolean,reflect:!0})],k.prototype,`copyable`,void 0),l([_({attribute:`copy-label`})],k.prototype,`copyLabel`,void 0),l([_({attribute:`copied-label`})],k.prototype,`copiedLabel`,void 0),l([_({attribute:`copy-error-label`})],k.prototype,`copyErrorLabel`,void 0),l([_({attribute:`dismiss-label`})],k.prototype,`dismissLabel`,void 0),l([u(`slot[name="details"]`)],k.prototype,`detailsSlot`,void 0),l([u(`pk-copy-button.copy`)],k.prototype,`copyButton`,void 0),l([v()],k.prototype,`copyStatus`,void 0),l([v()],k.prototype,`copyFailed`,void 0),k=l([d(`pk-alert`)],k);function $e(e,t,n=500){return new Promise(r=>{let i=new AbortController,{signal:a}=i;if(e.classList.contains(t)){r();return}e.classList.add(t);let o=!1,s=()=>{o||(o=!0,e.classList.remove(t),window.clearTimeout(c),r(),i.abort())};e.addEventListener(`animationend`,s,{once:!0,signal:a}),e.addEventListener(`animationcancel`,s,{once:!0,signal:a});let c=window.setTimeout(s,n);requestAnimationFrame(()=>{!o&&e.getAnimations().length===0&&s()})})}var et,tt=`.modal-shade, .modal`,nt=e=>{let t=getComputedStyle(e);return t.display!==`none`&&t.visibility!==`hidden`&&Number.parseFloat(t.opacity||`1`)>0},rt=e=>Array.from(e.querySelectorAll(tt)).filter(e=>e instanceof HTMLElement&&!e.closest(`pk-dialog`)&&nt(e));function it(e,t={}){var n,r,i;let a=(n=(r=t.getDocument)==null?void 0:r.call(t))==null?document:n,o=(i=t.root)==null?a.body:i,s=new Set(t.ignoreExisting?rt(a):[]),c=()=>rt(a).some(e=>!s.has(e)),l=c(),u=()=>{let t=c();t!==l&&(l=t,e(t))},d=new MutationObserver(()=>{u()});d.observe(o,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`class`,`style`,`hidden`]});let f=window.setInterval(u,250);return{disconnect:()=>{d.disconnect(),window.clearInterval(f)}}}var at=t`
    @layer pk-component {
        :host {
            /* Not display:contents — that flattens the trigger slot into flex parents
               (e.g. playground cards) and stretches pk-button full width, same class of
               bug as the dropdown host. Dialog host is display none/block, not contents. */
            display: inline-block;
            width: fit-content;
            max-width: 100%;
            align-self: flex-start;
            flex: none;
            vertical-align: middle;
        }

        /*
         * Controlled dialogs (no slot="trigger") — panel is top-layer / fixed while
         * yielding. An inline-block host still sizes to the open <dialog> box in some
         * engines and expands parents (Formie nested field cards grow a blank gap).
         *
         * Zero box ≠ gone from the tree: Tailwind space-y-* uses :not(:last-child) on
         * DOM siblings, so an in-tree host still steals last-child and margins the
         * previous sibling. Prefer flex/grid gap-* (skips out-of-flow children), or
         * mount overlays outside the spaced stack. True light-DOM portal would also fix it.
         */
        :host(:not([data-has-trigger])) {
            position: absolute;
            width: 0;
            height: 0;
            max-width: none;
            margin: 0;
            padding: 0;
            overflow: visible;
            vertical-align: unset;
        }

        .dialog {
            display: flex;
            flex-direction: column;
            width: min(100%, var(--pk-dialog-width, var(--pk-dialog-max-width, 32rem)));
            min-width: var(--pk-dialog-min-width, 0);
            /* Keep UA :modal inset (0) — that + margin:auto centers the panel. Do not
             * unset inset; it breaks centering (field edit landed top-left). */
            height: var(--pk-dialog-height, fit-content);
            min-height: var(--pk-dialog-min-height, 0);
            max-height: var(--pk-dialog-max-height, calc(100vh - 2rem));
            margin: auto;
            padding: 0;
            /* v1 DialogContent: no CSS border — edge is the 1px ring inside --pk-shadow-modal. */
            border: 0;
            border-radius: var(--pk-radius-lg);
            background: var(--pk-color-white);
            box-shadow: var(--pk-shadow-modal);
            color: var(--pk-color-gray-900);
            overflow: hidden;
            opacity: 1;
            transform: scale(1);
        }

        .dialog:focus,
        .dialog:focus-visible {
            outline: none;
        }

        .dialog:not([open]) {
            display: none;
        }

        .dialog--wide {
            --pk-dialog-max-width: 42rem;
        }

        /* motion only via animateWithClass — never auto-animate on [open] alone. */
        .dialog.show {
            animation: pk-dialog-in 0.15s ease;
        }

        .dialog.hide {
            animation: pk-dialog-out 0.15s ease forwards;
        }

        .dialog.pulse {
            animation: pk-dialog-pulse 0.25s ease;
        }

        @keyframes pk-dialog-in {
            from {
                opacity: 0;
                transform: scale(0.95);
            }

            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes pk-dialog-out {
            from {
                opacity: 1;
                transform: scale(1);
            }

            to {
                opacity: 0;
                transform: scale(0.95);
            }
        }

        @keyframes pk-dialog-pulse {
            0%, 100% {
                transform: scale(1);
            }

            50% {
                transform: scale(0.98);
            }
        }

        .dialog.show::backdrop {
            animation: pk-dialog-backdrop-in 0.15s ease;
        }

        .dialog.hide::backdrop {
            animation: pk-dialog-backdrop-in 0.15s ease reverse;
        }

        .dialog::backdrop {
            background: hsl(from var(--pk-color-gray-900) h s l / 0.2);
            opacity: 1;
        }

        @keyframes pk-dialog-backdrop-in {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }

        .header {
            position: relative;
            display: flex;
            flex-shrink: 0;
            flex-direction: column;
            gap: 0.2rem;
            padding: 1rem;
            border-bottom: 1px solid var(--pk-color-gray-150);
            border-radius: var(--pk-radius-lg) var(--pk-radius-lg) 0 0;
            background: #f3f7fb;
            text-align: left;
        }

        .title {
            margin: 0;
            padding-inline-end: 2rem;
            font-size: 0.9375rem;
            font-weight: 600;
            line-height: 1.2;
            color: var(--pk-color-gray-900);
        }

        .description {
            margin: 0;
            padding-inline-end: 2rem;
            font-size: 0.75rem;
            font-weight: 400;
            line-height: 1.4;
            color: var(--pk-color-gray-500);
        }

        .close {
            --pk-dialog-close-focus-padding: 0.25rem;
            position: absolute;
            top: calc(1rem - var(--pk-dialog-close-focus-padding));
            right: calc(1rem - var(--pk-dialog-close-focus-padding));
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: calc(1.125rem + 2 * var(--pk-dialog-close-focus-padding));
            height: calc(1.125rem + 2 * var(--pk-dialog-close-focus-padding));
            margin: 0;
            padding: var(--pk-dialog-close-focus-padding);
            border: 0;
            border-radius: var(--pk-radius-sm);
            background: transparent;
            color: var(--pk-color-gray-600);
            cursor: pointer;
            line-height: 0;
            opacity: 0.7;
            transition: opacity 0.12s ease;
            box-sizing: border-box;
        }

        .close-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            line-height: 0;
        }

        .close-icon svg {
            display: block;
            width: 1.125rem;
            height: 1.125rem;
        }

        .close:hover {
            opacity: 1;
            background: transparent;
        }

        .close:focus-visible {
            opacity: 1;
            box-shadow: 0 0 0 2px var(--pk-color-gray-600);
        }

        .body {
            flex: 1 1 auto;
            min-height: 0;
            overflow: auto;
            padding: 0;
            /* v1 DialogContent inherited CP text defaults (14px / gray-700) — do not
             * downshift body copy to sm/gray-600 or slotted content reads smaller than v1. */
            font-size: var(--pk-font-size-base);
            line-height: 1.5;
            color: var(--pk-color-gray-700);
        }

        .body--padded {
            padding: 1rem;
        }

        .footer {
            display: flex;
            flex-shrink: 0;
            flex-direction: row;
            justify-content: flex-end;
            gap: 0.5rem;
            padding: 0.625rem 1rem;
            border-top: 1px solid var(--pk-color-gray-150);
            border-radius: 0 0 var(--pk-radius-lg) var(--pk-radius-lg);
            background: #e4edf6;
        }
    }
`,ot,st=g(y.xmark),ct=()=>{var e;let t=document.activeElement;for(;t!=null&&(e=t.shadowRoot)!=null&&e.activeElement;)t=t.shadowRoot.activeElement;return t instanceof HTMLElement?t:null},lt=(e,t)=>{let n=t;for(;n;){var r;if(n===e)return!0;n=(r=n.parentNode)==null?n instanceof ShadowRoot?n.host:null:r}return!1},A=(et=class extends c{constructor(...e){var t;super(...e),t=this,this.open=!1,this.label=``,this.description=``,this.disablePointerDismissal=!1,this.withoutHeader=!1,this.withoutBodyPadding=!1,this.disableScrollLock=!1,this.size=`default`,this.triggerElement=null,this.previouslyFocused=null,this.yieldingToHostModal=!1,this.hostModalObserver=null,this.yieldBox=null,this.handleDocumentKeyDown=e=>{this.yieldingToHostModal||e.key===`Escape`&&this.open&&D(this)&&(e.preventDefault(),e.stopPropagation(),this.requestClose(`escape`))},this.onHostModalPresenceChange=e=>{e?this.yieldToHostModal():this.restoreFromHostModal()},this.showing=!1,this.isClosing=!1,this.transitionId=0,this.handleDialogCancel=e=>{e.preventDefault(),!this.dialogElement.classList.contains(`hide`)&&D(this)&&this.requestClose(`escape`)},this.handleDialogClick=e=>{e.composedPath().some(e=>e instanceof Element&&e.matches(`[data-dialog="close"], [data-dialog-close]`))&&(e.stopPropagation(),this.requestClose(`close-button`))},this.handleDialogPointerDown=function(){var e=w(function*(e){e.target===t.dialogElement&&D(t)&&(t.disablePointerDismissal?yield $e(t.dialogElement,`pulse`):t.requestClose(`pointer-dismiss`))});return function(t){return e.apply(this,arguments)}}(),this.onTriggerClick=e=>{e.preventDefault(),this.open=!0},this.onFooterSlotChange=()=>{this.requestUpdate()}}hasCustomHeaderSlot(){return this.querySelector(`:scope > [slot="header"]`)!==null}applyYieldPosition(e){let t=this.dialogElement;t.style.position=`fixed`,t.style.top=`${e.top}px`,t.style.left=`${e.left}px`,t.style.width=`${e.width}px`,t.style.height=`${e.height}px`,t.style.margin=`0`,t.style.maxHeight=`none`,t.style.zIndex=`99`,t.toggleAttribute(`data-yielding`,!0)}clearYieldPosition(){let e=this.dialogElement;e&&(e.style.position=``,e.style.top=``,e.style.left=``,e.style.width=``,e.style.height=``,e.style.margin=``,e.style.maxHeight=``,e.style.zIndex=``,e.removeAttribute(`data-yielding`),this.yieldBox=null)}yieldToHostModal(){var e;if(this.yieldingToHostModal||!this.open||!((e=this.dialogElement)!=null&&e.open))return;let t=this.dialogElement.getBoundingClientRect();this.yieldBox={top:t.top,left:t.left,width:t.width,height:t.height},this.yieldingToHostModal=!0;try{this.dialogElement.close(),this.dialogElement.show(),this.applyYieldPosition(this.yieldBox)}catch(e){this.yieldingToHostModal=!1,this.clearYieldPosition()}}restoreFromHostModal(){if(!this.yieldingToHostModal||(this.yieldingToHostModal=!1,this.clearYieldPosition(),!this.open||!this.dialogElement))return;let e=je(this).filter(e=>e instanceof ot),t=e.length?ct():null;try{this.dialogElement.open&&this.dialogElement.close(),this.dialogElement.showModal()}catch(e){}e.forEach(e=>e.reenterTopLayer()),t!=null&&t.isConnected&&e.some(e=>lt(e,t))&&t.focus({preventScroll:!0})}reenterTopLayer(){var e;if(this.open&&!this.isClosing&&!this.yieldingToHostModal&&(e=this.dialogElement)!=null&&e.matches(`:modal`))try{this.dialogElement.close(),this.dialogElement.showModal()}catch(e){}}firstUpdated(){this.open&&this.show()}disconnectedCallback(){this.transitionId++,this.showing=!1,this.isClosing=!1,this.disableScrollLock||Oe(this),this.removeOpenListeners(),super.disconnectedCallback()}updated(e){super.updated(e),e.has(`open`)&&this.hasUpdated&&this.handleOpenChange()}handleOpenChange(){this.open&&(!this.dialogElement.open||this.isClosing)?this.show():!this.open&&this.dialogElement.open&&!this.isClosing&&this.requestClose(`api`)}show(e=`api`){var t=this;return w(function*(){var e;if(t.showing||(e=t.dialogElement)!=null&&e.open&&!t.isClosing)return;let n=++t.transitionId;t.isClosing=!1,t.showing=!0,t.dialogElement.classList.remove(`hide`);try{let e=new Le;if(!t.dispatchEvent(e)){t.open=!1;return}if(t.addOpenListeners(),t.dialogElement.open||(t.previouslyFocused=document.activeElement),t.open=!0,t.dialogElement.open||t.dialogElement.showModal(),t.disableScrollLock||Ne(t),requestAnimationFrame(()=>{if(n!==t.transitionId||!t.isConnected)return;let e=t.querySelector(`[autofocus]`);if(e){var r,i;((r=(i=e.shadowRoot)==null?void 0:i.querySelector(`input, textarea, select, button`))==null?e:r).focus({preventScroll:!0})}else t.dialogElement.focus({preventScroll:!0})}),yield $e(t.dialogElement,`show`),n!==t.transitionId||!t.isConnected)return;t.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!0},bubbles:!0,composed:!0})),t.dispatchEvent(new _e)}finally{n===t.transitionId&&(t.showing=!1)}})()}hide(e=`unknown`){var t=this;return w(function*(){yield t.requestClose(e)})()}closeDialog(){this.requestClose(`close-button`)}requestClose(e=`unknown`){var t=this;return w(function*(){var n;if(t.isClosing||!((n=t.dialogElement)!=null&&n.open))return;let r=new pe(typeof e==`string`?e:`close-button`);if(!t.dispatchEvent(r)){t.open=!0,yield $e(t.dialogElement,`pulse`);return}let i=++t.transitionId;if(t.isClosing=!0,t.showing=!1,t.open=!1,t.dialogElement.classList.remove(`show`),t.removeOpenListeners(),yield $e(t.dialogElement,`hide`),i!==t.transitionId||!t.isConnected)return;t.isClosing=!1,t.dialogElement.close(),t.disableScrollLock||Oe(t);let a=t.previouslyFocused;t.previouslyFocused=null,a!=null&&a.isConnected&&window.setTimeout(()=>{i===t.transitionId&&!t.open&&a.focus({preventScroll:!0})},0),t.dispatchEvent(new Re),t.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!1},bubbles:!0,composed:!0}))})()}forceOverlayReset(){var e,t;if(this.transitionId++,this.showing=!1,this.isClosing=!1,this.open=!1,this.yieldingToHostModal=!1,this.clearYieldPosition(),this.removeOpenListeners(),(e=this.dialogElement)!=null&&e.open)try{this.dialogElement.close()}catch(e){}(t=this.dialogElement)==null||t.classList.remove(`hide`,`show`,`pulse`),this.disableScrollLock||Oe(this)}addOpenListeners(){var e;document.addEventListener(`keydown`,this.handleDocumentKeyDown),Te(this),(e=this.hostModalObserver)==null||e.disconnect(),this.hostModalObserver=it(this.onHostModalPresenceChange,{ignoreExisting:!0})}removeOpenListeners(){var e;document.removeEventListener(`keydown`,this.handleDocumentKeyDown),E(this),(e=this.hostModalObserver)==null||e.disconnect(),this.hostModalObserver=null,this.yieldingToHostModal=!1,this.clearYieldPosition()}syncHasTriggerAttribute(){this.toggleAttribute(`data-has-trigger`,!!this.triggerElement)}onTriggerSlotChange(e){let[t]=e.target.assignedElements({flatten:!0});this.triggerElement&&this.triggerElement.removeEventListener(`click`,this.onTriggerClick),this.triggerElement=t==null?null:t,this.syncHasTriggerAttribute(),this.triggerElement&&this.triggerElement.addEventListener(`click`,this.onTriggerClick)}render(){let e=!this.hasCustomHeaderSlot()&&!this.withoutHeader&&!!this.label,t=e&&!this.withoutBodyPadding,n=this.querySelector(`:scope > [slot="footer"]`)!==null;return s`
            <slot name="trigger" @slotchange=${this.onTriggerSlotChange}></slot>
            <dialog
                part="panel"
                aria-label=${this.label||a}
                class=${S({dialog:!0,open:this.open,"dialog--wide":this.size===`wide`})}
                tabindex="-1"
                @cancel=${this.handleDialogCancel}
                @click=${this.handleDialogClick}
                @pointerdown=${this.handleDialogPointerDown}
            >
                <slot name="header">
                    ${e?s`
                            <header part="header" class="header">
                                <h2 part="title" class="title">
                                    <slot name="label">${this.label}</slot>
                                </h2>
                                ${this.description?s`
                                        <p part="description" class="description">
                                            <slot name="description">${this.description}</slot>
                                        </p>
                                    `:s`<slot name="description" hidden></slot>`}
                                <button type="button" class="close" data-dialog="close" aria-label="Close">
                                    <span class="close-icon" aria-hidden="true">${x(st)}</span>
                                </button>
                            </header>
                        `:a}
                </slot>
                <div
                    part="body"
                    class=${S({body:!0,"body--padded":t})}
                >
                    <slot></slot>
                </div>
                ${n?s`
                        <footer part="footer" class="footer">
                            <slot name="footer" @slotchange=${this.onFooterSlotChange}></slot>
                        </footer>
                    `:s`<slot name="footer" @slotchange=${this.onFooterSlotChange} hidden></slot>`}
            </dialog>
        `}},ot=et,et.styles=at,et);l([_({type:Boolean,reflect:!0})],A.prototype,`open`,void 0),l([_()],A.prototype,`label`,void 0),l([_()],A.prototype,`description`,void 0),l([_({attribute:`disable-pointer-dismissal`,type:Boolean,reflect:!0})],A.prototype,`disablePointerDismissal`,void 0),l([_({attribute:`without-header`,type:Boolean,reflect:!0})],A.prototype,`withoutHeader`,void 0),l([_({attribute:`without-body-padding`,type:Boolean,reflect:!0})],A.prototype,`withoutBodyPadding`,void 0),l([_({attribute:`disable-scroll-lock`,type:Boolean,reflect:!0})],A.prototype,`disableScrollLock`,void 0),l([_({reflect:!0})],A.prototype,`size`,void 0),l([u(`dialog`)],A.prototype,`dialogElement`,void 0),l([v()],A.prototype,`triggerElement`,void 0),A=ot=l([d(`pk-dialog`)],A);var ut=t`
    @layer pk-component {
        .form-control {
            display: flex;
            flex-direction: column;
            gap: 0.375rem;
            width: 100%;
        }

        .form-control__header {
            display: flex;
            flex-direction: column;
            gap: 0.125rem;
            min-width: 0;
        }

        .form-control__label {
            display: inline-flex;
            align-items: center;
            gap: 0.25rem;
            margin: 0;
            color: var(--pk-color-gray-700);
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            font-weight: 700;
            line-height: var(--pk-line-height);
        }

        .form-control__instructions,
        .form-control__hint {
            margin: 0;
            color: var(--pk-color-gray-500);
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
        }

        .form-control__instructions:empty,
        .form-control__hint:empty {
            display: none;
        }

        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        .form-control__input {
            display: flex;
            align-items: stretch;
            position: relative;
            width: 100%;
        }

        .form-control__start,
        .form-control__end {
            display: inline-flex;
            align-items: center;
            flex-shrink: 0;
        }

        .form-control__start {
            margin-inline-end: 6px;
        }

        .form-control__end {
            margin-inline-start: 6px;
        }

        .icon-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 0;
            border: 0;
            background: transparent;
            color: var(--pk-color-gray-500);
            cursor: pointer;
            line-height: 0;
        }

        .icon-button:focus-visible {
            outline: none;
            box-shadow: var(--pk-shadow-focus);
            border-radius: var(--pk-radius-sm);
        }

        .icon-button:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
`,{I:dt}=f,ft=e=>e,pt=e=>e===null||typeof e!=`object`&&typeof e!=`function`,mt=e=>e.strings===void 0,ht=()=>document.createComment(``),gt=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new dt(r.insertBefore(ht(),i),r.insertBefore(ht(),i),e,e.options);else{let t=n._$AB.nextSibling,o=n._$AM,s=o!==e;if(s){var a;let t;(a=n._$AQ)==null||a.call(n,e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==o._$AU&&n._$AP(t)}if(t!==i||s){let e=n._$AA;for(;e!==t;){let t=ft(e).nextSibling;ft(r).insertBefore(e,i),e=t}}}return n},_t=(e,t,n=e)=>(e._$AI(t,n),e),vt={},yt=(e,t=vt)=>e._$AH=t,bt=e=>e._$AH,xt=e=>{e._$AR(),e._$AA.remove()},St=(e,t)=>{var n;let r=e._$AN;if(r===void 0)return!1;for(let e of r)(n=e._$AO)==null||n.call(e,t,!1),St(e,t);return!0},Ct=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while((n==null?void 0:n.size)===0)},wt=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Dt(t)}};function Tt(e){this._$AN===void 0?this._$AM=e:(Ct(this),this._$AM=e,wt(this))}function Et(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)St(r[e],!1),Ct(r[e]);else r!=null&&(St(r,!1),Ct(r))}else St(this,e)}}var Dt=e=>{e.type==r.CHILD&&(e._$AP!=null||(e._$AP=Et),e._$AQ!=null||(e._$AQ=Tt))},Ot=class extends i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),wt(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,r;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(r=this.disconnected)==null||r.call(this)),t&&(St(this,e),Ct(this))}setValue(e){if(mt(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};function kt(e){var t,n,r,i=2;for(typeof Symbol<`u`&&(n=Symbol.asyncIterator,r=Symbol.iterator);i--;){if(n&&(t=e[n])!=null)return t.call(e);if(r&&(t=e[r])!=null)return new At(t.call(e));n=`@@asyncIterator`,r=`@@iterator`}throw TypeError(`Object is not async iterable`)}function At(e){function t(e){if(Object(e)!==e)return Promise.reject(TypeError(e+` is not an object.`));var t=e.done;return Promise.resolve(e.value).then(function(e){return{value:e,done:t}})}return At=function(e){this.s=e,this.n=e.next},At.prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(e){var n=this.s.return;return n===void 0?Promise.resolve({value:e,done:!0}):t(n.apply(this.s,arguments))},throw:function(e){var n=this.s.return;return n===void 0?Promise.reject(e):t(n.apply(this.s,arguments))}},new At(e)}(function(){var e=w(function*(e,t){var n=!1,r=!1,i;try{for(var a=kt(e),o;n=!(o=yield a.next()).done;n=!1){let e=o.value;if(!1===(yield t(e)))return}}catch(e){r=!0,i=e}finally{try{n&&a.return!=null&&(yield a.return())}finally{if(r)throw i}}});return function(t,n){return e.apply(this,arguments)}})();var jt=class{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}},Mt=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y!=null||(this.Y=new Promise(e=>this.Z=e))}resume(){var e;(e=this.Z)==null||e.call(this),this.Y=this.Z=void 0}},Nt=e=>!pt(e)&&typeof e.then==`function`,Pt=1073741823,Ft=m(class extends Ot{constructor(){super(...arguments),this._$Cwt=Pt,this._$Cbt=[],this._$CK=new jt(this),this._$CX=new Mt}render(...e){var t;return(t=e.find(e=>!Nt(e)))==null?o:t}update(e,t){let n=this._$Cbt,r=n.length;this._$Cbt=t;let i=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let o=t[e];if(!Nt(o))return this._$Cwt=e,o;e<r&&o===n[e]||(this._$Cwt=Pt,r=0,Promise.resolve(o).then(function(){var e=w(function*(e){for(;a.get();)yield a.get();let t=i.deref();if(t!==void 0){let n=t._$Cbt.indexOf(o);n>-1&&n<t._$Cwt&&(t._$Cwt=n,t.setValue(e))}});return function(t){return e.apply(this,arguments)}}()))}return o}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}),It=`modulepreload`,Lt=function(e){return`/`+e},Rt={},zt=function(e){return e.pathname.endsWith(`.css`)},Bt=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Vt=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute(`nonce`));function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Lt(t,n);let r=s(t),i=zt(r);return Bt(Rt,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:It,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Ht,Ut=t`
    @layer pk-component {
        .pk-inline-markdown a {
            color: var(--pk-color-blue-500);
            text-decoration: none;
        }

        .pk-inline-markdown a:hover {
            text-decoration: underline;
        }

        /* Craft p code — gray chip; tip/warning/error override bg/border on pk-field. */
        .pk-inline-markdown code {
            /* Craft --border-hairline ≈ gray-800 @ 10%. */
            border: 1px solid color-mix(in srgb, var(--pk-color-gray-800) 10%, transparent);
            border-radius: var(--pk-radius-sm);
            background: var(--pk-color-gray-100);
            padding-block: 0.0625em;
            padding-inline: 0.25em;
            font-family: var(--pk-font-family-mono, ui-monospace, monospace);
            /* v1 field help/errors used [&_code]:text-[0.85em] — tighter than --pk-font-size-mono (0.9em). */
            font-size: var(--pk-inline-markdown-code-font-size, 0.85em);
            line-height: var(--pk-line-height-mono, 1.5);
            /* Inherit tip/warning/error/instructions text color (Craft parity). */
            color: inherit;
        }
    }
`;function Wt({control:e,labelId:t,instructionsId:n,errorsId:r,warningId:i,tipId:a,controlId:o,hasLabel:s,hasInstructions:c,hasErrors:l,hasWarning:u,hasTip:d,hasRequired:f=!1,invalid:p=!1}){e.id||(e.id=o),s?e.setAttribute(`aria-labelledby`,t):e.removeAttribute(`aria-labelledby`);let m=[c?n:``,l?r:``,u?i:``,d?a:``].filter(Boolean);m.length>0?e.setAttribute(`aria-describedby`,m.join(` `)):e.removeAttribute(`aria-describedby`),f?e.setAttribute(`aria-required`,`true`):e.removeAttribute(`aria-required`);let h=!!(p||l);h?(e.setAttribute(`aria-invalid`,`true`),e.setAttribute(`aria-errormessage`,r)):(e.removeAttribute(`aria-invalid`),e.removeAttribute(`aria-errormessage`)),Gt(e,h)}function Gt(e,t){`invalid`in e?e.invalid=t:e.toggleAttribute(`invalid`,t)}var Kt,qt,Jt=()=>{var e;return(e=qt)==null?qt=Vt(()=>import(`./chunks/markdown-BdZjEZfi.js`).then(e=>Kt=e.renderInlineMarkdown),__vite__mapDeps([0,1])):e},Yt=e=>e?C(e):a;function Xt(e){return e?Kt?Yt(Kt(e)):Ft(Jt().then(t=>Yt(t(e))),e):a}var Zt=t`
    @layer pk-component {
        :host {
            display: block;
            width: 100%;
        }

        .form-control__control {
            display: block;
            position: relative;
            width: 100%;
        }

        .form-control__header--with-end {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            gap: 0.75rem;
        }

        .form-control__header-main {
            display: flex;
            flex-direction: column;
            gap: 0.125rem;
            min-width: 0;
            flex: 1 1 auto;
        }

        .form-control__header-end {
            flex-shrink: 0;
        }

        .form-control__required {
            display: inline-flex;
            align-items: center;
            color: var(--pk-color-rose-600);
            line-height: 0;
        }

        .form-control__required svg {
            display: block;
            width: 10px;
            height: 10px;
        }

        .form-control__translatable {
            display: inline-flex;
            align-items: center;
            color: var(--pk-color-gray-550);
            line-height: 0;
        }

        .form-control__translatable svg {
            display: block;
            width: 1rem;
            height: 1rem;
            fill: currentColor;
        }

        .form-control__errors {
            margin: 0;
            padding-inline-start: 20px;
            color: var(--pk-color-error);
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
            list-style: square;
        }

        .form-control__errors:empty {
            display: none;
        }

        .form-control__warning {
            display: flex;
            align-items: flex-start;
            gap: 0.25rem;
            min-width: 0;
            margin: 0;
            color: var(--pk-color-warning);
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
        }

        .form-control__warning:empty {
            display: none;
        }

        .form-control__warning-icon {
            display: inline-flex;
            flex-shrink: 0;
            margin-top: 0.3em;
            width: 0.75rem;
            height: 0.75rem;
            line-height: 0;
        }

        .form-control__warning-text {
            min-width: 0;
            margin: 0;
        }

        .form-control__warning-icon svg {
            display: block;
            width: 100%;
            height: 100%;
        }

        /* Craft .warning code — amber chip matching warning text. */
        .form-control__warning .pk-inline-markdown code {
            background-color: var(--pk-color-amber-100);
            border-color: var(--pk-color-amber-300);
        }

        .form-control__tip {
            display: flex;
            align-items: flex-start;
            gap: 0.25rem;
            min-width: 0;
            margin: 0;
            color: var(--pk-color-sky-700);
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
        }

        .form-control__tip:empty {
            display: none;
        }

        .form-control__tip-icon {
            display: inline-flex;
            flex-shrink: 0;
            margin-top: 0.3em;
            width: 0.75rem;
            height: 0.75rem;
            line-height: 0;
        }

        .form-control__tip-text {
            min-width: 0;
            margin: 0;
        }

        .form-control__tip-icon svg {
            display: block;
            width: 100%;
            height: 100%;
        }

        .form-control__tip-text a {
            text-decoration: underline;
        }

        /* Craft .tip code — sky/notice chip matching tip text. */
        .form-control__tip .pk-inline-markdown code {
            background-color: var(--pk-color-sky-100);
            border-color: var(--pk-color-sky-300);
        }

        /* Craft --bg-error / --border-error pattern for field errors. */
        .form-control__errors.pk-inline-markdown code {
            background-color: var(--pk-color-red-100);
            border-color: var(--pk-color-red-300);
        }
    }
`,j=(Ht=class extends c{constructor(...e){super(...e),this.hasSlotController=new b(this,`label`,`instructions`,`hint`,`header-end`,`warning`,`tip`,`errors`),this.baseId=T(`pk-field`),this.label=``,this.instructions=``,this.required=!1,this.translatable=!1,this.warning=``,this.tip=``,this.errors=[],this.for=``,this.onLabelClick=e=>{let t=e.target;t instanceof Element&&(t.closest(`button, a, input, select, textarea, [role="button"], [role="link"]`)||this.focusControl())},this.onControlSlotChange=()=>{this.syncControlAria(),this.requestUpdate()}}connectedCallback(){super.connectedCallback();let e=this.getAttribute(`hint`);e&&!this.instructions&&(this.instructions=e)}updated(e){super.updated(e),(e.has(`label`)||e.has(`instructions`)||e.has(`errors`)||e.has(`warning`)||e.has(`tip`)||e.has(`required`)||e.has(`for`))&&this.syncControlAria()}get labelId(){return`${this.baseId}-label`}get instructionsId(){return`${this.baseId}-instructions`}get errorsId(){return`${this.baseId}-errors`}get warningId(){return`${this.baseId}-warning`}get tipId(){return`${this.baseId}-tip`}get controlId(){return this.for||`${this.baseId}-control`}hasLabel(){return!!this.label||this.hasSlotController.test(`label`)}hasInstructions(){return!!this.instructions||this.hasSlotController.test(`instructions`)||this.hasSlotController.test(`hint`)}hasHeaderEnd(){return this.hasSlotController.test(`header-end`)}hasErrors(){return this.errors.length>0||this.hasSlotController.test(`errors`)}hasWarning(){return!!this.warning||this.hasSlotController.test(`warning`)}hasTip(){return!!this.tip||this.hasSlotController.test(`tip`)}getControlElement(){var e,t;let[n]=(e=(t=this.controlSlot)==null?void 0:t.assignedElements({flatten:!0}))==null?[]:e;return n instanceof HTMLElement?n:this.for?this.getRootNode().getElementById(this.for):null}focusControl(){let e=this.getControlElement();e&&typeof e.focus==`function`&&e.focus()}syncControlAria(){let e=this.getControlElement();e&&Wt({control:e,labelId:this.labelId,instructionsId:this.instructionsId,errorsId:this.errorsId,warningId:this.warningId,tipId:this.tipId,controlId:this.controlId,hasLabel:this.hasLabel(),hasInstructions:this.hasInstructions(),hasErrors:this.hasErrors(),hasWarning:this.hasWarning(),hasTip:this.hasTip(),hasRequired:this.required,invalid:this.hasErrors()})}render(){let e=this.hasLabel(),t=this.hasInstructions(),n=this.hasHeaderEnd(),r=this.hasErrors(),i=this.hasWarning(),o=this.hasTip(),c=this.for||(e?this.controlId:a);return s`
            <div part="form-control" class="form-control">
                ${e||t||n?s`
                        <div
                            part="header"
                            class=${S({"form-control__header":!0,"form-control__header--with-end":n})}
                        >
                            <div class="form-control__header-main">
                                ${e?s`
                                        <label
                                            part="label"
                                            class="form-control__label"
                                            id=${this.labelId}
                                            for=${c}
                                            data-error=${r?`true`:a}
                                            @click=${this.onLabelClick}
                                        >
                                            <slot name="label">${this.label}</slot>
                                            ${this.required?s`
                                                    <span class="sr-only">Required</span>
                                                    <span class="form-control__required" aria-hidden="true">
                                                        ${ae(y.asterisk)}
                                                    </span>
                                                `:a}
                                            ${this.translatable?s`
                                                    <span class="form-control__translatable">
                                                        ${ce()}
                                                        <span class="sr-only">Translatable</span>
                                                    </span>
                                                `:a}
                                        </label>
                                    `:a}

                                ${t?s`
                                        <p
                                            part="instructions"
                                            class="form-control__instructions pk-inline-markdown"
                                            id=${this.instructionsId}
                                        >
                                            <slot name="instructions">${Xt(this.instructions)}</slot>
                                            <slot name="hint"></slot>
                                        </p>
                                    `:a}
                            </div>

                            ${n?s`
                                    <div part="header-end" class="form-control__header-end">
                                        <slot name="header-end"></slot>
                                    </div>
                                `:s`<slot name="header-end" hidden></slot>`}
                        </div>
                    `:a}

                <div part="control" class="form-control__control">
                    <slot @slotchange=${this.onControlSlotChange}></slot>
                </div>

                ${r?s`
                        <ul part="errors" class="form-control__errors pk-inline-markdown" id=${this.errorsId}>
                            ${this.errors.map(e=>s`<li>${Xt(e)}</li>`)}
                            <slot name="errors"></slot>
                        </ul>
                    `:a}

                ${i?s`
                        <div part="warning" class="form-control__warning" id=${this.warningId}>
                            <span class="form-control__warning-icon" aria-hidden="true">
                                ${ae(y.triangleExclamation)}
                            </span>
                            <p class="form-control__warning-text pk-inline-markdown">
                                <slot name="warning">${Xt(this.warning)}</slot>
                            </p>
                        </div>
                    `:a}

                ${o?s`
                        <div part="tip" class="form-control__tip" id=${this.tipId}>
                            <span class="form-control__tip-icon" aria-hidden="true">
                                ${ae(y.lightbulb)}
                            </span>
                            <p class="form-control__tip-text pk-inline-markdown">
                                <span class="sr-only">Tip: </span>
                                <slot name="tip">${Xt(this.tip)}</slot>
                            </p>
                        </div>
                    `:a}
            </div>
        `}},Ht.styles=[ut,Ut,Zt],Ht);l([_()],j.prototype,`label`,void 0),l([_()],j.prototype,`instructions`,void 0),l([_({type:Boolean,reflect:!0})],j.prototype,`required`,void 0),l([_({type:Boolean,reflect:!0})],j.prototype,`translatable`,void 0),l([_()],j.prototype,`warning`,void 0),l([_()],j.prototype,`tip`,void 0),l([_({attribute:!1})],j.prototype,`errors`,void 0),l([_({reflect:!0})],j.prototype,`for`,void 0),l([u(`slot:not([name])`)],j.prototype,`controlSlot`,void 0),j=l([d(`pk-field`)],j);function M(e={}){var t;let{validationElement:n,validationProperty:r}=e;!n&&typeof document<`u`&&(n=Object.assign(document.createElement(`input`),{required:!0})),r||(r=`value`);let i={observedAttributes:[`required`],message:(t=n==null?void 0:n.validationMessage)==null?`Please fill out this field.`:t,checkValidity(e){var t;let n={message:``,isValid:!0,invalidKeys:[]};if(!e.required)return n;let a=e[r];return a!=null&&a!==!1&&a!==``||(n.isValid=!1,n.message=typeof i.message==`function`?i.message(e):(t=i.message)==null?``:t,n.invalidKeys.push(`valueMissing`)),n}};return i}function Qt(e,t){var n;return t||((n=e.getAttribute(`hint`))==null?``:n)}function $t(e,t,n=!1){return!!t||e(`instructions`,n)||e(`hint`)}var en,tn=t`
    @layer pk-component {
        :host {
            display: inline-flex;
            vertical-align: middle;
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-sm);
            line-height: var(--pk-line-height);
            --pk-lightswitch-border-color: var(--pk-color-slate-800);
            --pk-lightswitch-track-off: var(--pk-color-gray-200);
            --pk-lightswitch-track-on: var(--pk-color-teal-550);
            --pk-lightswitch-track-on-border: var(--pk-color-teal-550-border);
            --pk-lightswitch-focus-shadow: 0 0 0 1px #fff, 0 0 0 3px var(--pk-color-sky-600),
                0 0 6px 1px hsl(from var(--pk-color-sky-600) h s l / 0.8);
            --pk-lightswitch-invalid-shadow: 0 0 0 1px #fff, 0 0 0 2.5px var(--pk-color-rose-600);
            --pk-lightswitch-invalid-focus-shadow: 0 0 0 1px #fff, 0 0 0 3px var(--pk-color-rose-600),
                0 0 6px 1px hsl(from var(--pk-color-rose-600) h s l / 0.8);
        }

        :host([disabled]) {
            cursor: not-allowed;
        }

        .base {
            display: inline-flex;
            align-items: flex-start;
            gap: 0.5rem;
        }

        :host([disabled]) .base {
            opacity: 0.5;
        }

        .content {
            min-width: 0;
            cursor: pointer;
            user-select: none;
        }

        :host([disabled]) .content {
            cursor: not-allowed;
        }

        .label {
            display: block;
            /* Match checkbox / radio option labels (gray-700), not gray-900. */
            color: var(--pk-color-gray-700);
            line-height: 1rem;
        }

        .label:empty {
            display: none;
        }

        .instructions:empty,
        .hint:empty {
            display: none;
        }

        .switch {
            display: inline-flex;
            flex-shrink: 0;
            align-items: center;
            margin: 0;
            padding: 0;
            border: 0;
            border-radius: 11px;
            background: var(--pk-lightswitch-track-off, #d8dee7);
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-border-color, #667c92);
            cursor: pointer;
            user-select: none;
            appearance: none;
            transition: background-color 0.15s ease, box-shadow 0.15s ease;
        }

        .switch:focus {
            outline: none;
        }

        .switch:focus-visible {
            box-shadow: var(--pk-lightswitch-focus-shadow);
        }

        .switch[aria-checked='true'] {
            background: var(--pk-lightswitch-track-on, #0f9d8a);
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-track-on-border, #007d6f);
        }

        .switch[aria-checked='true']:focus-visible {
            box-shadow: var(--pk-lightswitch-focus-shadow);
        }

        :host([invalid]) .switch,
        :host(:state(user-invalid)) .switch,
        .switch[aria-invalid='true'] {
            box-shadow: var(--pk-lightswitch-invalid-shadow);
        }

        :host([invalid]) .switch[aria-checked='true'],
        :host(:state(user-invalid)) .switch[aria-checked='true'],
        .switch[aria-invalid='true'][aria-checked='true'] {
            background: var(--pk-lightswitch-track-on);
        }

        :host([invalid]) .switch:focus-visible,
        :host(:state(user-invalid)) .switch:focus-visible,
        .switch[aria-invalid='true']:focus-visible {
            box-shadow: var(--pk-lightswitch-invalid-focus-shadow);
        }

        .switch:disabled {
            cursor: not-allowed;
        }

        :host([size='default']) .switch {
            width: 34px;
            height: 22px;
        }

        :host([size='sm']) .switch {
            width: 28px;
            height: 18px;
            border-radius: 9px;
        }

        :host([size='xs']) .switch {
            width: 24px;
            height: 16px;
            border-radius: 8px;
        }

        :host([size='xxs']) .switch {
            width: 24px;
            height: 14px;
            border-radius: 7px;
        }

        .thumb {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: var(--pk-color-white, #fff);
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-border-color, #667c92);
            pointer-events: none;
            transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        :host([size='default']) .thumb {
            width: 18px;
            height: 18px;
            transform: translateX(2px);
        }

        :host([size='default']) .switch[aria-checked='true'] .thumb {
            transform: translateX(calc(100% - 4px));
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-track-on-border);
        }

        :host([size='sm']) .thumb {
            width: 14px;
            height: 14px;
            transform: translateX(2px);
        }

        :host([size='sm']) .switch[aria-checked='true'] .thumb {
            transform: translateX(calc(100% - 2px));
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-track-on-border);
        }

        :host([size='xs']) .thumb {
            width: 12px;
            height: 12px;
            transform: translateX(2px);
        }

        :host([size='xs']) .switch[aria-checked='true'] .thumb {
            transform: translateX(calc(100% - 2px));
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-track-on-border);
        }

        :host([size='xxs']) .thumb {
            width: 10px;
            height: 10px;
            transform: translateX(2px);
        }

        :host([size='xxs']) .switch[aria-checked='true'] .thumb {
            transform: translateX(12px);
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-track-on-border, #007d6f);
        }

        .thumb svg {
            width: 14px;
            height: 14px;
            color: var(--pk-lightswitch-track-on);
            opacity: 0;
            transform: translateY(1px);
            transition: opacity 0.15s ease;
        }

        .switch[aria-checked='true'] .thumb svg {
            opacity: 1;
        }

        :host([size='sm']) .thumb svg {
            width: 10px;
            height: 10px;
        }

        :host([size='xs']) .thumb svg,
        :host([size='xxs']) .thumb svg {
            display: none;
        }

        .input {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
            opacity: 0;
        }
    }
`,nn=s`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" aria-hidden="true">
        <path fill="currentColor" d="M557.5 192L534.9 214.6L278.9 470.6C266.4 483.1 246.1 483.1 233.6 470.6L105.6 342.6L83 320L128.3 274.7C129.6 276 172.3 318.7 256.3 402.7L489.7 169.3L512.3 146.7L557.6 192z" />
    </svg>
`,N=(en=class extends O{constructor(...e){super(...e),this.assumeInteractionOn=[`change`],this.hasSlotController=new b(this,`instructions`,`hint`),this.checked=!1,this.defaultChecked=!1,this.invalid=!1,this.size=`default`,this.value=`on`,this.label=``,this.instructions=``}static get validators(){return[...super.validators,Ie(),M({validationProperty:`checked`})]}connectedCallback(){this.instructions=Qt(this,this.instructions),super.connectedCallback()}get validationTarget(){return this.input}syncFormValue(){this.setFormValue(this.checked?this.value:null,this.checked?`on`:`off`)}resetToDefaultValue(){this.checked=this.defaultChecked}restoreFormState(e){this.checked=e===`on`||e===this.value}updated(e){this.input&&e.has(`checked`)&&(this.input.checked=this.checked),super.updated(e)}click(){var e;(e=this.switchElement)==null||e.click()}focus(e){var t;(t=this.switchElement)==null||t.focus(e)}blur(){var e;(e=this.switchElement)==null||e.blur()}toggle(){this.disabled||(this.checked=!this.checked,this.emitCheckedChange())}handleKeyDown(e){let t=this.matches(`:dir(rtl)`);e.key===` `||e.key===`Enter`?(e.preventDefault(),this.toggle()):e.key===`ArrowLeft`?(e.preventDefault(),this.checked=t,this.emitCheckedChange()):e.key===`ArrowRight`&&(e.preventDefault(),this.checked=!t,this.emitCheckedChange())}emitCheckedChange(){this.hasInteracted=!0,this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{checked:this.checked},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}handleLabelClick(e){this.disabled||e.target===this.switchElement||this.toggle()}hasLabelContent(){var e;if(this.label)return!0;let t=(e=this.shadowRoot)==null?void 0:e.querySelector(`slot:not([name])`);return t?t.assignedNodes({flatten:!0}).some(e=>{var t;return e.nodeType===Node.TEXT_NODE?!!((t=e.textContent)!=null&&t.trim()):e.nodeType===Node.ELEMENT_NODE}):!1}render(){let e=$t((e,t)=>this.hasSlotController.test(e,t),this.instructions),t=this.hasLabelContent();return s`
            <div part="base" class="base">
                <button
                    part="switch"
                    class="switch"
                    type="button"
                    role="switch"
                    ?disabled=${this.disabled}
                    aria-checked=${this.checked?`true`:`false`}
                    aria-invalid=${this.invalid?`true`:a}
                    aria-describedby=${e?`instructions`:a}
                    aria-labelledby=${t?`label`:a}
                    @click=${this.toggle}
                    @keydown=${this.handleKeyDown}
                >
                    <span part="thumb" class="thumb">${nn}</span>
                </button>
                <input
                    part="input"
                    class="input"
                    type="checkbox"
                    tabindex="-1"
                    .checked=${this.checked}
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    value=${this.value}
                    aria-invalid=${this.invalid?`true`:a}
                    @change=${e=>e.stopPropagation()}
                />
                ${t||e?s`
                        <div class="content" @click=${this.handleLabelClick}>
                            ${t?s`
                                    <span part="label" class="label" id="label">
                                        <slot></slot>${this.label}
                                    </span>
                                `:a}
                            ${e?s`
                                    <span part="instructions" class="instructions form-control__instructions" id="instructions">
                                        <slot name="instructions">${this.instructions}</slot>
                                        <slot name="hint"></slot>
                                    </span>
                                `:a}
                        </div>
                    `:a}
            </div>
        `}},en.shadowRootOptions={mode:`open`,delegatesFocus:!0},en.styles=[ut,tn],en);l([_({type:Boolean,reflect:!0})],N.prototype,`checked`,void 0),l([_({attribute:`default-checked`,type:Boolean})],N.prototype,`defaultChecked`,void 0),l([_({type:Boolean,reflect:!0})],N.prototype,`invalid`,void 0),l([_({reflect:!0})],N.prototype,`size`,void 0),l([_()],N.prototype,`value`,void 0),l([_()],N.prototype,`label`,void 0),l([_()],N.prototype,`instructions`,void 0),l([u(`.input`)],N.prototype,`input`,void 0),l([u(`[part="switch"]`)],N.prototype,`switchElement`,void 0),N=l([d(`pk-lightswitch`)],N);var rn=m(class extends i{constructor(e){if(super(e),e.type!==r.PROPERTY&&e.type!==r.ATTRIBUTE&&e.type!==r.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!mt(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===o||t===a)return t;let n=e.element,i=e.name;if(e.type===r.PROPERTY){if(t===n[i])return o}else if(e.type===r.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(i))return o}else if(e.type===r.ATTRIBUTE&&n.getAttribute(i)===t+``)return o;return yt(e),t}}),P=e=>e==null?a:e,an,on=new Set([`button`,`submit`,`reset`,`checkbox`,`radio`,`file`,`image`,`hidden`]),sn=`pk-implicit-submit`,cn=(e,t)=>{if(e.key!==`Enter`||e.defaultPrevented||e.isComposing||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return!1;let n=(t||`text`).toLowerCase();return!on.has(n)},ln=e=>{var t,n;let r=(t=e.closest)==null?void 0:t.call(e,`pk-dialog`);if(r){let e=r.querySelector(`form`);if(e)return e}let i=e.form;return i&&i.id===`main`?((n=e.closest)==null?void 0:n.call(e,`form`))===i?null:e.closest(`form`):i},un=(e,t,n)=>{if(e.disabled||e.readonly||!cn(t,n))return!1;let r=ln(e);return!r||r.id===`main`?!1:(t.preventDefault(),t.stopPropagation(),r.dispatchEvent(new CustomEvent(sn,{bubbles:!1,cancelable:!0})),!0)},dn=t`
    @layer pk-component {
        :host {
            display: block;
            width: 100%;
            font-family: var(--pk-font-family);
            font-size: var(--pk-control-font-default);
            line-height: var(--pk-line-height);
            /*
             * Control chrome tokens — inherit into light-DOM in-control actions
             * (e.g. pk-copy-button[slot=end]) the same way combobox/image-browser
             * size their trailing clear/expand hit targets.
             */
            --pk-input-padding-block: calc((var(--pk-control-height-default) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-input-padding-inline: 8px;
            --pk-input-control-gap: 6px;
            --pk-input-decoration-size: 0.75rem;
        }

        :host([data-pk-group-orientation]) {
            display: flex;
            flex-direction: column;
            width: auto;
            flex: 0 1 auto;
            align-self: stretch;
        }

        :host([data-pk-group-orientation]) .form-control {
            gap: 0;
            height: 100%;
        }

        :host([data-pk-group-orientation]) .form-control__input {
            min-height: var(--pk-btn-height-default);
            height: 100%;
        }

        :host([data-pk-group-orientation]) .form-control__start,
        :host([data-pk-group-orientation]) .form-control__end {
            display: none;
        }

        :host([data-pk-group-orientation]) .form-control__input {
            width: 100%;
        }

        :host([data-pk-group-orientation]) .input {
            width: 100%;
        }

        :host([data-pk-group-orientation]) .input {
            min-height: var(--pk-btn-height-default);
            height: 100%;
        }

        :host([data-pk-group-orientation='vertical']) {
            width: 100%;
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:not([data-pk-group-divider])) {
            margin-inline-start: var(--pk-bg-horizontal-indent-outlined, 0);
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-join]:not([data-pk-group-divider])) {
            margin-block-start: var(--pk-bg-vertical-indent-outlined, 0);
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][data-pk-group-join]) {
            margin-inline-start: var(--pk-bg-horizontal-indent-outlined, 0);
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-divider][data-pk-group-join]) {
            margin-block-start: var(--pk-bg-vertical-indent-outlined, 0);
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-divider]) .form-control__input {
            border-left-width: 1px;
            border-left-style: solid;
            border-left-color: var(--pk-btn-group-divider-color-outline, var(--pk-input-border-color));
            box-shadow: none;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-divider]) .form-control__input {
            border-top-width: 1px;
            border-top-style: solid;
            border-top-color: var(--pk-btn-group-divider-color-outline, var(--pk-input-border-color));
            box-shadow: none;
        }

        :host([data-pk-group-divider]) .form-control__input:focus-within,
        :host([data-pk-group-divider][data-state='focus-visible']) .form-control__input {
            box-shadow: var(--pk-input-focus-shadow);
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-divider]) .form-control__input:focus-within,
        :host([data-pk-group-orientation='vertical'][data-pk-group-divider][data-state='focus-visible']) .form-control__input {
            box-shadow: var(--pk-input-focus-shadow);
        }

        /* Chrome lives on the flex shell (part=base) so slot=start/end adornments sit
         * inside the border — same visual contract as pk-input-group / v1 InputGroup.
         * Height is content-sized (v1): padding-block + --pk-input-control-line-height + border.
         * Trailing actions (clear, pk-copy-button[slot=end]) stay in flex flow so long
         * values never paint under the button — mirror combobox / image-browser.
         */
        .form-control__input {
            align-items: center;
            gap: var(--pk-input-control-gap);
            padding-inline: var(--pk-input-padding-inline);
            border: var(--pk-input-border);
            border-radius: var(--pk-input-border-radius, var(--pk-radius-sm));
            background: var(--pk-input-bg);
            background-clip: padding-box;
            box-sizing: border-box;
            transition: border-color 0.12s ease, box-shadow 0.12s ease;
        }

        .form-control__start,
        .form-control__end {
            margin: 0;
            color: var(--pk-color-gray-400);
            line-height: 0;
            align-self: stretch;
            align-items: center;
        }

        /* Decorative glyphs only — interactive in-control actions opt out below. */
        .form-control__start ::slotted(*),
        .form-control__end ::slotted(*) {
            display: block;
            max-width: 1.25rem;
            max-height: 1.25rem;
        }

        /* Copy (and similar) inside the field: flex-reserved space, not absolute overlay. */
        .form-control__end.has-action {
            align-items: stretch;
        }

        .form-control__end ::slotted(pk-copy-button) {
            display: inline-flex;
            align-self: stretch;
            align-items: stretch;
            max-width: none;
            max-height: none;
            /*
             * Pull into trailing padding like combobox expand/clear, but leave a
             * small inset so the glyph is not tight against the field border.
             */
            margin-inline-end: calc(-1 * var(--pk-input-padding-inline) + 4px);
            margin-block: calc(-1 * var(--pk-input-padding-block));
        }

        .input {
            display: block;
            width: 100%;
            margin: 0;
            /* v1 Input default: py-1.5 + text-sm (14px / 1.25rem lh) → 34px with border. */
            padding-block: var(--pk-input-padding-block);
            padding-inline: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            /* Craft CP body / field value text. */
            color: var(--pk-color-gray-700);
            font: inherit;
            line-height: var(--pk-input-control-line-height, 1.25rem);
            appearance: none;
            box-sizing: border-box;
            outline: none;
        }

        .form-control__input .input {
            flex: 1 1 auto;
            min-width: 0;
        }

        /* Keep the browser from adding a second clear control. */
        .input[data-custom-clear]::-webkit-search-cancel-button {
            -webkit-appearance: none;
            display: none;
        }

        .input::placeholder {
            color: var(--pk-input-placeholder-color, var(--pk-color-gray-400));
        }

        /*
         * Craft text:focus-visible only sets box-shadow (--focus-ring); resting border stays.
         * Do not also set border-color — --pk-input-focus-shadow already includes 0 0 0 1px,
         * so border-color + that ring reads as a double focus treatment.
         */
        :host(:not([invalid]):not(:state(user-invalid))) .form-control__input:focus-within,
        :host([data-state='focus-visible']:not([invalid]):not(:state(user-invalid))) .form-control__input {
            box-shadow: var(--pk-input-focus-shadow);
        }

        .form-control__input:has(.input:disabled) {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .input:disabled {
            cursor: not-allowed;
        }

        :host([invalid]) .form-control__input,
        :host(:state(user-invalid)) .form-control__input {
            border-color: var(--pk-color-rose-600);
        }

        /* Invalid + focus: rose ring (same token as select/combobox), not sky over rose border. */
        :host([invalid]) .form-control__input:focus-within,
        :host([invalid][data-state='focus-visible']) .form-control__input,
        :host(:state(user-invalid)) .form-control__input:focus-within {
            box-shadow: var(--pk-input-invalid-focus-shadow);
        }

        :host([size='xxs']) {
            --pk-input-padding-block: calc((var(--pk-control-height-xxs) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-input-padding-inline: 6px;
            --pk-input-control-gap: 4px;
            --pk-input-decoration-size: 0.625rem;
        }

        :host([size='xs']) {
            --pk-input-padding-block: calc((var(--pk-control-height-xs) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-input-padding-inline: 6px;
            --pk-input-control-gap: 4px;
            --pk-input-decoration-size: 0.625rem;
        }

        :host([size='xxs']) .input {
            font-size: var(--pk-control-font-xxs);
        }

        :host([size='xs']) .input {
            font-size: var(--pk-control-font-xs);
        }

        :host([size='sm']) {
            --pk-input-padding-block: calc((var(--pk-control-height-sm) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-input-padding-inline: 8px;
            --pk-input-control-gap: 4px;
            --pk-input-decoration-size: 0.6875rem;
        }

        :host([size='sm']) .input {
            font-size: var(--pk-control-font-sm);
        }

        :host([size='lg']) {
            --pk-input-padding-block: calc((var(--pk-control-height-lg) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-input-padding-inline: 12px;
            --pk-input-control-gap: 8px;
            --pk-input-decoration-size: 0.875rem;
        }

        :host([size='lg']) .input {
            font-size: var(--pk-control-font-lg);
        }

        :host([size='xl']) {
            --pk-input-padding-block: calc((var(--pk-control-height-xl) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-input-padding-inline: 16px;
            --pk-input-control-gap: 8px;
            --pk-input-decoration-size: 1rem;
        }

        :host([size='xl']) .input {
            font-size: var(--pk-control-font-xl);
        }

        /* Optical font sizing must not change the control height. */
        :host([mono]) .input {
            font-family: var(--pk-input-mono-font-family);
            font-size: calc(var(--pk-control-font-default) * 0.9);
            line-height: var(--pk-input-control-line-height, 1.25rem);
        }

        :host([mono][size='xxs']) .input {
            font-size: calc(var(--pk-control-font-xxs) * 0.9);
        }

        :host([mono][size='xs']) .input {
            font-size: calc(var(--pk-control-font-xs) * 0.9);
        }

        :host([mono][size='sm']) .input {
            font-size: calc(var(--pk-control-font-sm) * 0.9);
        }

        :host([mono][size='lg']) .input {
            font-size: calc(var(--pk-control-font-lg) * 0.9);
        }

        :host([mono][size='xl']) .input {
            font-size: calc(var(--pk-control-font-xl) * 0.9);
        }

        /* Editable-table cells (v1): flush into the row — no chrome border/radius.
         * Prefer reflected fit-cell (Lit property); data-editable-table-input is a legacy alias.
         * Fill host → form-control → input so the control spans the full td.
         */
        :host([fit-cell]),
        :host([data-editable-table-input]) {
            display: block;
            height: 100%;
            min-height: 100%;
            box-sizing: border-box;
        }

        :host([fit-cell]) .form-control,
        :host([data-editable-table-input]) .form-control {
            height: 100%;
            min-height: 100%;
            gap: 0;
        }

        :host([fit-cell]) .form-control__input,
        :host([data-editable-table-input]) .form-control__input {
            height: 100%;
            min-height: 100%;
            flex: 1 1 auto;
            padding-inline: 0;
            border: none;
            border-radius: 0;
            background: transparent;
            box-shadow: none;
        }

        :host([fit-cell]) .input,
        :host([data-editable-table-input]) .input {
            height: 100%;
            min-height: 100%;
        }

        :host([fit-cell]:not([invalid]):not(:state(user-invalid))) .form-control__input:focus-within,
        :host([fit-cell][data-state='focus-visible']:not([invalid]):not(:state(user-invalid))) .form-control__input,
        :host([data-editable-table-input]:not([invalid]):not(:state(user-invalid))) .form-control__input:focus-within,
        :host([data-editable-table-input][data-state='focus-visible']:not([invalid]):not(:state(user-invalid))) .form-control__input {
            border: none;
            box-shadow: inset 0 0 0 1px var(--pk-color-gray-200);
        }

        :host([fit-cell][invalid]) .form-control__input,
        :host([fit-cell]:state(user-invalid)) .form-control__input,
        :host([data-editable-table-input][invalid]) .form-control__input,
        :host([data-editable-table-input]:state(user-invalid)) .form-control__input {
            border: none;
            box-shadow: inset 0 0 0 1px var(--pk-color-rose-600);
        }

        :host([fit-cell][invalid]) .form-control__input:focus-within,
        :host([fit-cell][invalid][data-state='focus-visible']) .form-control__input,
        :host([fit-cell]:state(user-invalid)) .form-control__input:focus-within,
        :host([data-editable-table-input][invalid]) .form-control__input:focus-within,
        :host([data-editable-table-input][invalid][data-state='focus-visible']) .form-control__input,
        :host([data-editable-table-input]:state(user-invalid)) .form-control__input:focus-within {
            border: none;
            box-shadow: inset 0 0 0 1px var(--pk-color-rose-600);
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:not([data-pk-group-divider])) .form-control__input {
            border-left-width: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-join]:not([data-pk-group-divider])) .form-control__input {
            border-top-width: 0;
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-divider]) .form-control__input {
            border-left-width: 1px;
            border-left-style: solid;
            border-left-color: var(--pk-btn-group-divider-color-outline, var(--pk-input-border-color));
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-divider]) .form-control__input {
            border-top-width: 1px;
            border-top-style: solid;
            border-top-color: var(--pk-btn-group-divider-color-outline, var(--pk-input-border-color));
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail]) .form-control__input {
            border-right-width: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail]) .form-control__input {
            border-bottom-width: 0;
        }

        /*
         * Clear is a flex trailing action (not absolute). Reserves width in the
         * control so values cannot scroll under the glyph — same contract as
         * combobox clear/expand and image-browser clear.
         */
        .clear-button {
            display: inline-flex;
            flex-shrink: 0;
            align-self: stretch;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            width: calc(var(--pk-input-decoration-size) + var(--pk-input-padding-inline));
            margin-block: calc(-1 * var(--pk-input-padding-block));
            /* Match pk-copy-button[slot=end]: pull into padding but leave a 4px glyph inset. */
            margin-inline-end: calc(-1 * var(--pk-input-padding-inline) + 4px);
            font-size: var(--pk-input-decoration-size);
            line-height: 1;
        }
    }
`,F=(an=class extends O{constructor(...e){super(...e),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new b(this,`instructions`,`hint`,`label`,`start`,`end`),this.inputId=T(`pk-input`),this.type=`text`,this._value=null,this.defaultValue=null,this.size=`default`,this.label=``,this.instructions=``,this.withClear=!1,this.clearLabel=`Clear`,this.placeholder=``,this.readonly=!1,this.invalid=!1,this.fitCell=!1,this.mono=!1,this.autofocus=!1,this.withLabel=!1,this.withInstructions=!1}static get validators(){return[...super.validators,Ie(),M()]}get value(){var e,t,n;return this.valueHasChanged?(e=this._value)==null?``:e:(t=(n=this._value)==null?this.defaultValue:n)==null?``:t}set value(e){let t=e==null?``:e;this._value!==t&&(this.valueHasChanged=!0,this._value=t)}connectedCallback(){this.instructions=Qt(this,this.instructions),this.hasAttribute(`with-hint`)&&(this.withInstructions=!0),super.connectedCallback()}syncFormValue(){this.setValue(this.value||``)}resetToDefaultValue(){this.valueHasChanged=!1,this._value=null}restoreFormState(e){typeof e==`string`&&(this.value=e)}formResetCallback(){var e;this.valueHasChanged=!1,this._value=null,this.input&&(this.input.value=(e=this.defaultValue)==null?``:e),super.formResetCallback()}updated(e){(e.has(`value`)||e.has(`defaultValue`))&&this.setState(`blank`,!this.value),super.updated(e)}syncStandaloneAria(){if(!this.input)return;let e=!!this.label||this.hasSlotController.test(`label`,this.withLabel),t=$t((e,t)=>this.hasSlotController.test(e,t),this.instructions,this.withInstructions);xe({control:this.input,labelId:`${this.inputId}-label`,instructionsId:`${this.inputId}-instructions`,hasLabel:e,hasInstructions:t,required:this.required,invalid:this.invalid||!this.internals.validity.valid})}hasLabelContent(){return!!this.label||this.hasSlotController.test(`label`,this.withLabel)}hasInstructionsContent(){return $t((e,t)=>this.hasSlotController.test(e,t),this.instructions,this.withInstructions)}focus(e){var t;(t=this.input)==null||t.focus(e)}blur(){var e;(e=this.input)==null||e.blur()}select(){var e;(e=this.input)==null||e.select()}handleInput(){this.value=this.input.value,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))}handleChange(e){this.value=this.input.value,e.stopPropagation(),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}handleKeyDown(e){un(this,e,this.type)}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.dispatchEvent(new ye),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})),this.input.focus())}endHasAction(){return[...this.children].some(e=>e.getAttribute(`slot`)===`end`&&e.localName===`pk-copy-button`)}handleEndSlotChange(){this.requestUpdate()}render(){let e=this.hasLabelContent(),t=this.hasInstructionsContent(),n=this.withClear&&!this.disabled&&!this.readonly&&this.value.length>0,r=this.hasSlotController.test(`start`),i=this.hasSlotController.test(`end`);return s`
            <div part="form-control" class="form-control">
                ${e||t?s`
                        <div part="header" class="form-control__header">
                            ${e?s`
                                    <label
                                        part="label"
                                        class="form-control__label"
                                        id=${`${this.inputId}-label`}
                                        for=${`${this.inputId}-control`}
                                    >
                                        <slot name="label">${this.label}</slot>
                                    </label>
                                `:a}

                            ${t?s`
                                    <p
                                        part="instructions"
                                        class="form-control__instructions"
                                        id=${`${this.inputId}-instructions`}
                                    >
                                        <slot name="instructions">${this.instructions}</slot>
                                        <slot name="hint"></slot>
                                    </p>
                                `:a}
                        </div>
                    `:a}

                <div part="base" class="form-control__input">
                    ${r?s`
                            <span part="start" class="form-control__start">
                                <slot name="start"></slot>
                            </span>
                        `:s`<slot name="start" hidden></slot>`}

                    <input
                        part="input"
                        class="input"
                        ?data-custom-clear=${this.withClear}
                        id=${e?`${this.inputId}-control`:a}
                        type=${this.type}
                        .value=${rn(this.value)}
                        placeholder=${this.placeholder||a}
                        pattern=${P(this.pattern)}
                        minlength=${P(this.minlength)}
                        maxlength=${P(this.maxlength)}
                        min=${P(this.min)}
                        max=${P(this.max)}
                        step=${P(this.step)}
                        autocomplete=${P(this.autocomplete)}
                        ?disabled=${this.disabled}
                        ?readonly=${this.readonly}
                        ?required=${this.required}
                        ?autofocus=${this.autofocus}
                        @input=${this.handleInput}
                        @change=${this.handleChange}
                        @keydown=${this.handleKeyDown}
                        @focus=${()=>this.dispatchEvent(new Event(`focus`,{bubbles:!0,composed:!0}))}
                        @blur=${()=>this.dispatchEvent(new Event(`blur`,{bubbles:!0,composed:!0}))}
                    />

                    ${n?s`
                            <button
                                part="clear-button"
                                class="icon-button clear-button"
                                type="button"
                                aria-label=${this.clearLabel}
                                @click=${this.handleClearClick}
                            >
                                <slot name="clear-icon">×</slot>
                            </button>
                        `:a}

                    ${i?s`
                            <span part="end" class=${this.endHasAction()?`form-control__end has-action`:`form-control__end`}>
                                <slot name="end" @slotchange=${this.handleEndSlotChange}></slot>
                            </span>
                        `:s`<slot name="end" hidden></slot>`}
                </div>
            </div>
        `}},an.styles=[ut,p(),fe(`.input`,`var(--pk-input-border-radius, var(--pk-radius-sm))`),ee(`.input`),dn],an);l([u(`input`)],F.prototype,`input`,void 0),l([_({reflect:!0})],F.prototype,`type`,void 0),l([v()],F.prototype,`value`,null),l([_({attribute:`value`,reflect:!0})],F.prototype,`defaultValue`,void 0),l([_({reflect:!0})],F.prototype,`size`,void 0),l([_()],F.prototype,`label`,void 0),l([_()],F.prototype,`instructions`,void 0),l([_({attribute:`with-clear`,type:Boolean})],F.prototype,`withClear`,void 0),l([_({attribute:`clear-label`})],F.prototype,`clearLabel`,void 0),l([_()],F.prototype,`placeholder`,void 0),l([_({type:Boolean,reflect:!0})],F.prototype,`readonly`,void 0),l([_({type:Boolean,reflect:!0})],F.prototype,`invalid`,void 0),l([_({type:Boolean,reflect:!0,attribute:`fit-cell`})],F.prototype,`fitCell`,void 0),l([_({type:Boolean,reflect:!0})],F.prototype,`mono`,void 0),l([_()],F.prototype,`pattern`,void 0),l([_({type:Number})],F.prototype,`minlength`,void 0),l([_({type:Number})],F.prototype,`maxlength`,void 0),l([_()],F.prototype,`min`,void 0),l([_()],F.prototype,`max`,void 0),l([_()],F.prototype,`step`,void 0),l([_()],F.prototype,`autocomplete`,void 0),l([_({type:Boolean,reflect:!0})],F.prototype,`autofocus`,void 0),l([_({attribute:`with-label`,type:Boolean})],F.prototype,`withLabel`,void 0),l([_({attribute:`with-instructions`,type:Boolean})],F.prototype,`withInstructions`,void 0),F=l([d(`pk-input`)],F);var fn;function pn(){return s`
        <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" viewBox="0 0 640 640">
            <path
                fill="currentColor"
                d="M557.5 192L534.9 214.6L278.9 470.6C266.4 483.1 246.1 483.1 233.6 470.6L105.6 342.6L83 320L128.3 274.7C129.6 276 172.3 318.7 256.3 402.7L489.7 169.3L512.3 146.7L557.6 192z"
            />
        </svg>
    `}function mn(){return s`
        <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" viewBox="0 0 640 640">
            <path fill="currentColor" d="M96 352V288H544V352H96z" />
        </svg>
    `}var hn=[t`
    @layer pk-component {
        .control {
            display: inline-flex;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            position: relative;
            box-sizing: border-box;
            width: var(--pk-checkbox-size);
            height: var(--pk-checkbox-size);
            border: 1px solid var(--pk-checkbox-border-color, #c0cbd9);
            border-radius: var(--pk-radius-sm);
            background: var(--pk-color-white);
            cursor: pointer;
            transition: border-color 0.12s ease, box-shadow 0.12s ease;
        }

        :host([disabled]) .control {
            cursor: not-allowed;
        }

        .input:focus-visible + .control {
            border-color: var(--pk-color-sky-600);
            box-shadow: 0 0 0 1px var(--pk-color-sky-600), 0 0 4px 0 hsl(from var(--pk-color-sky-600) h s l / 0.7);
        }

        :host([invalid]) .control,
        .input[aria-invalid='true'] + .control {
            border-color: var(--pk-color-rose-600);
        }

        :host([invalid]) .input:focus-visible + .control,
        .input[aria-invalid='true']:focus-visible + .control {
            border-color: var(--pk-color-rose-600);
            box-shadow: 0 0 0 1px var(--pk-color-rose-600), 0 0 4px 0 hsl(from var(--pk-color-rose-600) h s l / 0.7);
        }

        .indicator {
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--pk-color-gray-900);
        }

        .icon-check,
        .icon-indeterminate {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
        }

        .icon-check svg {
            width: 14px;
            height: 14px;
            transform: translateY(1px) scale(1.2);
        }

        .icon-indeterminate svg {
            width: 12px;
            height: 12px;
        }

        :host([checked]) .icon-check,
        .input:checked + .control .icon-check {
            opacity: 1;
        }

        :host([indeterminate]) .icon-check,
        .input:indeterminate + .control .icon-check {
            opacity: 0;
        }

        :host([indeterminate]) .icon-indeterminate,
        .input:indeterminate + .control .icon-indeterminate {
            opacity: 1;
        }
    }
`,t`
    @layer pk-component {
        :host {
            display: inline-flex;
            vertical-align: middle;
            /* Hit target is the content-sized .root label (Craft checkbox-select), not the host. */
            cursor: default;
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
        }

        :host([disabled]) {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .root {
            display: inline-flex;
            flex-shrink: 0;
            align-items: center;
            justify-content: flex-start;
            gap: var(--pk-control-label-gap);
            /* Content-sized like Craft's <label> beside the checkbox — not full-row. */
            width: fit-content;
            max-width: 100%;
            margin: 0;
            min-height: 0;
            cursor: pointer;
            user-select: none;
            position: relative;
        }

        :host([disabled]) .root {
            cursor: not-allowed;
        }

        .root--with-hint {
            align-items: flex-start;
        }

        .input {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
            opacity: 0;
            appearance: none;
        }

        .text {
            display: flex;
            flex-direction: column;
            gap: 0.125rem;
            min-width: 0;
        }

        .label {
            line-height: max(1rem, var(--pk-checkbox-size));
            /* Match form-control / Craft body labels (gray-700), not gray-900. */
            color: var(--pk-color-gray-700);
            cursor: pointer;
        }

        :host([disabled]) .label {
            cursor: not-allowed;
        }

        :host(.all-option) .label {
            font-weight: 700;
        }

        .hint {
            margin: 0;
            color: var(--pk-color-gray-500);
            font-size: var(--pk-font-size-sm);
            line-height: var(--pk-line-height);
        }

        .hint:empty {
            display: none;
        }
    }
`],I=(fn=class extends O{constructor(...e){super(...e),this.assumeInteractionOn=[`change`],this.hasSlotController=new b(this,`hint`),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.invalid=!1,this.checkboxValue=`on`,this.defaultChecked=!1,this.ariaLabel=null,this.hint=``,this.withHint=!1,this.hasDefaultSlotContent=!1}static get validators(){return[...super.validators,M({validationProperty:`checked`})]}get validationTarget(){return this.input}syncFormValue(){this.setFormValue(this.checked?this.checkboxValue:null,this.checked?`on`:`off`)}resetToDefaultValue(){this.checked=this.defaultChecked,this.indeterminate=!1}restoreFormState(e){this.checked=e===`on`||e===this.checkboxValue}updated(e){this.input&&(e.has(`checkboxValue`)&&this.syncFormValue(),(e.has(`indeterminate`)||e.has(`checked`))&&(this.input.indeterminate=this.indeterminate,this.input.checked=this.checked)),super.updated(e)}defaultSlotChanged(e){let t=e.target;this.hasDefaultSlotContent=t.assignedNodes({flatten:!0}).some(e=>{var t;return e.nodeType===Node.TEXT_NODE?(t=e.textContent)==null?void 0:t.trim():e.nodeType===Node.ELEMENT_NODE})}handleChange(e){let t=e.target;this.checked=t.checked,this.indeterminate=!1,this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{checked:this.checked},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}render(){var e,t;let n=this.hasDefaultSlotContent,r=!!this.hint||this.hasSlotController.test(`hint`,this.withHint);return s`
            <label
                part="base"
                class=${S({root:!0,"root--with-hint":r})}
            >
                <input
                    part="input"
                    class="input"
                    type="checkbox"
                    .checked=${this.checked}
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    name=${(e=this.name)==null?a:e}
                    value=${this.checkboxValue}
                    aria-labelledby=${n?`label`:a}
                    aria-describedby=${r?`hint`:a}
                    aria-label=${n||(t=this.ariaLabel)==null?a:t}
                    aria-invalid=${this.invalid?`true`:a}
                    @change=${this.handleChange}
                />
                <span part="control" class="control">
                    <span part="checked-icon" class="icon-check">${pn()}</span>
                    <span part="indeterminate-icon" class="icon-indeterminate">${mn()}</span>
                </span>
                ${n||r?s`
                        <span class="text">
                            ${n?s`
                                    <span part="label" class="label" id="label">
                                        <slot @slotchange=${this.defaultSlotChanged}></slot>
                                    </span>
                                `:s`<slot @slotchange=${this.defaultSlotChanged} hidden></slot>`}
                            ${r?s`
                                    <span part="hint" class="hint" id="hint">
                                        <slot name="hint">${this.hint}</slot>
                                    </span>
                                `:a}
                        </span>
                    `:s`<slot @slotchange=${this.defaultSlotChanged} hidden></slot>`}
            </label>
        `}},fn.shadowRootOptions={mode:`open`,delegatesFocus:!0},fn.styles=hn,fn);l([_({type:Boolean,reflect:!0})],I.prototype,`checked`,void 0),l([_({type:Boolean,reflect:!0})],I.prototype,`indeterminate`,void 0),l([_({type:Boolean,reflect:!0})],I.prototype,`disabled`,void 0),l([_({type:Boolean,reflect:!0})],I.prototype,`invalid`,void 0),l([_()],I.prototype,`checkboxValue`,void 0),l([_({attribute:`default-checked`,type:Boolean})],I.prototype,`defaultChecked`,void 0),l([_({attribute:`aria-label`})],I.prototype,`ariaLabel`,void 0),l([_()],I.prototype,`hint`,void 0),l([_({type:Boolean,attribute:`with-hint`})],I.prototype,`withHint`,void 0),l([u(`.input`)],I.prototype,`input`,void 0),l([v()],I.prototype,`hasDefaultSlotContent`,void 0),I=l([d(`pk-checkbox`)],I);var gn,L={default:t`
        --pk-dropdown-item-padding-block: 8px;
        --pk-dropdown-item-padding-inline: 12px;
        --pk-dropdown-item-gap: 0.625rem;
        --pk-dropdown-item-font-size: var(--pk-font-size-base);
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 12px;
        --pk-dropdown-label-padding-inline: 12px;
        --pk-dropdown-label-font-size: 13px;
        --pk-dropdown-details-font-size: var(--pk-font-size-sm);
    `,xs:t`
        --pk-dropdown-item-padding-block: 3px;
        --pk-dropdown-item-padding-inline: 8px;
        --pk-dropdown-item-gap: 0.375rem;
        --pk-dropdown-item-font-size: 12px;
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 10px;
        --pk-dropdown-label-padding-inline: 8px;
        --pk-dropdown-label-font-size: 11px;
        --pk-dropdown-details-font-size: 11px;
    `,sm:t`
        --pk-dropdown-item-padding-block: 4px;
        --pk-dropdown-item-padding-inline: 10px;
        --pk-dropdown-item-gap: 0.4375rem;
        --pk-dropdown-item-font-size: 13px;
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 12px;
        --pk-dropdown-label-padding-inline: 10px;
        --pk-dropdown-label-font-size: 11px;
        --pk-dropdown-details-font-size: 12px;
    `,lg:t`
        --pk-dropdown-item-padding-block: 10px;
        --pk-dropdown-item-padding-inline: 14px;
        --pk-dropdown-item-gap: 0.75rem;
        --pk-dropdown-item-font-size: 16px;
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 14px;
        --pk-dropdown-label-padding-inline: 14px;
        --pk-dropdown-label-font-size: 14px;
        --pk-dropdown-details-font-size: var(--pk-font-size-sm);
    `,xl:t`
        --pk-dropdown-item-padding-block: 12px;
        --pk-dropdown-item-padding-inline: 16px;
        --pk-dropdown-item-gap: 0.75rem;
        --pk-dropdown-item-font-size: 18px;
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 16px;
        --pk-dropdown-label-padding-inline: 16px;
        --pk-dropdown-label-font-size: 15px;
        --pk-dropdown-details-font-size: var(--pk-font-size-base);
    `},_n=t`
    @layer pk-component {
        :host {
            ${L.default}
        }

        :host([size='xs']) {
            ${L.xs}
        }

        :host([size='sm']) {
            ${L.sm}
        }

        :host([size='lg']) {
            ${L.lg}
        }

        :host([size='xl']) {
            ${L.xl}
        }
    }
`,vn=t`
    @layer pk-component {
        .panel[data-size='default'],
        .submenu-panel[data-size='default'] {
            ${L.default}
        }

        .panel[data-size='xs'],
        .submenu-panel[data-size='xs'] {
            ${L.xs}
        }

        .panel[data-size='sm'],
        .submenu-panel[data-size='sm'] {
            ${L.sm}
        }

        .panel[data-size='lg'],
        .submenu-panel[data-size='lg'] {
            ${L.lg}
        }

        .panel[data-size='xl'],
        .submenu-panel[data-size='xl'] {
            ${L.xl}
        }
    }
`;t`
    ${_n}
    ${vn}
`;var yn=[Fe,vn,t`
    @layer pk-component {
        :host {
            display: block;
            position: relative;
            /*
             * Slotted label text inherits from this host (light DOM), not from
             * shadow .item — pin size-token metrics so Craft CP / Tailwind /
             * bare hosts all get the same item rhythm.
             */
            font-size: var(--pk-dropdown-item-font-size, var(--pk-font-size-base));
            line-height: var(--pk-dropdown-item-line-height, 1.5);
            color: var(--text-color, var(--pk-color-gray-700));
        }

        .item {
            display: flex;
            align-items: center;
            gap: var(--pk-dropdown-item-gap, 0.625rem);
            width: 100%;
            margin: 0;
            padding: var(--pk-dropdown-item-padding-block, 8px) var(--pk-dropdown-item-padding-inline, 12px);
            border: 0;
            background: transparent;
            color: inherit;
            font: inherit;
            font-size: var(--pk-dropdown-item-font-size, var(--pk-font-size-base));
            /* Explicit — do not let font:inherit re-leak page line-height. */
            line-height: var(--pk-dropdown-item-line-height, 1.5);
            font-weight: normal;
            text-align: left;
            white-space: nowrap;
            cursor: default;
            user-select: none;
            outline: none;
            box-sizing: border-box;
        }

        .item:hover:not([disabled]):not([aria-disabled='true']),
        :host([data-highlighted]) .item,
        :host([submenu-open]) .item {
            background: var(--pk-color-slate-100);
        }

        .item:focus-visible {
            background: var(--pk-color-slate-100);
        }

        .item[aria-disabled='true'] {
            pointer-events: none;
            opacity: 0.5;
        }

        .label {
            flex: 1 1 auto;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .prefix {
            display: inline-flex;
            flex: 0 0 auto;
            align-items: center;
            justify-content: center;
            width: var(--pk-dropdown-item-icon-size, 12px);
            height: var(--pk-dropdown-item-icon-size, 12px);
            line-height: 0;
        }

        .prefix--empty {
            display: none;
        }

        .prefix ::slotted(*) {
            display: inline-flex;
            flex: 0 0 auto;
            align-items: center;
            justify-content: center;
            width: var(--pk-dropdown-item-icon-size, 12px);
            height: var(--pk-dropdown-item-icon-size, 12px);
            /* Kill pk-icon text-baseline nudge inside the padded flex row. */
            vertical-align: 0;
        }

        .prefix ::slotted(svg),
        .prefix ::slotted(*) svg,
        .prefix ::slotted(.pk-dropdown-item__prefix-icon) {
            display: block;
            width: var(--pk-dropdown-item-icon-size, 12px) !important;
            height: var(--pk-dropdown-item-icon-size, 12px) !important;
            max-width: var(--pk-dropdown-item-icon-size, 12px);
            max-height: var(--pk-dropdown-item-icon-size, 12px);
            flex-shrink: 0;
            pointer-events: none;
        }

        .details {
            margin-left: auto;
            color: var(--pk-color-gray-500);
            font-size: var(--pk-dropdown-details-font-size, var(--pk-font-size-sm));
            letter-spacing: 0.04em;
        }

        .details:empty {
            display: none;
        }

        .check {
            display: inline-flex;
            flex: 0 0 auto;
            align-items: center;
            justify-content: center;
            width: 12px;
            height: 12px;
            color: var(--pk-color-gray-700);
        }

        .check svg {
            display: block;
            width: 12px;
            height: 12px;
            flex-shrink: 0;
            pointer-events: none;
        }

        .submenu-icon {
            display: inline-flex;
            flex: 0 0 auto;
            align-items: center;
            justify-content: center;
            width: 1rem;
            color: var(--pk-color-gray-700);
        }

        .submenu-icon svg {
            display: block;
            width: 1em;
            height: 1em;
            flex-shrink: 0;
            pointer-events: none;
        }

        .check {
            opacity: 0;
        }

        :host([checked]) .check {
            opacity: 1;
        }

        :host([type='checkbox']) .check,
        :host([type='radio']) .check {
            margin-left: auto;
        }

        :host([type='checkbox'][checked]) .check,
        :host([type='radio'][checked]) .check {
            opacity: 1;
        }

        .submenu-icon:empty {
            display: none;
        }

        :host([destructive]) .item {
            color: var(--pk-color-error);
        }

        :host([destructive]) .item:hover:not([disabled]):not([aria-disabled='true']),
        :host([destructive]) .item:focus-visible {
            color: var(--pk-color-error);
        }

        .submenu-panel {
            width: max-content;
            min-width: 8rem;
            max-height: var(--pk-popup-available-height, calc(100dvh - 20px));
            overflow: auto;
            overscroll-behavior: contain;
            padding: 4px 0;
            border-radius: var(--pk-radius-md);
            background: var(--pk-color-white);
            box-shadow: var(--pk-shadow-popup);
            /* Match root menu panel — Craft body text, not gray-900. */
            color: var(--text-color, var(--pk-color-gray-700));
        }

        .submenu-panel ::slotted(pk-dropdown-item),
        .submenu-panel ::slotted(pk-dropdown-separator),
        .submenu-panel ::slotted(pk-dropdown-label) {
            display: block;
        }

        .submenu-panel[hidden] {
            display: none !important;
        }
    }
`],bn,xn=g(te),Sn=g(ne),R=(gn=class extends c{constructor(...e){super(...e),this.value=``,this.type=`normal`,this.radioGroup=``,this.disabled=!1,this.destructive=!1,this.checked=!1,this.submenuOpen=!1,this.active=!1,this.submenuAnimated=!1,this.hasSlotController=new b(this,`submenu`,`details`,`start`,`prefix`),this.handleMouseEnter=()=>{this.hasSubmenu()&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)},this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}}connectedCallback(){super.connectedCallback(),this.syncRole(),this.syncSubmenuAria(),this.addEventListener(`click`,this.handleHostClick),this.addEventListener(`mouseenter`,this.handleMouseEnter)}disconnectedCallback(){this.removeEventListener(`click`,this.handleHostClick),this.removeEventListener(`mouseenter`,this.handleMouseEnter),this.closeSubmenu(),super.disconnectedCallback()}updated(e){(e.has(`type`)||e.has(`checked`))&&this.syncRole(),(e.has(`submenuOpen`)||e.size===0)&&this.syncSubmenuAria(),e.has(`submenuOpen`)&&(this.submenuOpen?this.ensureSubmenuSurface():this.submenuAnimated=!1)}hasSubmenu(){return this.hasSlotController.test(`submenu`)}syncSubmenuAria(){let e=this.hasSubmenu();e?this.setAttribute(`aria-haspopup`,`menu`):this.removeAttribute(`aria-haspopup`),this.setAttribute(`aria-expanded`,e&&this.submenuOpen?`true`:`false`)}focusControl(){var e;(e=this.shadowRoot)==null||(e=e.querySelector(`.item`))==null||e.focus({preventScroll:!0})}focus(e){var t;let n=(t=this.shadowRoot)==null?void 0:t.querySelector(`.item`);n?n.focus(e):super.focus(e)}get submenuElement(){var e;return(e=this.submenuPanelElement)==null?null:e}closeSubmenu(){this.submenuAnimated=!1,this.submenuOpen=!1}openSubmenu(){this.hasSubmenu()&&!this.disabled&&this.isConnected&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}notifyParentOfOpening(){this.dispatchEvent(new CustomEvent(`pk-submenu-open`,{bubbles:!0,composed:!0,detail:{item:this}}));let e=this.parentElement;if(e)for(let t of e.children)t!==this&&t instanceof bn&&t.getAttribute(`slot`)===this.getAttribute(`slot`)&&t.submenuOpen&&(t.submenuOpen=!1)}ensureSubmenuSurface(){this.hasSubmenu()&&!this.disabled&&(this.submenuAnimated=!0,this.updateComplete.then(()=>{this.submenuOpen&&this.submenuPanelElement&&(this.submenuPanelElement.hidden=!1,me(this.submenuPanelElement,`right-start`),ge(this.submenuPopupElement,`right-start`).then(e=>{me(this.submenuPanelElement,e)}))}))}syncRole(){this.type===`checkbox`?(this.setAttribute(`role`,`menuitemcheckbox`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`)):this.type===`radio`?(this.setAttribute(`role`,`menuitemradio`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`)):(this.setAttribute(`role`,`menuitem`),this.removeAttribute(`aria-checked`))}handleClick(e){this.disabled?(e.preventDefault(),e.stopImmediatePropagation()):this.hasSubmenu()&&(e.preventDefault(),this.openSubmenu())}render(){let e=this.hasSubmenu(),t=this.type===`checkbox`||this.type===`radio`,n=this.hasSlotController.test(`start`)||this.hasSlotController.test(`prefix`);return s`
            <button
                part="item"
                type="button"
                class="item"
                ?disabled=${this.disabled}
                aria-disabled=${this.disabled?`true`:a}
                @click=${this.handleClick}
            >
                <span
                    part="prefix"
                    class=${n?`prefix`:`prefix prefix--empty`}
                >
                    <slot name="start"></slot>
                    <slot name="prefix"></slot>
                </span>
                <span part="label" class="label"><slot></slot></span>
                <span class="details"><slot name="details"></slot></span>
                ${t?s`<span part="check" class="check" aria-hidden="true">${x(xn)}</span>`:a}
                ${e?s`<span class="submenu-icon" aria-hidden="true">${x(Sn)}</span>`:a}
            </button>
            ${e?s`
                <pk-popup
                    .active=${this.submenuOpen}
                    .anchor=${this}
                    placement="right-start"
                    .distance=${0}
                    .skidding=${-4}
                    flip
                    shift
                    auto-size="vertical"
                    .autoSizePadding=${10}
                    hover-bridge
                    style="--pk-popup-z-index: 1001"
                >
                    <div
                        part="submenu"
                        class="submenu-panel pk-popup-content"
                        role="menu"
                        data-size=${Cn(this)}
                        ?hidden=${!this.submenuOpen}
                        data-open=${this.submenuAnimated?``:a}
                        aria-orientation="vertical"
                    >
                        <slot name="submenu"></slot>
                    </div>
                </pk-popup>
            `:a}
        `}},bn=gn,gn.styles=yn,gn);l([_()],R.prototype,`value`,void 0),l([_({reflect:!0})],R.prototype,`type`,void 0),l([_({attribute:`radio-group`})],R.prototype,`radioGroup`,void 0),l([_({type:Boolean,reflect:!0})],R.prototype,`disabled`,void 0),l([_({type:Boolean,reflect:!0})],R.prototype,`destructive`,void 0),l([_({type:Boolean,reflect:!0})],R.prototype,`checked`,void 0),l([_({attribute:`submenu-open`,type:Boolean,reflect:!0})],R.prototype,`submenuOpen`,void 0),l([_({type:Boolean})],R.prototype,`active`,void 0),l([v()],R.prototype,`submenuAnimated`,void 0),l([u(`.submenu-panel`)],R.prototype,`submenuPanelElement`,void 0),l([u(`pk-popup`)],R.prototype,`submenuPopupElement`,void 0),R=bn=l([d(`pk-dropdown-item`)],R);function Cn(e){var t,n;let r=(t=e.parentElement)==null?void 0:t.getAttribute(`data-size`);if(r===`xs`||r===`sm`||r==="default"||r===`lg`||r===`xl`)return r;let i=(n=e.closest(`pk-dropdown-menu`))==null?void 0:n.getAttribute(`size`);return i===`xs`||i===`sm`||i===`lg`||i===`xl`?i:`default`}var wn,Tn=[p(),_n,vn,t`
        @layer pk-component {
            /* Standalone: keep a real box so the trigger is not a flex-stretched
               child of the page (display:contents flattened pk-button to full card width).
               Button groups override below — same as legacy + React MenuButton inline-flex wrap. */
            :host {
                display: inline-block;
                position: relative;
                width: fit-content;
                max-width: 100%;
                align-self: flex-start;
                vertical-align: middle;
            }

            :host([data-pk-group-orientation]) {
                display: inline-flex;
                vertical-align: middle;
                flex: 0 0 auto;
                width: auto;
                max-width: none;
                align-self: auto;
            }

            /* Belt-and-suspenders if a parent still flattens layout onto the trigger. */
            ::slotted([slot='trigger']) {
                width: fit-content;
                max-width: 100%;
                flex: 0 0 auto;
                align-self: flex-start;
            }

            :host([data-pk-group-orientation]) ::slotted([slot='trigger']) {
                --pk-bg-start-start-radius: inherit;
                --pk-bg-start-end-radius: inherit;
                --pk-bg-end-start-radius: inherit;
                --pk-bg-end-end-radius: inherit;
                align-self: auto;
                max-width: none;
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-join]) {
                margin-inline-start: var(--pk-bg-horizontal-indent, 0);
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-join]) {
                margin-block-start: var(--pk-bg-vertical-indent, 0);
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:has([slot='trigger'][variant='outline'], [slot='trigger'][variant='dashed'])) {
                margin-inline-start: var(--pk-bg-horizontal-indent-outlined, 0);
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-join]:has([slot='trigger'][variant='outline'], [slot='trigger'][variant='dashed'])) {
                margin-block-start: var(--pk-bg-vertical-indent-outlined, 0);
            }

            /* Menu panel — hug content; do not stretch to trigger/anchor width. */
            .panel {
                display: flex;
                flex-direction: column;
                width: max-content;
                min-width: 8rem;
                max-height: var(--pk-popup-available-height, calc(100dvh - 20px));
                margin: 0;
                overflow: auto;
                overscroll-behavior: contain;
                padding: 4px 0;
                border: 0;
                border-radius: var(--pk-radius-md);
                background: var(--pk-color-white);
                box-shadow: var(--pk-shadow-popup);
                /* v1 DropdownMenuItem had no face color — inherited Craft body
                 * (--text-color ≈ gray-700). Do not force gray-900 (too dark). */
                color: var(--text-color, var(--pk-color-gray-700));
                outline: none;
                text-align: start;
                user-select: none;
                /* Match v1 Base UI: popup writes --pk-transform-origin from the
                 * anchor center on the connecting edge (e.g. top-right for
                 * bottom-end). Keyword edge centers made end-aligned menus
                 * scale from the middle of the panel. */
                transform-origin: var(--pk-transform-origin, top);
            }

            .panel.show {
                animation: pk-dropdown-menu-show 100ms ease;
            }

            .panel.hide {
                animation: pk-dropdown-menu-show 100ms ease reverse;
            }

            .panel[hidden] {
                display: none !important;
            }

            ::slotted(pk-dropdown-item),
            ::slotted(pk-dropdown-separator),
            ::slotted(pk-dropdown-label),
            .panel > pk-dropdown-item,
            .panel > pk-dropdown-separator,
            .panel > pk-dropdown-label {
                display: block;
            }

            ::slotted([data-menu-item]) {
                display: flex;
                align-items: center;
                gap: 0.625rem;
                width: 100%;
                margin: 0;
                padding: 8px 12px;
                border: 0;
                background: transparent;
                color: inherit;
                font: inherit;
                font-size: var(--pk-font-size-base);
                text-align: left;
                white-space: nowrap;
                cursor: default;
                user-select: none;
                outline: none;
                box-sizing: border-box;
            }

            ::slotted([data-menu-item]:hover:not([disabled])) {
                background: var(--pk-color-slate-100);
            }

            ::slotted([data-menu-item]:focus-visible) {
                background: var(--pk-color-slate-100);
            }

            ::slotted([data-menu-item][disabled]) {
                pointer-events: none;
                opacity: 0.5;
            }

            ::slotted(pk-dropdown-item[destructive]),
            ::slotted([data-destructive]) {
                color: var(--pk-color-error);
            }

            ::slotted([data-menu-separator]) {
                display: block;
                height: 1px;
                margin: 4px 0;
                background: var(--pk-color-slate-200);
                border: 0;
                padding: 0;
            }
        }

        /* Outside @layer so constructed stylesheets resolve the name reliably. */
        @keyframes pk-dropdown-menu-show {
            from {
                scale: 0.9;
                opacity: 0;
            }

            to {
                scale: 1;
                opacity: 1;
            }
        }
    `],En=new Set,z=(wn=class extends c{constructor(...e){super(...e),this.open=!1,this.size=`default`,this.placement=`bottom-start`,this.sideOffset=4,this.distance=4,this.skidding=0,this.for=``,this.userTypedQuery=``,this.userTypedTimeout=0,this.openSubmenuStack=[],this.openedByKeyboard=!1,this.triggerElement=null,this.handleMenuClick=e=>{let t=this.resolveMenuItem(e);t&&!t.disabled&&(t.hasSubmenu()?(t.submenuOpen||(this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),t.openSubmenu()),e.stopPropagation()):this.makeSelection(t))},this.handleSubmenuOpening=e=>{var t;let n=(t=e.detail)==null?void 0:t.item;n instanceof R&&(this.closeSiblingSubmenus(n),this.addToSubmenuStack(n))},this.handleGlobalMouseMove=e=>{let t=this.getCurrentSubmenuItem();if(!(t!=null&&t.submenuOpen)||!t.submenuElement)return;let n=t.submenuElement,r=e.composedPath(),i=t.matches(`:hover`),a=!!n.matches(`:hover`),o=i||r.some(e=>e===t),s=a||r.some(e=>e instanceof HTMLElement&&e.closest(`[part="submenu"]`)===n);!o&&!s&&window.setTimeout(()=>{!i&&!a&&(t.submenuOpen=!1)},100)},this.handleTriggerClick=e=>{let t=this.getTrigger();t&&e.composedPath().includes(t)&&(e.preventDefault(),e.stopPropagation(),this.openedByKeyboard=!1,this.open=!this.open)},this.handleExternalTriggerClick=e=>{e.preventDefault(),e.stopPropagation(),this.openedByKeyboard=!1,this.open=!this.open},this.handleTriggerKeyDown=e=>{let t=this.getTrigger();t&&e.composedPath().includes(t)&&(this.open||(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),e.stopPropagation(),this.openedByKeyboard=!0,this.open=!0))},this.handleDocumentKeyDown=e=>{let t=this.isRtl();if(e.key===`Escape`&&this.open&&D(this)){var n;e.preventDefault(),e.stopPropagation(),this.open=!1,(n=this.getTrigger())==null||n.focus({preventScroll:!0});return}if(!this.open)return;let r=[...He()].find(e=>e.localName===`pk-dropdown-item`),i=(r==null?void 0:r.localName)===`pk-dropdown-item`,a=this.getCurrentSubmenuItem(),o=!!a,s,c,l;o&&a?(s=this.getSubmenuItems(a),c=s.find(e=>e.active||e===r),l=c?s.indexOf(c):-1):(s=this.getItems(),c=s.find(e=>e.active||e===r),l=c?s.indexOf(c):-1);let u;if(e.key===`ArrowUp`&&(e.preventDefault(),e.stopPropagation(),u=l>0?s[l-1]:s[s.length-1]),e.key===`ArrowDown`&&(e.preventDefault(),e.stopPropagation(),u=l!==-1&&l<s.length-1?s[l+1]:s[0]),e.key===(t?`ArrowLeft`:`ArrowRight`)&&i&&c&&c.hasSubmenu())e.preventDefault(),e.stopPropagation(),this.closeSiblingSubmenus(c),c.openSubmenu(),this.addToSubmenuStack(c),window.setTimeout(()=>{let e=this.getSubmenuItems(c);e.length>0&&this.setActiveItem(e,e[0])},0);else if(e.key===(t?`ArrowRight`:`ArrowLeft`)&&o){e.preventDefault(),e.stopPropagation();let t=this.removeFromSubmenuStack();t&&(t.submenuOpen=!1,window.setTimeout(()=>{t.focus({preventScroll:!0}),t.active=!0,(t.slot===`submenu`&&t.parentElement instanceof R?this.getSubmenuItems(t.parentElement):this.getItems()).forEach(e=>{e!==t&&(e.active=!1)})},0))}else if((e.key===`Home`||e.key===`End`)&&(e.preventDefault(),e.stopPropagation(),u=e.key===`Home`?s[0]:s[s.length-1]),e.key===`Tab`)this.open=!1;else{if(e.key.length===1&&!(e.metaKey||e.ctrlKey||e.altKey)&&(e.key!==` `||this.userTypedQuery!==``)){window.clearTimeout(this.userTypedTimeout),this.userTypedTimeout=window.setTimeout(()=>{this.userTypedQuery=``},1e3),this.userTypedQuery+=e.key;let t=this.userTypedQuery.trim().toLowerCase();u=s.find(e=>(e.textContent||``).trim().toLowerCase().startsWith(t))}u?(e.preventDefault(),e.stopPropagation(),this.setActiveItem(s,u)):(e.key===`Enter`||e.key===` `&&this.userTypedQuery===``)&&i&&c&&(e.preventDefault(),e.stopPropagation(),c.hasSubmenu()?(this.closeSiblingSubmenus(c),c.openSubmenu(),this.addToSubmenuStack(c),window.setTimeout(()=>{let e=this.getSubmenuItems(c);e.length>0&&this.setActiveItem(e,e[0])},0)):this.makeSelection(c))}},this.handleDocumentPointerDown=e=>{let t=e.composedPath(),n=this.getTrigger();t.some(e=>e===this||e===n)||(this.open=!1)}}get panelElement(){var e;return(e=this.menuElement)==null?null:e}get popup(){var e;return(e=this.popupElement)==null?null:e}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleTriggerClick,!0),this.addEventListener(`keydown`,this.handleTriggerKeyDown)}firstUpdated(){let e=()=>{this.for?this.resolveExternalTrigger():this.syncSlottedTrigger()};queueMicrotask(e),requestAnimationFrame(e)}disconnectedCallback(){var e;window.clearTimeout(this.userTypedTimeout),this.removeEventListener(`click`,this.handleTriggerClick,!0),this.removeEventListener(`keydown`,this.handleTriggerKeyDown),this.unbindTrigger(this.triggerElement),this.triggerElement=null,this.closeAllSubmenus(),this.popupElement&&(this.popupElement.active=!1),(e=this.menuElement)==null||e.classList.remove(`show`,`hide`),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),E(this),En.delete(this),super.disconnectedCallback()}updated(e){var t=()=>super.updated,n=this;return w(function*(){if(t().call(n,e),e.has(`for`)&&n.resolveExternalTrigger(),e.has(`open`)&&n.syncTriggerExpanded(),!e.has(`open`))return;let r=e.get(`open`);r!==n.open&&(r!==void 0||n.open!==!1)&&(n.open?yield n.showMenu():(n.closeAllSubmenus(),yield n.hideMenu(`unknown`)))})()}getItems(e=!1){var t,n;let r=((t=(n=this.defaultSlot)==null?void 0:n.assignedElements({flatten:!0}))==null?[]:t).filter(e=>e.localName===`pk-dropdown-item`);return e?r:r.filter(e=>!e.disabled)}getSubmenuItems(e,t=!1){var n,r;let i=((n=(r=e.shadowRoot)==null||(r=r.querySelector(`slot[name="submenu"]`))==null?void 0:r.assignedElements({flatten:!0}))==null?[...e.children].filter(e=>e.getAttribute(`slot`)===`submenu`):n).filter(e=>e.localName===`pk-dropdown-item`);return t?i:i.filter(e=>!e.disabled)}getTrigger(){var e,t;return this.for?(e=ve(this,this.for))==null?this.triggerElement:e:(t=this.querySelector(`[slot="trigger"]`))==null?this.triggerElement:t}getAnchor(){var e;return(e=this.getTrigger())==null?``:e}resolveExternalTrigger(){this.unbindTrigger(this.triggerElement),this.triggerElement=this.for?ve(this,this.for):null,this.bindTrigger(this.triggerElement),this.requestUpdate()}onTriggerSlotChange(e){if(this.for)return;let[t]=e.target.assignedElements({flatten:!0});this.unbindTrigger(this.triggerElement),this.triggerElement=t==null?null:t,this.bindTrigger(this.triggerElement),this.requestUpdate()}syncSlottedTrigger(){let e=this.renderRoot.querySelector(`slot[name="trigger"]`);e&&this.onTriggerSlotChange({target:e})}bindTrigger(e){e&&(e.setAttribute(`aria-haspopup`,`menu`),this.for&&(e.addEventListener(`click`,this.handleExternalTriggerClick),e.addEventListener(`keydown`,this.handleTriggerKeyDown)),this.syncTriggerExpanded())}unbindTrigger(e){e==null||e.removeEventListener(`click`,this.handleExternalTriggerClick),e==null||e.removeEventListener(`keydown`,this.handleTriggerKeyDown)}syncTriggerExpanded(){var e;(e=this.getTrigger())==null||e.setAttribute(`aria-expanded`,this.open?`true`:`false`)}closeAfterSelect(e=`api`){this.open=!1}makeSelection(e){let t=this.getTrigger();if(e.disabled)return;e.type===`checkbox`&&(e.checked=!e.checked),e.type===`radio`&&!e.checked&&(e.checked=!0);let n={value:e.value,type:e.type,checked:e.checked,radioGroup:e.radioGroup};e.dispatchEvent(new CustomEvent(`pk-select`,{detail:n,bubbles:!1,composed:!1,cancelable:!0}));let r=new CustomEvent(`pk-select`,{detail:n,bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(r),r.defaultPrevented||(this.open=!1,t==null||t.focus({preventScroll:!0}))}resolveMenuItem(e){var t;let n=e.target;if(n instanceof R)return n;if(n instanceof Element){let e=n.closest(`pk-dropdown-item`);if(e instanceof R)return e}return(t=e.composedPath().find(e=>e instanceof R))==null?null:t}whenClosed(){var e;return this.open?new Promise(e=>{this.addEventListener(`pk-after-hide`,()=>{this.popupElement.stop().then(()=>e())},{once:!0})}):(e=this.popupElement)!=null&&e.active?this.popupElement.stop():Promise.resolve()}forceDismissCleanup(){var e;this.open=!1,this.popupElement.active=!1,(e=this.menuElement)==null||e.classList.remove(`show`,`hide`),this.closeAllSubmenus(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),E(this),En.delete(this)}isRtl(){return getComputedStyle(this).direction===`rtl`}addToSubmenuStack(e){let t=this.openSubmenuStack.indexOf(e);t===-1?this.openSubmenuStack.push(e):this.openSubmenuStack=this.openSubmenuStack.slice(0,t+1)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(e=>{e.submenuOpen=!1,e.active=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(e){let t=e.closest(`pk-dropdown-item:not([slot="submenu"])`);(t instanceof R?this.getSubmenuItems(t,!0):this.getItems(!0)).forEach(t=>{t!==e&&t.submenuOpen&&(t.submenuOpen=!1)}),this.openSubmenuStack.includes(e)||this.openSubmenuStack.push(e)}setActiveItem(e,t){e.forEach(e=>{e.active=e===t,e===t?e.setAttribute(`data-highlighted`,``):e.removeAttribute(`data-highlighted`)}),t.focus({preventScroll:!0}),t.scrollIntoView({block:`nearest`})}showMenu(){var e=this;return w(function*(){var t;if(!e.popupElement||!e.menuElement)return;e.for&&!((t=e.triggerElement)!=null&&t.isConnected)&&e.resolveExternalTrigger();let n=new Le;if(!e.dispatchEvent(n)){e.open=!1;return}if(e.popupElement.active&&(e.popupElement.active=!1,e.menuElement.classList.remove(`show`,`hide`),yield e.updateComplete),En.forEach(t=>{t!==e&&(t.open=!1)}),e.popupElement.active=!0,e.open=!0,En.add(e),Te(e),document.addEventListener(`keydown`,e.handleDocumentKeyDown),document.addEventListener(`pointerdown`,e.handleDocumentPointerDown,!0),document.addEventListener(`mousemove`,e.handleGlobalMouseMove),yield e.updateComplete,yield ge(e.popupElement,e.placement,100,{requireEvent:!0}),!e.open){e.popupElement.active=!1,En.delete(e),E(e),document.removeEventListener(`keydown`,e.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,e.handleDocumentPointerDown,!0),document.removeEventListener(`mousemove`,e.handleGlobalMouseMove);return}e.menuElement.classList.remove(`hide`),yield $e(e.menuElement,`show`);let r=e.getItems();r.length>0&&(e.openedByKeyboard?e.setActiveItem(r,r[0]):(r.forEach(e=>{e.active=!1,e.removeAttribute(`data-highlighted`)}),e.menuElement.focus({preventScroll:!0}))),e.openedByKeyboard=!1,e.dispatchEvent(new _e),e.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!0},bubbles:!0,composed:!0}))})()}hideMenu(e){var t=this;return w(function*(){if(!t.popupElement||!t.menuElement)return;let n=new pe(e);t.dispatchEvent(n)?(t.open=!1,En.delete(t),E(t),document.removeEventListener(`keydown`,t.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,t.handleDocumentPointerDown,!0),document.removeEventListener(`mousemove`,t.handleGlobalMouseMove),t.userTypedQuery=``,window.clearTimeout(t.userTypedTimeout),t.getItems(!0).forEach(e=>{e.active=!1,e.removeAttribute(`data-highlighted`)}),t.menuElement.classList.remove(`show`),yield $e(t.menuElement,`hide`),t.popupElement.active=!1,t.dispatchEvent(new Re),t.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!1},bubbles:!0,composed:!0}))):t.open=!0})()}render(){var e;let t=this.hasUpdated?(e=this.popupElement)==null?void 0:e.active:this.open,n=this.for?this.getAnchor():``;return s`
            <pk-popup
                .anchor=${n}
                placement=${this.placement}
                .distance=${this.distance||this.sideOffset}
                .skidding=${this.skidding}
                ?active=${t}
                flip
                shift
                .shiftPadding=${10}
                auto-size="vertical"
                .autoSizePadding=${10}
            >
                <slot
                    name="trigger"
                    slot="anchor"
                    @slotchange=${this.onTriggerSlotChange}
                ></slot>

                <div
                    id="menu"
                    part="panel"
                    class="panel"
                    role="menu"
                    tabindex="-1"
                    aria-orientation="vertical"
                    data-size=${this.size}
                    @click=${this.handleMenuClick}
                    @pk-submenu-open=${this.handleSubmenuOpening}
                >
                    <slot></slot>
                </div>
            </pk-popup>
        `}},wn.styles=Tn,wn);l([_({type:Boolean,reflect:!0})],z.prototype,`open`,void 0),l([_({reflect:!0})],z.prototype,`size`,void 0),l([_({reflect:!0})],z.prototype,`placement`,void 0),l([_({attribute:`side-offset`,type:Number})],z.prototype,`sideOffset`,void 0),l([_({type:Number})],z.prototype,`distance`,void 0),l([_({type:Number})],z.prototype,`skidding`,void 0),l([_({reflect:!0})],z.prototype,`for`,void 0),l([u(`slot:not([name])`)],z.prototype,`defaultSlot`,void 0),l([u(`#menu`)],z.prototype,`menuElement`,void 0),l([u(`pk-popup`)],z.prototype,`popupElement`,void 0),z=l([d(`pk-dropdown-menu`)],z);function Dn(e,t=150){return e?new Promise(n=>{let r=!1,i=()=>{r||(r=!0,e.removeEventListener(`animationend`,a),window.clearTimeout(o),e.classList.remove(`closing`),n())},a=t=>{t.target===e&&t.animationName.startsWith(`pk-popup-content-out`)&&i()};e.classList.add(`closing`),e.addEventListener(`animationend`,a);let o=window.setTimeout(i,t)}):Promise.resolve()}function On(e){let{host:t,options:n,visible:r,listboxId:i,filterQuery:a,isSelected:o}=e;for(let e of n)e.selected=o(e.value),e.hidden=!r.includes(e),e.optionId=`${i}-option-${e.value}`,e.matchQuery=a;for(let e of t.querySelectorAll(`pk-option-group`)){let t=[...e.querySelectorAll(`pk-option`)],n=t.length>0&&t.every(e=>e.hidden);e.toggleAttribute(`data-pk-filter-empty`,n)}Ae(t)}var kn=class{constructor(e,t){var n,r;this.getHandler=e,this.timer=null,this.requestId=0,this.abortController=null,this.callbacks=t,this.debounceMs=(n=t.debounceMs)==null?200:n,this.errorLabel=(r=t.errorLabel)==null?`options`:r}schedule(e){this.timer!==null&&window.clearTimeout(this.timer),this.timer=window.setTimeout(()=>{this.timer=null,this.run(e)},this.debounceMs)}cancel(){var e;this.timer!==null&&(window.clearTimeout(this.timer),this.timer=null),(e=this.abortController)==null||e.abort(),this.abortController=null}run(e){var t=this;return w(function*(){var n,r,i;let a=t.getHandler();if(!a)return;let o=++t.requestId;if((n=t.abortController)==null||n.abort(),t.abortController=new AbortController,!e){var s,c;(s=(c=t.callbacks).onEmptyQuery)==null||s.call(c)}else{(r=(i=t.callbacks).onLoading)==null||r.call(i);try{let n=yield a(e,t.abortController.signal);if(o!==t.requestId)return;t.callbacks.onResults(n)}catch(e){var l,u,d;if((l=t.abortController)!=null&&l.signal.aborted||o!==t.requestId||e instanceof DOMException&&e.name===`AbortError`)return;console.error(`Failed to load ${t.errorLabel}:`,e),(u=(d=t.callbacks).onError)==null||u.call(d,`Failed to load options. Please try again.`),t.callbacks.onResults([])}finally{var f,p;o===t.requestId&&((f=(p=t.callbacks).onSettled)==null||f.call(p))}}})()}};function An(e,t){var n,r;let i=e.getLabel().toLowerCase(),a=e.value.toLowerCase(),o=((n=(r=e.getSearchText)==null?void 0:r.call(e))==null?i:n).toLowerCase();return i.includes(t)||a.includes(t)||o.includes(t)}function jn(e,t,n){return n?n(e,t):An(e,t)}var Mn,Nn=class extends Event{constructor(e){super(`pk-create`,{bubbles:!0,cancelable:!0,composed:!0}),this.inputValue=e}},Pn=[Fe,t`
    ${n}
    @layer pk-component {
        :host {
            display: inline-block;
            position: relative;
            width: fit-content;
            max-width: 100%;
            align-self: flex-start;
            flex: none;
            color: var(--pk-color-gray-700);
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
            --pk-combobox-min-height: 0;
            --pk-combobox-trigger-min-height: var(--pk-btn-height-default);
            --pk-combobox-padding-block: calc((var(--pk-control-height-default) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-combobox-padding-inline: 10px;
            --pk-combobox-font-size: var(--pk-control-font-default);
            --pk-combobox-line-height: var(--pk-input-control-line-height, 1.25rem);
            --pk-combobox-decoration-size: 0.875rem;
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: 6px;
            --pk-select-item-padding-inline: 10px;
            --pk-select-item-padding-inline-end: 2rem;
            --pk-select-item-font-size: 14px;
            --pk-select-item-line-height: 1.4;
            --pk-select-item-indicator-size: 0.75rem;
            --pk-select-item-indicator-inset: 0.5rem;
            /* v1 ComboboxLabel default: text-xs → 12px (was 11px). */
            --pk-select-group-label-font-size: 12px;
        }

        :host([width='full']) {
            display: block;
            width: 100%;
        }

        :host([width='full']) .control {
            width: 100%;
        }

        .control {
            display: inline-flex;
            align-items: center;
            --pk-combobox-control-gap: 0.5rem;
            gap: var(--pk-combobox-control-gap);
            /* Fill the host — consumers set min-width/width on :host; fit-content here
               left a dead hit strip beside the painted field (same class of bug as dropdown). */
            width: 100%;
            max-width: 100%;
            min-width: 0;
            min-height: var(--pk-combobox-min-height);
            margin: 0;
            padding: var(--pk-combobox-padding-block) var(--pk-combobox-padding-inline);
            border: 1px solid transparent;
            border-radius: var(--pk-radius-lg);
            --pk-combobox-fill: var(--pk-color-slate-250);
            --pk-combobox-fill-hover: var(--pk-color-slate-300);
            background: var(--pk-combobox-fill);
            color: var(--pk-color-gray-700);
            font: inherit;
            font-size: var(--pk-combobox-font-size);
            line-height: var(--pk-input-control-line-height, 1.25rem);
            white-space: nowrap;
            cursor: text;
            outline: none;
            box-sizing: border-box;
            transition: border-color 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
        }

        .control[data-popup-open] {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
            background: var(--pk-color-white);
        }

        :host(:not([disabled])) .control:hover:not(.is-disabled) {
            background: var(--pk-combobox-fill-hover);
        }

        :host(:not([disabled])) .control[data-popup-open]:hover:not(.is-disabled),
        :host(:not([disabled])) .control[data-popup-open]:focus-within:not(.is-disabled) {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
            background: var(--pk-color-white);
        }

        :host(:not([invalid]):not(:state(user-invalid))) .control:focus-within,
        :host(:not([invalid]):not(:state(user-invalid))[data-state='focus-visible']) .control {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
            background: var(--pk-color-white);
        }

        .control.is-disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .control-start,
        .control-end {
            display: inline-flex;
            align-items: center;
            flex-shrink: 0;
            line-height: 0;
            color: var(--pk-color-gray-600);
        }

        slot[name='start']::slotted(svg),
        slot[name='end']::slotted(svg) {
            width: var(--pk-combobox-decoration-size);
            height: var(--pk-combobox-decoration-size);
        }

        .combobox-input {
            flex: 1 1 auto;
            width: 100%;
            min-width: 0;
            margin: 0;
            padding: 0;
            border: 0;
            background: transparent;
            color: inherit;
            font: inherit;
            line-height: var(--pk-input-control-line-height, 1.25rem);
            outline: none;
        }

        .combobox-input::placeholder {
            color: currentColor;
        }

        :host([data-has-value]) .combobox-input::placeholder,
        .control[data-popup-open] .combobox-input::placeholder,
        .control:focus-within .combobox-input::placeholder {
            color: var(--pk-color-gray-400);
        }

        /* Expand/clear: the button box IS the hit target. Negative margins cancel the
           control padding / half-gap in layout, while matching extra width/height keeps
           the painted (and clickable) box flush to the field edge — so flex centering
           places the glyph in the middle of the real hit area. */
        .icon-button,
        .clear-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            align-self: stretch;
            box-sizing: border-box;
            width: calc(var(--pk-combobox-decoration-size) + var(--pk-combobox-control-gap));
            height: auto;
            min-height: var(--pk-combobox-decoration-size);
            margin-block: calc(-1 * var(--pk-combobox-padding-block));
            margin-inline: calc(-0.5 * var(--pk-combobox-control-gap));
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            color: var(--pk-color-gray-600);
            cursor: pointer;
            outline: none;
        }

        /* Trailing control absorbs the control's inline-end padding into its hit box,
           with the same 4px glyph inset as pk-copy-button[slot=end]. */
        .control > .expand-button,
        .control > .clear-button:last-child {
            width: calc(
                var(--pk-combobox-decoration-size) + (0.5 * var(--pk-combobox-control-gap)) +
                    var(--pk-combobox-padding-inline)
            );
            margin-inline-start: calc(-0.5 * var(--pk-combobox-control-gap));
            margin-inline-end: calc(-1 * var(--pk-combobox-padding-inline) + 4px);
        }

        .icon-button:disabled,
        .clear-button:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            line-height: 0;
            pointer-events: none;
            color: var(--pk-color-gray-600);
        }

        .icon svg {
            display: block;
            width: 0.75rem;
            height: 0.75rem;
        }

        .clear-button-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            line-height: 0;
            pointer-events: none;
        }

        .clear-button-icon svg {
            display: block;
            width: 0.75rem;
            height: 0.75rem;
        }

        .control--multiple {
            --pk-combobox-control-gap: 0.25rem;
            /* Chips wrap inside their own row; trailing decorations keep their reserved space. */
            flex-wrap: nowrap;
            align-items: center;
            align-content: center;
            width: 100%;
            max-width: 100%;
            height: auto;
            min-height: 0;
            padding: var(--pk-combobox-padding-block) var(--pk-combobox-padding-inline);
            gap: var(--pk-combobox-control-gap);
            border: var(--pk-input-border);
            border-radius: var(--pk-input-border-radius);
            background: var(--pk-input-bg);
            cursor: text;
        }

        :host([multiple][width='full']) .control--multiple {
            width: 100%;
        }

        :host([multiple]) .control:hover:not(.is-disabled) {
            background: var(--pk-input-bg);
        }

        :host([multiple]:not([invalid]):not(:state(user-invalid))) .control[data-popup-open],
        :host([multiple]:not([invalid]):not(:state(user-invalid))) .control:focus-within,
        :host([multiple]:not([invalid]):not(:state(user-invalid))[data-state='focus-visible']) .control {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
            background: var(--pk-input-bg);
        }

        .chips {
            display: flex;
            flex: 1 1 auto;
            flex-wrap: wrap;
            gap: 0.25rem;
            align-items: center;
            min-width: 0;
        }

        .tag {
            /* v1 ComboboxChip: text-xs + py-[2px] → 20px; face color gray-700. */
            --pk-combobox-tag-height: 20px;
            --pk-combobox-tag-padding-inline-start: 6px;
            --pk-combobox-tag-remove-width: 1.25rem;
            display: inline-flex;
            box-sizing: border-box;
            align-items: center;
            justify-content: center;
            gap: 0.125rem;
            max-width: 100%;
            height: var(--pk-combobox-tag-height);
            padding-block: 0;
            padding-inline: var(--pk-combobox-tag-padding-inline-start) 0;
            border-radius: var(--pk-radius-sm);
            background: var(--pk-color-slate-200);
            color: var(--pk-color-gray-700);
            font-size: 12px;
            font-weight: 500;
            line-height: 1rem;
            white-space: nowrap;
        }

        .tag-label {
            overflow: hidden;
            text-overflow: ellipsis;
        }

        /* Chip remove: fill the chip end so the glyph centers in the real target. */
        .tag-remove {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            align-self: stretch;
            box-sizing: border-box;
            width: var(--pk-combobox-tag-remove-width);
            height: auto;
            min-height: 0;
            margin: 0;
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            color: inherit;
            cursor: pointer;
            opacity: 0.5;
            outline: none;
        }

        .tag-remove:hover {
            opacity: 1;
        }

        .tag-remove-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            line-height: 0;
            pointer-events: none;
        }

        .tag-remove-icon svg {
            display: block;
            width: 0.625rem;
            height: 0.625rem;
        }

        .combobox-input--inline {
            flex: 1 1 4rem;
            width: auto;
            min-width: 4rem;
            padding: 0;
        }

        :host([multiple]) .control:not([data-popup-open]):not(:focus-within) {
            background: var(--pk-input-bg);
        }

        :host([multiple]) .combobox-input::placeholder {
            color: var(--pk-color-gray-400);
        }

        .create-option {
            display: flex;
            align-items: center;
            width: 100%;
            margin: 0;
            min-height: var(--pk-select-item-min-height);
            padding-block: var(--pk-select-item-padding-block);
            padding-inline: var(--pk-select-item-padding-inline);
            border: 0;
            background: transparent;
            color: var(--pk-color-gray-700);
            font: inherit;
            font-size: var(--pk-select-item-font-size);
            line-height: var(--pk-select-item-line-height);
            text-align: left;
            cursor: pointer;
            outline: none;
            box-sizing: border-box;
        }

        .create-option:hover,
        .create-option.is-highlighted {
            background: var(--pk-color-slate-100);
        }

        .value-input {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        .panel ::slotted(pk-separator) {
            margin: 4px 0;
        }

        .panel {
            width: max-content;
            min-width: var(--pk-combobox-anchor-width, 8rem);
            padding: 0;
            border: 0;
            border-radius: var(--pk-radius-md);
            background: var(--pk-color-white);
            box-shadow: var(--pk-shadow-popup);
            color: var(--pk-color-gray-700);
            outline: none;
        }

        .panel-body {
            max-height: 16rem;
            overflow: auto;
        }

        .panel--popup {
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        .panel--popup .panel-body {
            flex: 1 1 auto;
            min-height: 0;
        }

        :host([popup-mode]) .control--popup {
            display: inline-flex;
            width: 100%;
            max-width: 100%;
            min-height: 0;
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            gap: 0;
            cursor: default;
        }

        :host([popup-mode]) .control--popup:hover:not(.is-disabled) {
            background: transparent;
        }

        /* Popup mode paints chrome on the trigger / panel input — do not keep the
           shared .control[data-popup-open] focus ring around the closed-state button. */
        :host([popup-mode]) .control--popup[data-popup-open],
        :host([popup-mode]) .control--popup[data-popup-open]:hover:not(.is-disabled),
        :host([popup-mode]) .control--popup[data-popup-open]:focus-within:not(.is-disabled),
        :host([popup-mode]:not([invalid]):not(:state(user-invalid))) .control--popup:focus-within,
        :host([popup-mode]:not([invalid]):not(:state(user-invalid))[data-state='focus-visible']) .control--popup {
            border: 0;
            box-shadow: none;
            background: transparent;
        }

        .popup-trigger {
            display: inline-flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.75rem;
            width: 100%;
            min-width: 12rem;
            max-width: 100%;
            min-height: var(--pk-combobox-trigger-min-height);
            margin: 0;
            padding: var(--pk-combobox-padding-block) var(--pk-combobox-padding-inline);
            border: 1px solid transparent;
            border-radius: var(--pk-input-border-radius);
            /* Match input-mode fill / v1 default Button — not a white outlined field. */
            background: var(--pk-combobox-fill, var(--pk-color-slate-250));
            color: var(--pk-color-gray-700);
            font: inherit;
            font-size: var(--pk-combobox-font-size);
            font-weight: 400;
            line-height: var(--pk-combobox-line-height);
            text-align: left;
            white-space: nowrap;
            cursor: pointer;
            outline: none;
            box-sizing: border-box;
            transition: border-color 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
        }

        .popup-trigger:hover:not(:disabled) {
            background: var(--pk-combobox-fill-hover, var(--pk-color-slate-300));
        }

        .popup-trigger:active:not(:disabled),
        .control--popup[data-popup-open] .popup-trigger:not(:disabled) {
            background: var(--pk-combobox-fill-hover, var(--pk-color-slate-300));
        }

        .control--popup[data-popup-open] .popup-trigger:not(:disabled) {
            border-color: transparent;
            box-shadow: none;
        }

        .control--popup:not([data-popup-open]) .popup-trigger:focus-visible,
        :host([data-state='focus-visible']) .control--popup:not([data-popup-open]) .popup-trigger {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
            background: var(--pk-color-white);
        }

        .popup-trigger:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .popup-trigger-value {
            flex: 1 1 auto;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .popup-trigger-value.is-placeholder {
            /* Trigger label is button text, not an input placeholder — keep it readable. */
            color: var(--pk-color-gray-700);
        }

        .popup-trigger-icon {
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            line-height: 0;
        }

        .popup-trigger-icon svg {
            display: block;
            width: 0.75rem;
            height: 0.75rem;
        }

        .panel-search {
            flex: none;
            padding: 0.25rem;
        }

        .panel-input {
            display: block;
            width: 100%;
            min-width: 0;
            margin: 0;
            padding: 6px 8px;
            border: var(--pk-input-border);
            border-radius: var(--pk-input-border-radius);
            background: color-mix(in srgb, var(--pk-input-bg) 30%, transparent);
            color: var(--pk-color-gray-700);
            font: inherit;
            font-size: var(--pk-combobox-font-size);
            line-height: 1.4;
            outline: none;
            box-sizing: border-box;
        }

        .panel-input::placeholder {
            color: var(--pk-color-gray-400);
        }

        .panel-input:focus {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
            background: var(--pk-color-white);
        }

        :host([popup-mode][size='xxs']) .popup-trigger-icon svg {
            width: 0.625rem;
            height: 0.625rem;
        }

        :host([popup-mode][size='xs']) .popup-trigger-icon svg {
            width: 0.625rem;
            height: 0.625rem;
        }

        :host([popup-mode][size='xxs']) .panel-input {
            padding: 4px 8px;
            font-size: var(--pk-control-font-xxs);
        }

        :host([popup-mode][size='xs']) .panel-input {
            padding: 4px 8px;
            font-size: var(--pk-control-font-xs);
        }

        :host([popup-mode][size='sm']) .panel-input {
            font-size: var(--pk-control-font-sm);
        }

        :host([popup-mode][size='lg']) .panel-input {
            padding-block: 8px;
            padding-inline: 12px;
        }

        :host([popup-mode][width='full']) .popup-trigger {
            width: 100%;
        }

        .panel:not([data-open]):not(.closing) {
            opacity: 0;
            pointer-events: none;
        }

        .panel[data-open]:not(.closing) {
            opacity: 1;
            pointer-events: auto;
        }

        .panel[hidden] {
            display: none !important;
        }

        .empty {
            display: flex;
            align-items: center;
            margin: 0;
            min-height: var(--pk-select-item-min-height, var(--pk-input-height));
            padding-block: var(--pk-select-item-padding-block);
            padding-inline: var(--pk-select-item-padding-inline);
            border: var(--pk-select-trigger-border-width, 1px) solid transparent;
            box-sizing: border-box;
            color: var(--pk-color-gray-500);
            font-size: var(--pk-control-font-lg);
            line-height: var(--pk-select-item-line-height);
        }

        .async-status {
            display: flex;
            align-items: center;
            margin: 0;
            min-height: var(--pk-select-item-min-height, var(--pk-input-height));
            padding-block: var(--pk-select-item-padding-block);
            padding-inline: var(--pk-select-item-padding-inline);
            border: var(--pk-select-trigger-border-width, 1px) solid transparent;
            box-sizing: border-box;
            color: var(--pk-color-gray-500);
            font-size: var(--pk-select-item-font-size);
            line-height: var(--pk-select-item-line-height);
        }

        :host([invalid]) .control,
        :host(:state(user-invalid)) .control {
            border-color: var(--pk-color-rose-600);
        }

        :host([multiple][invalid]) .control,
        :host([multiple]:state(user-invalid)) .control {
            border-color: var(--pk-color-rose-600);
        }

        :host([invalid]) .control:focus-within,
        :host([invalid][data-state='focus-visible']) .control,
        :host(:state(user-invalid)) .control:focus-within,
        :host(:state(user-invalid)[data-state='focus-visible']) .control {
            border-color: var(--pk-color-rose-600);
            box-shadow: var(--pk-input-invalid-focus-shadow);
        }

        :host([size='xxs']) {
            --pk-combobox-min-height: 0;
            --pk-combobox-trigger-min-height: var(--pk-control-height-xxs);
            --pk-combobox-padding-block: calc((var(--pk-control-height-xxs) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-combobox-padding-inline: 8px;
            --pk-combobox-font-size: var(--pk-control-font-xxs);
            --pk-combobox-decoration-size: 0.625rem;
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: 4px;
            --pk-select-item-padding-inline: 8px;
            --pk-select-item-padding-inline-end: 1.75rem;
            --pk-select-item-font-size: var(--pk-control-font-xxs);
            --pk-select-item-indicator-size: 0.75rem;
            --pk-select-item-indicator-inset: 0.5rem;
            /* v1 ComboboxLabel xs: text-[11px] */
            --pk-select-group-label-font-size: 11px;
        }

        :host([size='xs']) {
            --pk-combobox-min-height: 0;
            --pk-combobox-trigger-min-height: var(--pk-btn-height-xs);
            --pk-combobox-padding-block: calc((var(--pk-control-height-xs) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-combobox-padding-inline: 8px;
            --pk-combobox-font-size: var(--pk-control-font-xs);
            --pk-combobox-decoration-size: 0.625rem;
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: 4px;
            --pk-select-item-padding-inline: 8px;
            --pk-select-item-padding-inline-end: 1.75rem;
            --pk-select-item-font-size: var(--pk-control-font-xs);
            --pk-select-item-indicator-size: 0.75rem;
            --pk-select-item-indicator-inset: 0.5rem;
            /* v1 ComboboxLabel xs: text-[11px] */
            --pk-select-group-label-font-size: 11px;
        }

        :host([size='xxs']) .control {
            border-radius: var(--pk-radius-sm);
        }

        :host([size='xs']) .control {
            border-radius: var(--pk-radius-sm);
        }

        :host([size='xxs']) .icon svg,
        :host([size='xxs']) .clear-button-icon svg {
            width: 0.625rem;
            height: 0.625rem;
        }

        :host([size='xs']) .icon svg,
        :host([size='xs']) .clear-button-icon svg {
            width: 0.625rem;
            height: 0.625rem;
        }

        :host([size='sm']) {
            --pk-combobox-min-height: 0;
            --pk-combobox-trigger-min-height: var(--pk-btn-height-sm);
            --pk-combobox-padding-block: calc((var(--pk-control-height-sm) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-combobox-padding-inline: 10px;
            --pk-combobox-font-size: var(--pk-control-font-sm);
            --pk-combobox-decoration-size: 0.6875rem;
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: 6px;
            --pk-select-item-padding-inline: 10px;
            --pk-select-item-padding-inline-end: 1.75rem;
            --pk-select-item-font-size: var(--pk-control-font-sm);
            --pk-select-item-indicator-inset: 0.625rem;
            /* v1 ComboboxLabel sm: text-[12px] — empty dropzone field picker uses sm. */
            --pk-select-group-label-font-size: 12px;
        }

        :host([size='sm']) .control {
            border-radius: var(--pk-radius-md);
        }

        :host([size='sm']) .popup-trigger {
            border-radius: var(--pk-radius-md);
        }

        :host([size='sm']) .icon svg,
        :host([size='sm']) .clear-button-icon svg {
            width: 0.6875rem;
            height: 0.6875rem;
        }

        :host([size='lg']) {
            --pk-combobox-trigger-min-height: var(--pk-btn-height-lg);
            --pk-combobox-padding-block: calc((var(--pk-control-height-lg) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-combobox-padding-inline: 12px;
            --pk-combobox-font-size: var(--pk-control-font-lg);
            --pk-combobox-decoration-size: 1rem;
            --pk-select-item-padding-block: 8px;
            --pk-select-item-padding-inline: 12px;
            --pk-select-item-font-size: var(--pk-control-font-lg);
            --pk-select-item-indicator-inset: 0.75rem;
            /* v1 ComboboxLabel lg: text-sm → 14px */
            --pk-select-group-label-font-size: 14px;
        }

        :host([size='xl']) {
            --pk-combobox-trigger-min-height: var(--pk-btn-height-xl);
            --pk-combobox-padding-block: calc((var(--pk-control-height-xl) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-combobox-padding-inline: 14px;
            --pk-combobox-font-size: var(--pk-control-font-xl);
            --pk-combobox-decoration-size: 1.125rem;
            --pk-select-item-padding-block: 10px;
            --pk-select-item-padding-inline: 14px;
            --pk-select-item-padding-inline-end: 2.25rem;
            --pk-select-item-font-size: var(--pk-control-font-xl);
            --pk-select-item-indicator-inset: 0.875rem;
            /* v1 ComboboxLabel xl: text-base → 16px */
            --pk-select-group-label-font-size: 16px;
        }

        :host([size='xl']) .icon svg,
        :host([size='xl']) .clear-button-icon svg {
            width: 0.875rem;
            height: 0.875rem;
        }
    }
`],Fn=g(y.chevronDown),In=g(y.xmark),B=(Mn=class extends O{constructor(...e){super(...e),this.assumeInteractionOn=[`blur`,`input`],this.open=!1,this.multiple=!1,this.placement=`bottom-start`,this.sideOffset=6,this.clearable=!1,this.withClear=!1,this.allowCreate=!1,this.allowCustomValue=!1,this.autoHighlight=!1,this.popupMode=!1,this.searchPlaceholder=`Search`,this.invalid=!1,this.size=`default`,this.placeholder=``,this.emptyMessage=`No options found.`,this.value=``,this.defaultValue=``,this.values=[],this.defaultValues=[],this.label=``,this.instructions=``,this.ariaLabel=null,this.loopFocus=!0,this.filter=null,this.async=!1,this.loadingMessage=`Searching…`,this.startTypingMessage=`Start typing to search…`,this.fetchOptions=null,this.hasSlotController=new b(this,`start`,`end`),this.listboxId=T(`pk-combobox-listbox`),this.inputId=T(`pk-combobox-input`),this.createOptionId=T(`pk-combobox-create`),this.options=[],this.inputValue=``,this.hasInputSinceOpening=!1,this.highlightedIndex=-1,this.createOptionHighlighted=!1,this.closing=!1,this.panelAnimated=!1,this.dismissRegistered=!1,this.panelEventTarget=null,this.selectedOptionMeta=null,this.asyncFetcher=null,this.asyncLoading=!1,this.asyncError=null,this.handleOptionsMutation=(e={})=>{let t=this.getOptionElements(),n=t.length!==this.options.length||t.some((e,t)=>e!==this.options[t]);this.options=t,this.applySelection(),e.render!==!1&&n&&this.requestUpdate()},this.syncOptions=()=>{this.handleOptionsMutation({render:!0})},this.togglePanel=e=>{e==null||e.preventDefault(),e==null||e.stopPropagation(),!this.disabled&&(this.open||this.closing?this.closePanel(`api`):this.openPanel())},this.onDocumentPointerDown=e=>{this.isPointerInside(e)||this.closePanel(`light-dismiss`)},this.onDocumentKeyDown=e=>{if(!this.open)return;if(e.key===`Escape`){if(!D(this))return;e.preventDefault(),e.stopPropagation(),this.closePanel(`escape`);return}let t=this.panelInput;if(t&&e.composedPath().includes(t)||!(Me.has(e.key)||be(e)))return;let n=this.panelElement,r=e.composedPath();n&&r.includes(n)&&Ce(e,{anchor:this.controlElement,panel:n})&&(e.preventDefault(),e.stopPropagation(),this.onListboxKeyDown(e))},this.handleOptionSelect=e=>{let{value:t}=e.detail;if(this.multiple){var n;this.values=this.values.includes(t)?this.values.filter(e=>e!==t):[...this.values,t],this.inputValue=``,this.applySelection(),this.emitValueChange(),(n=this.activeInput)==null||n.focus({preventScroll:!0})}else this.value=t,this.syncSelectedOptionMeta(),this.applySelection(),this.closePanel(`api`),this.emitValueChange()},this.handleOptionHighlight=e=>{if(!this.open)return;let t=this.getEnabledVisibleOptions().findIndex(t=>t.value===e.detail.value);t!==-1&&t!==this.highlightedIndex&&(this.highlightedIndex=t,this.syncHighlight())},this.handleControlMouseDown=e=>{if(this.disabled||this.usesPopupMode||e.composedPath().some(e=>e instanceof HTMLElement?e.classList.contains(`icon-button`)||e.classList.contains(`clear-button`)||e.classList.contains(`tag-remove`):!1))return;let t=e.target===this.activeInput;if(!this.open&&!this.closing){var n;t||e.preventDefault(),(n=this.activeInput)==null||n.focus({preventScroll:!0}),this.openPanel()}else if(!t){var r;e.preventDefault(),(r=this.activeInput)==null||r.focus({preventScroll:!0})}},this.handleTriggerKeyDown=e=>{this.disabled||(e.key===`Enter`||e.key===` `?(e.preventDefault(),this.togglePanel(e)):e.key===`ArrowDown`&&!this.open&&(e.preventDefault(),this.openPanel()))},this.handleListboxKeyDownEvent=e=>{this.open&&this.onListboxKeyDown(e.detail.keyboardEvent)},this.handleCreateMouseEnter=()=>{if(!this.open)return;let e=this.getEnabledVisibleOptions();this.highlightedIndex=e.length,this.syncHighlight()},this.handleCreateKeyDown=e=>{e.preventDefault(),e.stopPropagation(),this.onListboxKeyDown(e)}}static get validators(){return[...super.validators,Ie(),{observedAttributes:[`required`],checkValidity:e=>{let t=e,n={message:`Please select an item in the list.`,isValid:!0,invalidKeys:[]};return!t.required||!(t.multiple?t.values.length===0:!t.value)||(n.isValid=!1,n.invalidKeys.push(`valueMissing`)),n}}]}get panelElement(){var e,t;return(e=(t=this.popupElement)==null?void 0:t.getContentElement())==null?null:e}get panelInput(){var e;return(e=this.panelElement)==null?void 0:e.querySelector(`.panel-input`)}get panelBodyElement(){var e;return(e=this.panelElement)==null?void 0:e.querySelector(`.panel-body`)}get usesPopupMode(){return this.popupMode&&!this.multiple}get activeInput(){return this.usesPopupMode?this.panelInput:this.controlInput}keepsFocusOnInput(){return!!this.activeInput}maintainInputFocus(){var e;(e=this.activeInput)==null||e.focus({preventScroll:!0})}get listScrollContainer(){var e,t;return(e=(t=this.panelBodyElement)==null?this.panelElement:t)==null?this:e}connectedCallback(){var e;this.instructions=(e=this.getAttribute(`hint`))==null?this.instructions:e,this.refreshOptions(),super.connectedCallback(),this.syncHasValueAttribute(),this.addEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent),this.optionsObserver=new MutationObserver(()=>{this.handleOptionsMutation({render:!0})}),this.optionsObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var e,t,n;this.unbindPanelEvents(),this.removeEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent),(e=this.optionsObserver)==null||e.disconnect(),(t=this.liveRegion)==null||t.destroy(),this.liveRegion=void 0,(n=this.asyncFetcher)==null||n.cancel(),this.closePanel(`api`),super.disconnectedCallback()}updated(e){(e.has(`value`)||e.has(`values`)||e.has(`multiple`))&&(this.syncHasValueAttribute(),this.syncSelectedOptionMeta(),this.applySelection()),(e.has(`values`)||e.has(`multiple`))&&this.syncFormValue(),super.updated(e)}get validationTarget(){var e,t;return(e=(t=this.activeInput)==null?this.popupTrigger:t)==null?this.controlElement:e}getAriaMirrorTarget(){var e,t,n;return(e=(t=(n=this.activeInput)==null?this.popupTrigger:n)==null?this.controlElement:t)==null?null:e}syncFormValue(){if(!this.name)this.setFormValue(null);else if(this.multiple){let e=new FormData;for(let t of this.values)e.append(this.name,t);this.setFormValue(e)}else this.setFormValue(this.value||``)}resetToDefaultValue(){this.multiple?this.values=[...this.defaultValues]:this.value=this.defaultValue,this.inputValue=``,this.applySelection()}restoreFormState(e){e instanceof FormData&&this.name?this.values=e.getAll(this.name).map(String):typeof e==`string`&&(this.value=e)}syncHasValueAttribute(){this.toggleAttribute(`data-has-value`,this.hasSelection())}getOptionElements(){var e;let t=(e=this.popupElement)==null||(e=e.getContentElement())==null?void 0:e.querySelectorAll(`pk-option`);return t&&t.length>0?[...t]:[...this.querySelectorAll(`pk-option`)]}refreshOptions(){this.handleOptionsMutation({render:!1})}bindPanelEvents(){let e=this.panelElement;e&&e!==this.panelEventTarget&&(this.unbindPanelEvents(),this.panelEventTarget=e,e.addEventListener(`pk-option-select`,this.handleOptionSelect),e.addEventListener(`pk-option-highlight`,this.handleOptionHighlight),e.addEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent))}unbindPanelEvents(){this.panelEventTarget&&(this.panelEventTarget.removeEventListener(`pk-option-select`,this.handleOptionSelect),this.panelEventTarget.removeEventListener(`pk-option-highlight`,this.handleOptionHighlight),this.panelEventTarget.removeEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent),this.panelEventTarget=null)}isOptionInHiddenGroup(e){let t=e.closest(`pk-option-group`);return!!(t!=null&&t.hidden)}matchesFilter(e,t){return jn(e,t,this.filter)}getFilterQuery(){return!this.open||!this.multiple&&!this.hasInputSinceOpening&&!this.usesPopupMode?``:this.inputValue.trim().toLowerCase()}getVisibleOptions(){if(this.usesAsyncSearch)return this.options.filter(e=>!this.isOptionInHiddenGroup(e));let e=this.getFilterQuery();return this.options.filter(t=>this.isOptionInHiddenGroup(t)?!1:!e||this.matchesFilter(t,e))}getEnabledVisibleOptions(){return this.getVisibleOptions().filter(e=>!e.disabled)}getSelectedOptions(){if(this.multiple){let e=new Map(this.options.map(e=>[e.value,e]));return this.values.map(t=>e.get(t)).filter(e=>e!==void 0)}let e=this.options.find(e=>e.value===this.value);return e?[e]:[]}getSelectedOption(){return this.options.find(e=>e.value===this.value)}get usesAsyncSearch(){return this.async&&!!this.fetchOptions&&!this.multiple&&!this.usesPopupMode}getSelectedLabel(){var e,t,n,r;return(e=(t=(n=this.getSelectedOption())==null?void 0:n.getLabel())==null?(r=this.selectedOptionMeta)==null?void 0:r.label:t)==null?this.value:e}clearAsyncOptionNodes(){this.querySelectorAll(`:scope > pk-option, :scope > pk-option-group, :scope > pk-separator`).forEach(e=>e.remove())}renderAsyncOptionNodes(e){let t=this.mergeAsyncItems(e);this.clearAsyncOptionNodes();for(let e of t){let t=document.createElement(`pk-option`);t.value=e.value,t.textContent=e.label,this.append(t)}this.handleOptionsMutation({render:!0})}mergeAsyncItems(e){var t,n,r;if(!this.value)return e;let i=(t=this.selectedOptionMeta)==null?{value:this.value,label:(n=(r=this.getSelectedOption())==null?void 0:r.getLabel())==null?this.value:n}:t;return e.some(e=>e.value===i.value)?e:[...e,i]}syncSelectedOptionMeta(){if(!this.value){this.selectedOptionMeta=null;return}let e=this.getSelectedOption();e&&(this.selectedOptionMeta={value:e.value,label:e.getLabel()})}scheduleAsyncFetch(e){this.ensureAsyncFetcher().schedule(e)}ensureAsyncFetcher(){return this.asyncFetcher||(this.asyncFetcher=new kn(()=>this.fetchOptions,{errorLabel:`combobox options`,onLoading:()=>{this.asyncLoading=!0,this.asyncError=null},onResults:e=>{this.renderAsyncOptionNodes(e)},onError:e=>{this.asyncError=e},onSettled:()=>{this.asyncLoading=!1},onEmptyQuery:()=>{this.asyncLoading=!1,this.asyncError=null,this.renderAsyncOptionNodes(this.value&&this.selectedOptionMeta?[this.selectedOptionMeta]:[])}})),this.asyncFetcher}getAsyncStatusMessage(){if(!this.usesAsyncSearch||!this.open)return null;if(this.asyncLoading)return this.loadingMessage;if(this.asyncError)return this.asyncError;let e=this.inputValue.trim();return e?this.getEnabledVisibleOptions().length===0&&!this.shouldShowCreateOption()?`No matches for "${e}".`:null:this.value?null:this.startTypingMessage}isSelected(e){return this.multiple?this.values.includes(e):this.value===e}getDisplayInputValue(){return this.usesPopupMode||this.multiple||this.open?this.inputValue:this.hasSelection()?this.getSelectedLabel():``}getTriggerDisplayValue(){return this.hasSelection()?this.getSelectedLabel():this.placeholder}isTriggerPlaceholder(){return!this.hasSelection()}hasSelection(){return this.multiple?this.values.length>0:!!(this.getSelectedOption()||this.selectedOptionMeta||this.value)}shouldShowCreateOption(){if(!this.allowCreate||!this.open||!this.multiple&&!this.hasInputSinceOpening)return!1;let e=this.inputValue.trim();if(!e)return!1;let t=e.toLowerCase();return!this.options.some(e=>e.getLabel().toLowerCase()===t||e.value.toLowerCase()===t)}getListboxNavItems(){let e=this.getEnabledVisibleOptions();return this.shouldShowCreateOption()&&this.createOptionElement?[...e,this.createOptionElement]:e}applySelection(){let e=this.getVisibleOptions(),t=this.open?this.getFilterQuery():``;On({host:this,options:this.options,visible:e,listboxId:this.listboxId,filterQuery:t,isSelected:e=>this.isSelected(e)}),this.syncValueInput(),this.open&&(this.syncHighlight(),this.announceFilterResults())}syncValueInput(){this.input&&(this.input.value=this.multiple?this.values.join(`,`):this.value,this.input.required=this.required)}syncHighlightedIndexToSelection(){if(this.multiple)return;let e=this.getEnabledVisibleOptions();if(!this.value||e.length===0)return;let t=e.findIndex(e=>e.value===this.value);t>=0&&(this.highlightedIndex=t)}resetHighlightedIndexOnOpen(){if(this.autoHighlight){if(this.value){this.syncHighlightedIndexToSelection();return}this.highlightedIndex=0}else this.highlightedIndex=-1}syncHighlight(){let e=this.getEnabledVisibleOptions(),t=this.shouldShowCreateOption(),n=e.length+ +!!t;for(let e of this.options)e.highlighted=!1,e.focusIndex=-1;if(this.createOptionHighlighted=!1,n===0||this.highlightedIndex<0)return;if(this.highlightedIndex>=n&&(this.highlightedIndex=n-1),t&&this.highlightedIndex===e.length){var r;this.createOptionHighlighted=!0,this.keepsFocusOnInput()||(r=this.createOptionElement)==null||r.focus({preventScroll:!0}),Se(this.createOptionElement,this.listScrollContainer,`vertical`,`auto`),this.keepsFocusOnInput()&&this.maintainInputFocus();return}let i=e[this.highlightedIndex];i&&(i.highlighted=!0,i.focusIndex=this.keepsFocusOnInput()?-1:0,Se(i,this.listScrollContainer,`vertical`,`auto`),this.keepsFocusOnInput()&&this.maintainInputFocus())}getActiveDescendantId(){var e;let t=this.getEnabledVisibleOptions();return this.shouldShowCreateOption()&&this.highlightedIndex===t.length?this.createOptionId:((e=t[this.highlightedIndex])==null?void 0:e.optionId)||null}announceFilterResults(){this.liveRegion||(this.liveRegion=new De(`polite`));let e=this.getEnabledVisibleOptions().length,t=this.getFilterQuery();t&&(this.shouldShowCreateOption()?this.liveRegion.announce(`Create ${t}`):this.liveRegion.announce(e===0?`${this.emptyMessage}`:`${e} ${e===1?`result`:`results`} available`))}show(){var e=this;return w(function*(){e.open||e.closing||e.disabled||(yield e.openPanel())})()}hide(e=`api`){var t=this;return w(function*(){t.open&&!t.closing&&(yield t.closePanel(e))})()}openPanel(){var e=this,t,n;let r=this.controlElement;if(!r)return Promise.resolve();if(this.open){var i;return(i=this.activeInput)==null||i.focus({preventScroll:!0}),Promise.resolve()}if(this.closing)return Promise.resolve();this.dispatchEvent(new Le),this.closing=!1,this.panelAnimated=!1,this.open=!0,this.hasInputSinceOpening=!1,this.inputValue=this.usesPopupMode?``:!this.multiple&&this.hasSelection()?this.getSelectedLabel():``,this.applySelection(),this.resetHighlightedIndexOnOpen(),this.usesAsyncSearch&&(this.syncSelectedOptionMeta(),this.asyncError=null,this.asyncLoading=!1,this.renderAsyncOptionNodes(this.selectedOptionMeta?[this.selectedOptionMeta]:[]));let a=r.getBoundingClientRect().width;return this.style.setProperty(`--pk-combobox-anchor-width`,`${a}px`),this.popupElement.active=!0,this.panelElement&&(this.panelElement.hidden=!1,me(this.panelElement,this.placement)),this.registerDismissHandlers(),this.syncHighlight(),this.usesPopupMode?(t=this.popupTrigger)==null||t.blur():(n=this.activeInput)==null||n.focus({preventScroll:!0}),this.updateComplete.then(w(function*(){var t;let n=yield ge(e.popupElement,e.placement,300,{requireEvent:!0});if(e.panelElement&&me(e.panelElement,n),e.panelAnimated=!0,e.bindPanelEvents(),e.refreshOptions(),(t=e.activeInput)==null||t.focus({preventScroll:!0}),e.highlightedIndex>=0&&!e.keepsFocusOnInput()){var r,i;let t=e.getEnabledVisibleOptions(),n=e.highlightedIndex;e.shouldShowCreateOption()&&n===t.length?(r=e.createOptionElement)==null||r.focus({preventScroll:!0}):(i=t[n])==null||i.focusControl()}e.dispatchEvent(new _e),e.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!0},bubbles:!0,composed:!0}))}))}commitCustomValueIfAllowed(){var e,t;if(this.multiple||!this.allowCustomValue)return!1;let n=this.inputValue.trim();if(!n)return!1;let r=(e=(t=this.options.find(e=>e.getLabel().toLowerCase()===n.toLowerCase()||e.value.toLowerCase()===n.toLowerCase()))==null?void 0:t.value)==null?n:e;return this.value!==r&&(this.value=r,!0)}commitInputOnClose(e){return this.multiple||this.usesPopupMode?!1:this.hasInputSinceOpening?this.inputValue.trim()?this.shouldCommitCustomValueOnClose(e)?this.commitCustomValueIfAllowed():!1:this.value?(this.value=``,!0):!1:this.shouldCommitCustomValueOnClose(e)?this.commitCustomValueIfAllowed():!1}shouldCommitCustomValueOnClose(e){return e===`light-dismiss`||e===`pointer-dismiss`}closePanel(e=`unknown`){var t=this;return w(function*(){if(!t.open||t.closing)return;let n=new pe(e);if(!t.dispatchEvent(n))return;let r=t.commitInputOnClose(e);if(t.unbindPanelEvents(),t.closing=!0,t.panelAnimated=!1,yield Dn(t.panelElement),t.open=!1,t.closing=!1,t.panelAnimated=!1,t.hasInputSinceOpening=!1,t.inputValue=``,t.panelElement&&(t.panelElement.hidden=!0,t.panelElement.removeAttribute(`data-side`)),t.popupElement.active=!1,t.unregisterDismissHandlers(),t.applySelection(),t.usesAsyncSearch){var i;(i=t.asyncFetcher)==null||i.cancel(),t.asyncLoading=!1,t.asyncError=null,t.renderAsyncOptionNodes(t.selectedOptionMeta?[t.selectedOptionMeta]:[])}if(r&&(t.syncHasValueAttribute(),t.emitValueChange()),t.shouldReturnFocusToInput(e)){var a,o;t.usesPopupMode?(a=t.popupTrigger)==null||a.focus({preventScroll:!0}):(o=t.activeInput)==null||o.focus({preventScroll:!0})}else{var s,c;(s=t.activeInput)==null||s.blur(),(c=t.popupTrigger)==null||c.blur()}t.dispatchEvent(new Re),t.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!1},bubbles:!0,composed:!0}))})()}shouldReturnFocusToInput(e){return e!==`light-dismiss`&&e!==`pointer-dismiss`}registerDismissHandlers(){Te(this),this.dismissRegistered=!0,document.addEventListener(`pointerdown`,this.onDocumentPointerDown,!0),document.addEventListener(`keydown`,this.onDocumentKeyDown,!0)}unregisterDismissHandlers(){this.dismissRegistered&&(E(this),this.dismissRegistered=!1),document.removeEventListener(`pointerdown`,this.onDocumentPointerDown,!0),document.removeEventListener(`keydown`,this.onDocumentKeyDown,!0)}isPointerInside(e){return we(e,{anchor:this.controlElement,panel:this.panelElement})}handleCreateOption(){let e=this.inputValue.trim();if(!e)return;let t=new Nn(e);if(!this.dispatchEvent(t))return;let n=document.createElement(`pk-option`);if(n.value=e,n.textContent=e,this.append(n),this.multiple){var r;this.values.includes(e)||(this.values=[...this.values,e]),this.inputValue=``,this.applySelection(),this.emitValueChange(),(r=this.activeInput)==null||r.focus({preventScroll:!0})}else this.value=e,this.applySelection(),this.closePanel(`api`),this.emitValueChange()}removeTag(e,t){var n;t.preventDefault(),t.stopPropagation(),this.values=this.values.filter(t=>t!==e),this.applySelection(),this.emitValueChange(),(n=this.activeInput)==null||n.focus({preventScroll:!0})}handleClear(e){var t;e.preventDefault(),e.stopPropagation(),this.multiple?this.values=[]:this.value=``,this.inputValue=``,this.selectedOptionMeta=null,this.usesAsyncSearch&&this.renderAsyncOptionNodes([]),this.applySelection(),this.dispatchEvent(new ye),this.emitValueChange(),(t=this.activeInput)==null||t.focus()}emitValueChange(){this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{value:this.multiple?[...this.values]:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}handleInput(e){this.hasInputSinceOpening=!0,this.inputValue=e.target.value,this.highlightedIndex=this.autoHighlight?0:-1,this.applySelection(),this.usesAsyncSearch&&(this.asyncError=null,this.scheduleAsyncFetch(this.inputValue.trim())),this.open||this.openPanel()}handleInputKeyDown(e){if(e.key===`Backspace`&&this.multiple&&!this.inputValue&&this.values.length>0)e.preventDefault(),this.values=this.values.slice(0,-1),this.applySelection(),this.emitValueChange();else if(e.key===`Escape`&&this.open){if(e.preventDefault(),this.hasInputSinceOpening&&this.inputValue){this.hasInputSinceOpening=!1,this.inputValue=this.usesPopupMode?``:!this.multiple&&this.hasSelection()?this.getSelectedLabel():``,this.highlightedIndex=this.autoHighlight?0:-1,this.applySelection();return}this.closePanel(`escape`)}else if(e.key===`ArrowDown`&&!this.open)e.preventDefault(),this.openPanel();else if(e.key===`Tab`&&this.open){let e=!1;this.multiple||(e=this.commitCustomValueIfAllowed()),this.closePanel(`api`),e&&(this.syncHasValueAttribute(),this.emitValueChange())}else if(this.open&&e.key===`Enter`&&!this.multiple&&this.getEnabledVisibleOptions().length===0&&this.allowCustomValue&&this.inputValue.trim()&&!this.shouldShowCreateOption()){e.preventDefault();let t=this.commitCustomValueIfAllowed();this.closePanel(`api`),t&&(this.syncHasValueAttribute(),this.emitValueChange())}else this.open&&this.onListboxKeyDown(e)}onListboxKeyDown(e){let t=this.getListboxNavItems(),n=this.getEnabledVisibleOptions();if(this.highlightedIndex<0){if(e.key===`ArrowDown`||e.key===`ArrowRight`){(n.length>0||this.shouldShowCreateOption())&&(e.preventDefault(),this.highlightedIndex=0,this.syncHighlight());return}if(e.key===`ArrowUp`||e.key===`ArrowLeft`){(n.length>0||this.shouldShowCreateOption())&&(e.preventDefault(),this.highlightedIndex=this.shouldShowCreateOption()?n.length:Math.max(n.length-1,0),this.syncHighlight());return}if(e.key===`Enter`||e.key===` `)return}if(e.key===`Enter`&&this.shouldShowCreateOption()&&this.highlightedIndex===n.length)e.preventDefault(),this.handleCreateOption();else if(this.multiple&&(e.key===`Enter`||e.key===` `)){let t=n[this.highlightedIndex];t&&(e.preventDefault(),t.dispatchEvent(new CustomEvent(`pk-option-select`,{detail:{value:t.value},bubbles:!0,composed:!0})))}else this.highlightedIndex=Ee(e,{items:t,currentIndex:this.highlightedIndex,multiselect:this.multiple,loop:this.loopFocus,onSelect:e=>{this.highlightedIndex=e,this.syncHighlight()},focusItem:e=>{var t;if(!this.keepsFocusOnInput()){if(this.shouldShowCreateOption()&&e===n.length){var r;(r=this.createOptionElement)==null||r.focus({preventScroll:!0})}else(t=n[e])==null||t.focusControl()}},onClose:()=>{this.closePanel(`escape`)}})}renderHostDecorationSlot(e){return this.hasSlotController.test(e)?s`
            <span part=${e} class=${e===`start`?`control-start`:`control-end`}>
                <slot name=${e}></slot>
            </span>
        `:s`<slot name=${e} hidden></slot>`}renderChevronButton(){return s`
            <button
                type="button"
                class="icon-button expand-button"
                part="expand-button"
                aria-label="Toggle options"
                ?disabled=${this.disabled}
                @click=${this.togglePanel}
            >
                <span class="icon" aria-hidden="true">${x(Fn)}</span>
            </button>
        `}renderTags(){return this.getSelectedOptions().map(e=>s`
            <span class="tag" part="tag">
                <span class="tag-label">${e.getLabel()}</span>
                <button
                    type="button"
                    class="tag-remove"
                    part="tag-remove"
                    aria-label=${`Remove ${e.getLabel()}`}
                    ?disabled=${this.disabled}
                    @click=${t=>this.removeTag(e.value,t)}
                >
                    <span class="tag-remove-icon" aria-hidden="true">${x(In)}</span>
                </button>
            </span>
        `)}shouldShowPlaceholder(){return!this.inputValue.trim()&&!this.hasSelection()}renderInput(){var e;let t=this.open?this.getActiveDescendantId():null,n=this.shouldShowPlaceholder();return s`
            <input
                part="input"
                class=${S({"combobox-input":!0,"control-input":!0,"combobox-input--inline":this.multiple})}
                type="text"
                role="combobox"
                id=${this.inputId}
                .value=${this.getDisplayInputValue()}
                placeholder=${n?this.placeholder:a}
                ?disabled=${this.disabled}
                aria-label=${(e=this.ariaLabel)==null?a:e}
                aria-expanded=${this.open?`true`:`false`}
                aria-controls=${this.listboxId}
                aria-autocomplete="list"
                aria-activedescendant=${t==null?a:t}
                @input=${this.handleInput}
                @keydown=${this.handleInputKeyDown}
            />
        `}renderPanelInput(){var e;let t=this.open?this.getActiveDescendantId():null;return s`
            <div part="panel-search" class="panel-search">
                <input
                    part="panel-input"
                    class="combobox-input panel-input"
                    type="text"
                    role="combobox"
                    id=${this.inputId}
                    .value=${this.inputValue}
                    placeholder=${this.searchPlaceholder}
                    ?disabled=${this.disabled}
                    aria-label=${(e=this.ariaLabel)==null?this.searchPlaceholder:e}
                    aria-expanded="true"
                    aria-controls=${this.listboxId}
                    aria-autocomplete="list"
                    aria-activedescendant=${t==null?a:t}
                    @input=${this.handleInput}
                    @keydown=${this.handleInputKeyDown}
                />
            </div>
        `}renderPopupTrigger(){var e;return s`
            <button
                type="button"
                part="trigger"
                class="popup-trigger"
                ?disabled=${this.disabled}
                aria-label=${(e=this.ariaLabel)==null?a:e}
                aria-haspopup="listbox"
                aria-expanded=${this.open?`true`:`false`}
                aria-controls=${this.listboxId}
                @click=${this.togglePanel}
                @keydown=${this.handleTriggerKeyDown}
            >
                <span
                    class=${S({"popup-trigger-value":!0,"is-placeholder":this.isTriggerPlaceholder()})}
                >
                    ${this.getTriggerDisplayValue()}
                </span>
                <span class="icon popup-trigger-icon" aria-hidden="true">${x(Fn)}</span>
            </button>
        `}renderControlContent(){if(this.usesPopupMode)return this.renderPopupTrigger();let e=(this.clearable||this.withClear)&&this.hasSelection()&&!this.disabled;return this.multiple?s`
                ${this.renderHostDecorationSlot(`start`)}
                <div class="chips" part="tags">
                    ${this.renderTags()}
                    ${this.renderInput()}
                </div>
                ${this.renderHostDecorationSlot(`end`)}
                ${e?s`
                        <button
                            type="button"
                            class="clear-button"
                            part="clear-button"
                            aria-label="Clear selection"
                            ?disabled=${this.disabled}
                            @click=${this.handleClear}
                        >
                            <span class="clear-button-icon" aria-hidden="true">${x(In)}</span>
                        </button>
                    `:a}
            `:s`
            ${this.renderHostDecorationSlot(`start`)}
            ${this.renderInput()}
            ${this.renderHostDecorationSlot(`end`)}
            ${e?s`
                    <button
                        type="button"
                        class="clear-button"
                        part="clear-button"
                        aria-label="Clear selection"
                        ?disabled=${this.disabled}
                        @click=${this.handleClear}
                    >
                        <span class="clear-button-icon" aria-hidden="true">${x(In)}</span>
                    </button>
                `:a}
            ${this.renderChevronButton()}
        `}render(){var e;let t=this.getEnabledVisibleOptions(),n=this.shouldShowCreateOption(),r=this.open&&!this.usesAsyncSearch&&t.length===0&&!n,i=this.getAsyncStatusMessage(),o=this.inputValue.trim();return s`
            <input
                class="value-input"
                part="value-input"
                tabindex="-1"
                aria-hidden="true"
                .value=${this.multiple?this.values.join(`,`):this.value}
                ?required=${this.required}
                @input=${()=>this.updateValidity()}
            />
            <div
                part="control"
                class=${S({control:!0,"is-disabled":this.disabled,"control--multiple":this.multiple,"control--popup":this.usesPopupMode})}
                data-popup-open=${this.open?``:a}
                @mousedown=${this.handleControlMouseDown}
            >
                ${this.renderControlContent()}
            </div>
            <pk-popup
                .active=${this.open||this.closing}
                .anchor=${(e=this.controlElement)==null?``:e}
                .placement=${this.placement}
                .distance=${this.sideOffset}
                .sync=${`width`}
                flip
                shift
            >
                <div
                    part="panel"
                    class=${S({panel:!0,"pk-popup-content":!0,closing:this.closing,"panel--popup":this.usesPopupMode})}
                    tabindex="-1"
                    ?hidden=${!this.open&&!this.closing}
                    data-open=${this.panelAnimated&&!this.closing?``:a}
                >
                    ${this.usesPopupMode?this.renderPanelInput():a}
                    <div
                        part="panel-body"
                        class="panel-body"
                        id=${this.listboxId}
                        role="listbox"
                        aria-multiselectable=${this.multiple?`true`:`false`}
                        aria-busy=${this.usesAsyncSearch&&this.asyncLoading?`true`:a}
                        @slotchange=${this.syncOptions}
                    >
                        <slot></slot>
                        ${i?s`
                                <div part="async-status" class="async-status" role="status">${i}</div>
                            `:a}
                        ${n?s`
                                <button
                                    type="button"
                                    part="create-option"
                                    class=${S({"create-option":!0,"is-highlighted":this.createOptionHighlighted})}
                                    id=${this.createOptionId}
                                    role="option"
                                    aria-selected="false"
                                    tabindex="-1"
                                    @click=${this.handleCreateOption}
                                    @mouseenter=${this.handleCreateMouseEnter}
                                    @keydown=${this.handleCreateKeyDown}
                                >
                                    Create "${o}"
                                </button>
                            `:a}
                        ${r?s`
                                <div part="empty" class="empty">${this.emptyMessage}</div>
                            `:a}
                    </div>
                </div>
            </pk-popup>
        `}},Mn.styles=Pn,Mn);l([_({type:Boolean,reflect:!0})],B.prototype,`open`,void 0),l([_({type:Boolean,reflect:!0})],B.prototype,`multiple`,void 0),l([_({reflect:!0})],B.prototype,`placement`,void 0),l([_({attribute:`side-offset`,type:Number})],B.prototype,`sideOffset`,void 0),l([_({type:Boolean,reflect:!0})],B.prototype,`clearable`,void 0),l([_({attribute:`with-clear`,type:Boolean})],B.prototype,`withClear`,void 0),l([_({attribute:`allow-create`,type:Boolean})],B.prototype,`allowCreate`,void 0),l([_({attribute:`allow-custom-value`,type:Boolean})],B.prototype,`allowCustomValue`,void 0),l([_({attribute:`auto-highlight`,type:Boolean})],B.prototype,`autoHighlight`,void 0),l([_({attribute:`popup-mode`,type:Boolean,reflect:!0})],B.prototype,`popupMode`,void 0),l([_({attribute:`search-placeholder`})],B.prototype,`searchPlaceholder`,void 0),l([_({type:Boolean,reflect:!0})],B.prototype,`invalid`,void 0),l([_({reflect:!0})],B.prototype,`size`,void 0),l([_({reflect:!0})],B.prototype,`width`,void 0),l([_()],B.prototype,`placeholder`,void 0),l([_({attribute:`empty-message`})],B.prototype,`emptyMessage`,void 0),l([_()],B.prototype,`value`,void 0),l([_({attribute:`default-value`})],B.prototype,`defaultValue`,void 0),l([_({type:Array,attribute:!1})],B.prototype,`values`,void 0),l([_({attribute:!1})],B.prototype,`defaultValues`,void 0),l([_()],B.prototype,`label`,void 0),l([_()],B.prototype,`instructions`,void 0),l([_({attribute:`aria-label`})],B.prototype,`ariaLabel`,void 0),l([_({attribute:`loop-focus`,type:Boolean})],B.prototype,`loopFocus`,void 0),l([_({attribute:!1})],B.prototype,`filter`,void 0),l([_({type:Boolean,reflect:!0})],B.prototype,`async`,void 0),l([_({attribute:`loading-message`})],B.prototype,`loadingMessage`,void 0),l([_({attribute:`start-typing-message`})],B.prototype,`startTypingMessage`,void 0),l([_({attribute:!1})],B.prototype,`fetchOptions`,void 0),l([u(`pk-popup`)],B.prototype,`popupElement`,void 0),l([u(`.control`)],B.prototype,`controlElement`,void 0),l([u(`.control-input`)],B.prototype,`controlInput`,void 0),l([u(`.popup-trigger`)],B.prototype,`popupTrigger`,void 0),l([u(`.create-option`)],B.prototype,`createOptionElement`,void 0),l([u(`.value-input`)],B.prototype,`input`,void 0),l([v()],B.prototype,`inputValue`,void 0),l([v()],B.prototype,`highlightedIndex`,void 0),l([v()],B.prototype,`createOptionHighlighted`,void 0),l([v()],B.prototype,`closing`,void 0),l([v()],B.prototype,`panelAnimated`,void 0),l([v()],B.prototype,`asyncLoading`,void 0),l([v()],B.prototype,`asyncError`,void 0),B=l([d(`pk-combobox`)],B);var Ln,Rn=t`
    @layer pk-component {
        :host {
            display: block;
            width: 100%;
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
        }

        .textarea {
            display: block;
            width: 100%;
            min-height: 5rem;
            margin: 0;
            padding: 7px 10px;
            border: var(--pk-input-border);
            border-radius: var(--pk-textarea-border-radius, var(--pk-radius-md));
            background: var(--pk-input-bg);
            background-clip: padding-box;
            /* Craft CP body / field value text. */
            color: var(--pk-color-gray-700);
            font: inherit;
            line-height: 1.4;
            resize: vertical;
            appearance: none;
            box-sizing: border-box;
            outline: none;
            transition: border-color 0.12s ease, box-shadow 0.12s ease;
        }

        .textarea::placeholder {
            color: var(--pk-input-placeholder-color, var(--pk-color-gray-400));
        }

        /* Craft: focus is box-shadow only — do not also flip border-color (double ring). */
        :host(:not([invalid]):not(:state(user-invalid))) .textarea:focus,
        :host(:not([invalid]):not(:state(user-invalid))) .textarea:focus-visible,
        :host([data-state='focus-visible']:not([invalid]):not(:state(user-invalid))) .textarea {
            box-shadow: var(--pk-input-focus-shadow);
        }

        .textarea:disabled {
            cursor: not-allowed;
            opacity: 0.5;
            background: var(--pk-color-gray-50);
        }

        :host([invalid]) .textarea,
        :host(:state(user-invalid)) .textarea {
            border-color: var(--pk-color-rose-600);
        }

        :host([invalid]) .textarea:focus,
        :host([invalid]) .textarea:focus-visible,
        :host([invalid][data-state='focus-visible']) .textarea,
        :host(:state(user-invalid)) .textarea:focus,
        :host(:state(user-invalid)) .textarea:focus-visible {
            box-shadow: var(--pk-input-invalid-focus-shadow);
        }

        /* Editable-table cells (v1): flush into the row and fill cell height.
         * Chain height through form-control — percentage on .textarea alone
         * doesn't resolve when the wrapper sizes to content (rows / min-height). */
        :host([fit-cell]),
        :host([data-editable-table-input]) {
            display: block;
            height: 100%;
            min-height: 100%;
            box-sizing: border-box;
            overflow: hidden;
        }

        :host([fit-cell]) .form-control,
        :host([data-editable-table-input]) .form-control {
            display: flex;
            flex-direction: column;
            height: 100%;
            min-height: 100%;
        }

        :host([fit-cell]) .textarea,
        :host([data-editable-table-input]) .textarea {
            flex: 1 1 auto;
            border: none;
            border-radius: 0;
            background: transparent;
            box-shadow: none;
            height: 100%;
            min-height: 0;
            max-height: 100%;
            /* Match text-cell inset (v1 py-1.5 / px-2). 0.5rem block padding +
             * line-height 1.4 overflows the 34px et cell and shows a scrollbar
             * even for empty / single-line notes. */
            padding: 0.375rem 0.5rem;
            line-height: 1.25;
            overflow-x: hidden;
            overflow-y: auto;
            resize: none;
        }

        :host([fit-cell]:not([invalid]):not(:state(user-invalid))) .textarea:focus,
        :host([fit-cell]:not([invalid]):not(:state(user-invalid))) .textarea:focus-visible,
        :host([fit-cell][data-state='focus-visible']:not([invalid]):not(:state(user-invalid))) .textarea,
        :host([data-editable-table-input]:not([invalid]):not(:state(user-invalid))) .textarea:focus,
        :host([data-editable-table-input]:not([invalid]):not(:state(user-invalid))) .textarea:focus-visible,
        :host([data-editable-table-input][data-state='focus-visible']:not([invalid]):not(:state(user-invalid))) .textarea {
            border: none;
            box-shadow: inset 0 0 0 1px var(--pk-color-gray-200);
        }

        :host([fit-cell][invalid]) .textarea,
        :host([fit-cell]:state(user-invalid)) .textarea,
        :host([fit-cell][invalid]) .textarea:focus,
        :host([fit-cell][invalid]) .textarea:focus-visible,
        :host([fit-cell]:state(user-invalid)) .textarea:focus,
        :host([fit-cell]:state(user-invalid)) .textarea:focus-visible,
        :host([data-editable-table-input][invalid]) .textarea,
        :host([data-editable-table-input]:state(user-invalid)) .textarea,
        :host([data-editable-table-input][invalid]) .textarea:focus,
        :host([data-editable-table-input][invalid]) .textarea:focus-visible,
        :host([data-editable-table-input]:state(user-invalid)) .textarea:focus,
        :host([data-editable-table-input]:state(user-invalid)) .textarea:focus-visible {
            border: none;
            box-shadow: inset 0 0 0 1px var(--pk-color-rose-600);
        }
    }
`,V=(Ln=class extends O{constructor(...e){super(...e),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new b(this,`instructions`,`hint`,`label`),this.controlId=T(`pk-textarea`),this.placeholder=``,this._value=null,this.defaultValue=null,this.size=`default`,this.label=``,this.instructions=``,this.readonly=!1,this.invalid=!1,this.fitCell=!1,this.withLabel=!1,this.withInstructions=!1}static get validators(){return[...super.validators,Ie(),M()]}get value(){var e,t,n;return this.valueHasChanged?(e=this._value)==null?``:e:(t=(n=this._value)==null?this.defaultValue:n)==null?``:t}set value(e){let t=e==null?``:e;this._value!==t&&(this.valueHasChanged=!0,this._value=t)}connectedCallback(){this.instructions=Qt(this,this.instructions),this.hasAttribute(`with-hint`)&&(this.withInstructions=!0),super.connectedCallback()}syncFormValue(){this.setValue(this.value||``)}resetToDefaultValue(){this.valueHasChanged=!1,this._value=null}restoreFormState(e){typeof e==`string`&&(this.value=e)}formResetCallback(){var e;this.valueHasChanged=!1,this._value=null,this.input&&(this.input.value=(e=this.defaultValue)==null?``:e),super.formResetCallback()}updated(e){(e.has(`value`)||e.has(`defaultValue`))&&this.setState(`blank`,!this.value),super.updated(e)}syncStandaloneAria(){if(!this.input)return;let e=this.hasLabelContent(),t=this.hasInstructionsContent();xe({control:this.input,labelId:`${this.controlId}-label`,instructionsId:`${this.controlId}-instructions`,hasLabel:e,hasInstructions:t,required:this.required,invalid:this.invalid||!this.internals.validity.valid})}hasLabelContent(){return!!this.label||this.hasSlotController.test(`label`,this.withLabel)}hasInstructionsContent(){return $t((e,t)=>this.hasSlotController.test(e,t),this.instructions,this.withInstructions)}focus(e){var t;(t=this.input)==null||t.focus(e)}blur(){var e;(e=this.input)==null||e.blur()}handleInput(){this.value=this.input.value,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))}handleChange(e){this.value=this.input.value,e.stopPropagation(),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}render(){var e;let t=this.hasLabelContent(),n=this.hasInstructionsContent();return s`
            <div part="form-control" class="form-control">
                ${t?s`
                        <label
                            part="label"
                            class="form-control__label"
                            id=${`${this.controlId}-label`}
                            for=${`${this.controlId}-control`}
                        >
                            <slot name="label">${this.label}</slot>
                        </label>
                    `:a}

                ${n?s`
                        <p
                            part="instructions"
                            class="form-control__instructions"
                            id=${`${this.controlId}-instructions`}
                        >
                            <slot name="instructions">${this.instructions}</slot>
                            <slot name="hint"></slot>
                        </p>
                    `:a}

                <textarea
                    part="textarea"
                    class="textarea"
                    id=${t?`${this.controlId}-control`:a}
                    rows=${P(this.fitCell?(e=this.rows)==null?1:e:this.rows)}
                    .value=${rn(this.value)}
                    placeholder=${this.placeholder||a}
                    maxlength=${P(this.maxlength)}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    ?required=${this.required}
                    @input=${this.handleInput}
                    @change=${this.handleChange}
                    @focus=${()=>this.dispatchEvent(new Event(`focus`,{bubbles:!0,composed:!0}))}
                    @blur=${()=>this.dispatchEvent(new Event(`blur`,{bubbles:!0,composed:!0}))}
                ></textarea>
            </div>
        `}},Ln.styles=[ut,Rn],Ln);l([u(`textarea`)],V.prototype,`input`,void 0),l([_()],V.prototype,`placeholder`,void 0),l([v()],V.prototype,`value`,null),l([_({attribute:`value`,reflect:!0})],V.prototype,`defaultValue`,void 0),l([_({reflect:!0})],V.prototype,`size`,void 0),l([_()],V.prototype,`label`,void 0),l([_()],V.prototype,`instructions`,void 0),l([_({type:Boolean,reflect:!0})],V.prototype,`readonly`,void 0),l([_({type:Boolean,reflect:!0})],V.prototype,`invalid`,void 0),l([_({type:Boolean,reflect:!0,attribute:`fit-cell`})],V.prototype,`fitCell`,void 0),l([_({type:Number})],V.prototype,`rows`,void 0),l([_({type:Number,attribute:`max-length`})],V.prototype,`maxlength`,void 0),l([_({attribute:`with-label`,type:Boolean})],V.prototype,`withLabel`,void 0),l([_({attribute:`with-instructions`,type:Boolean})],V.prototype,`withInstructions`,void 0),V=l([d(`pk-textarea`)],V);var zn,Bn=t`
    @layer pk-component {
        :host {
            --pk-color-input-font-size: var(--pk-control-font-default);
            display: inline-block;
            position: relative;
            /* Former lg min-width — default now matches input default chrome. */
            min-width: 6.75rem;
            font-family: var(--pk-font-family);
            vertical-align: middle;
        }

        :host([size='xxs']) {
            --pk-color-input-font-size: var(--pk-control-font-xxs);
            min-width: 5.5rem;
        }

        :host([size='xs']) {
            --pk-color-input-font-size: var(--pk-control-font-xs);
            min-width: 5.5rem;
        }

        :host([size='sm']) {
            --pk-color-input-font-size: var(--pk-control-font-sm);
            min-width: 6.125rem;
        }

        :host([size='lg']),
        :host([size='xl']) {
            --pk-color-input-font-size: var(--pk-control-font-xl);
            min-width: 7.375rem;
        }

        :host([size='lg']) {
            --pk-color-input-font-size: var(--pk-control-font-lg);
        }

        :host([fit-cell]) {
            display: block;
            width: 100%;
            min-width: 0;
            max-width: 100%;
            height: 100%;
        }

        :host([fit-cell]) .root {
            display: block;
            width: 100%;
            height: 100%;
        }

        .root {
            position: relative;
            display: inline-block;
            width: 100%;
        }

        .swatch {
            position: absolute;
            top: 50%;
            left: 0.5rem;
            z-index: 2;
            width: 1.25rem;
            height: 1.25rem;
            transform: translateY(-50%);
            border-radius: var(--pk-radius-sm);
        }

        :host([size='xxs']) .swatch {
            left: 0.375rem;
            width: 1rem;
            height: 1rem;
        }

        :host([size='xs']) .swatch {
            left: 0.375rem;
            width: 1rem;
            height: 1rem;
        }

        :host([size='sm']) .swatch {
            left: 0.375rem;
            width: 1.25rem;
            height: 1.25rem;
        }

        :host([size='lg']) .swatch,
        :host([size='xl']) .swatch {
            left: 0.5rem;
            width: 1.5rem;
            height: 1.5rem;
        }

        :host([fit-cell]) .swatch {
            left: 0.5rem;
            width: 1rem;
            height: 1rem;
        }

        .swatch-preview {
            position: absolute;
            inset: 0;
            border-radius: inherit;
            box-shadow: inset 0 0 0 1px rgb(0 0 0 / 0.15);
        }

        .swatch-preview.is-transparent {
            background-color: #fff;
            background-image:
                linear-gradient(45deg, #d1d5db 25%, transparent 25%),
                linear-gradient(-45deg, #d1d5db 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, #d1d5db 75%),
                linear-gradient(-45deg, transparent 75%, #d1d5db 75%);
            background-size: 8px 8px;
            background-position: 0 0, 0 4px, 4px -4px, -4px 0;
        }

        .swatch-picker {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            border: 0;
            opacity: 0;
            cursor: pointer;
            appearance: none;
        }

        .swatch-picker:disabled {
            cursor: not-allowed;
        }

        .hash {
            position: absolute;
            top: 50%;
            left: 2.125rem;
            z-index: 1;
            transform: translateY(-50%);
            color: var(--pk-color-gray-300);
            font-family: var(--pk-font-family-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace);
            font-size: var(--pk-color-input-font-size);
            line-height: var(--pk-line-height-mono, 1.5);
            pointer-events: none;
            user-select: none;
        }

        :host([size='xxs']) .hash {
            left: 1.625rem;
        }

        :host([size='xs']) .hash {
            left: 1.625rem;
        }

        :host([size='sm']) .hash {
            left: 2rem;
        }

        :host([size='lg']) .hash,
        :host([size='xl']) .hash {
            left: 2.5rem;
        }

        :host([fit-cell]) .hash {
            left: 1.75rem;
        }

        .hex-input {
            display: block;
            width: 100%;
            /* Former lg — matches pk-input default chrome (~34px). */
            height: var(--pk-control-height-default);
            margin: 0;
            padding-inline: 3rem 0.75rem;
            border: var(--pk-input-border);
            border-radius: var(--pk-input-border-radius);
            background: var(--pk-input-bg);
            color: var(--pk-color-gray-700);
            font-family: var(--pk-font-family-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace);
            font-size: var(--pk-color-input-font-size);
            line-height: var(--pk-line-height-mono, 1.5);
            outline: none;
            box-sizing: border-box;
            transition: border-color 0.12s ease, box-shadow 0.12s ease;
        }

        :host([size='xxs']) .hex-input {
            height: var(--pk-control-height-xxs);
            padding-inline: 2.25rem 0.625rem;
        }

        :host([size='xs']) .hex-input {
            height: var(--pk-control-height-xs);
            padding-inline: 2.25rem 0.625rem;
        }

        :host([size='sm']) .hex-input {
            height: var(--pk-control-height-sm);
            padding-inline: 2.75rem 0.75rem;
        }

        :host([size='lg']) .hex-input {
            height: var(--pk-control-height-lg);
            padding-inline: 3.25rem 0.875rem;
        }

        :host([size='xl']) .hex-input {
            height: var(--pk-control-height-xl);
            padding-inline: 3.25rem 0.875rem;
        }

        :host([fit-cell]) .hex-input {
            width: 100%;
            max-width: 100%;
            height: 100%;
            padding-inline: 2.25rem 0.5rem;
            border: 0;
            border-radius: 0;
            background: transparent;
        }

        .hex-input:focus,
        .hex-input:focus-visible {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
        }

        :host([invalid]) .hex-input:focus,
        :host([invalid]) .hex-input:focus-visible {
            border-color: var(--pk-color-rose-600);
            box-shadow: var(--pk-input-invalid-focus-shadow);
        }

        :host([fit-cell]:not([invalid])) .hex-input:focus,
        :host([fit-cell]:not([invalid])) .hex-input:focus-visible {
            box-shadow: inset 0 0 0 1px var(--pk-color-gray-200);
        }

        :host([fit-cell][invalid]) .hex-input,
        :host([fit-cell][invalid]) .hex-input:focus,
        :host([fit-cell][invalid]) .hex-input:focus-visible {
            box-shadow: inset 0 0 0 1px var(--pk-color-rose-600);
        }

        .hex-input:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        :host([invalid]) .hex-input {
            border-color: var(--pk-color-rose-600);
        }

        :host([disabled]) .swatch {
            opacity: 0.5;
        }
    }
`,Vn=`#000000`;function Hn(e){return String(e||``).replace(/^#/,``).replace(/[^0-9a-fA-F]/g,``).slice(0,6).toLowerCase()}function Un(e){return e.length===3||e.length===6}function Wn(e){return e.length===3?e.split(``).map(e=>`${e}${e}`).join(``):e}function Gn(e){return e.length===6?`#${e}`:e.length===3?`#${Wn(e)}`:Vn}var H=(zn=class extends O{constructor(...e){super(...e),this.assumeInteractionOn=[`blur`,`input`],this.size=`default`,this.fitCell=!1,this.readonly=!1,this.invalid=!1,this.value=``,this.defaultValue=``,this.ariaLabel=null,this.hexValue=``}static get validators(){return[...super.validators,Ie(),M()]}connectedCallback(){super.connectedCallback(),this.syncHexFromValue()}willUpdate(e){e.has(`value`)&&this.syncHexFromValue(),super.willUpdate(e)}syncHexFromValue(){this.hexValue=Hn(this.value)}get validationTarget(){return this.input}syncFormValue(){let e=this.hexValue?`#${this.hexValue}`:``;this.setFormValue(e,e)}resetToDefaultValue(){this.value=this.defaultValue,this.hexValue=Hn(this.defaultValue)}restoreFormState(e){typeof e==`string`&&(this.value=e,this.hexValue=Hn(e))}emitChange(){let e=this.hexValue?`#${this.hexValue}`:``;this.value=e,this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{value:e},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}handleHexInput(e){if(this.disabled||this.readonly)return;let t=Hn(e.target.value);this.hexValue=t,this.emitChange()}handlePickerChange(e){if(this.disabled||this.readonly)return;let t=Hn(e.target.value);this.hexValue=t,this.emitChange()}render(){var e;let t=Gn(this.hexValue),n=!Un(this.hexValue);return s`
            <div class="root">
                <div part="swatch" class="swatch">
                    <div
                        class=${S({"swatch-preview":!0,"is-transparent":n})}
                        style=${n?a:`background-color: ${t}`}
                    ></div>
                    <input
                        part="picker"
                        class="swatch-picker"
                        type="color"
                        .value=${t}
                        ?disabled=${this.disabled||this.readonly}
                        aria-label="Color picker"
                        @input=${this.handlePickerChange}
                    />
                </div>
                <span class="hash" aria-hidden="true">#</span>
                <input
                    part="input"
                    class="hex-input"
                    type="text"
                    inputmode="text"
                    autocomplete="off"
                    maxlength="6"
                    .value=${this.hexValue}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    ?required=${this.required}
                    aria-label=${(e=this.ariaLabel)==null?a:e}
                    aria-invalid=${this.invalid?`true`:a}
                    @input=${this.handleHexInput}
                />
            </div>
        `}},zn.styles=Bn,zn);l([_({reflect:!0})],H.prototype,`size`,void 0),l([_({type:Boolean,reflect:!0,attribute:`fit-cell`})],H.prototype,`fitCell`,void 0),l([_({type:Boolean,reflect:!0})],H.prototype,`readonly`,void 0),l([_({type:Boolean,reflect:!0})],H.prototype,`invalid`,void 0),l([_()],H.prototype,`value`,void 0),l([_({attribute:`default-value`})],H.prototype,`defaultValue`,void 0),l([_({attribute:`aria-label`})],H.prototype,`ariaLabel`,void 0),l([u(`.hex-input`)],H.prototype,`input`,void 0),l([v()],H.prototype,`hexValue`,void 0),H=l([d(`pk-color-input`)],H);function Kn(){return globalThis.Craft}function qn(){var e;return((e=Kn())==null?void 0:e.locale)||document.documentElement.lang||`en-US`}function Jn(e,t){var n;let r=(n=Kn())==null?void 0:n.formatDate;if(typeof r==`function`)try{return r(e)}catch(e){}let i=t||qn();return new Intl.DateTimeFormat(i,{year:`numeric`,month:`numeric`,day:`numeric`}).format(e)}var Yn,Xn=/^(\d{4})-(\d{2})-(\d{2})$/;function U(e){if(e==null||e===``)return null;if(e instanceof Date)return Zn(e);if(typeof e!=`string`)return null;let t=Xn.exec(e.trim());if(!t)return null;let n=Number(t[1]),r=Number(t[2]),i=Number(t[3]);if(r<1||r>12||i<1||i>31)return null;let a=new Date(n,r-1,i);return a.getFullYear()!==n||a.getMonth()!==r-1||a.getDate()!==i?null:a}function W(e){return!e||Number.isNaN(e.getTime())?``:`${String(e.getFullYear()).padStart(4,`0`)}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function Zn(e){return e==null?null:e instanceof Date?Number.isNaN(e.getTime())?null:new Date(e.getFullYear(),e.getMonth(),e.getDate()):U(String(e))}function Qn(e){if(!e)return{from:null,to:null};let t=e.split(`/`);if(t.length===1)return{from:U(t[0]),to:null};let n=U(t[0]),r=U(t[1]);return!n||!r||n.getTime()<=r.getTime()?{from:n,to:r}:{from:r,to:n}}function $n(e){if(!e)return``;let{from:t,to:n}=e;return!t&&!n?``:t&&!n?W(t):!t&&n?W(n):`${W(t)}/${W(n)}`}function er(e){if(!e)return[];let t=new Set,n=[];for(let r of e.split(`,`)){let e=U(r.trim());if(!e)continue;let i=W(e);t.has(i)||(t.add(i),n.push(e))}return n.sort((e,t)=>e.getTime()-t.getTime()),n}function tr(e){let t=new Set;for(let n of e){let e=W(n==null?null:n);e&&t.add(e)}return[...t].sort().join(`,`)}function nr(e,t){if(!W(t))return e==null?``:e;let n=er(e);return tr(n.some(e=>G(e,t))?n.filter(e=>!G(e,t)):[...n,t])}function G(e,t){return!e||!t?!1:e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function rr(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()}function ir(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+t)}function ar(e,t){let n=new Date(e.getFullYear(),e.getMonth()+t,1),r=sr(n.getFullYear(),n.getMonth());return new Date(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))}function or(e,t){return ar(e,t*12)}function sr(e,t){return new Date(e,t+1,0).getDate()}function cr(e){return new Date(e.getFullYear(),e.getMonth(),1)}function lr(){let e=new Date;return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function ur(e,t){let n=e.getTime()-t.getTime();return Math.round(n/864e5)}function dr(e){let t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),n=(t.getDay()+6)%7;t.setDate(t.getDate()-n+3);let r=new Date(t.getFullYear(),0,4),i=(r.getDay()+6)%7;return r.setDate(r.getDate()-i+3),1+Math.round((t.getTime()-r.getTime())/6048e5)}function fr(e,t){return new Intl.DateTimeFormat(t||void 0,{year:`numeric`,month:`short`,day:`numeric`}).format(e)}function pr(e){var t,n;let{min:r,max:i,disabledDates:a=[],disabledDaysOfWeek:o=[],disablePast:s=!1,disableFuture:c=!1,today:l,isDateDisabled:u}=e,d=(t=r==null?void 0:r.getTime())==null?-1/0:t,f=(n=i==null?void 0:i.getTime())==null?1/0:n,p=l.getTime(),m=new Set(o),h=new Set(a.map(e=>e.getTime()));return function(e){let t=e.getTime();return!!(t<d||t>f||s&&t<p||c&&t>p||m.size&&m.has(e.getDay())||h.size&&h.has(t)||u!=null&&u(e))}}function mr(e){if(e==null||e===``)return[];let t=Array.isArray(e)?e:e.split(/\s+/),n=[];for(let e of t){if(e instanceof Date){Number.isNaN(e.getTime())||n.push(new Date(e.getFullYear(),e.getMonth(),e.getDate()));continue}let t=U(String(e).trim());t&&n.push(t)}return n}var hr={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6};function gr(e){if(e==null||e===``)return[];let t=String(e).toLowerCase().split(/\s+/).filter(Boolean),n=new Set;for(let e of t)e in hr&&n.add(hr[e]);return[...n]}function _r(e,t,n){let r=e.getTime()<=t.getTime()?e:t,i=e.getTime()<=t.getTime()?t:e,a=new Date(r.getFullYear(),r.getMonth(),r.getDate());for(;a.getTime()<=i.getTime();){if(!n(a))return!1;a.setDate(a.getDate()+1)}return!0}var vr=new Set(`US.CA.MX.BR.JP.PH.IL.AU.NZ.ZA.CO.VE.PE.EC.GT.HN.NI.SV.CR.PA.DO.PR.JM.TT.BS.BB.BZ.BO.BM.TW.HK.MO.SG.TH.ET.KE`.split(`.`)),yr=new Set([`SA`,`AE`,`QA`,`KW`,`BH`,`OM`,`YE`,`JO`,`SY`,`IQ`,`EG`,`SD`,`DZ`,`LY`]),br=new Set([`SA`,`AE`,`QA`,`KW`,`BH`,`OM`,`YE`,`JO`,`EG`,`SD`,`DZ`,`LY`,`SY`,`IQ`,`IL`]);function xr(e){try{var t;return(t=new Intl.Locale(e).maximize().region)==null?null:t}catch(e){return null}}function Sr(e){let t=xr(e),n=1;t&&vr.has(t)?n=7:t&&yr.has(t)&&(n=6);let r=t&&br.has(t)?[5,6]:[6,7];return{firstDay:n,weekend:r}}function Cr(e){try{let t=new Intl.Locale(e),n=typeof t.getWeekInfo==`function`?t.getWeekInfo():t.weekInfo;if(n&&typeof n.firstDay==`number`&&Array.isArray(n.weekend))return{firstDay:n.firstDay,weekend:n.weekend}}catch(e){}return Sr(e)}function wr(e){return e===7?0:e}function Tr(e){return e.map(wr)}function Er(e,t){return e===`auto`?wr(Cr(t).firstDay):{sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6}[e]}var Dr=t`
    ${n}
    @layer pk-component {
        :host {
            display: inline-block;
            width: fit-content;
            max-width: 100%;
            color: var(--pk-color-gray-900);
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: 1;
            --pk-date-cell-size: 1.75rem;
            --pk-date-cell-radius: 100%;
            --pk-date-gap: 0.25rem;
            --pk-date-column-min: var(--pk-date-cell-size);
            --pk-date-column-gap: 0;
        }

        :host([weekday-format='short']) {
            --pk-date-column-min: 2.125rem;
            --pk-date-column-gap: 0.125rem;
        }

        :host([weekday-format='long']) {
            --pk-date-column-min: 3.375rem;
            --pk-date-column-gap: 0.125rem;
        }

        :host([weekday-format='long']) .weekday {
            font-size: 0.7rem;
        }

        :host([size='xs']) {
            --pk-date-cell-size: 1.5rem;
            font-size: 11px;
        }

        :host([size='sm']) {
            --pk-date-cell-size: 1.625rem;
            font-size: 12px;
        }

        :host([size='lg']) {
            --pk-date-cell-size: 2rem;
            font-size: 14px;
        }

        :host([size='xl']) {
            --pk-date-cell-size: 2.25rem;
            font-size: 15px;
        }

        :host([disabled]) {
            opacity: 0.5;
            pointer-events: none;
        }

        .base {
            display: flex;
            flex-direction: column;
            gap: var(--pk-date-gap);
            width: fit-content;
            padding: 0.5rem;
            border: var(--pk-calendar-border, var(--pk-input-border));
            border-radius: var(--pk-radius-md);
            background: var(--pk-calendar-background, var(--pk-color-white));
        }

        :host(:not([bordered])) {
            --pk-calendar-border: 0;
            --pk-calendar-background: transparent;
        }

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.25rem;
            min-height: var(--pk-date-cell-size);
            padding-inline: 0.125rem;
        }

        .title {
            flex: 1;
            margin: 0;
            padding: 0.25rem 0.5rem;
            border: 0;
            border-radius: var(--pk-radius-sm);
            background: transparent;
            color: var(--pk-color-gray-900);
            font: inherit;
            font-size: 13px;
            font-weight: 500;
            line-height: 1.2;
            text-align: center;
            cursor: pointer;
            user-select: none;
        }

        .title:hover:not(:disabled) {
            background: var(--pk-color-slate-100);
        }

        .nav-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: var(--pk-date-cell-size);
            height: var(--pk-date-cell-size);
            margin: 0;
            padding: 0.25rem;
            border: 0;
            border-radius: var(--pk-radius-sm);
            background: transparent;
            color: var(--pk-color-gray-600);
            cursor: pointer;
        }

        .nav-button:hover:not(:disabled) {
            background: var(--pk-color-slate-100);
            color: var(--pk-color-gray-900);
        }

        .nav-button:disabled {
            opacity: 0.35;
            cursor: not-allowed;
        }

        .nav-button .icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 12px;
            height: 12px;
            flex-shrink: 0;
        }

        .nav-button .icon svg {
            display: block;
            width: 12px;
            height: 12px;
        }

        .months {
            display: flex;
            gap: 1rem;
        }

        .month {
            display: flex;
            flex-direction: column;
            width: fit-content;
            min-width: calc(var(--pk-date-column-min) * 7 + var(--pk-date-column-gap) * 6);
        }

        :host([data-week-numbers]) .month {
            min-width: calc(
                var(--pk-date-cell-size) + var(--pk-date-column-gap) + var(--pk-date-column-min) * 7 + var(--pk-date-column-gap) * 6
            );
        }

        .month-label {
            margin-bottom: 0.5rem;
            font-size: 12px;
            font-weight: 500;
            text-align: center;
            color: var(--pk-color-gray-700);
        }

        .weekdays,
        .week {
            display: grid;
            grid-template-columns: repeat(7, minmax(var(--pk-date-column-min), 1fr));
            column-gap: var(--pk-date-column-gap);
            align-items: center;
            width: 100%;
        }

        :host([data-week-numbers]) .weekdays,
        :host([data-week-numbers]) .week {
            grid-template-columns: var(--pk-date-cell-size) repeat(7, minmax(var(--pk-date-column-min), 1fr));
        }

        .grid {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
            margin-top: 0.2rem;
        }

        .weeknumber-header,
        .weeknumber {
            display: flex;
            align-items: center;
            justify-content: center;
            height: var(--pk-date-cell-size);
            color: var(--pk-color-gray-500);
            font-size: 0.8rem;
            font-weight: 400;
            user-select: none;
        }

        .weekday {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: var(--pk-date-column-min);
            height: var(--pk-date-cell-size);
            padding-inline: 0.125rem;
            color: var(--pk-color-gray-500);
            font-size: 0.8rem;
            font-weight: 400;
            line-height: 1.1;
            text-align: center;
            white-space: nowrap;
            user-select: none;
        }

        .day,
        .day.is-placeholder {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            justify-self: center;
            width: var(--pk-date-cell-size);
            min-width: var(--pk-date-cell-size);
            max-width: var(--pk-date-cell-size);
            height: var(--pk-date-cell-size);
            margin: 0;
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            color: var(--pk-color-gray-900);
            font: inherit;
            font-size: 13px;
            font-weight: 400;
            line-height: 1;
            cursor: pointer;
        }

        .day.is-range-start,
        .day.is-range-end,
        .day.is-range-inner,
        .day.is-range-preview {
            justify-self: stretch;
            width: 100%;
            min-width: 0;
            max-width: none;
        }

        .day.is-range-start.is-range-end {
            justify-self: center;
            width: var(--pk-date-cell-size);
            min-width: var(--pk-date-cell-size);
            max-width: var(--pk-date-cell-size);
        }

        .day:focus-visible {
            outline: 2px solid var(--pk-color-blue-500);
            outline-offset: 1px;
            z-index: 1;
        }

        .day.is-outside {
            opacity: 0.6;
        }

        .day.is-disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }

        /* Day grid — circular today ring (fixed cell size, not column width) */
        .day.is-today:not(.is-range-start):not(.is-range-end):not(.is-range-inner)::after {
            content: '';
            position: absolute;
            inset: 0;
            border: 1px solid var(--pk-color-blue-500);
            border-radius: var(--pk-date-cell-radius);
            pointer-events: none;
        }

        .day.is-selected:not(.is-range-start):not(.is-range-end):not(.is-range-inner) {
            background: var(--pk-color-gray-200);
            border-radius: var(--pk-date-cell-radius);
            color: var(--pk-color-gray-900);
            font-weight: 400;
        }

        .day.is-range-start,
        .day.is-range-end {
            background: var(--pk-color-gray-200);
            color: var(--pk-color-gray-900);
            font-weight: 400;
        }

        .day.is-range-start.is-range-end {
            border-radius: var(--pk-date-cell-radius);
        }

        .day.is-range-start:not(.is-range-end) {
            border-radius: var(--pk-date-cell-radius) 0 0 var(--pk-date-cell-radius);
        }

        .day.is-range-end:not(.is-range-start) {
            border-radius: 0 var(--pk-date-cell-radius) var(--pk-date-cell-radius) 0;
        }

        .day.is-range-inner {
            background: var(--pk-color-gray-200);
            border-radius: 0;
        }

        .day.is-range-preview:not(.is-range-start):not(.is-range-end) {
            background: var(--pk-color-gray-200);
            opacity: 0.7;
        }

        .day.is-placeholder {
            visibility: hidden;
            pointer-events: none;
        }

        .live-region {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        slot[name='footer']::slotted(*) {
            display: block;
            padding-top: 0.25rem;
        }

        .view-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(var(--pk-date-cell-size), 1fr));
            gap: 0.25rem;
            width: 100%;
            min-width: calc(var(--pk-date-column-min) * 7 + var(--pk-date-column-gap) * 6);
        }

        .view-row {
            display: contents;
        }

        .view-cell {
            display: contents;
        }

        .view-item {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: var(--pk-date-cell-size);
            margin: 0;
            padding: 0.375rem 0.5rem;
            border: 0;
            border-radius: var(--pk-radius-sm);
            background: transparent;
            color: var(--pk-color-gray-900);
            font: inherit;
            font-size: 13px;
            cursor: pointer;
        }

        .view-item.is-selected {
            background: var(--pk-color-gray-200);
            font-weight: 500;
        }

        /* Month/year grid — rectangular today outline */
        .view-item.is-today:not(.is-selected) {
            box-shadow: inset 0 0 0 1px var(--pk-color-blue-500);
            border-radius: var(--pk-radius-sm);
        }

        .view-item.is-disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }

        .view-item:focus-visible {
            outline: 2px solid var(--pk-color-blue-500);
            outline-offset: 1px;
        }
    }
`,Or=g(y.chevronLeft),kr=g(y.chevronRight),K=(Yn=class extends c{constructor(...e){super(...e),this.hasSlotController=new b(this,`footer`,`previous-icon`,`next-icon`),this.mode=`single`,this.size=`default`,this.value=``,this.min=``,this.max=``,this.today=``,this.view=`days`,this.months=1,this.pageBy=`months`,this.focusedDate=``,this.firstDayOfWeek=`auto`,this.withOutsideDays=!0,this.withWeekNumbers=!1,this.weekdayFormat=`narrow`,this.disabled=!1,this.readonly=!1,this.bordered=!0,this.disabledDatesRaw=``,this.disabledDaysOfWeek=``,this.disablePast=!1,this.disableFuture=!1,this.minRange=0,this.maxRange=0,this.locale=``,this.viewAnchor=cr(lr()),this.rangeAnchor=null,this.hoverDate=null,this.liveAnnouncement=``,this.focusedMonth=null,this.focusedYear=null,this.daySlotNames=[],this.handlePrevious=()=>{this.viewAnchor=this.view===`days`?ar(this.viewAnchor,-this.pageStep):this.view===`months`?or(this.viewAnchor,-1):or(this.viewAnchor,-12)},this.handleNext=()=>{this.viewAnchor=this.view===`days`?ar(this.viewAnchor,this.pageStep):this.view===`months`?or(this.viewAnchor,1):or(this.viewAnchor,12)},this.handleTitleClick=()=>{this.disabled||(this.view===`days`?(this.setView(`months`),this.focusedMonth=this.resolvedFocusedDate.getMonth()):this.view===`months`&&(this.setView(`years`),this.focusedYear=this.resolvedFocusedDate.getFullYear()))},this.handleGridMouseLeave=()=>{this.hoverDate=null}}connectedCallback(){super.connectedCallback(),this.syncViewAnchor(),this.syncCustomStates(),this.updateDaySlots(),this.childrenObserver=new MutationObserver(()=>this.updateDaySlots()),this.childrenObserver.observe(this,{childList:!0,attributes:!0,attributeFilter:[`slot`]})}disconnectedCallback(){var e;(e=this.childrenObserver)==null||e.disconnect(),super.disconnectedCallback()}willUpdate(e){(e.has(`value`)||e.has(`focusedDate`)||e.has(`mode`))&&this.syncViewAnchor(),(e.has(`disabled`)||e.has(`readonly`)||e.has(`mode`)||e.has(`withWeekNumbers`))&&this.syncCustomStates(),e.has(`view`)&&this.emitViewChange(),super.willUpdate(e)}updateDaySlots(){let e=[...this.children].map(e=>e.getAttribute(`slot`)).filter(e=>!!(e!=null&&e.startsWith(`day-`)));e.join(`,`)!==this.daySlotNames.join(`,`)&&(this.daySlotNames=e)}syncCustomStates(){this.toggleAttribute(`data-range`,this.mode===`range`),this.toggleAttribute(`data-multiple`,this.mode===`multiple`),this.toggleAttribute(`data-week-numbers`,this.withWeekNumbers)}get resolvedLocale(){return this.locale||this.lang||document.documentElement.lang||`en`}get resolvedToday(){var e;return(e=U(this.today))==null?lr():e}get primarySelectedDate(){var e;return this.mode===`single`?U(this.value):this.mode===`multiple`?(e=er(this.value)[0])==null?null:e:Qn(this.value).from}get resolvedFocusedDate(){var e,t;return(e=(t=U(this.focusedDate))==null?Zn(this.primarySelectedDate):t)==null?this.resolvedToday:e}get isDisabledMatcher(){return pr({min:U(this.min),max:U(this.max),disabledDates:mr(this.disabledDatesRaw),disabledDaysOfWeek:gr(this.disabledDaysOfWeek),disablePast:this.disablePast,disableFuture:this.disableFuture,today:this.resolvedToday,isDateDisabled:this.isDateDisabled})}get weekendDays(){return new Set(Tr(Cr(this.resolvedLocale).weekend))}get pageStep(){return this.pageBy===`single`?1:this.months}get visibleMonthAnchors(){let e=[this.viewAnchor];return this.months===2&&e.push(cr(ar(this.viewAnchor,1))),e}syncViewAnchor(){let e=this.resolvedFocusedDate;this.visibleMonthAnchors.some(t=>rr(e,t))||(this.viewAnchor=cr(e))}get valueAsDate(){return this.mode===`single`?U(this.value):null}get valueAsRange(){return Qn(this.value)}get valueAsDates(){return this.mode===`multiple`?er(this.value):[]}focus(e){var t;let n=this.view===`days`?`.day.is-roving`:(this.view,`.view-item.is-roving`);(t=this.renderRoot.querySelector(n))==null||t.focus(e)}goToDate(e){let t=Zn(e);t&&(this.viewAnchor=cr(t),this.focusedDate=W(t),this.view=`days`)}goToToday(){this.goToDate(this.resolvedToday)}clear(){this.disabled||this.readonly||(this.value=``,this.rangeAnchor=null,this.hoverDate=null,this.emitInput(),this.emitChange())}emitInput(){this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))}emitChange(){this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}emitFocusDay(e){this.dispatchEvent(new CustomEvent(`pk-focus-day`,{detail:{date:e},bubbles:!0,composed:!0}))}emitViewChange(){this.dispatchEvent(new CustomEvent(`pk-view-change`,{detail:{view:this.view,date:this.resolvedFocusedDate},bubbles:!0,composed:!0}))}announce(e){this.liveAnnouncement=`${e}\u200B`}setView(e){this.view!==e&&(this.view=e)}handleDayClick(e,t){if(this.disabled||this.readonly||t)return;if(this.mode===`single`){this.value=W(e),this.focusedDate=W(e),this.emitInput(),this.emitChange(),this.announce(fr(e,this.resolvedLocale));return}if(this.mode===`multiple`){let t=er(this.value).some(t=>G(t,e));this.value=nr(this.value,e),this.focusedDate=W(e),this.emitInput(),this.emitChange(),this.announce(`${t?`Removed`:`Added`} ${fr(e,this.resolvedLocale)}`);return}if(!this.rangeAnchor){this.rangeAnchor=e,this.value=W(e),this.focusedDate=W(e),this.emitInput();return}let n=this.rangeAnchor,r=e,i=n.getTime()<=r.getTime()?{from:n,to:r}:{from:r,to:n};this.minRange>0&&ur(i.to,i.from)+1<this.minRange?this.announce(`Range must be at least ${this.minRange} days`):this.maxRange>0&&ur(i.to,i.from)+1>this.maxRange?this.announce(`Range must be at most ${this.maxRange} days`):(this.value=$n(i),this.focusedDate=W(e),this.rangeAnchor=null,this.hoverDate=null,this.emitInput(),this.emitChange(),this.announce(`${fr(i.from,this.resolvedLocale)} – ${fr(i.to,this.resolvedLocale)}`))}handleDayHover(e){this.mode===`range`&&this.rangeAnchor&&(this.hoverDate=e,this.emitFocusDay(e))}handleMonthPick(e){if(this.disabled||this.readonly)return;let t=new Date(this.viewAnchor.getFullYear(),e,1);this.isMonthFullyDisabled(t)||(this.viewAnchor=t,this.focusedDate=W(t),this.setView(`days`))}handleYearPick(e){if(this.disabled||this.readonly)return;let t=new Date(e,this.viewAnchor.getMonth(),1);this.isYearFullyDisabled(e)||(this.viewAnchor=t,this.focusedDate=W(t),this.setView(`months`),this.focusedMonth=t.getMonth())}handleDayKeyDown(e,t,n){if(n)return;let r=null;switch(e.key){case`ArrowLeft`:r=ir(t,-1);break;case`ArrowRight`:r=ir(t,1);break;case`ArrowUp`:r=ir(t,-7);break;case`ArrowDown`:r=ir(t,7);break;case`PageUp`:r=ar(t,-1);break;case`PageDown`:r=ar(t,1);break;case`Home`:r=cr(t);break;case`End`:r=new Date(t.getFullYear(),t.getMonth()+1,0);break;case`Enter`:case` `:e.preventDefault(),this.handleDayClick(t,n);return;case`Escape`:this.rangeAnchor&&(e.preventDefault(),this.rangeAnchor=null,this.hoverDate=null,this.requestUpdate());return;default:return}e.preventDefault(),r&&(this.focusedDate=W(r),this.visibleMonthAnchors.some(e=>rr(r,e))||(this.viewAnchor=cr(r)),this.emitFocusDay(r),this.requestUpdate(),queueMicrotask(()=>this.focus()))}isMonthFullyDisabled(e){return _r(e,new Date(e.getFullYear(),e.getMonth()+1,0),this.isDisabledMatcher)}isYearFullyDisabled(e){return _r(new Date(e,0,1),new Date(e,11,31),this.isDisabledMatcher)}formatWeekdayLabel(e){return this.weekdayFormat===`narrow`?new Intl.DateTimeFormat(this.resolvedLocale,{weekday:`short`}).format(e).slice(0,2):new Intl.DateTimeFormat(this.resolvedLocale,{weekday:this.weekdayFormat}).format(e)}buildWeekdayLabels(){let e=Er(this.firstDayOfWeek,this.resolvedLocale),t=[];for(let n=0;n<7;n+=1){let r=(e+n)%7,i=new Date(2024,0,r===0?7:r);t.push(this.formatWeekdayLabel(i))}return t}buildMonthDays(e){let t=Er(this.firstDayOfWeek,this.resolvedLocale),n=cr(e),r=ir(n,-((n.getDay()-t+7)%7)),i=[];for(let e=0;e<42;e+=1)i.push(ir(r,e));return i}computeDayState(e,t){let n=this.isDisabledMatcher(e),r=Qn(this.value),i=this.mode===`single`&&G(U(this.value),e),a=this.mode===`multiple`&&er(this.value).some(t=>G(t,e)),o=this.mode===`range`&&G(r.from,e),s=this.mode===`range`&&G(r.to,e),c=this.mode===`range`&&r.from&&r.to&&e.getTime()>r.from.getTime()&&e.getTime()<r.to.getTime(),l=!1;if(this.mode===`range`&&this.rangeAnchor&&this.hoverDate){let t=this.rangeAnchor,n=this.hoverDate,r=t.getTime()<=n.getTime()?t:n,i=t.getTime()<=n.getTime()?n:t;l=e.getTime()>=r.getTime()&&e.getTime()<=i.getTime()}return{date:e,monthAnchor:t,outside:!rr(e,t),today:G(e,this.resolvedToday),weekend:this.weekendDays.has(e.getDay()),disabled:n,selected:i||a||o||s,rangeStart:o,rangeEnd:s,rangeInner:!!c,rangePreview:l,roving:G(e,this.resolvedFocusedDate)}}renderDayContent(e){var t;let n=`day-${W(e.date)}`;if(this.daySlotNames.includes(n))return s`<slot name=${n}></slot>`;let r=(t=this.dayContent)==null?void 0:t.call(this,e.date);return r?C(r):s`<span part="day-label">${e.date.getDate()}</span>`}renderDay(e){if(!this.withOutsideDays&&e.outside)return s`<span part="day-placeholder" class="day is-placeholder" aria-hidden="true"></span>`;let t=fr(e.date,this.resolvedLocale);return s`
            <button
                type="button"
                part="day"
                class=${S({day:!0,"is-outside":e.outside,"is-today":e.today,"is-weekend":e.weekend,"is-disabled":e.disabled,"is-selected":e.selected,"is-range-start":e.rangeStart,"is-range-end":e.rangeEnd,"is-range-inner":e.rangeInner,"is-range-preview":e.rangePreview,"is-roving":e.roving})}
                tabindex=${e.roving?`0`:`-1`}
                ?disabled=${e.disabled}
                aria-label=${t}
                aria-selected=${e.selected?`true`:`false`}
                aria-current=${e.today?`date`:a}
                @click=${()=>this.handleDayClick(e.date,e.disabled)}
                @mouseenter=${()=>this.handleDayHover(e.date)}
                @keydown=${t=>this.handleDayKeyDown(t,e.date,e.disabled)}
            >
                ${this.renderDayContent(e)}
            </button>
        `}getMonthWeeks(e){let t=this.buildMonthDays(e),n=[];for(let e=0;e<t.length;e+=7)n.push(t.slice(e,e+7));return this.withOutsideDays?n:n.filter(t=>t.some(t=>rr(t,e)))}renderMonth(e,t=!1){let n=this.buildWeekdayLabels(),r=new Intl.DateTimeFormat(this.resolvedLocale,{month:`long`,year:`numeric`}).format(e),i=this.getMonthWeeks(e);return s`
            <div part="month" class="month">
                ${t?s`<div part="month-label" class="month-label">${r}</div>`:a}
                <div part="weekdays" class="weekdays" role="row">
                    ${this.withWeekNumbers?s`<span part="weeknumbers" class="weeknumber-header" role="columnheader">#</span>`:a}
                    ${n.map(e=>s`
                        <span part="weekday" class="weekday" role="columnheader">${e}</span>
                    `)}
                </div>
                <div
                    part="grid"
                    class="grid"
                    role="grid"
                    aria-label=${r}
                    @mouseleave=${this.handleGridMouseLeave}
                >
                    ${i.map(t=>s`
                        <div part="week" class="week" role="row">
                            ${this.withWeekNumbers?s`<span part="weeknumber" class="weeknumber" role="gridcell">${dr(t[0])}</span>`:a}
                            ${t.map(t=>this.renderDay(this.computeDayState(t,e)))}
                        </div>
                    `)}
                </div>
            </div>
        `}renderViewRows(e){let t=[];for(let n=0;n<e.length;n+=3)t.push(s`
                <div part="view-row" class="view-row" role="row">
                    ${e.slice(n,n+3)}
                </div>
            `);return t}renderMonthsView(){var e,t;let n=this.viewAnchor.getFullYear(),r=new Intl.DateTimeFormat(this.resolvedLocale,{month:`long`}),i=(e=this.primarySelectedDate)==null?void 0:e.getMonth(),a=(t=this.focusedMonth)==null?this.resolvedFocusedDate.getMonth():t,o=[];for(let e=0;e<12;e+=1){let t=new Date(n,e,1),c=this.isMonthFullyDisabled(t),l=i===e,u=this.resolvedToday.getFullYear()===n&&this.resolvedToday.getMonth()===e,d=a===e;o.push(s`
                <div part="view-cell" class="view-cell" role="gridcell">
                    <button
                        type="button"
                        part="view-item ${u?`view-item-today`:``} ${l?`view-item-selected`:``} ${c?`view-item-disabled`:``}"
                        class=${S({"view-item":!0,"is-today":u,"is-selected":l,"is-disabled":c,"is-roving":d})}
                        tabindex=${d?`0`:`-1`}
                        ?disabled=${c}
                        @click=${()=>this.handleMonthPick(e)}
                    >
                        ${r.format(t)}
                    </button>
                </div>
            `)}return s`
            <div part="view-grid" class="view-grid" role="grid">
                ${this.renderViewRows(o)}
            </div>
        `}renderYearsView(){var e,t;let n=this.viewAnchor.getFullYear(),r=Math.floor(n/12)*12,i=(e=this.primarySelectedDate)==null?void 0:e.getFullYear(),a=(t=this.focusedYear)==null?this.resolvedFocusedDate.getFullYear():t,o=[];for(let e=0;e<12;e+=1){let t=r+e,n=this.isYearFullyDisabled(t),c=i===t,l=this.resolvedToday.getFullYear()===t,u=a===t;o.push(s`
                <div part="view-cell" class="view-cell" role="gridcell">
                    <button
                        type="button"
                        part="view-item ${l?`view-item-today`:``} ${c?`view-item-selected`:``} ${n?`view-item-disabled`:``}"
                        class=${S({"view-item":!0,"is-today":l,"is-selected":c,"is-disabled":n,"is-roving":u})}
                        tabindex=${u?`0`:`-1`}
                        ?disabled=${n}
                        @click=${()=>this.handleYearPick(t)}
                    >
                        ${t}
                    </button>
                </div>
            `)}return s`
            <div part="view-grid" class="view-grid" role="grid">
                ${this.renderViewRows(o)}
            </div>
        `}renderHeaderTitle(){if(this.view===`months`)return String(this.viewAnchor.getFullYear());if(this.view===`years`){let e=this.viewAnchor.getFullYear(),t=Math.floor(e/12)*12;return`${t} – ${t+11}`}return this.months===2?`${new Intl.DateTimeFormat(this.resolvedLocale,{month:`long`,year:`numeric`}).format(this.viewAnchor)} – ${new Intl.DateTimeFormat(this.resolvedLocale,{month:`long`,year:`numeric`}).format(ar(this.viewAnchor,1))}`:new Intl.DateTimeFormat(this.resolvedLocale,{month:`long`,year:`numeric`}).format(this.viewAnchor)}render(){let e=this.view===`days`&&this.months===2;return s`
            <div part="base" class="base">
                <div part="header" class="header">
                    <button
                        type="button"
                        part="previous"
                        class="nav-button"
                        aria-label="Previous"
                        ?disabled=${this.disabled}
                        @click=${this.handlePrevious}
                    >
                        <slot name="previous-icon">
                            <span class="icon" aria-hidden="true">${x(Or)}</span>
                        </slot>
                    </button>
                    <button
                        type="button"
                        part="title"
                        class="title"
                        ?disabled=${this.disabled}
                        @click=${this.view===`years`?void 0:this.handleTitleClick}
                    >
                        ${this.renderHeaderTitle()}
                    </button>
                    <button
                        type="button"
                        part="next"
                        class="nav-button"
                        aria-label="Next"
                        ?disabled=${this.disabled}
                        @click=${this.handleNext}
                    >
                        <slot name="next-icon">
                            <span class="icon" aria-hidden="true">${x(kr)}</span>
                        </slot>
                    </button>
                </div>

                <div part="months" class="months">
                    ${this.view===`days`?this.visibleMonthAnchors.map(t=>this.renderMonth(t,e)):this.view===`months`?this.renderMonthsView():this.renderYearsView()}
                </div>

                ${this.hasSlotController.test(`footer`)?s`<div part="footer"><slot name="footer"></slot></div>`:a}

                <div class="live-region" aria-live="polite" aria-atomic="true">
                    ${this.liveAnnouncement}
                </div>
            </div>
        `}},Yn.styles=Dr,Yn);l([_({reflect:!0})],K.prototype,`mode`,void 0),l([_({reflect:!0})],K.prototype,`size`,void 0),l([_({reflect:!0})],K.prototype,`value`,void 0),l([_({reflect:!0})],K.prototype,`min`,void 0),l([_({reflect:!0})],K.prototype,`max`,void 0),l([_({reflect:!0})],K.prototype,`today`,void 0),l([_({reflect:!0})],K.prototype,`view`,void 0),l([_({type:Number,reflect:!0})],K.prototype,`months`,void 0),l([_({attribute:`page-by`,reflect:!0})],K.prototype,`pageBy`,void 0),l([_({attribute:`focused-date`,reflect:!0})],K.prototype,`focusedDate`,void 0),l([_({attribute:`first-day-of-week`,reflect:!0})],K.prototype,`firstDayOfWeek`,void 0),l([_({attribute:`with-outside-days`,type:Boolean,reflect:!0})],K.prototype,`withOutsideDays`,void 0),l([_({attribute:`with-week-numbers`,type:Boolean,reflect:!0})],K.prototype,`withWeekNumbers`,void 0),l([_({attribute:`weekday-format`,reflect:!0})],K.prototype,`weekdayFormat`,void 0),l([_({type:Boolean,reflect:!0})],K.prototype,`disabled`,void 0),l([_({type:Boolean,reflect:!0})],K.prototype,`readonly`,void 0),l([_({type:Boolean,reflect:!0})],K.prototype,`bordered`,void 0),l([_({attribute:`disabled-dates`})],K.prototype,`disabledDatesRaw`,void 0),l([_({attribute:`disabled-days-of-week`,reflect:!0})],K.prototype,`disabledDaysOfWeek`,void 0),l([_({attribute:`disable-past`,type:Boolean,reflect:!0})],K.prototype,`disablePast`,void 0),l([_({attribute:`disable-future`,type:Boolean,reflect:!0})],K.prototype,`disableFuture`,void 0),l([_({attribute:`min-range`,type:Number})],K.prototype,`minRange`,void 0),l([_({attribute:`max-range`,type:Number})],K.prototype,`maxRange`,void 0),l([_({reflect:!0})],K.prototype,`locale`,void 0),l([_({attribute:!1})],K.prototype,`isDateDisabled`,void 0),l([_({attribute:!1})],K.prototype,`dayContent`,void 0),l([v()],K.prototype,`viewAnchor`,void 0),l([v()],K.prototype,`rangeAnchor`,void 0),l([v()],K.prototype,`hoverDate`,void 0),l([v()],K.prototype,`liveAnnouncement`,void 0),l([v()],K.prototype,`focusedMonth`,void 0),l([v()],K.prototype,`focusedYear`,void 0),l([v()],K.prototype,`daySlotNames`,void 0),K=l([d(`pk-calendar`)],K);var Ar,jr=t`
    ${n}
    @layer pk-component {
        :host {
            display: inline-block;
            position: relative;
            width: fit-content;
            max-width: 100%;
            color: var(--pk-color-gray-700);
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
            --pk-date-picker-height: 2.125rem;
            --pk-date-picker-min-width: 8.125rem;
            --pk-date-picker-padding-inline: 10px;
            --pk-date-picker-font-size: var(--pk-font-size-base);
        }

        :host([width='full']) {
            display: block;
            width: 100%;
        }

        :host([width='full']) .control {
            width: 100%;
        }

        .control {
            display: inline-flex;
            align-items: center;
            justify-content: flex-start;
            gap: 0.5rem;
            width: fit-content;
            min-width: var(--pk-date-picker-min-width);
            max-width: 100%;
            height: var(--pk-date-picker-height);
            min-height: var(--pk-date-picker-height);
            margin: 0;
            padding: 0 var(--pk-date-picker-padding-inline);
            border: 1px solid var(--pk-color-slate-400);
            border-radius: var(--pk-radius-lg);
            background: transparent;
            color: inherit;
            font: inherit;
            font-size: var(--pk-date-picker-font-size);
            font-weight: 400;
            line-height: 1.2;
            cursor: default;
            outline: none;
            box-sizing: border-box;
            transition: background-color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
        }

        .control[data-popup-open] {
            background: var(--pk-color-slate-150);
            border-color: var(--pk-color-slate-400);
            box-shadow: none;
        }

        :host(:not([disabled])) .control:hover:not(.is-disabled) {
            background: var(--pk-color-slate-50);
        }

        :host(:not([disabled])) .control[data-popup-open]:hover:not(.is-disabled),
        :host(:not([disabled])) .control:active:not(.is-disabled) {
            background: var(--pk-color-slate-150);
        }

        /* Outline-button focus — lighter than --pk-shadow-focus (see React DatePicker trigger). */
        :host(:not([invalid]):not(:state(user-invalid))) .control:focus-visible,
        :host(:not([invalid]):not(:state(user-invalid))[data-state='focus-visible']) .control {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
        }

        :host(:not([invalid]):not(:state(user-invalid))) .control[data-popup-open]:focus-visible,
        :host(:not([invalid]):not(:state(user-invalid))[data-state='focus-visible']) .control[data-popup-open] {
            border-color: var(--pk-color-slate-400);
            box-shadow: none;
        }

        :host([invalid]) .control,
        :host(:state(user-invalid)) .control {
            border-color: var(--pk-color-rose-600);
        }

        :host([invalid]) .control:focus-visible,
        :host([invalid][data-state='focus-visible']) .control,
        :host(:state(user-invalid)) .control:focus-visible,
        :host(:state(user-invalid)[data-state='focus-visible']) .control {
            box-shadow: var(--pk-input-invalid-focus-shadow);
        }

        .control.is-disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .display-value {
            display: inline-flex;
            align-items: center;
            flex: 1;
            min-width: 0;
            line-height: 1.2;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: left;
            color: inherit;
        }

        .display-value.is-placeholder {
            color: var(--pk-color-gray-400);
        }

        .calendar-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            line-height: 0;
            color: var(--pk-color-gray-400);
            pointer-events: none;
        }

        .calendar-icon .icon,
        .calendar-icon svg {
            display: block;
            width: 14px;
            height: 14px;
        }

        .icon-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            margin-inline-start: auto;
            width: 1.25rem;
            height: 1.25rem;
            padding: 0;
            border: 0;
            border-radius: var(--pk-radius-sm);
            background: transparent;
            color: var(--pk-color-gray-500);
            cursor: pointer;
        }

        .icon-button:hover:not(:disabled) {
            color: var(--pk-color-gray-800);
            background: var(--pk-color-slate-100);
        }

        .icon-button:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .icon-button .icon {
            width: 0.875rem;
            height: 0.875rem;
        }

        .panel {
            padding: 0;
            border: 0;
            border-radius: var(--pk-radius-md);
            background: var(--pk-color-white);
            box-shadow: var(--pk-shadow-popup);
        }

        .panel pk-calendar {
            display: block;
        }

        :host([size='xs']) {
            --pk-date-picker-height: 1.5rem;
            --pk-date-picker-padding-inline: 8px;
            --pk-date-picker-font-size: 11px;
        }

        :host([size='sm']) {
            --pk-date-picker-height: 1.625rem;
            --pk-date-picker-padding-inline: 9px;
            --pk-date-picker-font-size: 12px;
        }

        :host([size='lg']) {
            --pk-date-picker-height: 2.125rem;
            --pk-date-picker-padding-inline: 11px;
            --pk-date-picker-font-size: 14px;
        }

        :host([size='xl']) {
            --pk-date-picker-height: 2.375rem;
            --pk-date-picker-padding-inline: 12px;
            --pk-date-picker-font-size: 15px;
        }
    }
`,Mr=g(y.calendar),Nr=g(y.xmark),q=(Ar=class extends O{constructor(...e){super(...e),this.assumeInteractionOn=[`input`],this.hasSlotController=new b(this,`label`,`instructions`,`hint`,`start`,`end`,`footer`),this.controlId=T(`pk-date-picker`),this.open=!1,this.placement=`bottom`,this.sideOffset=4,this.size=`default`,this.mode=`single`,this.value=``,this.defaultValue=``,this.label=``,this.instructions=``,this.placeholder=``,this.withClear=!1,this.readonly=!1,this.invalid=!1,this.min=``,this.max=``,this.locale=``,this.disablePast=!1,this.disableFuture=!1,this.disabledDates=``,this.disabledDaysOfWeek=``,this.firstDayOfWeek=`auto`,this.withOutsideDays=!0,this.withWeekNumbers=!1,this.months=1,this.pageBy=`months`,this.minRange=0,this.maxRange=0,this.withLabel=!1,this.withInstructions=!1,this.ariaLabel=null,this.dismissRegistered=!1,this.daySlotNames=[],this.handleDocumentPointerDown=e=>{this.open&&D(this)&&(this.isPointerInside(e)||this.closePanel(`light-dismiss`))},this.handleDocumentKeyDown=e=>{this.open&&e.key===`Escape`&&(e.preventDefault(),this.closePanel(`escape`))},this.handleControlClick=()=>{this.disabled||(this.open?this.closePanel(`api`):this.openPanel())},this.handleControlKeyDown=e=>{this.disabled||(e.key===`ArrowDown`&&e.altKey?(e.preventDefault(),this.openPanel(),queueMicrotask(()=>{var e;return(e=this.calendarElement)==null?void 0:e.focus()})):(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.handleControlClick()))},this.handleClearClick=e=>{e.preventDefault(),e.stopPropagation(),this.clear()},this.handleCalendarChange=e=>{let t=e.target;this.value=t.value,this.emitValueChange(),this.mode===`single`&&t.value&&this.closePanel(`api`),this.mode===`range`&&Qn(t.value).from&&Qn(t.value).to&&this.closePanel(`api`)},this.handleCalendarInput=e=>{let t=e.target;this.value=t.value,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))}}static get validators(){return[...super.validators,Ie(),M()]}connectedCallback(){this.instructions=Qt(this,this.instructions),this.hasAttribute(`with-hint`)&&(this.withInstructions=!0),super.connectedCallback(),this.toggleAttribute(`data-has-value`,!!this.value),this.setState(`blank`,!this.value),this.updateDaySlots(),this.childrenObserver=new MutationObserver(()=>this.updateDaySlots()),this.childrenObserver.observe(this,{childList:!0,attributes:!0,attributeFilter:[`slot`]})}disconnectedCallback(){var e;(e=this.childrenObserver)==null||e.disconnect(),this.closePanel(`api`),super.disconnectedCallback()}willUpdate(e){if(e.has(`value`)&&(this.value instanceof Date&&(this.value=W(Zn(this.value))),this.toggleAttribute(`data-has-value`,!!this.value),this.setState(`blank`,!this.value)),e.has(`open`)){var t;this.setState(`open`,this.open),(t=this.controlElement)==null||t.toggleAttribute(`data-popup-open`,this.open)}e.has(`mode`)&&(this.setState(`range`,this.mode===`range`),this.setState(`multiple`,this.mode===`multiple`)),super.willUpdate(e)}updateDaySlots(){let e=[...this.children].map(e=>e.getAttribute(`slot`)).filter(e=>!!(e!=null&&e.startsWith(`day-`)));e.join(`,`)!==this.daySlotNames.join(`,`)&&(this.daySlotNames=e)}get valueString(){return this.value instanceof Date?W(Zn(this.value)):this.value}syncFormValue(){this.setValue(this.valueString||``)}resetToDefaultValue(){this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=e)}get resolvedLocale(){return this.locale||this.lang||qn()}get displayText(){if(!this.value)return this.placeholder;if(this.mode===`multiple`){let e=er(this.valueString).length;return e===0?this.placeholder:`${e} date${e===1?``:`s`} selected`}if(this.mode===`range`){let e=Qn(this.valueString);return e.from&&e.to?`${Jn(e.from,this.resolvedLocale)} – ${Jn(e.to,this.resolvedLocale)}`:e.from?Jn(e.from,this.resolvedLocale):this.placeholder}let e=U(this.value);return e?Jn(e,this.resolvedLocale):this.placeholder}get valueAsDate(){return this.mode===`single`?U(this.value):null}get valueAsRange(){return Qn(this.valueString)}get valueAsDates(){return this.mode===`multiple`?er(this.valueString):[]}show(){var e=this;return w(function*(){yield e.openPanel()})()}hide(){var e=this;return w(function*(){yield e.closePanel(`api`)})()}clear(){var e;this.disabled||this.readonly||!this.value||(this.value=``,this.dispatchEvent(new ye),this.emitValueChange(),(e=this.controlElement)==null||e.focus())}emitValueChange(){this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}openPanel(){var e=this;return w(function*(){e.disabled||e.open||e.dispatchEvent(new Le)&&(e.open=!0,e.registerDismissHandlers(),yield e.updateComplete,yield ge(e.popupElement,e.placement),e.dispatchEvent(new _e))})()}closePanel(e=`unknown`){var t=this;return w(function*(){if(!t.open)return;let n=new pe(e);t.dispatchEvent(n)&&(t.open=!1,t.unregisterDismissHandlers(),t.dispatchEvent(new Re))})()}registerDismissHandlers(){this.dismissRegistered||(Te(this),document.addEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.addEventListener(`keydown`,this.handleDocumentKeyDown,!0),this.dismissRegistered=!0)}unregisterDismissHandlers(){this.dismissRegistered&&(E(this),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.removeEventListener(`keydown`,this.handleDocumentKeyDown,!0),this.dismissRegistered=!1)}isPointerInside(e){var t,n;return we(e,{host:this,panel:(t=(n=this.popupElement)==null?void 0:n.querySelector(`.panel`))==null?void 0:t})}renderClearButton(){return!this.withClear||!this.value||this.disabled?a:s`
            <button
                type="button"
                class="icon-button clear-button"
                part="clear-button"
                aria-label="Clear date"
                ?disabled=${this.disabled}
                @click=${this.handleClearClick}
            >
                <slot name="clear-icon">
                    <span class="icon" aria-hidden="true">${x(Nr)}</span>
                </slot>
            </button>
        `}renderCalendarIcon(){return s`
            <span class="calendar-icon" part="expand-icon" aria-hidden="true">
                <slot name="expand-icon">
                    <span class="icon">${x(Mr)}</span>
                </slot>
            </span>
        `}render(){var e,t,n;let r=!!this.value,i=this.displayText,o=!r;return s`
            <div part="form-control" class="form-control">
                ${this.label||this.hasSlotController.test(`label`)?s`
                        <label part="label" class="label" for=${this.controlId}>
                            <slot name="label">${this.label}</slot>
                        </label>
                    `:a}

                <div part="form-control-input" class="form-control-input">
                    <input
                        class="value-input"
                        type="hidden"
                        .value=${this.value}
                        ?required=${this.required}
                    />

                    <div
                        part="base"
                        id=${this.controlId}
                        class=${S({control:!0,"is-disabled":this.disabled})}
                        role="combobox"
                        aria-expanded=${this.open?`true`:`false`}
                        aria-haspopup="dialog"
                        aria-label=${(e=this.ariaLabel)==null?a:e}
                        tabindex=${this.disabled?`-1`:`0`}
                        @click=${this.handleControlClick}
                        @keydown=${this.handleControlKeyDown}
                    >
                        ${this.hasSlotController.test(`start`)?s`<span part="start" class="control-start"><slot name="start"></slot></span>`:a}

                        ${this.renderCalendarIcon()}

                        <span
                            part="input"
                            class=${S({"display-value":!0,"is-placeholder":o})}
                        >
                            ${i}
                        </span>

                        ${this.renderClearButton()}

                        ${this.hasSlotController.test(`end`)?s`<span part="end" class="control-end"><slot name="end"></slot></span>`:a}
                    </div>

                    <pk-popup
                        .active=${this.open}
                        .anchor=${(t=this.controlElement)==null?``:t}
                        .placement=${this.placement}
                        .distance=${this.sideOffset}
                    >
                        <div part="popup" class="panel" role="dialog" aria-label="Choose date">
                            <pk-calendar
                                part="calendar"
                                .bordered=${!1}
                                .mode=${this.mode}
                                .value=${this.value}
                                .min=${this.min}
                                .max=${this.max}
                                .locale=${this.resolvedLocale}
                                .months=${this.months}
                                .pageBy=${this.pageBy}
                                .firstDayOfWeek=${this.firstDayOfWeek}
                                .withOutsideDays=${this.withOutsideDays}
                                .withWeekNumbers=${this.withWeekNumbers}
                                .weekdayFormat=${(n=this.weekdayFormat)==null?a:n}
                                .minRange=${this.minRange}
                                .maxRange=${this.maxRange}
                                .disablePast=${this.disablePast}
                                .disableFuture=${this.disableFuture}
                                .disabledDatesRaw=${this.disabledDates}
                                .disabledDaysOfWeek=${this.disabledDaysOfWeek}
                                .isDateDisabled=${this.isDateDisabled}
                                .dayContent=${this.dayContent}
                                .disabled=${this.disabled}
                                .readonly=${this.readonly}
                                @change=${this.handleCalendarChange}
                                @input=${this.handleCalendarInput}
                            >
                                ${this.daySlotNames.map(e=>s`
                                    <slot name=${e} slot=${e}></slot>
                                `)}
                                <slot name="footer" slot="footer"></slot>
                            </pk-calendar>
                        </div>
                    </pk-popup>
                </div>

                ${this.instructions||this.hasSlotController.test(`instructions`)||this.hasSlotController.test(`hint`)?s`
                        <div part="instructions" class="instructions">
                            <slot name="instructions">
                                <slot name="hint">${this.instructions}</slot>
                            </slot>
                        </div>
                    `:a}
            </div>
        `}},Ar.styles=[ut,jr],Ar);l([_({type:Boolean,reflect:!0})],q.prototype,`open`,void 0),l([_({reflect:!0})],q.prototype,`placement`,void 0),l([_({attribute:`side-offset`,type:Number})],q.prototype,`sideOffset`,void 0),l([_({reflect:!0})],q.prototype,`size`,void 0),l([_({reflect:!0})],q.prototype,`mode`,void 0),l([_()],q.prototype,`value`,void 0),l([_({attribute:`default-value`})],q.prototype,`defaultValue`,void 0),l([_()],q.prototype,`label`,void 0),l([_()],q.prototype,`instructions`,void 0),l([_()],q.prototype,`placeholder`,void 0),l([_({attribute:`with-clear`,type:Boolean})],q.prototype,`withClear`,void 0),l([_({type:Boolean,reflect:!0})],q.prototype,`readonly`,void 0),l([_({type:Boolean,reflect:!0})],q.prototype,`invalid`,void 0),l([_({reflect:!0})],q.prototype,`min`,void 0),l([_({reflect:!0})],q.prototype,`max`,void 0),l([_({reflect:!0})],q.prototype,`locale`,void 0),l([_({attribute:`disable-past`,type:Boolean,reflect:!0})],q.prototype,`disablePast`,void 0),l([_({attribute:`disable-future`,type:Boolean,reflect:!0})],q.prototype,`disableFuture`,void 0),l([_({attribute:`disabled-dates`})],q.prototype,`disabledDates`,void 0),l([_({attribute:`disabled-days-of-week`,reflect:!0})],q.prototype,`disabledDaysOfWeek`,void 0),l([_({attribute:`first-day-of-week`,reflect:!0})],q.prototype,`firstDayOfWeek`,void 0),l([_({attribute:`with-outside-days`,type:Boolean,reflect:!0})],q.prototype,`withOutsideDays`,void 0),l([_({attribute:`with-week-numbers`,type:Boolean,reflect:!0})],q.prototype,`withWeekNumbers`,void 0),l([_({attribute:`weekday-format`,reflect:!0})],q.prototype,`weekdayFormat`,void 0),l([_({type:Number,reflect:!0})],q.prototype,`months`,void 0),l([_({attribute:`page-by`,reflect:!0})],q.prototype,`pageBy`,void 0),l([_({attribute:`min-range`,type:Number})],q.prototype,`minRange`,void 0),l([_({attribute:`max-range`,type:Number})],q.prototype,`maxRange`,void 0),l([_({attribute:!1})],q.prototype,`isDateDisabled`,void 0),l([_({attribute:!1})],q.prototype,`dayContent`,void 0),l([_({attribute:`with-label`,type:Boolean})],q.prototype,`withLabel`,void 0),l([_({attribute:`with-instructions`,type:Boolean})],q.prototype,`withInstructions`,void 0),l([_({attribute:`aria-label`})],q.prototype,`ariaLabel`,void 0),l([_({reflect:!0})],q.prototype,`width`,void 0),l([u(`.value-input`)],q.prototype,`input`,void 0),l([u(`pk-popup`)],q.prototype,`popupElement`,void 0),l([u(`pk-calendar`)],q.prototype,`calendarElement`,void 0),l([u(`.control`)],q.prototype,`controlElement`,void 0),l([v()],q.prototype,`daySlotNames`,void 0),q=l([d(`pk-date-picker`)],q);var Pr,Fr=null;function Ir(){var e,t,n;let r=(e=globalThis.Craft)==null?void 0:e.timepicker;return{timeFormat:(r==null?void 0:r.timeFormat)||`g:i A`,lang:{AM:(r==null||(t=r.lang)==null?void 0:t.AM)||`AM`,PM:(r==null||(n=r.lang)==null?void 0:n.PM)||`PM`},locale:(r==null?void 0:r.locale)||document.documentElement.lang||`en-US`}}function Lr(){if(Fr)return Fr;let e=[],{timeFormat:t,lang:n,locale:r}=Ir();for(let i=0;i<24;i+=1)for(let a=0;a<60;a+=30){let o=`${i.toString().padStart(2,`0`)}:${a.toString().padStart(2,`0`)}`,s;if(t===`g:i A`){let e=i;i===0?e=12:i>12&&(e=i-12);let t=i>=12?n.PM:n.AM;s=`${e}:${a.toString().padStart(2,`0`)} ${t}`}else s=t===`G:i`?o:new Date(`2000-01-01T${o}:00`).toLocaleTimeString(r,{hour:`numeric`,minute:`2-digit`,hour12:t.includes(`A`)});e.push({value:o,label:s})}return Fr=e,e}var Rr=t`
    @layer pk-component {
        :host {
            display: inline-block;
            width: 8.125rem;
            min-width: 8.125rem;
            color: var(--pk-color-gray-700);
            --pk-select-trigger-border-width: 1px;
            --pk-select-item-min-height: 2.125rem;
            --pk-select-item-padding-block: 0;
            --pk-select-item-padding-inline: 10px;
            --pk-select-item-font-size: var(--pk-font-size-base);
        }

        .control {
            justify-content: flex-start;
            gap: 0.5rem;
            width: 100%;
            height: 2.125rem;
            min-height: 2.125rem;
            border-color: var(--pk-color-slate-400) !important;
            border-radius: var(--pk-radius-lg) !important;
            background: transparent !important;
            background-color: transparent !important;
            text-align: left;
            font-weight: 400;
            line-height: 1.2;
            cursor: default;
        }

        :host([open]) .control {
            background: var(--pk-color-slate-150, var(--pk-color-slate-100)) !important;
            background-color: var(--pk-color-slate-150, var(--pk-color-slate-100)) !important;
            border-color: var(--pk-color-slate-400) !important;
            box-shadow: none;
        }

        :host(:not([disabled])) .control:hover:not(:disabled) {
            background: var(--pk-color-slate-50) !important;
            background-color: var(--pk-color-slate-50) !important;
        }

        :host(:not([disabled])[open]) .control:hover:not(:disabled),
        :host(:not([disabled])) .control:active:not(:disabled) {
            background: var(--pk-color-slate-150, var(--pk-color-slate-100)) !important;
            background-color: var(--pk-color-slate-150, var(--pk-color-slate-100)) !important;
        }

        :host(:not([invalid]):not(:state(user-invalid))) .control:focus-visible,
        :host(:not([invalid]):not(:state(user-invalid))[data-state='focus-visible']) .control {
            border-color: var(--pk-color-sky-600) !important;
            box-shadow: var(--pk-input-focus-shadow);
        }

        :host(:not([invalid]):not(:state(user-invalid))[open]) .control:focus-visible,
        :host(:not([invalid]):not(:state(user-invalid))[open][data-state='focus-visible']) .control {
            border-color: var(--pk-color-slate-400) !important;
            box-shadow: none;
        }

        :host([invalid]) .control,
        :host(:state(user-invalid)) .control {
            border-color: var(--pk-color-rose-600) !important;
        }

        :host([invalid]) .control:focus-visible,
        :host([invalid][data-state='focus-visible']) .control,
        :host(:state(user-invalid)) .control:focus-visible,
        :host(:state(user-invalid)[data-state='focus-visible']) .control {
            box-shadow: var(--pk-input-invalid-focus-shadow);
        }

        .control-start {
            color: var(--pk-color-gray-400);
            pointer-events: none;
        }

        .control-start svg {
            display: block;
            width: 14px;
            height: 14px;
        }

        .value {
            flex: 1;
            line-height: 1.2;
            color: inherit;
        }

        .value.is-placeholder {
            color: var(--pk-color-gray-400);
        }

        .icon {
            margin-inline-start: auto;
            color: var(--pk-color-gray-600);
        }

        .panel {
            min-width: 8rem;
            max-height: 15rem;
        }

        /* Editable-table cells: flush fill — must live here so !important beats the
         * standalone trigger chrome (external ::part cannot override it). */
        :host(.cell-pk-control) {
            display: block;
            width: 100%;
            min-width: 0;
            height: 100%;
            --pk-select-trigger-border-width: 0;
            --pk-select-item-min-height: 100%;
            --pk-select-item-padding-block: 0;
        }

        :host(.cell-pk-control) .control {
            width: 100%;
            height: 100% !important;
            min-height: 100% !important;
            border: 0 !important;
            border-radius: 0 !important;
            background: transparent !important;
            background-color: transparent !important;
        }

        :host(.cell-pk-control:not([disabled])) .control:hover:not(:disabled),
        :host(.cell-pk-control[open]) .control,
        :host(.cell-pk-control:not([disabled])[open]) .control:hover:not(:disabled),
        :host(.cell-pk-control:not([disabled])) .control:active:not(:disabled) {
            border-radius: 0 !important;
        }

        :host(.cell-pk-control:not([invalid]):not(:state(user-invalid))) .control:focus-visible,
        :host(.cell-pk-control:not([invalid]):not(:state(user-invalid))[data-state='focus-visible']) .control {
            border: 0 !important;
            box-shadow: inset 0 0 0 1px var(--pk-color-gray-200, #e5e7eb);
        }
    }
`,zr=(Pr=class extends Pe{constructor(...e){super(...e),this.optionsSeeded=!1}connectedCallback(){this.ensureTimeOptions(),this.ensureClockIcon(),super.connectedCallback()}ensureTimeOptions(){if(this.optionsSeeded||this.querySelector(`pk-option`))this.optionsSeeded=!0;else{for(let e of Lr()){let t=document.createElement(`pk-option`);t.value=e.value,t.textContent=e.label,this.append(t)}this.optionsSeeded=!0}}ensureClockIcon(){if(this.querySelector(`[slot="start"]`))return;let e=ae(y.clock);e.setAttribute(`slot`,`start`),this.prepend(e)}},Pr.styles=[...ke,Rr],Pr);zr=l([d(`pk-time-picker`)],zr);var Br=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},Vr=m(class extends i{constructor(e){if(super(e),e.type!==r.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){var i;let a=bt(e),{values:s,keys:c}=this.dt(t,n,r);if(!Array.isArray(a))return this.ut=c,s;let l=(i=this.ut)==null?this.ut=[]:i,u=[],d,f,p=0,m=a.length-1,h=0,g=s.length-1;for(;p<=m&&h<=g;)if(a[p]===null)p++;else if(a[m]===null)m--;else if(l[p]===c[h])u[h]=_t(a[p],s[h]),p++,h++;else if(l[m]===c[g])u[g]=_t(a[m],s[g]),m--,g--;else if(l[p]===c[g])u[g]=_t(a[p],s[g]),gt(e,u[g+1],a[p]),p++,g--;else if(l[m]===c[h])u[h]=_t(a[m],s[h]),gt(e,a[p],a[m]),m--,h++;else if(d===void 0&&(d=Br(c,h,g),f=Br(l,p,m)),d.has(l[p])){if(d.has(l[m])){let t=f.get(c[h]),n=t===void 0?null:a[t];if(n===null){let t=gt(e,a[p]);_t(t,s[h]),u[h]=t}else u[h]=_t(n,s[h]),gt(e,a[p],n),a[t]=null;h++}else xt(a[m]),m--}else xt(a[p]),p++;for(;h<=g;){let t=gt(e,u[g+1]);_t(t,s[h]),u[h++]=t}for(;p<=m;){let e=a[p++];e!==null&&xt(e)}return this.ut=c,yt(e,u),o}}),Hr=[`_id`],Ur=class e{constructor(e){this.callbacks=e,this.rows=[],this.disabled=!1,this.handleCleanups=[],this.dragSession=null}get isActive(){return this.handleCleanups.length>0}get isSessionActive(){return this.dragSession!==null}sync(e,t){if(!this.dragSession){this.destroyHandles(),this.rows=e,this.disabled=t;for(let t of e){if(!t.handle)continue;let e=e=>{this.handlePointerDown(e,t)};t.handle.addEventListener(`pointerdown`,e),this.handleCleanups.push(()=>{var n;(n=t.handle)==null||n.removeEventListener(`pointerdown`,e)})}}}destroy(){this.cancelDrag(),this.destroyHandles(),this.rows=[]}handlePointerDown(e,t){if(this.disabled||this.dragSession||e.button!==0||!e.isPrimary)return;let n=this.rows.findIndex(e=>e.id===t.id),r=t.element.parentElement,i=t.element.closest(`table`);if(n<0||!(r instanceof HTMLTableSectionElement)||!(i instanceof HTMLTableElement))return;e.preventDefault();let a=[...t.element.cells].map(e=>e.getBoundingClientRect().width),o=this.freezeTableColumns(i,a),s=t.element.getBoundingClientRect(),c=r.getBoundingClientRect(),l={x:e.clientX-s.left,y:e.clientY-s.top},u=this.createPlaceholder(t.element,a,s.height);t.element.insertAdjacentElement(`afterend`,u);let d=this.liftRow(t.element,s,a),f={row:t,fromIndex:n,table:i,tbody:r,placeholder:u,pointerId:e.pointerId,pointerOffset:l,startLeft:s.left,rowHeight:s.height,tbodyTop:c.top,tbodyBottom:c.bottom,fixedOrigin:d,unfreezeColumns:o,cleanup:[],committed:!1},p=t.element.ownerDocument,m=e=>{if(e.pointerId!==f.pointerId||f.committed)return;e.preventDefault();let t=f.tbody.getBoundingClientRect();f.tbodyTop=t.top,f.tbodyBottom=t.bottom,this.updateOverlay(f,e.clientY),this.updateGap(f,e.clientY-f.pointerOffset.y+f.rowHeight/2)},h=e=>{e.pointerId!==f.pointerId||f.committed||(e.preventDefault(),this.commitDrag(f))},g=e=>{e.pointerId!==f.pointerId||f.committed||this.cancelDrag()};p.addEventListener(`pointermove`,m,{passive:!1}),p.addEventListener(`pointerup`,h,{passive:!1}),p.addEventListener(`pointercancel`,g),f.cleanup.push(()=>{p.removeEventListener(`pointermove`,m)},()=>{p.removeEventListener(`pointerup`,h)},()=>{p.removeEventListener(`pointercancel`,g)}),this.dragSession=f,this.updateOverlay(f,e.clientY)}updateOverlay(e,t){let n=t-e.pointerOffset.y,r=e.tbodyTop,i=Math.max(r,e.tbodyBottom-e.rowHeight),a=Math.min(i,Math.max(r,n)),o=e.row.element;o.style.top=`${a-e.fixedOrigin.y}px`,o.style.left=`${e.startLeft-e.fixedOrigin.x}px`}updateGap(t,n){let r=t.placeholder,i=t.row.element,a=[...t.tbody.querySelectorAll(`tr[data-row-id]`)].filter(e=>e!==i&&!e.hasAttribute(`data-pk-dnd-placeholder`)),o=r.getBoundingClientRect(),s=n<o.top+o.height/2,c=e.SWAP_INSET,l=null;for(let e of a){let t=e.getBoundingClientRect();if(!(t.height<=0)&&n<(s?t.top+t.height*(1-c):t.top+t.height*c)){l=e;break}}l?r.nextElementSibling!==l&&t.tbody.insertBefore(r,l):t.tbody.lastElementChild!==r&&t.tbody.append(r)}commitDrag(e){if(e.committed||this.dragSession!==e)return;e.committed=!0,this.cleanupDrag(e),this.dragSession=null;let t=[...e.tbody.querySelectorAll(`tr[data-row-id]`)].map(e=>{var t;return(t=e.dataset.rowId)==null?``:t}).filter(e=>e!==``);this.callbacks.onReorderTo(t)}cancelDrag(){let e=this.dragSession;e&&!e.committed&&(e.committed=!0,this.restorePlaceholderToOrigin(e),this.cleanupDrag(e),this.dragSession=null)}restorePlaceholderToOrigin(e){let t=[...e.tbody.querySelectorAll(`tr[data-row-id]`)].filter(t=>t!==e.row.element&&!t.hasAttribute(`data-pk-dnd-placeholder`));if(e.fromIndex>=t.length){e.tbody.lastElementChild!==e.placeholder&&e.tbody.append(e.placeholder);return}let n=t[e.fromIndex];n&&e.placeholder.nextElementSibling!==n&&e.tbody.insertBefore(e.placeholder,n)}cleanupDrag(e){for(let t of e.cleanup)t();let t=e.row.element;e.placeholder.replaceWith(t),this.unliftRow(t),e.unfreezeColumns()}freezeTableColumns(e,t){var n;(n=e.querySelector(`:scope > colgroup[data-pk-dnd-cols]`))==null||n.remove();let r=e.ownerDocument.createElement(`colgroup`);r.setAttribute(`data-pk-dnd-cols`,`true`);for(let n of t){let t=e.ownerDocument.createElement(`col`);t.style.width=`${n}px`,r.append(t)}let i=e.style.tableLayout;return e.prepend(r),e.style.tableLayout=`fixed`,()=>{r.remove(),e.style.tableLayout=i}}createPlaceholder(e,t,n){let r=e.cloneNode(!0);return r.setAttribute(`data-pk-dnd-placeholder`,`true`),r.setAttribute(`aria-hidden`,`true`),r.removeAttribute(`data-row-id`),r.style.visibility=`hidden`,r.style.pointerEvents=`none`,r.style.height=`${n}px`,[...r.cells].forEach((e,n)=>{let r=t[n];typeof r==`number`&&(e.style.width=`${r}px`,e.style.minWidth=`${r}px`,e.style.maxWidth=`${r}px`,e.style.boxSizing=`border-box`),e.replaceChildren()}),r}liftRow(e,t,n){e.classList.add(`is-dragging`),[...e.cells].forEach((e,t)=>{let r=n[t];typeof r==`number`&&(e.style.width=`${r}px`,e.style.minWidth=`${r}px`,e.style.maxWidth=`${r}px`,e.style.boxSizing=`border-box`)}),e.style.position=`fixed`,e.style.top=`0px`,e.style.left=`0px`,e.style.width=`${t.width}px`,e.style.height=`${t.height}px`,e.style.margin=`0`,e.style.zIndex=`2147483647`,e.style.pointerEvents=`none`,e.style.boxShadow=`0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`,e.style.background=`var(--pk-color-white, #fff)`,e.style.opacity=`0.96`;let r=e.getBoundingClientRect(),i={x:r.left,y:r.top};return e.style.top=`${t.top-i.y}px`,e.style.left=`${t.left-i.x}px`,i}unliftRow(e){e.classList.remove(`is-dragging`),e.style.position=``,e.style.top=``,e.style.left=``,e.style.width=``,e.style.height=``,e.style.margin=``,e.style.zIndex=``,e.style.pointerEvents=``,e.style.boxShadow=``,e.style.background=``,e.style.opacity=``;for(let t of e.cells)t.style.width=``,t.style.minWidth=``,t.style.maxWidth=``,t.style.boxSizing=``}destroyHandles(){for(let e of this.handleCleanups)e();this.handleCleanups=[]}},Wr,Gr=(Ur.SWAP_INSET=.3,Ur),Kr=t`
    @layer pk-component {
        :host {
            display: block;
            font-family: var(--pk-font-family);
            /* Craft CP body text (~gray-700), not gray-900. */
            color: var(--pk-color-gray-700);
            /* Shell matches v1 Table: border-gray-200 + rounded-md (token md = 4px). */
            --pk-et-border: 1px solid var(--pk-color-gray-200, #e5e7eb);
            --pk-et-radius: var(--pk-radius-md, 4px);
            --pk-et-gridline: var(--pk-color-gray-100, #f3f4f6);
            /* Static row height — matches v1 TableCell h-[34px] (border-box). */
            --pk-et-cell-height: 34px;
            --pk-et-action-size: 24px;
            --pk-et-action-icon: 12px;
            /* Grip reads smaller than ellipsis/x at the same token — nudge up slightly. */
            --pk-et-action-grip-icon: 14px;
        }

        /* v1 Table: shell scrolls horizontally; Add row sits outside so it stays full-width. */
        .et-scroll {
            width: 100%;
            max-width: 100%;
            overflow-x: auto;
            overflow-y: hidden;
            border: var(--pk-et-border);
            border-radius: var(--pk-et-radius) var(--pk-et-radius) 0 0;
            background: var(--pk-color-white, #fff);
        }

        .et {
            /* v1 Table uses w-full: fill the shell, squish toward column width hints /
             * content minima, then overflow-x on .et-scroll takes over. */
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            background: var(--pk-color-white, #fff);
        }

        thead {
            background: var(--pk-color-gray-50, #f8fafc);
        }

        thead th {
            padding: 0.375rem 0.5rem;
            text-align: left;
            font-size: 12px;
            font-weight: 500;
            color: var(--pk-color-gray-700, #374151);
            background: var(--pk-color-gray-50, #f8fafc);
            /* v1 TableHead has no cell borders — body cells own the gridlines. */
            border: 0;
            white-space: nowrap;
        }

        tbody td + td {
            border-inline-start: 1px solid var(--pk-et-gridline);
        }

        thead th.thin,
        tbody td.thin {
            width: 0.01%;
            white-space: nowrap;
        }

        thead th.actions,
        tbody td.actions {
            width: 0.01%;
            white-space: nowrap;
        }

        tbody td.actions {
            padding-inline: 0.25rem;
            /* v1 TableRow actions cell — soft cool wash so controls read as chrome, not data. */
            background: #fbfcfe;
        }

        .required {
            margin-left: 0.125rem;
            color: var(--pk-color-rose-600, #e11d48);
        }

        tbody td {
            box-sizing: border-box;
            padding: 0;
            height: var(--pk-et-cell-height);
            background: var(--pk-color-white, #fff);
            /* v1 TableCell: border-t gray-100 — also separates header once th borders are gone. */
            border-top: 1px solid var(--pk-et-gridline);
            vertical-align: middle;
            /* Match v1 TableCell whitespace-nowrap — drives intrinsic mins before scroll. */
            white-space: nowrap;
            /* Let auto table layout compress past control preferred sizes. */
            min-width: 0;
        }

        tbody tr.is-dragging {
            opacity: 0.4;
        }

        /* Semantic row tones from modifyRow — host Tailwind cannot style shadow <tr>. */
        tbody tr[data-tone='warning'] > td {
            background: color-mix(in srgb, var(--pk-color-amber-50, #fffbeb) 80%, transparent);
        }

        tbody tr[data-tone='muted'] > td {
            background: color-mix(in srgb, var(--pk-color-slate-100, #f1f5f9) 90%, transparent);
        }

        .cell-pk-control {
            display: block;
            width: 100%;
            min-width: 0;
            height: var(--pk-et-cell-height);
            min-height: var(--pk-et-cell-height);
            --pk-input-border-radius: 0;
            --pk-select-border-radius: 0;
            --pk-date-picker-border-radius: 0;
            --pk-input-bg: var(--pk-color-white, #fff);
            --pk-combobox-fill: var(--pk-color-white, #fff);
            --pk-input-height: var(--pk-et-cell-height);
        }

        pk-input.cell-pk-control::part(base) {
            padding-inline: 0.5rem;
            background: var(--pk-color-white, #fff);
        }

        /* v1 EditableTable Input is text-sm (14px); size=xs would be 11px. */
        pk-input.cell-pk-control:not([mono])::part(input) {
            font-size: var(--pk-font-size-base, 14px);
        }

        /* v1 handle/value: font-mono text-[0.9em] — do not let the 14px cell
         * override wipe pk-input[mono]'s optical scale. */
        pk-input.cell-pk-control[mono]::part(input) {
            font-size: calc(var(--pk-font-size-base, 14px) * 0.9);
            line-height: var(--pk-line-height-mono, 1.5);
        }

        /* Select/combobox sit inset horizontally only (v1 TableCell px-2).
         * No block padding — vertical inset comes from the size=xs chip itself. */
        tbody td:has(> pk-select.cell-pk-control),
        tbody td:has(> pk-combobox.cell-pk-control) {
            padding: 0 0.5rem;
        }

        pk-select.cell-pk-control,
        pk-combobox.cell-pk-control {
            display: block;
            width: 100%;
            max-width: 100%;
            min-width: 0;
            /* Override shared .cell-pk-control height so the chip centers in the row. */
            height: auto;
            min-height: 0;
            /* Don't inherit the 34px cell --pk-input-height into the trigger. */
            --pk-input-height: auto;
            --pk-select-item-min-height: 0;
        }

        pk-input.cell-pk-control {
            /* Text-like cells fill the td. Inner input text keeps padding via ::part(base);
             * invalid chrome should hit the gridlines, not sit inside an inset chip. */
            height: var(--pk-et-cell-height);
            min-height: var(--pk-et-cell-height);
        }

        /* Date/time fill the cell flush — no trigger chrome (v1 border-none + h/w-full).
         * display:block so the inline-block host doesn't baseline-shift off center. */
        pk-date-picker.cell-pk-control,
        pk-time-picker.cell-pk-control {
            display: block;
            width: 100%;
            min-width: 0;
            height: var(--pk-et-cell-height);
            --pk-date-picker-height: var(--pk-et-cell-height);
            --pk-date-picker-min-width: 0;
            --pk-select-item-min-height: var(--pk-et-cell-height);
            --pk-select-trigger-border-width: 0;
        }

        /* The base trigger sizes to 100% of the host, but the shared form-control
         * wrappers default to auto height, collapsing that chain and top-aligning
         * the date. Stretch the wrappers so 100% resolves and align-items centers. */
        pk-date-picker.cell-pk-control::part(form-control),
        pk-date-picker.cell-pk-control::part(form-control-input) {
            height: 100%;
        }

        pk-date-picker.cell-pk-control::part(base) {
            width: 100%;
            min-width: 0;
            height: 100%;
            min-height: 100%;
            border: 0;
            border-radius: 0;
            background: transparent;
        }

        pk-date-picker.cell-pk-control::part(base):focus-visible {
            box-shadow: inset 0 0 0 1px var(--pk-color-gray-200, #e5e7eb);
        }

        pk-time-picker.cell-pk-control::part(control) {
            width: 100%;
            min-width: 0;
            height: 100% !important;
            min-height: 100% !important;
            border: 0 !important;
            border-radius: 0 !important;
            background: transparent !important;
            background-color: transparent !important;
        }

        pk-time-picker.cell-pk-control::part(control):focus-visible {
            box-shadow: inset 0 0 0 1px var(--pk-color-gray-200, #e5e7eb);
        }

        td.has-error .cell-pk-control {
            --pk-input-border-color: var(--pk-color-rose-600, #e11d48);
        }

        /* Flush/borderless date/time only — select/combobox/color paint their own
         * invalid chrome via ?invalid, so a host ring would double up. */
        td.has-error pk-date-picker.cell-pk-control,
        td.has-error pk-time-picker.cell-pk-control {
            box-shadow: inset 0 0 0 1px var(--pk-color-rose-600, #e11d48);
        }

        .cell-static {
            padding: 0.5rem;
            font-size: var(--pk-font-size-base, 14px);
            line-height: 1.4;
            color: inherit;
        }

        /* Custom / slotted cells — fill the td; light-DOM content keeps host styles. */
        .cell-slot {
            display: block;
            width: 100%;
            min-width: 0;
            min-height: var(--pk-et-cell-height);
            height: 100%;
        }

        .cell-slot ::slotted(*) {
            display: block;
            width: 100%;
            min-width: 0;
            min-height: var(--pk-et-cell-height);
            box-sizing: border-box;
        }

        .cell-heading {
            font-weight: 600;
            color: var(--pk-color-gray-800, #1f2937);
        }

        .cell-mono {
            font-family: var(--pk-font-family-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace);
            font-size: var(--pk-font-size-mono, 0.9em);
            line-height: var(--pk-line-height-mono, 1.5);
        }

        .cell-check {
            display: flex;
            align-items: center;
            justify-content: center;
            height: var(--pk-et-cell-height);
            min-width: 2.125rem;
        }

        .cell-check--switch {
            min-width: 3rem;
        }

        pk-checkbox,
        pk-radio,
        pk-lightswitch {
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        .row-actions {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            /* v1 packs 24px action buttons flush — no gap between hitboxes. */
            gap: 0;
        }

        .row-actions pk-dropdown-menu {
            display: inline-flex;
        }

        /* Action row buttons: fixed 24px hitbox (v1), variant=none, icon-only color hover. */
        .row-actions pk-button.action-btn {
            --pk-btn-height: var(--pk-et-action-size);
            --pk-btn-icon-size: var(--pk-et-action-icon);
            --pk-btn-padding-inline: 0;
            color: var(--pk-color-gray-500, #6b7280);
            width: var(--pk-et-action-size);
            flex: 0 0 var(--pk-et-action-size);
        }

        .row-actions pk-button.action-btn::part(base) {
            width: var(--pk-et-action-size);
            height: var(--pk-et-action-size);
            min-height: var(--pk-et-action-size);
            padding: 0;
            background: transparent;
        }

        .row-actions pk-button.action-btn::part(base):hover:not(:disabled) {
            /* No hover fill — only the glyph color shifts (v1 hover:bg-transparent). */
            background: transparent;
            color: var(--pk-color-sky-600, #0284c7);
        }

        .row-actions pk-button.action-btn.action-delete::part(base):hover:not(:disabled) {
            background: transparent;
            color: var(--pk-color-rose-500, #f43f5e);
        }

        .row-actions pk-button.action-btn:disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }

        /* Light-DOM handle wrapper (v1) — pointer drag binds here so shadow clicks don't interfere.
           pk-button :host { cursor: pointer } wins over inherited span cursor — set it on the host. */
        .row-actions .action-handle {
            display: inline-flex;
            cursor: move;
        }

        .row-actions .action-handle pk-button.action-btn {
            cursor: move;
            --pk-btn-icon-size: var(--pk-et-action-grip-icon);
        }

        .row-actions .action-handle:has(pk-button:disabled),
        .row-actions .action-handle pk-button.action-btn[disabled] {
            cursor: default;
        }

        /* Before deferred drag binding — grip visible but inactive (v1 faded controls). */
        .row-actions .action-handle.is-pending {
            opacity: 0.45;
        }

        /* Live row is floated as the overlay; placeholder clone holds the gap. */
        tr.is-dragging {
            display: table-row;
        }

        tr[data-pk-dnd-placeholder] {
            visibility: hidden;
            pointer-events: none;
        }

        /* Attach dashed add-row under the table shell (v1 Button variant=dashed). */
        pk-button.add-row {
            display: block;
            width: 100%;
            margin-top: -1px;
            --pk-btn-radius: 0;
        }

        pk-button.add-row::part(base) {
            width: 100%;
            border-top: 0;
            border-radius: 0 0 var(--pk-et-radius) var(--pk-et-radius);
        }

        :host([disabled]) pk-button.add-row {
            opacity: 0.5;
            pointer-events: none;
        }

        .empty {
            padding: 0.75rem 0.625rem;
            color: var(--pk-color-gray-500, #6b7280);
            font-size: 13px;
        }
    }
`,qr=new Set([`text`,`textarea`,`email`,`url`,`heading`,`label`,`handle`,`value`]);function Jr(e,t,n,r){let i=r==null?void 0:r.trim();if(i)return i;for(let n of t){var a;if(!qr.has((a=n.type)==null?`text`:a))continue;let t=e[n.name],r=typeof t==`string`||typeof t==`number`?String(t).trim():``;if(r)return r.length>60?`${r.slice(0,59)}…`:r}return`Row ${n+1}`}var J={EMPTY:`empty`,AUTO:`auto`,MANUAL:`manual`,SEEDED:`seeded`},Yr=e=>(e.type===`handle`||e.type===`value`)&&!!e.name&&!!e.source,Xr=e=>!!(e.thin||e.type===`checkbox`||e.type===`lightswitch`||e.type===`radio`),Zr=e=>e==null||e===``,Qr=(e,t)=>`${e}:${t}`,$r=e=>Array.isArray(e)?e.map(e=>{var t,n,r;return typeof e==`string`?{label:e,value:e}:{label:String((t=(n=e.label)==null?e.value:n)==null?``:t),value:String((r=e.value)==null?``:r)}}):[],ei=e=>e.type===`checkbox`||e.type===`lightswitch`||e.type===`radio`?!1:``,ti=e=>{let t=e.normalize(`NFKD`).replace(/[\u0300-\u036f]/g,``).toLowerCase().replace(/['"'""[\](){}:]/g,``).split(/[^a-z0-9]+/).filter(Boolean);return t.length===0?``:t.map((e,t)=>t===0?e:e.charAt(0).toUpperCase()+e.slice(1)).join(``)},ni=0,ri=()=>(ni+=1,`etr_${Date.now().toString(36)}_${ni}`),ii=(e,t)=>`cell:${e}:${t}`,ai=new Set([`text`,`textarea`,`number`,`email`,`url`,`select`,`combobox`,`checkbox`,`radio`,`lightswitch`,`color`,`date`,`time`,`heading`,`label`,`handle`,`value`,`custom`]),oi=e=>{let t=e.type;return t===`custom`||typeof t==`string`&&!ai.has(t)},si=new Set([`checkbox`,`radio`,`lightswitch`,`heading`,`label`]),ci=new Set([`text`,`number`,`email`,`url`,`handle`,`value`,`color`,`date`,`time`]),li=e=>{var t;return!oi(e)&&ci.has((t=e.type)==null?`text`:t)},ui=e=>{var t;return!oi(e)&&!si.has((t=e.type)==null?`text`:t)},di=e=>String(e==null?``:e).replace(/^[\n\r ]+|[\n\r ]+$/g,``),fi=e=>/[\t\r\n]/.test(e),pi=e=>{let t=di(e);return t?t.split(/\r?\n|\r/).map(e=>e.split(`	`)):[]},mi=g(ie).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),hi=g(le).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),gi=g(de).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),_i=g(oe).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),vi=g(h).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),yi=g(re).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),bi=g(se).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),xi=e=>{if(!e)return``;if(e===`gear`)return bi;let t=ue(e);return t?g(t).replace(`<svg`,`<svg slot="start" aria-hidden="true"`):``},Y=(Wr=class extends O{constructor(...e){super(...e),this.columns=[],this.rows=[],this.allowAdd=!0,this.allowDelete=!0,this.allowReorder=!0,this.allowInsert=!0,this.maxRows=null,this.addRowLabel=``,this.fieldName=``,this.cellErrors={},this.newRowDefaults={},this.modifyColumn=null,this.modifyRow=null,this.getRowMenuItems=null,this.internalRows=[],this.dndReady=!1,this.generatedCellModes=new Map,this.rowNames=new Map,this.dndController=new Gr({onReorderTo:e=>{this.commitReorderByIds(e)}}),this.dndIdleId=null,this.dndTimeoutId=null,this.dndRowSignature=``}static get validators(){return[...super.validators,M()]}willUpdate(t){if(t.has(`rows`)){let t=Array.isArray(this.rows)?this.rows:[],n=this.internalRows;this.internalRows=t.map((t,r)=>{var i;let a=typeof t._id==`string`?t._id:typeof((i=n[r])==null?void 0:i._id)==`string`?String(n[r]._id):ri();return e(e({},t),{},{_id:a})}),this.syncGeneratedModesFromRows(),this.syncFormValue()}(t.has(`allowReorder`)||t.has(`disabled`))&&this.scheduleDndHydration(),super.willUpdate(t)}firstUpdated(e){super.firstUpdated(e),this.scheduleDndHydration()}shouldUpdate(e){return!this.dndController.isSessionActive&&super.shouldUpdate(e)}updated(e){super.updated(e),this.dndReady&&this.allowReorder&&!this.disabled?this.dndController.isSessionActive||this.syncDndSortables():this.dndController.isActive&&(!this.allowReorder||this.disabled||!this.dndReady)&&(this.dndController.destroy(),this.dndRowSignature=``)}disconnectedCallback(){this.cancelDndHydration(),this.dndController.destroy(),this.dndReady=!1,super.disconnectedCallback()}get value(){return this.internalRows.length?JSON.stringify(this.cleanRows()):``}get validColumns(){return(Array.isArray(this.columns)?this.columns:[]).filter(e=>typeof(e==null?void 0:e.name)==`string`&&e.name.trim()!==``)}get generatedColumns(){return this.validColumns.filter(Yr)}get showActionsColumn(){return this.allowReorder||this.allowDelete||this.allowInsert||!!this.getRowMenuItems}cleanRows(){return this.internalRows.map(e=>{let{_id:t}=e;return he(e,Hr)})}setCellValue(e,t,n){let r=this.internalRows[e];if(!r)return;let i=this.validColumns.find(e=>e.name===t);i&&this.updateCell(e,this.resolveColumn(r,i,e),n)}resolveColumn(t,n,r){var i;let a=(i=this.modifyColumn)==null?void 0:i.call(this,t,n.name,n,r);return!a||typeof a!=`object`?n:e(e(e({},n),a),{},{name:n.name})}cellLabel(e,t){var n;let r=(n=e.label)==null?e.name:n,i=this.rowNames.get(t);return i?`${r}, ${i}`:r}resolveRowModifier(e,t){var n;let r=(n=this.modifyRow)==null?void 0:n.call(this,e,t);return!r||typeof r!=`object`?{}:r}resolveRowMenuItems(e,t){var n;let r=(n=this.getRowMenuItems)==null?void 0:n.call(this,e,t);return Array.isArray(r)?r.filter(e=>e&&typeof e.label==`string`):[]}syncGeneratedModesFromRows(){let e=this.generatedColumns;if(this.internalRows.length===0||e.length===0){this.generatedCellModes.clear();return}let t=new Set;for(let n of this.internalRows){let r=String(n._id);for(let i of e){let e=Qr(r,i.name);t.add(e),!this.generatedCellModes.has(e)&&this.generatedCellModes.set(e,Zr(n[i.name])?J.EMPTY:J.SEEDED)}}for(let e of[...this.generatedCellModes.keys()])t.has(e)||this.generatedCellModes.delete(e)}syncFormValue(){let e=JSON.stringify(this.cleanRows());this.setFormValue(e,e)}restoreFormState(e){if(typeof e==`string`)try{let t=JSON.parse(e);Array.isArray(t)&&(this.rows=t)}catch(e){}}stopInnerControlEvent(e){e.target!==this&&e.stopPropagation()}emitChange(){let t=this.internalRows.map(t=>e({},t));this.rows=t,this.syncFormValue(),this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{rows:t},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}emitCellChange(e,t,n,r){this.dispatchEvent(new CustomEvent(`pk-cell-change`,{detail:{rowIndex:e,columnName:t,value:n,row:r},bubbles:!0,composed:!0}))}commitRows(e,t=[]){this.internalRows=e,this.emitChange();for(let e of t)this.emitCellChange(e.rowIndex,e.columnName,e.value,e.row)}updateCell(t,n,r){let i=this.internalRows[t];if(!i)return;if(n.type===`radio`){let a=!!r,o=!!n.allowUnselect,s=this.internalRows.map(t=>e({},t)),c=[];if(a)s.forEach((r,i)=>{let a=i===t;!!r[n.name]!==a&&(s[i]=e(e({},r),{},{[n.name]:a}),c.push({rowIndex:i,columnName:n.name,value:a,row:this.internalRows[i]}))});else if(o&&i[n.name])s[t]=e(e({},i),{},{[n.name]:!1}),c.push({rowIndex:t,columnName:n.name,value:!1,row:i});else return;if(c.length===0)return;this.commitRows(s,c);return}Yr(n)&&this.generatedCellModes.set(Qr(String(i._id),n.name),Zr(r)?J.EMPTY:J.MANUAL);let a={[n.name]:r},o={};for(let e of this.generatedColumns){var s;if(e.source!==n.name)continue;let t=Qr(String(i._id),e.name),a=i[e.name],c=(s=this.generatedCellModes.get(t))==null?Zr(a)?J.EMPTY:J.SEEDED:s;c!==J.MANUAL&&c!==J.SEEDED&&(e.type===`handle`?(o[e.name]=ti(String(r==null?``:r)),this.generatedCellModes.set(t,J.AUTO)):e.type===`value`&&(o[e.name]=r,this.generatedCellModes.set(t,J.AUTO)))}let c=e(e({},a),o);if(!Object.entries(c).some(([e,t])=>i[e]!==t))return;let l=this.internalRows.slice();l[t]=e(e({},i),c);let u=Object.entries(c).map(([e,n])=>({rowIndex:t,columnName:e,value:n,row:i}));this.commitRows(l,u)}canAddRow(e=this.internalRows.length){return!(this.disabled||!this.allowAdd||this.maxRows!=null&&Number.isFinite(this.maxRows)&&e>=this.maxRows)}createEmptyRow(){if(!this.canAddRow())return null;let t=e({_id:ri()},this.newRowDefaults&&typeof this.newRowDefaults==`object`?this.newRowDefaults:{});for(let e of this.validColumns)e.name in t||(t[e.name]=ei(e));return t}addRow(){let e=this.createEmptyRow();e&&(this.internalRows=[...this.internalRows,e],this.syncGeneratedModesFromRows(),this.emitChange())}insertRowAt(e){let t=this.createEmptyRow();if(!t)return;let n=Math.max(0,Math.min(e,this.internalRows.length)),r=this.internalRows.slice();r.splice(n,0,t),this.internalRows=r,this.syncGeneratedModesFromRows(),this.emitChange()}removeRow(e){!this.disabled&&this.allowDelete&&(this.internalRows=this.internalRows.filter((t,n)=>n!==e),this.syncGeneratedModesFromRows(),this.emitChange())}handleTablePaste(e){if(this.disabled||!e.clipboardData)return;let t=di(e.clipboardData.getData(`text/plain`)||e.clipboardData.getData(`Text`)||``);if(!fi(t))return;let n=e.composedPath(),r=null,i=null;for(let e of n)if(e instanceof HTMLTableCellElement&&e.tagName===`TD`&&!e.classList.contains(`actions`)&&(r=e),e instanceof HTMLTableRowElement&&e.dataset.rowId){i=e;break}if(!r||!i)return;let a=this.internalRows.findIndex(e=>String(e._id)===i.dataset.rowId),o=[...i.querySelectorAll(`:scope > td:not(.actions)`)].indexOf(r);if(a<0||o<0)return;let s=this.validColumns[o];s&&li(s)&&(e.preventDefault(),e.stopPropagation(),this.importTsvData(t,a,o))}importTsvData(t,n,r){let i=pi(t);if(i.length===0)return;let a=this.validColumns;if(a.length===0||r>=a.length)return;let o=this.internalRows.map(t=>e({},t)),s=n,c=!1;for(let t=0;t<i.length;t++){var l;if(s>=o.length){if(!this.canAddRow(o.length))break;let t=e({_id:ri()},this.newRowDefaults&&typeof this.newRowDefaults==`object`?this.newRowDefaults:{});for(let e of a)e.name in t||(t[e.name]=ei(e));o.push(t),c=!0}let n=(l=i[t])==null?[]:l,f=o[s];if(!f)break;let p=null;for(let e=0;e<n.length;e++){var u,d;let t=a[r+e];if(!t)break;if(!ui(t))continue;let i=(u=n[e])==null?``:u;f[t.name]!==i&&(p=(d=p)==null?{}:d,p[t.name]=i)}p&&(o[s]=e(e({},f),p),c=!0),s+=1}c&&(this.internalRows=o,this.syncGeneratedModesFromRows(),this.emitChange())}moveRow(e,t){let n=e+t;if(this.disabled||n<0||n>=this.internalRows.length)return;let r=String(this.internalRows[e]._id),i=this.renderRoot.querySelector(`tr[data-row-id="${CSS.escape(r)}"] pk-button[slot="trigger"]`);this.commitReorder(e,n),this.updateComplete.then(()=>{i!=null&&i.isConnected&&i.focus({preventScroll:!0})})}commitReorder(e,t){if(this.disabled||e===t||e<0||t<0||e>=this.internalRows.length||t>=this.internalRows.length)return;let n=this.internalRows.slice(),[r]=n.splice(e,1);n.splice(t,0,r),this.internalRows=n,this.emitChange()}commitReorderByIds(e){if(this.disabled||e.length===0)return;let t=new Map(this.internalRows.map(e=>[String(e._id),e]));if(e.length!==t.size)return;let n=[];for(let r of e){let e=t.get(r);if(!e)return;n.push(e)}n.every((e,t)=>e===this.internalRows[t])||(this.internalRows=n,this.emitChange())}scheduleDndHydration(){if(this.cancelDndHydration(),!this.allowReorder||this.disabled){this.dndReady=!1,this.dndController.destroy();return}if(this.dndReady)return;let e=()=>{this.dndIdleId=null,this.dndTimeoutId=null,this.dndReady=!0};typeof window<`u`&&typeof window.requestIdleCallback==`function`?this.dndIdleId=window.requestIdleCallback(e,{timeout:1200}):this.dndTimeoutId=setTimeout(e,250)}cancelDndHydration(){this.dndIdleId!==null&&typeof window<`u`&&typeof window.cancelIdleCallback==`function`&&(window.cancelIdleCallback(this.dndIdleId),this.dndIdleId=null),this.dndTimeoutId!==null&&(clearTimeout(this.dndTimeoutId),this.dndTimeoutId=null)}syncDndSortables(){if(this.dndController.isSessionActive)return;let e=`${this.internalRows.map(e=>String(e._id)).join(`\0`)}|${this.disabled?`1`:`0`}`;if(e===this.dndRowSignature&&this.dndController.isActive)return;let t=[...this.renderRoot.querySelectorAll(`tr[data-row-id]:not([data-pk-dnd-placeholder])`)];this.dndController.sync(t.map(e=>{var t,n;return{id:(t=e.dataset.rowId)==null?``:t,element:e,handle:(n=e.querySelector(`.action-handle`))==null?void 0:n}}).filter(e=>e.id!==``),this.disabled),this.dndRowSignature=e}getCellErrors(e,t){var n,r;let i=this.fieldName?(n=this.cellErrors)==null?void 0:n[`${this.fieldName}.${e}.${t}`]:void 0,a=(r=this.cellErrors)==null?void 0:r[`${e}.${t}`],o=i==null?a:i;return o?Array.isArray(o)?o.map(String):[String(o)]:[]}readValueFromEvent(e){var t,n;let r=e.detail;return r&&`value`in r?String((t=r.value)==null?``:t):String((n=e.target.value)==null?``:n)}readCheckedFromEvent(e){let t=e.detail;return t&&`checked`in t?!!t.checked:!!e.target.checked}renderOptionElements(e){return $r(e.options).map(e=>s`<pk-option value=${e.value}>${e.label}</pk-option>`)}renderSelectLike(e,t,n,r,{combobox:i=!1}={}){var a,o;let c=String(t==null?``:t);return i?s`<pk-combobox
                class="cell-pk-control"
                size="sm"
                width="full"
                allow-custom-value
                .value=${c}
                placeholder=${(a=e.placeholder)==null?``:a}
                ?disabled=${this.disabled}
                ?invalid=${r}
                aria-label=${this.cellLabel(e,n)}
                @pk-change=${t=>{this.updateCell(n,e,this.readValueFromEvent(t))}}
            >
                ${this.renderOptionElements(e)}
            </pk-combobox>`:s`<pk-select
            class="cell-pk-control"
            size="xxs"
            width="full"
            .value=${c}
            placeholder=${(o=e.placeholder)==null?``:o}
            ?disabled=${this.disabled}
            ?invalid=${r}
            aria-label=${this.cellLabel(e,n)}
            @pk-change=${t=>{this.updateCell(n,e,this.readValueFromEvent(t))}}
        >
            ${this.renderOptionElements(e)}
        </pk-select>`}renderCell(e,t,n,r){var i,o,c,l,u,d;let f=t[e.name],p=(i=e.type)==null?`text`:i,m=t=>{this.updateCell(n,e,this.readValueFromEvent(t))};return oi(e)?s`<div class="cell-slot">
                <slot name=${ii(String(t._id),e.name)}></slot>
            </div>`:p===`heading`?s`<div class="cell-static cell-heading">${String(f==null?``:f)}</div>`:p===`label`?s`<div class="cell-static">${String(f==null?``:f)}</div>`:p===`textarea`?s`<pk-textarea
                class="cell-pk-control"
                fit-cell
                size="sm"
                rows="1"
                .value=${String(f==null?``:f)}
                placeholder=${(o=e.placeholder)==null?a:o}
                ?disabled=${this.disabled}
                ?invalid=${r}
                aria-label=${this.cellLabel(e,n)}
                @input=${m}
            ></pk-textarea>`:p===`date`?s`<pk-date-picker
                class="cell-pk-control"
                size="sm"
                width="full"
                .value=${String(f==null?``:f)}
                placeholder=${(c=e.placeholder)==null?``:c}
                ?disabled=${this.disabled}
                ?invalid=${r}
                aria-label=${this.cellLabel(e,n)}
                @pk-change=${t=>{this.updateCell(n,e,this.readValueFromEvent(t))}}
            ></pk-date-picker>`:p===`time`?s`<pk-time-picker
                class="cell-pk-control"
                size="sm"
                width="full"
                .value=${String(f==null?``:f)}
                placeholder=${(l=e.placeholder)==null?``:l}
                ?disabled=${this.disabled}
                ?invalid=${r}
                aria-label=${this.cellLabel(e,n)}
                @pk-change=${t=>{this.updateCell(n,e,this.readValueFromEvent(t))}}
            ></pk-time-picker>`:p===`number`||p===`email`||p===`url`?s`<pk-input
                class="cell-pk-control"
                fit-cell
                size="xs"
                type=${p}
                .value=${String(f==null?``:f)}
                placeholder=${(u=e.placeholder)==null?a:u}
                ?disabled=${this.disabled}
                ?invalid=${r}
                aria-label=${this.cellLabel(e,n)}
                @input=${m}
            ></pk-input>`:p===`select`?this.renderSelectLike(e,f,n,r):p===`combobox`?this.renderSelectLike(e,f,n,r,{combobox:!0}):p===`checkbox`||p===`radio`?s`<div class="cell-check">
                <pk-checkbox
                    aria-label=${this.cellLabel(e,n)}
                    .checked=${!!f}
                    ?disabled=${this.disabled}
                    ?invalid=${r}
                    @pk-change=${t=>{this.updateCell(n,e,this.readCheckedFromEvent(t))}}
                ></pk-checkbox>
            </div>`:p===`lightswitch`?s`<div class="cell-check cell-check--switch">
                <pk-lightswitch
                    size="sm"
                    aria-label=${this.cellLabel(e,n)}
                    .checked=${!!f}
                    ?disabled=${this.disabled}
                    ?invalid=${r}
                    @pk-change=${t=>{this.updateCell(n,e,this.readCheckedFromEvent(t))}}
                ></pk-lightswitch>
            </div>`:p===`color`?s`<pk-color-input
                class="cell-pk-control"
                fit-cell
                size="xs"
                .value=${String(f==null?``:f)}
                ?disabled=${this.disabled}
                ?invalid=${r}
                aria-label=${this.cellLabel(e,n)}
                @pk-change=${t=>{this.updateCell(n,e,this.readValueFromEvent(t))}}
            ></pk-color-input>`:s`<pk-input
            class="cell-pk-control"
            fit-cell
            size="xs"
            type="text"
            ?mono=${p===`handle`||p===`value`}
            .value=${String(f==null?``:f)}
            placeholder=${(d=e.placeholder)==null?a:d}
            ?disabled=${this.disabled}
            ?invalid=${r}
            aria-label=${this.cellLabel(e,n)}
            @input=${m}
        ></pk-input>`}renderExtraMenuItems(e,t){let n=this.resolveRowMenuItems(e,t);return n.length===0?a:s`${n.map(n=>{var r,i,o,c;let l=xi(n.icon);return s`<pk-dropdown-item
                type=${(r=n.type)==null?`normal`:r}
                value=${(i=(o=n.value)==null?n.action:o)==null?``:i}
                radio-group=${(c=n.radioGroup)==null?a:c}
                ?checked=${!!n.checked}
                ?disabled=${this.disabled||!!n.disabled}
                @pk-select=${()=>{var r,i,a;this.disabled||n.disabled||this.dispatchEvent(new CustomEvent(`pk-row-menu-select`,{detail:{rowIndex:t,row:e,item:n,action:String((r=(i=n.action)==null?n.value:i)==null?``:r),value:String((a=n.value)==null?``:a)},bubbles:!0,composed:!0}))}}
            >
                ${l?C(l):a}
                ${n.label}
            </pk-dropdown-item>`})}`}renderRow(t,n){let r=this.validColumns,i=this.internalRows.length,o=String(t._id),c=this.resolveRowModifier(t,n),l=Jr(t,r,n,c.title);this.rowNames.set(n,l);let u=this.resolveRowMenuItems(t,n),d=this.allowReorder||this.allowInsert||u.length>0,f=this.disabled||!this.canAddRow();return s`<tr
            data-row-id=${o}
            data-tone=${c.tone||a}
            class=${c.class?S(Object.fromEntries(c.class.split(/\s+/).filter(Boolean).map(e=>[e,!0]))):a}
            aria-label=${c.title||a}
        >
            ${r.map(r=>{let i=this.resolveColumn(t,r,n),o=this.getCellErrors(n,r.name),c=i.class||r.class||``;return s`<td
                    class=${S(e({thin:Xr(i),"has-error":o.length>0},c?Object.fromEntries(c.split(/\s+/).filter(Boolean).map(e=>[e,!0])):{}))}
                    style=${i.width||r.width?`width: ${i.width||r.width}`:a}
                >
                    ${this.renderCell(i,t,n,o.length>0)}
                </td>`})}
            ${this.showActionsColumn?s`<td class="actions">
                    <div class="row-actions">
                        ${this.allowReorder?s`
                                <span
                                    class=${S({"action-handle":!0,"is-pending":!this.dndReady})}
                                >
                                    <pk-button
                                        type="button"
                                        class="action-btn"
                                        variant="none"
                                        size="xs"
                                        aria-label=${!this.dndReady&&!this.disabled?`Preparing drag…`:`Reorder ${l}`}
                                        ?disabled=${this.disabled||!this.dndReady}
                                    >${C(mi)}</pk-button>
                                </span>`:a}
                        ${d?s`<pk-dropdown-menu size="sm" placement="bottom-end" side-offset="2">
                                    <pk-button
                                        slot="trigger"
                                        type="button"
                                        class="action-btn"
                                        variant="none"
                                        size="xs"
                                        aria-label=${`Actions for ${l}`}
                                        ?disabled=${this.disabled}
                                    >${C(hi)}</pk-button>
                                    ${this.renderExtraMenuItems(t,n)}
                                    ${this.allowInsert?s`
                                            <pk-dropdown-item
                                                ?disabled=${f}
                                                @pk-select=${()=>{this.insertRowAt(n)}}
                                            >
                                                ${C(yi)}
                                                Insert above
                                            </pk-dropdown-item>
                                            <pk-dropdown-item
                                                ?disabled=${f}
                                                @pk-select=${()=>{this.insertRowAt(n+1)}}
                                            >
                                                ${C(yi)}
                                                Insert below
                                            </pk-dropdown-item>`:a}
                                    ${this.allowReorder?s`
                                            <pk-dropdown-item
                                                ?disabled=${this.disabled||n===0}
                                                @pk-select=${()=>{this.moveRow(n,-1)}}
                                            >
                                                ${C(gi)}
                                                Move up
                                            </pk-dropdown-item>
                                            <pk-dropdown-item
                                                ?disabled=${this.disabled||n===i-1}
                                                @pk-select=${()=>{this.moveRow(n,1)}}
                                            >
                                                ${C(_i)}
                                                Move down
                                            </pk-dropdown-item>`:a}
                                </pk-dropdown-menu>`:a}
                        ${this.allowDelete?s`<pk-button
                                type="button"
                                class="action-btn action-delete"
                                variant="none"
                                size="xs"
                                aria-label=${`Delete ${l}`}
                                ?disabled=${this.disabled}
                                @click=${()=>{this.removeRow(n)}}
                            >${C(vi)}</pk-button>`:a}
                    </div>
                </td>`:a}
        </tr>`}render(){let t=this.validColumns;return s`
            <div
                class="et-scroll"
                @pk-change=${this.stopInnerControlEvent}
                @input=${this.stopInnerControlEvent}
                @change=${this.stopInnerControlEvent}
                @paste=${this.handleTablePaste}
            >
                <table class="et">
                    <thead>
                        <tr>
                            ${t.map(t=>{var n;let r=t.class||``;return s`<th
                                    class=${S(e({thin:Xr(t)},r?Object.fromEntries(r.split(/\s+/).filter(Boolean).map(e=>[e,!0])):{}))}
                                    style=${t.width?`width: ${t.width}`:a}
                                >
                                    ${(n=t.label)==null?t.name:n}
                                    ${t.required?s`<span class="required">*</span>`:a}
                                </th>`})}
                            ${this.showActionsColumn?s`<th class="actions"></th>`:a}
                        </tr>
                    </thead>
                    <tbody>
                        ${Vr(this.internalRows,e=>String(e._id),(e,t)=>this.renderRow(e,t))}
                    </tbody>
                </table>
            </div>
            ${this.allowAdd?s`<pk-button
                    type="button"
                    class="add-row"
                    variant="dashed"
                    ?disabled=${this.disabled}
                    @click=${()=>{this.addRow()}}
                >
                    ${C(yi)}
                    ${this.addRowLabel||`Add row`}
                </pk-button>`:a}
        `}},Wr.styles=Kr,Wr);l([_({attribute:!1})],Y.prototype,`columns`,void 0),l([_({attribute:!1})],Y.prototype,`rows`,void 0),l([_({type:Boolean,reflect:!0,attribute:`allow-add`})],Y.prototype,`allowAdd`,void 0),l([_({type:Boolean,reflect:!0,attribute:`allow-delete`})],Y.prototype,`allowDelete`,void 0),l([_({type:Boolean,reflect:!0,attribute:`allow-reorder`})],Y.prototype,`allowReorder`,void 0),l([_({type:Boolean,reflect:!0,attribute:`allow-insert`})],Y.prototype,`allowInsert`,void 0),l([_({type:Number,attribute:`max-rows`})],Y.prototype,`maxRows`,void 0),l([_({attribute:`add-row-label`})],Y.prototype,`addRowLabel`,void 0),l([_({attribute:`field-name`})],Y.prototype,`fieldName`,void 0),l([_({attribute:!1})],Y.prototype,`cellErrors`,void 0),l([_({attribute:!1})],Y.prototype,`newRowDefaults`,void 0),l([_({attribute:!1})],Y.prototype,`modifyColumn`,void 0),l([_({attribute:!1})],Y.prototype,`modifyRow`,void 0),l([_({attribute:!1})],Y.prototype,`getRowMenuItems`,void 0),l([v()],Y.prototype,`internalRows`,void 0),l([v()],Y.prototype,`dndReady`,void 0),Y=l([d(`pk-editable-table`)],Y);var Si,Ci=[Fe,t`
    ${n}
    @layer pk-component {
        :host {
            display: inline-block;
            position: relative;
            width: fit-content;
            max-width: 100%;
            vertical-align: top;
            color: var(--pk-color-gray-700);
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
            /* The trigger shares the same line box and height scale as Select. */
            --pk-image-browser-trigger-min-height: calc(var(--pk-image-browser-line-height) + var(--pk-image-browser-padding-block) * 2 + 2px);
            --pk-image-browser-padding-block: calc((var(--pk-control-height-default) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-image-browser-padding-inline: 10px;
            --pk-image-browser-padding-inline-end: var(--pk-image-browser-padding-inline);
            --pk-image-browser-font-size: var(--pk-control-font-default);
            --pk-image-browser-line-height: var(--pk-input-control-line-height, 1.25rem);
            --pk-image-browser-glyph-size: 0.875rem;
            --pk-image-browser-caret-size: 0.75rem;
            --pk-image-browser-control-gap: 6px;
            --pk-image-browser-action-padding: 4px;
            --pk-image-browser-radius: var(--pk-radius-lg);
            --pk-image-browser-panel-width: 26.25rem;
            /* Hit target larger than the glyph so the select ring has breathing room. */
            --pk-image-browser-cell-min: 2.25rem;
            --pk-image-browser-glyph-tile: 1.375rem;
            --pk-image-browser-fill: var(--pk-color-slate-250);
            --pk-image-browser-fill-hover: var(--pk-color-slate-300);
        }

        /* Caption under each cell — wider tracks; glyph size stays put. */
        :host([label-mode='inline']) {
            --pk-image-browser-cell-min: 3.75rem;
        }

        :host([size='xxs']) {
            --pk-image-browser-padding-block: calc((var(--pk-control-height-xxs) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-image-browser-padding-inline: 6px;
            --pk-image-browser-padding-inline-end: 8px;
            --pk-image-browser-font-size: var(--pk-control-font-xxs);
            --pk-image-browser-line-height: var(--pk-input-control-line-height, 1.25rem);
            --pk-image-browser-glyph-size: 10px;
            --pk-image-browser-caret-size: 9px;
            --pk-image-browser-radius: var(--pk-radius-sm);
            --pk-image-browser-control-gap: 3px;
            --pk-image-browser-action-padding: 3px;
        }

        :host([size='xs']) {
            --pk-image-browser-padding-block: calc((var(--pk-control-height-xs) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-image-browser-padding-inline: 8px;
            --pk-image-browser-font-size: var(--pk-control-font-xs);
            --pk-image-browser-line-height: var(--pk-input-control-line-height, 1.25rem);
            --pk-image-browser-glyph-size: 11px;
            --pk-image-browser-caret-size: 10px;
            --pk-image-browser-radius: var(--pk-radius-sm);
            --pk-image-browser-control-gap: 4px;
            --pk-image-browser-action-padding: 4px;
        }

        :host([size='sm']) {
            --pk-image-browser-padding-block: calc((var(--pk-control-height-sm) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-image-browser-padding-inline: 10px;
            --pk-image-browser-font-size: var(--pk-control-font-sm);
            --pk-image-browser-glyph-size: 13px;
            --pk-image-browser-caret-size: 11px;
            --pk-image-browser-radius: var(--pk-radius-md);
            --pk-image-browser-control-gap: 5px;
            --pk-image-browser-action-padding: 4px;
        }

        :host([size='lg']) {
            --pk-image-browser-padding-block: calc((var(--pk-control-height-lg) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-image-browser-padding-inline: 12px;
            --pk-image-browser-font-size: var(--pk-control-font-lg);
            --pk-image-browser-glyph-size: 16px;
            --pk-image-browser-caret-size: 13px;
            --pk-image-browser-control-gap: 7px;
            --pk-image-browser-action-padding: 5px;
        }

        :host([size='xl']) {
            --pk-image-browser-padding-block: calc((var(--pk-control-height-xl) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-image-browser-padding-inline: 14px;
            --pk-image-browser-font-size: var(--pk-control-font-xl);
            --pk-image-browser-glyph-size: 18px;
            --pk-image-browser-caret-size: 14px;
            --pk-image-browser-control-gap: 8px;
            --pk-image-browser-action-padding: 6px;
        }

        /* Image mode — roomier photo tiles; captions still opt-in via label-mode="inline". */
        :host([mode='image']) {
            --pk-image-browser-panel-width: 34rem;
            --pk-image-browser-cell-min: 7.5rem;
        }

        :host([mode='image'][label-mode='inline']) {
            /* Captions reclaim a little width; preview stays the hero. */
            --pk-image-browser-cell-min: 6.5rem;
        }

        :host([width='full']) {
            display: block;
            width: 100%;
        }

        :host([width='full']) .control {
            width: 100%;
        }

        .value-input {
            position: absolute;
            width: 1px;
            height: 1px;
            margin: -1px;
            padding: 0;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
            opacity: 0;
            pointer-events: none;
        }

        /* Label, clear and expand spacing follows the trigger size without changing
         * the gallery's separate tile and search controls. */
        .control {
            display: inline-flex;
            align-items: stretch;
            gap: var(--pk-image-browser-control-gap);
            min-width: 12.5rem;
            max-width: 100%;
            height: var(--pk-image-browser-trigger-min-height);
            min-height: var(--pk-image-browser-trigger-min-height);
            margin: 0;
            padding: 0 0 0 var(--pk-image-browser-padding-inline);
            border: 1px solid transparent;
            border-radius: var(--pk-image-browser-radius);
            background: var(--pk-image-browser-fill);
            color: inherit;
            box-sizing: border-box;
            overflow: hidden;
            transition: border-color 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
        }

        .control:hover:not(.is-disabled) {
            background: var(--pk-image-browser-fill-hover);
        }

        .control.is-open:not(.is-disabled) {
            background: var(--pk-image-browser-fill-hover);
        }

        .control:focus-within:not(.is-disabled) {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
            background: var(--pk-color-white);
        }

        :host([invalid]) .control,
        :host(:state(user-invalid)) .control {
            border-color: var(--pk-color-rose-500, #f43f5e);
        }

        .control.is-disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .trigger {
            display: inline-flex;
            align-items: center;
            flex: 1 1 auto;
            min-width: 0;
            margin: 0;
            padding: var(--pk-image-browser-padding-block) 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            color: inherit;
            font: inherit;
            font-size: var(--pk-image-browser-font-size);
            font-weight: 400;
            line-height: var(--pk-image-browser-line-height);
            text-align: left;
            white-space: nowrap;
            cursor: pointer;
            outline: none;
            box-sizing: border-box;
        }

        .trigger:disabled {
            cursor: not-allowed;
        }

        .trigger-main {
            display: inline-flex;
            align-items: center;
            gap: var(--pk-image-browser-control-gap);
            flex: 1 1 auto;
            min-width: 0;
            overflow: hidden;
        }

        .trigger-preview {
            display: inline-flex;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            width: var(--pk-image-browser-glyph-size);
            height: var(--pk-image-browser-glyph-size);
            overflow: hidden;
        }

        .trigger-preview svg,
        .trigger-preview img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .trigger-preview svg {
            fill: currentColor;
        }

        .trigger-label {
            flex: 1 1 auto;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .trigger-label.is-placeholder {
            color: var(--pk-color-gray-500);
        }

        .clear-button,
        .expand-button {
            display: inline-flex;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            align-self: stretch;
            box-sizing: border-box;
            width: calc(var(--pk-image-browser-caret-size) + var(--pk-image-browser-action-padding) * 2);
            margin: 0;
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            color: var(--pk-color-gray-600);
            cursor: pointer;
            outline: none;
        }

        .expand-button {
            /* Match Select's trailing glyph inset; reserve action padding only before it. */
            width: calc(var(--pk-image-browser-caret-size) + var(--pk-image-browser-action-padding) + var(--pk-image-browser-padding-inline-end));
            padding-inline: var(--pk-image-browser-action-padding) var(--pk-image-browser-padding-inline-end);
        }

        .clear-button:hover:not(:disabled),
        .expand-button:hover:not(:disabled) {
            color: var(--pk-color-gray-800);
        }

        .clear-button:disabled,
        .expand-button:disabled {
            cursor: not-allowed;
        }

        .clear-button-icon,
        .expand-button-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            line-height: 0;
            pointer-events: none;
        }

        .clear-button-icon svg,
        .expand-button-icon svg {
            display: block;
            width: var(--pk-image-browser-caret-size);
            height: var(--pk-image-browser-caret-size);
        }

        .panel {
            position: relative;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            width: var(--pk-image-browser-panel-width);
            max-width: min(100vw - 1.5rem, var(--pk-image-browser-panel-width));
            max-height: min(28.75rem, 60vh);
            border-radius: var(--pk-radius-lg);
            background: var(--pk-color-white);
            box-shadow:
                0 0 0 1px rgba(31, 41, 51, 0.1),
                0 5px 20px rgba(31, 41, 51, 0.25);
            overflow: hidden;
        }

        .panel[hidden] {
            display: none !important;
        }

        .panel-search {
            flex: none;
            /* Same inline inset as panel-body so search + grid share one vertical edge. */
            padding: 0.625rem 0.625rem 0.5rem;
            border-bottom: 1px solid var(--pk-color-gray-150, rgba(51, 64, 77, 0.1));
        }

        .panel-input {
            display: block;
            width: 100%;
            box-sizing: border-box;
            margin: 0;
            padding: 0.375rem 0.625rem;
            border: 1px solid var(--pk-color-gray-200, #d4dce4);
            border-radius: var(--pk-input-border-radius, var(--pk-radius-md));
            background: var(--pk-color-white);
            color: var(--pk-color-gray-700);
            font: inherit;
            font-size: var(--pk-font-size-sm, 0.8125rem);
            line-height: 1.25rem;
            outline: none;
        }

        .panel-input:focus {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
        }

        .panel-body {
            flex: 1 1 auto;
            min-height: 0;
            overflow-y: auto;
            /* Match search field inset so the grid lines up with the input. */
            padding: 0.5rem 0.625rem 0.625rem;
        }

        :host([mode='image']) .panel-body {
            padding: 0.5rem 0.625rem 0.625rem;
        }

        .group + .group {
            margin-top: 0.875rem;
        }

        .group-heading {
            display: flex;
            justify-content: space-between;
            gap: 0.5rem;
            margin: 0 0 0.375rem;
            color: var(--pk-color-gray-500);
            font-size: 0.6875rem;
            font-weight: 600;
            letter-spacing: 0.04em;
            line-height: 1.25;
            text-transform: uppercase;
        }

        .group-heading-count {
            font-weight: 400;
            letter-spacing: 0;
            text-transform: none;
        }

        /* Fixed column width (not 1fr) so sparse catalogs stay dense instead of stretching. */
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, var(--pk-image-browser-cell-min));
            gap: 0.375rem;
            justify-content: start;
            /* Don’t stretch short single-line cells to match taller wrapped neighbors in the row. */
            align-items: start;
        }

        :host([mode='image']) .grid {
            grid-template-columns: repeat(auto-fill, minmax(var(--pk-image-browser-cell-min), 1fr));
            gap: 0.375rem;
        }

        .option {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0;
            width: var(--pk-image-browser-cell-min);
            height: var(--pk-image-browser-cell-min);
            margin: 0;
            /* Square hit target; glyph is smaller so the ring doesn’t clip tips. */
            padding: 0;
            border: 1px solid transparent;
            border-radius: var(--pk-radius-sm);
            background: none;
            color: inherit;
            cursor: pointer;
            outline: none;
            overflow: hidden;
        }

        /* With captions, height hugs glyph + label instead of a fixed square. */
        :host([label-mode='inline']) .option {
            justify-content: flex-start;
            gap: 0.125rem;
            height: auto;
            /* Keep glyph + caption inside the inset highlight ring. */
            padding: 0.25rem 0.125rem 0.3125rem;
        }

        :host([mode='image']) .option {
            position: relative;
            width: auto;
            height: auto;
            min-height: 0;
            gap: 0;
            padding: 0;
            overflow: hidden;
            border-radius: var(--pk-radius-md);
        }

        :host([mode='image'][label-mode='inline']) .option {
            gap: 0.375rem;
            padding: 0.375rem 0.375rem 0.5rem;
            overflow: visible;
        }

        .option:hover,
        .option:focus-visible,
        .option.is-highlighted {
            background: var(--pk-color-gray-050, #f3f7fc);
        }

        /* Selected is the durable chrome; highlight/hover share the same ring for keyboard parity. */
        .option.is-selected,
        .option.is-highlighted,
        .option:hover {
            box-shadow: inset 0 0 0 2px var(--pk-color-sky-600);
        }

        /*
         * Flush photo tiles paint over inset box-shadow (descendants sit above it).
         * Overlay the same ring so tooltip/none match inline chrome.
         */
        :host([mode='image']) .option.is-selected,
        :host([mode='image']) .option.is-highlighted,
        :host([mode='image']) .option:hover {
            box-shadow: none;
        }

        :host([mode='image']) .option.is-selected::after,
        :host([mode='image']) .option.is-highlighted::after,
        :host([mode='image']) .option:hover::after {
            content: '';
            position: absolute;
            inset: 0;
            z-index: 1;
            border-radius: inherit;
            box-shadow: inset 0 0 0 2px var(--pk-color-sky-600);
            pointer-events: none;
        }

        .option:focus-visible {
            outline: none;
        }

        .option-preview {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 auto;
            width: var(--pk-image-browser-glyph-tile);
            height: var(--pk-image-browser-glyph-tile);
            margin: 0;
            overflow: hidden;
        }

        :host([mode='image']) .option-preview {
            width: 100%;
            height: auto;
            aspect-ratio: 4 / 3;
            margin: 0;
            border-radius: inherit;
        }

        .option-preview svg,
        .option-preview img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        /* Photo tiles crop to fill — previews, not faithful aspect viewers. */
        :host([mode='image']) .option-preview svg,
        :host([mode='image']) .option-preview img {
            object-fit: cover;
        }

        .option-preview svg {
            fill: currentColor;
        }

        .option-label {
            display: -webkit-box;
            box-sizing: border-box;
            width: 100%;
            max-width: 100%;
            padding-inline: 2px;
            overflow: hidden;
            color: var(--pk-color-gray-700);
            font-size: 0.625rem;
            line-height: 0.75rem;
            text-align: center;
            overflow-wrap: anywhere;
            word-break: break-word;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            line-clamp: 3;
        }

        :host([mode='image']) .option-label {
            display: block;
            color: var(--pk-color-gray-600);
            font-size: 0.6875rem;
            line-height: 1.2;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow-wrap: normal;
            word-break: normal;
            -webkit-line-clamp: unset;
            line-clamp: unset;
        }

        .notice {
            margin: 0.375rem 0;
            color: var(--pk-color-gray-500);
            font-size: var(--pk-font-size-sm, 0.8125rem);
        }

        .notice.is-error {
            color: var(--pk-color-rose-600, #e11d48);
        }

        /* Host-driven catalog warm — spinner only (no loading copy). */
        .loading {
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            min-height: 6rem;
            padding: 1.25rem 0.75rem;
            color: var(--pk-color-gray-500);
        }

        .panel-input:disabled {
            cursor: not-allowed;
            opacity: 0.6;
        }

        /* Host is inert layout chrome; the floating tip lives in pk-popup. */
        .option-tooltip {
            position: absolute;
            width: 0;
            height: 0;
            margin: 0;
            padding: 0;
            overflow: hidden;
            pointer-events: none;
        }
    }
    `],wi=g(y.chevronDown),Ti=g(y.xmark),Ei=96;function Di(e){return/^\s*<svg[\s>]/i.test(e)}var X=(Si=class extends O{constructor(...e){super(...e),this.assumeInteractionOn=[`pk-change`],this.size=`default`,this.mode=`icon`,this.width=`auto`,this.labelMode=`tooltip`,this.invalid=!1,this.readonly=!1,this.value=``,this.defaultValue=``,this.placeholder=`Choose…`,this.searchPlaceholder=`Search…`,this.emptyMessage=`No items match your query.`,this.ariaLabel=null,this.loading=!1,this.withClear=!0,this.items=[],this.groups=[],this.selectedLabel=``,this.selectedPreview=``,this.placement=`bottom-start`,this.sideOffset=4,this.pageSize=Ei,this.open=!1,this.query=``,this.limit=Ei,this.closing=!1,this.panelAnimated=!1,this.highlightedIndex=-1,this.tooltipFor=``,this.tooltipContent=``,this.listboxId=T(`pk-image-browser-listbox`),this.searchId=T(`pk-image-browser-search`),this.closeTimer=null,this.tooltipOpenTimer=null,this.liveRegion=null,this.handleClear=e=>{var t;e.preventDefault(),e.stopPropagation(),!(this.disabled||this.readonly||this.value===``)&&(this.emitChange(``),this.dispatchEvent(new ye),(t=this.triggerElement)==null||t.focus({preventScroll:!0}))},this.togglePanel=e=>{e==null||e.preventDefault(),e==null||e.stopPropagation(),!(this.disabled||this.readonly)&&(this.open||this.closing?this.closePanel(`api`):this.openPanel())},this.handleTriggerKeyDown=e=>{this.disabled||this.readonly||(e.key===`ArrowDown`||e.key===`ArrowUp`||e.key===`Enter`||e.key===` `)&&(e.preventDefault(),!this.open&&!this.closing&&this.openPanel())},this.onDocumentPointerDown=e=>{var t;this.open&&!this.closing&&D(this)&&(we(e,{host:this,anchor:(t=this.controlElement)==null?this.triggerElement:t,panel:this.panelElement})||this.closePanel(`pointer-dismiss`))},this.onDocumentKeyDown=e=>{this.open&&!this.closing&&D(this)&&e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),this.closePanel(`escape`))},this.handleSearchInput=e=>{this.loading||(this.query=e.target.value,this.limit=this.normalizedPageSize(),this.resetHighlightForOpenCatalog(),this.announceResults())},this.handleSearchKeyDown=e=>{if(!(!this.open||this.closing||this.loading))switch(e.key){case`ArrowDown`:case`ArrowUp`:case`ArrowLeft`:case`ArrowRight`:case`Home`:case`End`:e.preventDefault(),e.stopPropagation(),this.moveHighlight(e.key);return;case`Enter`:{e.preventDefault(),e.stopPropagation();let t=this.flatVisibleItems()[this.highlightedIndex];t&&this.selectValue(t.value);return}}},this.handleResultsScroll=()=>{this.clearOptionTooltip();let e=this.panelBody;if(!e||!this.isTruncated()||e.scrollTop+e.clientHeight<e.scrollHeight-200)return;let t=e.scrollTop;this.limit+=this.normalizedPageSize(),this.updateComplete.then(()=>{this.panelBody&&(this.panelBody.scrollTop=t)})},this.handleOptionPointerLeave=e=>{var t,n;let r=e.relatedTarget;r instanceof Node&&(t=this.panelBody)!=null&&t.contains(r)&&(r instanceof Element?r.closest(`.option`):(n=r.parentElement)!=null&&n.closest(`.option`))||(this.resetHighlightToSelected(),this.clearOptionTooltip())}}static get validators(){return[...super.validators,Ie(),M()]}connectedCallback(){super.connectedCallback(),this.limit=this.normalizedPageSize()}disconnectedCallback(){var e;this.teardownDismissListeners(),this.clearCloseTimer(),this.clearTooltipOpenTimer(),(e=this.liveRegion)==null||e.destroy(),this.liveRegion=null,super.disconnectedCallback()}willUpdate(e){e.has(`pageSize`)&&!this.open&&(this.limit=this.normalizedPageSize()),super.willUpdate(e)}updated(e){super.updated(e),e.has(`open`)&&(this.open?this.attachDismissListeners():this.closing||this.teardownDismissListeners()),(e.has(`open`)||e.has(`closing`))&&(this.open||this.closing)&&this.syncPanelPlacement(),this.open&&(e.has(`highlightedIndex`)||e.has(`query`)||e.has(`limit`))&&this.scrollHighlightedIntoView(),this.open&&e.has(`loading`)&&!this.loading&&this.resetHighlightForOpenCatalog()}get validationTarget(){var e;return(e=this.triggerElement)==null?this:e}syncFormValue(){this.setFormValue(this.value,this.value)}resetToDefaultValue(){this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=e)}show(){var e=this;return w(function*(){e.open||e.closing||e.disabled||e.readonly||(yield e.openPanel())})()}hide(e=`api`){var t=this;return w(function*(){t.open&&!t.closing&&(yield t.closePanel(e))})()}optionId(e){return`${this.listboxId}-opt-${e}`}groupHeadingId(e){return`${this.listboxId}-group-${e}`}normalizedPageSize(){return this.pageSize>0?this.pageSize:Ei}resolveGroups(){return this.groups.length>0?this.groups:this.items.length>0?[{name:``,items:this.items}]:[]}findItem(e){if(e===``)return null;for(let t of this.resolveGroups()){let n=t.items.find(t=>t.value===e);if(n)return n}return null}selectedItem(){return this.findItem(this.value)}triggerDisplay(){let e=this.selectedItem();return e?{label:e.label,preview:e.preview,isPlaceholder:!1}:this.value===``?{label:this.placeholder,isPlaceholder:!0}:{label:this.selectedLabel||this.value,preview:this.selectedPreview||void 0,isPlaceholder:!1}}visibleGroups(){let e=this.query.trim().toLowerCase();return this.resolveGroups().reduce((t,n)=>{let r=e===``?n.items:n.items.filter(t=>t.label.toLowerCase().includes(e)||t.value.toLowerCase().includes(e));return r.length===0||t.push({name:n.name,total:r.length,items:r.slice(0,this.limit)}),t},[])}flatVisibleItems(){return this.visibleGroups().flatMap(e=>e.items)}isTruncated(){return this.visibleGroups().some(e=>e.items.length<e.total)}activeDescendantId(){return!this.open||this.highlightedIndex<0?null:this.optionId(this.highlightedIndex)}triggerAccessibleName(){if(this.ariaLabel){let e=this.triggerDisplay();return e.isPlaceholder?this.ariaLabel:`${this.ariaLabel}, ${e.label}`}return this.triggerDisplay().label}announceResults(){if(this.loading)return;let e=this.flatVisibleItems();this.query.trim()&&(this.liveRegion||(this.liveRegion=new De(`polite`)),this.liveRegion.announce(e.length===0?this.emptyMessage:`${e.length} ${e.length===1?`result`:`results`} available`))}resetHighlightForOpenCatalog(){let e=this.flatVisibleItems();this.highlightedIndex=e.length===0?-1:e.findIndex(e=>e.value===this.value)}setHighlightedIndex(e){let t=this.flatVisibleItems();if(t.length===0){this.highlightedIndex=-1;return}let n=Math.max(0,Math.min(e,t.length-1));this.highlightedIndex=n,n>=t.length-4&&this.isTruncated()&&(this.limit+=this.normalizedPageSize())}scrollHighlightedIntoView(){if(this.highlightedIndex<0||!this.panelBody)return;let e=this.renderRoot.querySelector(`#${CSS.escape(this.optionId(this.highlightedIndex))}`);e&&Se(e,this.panelBody,`vertical`,`auto`)}columnCountNear(e){var t;let n=(t=this.renderRoot.querySelector(`#${CSS.escape(this.optionId(e))}`))==null?void 0:t.closest(`.grid`);if(!n)return 1;let r=[...n.querySelectorAll(`.option`)];if(r.length===0)return 1;let i=r[0].offsetTop,a=0;for(let e of r){if(e.offsetTop!==i)break;a+=1}return Math.max(1,a)}moveHighlight(e){let t=this.flatVisibleItems();if(t.length===0){this.highlightedIndex=-1;return}let n=this.highlightedIndex;if(n<0){n=e===`ArrowUp`||e===`ArrowLeft`||e===`End`?t.length-1:0,this.setHighlightedIndex(n);return}let r=this.columnCountNear(n);switch(e){case`ArrowRight`:n=Math.min(n+1,t.length-1);break;case`ArrowLeft`:n=Math.max(n-1,0);break;case`ArrowDown`:n=Math.min(n+r,t.length-1);break;case`ArrowUp`:n=Math.max(n-r,0);break;case`Home`:n=0;break;case`End`:n=t.length-1;break;default:return}this.setHighlightedIndex(n)}emitChange(e){this.value=e,this.syncFormValue(),this.updateValidity(),this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{value:e},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}selectValue(e){if(this.disabled||this.readonly)return;let t=this.value;this.closePanel(`api`),this.query=``,this.limit=this.normalizedPageSize(),this.highlightedIndex=-1,t===e?this.withClear&&t!==``&&(this.emitChange(``),this.dispatchEvent(new ye)):this.emitChange(e)}openPanel(){var e=this;return w(function*(){e.open||e.closing||e.disabled||e.readonly||(e.dispatchEvent(new Le),e.closing=!1,e.panelAnimated=!1,e.query=``,e.limit=e.normalizedPageSize(),e.open=!0,e.resetHighlightForOpenCatalog(),yield e.updateComplete,yield e.syncPanelPlacement(),e.panelAnimated=!0,e.dispatchEvent(new _e),yield e.focusSearchWhenReady(),e.scrollHighlightedIntoView())})()}closePanel(e){var t=this;return w(function*(){var n;if(!t.open||t.closing)return;let r=new pe(e);t.dispatchEvent(r),!r.defaultPrevented&&(t.closing=!0,t.open=!1,t.highlightedIndex=-1,t.clearOptionTooltip(),t.teardownDismissListeners(),(n=t.triggerElement)==null||n.focus({preventScroll:!0}),t.clearCloseTimer(),t.closeTimer=window.setTimeout(()=>{t.closing=!1,t.panelAnimated=!1,t.query=``,t.limit=t.normalizedPageSize(),t.closeTimer=null,t.dispatchEvent(new Re)},100))})()}clearCloseTimer(){this.closeTimer!=null&&(window.clearTimeout(this.closeTimer),this.closeTimer=null)}syncPanelPlacement(){var e=this;return w(function*(){if(!e.popupElement||!e.panelElement)return;me(e.panelElement,e.placement);let t=yield ge(e.popupElement,e.placement,300,{requireEvent:!0});me(e.panelElement,t)})()}attachDismissListeners(){Te(this),document.addEventListener(`pointerdown`,this.onDocumentPointerDown,!0),document.addEventListener(`keydown`,this.onDocumentKeyDown,!0)}teardownDismissListeners(){E(this),document.removeEventListener(`pointerdown`,this.onDocumentPointerDown,!0),document.removeEventListener(`keydown`,this.onDocumentKeyDown,!0)}focusSearchWhenReady(){var e=this;return w(function*(){let t=performance.now();for(;e.open&&performance.now()-t<2e3;){let t=e.searchInput;if(t&&getComputedStyle(t).visibility!==`hidden`&&(t.focus({preventScroll:!0}),document.activeElement===t))return;yield new Promise(e=>requestAnimationFrame(()=>e()))}})()}renderPreview(e,t){return e?Di(e)?s`<span class=${t} aria-hidden="true">${x(e)}</span>`:s`<img class=${t} src=${e} alt="" />`:a}usesInlineLabels(){return this.labelMode===`inline`}usesTooltipLabels(){return this.labelMode===`tooltip`}showOptionTooltip(e,t){if(!this.usesTooltipLabels())return;let n=this.tooltipFor!==``;this.tooltipFor=e,this.tooltipContent=t,this.clearTooltipOpenTimer();let r=()=>{this.tooltipOpenTimer=null,this.updateComplete.then(()=>{var e;(e=this.optionTooltip)==null||e.show()})};n?r():this.tooltipOpenTimer=window.setTimeout(r,280)}clearOptionTooltip(){var e;this.clearTooltipOpenTimer(),this.tooltipFor=``,this.tooltipContent=``,(e=this.optionTooltip)==null||e.hide()}clearTooltipOpenTimer(){this.tooltipOpenTimer!=null&&(window.clearTimeout(this.tooltipOpenTimer),this.tooltipOpenTimer=null)}handleOptionPointerEnter(e,t){this.highlightedIndex=e,this.showOptionTooltip(this.optionId(e),t)}resetHighlightToSelected(){let e=this.flatVisibleItems();if(e.length===0){this.highlightedIndex=-1;return}let t=e.findIndex(e=>e.value===this.value);this.highlightedIndex=t}renderTriggerContents(){let e=this.triggerDisplay();return s`
            <span class="trigger-main">
                ${this.renderPreview(e.preview,`trigger-preview`)}
                <span
                    class=${S({"trigger-label":!0,"is-placeholder":e.isPlaceholder})}
                    aria-hidden="true"
                >${e.label}</span>
            </span>
        `}renderResults(){if(this.loading)return s`
                <div
                    id=${this.listboxId}
                    role="listbox"
                    aria-label=${this.ariaLabel||`Options`}
                    aria-busy="true"
                >
                    <div part="loading" class="loading" role="status" aria-label="Loading">
                        <pk-spinner size="sm" centered></pk-spinner>
                    </div>
                </div>
            `;let e=this.visibleGroups();if(e.length===0)return s`
                <div
                    id=${this.listboxId}
                    role="listbox"
                    aria-label=${this.ariaLabel||`Options`}
                >
                    <p class="notice" part="empty" role="status">${this.emptyMessage}</p>
                </div>
            `;let t=0;return s`
            <div
                id=${this.listboxId}
                role="listbox"
                aria-label=${this.ariaLabel||`Options`}
            >
                ${e.map((e,n)=>{let r=this.groupHeadingId(n),i=t,o=e.items.map((e,n)=>{let r=i+n;t=r+1;let o=e.value===this.value,c=r===this.highlightedIndex;return s`
                            <button
                                type="button"
                                part="option"
                                id=${this.optionId(r)}
                                class=${S({option:!0,"is-highlighted":c,"is-selected":o})}
                                role="option"
                                tabindex="-1"
                                aria-label=${e.label}
                                aria-selected=${o?`true`:`false`}
                                @click=${()=>this.selectValue(e.value)}
                                @mouseenter=${()=>this.handleOptionPointerEnter(r,e.label)}
                                @mouseleave=${this.handleOptionPointerLeave}
                            >
                                ${this.renderPreview(e.preview,`option-preview`)}
                                ${this.usesInlineLabels()?s`<span class="option-label" aria-hidden="true">${e.label}</span>`:a}
                            </button>
                        `});return s`
                        <div
                            class="group"
                            role=${e.name?`group`:a}
                            aria-labelledby=${e.name?r:a}
                        >
                            ${e.name?s`
                                    <h6 class="group-heading" id=${r}>
                                        <span>${e.name}</span>
                                        ${e.items.length<e.total?s`
                                                <span class="group-heading-count">
                                                    Showing ${e.items.length} of ${e.total}
                                                </span>
                                            `:a}
                                    </h6>
                                `:a}
                            <div class="grid">
                                ${o}
                            </div>
                        </div>
                    `})}
            </div>
        `}render(){var e,t;let n=this.withClear&&this.value!==``&&!this.disabled&&!this.readonly,r=this.open||this.closing,i=this.activeDescendantId();return s`
            <input
                class="value-input"
                part="value-input"
                tabindex="-1"
                aria-hidden="true"
                .value=${this.value}
                ?required=${this.required}
                @input=${()=>this.updateValidity()}
            />
            <div
                part="root"
                class=${S({control:!0,"is-disabled":this.disabled||this.readonly,"is-open":this.open})}
            >
                <button
                    type="button"
                    part="trigger"
                    class="trigger"
                    ?disabled=${this.disabled||this.readonly}
                    aria-label=${this.triggerAccessibleName()}
                    aria-haspopup="listbox"
                    aria-expanded=${this.open?`true`:`false`}
                    aria-controls=${this.listboxId}
                    @click=${this.togglePanel}
                    @keydown=${this.handleTriggerKeyDown}
                >
                    ${this.renderTriggerContents()}
                </button>
                ${n?s`
                        <button
                            type="button"
                            part="clear-button"
                            class="clear-button"
                            aria-label="Clear selection"
                            ?disabled=${this.disabled}
                            @click=${this.handleClear}
                        >
                            <span class="clear-button-icon" aria-hidden="true">${x(Ti)}</span>
                        </button>
                    `:a}
                <button
                    type="button"
                    class="expand-button"
                    tabindex="-1"
                    aria-hidden="true"
                    ?disabled=${this.disabled||this.readonly}
                    @click=${this.togglePanel}
                >
                    <span class="expand-button-icon">${x(wi)}</span>
                </button>
            </div>
            <pk-popup
                .active=${r}
                .anchor=${(e=(t=this.controlElement)==null?this.triggerElement:t)==null?``:e}
                .placement=${this.placement}
                .distance=${this.sideOffset}
                flip
                shift
            >
                <div
                    part="panel"
                    class=${S({panel:!0,"pk-popup-content":!0,closing:this.closing})}
                    tabindex="-1"
                    ?hidden=${!r}
                    data-open=${this.panelAnimated&&!this.closing?``:a}
                >
                    <div part="panel-search" class="panel-search">
                        <input
                            part="panel-input"
                            class="panel-input"
                            id=${this.searchId}
                            type="text"
                            role="combobox"
                            .value=${this.query}
                            placeholder=${this.searchPlaceholder}
                            aria-label=${this.searchPlaceholder}
                            aria-autocomplete="list"
                            aria-expanded=${this.open?`true`:`false`}
                            aria-controls=${this.listboxId}
                            aria-activedescendant=${i==null?a:i}
                            ?disabled=${this.loading}
                            @input=${this.handleSearchInput}
                            @keydown=${this.handleSearchKeyDown}
                        />
                    </div>
                    <div
                        part="panel-body"
                        class="panel-body"
                        @scroll=${this.handleResultsScroll}
                    >
                        ${this.renderResults()}
                    </div>
                    ${this.usesTooltipLabels()&&r?s`
                            <pk-tooltip
                                class="option-tooltip"
                                for=${this.tooltipFor}
                                content=${this.tooltipContent}
                                placement="top"
                                trigger="manual"
                            ></pk-tooltip>
                        `:a}
                </div>
            </pk-popup>
        `}},Si.styles=Ci,Si);l([_({reflect:!0})],X.prototype,`size`,void 0),l([_({reflect:!0})],X.prototype,`mode`,void 0),l([_({reflect:!0})],X.prototype,`width`,void 0),l([_({reflect:!0,attribute:`label-mode`})],X.prototype,`labelMode`,void 0),l([_({type:Boolean,reflect:!0})],X.prototype,`invalid`,void 0),l([_({type:Boolean,reflect:!0})],X.prototype,`readonly`,void 0),l([_()],X.prototype,`value`,void 0),l([_({attribute:`default-value`})],X.prototype,`defaultValue`,void 0),l([_()],X.prototype,`placeholder`,void 0),l([_({attribute:`search-placeholder`})],X.prototype,`searchPlaceholder`,void 0),l([_({attribute:`empty-message`})],X.prototype,`emptyMessage`,void 0),l([_({attribute:`aria-label`})],X.prototype,`ariaLabel`,void 0),l([_({type:Boolean,reflect:!0})],X.prototype,`loading`,void 0),l([_({type:Boolean,reflect:!0,attribute:`with-clear`})],X.prototype,`withClear`,void 0),l([_({attribute:!1})],X.prototype,`items`,void 0),l([_({attribute:!1})],X.prototype,`groups`,void 0),l([_({attribute:`selected-label`})],X.prototype,`selectedLabel`,void 0),l([_({attribute:`selected-preview`})],X.prototype,`selectedPreview`,void 0),l([_({reflect:!0})],X.prototype,`placement`,void 0),l([_({type:Number,attribute:`side-offset`})],X.prototype,`sideOffset`,void 0),l([_({type:Number,attribute:`page-size`})],X.prototype,`pageSize`,void 0),l([_({type:Boolean,reflect:!0})],X.prototype,`open`,void 0),l([v()],X.prototype,`query`,void 0),l([v()],X.prototype,`limit`,void 0),l([v()],X.prototype,`closing`,void 0),l([v()],X.prototype,`panelAnimated`,void 0),l([v()],X.prototype,`highlightedIndex`,void 0),l([v()],X.prototype,`tooltipFor`,void 0),l([v()],X.prototype,`tooltipContent`,void 0),l([u(`.value-input`)],X.prototype,`input`,void 0),l([u(`.trigger`)],X.prototype,`triggerElement`,void 0),l([u(`.control`)],X.prototype,`controlElement`,void 0),l([u(`pk-popup`)],X.prototype,`popupElement`,void 0),l([u(`.panel`)],X.prototype,`panelElement`,void 0),l([u(`.panel-input`)],X.prototype,`searchInput`,void 0),l([u(`.panel-body`)],X.prototype,`panelBody`,void 0),l([u(`.option-tooltip`)],X.prototype,`optionTooltip`,void 0),X=l([d(`pk-image-browser`)],X);function Oi(e,t){if(e.disabled)return;let n=Craft.createElementSelectorModal(`craft\\elements\\Asset`,{criteria:{kind:`image`},multiSelect:!1,closeOtherModals:!1,triggerElement:e,onSelect:function(){var n=w(function*(n){if(n.length&&e.isConnected){e.disabled=!0;try{let{data:r}=yield Craft.sendActionRequest(`POST`,`buttonbox/option-sets/asset-image`,{data:{id:n[0].id}});e.isConnected&&t(r.url)}catch(e){var r;Craft.cp.displayError(((r=e.response)==null||(r=r.data)==null?void 0:r.message)||Craft.t(`buttonbox`,`Image unavailable. Choose an image with a public URL.`))}finally{e.disabled=!1}}});return function(e){return n.apply(this,arguments)}}(),onHide:()=>n.destroy()})}function ki(t){var n,r,i,a,o,s,c,l,u,d,f,p,m,h;let g=t.surface||{};return e(e({},t),{},{visualType:(n=t.visualType)==null?t.imageUrl?`image`:t.icon?`icon`:(r=(i=g.mode)==null?t.surfaceMode:i)==null?t.color?`solid`:``:r:n,surfaceValue:(a=(o=(s=(c=(l=(u=t.surfaceValue)==null?g.value:u)==null?g.from:l)==null?g.radius:c)==null?g.size:s)==null?t.color:o)==null?``:a,surfaceSecondary:(d=(f=(p=t.surfaceSecondary)==null?g.to:p)==null?g.aspectRatio:f)==null?``:d,surfaceAngle:(m=(h=t.surfaceAngle)==null?g.angle:h)==null?135:m})}function Ai(e){let t=String(e||``).replace(/^#/,``);return/^[0-9a-f]{3}$/i.test(t)?`#`+[...t].map(e=>e+e).join(``):/^[0-9a-f]{6}$/i.test(t)?`#`+t:null}function ji(e){let t=ki(e),n={};for(let e of[`label`,`value`,`description`,`visualType`,`icon`,`imageUrl`,`imageAlt`,`surfaceValue`,`surfaceSecondary`,`surfaceAngle`,`category`,`explanation`]){var r;n[e]=(r=t[e])==null?``:r}return n.default=!!t.default,n.disabled=!!t.disabled,n}var Mi=[`solid`,`split`,`gradient`,`foregroundBackground`];function Ni(e,t){if(e.visualType===t)return{};let n={visualType:t};if(Mi.includes(t)){var r;n.surfaceValue=Mi.includes(e.visualType)&&Ai(e.surfaceValue)?e.surfaceValue:`#64748b`,t!==`solid`&&(n.surfaceSecondary=Mi.includes(e.visualType)&&Ai(e.surfaceSecondary)?e.surfaceSecondary:`#2563eb`),n.surfaceAngle=e.surfaceAngle===``||(r=e.surfaceAngle)==null?135:r}else t===`width`?n.surfaceValue=`50`:t===`text`?n.surfaceValue=`16`:t===`ratio`?n.surfaceValue=`1:1`:t===`shape`&&Object.assign(n,Pi(`square`));return n}function Pi(e){return{square:{surfaceValue:`0`,surfaceSecondary:`1:1`},rounded:{surfaceValue:`8`,surfaceSecondary:``},pill:{surfaceValue:`999`,surfaceSecondary:``},circle:{surfaceValue:`999`,surfaceSecondary:`1:1`}}[e]||{}}function Fi(e){return[`square`,`rounded`,`pill`,`circle`].find(t=>{let n=Pi(t);return String(e.surfaceValue)===n.surfaceValue&&String(e.surfaceSecondary||``)===n.surfaceSecondary})||`custom`}var Z=e=>Craft.t(`buttonbox`,e),Ii=[`image`,`shape`,`split`,`gradient`,`foregroundBackground`],Li=new Map;function Ri(e){if(!Li.has(e)){let t=e===`icon`?Promise.all([Craft.sendActionRequest(`POST`,`app/icon-picker-options`,{data:{search:``}}),Craft.sendActionRequest(`POST`,`buttonbox/option-sets/icons`)]).then(([e,t])=>{let n=document.createElement(`template`);n.innerHTML=e.data.listHtml;let r=[...n.content.querySelectorAll(`button`)].map(e=>({value:e.getAttribute(`title`),label:e.getAttribute(`aria-label`),preview:e.innerHTML}));return[{name:t.data.presetLabel,items:t.data.presetItems},{name:Z(`Custom icons`),items:t.data.items},{name:Z(`Craft icons`),items:r}]}):Craft.sendActionRequest(`POST`,`buttonbox/option-sets/images`).then(({data:e})=>e.groups);Li.set(e,t.catch(t=>{throw Li.delete(e),t}))}return Li.get(e)}var zi=class{constructor(t,n,r){this.$container=t,this.table=t.find(`[data-bb-table]`)[0],this.$values=t.find(`[data-bb-option-values]`),this.name=t.find(`[data-bb-options-name]`).attr(`name`),this.template=t.find(`[data-bb-row-template]`).html(),this.onChange=r,this.width=!!n.width,this.position=!!(n.position||n.width),this.cells=new Map,this.rows=[],this.table.columns=[{name:`label`,label:Z(`Label`),type:`text`},{name:`value`,label:Z(`Value`),type:`value`},...this.width?[{name:`percentage`,label:Z(`Width (%)`),type:`custom`,thin:!0}]:[],...this.position?[]:[{name:`visual`,label:Z(`Type`),type:`custom`,thin:!0}],{name:`default`,label:Z(`Default`),type:n.multi?`checkbox`:`radio`,allowUnselect:!0}],this.table.newRowDefaults=ji({}),this.table.modifyRow=e=>({title:String(e.label||Z(`Option`)),tone:e.disabled?`muted`:void 0}),this.table.getRowMenuItems=()=>[{label:Z(`Edit option…`),icon:`gear`,action:`edit`}],this.handleRowMenu=e=>{let t=this.cells.get(e.detail.row._id);t&&e.detail.action===`edit`&&this.openOption(t)},this.table.addEventListener(`pk-row-menu-select`,this.handleRowMenu),this.handleTableChange=t=>{var n;if(t.target===this.table&&Array.isArray((n=t.detail)==null?void 0:n.rows)){if(this.rows=t.detail.rows,this.position&&this.rows.some(e=>e.default&&e.disabled)){this.rows=this.rows.map(t=>t.default?e(e({},t),{},{disabled:!1}):t),this.table.rows=this.rows;for(let e of this.rows){let t=this.cells.get(e._id);t&&this.updateVisual(t,e)}}this.syncCells(),this.changed()}},this.table.addEventListener(`pk-change`,this.handleTableChange),this.replaceRows(n.rows||[])}readRows(){return this.rows.map(t=>{var n;return this.position?e({label:String(t.label||``),value:String(t.value||``),default:!!t.default,disabled:!!t.disabled,explanation:String(t.explanation||``)},this.width?{percentage:(n=t.percentage)==null?``:n}:{}):ji(t)})}replaceRows(t){if(this.rows.length){let e=this.table,t=e.cloneNode(!1);t.columns=e.columns,t.newRowDefaults=e.newRowDefaults,t.modifyRow=e.modifyRow,t.getRowMenuItems=e.getRowMenuItems,e.removeEventListener(`pk-row-menu-select`,this.handleRowMenu),e.removeEventListener(`pk-change`,this.handleTableChange);for(let e of this.cells.values())this.disposeCell(e);this.cells.clear(),e.replaceWith(t),this.table=t,this.table.addEventListener(`pk-change`,this.handleTableChange),this.table.addEventListener(`pk-row-menu-select`,this.handleRowMenu)}this.rows=t.map(t=>{var n;return e(e(e({},ji(t)),this.width?{percentage:(n=t.percentage)==null?``:n}:{}),{},{_id:ri()})}),this.table.rows=this.rows,this.syncCells(),this.syncSubmission()}syncCells(){let e=new Set(this.rows.map(e=>e._id));for(let[t,n]of this.cells)e.has(t)||(this.disposeCell(n),this.cells.delete(t));for(let e of this.rows)this.cells.has(e._id)||this.createCell(e)}createCell(e){let t=$(this.template.replaceAll(`__ROW__`,e._id)),n={id:e._id,$visual:t.filter(`[data-bb-visual-cell]`),$visualSettings:t.find(`[data-bb-visual-settings]`),$details:t.filter(`[data-bb-details-content]`),dialog:null,catalogTypes:new Set};n.$controls=n.$visual.add(n.$details),n.$controls.find(`[name], [data-bb-key]`).each((t,n)=>{var r,i;let a=n.dataset.bbKey||((r=n.name.match(/\[([^\]]+)\]$/))==null?void 0:r[1]);n.dataset.bbKey=a,n.removeAttribute(`name`),n.type===`checkbox`||n.localName===`pk-checkbox`?n.checked=!!e[a]:n.value=(i=e[a])==null?``:i}),n.$visual.attr(`slot`,ii(e._id,this.width?`percentage`:`visual`)).appendTo(this.table),this.cells.set(e._id,n),n.$controls.on(`input.buttonbox change.buttonbox`,e=>{let t=e.target;if(t.localName===`pk-checkbox`&&e.type!==`change`)return;let r=this.rows.find(e=>e._id===n.id);if(!r)return;if(t.hasAttribute(`data-bb-direction`)){n.customDirection=t.value===`custom`,n.customDirection?this.updateVisual(n,r):this.writeCell(n,{surfaceAngle:t.value});return}if(t.hasAttribute(`data-bb-shape`)){t.value===`custom`?this.openOption(n):this.writeCell(n,Pi(t.value));return}if(t.dataset.bbRatio){let e={};n.$visual.find(`[data-bb-ratio]`).each((t,n)=>{e[n.dataset.bbRatio]=n.value}),this.writeCell(n,{surfaceValue:`${e.width}:${e.height}`});return}let i=t.dataset.bbKey;if(!i)return;let a=t.localName===`pk-checkbox`?t.checked:t.value;this.writeCell(n,i===`visualType`?Ni(r,a):{[i]:a})}),n.$controls.on(`click.buttonbox`,`[data-bb-swap-colours]`,()=>{let e=this.rows.find(e=>e._id===n.id);e&&this.writeCell(n,{surfaceValue:e.surfaceSecondary,surfaceSecondary:e.surfaceValue})}),n.$controls.on(`click.buttonbox`,`[data-bb-asset-image]`,e=>{Oi(e.currentTarget,e=>{this.cells.has(n.id)&&this.writeCell(n,{imageUrl:e})})}),this.updateVisual(n,e)}populateBrowser(e,t){var n=this;return w(function*(){if(e.catalogTypes.has(t))return;e.catalogTypes.add(t);let r=e.$visual.find(`pk-image-browser[mode="${t}"]`)[0];r.loading=!0;try{let i=yield Ri(t);if(!n.cells.has(e.id))return;r.groups=i.filter(e=>e.items.length),e.$visual.find(`[data-bb-catalog-error]`).prop(`hidden`,!0)}catch(r){e.catalogTypes.delete(t),n.cells.has(e.id)&&e.$visual.find(`[data-bb-catalog-error]`).text(Z(`Gallery unavailable. Change the visual type to retry.`)).prop(`hidden`,!1)}finally{r.loading=!1}})()}writeCell(t,n){this.position&&n.disabled&&(n.default=!1),this.rows=this.rows.map(r=>r._id===t.id?e(e({},r),n):r),this.table.rows=this.rows;let r=this.rows.find(e=>e._id===t.id);r&&this.updateVisual(t,r),this.changed()}updateVisual(e,t){let n=t.visualType||``;e.$visualSettings.prop(`hidden`,!Ii.includes(n)),e.$controls.find(`[data-bb-visual]`).each((e,t)=>{t.hidden=!t.dataset.bbVisual.split(` `).includes(n)}),e.$controls.find(`[data-bb-key]`).each((e,n)=>{var r;let i=(r=t[n.dataset.bbKey])==null?``:r;n.localName===`pk-checkbox`?n.checked=!!i:String(n.value)!==String(i)&&(n.value=String(i))});let r=Number(t.surfaceAngle),i=e.customDirection||![0,45,90,135,180,225,270,315].includes(r),a=e.$visualSettings.find(`[data-bb-direction]`)[0];a&&(a.value=i?`custom`:String(r)),e.$visualSettings.find(`[data-bb-custom-angle]`).prop(`hidden`,!i),e.$details.find(`[data-bb-disabled-details]`).prop(`hidden`,!t.disabled),e.$controls.find(`pk-input, pk-color-input, pk-select, pk-image-browser`).each((e,t)=>{t.disabled=!!t.closest(`[data-bb-visual][hidden], [data-bb-disabled-details][hidden], [data-bb-custom-angle][hidden]`)});let o=String(t.surfaceValue||``).split(`:`);e.$visual.find(`[data-bb-ratio]`).each((e,t)=>{t.value=o[e]||``});let s=e.$visual.find(`[data-bb-shape]`)[0];s&&(s.value=Fi(t));let c=n===`foregroundBackground`;if(e.$visual.find(`pk-color-input[data-bb-key=surfaceValue]`).attr(`aria-label`,Z(c?`Foreground colour`:`Colour`)),e.$visual.find(`pk-color-input[data-bb-key=surfaceSecondary]`).attr(`aria-label`,Z(c?`Background colour`:`Second colour`)),n===`icon`||n===`image`){let r=e.$visual.find(`pk-image-browser[mode="${n}"]`)[0];r.selectedLabel=String(n===`icon`?t.icon||``:t.label||Z(`Image`)),r.selectedPreview=n===`image`&&/^(https?:|\/)/.test(t.imageUrl||``)?t.imageUrl:``,this.populateBrowser(e,n)}}openOption(e){var t=this;return w(function*(){if(!e.dialog){let t=document.createElement(`pk-dialog`);t.className=`buttonbox-option-dialog`;let n=document.createElement(`button`);n.type=`button`,n.className=`btn submit`,n.slot=`footer`,n.textContent=Craft.t(`app`,`Done`),n.addEventListener(`click`,()=>t.hide(`api`)),t.append(e.$details[0],n),document.body.append(t),e.dialog=t}let n=e.dialog,r=t.rows.find(t=>t._id===e.id);n.label=Z(`Edit option: {label}`).replace(`{label}`,(r==null?void 0:r.label)||Z(`Option`)),yield n.updateComplete,n.isConnected&&!n.open&&(yield n.show())})()}syncSubmission(){let e=document.createDocumentFragment();this.readRows().forEach((t,n)=>{Object.entries(t).forEach(([t,r])=>{let i=document.createElement(`input`);i.type=`hidden`,i.name=`${this.name}[${n}][${t}]`,i.value=typeof r==`boolean`?r?`1`:``:String(r==null?``:r),e.append(i)})}),this.$values.empty().append(e)}changed(){this.syncSubmission(),this.onChange()}disposeCell(e){var t;(t=e.dialog)==null||t.remove(),e.$controls.off(`.buttonbox`),e.$controls.remove()}destroy(){this.table.removeEventListener(`pk-row-menu-select`,this.handleRowMenu),this.table.removeEventListener(`pk-change`,this.handleTableChange);for(let e of this.cells.values())this.disposeCell(e);this.cells.clear()}};Craft.ButtonBoxVisualSettings=Garnish.Base.extend({init:function(e){if(this.$container=$(`#`+e),!this.$container.length||this.$container.data(`buttonboxSettings`))return;this.$container.data(`buttonboxSettings`,this);let t=Ge(this.$container);this.config=this.$container.data(`config`),this.request=0,this.previewSelection={},this.timer=null,this.presetDialog=null,this.applyingPreset=!1,this.$container.find(`[data-bb-action="customise-set"]`).length&&this.addListener($(document),`buttonboxOptionSetSaved`,e=>this.refreshSet(e.optionSet)),this.addListener(this.$container,`click`,e=>this.handleClick(e)),this.addListener(this.$container,`change input`,e=>this.handleChange(e)),this.initAppearance(),this.optionTable=new zi(this.$container,this.config,()=>this.schedulePreview()),this.updateSource(),this.updatePresentation(),this.schedulePreview(),t(),this.observer=new MutationObserver(()=>{this.$container[0].isConnected||this.destroy()}),this.observer.observe(document.body,{childList:!0,subtree:!0})},source:function(){return this.$container.find(`select[name$="[optionSource]"], select[name="optionSource"]`).val()||`local`},presentation:function(){return this.$container.find(`input[name$="[presentation]"]:checked, input[name="presentation"]:checked`).val()||`segmented`},control:function(e){return this.$container.find(`[name="`+e+`"], [name$="[`+e+`]"]`)},readRows:function(){return this.optionTable.readRows()},replaceRows:function(e){this.optionTable.replaceRows(e)},updateSource:function(){var e;let t=this.source();this.$container.find(`[data-source]`).each((e,n)=>{n.hidden=n.dataset.source!==t});let n=this.control(`projectSet`).val(),r=!!this.config.sets[n],i=r&&this.config.canManageSets&&((e=this.config.editableSetUids)==null?void 0:e.includes(n));this.$container.find(`[data-bb-set-customise]`).toggleClass(`hidden`,!r),this.$container.find(`[data-bb-action="edit-set"]`).prop(`disabled`,!i).toggleClass(`hidden`,!i)},openSet:function(e,t){if(!this.config.canManageSets||e&&!this.config.editableSetUids.includes(e)||this.setSlideout)return;let n=new Craft.CpScreenSlideout(`buttonbox/option-sets/edit`,{params:e?{uid:e}:{}});this.setSlideout=n,n.on(`submit`,e=>{var t;let n=(t=e.response)==null||(t=t.data)==null?void 0:t.optionSet;n!=null&&n.uid&&($(document).trigger({type:`buttonboxOptionSetSaved`,optionSet:n}),this.control(`projectSet`).val(n.uid).trigger(`change`))}),n.on(`close`,()=>{this.setSlideout=null,t.isConnected&&t.focus()})},refreshSet:function(e){this.config.sets[e.uid]=e,this.config.editableSetUids.includes(e.uid)||this.config.editableSetUids.push(e.uid);let t=this.control(`projectSet`)[0],n=[...t.options].find(t=>t.value===e.uid);n||(n=document.createElement(`option`),n.value=e.uid,t.append(n)),n.textContent=e.label,this.updateSource(),this.schedulePreview()},customiseSet:function(){let e=this.config.sets[this.control(`projectSet`).val()];e&&(this.replaceRows(e.options),this.control(`optionSource`).val(`local`),this.control(`projectSet`).val(``),this.control(`optionSource`).trigger(`change`),this.control(`optionSource`).trigger(`focus`))},updatePresentation:function(){this.$container.find(`[data-bb-columns]`).prop(`hidden`,![`tile`,`card`].includes(this.presentation()))},initAppearance:function(){this.appearanceTable=this.$container.find(`[data-bb-appearance-table]`)[0],this.appearanceTable.allowAdd=!1,this.appearanceTable.allowInsert=!1,this.appearanceTable.allowDelete=!1,this.appearanceTable.allowReorder=!1,this.appearanceTable.columns=[{name:`label`,label:Craft.t(`buttonbox`,`Setting`),type:`custom`,thin:!0},{name:`control`,label:Craft.t(`buttonbox`,`Value`),type:`custom`}],this.appearanceRows=[...this.appearanceTable.querySelectorAll(`[data-bb-appearance-row]`)].map(e=>{let t={_id:e.dataset.bbAppearanceRow,group:e.dataset.bbAppearanceGroup};for(let n of[`label`,`control`]){let r=e.querySelector(`[data-bb-appearance-`+n+`]`);r.slot=ii(t._id,n),this.appearanceTable.append(r),n===`control`&&this.addListener($(r),`input change`,()=>this.schedulePreview())}return e.remove(),t})},updateAppearance:function(){var e;let t=this.source(),n=t===`projectSet`?((e=this.config.sets[this.control(`projectSet`).val()])==null?void 0:e.options)||[]:this.readRows(),r=t===`provider`||n.some(e=>e.visualType===`image`||!e.visualType&&e.imageUrl),i=this.presentation()===`dropdown`,a=this.appearanceRows.filter(e=>i&&[`showLabels`,`labelTooltips`,`showClearButton`,`imageSize`,`imageFit`].includes(e._id)&&this.appearanceTable.dataset.appearanceErrors!==`1`&&this.appearanceTable.dataset.imageErrors!==`1`?!1:e.group!==`image`||r||this.appearanceTable.dataset.imageErrors===`1`),o=a.map(e=>e._id).join(`,`);o!==this.appearanceRowKeys&&(this.appearanceTable.rows=a,this.appearanceRowKeys=o),this.$container.find(`[data-bb-appearance]`).prop(`hidden`,a.length===0),this.updateAppearanceSummary(r)},updateAppearanceSummary:function(e){var t;let n=this.$container.find(`[data-bb-appearance-summary]`)[0],r=JSON.parse(n.dataset.labels),i=this.appearance(),a=[];if(this.presentation()!==`dropdown`&&i.showLabels===`0`&&a.push(r.labels),this.presentation()!==`dropdown`&&i.labelTooltips===`1`&&a.push(r.tooltips),this.presentation()!==`dropdown`&&(t=this.$container.find(`[data-bb-show-clear]`)[0])!=null&&t.checked&&a.push(r.clearButton),i.size&&i.size!=="default"){let e=[...this.$container.find(`[data-bb-appearance-key="size"] pk-option`)].find(e=>e.value===i.size);e&&a.push(e.textContent.trim())}[`textColor`,`backgroundColor`,`borderColor`,`selectionColor`].some(e=>i[e])&&a.push(r.colours),[`borderWidth`,`radius`].some(e=>i[e]!==``)&&a.push(r.borders),this.presentation()!==`dropdown`&&e&&(this.control(`imageSize`).val()!==`auto`||this.control(`imageFit`).val()!==`cover`)&&a.push(r.images),n.textContent=a.length?a.join(` · `):r.default},appearance:function(){let e={};return this.$container.find(`[data-bb-appearance-key]`).each((t,n)=>{e[n.dataset.bbAppearanceKey]=n.localName===`pk-lightswitch`?n.checked?`1`:`0`:n.value}),e},setPresentation:function(e){this.control(`presentation`).each((t,n)=>{n.checked=n.value===e}),this.updatePresentation()},openPresets:w(function*(){var e=this;if(!this.presetDialog){let t=$(this.$container.find(`[data-bb-presets-template]`).html()).appendTo(document.body);t.find(`.buttonbox-preset-card__preview input`).remove(),this.presetDialog=t[0],this.addListener(t.find(`[data-bb-choose-preset]`),`click`,function(){var t=w(function*(t){let n=e.config.presets[$(t.currentTarget).attr(`data-bb-choose-preset`)];if(n&&!e.applyingPreset){e.applyingPreset=!0;try{e.replaceRows(n.options),e.setPresentation(n.presentation),Ue(e.$container[0],n,[`columns`,`iconSize`,`imageSize`,`imageFit`]),e.schedulePreview(),yield e.presetDialog.hide(`api`)}finally{e.applyingPreset=!1}}});return function(e){return t.apply(this,arguments)}}())}let t=this.readRows().length===0;$(this.presetDialog).find(`[data-bb-preset-help="empty"]`).toggle(t),$(this.presetDialog).find(`[data-bb-preset-help="filled"]`).toggle(!t),yield this.presetDialog.updateComplete,this.presetDialog.isConnected&&(yield this.presetDialog.show())}),handleChange:function(e){$(e.target).closest(`[data-bb-preview]`).length||(this.updateSource(),this.updatePresentation(),this.schedulePreview())},handleClick:function(e){let t=$(e.target).closest(`[data-bb-reset-appearance]`);if(t.length){let e=t.attr(`data-bb-reset-appearance`);this.$container.find(`[data-bb-appearance-key="`+e+`"]`).val(``),this.schedulePreview();return}let n=$(e.target).closest(`[data-bb-action]`);if(!n.length)return;e.preventDefault();let r=n.data(`bb-action`);r===`customise-set`?this.customiseSet():r===`new-set`||r===`edit-set`?this.openSet(r===`edit-set`?this.control(`projectSet`).val():null,n[0]):r===`presets`?this.openPresets():this.schedulePreview()},status:function(e){this.$container.find(`[data-bb-status]`).text(Craft.t(`buttonbox`,e))},schedulePreview:function(){clearTimeout(this.timer),this.updateAppearance(),We(this.$container);let e=++this.request;this.timer=setTimeout(()=>this.updatePreview(e),250)},updatePreview:function(){var e=w(function*(e){var t;if(!this.$container[0].isConnected)return;let n=this.$container.find(`[data-bb-preview]`);if(this.source()===`provider`){n.empty(),this.status(`Dynamic options are available when editing an entry.`);return}let r=this.source()===`projectSet`?((t=this.config.sets[this.control(`projectSet`).val()])==null?void 0:t.options)||[]:this.readRows();if(!r.length)n.empty(),this.status(this.source()===`projectSet`?`Choose an option set to preview it.`:`Add an option to preview this field.`);else try{var i;let t=yield Craft.sendActionRequest(`POST`,`buttonbox/option-sets/preview`,{data:{options:r,presentation:this.presentation(),columns:this.control(`columns`).val(),appearance:this.appearance(),showClearButton:(i=this.$container.find(`[data-bb-show-clear]`)[0])!=null&&i.checked?1:0,imageSize:this.control(`imageSize`).val(),imageFit:this.control(`imageFit`).val(),multi:+!!this.config.multi}});if(e!==this.request||!this.$container[0].isConnected)return;n.html(t.data.html),n.find(`input`).removeAttr(`name`).on(`change`,e=>{let t=$(e.target);this.config.multi||n.find(`input`).not(t).prop(`checked`,!1),n.find(`input`).each((e,t)=>$(t).closest(`.buttonbox-visual__option`).toggleClass(`is-selected`,t.checked))}),qe(n,this.previewSelection),this.$container.find(`[data-bb-status]`).text(t.data.errors.join(` `))}catch(t){e===this.request&&this.status(`Preview unavailable. Your options have been preserved.`)}});return function(t){return e.apply(this,arguments)}}(),destroy:function(){var e,t,n;clearTimeout(this.timer),this.request++,(e=this.observer)==null||e.disconnect(),(t=this.presetDialog)==null||t.remove(),(n=this.setSlideout)==null||n.close(),this.optionTable.destroy(),this.$container.removeData(`buttonboxSettings`),this.base()}}),Craft.ButtonBoxPositionSettings=Garnish.Base.extend({init:function(e){if(this.$container=$(`#`+e),!this.$container.length||this.$container.data(`buttonboxPositionSettings`))return;this.$container.data(`buttonboxPositionSettings`,this);let t=Ge(this.$container);this.config=this.$container.data(`config`),this.request=0,this.previewSelection={},this.initAppearance(),this.optionTable=new zi(this.$container,this.config,()=>this.schedulePreview()),this.addListener(this.$container.find(`[data-bb-presets]`),`click`,()=>this.openPresets()),this.addListener(this.$container.find(`[data-bb-reset-appearance]`),`click`,e=>{let t=$(e.currentTarget).attr(`data-bb-reset-appearance`);this.$container.find(`[data-bb-appearance-key="`+t+`"]`).val(``),this.schedulePreview()}),this.addListener(this.$container,`input change`,e=>{$(e.target).closest(`[data-bb-preview]`).length||this.schedulePreview()}),this.observer=new MutationObserver(()=>{this.$container[0].isConnected||this.destroy()}),this.observer.observe(document.body,{childList:!0,subtree:!0}),this.schedulePreview(),t()},control:function(e){return this.$container.find(`[name="`+e+`"], [name$="[`+e+`]"]`)},mode:function(){return this.control(`mode`).filter(`:checked`).val()||`grid`},initAppearance:function(){let e=this.$container.find(`[data-bb-appearance-table]`)[0];e.allowAdd=!1,e.allowInsert=!1,e.allowDelete=!1,e.allowReorder=!1,e.columns=[{name:`label`,label:Craft.t(`buttonbox`,`Setting`),type:`custom`,thin:!0},{name:`control`,label:Craft.t(`buttonbox`,`Value`),type:`custom`}],e.rows=[...e.querySelectorAll(`[data-bb-appearance-row]`)].map(t=>{let n={_id:t.dataset.bbAppearanceRow};for(let r of[`label`,`control`]){let i=t.querySelector(`[data-bb-appearance-`+r+`]`);i.slot=ii(n._id,r),e.append(i),r===`control`&&this.addListener($(i),`input change`,()=>this.schedulePreview())}return t.remove(),n})},appearance:function(){let e={};return this.$container.find(`[data-bb-appearance-key]`).each((t,n)=>{e[n.dataset.bbAppearanceKey]=n.value}),e},updateAppearanceSummary:function(){let e=this.$container.find(`[data-bb-appearance-summary]`)[0],t=JSON.parse(e.dataset.labels),n=this.appearance(),r=[];if(this.$container.find(`[data-bb-show-tooltips]`)[0].checked||r.push(t.tooltipsOff),this.showClearButton()&&r.push(t.clearButton),n.size&&n.size!=="default"){let e=[...this.$container.find(`[data-bb-appearance-key="size"] pk-option`)].find(e=>e.value===n.size);e&&r.push(e.textContent.trim())}[`textColor`,`backgroundColor`,`selectionColor`].some(e=>n[e])&&r.push(t.colours),e.textContent=r.length?r.join(` · `):t.default},openPresets:w(function*(){var e=this;if(!this.presetDialog){let t=$(this.$container.find(`[data-bb-presets-template]`).html()).appendTo(document.body);t.find(`.buttonbox-preset-card__preview input`).remove(),this.presetDialog=t[0],this.addListener(t.find(`[data-bb-choose-preset]`),`click`,function(){var t=w(function*(t){let n=e.config.presets[$(t.currentTarget).attr(`data-bb-choose-preset`)];if(n&&!e.applyingPreset){e.applyingPreset=!0;try{e.applyPreset(n),e.schedulePreview(),yield e.presetDialog.hide(`api`)}finally{e.applyingPreset=!1}}});return function(e){return t.apply(this,arguments)}}())}let t=this.optionTable.readRows().length===0;$(this.presetDialog).find(`[data-bb-preset-help="empty"]`).toggle(t),$(this.presetDialog).find(`[data-bb-preset-help="filled"]`).toggle(!t),yield this.presetDialog.updateComplete,this.presetDialog.isConnected&&(yield this.presetDialog.show())}),applyPreset:function(e){this.optionTable.replaceRows(e.options),this.control(`mode`).each((t,n)=>{n.checked=n.value===e.mode}),this.control(`columns`).val(e.columns),Ue(this.$container[0],e,[`showTooltips`])},previewData:function(e){return{options:e,mode:this.mode(),columns:this.control(`columns`).val(),showTooltips:this.$container.find(`[data-bb-show-tooltips]`)[0].checked,showClearButton:this.showClearButton(),appearance:this.appearance()}},showClearButton:function(){var e;return!!((e=this.$container.find(`[data-bb-show-clear]`)[0])!=null&&e.checked)},previewAction:`buttonbox/position/preview`,schedulePreview:function(){clearTimeout(this.timer),this.updateAppearanceSummary();let e=this.mode()===`grid`;this.$container.find(`[data-bb-columns]`).prop(`hidden`,!e),this.control(`columns`).prop(`disabled`,!e),We(this.$container);let t=++this.request;this.timer=setTimeout(()=>this.updatePreview(t),250)},updatePreview:function(){var e=w(function*(e){if(!this.$container[0].isConnected)return;let t=this.$container.find(`[data-bb-preview]`),n=this.$container.find(`[data-bb-status]`),r=this.optionTable.readRows();if(!r.length)t.empty(),n.text(Craft.t(`buttonbox`,`Add an option to preview this field.`));else try{let i=yield Craft.sendActionRequest(`POST`,this.previewAction,{data:this.previewData(r)});if(e!==this.request||!this.$container[0].isConnected)return;t.html(i.data.html),t.find(`input[type=hidden]`).remove(),t.find(`input`).removeAttr(`name`),qe(t,this.previewSelection),n.text(i.data.errors.join(` `))}catch(r){e===this.request&&(t.empty(),n.text(Craft.t(`buttonbox`,`Preview unavailable. Your options have been preserved.`)))}});return function(t){return e.apply(this,arguments)}}(),destroy:function(){var e,t;clearTimeout(this.timer),this.request++,(e=this.observer)==null||e.disconnect(),(t=this.presetDialog)==null||t.remove(),this.optionTable.destroy(),this.$container.removeData(`buttonboxPositionSettings`),this.base()}}),Craft.ButtonBoxWidthSettings=Craft.ButtonBoxPositionSettings.extend({previewAction:`buttonbox/width/preview`,applyPreset:function(e){this.optionTable.replaceRows(e.options),this.control(`displayStyle`).each((t,n)=>{n.checked=n.value===e.displayStyle}),Ue(this.$container[0],e,[`labelDisplay`,`showTooltips`])},previewData:function(e){return{options:e,displayStyle:this.control(`displayStyle`).filter(`:checked`).val(),labelDisplay:this.control(`labelDisplay`).val(),showTooltips:this.$container.find(`[data-bb-show-tooltips]`)[0].checked,showClearButton:this.showClearButton(),appearance:this.appearance()}},updateAppearanceSummary:function(){let e=this.$container.find(`[data-bb-appearance-summary]`)[0],t=JSON.parse(e.dataset.labels),n=this.appearance(),r=[],i=this.control(`labelDisplay`).val();i!==`selected`&&r.push(t[i]),this.$container.find(`[data-bb-show-tooltips]`)[0].checked||r.push(t.tooltipsOff),this.showClearButton()&&r.push(t.clearButton),n.size&&n.size!=="default"&&r.push(n.size.toUpperCase()),[`textColor`,`backgroundColor`,`fillColor`,`selectionColor`,`borderColor`].some(e=>n[e])&&r.push(t.colours),(n.borderWidth!==``||n.radius!==``)&&r.push(t.borders),e.textContent=r.length?r.join(` · `):t.default}}),Craft.ButtonBoxRatingSettings=Garnish.Base.extend({init:function(e){if(this.$container=$(`#`+e),!this.$container.length||this.$container.data(`buttonboxRatingSettings`))return;this.$container.data(`buttonboxRatingSettings`,this);let t=Ge(this.$container);this.config=this.$container.data(`config`),this.request=0,this.previewSelection={},this.initAppearance(),this.addListener(this.$container.find(`[data-bb-presets]`),`click`,()=>this.openPresets()),this.addListener(this.$container,`input change`,e=>{$(e.target).closest(`[data-bb-preview]`).length||this.schedulePreview()}),this.observer=new MutationObserver(()=>{this.$container[0].isConnected||this.destroy()}),this.observer.observe(document.body,{childList:!0,subtree:!0}),this.schedulePreview(),t()},control:function(e){return this.$container.find(`[name="`+e+`"], [name$="[`+e+`]"]`)},initAppearance:function(){let e=this.$container.find(`[data-bb-appearance-table]`)[0];e.allowAdd=!1,e.allowInsert=!1,e.allowDelete=!1,e.allowReorder=!1,e.columns=[{name:`label`,label:Craft.t(`buttonbox`,`Setting`),type:`custom`,thin:!0},{name:`control`,label:Craft.t(`buttonbox`,`Value`),type:`custom`}],e.rows=[...e.querySelectorAll(`[data-bb-appearance-row]`)].map(t=>{let n={_id:t.dataset.bbAppearanceRow};for(let r of[`label`,`control`]){let i=t.querySelector(`[data-bb-appearance-`+r+`]`);i.slot=ii(n._id,r),e.append(i),r===`control`&&this.addListener($(i),`input change`,()=>this.schedulePreview())}return t.remove(),n})},updateAppearanceSummary:function(){var e,t;let n=this.$container.find(`[data-bb-appearance-summary]`)[0],r=JSON.parse(n.dataset.labels),i=this.control(`symbol`).val(),a=this.config.ratingDefaults[i],o=[r[i]||i];(e=this.$container.find(`[data-bb-show-labels]`)[0])!=null&&e.checked&&o.push(r.numeric),(t=this.$container.find(`[data-bb-show-clear]`)[0])!=null&&t.checked&&o.push(r.clearButton),a&&[`activeColor`,`inactiveColor`].some(e=>String(this.control(e).val()).toLowerCase()!==a[e])&&o.push(r.colours),n.textContent=o.join(` · `)},openPresets:w(function*(){var e=this;if(!this.presetDialog){let t=$(this.$container.find(`[data-bb-presets-template]`).html()).appendTo(document.body);t.find(`.buttonbox-preset-card__preview input`).remove(),t.find(`[data-bb-preset-help="empty"]`).remove(),this.presetDialog=t[0],this.addListener(t.find(`[data-bb-choose-preset]`),`click`,function(){var t=w(function*(t){let n=e.config.presets[$(t.currentTarget).attr(`data-bb-choose-preset`)];if(n&&!e.applyingPreset){e.applyingPreset=!0;try{for(let t of[`symbol`,`activeColor`,`inactiveColor`])e.control(t).val(n[t]);e.schedulePreview(),yield e.presetDialog.hide(`api`)}finally{e.applyingPreset=!1}}});return function(e){return t.apply(this,arguments)}}())}yield this.presetDialog.updateComplete,this.presetDialog.isConnected&&(yield this.presetDialog.show())}),schedulePreview:function(){clearTimeout(this.timer),this.updateAppearanceSummary(),this.control(`defaultValue`).attr(`max`,this.control(`max`).val()),We(this.$container);let e=++this.request;this.timer=setTimeout(()=>this.updatePreview(e),250)},updatePreview:function(){var e=w(function*(e){var t;if(!this.$container[0].isConnected)return;let n=this.$container.find(`[data-bb-preview]`),r=this.$container.find(`[data-bb-status]`),i={};for(let e of[`max`,`defaultValue`,`symbol`,`activeColor`,`inactiveColor`,`showLabels`]){var a;i[e]=e===`showLabels`?!!((a=this.$container.find(`[data-bb-show-labels]`)[0])!=null&&a.checked):this.control(e).val()}i.showClearButton=!!((t=this.$container.find(`[data-bb-show-clear]`)[0])!=null&&t.checked),this.config.presetEditor&&Object.assign(i,{max:5,defaultValue:3,showClearButton:!1,showLabels:!1});try{let t=yield Craft.sendActionRequest(`POST`,`buttonbox/rating/preview`,{data:i});if(e!==this.request||!this.$container[0].isConnected)return;n.html(t.data.html),n.find(`input`).attr(`form`,this.$container.attr(`id`)+`-preview-form`),qe(n,this.previewSelection),r.text(t.data.errors.join(` `))}catch(t){e===this.request&&this.$container[0].isConnected&&(n.empty(),r.text(Craft.t(`buttonbox`,`Preview unavailable. Your settings have been preserved.`)))}});return function(t){return e.apply(this,arguments)}}(),destroy:function(){var e,t;clearTimeout(this.timer),this.request++,(e=this.observer)==null||e.disconnect(),(t=this.presetDialog)==null||t.remove(),this.$container.removeData(`buttonboxRatingSettings`),this.base()}});var Q=e=>Craft.t(`buttonbox`,e),Bi={label:``,urlType:`url`,url:``,icon:``,imageUrl:``,imageAlt:``,iconPosition:`start`,style:`default`,newWindow:!1};Craft.ButtonBoxActionSettings=Garnish.Base.extend({init:function(t){if(this.$container=$(`#`+t),!this.$container.length||this.$container.data(`buttonboxActions`))return;this.$container.data(`buttonboxActions`,this);let n=Ge(this.$container);this.name=this.$container.find(`[data-actions-name]`).attr(`name`),this.table=this.$container.find(`[data-actions-table]`)[0],this.template=this.$container.find(`[data-actions-row]`).html(),this.cells=new Map,this.request=0,this.table.columns=[{name:`label`,label:Q(`Label`),type:`text`},{name:`url`,label:Q(`URL`),type:`text`},{name:`visual`,label:Q(`Visual`),type:`custom`,thin:!0},{name:`style`,label:Q(`Style`),type:`custom`,thin:!0}],this.table.newRowDefaults=e(e({},Bi),{},{visualType:`none`}),this.table.modifyRow=e=>({title:String(e.label||Q(`Action`))}),this.table.getRowMenuItems=()=>[{label:Q(`Edit action…`),icon:`gear`,action:`edit`}],this.handleMenu=e=>{e.detail.action===`edit`&&this.openDetails(e.detail.row._id)},this.handleRows=e=>{var t;e.target===this.table&&Array.isArray((t=e.detail)==null?void 0:t.rows)&&(this.rows=e.detail.rows,this.syncCells(),this.changed())},this.table.addEventListener(`pk-change`,this.handleRows),this.table.addEventListener(`pk-row-menu-select`,this.handleMenu),this.rows=(this.$container.data(`config`).rows||[]).map(t=>{var n;return e(e(e({},Bi),t),{},{storedUrl:t.url,url:(n=t.displayUrl)==null?t.url:n,visualType:t.imageUrl?`image`:t.icon?`icon`:`none`,_id:ri()})}),this.table.rows=this.rows,this.initAppearance(),this.syncCells(),this.changed(),n(),this.observer=new MutationObserver(()=>{this.$container[0].isConnected||this.destroy()}),this.observer.observe(document.body,{childList:!0,subtree:!0})},initAppearance:function(){let e=this.$container.find(`[data-actions-appearance]`)[0];e.allowAdd=e.allowInsert=e.allowDelete=e.allowReorder=!1,e.columns=[{name:`label`,label:Q(`Setting`),type:`custom`,thin:!0},{name:`control`,label:Q(`Value`),type:`custom`}],e.rows=[...e.querySelectorAll(`[data-appearance-row]`)].map(t=>{let n={_id:t.dataset.appearanceRow};for(let r of[`label`,`control`]){let i=t.querySelector(`[data-appearance-`+r+`]`);i.slot=ii(n._id,r),e.append(i),r===`control`&&this.addListener($(i),`input change`,()=>this.schedulePreview())}return t.remove(),n})},updateAppearanceSummary:function(){let e=this.$container.find(`[data-actions-appearance-summary]`)[0],t={size:`default`,alignment:`start`,spacing:`normal`},n=[];this.$container.find(`[data-action-appearance]`).each((e,r)=>{if(r.value===t[r.dataset.actionAppearance])return;let i=[...r.querySelectorAll(`pk-option`)].find(e=>e.value===r.value);i&&n.push(i.textContent.trim())}),e.textContent=n.length?n.join(` · `):e.dataset.default},syncCells:function(){for(let[e,n]of this.cells)if(!this.rows.some(t=>t._id===e)){var t;(t=n.dialog)==null||t.remove(),n.$parts.off(`.actions`).remove(),this.cells.delete(e)}for(let t of this.rows){let n=this.cells.get(t._id);if(!n){let r=$(this.template);n={id:t._id,$parts:r,loaded:new Set},this.cells.set(t._id,n),r.filter(`[data-action-cell]`).each((e,n)=>{n.slot=ii(t._id,n.dataset.actionCell),this.table.append(n)}),r.on(`click.actions`,`[data-action-asset-image]`,t=>{Oi(t.currentTarget,t=>{this.cells.has(n.id)&&(this.rows=this.rows.map(r=>r._id===n.id?e(e({},r),{},{imageUrl:t}):r),this.table.rows=this.rows,this.updateCell(n,this.rows.find(e=>e._id===n.id)),this.changed())})}),r.on(`input.actions change.actions`,t=>{let r=t.target,i=r.dataset.actionKey;if(!i||r.localName===`pk-checkbox`&&t.type!==`change`)return;let a=r.localName===`pk-checkbox`?r.checked:r.value;this.rows=this.rows.map(t=>t._id===n.id?e(e({},t),{},{[i]:a}):t),this.table.rows=this.rows,this.updateCell(n,this.rows.find(e=>e._id===n.id)),this.changed()})}this.updateCell(n,t)}},updateCell:function(e,t){e.$parts.find(`[data-action-key]`).each((e,n)=>{var r;n.localName===`pk-checkbox`?n.checked=!!t[n.dataset.actionKey]:n.value=String((r=t[n.dataset.actionKey])==null?``:r)}),e.$parts.find(`pk-image-browser`).each((n,r)=>{r.hidden=t.visualType!==r.mode,r.disabled=r.hidden,r.hidden||this.populateBrowser(e,r)}),e.$parts.find(`[data-action-asset-image]`).prop(`hidden`,t.visualType!==`image`),e.$parts.find(`[data-image-alt]`).prop(`hidden`,t.visualType!==`image`)},populateBrowser:function(){var e=w(function*(e,t){if(!e.loaded.has(t.mode)){e.loaded.add(t.mode),t.loading=!0;try{let n=yield Ri(t.mode);if(!this.cells.has(e.id))return;t.groups=n.filter(e=>e.items.length),e.$parts.find(`[data-gallery-error]`).prop(`hidden`,!0)}catch(n){e.loaded.delete(t.mode),e.$parts.find(`[data-gallery-error]`).text(Q(`Gallery unavailable. Change the visual type to retry.`)).prop(`hidden`,!1)}finally{t.loading=!1}}});return function(t,n){return e.apply(this,arguments)}}(),openDetails:function(){var e=w(function*(e){var t;let n=this.cells.get(e);if(n){if(!n.dialog){let e=document.createElement(`pk-dialog`);e.className=`buttonbox-option-dialog`;let t=document.createElement(`pk-button`);t.variant=`primary`,t.type=`button`,t.slot=`footer`,t.textContent=Craft.t(`app`,`Done`),t.addEventListener(`click`,()=>e.hide(`api`)),e.append(n.$parts.filter(`[data-action-details]`)[0],t),document.body.append(e),n.dialog=e}n.dialog.label=Q(`Edit action: {label}`).replace(`{label}`,((t=this.rows.find(t=>t._id===e))==null?void 0:t.label)||Q(`Action`)),yield n.dialog.updateComplete,n.dialog.isConnected&&(yield n.dialog.show())}});return function(t){return e.apply(this,arguments)}}(),readRows:function(){return this.rows.map(e=>{let t=Object.fromEntries(Object.keys(Bi).map(t=>{var n;return[t,t===`icon`&&e.visualType!==`icon`||t===`imageUrl`&&e.visualType!==`image`?``:(n=e[t])==null?Bi[t]:n]}));return e.url===e.displayUrl?t.url=e.storedUrl:t.urlType=`url`,t})},changed:function(){let e=document.createDocumentFragment();this.readRows().forEach((t,n)=>{for(let[r,i]of Object.entries(t)){let t=document.createElement(`input`);t.type=`hidden`,t.name=`${this.name}[${n}][${r}]`,t.value=typeof i==`boolean`?i?`1`:``:String(i),e.append(t)}}),this.$container.find(`[data-actions-values]`).empty().append(e),this.schedulePreview()},schedulePreview:function(){clearTimeout(this.timer),this.updateAppearanceSummary(),We(this.$container);let e=++this.request;this.timer=setTimeout(()=>this.preview(e),250)},preview:function(){var e=w(function*(e){let t=this.$container.find(`[data-actions-status]`),n=this.$container.find(`[data-actions-preview]`),r={actions:this.readRows()};if(this.$container.find(`[data-action-appearance]`).each((e,t)=>{r[t.dataset.actionAppearance]=t.value}),!r.actions.length)n.empty(),t.text(Q(`Add an action to preview this field.`));else try{let i=yield Craft.sendActionRequest(`POST`,`buttonbox/action-links/preview`,{data:r});if(e!==this.request||!this.$container[0].isConnected)return;n.html(i.data.html),t.text(i.data.errors.join(` `))}catch(n){e===this.request&&t.text(Q(`Preview unavailable. Your actions have been preserved.`))}});return function(t){return e.apply(this,arguments)}}(),destroy:function(){var e;clearTimeout(this.timer),this.request++,(e=this.observer)==null||e.disconnect(),this.table.removeEventListener(`pk-change`,this.handleRows),this.table.removeEventListener(`pk-row-menu-select`,this.handleMenu);for(let e of this.cells.values()){var t;(t=e.dialog)==null||t.remove(),e.$parts.off(`.actions`).remove()}this.$container.removeData(`buttonboxActions`),this.base()}});
//# sourceMappingURL=settings.js.map