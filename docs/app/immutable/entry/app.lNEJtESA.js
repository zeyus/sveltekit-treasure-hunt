function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.CiR33J_i.js","../chunks/scheduler.CE9wGmKf.js","../chunks/index.D0CvRIpq.js","../chunks/Container.CNS6j3ux.js","../chunks/Theme.svelte_svelte_type_style_lang.B_2kH84E.js","../chunks/index.b58kd1ex.js","../assets/Theme.BBcq8iz_.css","../nodes/1.B9Hgeu0o.js","../chunks/entry.BTmDRYlg.js","../chunks/paths.CxW3XlVc.js","../nodes/2.BOWE_yAN.js","../chunks/go2.DqDloF0i.js","../assets/2.WDq2U1xW.css","../nodes/3.bfYgnKWV.js","../assets/3.D562pwhf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as B,m as U,A as d,p as q,i as b,f as p,F as z,G as F,e as G,b as H,d as M,x as I,z as h,t as W,o as j,r as J,C as N,H as k,I as K}from"../chunks/scheduler.CE9wGmKf.js";import{S as Q,i as X,a as g,e as P,t as w,g as L,c as v,b as S,m as E,d as y}from"../chunks/index.D0CvRIpq.js";const Y="modulepreload",Z=function(o,e){return new URL(o,e).href},A={},R=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){const c=document.getElementsByTagName("link");s=Promise.all(n.map(t=>{if(t=Z(t,i),t in A)return;A[t]=!0;const r=t.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(!!i)for(let _=c.length-1;_>=0;_--){const m=c[_];if(m.href===t&&(!r||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${l}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":Y,r||(a.as="script",a.crossOrigin=""),a.href=t,document.head.appendChild(a),r)return new Promise((_,m)=>{a.addEventListener("load",_),a.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})}))}return s.then(()=>e()).catch(c=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=c,window.dispatchEvent(t),!t.defaultPrevented)throw c})};function $(o){return/^\d+$/.test(o)}const oe={integer:$};function x(o){let e,n,i;var s=o[1][0];function c(t,r){return{props:{data:t[3],form:t[2]}}}return s&&(e=k(s,c(o)),o[12](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&S(e.$$.fragment,t),n=d()},m(t,r){e&&E(e,t,r),b(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){L();const l=e;g(l.$$.fragment,1,0,()=>{y(l,1)}),P()}s?(e=k(s,c(t)),t[12](e),v(e.$$.fragment),w(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&p(n),o[12](null),e&&y(e,t)}}}function ee(o){let e,n,i;var s=o[1][0];function c(t,r){return{props:{data:t[3],$$slots:{default:[te]},$$scope:{ctx:t}}}}return s&&(e=k(s,c(o)),o[11](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&S(e.$$.fragment,t),n=d()},m(t,r){e&&E(e,t,r),b(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){L();const l=e;g(l.$$.fragment,1,0,()=>{y(l,1)}),P()}s?(e=k(s,c(t)),t[11](e),v(e.$$.fragment),w(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&8215&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&p(n),o[11](null),e&&y(e,t)}}}function te(o){let e,n,i;var s=o[1][1];function c(t,r){return{props:{data:t[4],form:t[2]}}}return s&&(e=k(s,c(o)),o[10](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&S(e.$$.fragment,t),n=d()},m(t,r){e&&E(e,t,r),b(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][1])){if(e){L();const l=e;g(l.$$.fragment,1,0,()=>{y(l,1)}),P()}s?(e=k(s,c(t)),t[10](e),v(e.$$.fragment),w(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(s){const l={};r&16&&(l.data=t[4]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&p(n),o[10](null),e&&y(e,t)}}}function C(o){let e,n=o[6]&&D(o);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=M(e);n&&n.l(s),s.forEach(p),this.h()},h(){I(e,"id","svelte-announcer"),I(e,"aria-live","assertive"),I(e,"aria-atomic","true"),h(e,"position","absolute"),h(e,"left","0"),h(e,"top","0"),h(e,"clip","rect(0 0 0 0)"),h(e,"clip-path","inset(50%)"),h(e,"overflow","hidden"),h(e,"white-space","nowrap"),h(e,"width","1px"),h(e,"height","1px")},m(i,s){b(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=D(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&p(e),n&&n.d()}}}function D(o){let e;return{c(){e=W(o[7])},l(n){e=j(n,o[7])},m(n,i){b(n,e,i)},p(n,i){i&128&&J(e,n[7])},d(n){n&&p(e)}}}function ne(o){let e,n,i,s,c;const t=[ee,x],r=[];function l(a,_){return a[1][1]?0:1}e=l(o),n=r[e]=t[e](o);let u=o[5]&&C(o);return{c(){n.c(),i=U(),u&&u.c(),s=d()},l(a){n.l(a),i=q(a),u&&u.l(a),s=d()},m(a,_){r[e].m(a,_),b(a,i,_),u&&u.m(a,_),b(a,s,_),c=!0},p(a,[_]){let m=e;e=l(a),e===m?r[e].p(a,_):(L(),g(r[m],1,1,()=>{r[m]=null}),P(),n=r[e],n?n.p(a,_):(n=r[e]=t[e](a),n.c()),w(n,1),n.m(i.parentNode,i)),a[5]?u?u.p(a,_):(u=C(a),u.c(),u.m(s.parentNode,s)):u&&(u.d(1),u=null)},i(a){c||(w(n),c=!0)},o(a){g(n),c=!1},d(a){a&&(p(i),p(s)),r[e].d(a),u&&u.d(a)}}}function ie(o,e,n){let{stores:i}=e,{page:s}=e,{constructors:c}=e,{components:t=[]}=e,{form:r}=e,{data_0:l=null}=e,{data_1:u=null}=e;z(i.page.notify);let a=!1,_=!1,m=null;F(()=>{const f=i.page.subscribe(()=>{a&&(n(6,_=!0),K().then(()=>{n(7,m=document.title||"untitled page")}))});return n(5,a=!0),f});function O(f){N[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function T(f){N[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function V(f){N[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return o.$$set=f=>{"stores"in f&&n(8,i=f.stores),"page"in f&&n(9,s=f.page),"constructors"in f&&n(1,c=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,r=f.form),"data_0"in f&&n(3,l=f.data_0),"data_1"in f&&n(4,u=f.data_1)},o.$$.update=()=>{o.$$.dirty&768&&i.page.set(s)},[t,c,r,l,u,a,_,m,i,s,O,T,V]}class ae extends Q{constructor(e){super(),X(this,e,ie,ne,B,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const le=[()=>R(()=>import("../nodes/0.CiR33J_i.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),()=>R(()=>import("../nodes/1.B9Hgeu0o.js"),__vite__mapDeps([7,1,2,8,5,9]),import.meta.url),()=>R(()=>import("../nodes/2.BOWE_yAN.js"),__vite__mapDeps([10,1,2,11,4,5,6,9,12]),import.meta.url),()=>R(()=>import("../nodes/3.bfYgnKWV.js"),__vite__mapDeps([13,1,2,11,4,5,6,9,8,3,14]),import.meta.url)],fe=[],ce={"/":[2],"/hunt/[step=integer]":[3]},ue={handleError:({error:o})=>{console.error(o)},reroute:()=>{}};export{ce as dictionary,ue as hooks,oe as matchers,le as nodes,ae as root,fe as server_loads};