import{b as E,c as z,i as S,a as P,d as I,u as q,e as A,E as B,_ as C,w as L}from"./base-6d2ac819.js";import{d as b,r as d,c as _,i as N,w as $,o as a,a as l,n as g,u as i,b as y,e as F,f as H,g as U,h as V,_ as j,j as x,t as D,k as R,l as r,m as T,F as G,p as J,q as K,s as M}from"./index-c715e137.js";const O=E({size:{type:[Number,String],values:z,default:"",validator:e=>S(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:P},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:I(String),default:"cover"}}),Q={error:e=>e instanceof Event},W=["src","alt","srcset"],X=b({name:"ElAvatar"}),Y=b({...X,props:O,emits:Q,setup(e,{emit:u}){const o=e,t=q("avatar"),n=d(!1),f=_(()=>{const{size:s,icon:h,shape:v}=o,p=[t.b()];return N(s)&&p.push(t.m(s)),h&&p.push(t.m("icon")),v&&p.push(t.m(v)),p}),m=_(()=>{const{size:s}=o;return S(s)?t.cssVarBlock({size:A(s)||""}):void 0}),c=_(()=>({objectFit:o.fit}));$(()=>o.src,()=>n.value=!1);function k(s){n.value=!0,u("error",s)}return(s,h)=>(a(),l("span",{class:V(i(f)),style:g(i(m))},[(s.src||s.srcSet)&&!n.value?(a(),l("img",{key:0,src:s.src,alt:s.alt,srcset:s.srcSet,style:g(i(c)),onError:k},null,44,W)):s.icon?(a(),y(i(B),{key:1},{default:F(()=>[(a(),y(H(s.icon)))]),_:1})):U(s.$slots,"default",{key:2})],6))}});var Z=C(Y,[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]);const ss=L(Z);const w=e=>(K("data-v-3cfe4692"),e=e(),M(),e),es={id:"homePage",style:{position:"relative",top:"-100px"}},ts=w(()=>r("div",{class:"line-container"},[r("hr",{class:"line"})],-1)),as=w(()=>r("p",null,"这里是一个小辣鸡做的个人主页",-1)),os={class:"radius",style:{"text-align":"left"}},rs=["href"],ns=["src"],cs={__name:"HomePage",setup(e){const u=x({circleUrl:"assets/cat.png"}),{circleUrl:o}=D(u);d([{name:"Large Radius",type:"base"}]);const t=d([{url:"https://github.com/378367741",icon:"assets/icon/github.png"},{url:"https://www.bilibili.com",icon:"assets/icon/bilibili.png"},{url:"https://www.qq.com",icon:"assets/icon/qq.png"},{url:"mailto:example@example.com",icon:"assets/icon/email.png"},{url:"https://prts.wiki/w/%E9%A6%96%E9%A1%B5",icon:"assets/icon/ak.png"}]);return(n,f)=>{const m=ss;return a(),l("div",es,[R(m,{size:120,src:i(o),class:"img"},null,8,["src"]),r("h1",null,T(n.$t("homePage.title")),1),ts,as,r("div",os,[(a(!0),l(G,null,J(t.value,c=>(a(),l("a",{key:c.url,href:c.url,target:"_blank"},[r("img",{src:c.icon,alt:"Social Icon"},null,8,ns)],8,rs))),128))])])}}},ps=j(cs,[["__scopeId","data-v-3cfe4692"]]);export{ps as default};