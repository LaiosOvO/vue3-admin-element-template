var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,r=(e,t,a)=>new Promise(((l,n)=>{var o=e=>{try{r(a.next(e))}catch(t){n(t)}},i=e=>{try{r(a.throw(e))}catch(t){n(t)}},r=e=>e.done?l(e.value):Promise.resolve(e.value).then(o,i);r((a=a.apply(e,t)).next())}));import{i as s,_ as c}from"./index.e1028703.js";import{D as p}from"./index.77fd59d1.js";import{G as b,M as d,aK as u,P as f,p as m,a as P,r as h,o as v,b as y,f as g,w,C as j,F as O,I as D,e as _,J as x,D as k,H as I}from"./vendor.b7909bd0.js";const z={components:{Descrition:p},setup(){const{t:e}=b(),c=d({icon:{}});u((()=>r(this,null,(function*(){yield p()}))));const p=()=>r(this,null,(function*(){s({url:"/icon",method:"get"}).then((e=>{c.icon=e.data}))}));return m=((e,t)=>{for(var a in t||(t={}))n.call(t,a)&&i(e,a,t[a]);if(l)for(var a of l(t))o.call(t,a)&&i(e,a,t[a]);return e})({},f(c)),t(m,a({t:e}));var m}};m("data-v-83cb2f6e");const C={class:"icon-container"},E=I(" Vue3-admin 推荐使用 "),F=j("a",{href:"https://iconpark.oceanengine.com/official",target:"_blank"},"IconPark",-1),G=I(" 作为图标库 "),H={class:"icon-centent"},J={class:"icon-title"};P();var K=c(z,[["render",function(e,t,a,l,n,o){const i=h("Descrition"),r=h("el-table-column"),s=h("el-table");return v(),y("div",C,[g(i,{title:l.t("iconPage.title")},{descrition:w((()=>[E,F,G])),_:1},8,["title"]),g(i,{title:l.t("iconPage.demo"),showDesc:!1},null,8,["title"]),j("div",H,[(v(!0),y(O,null,D(e.icon.icons,((e,t)=>(v(),y("div",{class:"icon-item",key:t},[(v(),_(x(e.name),{class:"icon-name",size:"20"})),j("p",J,k(e.name),1)])))),128))]),g(i,{title:l.t("iconPage.props"),showDesc:!1},null,8,["title"]),g(s,{data:e.icon.props,border:"",style:{width:"100%"}},{default:w((()=>[g(r,{prop:"param",label:l.t("iconPage.table.label1"),width:"180"},null,8,["label"]),g(r,{prop:"type",label:l.t("iconPage.table.label2"),width:"180"},null,8,["label"]),g(r,{prop:"all",label:l.t("iconPage.table.label3")},null,8,["label"]),g(r,{prop:"default",label:l.t("iconPage.table.label4")},null,8,["label"]),g(r,{prop:"desc",label:l.t("iconPage.table.label5")},null,8,["label"])])),_:1},8,["data"])])}],["__scopeId","data-v-83cb2f6e"]]);export{K as default};