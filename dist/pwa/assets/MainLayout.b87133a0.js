import{k as H,c as h,h as T,l as ue,r as q,m as Qe,o as X,n as U,p as Ue,q as K,g as M,s as V,i as qe,t as _,w as S,u as Ie,v as ce,x as Ce,y as xe,z as mt,A as je,H as Oe,B as N,C as ht,D as pt,E as wt,G as Ve,I as be,J as ne,K as Ne,L as bt,M as le,a as yt,N as gt,O as kt,P as Lt,Q as St,R as B,f as x,S as Xe,U as ye,V as ae,W as Ke,X as Tt,Y as qt,_ as Ct,d as xt}from"./index.a875f4a0.js";import{u as $t,a as Et,Q as W}from"./QBtn.100b3ad0.js";import{v as zt,c as Me,g as Bt,a as Ot}from"./vm.519852f6.js";import"./QSpinner.8a600ece.js";import"./use-size.86a65703.js";var J=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ye={exports:{}};(function(e,n){(function(l,o){o()})(J,function(){function l(s,t){return typeof t=="undefined"?t={autoBom:!1}:typeof t!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(s.type)?new Blob(["\uFEFF",s],{type:s.type}):s}function o(s,t,g){var f=new XMLHttpRequest;f.open("GET",s),f.responseType="blob",f.onload=function(){m(f.response,t,g)},f.onerror=function(){console.error("could not download file")},f.send()}function i(s){var t=new XMLHttpRequest;t.open("HEAD",s,!1);try{t.send()}catch{}return 200<=t.status&&299>=t.status}function c(s){try{s.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),s.dispatchEvent(t)}}var u=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof J=="object"&&J.global===J?J:void 0,p=u.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),m=u.saveAs||(typeof window!="object"||window!==u?function(){}:"download"in HTMLAnchorElement.prototype&&!p?function(s,t,g){var f=u.URL||u.webkitURL,d=document.createElement("a");t=t||s.name||"download",d.download=t,d.rel="noopener",typeof s=="string"?(d.href=s,d.origin===location.origin?c(d):i(d.href)?o(s,t,g):c(d,d.target="_blank")):(d.href=f.createObjectURL(s),setTimeout(function(){f.revokeObjectURL(d.href)},4e4),setTimeout(function(){c(d)},0))}:"msSaveOrOpenBlob"in navigator?function(s,t,g){if(t=t||s.name||"download",typeof s!="string")navigator.msSaveOrOpenBlob(l(s,g),t);else if(i(s))o(s,t,g);else{var f=document.createElement("a");f.href=s,f.target="_blank",setTimeout(function(){c(f)})}}:function(s,t,g,f){if(f=f||open("","_blank"),f&&(f.document.title=f.document.body.innerText="downloading..."),typeof s=="string")return o(s,t,g);var d=s.type==="application/octet-stream",w=/constructor/i.test(u.HTMLElement)||u.safari,$=/CriOS\/[\d]+/.test(navigator.userAgent);if(($||d&&w||p)&&typeof FileReader!="undefined"){var L=new FileReader;L.onloadend=function(){var v=L.result;v=$?v:v.replace(/^data:[^;]*;/,"data:attachment/file;"),f?f.location.href=v:location=v,f=null},L.readAsDataURL(s)}else{var b=u.URL||u.webkitURL,r=b.createObjectURL(s);f?f.location=r:location.href=r,f=null,setTimeout(function(){b.revokeObjectURL(r)},4e4)}});u.saveAs=m.saveAs=m,e.exports=m})})(Ye);var Vt=H({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:n}){const l=h(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>T("div",{class:l.value,role:"toolbar"},ue(n.default))}});function Mt(){const e=q(!Qe.value);return e.value===!1&&X(()=>{e.value=!0}),e}const Ge=typeof ResizeObserver!="undefined",Re=Ge===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Te=H({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let l=null,o,i={width:-1,height:-1};function c(m){m===!0||e.debounce===0||e.debounce==="0"?u():l===null&&(l=setTimeout(u,e.debounce))}function u(){if(l!==null&&(clearTimeout(l),l=null),o){const{offsetWidth:m,offsetHeight:s}=o;(m!==i.width||s!==i.height)&&(i={width:m,height:s},n("resize",i))}}const{proxy:p}=M();if(Ge===!0){let m;const s=t=>{o=p.$el.parentNode,o?(m=new ResizeObserver(c),m.observe(o),u()):t!==!0&&K(()=>{s(!0)})};return X(()=>{s()}),U(()=>{l!==null&&clearTimeout(l),m!==void 0&&(m.disconnect!==void 0?m.disconnect():o&&m.unobserve(o))}),Ue}else{let t=function(){l!==null&&(clearTimeout(l),l=null),s!==void 0&&(s.removeEventListener!==void 0&&s.removeEventListener("resize",c,V.passive),s=void 0)},g=function(){t(),o&&o.contentDocument&&(s=o.contentDocument.defaultView,s.addEventListener("resize",c,V.passive),u())};const m=Mt();let s;return X(()=>{K(()=>{o=p.$el,o&&g()})}),U(t),p.trigger=c,()=>{if(m.value===!0)return T("object",{style:Re.style,tabindex:-1,type:"text/html",data:Re.url,"aria-hidden":"true",onLoad:g})}}}}),Rt=H({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:l}){const{proxy:{$q:o}}=M(),i=qe(ce,_);if(i===_)return console.error("QHeader needs to be child of QLayout"),_;const c=q(parseInt(e.heightHint,10)),u=q(!0),p=h(()=>e.reveal===!0||i.view.value.indexOf("H")>-1||o.platform.is.ios&&i.isContainer.value===!0),m=h(()=>{if(e.modelValue!==!0)return 0;if(p.value===!0)return u.value===!0?c.value:0;const r=c.value-i.scroll.value.position;return r>0?r:0}),s=h(()=>e.modelValue!==!0||p.value===!0&&u.value!==!0),t=h(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),g=h(()=>"q-header q-layout__section--marginal "+(p.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),f=h(()=>{const r=i.rows.value.top,v={};return r[0]==="l"&&i.left.space===!0&&(v[o.lang.rtl===!0?"right":"left"]=`${i.left.size}px`),r[2]==="r"&&i.right.space===!0&&(v[o.lang.rtl===!0?"left":"right"]=`${i.right.size}px`),v});function d(r,v){i.update("header",r,v)}function w(r,v){r.value!==v&&(r.value=v)}function $({height:r}){w(c,r),d("size",r)}function L(r){t.value===!0&&w(u,!0),l("focusin",r)}S(()=>e.modelValue,r=>{d("space",r),w(u,!0),i.animate()}),S(m,r=>{d("offset",r)}),S(()=>e.reveal,r=>{r===!1&&w(u,e.modelValue)}),S(u,r=>{i.animate(),l("reveal",r)}),S(i.scroll,r=>{e.reveal===!0&&w(u,r.direction==="up"||r.position<=e.revealOffset||r.position-r.inflectionPoint<100)});const b={};return i.instances.header=b,e.modelValue===!0&&d("size",c.value),d("space",e.modelValue),d("offset",m.value),U(()=>{i.instances.header===b&&(i.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const r=Ie(n.default,[]);return e.elevated===!0&&r.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(T(Te,{debounce:0,onResize:$})),T("header",{class:g.value,style:f.value,onFocusin:L},r)}}}),ie=H({name:"QItem",props:{...Ce,...$t,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:l}){const{proxy:{$q:o}}=M(),i=xe(e,o),{hasLink:c,linkAttrs:u,linkClass:p,linkTag:m,navigateOnClick:s}=Et(),t=q(null),g=q(null),f=h(()=>e.clickable===!0||c.value===!0||e.tag==="label"),d=h(()=>e.disable!==!0&&f.value===!0),w=h(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(c.value===!0&&e.active===null?p.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(d.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),$=h(()=>{if(e.insetLevel===void 0)return null;const v=o.lang.rtl===!0?"Right":"Left";return{["padding"+v]:16+e.insetLevel*56+"px"}});function L(v){d.value===!0&&(g.value!==null&&(v.qKeyEvent!==!0&&document.activeElement===t.value?g.value.focus():document.activeElement===g.value&&t.value.focus()),s(v))}function b(v){if(d.value===!0&&mt(v,13)===!0){je(v),v.qKeyEvent=!0;const y=new MouseEvent("click",v);y.qKeyEvent=!0,t.value.dispatchEvent(y)}l("keyup",v)}function r(){const v=Ie(n.default,[]);return d.value===!0&&v.unshift(T("div",{class:"q-focus-helper",tabindex:-1,ref:g})),v}return()=>{const v={ref:t,class:w.value,style:$.value,role:"listitem",onClick:L,onKeyup:b};return d.value===!0?(v.tabindex=e.tabindex||"0",Object.assign(v,u.value)):f.value===!0&&(v["aria-disabled"]="true"),T(m.value,v,r())}}}),_t=H({name:"QList",props:{...Ce,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:n}){const l=M(),o=xe(e,l.proxy.$q),i=h(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(o.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>T(e.tag,{class:i.value},ue(n.default))}});function Ht(e,n,l){let o;function i(){o!==void 0&&(Oe.remove(o),o=void 0)}return U(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){o={condition:()=>l.value===!0,handler:n},Oe.add(o)}}}const Pt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},At=["beforeShow","show","beforeHide","hide"];function Dt({showing:e,canShow:n,hideOnRouteChange:l,handleShow:o,handleHide:i,processOnMount:c}){const u=M(),{props:p,emit:m,proxy:s}=u;let t;function g(r){e.value===!0?w(r):f(r)}function f(r){if(p.disable===!0||r!==void 0&&r.qAnchorHandled===!0||n!==void 0&&n(r)!==!0)return;const v=p["onUpdate:modelValue"]!==void 0;v===!0&&(m("update:modelValue",!0),t=r,K(()=>{t===r&&(t=void 0)})),(p.modelValue===null||v===!1)&&d(r)}function d(r){e.value!==!0&&(e.value=!0,m("beforeShow",r),o!==void 0?o(r):m("show",r))}function w(r){if(p.disable===!0)return;const v=p["onUpdate:modelValue"]!==void 0;v===!0&&(m("update:modelValue",!1),t=r,K(()=>{t===r&&(t=void 0)})),(p.modelValue===null||v===!1)&&$(r)}function $(r){e.value!==!1&&(e.value=!1,m("beforeHide",r),i!==void 0?i(r):m("hide",r))}function L(r){p.disable===!0&&r===!0?p["onUpdate:modelValue"]!==void 0&&m("update:modelValue",!1):r===!0!==e.value&&(r===!0?d:$)(t)}S(()=>p.modelValue,L),l!==void 0&&zt(u)===!0&&S(()=>s.$route.fullPath,()=>{l.value===!0&&e.value===!0&&w()}),c===!0&&X(()=>{L(p.modelValue)});const b={show:f,hide:w,toggle:g};return Object.assign(s,b),b}const Ft=[null,document,document.body,document.scrollingElement,document.documentElement];function Wt(e,n){let l=Bt(n);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return Ft.includes(l)?window:l}function Je(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Ze(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let re;function ge(){if(re!==void 0)return re;const e=document.createElement("p"),n=document.createElement("div");Me(e,{width:"100%",height:"200px"}),Me(n,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),n.appendChild(e),document.body.appendChild(n);const l=e.offsetWidth;n.style.overflow="scroll";let o=e.offsetWidth;return l===o&&(o=n.clientWidth),n.remove(),re=l-o,re}function Qt(e,n=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:n?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let Z=0,ke,Le,ee,Se=!1,_e,He,Pe,Q=null;function Ut(e){It(e)&&je(e)}function It(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const n=ht(e),l=e.shiftKey&&!e.deltaX,o=!l&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=l||o?e.deltaY:e.deltaX;for(let c=0;c<n.length;c++){const u=n[c];if(Qt(u,o))return o?i<0&&u.scrollTop===0?!0:i>0&&u.scrollTop+u.clientHeight===u.scrollHeight:i<0&&u.scrollLeft===0?!0:i>0&&u.scrollLeft+u.clientWidth===u.scrollWidth}return!0}function Ae(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function se(e){Se!==!0&&(Se=!0,requestAnimationFrame(()=>{Se=!1;const{height:n}=e.target,{clientHeight:l,scrollTop:o}=document.scrollingElement;(ee===void 0||n!==window.innerHeight)&&(ee=l-n,document.scrollingElement.scrollTop=o),o>ee&&(document.scrollingElement.scrollTop-=Math.ceil((o-ee)/8))}))}function De(e){const n=document.body,l=window.visualViewport!==void 0;if(e==="add"){const{overflowY:o,overflowX:i}=window.getComputedStyle(n);ke=Ze(window),Le=Je(window),_e=n.style.left,He=n.style.top,Pe=window.location.href,n.style.left=`-${ke}px`,n.style.top=`-${Le}px`,i!=="hidden"&&(i==="scroll"||n.scrollWidth>window.innerWidth)&&n.classList.add("q-body--force-scrollbar-x"),o!=="hidden"&&(o==="scroll"||n.scrollHeight>window.innerHeight)&&n.classList.add("q-body--force-scrollbar-y"),n.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,N.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",se,V.passiveCapture),window.visualViewport.addEventListener("scroll",se,V.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ae,V.passiveCapture))}N.is.desktop===!0&&N.is.mac===!0&&window[`${e}EventListener`]("wheel",Ut,V.notPassive),e==="remove"&&(N.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",se,V.passiveCapture),window.visualViewport.removeEventListener("scroll",se,V.passiveCapture)):window.removeEventListener("scroll",Ae,V.passiveCapture)),n.classList.remove("q-body--prevent-scroll"),n.classList.remove("q-body--force-scrollbar-x"),n.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,n.style.left=_e,n.style.top=He,window.location.href===Pe&&window.scrollTo(ke,Le),ee=void 0)}function jt(e){let n="add";if(e===!0){if(Z++,Q!==null){clearTimeout(Q),Q=null;return}if(Z>1)return}else{if(Z===0||(Z--,Z>0))return;if(n="remove",N.is.ios===!0&&N.is.nativeMobile===!0){Q!==null&&clearTimeout(Q),Q=setTimeout(()=>{De(n),Q=null},100);return}}De(n)}function Nt(){let e;return{preventBodyScroll(n){n!==e&&(e!==void 0||n===!0)&&(e=n,jt(n))}}}function Xt(){let e=null;const n=M();function l(){e!==null&&(clearTimeout(e),e=null)}return pt(l),U(l),{removeTimeout:l,registerTimeout(o,i){l(),Ot(n)===!1&&(e=setTimeout(o,i))}}}const Fe=150;var Kt=H({name:"QDrawer",inheritAttrs:!1,props:{...Pt,...Ce,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...At,"onLayout","miniState"],setup(e,{slots:n,emit:l,attrs:o}){const i=M(),{proxy:{$q:c}}=i,u=xe(e,c),{preventBodyScroll:p}=Nt(),{registerTimeout:m,removeTimeout:s}=Xt(),t=qe(ce,_);if(t===_)return console.error("QDrawer needs to be child of QLayout"),_;let g,f=null,d;const w=q(e.behavior==="mobile"||e.behavior!=="desktop"&&t.totalWidth.value<=e.breakpoint),$=h(()=>e.mini===!0&&w.value!==!0),L=h(()=>$.value===!0?e.miniWidth:e.width),b=q(e.showIfAbove===!0&&w.value===!1?!0:e.modelValue===!0),r=h(()=>e.persistent!==!0&&(w.value===!0||et.value===!0));function v(a,k){if(D(),a!==!1&&t.animate(),O(0),w.value===!0){const E=t.instances[te.value];E!==void 0&&E.belowBreakpoint===!0&&E.hide(!1),P(1),t.isContainer.value!==!0&&p(!0)}else P(0),a!==!1&&he(!1);m(()=>{a!==!1&&he(!0),k!==!0&&l("show",a)},Fe)}function y(a,k){Y(),a!==!1&&t.animate(),P(0),O(I.value*L.value),pe(),k!==!0?m(()=>{l("hide",a)},Fe):s()}const{show:C,hide:z}=Dt({showing:b,hideOnRouteChange:r,handleShow:v,handleHide:y}),{addToHistory:D,removeFromHistory:Y}=Ht(b,z,r),F={belowBreakpoint:w,hide:z},R=h(()=>e.side==="right"),I=h(()=>(c.lang.rtl===!0?-1:1)*(R.value===!0?1:-1)),$e=q(0),j=q(!1),de=q(!1),Ee=q(L.value*I.value),te=h(()=>R.value===!0?"left":"right"),fe=h(()=>b.value===!0&&w.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:L.value:0),ve=h(()=>e.overlay===!0||e.miniToOverlay===!0||t.view.value.indexOf(R.value?"R":"L")>-1||c.platform.is.ios===!0&&t.isContainer.value===!0),G=h(()=>e.overlay===!1&&b.value===!0&&w.value===!1),et=h(()=>e.overlay===!0&&b.value===!0&&w.value===!1),tt=h(()=>"fullscreen q-drawer__backdrop"+(b.value===!1&&j.value===!1?" hidden":"")),ot=h(()=>({backgroundColor:`rgba(0,0,0,${$e.value*.4})`})),ze=h(()=>R.value===!0?t.rows.value.top[2]==="r":t.rows.value.top[0]==="l"),nt=h(()=>R.value===!0?t.rows.value.bottom[2]==="r":t.rows.value.bottom[0]==="l"),lt=h(()=>{const a={};return t.header.space===!0&&ze.value===!1&&(ve.value===!0?a.top=`${t.header.offset}px`:t.header.space===!0&&(a.top=`${t.header.size}px`)),t.footer.space===!0&&nt.value===!1&&(ve.value===!0?a.bottom=`${t.footer.offset}px`:t.footer.space===!0&&(a.bottom=`${t.footer.size}px`)),a}),at=h(()=>{const a={width:`${L.value}px`,transform:`translateX(${Ee.value}px)`};return w.value===!0?a:Object.assign(a,lt.value)}),it=h(()=>"q-drawer__content fit "+(t.isContainer.value!==!0?"scroll":"overflow-auto")),rt=h(()=>`q-drawer q-drawer--${e.side}`+(de.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(j.value===!0?" no-transition":b.value===!0?"":" q-layout--prevent-focus")+(w.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${$.value===!0?"mini":"standard"}`+(ve.value===!0||G.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ze.value===!0?" q-drawer--top-padding":""))),st=h(()=>{const a=c.lang.rtl===!0?e.side:te.value;return[[be,ft,void 0,{[a]:!0,mouse:!0}]]}),ut=h(()=>{const a=c.lang.rtl===!0?te.value:e.side;return[[be,Be,void 0,{[a]:!0,mouse:!0}]]}),ct=h(()=>{const a=c.lang.rtl===!0?te.value:e.side;return[[be,Be,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function me(){vt(w,e.behavior==="mobile"||e.behavior!=="desktop"&&t.totalWidth.value<=e.breakpoint)}S(w,a=>{a===!0?(g=b.value,b.value===!0&&z(!1)):e.overlay===!1&&e.behavior!=="mobile"&&g!==!1&&(b.value===!0?(O(0),P(0),pe()):C(!1))}),S(()=>e.side,(a,k)=>{t.instances[k]===F&&(t.instances[k]=void 0,t[k].space=!1,t[k].offset=0),t.instances[a]=F,t[a].size=L.value,t[a].space=G.value,t[a].offset=fe.value}),S(t.totalWidth,()=>{(t.isContainer.value===!0||document.qScrollPrevented!==!0)&&me()}),S(()=>e.behavior+e.breakpoint,me),S(t.isContainer,a=>{b.value===!0&&p(a!==!0),a===!0&&me()}),S(t.scrollbarWidth,()=>{O(b.value===!0?0:void 0)}),S(fe,a=>{A("offset",a)}),S(G,a=>{l("onLayout",a),A("space",a)}),S(R,()=>{O()}),S(L,a=>{O(),we(e.miniToOverlay,a)}),S(()=>e.miniToOverlay,a=>{we(a,L.value)}),S(()=>c.lang.rtl,()=>{O()}),S(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(dt(),t.animate())}),S($,a=>{l("miniState",a)});function O(a){a===void 0?K(()=>{a=b.value===!0?0:L.value,O(I.value*a)}):(t.isContainer.value===!0&&R.value===!0&&(w.value===!0||Math.abs(a)===L.value)&&(a+=I.value*t.scrollbarWidth.value),Ee.value=a)}function P(a){$e.value=a}function he(a){const k=a===!0?"remove":t.isContainer.value!==!0?"add":"";k!==""&&document.body.classList[k]("q-body--drawer-toggle")}function dt(){f!==null&&clearTimeout(f),i.proxy&&i.proxy.$el&&i.proxy.$el.classList.add("q-drawer--mini-animate"),de.value=!0,f=setTimeout(()=>{f=null,de.value=!1,i&&i.proxy&&i.proxy.$el&&i.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ft(a){if(b.value!==!1)return;const k=L.value,E=ne(a.distance.x,0,k);if(a.isFinal===!0){E>=Math.min(75,k)===!0?C():(t.animate(),P(0),O(I.value*k)),j.value=!1;return}O((c.lang.rtl===!0?R.value!==!0:R.value)?Math.max(k-E,0):Math.min(0,E-k)),P(ne(E/k,0,1)),a.isFirst===!0&&(j.value=!0)}function Be(a){if(b.value!==!0)return;const k=L.value,E=a.direction===e.side,oe=(c.lang.rtl===!0?E!==!0:E)?ne(a.distance.x,0,k):0;if(a.isFinal===!0){Math.abs(oe)<Math.min(75,k)===!0?(t.animate(),P(1),O(0)):z(),j.value=!1;return}O(I.value*oe),P(ne(1-oe/k,0,1)),a.isFirst===!0&&(j.value=!0)}function pe(){p(!1),he(!0)}function A(a,k){t.update(e.side,a,k)}function vt(a,k){a.value!==k&&(a.value=k)}function we(a,k){A("size",a===!0?e.miniWidth:k)}return t.instances[e.side]=F,we(e.miniToOverlay,L.value),A("space",G.value),A("offset",fe.value),e.showIfAbove===!0&&e.modelValue!==!0&&b.value===!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),X(()=>{l("onLayout",G.value),l("miniState",$.value),g=e.showIfAbove===!0;const a=()=>{(b.value===!0?v:y)(!1,!0)};if(t.totalWidth.value!==0){K(a);return}d=S(t.totalWidth,()=>{d(),d=void 0,b.value===!1&&e.showIfAbove===!0&&w.value===!1?C(!1):a()})}),U(()=>{d!==void 0&&d(),f!==null&&(clearTimeout(f),f=null),b.value===!0&&pe(),t.instances[e.side]===F&&(t.instances[e.side]=void 0,A("size",0),A("offset",0),A("space",!1))}),()=>{const a=[];w.value===!0&&(e.noSwipeOpen===!1&&a.push(wt(T("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),st.value)),a.push(Ve("div",{ref:"backdrop",class:tt.value,style:ot.value,"aria-hidden":"true",onClick:z},void 0,"backdrop",e.noSwipeBackdrop!==!0&&b.value===!0,()=>ct.value)));const k=$.value===!0&&n.mini!==void 0,E=[T("div",{...o,key:""+k,class:[it.value,o.class]},k===!0?n.mini():ue(n.default))];return e.elevated===!0&&b.value===!0&&E.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(Ve("aside",{ref:"content",class:rt.value,style:at.value},E,"contentclose",e.noSwipeClose!==!0&&w.value===!0,()=>ut.value)),T("div",{class:"q-drawer-container"},a)}}}),Yt=H({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:l}}=M(),o=qe(ce,_);if(o===_)return console.error("QPageContainer needs to be child of QLayout"),_;Ne(bt,!0);const i=h(()=>{const c={};return o.header.space===!0&&(c.paddingTop=`${o.header.size}px`),o.right.space===!0&&(c[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(c.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(c[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),c});return()=>T("div",{class:"q-page-container",style:i.value},ue(n.default))}});const{passive:We}=V,Gt=["both","horizontal","vertical"];var Jt=H({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Gt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:n}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,i,c;S(()=>e.scrollTarget,()=>{m(),p()});function u(){o!==null&&o();const g=Math.max(0,Je(i)),f=Ze(i),d={top:g-l.position.top,left:f-l.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const w=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";l.position={top:g,left:f},l.directionChanged=l.direction!==w,l.delta=d,l.directionChanged===!0&&(l.direction=w,l.inflectionPoint=l.position),n("scroll",{...l})}function p(){i=Wt(c,e.scrollTarget),i.addEventListener("scroll",s,We),s(!0)}function m(){i!==void 0&&(i.removeEventListener("scroll",s,We),i=void 0)}function s(g){if(g===!0||e.debounce===0||e.debounce==="0")u();else if(o===null){const[f,d]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];o=()=>{d(f),o=null}}}const{proxy:t}=M();return S(()=>t.$q.lang.rtl,u),X(()=>{c=t.$el.parentNode,p()}),U(()=>{o!==null&&o(),m()}),Object.assign(t,{trigger:s,getPosition:()=>l}),Ue}}),Zt=H({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:l}){const{proxy:{$q:o}}=M(),i=q(null),c=q(o.screen.height),u=q(e.container===!0?0:o.screen.width),p=q({position:0,direction:"down",inflectionPoint:0}),m=q(0),s=q(Qe.value===!0?0:ge()),t=h(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),g=h(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),f=h(()=>s.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),d=h(()=>s.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function w(y){if(e.container===!0||document.qScrollPrevented!==!0){const C={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};p.value=C,e.onScroll!==void 0&&l("scroll",C)}}function $(y){const{height:C,width:z}=y;let D=!1;c.value!==C&&(D=!0,c.value=C,e.onScrollHeight!==void 0&&l("scrollHeight",C),b()),u.value!==z&&(D=!0,u.value=z),D===!0&&e.onResize!==void 0&&l("resize",y)}function L({height:y}){m.value!==y&&(m.value=y,b())}function b(){if(e.container===!0){const y=c.value>m.value?ge():0;s.value!==y&&(s.value=y)}}let r=null;const v={instances:{},view:h(()=>e.view),isContainer:h(()=>e.container),rootRef:i,height:c,containerHeight:m,scrollbarWidth:s,totalWidth:h(()=>u.value+s.value),rows:h(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:le({size:0,offset:0,space:!1}),right:le({size:300,offset:0,space:!1}),footer:le({size:0,offset:0,space:!1}),left:le({size:300,offset:0,space:!1}),scroll:p,animate(){r!==null?clearTimeout(r):document.body.classList.add("q-body--layout-animate"),r=setTimeout(()=>{r=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,C,z){v[y][C]=z}};if(Ne(ce,v),ge()>0){let z=function(){y=null,C.classList.remove("hide-scrollbar")},D=function(){if(y===null){if(C.scrollHeight>o.screen.height)return;C.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(z,300)},Y=function(F){y!==null&&F==="remove"&&(clearTimeout(y),z()),window[`${F}EventListener`]("resize",D)},y=null;const C=document.body;S(()=>e.container!==!0?"add":"remove",Y),e.container!==!0&&Y("add"),yt(()=>{Y("remove")})}return()=>{const y=gt(n.default,[T(Jt,{onScroll:w}),T(Te,{onResize:$})]),C=T("div",{class:t.value,style:g.value,ref:e.container===!0?void 0:i,tabindex:-1},y);return e.container===!0?T("div",{class:"q-layout-container overflow-hidden",ref:i},[T(Te,{onResize:L}),T("div",{class:"absolute-full",style:f.value},[T("div",{class:"scroll",style:d.value},[C])])]):C}}});const eo=e=>(Tt("data-v-3bd19c82"),e=e(),qt(),e),to=eo(()=>Xe("span",{class:"big"},"\u5927",-1));function oo(e,n,l,o,i,c){const u=kt("router-view");return Lt(),St(Zt,{view:"lHh Lpr lFf"},{default:B(()=>[x(Rt,{elevated:""},{default:B(()=>[x(Vt,null,{default:B(()=>[x(W,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),x(W,{onClick:e.copyLink,flat:"",round:"",icon:"ios_share","aria-label":"Share",label:"Share"},null,8,["onClick"]),x(W,{onClick:e.downloadSteps,flat:"",round:"",icon:"cloud_download","aria-label":"Download"},null,8,["onClick"]),x(W,{flat:"",round:"",icon:"cloud_upload",onClick:n[0]||(n[0]=p=>e.clickFileUpload())}),Xe("input",{type:"file",accept:".md",onChange:n[1]||(n[1]=(...p)=>e.handleFileUpload&&e.handleFileUpload(...p)),ref:"fileInput",style:{display:"none"}},null,544)]),_:1})]),_:1}),x(Kt,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":n[3]||(n[3]=p=>e.leftDrawerOpen=p),"show-if-above":"",bordered:""},{default:B(()=>[x(_t,null,{default:B(()=>[x(ie,null,{default:B(()=>[x(W,{class:ye({active:e.isIn("intro")}),flat:"",dense:"",icon:"info",onClick:e.goIntro},{default:B(()=>[ae("\u8AAA\u660E")]),_:1},8,["class","onClick"])]),_:1}),x(ie,null,{default:B(()=>[x(W,{class:ye({active:e.isIn("edit")}),flat:"",dense:"",icon:"edit",onClick:e.goEdit},{default:B(()=>[ae("\u7DE8\u8F2F")]),_:1},8,["class","onClick"])]),_:1}),x(ie,null,{default:B(()=>[x(W,{class:ye({active:e.isIn("search")}),flat:"",dense:"",icon:"link",onClick:e.goSearch},{default:B(()=>[ae("\u641C\u8A62")]),_:1},8,["class","onClick"])]),_:1}),x(ie,null,{default:B(()=>[ae("\u5C0F"),x(Ke,{modelValue:e.font_size,"onUpdate:modelValue":n[2]||(n[2]=p=>e.font_size=p),min:10,max:30,label:"","label-value":e.font_size+"px",color:"primary"},null,8,["modelValue","label-value"]),to]),_:1})]),_:1})]),_:1},8,["modelValue"]),x(Yt,null,{default:B(()=>[x(u,{font_size:e.font_size},null,8,["font_size"])]),_:1})]),_:1})}const no=xt({name:"MainLayout",components:{QSlider:Ke},setup(){const e=q(!1),n=q(16);return{hash:q(window.location.hash||""),font_size:n,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}},methods:{isIn(e){return console.log(this.$route.path.indexOf(e)>-1),this.$route.path.indexOf(e)>-1},goIntro(){this.$router.push("/intro/"+this.$route.params.steps)},goEdit(){this.$router.push("/edit/"+this.$route.params.steps)},goSearch(){this.$router.push("/search/"+this.$route.params.steps)},editStep(){if(this.$route.name=="EdiTor"){alert("You are already editing this step.");return}this.$router.push("/edit/_"+this.hash.replace("edit/","").replace("_/",""))},downloadSteps(){const e=window.prompt("Please Enter a Title:");if(!e)return;let l=this.$route.params.steps.split(/%20|\s/).map((i,c)=>`${c+1}. ${i}`).join(`
`);l="# "+e+`

`+l;const o=new Blob([l],{type:"text/markdown;charset=utf-8"});Ye.exports.saveAs(o,e+".md")},clickFileUpload(){this.$refs.fileInput.click()},handleFileUpload(e){const n=e.target.files[0];if(n){const l=new FileReader;l.onload=o=>{const i=o.target.result,u=this.parseMarkdown(i).join(" ");this.$router.push({path:`/edit/${encodeURIComponent(u)}`})},l.onerror=o=>{console.error("File reading error:",o),alert("An error occurred while reading the file.")},l.readAsText(n)}},parseMarkdown(e){return e.split(`
`).filter(o=>o.match(/^\d+\.\s+/)).map(o=>o.replace(/^\d+\.\s+/,""))},copyLink(){if(!document.hasFocus()){alert("Document does not have focus, cannot copy text.");return}const e="https://hackstep.pages.dev"+this.$route.path;navigator.clipboard.writeText(e).then(()=>{window.alert("Copied the link: "+e)}).catch(n=>{console.error("Could not copy text: ",n)})}}});var co=Ct(no,[["render",oo],["__scopeId","data-v-3bd19c82"]]);export{co as default};
