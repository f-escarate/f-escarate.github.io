import{S as A,q as Y,v as z,w,x as G,y as h,U as c,z as O,g as b,A as L,B as H,C as V,D as Z,E as $,L as J,P as j,F as Q,b as K,G as q,H as D,I as W,R as X,J as C,K as k,M as ee,N as re,f as F,O as ne,Q as te,T as ie,V as se,W as fe}from"./runtime.D_CkO9jW.js";import{c as ue}from"./store.DTmei6Pn.js";function R(e,r=null,f){if(typeof e!="object"||e===null||A in e)return e;const u=V(e);if(u!==Y&&u!==z)return e;var i=new Map,v=Z(e),m=w(0);v&&i.set("length",w(e.length));var P;return new Proxy(e,{defineProperty(l,n,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&G();var s=i.get(n);return s===void 0?(s=w(t.value),i.set(n,s)):h(s,R(t.value,P)),!0},deleteProperty(l,n){var t=i.get(n);if(t===void 0)n in l&&i.set(n,w(c));else{if(v&&typeof n=="string"){var s=i.get("length"),a=Number(n);Number.isInteger(a)&&a<s.v&&h(s,a)}h(t,c),M(m)}return!0},get(l,n,t){var _;if(n===A)return e;var s=i.get(n),a=n in l;if(s===void 0&&(!a||(_=O(l,n))!=null&&_.writable)&&(s=w(R(a?l[n]:c,P)),i.set(n,s)),s!==void 0){var d=b(s);return d===c?void 0:d}return Reflect.get(l,n,t)},getOwnPropertyDescriptor(l,n){var t=Reflect.getOwnPropertyDescriptor(l,n);if(t&&"value"in t){var s=i.get(n);s&&(t.value=b(s))}else if(t===void 0){var a=i.get(n),d=a==null?void 0:a.v;if(a!==void 0&&d!==c)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return t},has(l,n){var d;if(n===A)return!0;var t=i.get(n),s=t!==void 0&&t.v!==c||Reflect.has(l,n);if(t!==void 0||L!==null&&(!s||(d=O(l,n))!=null&&d.writable)){t===void 0&&(t=w(s?R(l[n],P):c),i.set(n,t));var a=b(t);if(a===c)return!1}return s},set(l,n,t,s){var x;var a=i.get(n),d=n in l;if(v&&n==="length")for(var _=t;_<a.v;_+=1){var p=i.get(_+"");p!==void 0?h(p,c):_ in l&&(p=w(c),i.set(_+"",p))}a===void 0?(!d||(x=O(l,n))!=null&&x.writable)&&(a=w(void 0),h(a,R(t,P)),i.set(n,a)):(d=a.v!==c,h(a,R(t,P)));var y=Reflect.getOwnPropertyDescriptor(l,n);if(y!=null&&y.set&&y.set.call(s,t),!d){if(v&&typeof n=="string"){var N=i.get("length"),g=Number(n);Number.isInteger(g)&&g>=N.v&&h(N,g+1)}M(m)}return!0},ownKeys(l){b(m);var n=Reflect.ownKeys(l).filter(a=>{var d=i.get(a);return d===void 0||d.v!==c});for(var[t,s]of i)s.v!==c&&!(t in l)&&n.push(t);return n},setPrototypeOf(){H()}})}function M(e,r=1){h(e,e.v+r)}const ae={get(e,r){if(!e.exclude.includes(r))return b(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,f){return r in e.special||(e.special[r]=de({get[r](){return e.props[r]}},r,j)),e.special[r](f),q(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),q(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function ce(e,r){return new Proxy({props:e,exclude:r,special:{},version:w(0)},ae)}const le={get(e,r){let f=e.props.length;for(;f--;){let u=e.props[f];if(D(u)&&(u=u()),typeof u=="object"&&u!==null&&r in u)return u[r]}},set(e,r,f){let u=e.props.length;for(;u--;){let i=e.props[u];D(i)&&(i=i());const v=O(i,r);if(v&&v.set)return v.set(f),!0}return!1},getOwnPropertyDescriptor(e,r){let f=e.props.length;for(;f--;){let u=e.props[f];if(D(u)&&(u=u()),typeof u=="object"&&u!==null&&r in u){const i=O(u,r);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,r){for(let f of e.props)if(D(f)&&(f=f()),f!=null&&r in f)return!0;return!1},ownKeys(e){const r=[];for(let f of e.props){D(f)&&(f=f());for(const u in f)r.includes(u)||r.push(u)}return r}};function _e(...e){return new Proxy({props:e},le)}function U(e){for(var r=L,f=L;r!==null&&!(r.f&(W|X));)r=r.parent;try{return C(r),e()}finally{C(f)}}function de(e,r,f,u){var B;var i=(f&k)!==0,v=(f&ee)!==0,m=(f&re)!==0,P=(f&se)!==0,l=!1,n;m?[n,l]=ue(()=>e[r]):n=e[r];var t=(B=O(e,r))==null?void 0:B.set,s=u,a=!0,d=!1,_=()=>(d=!0,a&&(a=!1,P?s=K(u):s=u),s);n===void 0&&u!==void 0&&(t&&v&&$(),n=_(),t&&t(n));var p;if(v)p=()=>{var o=e[r];return o===void 0?_():(a=!0,d=!1,o)};else{var y=U(()=>(i?F:ne)(()=>e[r]));y.f|=J,p=()=>{var o=b(y);return o!==void 0&&(s=void 0),o===void 0?s:o}}if(!(f&j))return p;if(t){var N=e.$$legacy;return function(o,I){return arguments.length>0?((!v||!I||N||l)&&t(I?p():o),o):p()}}var g=!1,x=!1,T=fe(n),E=U(()=>F(()=>{var o=p(),I=b(T),S=te;return g||o===void 0&&S.f&ie?(g=!1,x=!0,I):(x=!1,T.v=o)}));return i||(E.equals=Q),function(o,I){if(arguments.length>0){const S=I?b(E):v&&m?R(o):o;return E.equals(S)||(g=!0,h(T,S),d&&s!==void 0&&(s=S),K(()=>b(E))),o}return b(E)}}export{R as a,ce as l,de as p,_e as s};
