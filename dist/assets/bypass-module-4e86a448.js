import{B as t}from"./index-e409ba63.js";import{a as p,d as y}from"./bypass-api-6126dc83.js";const o=t("bypass",{state:()=>({bypasses:[]}),actions:{async getBypasses(){const s=await p();this.bypasses=s},async deleteBypass(s){await y(s);const e=this.bypasses.findIndex(a=>a.id===s);e>-1&&this.bypasses.splice(e,1)}},getters:{bypassNames:s=>s.bypasses.map(e=>e.name)}});export{o as u};