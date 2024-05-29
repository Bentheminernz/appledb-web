import{_ as S,r as _,o as r,c as l,e as d,t as p,m as v,E as u,d as o,F as f,n as F,M as k,Z as B,L as D,D as b,a0 as V,a1 as C}from"./app.cdf1231e.js";const I={props:{fmVersionArr:Array,deviceFilter:Array,mainList:Boolean,hasFirmwares:Object,hasFirmwareFilters:Boolean,show:Object,devOptions:Object},data(){return{loadedFirmwares:[0,100],versionArr:[],versionHeaderStr:"Firmware Versions",optionsObjStr:{showBuildNumber:"Show build numbers",showVersionString:"Show version numbers",showReleasedString:"Show release dates",showSigningStatus:"Show signing status",showTweetButton:"Show Tweet button"},options:{showBuildNumber:!1,showVersionString:!0,showReleasedString:!0,showSigningStatus:!0,showRelease:!0,showBeta:!1,showInternal:!1,showTweetButton:!1,searchStr:"",showFilter:!1,filterDev:[]}}},computed:{optionsObj(){return["showBuildNumber","showVersionString","showReleasedString","showSigningStatus","showTweetButton"].map(n=>({label:this.optionsObjStr[n],model:n,display:!0}))}},methods:{filterVersions(){this.versionArr=this.fmVersionArr.filter(i=>(i.internal?this.options.showInternal:i.beta||i.rc?this.options.showBeta:this.options.showRelease)&&i.deviceFilterArr.some(w=>this.options.filterDev.includes(w))&&[i.osStr,i.version,i.build].join(" ").toLowerCase().includes(this.options.searchStr.toLowerCase())),this.$route.query;let n=[["release",this.options.showRelease],["beta",this.options.showBeta],["internal",this.options.showInternal]],s=n.filter(i=>i[1]).map(i=>i[0]);s.length==n.length&&(s=[]),this.deviceFilter.length!=this.options.filterDev.length&&s.push(...this.options.filterDev),s=s.length?{filter:s.join(";")}:{},this.$router.push({query:s})}},mounted(){let n={releaseBetaInternalFilter:!1,deviceFilter:!1},s=this.$route.query;s&&s.filter&&s.filter.length&&(s=s.filter.split(";"),s.some(i=>["release","beta","internal"].includes(i))&&(n.releaseBetaInternalFilter=!0,this.options.showRelease=s.includes("release"),this.options.showBeta=s.includes("beta"),this.options.showInternal=s.includes("internal")),s.some(i=>this.deviceFilter.map(w=>w.value).includes(i))&&(n.deviceFilter=!0,this.options.filterDev=s.filter(i=>this.deviceFilter.map(w=>w.value).includes(i)))),n.deviceFilter||(this.options.filterDev=this.deviceFilter.map(i=>i.value)),n.releaseBetaInternalFilter||(this.show&&this.show.releaseType?(this.options.showBeta=this.show.releaseType.includes("beta"),this.options.showInternal=this.show.releaseType.includes("internal")):this.hasFirmwareFilters||(this.options.showRelease=this.hasFirmwares.release,this.options.showBeta=this.hasFirmwares.beta,this.options.showInternal=this.hasFirmwares.internal)),this.filterVersions()}},h=n=>(V("data-v-372ca6dd"),n=n(),C(),n),O={key:0,style:{"margin-bottom":".3em"}},A={key:1,class:"optionsWrapper"},R=h(()=>o("i",{class:"fas fa-circle release"},null,-1)),T=h(()=>o("i",{class:"fas fa-circle beta"},null,-1)),L=h(()=>o("i",{class:"fas fa-circle internal"},null,-1)),j=h(()=>o("div",{class:"separatorBefore"},null,-1)),x=h(()=>o("div",{class:"btn"},[o("i",{class:"fas fa-filter"}),d(" Filter ")],-1)),W={class:"hoverElement filterList"},N=["onClick"],q=h(()=>o("i",{class:"fas fa-check"},null,-1)),z=[q],E={class:"textWrapper"},H=h(()=>o("hr",{class:"show740"},null,-1)),K={class:"iconWrapper noBorder"},M={class:"textWrapper"},U=["onClick"],Z=h(()=>o("div",{class:"iconWrapper"},[o("i",{class:"fas fa-check"})],-1)),G={class:"textWrapper"},J=h(()=>o("div",{class:"separatorAfter"},null,-1)),P=h(()=>o("i",{class:"fas fa-sort"},null,-1)),Q=h(()=>o("i",{class:"fas fa-search"},null,-1)),X={key:2,class:"optionsWrapper filterListHorizontal"},Y=h(()=>o("i",{class:"fas fa-times",style:{"font-size":".8em","margin-right":"4px"}},null,-1)),$=h(()=>o("i",{class:"fas fa-check",style:{"font-size":".8em","margin-right":"4px"}},null,-1)),ee=h(()=>o("div",{style:{"border-right":"1px solid var(--c-border)","margin-inline":".5em","margin-block":".4em"}},null,-1)),se=["onClick"],ie={key:3,style:{display:"flex",padding:"1em","padding-top":"1.5em"}},te={style:{"margin-left":"auto"}};function oe(n,s,i,w,e,c){const g=_("firmwareVersionTableElement"),y=_("hiddenOptions");return r(),l(f,null,[i.mainList?v("",!0):(r(),l("h5",O,[d(p(e.versionHeaderStr)+" ",1),i.hasFirmwareFilters?v("",!0):(r(),l("i",{key:0,class:"fas fa-sort",style:{"margin-inline":"10px","font-size":"1em",cursor:"pointer"},onClick:s[0]||(s[0]=t=>e.versionArr.reverse())}))])),i.hasFirmwareFilters?(r(),l("div",A,[i.hasFirmwares.release?(r(),l("div",{key:0,class:u([e.options.showRelease?"active":"","release","btn","sbiFilter"]),onClick:s[1]||(s[1]=t=>{e.options.showRelease=!e.options.showRelease,c.filterVersions()})},[R,d(" Release ")],2)):v("",!0),i.hasFirmwares.beta?(r(),l("div",{key:1,class:u([e.options.showBeta?"active":"","beta","btn","sbiFilter"]),onClick:s[2]||(s[2]=t=>{e.options.showBeta=!e.options.showBeta,c.filterVersions()})},[T,d(" Beta ")],2)):v("",!0),i.hasFirmwares.internal?(r(),l("div",{key:2,class:u([e.options.showInternal?"active":"","internal","btn","sbiFilter"]),onClick:s[3]||(s[3]=t=>{e.options.showInternal=!e.options.showInternal,c.filterVersions()})},[L,d(" Internal ")],2)):v("",!0),j,o("div",{class:u(["hoverOn",i.deviceFilter.length<2?"show740":""])},[x,o("div",W,[(r(),l(f,null,F([{label:"Release",option:"showRelease"},{label:"Beta",option:"showBeta"},{label:"Internal",option:"showInternal"}],t=>o("div",{key:t,class:u(["filterListItem","show740",e.options[t.option]?"active":""]),onClick:a=>{e.options[t.option]=!e.options[t.option],c.filterVersions()}},[o("div",{class:u(["iconWrapper",t.option])},z,2),o("div",E,p(t.label),1)],10,N)),64)),i.deviceFilter.length>1?(r(),l(f,{key:0},[H,i.deviceFilter.length>4?(r(),l("div",{key:0,class:"filterListItem active",onClick:s[4]||(s[4]=t=>{e.options.filterDev.length==i.deviceFilter.length?e.options.filterDev=[]:e.options.filterDev=i.deviceFilter.map(a=>a.value),c.filterVersions()})},[o("div",K,[o("i",{class:u(`fas fa-border-${e.options.filterDev.length==i.deviceFilter.length?"none":"all"}`)},null,2)]),o("div",M,p(e.options.filterDev.length==i.deviceFilter.length?"Clear":"Select")+" all",1)])):v("",!0),(r(!0),l(f,null,F(i.deviceFilter,t=>(r(),l("div",{key:t,class:u(["filterListItem",e.options.filterDev.includes(t.value)?"active":""]),onClick:a=>{e.options.filterDev=e.options.filterDev.includes(t.value)?e.options.filterDev.filter(m=>m!=t.value):e.options.filterDev.concat(t.value),c.filterVersions()}},[Z,o("div",G,p(t.label),1)],10,U))),128))],64)):v("",!0)])],2),J,o("div",{onClick:s[5]||(s[5]=t=>e.versionArr.reverse()),class:"btn"},[P,d(" Sort ")]),o("div",{onClick:s[8]||(s[8]=t=>n.$refs.fwSearchBar.focus()),class:"btn searchBtn"},[Q,d(),k(o("input",{class:"search","onUpdate:modelValue":s[6]||(s[6]=t=>e.options.searchStr=t),placeholder:"Search","aria-placeholder":"Search",onKeyup:s[7]||(s[7]=D(t=>c.filterVersions(),["enter"])),ref:"fwSearchBar"},null,544),[[B,e.options.searchStr]])])])):v("",!0),e.options.showFilter?(r(),l("div",X,[i.deviceFilter.length>4?(r(),l(f,{key:0},[o("div",{class:"btn",onClick:s[9]||(s[9]=t=>{e.options.filterDev=[],c.filterVersions()})},[Y,d(" Clear all ")]),o("div",{class:"btn",onClick:s[10]||(s[10]=t=>{e.options.filterDev=i.deviceFilter.map(a=>a.value),c.filterVersions()})},[$,d(" Select all ")]),ee],64)):v("",!0),(r(!0),l(f,null,F(i.deviceFilter,t=>(r(),l("div",{key:t,class:u(["filterBtn","btn",e.options.filterDev.includes(t.value)?"active":""]),onClick:a=>{e.options.filterDev=e.options.filterDev.includes(t.value)?e.options.filterDev.filter(m=>m!=t.value):e.options.filterDev.concat(t.value),c.filterVersions()}},[o("span",null,p(t.label),1)],10,se))),128))])):v("",!0),(r(!0),l(f,null,F(e.versionArr.slice(e.loadedFirmwares[0],e.loadedFirmwares[1]),t=>(r(),b(g,{key:t,fw:t,options:e.options,showDots:e.options.showRelease+e.options.showBeta+e.options.showInternal>1&&i.hasFirmwareFilters,hasFirmwares:i.hasFirmwares,showSingleDownloads:e.versionArr.map(a=>a.filteredDownloads||a.filteredOtas).filter(a=>a.length).length>0||e.versionArr.map(a=>a.preinstalled.some(m=>a.devices.includes(m))).filter(a=>a).length>0},null,8,["fw","options","showDots","hasFirmwares","showSingleDownloads"]))),128)),e.loadedFirmwares[1]<e.versionArr.length?(r(),l("div",ie,[o("div",null,"Displaying "+p(e.loadedFirmwares[1])+" firmware versions out of "+p(e.versionArr.length)+".",1),o("div",te,[o("a",{style:{cursor:"pointer"},onClick:s[11]||(s[11]=t=>e.loadedFirmwares[1]+=500)},"Load more")])])):v("",!0),i.devOptions.show?(r(),b(y,{key:4,options:e.options,optionsObj:c.optionsObj,devOptions:i.devOptions,deviceFilter:i.deviceFilter,filterVersions:c.filterVersions},null,8,["options","optionsObj","devOptions","deviceFilter","filterVersions"])):v("",!0)],64)}var le=S(I,[["render",oe],["__scopeId","data-v-372ca6dd"],["__file","firmwareVersionTableWrapper.vue"]]);export{le as default};
