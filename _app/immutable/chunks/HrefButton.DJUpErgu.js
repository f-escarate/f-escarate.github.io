import{a as g,t as x}from"./disclose-version.BPZkkts-.js";import{h as n,t as N,l as _,m as f}from"./runtime.D_CkO9jW.js";import{e as A,a as C}from"./store.DTmei6Pn.js";import{p as r}from"./props.A5Gk-AW9.js";function d(t,a){var s=t.__className,e=v(a);n&&t.getAttribute("class")===e?t.__className=e:(s!==e||n&&t.getAttribute("class")!==e)&&(e===""?t.removeAttribute("class"):t.setAttribute("class",e),t.__className=e)}function m(t,a){var s=t.__className,e=v(a);n&&t.className===e?t.__className=e:(s!==e||n&&t.className!==e)&&(a==null?t.removeAttribute("class"):t.className=e,t.__className=e)}function v(t){return t??""}var w=x("<button><p> </p></button>");function T(t,a){var s=r(a,"title",8,"Button"),e=r(a,"href",8,""),c=r(a,"element_id",8,""),u=r(a,"buttonClass",8,""),b=r(a,"pClass",8,"");const h=c()?()=>{let o=document.getElementById(c());window.scrollTo({top:o.offsetTop-o.offsetHeight,behavior:"smooth"})}:()=>{window.location.href=e()};var l=w(),i=_(l),p=_(i,!0);f(i),f(l),N(()=>{m(l,`h-max py-3 rounded-lg transition-transform bg-light hover:bg-light-hover hover:scale-110 lg:px-4 bg-opacity-75 ${u()}`),m(i,`text-3xl text-black font-semibold leading-none ${b()}`),C(p,s())}),A("click",l,h),g(t,l)}export{T as H,m as a,d as s};
