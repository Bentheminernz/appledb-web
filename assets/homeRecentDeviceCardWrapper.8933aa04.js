import{_ as l,r as o,o as a,c as s,d as t,F as n,n as v,b as d,w as h,a0 as u,a1 as m}from"./app.cdf1231e.js";const C={data(){return{recentDeviceCards:[]}},created(){fetch("https://api.appledb.dev/appledb-web/homePage.json").then(e=>e.json()).then(e=>{this.recentDeviceCards=e.recentDeviceCardArray})}},c=e=>(u("data-v-4b354187"),e=e(),m(),e),f=c(()=>t("h1",null,"Recent devices",-1)),D={class:"wrapper"},g={class:"cardWrapper"},b=c(()=>t("div",{style:{"margin-left":"-2em"}},[t("p",{style:{width:"2em","margin-left":"0"}})],-1)),k=c(()=>t("div",{class:"space"},null,-1));function w(e,y,x,I,_,R){const p=o("homeLargeCard"),i=o("router-link");return a(),s(n,null,[f,t("div",D,[t("div",g,[(a(!0),s(n,null,v(_.recentDeviceCards,r=>(a(),s("div",{class:"recentDeviceCard",key:r.title},[d(i,{to:r.link},{default:h(()=>[d(p,{card:r},null,8,["card"])]),_:2},1032,["to"])]))),128)),b])]),k],64)}var B=l(C,[["render",w],["__scopeId","data-v-4b354187"],["__file","homeRecentDeviceCardWrapper.vue"]]);export{B as default};
