import{c as t,M as c,d as o,h as r}from"./index.2451904f.js";const s={xs:18,sm:24,md:32,lg:38,xl:46},d={size:String};function m(e,n=s){return t(()=>e.size!==void 0?{fontSize:e.size in n?`${n[e.size]}px`:e.size}:null)}const a=e=>c(o(e)),f=e=>c(e);function z(e,n){return e!==void 0&&e()||n}function v(e,n){if(e!==void 0){const i=e();if(i!=null)return i.slice()}return n}function h(e,n){return e!==void 0?n.concat(e()):n}const u={size:{type:[Number,String],default:"1em"},color:String};function l(e){return{cSize:t(()=>e.size in s?`${s[e.size]}px`:e.size),classes:t(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var x=a({name:"QSpinner",props:{...u,thickness:{type:Number,default:5}},setup(e){const{cSize:n,classes:i}=l(e);return()=>r("svg",{class:i.value+" q-spinner-mat",width:n.value,height:n.value,viewBox:"25 25 50 50"},[r("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});export{x as Q,v as a,h as b,a as c,m as d,f as e,z as h,d as u};
