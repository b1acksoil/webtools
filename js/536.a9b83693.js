"use strict";(self["webpackChunkwebtools"]=self["webpackChunkwebtools"]||[]).push([[536],{5536:(e,t,l)=>{l.r(t),l.d(t,{default:()=>j});var a=l(3673),o=l(2323);const n=(0,a.Uk)(" b1acksoil's webtools "),u=(0,a.Uk)(" 所有工具 "),r={class:"q-py-lg q-px-md flex justify-around"},s=(0,a.Uk)(" GitHub"),c=(0,a.Uk)(" b1acksoil的博客");function i(e,t,l,i,p,m){const d=(0,a.up)("q-btn"),w=(0,a.up)("router-link"),f=(0,a.up)("q-toolbar-title"),b=(0,a.up)("q-toolbar"),k=(0,a.up)("q-header"),g=(0,a.up)("q-item-label"),h=(0,a.up)("ToolLink"),_=(0,a.up)("q-list"),q=(0,a.up)("q-drawer"),W=(0,a.up)("router-view"),y=(0,a.up)("q-page-container"),Z=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(Z,{view:"hHh Lpr lFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{class:(0,o.C_)(["bg-primary",""===e.currentTool?"shadow-4":""])},{default:(0,a.w5)((()=>[(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Tools",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{to:"/"},{default:(0,a.w5)((()=>[n])),_:1}),(0,a.Uk)(" "+(0,o.zw)(""===e.currentTool?"":`- ${e.currentTool}`),1)])),_:1})])),_:1})])),_:1},8,["class"]),(0,a.Wm)(q,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[0]||(t[0]=t=>e.leftDrawerOpen=t),bordered:"",behavior:"mobile",class:"column justify-between"},{default:(0,a.w5)((()=>[(0,a.Wm)(_,null,{default:(0,a.w5)((()=>[(0,a.Wm)(g,{header:""},{default:(0,a.w5)((()=>[u])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.toolsData,((t,l)=>((0,a.wg)(),(0,a.j4)(h,(0,a.dG)({key:l},t,{onClick:e.toggleLeftDrawer}),null,16,["onClick"])))),128))])),_:1}),(0,a._)("div",r,[(0,a.Wm)(d,{type:"a",href:"https://github.com/b1acksoil/webtools/",target:"_blank",color:"primary",push:"","no-caps":""},{default:(0,a.w5)((()=>[s])),_:1}),(0,a.Wm)(d,{type:"a",href:"https://blacksoil.top/",target:"_blank",color:"blue-8",push:"","no-caps":""},{default:(0,a.w5)((()=>[c])),_:1})])])),_:1},8,["modelValue"]),(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.Wm)(W)])),_:1})])),_:1})}var p=l(1959),m=l(9582);function d(e,t,l,n,u,r){const s=(0,a.up)("q-icon"),c=(0,a.up)("q-item-section"),i=(0,a.up)("q-item-label"),p=(0,a.up)("q-item");return(0,a.wg)(),(0,a.j4)(p,{clickable:"",to:"/"+e.name},{default:(0,a.w5)((()=>[e.icon?((0,a.wg)(),(0,a.j4)(c,{key:0,avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{name:e.icon},null,8,["name"])])),_:1})):(0,a.kq)("",!0),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.name),1)])),_:1}),(0,a.Wm)(i,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.desc),1)])),_:1})])),_:1})])),_:1},8,["to"])}const w=(0,a.aZ)({name:"ToolLink",props:{name:{type:String,required:!0},desc:{type:String,default:""},icon:{type:String,default:""}}});var f=l(3414),b=l(2035),k=l(4554),g=l(2350),h=l(7518),_=l.n(h);w.render=d;const q=w;_()(w,"components",{QItem:f.Z,QItemSection:b.Z,QIcon:k.Z,QItemLabel:g.Z});var W=l(8398);const y=(0,a.aZ)({name:"MainLayout",components:{ToolLink:q},setup(){const e=(0,m.tv)(),t=(0,p.iH)(!1),l=(0,p.Fl)((()=>{let t=e.currentRoute.value.path.slice(1);return t="/"===t.charAt(t.length-1)?t.substring(0,t.length-1):t,t}));return{toolsData:W,leftDrawerOpen:t,toggleLeftDrawer(){t.value=!t.value},currentTool:l}}});var Z=l(3066),v=l(3812),Q=l(9570),L=l(269),T=l(3747),D=l(3304),C=l(7011),U=l(2652);y.render=i;const j=y;_()(y,"components",{QLayout:Z.Z,QHeader:v.Z,QToolbar:Q.Z,QBtn:L.Z,QToolbarTitle:T.Z,QDrawer:D.Z,QList:C.Z,QItemLabel:g.Z,QPageContainer:U.Z})}}]);