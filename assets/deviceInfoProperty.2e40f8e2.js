import{_ as c,o as t,c as n,d as r,t as i,F as l,e as a,E as s}from"./app.cdf1231e.js";const _={props:{property:Object,showAll:Object,inline:Boolean}},y={class:"title"};function d(p,o,e,f,v,u){return t(),n("div",{class:s(e.inline?"inlineWrapper":"")},[r("div",y,i(e.property.title),1),r("div",null,[!e.inline&&e.property.infoString.split(", ").length>5&&!e.showAll[e.property.key]?(t(),n(l,{key:0},[a(i(e.property.infoString.replace(e.property.infoString,e.property.infoString.split(", ").slice(0,3).join(", ")))+", ",1),r("a",{style:{"user-select":"none",cursor:"pointer"},onClick:o[0]||(o[0]=g=>e.showAll[e.property.key]=!0)},"...")],64)):(t(),n(l,{key:1},[a(i(e.property.infoString),1)],64))])],2)}var m=c(_,[["render",d],["__scopeId","data-v-1076cc5c"],["__file","deviceInfoProperty.vue"]]);export{m as default};
