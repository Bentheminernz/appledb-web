import{_ as v,a2 as y,r as f,o as e,c as s,F as r,d as c,m as i,t as o,e as d,n as g,D as k,E as _,$ as x}from"./app.cdf1231e.js";const b={props:{content:Object,sectionClass:String},data(){return{isDarkMode:y()}},computed:{imageUrl(){if(!this.content.img)return;if(!this.content.imgFlags)return this.content.img;const l=this.content.imgFlags;if(l.internal){const m="https://img.appledb.dev/device@preview",n=this.content.img,u=l.dark&&this.isDarkMode?"_dark":"";return[m,n,"0"+u].join("/")}}}},U={key:0,class:"img"},E=["srcset"],F=["srcset"],C=["src"],D={class:"text"},p={class:"title"},w={class:"subtitle"},B={key:0,class:"iconRow"},I={key:1,class:"links"},M=["href"];function N(l,m,n,u,S,a){const h=f("gridIcon");return e(),s("div",{class:_(["gridElement",n.sectionClass]),style:x({"grid-template-columns":a.imageUrl?"4em calc(100% - 4em)":"100%"})},[a.imageUrl?(e(),s("div",U,[n.content.imgFlags&&n.content.imgFlags.internal?(e(),s(r,{key:0},[c("source",{srcset:a.imageUrl+".avif",type:"image/avif"},null,8,E),c("source",{srcset:a.imageUrl+".webp",type:"image/webp"},null,8,F),c("img",{src:a.imageUrl+".png"},null,8,C)],64)):i("",!0)])):i("",!0),c("div",D,[c("div",p,o(n.content.title),1),c("div",w,[d(o(n.content.subtitle)+" ",1),n.content.icons?(e(),s("div",B,[(e(!0),s(r,null,g(n.content.icons,t=>(e(),k(h,{key:t,icon:t},null,8,["icon"]))),128))])):i("",!0),n.content.links?(e(),s("div",I,[c("ul",null,[(e(!0),s(r,null,g(n.content.links,t=>(e(),s("li",{key:t},[t.link?(e(),s("a",{key:0,href:t.link},[t.icon?(e(),s("i",{key:0,class:_(t.icon)},null,2)):i("",!0),d(" "+o(t.text),1)],8,M)):(e(),s(r,{key:1},[t.icon?(e(),s("i",{key:0,class:_(t.icon)},null,2)):i("",!0),d(" "+o(t.text),1)],64))]))),128))])])):i("",!0)])])],6)}var j=v(b,[["render",N],["__scopeId","data-v-2cef1090"],["__file","gridElement.vue"]]);export{j as default};
