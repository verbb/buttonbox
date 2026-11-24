import{B as e,L as t,M as n,N as r,P as i,a,j as o,k as s,r as c,t as l,y as u,z as d}from"./has-slot-DJv86HKx-De_feHaV.js";var f,p=class extends Event{constructor(e){super(`pk-copy`,{bubbles:!0,cancelable:!1,composed:!0}),this.detail={value:e}}},m=class extends Event{constructor(){super(`pk-copy-error`,{bubbles:!0,cancelable:!1,composed:!0})}};function h(e){return g.apply(this,arguments)}function g(){return g=d(function*(e){yield navigator.clipboard.writeText(e)}),g.apply(this,arguments)}function _(e,t,n){var r,i;if(!t)return n||null;let a=t.includes(`.`),o=t.includes(`[`)&&t.includes(`]`),s=t,c=``;a?[s,c]=t.trim().split(`.`):o&&([s,c]=t.trim().replace(/\]$/,``).split(`[`));let l=`getElementById`in e?e.getElementById(s):null;if(!l)return null;if(o)return(r=l.getAttribute(c))==null?``:r;if(a){let e=l[c];return e==null?``:String(e)}return(i=l.textContent)==null?``:i}var v=e`
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
`,y=a(c.check).replace(`<svg`,`<svg slot="start" part="success-icon"`),b=a(c.copy).replace(`<svg`,`<svg slot="start" part="copy-icon"`),x=2e3,S=(f=class extends n{constructor(...e){super(...e),this.hasSlotController=new l(this,`icon`),this.value=``,this.from=``,this.disabled=!1,this.variant=`transparent`,this.ariaLabel=`Copy`,this.copiedLabel=`Copied`,this.copied=!1,this.resetCopied=()=>{this.copied=!1}}disconnectedCallback(){window.clearTimeout(this.resetTimer),super.disconnectedCallback()}scheduleReset(){window.clearTimeout(this.resetTimer),this.resetTimer=window.setTimeout(this.resetCopied,x)}copy(){var e=this;return d(function*(){if(e.disabled)return;let t=_(e.getRootNode(),e.from,e.value);if(t==null||t===``)e.dispatchEvent(new m);else try{yield h(t),e.copied=!0,e.scheduleReset(),e.dispatchEvent(new p(t))}catch(t){e.dispatchEvent(new m)}})()}render(){let e=this.getAttribute(`slot`)===`end`;return t`
            <pk-button
                part="button"
                variant=${e?`none`:this.variant}
                size=${e?`none`:`default`}
                ?icon=${e}
                aria-label=${this.copied?this.copiedLabel:this.ariaLabel}
                ?disabled=${this.disabled}
                @click=${this.copy}
            >
                ${this.copied?u(y):this.hasSlotController.test(`icon`)?t`<slot name="icon" slot="start"></slot>`:u(b)}
            </pk-button>
        `}},f.styles=v,f);r([o()],S.prototype,`value`,void 0),r([o()],S.prototype,`from`,void 0),r([o({type:Boolean,reflect:!0})],S.prototype,`disabled`,void 0),r([o({reflect:!0})],S.prototype,`variant`,void 0),r([o({attribute:`aria-label`})],S.prototype,`ariaLabel`,void 0),r([o({attribute:`copied-label`})],S.prototype,`copiedLabel`,void 0),r([s()],S.prototype,`copied`,void 0),S=r([i(`pk-copy-button`)],S);export{p as n,h as r,m as t};
//# sourceMappingURL=pk-copy-button-Dfji6-PV-DXFOo7g7.js.map