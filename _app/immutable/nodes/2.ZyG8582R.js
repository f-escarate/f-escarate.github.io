import{a as E,t as P,b as A,n as $,e as ce}from"../chunks/disclose-version.BzL2nuEw.js";import{b as de,h as k,c as ue,L as pe,a1 as ee,H as fe,d as V,s as Y,e as z,f as M,r as ae,a as se,p as ve,a2 as B,I as J,a3 as me,a4 as he,a5 as ge,a0 as _e,C as Q,a6 as be,a7 as ye,a8 as we,a9 as xe,aa as Ee,ab as Se,ac as ke,ad as Ce,K as W,ae as Te,q as G,x as g,v as C,z as b,y as _,w as O,t as Ae,l as T,F as Ie,af as Pe,T as Me}from"../chunks/runtime.BEgTie6B.js";import{i as U}from"../chunks/if.Dv0a1KL4.js";import{i as F}from"../chunks/lifecycle.DuYzv8pc.js";import{p as I}from"../chunks/props.Byw6CDFa.js";import{s as re,a as Ne}from"../chunks/class.DWsRWbXv.js";let D=null;function ne(s,e){return e}function Re(s,e,a,r){for(var t=[],o=e.length,i=0;i<o;i++)ye(e[i].e,t,!0);var p=o>0&&t.length===0&&a!==null;if(p){var f=a.parentNode;we(f),f.append(a),r.clear(),x(s,e[0].prev,e[o-1].next)}xe(t,()=>{for(var n=0;n<o;n++){var d=e[n];p||(r.delete(d.k),x(s,d.prev,d.next)),Ee(d.e,!p)}})}function oe(s,e,a,r,t,o=null){var i=s,p={flags:e,items:new Map,first:null};k&&ue();var f=null,n=!1;de(()=>{var d=a(),c=pe(d)?d:d==null?[]:ee(d),u=c.length;if(n&&u===0)return;n=u===0;let v=!1;if(k){var m=i.data===fe;m!==(u===0)&&(i=V(),Y(i),z(!1),v=!0)}if(k){for(var y=null,l,h=0;h<u;h++){if(M.nodeType===8&&M.data===Se){i=M,v=!0,z(!1);break}var L=c[h],S=r(L,h);l=te(M,p,y,null,L,S,h,t,e),p.items.set(S,l),y=l}u>0&&Y(V())}k||Le(c,p,i,t,e,r),o!==null&&(u===0?f?ae(f):f=se(()=>o(i)):f!==null&&ve(f,()=>{f=null})),v&&z(!0),a()}),k&&(i=M)}function Le(s,e,a,r,t,o){var i=s.length,p=e.items,f=e.first,n=f,d,c=null,u=[],v=[],m,y,l,h;for(h=0;h<i;h+=1){if(m=s[h],y=o(m,h),l=p.get(y),l===void 0){var L=n?n.e.nodes_start:a;c=te(L,e,c,c===null?e.first:c.next,m,y,h,r,t),p.set(y,c),u=[],v=[],n=c.next;continue}if(je(l,m,h),l.e.f&B&&ae(l.e),l!==n){if(d!==void 0&&d.has(l)){if(u.length<v.length){var S=v[0],w;c=S.prev;var K=u[0],j=u[u.length-1];for(w=0;w<u.length;w+=1)X(u[w],S,a);for(w=0;w<v.length;w+=1)d.delete(v[w]);x(e,K.prev,j.next),x(e,c,K),x(e,j,S),n=S,c=j,h-=1,u=[],v=[]}else d.delete(l),X(l,n,a),x(e,l.prev,l.next),x(e,l,c===null?e.first:c.next),x(e,c,l),c=l;continue}for(u=[],v=[];n!==null&&n.k!==y;)n.e.f&B||(d??(d=new Set)).add(n),v.push(n),n=n.next;if(n===null)continue;l=n}u.push(l),c=l,n=l.next}if(n!==null||d!==void 0){for(var q=d===void 0?[]:ee(d);n!==null;)n.e.f&B||q.push(n),n=n.next;var ie=q.length;if(ie>0){var le=null;Re(e,q,le,p)}}J.first=e.first&&e.first.e,J.last=c&&c.e}function je(s,e,a,r){me(s.v,e),s.i=a}function te(s,e,a,r,t,o,i,p,f){var n=D;try{var d=(f&he)!==0,c=(f&ge)===0,u=d?c?_e(t):Q(t):t,v=f&be?Q(i):i,m={i:v,v:u,k:o,a:null,e:null,prev:a,next:r};return D=m,m.e=se(()=>p(s,u,v),k),m.e.prev=a&&a.e,m.e.next=r&&r.e,a===null?e.first=m:(a.next=m,a.e.next=m.e),r!==null&&(r.prev=m,r.e.prev=m.e),m}finally{D=n}}function X(s,e,a){for(var r=s.next?s.next.e.nodes_start:a,t=e?e.e.nodes_start:a,o=s.e.nodes_start;o!==r;){var i=ke(o);t.before(o),o=i}}function x(s,e,a){e===null?s.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function H(s,e,a,r){var t=s.__attributes??(s.__attributes={});k&&(t[e]=s.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&s.nodeName==="LINK")||t[e]!==(t[e]=a)&&(e==="style"&&"__styles"in s&&(s.__styles={}),e==="loading"&&(s[Ce]=a),a==null?s.removeAttribute(e):typeof a!="string"&&qe(s).includes(e)?s[e]=a:s.setAttribute(e,a))}var Z=new Map;function qe(s){var e=Z.get(s.nodeName);if(e)return e;Z.set(s.nodeName,e=[]);for(var a,r=W(s),t=Element.prototype;t!==r;){a=Te(r);for(var o in a)a[o].set&&e.push(o);r=W(r)}return e}const ze={title:"Inicio",url:"/",description:"En esta página iré poniendo las cosas que he hecho. Por ahora está en desarrollo..."},Be={title:"Desarrollo web",elements:[{title:"Aplicaciones con Django",description:"Se ha trabajado tanto a nivel de frontend como backend, esto para los cursos 'Ingeniería de Software' y 'Taller Avanzado de Desarrollo Agil y Lean'."},{title:"Aplicación para la despensa",description:"Aplicación hecha para dispositivos Android. Permite llevar un control de los productos que hay en la despensa. Está hecha con React Native, Golang y MongoDB.",url:"https://github.com/f-escarate/InventoryApp"},{title:"Recomendador de plataformas CR2",description:"Proyecto realizado en el contexto del curso 'Proyecto de Software' de la Universidad de Chile. Permite buscar y filtrar plataformas del CR2 según ciertos metadatos meteorológicos, climatológicos, etc. Cuenta con un chatbot que recomienda plataformas según las necesidades del usuario. Está hecha en React, FastAPI y se usa Llama2 como modelo de lenguaje, el cual se puede utilizar gracias a langchain. Además se utilizó Docker para el desarrollo de la aplicación.",url:"https://www.cr2.cl/"}]},De={title:"Videojuegos",elements:[{title:"Froggy Against the World",description:"Juego de ritmo para dispositivos móviles (hecho en Godot 3).",url:"https://bluemili.itch.io/froggy-against-the-world"},{title:"Chaotic Ocean",description:"Juego multijugador de 2 a 4 jugadores (hecho en Godot 4).",url:"https://bluemili.itch.io/chaotic-ocean"},{title:"AOne Games (primera práctica profesional)",description:"En mi primera práctica trabajé en el port del juego Omen of Sorrow para Nintendo Switch. Principalmente me dedique a optimizar el juego los casos en que la consola no podía rendir como lo esperado. Se utilizó Unreal Engine 4 (y por ende C++).",url:"https://www.aonegames.com/"}]},Ue={title:"Machine Learning",elements:[{title:"Análisis de pobreza en Chile a partir de encuestas CASEN",description:"Para el curso de 'Minería de Datos' realizamos un análisis de los datos de las encuestas CASEN, usando distintos algoritmos de clasificación (ej: KNN, Naive Bayes, Random Forest, etc) y de clustering (ej: DBScan, Kmeans). Se utilizó Python y las librerías scikit-learn, pandas, numpy, matplotlib y seaborn. Se puede encontrar tanto los reportes de las 3 iteraciones como el código, en el siguiente enlace.",url:"http://f-escarate.tech/mineria"},{title:"Competencias Procesamiento del Lenguaje Natural",description:`En el contexto del curso de 'Procesamiento del Lenguaje Natural' se realizaron dos competencias, la primera se trataba sobre clasificar un tweets chilenos según 3 categorías: discurso de odio, incivilidad o normal. Si bien probamos distintos modelos (BERT, LSTM, GRU, etc), lo que nos dio mejores resultados fue utilizar un stacking de los modelos más simples que probamos, i.e: Naive Bayes, SVM, MLP, ExtraTrees, CatBoost y LightGBM..

 La segunda competencia consistió en una tarea tipo NER (Name Entity Recognition) usando un corpus de listas de espera, las cuales tenían las entidades [Disease, Body_Part, Medication, Procedures y Family_Member]. Se usararon GRU, LSTM y distintas versiones de BERT, sin embargo todas entregaban resultados similares. También se probó usando capas de embeddings en español, pero esto no mejoró mucho los resultados.`},{title:"Gaussian Splatting",description:"Para mi trabajo de título, se está trabajando en la obtención de representaciones de objetos reales mediante Gaussian Splatting, de modo que se puedan importar en un museo virtual hecho en Unity."}]},Ge={title:"Internet of Things",elements:[{title:"Comunicación inalámbrica entre Raspberry Pi y esp32",description:"Se manejó la transferencia de paquetes entre una Raspberry Pi y una esp32 mediante distintos protocolos de comunicación. Se pueden enviar paquetes por Wi-Fi usando sockets TCP/UDP, y por BLE usando el protocolo GATT. Esto fue hecho usando Python por el lado de la Raspberry y C++ por el lado de la esp32 (con ESP-IDF). Cabe destacar que se creó una interfaz gráfica (con PyQt) para poder cambiar los protocolos de comunicación y visualizar los resultados.",url:"https://github.com/f-escarate/IoT"},{title:"Uso de sensores Bosch",description:"Se programó la obtención de datos de los sensores BME688 (sensor de calidad del aire) y BMI270 (IMU) usando una esp32. Se usó el framework ESP-IDF y comunicación I2C. También se creó interfaz gráfica (con PyQt) para poder visualizar los datos obtenidos y editar la configuración de los sensores. Esto era posible conectando la esp32 por USB a un computador para que se comunicaran a través de UART.",url:"https://github.com/f-escarate/EmbebidosYSensores"}]},Oe={title:"Información personal",description:[`Soy un estudiante de quinto año de Ingeniería Civil en Computación de la Universidad de Chile. Me gusta mucho programar, por eso he hecho cosas en distintos ámbitos.

 Por ejemplo para mi trabajo de título estoy trabajando en la implementación de un sistema de crowdsourcing para un museo virtual, es decir, que los usuarios puedan aportar contenido al museo mediante videos de los objetos. Esto involucra aspectos de frontend, backend, Machine Learning y Computación gráfica, ya que, es necesario un sitio web en el que los usuarios suban los videos para procesarlos Backend, de tal modo que se obtengan representaciones tridimensionales reconocibles por el motor gráfico. Todo este proceso estaría automatizado, y en un principio tengo pensado usar, `,` para obtener las representaciones tridimensionales.

 ‣ `,`

 ‣ Correo personal: felipeescaratefernandez@gmail.com

 ‣ Correo de la universidad: felipe.escarate@ug.uchile.cl

 ‣ Teléfono: +569 566 814 16`],links:[{name:"Gaussian Splatting",url:"https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/"},{name:"Curriculum Vitae",url:"https://drive.google.com/file/d/1Py1w4S5opI8NvNzqg-vrKgXUaK58_ws-/view?usp=sharing"}],elements:[]},N={home:ze,webdev:Be,games:De,ML:Ue,IoT:Ge,contact:Oe};var Fe=P('<a class="underline text-blue-500" target="_blank" rel="noopener noreferrer"> </a> ',1),He=P('<main><div class="whitespace-break-spaces my-2 mx-4 p-2 text-xl text-justify"> <!></div></main>');function Ke(s,e){G(e,!1);let a=I(e,"description",24,()=>[]),r=I(e,"links",24,()=>[]);F();var t=He(),o=g(t),i=g(o,!0);C(()=>A(i,a().slice(0,1)));var p=b(i);oe(p,1,()=>a().slice(1),ne,(f,n,d)=>{var c=Fe(),u=Ae(c),v=g(u,!0);_(u);var m=b(u,1,!0);C(()=>{H(u,"href",r()[d].url),A(v,r()[d].name),A(m,T(n))}),E(f,c)}),_(o),_(t),E(s,t),O()}var Ve=$('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path></svg>');function Ye(s,e){let a=I(e,"css_class",8,"");var r=Ve();C(()=>re(r,a())),E(s,r)}var Je=$('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"></path></svg>');function Qe(s,e){let a=I(e,"css_class",8,"");var r=Je();C(()=>re(r,a())),E(s,r)}var We=P('<a class="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Más información</a>'),Xe=P('<div class="my-4 rounded-sm bg-sky-200"><button class="p-6 flex justify-between w-full items-center h-full hover:bg-cyan-200"><h1 class="text-3xl font-bold text-left"> </h1> <div class="h-full max-w-[40px] w-full"><!></div></button> <div><p class="text-xl whitespace-pre-wrap"> </p> <!></div></div>');function Ze(s,e){G(e,!1);let a=I(e,"element",24,()=>({title:"",description:"",url:""})),r=Pe(!1);const t=l=>l?"p-6 mb-4 block":"mb-4 hidden";F();var o=Xe(),i=g(o),p=g(i),f=g(p,!0);_(p);var n=b(p,2),d=g(n);U(d,()=>T(r),l=>{Qe(l,{css_class:"h-full w-full"})},l=>{Ye(l,{css_class:"h-full w-full"})}),_(n),_(i);var c=b(i,2);const u=Me(()=>t(T(r)));var v=g(c),m=g(v,!0);_(v);var y=b(v,2);U(y,()=>a().hasOwnProperty("url"),l=>{var h=We();C(()=>H(h,"href",a().url)),E(l,h)}),_(c),_(o),C(()=>{A(f,a().title),Ne(c,T(u)),A(m,a().description)}),ce("click",i,()=>{Ie(r,!T(r))}),E(s,o),O()}var $e=P('<div class="w-5/6 lg:w-4/6 my-10 max-w-[900px]"><h1 class="text-5xl font-bold mb-10"> </h1> <!> <!></div>');function R(s,e){G(e,!1);var a=I(e,"name",8,"");let r=N[a()].elements;F();var t=$e(),o=g(t),i=g(o,!0);_(o);var p=b(o,2);U(p,()=>N[a()].hasOwnProperty("description"),n=>{Ke(n,{get description(){return N[a()].description},get links(){return N[a()].links}})});var f=b(p,2);oe(f,1,()=>r,ne,(n,d)=>{Ze(n,{get element(){return T(d)}})}),_(t),C(()=>{H(o,"id",a()),A(i,N[a()].title)}),E(s,t),O()}var ea=P('<div class="flex flex-col items-center w-[100%]"><!> <!> <!> <!> <!></div>');function ia(s){var e=ea(),a=g(e);R(a,{name:"webdev"});var r=b(a,2);R(r,{name:"games"});var t=b(r,2);R(t,{name:"ML"});var o=b(t,2);R(o,{name:"IoT"});var i=b(o,2);R(i,{name:"contact"}),_(e),E(s,e)}export{ia as component};