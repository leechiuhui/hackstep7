import{u as bt,a as wt,v as qt,c as He,g as Ct,b as Lt,Q as te}from"./QBtn.838d8d30.js";import{c as D,h as ae,a as Ze,b as Tt,d as De,e as St}from"./QSpinner.85c529e9.js";import{c as m,h as T,r as x,k as et,o as I,l as N,n as ke,m as U,g as V,p as M,i as Ee,q as H,s as ue,w as C,t as xt,u as ze,H as Re,v as O,x as kt,y as Et,P as zt,z as $t,A as oe,B as pe,C as Ae,D as ye,E as Se,G as ge,I as Bt,J as tt,K as Ot,L as ne,a as Pt,M as Mt,N as Vt,O as _t,Q as P,f as B,R as We,_ as Ht,d as Dt}from"./index.67024eec.js";import{u as $e,a as Be}from"./use-dark.9f7262ae.js";var Rt=D({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const n=m(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>T("div",{class:n.value,role:"toolbar"},ae(o.default))}});function At(){const e=x(!et.value);return e.value===!1&&I(()=>{e.value=!0}),e}const ot=typeof ResizeObserver!="undefined",Qe=ot===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var xe=D({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,i,t={width:-1,height:-1};function l(c){c===!0||e.debounce===0||e.debounce==="0"?s():n===null&&(n=setTimeout(s,e.debounce))}function s(){if(n!==null&&(clearTimeout(n),n=null),i){const{offsetWidth:c,offsetHeight:d}=i;(c!==t.width||d!==t.height)&&(t={width:c,height:d},o("resize",t))}}const{proxy:f}=V();if(ot===!0){let c;const d=r=>{i=f.$el.parentNode,i?(c=new ResizeObserver(l),c.observe(i),s()):r!==!0&&U(()=>{d(!0)})};return I(()=>{d()}),N(()=>{n!==null&&clearTimeout(n),c!==void 0&&(c.disconnect!==void 0?c.disconnect():i&&c.unobserve(i))}),ke}else{let r=function(){n!==null&&(clearTimeout(n),n=null),d!==void 0&&(d.removeEventListener!==void 0&&d.removeEventListener("resize",l,M.passive),d=void 0)},w=function(){r(),i&&i.contentDocument&&(d=i.contentDocument.defaultView,d.addEventListener("resize",l,M.passive),s())};const c=At();let d;return I(()=>{U(()=>{i=f.$el,i&&w()})}),N(r),f.trigger=l,()=>{if(c.value===!0)return T("object",{style:Qe.style,tabindex:-1,type:"text/html",data:Qe.url,"aria-hidden":"true",onLoad:w})}}}}),Wt=D({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:i}}=V(),t=Ee(ue,H);if(t===H)return console.error("QHeader needs to be child of QLayout"),H;const l=x(parseInt(e.heightHint,10)),s=x(!0),f=m(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||i.platform.is.ios&&t.isContainer.value===!0),c=m(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?l.value:0;const u=l.value-t.scroll.value.position;return u>0?u:0}),d=m(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),r=m(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),w=m(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=m(()=>{const u=t.rows.value.top,p={};return u[0]==="l"&&t.left.space===!0&&(p[i.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(p[i.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),p});function v(u,p){t.update("header",u,p)}function h(u,p){u.value!==p&&(u.value=p)}function k({height:u}){h(l,u),v("size",u)}function L(u){r.value===!0&&h(s,!0),n("focusin",u)}C(()=>e.modelValue,u=>{v("space",u),h(s,!0),t.animate()}),C(c,u=>{v("offset",u)}),C(()=>e.reveal,u=>{u===!1&&h(s,e.modelValue)}),C(s,u=>{t.animate(),n("reveal",u)}),C(t.scroll,u=>{e.reveal===!0&&h(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const b={};return t.instances.header=b,e.modelValue===!0&&v("size",l.value),v("space",e.modelValue),v("offset",c.value),N(()=>{t.instances.header===b&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const u=Ze(o.default,[]);return e.elevated===!0&&u.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(T(xe,{debounce:0,onResize:k})),T("header",{class:w.value,style:q.value,onFocusin:L},u)}}}),Fe=D({name:"QItem",props:{...$e,...bt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:o,emit:n}){const{proxy:{$q:i}}=V(),t=Be(e,i),{hasLink:l,linkAttrs:s,linkClass:f,linkTag:c,navigateOnClick:d}=wt(),r=x(null),w=x(null),q=m(()=>e.clickable===!0||l.value===!0||e.tag==="label"),v=m(()=>e.disable!==!0&&q.value===!0),h=m(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(l.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(v.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),k=m(()=>{if(e.insetLevel===void 0)return null;const p=i.lang.rtl===!0?"Right":"Left";return{["padding"+p]:16+e.insetLevel*56+"px"}});function L(p){v.value===!0&&(w.value!==null&&(p.qKeyEvent!==!0&&document.activeElement===r.value?w.value.focus():document.activeElement===w.value&&r.value.focus()),d(p))}function b(p){if(v.value===!0&&xt(p,13)===!0){ze(p),p.qKeyEvent=!0;const y=new MouseEvent("click",p);y.qKeyEvent=!0,r.value.dispatchEvent(y)}n("keyup",p)}function u(){const p=Ze(o.default,[]);return v.value===!0&&p.unshift(T("div",{class:"q-focus-helper",tabindex:-1,ref:w})),p}return()=>{const p={ref:r,class:h.value,style:k.value,role:"listitem",onClick:L,onKeyup:b};return v.value===!0?(p.tabindex=e.tabindex||"0",Object.assign(p,s.value)):q.value===!0&&(p["aria-disabled"]="true"),T(c.value,p,u())}}}),Qt=D({name:"QList",props:{...$e,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:o}){const n=V(),i=Be(e,n.proxy.$q),t=m(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>T(e.tag,{class:t.value},ae(o.default))}});function Ft(e,o,n){let i;function t(){i!==void 0&&(Re.remove(i),i=void 0)}return N(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){i={condition:()=>n.value===!0,handler:o},Re.add(i)}}}const Nt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Xt=["beforeShow","show","beforeHide","hide"];function Yt({showing:e,canShow:o,hideOnRouteChange:n,handleShow:i,handleHide:t,processOnMount:l}){const s=V(),{props:f,emit:c,proxy:d}=s;let r;function w(u){e.value===!0?h(u):q(u)}function q(u){if(f.disable===!0||u!==void 0&&u.qAnchorHandled===!0||o!==void 0&&o(u)!==!0)return;const p=f["onUpdate:modelValue"]!==void 0;p===!0&&(c("update:modelValue",!0),r=u,U(()=>{r===u&&(r=void 0)})),(f.modelValue===null||p===!1)&&v(u)}function v(u){e.value!==!0&&(e.value=!0,c("beforeShow",u),i!==void 0?i(u):c("show",u))}function h(u){if(f.disable===!0)return;const p=f["onUpdate:modelValue"]!==void 0;p===!0&&(c("update:modelValue",!1),r=u,U(()=>{r===u&&(r=void 0)})),(f.modelValue===null||p===!1)&&k(u)}function k(u){e.value!==!1&&(e.value=!1,c("beforeHide",u),t!==void 0?t(u):c("hide",u))}function L(u){f.disable===!0&&u===!0?f["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):u===!0!==e.value&&(u===!0?v:k)(r)}C(()=>f.modelValue,L),n!==void 0&&qt(s)===!0&&C(()=>d.$route.fullPath,()=>{n.value===!0&&e.value===!0&&h()}),l===!0&&I(()=>{L(f.modelValue)});const b={show:q,hide:h,toggle:w};return Object.assign(d,b),b}const It=[null,document,document.body,document.scrollingElement,document.documentElement];function Ut(e,o){let n=Ct(o);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return It.includes(n)?window:n}function nt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function lt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let le;function be(){if(le!==void 0)return le;const e=document.createElement("p"),o=document.createElement("div");He(e,{width:"100%",height:"200px"}),He(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const n=e.offsetWidth;o.style.overflow="scroll";let i=e.offsetWidth;return n===i&&(i=o.clientWidth),o.remove(),le=n-i,le}function Kt(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let G=0,we,qe,J,Ce=!1,Ne,Xe,Ye,F=null;function jt(e){Gt(e)&&ze(e)}function Gt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=kt(e),n=e.shiftKey&&!e.deltaX,i=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=n||i?e.deltaY:e.deltaX;for(let l=0;l<o.length;l++){const s=o[l];if(Kt(s,i))return i?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Ie(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ie(e){Ce!==!0&&(Ce=!0,requestAnimationFrame(()=>{Ce=!1;const{height:o}=e.target,{clientHeight:n,scrollTop:i}=document.scrollingElement;(J===void 0||o!==window.innerHeight)&&(J=n-o,document.scrollingElement.scrollTop=i),i>J&&(document.scrollingElement.scrollTop-=Math.ceil((i-J)/8))}))}function Ue(e){const o=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:i,overflowX:t}=window.getComputedStyle(o);we=lt(window),qe=nt(window),Ne=o.style.left,Xe=o.style.top,Ye=window.location.href,o.style.left=`-${we}px`,o.style.top=`-${qe}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),i!=="hidden"&&(i==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,O.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ie,M.passiveCapture),window.visualViewport.addEventListener("scroll",ie,M.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ie,M.passiveCapture))}O.is.desktop===!0&&O.is.mac===!0&&window[`${e}EventListener`]("wheel",jt,M.notPassive),e==="remove"&&(O.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",ie,M.passiveCapture),window.visualViewport.removeEventListener("scroll",ie,M.passiveCapture)):window.removeEventListener("scroll",Ie,M.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=Ne,o.style.top=Xe,window.location.href===Ye&&window.scrollTo(we,qe),J=void 0)}function Jt(e){let o="add";if(e===!0){if(G++,F!==null){clearTimeout(F),F=null;return}if(G>1)return}else{if(G===0||(G--,G>0))return;if(o="remove",O.is.ios===!0&&O.is.nativeMobile===!0){F!==null&&clearTimeout(F),F=setTimeout(()=>{Ue(o),F=null},100);return}}Ue(o)}function Zt(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,Jt(o))}}}function eo(){let e=null;const o=V();function n(){e!==null&&(clearTimeout(e),e=null)}return Et(n),N(n),{removeTimeout:n,registerTimeout(i,t){n(),Lt(o)===!1&&(e=setTimeout(i,t))}}}const Oe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},to=Object.keys(Oe);Oe.all=!0;function Ke(e){const o={};for(const n of to)e[n]===!0&&(o[n]=!0);return Object.keys(o).length===0?Oe:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const oo=["INPUT","TEXTAREA"];function je(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&oo.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function no(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),zt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Le(e,o,n){const i=Se(e);let t,l=i.left-o.event.x,s=i.top-o.event.y,f=Math.abs(l),c=Math.abs(s);const d=o.direction;d.horizontal===!0&&d.vertical!==!0?t=l<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?t=s<0?"up":"down":d.up===!0&&s<0?(t="up",f>c&&(d.left===!0&&l<0?t="left":d.right===!0&&l>0&&(t="right"))):d.down===!0&&s>0?(t="down",f>c&&(d.left===!0&&l<0?t="left":d.right===!0&&l>0&&(t="right"))):d.left===!0&&l<0?(t="left",f<c&&(d.up===!0&&s<0?t="up":d.down===!0&&s>0&&(t="down"))):d.right===!0&&l>0&&(t="right",f<c&&(d.up===!0&&s<0?t="up":d.down===!0&&s>0&&(t="down")));let r=!1;if(t===void 0&&n===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,r=!0,t==="left"||t==="right"?(i.left-=l,f=0,l=0):(i.top-=s,c=0,s=0)}return{synthetic:r,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:i,direction:t,isFirst:o.event.isFirst,isFinal:n===!0,duration:Date.now()-o.event.time,distance:{x:f,y:c},offset:{x:l,y:s},delta:{x:i.left-o.event.lastX,y:i.top-o.event.lastY}}}}let lo=0;var Te=Tt({name:"touch-pan",beforeMount(e,{value:o,modifiers:n}){if(n.mouse!==!0&&O.has.touch!==!0)return;function i(l,s){n.mouse===!0&&s===!0?ze(l):(n.stop===!0&&ye(l),n.prevent===!0&&Ae(l))}const t={uid:"qvtp_"+lo++,handler:o,modifiers:n,direction:Ke(n),noop:ke,mouseStart(l){je(l,t)&&$t(l)&&(oe(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(je(l,t)){const s=l.target;oe(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,s){if(O.is.firefox===!0&&pe(e,!0),t.lastEvt=l,s===!0||n.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const d=l.type.indexOf("mouse")>-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&Ae(d),l.cancelBubble===!0&&ye(d),Object.assign(d,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:d}}ye(l)}const{left:f,top:c}=Se(l);t.event={x:f,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:c}},move(l){if(t.event===void 0)return;const s=Se(l),f=s.left-t.event.x,c=s.top-t.event.y;if(f===0&&c===0)return;t.lastEvt=l;const d=t.event.mouse===!0,r=()=>{i(l,d);let v;n.preserveCursor!==!0&&n.preservecursor!==!0&&(v=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),no(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,v!==void 0&&(document.documentElement.style.cursor=v),document.body.classList.remove("non-selectable"),d===!0){const k=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{k(),h()},50):k()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&i(l,t.event.mouse);const{payload:v,synthetic:h}=Le(l,t,!1);v!==void 0&&(t.handler(v)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&r(),t.event.lastX=v.position.left,t.event.lastY=v.position.top,t.event.lastDir=h===!0?void 0:v.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||d===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){r(),t.event.detected=!0,t.move(l);return}const w=Math.abs(f),q=Math.abs(c);w!==q&&(t.direction.horizontal===!0&&w>q||t.direction.vertical===!0&&w<q||t.direction.up===!0&&w<q&&c<0||t.direction.down===!0&&w<q&&c>0||t.direction.left===!0&&w>q&&f<0||t.direction.right===!0&&w>q&&f>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,s){if(t.event!==void 0){if(ge(t,"temp"),O.is.firefox===!0&&pe(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Le(l===void 0?t.lastEvt:l,t).payload);const{payload:f}=Le(l===void 0?t.lastEvt:l,t,!0),c=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const l=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";oe(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}O.has.touch===!0&&oe(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const n=e.__qtouchpan;n!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&n.end(),n.handler=o.value),n.direction=Ke(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),ge(o,"main"),ge(o,"temp"),O.is.firefox===!0&&pe(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function re(e,o,n){return n<=o?o:Math.min(n,Math.max(o,e))}const Ge=150;var io=D({name:"QDrawer",inheritAttrs:!1,props:{...Nt,...$e,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Xt,"onLayout","miniState"],setup(e,{slots:o,emit:n,attrs:i}){const t=V(),{proxy:{$q:l}}=t,s=Be(e,l),{preventBodyScroll:f}=Zt(),{registerTimeout:c,removeTimeout:d}=eo(),r=Ee(ue,H);if(r===H)return console.error("QDrawer needs to be child of QLayout"),H;let w,q=null,v;const h=x(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),k=m(()=>e.mini===!0&&h.value!==!0),L=m(()=>k.value===!0?e.miniWidth:e.width),b=x(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),u=m(()=>e.persistent!==!0&&(h.value===!0||it.value===!0));function p(a,g){if(W(),a!==!1&&r.animate(),$(0),h.value===!0){const E=r.instances[Z.value];E!==void 0&&E.belowBreakpoint===!0&&E.hide(!1),R(1),r.isContainer.value!==!0&&f(!0)}else R(0),a!==!1&&ve(!1);c(()=>{a!==!1&&ve(!0),g!==!0&&n("show",a)},Ge)}function y(a,g){K(),a!==!1&&r.animate(),R(0),$(X.value*L.value),me(),g!==!0?c(()=>{n("hide",a)},Ge):d()}const{show:S,hide:z}=Yt({showing:b,hideOnRouteChange:u,handleShow:p,handleHide:y}),{addToHistory:W,removeFromHistory:K}=Ft(b,z,u),Q={belowBreakpoint:h,hide:z},_=m(()=>e.side==="right"),X=m(()=>(l.lang.rtl===!0?-1:1)*(_.value===!0?1:-1)),Pe=x(0),Y=x(!1),se=x(!1),Me=x(L.value*X.value),Z=m(()=>_.value===!0?"left":"right"),de=m(()=>b.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:L.value:0),ce=m(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(_.value?"R":"L")>-1||l.platform.is.ios===!0&&r.isContainer.value===!0),j=m(()=>e.overlay===!1&&b.value===!0&&h.value===!1),it=m(()=>e.overlay===!0&&b.value===!0&&h.value===!1),rt=m(()=>"fullscreen q-drawer__backdrop"+(b.value===!1&&Y.value===!1?" hidden":"")),at=m(()=>({backgroundColor:`rgba(0,0,0,${Pe.value*.4})`})),Ve=m(()=>_.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),ut=m(()=>_.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),st=m(()=>{const a={};return r.header.space===!0&&Ve.value===!1&&(ce.value===!0?a.top=`${r.header.offset}px`:r.header.space===!0&&(a.top=`${r.header.size}px`)),r.footer.space===!0&&ut.value===!1&&(ce.value===!0?a.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(a.bottom=`${r.footer.size}px`)),a}),dt=m(()=>{const a={width:`${L.value}px`,transform:`translateX(${Me.value}px)`};return h.value===!0?a:Object.assign(a,st.value)}),ct=m(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),ft=m(()=>`q-drawer q-drawer--${e.side}`+(se.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(Y.value===!0?" no-transition":b.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${k.value===!0?"mini":"standard"}`+(ce.value===!0||j.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Ve.value===!0?" q-drawer--top-padding":""))),vt=m(()=>{const a=l.lang.rtl===!0?e.side:Z.value;return[[Te,yt,void 0,{[a]:!0,mouse:!0}]]}),mt=m(()=>{const a=l.lang.rtl===!0?Z.value:e.side;return[[Te,_e,void 0,{[a]:!0,mouse:!0}]]}),ht=m(()=>{const a=l.lang.rtl===!0?Z.value:e.side;return[[Te,_e,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function fe(){gt(h,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}C(h,a=>{a===!0?(w=b.value,b.value===!0&&z(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(b.value===!0?($(0),R(0),me()):S(!1))}),C(()=>e.side,(a,g)=>{r.instances[g]===Q&&(r.instances[g]=void 0,r[g].space=!1,r[g].offset=0),r.instances[a]=Q,r[a].size=L.value,r[a].space=j.value,r[a].offset=de.value}),C(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&fe()}),C(()=>e.behavior+e.breakpoint,fe),C(r.isContainer,a=>{b.value===!0&&f(a!==!0),a===!0&&fe()}),C(r.scrollbarWidth,()=>{$(b.value===!0?0:void 0)}),C(de,a=>{A("offset",a)}),C(j,a=>{n("onLayout",a),A("space",a)}),C(_,()=>{$()}),C(L,a=>{$(),he(e.miniToOverlay,a)}),C(()=>e.miniToOverlay,a=>{he(a,L.value)}),C(()=>l.lang.rtl,()=>{$()}),C(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(pt(),r.animate())}),C(k,a=>{n("miniState",a)});function $(a){a===void 0?U(()=>{a=b.value===!0?0:L.value,$(X.value*a)}):(r.isContainer.value===!0&&_.value===!0&&(h.value===!0||Math.abs(a)===L.value)&&(a+=X.value*r.scrollbarWidth.value),Me.value=a)}function R(a){Pe.value=a}function ve(a){const g=a===!0?"remove":r.isContainer.value!==!0?"add":"";g!==""&&document.body.classList[g]("q-body--drawer-toggle")}function pt(){q!==null&&clearTimeout(q),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),se.value=!0,q=setTimeout(()=>{q=null,se.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function yt(a){if(b.value!==!1)return;const g=L.value,E=re(a.distance.x,0,g);if(a.isFinal===!0){E>=Math.min(75,g)===!0?S():(r.animate(),R(0),$(X.value*g)),Y.value=!1;return}$((l.lang.rtl===!0?_.value!==!0:_.value)?Math.max(g-E,0):Math.min(0,E-g)),R(re(E/g,0,1)),a.isFirst===!0&&(Y.value=!0)}function _e(a){if(b.value!==!0)return;const g=L.value,E=a.direction===e.side,ee=(l.lang.rtl===!0?E!==!0:E)?re(a.distance.x,0,g):0;if(a.isFinal===!0){Math.abs(ee)<Math.min(75,g)===!0?(r.animate(),R(1),$(0)):z(),Y.value=!1;return}$(X.value*ee),R(re(1-ee/g,0,1)),a.isFirst===!0&&(Y.value=!0)}function me(){f(!1),ve(!0)}function A(a,g){r.update(e.side,a,g)}function gt(a,g){a.value!==g&&(a.value=g)}function he(a,g){A("size",a===!0?e.miniWidth:g)}return r.instances[e.side]=Q,he(e.miniToOverlay,L.value),A("space",j.value),A("offset",de.value),e.showIfAbove===!0&&e.modelValue!==!0&&b.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),I(()=>{n("onLayout",j.value),n("miniState",k.value),w=e.showIfAbove===!0;const a=()=>{(b.value===!0?p:y)(!1,!0)};if(r.totalWidth.value!==0){U(a);return}v=C(r.totalWidth,()=>{v(),v=void 0,b.value===!1&&e.showIfAbove===!0&&h.value===!1?S(!1):a()})}),N(()=>{v!==void 0&&v(),q!==null&&(clearTimeout(q),q=null),b.value===!0&&me(),r.instances[e.side]===Q&&(r.instances[e.side]=void 0,A("size",0),A("offset",0),A("space",!1))}),()=>{const a=[];h.value===!0&&(e.noSwipeOpen===!1&&a.push(Bt(T("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),vt.value)),a.push(De("div",{ref:"backdrop",class:rt.value,style:at.value,"aria-hidden":"true",onClick:z},void 0,"backdrop",e.noSwipeBackdrop!==!0&&b.value===!0,()=>ht.value)));const g=k.value===!0&&o.mini!==void 0,E=[T("div",{...i,key:""+g,class:[ct.value,i.class]},g===!0?o.mini():ae(o.default))];return e.elevated===!0&&b.value===!0&&E.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(De("aside",{ref:"content",class:ft.value,style:dt.value},E,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>mt.value)),T("div",{class:"q-drawer-container"},a)}}}),ro=D({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=V(),i=Ee(ue,H);if(i===H)return console.error("QPageContainer needs to be child of QLayout"),H;tt(Ot,!0);const t=m(()=>{const l={};return i.header.space===!0&&(l.paddingTop=`${i.header.size}px`),i.right.space===!0&&(l[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(l.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(l[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),l});return()=>T("div",{class:"q-page-container",style:t.value},ae(o.default))}});const{passive:Je}=M,ao=["both","horizontal","vertical"];var uo=D({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ao.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,t,l;C(()=>e.scrollTarget,()=>{c(),f()});function s(){i!==null&&i();const w=Math.max(0,nt(t)),q=lt(t),v={top:w-n.position.top,left:q-n.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const h=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";n.position={top:w,left:q},n.directionChanged=n.direction!==h,n.delta=v,n.directionChanged===!0&&(n.direction=h,n.inflectionPoint=n.position),o("scroll",{...n})}function f(){t=Ut(l,e.scrollTarget),t.addEventListener("scroll",d,Je),d(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",d,Je),t=void 0)}function d(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(i===null){const[q,v]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];i=()=>{v(q),i=null}}}const{proxy:r}=V();return C(()=>r.$q.lang.rtl,s),I(()=>{l=r.$el.parentNode,f()}),N(()=>{i!==null&&i(),c()}),Object.assign(r,{trigger:d,getPosition:()=>n}),ke}}),so=D({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:i}}=V(),t=x(null),l=x(i.screen.height),s=x(e.container===!0?0:i.screen.width),f=x({position:0,direction:"down",inflectionPoint:0}),c=x(0),d=x(et.value===!0?0:be()),r=m(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=m(()=>e.container===!1?{minHeight:i.screen.height+"px"}:null),q=m(()=>d.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),v=m(()=>d.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function h(y){if(e.container===!0||document.qScrollPrevented!==!0){const S={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};f.value=S,e.onScroll!==void 0&&n("scroll",S)}}function k(y){const{height:S,width:z}=y;let W=!1;l.value!==S&&(W=!0,l.value=S,e.onScrollHeight!==void 0&&n("scrollHeight",S),b()),s.value!==z&&(W=!0,s.value=z),W===!0&&e.onResize!==void 0&&n("resize",y)}function L({height:y}){c.value!==y&&(c.value=y,b())}function b(){if(e.container===!0){const y=l.value>c.value?be():0;d.value!==y&&(d.value=y)}}let u=null;const p={instances:{},view:m(()=>e.view),isContainer:m(()=>e.container),rootRef:t,height:l,containerHeight:c,scrollbarWidth:d,totalWidth:m(()=>s.value+d.value),rows:m(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:ne({size:0,offset:0,space:!1}),right:ne({size:300,offset:0,space:!1}),footer:ne({size:0,offset:0,space:!1}),left:ne({size:300,offset:0,space:!1}),scroll:f,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,S,z){p[y][S]=z}};if(tt(ue,p),be()>0){let z=function(){y=null,S.classList.remove("hide-scrollbar")},W=function(){if(y===null){if(S.scrollHeight>i.screen.height)return;S.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(z,300)},K=function(Q){y!==null&&Q==="remove"&&(clearTimeout(y),z()),window[`${Q}EventListener`]("resize",W)},y=null;const S=document.body;C(()=>e.container!==!0?"add":"remove",K),e.container!==!0&&K("add"),Pt(()=>{K("remove")})}return()=>{const y=St(o.default,[T(uo,{onScroll:h}),T(xe,{onResize:k})]),S=T("div",{class:r.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?T("div",{class:"q-layout-container overflow-hidden",ref:t},[T(xe,{onResize:L}),T("div",{class:"absolute-full",style:q.value},[T("div",{class:"scroll",style:v.value},[S])])]):S}}});function co(e,o,n,i,t,l){const s=Mt("router-view");return Vt(),_t(so,{view:"lHh Lpr lFf"},{default:P(()=>[B(Wt,{elevated:""},{default:P(()=>[B(Rt,null,{default:P(()=>[B(te,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),B(te,{onClick:e.copyLink,flat:"",round:"",icon:"ios_share","aria-label":"Share",label:"Share"},null,8,["onClick"])]),_:1})]),_:1}),B(io,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=f=>e.leftDrawerOpen=f),"show-if-above":"",bordered:""},{default:P(()=>[B(Qt,null,{default:P(()=>[B(Fe,{to:"/"},{default:P(()=>[B(te,{flat:"",dense:"",icon:"home"},{default:P(()=>[We("\u9996\u9801")]),_:1})]),_:1}),B(Fe,{to:"/intro"},{default:P(()=>[B(te,{flat:"",dense:"",icon:"info"},{default:P(()=>[We("\u8AAA\u660E")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),B(ro,null,{default:P(()=>[B(s)]),_:1})]),_:1})}const fo=Dt({name:"MainLayout",setup(){const e=x(!1);return{hash:x(window.location.hash||""),leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}},methods:{editStep(){if(this.$route.name=="EdiTor"){alert("You are already editing this step.");return}this.$router.push("/edit/_"+this.hash.replace("edit/","").replace("_/",""))},copyLink(){if(!document.hasFocus()){alert("Document does not have focus, cannot copy text.");return}const e="https://hackstep.pages.dev"+this.$route.path;navigator.clipboard.writeText(e).then(()=>{window.alert("Copied the link: "+e)}).catch(o=>{console.error("Could not copy text: ",o)})}}});var go=Ht(fo,[["render",co]]);export{go as default};