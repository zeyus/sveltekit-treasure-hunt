function N(){}const $=t=>t;function P(t,e){for(const n in e)t[n]=e[n];return t}function T(t){return t()}function tt(){return Object.create(null)}function B(t){t.forEach(T)}function I(t){return typeof t=="function"}function et(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let h;function nt(t,e){return t===e?!0:(h||(h=document.createElement("a")),h.href=e,t===h.href)}function it(t){return Object.keys(t).length===0}function A(t,...e){if(t==null){for(const i of e)i(void 0);return N}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function rt(t){let e;return A(t,n=>e=n)(),e}function ct(t,e,n){t.$$.on_destroy.push(A(e,n))}function lt(t,e,n,i){if(t){const r=j(t,e,n,i);return t[0](r)}}function j(t,e,n,i){return t[1]&&i?P(n.ctx.slice(),t[1](i(e))):n.ctx}function st(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let s=0;s<c;s+=1)o[s]=e.dirty[s]|r[s];return o}return e.dirty|r}return e.dirty}function ot(t,e,n,i,r,o){if(r){const c=j(e,n,i,o);t.p(c,r)}}function ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function at(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ft(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function _t(t){const e={};for(const n in t)e[n]=!0;return e}function dt(t){return t&&I(t.destroy)?t.destroy:N}let m=!1;function ht(){m=!0}function pt(){m=!1}function L(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function M(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:L(1,r,q=>e[n[q]].claim_order,u))-1;i[l]=n[a]+1;const k=a+1;n[k]=l,r=Math.max(k,r)}const o=[],c=[];let s=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);s>=l;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);o.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<o.length&&c[l].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(c[l],a)}}function H(t,e){t.appendChild(e)}function R(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function mt(t){const e=O("style");return e.textContent="/* empty */",z(R(t),e),e.sheet}function z(t,e){return H(t.head||t,e),e.sheet}function F(t,e){if(m){for(M(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function yt(t,e,n){m&&!n?F(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function bt(t){t.parentNode&&t.parentNode.removeChild(t)}function gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function O(t){return document.createElement(t)}function U(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function xt(){return w(" ")}function vt(){return w("")}function wt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function W(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const G=["width","height"];function kt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&G.indexOf(i)===-1?t[i]=e[i]:W(t,i,e[i])}function Et(t){return t.dataset.svelteH}function Nt(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function At(t){return Array.from(t.childNodes)}function J(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function S(t,e,n,i,r=!1){J(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function C(t,e,n,i){return S(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];n[s.name]||o.push(s.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function jt(t,e,n){return C(t,e,n,O)}function Ot(t,e,n){return C(t,e,n,U)}function K(t,e){return S(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>w(e),!0)}function St(t){return K(t," ")}function Ct(t,e){e=""+e,t.data!==e&&(t.data=e)}function Dt(t,e){t.value=e??""}function qt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Pt(t,e,n){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Tt(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];i.selected=~e.indexOf(i.__value)}}function Bt(t){const e=t.querySelector(":checked");return e&&e.__value}function It(t,e,n){t.classList.toggle(e,!!n)}function Q(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Lt(t,e){return new t(e)}let p;function b(t){p=t}function y(){if(!p)throw new Error("Function called outside component initialization");return p}function Mt(t){y().$$.on_mount.push(t)}function Ht(t){y().$$.after_update.push(t)}function Rt(t){y().$$.on_destroy.push(t)}function zt(){const t=y();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=Q(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function Ft(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const d=[],E=[];let _=[];const x=[],D=Promise.resolve();let v=!1;function V(){v||(v=!0,D.then(Y))}function Ut(){return V(),D}function X(t){_.push(t)}function Wt(t){x.push(t)}const g=new Set;let f=0;function Y(){if(f!==0)return;const t=p;do{try{for(;f<d.length;){const e=d[f];f++,b(e),Z(e.$$)}}catch(e){throw d.length=0,f=0,e}for(b(null),d.length=0,f=0;E.length;)E.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];g.has(n)||(g.add(n),n())}_.length=0}while(d.length);for(;x.length;)x.pop()();v=!1,g.clear(),b(t)}function Z(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}function Gt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{Nt as $,vt as A,Ft as B,E as C,wt as D,It as E,Ht as F,Mt as G,Lt as H,Ut as I,R as J,mt as K,B as L,I as M,X as N,Q as O,$ as P,tt as Q,Y as R,it as S,Gt as T,p as U,b as V,T as W,d as X,V as Y,ht as Z,pt as _,P as a,_t as a0,Bt as a1,Tt as a2,Pt as a3,Dt as a4,gt as a5,Wt as a6,U as a7,Ot as a8,zt as a9,Rt as aa,dt as ab,rt as ac,jt as b,lt as c,At as d,O as e,bt as f,kt as g,ut as h,yt as i,st as j,ft as k,at as l,xt as m,N as n,K as o,St as p,F as q,Ct as r,et as s,w as t,ot as u,ct as v,Et as w,W as x,nt as y,qt as z};