"use strict";(self.webpackChunkdraw=self.webpackChunkdraw||[]).push([[6525,7600],{27514:(e,t,r)=>{function n(e,[t,r],n,i){let s=n.findIndex(e=>1===e.length);if(!i(e,n,s))return!1;let u=[...n],l=u[s][0];u[s]=[l,e];let o=s+1;return o===u.length||a([t.filter(t=>t!==e),r],u,i)}function a([e,t],r,a){let i=r.findIndex(e=>!e.length),[s,...u]=t,l=[...r];return l[i]=[s],e.some(t=>n(t,[e,u],l,a))}r.d(t,{Z:()=>i});let i=([e,t],r,a)=>e.map((e,t)=>t).filter(i=>n(e[i],[e,t],r,a))},35955:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(80411);let a=e=>{let t=(0,n.Z)(e),r=(e,r)=>e.country!==r.country&&e.group!==r.group&&!t(e)(r),a=(e,t)=>0===e.length||1===e.length&&r(t,e[0]);return(e,t,r)=>a(t[r],e)}},80411:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(7979),a=r(46338);let i=(e,t)=>r=>r>=e&&r<=t,s=[{countries:["Russia","Ukraine"],predicate:i(2014,Number.MAX_SAFE_INTEGER)},{countries:["Azerbaijan","Armenia"]},{countries:["Serbia","Kosovo"]},{countries:["Bosnia & Herzegovina","Kosovo"]},{countries:["Spain","Gibraltar"]}],u={predicate:a.Z},l=s.map(e=>({...u,...e}));function o(e){let t=new Map;for(let[r,n]of e)t.has(r)||t.set(r,new Set),t.get(r).add(n);return t}let d=e=>{let t=l.filter(t=>t.predicate(e)),r=t.map(e=>e.countries),n=r.map(e=>e.slice().reverse()),a=o([...r,...n]);return a.get.bind(a)},c=e=>{let t=d(e);return e=>{let r=t(e.country);return void 0===r?n.Z:e=>r.has(e.country)}}},87600:(e,t,r)=>{r.r(t);var n=r(30845),a=r(27514),i=r(35955);let s=([e])=>JSON.stringify({year:e}),u=(e,t)=>s(e)===s(t),l=(0,n.Z)(i.Z,u);addEventListener("message",e=>{let{messageId:t,data:{season:r,pots:n,matchups:i}}=e.data,s=l(r),u=(0,a.Z)(n,i,s);postMessage({messageId:t,data:{possiblePairings:u}})})}}]);