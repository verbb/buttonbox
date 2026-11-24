import{A as e,B as t,C as n,F as r,L as i,M as a,N as o,O as s,P as c,a as l,j as u,k as d,r as f,t as p,v as m,w as h,z as g}from"./chunks/has-slot-DJv86HKx-De_feHaV.js";var _=0;function v(e=`pk`){return _+=1,`${e}-${_}`}var y=class{constructor(e=`polite`){this.element=document.createElement(`div`),this.element.setAttribute(`aria-live`,e),this.element.setAttribute(`aria-atomic`,`true`),this.element.className=`pk-visually-hidden`,this.element.style.cssText=`position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;`,document.body.append(this.element)}announce(e){this.element.textContent=``,requestAnimationFrame(()=>{this.element.textContent=e})}destroy(){this.element.remove()}};function b(e){let t=e.split(`-`)[0];return t===`inline-start`?`left`:t===`inline-end`?`right`:t===`top`||t===`bottom`||t===`left`||t===`right`?t:`bottom`}function x(e,t,n,r,i){var a;let o=b(e),s=t.x+t.width/2-n.x,c=t.y+t.height/2-n.y;return Math.abs((a=i==null?void 0:i.y)==null?0:a)>r&&(o===`top`||o===`bottom`)?`${s}px ${t.y+t.height/2-n.y}px`:{top:`${s}px calc(100% + ${r}px)`,bottom:`${s}px ${-r}px`,left:`calc(100% + ${r}px) ${c}px`,right:`${-r}px ${c}px`}[o]}function S(e,t){t?e.setAttribute(`data-side`,b(t)):e.removeAttribute(`data-side`)}function C(e,t,n=100,r){let i=()=>{var n;return(n=e.getAttribute(`data-current-placement`))==null?t:n};return!(r!=null&&r.requireEvent)&&e.hasAttribute(`data-current-placement`)?Promise.resolve(i()):new Promise(t=>{let a=!1,o=()=>{a||(a=!0,t(i()))};e.addEventListener(`pk-reposition`,o,{once:!0}),r!=null&&r.requireEvent||requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.hasAttribute(`data-current-placement`)&&o()})}),window.setTimeout(o,n)})}var w=globalThis.HTMLElement!==void 0&&Object.prototype.hasOwnProperty.call(globalThis.HTMLElement.prototype,`popover`),T=Math.min,E=Math.max,D=Math.round,O=Math.floor,k=e=>({x:e,y:e}),A={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function ee(e,t,n){return E(e,T(t,n))}function j(e,t){return typeof e==`function`?e(t):e}function M(e){return e.split(`-`)[0]}function te(e){return e.split(`-`)[1]}function N(e){return e===`x`?`y`:`x`}function ne(e){return e===`y`?`height`:`width`}function P(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function re(e){return N(P(e))}function ie(e,t,n){n===void 0&&(n=!1);let r=te(e),i=re(e),a=ne(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=pe(o)),[o,pe(o)]}function ae(e){let t=pe(e);return[oe(e),t,oe(t)]}function oe(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var se=[`left`,`right`],ce=[`right`,`left`],le=[`top`,`bottom`],ue=[`bottom`,`top`];function de(e,t,n){switch(e){case`top`:case`bottom`:return n?t?ce:se:t?se:ce;case`left`:case`right`:return t?le:ue;default:return[]}}function fe(e,t,n,r){let i=te(e),a=de(M(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(oe)))),a}function pe(e){let t=M(e);return A[t]+e.slice(t.length)}function me(t){return e({top:0,right:0,bottom:0,left:0},t)}function he(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:me(e)}function ge(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function _e(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}function ve(e,t){if(e==null)return{};var n,r,i=_e(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var ye=[`mainAxis`,`crossAxis`,`fallbackPlacements`,`fallbackStrategy`,`fallbackAxisSideDirection`,`flipAlignment`],be=[`mainAxis`,`crossAxis`,`limiter`],xe=[`apply`];function Se(e,t,n){let{reference:r,floating:i}=e,a=P(t),o=re(t),s=ne(o),c=M(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(te(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1)}return p}function Ce(e,t){return we.apply(this,arguments)}function we(){return we=g(function*(e,t){var n;t===void 0&&(t={});let{x:r,y:i,platform:a,rects:o,elements:s,strategy:c}=e,{boundary:l=`clippingAncestors`,rootBoundary:u=`viewport`,elementContext:d=`floating`,altBoundary:f=!1,padding:p=0}=j(t,e),m=he(p),h=s[f?d===`floating`?`reference`:`floating`:d],g=ge(yield a.getClippingRect({element:(n=yield a.isElement==null?void 0:a.isElement(h))==null||n?h:h.contextElement||(yield a.getDocumentElement==null?void 0:a.getDocumentElement(s.floating)),boundary:l,rootBoundary:u,strategy:c})),_=d===`floating`?{x:r,y:i,width:o.floating.width,height:o.floating.height}:o.reference,v=yield a.getOffsetParent==null?void 0:a.getOffsetParent(s.floating),y=(yield a.isElement==null?void 0:a.isElement(v))&&(yield a.getScale==null?void 0:a.getScale(v))||{x:1,y:1},b=ge(a.convertOffsetParentRelativeRectToViewportRelativeRect?yield a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:_,offsetParent:v,strategy:c}):_);return{top:(g.top-b.top+m.top)/y.y,bottom:(b.bottom-g.bottom+m.bottom)/y.y,left:(g.left-b.left+m.left)/y.x,right:(b.right-g.right+m.right)/y.x}}),we.apply(this,arguments)}var Te=50,Ee=function(){var t=g(function*(t,n,r){let{placement:i=`bottom`,strategy:a=`absolute`,middleware:o=[],platform:s}=r,c=s.detectOverflow?s:e(e({},s),{},{detectOverflow:Ce}),l=yield s.isRTL==null?void 0:s.isRTL(n),u=yield s.getElementRects({reference:t,floating:n,strategy:a}),{x:d,y:f}=Se(u,i,l),p=i,m=0,h={};for(let r=0;r<o.length;r++){let g=o[r];if(!g)continue;let{name:_,fn:v}=g,{x:y,y:b,data:x,reset:S}=yield v({x:d,y:f,initialPlacement:i,placement:p,strategy:a,middlewareData:h,rects:u,platform:c,elements:{reference:t,floating:n}});d=y==null?d:y,f=b==null?f:b,h[_]=e(e({},h[_]),x),S&&m<Te&&(m++,typeof S==`object`&&(S.placement&&(p=S.placement),S.rects&&(u=S.rects===!0?yield s.getElementRects({reference:t,floating:n,strategy:a}):S.rects),{x:d,y:f}=Se(u,p,l)),r=-1)}return{x:d,y:f,placement:p,strategy:a,middlewareData:h}});return function(e,n,r){return t.apply(this,arguments)}}(),De=t=>({name:`arrow`,options:t,fn(n){return g(function*(){let{x:r,y:i,placement:a,rects:o,platform:s,elements:c,middlewareData:l}=n,{element:u,padding:d=0}=j(t,n)||{};if(u==null)return{};let f=he(d),p={x:r,y:i},m=re(a),h=ne(m),g=yield s.getDimensions(u),_=m===`y`,v=_?`top`:`left`,y=_?`bottom`:`right`,b=_?`clientHeight`:`clientWidth`,x=o.reference[h]+o.reference[m]-p[m]-o.floating[h],S=p[m]-o.reference[m],C=yield s.getOffsetParent==null?void 0:s.getOffsetParent(u),w=C?C[b]:0;w&&(yield s.isElement==null?void 0:s.isElement(C))||(w=c.floating[b]||o.floating[h]);let E=x/2-S/2,D=w/2-g[h]/2-1,O=T(f[v],D),k=T(f[y],D),A=O,M=w-g[h]-k,N=w/2-g[h]/2+E,P=ee(A,N,M),ie=!l.arrow&&te(a)!=null&&N!==P&&o.reference[h]/2-(N<A?O:k)-g[h]/2<0,ae=ie?N<A?N-A:N-M:0;return{[m]:p[m]+ae,data:e({[m]:P,centerOffset:N-P-ae},ie&&{alignmentOffset:ae}),reset:ie}})()}}),Oe=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,fn(t){return g(function*(){var n,r;let{placement:i,middlewareData:a,rects:o,initialPlacement:s,platform:c,elements:l}=t,u=j(e,t),{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:m=`bestFit`,fallbackAxisSideDirection:h=`none`,flipAlignment:g=!0}=u,_=ve(u,ye);if((n=a.arrow)!=null&&n.alignmentOffset)return{};let v=M(i),y=P(s),b=M(s)===s,x=yield c.isRTL==null?void 0:c.isRTL(l.floating),S=p||(b||!g?[pe(s)]:ae(s)),C=h!==`none`;!p&&C&&S.push(...fe(s,g,h,x));let w=[s,...S],T=yield c.detectOverflow(t,_),E=[],D=((r=a.flip)==null?void 0:r.overflows)||[];if(d&&E.push(T[v]),f){let e=ie(i,o,x);E.push(T[e[0]],T[e[1]])}if(D=[...D,{placement:i,overflows:E}],!E.every(e=>e<=0)){var O,k;let e=(((O=a.flip)==null?void 0:O.index)||0)+1,t=w[e];if(t&&(f!==`alignment`||y===P(t)||D.every(e=>P(e.placement)!==y||e.overflows[0]>0)))return{data:{index:e,overflows:D},reset:{placement:t}};let n=(k=D.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])==null?void 0:k.placement;if(!n)switch(m){case`bestFit`:{var A;let e=(A=D.filter(e=>{if(C){let t=P(e.placement);return t===y||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])==null?void 0:A[0];e&&(n=e);break}case`initialPlacement`:n=s}if(i!==n)return{reset:{placement:n}}}return{}})()}}},ke=new Set([`left`,`top`]);function Ae(e,t){return je.apply(this,arguments)}function je(){return je=g(function*(e,t){let{placement:n,platform:r,elements:i}=e,a=yield r.isRTL==null?void 0:r.isRTL(i.floating),o=M(n),s=te(n),c=P(n)===`y`,l=ke.has(o)?-1:1,u=a&&c?-1:1,d=j(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}),je.apply(this,arguments)}var Me=function(t){return t===void 0&&(t=0),{name:`offset`,options:t,fn(n){return g(function*(){var r,i;let{x:a,y:o,placement:s,middlewareData:c}=n,l=yield Ae(n,t);return s===((r=c.offset)==null?void 0:r.placement)&&(i=c.arrow)!=null&&i.alignmentOffset?{}:{x:a+l.x,y:o+l.y,data:e(e({},l),{},{placement:s})}})()}}},Ne=function(t){return t===void 0&&(t={}),{name:`shift`,options:t,fn(n){return g(function*(){let{x:r,y:i,placement:a,platform:o}=n,s=j(t,n),{mainAxis:c=!0,crossAxis:l=!1,limiter:u={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}}}=s,d=ve(s,be),f={x:r,y:i},p=yield o.detectOverflow(n,d),m=P(M(a)),h=N(m),g=f[h],_=f[m];if(c){let e=h===`y`?`top`:`left`,t=h===`y`?`bottom`:`right`,n=g+p[e],r=g-p[t];g=ee(n,g,r)}if(l){let e=m===`y`?`top`:`left`,t=m===`y`?`bottom`:`right`,n=_+p[e],r=_-p[t];_=ee(n,_,r)}let v=u.fn(e(e({},n),{},{[h]:g,[m]:_}));return e(e({},v),{},{data:{x:v.x-r,y:v.y-i,enabled:{[h]:c,[m]:l}}})})()}}},Pe=function(t){return t===void 0&&(t={}),{name:`size`,options:t,fn(n){return g(function*(){var r,i;let{placement:a,rects:o,platform:s,elements:c}=n,l=j(t,n),{apply:u=()=>{}}=l,d=ve(l,xe),f=yield s.detectOverflow(n,d),p=M(a),m=te(a),h=P(a)===`y`,{width:g,height:_}=o.floating,v,y;p===`top`||p===`bottom`?(v=p,y=m===((yield s.isRTL==null?void 0:s.isRTL(c.floating))?`start`:`end`)?`left`:`right`):(y=p,v=m===`end`?`top`:`bottom`);let b=_-f.top-f.bottom,x=g-f.left-f.right,S=T(_-f[v],b),C=T(g-f[y],x),w=!n.middlewareData.shift,D=S,O=C;if((r=n.middlewareData.shift)!=null&&r.enabled.x&&(O=x),(i=n.middlewareData.shift)!=null&&i.enabled.y&&(D=b),w&&!m){let e=E(f.left,0),t=E(f.right,0),n=E(f.top,0),r=E(f.bottom,0);h?O=g-2*(e!==0||t!==0?e+t:E(f.left,f.right)):D=_-2*(n!==0||r!==0?n+r:E(f.top,f.bottom))}yield u(e(e({},n),{},{availableWidth:O,availableHeight:D}));let k=yield s.getDimensions(c.floating);return g!==k.width||_!==k.height?{reset:{rects:!0}}:{}})()}}};function Fe(){return typeof window<`u`}function F(e){return Ie(e)?(e.nodeName||``).toLowerCase():`#document`}function I(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function L(e){var t;return(t=(Ie(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ie(e){return Fe()?e instanceof Node||e instanceof I(e).Node:!1}function R(e){return Fe()?e instanceof Element||e instanceof I(e).Element:!1}function z(e){return Fe()?e instanceof HTMLElement||e instanceof I(e).HTMLElement:!1}function Le(e){return!Fe()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof I(e).ShadowRoot}function Re(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=H(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function ze(e){return/^(table|td|th)$/.test(F(e))}function Be(e){try{if(e.matches(`:popover-open`))return!0}catch(e){}try{return e.matches(`:modal`)}catch(e){return!1}}var Ve=/transform|translate|scale|rotate|perspective|filter/,He=/paint|layout|strict|content/,B=e=>!!e&&e!==`none`,Ue;function We(e){let t=R(e)?H(e):e;return B(t.transform)||B(t.translate)||B(t.scale)||B(t.rotate)||B(t.perspective)||!Ke()&&(B(t.backdropFilter)||B(t.filter))||Ve.test(t.willChange||``)||He.test(t.contain||``)}function Ge(e){let t=U(e);for(;z(t)&&!V(t);){if(We(t))return t;if(Be(t))return null;t=U(t)}return null}function Ke(){return Ue==null&&(Ue=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`)),Ue}function V(e){return/^(html|body|#document)$/.test(F(e))}function H(e){return I(e).getComputedStyle(e)}function qe(e){return R(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function U(e){if(F(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Le(e)&&e.host||L(e);return Le(t)?t.host:t}function Je(e){let t=U(e);return V(t)?e.ownerDocument?e.ownerDocument.body:e.body:z(t)&&Re(t)?t:Je(t)}function W(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);let i=Je(e),a=i===((r=e.ownerDocument)==null?void 0:r.body),o=I(i);if(a){let e=Ye(o);return t.concat(o,o.visualViewport||[],Re(i)?i:[],e&&n?W(e):[])}return t.concat(i,W(i,[],n))}function Ye(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Xe(e){let t=H(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=z(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=D(n)!==a||D(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Ze(e){return R(e)?e:e.contextElement}function G(e){let t=Ze(e);if(!z(t))return k(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Xe(t),o=(a?D(n.width):n.width)/r,s=(a?D(n.height):n.height)/i;return o&&Number.isFinite(o)||(o=1),s&&Number.isFinite(s)||(s=1),{x:o,y:s}}var Qe=k(0);function $e(e){let t=I(e);return!Ke()||!t.visualViewport?Qe:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function et(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==I(e)?!1:t}function K(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Ze(e),o=k(1);t&&(r?R(r)&&(o=G(r)):o=G(e));let s=et(a,n,r)?$e(a):k(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=I(a),t=r&&R(r)?I(r):r,n=e,i=Ye(n);for(;i&&r&&t!==n;){let e=G(i),t=i.getBoundingClientRect(),r=H(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=I(i),i=Ye(n)}}return ge({width:u,height:d,x:c,y:l})}function tt(e,t){let n=qe(e).scrollLeft;return t?t.left+n:K(L(e)).left+n}function nt(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-tt(e,n),y:n.top+t.scrollTop}}function rt(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=L(r),s=t?Be(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=k(1),u=k(0),d=z(r);if((d||!d&&!a)&&((F(r)!==`body`||Re(o))&&(c=qe(r)),d)){let e=K(r);l=G(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?nt(o,c):k(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function it(e){return Array.from(e.getClientRects())}function at(e){let t=L(e),n=qe(e),r=e.ownerDocument.body,i=E(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=E(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+tt(e),s=-n.scrollTop;return H(r).direction===`rtl`&&(o+=E(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}var ot=25;function st(e,t){let n=I(e),r=L(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Ke();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=tt(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=ot&&(a-=o)}else l<=ot&&(a+=l);return{width:a,height:o,x:s,y:c}}function ct(e,t){let n=K(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=z(e)?G(e):k(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function lt(e,t,n){let r;if(t===`viewport`)r=st(e,n);else if(t===`document`)r=at(L(e));else if(R(t))r=ct(t,n);else{let n=$e(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return ge(r)}function ut(e,t){let n=U(e);return n===t||!R(n)||V(n)?!1:H(n).position===`fixed`||ut(n,t)}function dt(e,t){let n=t.get(e);if(n)return n;let r=W(e,[],!1).filter(e=>R(e)&&F(e)!==`body`),i=null,a=H(e).position===`fixed`,o=a?U(e):e;for(;R(o)&&!V(o);){let t=H(o),n=We(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&(i.position===`absolute`||i.position===`fixed`)||Re(o)&&!n&&ut(e,o))?r=r.filter(e=>e!==o):i=t,o=U(o)}return t.set(e,r),r}function ft(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Be(t)?[]:dt(t,this._c):[].concat(n),r],o=lt(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=lt(t,a[e],i);s=E(n.top,s),c=T(n.right,c),l=T(n.bottom,l),u=E(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function pt(e){let{width:t,height:n}=Xe(e);return{width:t,height:n}}function mt(e,t,n){let r=z(t),i=L(t),a=n===`fixed`,o=K(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=k(0);function l(){c.x=tt(i)}if(r||!r&&!a){if((F(t)!==`body`||Re(i))&&(s=qe(t)),r){let e=K(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l()}a&&!r&&i&&l();let u=i&&!r&&!a?nt(i,s):k(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function ht(e){return H(e).position===`static`}function gt(e,t){if(!z(e)||H(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return L(e)===n&&(n=n.ownerDocument.body),n}function _t(e,t){let n=I(e);if(Be(e))return n;if(!z(e)){let t=U(e);for(;t&&!V(t);){if(R(t)&&!ht(t))return t;t=U(t)}return n}let r=gt(e,t);for(;r&&ze(r)&&ht(r);)r=gt(r,t);return r&&V(r)&&ht(r)&&!We(r)?n:r||Ge(e)||n}var vt=function(){var e=g(function*(e){let t=this.getOffsetParent||_t,n=this.getDimensions,r=yield n(e.floating);return{reference:mt(e.reference,yield t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}});return function(t){return e.apply(this,arguments)}}();function yt(e){return H(e).direction===`rtl`}var bt={convertOffsetParentRelativeRectToViewportRelativeRect:rt,getDocumentElement:L,getClippingRect:ft,getOffsetParent:_t,getElementRects:vt,getClientRects:it,getDimensions:pt,getScale:G,isElement:R,isRTL:yt};function xt(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function St(t,n){let r=null,i,a=L(t);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),o();let u=t.getBoundingClientRect(),{left:d,top:f,width:p,height:m}=u;if(c||n(),!p||!m)return;let h=O(f),g=O(a.clientWidth-(d+p)),_=O(a.clientHeight-(f+m)),v=O(d),y={rootMargin:-h+`px `+-g+`px `+-_+`px `+-v+`px`,threshold:E(0,T(1,l))||1},b=!0;function x(e){let n=e[0].intersectionRatio;if(n!==l){if(!b)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}n===1&&!xt(u,t.getBoundingClientRect())&&s(),b=!1}try{r=new IntersectionObserver(x,e(e({},y),{},{root:a.ownerDocument}))}catch(e){r=new IntersectionObserver(x,y)}r.observe(t)}return s(!0),o}function Ct(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Ze(e),u=i||a?[...l?W(l):[],...t?W(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?St(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?K(e):null;c&&g();function g(){let t=K(e);h&&!xt(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d==null||d(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var wt=Me,Tt=Ne,Et=Oe,Dt=Pe,Ot=De,kt=(t,n,r)=>{let i=new Map,a=e({platform:bt},r),o=e(e({},a.platform),{},{_c:i});return Ee(t,n,e(e({},a),{},{platform:o}))};function At(e){return Mt(e)}function jt(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Mt(e){for(let t=e;t;t=jt(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=jt(e);t;t=jt(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||We(e)||t.tagName===`BODY`))return t}return null}var Nt;function Pt(e,t){if(!t)return null;let n=e.getRootNode();if(n instanceof Document||n instanceof ShadowRoot){let e=n.getElementById(t);if(e)return e}return e.ownerDocument.getElementById(t)}var Ft=class extends Event{constructor(){super(`pk-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}},It=t`
    @layer pk-component {
        :host {
            display: contents;
        }

        .popup {
            position: absolute;
            isolation: isolate;
            width: max-content;
            z-index: var(--pk-popup-z-index, 1000);
            /* Never transition coordinates — flip would animate the jump. */
            transition: none;

            /* Reset UA styles for [popover] — see  pk-popup. */
            inset: unset;
            padding: unset;
            margin: unset;
            height: unset;
            color: unset;
            background: unset;
            border: unset;
            overflow: unset;
        }

        .popup-fixed {
            position: fixed;
        }

        .popup:not(.active) {
            display: none;
        }

        /* Prefer visibility over opacity so enter animations are not fighting a
         * 0→1 fade. Matches base-ui isPositioned / hide-until-placed.
         */
        .popup.active:not(.positioned) {
            visibility: hidden;
            pointer-events: none;
        }

        .popup.show {
            animation: pk-popup-surface-in 100ms ease-out;
        }

        .popup.hide {
            animation: pk-popup-surface-out 100ms ease-in forwards;
        }

        @keyframes pk-popup-surface-in {
            from {
                opacity: 0;
                transform: scale(0.95);
            }

            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes pk-popup-surface-out {
            from {
                opacity: 1;
                transform: scale(1);
            }

            to {
                opacity: 0;
                transform: scale(0.95);
            }
        }

        .arrow {
            position: absolute;
            width: var(--pk-popup-arrow-size, 6px);
            height: var(--pk-popup-arrow-size, 6px);
            rotate: 45deg;
            background: var(--pk-popup-arrow-color, var(--pk-color-white));
            z-index: 1;
        }

        .hover-bridge {
            position: fixed;
            z-index: calc(var(--pk-popup-z-index, 1000) - 1);
            inset: 0;
            clip-path: polygon(
                var(--pk-hover-bridge-top-left-x, 0) var(--pk-hover-bridge-top-left-y, 0),
                var(--pk-hover-bridge-top-right-x, 0) var(--pk-hover-bridge-top-right-y, 0),
                var(--pk-hover-bridge-bottom-right-x, 0) var(--pk-hover-bridge-bottom-right-y, 0),
                var(--pk-hover-bridge-bottom-left-x, 0) var(--pk-hover-bridge-bottom-left-y, 0)
            );
            pointer-events: auto;
        }

        .hover-bridge:not(.hover-bridge-visible) {
            display: none;
        }
    }
`;function Lt(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e}function Rt(e){return e||(w?`absolute`:`fixed`)}function zt(e,t){if(w&&!Lt(e)&&t===`scroll`)return W(e).filter(e=>e instanceof Element)}var q=(Nt=class extends a{constructor(...e){super(...e),this.anchor=``,this.active=!1,this.boundary=`viewport`,this.placement=`bottom-start`,this.distance=4,this.skidding=0,this.flip=!0,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=8,this.shift=!0,this.shiftPadding=8,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.autoSizePadding=8,this.anchorTracking=!0,this.hoverBridge=!1,this.anchorElement=null,this.settlingInitialPosition=!1,this.settleGeneration=0}disconnectedCallback(){this.stop(),super.disconnectedCallback()}updated(e){super.updated(e),e.has(`active`)&&(this.active?(this.resolveAnchor(),this.start()):this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&!e.has(`active`)&&this.reposition()}reposition(){this.settlingInitialPosition||this.repositionAsync()}repositionAsync(t=!0){var n=this;return g(function*(){let r=n.popupElement,i=n.arrow?n.arrowElement:null;if(!n.active||!n.anchorElement||!r)return!1;let a=zt(n.anchorElement,n.boundary),o=[wt({mainAxis:n.distance,crossAxis:n.skidding})];n.sync?o.push(Dt({apply:({rects:e})=>{let t=n.sync===`width`||n.sync===`both`,i=n.sync===`height`||n.sync===`both`;r.style.width=t?`${e.reference.width}px`:``,r.style.height=i?`${e.reference.height}px`:``}})):(r.style.width=``,r.style.height=``),n.flip&&o.push(Et({boundary:a,fallbackPlacements:n.flipFallbackPlacements?n.flipFallbackPlacements.split(` `).map(e=>e.trim()).filter(Boolean):void 0,fallbackStrategy:n.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:n.flipPadding})),n.shift&&o.push(Tt({boundary:a,padding:n.shiftPadding})),n.autoSize?o.push(Dt({boundary:a,padding:n.autoSizePadding,apply:({availableHeight:e,availableWidth:t})=>{let i=n.autoSize===`horizontal`||n.autoSize===`both`,a=n.autoSize===`vertical`||n.autoSize===`both`;i?r.style.setProperty(`--pk-popup-available-width`,`${Math.max(0,Math.floor(t))}px`):r.style.removeProperty(`--pk-popup-available-width`),a?r.style.setProperty(`--pk-popup-available-height`,`${Math.max(0,Math.floor(e))}px`):r.style.removeProperty(`--pk-popup-available-height`)}})):(r.style.removeProperty(`--pk-popup-available-width`),r.style.removeProperty(`--pk-popup-available-height`)),n.arrow&&i&&o.push(Ot({element:i,padding:n.arrowPadding}));let s=Rt(n.positionMethod),c=s===`fixed`;r.classList.toggle(`popup-fixed`,c);let l=w?e=>bt.getOffsetParent(e,At):bt.getOffsetParent,{x:u,y:d,middlewareData:f,placement:p}=yield kt(n.anchorElement,r,{placement:n.placement,middleware:o,strategy:s,platform:e(e({},bt),{},{getOffsetParent:l})});if(!n.active||!r.isConnected)return!1;let m={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[p.split(`-`)[0]];if(n.setAttribute(`data-current-placement`,p),Object.assign(r.style,e({left:`${u}px`,top:`${d}px`},c?{position:`fixed`}:{position:``})),n.anchorElement){let e=n.anchorElement.getBoundingClientRect(),t=r.getBoundingClientRect();r.style.setProperty(`--pk-anchor-width`,`${e.width}px`),r.style.setProperty(`--pk-anchor-height`,`${e.height}px`);let i=x(p,e,t,n.distance,f.shift);r.style.setProperty(`--pk-transform-origin`,i)}if(n.arrow&&i){var h,g;let e=(h=f.arrow)==null?void 0:h.x,t=(g=f.arrow)==null?void 0:g.y,r=``,a=``,o=``,s=``;if(n.arrowPlacement===`start`){let i=typeof e==`number`?`${n.arrowPadding}px`:``;r=typeof t==`number`?`${n.arrowPadding}px`:``,s=i}else n.arrowPlacement===`end`?(a=typeof e==`number`?`${n.arrowPadding}px`:``,o=typeof t==`number`?`${n.arrowPadding}px`:``):n.arrowPlacement===`center`?(s=typeof e==`number`?`50%`:``,r=typeof t==`number`?`50%`:``):(s=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(i.style,{top:r,right:a,bottom:o,left:s,transform:``,[m]:`calc(-1 * var(--pk-popup-arrow-size, 6px) / 2)`})}return requestAnimationFrame(()=>n.updateHoverBridge()),t&&n.dispatchEvent(new Ft),!0})()}frames(e){return new Promise(t=>{let n=e=>{e<=0?t():requestAnimationFrame(()=>n(e-1))};n(e)})}settleInitialPosition(){var e=this;return g(function*(){let t=++e.settleGeneration,n=e.popupElement;n?(yield e.frames(2),e.active&&t===e.settleGeneration&&(yield e.repositionAsync(!1),n.offsetHeight,yield e.frames(1),e.active&&t===e.settleGeneration&&(yield e.repositionAsync(!1),e.active&&t===e.settleGeneration&&(n.classList.add(`positioned`),e.settlingInitialPosition=!1,requestAnimationFrame(()=>e.updateHoverBridge()),e.dispatchEvent(new Ft))))):e.settlingInitialPosition=!1})()}resolveAnchor(){var e;if(typeof this.anchor==`string`&&this.anchor){this.anchorElement=Pt(this,this.anchor);return}if(this.anchor instanceof Element||Lt(this.anchor)){this.anchorElement=this.anchor;return}let t=this.querySelector(`[slot="anchor"]`);t instanceof HTMLSlotElement&&(t=(e=t.assignedElements({flatten:!0})[0])==null?null:e),this.anchorElement=t}handleAnchorChange(){var e=this;return g(function*(){yield e.stop(),e.resolveAnchor(),e.anchorElement&&e.active&&e.start()})()}usesPopoverTopLayer(){return w&&this.positionMethod!==`fixed`}stop(){return new Promise(e=>{var t;let n=this.popupElement;this.trackingFrame!==void 0&&cancelAnimationFrame(this.trackingFrame),this.trackingFrame=void 0,this.settleGeneration+=1,this.settlingInitialPosition=!1,n==null||n.classList.remove(`positioned`),this.usesPopoverTopLayer()&&(n==null||(t=n.hidePopover)==null||t.call(n)),this.cleanup?(this.cleanup(),this.cleanup=void 0,n==null||n.style.removeProperty(`--pk-transform-origin`),requestAnimationFrame(()=>e())):e(),this.removeAttribute(`data-current-placement`)})}releasePositioning(){this.cleanup&&(this.cleanup(),this.cleanup=void 0)}awaitHidden(){var e=this;return g(function*(){yield e.stop()})()}start(){var e,t;this.anchorElement&&this.active&&this.isConnected&&this.popupElement&&(this.popupElement.classList.remove(`positioned`),this.settlingInitialPosition=!0,this.usesPopoverTopLayer()&&((e=(t=this.popupElement).showPopover)==null||e.call(t)),this.anchorTracking&&(this.cleanup=Ct(this.anchorElement,this.popupElement,()=>{this.settlingInitialPosition||(this.trackingFrame!==void 0&&cancelAnimationFrame(this.trackingFrame),this.trackingFrame=requestAnimationFrame(()=>{this.trackingFrame=void 0,this.reposition()}))})),this.settleInitialPosition())}getContentElement(){var e,t;let n=((e=(t=this.shadowRoot)==null||(t=t.querySelector(`slot:not([name])`))==null?void 0:t.assignedElements({flatten:!0}))==null?[]:e).find(e=>e instanceof HTMLElement);if(n)return n;for(let e of this.childNodes)if(e instanceof HTMLElement&&e.getAttribute(`slot`)!==`anchor`)return e;return null}updateHoverBridge(){let e=this.popupElement;if(!this.hoverBridge||!this.anchorElement||!e)return;let t=this.anchorElement.getBoundingClientRect(),n=e.getBoundingClientRect(),r=this.placement.includes(`top`)||this.placement.includes(`bottom`),i=0,a=0,o=0,s=0,c=0,l=0,u=0,d=0;r?t.top<n.top?(i=t.left,a=t.bottom,o=t.right,s=t.bottom,c=n.left,l=n.top,u=n.right,d=n.top):(i=n.left,a=n.bottom,o=n.right,s=n.bottom,c=t.left,l=t.top,u=t.right,d=t.top):t.left<n.left?(i=t.right,a=t.top,o=n.left,s=n.top,c=t.right,l=t.bottom,u=n.left,d=n.bottom):(i=n.right,a=n.top,o=t.left,s=t.top,c=n.right,l=n.bottom,u=t.left,d=t.bottom),this.style.setProperty(`--pk-hover-bridge-top-left-x`,`${i}px`),this.style.setProperty(`--pk-hover-bridge-top-left-y`,`${a}px`),this.style.setProperty(`--pk-hover-bridge-top-right-x`,`${o}px`),this.style.setProperty(`--pk-hover-bridge-top-right-y`,`${s}px`),this.style.setProperty(`--pk-hover-bridge-bottom-left-x`,`${c}px`),this.style.setProperty(`--pk-hover-bridge-bottom-left-y`,`${l}px`),this.style.setProperty(`--pk-hover-bridge-bottom-right-x`,`${u}px`),this.style.setProperty(`--pk-hover-bridge-bottom-right-y`,`${d}px`)}render(){let e=!w||this.positionMethod===`fixed`,t=this.usesPopoverTopLayer();return i`
            <slot name="anchor" @slotchange=${()=>{this.handleAnchorChange()}}></slot>
            ${this.hoverBridge?i`
                <div
                    part="hover-bridge"
                    class=${h({"hover-bridge":!0,"hover-bridge-visible":this.active})}
                    aria-hidden="true"
                ></div>
            `:r}
            <div
                popover=${t?`manual`:r}
                part="popup"
                class=${h({popup:!0,active:this.active,"popup-fixed":e})}
            >
                ${this.arrow?i`<div part="arrow" class="arrow"></div>`:r}
                <slot></slot>
            </div>
        `}},Nt.styles=It,Nt);o([u()],q.prototype,`anchor`,void 0),o([u({type:Boolean,reflect:!0})],q.prototype,`active`,void 0),o([u({attribute:`position-method`})],q.prototype,`positionMethod`,void 0),o([u({reflect:!0})],q.prototype,`boundary`,void 0),o([u({reflect:!0})],q.prototype,`placement`,void 0),o([u({type:Number})],q.prototype,`distance`,void 0),o([u({type:Number})],q.prototype,`skidding`,void 0),o([u({type:Boolean})],q.prototype,`flip`,void 0),o([u({attribute:`flip-fallback-placements`})],q.prototype,`flipFallbackPlacements`,void 0),o([u({attribute:`flip-fallback-strategy`})],q.prototype,`flipFallbackStrategy`,void 0),o([u({attribute:`flip-padding`,type:Number})],q.prototype,`flipPadding`,void 0),o([u({type:Boolean})],q.prototype,`shift`,void 0),o([u({attribute:`shift-padding`,type:Number})],q.prototype,`shiftPadding`,void 0),o([u({type:Boolean})],q.prototype,`arrow`,void 0),o([u({attribute:`arrow-placement`})],q.prototype,`arrowPlacement`,void 0),o([u({attribute:`arrow-padding`,type:Number})],q.prototype,`arrowPadding`,void 0),o([u()],q.prototype,`sync`,void 0),o([u({attribute:`auto-size`})],q.prototype,`autoSize`,void 0),o([u({attribute:`auto-size-padding`,type:Number})],q.prototype,`autoSizePadding`,void 0),o([u({attribute:`anchor-tracking`,type:Boolean})],q.prototype,`anchorTracking`,void 0),o([u({attribute:`hover-bridge`,type:Boolean})],q.prototype,`hoverBridge`,void 0),o([s(`.popup`)],q.prototype,`popupElement`,void 0),o([s(`.arrow`)],q.prototype,`arrowElement`,void 0),q=o([c(`pk-popup`)],q);var Bt=class extends Event{constructor(){super(`pk-show`,{bubbles:!0,cancelable:!1,composed:!0})}},Vt=class extends Event{constructor(){super(`pk-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},Ht=class extends Event{constructor(e=`unknown`){super(`pk-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail={source:e}}},Ut=class extends Event{constructor(){super(`pk-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},Wt,Gt=[t`
    @layer pk-component {
        .content.pk-popup-content {
            transform-origin: var(--pk-transform-origin, top);
        }

        .content.pk-popup-content[data-open] {
            animation: pk-tooltip-in 150ms ease forwards;
        }

        .content.pk-popup-content[data-open][data-side='top'] {
            animation-name: pk-tooltip-in-top;
        }

        .content.pk-popup-content[data-open][data-side='bottom'] {
            animation-name: pk-tooltip-in-bottom;
        }

        .content.pk-popup-content[data-open][data-side='left'] {
            animation-name: pk-tooltip-in-left;
        }

        .content.pk-popup-content[data-open][data-side='right'] {
            animation-name: pk-tooltip-in-right;
        }

        .content.pk-popup-content.closing {
            animation: pk-tooltip-out 150ms ease;
        }

        @keyframes pk-tooltip-in {
            from {
                opacity: 0;
                transform: scale(0.95);
            }

            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes pk-tooltip-out {
            from {
                opacity: 1;
                transform: scale(1);
            }

            to {
                opacity: 0;
                transform: scale(0.95);
            }
        }

        @keyframes pk-tooltip-in-top {
            from {
                opacity: 0;
                transform: scale(0.95) translateY(0.5rem);
            }

            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }

        @keyframes pk-tooltip-in-bottom {
            from {
                opacity: 0;
                transform: scale(0.95) translateY(-0.5rem);
            }

            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }

        @keyframes pk-tooltip-in-left {
            from {
                opacity: 0;
                transform: scale(0.95) translateX(0.5rem);
            }

            to {
                opacity: 1;
                transform: scale(1) translateX(0);
            }
        }

        @keyframes pk-tooltip-in-right {
            from {
                opacity: 0;
                transform: scale(0.95) translateX(-0.5rem);
            }

            to {
                opacity: 1;
                transform: scale(1) translateX(0);
            }
        }
    }
`,t`
    @layer pk-component {
        :host {
            display: inline-block;
            max-width: 100%;
            align-self: flex-start;
            flex: none;
            vertical-align: middle;
            --pk-popup-z-index: 250;
            --pk-tooltip-arrow-size: 9px;
            --pk-tooltip-arrow-inset: 1px;
        }

        .content:not([data-open]):not(.closing) {
            opacity: 0;
            pointer-events: none;
        }

        .content[data-open]:not(.closing) {
            opacity: 1;
        }

        .content {
            position: relative;
            isolation: isolate;
            overflow: visible;
            width: fit-content;
            max-width: 20rem;
            /* Tooltips must wrap even when their trigger is inside a no-wrap table cell. */
            white-space: normal;
            padding: 4px 8px;
            border-radius: var(--pk-radius-sm);
            background: #1c2e36;
            color: var(--pk-color-white);
            font-family: var(--pk-font-family);
            font-size: 12px;
            line-height: 1.4;
            pointer-events: none;
        }

        .content::after {
            content: '';
            position: absolute;
            z-index: -1;
            width: var(--pk-tooltip-arrow-size);
            height: var(--pk-tooltip-arrow-size);
            background: #1c2e36;
            border-radius: 2px;
            rotate: 45deg;
            pointer-events: none;
        }

        .content[data-side='top']::after {
            left: calc(50% - var(--pk-tooltip-arrow-size) / 2);
            bottom: calc(var(--pk-tooltip-arrow-size) * -0.5 + var(--pk-tooltip-arrow-inset));
        }

        .content[data-side='bottom']::after {
            left: calc(50% - var(--pk-tooltip-arrow-size) / 2);
            top: calc(var(--pk-tooltip-arrow-size) * -0.5 + var(--pk-tooltip-arrow-inset));
        }

        .content[data-side='left']::after {
            top: calc(50% - var(--pk-tooltip-arrow-size) / 2);
            right: calc(var(--pk-tooltip-arrow-size) * -0.5 + var(--pk-tooltip-arrow-inset));
        }

        .content[data-side='right']::after {
            top: calc(50% - var(--pk-tooltip-arrow-size) / 2);
            left: calc(var(--pk-tooltip-arrow-size) * -0.5 + var(--pk-tooltip-arrow-inset));
        }

        .content[hidden] {
            display: none !important;
        }
    }
    `],J=(Wt=class extends a{constructor(...e){super(...e),this.placement=`top`,this.trigger=`hover focus`,this.disabled=!1,this.openDelay=0,this.closeDelay=0,this.content=``,this.for=``,this.open=!1,this.triggerElement=null,this.contentAnimated=!1,this.closing=!1,this.contentSide=null,this.hasSlottedBody=!1,this.triggerId=v(`pk-tooltip-trigger`),this.tooltipId=v(`pk-tooltip`),this.showGeneration=0,this.exitGeneration=0,this.syncPlacementAnimation=()=>{var e,t,n;let r=(e=(t=this.popupElement)==null?void 0:t.getAttribute(`data-current-placement`))==null?this.placement:e,i=(n=this.popupElement)==null?void 0:n.getContentElement();this.contentSide=r?b(r):null,S(this.popupElement,r),i&&S(i,r)},this.onBodySlotChange=e=>{let t=e.target;this.hasSlottedBody=t.assignedNodes({flatten:!0}).some(e=>{var t;return e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&!!((t=e.textContent)!=null&&t.trim())})},this.scheduleShow=()=>{this.usesPointerTrigger()&&(window.clearTimeout(this.closeTimer),window.clearTimeout(this.openTimer),this.openTimer=window.setTimeout(()=>this.showTooltip(),this.openDelay))},this.scheduleHide=()=>{this.usesPointerTrigger()&&(window.clearTimeout(this.openTimer),window.clearTimeout(this.closeTimer),this.closeTimer=window.setTimeout(()=>this.hideTooltip(),this.closeDelay))}}disconnectedCallback(){var e;(e=this.popupElement)==null||e.removeEventListener(`pk-reposition`,this.syncPlacementAnimation),this.clearTimers(),this.hideTooltip(!0),super.disconnectedCallback()}updated(e){super.updated(e),(e.has(`trigger`)||e.has(`disabled`)||e.has(`for`))&&this.rebindTrigger(),this.disabled&&this.open&&this.hideTooltip(!0)}firstUpdated(){this.popupElement.addEventListener(`pk-reposition`,this.syncPlacementAnimation),this.for&&queueMicrotask(()=>{this.resolveExternalTrigger()})}show(){var e=this;return g(function*(){e.disabled||(e.clearTimers(),e.showTooltip(!0),yield e.updateComplete)})()}hide(){var e=this;return g(function*(){e.clearTimers(),e.hideTooltip(!0),yield e.updateComplete})()}clearTimers(){window.clearTimeout(this.openTimer),window.clearTimeout(this.closeTimer)}resolveExternalTrigger(){this.triggerElement=Pt(this,this.for),this.rebindTrigger()}onTriggerSlotChange(e){let[t]=e.target.assignedElements({flatten:!0});this.unbindTrigger(this.triggerElement),this.triggerElement=t==null?null:t,this.rebindTrigger(),this.requestUpdate()}rebindTrigger(){this.unbindTrigger(this.triggerElement),this.for&&(this.triggerElement=Pt(this,this.for)),this.bindTrigger(this.triggerElement)}usesPointerTrigger(){return!this.disabled&&this.trigger!==`manual`}bindTrigger(e){e&&this.usesPointerTrigger()&&(e.id||(e.id=this.triggerId),e.setAttribute(`aria-describedby`,this.tooltipId),e.addEventListener(`mouseenter`,this.scheduleShow),e.addEventListener(`mouseleave`,this.scheduleHide),e.addEventListener(`focus`,this.scheduleShow),e.addEventListener(`blur`,this.scheduleHide))}unbindTrigger(e){e&&(e.removeAttribute(`aria-describedby`),e.removeEventListener(`mouseenter`,this.scheduleShow),e.removeEventListener(`mouseleave`,this.scheduleHide),e.removeEventListener(`focus`,this.scheduleShow),e.removeEventListener(`blur`,this.scheduleHide))}getAnchor(){return this.for?Pt(this,this.for):this.triggerElement?this.triggerElement:null}prepareContentForEnter(e){e&&(e.classList.remove(`closing`),e.style.animation=`none`,e.getBoundingClientRect(),e.style.removeProperty(`animation`),e.style.removeProperty(`opacity`),e.style.removeProperty(`transform`))}showTooltip(e=!1){var t=this,n;if(!this.getAnchor()||this.open&&this.contentAnimated&&!this.closing&&!e)return;this.open||this.dispatchEvent(new Bt);let r=++this.showGeneration;this.exitGeneration+=1,this.closing=!1,this.open=!0,this.contentAnimated=!1,this.prepareContentForEnter((n=this.popupElement)==null?void 0:n.getContentElement()),this.updateComplete.then(g(function*(){var e;r===t.showGeneration&&(yield C(t.popupElement,t.placement),r===t.showGeneration&&(t.syncPlacementAnimation(),t.prepareContentForEnter((e=t.popupElement)==null?void 0:e.getContentElement()),t.contentAnimated=!0,t.dispatchEvent(new Vt),t.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!0},bubbles:!0,composed:!0}))))}))}hideTooltip(e=!1,t=!1){if((this.open||this.closing||e)&&(!this.closing||e)){if(t){let e=new Ht(`api`);if(!this.dispatchEvent(e))return}this.showGeneration+=1,e?this.finishHide():this.contentAnimated?this.playExitAnimation():this.finishHide()}}playExitAnimation(){var e=this;return g(function*(){var t;if(!e.open)return;let n=e.exitGeneration+1;e.exitGeneration=n;let r=(t=e.popupElement)==null?void 0:t.getContentElement();e.closing=!0,e.contentAnimated=!1,r&&(yield e.waitForExitAnimation(r)),n===e.exitGeneration&&e.finishHide()})()}waitForExitAnimation(e){return new Promise(t=>{let n=!1,r=()=>{n||(n=!0,e.removeEventListener(`animationend`,i),window.clearTimeout(a),e.classList.remove(`closing`),t())},i=t=>{t.target===e&&t.animationName.startsWith(`pk-tooltip-out`)&&r()};e.classList.add(`closing`),e.addEventListener(`animationend`,i);let a=window.setTimeout(r,200)})}finishHide(){var e,t;let n=(e=this.popupElement)==null?void 0:e.getContentElement();this.closing=!1,this.contentAnimated=!1,this.contentSide=null,this.open=!1,(t=this.popupElement)==null||t.removeAttribute(`data-side`),this.prepareContentForEnter(n),this.dispatchEvent(new Ut),this.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!1},bubbles:!0,composed:!0}))}render(){var e;let t=this.getAnchor();return i`
            <slot name="trigger" @slotchange=${this.onTriggerSlotChange}></slot>
            <pk-popup
                .active=${this.open||this.closing}
                .anchor=${t==null?``:t}
                .placement=${this.placement}
                .distance=${4}
                hover-bridge
                flip
                shift
            >
                <div
                    part="content"
                    class=${h({content:!0,"pk-popup-content":!0,closing:this.closing})}
                    id=${this.tooltipId}
                    role="tooltip"
                    ?hidden=${!this.open&&!this.closing}
                    data-open=${this.contentAnimated&&!this.closing?``:r}
                    data-side=${(e=this.contentSide)==null?r:e}
                >
                    <slot @slotchange=${this.onBodySlotChange}></slot>
                    ${this.hasSlottedBody?r:this.content||r}
                </div>
            </pk-popup>
        `}},Wt.styles=Gt,Wt);o([u({reflect:!0})],J.prototype,`placement`,void 0),o([u({reflect:!0})],J.prototype,`trigger`,void 0),o([u({type:Boolean,reflect:!0})],J.prototype,`disabled`,void 0),o([u({type:Number,attribute:`open-delay`})],J.prototype,`openDelay`,void 0),o([u({type:Number,attribute:`close-delay`})],J.prototype,`closeDelay`,void 0),o([u()],J.prototype,`content`,void 0),o([u({reflect:!0})],J.prototype,`for`,void 0),o([s(`pk-popup`)],J.prototype,`popupElement`,void 0),o([d()],J.prototype,`open`,void 0),o([d()],J.prototype,`contentAnimated`,void 0),o([d()],J.prototype,`closing`,void 0),o([d()],J.prototype,`contentSide`,void 0),o([d()],J.prototype,`hasSlottedBody`,void 0),J=o([c(`pk-tooltip`)],J);var Kt=[`aria-labelledby`,`aria-describedby`,`aria-invalid`,`aria-errormessage`,`aria-required`,`aria-label`];function qt(e){return e.hasAttribute(`aria-labelledby`)||e.hasAttribute(`aria-describedby`)||e.hasAttribute(`aria-errormessage`)}function Jt(e,t){for(let n of Kt){let r=e.getAttribute(n);r===null?t.removeAttribute(n):t.setAttribute(n,r)}}function Yt({control:e,labelId:t,instructionsId:n,hasLabel:r,hasInstructions:i,required:a=!1,invalid:o=!1}){r&&t?e.setAttribute(`aria-labelledby`,t):e.removeAttribute(`aria-labelledby`),i&&n?e.setAttribute(`aria-describedby`,n):e.removeAttribute(`aria-describedby`),a?e.setAttribute(`aria-required`,`true`):e.removeAttribute(`aria-required`),o?e.setAttribute(`aria-invalid`,`true`):e.removeAttribute(`aria-invalid`),e.removeAttribute(`aria-errormessage`)}var Xt=class{constructor(e,t,n){this.host=e,this.getTarget=t,this.onSync=n}connect(){this.sync(),this.observer=new MutationObserver(()=>{this.sync()}),this.observer.observe(this.host,{attributes:!0,attributeFilter:[...Kt]})}disconnect(){var e;(e=this.observer)==null||e.disconnect(),this.observer=void 0}sync(){if(!qt(this.host)){var e;(e=this.onSync)==null||e.call(this);return}let t=this.getTarget();t&&Jt(this.host,t)}},Zt,Qt=class extends Event{constructor(){super(`pk-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}};function $t(){return{observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys.push(`customError`)),t}}}var Y=(Zt=class extends a{static get validators(){return[$t()]}static get observedAttributes(){var e,t;let n=new Set((e=super.observedAttributes)==null?[]:e);for(let e of this.validators)for(let r of(t=e.observedAttributes)==null?[]:t)n.add(r);return[...n]}constructor(){super(),this.internals=this.attachInternals(),this.assumeInteractionOn=[`input`],this.validators=[],this.name=null,this.disabled=!1,this.required=!1,this.customError=null,this.valueHasChanged=!1,this.hasInteracted=!1,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Qt))},this.handleInteraction=e=>{this.emittedEvents.includes(e.type)||this.emittedEvents.push(e.type),this.emittedEvents.length>=this.assumeInteractionOn.length&&(this.hasInteracted=!0,this.updateValidity())},this.addEventListener(`invalid`,this.emitInvalid)}connectedCallback(){super.connectedCallback();for(let e of this.assumeInteractionOn)this.addEventListener(e,this.handleInteraction);this.updateValidity()}disconnectedCallback(){var e;(e=this.hostAriaMirror)==null||e.disconnect(),this.hostAriaMirror=void 0;for(let e of this.assumeInteractionOn)this.removeEventListener(e,this.handleInteraction);this.removeEventListener(`invalid`,this.emitInvalid),super.disconnectedCallback()}updated(e){var t;e.has(`customError`)&&this.setCustomValidity((t=this.customError)==null?``:t),e.has(`disabled`)&&this.setState(`disabled`,!!this.disabled),(e.has(`value`)||e.has(`checked`)||e.has(`disabled`)||e.has(`required`)||e.has(`name`))&&this.syncFormValue(),this.updateValidity(),super.updated(e),this.syncHostAriaMirror()}firstUpdated(e){super.firstUpdated(e),this.connectHostAriaMirror()}getAriaMirrorTarget(){var e;return(e=this.input)==null?null:e}syncStandaloneAria(){}connectHostAriaMirror(){var e;(e=this.hostAriaMirror)==null||e.disconnect(),this.hostAriaMirror=new Xt(this,()=>this.getAriaMirrorTarget(),()=>this.syncStandaloneAria()),this.hostAriaMirror.connect()}syncHostAriaMirror(){var e;(e=this.hostAriaMirror)==null||e.sync()}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.resetToDefaultValue(),this.syncFormValue(),this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.restoreFormState(e),this.syncFormValue(),this.updateValidity()}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get labels(){return this.internals.labels}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}getForm(){return this.internals.form}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}resetValidity(){this.setCustomValidity(``),this.internals.setValidity({}),this.syncCustomStates()}setCustomValidity(e){if(!e){this.customError=null,this.internals.setValidity({}),this.syncCustomStates();return}this.customError=e;let t=this.validationTarget;t instanceof HTMLElement?this.internals.setValidity({customError:!0},e,t):this.internals.setValidity({customError:!0},e),this.syncCustomStates()}get validationTarget(){return this.input}get allValidators(){var e,t;return[...(e=this.constructor.validators)==null?[]:e,...(t=this.validators)==null?[]:t]}setFormValue(e,t){this.internals.setFormValue(e,t==null?e:t)}setValue(e,t){this.setFormValue(e,t==null?e:t)}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.internals.setValidity({}),this.syncCustomStates();return}let e=this.allValidators;if(!e.length)return;let t={customError:!!this.customError},n=``,r=this.validationTarget;for(let r of e){let{isValid:e,message:i,invalidKeys:a}=r.checkValidity(this);if(!e){n||(n=i);for(let e of a)t[e]=!0}}n||(n=this.validationMessage),r instanceof HTMLElement?this.internals.setValidity(t,n,r):this.internals.setValidity(t,n),this.syncCustomStates()}syncCustomStates(){let e=this.internals.validity.valid;this.setState(`required`,this.required),this.setState(`optional`,!this.required),this.setState(`invalid`,!e),this.setState(`valid`,e),this.setState(`user-invalid`,!e&&this.hasInteracted),this.setState(`user-valid`,e&&this.hasInteracted)}setState(e,t){let n=this.internals.states;n&&(t?n.add(e):n.delete(e))}syncFormValue(){}resetToDefaultValue(){}restoreFormState(e){}},Zt.formAssociated=!0,Zt);o([u({reflect:!0})],Y.prototype,`name`,void 0),o([u({type:Boolean,reflect:!0})],Y.prototype,`disabled`,void 0),o([u({type:Boolean,reflect:!0})],Y.prototype,`required`,void 0),o([u({attribute:`custom-error`,reflect:!0})],Y.prototype,`customError`,void 0),o([u({attribute:!1,state:!0})],Y.prototype,`valueHasChanged`,void 0),o([u({attribute:!1,state:!0})],Y.prototype,`hasInteracted`,void 0);function en(){return{checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&typeof t.checkValidity==`function`&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&typeof t.validationMessage==`string`&&(n.message=t.validationMessage),!(`validity`in t)||!t.validity)return n.invalidKeys.push(`customError`),n;for(let e of Object.keys(t.validity)){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}}var tn=class extends Event{constructor(){super(`pk-clear`,{bubbles:!0,cancelable:!1,composed:!0})}},X=[];function nn(e){X.push(e)}function rn(e){for(let t=X.length-1;t>=0;--t)if(X[t]===e){X.splice(t,1);break}}function an(e){return X.length>0&&X[X.length-1]===e}function on(e){let t=X.lastIndexOf(e);return t===-1?[]:X.slice(t+1)}function sn(e){var t,n,r;if(e.panel instanceof Element){let t=e.panel.closest(`pk-popup`);if(t)return t;let n=e.panel.getRootNode();if(n instanceof ShadowRoot&&n.host.localName===`pk-popup`)return n.host}return e.host instanceof HTMLElement?(t=(n=(r=e.host.shadowRoot)==null?void 0:r.querySelector(`pk-popup`))==null?e.host.querySelector(`:scope > pk-popup`):n)==null?e.host.querySelector(`pk-popup`):t:null}function cn(e,t={}){let n=e.composedPath();if(t.host&&n.includes(t.host)||t.anchor&&n.includes(t.anchor)||t.panel&&n.includes(t.panel))return!0;let r=sn(t);return r&&n.includes(r)?!0:n.some(e=>{var n,i;return e instanceof HTMLElement?r&&e.classList.contains(`popup`)&&(e===r||r.contains(e))?!0:(n=(i=t.extraMatches)==null?void 0:i.call(t,e))!=null&&n:!1})}function ln(e,t={}){return cn(e,t)}var un=t`
    @layer pk-component {
        .pk-popup-content {
            transform-origin: var(--pk-transform-origin, top);
        }

        .pk-popup-content[data-open] {
            animation: pk-popup-content-in 100ms ease-out;
        }

        .pk-popup-content[data-open][data-side='bottom'] {
            animation-name: pk-popup-content-in-bottom;
        }

        .pk-popup-content[data-open][data-side='top'] {
            animation-name: pk-popup-content-in-top;
        }

        .pk-popup-content[data-open][data-side='left'] {
            animation-name: pk-popup-content-in-left;
        }

        .pk-popup-content[data-open][data-side='right'] {
            animation-name: pk-popup-content-in-right;
        }

        /* Exit: fade + zoom only — matches tw-animate animate-out / tooltip motion. */
        .pk-popup-content.closing {
            animation: pk-popup-content-out 100ms ease-in forwards;
        }
    }

    @keyframes pk-popup-content-in {
        from {
            opacity: 0;
            transform: scale(0.95);
        }

        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes pk-popup-content-out {
        from {
            opacity: 1;
            transform: scale(1);
        }

        to {
            opacity: 0;
            transform: scale(0.95);
        }
    }

    @keyframes pk-popup-content-in-bottom {
        from {
            opacity: 0;
            transform: scale(0.95) translateY(-0.5rem);
        }

        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }

    @keyframes pk-popup-content-in-top {
        from {
            opacity: 0;
            transform: scale(0.95) translateY(0.5rem);
        }

        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }

    @keyframes pk-popup-content-in-left {
        from {
            opacity: 0;
            transform: scale(0.95) translateX(0.5rem);
        }

        to {
            opacity: 1;
            transform: scale(1) translateX(0);
        }
    }

    @keyframes pk-popup-content-in-right {
        from {
            opacity: 0;
            transform: scale(0.95) translateX(-0.5rem);
        }

        to {
            opacity: 1;
            transform: scale(1) translateX(0);
        }
    }
`;function dn(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var fn=new Set,pn=null,mn=new Set([` `,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`PageUp`,`PageDown`,`Home`,`End`]);function hn(e){for(let t of e.composedPath())if(t instanceof HTMLElement&&fn.has(t))return!0;return!1}function gn(e){if(!(e instanceof HTMLElement))return!1;if(e.isContentEditable)return!0;let t=e.tagName;return t===`INPUT`||t===`TEXTAREA`||t===`SELECT`}function _n(){let e=document.body,t=e.style.overflow;e.style.setProperty(`overflow`,`hidden`,`important`);let n=e=>{hn(e)||e.preventDefault()},r=e=>{hn(e)||e.preventDefault()},i=e=>{mn.has(e.key)&&(hn(e)||gn(e.target)||e.preventDefault())};return window.addEventListener(`wheel`,n,{passive:!1,capture:!0}),window.addEventListener(`touchmove`,r,{passive:!1,capture:!0}),window.addEventListener(`keydown`,i,{capture:!0}),()=>{window.removeEventListener(`wheel`,n,{capture:!0}),window.removeEventListener(`touchmove`,r,{capture:!0}),window.removeEventListener(`keydown`,i,{capture:!0}),e.style.removeProperty(`overflow`),t&&(e.style.overflow=t)}}function vn(e){fn.add(e),fn.size===1&&(document.documentElement.classList.add(`pk-scroll-lock`),document.documentElement.style.setProperty(`--pk-scroll-lock-size`,`0px`),pn=_n())}function yn(e){fn.delete(e),fn.size===0&&(pn==null||pn(),pn=null,document.documentElement.classList.remove(`pk-scroll-lock`),document.documentElement.style.removeProperty(`--pk-scroll-lock-size`),document.documentElement.style.removeProperty(`--pk-scroll-lock-gutter`))}function bn(e,t,n=`vertical`,r=`smooth`){let i=dn(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,s=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,l=t.scrollTop,u=t.scrollTop+t.offsetHeight;(n===`horizontal`||n===`both`)&&(o<s?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>c&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n===`vertical`||n===`both`)&&(a<l?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>u&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}var xn=new Set([`ArrowDown`,`ArrowUp`,`ArrowLeft`,`ArrowRight`,`Home`,`End`,`Enter`,` `,`Escape`]);function Sn(e){return e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey}function Cn(e){return e.filter(e=>!e.hasAttribute(`disabled`)&&!e.hasAttribute(`hidden`)&&e.getAttribute(`aria-disabled`)!==`true`&&e.getAttribute(`aria-hidden`)!==`true`)}function wn(e,t,n){if(n){n(t);return}let r=e[t];r instanceof HTMLElement&&`focusControl`in r&&typeof r.focusControl==`function`?r.focusControl():r==null||r.focus()}function Tn(e){var t;if(!e)return;let n=(t=e.shadowRoot)==null?void 0:t.querySelector(`.option`);n instanceof HTMLButtonElement?n.click():e.click()}function En(e,t){var n;let r=Cn(t.items),i=t.loop===!0;if(r.length===0)return t.currentIndex;let a=Math.max(0,t.currentIndex),o=(n=r[a])==null?r[0]:n;switch(a=r.indexOf(o),a<0&&(a=0),e.key){case`ArrowDown`:case`ArrowRight`:return e.preventDefault(),a=i&&a>=r.length-1?0:Math.min(a+1,r.length-1),wn(r,a,t.focusItem),t.onSelect(a),a;case`ArrowUp`:case`ArrowLeft`:return e.preventDefault(),a=i&&a<=0?r.length-1:Math.max(a-1,0),wn(r,a,t.focusItem),t.onSelect(a),a;case`Home`:return e.preventDefault(),a=0,wn(r,a,t.focusItem),t.onSelect(a),a;case`End`:return e.preventDefault(),a=r.length-1,wn(r,a,t.focusItem),t.onSelect(a),a;case`Enter`:case` `:return t.multiselect||(e.preventDefault(),Tn(r[a])),a;case`Escape`:var s;return e.preventDefault(),(s=t.onClose)==null||s.call(t),a;default:return a}}function Dn(e,t){let n=``,r=0,i=()=>{n=``,window.clearTimeout(r)};return{handleKey:a=>{var o,s;if(a.key.length!==1||a.ctrlKey||a.metaKey||a.altKey)return;n+=a.key.toLowerCase(),window.clearTimeout(r),r=window.setTimeout(i,750);let c=Cn(e);for(let e=0;e<c.length;e+=1)if(((o=(s=c[e])==null?void 0:s.textContent)==null?``:o).trim().toLowerCase().startsWith(n)){t(e),a.preventDefault();return}},reset:i}}var On=e=>e.hidden||e.hasAttribute(`data-pk-filter-empty`),kn=e=>{let t=[...e.querySelectorAll(`:scope > pk-option, :scope > pk-option-group, :scope > pk-separator`)],n=(e,n)=>{for(let r=e+n;n<0?r>=0:r<t.length;r+=n){let e=t[r];if(e&&e.localName!==`pk-separator`)return e}return null};for(let e=0;e<t.length;e+=1){let r=t[e];if(!r||r.localName!==`pk-separator`)continue;let i=n(e,-1),a=n(e,1);r.hidden=!i||!a||On(i)||On(a)}},An,jn=[un,t`
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
            --pk-select-trigger-border-width: 1px;
            --pk-select-trigger-min-height: var(--pk-control-height-default);
            --pk-select-item-min-height: var(--pk-input-height);
            --pk-select-item-padding-block: calc((var(--pk-control-height-default) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-select-item-padding-inline: 10px;
            --pk-select-item-padding-inline-end: 2rem;
            --pk-select-item-font-size: var(--pk-control-font-default);
            --pk-select-item-line-height: var(--pk-input-control-line-height, 1.25rem);
            --pk-select-item-indicator-size: 0.75rem;
            --pk-select-item-indicator-inset: 0.5rem;
            /* v1 SelectLabel default: text-xs → 12px */
            --pk-select-group-label-font-size: 12px;
            --pk-select-decoration-size: 0.875rem;
        }

        :host([width='full']) {
            display: block;
            width: 100%;
        }

        :host([width='full']) .control {
            width: 100%;
        }

        :host([width='full']) button.control .icon {
            margin-inline-start: auto;
        }

        .control {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            /* Fill the host when consumers set min-width/width on :host. */
            width: 100%;
            max-width: 100%;
            min-width: 0;
            min-height: var(--pk-select-trigger-min-height);
            margin: 0;
            padding: var(--pk-select-item-padding-block) var(--pk-select-item-padding-inline);
            border: var(--pk-select-trigger-border-width) solid transparent;
            border-radius: var(--pk-radius-lg);
            --pk-select-fill: var(--pk-color-slate-250);
            --pk-select-fill-hover: var(--pk-color-slate-300);
            background: var(--pk-select-fill);
            color: var(--pk-color-gray-700);
            font: inherit;
            font-size: var(--pk-select-item-font-size);
            line-height: var(--pk-input-control-line-height, 1.25rem);
            white-space: nowrap;
            cursor: pointer;
            outline: none;
            box-sizing: border-box;
            transition: border-color 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
        }

        button.control {
            appearance: none;
            -webkit-appearance: none;
            text-align: left;
            background-color: var(--pk-select-fill);
            border: var(--pk-select-trigger-border-width) solid transparent;
        }

        :host(:not([disabled])) .control:hover:not(.is-disabled):not(:disabled),
        :host(:not([disabled])) button.control:hover:not(.is-disabled):not(:disabled) {
            background: var(--pk-select-fill-hover);
        }

        :host(:not([disabled])) button.control:hover:not(.is-disabled):not(:disabled) {
            background-color: var(--pk-select-fill-hover);
        }

        :host(:not([invalid]):not(:state(user-invalid))) button.control:focus-visible,
        :host(:not([invalid]):not(:state(user-invalid))[data-state='focus-visible']) button.control {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
        }

        .control.is-disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .trigger {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 auto;
            min-width: 0;
            padding: 0;
            border: 0;
            background: transparent;
            color: inherit;
            font: inherit;
            cursor: inherit;
            outline: none;
        }

        .control > .trigger:not(.trigger--icon) {
            flex: 0 1 auto;
            justify-content: flex-start;
        }

        .trigger--icon {
            width: 1.25rem;
        }

        .trigger-start {
            display: none;
            flex: 0 0 auto;
            align-items: center;
            /* Decorations must not reserve inline text descender space. */
            line-height: 0;
        }

        .trigger-start.has-decoration {
            display: inline-flex;
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
            width: var(--pk-select-decoration-size);
            height: var(--pk-select-decoration-size);
        }

        .value {
            flex: 1 1 auto;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: left;
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

        /* Extra space before the expand chevron (control gap stays for start icon ↔ label). */
        .control > .icon,
        .control > .trigger--icon {
            margin-inline-start: 0.25rem;
        }

        .icon svg {
            display: block;
            width: 0.75rem;
            height: 0.75rem;
        }

        .tags {
            display: flex;
            flex: 0 1 auto;
            flex-wrap: wrap;
            gap: 0.25rem;
            min-width: 0;
        }

        .tag {
            display: inline-flex;
            align-items: center;
            gap: 0.25rem;
            max-width: 10ch;
            padding: 0.125rem 0.375rem;
            border-radius: var(--pk-radius-sm);
            background: var(--pk-color-gray-200);
            color: var(--pk-color-gray-800);
            font-size: 12px;
            line-height: 1.3;
        }

        .tag-label {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .tag-remove {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 0.875rem;
            height: 0.875rem;
            padding: 0;
            border: 0;
            border-radius: var(--pk-radius-sm);
            background: transparent;
            color: var(--pk-color-gray-600);
            cursor: pointer;
        }

        .tag-remove:hover {
            background: rgb(0 0 0 / 8%);
        }

        .clear-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 1.25rem;
            height: 1.25rem;
            padding: 0;
            border: 0;
            border-radius: var(--pk-radius-sm);
            background: transparent;
            color: var(--pk-color-gray-600);
            cursor: pointer;
            flex-shrink: 0;
        }

        .clear-button:hover {
            background: rgb(0 0 0 / 6%);
            color: var(--pk-color-gray-800);
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
            min-width: var(--pk-select-anchor-width, 8rem);
            max-height: 16rem;
            overflow: auto;
            padding: 0;
            border: 0;
            border-radius: var(--pk-radius-md);
            background: var(--pk-color-white);
            box-shadow: var(--pk-shadow-popup);
            color: var(--pk-color-gray-700);
            outline: none;
        }

        .panel[hidden] {
            display: none !important;
        }

        :host([invalid]) .control,
        :host(:state(user-invalid)) .control {
            border-color: var(--pk-color-rose-600);
        }

        :host([invalid]) button.control:focus-visible,
        :host([invalid][data-state='focus-visible']) button.control,
        :host(:state(user-invalid)) button.control:focus-visible,
        :host(:state(user-invalid)[data-state='focus-visible']) button.control {
            border-color: var(--pk-color-rose-600);
            box-shadow: var(--pk-input-invalid-focus-shadow);
        }

        :host([size='xxs']) {
            --pk-select-trigger-min-height: var(--pk-control-height-xxs);
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: calc((var(--pk-control-height-xxs) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-select-item-padding-inline: 8px;
            --pk-select-item-padding-inline-end: 1.75rem;
            --pk-select-item-font-size: var(--pk-control-font-xxs);
            --pk-select-item-line-height: var(--pk-input-control-line-height, 1.25rem);
            /* v1 SelectLabel xs: text-[11px] */
            --pk-select-group-label-font-size: 11px;
            --pk-select-decoration-size: 0.625rem;
        }

        :host([size='xs']) {
            --pk-select-trigger-min-height: var(--pk-control-height-xs);
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: calc((var(--pk-control-height-xs) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-select-item-padding-inline: 8px;
            --pk-select-item-padding-inline-end: 1.75rem;
            --pk-select-item-font-size: var(--pk-control-font-xs);
            --pk-select-item-line-height: var(--pk-input-control-line-height, 1.25rem);
            /* v1 SelectLabel xs: text-[11px] */
            --pk-select-group-label-font-size: 11px;
            --pk-select-decoration-size: 0.625rem;
        }

        :host([size='xxs']) .control {
            border-radius: var(--pk-radius-sm);
            /* Keep the trigger line box consistent with the shared control scale. */
            line-height: var(--pk-select-item-line-height, 1.25);
        }

        :host([size='xs']) .control {
            border-radius: var(--pk-radius-sm);
            /* Keep the trigger line box consistent with the shared control scale. */
            line-height: var(--pk-select-item-line-height, 1.25);
        }

        :host([size='xxs']) .icon svg {
            width: 0.625rem;
            height: 0.625rem;
        }

        :host([size='xs']) .icon svg {
            width: 0.625rem;
            height: 0.625rem;
        }

        /* Options live in light DOM; ::slotted pushes size tokens onto each pk-option
         * host so the open listbox matches the trigger (inheritance alone is flaky when
         * the panel is promoted to the popover top layer). */
        :host([size='xxs']) ::slotted(pk-option) {
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: calc((var(--pk-control-height-xxs) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-select-item-padding-inline: 8px;
            --pk-select-item-padding-inline-end: 1.75rem;
            --pk-select-item-font-size: var(--pk-control-font-xxs);
            --pk-select-item-line-height: var(--pk-input-control-line-height, 1.25rem);
            --pk-select-item-indicator-size: 0.625rem;
        }

        :host([size='xs']) ::slotted(pk-option) {
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: calc((var(--pk-control-height-xs) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-select-item-padding-inline: 8px;
            --pk-select-item-padding-inline-end: 1.75rem;
            --pk-select-item-font-size: var(--pk-control-font-xs);
            --pk-select-item-line-height: var(--pk-input-control-line-height, 1.25rem);
            --pk-select-item-indicator-size: 0.625rem;
        }

        :host([size='xxs']) .panel {
            max-height: 12rem;
        }

        :host([size='xs']) .panel {
            max-height: 12rem;
        }

        /* Editable-table cells only (class set by pk-editable-table) — compact chip + menu. */
        :host(.cell-pk-control) {
            --pk-select-trigger-min-height: 0;
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: 5px;
            --pk-select-item-padding-inline: 8px;
            --pk-select-item-padding-inline-end: 1.5rem;
            --pk-select-item-font-size: 11px;
            --pk-select-item-line-height: 1.2;
            /* Compact table chip — match xxs label size. */
            --pk-select-group-label-font-size: 11px;
            --pk-select-decoration-size: 0.625rem;
            --pk-select-item-indicator-size: 0.625rem;
        }

        :host(.cell-pk-control) .control {
            border-radius: var(--pk-radius-sm);
            line-height: var(--pk-select-item-line-height, 1.2);
        }

        :host(.cell-pk-control) ::slotted(pk-option) {
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: 5px;
            --pk-select-item-padding-inline: 8px;
            --pk-select-item-padding-inline-end: 1.5rem;
            --pk-select-item-font-size: 11px;
            --pk-select-item-line-height: 1.2;
            --pk-select-item-indicator-size: 0.625rem;
        }

        :host(.cell-pk-control) .panel {
            max-height: 11rem;
        }

        :host([size='sm']) {
            --pk-select-trigger-min-height: var(--pk-control-height-sm);
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: calc((var(--pk-control-height-sm) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-select-item-padding-inline: 10px;
            --pk-select-item-padding-inline-end: 1.75rem;
            --pk-select-item-font-size: var(--pk-control-font-sm);
            --pk-select-item-indicator-inset: 0.625rem;
            /* v1 SelectLabel sm: text-[12px] */
            --pk-select-group-label-font-size: 12px;
            --pk-select-decoration-size: 0.6875rem;
        }

        :host([size='sm']) .control {
            border-radius: var(--pk-radius-md);
        }

        :host([size='sm']) .icon svg {
            width: 0.6875rem;
            height: 0.6875rem;
        }

        :host([size='lg']) {
            --pk-select-trigger-min-height: var(--pk-control-height-lg);
            --pk-select-item-padding-block: calc((var(--pk-control-height-lg) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-select-item-padding-inline: 12px;
            --pk-select-item-font-size: var(--pk-control-font-lg);
            --pk-select-item-indicator-inset: 0.75rem;
            /* v1 SelectLabel lg: text-sm → 14px */
            --pk-select-group-label-font-size: 14px;
            --pk-select-decoration-size: 1rem;
        }

        :host([size='xl']) {
            --pk-select-trigger-min-height: var(--pk-control-height-xl);
            --pk-select-item-padding-block: calc((var(--pk-control-height-xl) - var(--pk-input-control-line-height, 1.25rem) - 2px) / 2);
            --pk-select-item-padding-inline: 14px;
            --pk-select-item-padding-inline-end: 2.25rem;
            --pk-select-item-font-size: var(--pk-control-font-xl);
            --pk-select-item-indicator-inset: 0.875rem;
            /* v1 SelectLabel xl: text-base → 16px */
            --pk-select-group-label-font-size: 16px;
            --pk-select-decoration-size: 1.125rem;
        }

        :host([size='xl']) .icon svg {
            width: 0.875rem;
            height: 0.875rem;
        }
    }
`],Mn=l(f.chevronDown),Z=(An=class extends Y{constructor(...e){super(...e),this.assumeInteractionOn=[`blur`,`input`],this.open=!1,this.multiple=!1,this.placement=`bottom-start`,this.sideOffset=4,this.clearable=!1,this.withClear=!1,this.invalid=!1,this.size=`default`,this.placeholder=``,this.value=``,this.defaultValue=``,this.values=[],this.defaultValues=[],this.ariaLabel=null,this.loopFocus=!1,this.hasSlotController=new p(this,`start`,`end`),this.listboxId=v(`pk-select-listbox`),this.triggerId=v(`pk-select-trigger`),this.options=[],this.highlightedIndex=0,this.dismissRegistered=!1,this.panelEventTarget=null,this.typeToSelect=Dn([],()=>{}),this.closing=!1,this.panelAnimated=!1,this.handleOptionsMutation=(e={})=>{let t=this.getOptionElements(),n=t.length!==this.options.length||t.some((e,t)=>e!==this.options[t]);this.options=t,n&&this.open&&this.observeOptionSizes(),this.applySelection(),this.updateTypeToSelect(),e.render!==!1&&n&&this.requestUpdate()},this.syncOptions=()=>{this.handleOptionsMutation({render:!0})},this.handlePopupReposition=()=>{this.fitPanelToOptions(!this.panelAnimated)},this.togglePanel=e=>{e==null||e.preventDefault(),e==null||e.stopPropagation(),!(this.disabled||this.closing)&&(this.open?this.closePanel(`api`):this.openPanel())},this.onDocumentPointerDown=e=>{this.isPointerInside(e)||this.closePanel(`light-dismiss`)},this.onDocumentKeyDown=e=>{if(this.open){if(e.key===`Escape`){if(!an(this))return;e.preventDefault(),e.stopPropagation(),this.closePanel(`escape`)}else(xn.has(e.key)||Sn(e))&&cn(e,{anchor:this.getPopupAnchor(),panel:this.panelElement})&&(e.preventDefault(),e.stopPropagation(),this.onListboxKeyDown(e))}},this.handleOptionSelect=e=>{let{value:t}=e.detail;this.multiple?this.values=this.values.includes(t)?this.values.filter(e=>e!==t):[...this.values,t]:(this.value=t,this.closePanel(`api`)),this.applySelection(),this.emitValueChange()},this.handleOptionHighlight=e=>{if(!this.open)return;let t=this.getEnabledVisibleOptions().findIndex(t=>t.value===e.detail.value);t!==-1&&t!==this.highlightedIndex&&(this.highlightedIndex=t,this.syncHighlight(!1))},this.onKeyDown=e=>{this.open?this.onListboxKeyDown(e):(e.key===`ArrowDown`||e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.openPanel())},this.handleListboxKeyDownEvent=e=>{this.open&&this.onListboxKeyDown(e.detail.keyboardEvent)}}static get validators(){return[...super.validators,en(),{observedAttributes:[`required`],checkValidity:e=>{let t=e,n={message:`Please select an item in the list.`,isValid:!0,invalidKeys:[]};return!t.required||!(t.multiple?t.values.length===0:!t.value)||(n.isValid=!1,n.invalidKeys.push(`valueMissing`)),n}}]}get panelElement(){var e,t;return(e=(t=this.popupElement)==null?void 0:t.getContentElement())==null?null:e}connectedCallback(){this.refreshOptions(),super.connectedCallback(),this.addEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent),this.addEventListener(`keydown`,this.onKeyDown),this.optionsObserver=new MutationObserver(()=>{this.handleOptionsMutation({render:!0})}),this.optionsObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var e,t,n;this.unbindPanelEvents(),this.removeEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent),this.removeEventListener(`keydown`,this.onKeyDown),(e=this.optionsObserver)==null||e.disconnect(),(t=this.optionResizeObserver)==null||t.disconnect(),cancelAnimationFrame((n=this.optionResizeFrame)==null?0:n),this.optionResizeFrame=void 0,this.closePanel(`api`),super.disconnectedCallback()}updated(e){(e.has(`value`)||e.has(`values`)||e.has(`multiple`))&&this.applySelection(),(e.has(`values`)||e.has(`multiple`))&&this.syncFormValue(),super.updated(e)}getOptionElements(){var e;let t=(e=this.popupElement)==null||(e=e.getContentElement())==null?void 0:e.querySelectorAll(`pk-option`);return t&&t.length>0?[...t]:[...this.querySelectorAll(`pk-option`)]}refreshOptions(){this.handleOptionsMutation({render:!1})}bindPanelEvents(){let e=this.panelElement;e&&e!==this.panelEventTarget&&(this.unbindPanelEvents(),this.panelEventTarget=e,e.addEventListener(`pk-option-select`,this.handleOptionSelect),e.addEventListener(`pk-option-highlight`,this.handleOptionHighlight),e.addEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent))}unbindPanelEvents(){this.panelEventTarget&&(this.panelEventTarget.removeEventListener(`pk-option-select`,this.handleOptionSelect),this.panelEventTarget.removeEventListener(`pk-option-highlight`,this.handleOptionHighlight),this.panelEventTarget.removeEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent),this.panelEventTarget=null)}get validationTarget(){var e,t;return(e=(t=this.input)==null?this.triggerButton:t)==null?this.controlElement:e}getAriaMirrorTarget(){var e,t;return(e=(t=this.triggerButton)==null?this.controlElement:t)==null?null:e}syncFormValue(){if(!this.name)this.setFormValue(null);else if(this.multiple){let e=new FormData;for(let t of this.values)e.append(this.name,t);this.setFormValue(e)}else this.setFormValue(this.value||``)}resetToDefaultValue(){this.multiple?this.values=[...this.defaultValues]:this.value=this.defaultValue,this.applySelection()}restoreFormState(e){e instanceof FormData&&this.name?this.values=e.getAll(this.name).map(String):typeof e==`string`&&(this.value=e)}isOptionInHiddenGroup(e){let t=e.closest(`pk-option-group`);return!!(t!=null&&t.hidden)}getVisibleOptions(){return this.options.filter(e=>!this.isOptionInHiddenGroup(e))}getEnabledVisibleOptions(){return this.getVisibleOptions().filter(e=>!e.disabled)}isSelected(e){return this.multiple?this.values.includes(e):this.value===e}applySelection(){let e=this.getVisibleOptions();for(let t of this.options)t.selected=this.isSelected(t.value),t.hidden=!e.includes(t),t.optionId=`${this.listboxId}-option-${t.value}`;for(let e of this.querySelectorAll(`pk-option-group`)){let t=[...e.querySelectorAll(`pk-option`)];e.hidden=t.length>0&&t.every(e=>e.hidden)}kn(this),this.syncValueInput(),this.syncTriggerDecorations(),this.open&&this.syncHighlight()}syncValueInput(){this.input&&(this.multiple?(this.input.value=this.values.join(`,`),this.input.required=this.required):(this.input.value=this.value,this.input.required=this.required))}getDisplayValue(){var e;if(this.multiple){let e=this.getSelectedOptions().map(e=>e.getLabel());return e.length>0?e.join(`, `):this.placeholder}return((e=this.options.find(e=>e.value===this.value))==null?void 0:e.getLabel())||this.placeholder}getSelectedOptions(){return this.options.filter(e=>this.isSelected(e.value))}syncTriggerDecorations(){let e=this.triggerStartElement;if(!e||this.multiple)return;e.replaceChildren(),e.classList.remove(`has-decoration`);let t=this.options.find(e=>e.value===this.value);if(t){for(let n of t.getStartElements())e.append(n.cloneNode(!0));e.classList.toggle(`has-decoration`,e.childElementCount>0)}}hasSelection(){return this.multiple?this.values.length>0:this.options.some(e=>e.value===this.value)||!!this.value}syncHighlightedIndexToSelection(){if(this.multiple)return;let e=this.getEnabledVisibleOptions();if(e.length===0)return;let t=e.findIndex(e=>e.value===this.value);t>=0&&(this.highlightedIndex=t)}observeOptionSizes(){var e,t;(e=this.optionResizeObserver)==null||e.disconnect(),cancelAnimationFrame((t=this.optionResizeFrame)==null?0:t),this.optionResizeFrame=void 0,this.optionResizeObserver!=null||(this.optionResizeObserver=new ResizeObserver(()=>{var e;cancelAnimationFrame((e=this.optionResizeFrame)==null?0:e),this.optionResizeFrame=requestAnimationFrame(()=>{this.optionResizeFrame=void 0,this.fitPanelToOptions()})}));for(let e of this.options)this.optionResizeObserver.observe(e)}fitPanelToOptions(e=!1){let t=this.panelElement;if(!this.open||this.closing||!t||!t.offsetHeight)return;let n=getComputedStyle(t),r=Number.parseFloat(n.maxHeight),i=Number.parseFloat(n.getPropertyValue(`--pk-popup-available-height`)),a=Math.min(Number.isFinite(r)?r:1/0,Number.isFinite(i)?i:1/0),o=Number.parseFloat(n.borderTopWidth)||0,s=Number.parseFloat(n.borderBottomWidth)||0,c=Number.parseFloat(n.paddingTop)||0,l=Number.parseFloat(n.paddingBottom)||0,u=t.getBoundingClientRect(),d=u.height/t.offsetHeight,f=this.options.filter(e=>e.getClientRects().length>0).map(e=>{let n=e.getBoundingClientRect();return{option:e,top:(n.top-u.top)/d+t.scrollTop-o,bottom:(n.bottom-u.top)/d+t.scrollTop-o}});if(!f.length){t.style.removeProperty(`height`);return}let p=Math.max(0,a-o-s),m=0;if(e){let e=this.getEnabledVisibleOptions()[this.highlightedIndex],t=f.findIndex(t=>t.option===e);for(;m<t&&f[t].bottom-(m?f[m].top-c:0)+l>p;)m++}else{let e=f.findIndex(e=>e.bottom>t.scrollTop+c+.5);m=Math.max(0,e)}let h=m?f[m].top-c:0,g=0;for(let e=m;e<f.length;e++){let t=f[e].bottom-h+l;if(t>p+.5)break;g=t}g=Math.min(a,(g||p)+o+s);let _=`${Math.max(0,Math.round(g*100)/100)}px`;t.style.height!==_&&(t.style.height=_),e&&(t.scrollTop=h)}syncHighlight(e=!0){let t=this.getEnabledVisibleOptions();for(let e of this.options)e.highlighted=!1,e.focusIndex=-1;if(t.length===0){this.highlightedIndex=0;return}this.highlightedIndex>=t.length&&(this.highlightedIndex=0);let n=t[this.highlightedIndex];n&&this.panelElement&&(n.highlighted=!0,n.focusIndex=0,e&&bn(n,this.panelElement,`vertical`,`auto`))}updateTypeToSelect(){this.typeToSelect=Dn(this.getEnabledVisibleOptions(),e=>{var t;this.highlightedIndex=e,this.syncHighlight(),(t=this.getEnabledVisibleOptions()[e])==null||t.focusControl()})}getPopupAnchor(){var e;return(e=this.controlElement)==null?null:e}getActiveDescendantId(){var e;return((e=this.getEnabledVisibleOptions()[this.highlightedIndex])==null?void 0:e.optionId)||null}show(){var e=this;return g(function*(){e.open||e.closing||e.disabled||(yield e.openPanel())})()}hide(e=`api`){var t=this;return g(function*(){t.open&&!t.closing&&(yield t.closePanel(e))})()}openPanel(){var e=this;let t=this.getPopupAnchor();if(!t||this.closing)return Promise.resolve();this.dispatchEvent(new Bt),this.closing=!1,this.panelAnimated=!1,this.open=!0,this.popupElement.active=!0,this.applySelection(),this.syncHighlightedIndexToSelection(),this.panelElement&&(this.panelElement.style.removeProperty(`height`),this.panelElement.hidden=!1,S(this.panelElement,this.placement));let n=t.getBoundingClientRect().width;return this.style.setProperty(`--pk-select-anchor-width`,`${n}px`),this.registerDismissHandlers(),this.syncHighlight(),this.updateTypeToSelect(),this.updateComplete.then(g(function*(){var t;let n=yield C(e.popupElement,e.placement,300,{requireEvent:!0});e.panelElement&&S(e.panelElement,n),e.fitPanelToOptions(!0),e.observeOptionSizes(),e.panelAnimated=!0,e.bindPanelEvents(),e.refreshOptions(),(t=e.getEnabledVisibleOptions()[e.highlightedIndex])==null||t.focusControl(),e.dispatchEvent(new Vt),e.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!0},bubbles:!0,composed:!0}))}))}closePanel(e=`unknown`){var t=this;return g(function*(){var n,r,i,a;if(!t.open||t.closing)return;let o=new Ht(e);t.dispatchEvent(o)&&(t.typeToSelect.reset(),(n=t.optionResizeObserver)==null||n.disconnect(),cancelAnimationFrame((r=t.optionResizeFrame)==null?0:r),t.optionResizeFrame=void 0,t.unbindPanelEvents(),t.unregisterDismissHandlers(),t.closing=!0,t.panelAnimated=!1,yield t.waitForExitAnimation(),t.open=!1,t.closing=!1,t.panelAnimated=!1,t.panelElement&&(t.panelElement.hidden=!0,t.panelElement.removeAttribute(`data-side`)),t.popupElement.active=!1,t.dispatchEvent(new Ut),t.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!1},bubbles:!0,composed:!0})),t.shouldReturnFocusToTrigger(e)?(i=t.triggerButton)==null||i.focus({preventScroll:!0}):(a=t.triggerButton)==null||a.blur())})()}waitForExitAnimation(){let e=this.panelElement;return e?new Promise(t=>{let n=!1,r=()=>{n||(n=!0,e.removeEventListener(`animationend`,i),window.clearTimeout(a),e.classList.remove(`closing`),t())},i=t=>{t.target===e&&t.animationName.startsWith(`pk-popup-content-out`)&&r()};e.classList.add(`closing`),e.addEventListener(`animationend`,i);let a=window.setTimeout(r,150)}):Promise.resolve()}shouldReturnFocusToTrigger(e){return e!==`light-dismiss`&&e!==`pointer-dismiss`}registerDismissHandlers(){nn(this),this.dismissRegistered=!0,document.addEventListener(`pointerdown`,this.onDocumentPointerDown,!0),document.addEventListener(`keydown`,this.onDocumentKeyDown,!0)}unregisterDismissHandlers(){this.dismissRegistered&&(rn(this),this.dismissRegistered=!1),document.removeEventListener(`pointerdown`,this.onDocumentPointerDown,!0),document.removeEventListener(`keydown`,this.onDocumentKeyDown,!0)}isPointerInside(e){return ln(e,{anchor:this.getPopupAnchor(),panel:this.panelElement})}removeTag(e,t){t.preventDefault(),t.stopPropagation(),this.values=this.values.filter(t=>t!==e),this.applySelection(),this.emitValueChange()}handleClear(e){var t;e.preventDefault(),e.stopPropagation(),this.multiple?this.values=[]:this.value=``,this.applySelection(),this.dispatchEvent(new tn),this.emitValueChange(),(t=this.triggerButton)==null||t.focus()}emitValueChange(){this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{value:this.multiple?[...this.values]:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}onListboxKeyDown(e){let t=this.getEnabledVisibleOptions();this.highlightedIndex=En(e,{items:t,currentIndex:this.highlightedIndex,multiselect:this.multiple,loop:this.loopFocus,onSelect:e=>{this.highlightedIndex=e,this.syncHighlight()},focusItem:e=>{var n;(n=t[e])==null||n.focusControl()},onClose:()=>{this.closePanel(`escape`)}}),e.key.length!==1||e.ctrlKey||e.metaKey||e.altKey||this.typeToSelect.handleKey(e)}renderTags(){return this.getSelectedOptions().map(e=>i`
            <span class="tag" part="tag">
                <span class="tag-label">${e.getLabel()}</span>
                <button
                    type="button"
                    class="tag-remove"
                    part="tag-remove"
                    aria-label=${`Remove ${e.getLabel()}`}
                    @click=${t=>this.removeTag(e.value,t)}
                >
                    ×
                </button>
            </span>
        `)}renderChevronIcon(){return i`
            <span class="icon" aria-hidden="true">${m(Mn)}</span>
        `}renderHostDecorationSlot(e){return this.hasSlotController.test(e)?i`
            <span part=${e} class=${e===`start`?`control-start`:`control-end`}>
                <slot name=${e}></slot>
            </span>
        `:i`<slot name=${e} hidden></slot>`}render(){var e,t,n;let a=this.getDisplayValue(),o=!this.hasSelection(),s=(this.clearable||this.withClear)&&this.hasSelection()&&!this.disabled;return i`
            <input
                class="value-input"
                part="value-input"
                tabindex="-1"
                aria-hidden="true"
                .value=${this.multiple?this.values.join(`,`):this.value}
                ?required=${this.required}
                @input=${()=>this.updateValidity()}
            />
            ${this.multiple?i`
                    <div
                        part="control"
                        class=${h({control:!0,"is-disabled":this.disabled})}
                    >
                        ${this.renderHostDecorationSlot(`start`)}
                        ${this.hasSelection()?i`
                                <div class="tags" part="tags">${this.renderTags()}</div>
                                ${s?i`
                                        <button
                                            type="button"
                                            class="clear-button"
                                            part="clear-button"
                                            aria-label="Clear selection"
                                            @click=${this.handleClear}
                                        >
                                            ×
                                        </button>
                                    `:r}
                            `:i`
                                <button
                                    part="trigger"
                                    type="button"
                                    class="trigger"
                                    id=${this.triggerId}
                                    ?disabled=${this.disabled}
                                    aria-label=${(e=this.ariaLabel)==null?r:e}
                                    aria-haspopup="listbox"
                                    aria-expanded=${this.open?`true`:`false`}
                                    aria-controls=${this.listboxId}
                                    @click=${this.togglePanel}
                                >
                                    <span class="value is-placeholder">${this.placeholder}</span>
                                </button>
                            `}
                        ${this.renderHostDecorationSlot(`end`)}
                        <button
                            type="button"
                            class="trigger trigger--icon"
                            part="trigger expand-button"
                            aria-label="Toggle options"
                            ?disabled=${this.disabled}
                            @click=${this.togglePanel}
                        >
                            ${this.renderChevronIcon()}
                        </button>
                    </div>
                `:i`
                    <button
                        part="control"
                        type="button"
                        class=${h({control:!0,"is-disabled":this.disabled})}
                        id=${this.triggerId}
                        ?disabled=${this.disabled}
                        aria-label=${(t=this.ariaLabel)==null?r:t}
                        aria-haspopup="listbox"
                        aria-expanded=${this.open?`true`:`false`}
                        aria-controls=${this.listboxId}
                        @click=${this.togglePanel}
                    >
                        ${this.renderHostDecorationSlot(`start`)}
                        <span part="trigger-start" class="trigger-start"></span>
                        <span
                            class=${h({value:!0,"is-placeholder":o})}
                        >${a}</span>
                        ${s?i`
                                <span
                                    class="clear-button"
                                    part="clear-button"
                                    role="button"
                                    tabindex="-1"
                                    aria-label="Clear selection"
                                    @click=${this.handleClear}
                                >
                                    ×
                                </span>
                            `:r}
                        ${this.renderHostDecorationSlot(`end`)}
                        ${this.renderChevronIcon()}
                    </button>
                `}
            <pk-popup
                .anchor=${(n=this.getPopupAnchor())==null?``:n}
                .placement=${this.placement}
                .distance=${this.sideOffset}
                .sync=${`width`}
                auto-size="vertical"
                @pk-reposition=${this.handlePopupReposition}
                flip
                shift
            >
                <div
                    part="panel"
                    class=${h({panel:!0,"pk-popup-content":!0,closing:this.closing})}
                    id=${this.listboxId}
                    role="listbox"
                    aria-multiselectable=${this.multiple?`true`:`false`}
                    tabindex="-1"
                    ?hidden=${!this.open&&!this.closing}
                    data-open=${this.panelAnimated&&!this.closing?``:r}
                    @slotchange=${this.syncOptions}
                >
                    <slot></slot>
                </div>
            </pk-popup>
        `}},An.styles=jn,An);o([u({type:Boolean,reflect:!0})],Z.prototype,`open`,void 0),o([u({type:Boolean,reflect:!0})],Z.prototype,`multiple`,void 0),o([u({reflect:!0})],Z.prototype,`placement`,void 0),o([u({attribute:`side-offset`,type:Number})],Z.prototype,`sideOffset`,void 0),o([u({type:Boolean,reflect:!0})],Z.prototype,`clearable`,void 0),o([u({attribute:`with-clear`,type:Boolean})],Z.prototype,`withClear`,void 0),o([u({type:Boolean,reflect:!0})],Z.prototype,`invalid`,void 0),o([u({reflect:!0})],Z.prototype,`size`,void 0),o([u({reflect:!0})],Z.prototype,`width`,void 0),o([u()],Z.prototype,`placeholder`,void 0),o([u()],Z.prototype,`value`,void 0),o([u({attribute:`default-value`})],Z.prototype,`defaultValue`,void 0),o([u({type:Array,attribute:!1})],Z.prototype,`values`,void 0),o([u({attribute:!1})],Z.prototype,`defaultValues`,void 0),o([u({attribute:`aria-label`})],Z.prototype,`ariaLabel`,void 0),o([u({attribute:`loop-focus`,type:Boolean})],Z.prototype,`loopFocus`,void 0),o([s(`.trigger-start`)],Z.prototype,`triggerStartElement`,void 0),o([s(`pk-popup`)],Z.prototype,`popupElement`,void 0),o([s(`.control`)],Z.prototype,`controlElement`,void 0),o([s(`button.control, .control > button.trigger`)],Z.prototype,`triggerButton`,void 0),o([s(`.value-input`)],Z.prototype,`input`,void 0),o([d()],Z.prototype,`highlightedIndex`,void 0),o([d()],Z.prototype,`closing`,void 0),o([d()],Z.prototype,`panelAnimated`,void 0),Z=o([c(`pk-select`)],Z);var Nn;function Pn(e,t){let n=String(e==null?``:e),r=String(t==null?``:t).trim();if(!r)return[{text:n,match:!1}];let i=n.toLowerCase(),a=r.toLowerCase(),o=[],s=0,c=i.indexOf(a);for(;c!==-1;)c>s&&o.push({text:n.slice(s,c),match:!1}),o.push({text:n.slice(c,c+r.length),match:!0}),s=c+r.length,c=i.indexOf(a,s);return s<n.length&&o.push({text:n.slice(s),match:!1}),o.length>0?o:[{text:n,match:!1}]}var Fn=t`
    @layer pk-component {
        :host {
            display: block;
            /*
             * Slotted option labels inherit type metrics from this host (same
             * Craft-vs-Tailwind trap as pk-dropdown-item). Size tokens arrive via
             * pk-select ::slotted(pk-option) custom properties.
             */
            font-family: var(--pk-font-family);
            font-size: var(--pk-select-item-font-size, var(--pk-font-size-base));
            line-height: var(--pk-select-item-line-height, 1.4);
            color: var(--pk-color-gray-700);
        }

        .option {
            position: relative;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            width: 100%;
            margin: 0;
            min-height: var(--pk-select-item-min-height, var(--pk-input-height));
            padding-block: var(--pk-select-item-padding-block, 6px);
            padding-inline-start: var(--pk-select-item-padding-inline, 10px);
            padding-inline-end: var(--pk-select-item-padding-inline-end, 2rem);
            border: var(--pk-select-trigger-border-width, 1px) solid transparent;
            background: transparent;
            color: inherit;
            font: inherit;
            font-family: var(--pk-font-family);
            font-size: var(--pk-select-item-font-size, var(--pk-font-size-base));
            line-height: var(--pk-select-item-line-height, 1.4);
            text-align: left;
            white-space: nowrap;
            cursor: default;
            user-select: none;
            outline: none;
            box-sizing: border-box;
        }

        .start {
            display: none;
            flex: 0 0 auto;
            align-items: center;
            /* Decorations must not reserve inline text descender space. */
            line-height: 0;
        }

        :host([data-has-start]) .start {
            display: inline-flex;
        }

        :host([hidden]) {
            display: none !important;
        }

        .option:focus-visible,
        :host([highlighted]) .option {
            background: var(--pk-color-slate-100);
        }

        :host([disabled]) .option,
        .option[aria-disabled='true'] {
            pointer-events: none;
            opacity: 0.5;
        }

        .check {
            position: absolute;
            inset-inline-end: var(--pk-select-item-indicator-inset, 0.5rem);
            top: 50%;
            display: none;
            align-items: center;
            justify-content: center;
            width: var(--pk-select-item-indicator-size, 0.75rem);
            height: var(--pk-select-item-indicator-size, 0.75rem);
            color: var(--pk-color-gray-700);
            pointer-events: none;
            transform: translateY(-50%);
            line-height: 0;
        }

        :host([selected]) .check {
            display: inline-flex;
        }

        .check svg {
            display: block;
            width: var(--pk-select-item-indicator-size, 0.75rem);
            height: var(--pk-select-item-indicator-size, 0.75rem);
            flex-shrink: 0;
            pointer-events: none;
        }

        .label {
            flex: 1;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            /* Allow custom multi-line option layouts (title + subtitle) to stack. */
            white-space: normal;
        }

        .match {
            padding: 0;
            border-radius: 2px;
            background: var(--pk-color-blue-100);
            color: inherit;
        }
    }
`,In=l(f.check),Q=(Nn=class extends a{constructor(...e){super(...e),this.value=``,this.label=``,this.disabled=!1,this.selected=!1,this.highlighted=!1,this.hidden=!1,this.focusIndex=-1,this.optionId=``,this.matchQuery=``}focusControl(e=!0){var t;(t=this.shadowRoot)==null||(t=t.querySelector(`.option`))==null||t.focus({preventScroll:e})}getLabel(){return this.label.trim()?this.label.trim():this.getDefaultSlotText()}getSearchText(){return this.getDefaultSlotText()||this.getLabel()}getDefaultSlotText(){return[...this.childNodes].filter(e=>e.nodeType===Node.TEXT_NODE||e instanceof Element&&!e.getAttribute(`slot`)).map(e=>{var t;return((t=e.textContent)==null?``:t).trim()}).filter(Boolean).join(` `)}hasRichLabelContent(){return[...this.children].some(e=>e instanceof HTMLElement?!e.slot||e.slot===``:!1)}getStartElements(){return[...this.querySelectorAll(`:scope > [slot="start"]`)].filter(e=>e instanceof HTMLElement)}firstUpdated(){var e;(e=this.shadowRoot)==null||(e=e.querySelector(`slot[name="start"]`))==null||e.addEventListener(`slotchange`,()=>this.syncStartDecoration()),this.syncStartDecoration()}syncStartDecoration(){this.toggleAttribute(`data-has-start`,this.getStartElements().length>0)}handleClick(){this.disabled||this.dispatchEvent(new CustomEvent(`pk-option-select`,{detail:{value:this.value},bubbles:!0,composed:!0}))}handleMouseEnter(){this.disabled||this.hidden||this.dispatchEvent(new CustomEvent(`pk-option-highlight`,{detail:{value:this.value},bubbles:!0,composed:!0}))}handleKeyDown(e){if(!new Set([`ArrowDown`,`ArrowUp`,`ArrowLeft`,`ArrowRight`,`Home`,`End`,`Enter`,` `,`Escape`]).has(e.key))return;let t=this.closest(`pk-select, pk-combobox, pk-autocomplete`),n=t?null:this.closest(`[role="listbox"]`);if(!t&&!n)return;e.preventDefault(),e.stopPropagation();let r=new CustomEvent(`pk-listbox-keydown`,{detail:{keyboardEvent:e},bubbles:!0});t?t.dispatchEvent(r):n.dispatchEvent(r)}renderLabel(){let e=this.matchQuery.trim();if(!e||this.hasRichLabelContent())return i`
                <span part="label" class="label">
                    <slot></slot>
                </span>
            `;let t=Pn(this.getLabel(),e);return i`
            <span part="label" class="label">
                ${t.map(e=>e.match?i`<mark class="match">${e.text}</mark>`:i`<span>${e.text}</span>`)}
            </span>
        `}render(){return i`
            <button
                part="option"
                type="button"
                class="option"
                role="option"
                id=${this.optionId||r}
                ?disabled=${this.disabled}
                aria-disabled=${this.disabled?`true`:r}
                aria-selected=${this.selected?`true`:`false`}
                tabindex=${this.focusIndex}
                @click=${this.handleClick}
                @mouseenter=${this.handleMouseEnter}
                @keydown=${this.handleKeyDown}
            >
                <span part="start" class="start">
                    <slot name="start"></slot>
                </span>
                ${this.renderLabel()}
                <span part="check" class="check" aria-hidden="true">${m(In)}</span>
            </button>
        `}},Nn.styles=Fn,Nn);o([u()],Q.prototype,`value`,void 0),o([u()],Q.prototype,`label`,void 0),o([u({type:Boolean,reflect:!0})],Q.prototype,`disabled`,void 0),o([u({type:Boolean,reflect:!0})],Q.prototype,`selected`,void 0),o([u({type:Boolean,reflect:!0})],Q.prototype,`highlighted`,void 0),o([u({type:Boolean,reflect:!0})],Q.prototype,`hidden`,void 0),o([u({type:Number,attribute:`focus-index`})],Q.prototype,`focusIndex`,void 0),o([u()],Q.prototype,`optionId`,void 0),o([u({attribute:!1})],Q.prototype,`matchQuery`,void 0),Q=o([c(`pk-option`)],Q);var Ln,Rn=t`
    @layer pk-component {
        :host {
            display: block;
        }

        /* Hard hex fallbacks: when groups portal outside pk-select, size-token
         * vars / theme tokens may be absent and invalid color inherits option black.
         * Weight/color match v1 ComboboxLabel / SelectLabel (text-slate-700, no font-medium). */
        .label {
            padding-block-start: var(--pk-select-group-label-padding-block-start, 8px);
            padding-block-end: var(--pk-select-group-label-padding-block-end, 2px);
            padding-inline: var(--pk-select-item-padding-inline, 10px);
            color: var(--pk-select-group-label-color, var(--pk-color-slate-700, rgba(96, 125, 159, 0.7)));
            font-family: var(--pk-font-family);
            /* Default matches v1 ComboboxLabel/SelectLabel text-xs (12px). */
            font-size: var(--pk-select-group-label-font-size, 12px);
            font-weight: 400;
            line-height: 1.3;
            /* Light-DOM ancestors (e.g. Formie empty dropzone text-center) must not center labels. */
            text-align: left;
            user-select: none;
            pointer-events: none;
        }

        :host([hidden]),
        :host([data-pk-filter-empty]) {
            display: none !important;
        }
    }
`,zn=(Ln=class extends a{constructor(...e){super(...e),this.label=``,this.hidden=!1,this.labelId=v(`pk-option-group-label`)}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`group`),this.setAttribute(`aria-labelledby`,this.labelId)}render(){return i`
            <div part="label" class="label" id=${this.labelId}>${this.label}</div>
            <div role="presentation">
                <slot></slot>
            </div>
        `}},Ln.styles=Rn,Ln);o([u({reflect:!0})],zn.prototype,`label`,void 0),o([u({type:Boolean,reflect:!0})],zn.prototype,`hidden`,void 0),zn=o([c(`pk-option-group`)],zn);var Bn=class extends HTMLElement{connectedCallback(){var e=this;this.connectVersion=(this.connectVersion||0)+1;let t=this.connectVersion;customElements.whenDefined(`pk-select`).then(g(function*(){var n;e.isConnected&&t===e.connectVersion&&(e.select=e.querySelector(`pk-select`),e.input=e.querySelector(`[data-dropdown-value]`),e.select&&e.input&&(e.metadata=JSON.parse(e.dataset.options||`{}`),e.initialValue!=null||(e.initialValue=e.input.value),yield e.select.updateComplete,e.isConnected&&t===e.connectVersion&&(e.onSelection=()=>{e.select.disabled||(e.input.value=e.select.value,e.updateVisual(),e.input.dispatchEvent(new Event(`input`,{bubbles:!0})),e.input.dispatchEvent(new Event(`change`,{bubbles:!0})))},e.onInput=()=>{e.select.value=e.input.value,e.updateVisual()},e.onReset=t=>setTimeout(()=>{e.isConnected&&!t.defaultPrevented&&(e.input.value=e.initialValue,e.onInput())}),e.select.addEventListener(`pk-change`,e.onSelection),e.input.addEventListener(`change`,e.onInput),e.form=e.input.form,(n=e.form)==null||n.addEventListener(`reset`,e.onReset),e.onInput())))}))}disconnectedCallback(){var e,t,n;this.connectVersion=(this.connectVersion||0)+1,(e=this.select)==null||e.removeEventListener(`pk-change`,this.onSelection),(t=this.input)==null||t.removeEventListener(`change`,this.onInput),(n=this.form)==null||n.removeEventListener(`reset`,this.onReset)}updateVisual(){let e=this.metadata[this.input.value];e!=null&&e.size?this.style.setProperty(`--buttonbox-dropdown-font`,`${e.size}px`):this.style.removeProperty(`--buttonbox-dropdown-font`),this.select.setAttribute(`aria-label`,`${this.dataset.label}: ${(e==null?void 0:e.label)||this.dataset.placeholder}`),this.select.invalid=!!(e!=null&&e.unavailable);let t=this.querySelector(`[data-dropdown-warning]`);t.hidden=!(e!=null&&e.unavailable),t.textContent=e!=null&&e.unavailable?e.reason||e.label:``}};customElements.get(`buttonbox-dropdown`)||customElements.define(`buttonbox-dropdown`,Bn);function Vn(e,t,n,r){let i={ArrowLeft:-1,ArrowRight:1,ArrowUp:-t,ArrowDown:t}[r];if(!i||e<0)return e;let a=r===`ArrowLeft`||r===`ArrowRight`;for(let r=e+i;r>=0&&r<n.length&&!(a&&Math.floor(r/t)!==Math.floor(e/t));r+=i)if(!n[r])return r;return e}function Hn(e){var t;return((t=e.querySelector(`.buttonbox-width-field__input:checked, .buttonbox-visual__input:checked`))==null?void 0:t.getAttribute(`aria-label`))||`—`}function Un(e){var t;let n=[...e.querySelectorAll(`input[type=radio], input[type=checkbox]`)],r=n.find(e=>e.checked),i=e.matches(`.buttonbox-rating`);for(let e of n)e.closest(`label`).classList.toggle(`is-selected`,i?!!r&&Number(e.value)<=Number(r.value):e.checked);let a=e.querySelector(`.buttonbox-width-field__value, .buttonbox-width-choice__value`);a&&(a.textContent=Hn(e));let o=e.closest(`[data-bb-clearable]`)||e,s=o.querySelector(`[data-bb-fallback]`),c=e.querySelector(`[data-width-invalid], [data-position-invalid]`);c&&(c.hidden=!(!r||r.disabled)||(s==null?void 0:s.value)===``);let l=o.querySelector(`[data-bb-clear]`);l&&(l.hidden=!r&&!(s!=null&&s.value)),o.matches(`[data-bb-clearable]`)&&(o.dataset.bbSelected=(t=r==null?void 0:r.value)==null?``:t)}document.addEventListener(`reset`,e=>{let t=e.target;setTimeout(()=>{if(!e.defaultPrevented&&t.isConnected){for(let e of t.querySelectorAll(`[data-bb-fallback]`))e.value=e.dataset.bbFallback;for(let e of t.querySelectorAll(`.buttonbox-visual, .buttonbox-width-field, .buttonbox-width-choice, .buttonbox-position-field, .buttonbox-rating`))[...e.querySelectorAll(`input`)].some(e=>e.form===t)&&Un(e)}})});function Wn(e,t){var n;let r=[...e.querySelectorAll(`input[type=radio]`)],i=r.find(e=>e.checked),a=e.querySelector(`[data-bb-fallback]`);for(let e of r)e.checked=!1;a&&(a.value=``),Un(e);let o=i||a;o==null||o.dispatchEvent(new Event(`input`,{bubbles:!0})),o==null||o.dispatchEvent(new Event(`change`,{bubbles:!0})),(n=t||r.find(e=>!e.disabled))==null||n.focus()}$(document).on(`click.buttonboxClear`,`[data-bb-clear]`,function(e){Wn(e.currentTarget.closest(`[data-bb-clearable]`))});function Gn(e){var t;return((t=e.closest(`[data-bb-clearable]`).dataset.bbSelected)==null?e.defaultChecked?e.value:``:t)===e.value}$(document).on(`click.buttonboxDeselect`,`[data-bb-clearable] input[type=radio]`,function(e){let t=e.currentTarget;t.dataset.bbKeyCleared?e.preventDefault():!t.disabled&&Gn(t)&&setTimeout(()=>Wn(t.closest(`[data-bb-clearable]`),t))}),$(document).on(`keydown.buttonboxDeselect`,`[data-bb-clearable] input[type=radio]`,function(e){let t=e.currentTarget;[` `,`Delete`,`Backspace`].includes(e.key)&&t.checked&&(e.preventDefault(),t.dataset.bbKeyCleared=`1`,Wn(t.closest(`[data-bb-clearable]`),t))}),$(document).on(`keyup.buttonboxDeselect blur.buttonboxDeselect`,`[data-bb-clearable] input[type=radio]`,function(e){let t=e.currentTarget;setTimeout(()=>delete t.dataset.bbKeyCleared)}),(function(e){e(document).on(`change.buttonboxVisual`,`.buttonbox-visual__input`,function(e){let t=e.currentTarget;Un(t.closest(`.buttonbox-width-choice`)||t.closest(`.buttonbox-visual`))}),e(document).on(`focusin.buttonboxVisualTooltip focusout.buttonboxVisualTooltip`,`.buttonbox-visual__input[data-bb-tooltip], .buttonbox-width-field__input[data-bb-tooltip]`,function(e){let t=document.getElementById(e.currentTarget.closest(`label`).id+`-tooltip`);e.type===`focusin`?t==null||t.show():t==null||t.hide()}),e(document).on(`keydown.buttonboxVisualTooltip`,function(e){if(e.key===`Escape`)for(let t of document.querySelectorAll(`.buttonbox-visual__tooltip`))t.open&&(t.hide(),e.stopPropagation())}),e(document).on(`change.buttonboxRating`,`.buttonbox-rating__input`,function(e){Un(e.currentTarget.closest(`.buttonbox-rating`))}),e(document).on(`change.buttonboxPosition`,`.buttonbox-position__input`,function(t){let n=e(t.currentTarget),r=n.closest(`.buttonbox-position-field`);r.find(`.buttonbox-position__input`).not(n).prop(`checked`,!1),Un(r[0])}),e(document).on(`keydown.buttonboxPosition`,`.buttonbox-position__input`,function(t){if(![`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`].includes(t.key))return;t.preventDefault();let n=e(t.currentTarget),r=n.closest(`.buttonbox-position`),i=r.find(`.buttonbox-position__input`),a=Number(r.data(`columns`))||1,o=i.index(n),s=Vn(o,a,i.toArray().map(e=>e.disabled),t.key);s!==o&&i.eq(s).prop(`checked`,!0).trigger(`change`).trigger(`focus`)})})(jQuery),$(document).on(`change.buttonboxWidth`,`.buttonbox-width-field__input`,function(e){let t=e.currentTarget,n=t.closest(`.buttonbox-width-field`);for(let e of n.querySelectorAll(`.buttonbox-width-field__input`))e.checked=t.checked&&e===t;Un(n)}),$(document).on(`mouseenter.buttonboxWidth mouseleave.buttonboxWidth`,`.buttonbox-width-field:not(.buttonbox-width-field--static) .buttonbox-width-field__option`,function(e){let t=e.currentTarget.closest(`.buttonbox-width-field`),n=t.querySelector(`.buttonbox-width-field__value`),r=e.currentTarget.querySelector(`.buttonbox-width-field__input`);n&&r&&(n.textContent=e.type===`mouseenter`&&!r.disabled?r.getAttribute(`aria-label`):Hn(t))});export{v as A,Ht as C,S as D,ve as E,C as O,Vt as S,Pt as T,tn as _,Sn as a,Yt as b,bn as c,cn as d,ln as f,rn as g,nn as h,En as i,y as k,yn as l,an as m,jn as n,kn as o,on as p,xn as r,vn as s,Z as t,un as u,en as v,Bt as w,Ut as x,Y as y};
//# sourceMappingURL=input.js.map