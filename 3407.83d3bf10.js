(()=>{"use strict";var r={97543:(r,e,t)=>{t.d(e,{Z:()=>v});var o=t(62603),s=t(39506);let n=(r,e)=>{let t=r.length>>1,o=e<t?0:t;return r.slice(o,o+t)};var a=t(80411);let i=["Belarus","Estonia","Faroe Islands","Finland","Iceland","Kazakhstan","Latvia","Lithuania","Norway","Russia","Sweden"],l=new Set(i),c=r=>r=>l.has(r.country),u=r=>e=>e.country===r,p=r=>u(r.country);function g(r){let{id:e}=r;return r=>r.id===e}function d(r){let e=g(r);return r=>r.some(e)}function f(r,e){let t=e-(e>>1),s=c(r),n=r=>s(r)?1:0;return r=>(0,o.Z)(r,n)<=t}let v=(r,e)=>{let t=(0,a.Z)(r),o=f(r,e);return(r,e,a)=>{let i=e[a],l=(0,s.Z)(e),c=i.length>l||i.some(p(r))||i.some(t(r))||!o([...i,r])||r.pairing&&n(e,a).some(d(r.pairing));return!c}}},80411:(r,e,t)=>{t.d(e,{Z:()=>p});var o=t(7979),s=t(46338);let n=(r,e)=>t=>t>=r&&t<=e,a=[{countries:["Russia","Ukraine"],predicate:n(2014,Number.MAX_SAFE_INTEGER)},{countries:["Azerbaijan","Armenia"]},{countries:["Serbia","Kosovo"]},{countries:["Bosnia & Herzegovina","Kosovo"]},{countries:["Spain","Gibraltar"]}],i={predicate:s.Z},l=a.map(r=>({...i,...r}));function c(r){let e=new Map;for(let[t,o]of r)e.has(t)||e.set(t,new Set),e.get(t).add(o);return e}let u=r=>{let e=l.filter(e=>e.predicate(r)),t=e.map(r=>r.countries),o=t.map(r=>r.slice().reverse()),s=c([...t,...o]);return s.get.bind(s)},p=r=>{let e=u(r);return r=>{let t=e(r.country);return void 0===t?o.Z:r=>t.has(r.country)}}},23407:(r,e,t)=>{var o=t(30845),s=t(6284),n=t(97543);let a=([r,e])=>JSON.stringify({year:r,groupSize:e}),i=(r,e)=>a(r)===a(e),l=(0,o.Z)(n.Z,i);addEventListener("message",r=>{let{messageId:e,data:{season:t,pots:o,groups:n,selectedTeam:a}}=r.data,i=l(t,o.length),c=(0,s.u)(o,n,a,i);postMessage({messageId:e,data:{pickedGroup:c}})})},39506:(r,e,t)=>{t.d(e,{Z:()=>o});let o=r=>r.reduce((r,e)=>Math.min(e.length,r),Number.MAX_SAFE_INTEGER)}},e={};function t(o){var s=e[o];if(void 0!==s)return s.exports;var n=e[o]={exports:{}};return r[o](n,n.exports,t),n.exports}t.m=r,t.x=()=>{var r=t.O(void 0,[3748,6902,7180,3520,4833],()=>t(23407));return t.O(r)},(()=>{var r=[];t.O=(e,o,s,n)=>{if(o){n=n||0;for(var a=r.length;a>0&&r[a-1][2]>n;a--)r[a]=r[a-1];r[a]=[o,s,n];return}for(var i=1/0,a=0;a<r.length;a++){for(var[o,s,n]=r[a],l=!0,c=0;c<o.length;c++)i>=n&&Object.keys(t.O).every(r=>t.O[r](o[c]))?o.splice(c--,1):(l=!1,n<i&&(i=n));if(l){r.splice(a--,1);var u=s();void 0!==u&&(e=u)}}return e}})(),t.d=(r,e)=>{for(var o in e)t.o(e,o)&&!t.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:e[o]})},t.f={},t.e=r=>Promise.all(Object.keys(t.f).reduce((e,o)=>(t.f[o](r,e),e),[])),t.u=r=>""+({3520:"vendors-cl-gs-allPossibleGroupsWorker~cl-gs-firstPossibleGroupWorker~el-gs-worker~wc-gs-worker~~~~",3748:"vendors-cl-gs~cl-gs-allPossibleGroupsWorker~cl-gs-firstPossibleGroupWorker~cl-ko~cl-ko-worker~el-gs~el-gs-worker~el-ko~el-ko-worker~wc-gs~wc-gs-worker~~~~~~",4833:"vendors-",6902:"vendors-cl-gs~cl-gs-allPossibleGroupsWorker~cl-gs-firstPossibleGroupWorker~cl-ko~el-gs~el-gs-worker~el-ko~wc-gs~wc-gs-worker~~~~",7180:"vendors-cl-gs-allPossibleGroupsWorker~cl-gs-firstPossibleGroupWorker~cl-ko-worker~el-gs-worker~el-ko-worker~wc-gs-worker~~~~~~"})[r]+"."+({3520:"1c0f2755",3748:"b186b6dc",4833:"88bf7ff3",6902:"2ea56dcf",7180:"1b80725a"})[r]+".js",t.miniCssF=r=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(r){if("object"==typeof window)return window}}(),t.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),t.j=3407,(()=>{t.g.importScripts&&(r=t.g.location+"");var r,e=t.g.document;if(!r&&e&&(e.currentScript&&(r=e.currentScript.src),!r)){var o=e.getElementsByTagName("script");if(o.length)for(var s=o.length-1;s>-1&&!r;)r=o[s--].src}if(!r)throw Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=r})(),(()=>{var r={3407:1,9039:1},e=e=>{var[o,n,a]=e;for(var i in n)t.o(n,i)&&(t.m[i]=n[i]);for(a&&a(t);o.length;)r[o.pop()]=1;s(e)};t.f.i=(e,o)=>{r[e]||importScripts(t.p+t.u(e))};var o=self.webpackChunkdraw=self.webpackChunkdraw||[],s=o.push.bind(o);o.push=e})(),(()=>{var r=t.x;t.x=()=>Promise.all([3748,6902,7180,3520,4833].map(t.e,t)).then(r)})();var o=t.x()})();