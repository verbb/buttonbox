import{t as e}from"./chunks/rolldown-runtime-DK3Fl9T5.js";import{$ as t,A as n,B as r,C as i,D as a,E as o,F as s,G as c,H as l,I as u,J as d,K as f,L as p,M as m,N as h,O as g,P as _,Q as v,R as y,S as b,T as ee,U as te,V as ne,W as re,X as ie,Y as ae,Z as oe,_ as se,a as ce,at as le,b as ue,c as de,ct as x,d as fe,dt as pe,et as me,f as he,ft as S,g as ge,h as _e,i as ve,it as C,j as ye,k as be,l as xe,lt as Se,m as Ce,n as we,nt as w,o as Te,ot as T,p as Ee,pt as E,q as D,r as De,rt as O,s as Oe,st as k,t as ke,tt as A,u as Ae,ut as j,v as je,w as M,x as Me,y as Ne,z as Pe}from"./input.js";function*Fe(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*Fe(e.shadowRoot.activeElement)))}function Ie(e,t,n){for(let r of n){if(!Object.hasOwn(t,r))continue;let n=t[r];e.querySelectorAll(`[name]`).forEach(t=>{var i;(t.name===r||(i=t.name)!=null&&i.endsWith(`[${r}]`))&&(t.localName===`pk-lightswitch`?t.checked=n===!0||n===`1`||n===1:t.type===`radio`?t.checked=t.value===String(n):(t.type!==`hidden`||!e.querySelector(`pk-lightswitch[name="${t.name}"]`))&&(t.value=n))})}if(Object.hasOwn(t,`appearance`)){let n={size:`default`,showLabels:!0,labelTooltips:!1};e.querySelectorAll(`[data-bb-appearance-key]`).forEach(e=>{var r,i;let a=e.dataset.bbAppearanceKey,o=(r=(i=t.appearance[a])==null?n[a]:i)==null?``:r;e.localName===`pk-lightswitch`?e.checked=o===!0||o===`1`||o===1:e.value=o})}}function Le(e){let t=e.children(`[data-bb-kit-values]`);t.length||(t=$(`<div hidden data-bb-kit-values/>`).appendTo(e)),t.empty(),e.find(`[name]`).each((e,n)=>{n.localName.startsWith(`pk-`)&&!n.matches(`:disabled`)&&($(n).closest(`[data-bb-preview], [data-actions-preview]`).length||$(`<input/>`,{type:`hidden`,name:n.getAttribute(`name`),value:n.localName===`pk-lightswitch`?n.checked?`1`:`0`:n.value}).appendTo(t))})}function Re(e){let t=e.closest(`form`),n=()=>(t.data(`serializer`)||(()=>t.serialize()))(),r=t.length>0&&t.data(`initialSerializedValue`)===n();return()=>{r&&t.data(`initialSerializedValue`,n())}}var ze=e=>e.filter(`:checked`).map((e,t)=>t.value).get();function Be(e,t){let n=e.find(`input[type=radio], input[type=checkbox]`),r=ze(n).join(`
`);t.defaults!==r&&(t.values=null),t.defaults=r;let i=n.filter(`:not(:disabled)`).get();if(t.values&&t.values.every(e=>i.some(t=>t.value===e))){var a;n.each((e,n)=>{n.checked=t.values.includes(n.value)}),(a=n.filter(`:checked`)[0]||n[0])==null||a.dispatchEvent(new Event(`change`,{bubbles:!0}))}n.on(`change`,()=>{t.values=ze(n)})}var Ve,He=class extends Event{constructor(e){super(`pk-copy`,{bubbles:!0,cancelable:!1,composed:!0}),this.detail={value:e}}},Ue=class extends Event{constructor(){super(`pk-copy-error`,{bubbles:!0,cancelable:!1,composed:!0})}};function We(e){return Ge.apply(this,arguments)}function Ge(){return Ge=S(function*(e){yield navigator.clipboard.writeText(e)}),Ge.apply(this,arguments)}function Ke(e,t,n){var r,i;if(!t)return n||null;let a=t.includes(`.`),o=t.includes(`[`)&&t.includes(`]`),s=t,c=``;a?[s,c]=t.trim().split(`.`):o&&([s,c]=t.trim().replace(/\]$/,``).split(`[`));let l=`getElementById`in e?e.getElementById(s):null;if(!l)return null;if(o)return(r=l.getAttribute(c))==null?``:r;if(a){let e=l[c];return e==null?``:String(e)}return(i=l.textContent)==null?``:i}var qe=E`
    @layer pk-component {
        :host {
            display: inline-block;
        }

        /* Match React CopyButton size="icon" — square, no horizontal padding. */
        pk-button::part(base) {
            padding-inline: 0;
            width: var(--pk-btn-height-default);
            min-width: var(--pk-btn-height-default);
            border-color: var(--pk-copy-button-border-color);
            border-radius: var(--pk-copy-button-radius);
            background: var(--pk-copy-button-background);
            color: var(--pk-copy-button-color);
        }

        pk-button::part(base):hover:not(:disabled) {
            border-color: var(
                --pk-copy-button-hover-border-color,
                var(--pk-copy-button-border-color)
            );
            background: var(--pk-copy-button-hover-background);
            color: var(--pk-copy-button-hover-color, var(--pk-copy-button-color));
        }

        /*
         * In-control trailing action (slot=end on pk-input, etc.): same family as
         * combobox expand/clear and image-browser clear — flex-reserved hit box
         * flush to the field edge, glyph sized via --pk-input-decoration-size.
         */
        :host([slot='end']) {
            display: inline-flex;
            align-self: stretch;
            height: auto;
            /* size=none buttons resolve --pk-btn-icon-size: 1em against this. */
            font-size: var(--pk-input-decoration-size, 0.75rem);
        }

        :host([slot='end']) pk-button {
            display: flex;
            height: 100%;
        }

        :host([slot='end']) pk-button::part(base) {
            box-sizing: border-box;
            width: calc(
                var(--pk-input-decoration-size, 0.75rem) + var(--pk-input-padding-inline, 8px)
            );
            min-width: calc(
                var(--pk-input-decoration-size, 0.75rem) + var(--pk-input-padding-inline, 8px)
            );
            height: 100%;
            min-height: 100%;
            padding: 0;
            border-width: 0;
            border-radius: 0;
            background: transparent;
            color: var(--pk-color-gray-600);
        }

        :host([slot='end']) pk-button::part(base):hover:not(:disabled) {
            color: var(--pk-color-gray-800);
        }
    }
`,Je=M(b.check).replace(`<svg`,`<svg slot="start" part="success-icon"`),Ye=M(b.copy).replace(`<svg`,`<svg slot="start" part="copy-icon"`),Xe=2e3,Ze=(Ve=class extends le{constructor(...e){super(...e),this.hasSlotController=new ge(this,`icon`),this.value=``,this.from=``,this.disabled=!1,this.variant=`transparent`,this.ariaLabel=`Copy`,this.copiedLabel=`Copied`,this.copied=!1,this.resetCopied=()=>{this.copied=!1}}disconnectedCallback(){window.clearTimeout(this.resetTimer),super.disconnectedCallback()}scheduleReset(){window.clearTimeout(this.resetTimer),this.resetTimer=window.setTimeout(this.resetCopied,Xe)}copy(){var e=this;return S(function*(){if(e.disabled)return;let t=Ke(e.getRootNode(),e.from,e.value);if(t==null||t===``){e.dispatchEvent(new Ue);return}try{yield We(t),e.copied=!0,e.scheduleReset(),e.dispatchEvent(new He(t))}catch(t){e.dispatchEvent(new Ue)}})()}render(){let e=this.getAttribute(`slot`)===`end`;return j`
            <pk-button
                part="button"
                variant=${e?`none`:this.variant}
                size=${e?`none`:`default`}
                ?icon=${e}
                aria-label=${this.copied?this.copiedLabel:this.ariaLabel}
                ?disabled=${this.disabled}
                @click=${this.copy}
            >
                ${this.copied?u(Je):this.hasSlotController.test(`icon`)?j`<slot name="icon" slot="start"></slot>`:u(Ye)}
            </pk-button>
        `}},Ve.styles=qe,Ve);T([C()],Ze.prototype,`value`,void 0),T([C()],Ze.prototype,`from`,void 0),T([C({type:Boolean,reflect:!0})],Ze.prototype,`disabled`,void 0),T([C({reflect:!0})],Ze.prototype,`variant`,void 0),T([C({attribute:`aria-label`})],Ze.prototype,`ariaLabel`,void 0),T([C({attribute:`copied-label`})],Ze.prototype,`copiedLabel`,void 0),T([w()],Ze.prototype,`copied`,void 0),Ze=T([k(`pk-copy-button`)],Ze);var Qe,$e=class extends Event{constructor(){super(`pk-dismiss`,{bubbles:!0,cancelable:!0,composed:!0})}},et=E`
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
`,tt=3e3,nt={neutral:b.circleInfo,info:b.circleInfo,success:b.circleCheck,warning:b.triangleExclamation,error:b.circleExclamation},N=(Qe=class extends le{constructor(...e){super(...e),this.hasSlotController=new ge(this,`title`,`icon`,`actions`,`details`),this.variant=`info`,this.size=`default`,this.appearance=`accent`,this.heading=``,this.hideIcon=!1,this.dismissible=!1,this.announce=`off`,this.detailsLabel=`Details`,this.detailsOpen=!1,this.copyable=!1,this.copyLabel=`Copy details`,this.copiedLabel=`Details copied.`,this.copyErrorLabel=`Copy failed. Select the details and copy them manually.`,this.dismissLabel=`Dismiss`,this.copyStatus=``,this.copyFailed=!1}disconnectedCallback(){window.clearTimeout(this.copyStatusResetTimer),super.disconnectedCallback()}hasTitle(){return!!this.heading||this.hasSlotController.test(`title`)}hasDetails(){return this.hasSlotController.test(`details`)}get detailsValue(){var e,t;return((e=(t=this.detailsSlot)==null?void 0:t.assignedNodes({flatten:!0}))==null?[]:e).map(e=>{var t;return(t=e.textContent)==null?``:t}).join(``).trim()}resetCopyStatusLater(){window.clearTimeout(this.copyStatusResetTimer),this.copyStatusResetTimer=window.setTimeout(()=>{this.copyStatus=``,this.copyFailed=!1},tt)}showCopySuccess(){this.copyFailed=!1,this.copyStatus=this.copiedLabel,this.resetCopyStatusLater()}showCopyError(){this.copyFailed=!0,this.copyStatus=this.copyErrorLabel,this.resetCopyStatusLater()}handleCopySuccess(){this.showCopySuccess()}handleCopyError(){this.showCopyError(),this.selectDetails()}selectDetails(){var e,t;let n=(e=(t=this.detailsSlot)==null?void 0:t.assignedNodes({flatten:!0}))==null?[]:e,r=n[0],i=n[n.length-1];if(!r||!i)return;this.detailsOpen=!0;let a=document.createRange();a.setStartBefore(r),a.setEndAfter(i);let o=window.getSelection();o==null||o.removeAllRanges(),o==null||o.addRange(a)}copyDetails(){var e=this;return S(function*(){let t=e.detailsValue;if(!t){e.showCopyError(),e.dispatchEvent(new Ue);return}if(e.copyButton){e.copyButton.value=t,yield e.copyButton.copy();return}try{yield We(t),e.showCopySuccess();let n=new He(t);e.dispatchEvent(n)}catch(t){e.showCopyError(),e.selectDetails(),e.dispatchEvent(new Ue)}})()}dismiss(){this.dispatchEvent(new $e)&&(this.hidden=!0)}show(){this.hidden=!1}handleDetailsToggle(e){this.detailsOpen=e.currentTarget.open}renderIcon(){var e;if(this.hideIcon)return x;let t=this.hasSlotController.test(`icon`)?j`<slot name="icon"></slot>`:s(M((e=nt[this.variant])==null?nt.info:e));return j`<span part="icon" class="icon" aria-hidden="true">${t}</span>`}render(){let e=this.announce===`assertive`?`alert`:this.announce===`polite`?`status`:x,t=this.announce===`off`?x:this.announce,n=this.hasSlotController.test(`actions`),r=this.hasDetails();return j`
            <div
                part="base"
                class="alert"
                role=${e}
                aria-live=${t}
                aria-atomic=${this.announce===`off`?x:`true`}
            >
                <div part="notice" class="notice">
                    ${this.renderIcon()}

                    <div part="content" class="content">
                        ${this.hasTitle()?j`
                                <strong part="title" class="title">
                                    ${this.hasSlotController.test(`title`)?j`<slot name="title"></slot>`:this.heading}
                                </strong>
                            `:x}

                        <div part="body" class="body"><slot></slot></div>
                    </div>

                    ${this.dismissible?j`
                            <button
                                part="dismiss-button"
                                class="dismiss"
                                type="button"
                                aria-label=${this.dismissLabel}
                                @click=${this.dismiss}
                            >
                                ${s(M(b.xmark))}
                            </button>
                        `:x}
                </div>

                ${n?j`<div part="actions" class="actions"><slot name="actions"></slot></div>`:x}

                ${r?j`
                        <details
                            part="details"
                            class="details"
                            ?open=${this.detailsOpen}
                            @toggle=${this.handleDetailsToggle}
                        >
                            <summary part="details-summary">${this.detailsLabel}</summary>
                            <div part="details-content" class="details-content">
                                <div class="details-scroll">
                                    ${this.copyable?j`
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
                                        `:x}
                                    <slot name="details"></slot>
                                </div>
                            </div>

                            ${this.copyable?j`
                                    <span
                                        part="copy-status"
                                        class="copy-status"
                                        data-error=${this.copyFailed?``:x}
                                        role="status"
                                        aria-live="polite"
                                    >${this.copyStatus}</span>
                                `:x}
                        </details>
                    `:x}
            </div>
        `}},Qe.styles=et,Qe);T([C({reflect:!0})],N.prototype,`variant`,void 0),T([C({reflect:!0})],N.prototype,`size`,void 0),T([C({reflect:!0})],N.prototype,`appearance`,void 0),T([C()],N.prototype,`heading`,void 0),T([C({type:Boolean,attribute:`hide-icon`,reflect:!0})],N.prototype,`hideIcon`,void 0),T([C({type:Boolean,reflect:!0})],N.prototype,`dismissible`,void 0),T([C({reflect:!0})],N.prototype,`announce`,void 0),T([C({attribute:`details-label`})],N.prototype,`detailsLabel`,void 0),T([C({type:Boolean,attribute:`details-open`,reflect:!0})],N.prototype,`detailsOpen`,void 0),T([C({type:Boolean,reflect:!0})],N.prototype,`copyable`,void 0),T([C({attribute:`copy-label`})],N.prototype,`copyLabel`,void 0),T([C({attribute:`copied-label`})],N.prototype,`copiedLabel`,void 0),T([C({attribute:`copy-error-label`})],N.prototype,`copyErrorLabel`,void 0),T([C({attribute:`dismiss-label`})],N.prototype,`dismissLabel`,void 0),T([A(`slot[name="details"]`)],N.prototype,`detailsSlot`,void 0),T([A(`pk-copy-button.copy`)],N.prototype,`copyButton`,void 0),T([w()],N.prototype,`copyStatus`,void 0),T([w()],N.prototype,`copyFailed`,void 0),N=T([k(`pk-alert`)],N);function rt(e,t,n=500){return new Promise(r=>{let i=new AbortController,{signal:a}=i;if(e.classList.contains(t)){r();return}e.classList.add(t);let o=!1,s=()=>{o||(o=!0,e.classList.remove(t),window.clearTimeout(c),r(),i.abort())};e.addEventListener(`animationend`,s,{once:!0,signal:a}),e.addEventListener(`animationcancel`,s,{once:!0,signal:a});let c=window.setTimeout(s,n);requestAnimationFrame(()=>{!o&&e.getAnimations().length===0&&s()})})}var it,at=`.modal-shade, .modal`,ot=e=>{let t=getComputedStyle(e);return t.display!==`none`&&t.visibility!==`hidden`&&Number.parseFloat(t.opacity||`1`)>0},st=e=>Array.from(e.querySelectorAll(at)).filter(e=>e instanceof HTMLElement&&!e.closest(`pk-dialog`)&&ot(e));function ct(e,t={}){var n,r,i;let a=(n=(r=t.getDocument)==null?void 0:r.call(t))==null?document:n,o=(i=t.root)==null?a.body:i,s=new Set(t.ignoreExisting?st(a):[]),c=()=>st(a).some(e=>!s.has(e)),l=c(),u=()=>{let t=c();t!==l&&(l=t,e(t))},d=new MutationObserver(()=>{u()});d.observe(o,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`class`,`style`,`hidden`]});let f=window.setInterval(u,250);return{disconnect:()=>{d.disconnect(),window.clearInterval(f)}}}var lt=E`
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
`,ut=M(b.xmark),dt=(it=class extends le{constructor(...e){var t;super(...e),t=this,this.open=!1,this.label=``,this.description=``,this.disablePointerDismissal=!1,this.withoutHeader=!1,this.withoutBodyPadding=!1,this.disableScrollLock=!1,this.size=`default`,this.triggerElement=null,this.previouslyFocused=null,this.yieldingToHostModal=!1,this.hostModalObserver=null,this.yieldBox=null,this.handleDocumentKeyDown=e=>{this.yieldingToHostModal||e.key===`Escape`&&this.open&&Ee(this)&&(e.preventDefault(),e.stopPropagation(),this.requestClose(`escape`))},this.onHostModalPresenceChange=e=>{e?this.yieldToHostModal():this.restoreFromHostModal()},this.showing=!1,this.handleDialogCancel=e=>{e.preventDefault(),!this.dialogElement.classList.contains(`hide`)&&Ee(this)&&this.requestClose(`escape`)},this.handleDialogClick=e=>{e.composedPath().some(e=>e instanceof Element&&e.matches(`[data-dialog="close"], [data-dialog-close]`))&&(e.stopPropagation(),this.requestClose(`close-button`))},this.handleDialogPointerDown=function(){var e=S(function*(e){if(e.target===t.dialogElement&&Ee(t)){if(!t.disablePointerDismissal){t.requestClose(`pointer-dismiss`);return}yield rt(t.dialogElement,`pulse`)}});return function(t){return e.apply(this,arguments)}}(),this.onTriggerClick=e=>{e.preventDefault(),this.open=!0},this.onFooterSlotChange=()=>{this.requestUpdate()}}hasCustomHeaderSlot(){return this.querySelector(`:scope > [slot="header"]`)!==null}applyYieldPosition(e){let t=this.dialogElement;t.style.position=`fixed`,t.style.top=`${e.top}px`,t.style.left=`${e.left}px`,t.style.width=`${e.width}px`,t.style.height=`${e.height}px`,t.style.margin=`0`,t.style.maxHeight=`none`,t.style.zIndex=`99`,t.toggleAttribute(`data-yielding`,!0)}clearYieldPosition(){let e=this.dialogElement;e&&(e.style.position=``,e.style.top=``,e.style.left=``,e.style.width=``,e.style.height=``,e.style.margin=``,e.style.maxHeight=``,e.style.zIndex=``,e.removeAttribute(`data-yielding`),this.yieldBox=null)}yieldToHostModal(){var e;if(this.yieldingToHostModal||!this.open||!((e=this.dialogElement)!=null&&e.open))return;let t=this.dialogElement.getBoundingClientRect();this.yieldBox={top:t.top,left:t.left,width:t.width,height:t.height},this.yieldingToHostModal=!0;try{this.dialogElement.close(),this.dialogElement.show(),this.applyYieldPosition(this.yieldBox)}catch(e){this.yieldingToHostModal=!1,this.clearYieldPosition()}}restoreFromHostModal(){if(this.yieldingToHostModal&&(this.yieldingToHostModal=!1,this.clearYieldPosition(),this.open&&this.dialogElement))try{this.dialogElement.open&&this.dialogElement.close(),this.dialogElement.showModal()}catch(e){}}firstUpdated(){this.open&&this.show()}disconnectedCallback(){this.disableScrollLock||xe(this),this.removeOpenListeners(),super.disconnectedCallback()}updated(e){super.updated(e),e.has(`open`)&&this.hasUpdated&&this.handleOpenChange()}handleOpenChange(){this.open&&!this.dialogElement.open?this.show():!this.open&&this.dialogElement.open&&(this.open=!0,this.requestClose(`api`))}show(e=`api`){var t=this;return S(function*(){var e;if(!(t.showing||(e=t.dialogElement)!=null&&e.open)){t.showing=!0;try{let e=new re;if(!t.dispatchEvent(e)){t.open=!1;return}t.addOpenListeners(),t.previouslyFocused=document.activeElement,t.open=!0,t.dialogElement.showModal(),t.disableScrollLock||Oe(t),requestAnimationFrame(()=>{let e=t.querySelector(`[autofocus]`);if(e){var n,r;((n=(r=e.shadowRoot)==null?void 0:r.querySelector(`input, textarea, select, button`))==null?e:n).focus({preventScroll:!0});return}t.dialogElement.focus({preventScroll:!0})}),yield rt(t.dialogElement,`show`),t.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!0},bubbles:!0,composed:!0})),t.dispatchEvent(new l)}finally{t.showing=!1}}})()}hide(e=`unknown`){var t=this;return S(function*(){yield t.requestClose(e)})()}closeDialog(){this.requestClose(`close-button`)}requestClose(e=`unknown`){var t=this;return S(function*(){let n=new te(typeof e==`string`?e:`close-button`);if(!t.dispatchEvent(n)){t.open=!0,yield rt(t.dialogElement,`pulse`);return}t.removeOpenListeners(),yield rt(t.dialogElement,`hide`),t.open=!1,t.dialogElement.close(),t.disableScrollLock||xe(t);let r=t.previouslyFocused;t.previouslyFocused=null,r!=null&&r.isConnected&&window.setTimeout(()=>{r.focus({preventScroll:!0})},0),t.dispatchEvent(new ne),t.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!1},bubbles:!0,composed:!0}))})()}forceOverlayReset(){var e,t;if(this.open=!1,this.yieldingToHostModal=!1,this.clearYieldPosition(),this.removeOpenListeners(),(e=this.dialogElement)!=null&&e.open)try{this.dialogElement.close()}catch(e){}(t=this.dialogElement)==null||t.classList.remove(`hide`,`show`,`pulse`),this.disableScrollLock||xe(this)}addOpenListeners(){var e;document.addEventListener(`keydown`,this.handleDocumentKeyDown),Ce(this),(e=this.hostModalObserver)==null||e.disconnect(),this.hostModalObserver=ct(this.onHostModalPresenceChange,{ignoreExisting:!0})}removeOpenListeners(){var e;document.removeEventListener(`keydown`,this.handleDocumentKeyDown),_e(this),(e=this.hostModalObserver)==null||e.disconnect(),this.hostModalObserver=null,this.yieldingToHostModal=!1,this.clearYieldPosition()}syncHasTriggerAttribute(){this.toggleAttribute(`data-has-trigger`,!!this.triggerElement)}onTriggerSlotChange(e){let[t]=e.target.assignedElements({flatten:!0});this.triggerElement&&this.triggerElement.removeEventListener(`click`,this.onTriggerClick),this.triggerElement=t==null?null:t,this.syncHasTriggerAttribute(),this.triggerElement&&this.triggerElement.addEventListener(`click`,this.onTriggerClick)}render(){let e=!this.hasCustomHeaderSlot()&&!this.withoutHeader&&!!this.label,t=e&&!this.withoutBodyPadding,n=this.querySelector(`:scope > [slot="footer"]`)!==null;return j`
            <slot name="trigger" @slotchange=${this.onTriggerSlotChange}></slot>
            <dialog
                part="panel"
                aria-label=${this.label||x}
                class=${D({dialog:!0,open:this.open,"dialog--wide":this.size===`wide`})}
                tabindex="-1"
                @cancel=${this.handleDialogCancel}
                @click=${this.handleDialogClick}
                @pointerdown=${this.handleDialogPointerDown}
            >
                <slot name="header">
                    ${e?j`
                            <header part="header" class="header">
                                <h2 part="title" class="title">
                                    <slot name="label">${this.label}</slot>
                                </h2>
                                ${this.description?j`
                                        <p part="description" class="description">
                                            <slot name="description">${this.description}</slot>
                                        </p>
                                    `:j`<slot name="description" hidden></slot>`}
                                <button type="button" class="close" data-dialog="close" aria-label="Close">
                                    <span class="close-icon" aria-hidden="true">${s(ut)}</span>
                                </button>
                            </header>
                        `:x}
                </slot>
                <div
                    part="body"
                    class=${D({body:!0,"body--padded":t})}
                >
                    <slot></slot>
                </div>
                ${n?j`
                        <footer part="footer" class="footer">
                            <slot name="footer" @slotchange=${this.onFooterSlotChange}></slot>
                        </footer>
                    `:j`<slot name="footer" @slotchange=${this.onFooterSlotChange} hidden></slot>`}
            </dialog>
        `}},it.styles=lt,it);T([C({type:Boolean,reflect:!0})],dt.prototype,`open`,void 0),T([C()],dt.prototype,`label`,void 0),T([C()],dt.prototype,`description`,void 0),T([C({attribute:`disable-pointer-dismissal`,type:Boolean,reflect:!0})],dt.prototype,`disablePointerDismissal`,void 0),T([C({attribute:`without-header`,type:Boolean,reflect:!0})],dt.prototype,`withoutHeader`,void 0),T([C({attribute:`without-body-padding`,type:Boolean,reflect:!0})],dt.prototype,`withoutBodyPadding`,void 0),T([C({attribute:`disable-scroll-lock`,type:Boolean,reflect:!0})],dt.prototype,`disableScrollLock`,void 0),T([C({reflect:!0})],dt.prototype,`size`,void 0),T([A(`dialog`)],dt.prototype,`dialogElement`,void 0),T([w()],dt.prototype,`triggerElement`,void 0),dt=T([k(`pk-dialog`)],dt);var ft=E`
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
`,pt={};function mt(e){let t=pt[e];if(t)return t;t=pt[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);t.push(n)}for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t[r]=`%`+(`0`+r.toString(16).toUpperCase()).slice(-2)}return t}function ht(e,t){typeof t!=`string`&&(t=ht.defaultChars);let n=mt(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(e){let t=``;for(let r=0,i=e.length;r<i;r+=3){let a=parseInt(e.slice(r+1,r+3),16);if(a<128){t+=n[a];continue}if((a&224)==192&&r+3<i){let n=parseInt(e.slice(r+4,r+6),16);if((n&192)==128){let e=a<<6&1984|n&63;t+=e<128?`��`:String.fromCharCode(e),r+=3;continue}}if((a&240)==224&&r+6<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16);if((n&192)==128&&(i&192)==128){let e=a<<12&61440|n<<6&4032|i&63;t+=e<2048||e>=55296&&e<=57343?`���`:String.fromCharCode(e),r+=6;continue}}if((a&248)==240&&r+9<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),o=parseInt(e.slice(r+10,r+12),16);if((n&192)==128&&(i&192)==128&&(o&192)==128){let e=a<<18&1835008|n<<12&258048|i<<6&4032|o&63;e<65536||e>1114111?t+=`����`:(e-=65536,t+=String.fromCharCode(55296+(e>>10),56320+(e&1023))),r+=9;continue}}t+=`�`}return t})}ht.defaultChars=`;/?:@&=+$,#`,ht.componentChars=``;var gt={};function _t(e){let t=gt[e];if(t)return t;t=gt[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);/^[0-9a-z]$/i.test(n)?t.push(n):t.push(`%`+(`0`+e.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=e[n];return t}function vt(e,t,n){typeof t!=`string`&&(n=t,t=vt.defaultChars),n===void 0&&(n=!0);let r=_t(t),i=``;for(let t=0,a=e.length;t<a;t++){let o=e.charCodeAt(t);if(n&&o===37&&t+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(t+1,t+3))){i+=e.slice(t,t+3),t+=2;continue}if(o<128){i+=r[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&t+1<a){let n=e.charCodeAt(t+1);if(n>=56320&&n<=57343){i+=encodeURIComponent(e[t]+e[t+1]),t++;continue}}i+=`%EF%BF%BD`;continue}i+=encodeURIComponent(e[t])}return i}vt.defaultChars=`;/?:@&=+$,-_.!~*'()#`,vt.componentChars=`-_.!~*'()`;function yt(e){let t=``;return t+=e.protocol||``,t+=e.slashes?`//`:``,t+=e.auth?e.auth+`@`:``,e.hostname&&e.hostname.indexOf(`:`)!==-1?t+=`[`+e.hostname+`]`:t+=e.hostname||``,t+=e.port?`:`+e.port:``,t+=e.pathname||``,t+=e.search||``,t+=e.hash||``,t}function bt(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var xt=/^([a-z0-9.+-]+:)/i,St=/:[0-9]*$/,Ct=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,wt=[`%`,`/`,`?`,`;`,`#`,`'`,`{`,`}`,`|`,`\\`,`^`,"`",`<`,`>`,`"`,"`",` `,`\r`,`
`,`	`],Tt=[`/`,`?`,`#`],Et=255,Dt=/^[+a-z0-9A-Z_-]{0,63}$/,Ot=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,kt={javascript:!0,"javascript:":!0},At={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function jt(e,t){if(e&&e instanceof bt)return e;let n=new bt;return n.parse(e,t),n}bt.prototype.parse=function(e,t){let n,r,i,a=e;if(a=a.trim(),!t&&e.split(`#`).length===1){let e=Ct.exec(a);if(e)return this.pathname=e[1],e[2]&&(this.search=e[2]),this}let o=xt.exec(a);if(o&&(o=o[0],n=o.toLowerCase(),this.protocol=o,a=a.substr(o.length)),(t||o||a.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=a.substr(0,2)===`//`,i&&!(o&&kt[o])&&(a=a.substr(2),this.slashes=!0)),!kt[o]&&(i||o&&!At[o])){let e=-1;for(let t=0;t<Tt.length;t++)r=a.indexOf(Tt[t]),r!==-1&&(e===-1||r<e)&&(e=r);let t,n;n=e===-1?a.lastIndexOf(`@`):a.lastIndexOf(`@`,e),n!==-1&&(t=a.slice(0,n),a=a.slice(n+1),this.auth=t),e=-1;for(let t=0;t<wt.length;t++)r=a.indexOf(wt[t]),r!==-1&&(e===-1||r<e)&&(e=r);e===-1&&(e=a.length),a[e-1]===`:`&&e--;let i=a.slice(0,e);a=a.slice(e),this.parseHost(i),this.hostname=this.hostname||``;let o=this.hostname[0]===`[`&&this.hostname[this.hostname.length-1]===`]`;if(!o){let e=this.hostname.split(/\./);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n&&!n.match(Dt)){let r=``;for(let e=0,t=n.length;e<t;e++)n.charCodeAt(e)>127?r+=`x`:r+=n[e];if(!r.match(Dt)){let r=e.slice(0,t),i=e.slice(t+1),o=n.match(Ot);o&&(r.push(o[1]),i.unshift(o[2])),i.length&&(a=i.join(`.`)+a),this.hostname=r.join(`.`);break}}}}this.hostname.length>Et&&(this.hostname=``),o&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}let s=a.indexOf(`#`);s!==-1&&(this.hash=a.substr(s),a=a.slice(0,s));let c=a.indexOf(`?`);return c!==-1&&(this.search=a.substr(c),a=a.slice(0,c)),a&&(this.pathname=a),At[n]&&this.hostname&&!this.pathname&&(this.pathname=``),this},bt.prototype.parseHost=function(e){let t=St.exec(e);t&&(t=t[0],t!==`:`&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};var Mt=e({decode:()=>ht,encode:()=>vt,format:()=>yt,parse:()=>jt}),Nt=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Pt=/[\0-\x1F\x7F-\x9F]/,Ft=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,It=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,Lt=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,Rt=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,zt=e({Any:()=>Nt,Cc:()=>Pt,Cf:()=>Ft,P:()=>It,S:()=>Lt,Z:()=>Rt}),Bt=new Uint16Array(`ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xA0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌`.split(``).map(e=>e.charCodeAt(0))),Vt=new Uint16Array(`Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢`.split(``).map(e=>e.charCodeAt(0))),Ht,Ut=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),Wt=(Ht=String.fromCodePoint)==null?function(e){let t=``;return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t}:Ht;function Gt(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=Ut.get(e))==null?e:t}var P;(function(e){e[e.NUM=35]=`NUM`,e[e.SEMI=59]=`SEMI`,e[e.EQUALS=61]=`EQUALS`,e[e.ZERO=48]=`ZERO`,e[e.NINE=57]=`NINE`,e[e.LOWER_A=97]=`LOWER_A`,e[e.LOWER_F=102]=`LOWER_F`,e[e.LOWER_X=120]=`LOWER_X`,e[e.LOWER_Z=122]=`LOWER_Z`,e[e.UPPER_A=65]=`UPPER_A`,e[e.UPPER_F=70]=`UPPER_F`,e[e.UPPER_Z=90]=`UPPER_Z`})(P||(P={}));var Kt=32,qt;(function(e){e[e.VALUE_LENGTH=49152]=`VALUE_LENGTH`,e[e.BRANCH_LENGTH=16256]=`BRANCH_LENGTH`,e[e.JUMP_TABLE=127]=`JUMP_TABLE`})(qt||(qt={}));function Jt(e){return e>=P.ZERO&&e<=P.NINE}function Yt(e){return e>=P.UPPER_A&&e<=P.UPPER_F||e>=P.LOWER_A&&e<=P.LOWER_F}function Xt(e){return e>=P.UPPER_A&&e<=P.UPPER_Z||e>=P.LOWER_A&&e<=P.LOWER_Z||Jt(e)}function Zt(e){return e===P.EQUALS||Xt(e)}var F;(function(e){e[e.EntityStart=0]=`EntityStart`,e[e.NumericStart=1]=`NumericStart`,e[e.NumericDecimal=2]=`NumericDecimal`,e[e.NumericHex=3]=`NumericHex`,e[e.NamedEntity=4]=`NamedEntity`})(F||(F={}));var Qt;(function(e){e[e.Legacy=0]=`Legacy`,e[e.Strict=1]=`Strict`,e[e.Attribute=2]=`Attribute`})(Qt||(Qt={}));var $t=class{constructor(e,t,n){this.decodeTree=e,this.emitCodePoint=t,this.errors=n,this.state=F.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Qt.Strict}startEntity(e){this.decodeMode=e,this.state=F.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,t){switch(this.state){case F.EntityStart:return e.charCodeAt(t)===P.NUM?(this.state=F.NumericStart,this.consumed+=1,this.stateNumericStart(e,t+1)):(this.state=F.NamedEntity,this.stateNamedEntity(e,t));case F.NumericStart:return this.stateNumericStart(e,t);case F.NumericDecimal:return this.stateNumericDecimal(e,t);case F.NumericHex:return this.stateNumericHex(e,t);case F.NamedEntity:return this.stateNamedEntity(e,t)}}stateNumericStart(e,t){return t>=e.length?-1:(e.charCodeAt(t)|Kt)===P.LOWER_X?(this.state=F.NumericHex,this.consumed+=1,this.stateNumericHex(e,t+1)):(this.state=F.NumericDecimal,this.stateNumericDecimal(e,t))}addToNumericResult(e,t,n,r){if(t!==n){let i=n-t;this.result=this.result*Math.pow(r,i)+parseInt(e.substr(t,i),r),this.consumed+=i}}stateNumericHex(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(Jt(r)||Yt(r))t+=1;else return this.addToNumericResult(e,n,t,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(e,n,t,16),-1}stateNumericDecimal(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(Jt(r))t+=1;else return this.addToNumericResult(e,n,t,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(e,n,t,10),-1}emitNumericEntity(e,t){var n;if(this.consumed<=t)return(n=this.errors)==null||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===P.SEMI)this.consumed+=1;else if(this.decodeMode===Qt.Strict)return 0;return this.emitCodePoint(Gt(this.result),this.consumed),this.errors&&(e!==P.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,t){let{decodeTree:n}=this,r=n[this.treeIndex],i=(r&qt.VALUE_LENGTH)>>14;for(;t<e.length;t++,this.excess++){let a=e.charCodeAt(t);if(this.treeIndex=tn(n,r,this.treeIndex+Math.max(1,i),a),this.treeIndex<0)return this.result===0||this.decodeMode===Qt.Attribute&&(i===0||Zt(a))?0:this.emitNotTerminatedNamedEntity();if(r=n[this.treeIndex],i=(r&qt.VALUE_LENGTH)>>14,i!==0){if(a===P.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==Qt.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;let{result:t,decodeTree:n}=this,r=(n[t]&qt.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,r,this.consumed),(e=this.errors)==null||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,t,n){let{decodeTree:r}=this;return this.emitCodePoint(t===1?r[e]&~qt.VALUE_LENGTH:r[e+1],n),t===3&&this.emitCodePoint(r[e+2],n),n}end(){var e;switch(this.state){case F.NamedEntity:return this.result!==0&&(this.decodeMode!==Qt.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case F.NumericDecimal:return this.emitNumericEntity(0,2);case F.NumericHex:return this.emitNumericEntity(0,3);case F.NumericStart:return(e=this.errors)==null||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case F.EntityStart:return 0}}};function en(e){let t=``,n=new $t(e,e=>t+=Wt(e));return function(e,r){let i=0,a=0;for(;(a=e.indexOf(`&`,a))>=0;){t+=e.slice(i,a),n.startEntity(r);let o=n.write(e,a+1);if(o<0){i=a+n.end();break}i=a+o,a=o===0?i+1:i}let o=t+e.slice(i);return t=``,o}}function tn(e,t,n,r){let i=(t&qt.BRANCH_LENGTH)>>7,a=t&qt.JUMP_TABLE;if(i===0)return a!==0&&r===a?n:-1;if(a){let t=r-a;return t<0||t>=i?-1:e[n+t]-1}let o=n,s=o+i-1;for(;o<=s;){let t=o+s>>>1,n=e[t];if(n<r)o=t+1;else if(n>r)s=t-1;else return e[t+i]}return-1}var nn=en(Bt);en(Vt);function rn(e,t=Qt.Legacy){return nn(e,t)}function an(e){return nn(e,Qt.Strict)}var on=e({arrayReplaceAt:()=>fn,asciiTrim:()=>Pn,assign:()=>dn,escapeHtml:()=>Tn,escapeRE:()=>Dn,fromCodePoint:()=>mn,has:()=>un,isMdAsciiPunct:()=>jn,isPunctChar:()=>kn,isPunctCharCode:()=>An,isSpace:()=>I,isString:()=>cn,isValidEntityCode:()=>pn,isWhiteSpace:()=>On,lib:()=>Fn,normalizeReference:()=>Mn,unescapeAll:()=>bn,unescapeMd:()=>yn});function sn(e){return Object.prototype.toString.call(e)}function cn(e){return sn(e)===`[object String]`}var ln=Object.prototype.hasOwnProperty;function un(e,t){return ln.call(e,t)}function dn(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!=`object`)throw TypeError(t+`must be object`);Object.keys(t).forEach(function(n){e[n]=t[n]})}}),e}function fn(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))}function pn(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)==65535||(e&65535)==65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function mn(e){if(e>65535){e-=65536;let t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}return String.fromCharCode(e)}var hn=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,gn=RegExp(hn.source+`|&([a-z#][a-z0-9]{1,31});`,`gi`),_n=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function vn(e,t){if(t.charCodeAt(0)===35&&_n.test(t)){let n=t[1].toLowerCase()===`x`?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return pn(n)?mn(n):e}let n=rn(e);return n===e?e:n}function yn(e){return e.indexOf(`\\`)<0?e:e.replace(hn,`$1`)}function bn(e){return e.indexOf(`\\`)<0&&e.indexOf(`&`)<0?e:e.replace(gn,function(e,t,n){return t||vn(e,n)})}var xn=/[&<>"]/,Sn=/[&<>"]/g,Cn={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`};function wn(e){return Cn[e]}function Tn(e){return xn.test(e)?e.replace(Sn,wn):e}var En=/[.?*+^$[\]\\(){}|-]/g;function Dn(e){return e.replace(En,`\\$&`)}function I(e){switch(e){case 9:case 32:return!0}return!1}function On(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function kn(e){return It.test(e)||Lt.test(e)}function An(e){return kn(mn(e))}function jn(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Mn(e){return e=e.trim().replace(/\s+/g,` `),e.toLowerCase().toUpperCase()}function Nn(e){return e===32||e===9||e===10||e===13}function Pn(e){let t=0;for(;t<e.length&&Nn(e.charCodeAt(t));t++);let n=e.length-1;for(;n>=t&&Nn(e.charCodeAt(n));n--);return e.slice(t,n+1)}var Fn={mdurl:Mt,ucmicro:zt};function In(e,t,n){let r,i,a,o,s=e.posMax,c=e.pos;for(e.pos=t+1,r=1;e.pos<s;){if(a=e.src.charCodeAt(e.pos),a===93&&(r--,r===0)){i=!0;break}if(o=e.pos,e.md.inline.skipToken(e),a===91){if(o===e.pos-1)r++;else if(n)return e.pos=c,-1}}let l=-1;return i&&(l=e.pos),e.pos=c,l}function Ln(e,t,n){let r,i=t,a={ok:!1,pos:0,str:``};if(e.charCodeAt(i)===60){for(i++;i<n;){if(r=e.charCodeAt(i),r===10||r===60)return a;if(r===62)return a.pos=i+1,a.str=bn(e.slice(t+1,i)),a.ok=!0,a;if(r===92&&i+1<n){i+=2;continue}i++}return a}let o=0;for(;i<n&&(r=e.charCodeAt(i),!(r===32||r<32||r===127));){if(r===92&&i+1<n){if(e.charCodeAt(i+1)===32){i++;continue}i+=2;continue}if(r===40&&(o++,o>32))return a;if(r===41){if(o===0)break;o--}i++}return t===i||o!==0?a:(a.str=bn(e.slice(t,i)),a.pos=i,a.ok=!0,a)}function Rn(e,t,n,r){let i,a=t,o={ok:!1,can_continue:!1,pos:0,str:``,marker:0};if(r)o.str=r.str,o.marker=r.marker;else{if(a>=n)return o;let r=e.charCodeAt(a);if(r!==34&&r!==39&&r!==40)return o;t++,a++,r===40&&(r=41),o.marker=r}for(;a<n;){if(i=e.charCodeAt(a),i===o.marker)return o.pos=a+1,o.str+=bn(e.slice(t,a)),o.ok=!0,o;if(i===40&&o.marker===41)return o;i===92&&a+1<n&&a++,a++}return o.can_continue=!0,o.str+=bn(e.slice(t,a)),o}var zn=e({parseLinkDestination:()=>Ln,parseLinkLabel:()=>In,parseLinkTitle:()=>Rn}),Bn={};Bn.code_inline=function(e,t,n,r,i){let a=e[t];return`<code`+i.renderAttrs(a)+`>`+Tn(a.content)+`</code>`},Bn.code_block=function(e,t,n,r,i){let a=e[t];return`<pre`+i.renderAttrs(a)+`><code>`+Tn(e[t].content)+`</code></pre>
`},Bn.fence=function(e,t,n,r,i){let a=e[t],o=a.info?bn(a.info).trim():``,s=``,c=``;if(o){let e=o.split(/(\s+)/g);s=e[0],c=e.slice(2).join(``)}let l;if(l=n.highlight&&n.highlight(a.content,s,c)||Tn(a.content),l.indexOf(`<pre`)===0)return l+`
`;if(o){let e=a.attrIndex(`class`),t=a.attrs?a.attrs.slice():[];e<0?t.push([`class`,n.langPrefix+s]):(t[e]=t[e].slice(),t[e][1]+=` `+n.langPrefix+s);let r={attrs:t};return`<pre><code${i.renderAttrs(r)}>${l}</code></pre>\n`}return`<pre><code${i.renderAttrs(a)}>${l}</code></pre>\n`},Bn.image=function(e,t,n,r,i){let a=e[t];return a.attrs[a.attrIndex(`alt`)][1]=i.renderInlineAsText(a.children,n,r),i.renderToken(e,t,n)},Bn.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`},Bn.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`},Bn.text=function(e,t){return Tn(e[t].content)},Bn.html_block=function(e,t){return e[t].content},Bn.html_inline=function(e,t){return e[t].content};function Vn(){this.rules=dn({},Bn)}Vn.prototype.renderAttrs=function(e){let t,n,r;if(!e.attrs)return``;for(r=``,t=0,n=e.attrs.length;t<n;t++)r+=` `+Tn(e.attrs[t][0])+`="`+Tn(e.attrs[t][1])+`"`;return r},Vn.prototype.renderToken=function(e,t,n){let r=e[t],i=``;if(r.hidden)return``;r.block&&r.nesting!==-1&&t&&e[t-1].hidden&&(i+=`
`),i+=(r.nesting===-1?`</`:`<`)+r.tag,i+=this.renderAttrs(r),r.nesting===0&&n.xhtmlOut&&(i+=` /`);let a=!1;if(r.block&&(a=!0,r.nesting===1&&t+1<e.length)){let n=e[t+1];(n.type===`inline`||n.hidden||n.nesting===-1&&n.tag===r.tag)&&(a=!1)}return i+=a?`>
`:`>`,i},Vn.prototype.renderInline=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;i[o]===void 0?r+=this.renderToken(e,a,t):r+=i[o](e,a,t,n,this)}return r},Vn.prototype.renderInlineAsText=function(e,t,n){let r=``;for(let i=0,a=e.length;i<a;i++)switch(e[i].type){case`text`:r+=e[i].content;break;case`image`:r+=this.renderInlineAsText(e[i].children,t,n);break;case`html_inline`:case`html_block`:r+=e[i].content;break;case`softbreak`:case`hardbreak`:r+=`
`}return r},Vn.prototype.render=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;o===`inline`?r+=this.renderInline(e[a].children,t,n):i[o]===void 0?r+=this.renderToken(e,a,t,n):r+=i[o](e,a,t,n,this)}return r};function L(){this.__rules__=[],this.__cache__=null}L.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1},L.prototype.__compile__=function(){let e=this,t=[``];e.__rules__.forEach(function(e){e.enabled&&e.alt.forEach(function(e){t.indexOf(e)<0&&t.push(e)})}),e.__cache__={},t.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(n){n.enabled&&(t&&n.alt.indexOf(t)<0||e.__cache__[t].push(n.fn))})})},L.prototype.at=function(e,t,n){let r=this.__find__(e),i=n||{};if(r===-1)throw Error(`Parser rule not found: `+e);this.__rules__[r].fn=t,this.__rules__[r].alt=i.alt||[],this.__cache__=null},L.prototype.before=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},L.prototype.after=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i+1,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},L.prototype.push=function(e,t,n){let r=n||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:r.alt||[]}),this.__cache__=null},L.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!0,n.push(e)},this),this.__cache__=null,n},L.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(e){e.enabled=!1}),this.enable(e,t)},L.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!1,n.push(e)},this),this.__cache__=null,n},L.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function Hn(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content=``,this.markup=``,this.info=``,this.meta=null,this.block=!1,this.hidden=!1}Hn.prototype.attrIndex=function(e){if(!this.attrs)return-1;let t=this.attrs;for(let n=0,r=t.length;n<r;n++)if(t[n][0]===e)return n;return-1},Hn.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},Hn.prototype.attrSet=function(e,t){let n=this.attrIndex(e),r=[e,t];n<0?this.attrPush(r):this.attrs[n]=r},Hn.prototype.attrGet=function(e){let t=this.attrIndex(e),n=null;return t>=0&&(n=this.attrs[t][1]),n},Hn.prototype.attrJoin=function(e,t){let n=this.attrIndex(e);n<0?this.attrPush([e,t]):this.attrs[n][1]=this.attrs[n][1]+` `+t};function Un(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}Un.prototype.Token=Hn;var Wn=/\r\n?|\n/g,Gn=/\0/g;function Kn(e){let t;t=e.src.replace(Wn,`
`),t=t.replace(Gn,`�`),e.src=t}function qn(e){let t;e.inlineMode?(t=new e.Token(`inline`,``,0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function Jn(e){let t=e.tokens;for(let n=0,r=t.length;n<r;n++){let r=t[n];r.type===`inline`&&e.md.inline.parse(r.content,e.md,e.env,r.children)}}function Yn(e){return/^<a[>\s]/i.test(e)}function Xn(e){return/^<\/a\s*>/i.test(e)}function Zn(e){let t=e.tokens;if(e.md.options.linkify)for(let n=0,r=t.length;n<r;n++){if(t[n].type!==`inline`||!e.md.linkify.pretest(t[n].content))continue;let r=t[n].children,i=[],a=0;for(let t=r.length-1;t>=0;t--){let n=r[t];if(n.type===`link_close`){for(t--;r[t].level!==n.level&&r[t].type!==`link_open`;)t--;continue}if(n.type===`html_inline`&&(Yn(n.content)&&a>0&&a--,Xn(n.content)&&a++),!(a>0)&&n.type===`text`&&e.md.linkify.test(n.content)){let a=n.content,o=e.md.linkify.match(a),s=[],c=n.level,l=0;o.length>0&&o[0].index===0&&t>0&&r[t-1].type===`text_special`&&(o=o.slice(1));for(let t=0;t<o.length;t++){let n=o[t].url,r=e.md.normalizeLink(n);if(!e.md.validateLink(r))continue;let i=o[t].text;i=o[t].schema?o[t].schema===`mailto:`&&!/^mailto:/i.test(i)?e.md.normalizeLinkText(`mailto:`+i).replace(/^mailto:/,``):e.md.normalizeLinkText(i):e.md.normalizeLinkText(`http://`+i).replace(/^http:\/\//,``);let u=o[t].index;if(u>l){let t=new e.Token(`text`,``,0);t.content=a.slice(l,u),t.level=c,s.push(t)}let d=new e.Token(`link_open`,`a`,1);d.attrs=[[`href`,r]],d.level=c++,d.markup=`linkify`,d.info=`auto`,s.push(d);let f=new e.Token(`text`,``,0);f.content=i,f.level=c,s.push(f);let p=new e.Token(`link_close`,`a`,-1);p.level=--c,p.markup=`linkify`,p.info=`auto`,s.push(p),l=o[t].lastIndex}if(l<a.length){let t=new e.Token(`text`,``,0);t.content=a.slice(l),t.level=c,s.push(t)}i.push({index:t,nodes:s})}}if(i.length>0){let e=r.length;for(let t of i)e+=t.nodes.length-1;let a=Array(e),o=0,s=0;i.reverse();for(let e=0;e<r.length;e++){let t=i[o];if((t==null?void 0:t.index)===e){for(let e of t.nodes)a[s++]=e;o++}else a[s++]=r[e]}t[n].children=a}}}var Qn=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,$n=/\((c|tm|r)\)/i,er=/\((c|tm|r)\)/gi,tr={c:`©`,r:`®`,tm:`™`};function nr(e,t){return tr[t.toLowerCase()]}function rr(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&(r.content=r.content.replace(er,nr)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function ir(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&Qn.test(r.content)&&(r.content=r.content.replace(/\+-/g,`±`).replace(/\.{2,}/g,`…`).replace(/([?!])…/g,`$1..`).replace(/([?!]){4,}/g,`$1$1$1`).replace(/,{2,}/g,`,`).replace(/(^|[^-])---(?=[^-]|$)/gm,`$1—`).replace(/(^|\s)--(?=\s|$)/gm,`$1–`).replace(/(^|[^-\s])--(?=[^-\s]|$)/gm,`$1–`)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function ar(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type===`inline`&&($n.test(e.tokens[t].content)&&rr(e.tokens[t].children),Qn.test(e.tokens[t].content)&&ir(e.tokens[t].children))}var or=/['"]/,sr=/['"]/g,cr=`’`,lr=1e3;function ur(e,t,n){for(;e.length>n;){let n=e.pop();n.isSingleQuote?t.single=n.prevSameQuoteIdx:t.double=n.prevSameQuoteIdx}}function dr(e,t,n,r){e[t]||(e[t]=[]),e[t].push({pos:n,ch:r})}function fr(e,t){let n=``,r=0;t.sort((e,t)=>e.pos-t.pos);for(let i=0;i<t.length;i++){let a=t[i];n+=e.slice(r,a.pos)+a.ch,r=a.pos+1}return n+e.slice(r)}function pr(e,t){let n,r=[],i={single:-1,double:-1},a={};for(let o=0;o<e.length;o++){let s=e[o],c=e[o].level;for(n=r.length-1;n>=0&&!(r[n].level<=c);n--);if(ur(r,i,n+1),s.type!==`text`)continue;let l=s.content,u=0,d=l.length;OUTER:for(;u<d;){sr.lastIndex=u;let s=sr.exec(l);if(!s)break;let f=!0,p=!0;u=s.index+1;let m=s[0]===`'`,h=32;if(s.index-1>=0)h=l.charCodeAt(s.index-1);else for(n=o-1;n>=0&&e[n].type!==`softbreak`&&e[n].type!==`hardbreak`;n--)if(e[n].content){h=e[n].content.charCodeAt(e[n].content.length-1);break}let g=32;if(u<d)g=l.charCodeAt(u);else for(n=o+1;n<e.length&&e[n].type!==`softbreak`&&e[n].type!==`hardbreak`;n++)if(e[n].content){g=e[n].content.charCodeAt(0);break}let _=jn(h)||An(h),v=jn(g)||An(g),y=On(h),b=On(g);if(b?f=!1:v&&(y||_||(f=!1)),y?p=!1:_&&(b||v||(p=!1)),g===34&&s[0]===`"`&&h>=48&&h<=57&&(p=f=!1),f&&p&&(f=_,p=v),!f&&!p){m&&dr(a,o,s.index,cr);continue}if(p&&(n=m?i.single:i.double,n>=0&&r[n].level===c)){let e=r[n],c,l;m?(c=t.md.options.quotes[2],l=t.md.options.quotes[3]):(c=t.md.options.quotes[0],l=t.md.options.quotes[1]),dr(a,o,s.index,l),dr(a,e.tokenIdx,e.contentPos,c),ur(r,i,n);continue OUTER}if(f){if(r.length>=lr)return;r.push({tokenIdx:o,contentPos:s.index,isSingleQuote:m,level:c,prevSameQuoteIdx:m?i.single:i.double}),m?i.single=r.length-1:i.double=r.length-1}else p&&m&&dr(a,o,s.index,cr)}}Object.keys(a).forEach(function(t){e[t].content=fr(e[t].content,a[t])})}function mr(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type===`inline`&&or.test(e.tokens[t].content)&&pr(e.tokens[t].children,e)}function hr(e){let t,n,r=e.tokens,i=r.length;for(let e=0;e<i;e++){if(r[e].type!==`inline`)continue;let i=r[e].children,a=i.length;for(t=0;t<a;t++)i[t].type===`text_special`&&(i[t].type=`text`);for(t=n=0;t<a;t++)i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}}var gr=[[`normalize`,Kn],[`block`,qn],[`inline`,Jn],[`linkify`,Zn],[`replacements`,ar],[`smartquotes`,mr],[`text_join`,hr]];function _r(){this.ruler=new L;for(let e=0;e<gr.length;e++)this.ruler.push(gr[e][0],gr[e][1])}_r.prototype.process=function(e){let t=this.ruler.getRules(``);for(let n=0,r=t.length;n<r;n++)t[n](e)},_r.prototype.State=Un;function vr(e,t,n,r){this.src=e,this.md=t,this.env=n,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType=`root`,this.level=0;let i=this.src;for(let e=0,t=0,n=0,r=0,a=i.length,o=!1;t<a;t++){let s=i.charCodeAt(t);if(!o){if(I(s)){n++,s===9?r+=4-r%4:r++;continue}o=!0}(s===10||t===a-1)&&(s!==10&&t++,this.bMarks.push(e),this.eMarks.push(t),this.tShift.push(n),this.sCount.push(r),this.bsCount.push(0),o=!1,n=0,r=0,e=t+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}vr.prototype.push=function(e,t,n){let r=new Hn(e,t,n);return r.block=!0,n<0&&this.level--,r.level=this.level,n>0&&this.level++,this.tokens.push(r),r},vr.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},vr.prototype.skipEmptyLines=function(e){for(let t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},vr.prototype.skipSpaces=function(e){for(let t=this.src.length;e<t&&I(this.src.charCodeAt(e));e++);return e},vr.prototype.skipSpacesBack=function(e,t){if(e<=t)return e;for(;e>t;)if(!I(this.src.charCodeAt(--e)))return e+1;return e},vr.prototype.skipChars=function(e,t){for(let n=this.src.length;e<n&&this.src.charCodeAt(e)===t;e++);return e},vr.prototype.skipCharsBack=function(e,t,n){if(e<=n)return e;for(;e>n;)if(t!==this.src.charCodeAt(--e))return e+1;return e},vr.prototype.getLines=function(e,t,n,r){if(e>=t)return``;let i=Array(t-e);for(let a=0,o=e;o<t;o++,a++){let e=0,s=this.bMarks[o],c=s,l;for(l=o+1<t||r?this.eMarks[o]+1:this.eMarks[o];c<l&&e<n;){let t=this.src.charCodeAt(c);if(I(t))t===9?e+=4-(e+this.bsCount[o])%4:e++;else if(c-s<this.tShift[o])e++;else break;c++}e>n?i[a]=Array(e-n+1).join(` `)+this.src.slice(c,l):i[a]=this.src.slice(c,l)}return i.join(``)},vr.prototype.Token=Hn;var yr=65536;function br(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];return e.src.slice(n,r)}function xr(e){let t=[],n=e.length,r=0,i=e.charCodeAt(r),a=!1,o=0,s=``;for(;r<n;)i===124&&(a?(s+=e.substring(o,r-1),o=r):(t.push(s+e.substring(o,r)),s=``,o=r+1)),a=i===92,r++,i=e.charCodeAt(r);return t.push(s+e.substring(o)),t}function Sr(e,t,n,r){if(t+2>n)return!1;let i=t+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let a=e.bMarks[i]+e.tShift[i];if(a>=e.eMarks[i])return!1;let o=e.src.charCodeAt(a++);if(o!==124&&o!==45&&o!==58||a>=e.eMarks[i])return!1;let s=e.src.charCodeAt(a++);if(s!==124&&s!==45&&s!==58&&!I(s)||o===45&&I(s))return!1;for(;a<e.eMarks[i];){let t=e.src.charCodeAt(a);if(t!==124&&t!==45&&t!==58&&!I(t))return!1;a++}let c=br(e,t+1),l=c.split(`|`),u=[];for(let e=0;e<l.length;e++){let t=l[e].trim();if(!t){if(e===0||e===l.length-1)continue;return!1}if(!/^:?-+:?$/.test(t))return!1;t.charCodeAt(t.length-1)===58?u.push(t.charCodeAt(0)===58?`center`:`right`):t.charCodeAt(0)===58?u.push(`left`):u.push(``)}if(c=br(e,t).trim(),c.indexOf(`|`)===-1||e.sCount[t]-e.blkIndent>=4)return!1;l=xr(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop();let d=l.length;if(d===0||d!==u.length)return!1;if(r)return!0;let f=e.parentType;e.parentType=`table`;let p=e.md.block.ruler.getRules(`blockquote`),m=e.push(`table_open`,`table`,1),h=[t,0];m.map=h;let g=e.push(`thead_open`,`thead`,1);g.map=[t,t+1];let _=e.push(`tr_open`,`tr`,1);_.map=[t,t+1];for(let t=0;t<l.length;t++){let n=e.push(`th_open`,`th`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t].trim(),r.children=[],e.push(`th_close`,`th`,-1)}e.push(`tr_close`,`tr`,-1),e.push(`thead_close`,`thead`,-1);let v,y=0;for(i=t+2;i<n&&!(e.sCount[i]<e.blkIndent);i++){let r=!1;for(let t=0,a=p.length;t<a;t++)if(p[t](e,i,n,!0)){r=!0;break}if(r||(c=br(e,i).trim(),!c)||e.sCount[i]-e.blkIndent>=4||(l=xr(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop(),y+=d-l.length,y>yr))break;if(i===t+2){let n=e.push(`tbody_open`,`tbody`,1);n.map=v=[t+2,0]}let a=e.push(`tr_open`,`tr`,1);a.map=[i,i+1];for(let t=0;t<d;t++){let n=e.push(`td_open`,`td`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t]?l[t].trim():``,r.children=[],e.push(`td_close`,`td`,-1)}e.push(`tr_close`,`tr`,-1)}return v&&(e.push(`tbody_close`,`tbody`,-1),v[1]=i),e.push(`table_close`,`table`,-1),h[1]=i,e.parentType=f,e.line=i,!0}function Cr(e,t,n){if(e.sCount[t]-e.blkIndent<4)return!1;let r=t+1,i=r;for(;r<n;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,i=r;continue}break}e.line=i;let a=e.push(`code_block`,`code`,0);return a.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,a.map=[t,e.line],!0}function wr(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||i+3>a)return!1;let o=e.src.charCodeAt(i);if(o!==126&&o!==96)return!1;let s=i;i=e.skipChars(i,o);let c=i-s;if(c<3)return!1;let l=e.src.slice(s,i),u=e.src.slice(i,a);if(o===96&&u.indexOf(String.fromCharCode(o))>=0)return!1;if(r)return!0;let d=t,f=!1;for(;d++,!(d>=n||(i=s=e.bMarks[d]+e.tShift[d],a=e.eMarks[d],i<a&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(i)===o&&!(e.sCount[d]-e.blkIndent>=4)&&(i=e.skipChars(i,o),!(i-s<c)&&(i=e.skipSpaces(i),!(i<a)))){f=!0;break}c=e.sCount[t],e.line=d+ +!!f;let p=e.push(`fence`,`code`,0);return p.info=u,p.content=e.getLines(t+1,d,c,!0),p.markup=l,p.map=[t,e.line],!0}function Tr(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(r)return!0;let s=[],c=[],l=[],u=[],d=e.md.block.ruler.getRules(`blockquote`),f=e.parentType;e.parentType=`blockquote`;let p=!1,m;for(m=t;m<n;m++){let t=e.sCount[m]<e.blkIndent;if(i=e.bMarks[m]+e.tShift[m],a=e.eMarks[m],i>=a)break;if(e.src.charCodeAt(i++)===62&&!t){let t=e.sCount[m]+1,n,r;e.src.charCodeAt(i)===32?(i++,t++,r=!1,n=!0):e.src.charCodeAt(i)===9?(n=!0,(e.bsCount[m]+t)%4==3?(i++,t++,r=!1):r=!0):n=!1;let o=t;for(s.push(e.bMarks[m]),e.bMarks[m]=i;i<a;){let t=e.src.charCodeAt(i);if(I(t))t===9?o+=4-(o+e.bsCount[m]+ +!!r)%4:o++;else break;i++}p=i>=a,c.push(e.bsCount[m]),e.bsCount[m]=e.sCount[m]+1+ +!!n,l.push(e.sCount[m]),e.sCount[m]=o-t,u.push(e.tShift[m]),e.tShift[m]=i-e.bMarks[m];continue}if(p)break;let r=!1;for(let t=0,i=d.length;t<i;t++)if(d[t](e,m,n,!0)){r=!0;break}if(r){e.lineMax=m,e.blkIndent!==0&&(s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]-=e.blkIndent);break}s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]=-1}let h=e.blkIndent;e.blkIndent=0;let g=e.push(`blockquote_open`,`blockquote`,1);g.markup=`>`;let _=[t,0];g.map=_,e.md.block.tokenize(e,t,m);let v=e.push(`blockquote_close`,`blockquote`,-1);v.markup=`>`,e.lineMax=o,e.parentType=f,_[1]=e.line;for(let n=0;n<u.length;n++)e.bMarks[n+t]=s[n],e.tShift[n+t]=u[n],e.sCount[n+t]=l[n],e.bsCount[n+t]=c[n];return e.blkIndent=h,!0}function Er(e,t,n,r){let i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let a=e.bMarks[t]+e.tShift[t],o=e.src.charCodeAt(a++);if(o!==42&&o!==45&&o!==95)return!1;let s=1;for(;a<i;){let t=e.src.charCodeAt(a++);if(t!==o&&!I(t))return!1;t===o&&s++}if(s<3)return!1;if(r)return!0;e.line=t+1;let c=e.push(`hr`,`hr`,0);return c.map=[t,e.line],c.markup=Array(s+1).join(String.fromCharCode(o)),!0}function Dr(e,t){let n=e.eMarks[t],r=e.bMarks[t]+e.tShift[t],i=e.src.charCodeAt(r++);return i!==42&&i!==45&&i!==43||r<n&&!I(e.src.charCodeAt(r))?-1:r}function Or(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t],i=n;if(i+1>=r)return-1;let a=e.src.charCodeAt(i++);if(a<48||a>57)return-1;for(;;){if(i>=r)return-1;if(a=e.src.charCodeAt(i++),a>=48&&a<=57){if(i-n>=10)return-1;continue}if(a===41||a===46)break;return-1}return i<r&&(a=e.src.charCodeAt(i),!I(a))?-1:i}function kr(e,t){let n=e.level+2;for(let r=t+2,i=e.tokens.length-2;r<i;r++)e.tokens[r].level===n&&e.tokens[r].type===`paragraph_open`&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function Ar(e,t,n,r){let i,a,o,s,c=t,l=!0;if(e.sCount[c]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[c]-e.listIndent>=4&&e.sCount[c]<e.blkIndent)return!1;let u=!1;r&&e.parentType===`paragraph`&&e.sCount[c]>=e.blkIndent&&(u=!0);let d,f,p;if((p=Or(e,c))>=0){if(d=!0,o=e.bMarks[c]+e.tShift[c],f=Number(e.src.slice(o,p-1)),u&&f!==1)return!1}else if((p=Dr(e,c))>=0)d=!1;else return!1;if(u&&e.skipSpaces(p)>=e.eMarks[c])return!1;if(r)return!0;let m=e.src.charCodeAt(p-1),h=e.tokens.length;d?(s=e.push(`ordered_list_open`,`ol`,1),f!==1&&(s.attrs=[[`start`,f]])):s=e.push(`bullet_list_open`,`ul`,1);let g=[c,0];s.map=g,s.markup=String.fromCharCode(m);let _=!1,v=e.md.block.ruler.getRules(`list`),y=e.parentType;for(e.parentType=`list`;c<n;){a=p,i=e.eMarks[c];let t=e.sCount[c]+p-(e.bMarks[c]+e.tShift[c]),r=t;for(;a<i;){let t=e.src.charCodeAt(a);if(t===9)r+=4-(r+e.bsCount[c])%4;else if(t===32)r++;else break;a++}let u=a,f;f=u>=i?1:r-t,f>4&&(f=1);let h=t+f;s=e.push(`list_item_open`,`li`,1),s.markup=String.fromCharCode(m);let g=[c,0];s.map=g,d&&(s.info=e.src.slice(o,p-1));let y=e.tight,b=e.tShift[c],ee=e.sCount[c],te=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=h,e.tight=!0,e.tShift[c]=u-e.bMarks[c],e.sCount[c]=r,u>=i&&e.isEmpty(c+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,c,n,!0),(!e.tight||_)&&(l=!1),_=e.line-c>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=te,e.tShift[c]=b,e.sCount[c]=ee,e.tight=y,s=e.push(`list_item_close`,`li`,-1),s.markup=String.fromCharCode(m),c=e.line,g[1]=c,c>=n||e.sCount[c]<e.blkIndent||e.sCount[c]-e.blkIndent>=4)break;let ne=!1;for(let t=0,r=v.length;t<r;t++)if(v[t](e,c,n,!0)){ne=!0;break}if(ne)break;if(d){if(p=Or(e,c),p<0)break;o=e.bMarks[c]+e.tShift[c]}else if(p=Dr(e,c),p<0)break;if(m!==e.src.charCodeAt(p-1))break}return s=d?e.push(`ordered_list_close`,`ol`,-1):e.push(`bullet_list_close`,`ul`,-1),s.markup=String.fromCharCode(m),g[1]=c,e.line=c,e.parentType=y,l&&kr(e,h),!0}var jr=999;function Mr(e){let t=e.length;for(let n=0;n<e.length-1;n++){let r=e.charCodeAt(n);if(r<55296||r>56319)continue;let i=e.charCodeAt(n+1);i>=56320&&i<=57343&&(t--,n++)}return t}function Nr(e,t){return Math.min(e.eMarks[t]+1,e.src.length)}function Pr(e,t){let n=e.lineMax;if(t>=n||e.isEmpty(t))return-1;let r=!1;if(e.sCount[t]-e.blkIndent>3&&(r=!0),e.sCount[t]<0&&(r=!0),!r){let r=e.md.block.ruler.getRules(`reference`),i=e.parentType;e.parentType=`reference`;let a=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,t,n,!0)){a=!0;break}if(e.parentType=i,a)return-1}return e.bMarks[t]+e.tShift[t]}function Fr(e,t,n,r){let i=e.src,a=e.bMarks[t]+e.tShift[t],o=t+1;if(e.sCount[t]-e.blkIndent>=4||i.charCodeAt(a)!==91)return!1;let s=Nr(e,t),c=``,l=-1,u=++a;for(;a<s;){if(c.length+a-u>jr*2)return!1;let t=i.charCodeAt(a);if(t===91)return!1;if(t===93){l=a;break}if(t===92&&(t=i.charCodeAt(++a)),t===10&&a<s){let t=Pr(e,o);if(t<0)return!1;c+=i.slice(u,s),a=u=t,s=Nr(e,o++);continue}a++}if(l<0||i.charCodeAt(l+1)!==58||(c+=i.slice(u,l),c.length>jr&&Mr(c)>jr))return!1;for(a=l+2;a<s;){let t=i.charCodeAt(a);if(t===10){let t=Pr(e,o);if(t<0)break;a=t,s=Nr(e,o++)}else if(I(t))a++;else break}let d=e.md.helpers.parseLinkDestination(i,a,s);if(!d.ok)return!1;let f=e.md.normalizeLink(d.str);if(!e.md.validateLink(f))return!1;a=d.pos;let p=a,m=s,h=o;for(;a<s;){let t=i.charCodeAt(a);if(t===10){let t=Pr(e,o);if(t<0)break;a=t,s=Nr(e,o++)}else if(I(t))a++;else break}let g=a,_=e.md.helpers.parseLinkTitle(i,a,s);for(;_.can_continue;){let t=Pr(e,o);if(t<0)break;a=t,s=Nr(e,o++),_=e.md.helpers.parseLinkTitle(i,a,s,_)}let v;for(g!==p&&_.ok?(v=_.str,a=_.pos):(v=``,a=p,s=m,o=h);a<s&&I(i.charCodeAt(a));)a++;if(a<s&&i.charCodeAt(a)!==10&&v)for(v=``,a=p,s=m,o=h;a<s&&I(i.charCodeAt(a));)a++;if(a<s&&i.charCodeAt(a)!==10)return!1;let y=Mn(c);return y?r?!0:(e.env.references===void 0&&(e.env.references={}),e.env.references[y]===void 0&&(e.env.references[y]={title:v,href:f}),e.line=o,!0):!1}var Ir=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),Lr=`<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>`,Rr=`<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>`;RegExp(`^(?:`+Lr+`|`+Rr+`|<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)`);var zr=RegExp(`^(?:`+Lr+`|`+Rr+`)`),Br=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Za-z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[RegExp(`^</?(`+Ir.join(`|`)+`)(?=(\\s|/?>|$))`,`i`),/^$/,!0],[RegExp(zr.source+`\\s*$`),/^$/,!1]];function Vr(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let o=e.src.slice(i,a),s=0;for(;s<Br.length&&!Br[s][0].test(o);s++);if(s===Br.length)return!1;if(r)return Br[s][2];let c=t+1,l=Br[s][1].test(``);if(!Br[s][1].test(o)){for(;c<n&&!(e.sCount[c]<e.blkIndent&&(l||!e.isEmpty(c)));c++)if(i=e.bMarks[c]+e.tShift[c],a=e.eMarks[c],o=e.src.slice(i,a),Br[s][1].test(o)){o.length!==0&&c++;break}}e.line=c;let u=e.push(`html_block`,``,0);return u.map=[t,c],u.content=e.getLines(t,c,e.blkIndent,!0),!0}function Hr(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let o=e.src.charCodeAt(i);if(o!==35||i>=a)return!1;let s=1;for(o=e.src.charCodeAt(++i);o===35&&i<a&&s<=6;)s++,o=e.src.charCodeAt(++i);if(s>6||i<a&&!I(o))return!1;if(r)return!0;a=e.skipSpacesBack(a,i);let c=e.skipCharsBack(a,35,i);c>i&&I(e.src.charCodeAt(c-1))&&(a=c),e.line=t+1;let l=e.push(`heading_open`,`h`+String(s),1);l.markup=`########`.slice(0,s),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=Pn(e.src.slice(i,a)),u.map=[t,e.line],u.children=[];let d=e.push(`heading_close`,`h`+String(s),-1);return d.markup=`########`.slice(0,s),!0}function Ur(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`);if(e.sCount[t]-e.blkIndent>=4)return!1;let i=e.parentType;e.parentType=`paragraph`;let a=0,o,s=t+1;for(;s<n&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let t=e.bMarks[s]+e.tShift[s],n=e.eMarks[s];if(t<n&&(o=e.src.charCodeAt(t),(o===45||o===61)&&(t=e.skipChars(t,o),t=e.skipSpaces(t),t>=n))){a=o===61?1:2;break}}if(e.sCount[s]<0)continue;let t=!1;for(let i=0,a=r.length;i<a;i++)if(r[i](e,s,n,!0)){t=!0;break}if(t)break}if(!a)return e.parentType=i,!1;let c=Pn(e.getLines(t,s,e.blkIndent,!1));e.line=s+1;let l=e.push(`heading_open`,`h`+String(a),1);l.markup=String.fromCharCode(o),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=c,u.map=[t,e.line-1],u.children=[];let d=e.push(`heading_close`,`h`+String(a),-1);return d.markup=String.fromCharCode(o),e.parentType=i,!0}function Wr(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`),i=e.parentType,a=t+1;for(e.parentType=`paragraph`;a<n&&!e.isEmpty(a);a++){if(e.sCount[a]-e.blkIndent>3||e.sCount[a]<0)continue;let t=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,a,n,!0)){t=!0;break}if(t)break}let o=Pn(e.getLines(t,a,e.blkIndent,!1));e.line=a;let s=e.push(`paragraph_open`,`p`,1);s.map=[t,e.line];let c=e.push(`inline`,``,0);return c.content=o,c.map=[t,e.line],c.children=[],e.push(`paragraph_close`,`p`,-1),e.parentType=i,!0}var Gr=[[`table`,Sr,[`paragraph`,`reference`]],[`code`,Cr],[`fence`,wr,[`paragraph`,`reference`,`blockquote`,`list`]],[`blockquote`,Tr,[`paragraph`,`reference`,`blockquote`,`list`]],[`hr`,Er,[`paragraph`,`reference`,`blockquote`,`list`]],[`list`,Ar,[`paragraph`,`reference`,`blockquote`]],[`reference`,Fr],[`html_block`,Vr,[`paragraph`,`reference`,`blockquote`]],[`heading`,Hr,[`paragraph`,`reference`,`blockquote`]],[`lheading`,Ur],[`paragraph`,Wr]];function Kr(){this.ruler=new L;for(let e=0;e<Gr.length;e++)this.ruler.push(Gr[e][0],Gr[e][1],{alt:(Gr[e][2]||[]).slice()})}Kr.prototype.tokenize=function(e,t,n){let r=this.ruler.getRules(``),i=r.length,a=e.md.options.maxNesting,o=t,s=!1;for(;o<n&&(e.line=o=e.skipEmptyLines(o),!(o>=n||e.sCount[o]<e.blkIndent));){if(e.level>=a){e.line=n;break}let t=e.line,c=!1;for(let a=0;a<i;a++)if(c=r[a](e,o,n,!1),c){if(t>=e.line)throw Error(`block rule didn't increment state.line`);break}if(!c)throw Error(`none of the block rules matched`);e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),o=e.line,o<n&&e.isEmpty(o)&&(s=!0,o++,e.line=o)}},Kr.prototype.parse=function(e,t,n,r){if(!e)return;let i=new this.State(e,t,n,r);this.tokenize(i,i.line,i.lineMax)},Kr.prototype.State=vr;function qr(e,t,n,r){this.src=e,this.env=n,this.md=t,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending=``,this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.skipHtmlSpecial=!1,this.linkLevel=0}qr.prototype.pushPending=function(){let e=new Hn(`text`,``,0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending=``,e},qr.prototype.push=function(e,t,n){this.pending&&this.pushPending();let r=new Hn(e,t,n),i=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r},qr.prototype.scanDelims=function(e,t){let n=this.posMax,r=this.src.charCodeAt(e),i;if(e===0)i=32;else if(e===1)i=this.src.charCodeAt(0),(i&63488)==55296&&(i=65533);else if(i=this.src.charCodeAt(e-1),(i&64512)==56320){let t=this.src.charCodeAt(e-2);i=(t&64512)==55296?65536+(t-55296<<10)+(i-56320):65533}else(i&64512)==55296&&(i=65533);let a=e;for(;a<n&&this.src.charCodeAt(a)===r;)a++;let o=a-e,s=a<n?this.src.charCodeAt(a):32;if((s&64512)==55296){let e=this.src.charCodeAt(a+1);s=(e&64512)==56320?65536+(s-55296<<10)+(e-56320):65533}else(s&64512)==56320&&(s=65533);let c=jn(i)||An(i),l=jn(s)||An(s),u=On(i),d=On(s),f=!d&&(!l||u||c),p=!u&&(!c||d||l);return{can_open:f&&(t||!p||c),can_close:p&&(t||!f||l),length:o}},qr.prototype.Token=Hn;function Jr(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function Yr(e,t){let n=e.pos;for(;n<e.posMax&&!Jr(e.src.charCodeAt(n));)n++;return n!==e.pos&&(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}function Xr(e){return e>=65&&e<=90||e>=97&&e<=122}function Zr(e){return e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===45||e===46}function Qr(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;let n=e.pos,r=e.posMax;if(n+3>r||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47)return!1;let i=n-Math.min(10,e.pending.length,n),a=n;for(;a>i&&Zr(e.src.charCodeAt(a-1));)a--;if(a===n||!Xr(e.src.charCodeAt(a)))return!1;let o=n-a,s=e.md.linkify.matchAtStart(e.src.slice(a));if(!s)return!1;let c=s.url;if(c.length<=o)return!1;let l=c.length;for(;l>0&&c.charCodeAt(l-1)===42;)l--;l!==c.length&&(c=c.slice(0,l));let u=e.md.normalizeLink(c);if(!e.md.validateLink(u))return!1;if(!t){e.pending=e.pending.slice(0,-o);let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,u]],t.markup=`linkify`,t.info=`auto`;let n=e.push(`text`,``,0);n.content=e.md.normalizeLinkText(c);let r=e.push(`link_close`,`a`,-1);r.markup=`linkify`,r.info=`auto`}return e.pos+=c.length-o,!0}function $r(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==10)return!1;let r=e.pending.length-1,i=e.posMax;if(!t){if(r>=0&&e.pending.charCodeAt(r)===32){if(r>=1&&e.pending.charCodeAt(r-1)===32){let t=r-1;for(;t>=1&&e.pending.charCodeAt(t-1)===32;)t--;e.pending=e.pending.slice(0,t),e.push(`hardbreak`,`br`,0)}else e.pending=e.pending.slice(0,-1),e.push(`softbreak`,`br`,0)}else e.push(`softbreak`,`br`,0)}for(n++;n<i&&I(e.src.charCodeAt(n));)n++;return e.pos=n,!0}var ei=[];for(let e=0;e<256;e++)ei.push(0);`\\!"#$%&'()*+,./:;<=>?@[]^_\`{|}~-`.split(``).forEach(function(e){ei[e.charCodeAt(0)]=1});function ti(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==92||(n++,n>=r))return!1;let i=e.src.charCodeAt(n);if(i===10){for(t||e.push(`hardbreak`,`br`,0),n++;n<r&&(i=e.src.charCodeAt(n),I(i));)n++;return e.pos=n,!0}if(i===32){if(!t){let t=e.push(`text_special`,``,0);t.content=`\\`,t.markup=`\\`,t.info=`escape`}return e.pos=n,!0}let a=e.src[n];if(i>=55296&&i<=56319&&n+1<r){let t=e.src.charCodeAt(n+1);t>=56320&&t<=57343&&(a+=e.src[n+1],n++)}let o=`\\`+a;if(!t){let t=e.push(`text_special`,``,0);t.content=i<256&&ei[i]!==0?a:o,t.markup=o,t.info=`escape`}return e.pos=n+1,!0}function ni(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==96)return!1;let r=n;n++;let i=e.posMax;for(;n<i&&e.src.charCodeAt(n)===96;)n++;let a=e.src.slice(r,n),o=a.length;if(e.backticksScanned&&(e.backticks[o]||0)<=r)return t||(e.pending+=a),e.pos+=o,!0;let s=n,c;for(;(c=e.src.indexOf("`",s))!==-1;){for(s=c+1;s<i&&e.src.charCodeAt(s)===96;)s++;let r=s-c;if(r===o){if(!t){let t=e.push(`code_inline`,`code`,0);t.markup=a,t.content=e.src.slice(n,c).replace(/\n/g,` `).replace(/^ (.+) $/,`$1`)}return e.pos=s,!0}e.backticks[r]=c}return e.backticksScanned=!0,t||(e.pending+=a),e.pos+=o,!0}function ri(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==126)return!1;let i=e.scanDelims(e.pos,!0),a=i.length,o=String.fromCharCode(r);if(a<2)return!1;let s;a%2&&(s=e.push(`text`,``,0),s.content=o,a--);for(let t=0;t<a;t+=2)s=e.push(`text`,``,0),s.content=o+o,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function ii(e,t){let n,r=[],i=t.length;for(let a=0;a<i;a++){let i=t[a];if(i.marker!==126||i.end===-1)continue;let o=t[i.end];n=e.tokens[i.token],n.type=`s_open`,n.tag=`s`,n.nesting=1,n.markup=`~~`,n.content=``,n=e.tokens[o.token],n.type=`s_close`,n.tag=`s`,n.nesting=-1,n.markup=`~~`,n.content=``,e.tokens[o.token-1].type===`text`&&e.tokens[o.token-1].content===`~`&&r.push(o.token-1)}for(;r.length;){let t=r.pop(),i=t+1;for(;i<e.tokens.length&&e.tokens[i].type===`s_close`;)i++;i--,t!==i&&(n=e.tokens[i],e.tokens[i]=e.tokens[t],e.tokens[t]=n)}}function ai(e){let t=e.tokens_meta,n=e.tokens_meta.length;ii(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&ii(e,t[r].delimiters)}var oi={tokenize:ri,postProcess:ai};function si(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==95&&r!==42)return!1;let i=e.scanDelims(e.pos,r===42);for(let t=0;t<i.length;t++){let t=e.push(`text`,``,0);t.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function ci(e,t){let n=t.length;for(let r=n-1;r>=0;r--){let n=t[r];if(n.marker!==95&&n.marker!==42||n.end===-1)continue;let i=t[n.end],a=r>0&&t[r-1].end===n.end+1&&t[r-1].marker===n.marker&&t[r-1].token===n.token-1&&t[n.end+1].token===i.token+1,o=String.fromCharCode(n.marker),s=e.tokens[n.token];s.type=a?`strong_open`:`em_open`,s.tag=a?`strong`:`em`,s.nesting=1,s.markup=a?o+o:o,s.content=``;let c=e.tokens[i.token];c.type=a?`strong_close`:`em_close`,c.tag=a?`strong`:`em`,c.nesting=-1,c.markup=a?o+o:o,c.content=``,a&&(e.tokens[t[r-1].token].content=``,e.tokens[t[n.end+1].token].content=``,r--)}}function li(e){let t=e.tokens_meta,n=e.tokens_meta.length;ci(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&ci(e,t[r].delimiters)}var ui={tokenize:si,postProcess:li};function di(e,t){let n,r,i,a,o=``,s=``,c=e.pos,l=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;let u=e.pos,d=e.posMax,f=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let m=p+1;if(m<d&&e.src.charCodeAt(m)===40){for(l=!1,m++;m<d&&(n=e.src.charCodeAt(m),I(n)||n===10);m++);if(m>=d)return!1;if(c=m,i=e.md.helpers.parseLinkDestination(e.src,m,e.posMax),i.ok){for(o=e.md.normalizeLink(i.str),e.md.validateLink(o)?m=i.pos:o=``,c=m;m<d&&(n=e.src.charCodeAt(m),I(n)||n===10);m++);if(i=e.md.helpers.parseLinkTitle(e.src,m,e.posMax),m<d&&c!==m&&i.ok)for(s=i.str,m=i.pos;m<d&&(n=e.src.charCodeAt(m),I(n)||n===10);m++);}(m>=d||e.src.charCodeAt(m)!==41)&&(l=!0),m++}if(l){if(e.env.references===void 0)return!1;if(m<d&&e.src.charCodeAt(m)===91?(c=m+1,m=e.md.helpers.parseLinkLabel(e,m),m>=0?r=e.src.slice(c,m++):m=p+1):m=p+1,r||(r=e.src.slice(f,p)),a=e.env.references[Mn(r)],!a)return e.pos=u,!1;o=a.href,s=a.title}if(!t){e.pos=f,e.posMax=p;let t=e.push(`link_open`,`a`,1),n=[[`href`,o]];t.attrs=n,s&&n.push([`title`,s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push(`link_close`,`a`,-1)}return e.pos=m,e.posMax=d,!0}function fi(e,t){let n,r,i,a,o,s,c,l,u=``,d=e.pos,f=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;let p=e.pos+2,m=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(m<0)return!1;if(a=m+1,a<f&&e.src.charCodeAt(a)===40){for(a++;a<f&&(n=e.src.charCodeAt(a),I(n)||n===10);a++);if(a>=f)return!1;for(l=a,s=e.md.helpers.parseLinkDestination(e.src,a,e.posMax),s.ok&&(u=e.md.normalizeLink(s.str),e.md.validateLink(u)?a=s.pos:u=``),l=a;a<f&&(n=e.src.charCodeAt(a),I(n)||n===10);a++);if(s=e.md.helpers.parseLinkTitle(e.src,a,e.posMax),a<f&&l!==a&&s.ok)for(c=s.str,a=s.pos;a<f&&(n=e.src.charCodeAt(a),I(n)||n===10);a++);else c=``;if(a>=f||e.src.charCodeAt(a)!==41)return e.pos=d,!1;a++}else{if(e.env.references===void 0)return!1;if(a<f&&e.src.charCodeAt(a)===91?(l=a+1,a=e.md.helpers.parseLinkLabel(e,a),a>=0?i=e.src.slice(l,a++):a=m+1):a=m+1,i||(i=e.src.slice(p,m)),o=e.env.references[Mn(i)],!o)return e.pos=d,!1;u=o.href,c=o.title}if(!t){r=e.src.slice(p,m);let t=[];e.md.inline.parse(r,e.md,e.env,t);let n=e.push(`image`,`img`,0),i=[[`src`,u],[`alt`,``]];n.attrs=i,n.children=t,n.content=r,c&&i.push([`title`,c])}return e.pos=a,e.posMax=f,!0}var pi=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,mi=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function hi(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==60)return!1;let r=e.pos,i=e.posMax;for(;;){if(++n>=i)return!1;let t=e.src.charCodeAt(n);if(t===60)return!1;if(t===62)break}let a=e.src.slice(r+1,n);if(mi.test(a)){let n=e.md.normalizeLink(a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}if(pi.test(a)){let n=e.md.normalizeLink(`mailto:`+a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}return!1}function gi(e){return/^<a[>\s]/i.test(e)}function _i(e){return/^<\/a\s*>/i.test(e)}function vi(e){let t=e|32;return t>=97&&t<=122}function yi(e,t){let n=e.src,r,i;if(n.startsWith(`<!--`,t)){if(n.startsWith(`>`,t+4))return t+5;if(n.startsWith(`->`,t+4))return t+6;r=t+4,i=`-->`}else if(n.startsWith(`<![CDATA[`,t))r=t+9,i=`]]>`;else if(n.charCodeAt(t+1)===63)r=t+2,i=`?>`;else if(vi(n.charCodeAt(t+2)))r=t+3,i=`>`;else return-1;if(e.skipHtmlSpecial)return-1;let a=n.indexOf(i,r);return a<0?(e.skipHtmlSpecial=!0,-1):a+i.length}function bi(e,t){if(!e.md.options.html)return!1;let n=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=n)return!1;let i,a=e.src.charCodeAt(r+1);if(a===33||a===63)i=yi(e,r);else if(a===47||vi(a)){let t=e.src.slice(r).match(zr);i=t?r+t[0].length:-1}else return!1;if(i<0)return!1;if(!t){let t=e.push(`html_inline`,``,0);t.content=e.src.slice(r,i),gi(t.content)&&e.linkLevel++,_i(t.content)&&e.linkLevel--}return e.pos=i,!0}var xi=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,Si=/^&([a-z][a-z0-9]{1,31});/i;function Ci(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==38||n+1>=r)return!1;if(e.src.charCodeAt(n+1)===35){let r=e.src.slice(n).match(xi);if(r){if(!t){let t=r[1][0].toLowerCase()===`x`?parseInt(r[1].slice(1),16):parseInt(r[1],10),n=e.push(`text_special`,``,0);n.content=pn(t)?mn(t):mn(65533),n.markup=r[0],n.info=`entity`}return e.pos+=r[0].length,!0}}else{let r=e.src.slice(n).match(Si);if(r){let n=an(r[0]);if(n!==r[0]){if(!t){let t=e.push(`text_special`,``,0);t.content=n,t.markup=r[0],t.info=`entity`}return e.pos+=r[0].length,!0}}}return!1}function wi(e){let t={},n=e.length;if(!n)return;let r=0,i=-2,a=[];for(let o=0;o<n;o++){let n=e[o];if(a.push(0),(e[r].marker!==n.marker||i!==n.token-1)&&(r=o),i=n.token,n.length=n.length||0,!n.close)continue;t.hasOwnProperty(n.marker)||(t[n.marker]=[-1,-1,-1,-1,-1,-1]);let s=t[n.marker][(n.open?3:0)+n.length%3],c=r-a[r]-1,l=c;for(;c>s;c-=a[c]+1){let t=e[c];if(t.marker===n.marker&&t.open&&t.end<0){let r=!1;if((t.close||n.open)&&(t.length+n.length)%3==0&&(t.length%3!=0||n.length%3!=0)&&(r=!0),!r){let r=c>0&&!e[c-1].open?a[c-1]+1:0;a[o]=o-c+r,a[c]=r,n.open=!1,t.end=o,t.close=!1,l=-1,i=-2;break}}}l!==-1&&(t[n.marker][(n.open?3:0)+(n.length||0)%3]=l)}}function Ti(e){let t=e.tokens_meta,n=e.tokens_meta.length;wi(e.delimiters);for(let e=0;e<n;e++)t[e]&&t[e].delimiters&&wi(t[e].delimiters)}function Ei(e){let t,n,r=0,i=e.tokens,a=e.tokens.length;for(t=n=0;t<a;t++)i[t].nesting<0&&r--,i[t].level=r,i[t].nesting>0&&r++,i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}var Di=[[`text`,Yr],[`linkify`,Qr],[`newline`,$r],[`escape`,ti],[`backticks`,ni],[`strikethrough`,oi.tokenize],[`emphasis`,ui.tokenize],[`link`,di],[`image`,fi],[`autolink`,hi],[`html_inline`,bi],[`entity`,Ci]],Oi=[[`balance_pairs`,Ti],[`strikethrough`,oi.postProcess],[`emphasis`,ui.postProcess],[`fragments_join`,Ei]];function ki(){this.ruler=new L;for(let e=0;e<Di.length;e++)this.ruler.push(Di[e][0],Di[e][1]);this.ruler2=new L;for(let e=0;e<Oi.length;e++)this.ruler2.push(Oi[e][0],Oi[e][1])}ki.prototype.skipToken=function(e){let t=e.pos,n=this.ruler.getRules(``),r=n.length,i=e.md.options.maxNesting,a=e.cache;if(a[t]!==void 0){e.pos=a[t];return}let o=!1;if(e.level<i){for(let i=0;i<r;i++)if(e.level++,o=n[i](e,!0),e.level--,o){if(t>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}else e.pos=e.posMax;o||e.pos++,a[t]=e.pos},ki.prototype.tokenize=function(e){let t=this.ruler.getRules(``),n=t.length,r=e.posMax,i=e.md.options.maxNesting;for(;e.pos<r;){let a=e.pos,o=!1;if(e.level<i){for(let r=0;r<n;r++)if(o=t[r](e,!1),o){if(a>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}if(o){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},ki.prototype.parse=function(e,t,n,r){let i=new this.State(e,t,n,r);this.tokenize(i);let a=this.ruler2.getRules(``),o=a.length;for(let e=0;e<o;e++)a[e](i)},ki.prototype.State=qr;function Ai(e){let t={};e=e||{},t.src_Any=Nt.source,t.src_Cc=Pt.source,t.src_Z=Rt.source,t.src_P=It.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join(`|`),t.src_ZCc=[t.src_Z,t.src_Cc].join(`|`);let n=`[><｜]`;return t.src_pseudo_letter=`(?:(?!${n}|${t.src_ZPCc})${t.src_Any})`,t.src_ip4=`(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)`,t.src_auth=`(?:(?:(?!${t.src_ZCc}|[@/\\[\\]()]).){1,50}@)?`,t.src_port=`(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?`,t.src_host_terminator=`(?=$|${n}|${t.src_ZPCc})(?!${e[`---`]?`-(?!--)|`:`-|`}_|:\\d|\\.-|\\.(?!$|${t.src_ZPCc}))`,t.src_path=`(?:[/?#](?:(?!${t.src_ZCc}|${n}|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!${t.src_ZCc}|\\]).)*\\]|\\((?:(?!${t.src_ZCc}|[)]).)*\\)|\\{(?:(?!${t.src_ZCc}|[}]).)*\\}|\\"(?:(?!${t.src_ZCc}|["]).)+\\"|\\'(?:(?!${t.src_ZCc}|[']).)+\\'|\\'(?=${t.src_pseudo_letter}|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!${t.src_ZCc}|[.]|$)|`+(e[`---`]?`\\-(?!--(?:[^-]|$))(?:-*)|`:`\\-+|`)+`,(?!${t.src_ZCc}|$)|;(?!${t.src_ZCc}|$)|\\!+(?!${t.src_ZCc}|[!]|$)|\\?(?!${t.src_ZCc}|[?]|$))+|\\/)?`,t.src_email_name=`[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]{0,63}`,t.src_xn=`xn--[a-z0-9\\-]{1,59}`,t.src_domain_root=`(?:`+t.src_xn+`|${t.src_pseudo_letter}{1,63})`,t.src_domain=`(?:`+t.src_xn+`|(?:${t.src_pseudo_letter})|(?:${t.src_pseudo_letter}(?:-|${t.src_pseudo_letter}){0,61}${t.src_pseudo_letter}))`,t.src_host=`(?:(?:(?:(?:${t.src_domain})\\.)*${t.src_domain}))`,t.tpl_host_fuzzy=`(?:`+t.src_ip4+`|(?:(?:(?:${t.src_domain})\\.)+(?:%TLDS%)))`,t.tpl_host_no_ip_fuzzy=`(?:(?:(?:${t.src_domain})\\.)+(?:%TLDS%))`,t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test=`localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:${t.src_ZPCc}|>|$))`,t.tpl_email_fuzzy=`(^|${n}|"|\\(|${t.src_ZCc})(${t.src_email_name}@${t.tpl_host_fuzzy_strict})`,t.tpl_link_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uff5c]|${t.src_ZPCc}))((?![$+<=>^\`|\uff5c])${t.tpl_host_port_fuzzy_strict}${t.src_path})`,t.tpl_link_no_ip_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uff5c]|${t.src_ZPCc}))((?![$+<=>^\`|\uff5c])${t.tpl_host_port_no_ip_fuzzy_strict}${t.src_path})`,t}function ji(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}function Mi(e){return Object.prototype.toString.call(e)}function Ni(e){return Mi(e)===`[object String]`}function Pi(e){return Mi(e)===`[object Object]`}function Fi(e){return Mi(e)===`[object RegExp]`}function Ii(e){return Mi(e)===`[object Function]`}function Li(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,`\\$&`)}var Ri={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function zi(e){return Object.keys(e||{}).reduce(function(e,t){return e||Ri.hasOwnProperty(t)},!1)}var Bi={"http:":{validate:function(e,t,n){let r=e.slice(t);return n.re.http||(n.re.http=RegExp(`^\\/\\/${n.re.src_auth}${n.re.src_host_port_strict}${n.re.src_path}`,`i`)),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":`http:`,"ftp:":`http:`,"//":{validate:function(e,t,n){let r=e.slice(t);return n.re.no_http||(n.re.no_http=RegExp(`^`+n.re.src_auth+`(?:localhost|(?:(?:${n.re.src_domain})\\.)+${n.re.src_domain_root})`+n.re.src_port+n.re.src_host_terminator+n.re.src_path,`i`)),n.re.no_http.test(r)?t>=3&&e[t-3]===`:`||t>=3&&e[t-3]===`/`?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,n){let r=e.slice(t);return n.re.mailto||(n.re.mailto=RegExp(`^${n.re.src_email_name}@${n.re.src_host_strict}`,`i`)),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},Vi=`a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]`,Hi=`biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф`.split(`|`);function Ui(e){return function(t,n){let r=t.slice(n);return e.test(r)?r.match(e)[0].length:0}}function Wi(){return function(e,t){t.normalize(e)}}function Gi(e){let t=e.re=Ai(e.__opts__),n=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||n.push(Vi),n.push(t.src_xn),t.src_tlds=n.join(`|`);function r(e){return e.replace(`%TLDS%`,t.src_tlds)}t.email_fuzzy=RegExp(r(t.tpl_email_fuzzy),`i`),t.email_fuzzy_global=RegExp(r(t.tpl_email_fuzzy),`ig`),t.link_fuzzy=RegExp(r(t.tpl_link_fuzzy),`i`),t.link_fuzzy_global=RegExp(r(t.tpl_link_fuzzy),`ig`),t.link_no_ip_fuzzy=RegExp(r(t.tpl_link_no_ip_fuzzy),`i`),t.link_no_ip_fuzzy_global=RegExp(r(t.tpl_link_no_ip_fuzzy),`ig`),t.host_fuzzy_test=RegExp(r(t.tpl_host_fuzzy_test),`i`);let i=[];e.__compiled__={};function a(e,t){throw Error(`(LinkifyIt) Invalid schema "${e}": ${t}`)}Object.keys(e.__schemas__).forEach(function(t){let n=e.__schemas__[t];if(n===null)return;let r={validate:null,link:null};if(e.__compiled__[t]=r,Pi(n)){Fi(n.validate)?r.validate=Ui(n.validate):Ii(n.validate)?r.validate=n.validate:a(t,n),Ii(n.normalize)?r.normalize=n.normalize:n.normalize?a(t,n):r.normalize=Wi();return}if(Ni(n)){i.push(t);return}a(t,n)}),i.forEach(function(t){e.__compiled__[e.__schemas__[t]]&&(e.__compiled__[t].validate=e.__compiled__[e.__schemas__[t]].validate,e.__compiled__[t].normalize=e.__compiled__[e.__schemas__[t]].normalize)}),e.__compiled__[``]={validate:null,normalize:Wi()};let o=Object.keys(e.__compiled__).filter(function(t){return t.length>0&&e.__compiled__[t]}).map(Li).join(`|`);e.re.schema_test=RegExp(`(^|(?!_)(?:[><\uff5c]|${t.src_ZPCc}))(${o})`,`i`),e.re.schema_search=RegExp(`(^|(?!_)(?:[><\uff5c]|${t.src_ZPCc}))(${o})`,`ig`),e.re.schema_at_start=RegExp(`^${e.re.schema_search.source}`,`i`),e.re.pretest=RegExp(`(${e.re.schema_test.source})|(${e.re.host_fuzzy_test.source})|@`,`i`)}function Ki(e,t,n,r){let i=e.slice(n,r);this.schema=t.toLowerCase(),this.index=n,this.lastIndex=r,this.raw=i,this.text=i,this.url=i}function R(e,t){if(!(this instanceof R))return new R(e,t);t||zi(e)&&(t=e,e={}),this.__opts__=ji({},Ri,t),this.__schemas__=ji({},Bi,e),this.__compiled__={},this.__tlds__=Hi,this.__tlds_replaced__=!1,this.re={},Gi(this)}R.prototype.add=function(e,t){return this.__schemas__[e]=t,Gi(this),this},R.prototype.set=function(e){return this.__opts__=ji(this.__opts__,e),this},R.prototype.test=function(e){if(!e.length)return!1;let t,n;if(this.re.schema_test.test(e)){for(n=this.re.schema_search,n.lastIndex=0;(t=n.exec(e))!==null;)if(this.testSchemaAt(e,t[2],n.lastIndex))return!0}return!!(this.__opts__.fuzzyLink&&this.__compiled__[`http:`]&&e.search(this.re.host_fuzzy_test)>=0&&e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy)!==null||this.__opts__.fuzzyEmail&&this.__compiled__[`mailto:`]&&e.indexOf(`@`)>=0&&e.match(this.re.email_fuzzy)!==null)},R.prototype.pretest=function(e){return this.re.pretest.test(e)},R.prototype.testSchemaAt=function(e,t,n){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,n,this):0},R.prototype.match=function(e){let t=[],n=[],r=[],i=[],a,o,s;function c(e,t){return e?t?e.index===t.index?e.lastIndex>=t.lastIndex?e:t:e.index<t.index?e:t:e:t}if(!e.length)return null;if(this.re.schema_test.test(e))for(s=this.re.schema_search,s.lastIndex=0;(a=s.exec(e))!==null;)o=this.testSchemaAt(e,a[2],s.lastIndex),o&&n.push({schema:a[2],index:a.index+a[1].length,lastIndex:a.index+a[0].length+o});if(this.__opts__.fuzzyLink&&this.__compiled__[`http:`])for(s=this.__opts__.fuzzyIP?this.re.link_fuzzy_global:this.re.link_no_ip_fuzzy_global,s.lastIndex=0;(a=s.exec(e))!==null;)r.push({schema:``,index:a.index+a[1].length,lastIndex:a.index+a[0].length});if(this.__opts__.fuzzyEmail&&this.__compiled__[`mailto:`])for(s=this.re.email_fuzzy_global,s.lastIndex=0;(a=s.exec(e))!==null;)i.push({schema:`mailto:`,index:a.index+a[1].length,lastIndex:a.index+a[0].length});let l=[0,0,0],u=0;for(;;){let a=[n[l[0]],i[l[1]],r[l[2]]],o=c(c(a[0],a[1]),a[2]);if(!o)break;if(o===a[0]?l[0]++:o===a[1]?l[1]++:l[2]++,o.index<u)continue;let s=new Ki(e,o.schema,o.index,o.lastIndex);this.__compiled__[s.schema].normalize(s,this),t.push(s),u=o.lastIndex}return t.length?t:null},R.prototype.matchAtStart=function(e){if(!e.length)return null;let t=this.re.schema_at_start.exec(e);if(!t)return null;let n=this.testSchemaAt(e,t[2],t[0].length);if(!n)return null;let r=new Ki(e,t[2],t.index+t[1].length,t.index+t[0].length+n);return this.__compiled__[r.schema].normalize(r,this),r},R.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(e,t,n){return e!==n[t-1]}).reverse(),Gi(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,Gi(this),this)},R.prototype.normalize=function(e){e.schema||(e.url=`http://${e.url}`),e.schema===`mailto:`&&!/^mailto:/i.test(e.url)&&(e.url=`mailto:${e.url}`)},R.prototype.onCompile=function(){};var qi=2147483647,Ji=36,Yi=1,Xi=26,Zi=38,Qi=700,$i=72,ea=128,ta=`-`,na=/^xn--/,ra=/[^\0-\x7F]/,ia=/[\x2E\u3002\uFF0E\uFF61]/g,aa={overflow:`Overflow: input needs wider integers to process`,"not-basic":`Illegal input >= 0x80 (not a basic code point)`,"invalid-input":`Invalid input`},oa=35,sa=Math.floor,ca=String.fromCharCode;function la(e){throw RangeError(aa[e])}function ua(e,t){let n=[],r=e.length;for(;r--;)n[r]=t(e[r]);return n}function da(e,t){let n=e.split(`@`),r=``;n.length>1&&(r=n[0]+`@`,e=n[1]),e=e.replace(ia,`.`);let i=ua(e.split(`.`),t).join(`.`);return r+i}function fa(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}var pa=e=>String.fromCodePoint(...e),ma=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:Ji},ha=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},ga=function(e,t,n){let r=0;for(e=n?sa(e/Qi):e>>1,e+=sa(e/t);e>455;r+=Ji)e=sa(e/oa);return sa(r+36*e/(e+Zi))},_a=function(e){let t=[],n=e.length,r=0,i=ea,a=$i,o=e.lastIndexOf(ta);o<0&&(o=0);for(let n=0;n<o;++n)e.charCodeAt(n)>=128&&la(`not-basic`),t.push(e.charCodeAt(n));for(let s=o>0?o+1:0;s<n;){let o=r;for(let t=1,i=Ji;;i+=Ji){s>=n&&la(`invalid-input`);let o=ma(e.charCodeAt(s++));o>=Ji&&la(`invalid-input`),o>sa((qi-r)/t)&&la(`overflow`),r+=o*t;let c=i<=a?Yi:i>=a+Xi?Xi:i-a;if(o<c)break;let l=Ji-c;t>sa(qi/l)&&la(`overflow`),t*=l}let c=t.length+1;a=ga(r-o,c,o==0),sa(r/c)>qi-i&&la(`overflow`),i+=sa(r/c),r%=c,t.splice(r++,0,i)}return String.fromCodePoint(...t)},va=function(e){let t=[];e=fa(e);let n=e.length,r=ea,i=0,a=$i;for(let n of e)n<128&&t.push(ca(n));let o=t.length,s=o;for(o&&t.push(ta);s<n;){let n=qi;for(let t of e)t>=r&&t<n&&(n=t);let c=s+1;n-r>sa((qi-i)/c)&&la(`overflow`),i+=(n-r)*c,r=n;for(let n of e)if(n<r&&++i>qi&&la(`overflow`),n===r){let e=i;for(let n=Ji;;n+=Ji){let r=n<=a?Yi:n>=a+Xi?Xi:n-a;if(e<r)break;let i=e-r,o=Ji-r;t.push(ca(ha(r+i%o,0))),e=sa(i/o)}t.push(ca(ha(e,0))),a=ga(i,c,s===o),i=0,++s}++i,++r}return t.join(``)},ya={version:`2.3.1`,ucs2:{decode:fa,encode:pa},decode:_a,encode:va,toASCII:function(e){return da(e,function(e){return ra.test(e)?`xn--`+va(e):e})},toUnicode:function(e){return da(e,function(e){return na.test(e)?_a(e.slice(4).toLowerCase()):e})}},ba={default:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},zero:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`paragraph`]},inline:{rules:[`text`],rules2:[`balance_pairs`,`fragments_join`]}}},commonmark:{options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`blockquote`,`code`,`fence`,`heading`,`hr`,`html_block`,`lheading`,`list`,`reference`,`paragraph`]},inline:{rules:[`autolink`,`backticks`,`emphasis`,`entity`,`escape`,`html_inline`,`image`,`link`,`newline`,`text`],rules2:[`balance_pairs`,`emphasis`,`fragments_join`]}}}},xa=/^(vbscript|javascript|file|data):/,Sa=/^data:image\/(gif|png|jpeg|webp);/;function Ca(e){let t=e.trim().toLowerCase();return!xa.test(t)||Sa.test(t)}var wa=[`http:`,`https:`,`mailto:`];function Ta(e){let t=jt(e,!0);if(t.hostname&&(!t.protocol||wa.indexOf(t.protocol)>=0))try{t.hostname=ya.toASCII(t.hostname)}catch(e){}return vt(yt(t))}function Ea(e){let t=jt(e,!0);if(t.hostname&&(!t.protocol||wa.indexOf(t.protocol)>=0))try{t.hostname=ya.toUnicode(t.hostname)}catch(e){}return ht(yt(t),ht.defaultChars+`%`)}function z(e,t){if(!(this instanceof z))return new z(e,t);t||cn(e)||(t=e||{},e=`default`),this.inline=new ki,this.block=new Kr,this.core=new _r,this.renderer=new Vn,this.linkify=new R,this.validateLink=Ca,this.normalizeLink=Ta,this.normalizeLinkText=Ea,this.utils=on,this.helpers=dn({},zn),this.options={},this.configure(e),t&&this.set(t)}z.prototype.set=function(e){return dn(this.options,e),this},z.prototype.configure=function(e){let t=this;if(cn(e)){let t=e;if(e=ba[t],!e)throw Error('Wrong `markdown-it` preset "'+t+`", check name`)}if(!e)throw Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(n){e.components[n].rules&&t[n].ruler.enableOnly(e.components[n].rules),e.components[n].rules2&&t[n].ruler2.enableOnly(e.components[n].rules2)}),this},z.prototype.enable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to enable unknown rule(s): `+r);return this},z.prototype.disable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to disable unknown rule(s): `+r);return this},z.prototype.use=function(e){let t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this},z.prototype.parse=function(e,t){if(typeof e!=`string`)throw Error(`Input data should be a String`);let n=new this.core.State(e,this,t);return this.core.process(n),n.tokens},z.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)},z.prototype.parseInline=function(e,t){let n=new this.core.State(e,this,t);return n.inlineMode=!0,this.core.process(n),n.tokens},z.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)};function Da(){return new z({html:!1,linkify:!0,typographer:!0,breaks:!0})}var Oa,ka=()=>{var e;return(e=Oa)==null?Oa=Da():e},Aa=e=>e?ka().renderInline(e):``,ja,Ma=E`
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
`;function Na({control:e,labelId:t,instructionsId:n,errorsId:r,warningId:i,tipId:a,controlId:o,hasLabel:s,hasInstructions:c,hasErrors:l,hasWarning:u,hasTip:d,hasRequired:f=!1,invalid:p=!1}){e.id||(e.id=o),s?e.setAttribute(`aria-labelledby`,t):e.removeAttribute(`aria-labelledby`);let m=[c?n:``,l?r:``,u?i:``,d?a:``].filter(Boolean);m.length>0?e.setAttribute(`aria-describedby`,m.join(` `)):e.removeAttribute(`aria-describedby`),f?e.setAttribute(`aria-required`,`true`):e.removeAttribute(`aria-required`);let h=!!(p||l);h?(e.setAttribute(`aria-invalid`,`true`),e.setAttribute(`aria-errormessage`,r)):(e.removeAttribute(`aria-invalid`),e.removeAttribute(`aria-errormessage`)),Pa(e,h)}function Pa(e,t){if(`invalid`in e){e.invalid=t;return}e.toggleAttribute(`invalid`,t)}function Fa(e){if(!e)return x;let t=Aa(e);return t?u(t):x}var Ia=E`
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
`,La=(ja=class extends le{constructor(...e){super(...e),this.hasSlotController=new ge(this,`label`,`instructions`,`hint`,`header-end`,`warning`,`tip`,`errors`),this.baseId=me(`pk-field`),this.label=``,this.instructions=``,this.required=!1,this.translatable=!1,this.warning=``,this.tip=``,this.errors=[],this.for=``,this.onLabelClick=e=>{let t=e.target;t instanceof Element&&(t.closest(`button, a, input, select, textarea, [role="button"], [role="link"]`)||this.focusControl())},this.onControlSlotChange=()=>{this.syncControlAria(),this.requestUpdate()}}connectedCallback(){super.connectedCallback();let e=this.getAttribute(`hint`);e&&!this.instructions&&(this.instructions=e)}updated(e){super.updated(e),(e.has(`label`)||e.has(`instructions`)||e.has(`errors`)||e.has(`warning`)||e.has(`tip`)||e.has(`required`)||e.has(`for`))&&this.syncControlAria()}get labelId(){return`${this.baseId}-label`}get instructionsId(){return`${this.baseId}-instructions`}get errorsId(){return`${this.baseId}-errors`}get warningId(){return`${this.baseId}-warning`}get tipId(){return`${this.baseId}-tip`}get controlId(){return this.for||`${this.baseId}-control`}hasLabel(){return!!this.label||this.hasSlotController.test(`label`)}hasInstructions(){return!!this.instructions||this.hasSlotController.test(`instructions`)||this.hasSlotController.test(`hint`)}hasHeaderEnd(){return this.hasSlotController.test(`header-end`)}hasErrors(){return this.errors.length>0||this.hasSlotController.test(`errors`)}hasWarning(){return!!this.warning||this.hasSlotController.test(`warning`)}hasTip(){return!!this.tip||this.hasSlotController.test(`tip`)}getControlElement(){var e,t;let[n]=(e=(t=this.controlSlot)==null?void 0:t.assignedElements({flatten:!0}))==null?[]:e;return n instanceof HTMLElement?n:this.for?this.getRootNode().getElementById(this.for):null}focusControl(){let e=this.getControlElement();e&&typeof e.focus==`function`&&e.focus()}syncControlAria(){let e=this.getControlElement();e&&Na({control:e,labelId:this.labelId,instructionsId:this.instructionsId,errorsId:this.errorsId,warningId:this.warningId,tipId:this.tipId,controlId:this.controlId,hasLabel:this.hasLabel(),hasInstructions:this.hasInstructions(),hasErrors:this.hasErrors(),hasWarning:this.hasWarning(),hasTip:this.hasTip(),hasRequired:this.required,invalid:this.hasErrors()})}render(){let e=this.hasLabel(),t=this.hasInstructions(),n=this.hasHeaderEnd(),r=this.hasErrors(),a=this.hasWarning(),o=this.hasTip(),s=this.for||(e?this.controlId:x);return j`
            <div part="form-control" class="form-control">
                ${e||t||n?j`
                        <div
                            part="header"
                            class=${D({"form-control__header":!0,"form-control__header--with-end":n})}
                        >
                            <div class="form-control__header-main">
                                ${e?j`
                                        <label
                                            part="label"
                                            class="form-control__label"
                                            id=${this.labelId}
                                            for=${s}
                                            data-error=${r?`true`:x}
                                            @click=${this.onLabelClick}
                                        >
                                            <slot name="label">${this.label}</slot>
                                            ${this.required?j`
                                                    <span class="sr-only">Required</span>
                                                    <span class="form-control__required" aria-hidden="true">
                                                        ${i(b.asterisk)}
                                                    </span>
                                                `:x}
                                            ${this.translatable?j`
                                                    <span class="form-control__translatable">
                                                        ${Me()}
                                                        <span class="sr-only">Translatable</span>
                                                    </span>
                                                `:x}
                                        </label>
                                    `:x}

                                ${t?j`
                                        <p
                                            part="instructions"
                                            class="form-control__instructions pk-inline-markdown"
                                            id=${this.instructionsId}
                                        >
                                            <slot name="instructions">${Fa(this.instructions)}</slot>
                                            <slot name="hint"></slot>
                                        </p>
                                    `:x}
                            </div>

                            ${n?j`
                                    <div part="header-end" class="form-control__header-end">
                                        <slot name="header-end"></slot>
                                    </div>
                                `:j`<slot name="header-end" hidden></slot>`}
                        </div>
                    `:x}

                <div part="control" class="form-control__control">
                    <slot @slotchange=${this.onControlSlotChange}></slot>
                </div>

                ${r?j`
                        <ul part="errors" class="form-control__errors pk-inline-markdown" id=${this.errorsId}>
                            ${this.errors.map(e=>j`<li>${Fa(e)}</li>`)}
                            <slot name="errors"></slot>
                        </ul>
                    `:x}

                ${a?j`
                        <div part="warning" class="form-control__warning" id=${this.warningId}>
                            <span class="form-control__warning-icon" aria-hidden="true">
                                ${i(b.triangleExclamation)}
                            </span>
                            <p class="form-control__warning-text pk-inline-markdown">
                                <slot name="warning">${Fa(this.warning)}</slot>
                            </p>
                        </div>
                    `:x}

                ${o?j`
                        <div part="tip" class="form-control__tip" id=${this.tipId}>
                            <span class="form-control__tip-icon" aria-hidden="true">
                                ${i(b.lightbulb)}
                            </span>
                            <p class="form-control__tip-text pk-inline-markdown">
                                <span class="sr-only">Tip: </span>
                                <slot name="tip">${Fa(this.tip)}</slot>
                            </p>
                        </div>
                    `:x}
            </div>
        `}},ja.styles=[ft,Ma,Ia],ja);T([C()],La.prototype,`label`,void 0),T([C()],La.prototype,`instructions`,void 0),T([C({type:Boolean,reflect:!0})],La.prototype,`required`,void 0),T([C({type:Boolean,reflect:!0})],La.prototype,`translatable`,void 0),T([C()],La.prototype,`warning`,void 0),T([C()],La.prototype,`tip`,void 0),T([C({attribute:!1})],La.prototype,`errors`,void 0),T([C({reflect:!0})],La.prototype,`for`,void 0),T([A(`slot:not([name])`)],La.prototype,`controlSlot`,void 0),La=T([k(`pk-field`)],La);function Ra(e={}){var t;let{validationElement:n,validationProperty:r}=e;!n&&typeof document<`u`&&(n=Object.assign(document.createElement(`input`),{required:!0})),r||(r=`value`);let i={observedAttributes:[`required`],message:(t=n==null?void 0:n.validationMessage)==null?`Please fill out this field.`:t,checkValidity(e){var t;let n={message:``,isValid:!0,invalidKeys:[]};if(!e.required)return n;let a=e[r];return a!=null&&a!==!1&&a!==``?n:(n.isValid=!1,n.message=typeof i.message==`function`?i.message(e):(t=i.message)==null?``:t,n.invalidKeys.push(`valueMissing`),n)}};return i}function za(e,t){var n;return t||((n=e.getAttribute(`hint`))==null?``:n)}function Ba(e,t,n=!1){return!!t||e(`instructions`,n)||e(`hint`)}var Va,Ha=E`
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
`,Ua=j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" aria-hidden="true">
        <path fill="currentColor" d="M557.5 192L534.9 214.6L278.9 470.6C266.4 483.1 246.1 483.1 233.6 470.6L105.6 342.6L83 320L128.3 274.7C129.6 276 172.3 318.7 256.3 402.7L489.7 169.3L512.3 146.7L557.6 192z" />
    </svg>
`,Wa=(Va=class extends Ne{constructor(...e){super(...e),this.assumeInteractionOn=[`change`],this.hasSlotController=new ge(this,`instructions`,`hint`),this.checked=!1,this.defaultChecked=!1,this.invalid=!1,this.size=`default`,this.value=`on`,this.label=``,this.instructions=``}static get validators(){return[...super.validators,je(),Ra({validationProperty:`checked`})]}connectedCallback(){this.instructions=za(this,this.instructions),super.connectedCallback()}get validationTarget(){return this.input}syncFormValue(){this.setFormValue(this.checked?this.value:null,this.checked?`on`:`off`)}resetToDefaultValue(){this.checked=this.defaultChecked}restoreFormState(e){this.checked=e===`on`||e===this.value}updated(e){this.input&&e.has(`checked`)&&(this.input.checked=this.checked),super.updated(e)}click(){var e;(e=this.switchElement)==null||e.click()}focus(e){var t;(t=this.switchElement)==null||t.focus(e)}blur(){var e;(e=this.switchElement)==null||e.blur()}toggle(){this.disabled||(this.checked=!this.checked,this.emitCheckedChange())}handleKeyDown(e){let t=this.matches(`:dir(rtl)`);if(e.key===` `||e.key===`Enter`){e.preventDefault(),this.toggle();return}if(e.key===`ArrowLeft`){e.preventDefault(),this.checked=t,this.emitCheckedChange();return}e.key===`ArrowRight`&&(e.preventDefault(),this.checked=!t,this.emitCheckedChange())}emitCheckedChange(){this.hasInteracted=!0,this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{checked:this.checked},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}handleLabelClick(e){this.disabled||e.target===this.switchElement||this.toggle()}hasLabelContent(){var e;if(this.label)return!0;let t=(e=this.shadowRoot)==null?void 0:e.querySelector(`slot:not([name])`);return t?t.assignedNodes({flatten:!0}).some(e=>{var t;return e.nodeType===Node.TEXT_NODE?!!((t=e.textContent)!=null&&t.trim()):e.nodeType===Node.ELEMENT_NODE}):!1}render(){let e=Ba((e,t)=>this.hasSlotController.test(e,t),this.instructions),t=this.hasLabelContent();return j`
            <div part="base" class="base">
                <button
                    part="switch"
                    class="switch"
                    type="button"
                    role="switch"
                    ?disabled=${this.disabled}
                    aria-checked=${this.checked?`true`:`false`}
                    aria-invalid=${this.invalid?`true`:x}
                    aria-describedby=${e?`instructions`:x}
                    aria-labelledby=${t?`label`:x}
                    @click=${this.toggle}
                    @keydown=${this.handleKeyDown}
                >
                    <span part="thumb" class="thumb">${Ua}</span>
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
                    aria-invalid=${this.invalid?`true`:x}
                    @change=${e=>e.stopPropagation()}
                />
                ${t||e?j`
                        <div class="content" @click=${this.handleLabelClick}>
                            ${t?j`
                                    <span part="label" class="label" id="label">
                                        <slot></slot>${this.label}
                                    </span>
                                `:x}
                            ${e?j`
                                    <span part="instructions" class="instructions form-control__instructions" id="instructions">
                                        <slot name="instructions">${this.instructions}</slot>
                                        <slot name="hint"></slot>
                                    </span>
                                `:x}
                        </div>
                    `:x}
            </div>
        `}},Va.shadowRootOptions={mode:`open`,delegatesFocus:!0},Va.styles=[ft,Ha],Va);T([C({type:Boolean,reflect:!0})],Wa.prototype,`checked`,void 0),T([C({attribute:`default-checked`,type:Boolean})],Wa.prototype,`defaultChecked`,void 0),T([C({type:Boolean,reflect:!0})],Wa.prototype,`invalid`,void 0),T([C({reflect:!0})],Wa.prototype,`size`,void 0),T([C()],Wa.prototype,`value`,void 0),T([C()],Wa.prototype,`label`,void 0),T([C()],Wa.prototype,`instructions`,void 0),T([A(`.input`)],Wa.prototype,`input`,void 0),T([A(`[part="switch"]`)],Wa.prototype,`switchElement`,void 0),Wa=T([k(`pk-lightswitch`)],Wa);var{I:Ga}=pe,Ka=e=>e,qa=e=>e.strings===void 0,Ja=()=>document.createComment(``),Ya=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new Ga(r.insertBefore(Ja(),i),r.insertBefore(Ja(),i),e,e.options);else{let t=n._$AB.nextSibling,o=n._$AM,s=o!==e;if(s){var a;let t;(a=n._$AQ)==null||a.call(n,e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==o._$AU&&n._$AP(t)}if(t!==i||s){let e=n._$AA;for(;e!==t;){let t=Ka(e).nextSibling;Ka(r).insertBefore(e,i),e=t}}}return n},Xa=(e,t,n=e)=>(e._$AI(t,n),e),Za={},Qa=(e,t=Za)=>e._$AH=t,$a=e=>e._$AH,eo=e=>{e._$AR(),e._$AA.remove()},to=d(class extends ae{constructor(e){if(super(e),e.type!==ie.PROPERTY&&e.type!==ie.ATTRIBUTE&&e.type!==ie.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!qa(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Se||t===x)return t;let n=e.element,r=e.name;if(e.type===ie.PROPERTY){if(t===n[r])return Se}else if(e.type===ie.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Se}else if(e.type===ie.ATTRIBUTE&&n.getAttribute(r)===t+``)return Se;return Qa(e),t}}),no=e=>e==null?x:e,ro,io=new Set([`button`,`submit`,`reset`,`checkbox`,`radio`,`file`,`image`,`hidden`]),ao=`pk-implicit-submit`,oo=(e,t)=>{if(e.key!==`Enter`||e.defaultPrevented||e.isComposing||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return!1;let n=(t||`text`).toLowerCase();return!io.has(n)},so=e=>{var t,n;let r=(t=e.closest)==null?void 0:t.call(e,`pk-dialog`);if(r){let e=r.querySelector(`form`);if(e)return e}let i=e.form;return i&&i.id===`main`?((n=e.closest)==null?void 0:n.call(e,`form`))===i?null:e.closest(`form`):i},co=(e,t,n)=>{if(e.disabled||e.readonly||!oo(t,n))return!1;let r=so(e);return!r||r.id===`main`?!1:(t.preventDefault(),t.stopPropagation(),r.dispatchEvent(new CustomEvent(ao,{bubbles:!1,cancelable:!0})),!0)},lo=E`
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
        .form-control__end:has(::slotted(pk-copy-button)) {
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
`,B=(ro=class extends Ne{constructor(...e){super(...e),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new ge(this,`instructions`,`hint`,`label`,`start`,`end`),this.inputId=me(`pk-input`),this.type=`text`,this._value=null,this.defaultValue=null,this.size=`default`,this.label=``,this.instructions=``,this.withClear=!1,this.clearLabel=`Clear`,this.placeholder=``,this.readonly=!1,this.invalid=!1,this.fitCell=!1,this.mono=!1,this.autofocus=!1,this.withLabel=!1,this.withInstructions=!1}static get validators(){return[...super.validators,je(),Ra()]}get value(){var e,t,n;return this.valueHasChanged?(e=this._value)==null?``:e:(t=(n=this._value)==null?this.defaultValue:n)==null?``:t}set value(e){let t=e==null?``:e;this._value!==t&&(this.valueHasChanged=!0,this._value=t)}connectedCallback(){this.instructions=za(this,this.instructions),this.hasAttribute(`with-hint`)&&(this.withInstructions=!0),super.connectedCallback()}syncFormValue(){this.setValue(this.value||``)}resetToDefaultValue(){this.valueHasChanged=!1,this._value=null}restoreFormState(e){typeof e==`string`&&(this.value=e)}formResetCallback(){var e;this.valueHasChanged=!1,this._value=null,this.input&&(this.input.value=(e=this.defaultValue)==null?``:e),super.formResetCallback()}updated(e){(e.has(`value`)||e.has(`defaultValue`))&&this.setState(`blank`,!this.value),super.updated(e)}syncStandaloneAria(){if(!this.input)return;let e=!!this.label||this.hasSlotController.test(`label`,this.withLabel),t=Ba((e,t)=>this.hasSlotController.test(e,t),this.instructions,this.withInstructions);ue({control:this.input,labelId:`${this.inputId}-label`,instructionsId:`${this.inputId}-instructions`,hasLabel:e,hasInstructions:t,required:this.required,invalid:this.invalid||!this.internals.validity.valid})}hasLabelContent(){return!!this.label||this.hasSlotController.test(`label`,this.withLabel)}hasInstructionsContent(){return Ba((e,t)=>this.hasSlotController.test(e,t),this.instructions,this.withInstructions)}focus(e){var t;(t=this.input)==null||t.focus(e)}blur(){var e;(e=this.input)==null||e.blur()}select(){var e;(e=this.input)==null||e.select()}handleInput(){this.value=this.input.value,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))}handleChange(e){this.value=this.input.value,e.stopPropagation(),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}handleKeyDown(e){co(this,e,this.type)}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.dispatchEvent(new se),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})),this.input.focus())}render(){let e=this.hasLabelContent(),t=this.hasInstructionsContent(),n=this.withClear&&!this.disabled&&!this.readonly&&this.value.length>0,r=this.hasSlotController.test(`start`),i=this.hasSlotController.test(`end`);return j`
            <div part="form-control" class="form-control">
                ${e||t?j`
                        <div part="header" class="form-control__header">
                            ${e?j`
                                    <label
                                        part="label"
                                        class="form-control__label"
                                        id=${`${this.inputId}-label`}
                                        for=${`${this.inputId}-control`}
                                    >
                                        <slot name="label">${this.label}</slot>
                                    </label>
                                `:x}

                            ${t?j`
                                    <p
                                        part="instructions"
                                        class="form-control__instructions"
                                        id=${`${this.inputId}-instructions`}
                                    >
                                        <slot name="instructions">${this.instructions}</slot>
                                        <slot name="hint"></slot>
                                    </p>
                                `:x}
                        </div>
                    `:x}

                <div part="base" class="form-control__input">
                    ${r?j`
                            <span part="start" class="form-control__start">
                                <slot name="start"></slot>
                            </span>
                        `:j`<slot name="start" hidden></slot>`}

                    <input
                        part="input"
                        class="input"
                        ?data-custom-clear=${this.withClear}
                        id=${e?`${this.inputId}-control`:x}
                        type=${this.type}
                        .value=${to(this.value)}
                        placeholder=${this.placeholder||x}
                        pattern=${no(this.pattern)}
                        minlength=${no(this.minlength)}
                        maxlength=${no(this.maxlength)}
                        min=${no(this.min)}
                        max=${no(this.max)}
                        step=${no(this.step)}
                        autocomplete=${no(this.autocomplete)}
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

                    ${n?j`
                            <button
                                part="clear-button"
                                class="icon-button clear-button"
                                type="button"
                                aria-label=${this.clearLabel}
                                @click=${this.handleClearClick}
                            >
                                <slot name="clear-icon">×</slot>
                            </button>
                        `:x}

                    ${i?j`
                            <span part="end" class="form-control__end">
                                <slot name="end"></slot>
                            </span>
                        `:j`<slot name="end" hidden></slot>`}
                </div>
            </div>
        `}},ro.styles=[ft,Pe(),y(`.input`,`var(--pk-input-border-radius, var(--pk-radius-sm))`),p(`.input`),lo],ro);T([A(`input`)],B.prototype,`input`,void 0),T([C({reflect:!0})],B.prototype,`type`,void 0),T([w()],B.prototype,`value`,null),T([C({attribute:`value`,reflect:!0})],B.prototype,`defaultValue`,void 0),T([C({reflect:!0})],B.prototype,`size`,void 0),T([C()],B.prototype,`label`,void 0),T([C()],B.prototype,`instructions`,void 0),T([C({attribute:`with-clear`,type:Boolean})],B.prototype,`withClear`,void 0),T([C({attribute:`clear-label`})],B.prototype,`clearLabel`,void 0),T([C()],B.prototype,`placeholder`,void 0),T([C({type:Boolean,reflect:!0})],B.prototype,`readonly`,void 0),T([C({type:Boolean,reflect:!0})],B.prototype,`invalid`,void 0),T([C({type:Boolean,reflect:!0,attribute:`fit-cell`})],B.prototype,`fitCell`,void 0),T([C({type:Boolean,reflect:!0})],B.prototype,`mono`,void 0),T([C()],B.prototype,`pattern`,void 0),T([C({type:Number})],B.prototype,`minlength`,void 0),T([C({type:Number})],B.prototype,`maxlength`,void 0),T([C()],B.prototype,`min`,void 0),T([C()],B.prototype,`max`,void 0),T([C()],B.prototype,`step`,void 0),T([C()],B.prototype,`autocomplete`,void 0),T([C({type:Boolean,reflect:!0})],B.prototype,`autofocus`,void 0),T([C({attribute:`with-label`,type:Boolean})],B.prototype,`withLabel`,void 0),T([C({attribute:`with-instructions`,type:Boolean})],B.prototype,`withInstructions`,void 0),B=T([k(`pk-input`)],B);var uo;function fo(){return j`
        <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" viewBox="0 0 640 640">
            <path
                fill="currentColor"
                d="M557.5 192L534.9 214.6L278.9 470.6C266.4 483.1 246.1 483.1 233.6 470.6L105.6 342.6L83 320L128.3 274.7C129.6 276 172.3 318.7 256.3 402.7L489.7 169.3L512.3 146.7L557.6 192z"
            />
        </svg>
    `}function po(){return j`
        <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" viewBox="0 0 640 640">
            <path fill="currentColor" d="M96 352V288H544V352H96z" />
        </svg>
    `}var mo=[E`
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
`,E`
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
`],V=(uo=class extends Ne{constructor(...e){super(...e),this.assumeInteractionOn=[`change`],this.hasSlotController=new ge(this,`hint`),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.invalid=!1,this.checkboxValue=`on`,this.defaultChecked=!1,this.ariaLabel=null,this.hint=``,this.withHint=!1,this.hasDefaultSlotContent=!1}static get validators(){return[...super.validators,Ra({validationProperty:`checked`})]}get validationTarget(){return this.input}syncFormValue(){this.setFormValue(this.checked?this.checkboxValue:null,this.checked?`on`:`off`)}resetToDefaultValue(){this.checked=this.defaultChecked,this.indeterminate=!1}restoreFormState(e){this.checked=e===`on`||e===this.checkboxValue}updated(e){if(!this.input){super.updated(e);return}e.has(`checkboxValue`)&&this.syncFormValue(),(e.has(`indeterminate`)||e.has(`checked`))&&(this.input.indeterminate=this.indeterminate,this.input.checked=this.checked),super.updated(e)}defaultSlotChanged(e){let t=e.target;this.hasDefaultSlotContent=t.assignedNodes({flatten:!0}).some(e=>{var t;return e.nodeType===Node.TEXT_NODE?(t=e.textContent)==null?void 0:t.trim():e.nodeType===Node.ELEMENT_NODE})}handleChange(e){let t=e.target;this.checked=t.checked,this.indeterminate=!1,this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{checked:this.checked},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}render(){var e,t;let n=this.hasDefaultSlotContent,r=!!this.hint||this.hasSlotController.test(`hint`,this.withHint);return j`
            <label
                part="base"
                class=${D({root:!0,"root--with-hint":r})}
            >
                <input
                    part="input"
                    class="input"
                    type="checkbox"
                    .checked=${this.checked}
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    name=${(e=this.name)==null?x:e}
                    value=${this.checkboxValue}
                    aria-labelledby=${n?`label`:x}
                    aria-describedby=${r?`hint`:x}
                    aria-label=${n||(t=this.ariaLabel)==null?x:t}
                    aria-invalid=${this.invalid?`true`:x}
                    @change=${this.handleChange}
                />
                <span part="control" class="control">
                    <span part="checked-icon" class="icon-check">${fo()}</span>
                    <span part="indeterminate-icon" class="icon-indeterminate">${po()}</span>
                </span>
                ${n||r?j`
                        <span class="text">
                            ${n?j`
                                    <span part="label" class="label" id="label">
                                        <slot @slotchange=${this.defaultSlotChanged}></slot>
                                    </span>
                                `:j`<slot @slotchange=${this.defaultSlotChanged} hidden></slot>`}
                            ${r?j`
                                    <span part="hint" class="hint" id="hint">
                                        <slot name="hint">${this.hint}</slot>
                                    </span>
                                `:x}
                        </span>
                    `:j`<slot @slotchange=${this.defaultSlotChanged} hidden></slot>`}
            </label>
        `}},uo.shadowRootOptions={mode:`open`,delegatesFocus:!0},uo.styles=mo,uo);T([C({type:Boolean,reflect:!0})],V.prototype,`checked`,void 0),T([C({type:Boolean,reflect:!0})],V.prototype,`indeterminate`,void 0),T([C({type:Boolean,reflect:!0})],V.prototype,`disabled`,void 0),T([C({type:Boolean,reflect:!0})],V.prototype,`invalid`,void 0),T([C()],V.prototype,`checkboxValue`,void 0),T([C({attribute:`default-checked`,type:Boolean})],V.prototype,`defaultChecked`,void 0),T([C({attribute:`aria-label`})],V.prototype,`ariaLabel`,void 0),T([C()],V.prototype,`hint`,void 0),T([C({type:Boolean,attribute:`with-hint`})],V.prototype,`withHint`,void 0),T([A(`.input`)],V.prototype,`input`,void 0),T([w()],V.prototype,`hasDefaultSlotContent`,void 0),V=T([k(`pk-checkbox`)],V);var ho,go={default:E`
        --pk-dropdown-item-padding-block: 8px;
        --pk-dropdown-item-padding-inline: 12px;
        --pk-dropdown-item-gap: 0.625rem;
        --pk-dropdown-item-font-size: var(--pk-font-size-base);
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 12px;
        --pk-dropdown-label-padding-inline: 12px;
        --pk-dropdown-label-font-size: 13px;
        --pk-dropdown-details-font-size: var(--pk-font-size-sm);
    `,xs:E`
        --pk-dropdown-item-padding-block: 3px;
        --pk-dropdown-item-padding-inline: 8px;
        --pk-dropdown-item-gap: 0.375rem;
        --pk-dropdown-item-font-size: 12px;
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 10px;
        --pk-dropdown-label-padding-inline: 8px;
        --pk-dropdown-label-font-size: 11px;
        --pk-dropdown-details-font-size: 11px;
    `,sm:E`
        --pk-dropdown-item-padding-block: 4px;
        --pk-dropdown-item-padding-inline: 10px;
        --pk-dropdown-item-gap: 0.4375rem;
        --pk-dropdown-item-font-size: 13px;
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 12px;
        --pk-dropdown-label-padding-inline: 10px;
        --pk-dropdown-label-font-size: 11px;
        --pk-dropdown-details-font-size: 12px;
    `,lg:E`
        --pk-dropdown-item-padding-block: 10px;
        --pk-dropdown-item-padding-inline: 14px;
        --pk-dropdown-item-gap: 0.75rem;
        --pk-dropdown-item-font-size: 16px;
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 14px;
        --pk-dropdown-label-padding-inline: 14px;
        --pk-dropdown-label-font-size: 14px;
        --pk-dropdown-details-font-size: var(--pk-font-size-sm);
    `,xl:E`
        --pk-dropdown-item-padding-block: 12px;
        --pk-dropdown-item-padding-inline: 16px;
        --pk-dropdown-item-gap: 0.75rem;
        --pk-dropdown-item-font-size: 18px;
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 16px;
        --pk-dropdown-label-padding-inline: 16px;
        --pk-dropdown-label-font-size: 15px;
        --pk-dropdown-details-font-size: var(--pk-font-size-base);
    `},_o=E`
    @layer pk-component {
        :host {
            ${go.default}
        }

        :host([size='xs']) {
            ${go.xs}
        }

        :host([size='sm']) {
            ${go.sm}
        }

        :host([size='lg']) {
            ${go.lg}
        }

        :host([size='xl']) {
            ${go.xl}
        }
    }
`,vo=E`
    @layer pk-component {
        .panel[data-size='default'],
        .submenu-panel[data-size='default'] {
            ${go.default}
        }

        .panel[data-size='xs'],
        .submenu-panel[data-size='xs'] {
            ${go.xs}
        }

        .panel[data-size='sm'],
        .submenu-panel[data-size='sm'] {
            ${go.sm}
        }

        .panel[data-size='lg'],
        .submenu-panel[data-size='lg'] {
            ${go.lg}
        }

        .panel[data-size='xl'],
        .submenu-panel[data-size='xl'] {
            ${go.xl}
        }
    }
`;E`
    ${_o}
    ${vo}
`;var yo=[Ae,vo,E`
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
`],bo,xo=M(g),So=M(be),H=(ho=class extends le{constructor(...e){super(...e),this.value=``,this.type=`normal`,this.radioGroup=``,this.disabled=!1,this.destructive=!1,this.checked=!1,this.submenuOpen=!1,this.active=!1,this.submenuAnimated=!1,this.hasSlotController=new ge(this,`submenu`,`details`,`start`,`prefix`),this.handleMouseEnter=()=>{this.hasSubmenu()&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)},this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}}connectedCallback(){super.connectedCallback(),this.syncRole(),this.syncSubmenuAria(),this.addEventListener(`click`,this.handleHostClick),this.addEventListener(`mouseenter`,this.handleMouseEnter)}disconnectedCallback(){this.removeEventListener(`click`,this.handleHostClick),this.removeEventListener(`mouseenter`,this.handleMouseEnter),this.closeSubmenu(),super.disconnectedCallback()}updated(e){(e.has(`type`)||e.has(`checked`))&&this.syncRole(),(e.has(`submenuOpen`)||e.size===0)&&this.syncSubmenuAria(),e.has(`submenuOpen`)&&(this.submenuOpen?this.ensureSubmenuSurface():this.submenuAnimated=!1)}hasSubmenu(){return this.hasSlotController.test(`submenu`)}syncSubmenuAria(){let e=this.hasSubmenu();e?this.setAttribute(`aria-haspopup`,`menu`):this.removeAttribute(`aria-haspopup`),this.setAttribute(`aria-expanded`,e&&this.submenuOpen?`true`:`false`)}focusControl(){var e;(e=this.shadowRoot)==null||(e=e.querySelector(`.item`))==null||e.focus({preventScroll:!0})}focus(e){var t;let n=(t=this.shadowRoot)==null?void 0:t.querySelector(`.item`);if(n){n.focus(e);return}super.focus(e)}get submenuElement(){var e;return(e=this.submenuPanelElement)==null?null:e}closeSubmenu(){this.submenuAnimated=!1,this.submenuOpen=!1}openSubmenu(){this.hasSubmenu()&&!this.disabled&&this.isConnected&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}notifyParentOfOpening(){this.dispatchEvent(new CustomEvent(`pk-submenu-open`,{bubbles:!0,composed:!0,detail:{item:this}}));let e=this.parentElement;if(e)for(let t of e.children)t!==this&&t instanceof bo&&t.getAttribute(`slot`)===this.getAttribute(`slot`)&&t.submenuOpen&&(t.submenuOpen=!1)}ensureSubmenuSurface(){this.hasSubmenu()&&!this.disabled&&(this.submenuAnimated=!0,this.updateComplete.then(()=>{this.submenuOpen&&this.submenuPanelElement&&(this.submenuPanelElement.hidden=!1,oe(this.submenuPanelElement,`right-start`),v(this.submenuPopupElement,`right-start`).then(e=>{oe(this.submenuPanelElement,e)}))}))}syncRole(){if(this.type===`checkbox`){this.setAttribute(`role`,`menuitemcheckbox`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`);return}if(this.type===`radio`){this.setAttribute(`role`,`menuitemradio`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`);return}this.setAttribute(`role`,`menuitem`),this.removeAttribute(`aria-checked`)}handleClick(e){if(this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}this.hasSubmenu()&&(e.preventDefault(),this.openSubmenu())}render(){let e=this.hasSubmenu(),t=this.type===`checkbox`||this.type===`radio`,n=this.hasSlotController.test(`start`)||this.hasSlotController.test(`prefix`);return j`
            <button
                part="item"
                type="button"
                class="item"
                ?disabled=${this.disabled}
                aria-disabled=${this.disabled?`true`:x}
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
                ${t?j`<span part="check" class="check" aria-hidden="true">${s(xo)}</span>`:x}
                ${e?j`<span class="submenu-icon" aria-hidden="true">${s(So)}</span>`:x}
            </button>
            ${e?j`
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
                        data-size=${Co(this)}
                        ?hidden=${!this.submenuOpen}
                        data-open=${this.submenuAnimated?``:x}
                        aria-orientation="vertical"
                    >
                        <slot name="submenu"></slot>
                    </div>
                </pk-popup>
            `:x}
        `}},bo=ho,ho.styles=yo,ho);T([C()],H.prototype,`value`,void 0),T([C({reflect:!0})],H.prototype,`type`,void 0),T([C({attribute:`radio-group`})],H.prototype,`radioGroup`,void 0),T([C({type:Boolean,reflect:!0})],H.prototype,`disabled`,void 0),T([C({type:Boolean,reflect:!0})],H.prototype,`destructive`,void 0),T([C({type:Boolean,reflect:!0})],H.prototype,`checked`,void 0),T([C({attribute:`submenu-open`,type:Boolean,reflect:!0})],H.prototype,`submenuOpen`,void 0),T([C({type:Boolean})],H.prototype,`active`,void 0),T([w()],H.prototype,`submenuAnimated`,void 0),T([A(`.submenu-panel`)],H.prototype,`submenuPanelElement`,void 0),T([A(`pk-popup`)],H.prototype,`submenuPopupElement`,void 0),H=bo=T([k(`pk-dropdown-item`)],H);function Co(e){var t,n;let r=(t=e.parentElement)==null?void 0:t.getAttribute(`data-size`);if(r===`xs`||r===`sm`||r==="default"||r===`lg`||r===`xl`)return r;let i=(n=e.closest(`pk-dropdown-menu`))==null?void 0:n.getAttribute(`size`);return i===`xs`||i===`sm`||i===`lg`||i===`xl`?i:`default`}var wo,To=[Pe(),_o,vo,E`
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
    `],Eo=new Set,Do=(wo=class extends le{constructor(...e){super(...e),this.open=!1,this.size=`default`,this.placement=`bottom-start`,this.sideOffset=4,this.distance=4,this.skidding=0,this.for=``,this.userTypedQuery=``,this.userTypedTimeout=0,this.openSubmenuStack=[],this.openedByKeyboard=!1,this.triggerElement=null,this.handleMenuClick=e=>{let t=this.resolveMenuItem(e);if(t&&!t.disabled){if(t.hasSubmenu()){t.submenuOpen||(this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),t.openSubmenu()),e.stopPropagation();return}this.makeSelection(t)}},this.handleSubmenuOpening=e=>{var t;let n=(t=e.detail)==null?void 0:t.item;n instanceof H&&(this.closeSiblingSubmenus(n),this.addToSubmenuStack(n))},this.handleGlobalMouseMove=e=>{let t=this.getCurrentSubmenuItem();if(!(t!=null&&t.submenuOpen)||!t.submenuElement)return;let n=t.submenuElement,r=e.composedPath(),i=t.matches(`:hover`),a=!!n.matches(`:hover`),o=i||r.some(e=>e===t),s=a||r.some(e=>e instanceof HTMLElement&&e.closest(`[part="submenu"]`)===n);!o&&!s&&window.setTimeout(()=>{!i&&!a&&(t.submenuOpen=!1)},100)},this.handleTriggerClick=e=>{let t=this.getTrigger();t&&e.composedPath().includes(t)&&(e.preventDefault(),e.stopPropagation(),this.openedByKeyboard=!1,this.open=!this.open)},this.handleExternalTriggerClick=e=>{e.preventDefault(),e.stopPropagation(),this.openedByKeyboard=!1,this.open=!this.open},this.handleTriggerKeyDown=e=>{let t=this.getTrigger();t&&e.composedPath().includes(t)&&(this.open||(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),e.stopPropagation(),this.openedByKeyboard=!0,this.open=!0))},this.handleDocumentKeyDown=e=>{let t=this.isRtl();if(e.key===`Escape`&&this.open&&Ee(this)){var n;e.preventDefault(),e.stopPropagation(),this.open=!1,(n=this.getTrigger())==null||n.focus({preventScroll:!0});return}if(!this.open)return;let r=[...Fe()].find(e=>e.localName===`pk-dropdown-item`),i=(r==null?void 0:r.localName)===`pk-dropdown-item`,a=this.getCurrentSubmenuItem(),o=!!a,s,c,l;o&&a?(s=this.getSubmenuItems(a),c=s.find(e=>e.active||e===r),l=c?s.indexOf(c):-1):(s=this.getItems(),c=s.find(e=>e.active||e===r),l=c?s.indexOf(c):-1);let u;if(e.key===`ArrowUp`&&(e.preventDefault(),e.stopPropagation(),u=l>0?s[l-1]:s[s.length-1]),e.key===`ArrowDown`&&(e.preventDefault(),e.stopPropagation(),u=l!==-1&&l<s.length-1?s[l+1]:s[0]),e.key===(t?`ArrowLeft`:`ArrowRight`)&&i&&c&&c.hasSubmenu()){e.preventDefault(),e.stopPropagation(),this.closeSiblingSubmenus(c),c.openSubmenu(),this.addToSubmenuStack(c),window.setTimeout(()=>{let e=this.getSubmenuItems(c);e.length>0&&this.setActiveItem(e,e[0])},0);return}if(e.key===(t?`ArrowRight`:`ArrowLeft`)&&o){e.preventDefault(),e.stopPropagation();let t=this.removeFromSubmenuStack();t&&(t.submenuOpen=!1,window.setTimeout(()=>{t.focus({preventScroll:!0}),t.active=!0,(t.slot===`submenu`&&t.parentElement instanceof H?this.getSubmenuItems(t.parentElement):this.getItems()).forEach(e=>{e!==t&&(e.active=!1)})},0));return}if((e.key===`Home`||e.key===`End`)&&(e.preventDefault(),e.stopPropagation(),u=e.key===`Home`?s[0]:s[s.length-1]),e.key===`Tab`){this.open=!1;return}if(e.key.length===1&&!(e.metaKey||e.ctrlKey||e.altKey)&&(e.key!==` `||this.userTypedQuery!==``)){window.clearTimeout(this.userTypedTimeout),this.userTypedTimeout=window.setTimeout(()=>{this.userTypedQuery=``},1e3),this.userTypedQuery+=e.key;let t=this.userTypedQuery.trim().toLowerCase();u=s.find(e=>(e.textContent||``).trim().toLowerCase().startsWith(t))}if(u){e.preventDefault(),e.stopPropagation(),this.setActiveItem(s,u);return}(e.key===`Enter`||e.key===` `&&this.userTypedQuery===``)&&i&&c&&(e.preventDefault(),e.stopPropagation(),c.hasSubmenu()?(this.closeSiblingSubmenus(c),c.openSubmenu(),this.addToSubmenuStack(c),window.setTimeout(()=>{let e=this.getSubmenuItems(c);e.length>0&&this.setActiveItem(e,e[0])},0)):this.makeSelection(c))},this.handleDocumentPointerDown=e=>{let t=e.composedPath(),n=this.getTrigger();t.some(e=>e===this||e===n)||(this.open=!1)}}get panelElement(){var e;return(e=this.menuElement)==null?null:e}get popup(){var e;return(e=this.popupElement)==null?null:e}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleTriggerClick,!0),this.addEventListener(`keydown`,this.handleTriggerKeyDown)}firstUpdated(){let e=()=>{if(this.for){this.resolveExternalTrigger();return}this.syncSlottedTrigger()};queueMicrotask(e),requestAnimationFrame(e)}disconnectedCallback(){var e;window.clearTimeout(this.userTypedTimeout),this.removeEventListener(`click`,this.handleTriggerClick,!0),this.removeEventListener(`keydown`,this.handleTriggerKeyDown),this.unbindTrigger(this.triggerElement),this.triggerElement=null,this.closeAllSubmenus(),this.popupElement&&(this.popupElement.active=!1),(e=this.menuElement)==null||e.classList.remove(`show`,`hide`),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),_e(this),Eo.delete(this),super.disconnectedCallback()}updated(e){var t=()=>super.updated,n=this;return S(function*(){if(t().call(n,e),e.has(`for`)&&n.resolveExternalTrigger(),e.has(`open`)&&n.syncTriggerExpanded(),!e.has(`open`))return;let r=e.get(`open`);r!==n.open&&(r!==void 0||n.open!==!1)&&(n.open?yield n.showMenu():(n.closeAllSubmenus(),yield n.hideMenu(`unknown`)))})()}getItems(e=!1){var t,n;let r=((t=(n=this.defaultSlot)==null?void 0:n.assignedElements({flatten:!0}))==null?[]:t).filter(e=>e.localName===`pk-dropdown-item`);return e?r:r.filter(e=>!e.disabled)}getSubmenuItems(e,t=!1){var n,r;let i=((n=(r=e.shadowRoot)==null||(r=r.querySelector(`slot[name="submenu"]`))==null?void 0:r.assignedElements({flatten:!0}))==null?[...e.children].filter(e=>e.getAttribute(`slot`)===`submenu`):n).filter(e=>e.localName===`pk-dropdown-item`);return t?i:i.filter(e=>!e.disabled)}getTrigger(){var e,t;return this.for?(e=c(this,this.for))==null?this.triggerElement:e:(t=this.querySelector(`[slot="trigger"]`))==null?this.triggerElement:t}getAnchor(){var e;return(e=this.getTrigger())==null?``:e}resolveExternalTrigger(){this.unbindTrigger(this.triggerElement),this.triggerElement=this.for?c(this,this.for):null,this.bindTrigger(this.triggerElement),this.requestUpdate()}onTriggerSlotChange(e){if(this.for)return;let[t]=e.target.assignedElements({flatten:!0});this.unbindTrigger(this.triggerElement),this.triggerElement=t==null?null:t,this.bindTrigger(this.triggerElement),this.requestUpdate()}syncSlottedTrigger(){let e=this.renderRoot.querySelector(`slot[name="trigger"]`);e&&this.onTriggerSlotChange({target:e})}bindTrigger(e){e&&(e.setAttribute(`aria-haspopup`,`menu`),this.for&&(e.addEventListener(`click`,this.handleExternalTriggerClick),e.addEventListener(`keydown`,this.handleTriggerKeyDown)),this.syncTriggerExpanded())}unbindTrigger(e){e==null||e.removeEventListener(`click`,this.handleExternalTriggerClick),e==null||e.removeEventListener(`keydown`,this.handleTriggerKeyDown)}syncTriggerExpanded(){var e;(e=this.getTrigger())==null||e.setAttribute(`aria-expanded`,this.open?`true`:`false`)}closeAfterSelect(e=`api`){this.open=!1}makeSelection(e){let t=this.getTrigger();if(e.disabled)return;e.type===`checkbox`&&(e.checked=!e.checked),e.type===`radio`&&!e.checked&&(e.checked=!0);let n={value:e.value,type:e.type,checked:e.checked,radioGroup:e.radioGroup};e.dispatchEvent(new CustomEvent(`pk-select`,{detail:n,bubbles:!1,composed:!1,cancelable:!0}));let r=new CustomEvent(`pk-select`,{detail:n,bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(r),r.defaultPrevented||(this.open=!1,t==null||t.focus({preventScroll:!0}))}resolveMenuItem(e){var t;let n=e.target;if(n instanceof H)return n;if(n instanceof Element){let e=n.closest(`pk-dropdown-item`);if(e instanceof H)return e}return(t=e.composedPath().find(e=>e instanceof H))==null?null:t}whenClosed(){var e;return this.open?new Promise(e=>{this.addEventListener(`pk-after-hide`,()=>{this.popupElement.stop().then(()=>e())},{once:!0})}):(e=this.popupElement)!=null&&e.active?this.popupElement.stop():Promise.resolve()}forceDismissCleanup(){var e;this.open=!1,this.popupElement.active=!1,(e=this.menuElement)==null||e.classList.remove(`show`,`hide`),this.closeAllSubmenus(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),_e(this),Eo.delete(this)}isRtl(){return getComputedStyle(this).direction===`rtl`}addToSubmenuStack(e){let t=this.openSubmenuStack.indexOf(e);t===-1?this.openSubmenuStack.push(e):this.openSubmenuStack=this.openSubmenuStack.slice(0,t+1)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(e=>{e.submenuOpen=!1,e.active=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(e){let t=e.closest(`pk-dropdown-item:not([slot="submenu"])`);(t instanceof H?this.getSubmenuItems(t,!0):this.getItems(!0)).forEach(t=>{t!==e&&t.submenuOpen&&(t.submenuOpen=!1)}),this.openSubmenuStack.includes(e)||this.openSubmenuStack.push(e)}setActiveItem(e,t){e.forEach(e=>{e.active=e===t,e===t?e.setAttribute(`data-highlighted`,``):e.removeAttribute(`data-highlighted`)}),t.focus({preventScroll:!0}),t.scrollIntoView({block:`nearest`})}showMenu(){var e=this;return S(function*(){var t;if(!e.popupElement||!e.menuElement)return;e.for&&!((t=e.triggerElement)!=null&&t.isConnected)&&e.resolveExternalTrigger();let n=new re;if(!e.dispatchEvent(n)){e.open=!1;return}if(e.popupElement.active&&(e.popupElement.active=!1,e.menuElement.classList.remove(`show`,`hide`),yield e.updateComplete),Eo.forEach(t=>{t!==e&&(t.open=!1)}),e.popupElement.active=!0,e.open=!0,Eo.add(e),Ce(e),document.addEventListener(`keydown`,e.handleDocumentKeyDown),document.addEventListener(`pointerdown`,e.handleDocumentPointerDown,!0),document.addEventListener(`mousemove`,e.handleGlobalMouseMove),yield e.updateComplete,yield v(e.popupElement,e.placement,100,{requireEvent:!0}),!e.open){e.popupElement.active=!1,Eo.delete(e),_e(e),document.removeEventListener(`keydown`,e.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,e.handleDocumentPointerDown,!0),document.removeEventListener(`mousemove`,e.handleGlobalMouseMove);return}e.menuElement.classList.remove(`hide`),yield rt(e.menuElement,`show`);let r=e.getItems();r.length>0&&(e.openedByKeyboard?e.setActiveItem(r,r[0]):(r.forEach(e=>{e.active=!1,e.removeAttribute(`data-highlighted`)}),e.menuElement.focus({preventScroll:!0}))),e.openedByKeyboard=!1,e.dispatchEvent(new l),e.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!0},bubbles:!0,composed:!0}))})()}hideMenu(e){var t=this;return S(function*(){if(!t.popupElement||!t.menuElement)return;let n=new te(e);if(!t.dispatchEvent(n)){t.open=!0;return}t.open=!1,Eo.delete(t),_e(t),document.removeEventListener(`keydown`,t.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,t.handleDocumentPointerDown,!0),document.removeEventListener(`mousemove`,t.handleGlobalMouseMove),t.userTypedQuery=``,window.clearTimeout(t.userTypedTimeout),t.getItems(!0).forEach(e=>{e.active=!1,e.removeAttribute(`data-highlighted`)}),t.menuElement.classList.remove(`show`),yield rt(t.menuElement,`hide`),t.popupElement.active=!1,t.dispatchEvent(new ne),t.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!1},bubbles:!0,composed:!0}))})()}render(){var e;let t=this.hasUpdated?(e=this.popupElement)==null?void 0:e.active:this.open,n=this.for?this.getAnchor():``;return j`
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
        `}},wo.styles=To,wo);T([C({type:Boolean,reflect:!0})],Do.prototype,`open`,void 0),T([C({reflect:!0})],Do.prototype,`size`,void 0),T([C({reflect:!0})],Do.prototype,`placement`,void 0),T([C({attribute:`side-offset`,type:Number})],Do.prototype,`sideOffset`,void 0),T([C({type:Number})],Do.prototype,`distance`,void 0),T([C({type:Number})],Do.prototype,`skidding`,void 0),T([C({reflect:!0})],Do.prototype,`for`,void 0),T([A(`slot:not([name])`)],Do.prototype,`defaultSlot`,void 0),T([A(`#menu`)],Do.prototype,`menuElement`,void 0),T([A(`pk-popup`)],Do.prototype,`popupElement`,void 0),Do=T([k(`pk-dropdown-menu`)],Do);function Oo(e,t=150){return e?new Promise(n=>{let r=!1,i=()=>{r||(r=!0,e.removeEventListener(`animationend`,a),window.clearTimeout(o),e.classList.remove(`closing`),n())},a=t=>{t.target===e&&t.animationName.startsWith(`pk-popup-content-out`)&&i()};e.classList.add(`closing`),e.addEventListener(`animationend`,a);let o=window.setTimeout(i,t)}):Promise.resolve()}function ko(e){let{host:t,options:n,visible:r,listboxId:i,filterQuery:a,isSelected:o}=e;for(let e of n)e.selected=o(e.value),e.hidden=!r.includes(e),e.optionId=`${i}-option-${e.value}`,e.matchQuery=a;for(let e of t.querySelectorAll(`pk-option-group`)){let t=[...e.querySelectorAll(`pk-option`)],n=t.length>0&&t.every(e=>e.hidden);e.toggleAttribute(`data-pk-filter-empty`,n)}Te(t)}var Ao=class{constructor(e,t){var n,r;this.getHandler=e,this.timer=null,this.requestId=0,this.abortController=null,this.callbacks=t,this.debounceMs=(n=t.debounceMs)==null?200:n,this.errorLabel=(r=t.errorLabel)==null?`options`:r}schedule(e){this.timer!==null&&window.clearTimeout(this.timer),this.timer=window.setTimeout(()=>{this.timer=null,this.run(e)},this.debounceMs)}cancel(){var e;this.timer!==null&&(window.clearTimeout(this.timer),this.timer=null),(e=this.abortController)==null||e.abort(),this.abortController=null}run(e){var t=this;return S(function*(){var n,r,i;let a=t.getHandler();if(!a)return;let o=++t.requestId;if((n=t.abortController)==null||n.abort(),t.abortController=new AbortController,!e){var s,c;(s=(c=t.callbacks).onEmptyQuery)==null||s.call(c);return}(r=(i=t.callbacks).onLoading)==null||r.call(i);try{let n=yield a(e,t.abortController.signal);if(o!==t.requestId)return;t.callbacks.onResults(n)}catch(e){var l,u,d;if((l=t.abortController)!=null&&l.signal.aborted||o!==t.requestId||e instanceof DOMException&&e.name===`AbortError`)return;console.error(`Failed to load ${t.errorLabel}:`,e),(u=(d=t.callbacks).onError)==null||u.call(d,`Failed to load options. Please try again.`),t.callbacks.onResults([])}finally{var f,p;o===t.requestId&&((f=(p=t.callbacks).onSettled)==null||f.call(p))}})()}};function jo(e,t){var n,r;let i=e.getLabel().toLowerCase(),a=e.value.toLowerCase(),o=((n=(r=e.getSearchText)==null?void 0:r.call(e))==null?i:n).toLowerCase();return i.includes(t)||a.includes(t)||o.includes(t)}function Mo(e,t,n){return n?n(e,t):jo(e,t)}var No,Po=class extends Event{constructor(e){super(`pk-create`,{bubbles:!0,cancelable:!0,composed:!0}),this.inputValue=e}},Fo=[Ae,E`
    ${r}
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
            flex-wrap: wrap;
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
            flex: 0 1 auto;
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
`],Io=M(b.chevronDown),Lo=M(b.xmark),U=(No=class extends Ne{constructor(...e){super(...e),this.assumeInteractionOn=[`blur`,`input`],this.open=!1,this.multiple=!1,this.placement=`bottom-start`,this.sideOffset=6,this.clearable=!1,this.withClear=!1,this.allowCreate=!1,this.allowCustomValue=!1,this.autoHighlight=!1,this.popupMode=!1,this.searchPlaceholder=`Search`,this.invalid=!1,this.size=`default`,this.placeholder=``,this.emptyMessage=`No options found.`,this.value=``,this.defaultValue=``,this.values=[],this.defaultValues=[],this.label=``,this.instructions=``,this.ariaLabel=null,this.loopFocus=!0,this.filter=null,this.async=!1,this.loadingMessage=`Searching…`,this.startTypingMessage=`Start typing to search…`,this.fetchOptions=null,this.hasSlotController=new ge(this,`start`,`end`),this.listboxId=me(`pk-combobox-listbox`),this.inputId=me(`pk-combobox-input`),this.createOptionId=me(`pk-combobox-create`),this.options=[],this.inputValue=``,this.hasInputSinceOpening=!1,this.highlightedIndex=-1,this.createOptionHighlighted=!1,this.closing=!1,this.panelAnimated=!1,this.dismissRegistered=!1,this.panelEventTarget=null,this.selectedOptionMeta=null,this.asyncFetcher=null,this.asyncLoading=!1,this.asyncError=null,this.handleOptionsMutation=(e={})=>{let t=this.getOptionElements(),n=t.length!==this.options.length||t.some((e,t)=>e!==this.options[t]);this.options=t,this.applySelection(),e.render!==!1&&n&&this.requestUpdate()},this.syncOptions=()=>{this.handleOptionsMutation({render:!0})},this.togglePanel=e=>{e==null||e.preventDefault(),e==null||e.stopPropagation(),!this.disabled&&(this.open||this.closing?this.closePanel(`api`):this.openPanel())},this.onDocumentPointerDown=e=>{this.isPointerInside(e)||this.closePanel(`light-dismiss`)},this.onDocumentKeyDown=e=>{if(!this.open)return;if(e.key===`Escape`){if(!Ee(this))return;e.preventDefault(),e.stopPropagation(),this.closePanel(`escape`);return}let t=this.panelInput;if(t&&e.composedPath().includes(t)||!(De.has(e.key)||ce(e)))return;let n=this.panelElement,r=e.composedPath();n&&r.includes(n)&&fe(e,{anchor:this.controlElement,panel:n})&&(e.preventDefault(),e.stopPropagation(),this.onListboxKeyDown(e))},this.handleOptionSelect=e=>{let{value:t}=e.detail;if(this.multiple){var n;this.values=this.values.includes(t)?this.values.filter(e=>e!==t):[...this.values,t],this.inputValue=``,this.applySelection(),this.emitValueChange(),(n=this.activeInput)==null||n.focus({preventScroll:!0});return}this.value=t,this.syncSelectedOptionMeta(),this.applySelection(),this.closePanel(`api`),this.emitValueChange()},this.handleOptionHighlight=e=>{if(!this.open)return;let t=this.getEnabledVisibleOptions().findIndex(t=>t.value===e.detail.value);t!==-1&&t!==this.highlightedIndex&&(this.highlightedIndex=t,this.syncHighlight())},this.handleControlMouseDown=e=>{if(this.disabled||this.usesPopupMode||e.composedPath().some(e=>e instanceof HTMLElement?e.classList.contains(`icon-button`)||e.classList.contains(`clear-button`)||e.classList.contains(`tag-remove`):!1))return;let t=e.target===this.activeInput;if(!this.open&&!this.closing){var n;t||e.preventDefault(),(n=this.activeInput)==null||n.focus({preventScroll:!0}),this.openPanel();return}if(!t){var r;e.preventDefault(),(r=this.activeInput)==null||r.focus({preventScroll:!0})}},this.handleTriggerKeyDown=e=>{if(!this.disabled){if(e.key===`Enter`||e.key===` `){e.preventDefault(),this.togglePanel(e);return}e.key===`ArrowDown`&&!this.open&&(e.preventDefault(),this.openPanel())}},this.handleListboxKeyDownEvent=e=>{this.open&&this.onListboxKeyDown(e.detail.keyboardEvent)},this.handleCreateMouseEnter=()=>{if(!this.open)return;let e=this.getEnabledVisibleOptions();this.highlightedIndex=e.length,this.syncHighlight()},this.handleCreateKeyDown=e=>{e.preventDefault(),e.stopPropagation(),this.onListboxKeyDown(e)}}static get validators(){return[...super.validators,je(),{observedAttributes:[`required`],checkValidity:e=>{let t=e,n={message:`Please select an item in the list.`,isValid:!0,invalidKeys:[]};return!t.required||!(t.multiple?t.values.length===0:!t.value)?n:(n.isValid=!1,n.invalidKeys.push(`valueMissing`),n)}}]}get panelElement(){var e,t;return(e=(t=this.popupElement)==null?void 0:t.getContentElement())==null?null:e}get panelInput(){var e;return(e=this.panelElement)==null?void 0:e.querySelector(`.panel-input`)}get panelBodyElement(){var e;return(e=this.panelElement)==null?void 0:e.querySelector(`.panel-body`)}get usesPopupMode(){return this.popupMode&&!this.multiple}get activeInput(){return this.usesPopupMode?this.panelInput:this.controlInput}keepsFocusOnInput(){return!!this.activeInput}maintainInputFocus(){var e;(e=this.activeInput)==null||e.focus({preventScroll:!0})}get listScrollContainer(){var e,t;return(e=(t=this.panelBodyElement)==null?this.panelElement:t)==null?this:e}connectedCallback(){var e;this.instructions=(e=this.getAttribute(`hint`))==null?this.instructions:e,this.refreshOptions(),super.connectedCallback(),this.syncHasValueAttribute(),this.addEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent),this.optionsObserver=new MutationObserver(()=>{this.handleOptionsMutation({render:!0})}),this.optionsObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var e,t,n;this.unbindPanelEvents(),this.removeEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent),(e=this.optionsObserver)==null||e.disconnect(),(t=this.liveRegion)==null||t.destroy(),this.liveRegion=void 0,(n=this.asyncFetcher)==null||n.cancel(),this.closePanel(`api`),super.disconnectedCallback()}updated(e){(e.has(`value`)||e.has(`values`)||e.has(`multiple`))&&(this.syncHasValueAttribute(),this.syncSelectedOptionMeta(),this.applySelection()),(e.has(`values`)||e.has(`multiple`))&&this.syncFormValue(),super.updated(e)}get validationTarget(){var e,t;return(e=(t=this.activeInput)==null?this.popupTrigger:t)==null?this.controlElement:e}getAriaMirrorTarget(){var e,t,n;return(e=(t=(n=this.activeInput)==null?this.popupTrigger:n)==null?this.controlElement:t)==null?null:e}syncFormValue(){if(!this.name){this.setFormValue(null);return}if(this.multiple){let e=new FormData;for(let t of this.values)e.append(this.name,t);this.setFormValue(e);return}this.setFormValue(this.value||``)}resetToDefaultValue(){this.multiple?this.values=[...this.defaultValues]:this.value=this.defaultValue,this.inputValue=``,this.applySelection()}restoreFormState(e){if(e instanceof FormData&&this.name){this.values=e.getAll(this.name).map(String);return}typeof e==`string`&&(this.value=e)}syncHasValueAttribute(){this.toggleAttribute(`data-has-value`,this.hasSelection())}getOptionElements(){var e;let t=(e=this.popupElement)==null||(e=e.getContentElement())==null?void 0:e.querySelectorAll(`pk-option`);return t&&t.length>0?[...t]:[...this.querySelectorAll(`pk-option`)]}refreshOptions(){this.handleOptionsMutation({render:!1})}bindPanelEvents(){let e=this.panelElement;e&&e!==this.panelEventTarget&&(this.unbindPanelEvents(),this.panelEventTarget=e,e.addEventListener(`pk-option-select`,this.handleOptionSelect),e.addEventListener(`pk-option-highlight`,this.handleOptionHighlight),e.addEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent))}unbindPanelEvents(){this.panelEventTarget&&(this.panelEventTarget.removeEventListener(`pk-option-select`,this.handleOptionSelect),this.panelEventTarget.removeEventListener(`pk-option-highlight`,this.handleOptionHighlight),this.panelEventTarget.removeEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent),this.panelEventTarget=null)}isOptionInHiddenGroup(e){let t=e.closest(`pk-option-group`);return!!(t!=null&&t.hidden)}matchesFilter(e,t){return Mo(e,t,this.filter)}getFilterQuery(){return!this.open||!this.multiple&&!this.hasInputSinceOpening&&!this.usesPopupMode?``:this.inputValue.trim().toLowerCase()}getVisibleOptions(){if(this.usesAsyncSearch)return this.options.filter(e=>!this.isOptionInHiddenGroup(e));let e=this.getFilterQuery();return this.options.filter(t=>this.isOptionInHiddenGroup(t)?!1:!e||this.matchesFilter(t,e))}getEnabledVisibleOptions(){return this.getVisibleOptions().filter(e=>!e.disabled)}getSelectedOptions(){if(this.multiple){let e=new Map(this.options.map(e=>[e.value,e]));return this.values.map(t=>e.get(t)).filter(e=>e!==void 0)}let e=this.options.find(e=>e.value===this.value);return e?[e]:[]}getSelectedOption(){return this.options.find(e=>e.value===this.value)}get usesAsyncSearch(){return this.async&&!!this.fetchOptions&&!this.multiple&&!this.usesPopupMode}getSelectedLabel(){var e,t,n,r;return(e=(t=(n=this.getSelectedOption())==null?void 0:n.getLabel())==null?(r=this.selectedOptionMeta)==null?void 0:r.label:t)==null?this.value:e}clearAsyncOptionNodes(){this.querySelectorAll(`:scope > pk-option, :scope > pk-option-group, :scope > pk-separator`).forEach(e=>e.remove())}renderAsyncOptionNodes(e){let t=this.mergeAsyncItems(e);this.clearAsyncOptionNodes();for(let e of t){let t=document.createElement(`pk-option`);t.value=e.value,t.textContent=e.label,this.append(t)}this.handleOptionsMutation({render:!0})}mergeAsyncItems(e){var t,n,r;if(!this.value)return e;let i=(t=this.selectedOptionMeta)==null?{value:this.value,label:(n=(r=this.getSelectedOption())==null?void 0:r.getLabel())==null?this.value:n}:t;return e.some(e=>e.value===i.value)?e:[...e,i]}syncSelectedOptionMeta(){if(!this.value){this.selectedOptionMeta=null;return}let e=this.getSelectedOption();e&&(this.selectedOptionMeta={value:e.value,label:e.getLabel()})}scheduleAsyncFetch(e){this.ensureAsyncFetcher().schedule(e)}ensureAsyncFetcher(){return this.asyncFetcher||(this.asyncFetcher=new Ao(()=>this.fetchOptions,{errorLabel:`combobox options`,onLoading:()=>{this.asyncLoading=!0,this.asyncError=null},onResults:e=>{this.renderAsyncOptionNodes(e)},onError:e=>{this.asyncError=e},onSettled:()=>{this.asyncLoading=!1},onEmptyQuery:()=>{this.asyncLoading=!1,this.asyncError=null,this.renderAsyncOptionNodes(this.value&&this.selectedOptionMeta?[this.selectedOptionMeta]:[])}})),this.asyncFetcher}getAsyncStatusMessage(){if(!this.usesAsyncSearch||!this.open)return null;if(this.asyncLoading)return this.loadingMessage;if(this.asyncError)return this.asyncError;let e=this.inputValue.trim();return e?this.getEnabledVisibleOptions().length===0&&!this.shouldShowCreateOption()?`No matches for "${e}".`:null:this.value?null:this.startTypingMessage}isSelected(e){return this.multiple?this.values.includes(e):this.value===e}getDisplayInputValue(){return this.usesPopupMode||this.multiple||this.open?this.inputValue:this.hasSelection()?this.getSelectedLabel():``}getTriggerDisplayValue(){return this.hasSelection()?this.getSelectedLabel():this.placeholder}isTriggerPlaceholder(){return!this.hasSelection()}hasSelection(){return this.multiple?this.values.length>0:!!(this.getSelectedOption()||this.selectedOptionMeta||this.value)}shouldShowCreateOption(){if(!this.allowCreate||!this.open||!this.multiple&&!this.hasInputSinceOpening)return!1;let e=this.inputValue.trim();if(!e)return!1;let t=e.toLowerCase();return!this.options.some(e=>e.getLabel().toLowerCase()===t||e.value.toLowerCase()===t)}getListboxNavItems(){let e=this.getEnabledVisibleOptions();return this.shouldShowCreateOption()&&this.createOptionElement?[...e,this.createOptionElement]:e}applySelection(){let e=this.getVisibleOptions(),t=this.open?this.getFilterQuery():``;ko({host:this,options:this.options,visible:e,listboxId:this.listboxId,filterQuery:t,isSelected:e=>this.isSelected(e)}),this.syncValueInput(),this.open&&(this.syncHighlight(),this.announceFilterResults())}syncValueInput(){this.input&&(this.input.value=this.multiple?this.values.join(`,`):this.value,this.input.required=this.required)}syncHighlightedIndexToSelection(){if(this.multiple)return;let e=this.getEnabledVisibleOptions();if(!this.value||e.length===0)return;let t=e.findIndex(e=>e.value===this.value);t>=0&&(this.highlightedIndex=t)}resetHighlightedIndexOnOpen(){if(this.autoHighlight){if(this.value){this.syncHighlightedIndexToSelection();return}this.highlightedIndex=0;return}this.highlightedIndex=-1}syncHighlight(){let e=this.getEnabledVisibleOptions(),t=this.shouldShowCreateOption(),n=e.length+ +!!t;for(let e of this.options)e.highlighted=!1,e.focusIndex=-1;if(this.createOptionHighlighted=!1,n===0||this.highlightedIndex<0)return;if(this.highlightedIndex>=n&&(this.highlightedIndex=n-1),t&&this.highlightedIndex===e.length){var r;this.createOptionHighlighted=!0,this.keepsFocusOnInput()||(r=this.createOptionElement)==null||r.focus({preventScroll:!0}),de(this.createOptionElement,this.listScrollContainer,`vertical`,`auto`),this.keepsFocusOnInput()&&this.maintainInputFocus();return}let i=e[this.highlightedIndex];i&&(i.highlighted=!0,i.focusIndex=this.keepsFocusOnInput()?-1:0,de(i,this.listScrollContainer,`vertical`,`auto`),this.keepsFocusOnInput()&&this.maintainInputFocus())}getActiveDescendantId(){var e;let t=this.getEnabledVisibleOptions();return this.shouldShowCreateOption()&&this.highlightedIndex===t.length?this.createOptionId:((e=t[this.highlightedIndex])==null?void 0:e.optionId)||null}announceFilterResults(){this.liveRegion||(this.liveRegion=new t(`polite`));let e=this.getEnabledVisibleOptions().length,n=this.getFilterQuery();if(n){if(this.shouldShowCreateOption()){this.liveRegion.announce(`Create ${n}`);return}this.liveRegion.announce(e===0?`${this.emptyMessage}`:`${e} ${e===1?`result`:`results`} available`)}}show(){var e=this;return S(function*(){e.open||e.closing||e.disabled||(yield e.openPanel())})()}hide(e=`api`){var t=this;return S(function*(){t.open&&!t.closing&&(yield t.closePanel(e))})()}openPanel(){var e=this,t,n;let r=this.controlElement;if(!r)return Promise.resolve();if(this.open){var i;return(i=this.activeInput)==null||i.focus({preventScroll:!0}),Promise.resolve()}if(this.closing)return Promise.resolve();this.dispatchEvent(new re),this.closing=!1,this.panelAnimated=!1,this.open=!0,this.hasInputSinceOpening=!1,this.inputValue=this.usesPopupMode?``:!this.multiple&&this.hasSelection()?this.getSelectedLabel():``,this.applySelection(),this.resetHighlightedIndexOnOpen(),this.usesAsyncSearch&&(this.syncSelectedOptionMeta(),this.asyncError=null,this.asyncLoading=!1,this.renderAsyncOptionNodes(this.selectedOptionMeta?[this.selectedOptionMeta]:[]));let a=r.getBoundingClientRect().width;return this.style.setProperty(`--pk-combobox-anchor-width`,`${a}px`),this.popupElement.active=!0,this.panelElement&&(this.panelElement.hidden=!1,oe(this.panelElement,this.placement)),this.registerDismissHandlers(),this.syncHighlight(),this.usesPopupMode?(t=this.popupTrigger)==null||t.blur():(n=this.activeInput)==null||n.focus({preventScroll:!0}),this.updateComplete.then(S(function*(){var t;let n=yield v(e.popupElement,e.placement,300,{requireEvent:!0});if(e.panelElement&&oe(e.panelElement,n),e.panelAnimated=!0,e.bindPanelEvents(),e.refreshOptions(),(t=e.activeInput)==null||t.focus({preventScroll:!0}),e.highlightedIndex>=0&&!e.keepsFocusOnInput()){var r,i;let t=e.getEnabledVisibleOptions(),n=e.highlightedIndex;e.shouldShowCreateOption()&&n===t.length?(r=e.createOptionElement)==null||r.focus({preventScroll:!0}):(i=t[n])==null||i.focusControl()}e.dispatchEvent(new l),e.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!0},bubbles:!0,composed:!0}))}))}commitCustomValueIfAllowed(){var e,t;if(this.multiple||!this.allowCustomValue)return!1;let n=this.inputValue.trim();if(!n)return!1;let r=(e=(t=this.options.find(e=>e.getLabel().toLowerCase()===n.toLowerCase()||e.value.toLowerCase()===n.toLowerCase()))==null?void 0:t.value)==null?n:e;return this.value!==r&&(this.value=r,!0)}commitInputOnClose(e){return this.multiple||this.usesPopupMode?!1:this.hasInputSinceOpening?this.inputValue.trim()?this.shouldCommitCustomValueOnClose(e)?this.commitCustomValueIfAllowed():!1:this.value?(this.value=``,!0):!1:this.shouldCommitCustomValueOnClose(e)?this.commitCustomValueIfAllowed():!1}shouldCommitCustomValueOnClose(e){return e===`light-dismiss`||e===`pointer-dismiss`}closePanel(e=`unknown`){var t=this;return S(function*(){if(!t.open||t.closing)return;let n=new te(e);if(!t.dispatchEvent(n))return;let r=t.commitInputOnClose(e);if(t.unbindPanelEvents(),t.closing=!0,t.panelAnimated=!1,yield Oo(t.panelElement),t.open=!1,t.closing=!1,t.panelAnimated=!1,t.hasInputSinceOpening=!1,t.inputValue=``,t.panelElement&&(t.panelElement.hidden=!0,t.panelElement.removeAttribute(`data-side`)),t.popupElement.active=!1,t.unregisterDismissHandlers(),t.applySelection(),t.usesAsyncSearch){var i;(i=t.asyncFetcher)==null||i.cancel(),t.asyncLoading=!1,t.asyncError=null,t.renderAsyncOptionNodes(t.selectedOptionMeta?[t.selectedOptionMeta]:[])}if(r&&(t.syncHasValueAttribute(),t.emitValueChange()),t.shouldReturnFocusToInput(e)){var a,o;t.usesPopupMode?(a=t.popupTrigger)==null||a.focus({preventScroll:!0}):(o=t.activeInput)==null||o.focus({preventScroll:!0})}else{var s,c;(s=t.activeInput)==null||s.blur(),(c=t.popupTrigger)==null||c.blur()}t.dispatchEvent(new ne),t.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!1},bubbles:!0,composed:!0}))})()}shouldReturnFocusToInput(e){return e!==`light-dismiss`&&e!==`pointer-dismiss`}registerDismissHandlers(){Ce(this),this.dismissRegistered=!0,document.addEventListener(`pointerdown`,this.onDocumentPointerDown,!0),document.addEventListener(`keydown`,this.onDocumentKeyDown,!0)}unregisterDismissHandlers(){this.dismissRegistered&&(_e(this),this.dismissRegistered=!1),document.removeEventListener(`pointerdown`,this.onDocumentPointerDown,!0),document.removeEventListener(`keydown`,this.onDocumentKeyDown,!0)}isPointerInside(e){return he(e,{anchor:this.controlElement,panel:this.panelElement})}handleCreateOption(){let e=this.inputValue.trim();if(!e)return;let t=new Po(e);if(!this.dispatchEvent(t))return;let n=document.createElement(`pk-option`);if(n.value=e,n.textContent=e,this.append(n),this.multiple){var r;this.values.includes(e)||(this.values=[...this.values,e]),this.inputValue=``,this.applySelection(),this.emitValueChange(),(r=this.activeInput)==null||r.focus({preventScroll:!0});return}this.value=e,this.applySelection(),this.closePanel(`api`),this.emitValueChange()}removeTag(e,t){var n;t.preventDefault(),t.stopPropagation(),this.values=this.values.filter(t=>t!==e),this.applySelection(),this.emitValueChange(),(n=this.activeInput)==null||n.focus({preventScroll:!0})}handleClear(e){var t;e.preventDefault(),e.stopPropagation(),this.multiple?this.values=[]:this.value=``,this.inputValue=``,this.selectedOptionMeta=null,this.usesAsyncSearch&&this.renderAsyncOptionNodes([]),this.applySelection(),this.dispatchEvent(new se),this.emitValueChange(),(t=this.activeInput)==null||t.focus()}emitValueChange(){this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{value:this.multiple?[...this.values]:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}handleInput(e){this.hasInputSinceOpening=!0,this.inputValue=e.target.value,this.highlightedIndex=this.autoHighlight?0:-1,this.applySelection(),this.usesAsyncSearch&&(this.asyncError=null,this.scheduleAsyncFetch(this.inputValue.trim())),this.open||this.openPanel()}handleInputKeyDown(e){if(e.key===`Backspace`&&this.multiple&&!this.inputValue&&this.values.length>0){e.preventDefault(),this.values=this.values.slice(0,-1),this.applySelection(),this.emitValueChange();return}if(e.key===`Escape`&&this.open){if(e.preventDefault(),this.hasInputSinceOpening&&this.inputValue){this.hasInputSinceOpening=!1,this.inputValue=this.usesPopupMode?``:!this.multiple&&this.hasSelection()?this.getSelectedLabel():``,this.highlightedIndex=this.autoHighlight?0:-1,this.applySelection();return}this.closePanel(`escape`);return}if(e.key===`ArrowDown`&&!this.open){e.preventDefault(),this.openPanel();return}if(e.key===`Tab`&&this.open){let e=!1;this.multiple||(e=this.commitCustomValueIfAllowed()),this.closePanel(`api`),e&&(this.syncHasValueAttribute(),this.emitValueChange());return}if(this.open&&e.key===`Enter`&&!this.multiple&&this.getEnabledVisibleOptions().length===0&&this.allowCustomValue&&this.inputValue.trim()&&!this.shouldShowCreateOption()){e.preventDefault();let t=this.commitCustomValueIfAllowed();this.closePanel(`api`),t&&(this.syncHasValueAttribute(),this.emitValueChange());return}this.open&&this.onListboxKeyDown(e)}onListboxKeyDown(e){let t=this.getListboxNavItems(),n=this.getEnabledVisibleOptions();if(this.highlightedIndex<0){if(e.key===`ArrowDown`||e.key===`ArrowRight`){(n.length>0||this.shouldShowCreateOption())&&(e.preventDefault(),this.highlightedIndex=0,this.syncHighlight());return}if(e.key===`ArrowUp`||e.key===`ArrowLeft`){(n.length>0||this.shouldShowCreateOption())&&(e.preventDefault(),this.highlightedIndex=this.shouldShowCreateOption()?n.length:Math.max(n.length-1,0),this.syncHighlight());return}if(e.key===`Enter`||e.key===` `)return}if(e.key===`Enter`&&this.shouldShowCreateOption()&&this.highlightedIndex===n.length){e.preventDefault(),this.handleCreateOption();return}if(this.multiple&&(e.key===`Enter`||e.key===` `)){let t=n[this.highlightedIndex];t&&(e.preventDefault(),t.dispatchEvent(new CustomEvent(`pk-option-select`,{detail:{value:t.value},bubbles:!0,composed:!0})));return}this.highlightedIndex=ve(e,{items:t,currentIndex:this.highlightedIndex,multiselect:this.multiple,loop:this.loopFocus,onSelect:e=>{this.highlightedIndex=e,this.syncHighlight()},focusItem:e=>{var t;if(!this.keepsFocusOnInput()){if(this.shouldShowCreateOption()&&e===n.length){var r;(r=this.createOptionElement)==null||r.focus({preventScroll:!0});return}(t=n[e])==null||t.focusControl()}},onClose:()=>{this.closePanel(`escape`)}})}renderHostDecorationSlot(e){return this.hasSlotController.test(e)?j`
            <span part=${e} class=${e===`start`?`control-start`:`control-end`}>
                <slot name=${e}></slot>
            </span>
        `:j`<slot name=${e} hidden></slot>`}renderChevronButton(){return j`
            <button
                type="button"
                class="icon-button expand-button"
                part="expand-button"
                aria-label="Toggle options"
                ?disabled=${this.disabled}
                @click=${this.togglePanel}
            >
                <span class="icon" aria-hidden="true">${s(Io)}</span>
            </button>
        `}renderTags(){return this.getSelectedOptions().map(e=>j`
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
                    <span class="tag-remove-icon" aria-hidden="true">${s(Lo)}</span>
                </button>
            </span>
        `)}shouldShowPlaceholder(){return!this.inputValue.trim()&&!this.hasSelection()}renderInput(){var e;let t=this.open?this.getActiveDescendantId():null,n=this.shouldShowPlaceholder();return j`
            <input
                part="input"
                class=${D({"combobox-input":!0,"control-input":!0,"combobox-input--inline":this.multiple})}
                type="text"
                role="combobox"
                id=${this.inputId}
                .value=${this.getDisplayInputValue()}
                placeholder=${n?this.placeholder:x}
                ?disabled=${this.disabled}
                aria-label=${(e=this.ariaLabel)==null?x:e}
                aria-expanded=${this.open?`true`:`false`}
                aria-controls=${this.listboxId}
                aria-autocomplete="list"
                aria-activedescendant=${t==null?x:t}
                @input=${this.handleInput}
                @keydown=${this.handleInputKeyDown}
            />
        `}renderPanelInput(){var e;let t=this.open?this.getActiveDescendantId():null;return j`
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
                    aria-activedescendant=${t==null?x:t}
                    @input=${this.handleInput}
                    @keydown=${this.handleInputKeyDown}
                />
            </div>
        `}renderPopupTrigger(){var e;return j`
            <button
                type="button"
                part="trigger"
                class="popup-trigger"
                ?disabled=${this.disabled}
                aria-label=${(e=this.ariaLabel)==null?x:e}
                aria-haspopup="listbox"
                aria-expanded=${this.open?`true`:`false`}
                aria-controls=${this.listboxId}
                @click=${this.togglePanel}
                @keydown=${this.handleTriggerKeyDown}
            >
                <span
                    class=${D({"popup-trigger-value":!0,"is-placeholder":this.isTriggerPlaceholder()})}
                >
                    ${this.getTriggerDisplayValue()}
                </span>
                <span class="icon popup-trigger-icon" aria-hidden="true">${s(Io)}</span>
            </button>
        `}renderControlContent(){if(this.usesPopupMode)return this.renderPopupTrigger();let e=(this.clearable||this.withClear)&&this.hasSelection()&&!this.disabled;return this.multiple?j`
                ${this.renderHostDecorationSlot(`start`)}
                <div class="chips" part="tags">
                    ${this.renderTags()}
                    ${this.renderInput()}
                </div>
                ${this.renderHostDecorationSlot(`end`)}
                ${e?j`
                        <button
                            type="button"
                            class="clear-button"
                            part="clear-button"
                            aria-label="Clear selection"
                            ?disabled=${this.disabled}
                            @click=${this.handleClear}
                        >
                            <span class="clear-button-icon" aria-hidden="true">${s(Lo)}</span>
                        </button>
                    `:x}
            `:j`
            ${this.renderHostDecorationSlot(`start`)}
            ${this.renderInput()}
            ${this.renderHostDecorationSlot(`end`)}
            ${e?j`
                    <button
                        type="button"
                        class="clear-button"
                        part="clear-button"
                        aria-label="Clear selection"
                        ?disabled=${this.disabled}
                        @click=${this.handleClear}
                    >
                        <span class="clear-button-icon" aria-hidden="true">${s(Lo)}</span>
                    </button>
                `:x}
            ${this.renderChevronButton()}
        `}render(){var e;let t=this.getEnabledVisibleOptions(),n=this.shouldShowCreateOption(),r=this.open&&!this.usesAsyncSearch&&t.length===0&&!n,i=this.getAsyncStatusMessage(),a=this.inputValue.trim();return j`
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
                class=${D({control:!0,"is-disabled":this.disabled,"control--multiple":this.multiple,"control--popup":this.usesPopupMode})}
                data-popup-open=${this.open?``:x}
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
                    class=${D({panel:!0,"pk-popup-content":!0,closing:this.closing,"panel--popup":this.usesPopupMode})}
                    tabindex="-1"
                    ?hidden=${!this.open&&!this.closing}
                    data-open=${this.panelAnimated&&!this.closing?``:x}
                >
                    ${this.usesPopupMode?this.renderPanelInput():x}
                    <div
                        part="panel-body"
                        class="panel-body"
                        id=${this.listboxId}
                        role="listbox"
                        aria-multiselectable=${this.multiple?`true`:`false`}
                        aria-busy=${this.usesAsyncSearch&&this.asyncLoading?`true`:x}
                        @slotchange=${this.syncOptions}
                    >
                        <slot></slot>
                        ${i?j`
                                <div part="async-status" class="async-status" role="status">${i}</div>
                            `:x}
                        ${n?j`
                                <button
                                    type="button"
                                    part="create-option"
                                    class=${D({"create-option":!0,"is-highlighted":this.createOptionHighlighted})}
                                    id=${this.createOptionId}
                                    role="option"
                                    aria-selected="false"
                                    tabindex="-1"
                                    @click=${this.handleCreateOption}
                                    @mouseenter=${this.handleCreateMouseEnter}
                                    @keydown=${this.handleCreateKeyDown}
                                >
                                    Create "${a}"
                                </button>
                            `:x}
                        ${r?j`
                                <div part="empty" class="empty">${this.emptyMessage}</div>
                            `:x}
                    </div>
                </div>
            </pk-popup>
        `}},No.styles=Fo,No);T([C({type:Boolean,reflect:!0})],U.prototype,`open`,void 0),T([C({type:Boolean,reflect:!0})],U.prototype,`multiple`,void 0),T([C({reflect:!0})],U.prototype,`placement`,void 0),T([C({attribute:`side-offset`,type:Number})],U.prototype,`sideOffset`,void 0),T([C({type:Boolean,reflect:!0})],U.prototype,`clearable`,void 0),T([C({attribute:`with-clear`,type:Boolean})],U.prototype,`withClear`,void 0),T([C({attribute:`allow-create`,type:Boolean})],U.prototype,`allowCreate`,void 0),T([C({attribute:`allow-custom-value`,type:Boolean})],U.prototype,`allowCustomValue`,void 0),T([C({attribute:`auto-highlight`,type:Boolean})],U.prototype,`autoHighlight`,void 0),T([C({attribute:`popup-mode`,type:Boolean,reflect:!0})],U.prototype,`popupMode`,void 0),T([C({attribute:`search-placeholder`})],U.prototype,`searchPlaceholder`,void 0),T([C({type:Boolean,reflect:!0})],U.prototype,`invalid`,void 0),T([C({reflect:!0})],U.prototype,`size`,void 0),T([C({reflect:!0})],U.prototype,`width`,void 0),T([C()],U.prototype,`placeholder`,void 0),T([C({attribute:`empty-message`})],U.prototype,`emptyMessage`,void 0),T([C()],U.prototype,`value`,void 0),T([C({attribute:`default-value`})],U.prototype,`defaultValue`,void 0),T([C({type:Array,attribute:!1})],U.prototype,`values`,void 0),T([C({attribute:!1})],U.prototype,`defaultValues`,void 0),T([C()],U.prototype,`label`,void 0),T([C()],U.prototype,`instructions`,void 0),T([C({attribute:`aria-label`})],U.prototype,`ariaLabel`,void 0),T([C({attribute:`loop-focus`,type:Boolean})],U.prototype,`loopFocus`,void 0),T([C({attribute:!1})],U.prototype,`filter`,void 0),T([C({type:Boolean,reflect:!0})],U.prototype,`async`,void 0),T([C({attribute:`loading-message`})],U.prototype,`loadingMessage`,void 0),T([C({attribute:`start-typing-message`})],U.prototype,`startTypingMessage`,void 0),T([C({attribute:!1})],U.prototype,`fetchOptions`,void 0),T([A(`pk-popup`)],U.prototype,`popupElement`,void 0),T([A(`.control`)],U.prototype,`controlElement`,void 0),T([A(`.control-input`)],U.prototype,`controlInput`,void 0),T([A(`.popup-trigger`)],U.prototype,`popupTrigger`,void 0),T([A(`.create-option`)],U.prototype,`createOptionElement`,void 0),T([A(`.value-input`)],U.prototype,`input`,void 0),T([w()],U.prototype,`inputValue`,void 0),T([w()],U.prototype,`highlightedIndex`,void 0),T([w()],U.prototype,`createOptionHighlighted`,void 0),T([w()],U.prototype,`closing`,void 0),T([w()],U.prototype,`panelAnimated`,void 0),T([w()],U.prototype,`asyncLoading`,void 0),T([w()],U.prototype,`asyncError`,void 0),U=T([k(`pk-combobox`)],U);var Ro,zo=E`
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
`,W=(Ro=class extends Ne{constructor(...e){super(...e),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new ge(this,`instructions`,`hint`,`label`),this.controlId=me(`pk-textarea`),this.placeholder=``,this._value=null,this.defaultValue=null,this.size=`default`,this.label=``,this.instructions=``,this.readonly=!1,this.invalid=!1,this.fitCell=!1,this.withLabel=!1,this.withInstructions=!1}static get validators(){return[...super.validators,je(),Ra()]}get value(){var e,t,n;return this.valueHasChanged?(e=this._value)==null?``:e:(t=(n=this._value)==null?this.defaultValue:n)==null?``:t}set value(e){let t=e==null?``:e;this._value!==t&&(this.valueHasChanged=!0,this._value=t)}connectedCallback(){this.instructions=za(this,this.instructions),this.hasAttribute(`with-hint`)&&(this.withInstructions=!0),super.connectedCallback()}syncFormValue(){this.setValue(this.value||``)}resetToDefaultValue(){this.valueHasChanged=!1,this._value=null}restoreFormState(e){typeof e==`string`&&(this.value=e)}formResetCallback(){var e;this.valueHasChanged=!1,this._value=null,this.input&&(this.input.value=(e=this.defaultValue)==null?``:e),super.formResetCallback()}updated(e){(e.has(`value`)||e.has(`defaultValue`))&&this.setState(`blank`,!this.value),super.updated(e)}syncStandaloneAria(){if(!this.input)return;let e=this.hasLabelContent(),t=this.hasInstructionsContent();ue({control:this.input,labelId:`${this.controlId}-label`,instructionsId:`${this.controlId}-instructions`,hasLabel:e,hasInstructions:t,required:this.required,invalid:this.invalid||!this.internals.validity.valid})}hasLabelContent(){return!!this.label||this.hasSlotController.test(`label`,this.withLabel)}hasInstructionsContent(){return Ba((e,t)=>this.hasSlotController.test(e,t),this.instructions,this.withInstructions)}focus(e){var t;(t=this.input)==null||t.focus(e)}blur(){var e;(e=this.input)==null||e.blur()}handleInput(){this.value=this.input.value,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))}handleChange(e){this.value=this.input.value,e.stopPropagation(),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}render(){var e;let t=this.hasLabelContent(),n=this.hasInstructionsContent();return j`
            <div part="form-control" class="form-control">
                ${t?j`
                        <label
                            part="label"
                            class="form-control__label"
                            id=${`${this.controlId}-label`}
                            for=${`${this.controlId}-control`}
                        >
                            <slot name="label">${this.label}</slot>
                        </label>
                    `:x}

                ${n?j`
                        <p
                            part="instructions"
                            class="form-control__instructions"
                            id=${`${this.controlId}-instructions`}
                        >
                            <slot name="instructions">${this.instructions}</slot>
                            <slot name="hint"></slot>
                        </p>
                    `:x}

                <textarea
                    part="textarea"
                    class="textarea"
                    id=${t?`${this.controlId}-control`:x}
                    rows=${no(this.fitCell?(e=this.rows)==null?1:e:this.rows)}
                    .value=${to(this.value)}
                    placeholder=${this.placeholder||x}
                    maxlength=${no(this.maxlength)}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    ?required=${this.required}
                    @input=${this.handleInput}
                    @change=${this.handleChange}
                    @focus=${()=>this.dispatchEvent(new Event(`focus`,{bubbles:!0,composed:!0}))}
                    @blur=${()=>this.dispatchEvent(new Event(`blur`,{bubbles:!0,composed:!0}))}
                ></textarea>
            </div>
        `}},Ro.styles=[ft,zo],Ro);T([A(`textarea`)],W.prototype,`input`,void 0),T([C()],W.prototype,`placeholder`,void 0),T([w()],W.prototype,`value`,null),T([C({attribute:`value`,reflect:!0})],W.prototype,`defaultValue`,void 0),T([C({reflect:!0})],W.prototype,`size`,void 0),T([C()],W.prototype,`label`,void 0),T([C()],W.prototype,`instructions`,void 0),T([C({type:Boolean,reflect:!0})],W.prototype,`readonly`,void 0),T([C({type:Boolean,reflect:!0})],W.prototype,`invalid`,void 0),T([C({type:Boolean,reflect:!0,attribute:`fit-cell`})],W.prototype,`fitCell`,void 0),T([C({type:Number})],W.prototype,`rows`,void 0),T([C({type:Number,attribute:`max-length`})],W.prototype,`maxlength`,void 0),T([C({attribute:`with-label`,type:Boolean})],W.prototype,`withLabel`,void 0),T([C({attribute:`with-instructions`,type:Boolean})],W.prototype,`withInstructions`,void 0),W=T([k(`pk-textarea`)],W);var Bo,Vo=E`
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
`,Ho=`#000000`;function Uo(e){return String(e||``).replace(/^#/,``).replace(/[^0-9a-fA-F]/g,``).slice(0,6).toLowerCase()}function Wo(e){return e.length===3||e.length===6}function Go(e){return e.length===3?e.split(``).map(e=>`${e}${e}`).join(``):e}function Ko(e){return e.length===6?`#${e}`:e.length===3?`#${Go(e)}`:Ho}var qo=(Bo=class extends Ne{constructor(...e){super(...e),this.assumeInteractionOn=[`blur`,`input`],this.size=`default`,this.fitCell=!1,this.readonly=!1,this.invalid=!1,this.value=``,this.defaultValue=``,this.ariaLabel=null,this.hexValue=``}static get validators(){return[...super.validators,je(),Ra()]}connectedCallback(){super.connectedCallback(),this.syncHexFromValue()}willUpdate(e){e.has(`value`)&&this.syncHexFromValue(),super.willUpdate(e)}syncHexFromValue(){this.hexValue=Uo(this.value)}get validationTarget(){return this.input}syncFormValue(){let e=this.hexValue?`#${this.hexValue}`:``;this.setFormValue(e,e)}resetToDefaultValue(){this.value=this.defaultValue,this.hexValue=Uo(this.defaultValue)}restoreFormState(e){typeof e==`string`&&(this.value=e,this.hexValue=Uo(e))}emitChange(){let e=this.hexValue?`#${this.hexValue}`:``;this.value=e,this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{value:e},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}handleHexInput(e){if(this.disabled||this.readonly)return;let t=Uo(e.target.value);this.hexValue=t,this.emitChange()}handlePickerChange(e){if(this.disabled||this.readonly)return;let t=Uo(e.target.value);this.hexValue=t,this.emitChange()}render(){var e;let t=Ko(this.hexValue),n=!Wo(this.hexValue);return j`
            <div class="root">
                <div part="swatch" class="swatch">
                    <div
                        class=${D({"swatch-preview":!0,"is-transparent":n})}
                        style=${n?x:`background-color: ${t}`}
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
                    aria-label=${(e=this.ariaLabel)==null?x:e}
                    aria-invalid=${this.invalid?`true`:x}
                    @input=${this.handleHexInput}
                />
            </div>
        `}},Bo.styles=Vo,Bo);T([C({reflect:!0})],qo.prototype,`size`,void 0),T([C({type:Boolean,reflect:!0,attribute:`fit-cell`})],qo.prototype,`fitCell`,void 0),T([C({type:Boolean,reflect:!0})],qo.prototype,`readonly`,void 0),T([C({type:Boolean,reflect:!0})],qo.prototype,`invalid`,void 0),T([C()],qo.prototype,`value`,void 0),T([C({attribute:`default-value`})],qo.prototype,`defaultValue`,void 0),T([C({attribute:`aria-label`})],qo.prototype,`ariaLabel`,void 0),T([A(`.hex-input`)],qo.prototype,`input`,void 0),T([w()],qo.prototype,`hexValue`,void 0),qo=T([k(`pk-color-input`)],qo);var Jo,Yo=/^(\d{4})-(\d{2})-(\d{2})$/;function G(e){if(e==null||e===``)return null;if(e instanceof Date)return Xo(e);if(typeof e!=`string`)return null;let t=Yo.exec(e.trim());if(!t)return null;let n=Number(t[1]),r=Number(t[2]),i=Number(t[3]);if(r<1||r>12||i<1||i>31)return null;let a=new Date(n,r-1,i);return a.getFullYear()!==n||a.getMonth()!==r-1||a.getDate()!==i?null:a}function K(e){return!e||Number.isNaN(e.getTime())?``:`${String(e.getFullYear()).padStart(4,`0`)}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function Xo(e){return e==null?null:e instanceof Date?Number.isNaN(e.getTime())?null:new Date(e.getFullYear(),e.getMonth(),e.getDate()):G(String(e))}function Zo(e){if(!e)return{from:null,to:null};let t=e.split(`/`);if(t.length===1)return{from:G(t[0]),to:null};let n=G(t[0]),r=G(t[1]);return!n||!r||n.getTime()<=r.getTime()?{from:n,to:r}:{from:r,to:n}}function Qo(e){if(!e)return``;let{from:t,to:n}=e;return!t&&!n?``:t&&!n?K(t):!t&&n?K(n):`${K(t)}/${K(n)}`}function $o(e){if(!e)return[];let t=new Set,n=[];for(let r of e.split(`,`)){let e=G(r.trim());if(!e)continue;let i=K(e);t.has(i)||(t.add(i),n.push(e))}return n.sort((e,t)=>e.getTime()-t.getTime()),n}function es(e){let t=new Set;for(let n of e){let e=K(n==null?null:n);e&&t.add(e)}return[...t].sort().join(`,`)}function ts(e,t){if(!K(t))return e==null?``:e;let n=$o(e);return es(n.some(e=>ns(e,t))?n.filter(e=>!ns(e,t)):[...n,t])}function ns(e,t){return!e||!t?!1:e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function rs(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()}function is(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+t)}function as(e,t){let n=new Date(e.getFullYear(),e.getMonth()+t,1),r=ss(n.getFullYear(),n.getMonth());return new Date(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))}function os(e,t){return as(e,t*12)}function ss(e,t){return new Date(e,t+1,0).getDate()}function cs(e){return new Date(e.getFullYear(),e.getMonth(),1)}function ls(){let e=new Date;return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function us(e,t){let n=e.getTime()-t.getTime();return Math.round(n/864e5)}function ds(e){let t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),n=(t.getDay()+6)%7;t.setDate(t.getDate()-n+3);let r=new Date(t.getFullYear(),0,4),i=(r.getDay()+6)%7;return r.setDate(r.getDate()-i+3),1+Math.round((t.getTime()-r.getTime())/6048e5)}function fs(e,t){return new Intl.DateTimeFormat(t||void 0,{year:`numeric`,month:`short`,day:`numeric`}).format(e)}function ps(e){var t,n;let{min:r,max:i,disabledDates:a=[],disabledDaysOfWeek:o=[],disablePast:s=!1,disableFuture:c=!1,today:l,isDateDisabled:u}=e,d=(t=r==null?void 0:r.getTime())==null?-1/0:t,f=(n=i==null?void 0:i.getTime())==null?1/0:n,p=l.getTime(),m=new Set(o),h=new Set(a.map(e=>e.getTime()));return function(e){let t=e.getTime();return!!(t<d||t>f||s&&t<p||c&&t>p||m.size&&m.has(e.getDay())||h.size&&h.has(t)||u!=null&&u(e))}}function ms(e){if(e==null||e===``)return[];let t=Array.isArray(e)?e:e.split(/\s+/),n=[];for(let e of t){if(e instanceof Date){Number.isNaN(e.getTime())||n.push(new Date(e.getFullYear(),e.getMonth(),e.getDate()));continue}let t=G(String(e).trim());t&&n.push(t)}return n}var hs={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6};function gs(e){if(e==null||e===``)return[];let t=String(e).toLowerCase().split(/\s+/).filter(Boolean),n=new Set;for(let e of t)e in hs&&n.add(hs[e]);return[...n]}function _s(e,t,n){let r=e.getTime()<=t.getTime()?e:t,i=e.getTime()<=t.getTime()?t:e,a=new Date(r.getFullYear(),r.getMonth(),r.getDate());for(;a.getTime()<=i.getTime();){if(!n(a))return!1;a.setDate(a.getDate()+1)}return!0}var vs=new Set(`US.CA.MX.BR.JP.PH.IL.AU.NZ.ZA.CO.VE.PE.EC.GT.HN.NI.SV.CR.PA.DO.PR.JM.TT.BS.BB.BZ.BO.BM.TW.HK.MO.SG.TH.ET.KE`.split(`.`)),ys=new Set([`SA`,`AE`,`QA`,`KW`,`BH`,`OM`,`YE`,`JO`,`SY`,`IQ`,`EG`,`SD`,`DZ`,`LY`]),bs=new Set([`SA`,`AE`,`QA`,`KW`,`BH`,`OM`,`YE`,`JO`,`EG`,`SD`,`DZ`,`LY`,`SY`,`IQ`,`IL`]);function xs(e){try{var t;return(t=new Intl.Locale(e).maximize().region)==null?null:t}catch(e){return null}}function Ss(e){let t=xs(e),n=1;t&&vs.has(t)?n=7:t&&ys.has(t)&&(n=6);let r=t&&bs.has(t)?[5,6]:[6,7];return{firstDay:n,weekend:r}}function Cs(e){try{let t=new Intl.Locale(e),n=typeof t.getWeekInfo==`function`?t.getWeekInfo():t.weekInfo;if(n&&typeof n.firstDay==`number`&&Array.isArray(n.weekend))return{firstDay:n.firstDay,weekend:n.weekend}}catch(e){}return Ss(e)}function ws(e){return e===7?0:e}function Ts(e){return e.map(ws)}function Es(e,t){return e===`auto`?ws(Cs(t).firstDay):{sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6}[e]}var Ds=E`
    ${r}
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
`,Os=M(b.chevronLeft),ks=M(b.chevronRight),q=(Jo=class extends le{constructor(...e){super(...e),this.hasSlotController=new ge(this,`footer`,`previous-icon`,`next-icon`),this.mode=`single`,this.size=`default`,this.value=``,this.min=``,this.max=``,this.today=``,this.view=`days`,this.months=1,this.pageBy=`months`,this.focusedDate=``,this.firstDayOfWeek=`auto`,this.withOutsideDays=!0,this.withWeekNumbers=!1,this.weekdayFormat=`narrow`,this.disabled=!1,this.readonly=!1,this.bordered=!0,this.disabledDatesRaw=``,this.disabledDaysOfWeek=``,this.disablePast=!1,this.disableFuture=!1,this.minRange=0,this.maxRange=0,this.locale=``,this.viewAnchor=cs(ls()),this.rangeAnchor=null,this.hoverDate=null,this.liveAnnouncement=``,this.focusedMonth=null,this.focusedYear=null,this.daySlotNames=[],this.handlePrevious=()=>{if(this.view===`days`){this.viewAnchor=as(this.viewAnchor,-this.pageStep);return}if(this.view===`months`){this.viewAnchor=os(this.viewAnchor,-1);return}this.viewAnchor=os(this.viewAnchor,-12)},this.handleNext=()=>{if(this.view===`days`){this.viewAnchor=as(this.viewAnchor,this.pageStep);return}if(this.view===`months`){this.viewAnchor=os(this.viewAnchor,1);return}this.viewAnchor=os(this.viewAnchor,12)},this.handleTitleClick=()=>{if(!this.disabled){if(this.view===`days`){this.setView(`months`),this.focusedMonth=this.resolvedFocusedDate.getMonth();return}this.view===`months`&&(this.setView(`years`),this.focusedYear=this.resolvedFocusedDate.getFullYear())}},this.handleGridMouseLeave=()=>{this.hoverDate=null}}connectedCallback(){super.connectedCallback(),this.syncViewAnchor(),this.syncCustomStates(),this.updateDaySlots(),this.childrenObserver=new MutationObserver(()=>this.updateDaySlots()),this.childrenObserver.observe(this,{childList:!0,attributes:!0,attributeFilter:[`slot`]})}disconnectedCallback(){var e;(e=this.childrenObserver)==null||e.disconnect(),super.disconnectedCallback()}willUpdate(e){(e.has(`value`)||e.has(`focusedDate`)||e.has(`mode`))&&this.syncViewAnchor(),(e.has(`disabled`)||e.has(`readonly`)||e.has(`mode`)||e.has(`withWeekNumbers`))&&this.syncCustomStates(),e.has(`view`)&&this.emitViewChange(),super.willUpdate(e)}updateDaySlots(){let e=[...this.children].map(e=>e.getAttribute(`slot`)).filter(e=>!!(e!=null&&e.startsWith(`day-`)));e.join(`,`)!==this.daySlotNames.join(`,`)&&(this.daySlotNames=e)}syncCustomStates(){this.toggleAttribute(`data-range`,this.mode===`range`),this.toggleAttribute(`data-multiple`,this.mode===`multiple`),this.toggleAttribute(`data-week-numbers`,this.withWeekNumbers)}get resolvedLocale(){return this.locale||this.lang||document.documentElement.lang||`en`}get resolvedToday(){var e;return(e=G(this.today))==null?ls():e}get primarySelectedDate(){var e;return this.mode===`single`?G(this.value):this.mode===`multiple`?(e=$o(this.value)[0])==null?null:e:Zo(this.value).from}get resolvedFocusedDate(){var e,t;return(e=(t=G(this.focusedDate))==null?Xo(this.primarySelectedDate):t)==null?this.resolvedToday:e}get isDisabledMatcher(){return ps({min:G(this.min),max:G(this.max),disabledDates:ms(this.disabledDatesRaw),disabledDaysOfWeek:gs(this.disabledDaysOfWeek),disablePast:this.disablePast,disableFuture:this.disableFuture,today:this.resolvedToday,isDateDisabled:this.isDateDisabled})}get weekendDays(){return new Set(Ts(Cs(this.resolvedLocale).weekend))}get pageStep(){return this.pageBy===`single`?1:this.months}get visibleMonthAnchors(){let e=[this.viewAnchor];return this.months===2&&e.push(cs(as(this.viewAnchor,1))),e}syncViewAnchor(){let e=this.resolvedFocusedDate;this.visibleMonthAnchors.some(t=>rs(e,t))||(this.viewAnchor=cs(e))}get valueAsDate(){return this.mode===`single`?G(this.value):null}get valueAsRange(){return Zo(this.value)}get valueAsDates(){return this.mode===`multiple`?$o(this.value):[]}focus(e){var t;let n=this.view===`days`?`.day.is-roving`:(this.view,`.view-item.is-roving`);(t=this.renderRoot.querySelector(n))==null||t.focus(e)}goToDate(e){let t=Xo(e);t&&(this.viewAnchor=cs(t),this.focusedDate=K(t),this.view=`days`)}goToToday(){this.goToDate(this.resolvedToday)}clear(){this.disabled||this.readonly||(this.value=``,this.rangeAnchor=null,this.hoverDate=null,this.emitInput(),this.emitChange())}emitInput(){this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))}emitChange(){this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}emitFocusDay(e){this.dispatchEvent(new CustomEvent(`pk-focus-day`,{detail:{date:e},bubbles:!0,composed:!0}))}emitViewChange(){this.dispatchEvent(new CustomEvent(`pk-view-change`,{detail:{view:this.view,date:this.resolvedFocusedDate},bubbles:!0,composed:!0}))}announce(e){this.liveAnnouncement=`${e}\u200B`}setView(e){this.view!==e&&(this.view=e)}handleDayClick(e,t){if(this.disabled||this.readonly||t)return;if(this.mode===`single`){this.value=K(e),this.focusedDate=K(e),this.emitInput(),this.emitChange(),this.announce(fs(e,this.resolvedLocale));return}if(this.mode===`multiple`){let t=$o(this.value).some(t=>ns(t,e));this.value=ts(this.value,e),this.focusedDate=K(e),this.emitInput(),this.emitChange(),this.announce(`${t?`Removed`:`Added`} ${fs(e,this.resolvedLocale)}`);return}if(!this.rangeAnchor){this.rangeAnchor=e,this.value=K(e),this.focusedDate=K(e),this.emitInput();return}let n=this.rangeAnchor,r=e,i=n.getTime()<=r.getTime()?{from:n,to:r}:{from:r,to:n};if(this.minRange>0&&us(i.to,i.from)+1<this.minRange){this.announce(`Range must be at least ${this.minRange} days`);return}if(this.maxRange>0&&us(i.to,i.from)+1>this.maxRange){this.announce(`Range must be at most ${this.maxRange} days`);return}this.value=Qo(i),this.focusedDate=K(e),this.rangeAnchor=null,this.hoverDate=null,this.emitInput(),this.emitChange(),this.announce(`${fs(i.from,this.resolvedLocale)} – ${fs(i.to,this.resolvedLocale)}`)}handleDayHover(e){this.mode===`range`&&this.rangeAnchor&&(this.hoverDate=e,this.emitFocusDay(e))}handleMonthPick(e){if(this.disabled||this.readonly)return;let t=new Date(this.viewAnchor.getFullYear(),e,1);this.isMonthFullyDisabled(t)||(this.viewAnchor=t,this.focusedDate=K(t),this.setView(`days`))}handleYearPick(e){if(this.disabled||this.readonly)return;let t=new Date(e,this.viewAnchor.getMonth(),1);this.isYearFullyDisabled(e)||(this.viewAnchor=t,this.focusedDate=K(t),this.setView(`months`),this.focusedMonth=t.getMonth())}handleDayKeyDown(e,t,n){if(n)return;let r=null;switch(e.key){case`ArrowLeft`:r=is(t,-1);break;case`ArrowRight`:r=is(t,1);break;case`ArrowUp`:r=is(t,-7);break;case`ArrowDown`:r=is(t,7);break;case`PageUp`:r=as(t,-1);break;case`PageDown`:r=as(t,1);break;case`Home`:r=cs(t);break;case`End`:r=new Date(t.getFullYear(),t.getMonth()+1,0);break;case`Enter`:case` `:e.preventDefault(),this.handleDayClick(t,n);return;case`Escape`:this.rangeAnchor&&(e.preventDefault(),this.rangeAnchor=null,this.hoverDate=null,this.requestUpdate());return;default:return}e.preventDefault(),r&&(this.focusedDate=K(r),this.visibleMonthAnchors.some(e=>rs(r,e))||(this.viewAnchor=cs(r)),this.emitFocusDay(r),this.requestUpdate(),queueMicrotask(()=>this.focus()))}isMonthFullyDisabled(e){return _s(e,new Date(e.getFullYear(),e.getMonth()+1,0),this.isDisabledMatcher)}isYearFullyDisabled(e){return _s(new Date(e,0,1),new Date(e,11,31),this.isDisabledMatcher)}formatWeekdayLabel(e){return this.weekdayFormat===`narrow`?new Intl.DateTimeFormat(this.resolvedLocale,{weekday:`short`}).format(e).slice(0,2):new Intl.DateTimeFormat(this.resolvedLocale,{weekday:this.weekdayFormat}).format(e)}buildWeekdayLabels(){let e=Es(this.firstDayOfWeek,this.resolvedLocale),t=[];for(let n=0;n<7;n+=1){let r=(e+n)%7,i=new Date(2024,0,r===0?7:r);t.push(this.formatWeekdayLabel(i))}return t}buildMonthDays(e){let t=Es(this.firstDayOfWeek,this.resolvedLocale),n=cs(e),r=is(n,-((n.getDay()-t+7)%7)),i=[];for(let e=0;e<42;e+=1)i.push(is(r,e));return i}computeDayState(e,t){let n=this.isDisabledMatcher(e),r=Zo(this.value),i=this.mode===`single`&&ns(G(this.value),e),a=this.mode===`multiple`&&$o(this.value).some(t=>ns(t,e)),o=this.mode===`range`&&ns(r.from,e),s=this.mode===`range`&&ns(r.to,e),c=this.mode===`range`&&r.from&&r.to&&e.getTime()>r.from.getTime()&&e.getTime()<r.to.getTime(),l=!1;if(this.mode===`range`&&this.rangeAnchor&&this.hoverDate){let t=this.rangeAnchor,n=this.hoverDate,r=t.getTime()<=n.getTime()?t:n,i=t.getTime()<=n.getTime()?n:t;l=e.getTime()>=r.getTime()&&e.getTime()<=i.getTime()}return{date:e,monthAnchor:t,outside:!rs(e,t),today:ns(e,this.resolvedToday),weekend:this.weekendDays.has(e.getDay()),disabled:n,selected:i||a||o||s,rangeStart:o,rangeEnd:s,rangeInner:!!c,rangePreview:l,roving:ns(e,this.resolvedFocusedDate)}}renderDayContent(e){var t;let n=`day-${K(e.date)}`;if(this.daySlotNames.includes(n))return j`<slot name=${n}></slot>`;let r=(t=this.dayContent)==null?void 0:t.call(this,e.date);return r?u(r):j`<span part="day-label">${e.date.getDate()}</span>`}renderDay(e){if(!this.withOutsideDays&&e.outside)return j`<span part="day-placeholder" class="day is-placeholder" aria-hidden="true"></span>`;let t=fs(e.date,this.resolvedLocale);return j`
            <button
                type="button"
                part="day"
                class=${D({day:!0,"is-outside":e.outside,"is-today":e.today,"is-weekend":e.weekend,"is-disabled":e.disabled,"is-selected":e.selected,"is-range-start":e.rangeStart,"is-range-end":e.rangeEnd,"is-range-inner":e.rangeInner,"is-range-preview":e.rangePreview,"is-roving":e.roving})}
                tabindex=${e.roving?`0`:`-1`}
                ?disabled=${e.disabled}
                aria-label=${t}
                aria-selected=${e.selected?`true`:`false`}
                aria-current=${e.today?`date`:x}
                @click=${()=>this.handleDayClick(e.date,e.disabled)}
                @mouseenter=${()=>this.handleDayHover(e.date)}
                @keydown=${t=>this.handleDayKeyDown(t,e.date,e.disabled)}
            >
                ${this.renderDayContent(e)}
            </button>
        `}getMonthWeeks(e){let t=this.buildMonthDays(e),n=[];for(let e=0;e<t.length;e+=7)n.push(t.slice(e,e+7));return this.withOutsideDays?n:n.filter(t=>t.some(t=>rs(t,e)))}renderMonth(e,t=!1){let n=this.buildWeekdayLabels(),r=new Intl.DateTimeFormat(this.resolvedLocale,{month:`long`,year:`numeric`}).format(e),i=this.getMonthWeeks(e);return j`
            <div part="month" class="month">
                ${t?j`<div part="month-label" class="month-label">${r}</div>`:x}
                <div part="weekdays" class="weekdays" role="row">
                    ${this.withWeekNumbers?j`<span part="weeknumbers" class="weeknumber-header" role="columnheader">#</span>`:x}
                    ${n.map(e=>j`
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
                    ${i.map(t=>j`
                        <div part="week" class="week" role="row">
                            ${this.withWeekNumbers?j`<span part="weeknumber" class="weeknumber" role="gridcell">${ds(t[0])}</span>`:x}
                            ${t.map(t=>this.renderDay(this.computeDayState(t,e)))}
                        </div>
                    `)}
                </div>
            </div>
        `}renderViewRows(e){let t=[];for(let n=0;n<e.length;n+=3)t.push(j`
                <div part="view-row" class="view-row" role="row">
                    ${e.slice(n,n+3)}
                </div>
            `);return t}renderMonthsView(){var e,t;let n=this.viewAnchor.getFullYear(),r=new Intl.DateTimeFormat(this.resolvedLocale,{month:`long`}),i=(e=this.primarySelectedDate)==null?void 0:e.getMonth(),a=(t=this.focusedMonth)==null?this.resolvedFocusedDate.getMonth():t,o=[];for(let e=0;e<12;e+=1){let t=new Date(n,e,1),s=this.isMonthFullyDisabled(t),c=i===e,l=this.resolvedToday.getFullYear()===n&&this.resolvedToday.getMonth()===e,u=a===e;o.push(j`
                <div part="view-cell" class="view-cell" role="gridcell">
                    <button
                        type="button"
                        part="view-item ${l?`view-item-today`:``} ${c?`view-item-selected`:``} ${s?`view-item-disabled`:``}"
                        class=${D({"view-item":!0,"is-today":l,"is-selected":c,"is-disabled":s,"is-roving":u})}
                        tabindex=${u?`0`:`-1`}
                        ?disabled=${s}
                        @click=${()=>this.handleMonthPick(e)}
                    >
                        ${r.format(t)}
                    </button>
                </div>
            `)}return j`
            <div part="view-grid" class="view-grid" role="grid">
                ${this.renderViewRows(o)}
            </div>
        `}renderYearsView(){var e,t;let n=this.viewAnchor.getFullYear(),r=Math.floor(n/12)*12,i=(e=this.primarySelectedDate)==null?void 0:e.getFullYear(),a=(t=this.focusedYear)==null?this.resolvedFocusedDate.getFullYear():t,o=[];for(let e=0;e<12;e+=1){let t=r+e,n=this.isYearFullyDisabled(t),s=i===t,c=this.resolvedToday.getFullYear()===t,l=a===t;o.push(j`
                <div part="view-cell" class="view-cell" role="gridcell">
                    <button
                        type="button"
                        part="view-item ${c?`view-item-today`:``} ${s?`view-item-selected`:``} ${n?`view-item-disabled`:``}"
                        class=${D({"view-item":!0,"is-today":c,"is-selected":s,"is-disabled":n,"is-roving":l})}
                        tabindex=${l?`0`:`-1`}
                        ?disabled=${n}
                        @click=${()=>this.handleYearPick(t)}
                    >
                        ${t}
                    </button>
                </div>
            `)}return j`
            <div part="view-grid" class="view-grid" role="grid">
                ${this.renderViewRows(o)}
            </div>
        `}renderHeaderTitle(){if(this.view===`months`)return String(this.viewAnchor.getFullYear());if(this.view===`years`){let e=this.viewAnchor.getFullYear(),t=Math.floor(e/12)*12;return`${t} – ${t+11}`}return this.months===2?`${new Intl.DateTimeFormat(this.resolvedLocale,{month:`long`,year:`numeric`}).format(this.viewAnchor)} – ${new Intl.DateTimeFormat(this.resolvedLocale,{month:`long`,year:`numeric`}).format(as(this.viewAnchor,1))}`:new Intl.DateTimeFormat(this.resolvedLocale,{month:`long`,year:`numeric`}).format(this.viewAnchor)}render(){let e=this.view===`days`&&this.months===2;return j`
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
                            <span class="icon" aria-hidden="true">${s(Os)}</span>
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
                            <span class="icon" aria-hidden="true">${s(ks)}</span>
                        </slot>
                    </button>
                </div>

                <div part="months" class="months">
                    ${this.view===`days`?this.visibleMonthAnchors.map(t=>this.renderMonth(t,e)):this.view===`months`?this.renderMonthsView():this.renderYearsView()}
                </div>

                ${this.hasSlotController.test(`footer`)?j`<div part="footer"><slot name="footer"></slot></div>`:x}

                <div class="live-region" aria-live="polite" aria-atomic="true">
                    ${this.liveAnnouncement}
                </div>
            </div>
        `}},Jo.styles=Ds,Jo);T([C({reflect:!0})],q.prototype,`mode`,void 0),T([C({reflect:!0})],q.prototype,`size`,void 0),T([C({reflect:!0})],q.prototype,`value`,void 0),T([C({reflect:!0})],q.prototype,`min`,void 0),T([C({reflect:!0})],q.prototype,`max`,void 0),T([C({reflect:!0})],q.prototype,`today`,void 0),T([C({reflect:!0})],q.prototype,`view`,void 0),T([C({type:Number,reflect:!0})],q.prototype,`months`,void 0),T([C({attribute:`page-by`,reflect:!0})],q.prototype,`pageBy`,void 0),T([C({attribute:`focused-date`,reflect:!0})],q.prototype,`focusedDate`,void 0),T([C({attribute:`first-day-of-week`,reflect:!0})],q.prototype,`firstDayOfWeek`,void 0),T([C({attribute:`with-outside-days`,type:Boolean,reflect:!0})],q.prototype,`withOutsideDays`,void 0),T([C({attribute:`with-week-numbers`,type:Boolean,reflect:!0})],q.prototype,`withWeekNumbers`,void 0),T([C({attribute:`weekday-format`,reflect:!0})],q.prototype,`weekdayFormat`,void 0),T([C({type:Boolean,reflect:!0})],q.prototype,`disabled`,void 0),T([C({type:Boolean,reflect:!0})],q.prototype,`readonly`,void 0),T([C({type:Boolean,reflect:!0})],q.prototype,`bordered`,void 0),T([C({attribute:`disabled-dates`})],q.prototype,`disabledDatesRaw`,void 0),T([C({attribute:`disabled-days-of-week`,reflect:!0})],q.prototype,`disabledDaysOfWeek`,void 0),T([C({attribute:`disable-past`,type:Boolean,reflect:!0})],q.prototype,`disablePast`,void 0),T([C({attribute:`disable-future`,type:Boolean,reflect:!0})],q.prototype,`disableFuture`,void 0),T([C({attribute:`min-range`,type:Number})],q.prototype,`minRange`,void 0),T([C({attribute:`max-range`,type:Number})],q.prototype,`maxRange`,void 0),T([C({reflect:!0})],q.prototype,`locale`,void 0),T([C({attribute:!1})],q.prototype,`isDateDisabled`,void 0),T([C({attribute:!1})],q.prototype,`dayContent`,void 0),T([w()],q.prototype,`viewAnchor`,void 0),T([w()],q.prototype,`rangeAnchor`,void 0),T([w()],q.prototype,`hoverDate`,void 0),T([w()],q.prototype,`liveAnnouncement`,void 0),T([w()],q.prototype,`focusedMonth`,void 0),T([w()],q.prototype,`focusedYear`,void 0),T([w()],q.prototype,`daySlotNames`,void 0),q=T([k(`pk-calendar`)],q);var As;function js(){return globalThis.Craft}function Ms(){var e;return((e=js())==null?void 0:e.locale)||document.documentElement.lang||`en-US`}function Ns(e,t){var n;let r=(n=js())==null?void 0:n.formatDate;if(typeof r==`function`)try{return r(e)}catch(e){}let i=t||Ms();return new Intl.DateTimeFormat(i,{year:`numeric`,month:`numeric`,day:`numeric`}).format(e)}var Ps=E`
    ${r}
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
`,Fs=M(b.calendar),Is=M(b.xmark),J=(As=class extends Ne{constructor(...e){super(...e),this.assumeInteractionOn=[`input`],this.hasSlotController=new ge(this,`label`,`instructions`,`hint`,`start`,`end`,`footer`),this.controlId=me(`pk-date-picker`),this.open=!1,this.placement=`bottom`,this.sideOffset=4,this.size=`default`,this.mode=`single`,this.value=``,this.defaultValue=``,this.label=``,this.instructions=``,this.placeholder=``,this.withClear=!1,this.readonly=!1,this.invalid=!1,this.min=``,this.max=``,this.locale=``,this.disablePast=!1,this.disableFuture=!1,this.disabledDates=``,this.disabledDaysOfWeek=``,this.firstDayOfWeek=`auto`,this.withOutsideDays=!0,this.withWeekNumbers=!1,this.months=1,this.pageBy=`months`,this.minRange=0,this.maxRange=0,this.withLabel=!1,this.withInstructions=!1,this.ariaLabel=null,this.dismissRegistered=!1,this.daySlotNames=[],this.handleDocumentPointerDown=e=>{this.open&&Ee(this)&&(this.isPointerInside(e)||this.closePanel(`light-dismiss`))},this.handleDocumentKeyDown=e=>{this.open&&e.key===`Escape`&&(e.preventDefault(),this.closePanel(`escape`))},this.handleControlClick=()=>{if(!this.disabled){if(this.open){this.closePanel(`api`);return}this.openPanel()}},this.handleControlKeyDown=e=>{if(!this.disabled){if(e.key===`ArrowDown`&&e.altKey){e.preventDefault(),this.openPanel(),queueMicrotask(()=>{var e;return(e=this.calendarElement)==null?void 0:e.focus()});return}(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.handleControlClick())}},this.handleClearClick=e=>{e.preventDefault(),e.stopPropagation(),this.clear()},this.handleCalendarChange=e=>{let t=e.target;this.value=t.value,this.emitValueChange(),this.mode===`single`&&t.value&&this.closePanel(`api`),this.mode===`range`&&Zo(t.value).from&&Zo(t.value).to&&this.closePanel(`api`)},this.handleCalendarInput=e=>{let t=e.target;this.value=t.value,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))}}static get validators(){return[...super.validators,je(),Ra()]}connectedCallback(){this.instructions=za(this,this.instructions),this.hasAttribute(`with-hint`)&&(this.withInstructions=!0),super.connectedCallback(),this.toggleAttribute(`data-has-value`,!!this.value),this.setState(`blank`,!this.value),this.updateDaySlots(),this.childrenObserver=new MutationObserver(()=>this.updateDaySlots()),this.childrenObserver.observe(this,{childList:!0,attributes:!0,attributeFilter:[`slot`]})}disconnectedCallback(){var e;(e=this.childrenObserver)==null||e.disconnect(),this.closePanel(`api`),super.disconnectedCallback()}willUpdate(e){if(e.has(`value`)&&(this.value instanceof Date&&(this.value=K(Xo(this.value))),this.toggleAttribute(`data-has-value`,!!this.value),this.setState(`blank`,!this.value)),e.has(`open`)){var t;this.setState(`open`,this.open),(t=this.controlElement)==null||t.toggleAttribute(`data-popup-open`,this.open)}e.has(`mode`)&&(this.setState(`range`,this.mode===`range`),this.setState(`multiple`,this.mode===`multiple`)),super.willUpdate(e)}updateDaySlots(){let e=[...this.children].map(e=>e.getAttribute(`slot`)).filter(e=>!!(e!=null&&e.startsWith(`day-`)));e.join(`,`)!==this.daySlotNames.join(`,`)&&(this.daySlotNames=e)}get valueString(){return this.value instanceof Date?K(Xo(this.value)):this.value}syncFormValue(){this.setValue(this.valueString||``)}resetToDefaultValue(){this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=e)}get resolvedLocale(){return this.locale||this.lang||Ms()}get displayText(){if(!this.value)return this.placeholder;if(this.mode===`multiple`){let e=$o(this.valueString).length;return e===0?this.placeholder:`${e} date${e===1?``:`s`} selected`}if(this.mode===`range`){let e=Zo(this.valueString);return e.from&&e.to?`${Ns(e.from,this.resolvedLocale)} – ${Ns(e.to,this.resolvedLocale)}`:e.from?Ns(e.from,this.resolvedLocale):this.placeholder}let e=G(this.value);return e?Ns(e,this.resolvedLocale):this.placeholder}get valueAsDate(){return this.mode===`single`?G(this.value):null}get valueAsRange(){return Zo(this.valueString)}get valueAsDates(){return this.mode===`multiple`?$o(this.valueString):[]}show(){var e=this;return S(function*(){yield e.openPanel()})()}hide(){var e=this;return S(function*(){yield e.closePanel(`api`)})()}clear(){var e;this.disabled||this.readonly||!this.value||(this.value=``,this.dispatchEvent(new se),this.emitValueChange(),(e=this.controlElement)==null||e.focus())}emitValueChange(){this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}openPanel(){var e=this;return S(function*(){e.disabled||e.open||e.dispatchEvent(new re)&&(e.open=!0,e.registerDismissHandlers(),yield e.updateComplete,yield v(e.popupElement,e.placement),e.dispatchEvent(new l))})()}closePanel(e=`unknown`){var t=this;return S(function*(){if(!t.open)return;let n=new te(e);t.dispatchEvent(n)&&(t.open=!1,t.unregisterDismissHandlers(),t.dispatchEvent(new ne))})()}registerDismissHandlers(){this.dismissRegistered||(Ce(this),document.addEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.addEventListener(`keydown`,this.handleDocumentKeyDown,!0),this.dismissRegistered=!0)}unregisterDismissHandlers(){this.dismissRegistered&&(_e(this),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.removeEventListener(`keydown`,this.handleDocumentKeyDown,!0),this.dismissRegistered=!1)}isPointerInside(e){var t,n;return he(e,{host:this,panel:(t=(n=this.popupElement)==null?void 0:n.querySelector(`.panel`))==null?void 0:t})}renderClearButton(){return!this.withClear||!this.value||this.disabled?x:j`
            <button
                type="button"
                class="icon-button clear-button"
                part="clear-button"
                aria-label="Clear date"
                ?disabled=${this.disabled}
                @click=${this.handleClearClick}
            >
                <slot name="clear-icon">
                    <span class="icon" aria-hidden="true">${s(Is)}</span>
                </slot>
            </button>
        `}renderCalendarIcon(){return j`
            <span class="calendar-icon" part="expand-icon" aria-hidden="true">
                <slot name="expand-icon">
                    <span class="icon">${s(Fs)}</span>
                </slot>
            </span>
        `}render(){var e,t,n;let r=!!this.value,i=this.displayText,a=!r;return j`
            <div part="form-control" class="form-control">
                ${this.label||this.hasSlotController.test(`label`)?j`
                        <label part="label" class="label" for=${this.controlId}>
                            <slot name="label">${this.label}</slot>
                        </label>
                    `:x}

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
                        class=${D({control:!0,"is-disabled":this.disabled})}
                        role="combobox"
                        aria-expanded=${this.open?`true`:`false`}
                        aria-haspopup="dialog"
                        aria-label=${(e=this.ariaLabel)==null?x:e}
                        tabindex=${this.disabled?`-1`:`0`}
                        @click=${this.handleControlClick}
                        @keydown=${this.handleControlKeyDown}
                    >
                        ${this.hasSlotController.test(`start`)?j`<span part="start" class="control-start"><slot name="start"></slot></span>`:x}

                        ${this.renderCalendarIcon()}

                        <span
                            part="input"
                            class=${D({"display-value":!0,"is-placeholder":a})}
                        >
                            ${i}
                        </span>

                        ${this.renderClearButton()}

                        ${this.hasSlotController.test(`end`)?j`<span part="end" class="control-end"><slot name="end"></slot></span>`:x}
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
                                .weekdayFormat=${(n=this.weekdayFormat)==null?x:n}
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
                                ${this.daySlotNames.map(e=>j`
                                    <slot name=${e} slot=${e}></slot>
                                `)}
                                <slot name="footer" slot="footer"></slot>
                            </pk-calendar>
                        </div>
                    </pk-popup>
                </div>

                ${this.instructions||this.hasSlotController.test(`instructions`)||this.hasSlotController.test(`hint`)?j`
                        <div part="instructions" class="instructions">
                            <slot name="instructions">
                                <slot name="hint">${this.instructions}</slot>
                            </slot>
                        </div>
                    `:x}
            </div>
        `}},As.styles=[ft,Ps],As);T([C({type:Boolean,reflect:!0})],J.prototype,`open`,void 0),T([C({reflect:!0})],J.prototype,`placement`,void 0),T([C({attribute:`side-offset`,type:Number})],J.prototype,`sideOffset`,void 0),T([C({reflect:!0})],J.prototype,`size`,void 0),T([C({reflect:!0})],J.prototype,`mode`,void 0),T([C()],J.prototype,`value`,void 0),T([C({attribute:`default-value`})],J.prototype,`defaultValue`,void 0),T([C()],J.prototype,`label`,void 0),T([C()],J.prototype,`instructions`,void 0),T([C()],J.prototype,`placeholder`,void 0),T([C({attribute:`with-clear`,type:Boolean})],J.prototype,`withClear`,void 0),T([C({type:Boolean,reflect:!0})],J.prototype,`readonly`,void 0),T([C({type:Boolean,reflect:!0})],J.prototype,`invalid`,void 0),T([C({reflect:!0})],J.prototype,`min`,void 0),T([C({reflect:!0})],J.prototype,`max`,void 0),T([C({reflect:!0})],J.prototype,`locale`,void 0),T([C({attribute:`disable-past`,type:Boolean,reflect:!0})],J.prototype,`disablePast`,void 0),T([C({attribute:`disable-future`,type:Boolean,reflect:!0})],J.prototype,`disableFuture`,void 0),T([C({attribute:`disabled-dates`})],J.prototype,`disabledDates`,void 0),T([C({attribute:`disabled-days-of-week`,reflect:!0})],J.prototype,`disabledDaysOfWeek`,void 0),T([C({attribute:`first-day-of-week`,reflect:!0})],J.prototype,`firstDayOfWeek`,void 0),T([C({attribute:`with-outside-days`,type:Boolean,reflect:!0})],J.prototype,`withOutsideDays`,void 0),T([C({attribute:`with-week-numbers`,type:Boolean,reflect:!0})],J.prototype,`withWeekNumbers`,void 0),T([C({attribute:`weekday-format`,reflect:!0})],J.prototype,`weekdayFormat`,void 0),T([C({type:Number,reflect:!0})],J.prototype,`months`,void 0),T([C({attribute:`page-by`,reflect:!0})],J.prototype,`pageBy`,void 0),T([C({attribute:`min-range`,type:Number})],J.prototype,`minRange`,void 0),T([C({attribute:`max-range`,type:Number})],J.prototype,`maxRange`,void 0),T([C({attribute:!1})],J.prototype,`isDateDisabled`,void 0),T([C({attribute:!1})],J.prototype,`dayContent`,void 0),T([C({attribute:`with-label`,type:Boolean})],J.prototype,`withLabel`,void 0),T([C({attribute:`with-instructions`,type:Boolean})],J.prototype,`withInstructions`,void 0),T([C({attribute:`aria-label`})],J.prototype,`ariaLabel`,void 0),T([C({reflect:!0})],J.prototype,`width`,void 0),T([A(`.value-input`)],J.prototype,`input`,void 0),T([A(`pk-popup`)],J.prototype,`popupElement`,void 0),T([A(`pk-calendar`)],J.prototype,`calendarElement`,void 0),T([A(`.control`)],J.prototype,`controlElement`,void 0),T([w()],J.prototype,`daySlotNames`,void 0),J=T([k(`pk-date-picker`)],J);var Ls,Rs=null;function zs(){var e,t,n;let r=(e=globalThis.Craft)==null?void 0:e.timepicker;return{timeFormat:(r==null?void 0:r.timeFormat)||`g:i A`,lang:{AM:(r==null||(t=r.lang)==null?void 0:t.AM)||`AM`,PM:(r==null||(n=r.lang)==null?void 0:n.PM)||`PM`},locale:(r==null?void 0:r.locale)||document.documentElement.lang||`en-US`}}function Bs(){if(Rs)return Rs;let e=[],{timeFormat:t,lang:n,locale:r}=zs();for(let i=0;i<24;i+=1)for(let a=0;a<60;a+=30){let o=`${i.toString().padStart(2,`0`)}:${a.toString().padStart(2,`0`)}`,s;if(t===`g:i A`){let e=i;i===0?e=12:i>12&&(e=i-12);let t=i>=12?n.PM:n.AM;s=`${e}:${a.toString().padStart(2,`0`)} ${t}`}else s=t===`G:i`?o:new Date(`2000-01-01T${o}:00`).toLocaleTimeString(r,{hour:`numeric`,minute:`2-digit`,hour12:t.includes(`A`)});e.push({value:o,label:s})}return Rs=e,e}var Vs=E`
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
`,Hs=(Ls=class extends ke{constructor(...e){super(...e),this.optionsSeeded=!1}connectedCallback(){this.ensureTimeOptions(),this.ensureClockIcon(),super.connectedCallback()}ensureTimeOptions(){if(this.optionsSeeded||this.querySelector(`pk-option`)){this.optionsSeeded=!0;return}for(let e of Bs()){let t=document.createElement(`pk-option`);t.value=e.value,t.textContent=e.label,this.append(t)}this.optionsSeeded=!0}ensureClockIcon(){if(this.querySelector(`[slot="start"]`))return;let e=i(b.clock);e.setAttribute(`slot`,`start`),this.prepend(e)}},Ls.styles=[...we,Vs],Ls);Hs=T([k(`pk-time-picker`)],Hs);var Us=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},Ws=d(class extends ae{constructor(e){if(super(e),e.type!==ie.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){var i;let a=$a(e),{values:o,keys:s}=this.dt(t,n,r);if(!Array.isArray(a))return this.ut=s,o;let c=(i=this.ut)==null?this.ut=[]:i,l=[],u,d,f=0,p=a.length-1,m=0,h=o.length-1;for(;f<=p&&m<=h;)if(a[f]===null)f++;else if(a[p]===null)p--;else if(c[f]===s[m])l[m]=Xa(a[f],o[m]),f++,m++;else if(c[p]===s[h])l[h]=Xa(a[p],o[h]),p--,h--;else if(c[f]===s[h])l[h]=Xa(a[f],o[h]),Ya(e,l[h+1],a[f]),f++,h--;else if(c[p]===s[m])l[m]=Xa(a[p],o[m]),Ya(e,a[f],a[p]),p--,m++;else if(u===void 0&&(u=Us(s,m,h),d=Us(c,f,p)),u.has(c[f])){if(u.has(c[p])){let t=d.get(s[m]),n=t===void 0?null:a[t];if(n===null){let t=Ya(e,a[f]);Xa(t,o[m]),l[m]=t}else l[m]=Xa(n,o[m]),Ya(e,a[f],n),a[t]=null;m++}else eo(a[p]),p--}else eo(a[f]),f++;for(;m<=h;){let t=Ya(e,l[h+1]);Xa(t,o[m]),l[m++]=t}for(;f<=p;){let e=a[f++];e!==null&&eo(e)}return this.ut=s,Qa(e,l),Se}}),Gs=[`_id`],Ks=class e{constructor(e){this.callbacks=e,this.rows=[],this.disabled=!1,this.handleCleanups=[],this.dragSession=null}get isActive(){return this.handleCleanups.length>0}get isSessionActive(){return this.dragSession!==null}sync(e,t){if(!this.dragSession){this.destroyHandles(),this.rows=e,this.disabled=t;for(let t of e){if(!t.handle)continue;let e=e=>{this.handlePointerDown(e,t)};t.handle.addEventListener(`pointerdown`,e),this.handleCleanups.push(()=>{var n;(n=t.handle)==null||n.removeEventListener(`pointerdown`,e)})}}}destroy(){this.cancelDrag(),this.destroyHandles(),this.rows=[]}handlePointerDown(e,t){if(this.disabled||this.dragSession||e.button!==0||!e.isPrimary)return;let n=this.rows.findIndex(e=>e.id===t.id),r=t.element.parentElement,i=t.element.closest(`table`);if(n<0||!(r instanceof HTMLTableSectionElement)||!(i instanceof HTMLTableElement))return;e.preventDefault();let a=[...t.element.cells].map(e=>e.getBoundingClientRect().width),o=this.freezeTableColumns(i,a),s=t.element.getBoundingClientRect(),c=r.getBoundingClientRect(),l={x:e.clientX-s.left,y:e.clientY-s.top},u=this.createPlaceholder(t.element,a,s.height);t.element.insertAdjacentElement(`afterend`,u);let d=this.liftRow(t.element,s,a),f={row:t,fromIndex:n,table:i,tbody:r,placeholder:u,pointerId:e.pointerId,pointerOffset:l,startLeft:s.left,rowHeight:s.height,tbodyTop:c.top,tbodyBottom:c.bottom,fixedOrigin:d,unfreezeColumns:o,cleanup:[],committed:!1},p=t.element.ownerDocument,m=e=>{if(e.pointerId!==f.pointerId||f.committed)return;e.preventDefault();let t=f.tbody.getBoundingClientRect();f.tbodyTop=t.top,f.tbodyBottom=t.bottom,this.updateOverlay(f,e.clientY),this.updateGap(f,e.clientY-f.pointerOffset.y+f.rowHeight/2)},h=e=>{e.pointerId!==f.pointerId||f.committed||(e.preventDefault(),this.commitDrag(f))},g=e=>{e.pointerId!==f.pointerId||f.committed||this.cancelDrag()};p.addEventListener(`pointermove`,m,{passive:!1}),p.addEventListener(`pointerup`,h,{passive:!1}),p.addEventListener(`pointercancel`,g),f.cleanup.push(()=>{p.removeEventListener(`pointermove`,m)},()=>{p.removeEventListener(`pointerup`,h)},()=>{p.removeEventListener(`pointercancel`,g)}),this.dragSession=f,this.updateOverlay(f,e.clientY)}updateOverlay(e,t){let n=t-e.pointerOffset.y,r=e.tbodyTop,i=Math.max(r,e.tbodyBottom-e.rowHeight),a=Math.min(i,Math.max(r,n)),o=e.row.element;o.style.top=`${a-e.fixedOrigin.y}px`,o.style.left=`${e.startLeft-e.fixedOrigin.x}px`}updateGap(t,n){let r=t.placeholder,i=t.row.element,a=[...t.tbody.querySelectorAll(`tr[data-row-id]`)].filter(e=>e!==i&&!e.hasAttribute(`data-pk-dnd-placeholder`)),o=r.getBoundingClientRect(),s=n<o.top+o.height/2,c=e.SWAP_INSET,l=null;for(let e of a){let t=e.getBoundingClientRect();if(!(t.height<=0)&&n<(s?t.top+t.height*(1-c):t.top+t.height*c)){l=e;break}}if(l){r.nextElementSibling!==l&&t.tbody.insertBefore(r,l);return}t.tbody.lastElementChild!==r&&t.tbody.append(r)}commitDrag(e){if(e.committed||this.dragSession!==e)return;e.committed=!0,this.cleanupDrag(e),this.dragSession=null;let t=[...e.tbody.querySelectorAll(`tr[data-row-id]`)].map(e=>{var t;return(t=e.dataset.rowId)==null?``:t}).filter(e=>e!==``);this.callbacks.onReorderTo(t)}cancelDrag(){let e=this.dragSession;e&&!e.committed&&(e.committed=!0,this.restorePlaceholderToOrigin(e),this.cleanupDrag(e),this.dragSession=null)}restorePlaceholderToOrigin(e){let t=[...e.tbody.querySelectorAll(`tr[data-row-id]`)].filter(t=>t!==e.row.element&&!t.hasAttribute(`data-pk-dnd-placeholder`));if(e.fromIndex>=t.length){e.tbody.lastElementChild!==e.placeholder&&e.tbody.append(e.placeholder);return}let n=t[e.fromIndex];n&&e.placeholder.nextElementSibling!==n&&e.tbody.insertBefore(e.placeholder,n)}cleanupDrag(e){for(let t of e.cleanup)t();let t=e.row.element;e.placeholder.replaceWith(t),this.unliftRow(t),e.unfreezeColumns()}freezeTableColumns(e,t){var n;(n=e.querySelector(`:scope > colgroup[data-pk-dnd-cols]`))==null||n.remove();let r=e.ownerDocument.createElement(`colgroup`);r.setAttribute(`data-pk-dnd-cols`,`true`);for(let n of t){let t=e.ownerDocument.createElement(`col`);t.style.width=`${n}px`,r.append(t)}let i=e.style.tableLayout;return e.prepend(r),e.style.tableLayout=`fixed`,()=>{r.remove(),e.style.tableLayout=i}}createPlaceholder(e,t,n){let r=e.cloneNode(!0);return r.setAttribute(`data-pk-dnd-placeholder`,`true`),r.setAttribute(`aria-hidden`,`true`),r.removeAttribute(`data-row-id`),r.style.visibility=`hidden`,r.style.pointerEvents=`none`,r.style.height=`${n}px`,[...r.cells].forEach((e,n)=>{let r=t[n];typeof r==`number`&&(e.style.width=`${r}px`,e.style.minWidth=`${r}px`,e.style.maxWidth=`${r}px`,e.style.boxSizing=`border-box`),e.replaceChildren()}),r}liftRow(e,t,n){e.classList.add(`is-dragging`),[...e.cells].forEach((e,t)=>{let r=n[t];typeof r==`number`&&(e.style.width=`${r}px`,e.style.minWidth=`${r}px`,e.style.maxWidth=`${r}px`,e.style.boxSizing=`border-box`)}),e.style.position=`fixed`,e.style.top=`0px`,e.style.left=`0px`,e.style.width=`${t.width}px`,e.style.height=`${t.height}px`,e.style.margin=`0`,e.style.zIndex=`2147483647`,e.style.pointerEvents=`none`,e.style.boxShadow=`0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`,e.style.background=`var(--pk-color-white, #fff)`,e.style.opacity=`0.96`;let r=e.getBoundingClientRect(),i={x:r.left,y:r.top};return e.style.top=`${t.top-i.y}px`,e.style.left=`${t.left-i.x}px`,i}unliftRow(e){e.classList.remove(`is-dragging`),e.style.position=``,e.style.top=``,e.style.left=``,e.style.width=``,e.style.height=``,e.style.margin=``,e.style.zIndex=``,e.style.pointerEvents=``,e.style.boxShadow=``,e.style.background=``,e.style.opacity=``;for(let t of e.cells)t.style.width=``,t.style.minWidth=``,t.style.maxWidth=``,t.style.boxSizing=``}destroyHandles(){for(let e of this.handleCleanups)e();this.handleCleanups=[]}},qs,Js=(Ks.SWAP_INSET=.3,Ks),Ys=E`
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
`,Xs={EMPTY:`empty`,AUTO:`auto`,MANUAL:`manual`,SEEDED:`seeded`},Zs=e=>(e.type===`handle`||e.type===`value`)&&!!e.name&&!!e.source,Qs=e=>!!(e.thin||e.type===`checkbox`||e.type===`lightswitch`||e.type===`radio`),$s=e=>e==null||e===``,ec=(e,t)=>`${e}:${t}`,tc=e=>Array.isArray(e)?e.map(e=>{var t,n,r;return typeof e==`string`?{label:e,value:e}:{label:String((t=(n=e.label)==null?e.value:n)==null?``:t),value:String((r=e.value)==null?``:r)}}):[],nc=e=>e.type===`checkbox`||e.type===`lightswitch`||e.type===`radio`?!1:``,rc=e=>{let t=e.normalize(`NFKD`).replace(/[\u0300-\u036f]/g,``).toLowerCase().replace(/['"'""[\](){}:]/g,``).split(/[^a-z0-9]+/).filter(Boolean);return t.length===0?``:t.map((e,t)=>t===0?e:e.charAt(0).toUpperCase()+e.slice(1)).join(``)},ic=0,ac=()=>(ic+=1,`etr_${Date.now().toString(36)}_${ic}`),oc=(e,t)=>`cell:${e}:${t}`,sc=new Set([`text`,`textarea`,`number`,`email`,`url`,`select`,`combobox`,`checkbox`,`radio`,`lightswitch`,`color`,`date`,`time`,`heading`,`label`,`handle`,`value`,`custom`]),cc=e=>{let t=e.type;return t===`custom`||typeof t==`string`&&!sc.has(t)},lc=new Set([`checkbox`,`radio`,`lightswitch`,`heading`,`label`]),uc=new Set([`text`,`number`,`email`,`url`,`handle`,`value`,`color`,`date`,`time`]),dc=e=>{var t;return!cc(e)&&uc.has((t=e.type)==null?`text`:t)},fc=e=>{var t;return!cc(e)&&!lc.has((t=e.type)==null?`text`:t)},pc=e=>String(e==null?``:e).replace(/^[\n\r ]+|[\n\r ]+$/g,``),mc=e=>/[\t\r\n]/.test(e),hc=e=>{let t=pc(e);return t?t.split(/\r?\n|\r/).map(e=>e.split(`	`)):[]},gc=M(m).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),_c=M(n).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),vc=M(a).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),yc=M(o).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),bc=M(_).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),xc=M(h).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),Sc=M(ye).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),Cc=e=>{if(!e)return``;if(e===`gear`)return Sc;let t=ee(e);return t?M(t).replace(`<svg`,`<svg slot="start" aria-hidden="true"`):``},Y=(qs=class extends Ne{constructor(...e){super(...e),this.columns=[],this.rows=[],this.allowAdd=!0,this.allowDelete=!0,this.allowReorder=!0,this.allowInsert=!0,this.maxRows=null,this.addRowLabel=``,this.fieldName=``,this.cellErrors={},this.newRowDefaults={},this.modifyColumn=null,this.modifyRow=null,this.getRowMenuItems=null,this.internalRows=[],this.dndReady=!1,this.generatedCellModes=new Map,this.dndController=new Js({onReorderTo:e=>{this.commitReorderByIds(e)}}),this.dndIdleId=null,this.dndTimeoutId=null,this.dndRowSignature=``}static get validators(){return[...super.validators,Ra()]}willUpdate(e){if(e.has(`rows`)){let e=Array.isArray(this.rows)?this.rows:[],t=this.internalRows;this.internalRows=e.map((e,n)=>{var r;let i=typeof e._id==`string`?e._id:typeof((r=t[n])==null?void 0:r._id)==`string`?String(t[n]._id):ac();return O(O({},e),{},{_id:i})}),this.syncGeneratedModesFromRows(),this.syncFormValue()}(e.has(`allowReorder`)||e.has(`disabled`))&&this.scheduleDndHydration(),super.willUpdate(e)}firstUpdated(e){super.firstUpdated(e),this.scheduleDndHydration()}shouldUpdate(e){return!this.dndController.isSessionActive&&super.shouldUpdate(e)}updated(e){super.updated(e),this.dndReady&&this.allowReorder&&!this.disabled?this.dndController.isSessionActive||this.syncDndSortables():this.dndController.isActive&&(!this.allowReorder||this.disabled||!this.dndReady)&&(this.dndController.destroy(),this.dndRowSignature=``)}disconnectedCallback(){this.cancelDndHydration(),this.dndController.destroy(),this.dndReady=!1,super.disconnectedCallback()}get value(){return this.internalRows.length?JSON.stringify(this.cleanRows()):``}get validColumns(){return(Array.isArray(this.columns)?this.columns:[]).filter(e=>typeof(e==null?void 0:e.name)==`string`&&e.name.trim()!==``)}get generatedColumns(){return this.validColumns.filter(Zs)}get showActionsColumn(){return this.allowReorder||this.allowDelete||this.allowInsert||!!this.getRowMenuItems}cleanRows(){return this.internalRows.map(e=>{let{_id:t}=e;return f(e,Gs)})}setCellValue(e,t,n){let r=this.internalRows[e];if(!r)return;let i=this.validColumns.find(e=>e.name===t);i&&this.updateCell(e,this.resolveColumn(r,i,e),n)}resolveColumn(e,t,n){var r;let i=(r=this.modifyColumn)==null?void 0:r.call(this,e,t.name,t,n);return!i||typeof i!=`object`?t:O(O(O({},t),i),{},{name:t.name})}resolveRowModifier(e,t){var n;let r=(n=this.modifyRow)==null?void 0:n.call(this,e,t);return!r||typeof r!=`object`?{}:r}resolveRowMenuItems(e,t){var n;let r=(n=this.getRowMenuItems)==null?void 0:n.call(this,e,t);return Array.isArray(r)?r.filter(e=>e&&typeof e.label==`string`):[]}syncGeneratedModesFromRows(){let e=this.generatedColumns;if(this.internalRows.length===0||e.length===0){this.generatedCellModes.clear();return}let t=new Set;for(let n of this.internalRows){let r=String(n._id);for(let i of e){let e=ec(r,i.name);t.add(e),!this.generatedCellModes.has(e)&&this.generatedCellModes.set(e,$s(n[i.name])?Xs.EMPTY:Xs.SEEDED)}}for(let e of[...this.generatedCellModes.keys()])t.has(e)||this.generatedCellModes.delete(e)}syncFormValue(){let e=JSON.stringify(this.cleanRows());this.setFormValue(e,e)}restoreFormState(e){if(typeof e==`string`)try{let t=JSON.parse(e);Array.isArray(t)&&(this.rows=t)}catch(e){}}stopInnerControlEvent(e){e.target!==this&&e.stopPropagation()}emitChange(){let e=this.internalRows.map(e=>O({},e));this.rows=e,this.syncFormValue(),this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{rows:e},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}emitCellChange(e,t,n,r){this.dispatchEvent(new CustomEvent(`pk-cell-change`,{detail:{rowIndex:e,columnName:t,value:n,row:r},bubbles:!0,composed:!0}))}commitRows(e,t=[]){this.internalRows=e,this.emitChange();for(let e of t)this.emitCellChange(e.rowIndex,e.columnName,e.value,e.row)}updateCell(e,t,n){let r=this.internalRows[e];if(!r)return;if(t.type===`radio`){let i=!!n,a=!!t.allowUnselect,o=this.internalRows.map(e=>O({},e)),s=[];if(i)o.forEach((n,r)=>{let i=r===e;!!n[t.name]!==i&&(o[r]=O(O({},n),{},{[t.name]:i}),s.push({rowIndex:r,columnName:t.name,value:i,row:this.internalRows[r]}))});else if(a&&r[t.name])o[e]=O(O({},r),{},{[t.name]:!1}),s.push({rowIndex:e,columnName:t.name,value:!1,row:r});else return;if(s.length===0)return;this.commitRows(o,s);return}Zs(t)&&this.generatedCellModes.set(ec(String(r._id),t.name),$s(n)?Xs.EMPTY:Xs.MANUAL);let i={[t.name]:n},a={};for(let e of this.generatedColumns){var o;if(e.source!==t.name)continue;let i=ec(String(r._id),e.name),s=r[e.name],c=(o=this.generatedCellModes.get(i))==null?$s(s)?Xs.EMPTY:Xs.SEEDED:o;c!==Xs.MANUAL&&c!==Xs.SEEDED&&(e.type===`handle`?(a[e.name]=rc(String(n==null?``:n)),this.generatedCellModes.set(i,Xs.AUTO)):e.type===`value`&&(a[e.name]=n,this.generatedCellModes.set(i,Xs.AUTO)))}let s=O(O({},i),a);if(!Object.entries(s).some(([e,t])=>r[e]!==t))return;let c=this.internalRows.slice();c[e]=O(O({},r),s);let l=Object.entries(s).map(([t,n])=>({rowIndex:e,columnName:t,value:n,row:r}));this.commitRows(c,l)}canAddRow(e=this.internalRows.length){return!(this.disabled||!this.allowAdd||this.maxRows!=null&&Number.isFinite(this.maxRows)&&e>=this.maxRows)}createEmptyRow(){if(!this.canAddRow())return null;let e=O({_id:ac()},this.newRowDefaults&&typeof this.newRowDefaults==`object`?this.newRowDefaults:{});for(let t of this.validColumns)t.name in e||(e[t.name]=nc(t));return e}addRow(){let e=this.createEmptyRow();e&&(this.internalRows=[...this.internalRows,e],this.syncGeneratedModesFromRows(),this.emitChange())}insertRowAt(e){let t=this.createEmptyRow();if(!t)return;let n=Math.max(0,Math.min(e,this.internalRows.length)),r=this.internalRows.slice();r.splice(n,0,t),this.internalRows=r,this.syncGeneratedModesFromRows(),this.emitChange()}removeRow(e){!this.disabled&&this.allowDelete&&(this.internalRows=this.internalRows.filter((t,n)=>n!==e),this.syncGeneratedModesFromRows(),this.emitChange())}handleTablePaste(e){if(this.disabled||!e.clipboardData)return;let t=pc(e.clipboardData.getData(`text/plain`)||e.clipboardData.getData(`Text`)||``);if(!mc(t))return;let n=e.composedPath(),r=null,i=null;for(let e of n)if(e instanceof HTMLTableCellElement&&e.tagName===`TD`&&!e.classList.contains(`actions`)&&(r=e),e instanceof HTMLTableRowElement&&e.dataset.rowId){i=e;break}if(!r||!i)return;let a=this.internalRows.findIndex(e=>String(e._id)===i.dataset.rowId),o=[...i.querySelectorAll(`:scope > td:not(.actions)`)].indexOf(r);if(a<0||o<0)return;let s=this.validColumns[o];s&&dc(s)&&(e.preventDefault(),e.stopPropagation(),this.importTsvData(t,a,o))}importTsvData(e,t,n){let r=hc(e);if(r.length===0)return;let i=this.validColumns;if(i.length===0||n>=i.length)return;let a=this.internalRows.map(e=>O({},e)),o=t,s=!1;for(let e=0;e<r.length;e++){var c;if(o>=a.length){if(!this.canAddRow(a.length))break;let e=O({_id:ac()},this.newRowDefaults&&typeof this.newRowDefaults==`object`?this.newRowDefaults:{});for(let t of i)t.name in e||(e[t.name]=nc(t));a.push(e),s=!0}let t=(c=r[e])==null?[]:c,d=a[o];if(!d)break;let f=null;for(let e=0;e<t.length;e++){var l,u;let r=i[n+e];if(!r)break;if(!fc(r))continue;let a=(l=t[e])==null?``:l;d[r.name]!==a&&(f=(u=f)==null?{}:u,f[r.name]=a)}f&&(a[o]=O(O({},d),f),s=!0),o+=1}s&&(this.internalRows=a,this.syncGeneratedModesFromRows(),this.emitChange())}moveRow(e,t){let n=e+t;if(this.disabled||n<0||n>=this.internalRows.length)return;let r=String(this.internalRows[e]._id),i=this.renderRoot.querySelector(`tr[data-row-id="${CSS.escape(r)}"] pk-button[slot="trigger"]`);this.commitReorder(e,n),this.updateComplete.then(()=>{i!=null&&i.isConnected&&i.focus({preventScroll:!0})})}commitReorder(e,t){if(this.disabled||e===t||e<0||t<0||e>=this.internalRows.length||t>=this.internalRows.length)return;let n=this.internalRows.slice(),[r]=n.splice(e,1);n.splice(t,0,r),this.internalRows=n,this.emitChange()}commitReorderByIds(e){if(this.disabled||e.length===0)return;let t=new Map(this.internalRows.map(e=>[String(e._id),e]));if(e.length!==t.size)return;let n=[];for(let r of e){let e=t.get(r);if(!e)return;n.push(e)}n.every((e,t)=>e===this.internalRows[t])||(this.internalRows=n,this.emitChange())}scheduleDndHydration(){if(this.cancelDndHydration(),!this.allowReorder||this.disabled){this.dndReady=!1,this.dndController.destroy();return}if(this.dndReady)return;let e=()=>{this.dndIdleId=null,this.dndTimeoutId=null,this.dndReady=!0};typeof window<`u`&&typeof window.requestIdleCallback==`function`?this.dndIdleId=window.requestIdleCallback(e,{timeout:1200}):this.dndTimeoutId=setTimeout(e,250)}cancelDndHydration(){this.dndIdleId!==null&&typeof window<`u`&&typeof window.cancelIdleCallback==`function`&&(window.cancelIdleCallback(this.dndIdleId),this.dndIdleId=null),this.dndTimeoutId!==null&&(clearTimeout(this.dndTimeoutId),this.dndTimeoutId=null)}syncDndSortables(){if(this.dndController.isSessionActive)return;let e=`${this.internalRows.map(e=>String(e._id)).join(`\0`)}|${this.disabled?`1`:`0`}`;if(e===this.dndRowSignature&&this.dndController.isActive)return;let t=[...this.renderRoot.querySelectorAll(`tr[data-row-id]:not([data-pk-dnd-placeholder])`)];this.dndController.sync(t.map(e=>{var t,n;return{id:(t=e.dataset.rowId)==null?``:t,element:e,handle:(n=e.querySelector(`.action-handle`))==null?void 0:n}}).filter(e=>e.id!==``),this.disabled),this.dndRowSignature=e}getCellErrors(e,t){var n,r;let i=this.fieldName?(n=this.cellErrors)==null?void 0:n[`${this.fieldName}.${e}.${t}`]:void 0,a=(r=this.cellErrors)==null?void 0:r[`${e}.${t}`],o=i==null?a:i;return o?Array.isArray(o)?o.map(String):[String(o)]:[]}readValueFromEvent(e){var t,n;let r=e.detail;return r&&`value`in r?String((t=r.value)==null?``:t):String((n=e.target.value)==null?``:n)}readCheckedFromEvent(e){let t=e.detail;return t&&`checked`in t?!!t.checked:!!e.target.checked}renderOptionElements(e){return tc(e.options).map(e=>j`<pk-option value=${e.value}>${e.label}</pk-option>`)}renderSelectLike(e,t,n,r,{combobox:i=!1}={}){var a,o,s,c;let l=String(t==null?``:t);return i?j`<pk-combobox
                class="cell-pk-control"
                size="sm"
                width="full"
                allow-custom-value
                .value=${l}
                placeholder=${(a=e.placeholder)==null?``:a}
                ?disabled=${this.disabled}
                ?invalid=${r}
                aria-label=${(o=e.label)==null?e.name:o}
                @pk-change=${t=>{this.updateCell(n,e,this.readValueFromEvent(t))}}
            >
                ${this.renderOptionElements(e)}
            </pk-combobox>`:j`<pk-select
            class="cell-pk-control"
            size="xxs"
            width="full"
            .value=${l}
            placeholder=${(s=e.placeholder)==null?``:s}
            ?disabled=${this.disabled}
            ?invalid=${r}
            aria-label=${(c=e.label)==null?e.name:c}
            @pk-change=${t=>{this.updateCell(n,e,this.readValueFromEvent(t))}}
        >
            ${this.renderOptionElements(e)}
        </pk-select>`}renderCell(e,t,n,r){var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v;let y=t[e.name],b=(i=e.type)==null?`text`:i,ee=t=>{this.updateCell(n,e,this.readValueFromEvent(t))};return cc(e)?j`<div class="cell-slot">
                <slot name=${oc(String(t._id),e.name)}></slot>
            </div>`:b===`heading`?j`<div class="cell-static cell-heading">${String(y==null?``:y)}</div>`:b===`label`?j`<div class="cell-static">${String(y==null?``:y)}</div>`:b===`textarea`?j`<pk-textarea
                class="cell-pk-control"
                fit-cell
                size="sm"
                rows="1"
                .value=${String(y==null?``:y)}
                placeholder=${(a=e.placeholder)==null?x:a}
                ?disabled=${this.disabled}
                ?invalid=${r}
                aria-label=${(o=e.label)==null?e.name:o}
                @input=${ee}
            ></pk-textarea>`:b===`date`?j`<pk-date-picker
                class="cell-pk-control"
                size="sm"
                width="full"
                .value=${String(y==null?``:y)}
                placeholder=${(s=e.placeholder)==null?``:s}
                ?disabled=${this.disabled}
                ?invalid=${r}
                aria-label=${(c=e.label)==null?e.name:c}
                @pk-change=${t=>{this.updateCell(n,e,this.readValueFromEvent(t))}}
            ></pk-date-picker>`:b===`time`?j`<pk-time-picker
                class="cell-pk-control"
                size="sm"
                width="full"
                .value=${String(y==null?``:y)}
                placeholder=${(l=e.placeholder)==null?``:l}
                ?disabled=${this.disabled}
                ?invalid=${r}
                aria-label=${(u=e.label)==null?e.name:u}
                @pk-change=${t=>{this.updateCell(n,e,this.readValueFromEvent(t))}}
            ></pk-time-picker>`:b===`number`||b===`email`||b===`url`?j`<pk-input
                class="cell-pk-control"
                fit-cell
                size="xs"
                type=${b}
                .value=${String(y==null?``:y)}
                placeholder=${(d=e.placeholder)==null?x:d}
                ?disabled=${this.disabled}
                ?invalid=${r}
                aria-label=${(f=e.label)==null?e.name:f}
                @input=${ee}
            ></pk-input>`:b===`select`?this.renderSelectLike(e,y,n,r):b===`combobox`?this.renderSelectLike(e,y,n,r,{combobox:!0}):b===`checkbox`?j`<div class="cell-check">
                <pk-checkbox
                    aria-label=${(p=e.label)==null?e.name:p}
                    .checked=${!!y}
                    ?disabled=${this.disabled}
                    ?invalid=${r}
                    @pk-change=${t=>{this.updateCell(n,e,this.readCheckedFromEvent(t))}}
                ></pk-checkbox>
            </div>`:b===`radio`?j`<div class="cell-check">
                <pk-checkbox
                    aria-label=${(m=e.label)==null?e.name:m}
                    .checked=${!!y}
                    ?disabled=${this.disabled}
                    ?invalid=${r}
                    @pk-change=${t=>{this.updateCell(n,e,this.readCheckedFromEvent(t))}}
                ></pk-checkbox>
            </div>`:b===`lightswitch`?j`<div class="cell-check cell-check--switch">
                <pk-lightswitch
                    size="sm"
                    aria-label=${(h=e.label)==null?e.name:h}
                    .checked=${!!y}
                    ?disabled=${this.disabled}
                    ?invalid=${r}
                    @pk-change=${t=>{this.updateCell(n,e,this.readCheckedFromEvent(t))}}
                ></pk-lightswitch>
            </div>`:b===`color`?j`<pk-color-input
                class="cell-pk-control"
                fit-cell
                size="xs"
                .value=${String(y==null?``:y)}
                ?disabled=${this.disabled}
                ?invalid=${r}
                aria-label=${(g=e.label)==null?e.name:g}
                @pk-change=${t=>{this.updateCell(n,e,this.readValueFromEvent(t))}}
            ></pk-color-input>`:j`<pk-input
            class="cell-pk-control"
            fit-cell
            size="xs"
            type="text"
            ?mono=${b===`handle`||b===`value`}
            .value=${String(y==null?``:y)}
            placeholder=${(_=e.placeholder)==null?x:_}
            ?disabled=${this.disabled}
            ?invalid=${r}
            aria-label=${(v=e.label)==null?e.name:v}
            @input=${ee}
        ></pk-input>`}renderExtraMenuItems(e,t){let n=this.resolveRowMenuItems(e,t);return n.length===0?x:j`${n.map(n=>{var r,i,a,o;let s=Cc(n.icon);return j`<pk-dropdown-item
                type=${(r=n.type)==null?`normal`:r}
                value=${(i=(a=n.value)==null?n.action:a)==null?``:i}
                radio-group=${(o=n.radioGroup)==null?x:o}
                ?checked=${!!n.checked}
                ?disabled=${this.disabled||!!n.disabled}
                @pk-select=${()=>{var r,i,a;this.disabled||n.disabled||this.dispatchEvent(new CustomEvent(`pk-row-menu-select`,{detail:{rowIndex:t,row:e,item:n,action:String((r=(i=n.action)==null?n.value:i)==null?``:r),value:String((a=n.value)==null?``:a)},bubbles:!0,composed:!0}))}}
            >
                ${s?u(s):x}
                ${n.label}
            </pk-dropdown-item>`})}`}renderRow(e,t){let n=this.validColumns,r=this.internalRows.length,i=String(e._id),a=this.resolveRowModifier(e,t),o=this.resolveRowMenuItems(e,t),s=this.allowReorder||this.allowInsert||o.length>0,c=this.disabled||!this.canAddRow();return j`<tr
            data-row-id=${i}
            data-tone=${a.tone||x}
            class=${a.class?D(Object.fromEntries(a.class.split(/\s+/).filter(Boolean).map(e=>[e,!0]))):x}
            aria-label=${a.title||x}
        >
            ${n.map(n=>{let r=this.resolveColumn(e,n,t),i=this.getCellErrors(t,n.name),a=r.class||n.class||``;return j`<td
                    class=${D(O({thin:Qs(r),"has-error":i.length>0},a?Object.fromEntries(a.split(/\s+/).filter(Boolean).map(e=>[e,!0])):{}))}
                    style=${r.width||n.width?`width: ${r.width||n.width}`:x}
                >
                    ${this.renderCell(r,e,t,i.length>0)}
                </td>`})}
            ${this.showActionsColumn?j`<td class="actions">
                    <div class="row-actions">
                        ${this.allowReorder?j`
                                <span
                                    class=${D({"action-handle":!0,"is-pending":!this.dndReady})}
                                >
                                    <pk-button
                                        type="button"
                                        class="action-btn"
                                        variant="none"
                                        size="xs"
                                        aria-label=${!this.dndReady&&!this.disabled?`Preparing drag…`:`Reorder row`}
                                        ?disabled=${this.disabled||!this.dndReady}
                                    >${u(gc)}</pk-button>
                                </span>`:x}
                        ${s?j`<pk-dropdown-menu size="sm" placement="bottom-end" side-offset="2">
                                    <pk-button
                                        slot="trigger"
                                        type="button"
                                        class="action-btn"
                                        variant="none"
                                        size="xs"
                                        aria-label="Row actions"
                                        ?disabled=${this.disabled}
                                    >${u(_c)}</pk-button>
                                    ${this.renderExtraMenuItems(e,t)}
                                    ${this.allowInsert?j`
                                            <pk-dropdown-item
                                                ?disabled=${c}
                                                @pk-select=${()=>{this.insertRowAt(t)}}
                                            >
                                                ${u(xc)}
                                                Insert above
                                            </pk-dropdown-item>
                                            <pk-dropdown-item
                                                ?disabled=${c}
                                                @pk-select=${()=>{this.insertRowAt(t+1)}}
                                            >
                                                ${u(xc)}
                                                Insert below
                                            </pk-dropdown-item>`:x}
                                    ${this.allowReorder?j`
                                            <pk-dropdown-item
                                                ?disabled=${this.disabled||t===0}
                                                @pk-select=${()=>{this.moveRow(t,-1)}}
                                            >
                                                ${u(vc)}
                                                Move up
                                            </pk-dropdown-item>
                                            <pk-dropdown-item
                                                ?disabled=${this.disabled||t===r-1}
                                                @pk-select=${()=>{this.moveRow(t,1)}}
                                            >
                                                ${u(yc)}
                                                Move down
                                            </pk-dropdown-item>`:x}
                                </pk-dropdown-menu>`:x}
                        ${this.allowDelete?j`<pk-button
                                type="button"
                                class="action-btn action-delete"
                                variant="none"
                                size="xs"
                                aria-label="Delete row"
                                ?disabled=${this.disabled}
                                @click=${()=>{this.removeRow(t)}}
                            >${u(bc)}</pk-button>`:x}
                    </div>
                </td>`:x}
        </tr>`}render(){let e=this.validColumns;return j`
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
                            ${e.map(e=>{var t;let n=e.class||``;return j`<th
                                    class=${D(O({thin:Qs(e)},n?Object.fromEntries(n.split(/\s+/).filter(Boolean).map(e=>[e,!0])):{}))}
                                    style=${e.width?`width: ${e.width}`:x}
                                >
                                    ${(t=e.label)==null?e.name:t}
                                    ${e.required?j`<span class="required">*</span>`:x}
                                </th>`})}
                            ${this.showActionsColumn?j`<th class="actions"></th>`:x}
                        </tr>
                    </thead>
                    <tbody>
                        ${Ws(this.internalRows,e=>String(e._id),(e,t)=>this.renderRow(e,t))}
                    </tbody>
                </table>
            </div>
            ${this.allowAdd?j`<pk-button
                    type="button"
                    class="add-row"
                    variant="dashed"
                    ?disabled=${this.disabled}
                    @click=${()=>{this.addRow()}}
                >
                    ${u(xc)}
                    ${this.addRowLabel||`Add row`}
                </pk-button>`:x}
        `}},qs.styles=Ys,qs);T([C({attribute:!1})],Y.prototype,`columns`,void 0),T([C({attribute:!1})],Y.prototype,`rows`,void 0),T([C({type:Boolean,reflect:!0,attribute:`allow-add`})],Y.prototype,`allowAdd`,void 0),T([C({type:Boolean,reflect:!0,attribute:`allow-delete`})],Y.prototype,`allowDelete`,void 0),T([C({type:Boolean,reflect:!0,attribute:`allow-reorder`})],Y.prototype,`allowReorder`,void 0),T([C({type:Boolean,reflect:!0,attribute:`allow-insert`})],Y.prototype,`allowInsert`,void 0),T([C({type:Number,attribute:`max-rows`})],Y.prototype,`maxRows`,void 0),T([C({attribute:`add-row-label`})],Y.prototype,`addRowLabel`,void 0),T([C({attribute:`field-name`})],Y.prototype,`fieldName`,void 0),T([C({attribute:!1})],Y.prototype,`cellErrors`,void 0),T([C({attribute:!1})],Y.prototype,`newRowDefaults`,void 0),T([C({attribute:!1})],Y.prototype,`modifyColumn`,void 0),T([C({attribute:!1})],Y.prototype,`modifyRow`,void 0),T([C({attribute:!1})],Y.prototype,`getRowMenuItems`,void 0),T([w()],Y.prototype,`internalRows`,void 0),T([w()],Y.prototype,`dndReady`,void 0),Y=T([k(`pk-editable-table`)],Y);var wc,Tc=[Ae,E`
    ${r}
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
    `],Ec=M(b.chevronDown),Dc=M(b.xmark),Oc=96;function kc(e){return/^\s*<svg[\s>]/i.test(e)}var X=(wc=class extends Ne{constructor(...e){super(...e),this.assumeInteractionOn=[`pk-change`],this.size=`default`,this.mode=`icon`,this.width=`auto`,this.labelMode=`tooltip`,this.invalid=!1,this.readonly=!1,this.value=``,this.defaultValue=``,this.placeholder=`Choose…`,this.searchPlaceholder=`Search…`,this.emptyMessage=`No items match your query.`,this.ariaLabel=null,this.loading=!1,this.withClear=!0,this.items=[],this.groups=[],this.selectedLabel=``,this.selectedPreview=``,this.placement=`bottom-start`,this.sideOffset=4,this.pageSize=Oc,this.open=!1,this.query=``,this.limit=Oc,this.closing=!1,this.panelAnimated=!1,this.highlightedIndex=-1,this.tooltipFor=``,this.tooltipContent=``,this.listboxId=me(`pk-image-browser-listbox`),this.searchId=me(`pk-image-browser-search`),this.closeTimer=null,this.tooltipOpenTimer=null,this.liveRegion=null,this.handleClear=e=>{var t;e.preventDefault(),e.stopPropagation(),!(this.disabled||this.readonly||this.value===``)&&(this.emitChange(``),this.dispatchEvent(new se),(t=this.triggerElement)==null||t.focus({preventScroll:!0}))},this.togglePanel=e=>{e==null||e.preventDefault(),e==null||e.stopPropagation(),!(this.disabled||this.readonly)&&(this.open||this.closing?this.closePanel(`api`):this.openPanel())},this.handleTriggerKeyDown=e=>{this.disabled||this.readonly||(e.key===`ArrowDown`||e.key===`ArrowUp`||e.key===`Enter`||e.key===` `)&&(e.preventDefault(),!this.open&&!this.closing&&this.openPanel())},this.onDocumentPointerDown=e=>{var t;this.open&&!this.closing&&Ee(this)&&(he(e,{host:this,anchor:(t=this.controlElement)==null?this.triggerElement:t,panel:this.panelElement})||this.closePanel(`pointer-dismiss`))},this.onDocumentKeyDown=e=>{this.open&&!this.closing&&Ee(this)&&e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),this.closePanel(`escape`))},this.handleSearchInput=e=>{this.loading||(this.query=e.target.value,this.limit=this.normalizedPageSize(),this.resetHighlightForOpenCatalog(),this.announceResults())},this.handleSearchKeyDown=e=>{if(!(!this.open||this.closing||this.loading))switch(e.key){case`ArrowDown`:case`ArrowUp`:case`ArrowLeft`:case`ArrowRight`:case`Home`:case`End`:e.preventDefault(),e.stopPropagation(),this.moveHighlight(e.key);return;case`Enter`:{e.preventDefault(),e.stopPropagation();let t=this.flatVisibleItems()[this.highlightedIndex];t&&this.selectValue(t.value);return}}},this.handleResultsScroll=()=>{this.clearOptionTooltip();let e=this.panelBody;if(!e||!this.isTruncated()||e.scrollTop+e.clientHeight<e.scrollHeight-200)return;let t=e.scrollTop;this.limit+=this.normalizedPageSize(),this.updateComplete.then(()=>{this.panelBody&&(this.panelBody.scrollTop=t)})},this.handleOptionPointerLeave=e=>{var t,n;let r=e.relatedTarget;r instanceof Node&&(t=this.panelBody)!=null&&t.contains(r)&&(r instanceof Element?r.closest(`.option`):(n=r.parentElement)!=null&&n.closest(`.option`))||(this.resetHighlightToSelected(),this.clearOptionTooltip())}}static get validators(){return[...super.validators,je(),Ra()]}connectedCallback(){super.connectedCallback(),this.limit=this.normalizedPageSize()}disconnectedCallback(){var e;this.teardownDismissListeners(),this.clearCloseTimer(),this.clearTooltipOpenTimer(),(e=this.liveRegion)==null||e.destroy(),this.liveRegion=null,super.disconnectedCallback()}willUpdate(e){e.has(`pageSize`)&&!this.open&&(this.limit=this.normalizedPageSize()),super.willUpdate(e)}updated(e){super.updated(e),e.has(`open`)&&(this.open?this.attachDismissListeners():this.closing||this.teardownDismissListeners()),(e.has(`open`)||e.has(`closing`))&&(this.open||this.closing)&&this.syncPanelPlacement(),this.open&&(e.has(`highlightedIndex`)||e.has(`query`)||e.has(`limit`))&&this.scrollHighlightedIntoView(),this.open&&e.has(`loading`)&&!this.loading&&this.resetHighlightForOpenCatalog()}get validationTarget(){var e;return(e=this.triggerElement)==null?this:e}syncFormValue(){this.setFormValue(this.value,this.value)}resetToDefaultValue(){this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=e)}show(){var e=this;return S(function*(){e.open||e.closing||e.disabled||e.readonly||(yield e.openPanel())})()}hide(e=`api`){var t=this;return S(function*(){t.open&&!t.closing&&(yield t.closePanel(e))})()}optionId(e){return`${this.listboxId}-opt-${e}`}groupHeadingId(e){return`${this.listboxId}-group-${e}`}normalizedPageSize(){return this.pageSize>0?this.pageSize:Oc}resolveGroups(){return this.groups.length>0?this.groups:this.items.length>0?[{name:``,items:this.items}]:[]}findItem(e){if(e===``)return null;for(let t of this.resolveGroups()){let n=t.items.find(t=>t.value===e);if(n)return n}return null}selectedItem(){return this.findItem(this.value)}triggerDisplay(){let e=this.selectedItem();return e?{label:e.label,preview:e.preview,isPlaceholder:!1}:this.value===``?{label:this.placeholder,isPlaceholder:!0}:{label:this.selectedLabel||this.value,preview:this.selectedPreview||void 0,isPlaceholder:!1}}visibleGroups(){let e=this.query.trim().toLowerCase();return this.resolveGroups().reduce((t,n)=>{let r=e===``?n.items:n.items.filter(t=>t.label.toLowerCase().includes(e)||t.value.toLowerCase().includes(e));return r.length===0||t.push({name:n.name,total:r.length,items:r.slice(0,this.limit)}),t},[])}flatVisibleItems(){return this.visibleGroups().flatMap(e=>e.items)}isTruncated(){return this.visibleGroups().some(e=>e.items.length<e.total)}activeDescendantId(){return!this.open||this.highlightedIndex<0?null:this.optionId(this.highlightedIndex)}triggerAccessibleName(){if(this.ariaLabel){let e=this.triggerDisplay();return e.isPlaceholder?this.ariaLabel:`${this.ariaLabel}, ${e.label}`}return this.triggerDisplay().label}announceResults(){if(this.loading)return;let e=this.flatVisibleItems();this.query.trim()&&(this.liveRegion||(this.liveRegion=new t(`polite`)),this.liveRegion.announce(e.length===0?this.emptyMessage:`${e.length} ${e.length===1?`result`:`results`} available`))}resetHighlightForOpenCatalog(){let e=this.flatVisibleItems();if(e.length===0){this.highlightedIndex=-1;return}this.highlightedIndex=e.findIndex(e=>e.value===this.value)}setHighlightedIndex(e){let t=this.flatVisibleItems();if(t.length===0){this.highlightedIndex=-1;return}let n=Math.max(0,Math.min(e,t.length-1));this.highlightedIndex=n,n>=t.length-4&&this.isTruncated()&&(this.limit+=this.normalizedPageSize())}scrollHighlightedIntoView(){if(this.highlightedIndex<0||!this.panelBody)return;let e=this.renderRoot.querySelector(`#${CSS.escape(this.optionId(this.highlightedIndex))}`);e&&de(e,this.panelBody,`vertical`,`auto`)}columnCountNear(e){var t;let n=(t=this.renderRoot.querySelector(`#${CSS.escape(this.optionId(e))}`))==null?void 0:t.closest(`.grid`);if(!n)return 1;let r=[...n.querySelectorAll(`.option`)];if(r.length===0)return 1;let i=r[0].offsetTop,a=0;for(let e of r){if(e.offsetTop!==i)break;a+=1}return Math.max(1,a)}moveHighlight(e){let t=this.flatVisibleItems();if(t.length===0){this.highlightedIndex=-1;return}let n=this.highlightedIndex;if(n<0){n=e===`ArrowUp`||e===`ArrowLeft`||e===`End`?t.length-1:0,this.setHighlightedIndex(n);return}let r=this.columnCountNear(n);switch(e){case`ArrowRight`:n=Math.min(n+1,t.length-1);break;case`ArrowLeft`:n=Math.max(n-1,0);break;case`ArrowDown`:n=Math.min(n+r,t.length-1);break;case`ArrowUp`:n=Math.max(n-r,0);break;case`Home`:n=0;break;case`End`:n=t.length-1;break;default:return}this.setHighlightedIndex(n)}emitChange(e){this.value=e,this.syncFormValue(),this.updateValidity(),this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{value:e},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}selectValue(e){if(this.disabled||this.readonly)return;let t=this.value;if(this.closePanel(`api`),this.query=``,this.limit=this.normalizedPageSize(),this.highlightedIndex=-1,t===e){this.withClear&&t!==``&&(this.emitChange(``),this.dispatchEvent(new se));return}this.emitChange(e)}openPanel(){var e=this;return S(function*(){e.open||e.closing||e.disabled||e.readonly||(e.dispatchEvent(new re),e.closing=!1,e.panelAnimated=!1,e.query=``,e.limit=e.normalizedPageSize(),e.open=!0,e.resetHighlightForOpenCatalog(),yield e.updateComplete,yield e.syncPanelPlacement(),e.panelAnimated=!0,e.dispatchEvent(new l),yield e.focusSearchWhenReady(),e.scrollHighlightedIntoView())})()}closePanel(e){var t=this;return S(function*(){var n;if(!t.open||t.closing)return;let r=new te(e);t.dispatchEvent(r),!r.defaultPrevented&&(t.closing=!0,t.open=!1,t.highlightedIndex=-1,t.clearOptionTooltip(),t.teardownDismissListeners(),(n=t.triggerElement)==null||n.focus({preventScroll:!0}),t.clearCloseTimer(),t.closeTimer=window.setTimeout(()=>{t.closing=!1,t.panelAnimated=!1,t.query=``,t.limit=t.normalizedPageSize(),t.closeTimer=null,t.dispatchEvent(new ne)},100))})()}clearCloseTimer(){this.closeTimer!=null&&(window.clearTimeout(this.closeTimer),this.closeTimer=null)}syncPanelPlacement(){var e=this;return S(function*(){if(!e.popupElement||!e.panelElement)return;oe(e.panelElement,e.placement);let t=yield v(e.popupElement,e.placement,300,{requireEvent:!0});oe(e.panelElement,t)})()}attachDismissListeners(){Ce(this),document.addEventListener(`pointerdown`,this.onDocumentPointerDown,!0),document.addEventListener(`keydown`,this.onDocumentKeyDown,!0)}teardownDismissListeners(){_e(this),document.removeEventListener(`pointerdown`,this.onDocumentPointerDown,!0),document.removeEventListener(`keydown`,this.onDocumentKeyDown,!0)}focusSearchWhenReady(){var e=this;return S(function*(){let t=performance.now();for(;e.open&&performance.now()-t<2e3;){let t=e.searchInput;if(t&&getComputedStyle(t).visibility!==`hidden`&&(t.focus({preventScroll:!0}),document.activeElement===t))return;yield new Promise(e=>requestAnimationFrame(()=>e()))}})()}renderPreview(e,t){return e?kc(e)?j`<span class=${t} aria-hidden="true">${s(e)}</span>`:j`<img class=${t} src=${e} alt="" />`:x}usesInlineLabels(){return this.labelMode===`inline`}usesTooltipLabels(){return this.labelMode===`tooltip`}showOptionTooltip(e,t){if(!this.usesTooltipLabels())return;let n=this.tooltipFor!==``;this.tooltipFor=e,this.tooltipContent=t,this.clearTooltipOpenTimer();let r=()=>{this.tooltipOpenTimer=null,this.updateComplete.then(()=>{var e;(e=this.optionTooltip)==null||e.show()})};if(n){r();return}this.tooltipOpenTimer=window.setTimeout(r,280)}clearOptionTooltip(){var e;this.clearTooltipOpenTimer(),this.tooltipFor=``,this.tooltipContent=``,(e=this.optionTooltip)==null||e.hide()}clearTooltipOpenTimer(){this.tooltipOpenTimer!=null&&(window.clearTimeout(this.tooltipOpenTimer),this.tooltipOpenTimer=null)}handleOptionPointerEnter(e,t){this.highlightedIndex=e,this.showOptionTooltip(this.optionId(e),t)}resetHighlightToSelected(){let e=this.flatVisibleItems();if(e.length===0){this.highlightedIndex=-1;return}let t=e.findIndex(e=>e.value===this.value);this.highlightedIndex=t}renderTriggerContents(){let e=this.triggerDisplay();return j`
            <span class="trigger-main">
                ${this.renderPreview(e.preview,`trigger-preview`)}
                <span
                    class=${D({"trigger-label":!0,"is-placeholder":e.isPlaceholder})}
                    aria-hidden="true"
                >${e.label}</span>
            </span>
        `}renderResults(){if(this.loading)return j`
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
            `;let e=this.visibleGroups();if(e.length===0)return j`
                <div
                    id=${this.listboxId}
                    role="listbox"
                    aria-label=${this.ariaLabel||`Options`}
                >
                    <p class="notice" part="empty" role="status">${this.emptyMessage}</p>
                </div>
            `;let t=0;return j`
            <div
                id=${this.listboxId}
                role="listbox"
                aria-label=${this.ariaLabel||`Options`}
            >
                ${e.map((e,n)=>{let r=this.groupHeadingId(n),i=t,a=e.items.map((e,n)=>{let r=i+n;t=r+1;let a=e.value===this.value,o=r===this.highlightedIndex;return j`
                            <button
                                type="button"
                                part="option"
                                id=${this.optionId(r)}
                                class=${D({option:!0,"is-highlighted":o,"is-selected":a})}
                                role="option"
                                tabindex="-1"
                                aria-label=${e.label}
                                aria-selected=${a?`true`:`false`}
                                @click=${()=>this.selectValue(e.value)}
                                @mouseenter=${()=>this.handleOptionPointerEnter(r,e.label)}
                                @mouseleave=${this.handleOptionPointerLeave}
                            >
                                ${this.renderPreview(e.preview,`option-preview`)}
                                ${this.usesInlineLabels()?j`<span class="option-label" aria-hidden="true">${e.label}</span>`:x}
                            </button>
                        `});return j`
                        <div
                            class="group"
                            role=${e.name?`group`:x}
                            aria-labelledby=${e.name?r:x}
                        >
                            ${e.name?j`
                                    <h6 class="group-heading" id=${r}>
                                        <span>${e.name}</span>
                                        ${e.items.length<e.total?j`
                                                <span class="group-heading-count">
                                                    Showing ${e.items.length} of ${e.total}
                                                </span>
                                            `:x}
                                    </h6>
                                `:x}
                            <div class="grid">
                                ${a}
                            </div>
                        </div>
                    `})}
            </div>
        `}render(){var e,t;let n=this.withClear&&this.value!==``&&!this.disabled&&!this.readonly,r=this.open||this.closing,i=this.activeDescendantId();return j`
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
                class=${D({control:!0,"is-disabled":this.disabled||this.readonly,"is-open":this.open})}
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
                ${n?j`
                        <button
                            type="button"
                            part="clear-button"
                            class="clear-button"
                            aria-label="Clear selection"
                            ?disabled=${this.disabled}
                            @click=${this.handleClear}
                        >
                            <span class="clear-button-icon" aria-hidden="true">${s(Dc)}</span>
                        </button>
                    `:x}
                <button
                    type="button"
                    class="expand-button"
                    tabindex="-1"
                    aria-hidden="true"
                    ?disabled=${this.disabled||this.readonly}
                    @click=${this.togglePanel}
                >
                    <span class="expand-button-icon">${s(Ec)}</span>
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
                    class=${D({panel:!0,"pk-popup-content":!0,closing:this.closing})}
                    tabindex="-1"
                    ?hidden=${!r}
                    data-open=${this.panelAnimated&&!this.closing?``:x}
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
                            aria-activedescendant=${i==null?x:i}
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
                    ${this.usesTooltipLabels()&&r?j`
                            <pk-tooltip
                                class="option-tooltip"
                                for=${this.tooltipFor}
                                content=${this.tooltipContent}
                                placement="top"
                                trigger="manual"
                            ></pk-tooltip>
                        `:x}
                </div>
            </pk-popup>
        `}},wc.styles=Tc,wc);T([C({reflect:!0})],X.prototype,`size`,void 0),T([C({reflect:!0})],X.prototype,`mode`,void 0),T([C({reflect:!0})],X.prototype,`width`,void 0),T([C({reflect:!0,attribute:`label-mode`})],X.prototype,`labelMode`,void 0),T([C({type:Boolean,reflect:!0})],X.prototype,`invalid`,void 0),T([C({type:Boolean,reflect:!0})],X.prototype,`readonly`,void 0),T([C()],X.prototype,`value`,void 0),T([C({attribute:`default-value`})],X.prototype,`defaultValue`,void 0),T([C()],X.prototype,`placeholder`,void 0),T([C({attribute:`search-placeholder`})],X.prototype,`searchPlaceholder`,void 0),T([C({attribute:`empty-message`})],X.prototype,`emptyMessage`,void 0),T([C({attribute:`aria-label`})],X.prototype,`ariaLabel`,void 0),T([C({type:Boolean,reflect:!0})],X.prototype,`loading`,void 0),T([C({type:Boolean,reflect:!0,attribute:`with-clear`})],X.prototype,`withClear`,void 0),T([C({attribute:!1})],X.prototype,`items`,void 0),T([C({attribute:!1})],X.prototype,`groups`,void 0),T([C({attribute:`selected-label`})],X.prototype,`selectedLabel`,void 0),T([C({attribute:`selected-preview`})],X.prototype,`selectedPreview`,void 0),T([C({reflect:!0})],X.prototype,`placement`,void 0),T([C({type:Number,attribute:`side-offset`})],X.prototype,`sideOffset`,void 0),T([C({type:Number,attribute:`page-size`})],X.prototype,`pageSize`,void 0),T([C({type:Boolean,reflect:!0})],X.prototype,`open`,void 0),T([w()],X.prototype,`query`,void 0),T([w()],X.prototype,`limit`,void 0),T([w()],X.prototype,`closing`,void 0),T([w()],X.prototype,`panelAnimated`,void 0),T([w()],X.prototype,`highlightedIndex`,void 0),T([w()],X.prototype,`tooltipFor`,void 0),T([w()],X.prototype,`tooltipContent`,void 0),T([A(`.value-input`)],X.prototype,`input`,void 0),T([A(`.trigger`)],X.prototype,`triggerElement`,void 0),T([A(`.control`)],X.prototype,`controlElement`,void 0),T([A(`pk-popup`)],X.prototype,`popupElement`,void 0),T([A(`.panel`)],X.prototype,`panelElement`,void 0),T([A(`.panel-input`)],X.prototype,`searchInput`,void 0),T([A(`.panel-body`)],X.prototype,`panelBody`,void 0),T([A(`.option-tooltip`)],X.prototype,`optionTooltip`,void 0),X=T([k(`pk-image-browser`)],X);function Ac(e,t){if(e.disabled)return;let n=Craft.createElementSelectorModal(`craft\\elements\\Asset`,{criteria:{kind:`image`},multiSelect:!1,closeOtherModals:!1,triggerElement:e,onSelect:function(){var n=S(function*(n){if(n.length&&e.isConnected){e.disabled=!0;try{let{data:r}=yield Craft.sendActionRequest(`POST`,`buttonbox/option-sets/asset-image`,{data:{id:n[0].id}});e.isConnected&&t(r.url)}catch(e){var r;Craft.cp.displayError(((r=e.response)==null||(r=r.data)==null?void 0:r.message)||Craft.t(`buttonbox`,`Image unavailable. Choose an image with a public URL.`))}finally{e.disabled=!1}}});return function(e){return n.apply(this,arguments)}}(),onHide:()=>n.destroy()})}function jc(e){var t,n,r,i,a,o,s,c,l,u,d,f,p,m;let h=e.surface||{};return O(O({},e),{},{visualType:(t=e.visualType)==null?e.imageUrl?`image`:e.icon?`icon`:(n=(r=h.mode)==null?e.surfaceMode:r)==null?e.color?`solid`:``:n:t,surfaceValue:(i=(a=(o=(s=(c=(l=e.surfaceValue)==null?h.value:l)==null?h.from:c)==null?h.radius:s)==null?h.size:o)==null?e.color:a)==null?``:i,surfaceSecondary:(u=(d=(f=e.surfaceSecondary)==null?h.to:f)==null?h.aspectRatio:d)==null?``:u,surfaceAngle:(p=(m=e.surfaceAngle)==null?h.angle:m)==null?135:p})}function Mc(e){let t=String(e||``).replace(/^#/,``);return/^[0-9a-f]{3}$/i.test(t)?`#`+[...t].map(e=>e+e).join(``):/^[0-9a-f]{6}$/i.test(t)?`#`+t:null}function Nc(e){let t=jc(e),n={};for(let e of[`label`,`value`,`description`,`visualType`,`icon`,`imageUrl`,`imageAlt`,`surfaceValue`,`surfaceSecondary`,`surfaceAngle`,`category`,`explanation`]){var r;n[e]=(r=t[e])==null?``:r}return n.default=!!t.default,n.disabled=!!t.disabled,n}var Pc=[`solid`,`split`,`gradient`,`foregroundBackground`];function Fc(e,t){if(e.visualType===t)return{};let n={visualType:t};if(Pc.includes(t)){var r;n.surfaceValue=Pc.includes(e.visualType)&&Mc(e.surfaceValue)?e.surfaceValue:`#64748b`,t!==`solid`&&(n.surfaceSecondary=Pc.includes(e.visualType)&&Mc(e.surfaceSecondary)?e.surfaceSecondary:`#2563eb`),n.surfaceAngle=e.surfaceAngle===``||(r=e.surfaceAngle)==null?135:r}else t===`width`?n.surfaceValue=`50`:t===`text`?n.surfaceValue=`16`:t===`ratio`?n.surfaceValue=`1:1`:t===`shape`&&Object.assign(n,Ic(`square`));return n}function Ic(e){return{square:{surfaceValue:`0`,surfaceSecondary:`1:1`},rounded:{surfaceValue:`8`,surfaceSecondary:``},pill:{surfaceValue:`999`,surfaceSecondary:``},circle:{surfaceValue:`999`,surfaceSecondary:`1:1`}}[e]||{}}function Lc(e){return[`square`,`rounded`,`pill`,`circle`].find(t=>{let n=Ic(t);return String(e.surfaceValue)===n.surfaceValue&&String(e.surfaceSecondary||``)===n.surfaceSecondary})||`custom`}var Z=e=>Craft.t(`buttonbox`,e),Rc=[`image`,`shape`,`split`,`gradient`,`foregroundBackground`],zc=new Map;function Bc(e){if(!zc.has(e)){let t=e===`icon`?Promise.all([Craft.sendActionRequest(`POST`,`app/icon-picker-options`,{data:{search:``}}),Craft.sendActionRequest(`POST`,`buttonbox/option-sets/icons`)]).then(([e,t])=>{let n=document.createElement(`template`);n.innerHTML=e.data.listHtml;let r=[...n.content.querySelectorAll(`button`)].map(e=>({value:e.getAttribute(`title`),label:e.getAttribute(`aria-label`),preview:e.innerHTML}));return[{name:t.data.presetLabel,items:t.data.presetItems},{name:Z(`Custom icons`),items:t.data.items},{name:Z(`Craft icons`),items:r}]}):Craft.sendActionRequest(`POST`,`buttonbox/option-sets/images`).then(({data:e})=>e.groups);zc.set(e,t.catch(t=>{throw zc.delete(e),t}))}return zc.get(e)}var Vc=class{constructor(e,t,n){this.$container=e,this.table=e.find(`[data-bb-table]`)[0],this.$values=e.find(`[data-bb-option-values]`),this.name=e.find(`[data-bb-options-name]`).attr(`name`),this.template=e.find(`[data-bb-row-template]`).html(),this.onChange=n,this.width=!!t.width,this.position=!!(t.position||t.width),this.cells=new Map,this.rows=[],this.table.columns=[{name:`label`,label:Z(`Label`),type:`text`},{name:`value`,label:Z(`Value`),type:`value`},...this.width?[{name:`percentage`,label:Z(`Width (%)`),type:`custom`,thin:!0}]:[],...this.position?[]:[{name:`visual`,label:Z(`Type`),type:`custom`,thin:!0}],{name:`default`,label:Z(`Default`),type:t.multi?`checkbox`:`radio`,allowUnselect:!0}],this.table.newRowDefaults=Nc({}),this.table.modifyRow=e=>({title:String(e.label||Z(`Option`)),tone:e.disabled?`muted`:void 0}),this.table.getRowMenuItems=()=>[{label:Z(`Edit option…`),icon:`gear`,action:`edit`}],this.handleRowMenu=e=>{let t=this.cells.get(e.detail.row._id);t&&e.detail.action===`edit`&&this.openOption(t)},this.table.addEventListener(`pk-row-menu-select`,this.handleRowMenu),this.handleTableChange=e=>{var t;if(e.target===this.table&&Array.isArray((t=e.detail)==null?void 0:t.rows)){if(this.rows=e.detail.rows,this.position&&this.rows.some(e=>e.default&&e.disabled)){this.rows=this.rows.map(e=>e.default?O(O({},e),{},{disabled:!1}):e),this.table.rows=this.rows;for(let e of this.rows){let t=this.cells.get(e._id);t&&this.updateVisual(t,e)}}this.syncCells(),this.changed()}},this.table.addEventListener(`pk-change`,this.handleTableChange),this.replaceRows(t.rows||[])}readRows(){return this.rows.map(e=>{var t;return this.position?O({label:String(e.label||``),value:String(e.value||``),default:!!e.default,disabled:!!e.disabled,explanation:String(e.explanation||``)},this.width?{percentage:(t=e.percentage)==null?``:t}:{}):Nc(e)})}replaceRows(e){if(this.rows.length){let e=this.table,t=e.cloneNode(!1);t.columns=e.columns,t.newRowDefaults=e.newRowDefaults,t.modifyRow=e.modifyRow,t.getRowMenuItems=e.getRowMenuItems,e.removeEventListener(`pk-row-menu-select`,this.handleRowMenu),e.removeEventListener(`pk-change`,this.handleTableChange);for(let e of this.cells.values())this.disposeCell(e);this.cells.clear(),e.replaceWith(t),this.table=t,this.table.addEventListener(`pk-change`,this.handleTableChange),this.table.addEventListener(`pk-row-menu-select`,this.handleRowMenu)}this.rows=e.map(e=>{var t;return O(O(O({},Nc(e)),this.width?{percentage:(t=e.percentage)==null?``:t}:{}),{},{_id:ac()})}),this.table.rows=this.rows,this.syncCells(),this.syncSubmission()}syncCells(){let e=new Set(this.rows.map(e=>e._id));for(let[t,n]of this.cells)e.has(t)||(this.disposeCell(n),this.cells.delete(t));for(let e of this.rows)this.cells.has(e._id)||this.createCell(e)}createCell(e){let t=$(this.template.replaceAll(`__ROW__`,e._id)),n={id:e._id,$visual:t.filter(`[data-bb-visual-cell]`),$visualSettings:t.find(`[data-bb-visual-settings]`),$details:t.filter(`[data-bb-details-content]`),dialog:null,catalogTypes:new Set};n.$controls=n.$visual.add(n.$details),n.$controls.find(`[name], [data-bb-key]`).each((t,n)=>{var r,i;let a=n.dataset.bbKey||((r=n.name.match(/\[([^\]]+)\]$/))==null?void 0:r[1]);n.dataset.bbKey=a,n.removeAttribute(`name`),n.type===`checkbox`||n.localName===`pk-checkbox`?n.checked=!!e[a]:n.value=(i=e[a])==null?``:i}),n.$visual.attr(`slot`,oc(e._id,this.width?`percentage`:`visual`)).appendTo(this.table),this.cells.set(e._id,n),n.$controls.on(`input.buttonbox change.buttonbox`,e=>{let t=e.target;if(t.localName===`pk-checkbox`&&e.type!==`change`)return;let r=this.rows.find(e=>e._id===n.id);if(!r)return;if(t.hasAttribute(`data-bb-direction`)){n.customDirection=t.value===`custom`,n.customDirection?this.updateVisual(n,r):this.writeCell(n,{surfaceAngle:t.value});return}if(t.hasAttribute(`data-bb-shape`)){t.value===`custom`?this.openOption(n):this.writeCell(n,Ic(t.value));return}if(t.dataset.bbRatio){let e={};n.$visual.find(`[data-bb-ratio]`).each((t,n)=>{e[n.dataset.bbRatio]=n.value}),this.writeCell(n,{surfaceValue:`${e.width}:${e.height}`});return}let i=t.dataset.bbKey;if(!i)return;let a=t.localName===`pk-checkbox`?t.checked:t.value;this.writeCell(n,i===`visualType`?Fc(r,a):{[i]:a})}),n.$controls.on(`click.buttonbox`,`[data-bb-swap-colours]`,()=>{let e=this.rows.find(e=>e._id===n.id);e&&this.writeCell(n,{surfaceValue:e.surfaceSecondary,surfaceSecondary:e.surfaceValue})}),n.$controls.on(`click.buttonbox`,`[data-bb-asset-image]`,e=>{Ac(e.currentTarget,e=>{this.cells.has(n.id)&&this.writeCell(n,{imageUrl:e})})}),this.updateVisual(n,e)}populateBrowser(e,t){var n=this;return S(function*(){if(e.catalogTypes.has(t))return;e.catalogTypes.add(t);let r=e.$visual.find(`pk-image-browser[mode="${t}"]`)[0];r.loading=!0;try{let i=yield Bc(t);if(!n.cells.has(e.id))return;r.groups=i.filter(e=>e.items.length),e.$visual.find(`[data-bb-catalog-error]`).prop(`hidden`,!0)}catch(r){e.catalogTypes.delete(t),n.cells.has(e.id)&&e.$visual.find(`[data-bb-catalog-error]`).text(Z(`Gallery unavailable. Change the visual type to retry.`)).prop(`hidden`,!1)}finally{r.loading=!1}})()}writeCell(e,t){this.position&&t.disabled&&(t.default=!1),this.rows=this.rows.map(n=>n._id===e.id?O(O({},n),t):n),this.table.rows=this.rows;let n=this.rows.find(t=>t._id===e.id);n&&this.updateVisual(e,n),this.changed()}updateVisual(e,t){let n=t.visualType||``;e.$visualSettings.prop(`hidden`,!Rc.includes(n)),e.$controls.find(`[data-bb-visual]`).each((e,t)=>{t.hidden=!t.dataset.bbVisual.split(` `).includes(n)}),e.$controls.find(`[data-bb-key]`).each((e,n)=>{var r;let i=(r=t[n.dataset.bbKey])==null?``:r;n.localName===`pk-checkbox`?n.checked=!!i:String(n.value)!==String(i)&&(n.value=String(i))});let r=Number(t.surfaceAngle),i=e.customDirection||![0,45,90,135,180,225,270,315].includes(r),a=e.$visualSettings.find(`[data-bb-direction]`)[0];a&&(a.value=i?`custom`:String(r)),e.$visualSettings.find(`[data-bb-custom-angle]`).prop(`hidden`,!i),e.$details.find(`[data-bb-disabled-details]`).prop(`hidden`,!t.disabled),e.$controls.find(`pk-input, pk-color-input, pk-select, pk-image-browser`).each((e,t)=>{t.disabled=!!t.closest(`[data-bb-visual][hidden], [data-bb-disabled-details][hidden], [data-bb-custom-angle][hidden]`)});let o=String(t.surfaceValue||``).split(`:`);e.$visual.find(`[data-bb-ratio]`).each((e,t)=>{t.value=o[e]||``});let s=e.$visual.find(`[data-bb-shape]`)[0];s&&(s.value=Lc(t));let c=n===`foregroundBackground`;if(e.$visual.find(`pk-color-input[data-bb-key=surfaceValue]`).attr(`aria-label`,Z(c?`Foreground colour`:`Colour`)),e.$visual.find(`pk-color-input[data-bb-key=surfaceSecondary]`).attr(`aria-label`,Z(c?`Background colour`:`Second colour`)),n===`icon`||n===`image`){let r=e.$visual.find(`pk-image-browser[mode="${n}"]`)[0];r.selectedLabel=String(n===`icon`?t.icon||``:t.label||Z(`Image`)),r.selectedPreview=n===`image`&&/^(https?:|\/)/.test(t.imageUrl||``)?t.imageUrl:``,this.populateBrowser(e,n)}}openOption(e){var t=this;return S(function*(){if(!e.dialog){let t=document.createElement(`pk-dialog`);t.className=`buttonbox-option-dialog`;let n=document.createElement(`button`);n.type=`button`,n.className=`btn submit`,n.slot=`footer`,n.textContent=Craft.t(`app`,`Done`),n.addEventListener(`click`,()=>t.hide(`api`)),t.append(e.$details[0],n),document.body.append(t),e.dialog=t}let n=e.dialog,r=t.rows.find(t=>t._id===e.id);n.label=Z(`Edit option: {label}`).replace(`{label}`,(r==null?void 0:r.label)||Z(`Option`)),yield n.updateComplete,n.isConnected&&!n.open&&(yield n.show())})()}syncSubmission(){let e=document.createDocumentFragment();this.readRows().forEach((t,n)=>{Object.entries(t).forEach(([t,r])=>{let i=document.createElement(`input`);i.type=`hidden`,i.name=`${this.name}[${n}][${t}]`,i.value=typeof r==`boolean`?r?`1`:``:String(r==null?``:r),e.append(i)})}),this.$values.empty().append(e)}changed(){this.syncSubmission(),this.onChange()}disposeCell(e){var t;(t=e.dialog)==null||t.remove(),e.$controls.off(`.buttonbox`),e.$controls.remove()}destroy(){this.table.removeEventListener(`pk-row-menu-select`,this.handleRowMenu),this.table.removeEventListener(`pk-change`,this.handleTableChange);for(let e of this.cells.values())this.disposeCell(e);this.cells.clear()}};Craft.ButtonBoxVisualSettings=Garnish.Base.extend({init:function(e){if(this.$container=$(`#`+e),!this.$container.length||this.$container.data(`buttonboxSettings`))return;this.$container.data(`buttonboxSettings`,this);let t=Re(this.$container);this.config=this.$container.data(`config`),this.request=0,this.previewSelection={},this.timer=null,this.presetDialog=null,this.applyingPreset=!1,this.$container.find(`[data-bb-action="customise-set"]`).length&&this.addListener($(document),`buttonboxOptionSetSaved`,e=>this.refreshSet(e.optionSet)),this.addListener(this.$container,`click`,e=>this.handleClick(e)),this.addListener(this.$container,`change input`,e=>this.handleChange(e)),this.initAppearance(),this.optionTable=new Vc(this.$container,this.config,()=>this.schedulePreview()),this.updateSource(),this.updatePresentation(),this.schedulePreview(),t(),this.observer=new MutationObserver(()=>{this.$container[0].isConnected||this.destroy()}),this.observer.observe(document.body,{childList:!0,subtree:!0})},source:function(){return this.$container.find(`select[name$="[optionSource]"], select[name="optionSource"]`).val()||`local`},presentation:function(){return this.$container.find(`input[name$="[presentation]"]:checked, input[name="presentation"]:checked`).val()||`segmented`},control:function(e){return this.$container.find(`[name="`+e+`"], [name$="[`+e+`]"]`)},readRows:function(){return this.optionTable.readRows()},replaceRows:function(e){this.optionTable.replaceRows(e)},updateSource:function(){var e;let t=this.source();this.$container.find(`[data-source]`).each((e,n)=>{n.hidden=n.dataset.source!==t});let n=this.control(`projectSet`).val(),r=!!this.config.sets[n],i=r&&this.config.canManageSets&&((e=this.config.editableSetUids)==null?void 0:e.includes(n));this.$container.find(`[data-bb-set-customise]`).toggleClass(`hidden`,!r),this.$container.find(`[data-bb-action="edit-set"]`).prop(`disabled`,!i).toggleClass(`hidden`,!i)},openSet:function(e,t){if(!this.config.canManageSets||e&&!this.config.editableSetUids.includes(e)||this.setSlideout)return;let n=new Craft.CpScreenSlideout(`buttonbox/option-sets/edit`,{params:e?{uid:e}:{}});this.setSlideout=n,n.on(`submit`,e=>{var t;let n=(t=e.response)==null||(t=t.data)==null?void 0:t.optionSet;n!=null&&n.uid&&($(document).trigger({type:`buttonboxOptionSetSaved`,optionSet:n}),this.control(`projectSet`).val(n.uid).trigger(`change`))}),n.on(`close`,()=>{this.setSlideout=null,t.isConnected&&t.focus()})},refreshSet:function(e){this.config.sets[e.uid]=e,this.config.editableSetUids.includes(e.uid)||this.config.editableSetUids.push(e.uid);let t=this.control(`projectSet`)[0],n=[...t.options].find(t=>t.value===e.uid);n||(n=document.createElement(`option`),n.value=e.uid,t.append(n)),n.textContent=e.label,this.updateSource(),this.schedulePreview()},customiseSet:function(){let e=this.config.sets[this.control(`projectSet`).val()];e&&(this.replaceRows(e.options),this.control(`optionSource`).val(`local`),this.control(`projectSet`).val(``),this.control(`optionSource`).trigger(`change`),this.control(`optionSource`).trigger(`focus`))},updatePresentation:function(){this.$container.find(`[data-bb-columns]`).prop(`hidden`,![`tile`,`card`].includes(this.presentation()))},initAppearance:function(){this.appearanceTable=this.$container.find(`[data-bb-appearance-table]`)[0],this.appearanceTable.allowAdd=!1,this.appearanceTable.allowInsert=!1,this.appearanceTable.allowDelete=!1,this.appearanceTable.allowReorder=!1,this.appearanceTable.columns=[{name:`label`,label:Craft.t(`buttonbox`,`Setting`),type:`custom`,thin:!0},{name:`control`,label:Craft.t(`buttonbox`,`Value`),type:`custom`}],this.appearanceRows=[...this.appearanceTable.querySelectorAll(`[data-bb-appearance-row]`)].map(e=>{let t={_id:e.dataset.bbAppearanceRow,group:e.dataset.bbAppearanceGroup};for(let n of[`label`,`control`]){let r=e.querySelector(`[data-bb-appearance-`+n+`]`);r.slot=oc(t._id,n),this.appearanceTable.append(r),n===`control`&&this.addListener($(r),`input change`,()=>this.schedulePreview())}return e.remove(),t})},updateAppearance:function(){var e;let t=this.source(),n=t===`projectSet`?((e=this.config.sets[this.control(`projectSet`).val()])==null?void 0:e.options)||[]:this.readRows(),r=t===`provider`||n.some(e=>e.visualType===`image`||!e.visualType&&e.imageUrl),i=this.presentation()===`dropdown`,a=this.appearanceRows.filter(e=>i&&[`showLabels`,`labelTooltips`,`showClearButton`,`imageSize`,`imageFit`].includes(e._id)&&this.appearanceTable.dataset.appearanceErrors!==`1`&&this.appearanceTable.dataset.imageErrors!==`1`?!1:e.group!==`image`||r||this.appearanceTable.dataset.imageErrors===`1`),o=a.map(e=>e._id).join(`,`);o!==this.appearanceRowKeys&&(this.appearanceTable.rows=a,this.appearanceRowKeys=o),this.$container.find(`[data-bb-appearance]`).prop(`hidden`,a.length===0),this.updateAppearanceSummary(r)},updateAppearanceSummary:function(e){var t;let n=this.$container.find(`[data-bb-appearance-summary]`)[0],r=JSON.parse(n.dataset.labels),i=this.appearance(),a=[];if(this.presentation()!==`dropdown`&&i.showLabels===`0`&&a.push(r.labels),this.presentation()!==`dropdown`&&i.labelTooltips===`1`&&a.push(r.tooltips),this.presentation()!==`dropdown`&&(t=this.$container.find(`[data-bb-show-clear]`)[0])!=null&&t.checked&&a.push(r.clearButton),i.size&&i.size!=="default"){let e=[...this.$container.find(`[data-bb-appearance-key="size"] pk-option`)].find(e=>e.value===i.size);e&&a.push(e.textContent.trim())}[`textColor`,`backgroundColor`,`borderColor`,`selectionColor`].some(e=>i[e])&&a.push(r.colours),[`borderWidth`,`radius`].some(e=>i[e]!==``)&&a.push(r.borders),this.presentation()!==`dropdown`&&e&&(this.control(`imageSize`).val()!==`auto`||this.control(`imageFit`).val()!==`cover`)&&a.push(r.images),n.textContent=a.length?a.join(` · `):r.default},appearance:function(){let e={};return this.$container.find(`[data-bb-appearance-key]`).each((t,n)=>{e[n.dataset.bbAppearanceKey]=n.localName===`pk-lightswitch`?n.checked?`1`:`0`:n.value}),e},setPresentation:function(e){this.control(`presentation`).each((t,n)=>{n.checked=n.value===e}),this.updatePresentation()},openPresets:S(function*(){var e=this;if(!this.presetDialog){let t=$(this.$container.find(`[data-bb-presets-template]`).html()).appendTo(document.body);t.find(`.buttonbox-preset-card__preview input`).remove(),this.presetDialog=t[0],this.addListener(t.find(`[data-bb-choose-preset]`),`click`,function(){var t=S(function*(t){let n=e.config.presets[$(t.currentTarget).attr(`data-bb-choose-preset`)];if(n&&!e.applyingPreset){e.applyingPreset=!0;try{e.replaceRows(n.options),e.setPresentation(n.presentation),Ie(e.$container[0],n,[`columns`,`iconSize`,`imageSize`,`imageFit`]),e.schedulePreview(),yield e.presetDialog.hide(`api`)}finally{e.applyingPreset=!1}}});return function(e){return t.apply(this,arguments)}}())}let t=this.readRows().length===0;$(this.presetDialog).find(`[data-bb-preset-help="empty"]`).toggle(t),$(this.presetDialog).find(`[data-bb-preset-help="filled"]`).toggle(!t),yield this.presetDialog.updateComplete,this.presetDialog.isConnected&&(yield this.presetDialog.show())}),handleChange:function(e){$(e.target).closest(`[data-bb-preview]`).length||(this.updateSource(),this.updatePresentation(),this.schedulePreview())},handleClick:function(e){let t=$(e.target).closest(`[data-bb-reset-appearance]`);if(t.length){let e=t.attr(`data-bb-reset-appearance`);this.$container.find(`[data-bb-appearance-key="`+e+`"]`).val(``),this.schedulePreview();return}let n=$(e.target).closest(`[data-bb-action]`);if(!n.length)return;e.preventDefault();let r=n.data(`bb-action`);if(r===`customise-set`){this.customiseSet();return}if(r===`new-set`||r===`edit-set`){this.openSet(r===`edit-set`?this.control(`projectSet`).val():null,n[0]);return}if(r===`presets`){this.openPresets();return}this.schedulePreview()},status:function(e){this.$container.find(`[data-bb-status]`).text(Craft.t(`buttonbox`,e))},schedulePreview:function(){clearTimeout(this.timer),this.updateAppearance(),Le(this.$container);let e=++this.request;this.timer=setTimeout(()=>this.updatePreview(e),250)},updatePreview:function(){var e=S(function*(e){var t;if(!this.$container[0].isConnected)return;let n=this.$container.find(`[data-bb-preview]`);if(this.source()===`provider`){n.empty(),this.status(`Dynamic options are available when editing an entry.`);return}let r=this.source()===`projectSet`?((t=this.config.sets[this.control(`projectSet`).val()])==null?void 0:t.options)||[]:this.readRows();if(!r.length){n.empty(),this.status(this.source()===`projectSet`?`Choose an option set to preview it.`:`Add an option to preview this field.`);return}try{var i;let t=yield Craft.sendActionRequest(`POST`,`buttonbox/option-sets/preview`,{data:{options:r,presentation:this.presentation(),columns:this.control(`columns`).val(),appearance:this.appearance(),showClearButton:(i=this.$container.find(`[data-bb-show-clear]`)[0])!=null&&i.checked?1:0,imageSize:this.control(`imageSize`).val(),imageFit:this.control(`imageFit`).val(),multi:+!!this.config.multi}});if(e!==this.request||!this.$container[0].isConnected)return;n.html(t.data.html),n.find(`input`).removeAttr(`name`).on(`change`,e=>{let t=$(e.target);this.config.multi||n.find(`input`).not(t).prop(`checked`,!1),n.find(`input`).each((e,t)=>$(t).closest(`.buttonbox-visual__option`).toggleClass(`is-selected`,t.checked))}),Be(n,this.previewSelection),this.$container.find(`[data-bb-status]`).text(t.data.errors.join(` `))}catch(t){e===this.request&&this.status(`Preview unavailable. Your options have been preserved.`)}});return function(t){return e.apply(this,arguments)}}(),destroy:function(){var e,t,n;clearTimeout(this.timer),this.request++,(e=this.observer)==null||e.disconnect(),(t=this.presetDialog)==null||t.remove(),(n=this.setSlideout)==null||n.close(),this.optionTable.destroy(),this.$container.removeData(`buttonboxSettings`),this.base()}}),Craft.ButtonBoxPositionSettings=Garnish.Base.extend({init:function(e){if(this.$container=$(`#`+e),!this.$container.length||this.$container.data(`buttonboxPositionSettings`))return;this.$container.data(`buttonboxPositionSettings`,this);let t=Re(this.$container);this.config=this.$container.data(`config`),this.request=0,this.previewSelection={},this.initAppearance(),this.optionTable=new Vc(this.$container,this.config,()=>this.schedulePreview()),this.addListener(this.$container.find(`[data-bb-presets]`),`click`,()=>this.openPresets()),this.addListener(this.$container.find(`[data-bb-reset-appearance]`),`click`,e=>{let t=$(e.currentTarget).attr(`data-bb-reset-appearance`);this.$container.find(`[data-bb-appearance-key="`+t+`"]`).val(``),this.schedulePreview()}),this.addListener(this.$container,`input change`,e=>{$(e.target).closest(`[data-bb-preview]`).length||this.schedulePreview()}),this.observer=new MutationObserver(()=>{this.$container[0].isConnected||this.destroy()}),this.observer.observe(document.body,{childList:!0,subtree:!0}),this.schedulePreview(),t()},control:function(e){return this.$container.find(`[name="`+e+`"], [name$="[`+e+`]"]`)},mode:function(){return this.control(`mode`).filter(`:checked`).val()||`grid`},initAppearance:function(){let e=this.$container.find(`[data-bb-appearance-table]`)[0];e.allowAdd=!1,e.allowInsert=!1,e.allowDelete=!1,e.allowReorder=!1,e.columns=[{name:`label`,label:Craft.t(`buttonbox`,`Setting`),type:`custom`,thin:!0},{name:`control`,label:Craft.t(`buttonbox`,`Value`),type:`custom`}],e.rows=[...e.querySelectorAll(`[data-bb-appearance-row]`)].map(t=>{let n={_id:t.dataset.bbAppearanceRow};for(let r of[`label`,`control`]){let i=t.querySelector(`[data-bb-appearance-`+r+`]`);i.slot=oc(n._id,r),e.append(i),r===`control`&&this.addListener($(i),`input change`,()=>this.schedulePreview())}return t.remove(),n})},appearance:function(){let e={};return this.$container.find(`[data-bb-appearance-key]`).each((t,n)=>{e[n.dataset.bbAppearanceKey]=n.value}),e},updateAppearanceSummary:function(){let e=this.$container.find(`[data-bb-appearance-summary]`)[0],t=JSON.parse(e.dataset.labels),n=this.appearance(),r=[];if(this.$container.find(`[data-bb-show-tooltips]`)[0].checked||r.push(t.tooltipsOff),this.showClearButton()&&r.push(t.clearButton),n.size&&n.size!=="default"){let e=[...this.$container.find(`[data-bb-appearance-key="size"] pk-option`)].find(e=>e.value===n.size);e&&r.push(e.textContent.trim())}[`textColor`,`backgroundColor`,`selectionColor`].some(e=>n[e])&&r.push(t.colours),e.textContent=r.length?r.join(` · `):t.default},openPresets:S(function*(){var e=this;if(!this.presetDialog){let t=$(this.$container.find(`[data-bb-presets-template]`).html()).appendTo(document.body);t.find(`.buttonbox-preset-card__preview input`).remove(),this.presetDialog=t[0],this.addListener(t.find(`[data-bb-choose-preset]`),`click`,function(){var t=S(function*(t){let n=e.config.presets[$(t.currentTarget).attr(`data-bb-choose-preset`)];if(n&&!e.applyingPreset){e.applyingPreset=!0;try{e.applyPreset(n),e.schedulePreview(),yield e.presetDialog.hide(`api`)}finally{e.applyingPreset=!1}}});return function(e){return t.apply(this,arguments)}}())}let t=this.optionTable.readRows().length===0;$(this.presetDialog).find(`[data-bb-preset-help="empty"]`).toggle(t),$(this.presetDialog).find(`[data-bb-preset-help="filled"]`).toggle(!t),yield this.presetDialog.updateComplete,this.presetDialog.isConnected&&(yield this.presetDialog.show())}),applyPreset:function(e){this.optionTable.replaceRows(e.options),this.control(`mode`).each((t,n)=>{n.checked=n.value===e.mode}),this.control(`columns`).val(e.columns),Ie(this.$container[0],e,[`showTooltips`])},previewData:function(e){return{options:e,mode:this.mode(),columns:this.control(`columns`).val(),showTooltips:this.$container.find(`[data-bb-show-tooltips]`)[0].checked,showClearButton:this.showClearButton(),appearance:this.appearance()}},showClearButton:function(){var e;return!!((e=this.$container.find(`[data-bb-show-clear]`)[0])!=null&&e.checked)},previewAction:`buttonbox/position/preview`,schedulePreview:function(){clearTimeout(this.timer),this.updateAppearanceSummary();let e=this.mode()===`grid`;this.$container.find(`[data-bb-columns]`).prop(`hidden`,!e),this.control(`columns`).prop(`disabled`,!e),Le(this.$container);let t=++this.request;this.timer=setTimeout(()=>this.updatePreview(t),250)},updatePreview:function(){var e=S(function*(e){if(!this.$container[0].isConnected)return;let t=this.$container.find(`[data-bb-preview]`),n=this.$container.find(`[data-bb-status]`),r=this.optionTable.readRows();if(!r.length){t.empty(),n.text(Craft.t(`buttonbox`,`Add an option to preview this field.`));return}try{let i=yield Craft.sendActionRequest(`POST`,this.previewAction,{data:this.previewData(r)});if(e!==this.request||!this.$container[0].isConnected)return;t.html(i.data.html),t.find(`input[type=hidden]`).remove(),t.find(`input`).removeAttr(`name`),Be(t,this.previewSelection),n.text(i.data.errors.join(` `))}catch(r){e===this.request&&(t.empty(),n.text(Craft.t(`buttonbox`,`Preview unavailable. Your options have been preserved.`)))}});return function(t){return e.apply(this,arguments)}}(),destroy:function(){var e,t;clearTimeout(this.timer),this.request++,(e=this.observer)==null||e.disconnect(),(t=this.presetDialog)==null||t.remove(),this.optionTable.destroy(),this.$container.removeData(`buttonboxPositionSettings`),this.base()}}),Craft.ButtonBoxWidthSettings=Craft.ButtonBoxPositionSettings.extend({previewAction:`buttonbox/width/preview`,applyPreset:function(e){this.optionTable.replaceRows(e.options),this.control(`displayStyle`).each((t,n)=>{n.checked=n.value===e.displayStyle}),Ie(this.$container[0],e,[`labelDisplay`,`showTooltips`])},previewData:function(e){return{options:e,displayStyle:this.control(`displayStyle`).filter(`:checked`).val(),labelDisplay:this.control(`labelDisplay`).val(),showTooltips:this.$container.find(`[data-bb-show-tooltips]`)[0].checked,showClearButton:this.showClearButton(),appearance:this.appearance()}},updateAppearanceSummary:function(){let e=this.$container.find(`[data-bb-appearance-summary]`)[0],t=JSON.parse(e.dataset.labels),n=this.appearance(),r=[],i=this.control(`labelDisplay`).val();i!==`selected`&&r.push(t[i]),this.$container.find(`[data-bb-show-tooltips]`)[0].checked||r.push(t.tooltipsOff),this.showClearButton()&&r.push(t.clearButton),n.size&&n.size!=="default"&&r.push(n.size.toUpperCase()),[`textColor`,`backgroundColor`,`fillColor`,`selectionColor`,`borderColor`].some(e=>n[e])&&r.push(t.colours),(n.borderWidth!==``||n.radius!==``)&&r.push(t.borders),e.textContent=r.length?r.join(` · `):t.default}}),Craft.ButtonBoxRatingSettings=Garnish.Base.extend({init:function(e){if(this.$container=$(`#`+e),!this.$container.length||this.$container.data(`buttonboxRatingSettings`))return;this.$container.data(`buttonboxRatingSettings`,this);let t=Re(this.$container);this.config=this.$container.data(`config`),this.request=0,this.previewSelection={},this.initAppearance(),this.addListener(this.$container.find(`[data-bb-presets]`),`click`,()=>this.openPresets()),this.addListener(this.$container,`input change`,e=>{$(e.target).closest(`[data-bb-preview]`).length||this.schedulePreview()}),this.observer=new MutationObserver(()=>{this.$container[0].isConnected||this.destroy()}),this.observer.observe(document.body,{childList:!0,subtree:!0}),this.schedulePreview(),t()},control:function(e){return this.$container.find(`[name="`+e+`"], [name$="[`+e+`]"]`)},initAppearance:function(){let e=this.$container.find(`[data-bb-appearance-table]`)[0];e.allowAdd=!1,e.allowInsert=!1,e.allowDelete=!1,e.allowReorder=!1,e.columns=[{name:`label`,label:Craft.t(`buttonbox`,`Setting`),type:`custom`,thin:!0},{name:`control`,label:Craft.t(`buttonbox`,`Value`),type:`custom`}],e.rows=[...e.querySelectorAll(`[data-bb-appearance-row]`)].map(t=>{let n={_id:t.dataset.bbAppearanceRow};for(let r of[`label`,`control`]){let i=t.querySelector(`[data-bb-appearance-`+r+`]`);i.slot=oc(n._id,r),e.append(i),r===`control`&&this.addListener($(i),`input change`,()=>this.schedulePreview())}return t.remove(),n})},updateAppearanceSummary:function(){var e,t;let n=this.$container.find(`[data-bb-appearance-summary]`)[0],r=JSON.parse(n.dataset.labels),i=this.control(`symbol`).val(),a=this.config.ratingDefaults[i],o=[r[i]||i];(e=this.$container.find(`[data-bb-show-labels]`)[0])!=null&&e.checked&&o.push(r.numeric),(t=this.$container.find(`[data-bb-show-clear]`)[0])!=null&&t.checked&&o.push(r.clearButton),a&&[`activeColor`,`inactiveColor`].some(e=>String(this.control(e).val()).toLowerCase()!==a[e])&&o.push(r.colours),n.textContent=o.join(` · `)},openPresets:S(function*(){var e=this;if(!this.presetDialog){let t=$(this.$container.find(`[data-bb-presets-template]`).html()).appendTo(document.body);t.find(`.buttonbox-preset-card__preview input`).remove(),t.find(`[data-bb-preset-help="empty"]`).remove(),this.presetDialog=t[0],this.addListener(t.find(`[data-bb-choose-preset]`),`click`,function(){var t=S(function*(t){let n=e.config.presets[$(t.currentTarget).attr(`data-bb-choose-preset`)];if(n&&!e.applyingPreset){e.applyingPreset=!0;try{for(let t of[`symbol`,`activeColor`,`inactiveColor`])e.control(t).val(n[t]);e.schedulePreview(),yield e.presetDialog.hide(`api`)}finally{e.applyingPreset=!1}}});return function(e){return t.apply(this,arguments)}}())}yield this.presetDialog.updateComplete,this.presetDialog.isConnected&&(yield this.presetDialog.show())}),schedulePreview:function(){clearTimeout(this.timer),this.updateAppearanceSummary(),this.control(`defaultValue`).attr(`max`,this.control(`max`).val()),Le(this.$container);let e=++this.request;this.timer=setTimeout(()=>this.updatePreview(e),250)},updatePreview:function(){var e=S(function*(e){var t;if(!this.$container[0].isConnected)return;let n=this.$container.find(`[data-bb-preview]`),r=this.$container.find(`[data-bb-status]`),i={};for(let e of[`max`,`defaultValue`,`symbol`,`activeColor`,`inactiveColor`,`showLabels`]){var a;i[e]=e===`showLabels`?!!((a=this.$container.find(`[data-bb-show-labels]`)[0])!=null&&a.checked):this.control(e).val()}i.showClearButton=!!((t=this.$container.find(`[data-bb-show-clear]`)[0])!=null&&t.checked),this.config.presetEditor&&Object.assign(i,{max:5,defaultValue:3,showClearButton:!1,showLabels:!1});try{let t=yield Craft.sendActionRequest(`POST`,`buttonbox/rating/preview`,{data:i});if(e!==this.request||!this.$container[0].isConnected)return;n.html(t.data.html),n.find(`input`).attr(`form`,this.$container.attr(`id`)+`-preview-form`),Be(n,this.previewSelection),r.text(t.data.errors.join(` `))}catch(t){e===this.request&&this.$container[0].isConnected&&(n.empty(),r.text(Craft.t(`buttonbox`,`Preview unavailable. Your settings have been preserved.`)))}});return function(t){return e.apply(this,arguments)}}(),destroy:function(){var e,t;clearTimeout(this.timer),this.request++,(e=this.observer)==null||e.disconnect(),(t=this.presetDialog)==null||t.remove(),this.$container.removeData(`buttonboxRatingSettings`),this.base()}});var Q=e=>Craft.t(`buttonbox`,e),Hc={label:``,urlType:`url`,url:``,icon:``,imageUrl:``,imageAlt:``,iconPosition:`start`,style:`default`,newWindow:!1};Craft.ButtonBoxActionSettings=Garnish.Base.extend({init:function(e){if(this.$container=$(`#`+e),!this.$container.length||this.$container.data(`buttonboxActions`))return;this.$container.data(`buttonboxActions`,this);let t=Re(this.$container);this.name=this.$container.find(`[data-actions-name]`).attr(`name`),this.table=this.$container.find(`[data-actions-table]`)[0],this.template=this.$container.find(`[data-actions-row]`).html(),this.cells=new Map,this.request=0,this.table.columns=[{name:`label`,label:Q(`Label`),type:`text`},{name:`url`,label:Q(`URL`),type:`text`},{name:`visual`,label:Q(`Visual`),type:`custom`,thin:!0},{name:`style`,label:Q(`Style`),type:`custom`,thin:!0}],this.table.newRowDefaults=O(O({},Hc),{},{visualType:`none`}),this.table.modifyRow=e=>({title:String(e.label||Q(`Action`))}),this.table.getRowMenuItems=()=>[{label:Q(`Edit action…`),icon:`gear`,action:`edit`}],this.handleMenu=e=>{e.detail.action===`edit`&&this.openDetails(e.detail.row._id)},this.handleRows=e=>{var t;e.target===this.table&&Array.isArray((t=e.detail)==null?void 0:t.rows)&&(this.rows=e.detail.rows,this.syncCells(),this.changed())},this.table.addEventListener(`pk-change`,this.handleRows),this.table.addEventListener(`pk-row-menu-select`,this.handleMenu),this.rows=(this.$container.data(`config`).rows||[]).map(e=>{var t;return O(O(O({},Hc),e),{},{storedUrl:e.url,url:(t=e.displayUrl)==null?e.url:t,visualType:e.imageUrl?`image`:e.icon?`icon`:`none`,_id:ac()})}),this.table.rows=this.rows,this.initAppearance(),this.syncCells(),this.changed(),t(),this.observer=new MutationObserver(()=>{this.$container[0].isConnected||this.destroy()}),this.observer.observe(document.body,{childList:!0,subtree:!0})},initAppearance:function(){let e=this.$container.find(`[data-actions-appearance]`)[0];e.allowAdd=e.allowInsert=e.allowDelete=e.allowReorder=!1,e.columns=[{name:`label`,label:Q(`Setting`),type:`custom`,thin:!0},{name:`control`,label:Q(`Value`),type:`custom`}],e.rows=[...e.querySelectorAll(`[data-appearance-row]`)].map(t=>{let n={_id:t.dataset.appearanceRow};for(let r of[`label`,`control`]){let i=t.querySelector(`[data-appearance-`+r+`]`);i.slot=oc(n._id,r),e.append(i),r===`control`&&this.addListener($(i),`input change`,()=>this.schedulePreview())}return t.remove(),n})},updateAppearanceSummary:function(){let e=this.$container.find(`[data-actions-appearance-summary]`)[0],t={size:`default`,alignment:`start`,spacing:`normal`},n=[];this.$container.find(`[data-action-appearance]`).each((e,r)=>{if(r.value===t[r.dataset.actionAppearance])return;let i=[...r.querySelectorAll(`pk-option`)].find(e=>e.value===r.value);i&&n.push(i.textContent.trim())}),e.textContent=n.length?n.join(` · `):e.dataset.default},syncCells:function(){for(let[t,n]of this.cells)if(!this.rows.some(e=>e._id===t)){var e;(e=n.dialog)==null||e.remove(),n.$parts.off(`.actions`).remove(),this.cells.delete(t)}for(let e of this.rows){let t=this.cells.get(e._id);if(!t){let n=$(this.template);t={id:e._id,$parts:n,loaded:new Set},this.cells.set(e._id,t),n.filter(`[data-action-cell]`).each((t,n)=>{n.slot=oc(e._id,n.dataset.actionCell),this.table.append(n)}),n.on(`click.actions`,`[data-action-asset-image]`,e=>{Ac(e.currentTarget,e=>{this.cells.has(t.id)&&(this.rows=this.rows.map(n=>n._id===t.id?O(O({},n),{},{imageUrl:e}):n),this.table.rows=this.rows,this.updateCell(t,this.rows.find(e=>e._id===t.id)),this.changed())})}),n.on(`input.actions change.actions`,e=>{let n=e.target,r=n.dataset.actionKey;if(!r||n.localName===`pk-checkbox`&&e.type!==`change`)return;let i=n.localName===`pk-checkbox`?n.checked:n.value;this.rows=this.rows.map(e=>e._id===t.id?O(O({},e),{},{[r]:i}):e),this.table.rows=this.rows,this.updateCell(t,this.rows.find(e=>e._id===t.id)),this.changed()})}this.updateCell(t,e)}},updateCell:function(e,t){e.$parts.find(`[data-action-key]`).each((e,n)=>{var r;n.localName===`pk-checkbox`?n.checked=!!t[n.dataset.actionKey]:n.value=String((r=t[n.dataset.actionKey])==null?``:r)}),e.$parts.find(`pk-image-browser`).each((n,r)=>{r.hidden=t.visualType!==r.mode,r.disabled=r.hidden,r.hidden||this.populateBrowser(e,r)}),e.$parts.find(`[data-action-asset-image]`).prop(`hidden`,t.visualType!==`image`),e.$parts.find(`[data-image-alt]`).prop(`hidden`,t.visualType!==`image`)},populateBrowser:function(){var e=S(function*(e,t){if(!e.loaded.has(t.mode)){e.loaded.add(t.mode),t.loading=!0;try{let n=yield Bc(t.mode);if(!this.cells.has(e.id))return;t.groups=n.filter(e=>e.items.length),e.$parts.find(`[data-gallery-error]`).prop(`hidden`,!0)}catch(n){e.loaded.delete(t.mode),e.$parts.find(`[data-gallery-error]`).text(Q(`Gallery unavailable. Change the visual type to retry.`)).prop(`hidden`,!1)}finally{t.loading=!1}}});return function(t,n){return e.apply(this,arguments)}}(),openDetails:function(){var e=S(function*(e){var t;let n=this.cells.get(e);if(n){if(!n.dialog){let e=document.createElement(`pk-dialog`);e.className=`buttonbox-option-dialog`;let t=document.createElement(`pk-button`);t.variant=`primary`,t.type=`button`,t.slot=`footer`,t.textContent=Craft.t(`app`,`Done`),t.addEventListener(`click`,()=>e.hide(`api`)),e.append(n.$parts.filter(`[data-action-details]`)[0],t),document.body.append(e),n.dialog=e}n.dialog.label=Q(`Edit action: {label}`).replace(`{label}`,((t=this.rows.find(t=>t._id===e))==null?void 0:t.label)||Q(`Action`)),yield n.dialog.updateComplete,n.dialog.isConnected&&(yield n.dialog.show())}});return function(t){return e.apply(this,arguments)}}(),readRows:function(){return this.rows.map(e=>{let t=Object.fromEntries(Object.keys(Hc).map(t=>{var n;return[t,t===`icon`&&e.visualType!==`icon`||t===`imageUrl`&&e.visualType!==`image`?``:(n=e[t])==null?Hc[t]:n]}));return e.url===e.displayUrl?t.url=e.storedUrl:t.urlType=`url`,t})},changed:function(){let e=document.createDocumentFragment();this.readRows().forEach((t,n)=>{for(let[r,i]of Object.entries(t)){let t=document.createElement(`input`);t.type=`hidden`,t.name=`${this.name}[${n}][${r}]`,t.value=typeof i==`boolean`?i?`1`:``:String(i),e.append(t)}}),this.$container.find(`[data-actions-values]`).empty().append(e),this.schedulePreview()},schedulePreview:function(){clearTimeout(this.timer),this.updateAppearanceSummary(),Le(this.$container);let e=++this.request;this.timer=setTimeout(()=>this.preview(e),250)},preview:function(){var e=S(function*(e){let t=this.$container.find(`[data-actions-status]`),n=this.$container.find(`[data-actions-preview]`),r={actions:this.readRows()};if(this.$container.find(`[data-action-appearance]`).each((e,t)=>{r[t.dataset.actionAppearance]=t.value}),!r.actions.length){n.empty(),t.text(Q(`Add an action to preview this field.`));return}try{let i=yield Craft.sendActionRequest(`POST`,`buttonbox/action-links/preview`,{data:r});if(e!==this.request||!this.$container[0].isConnected)return;n.html(i.data.html),t.text(i.data.errors.join(` `))}catch(n){e===this.request&&t.text(Q(`Preview unavailable. Your actions have been preserved.`))}});return function(t){return e.apply(this,arguments)}}(),destroy:function(){var e;clearTimeout(this.timer),this.request++,(e=this.observer)==null||e.disconnect(),this.table.removeEventListener(`pk-change`,this.handleRows),this.table.removeEventListener(`pk-row-menu-select`,this.handleMenu);for(let e of this.cells.values()){var t;(t=e.dialog)==null||t.remove(),e.$parts.off(`.actions`).remove()}this.$container.removeData(`buttonboxActions`),this.base()}});
//# sourceMappingURL=settings.js.map