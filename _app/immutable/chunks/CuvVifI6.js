import{ad as Y,Q as z,ae as k,$ as C,a9 as Q,B as x,a4 as P,y as S,af as N,C as J,ag as K,G as p,ah as W,ai as M,M as w,L,N as u,aj as y,ak as $,al as X,H as B,am as R,an as D,ao as Z,ap as ee,aq as te,ar as re,as as ae,at as ne,E as oe,p as ie,i as se,c as ue}from"./DzCVos_p.js";const F=new Set,I=new Set;function de(e,t,r,i){function n(a){if(i.capture||b.call(t,a),!a.cancelBubble){var o=P,c=S;k(null),C(null);try{return r.call(this,a)}finally{k(o),C(c)}}}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?z(()=>{t.addEventListener(e,n,i)}):t.addEventListener(e,n,i),n}function ye(e,t,r,i,n){var a={capture:i,passive:n},o=de(e,t,r,a);(t===document.body||t===window||t===document)&&Y(()=>{t.removeEventListener(e,o,a)})}function ge(e){for(var t=0;t<e.length;t++)F.add(e[t]);for(var r of I)r(e)}function b(e){var H;var t=this,r=t.ownerDocument,i=e.type,n=((H=e.composedPath)==null?void 0:H.call(e))||[],a=n[0]||e.target,o=0,c=e.__root;if(c){var l=n.indexOf(c);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var f=n.indexOf(t);if(f===-1)return;l<=f&&(o=l)}if(a=n[o]||e.target,a!==t){Q(e,"currentTarget",{configurable:!0,get(){return a||r}});var T=P,_=S;k(null),C(null);try{for(var s,d=[];a!==null;){var m=a.assignedSlot||a.parentNode||a.host||null;try{var g=a["__"+i];if(g!==void 0&&!a.disabled)if(x(g)){var[G,...U]=g;G.apply(a,[e,...U])}else g.call(a,e)}catch(A){s?d.push(A):s=A}if(e.cancelBubble||m===t||m===null)break;a=m}if(s){for(let A of d)queueMicrotask(()=>{throw A});throw s}}finally{e.__root=t,delete e.currentTarget,k(T),C(_)}}}let h;function le(){h=void 0}function Ee(e){let t=null,r=p;var i;if(p){for(t=u,h===void 0&&(h=y(document.head));h!==null&&(h.nodeType!==8||h.data!==W);)h=M(h);h===null?w(!1):h=L(M(h))}p||(i=document.head.appendChild(N()));try{J(()=>e(i),K)}finally{r&&(w(!0),h=u,L(t))}}function j(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function v(e,t){var r=S;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function we(e,t){var r=(t&$)!==0,i=(t&X)!==0,n,a=!e.startsWith("<!>");return()=>{if(p)return v(u,null),u;n===void 0&&(n=j(a?e:"<!>"+e),r||(n=y(n)));var o=i?document.importNode(n,!0):n.cloneNode(!0);if(r){var c=y(o),l=o.lastChild;v(c,l)}else v(o,o);return o}}function Te(e,t,r="svg"){var i=!e.startsWith("<!>"),n=(t&$)!==0,a=`<${r}>${i?e:"<!>"+e}</${r}>`,o;return()=>{if(p)return v(u,null),u;if(!o){var c=j(a),l=y(c);if(n)for(o=document.createDocumentFragment();y(l);)o.appendChild(y(l));else o=y(l)}var f=o.cloneNode(!0);if(n){var T=y(f),_=f.lastChild;v(T,_)}else v(f,f);return f}}function be(e=""){if(!p){var t=N(e+"");return v(t,t),t}var r=u;return r.nodeType!==3&&(r.before(r=N()),L(r)),v(r,r),r}function Ne(){if(p)return v(u,null),u;var e=document.createDocumentFragment(),t=document.createComment(""),r=N();return e.append(t,r),v(t,r),e}function Le(e,t){if(p){S.nodes_end=u,B();return}e!==null&&e.before(t)}function Se(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const fe=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Ae(e){return fe.includes(e)}const ce={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function ke(e){return e=e.toLowerCase(),ce[e]??e}const _e=["touchstart","touchmove"];function he(e){return _e.includes(e)}let O=!0;function Ce(e){O=e}function De(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function pe(e,t){return q(e,t)}function Me(e,t){R(),t.intro=t.intro??!1;const r=t.target,i=p,n=u;try{for(var a=y(r);a&&(a.nodeType!==8||a.data!==W);)a=M(a);if(!a)throw D;w(!0),L(a),B();const o=q(e,{...t,anchor:a});if(u===null||u.nodeType!==8||u.data!==Z)throw ee(),D;return w(!1),o}catch(o){if(o===D)return t.recover===!1&&te(),R(),re(r),w(!1),pe(e,t);throw o}finally{w(i),L(n),le()}}const E=new Map;function q(e,{target:t,anchor:r,props:i={},events:n,context:a,intro:o=!0}){R();var c=new Set,l=_=>{for(var s=0;s<_.length;s++){var d=_[s];if(!c.has(d)){c.add(d);var m=he(d);t.addEventListener(d,b,{passive:m});var g=E.get(d);g===void 0?(document.addEventListener(d,b,{passive:m}),E.set(d,1)):E.set(d,g+1)}}};l(ae(F)),I.add(l);var f=void 0,T=ne(()=>{var _=r??t.appendChild(N());return oe(()=>{if(a){ie({});var s=ue;s.c=a}n&&(i.$$events=n),p&&v(_,null),O=o,f=e(_,i)||{},O=!0,p&&(S.nodes_end=u),a&&se()}),()=>{var m;for(var s of c){t.removeEventListener(s,b);var d=E.get(s);--d===0?(document.removeEventListener(s,b),E.delete(s)):E.set(s,d)}I.delete(l),V.delete(f),_!==r&&((m=_.parentNode)==null||m.removeChild(_))}});return V.set(f,T),f}let V=new WeakMap;function Re(e){const t=V.get(e);t&&t()}const ve="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ve);export{Le as a,be as b,Ne as c,Ee as d,ye as e,v as f,Ce as g,Me as h,Se as i,de as j,ge as k,ke as l,pe as m,Te as n,Ae as o,O as p,De as s,we as t,Re as u};
