import{_ as p,Q as _,e as m}from"./climb.fab721d4.js";import{Q as k}from"./QPage.6cc03d2c.js";import{M as f,N as e,O as B,P as n,Q as t,f as d,Y as r,Z as c,F as i,$ as a,S as E,_ as h,d as F,r as g}from"./index.da2ec900.js";import"./QSpinner.9868f503.js";import"./render.5773db3b.js";const A=t("div",{class:"row"},[t("h4",null,"\u95DC\u65BCHackstep")],-1),v={class:"row"},w={class:"col-xs-6 col-sm-4 col-md-3 padded"},C={class:"col-xs-6 col-sm-8 col-md-9 padded"},x={key:0},y={key:1};function D(o,M,Q,T,$,N){const l=f("router-link");return e(),B(k,{class:"index",padding:""},{default:n(()=>[A,t("div",v,[t("div",w,[d(_,{class:"fluid",style:{"border-radius":"15px"},src:p})]),t("div",C,[(e(!0),r(i,null,c(o.parseMarkdownToSteps(o.intro).intros,(s,u)=>(e(),r("h6",{key:u},a(s),1))),128)),(e(!0),r(i,null,c(o.parseMarkdownToSteps(o.intro).steps,(s,u)=>(e(),r("div",{key:u},[s.r?(e(),r("p",y,[d(l,{to:s.r,target:"_blank",rel:"noopener noreferrer"},{default:n(()=>[E(a(s.n),1)]),_:2},1032,["to"])])):(e(),r("p",x,a(s.n),1))]))),128))])])]),_:1})}const S=F({name:"IndexPage",setup(){const o=g(`
      Hackstep \u662F\u4E00\u500B\u7121\u908A\u754C\u77E5\u8B58\u5206\u4EAB\u5668\u3002
      \u60A8\u53EF\u4EE5

      1. \u628A\u60A8\u7684\u77E5\u8B58\u6392\u6210\u6B65\u9A5F
      2. \u91CD\u65B0\u6392\u5E8F
      3. \u8907\u88FD\u9023\u7D50\uFF0C\u5206\u4EAB\u51FA\u53BB
      4. \u63A5\u6536\u6821\u5C0D\u8207\u56DE\u8986
  
      `);return{parseMarkdownToSteps:m.parseMarkdownToSteps,intro:o}}});var L=h(S,[["render",D]]);export{L as default};