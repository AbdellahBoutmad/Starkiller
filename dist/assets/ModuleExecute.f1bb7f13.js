import{_ as o}from"./AgentExecuteModule.5ea80e30.js";import{_ as n}from"./EditPageTop.2f1804e5.js";import{i as a,n as r,p as u}from"./index.f0e6e38b.js";import{a as l}from"./GeneralForm.91d2b4f6.js";import"./TechniqueChips.83db34d9.js";import"./VSelect.3d0e9241.js";import"./index.c35c0de2.js";import"./InfoViewer.66d76dbe.js";import"./VExpansionPanelHeader.68b29095.js";import"./VItemGroup.258ecc12.js";import"./ErrorStateAlert.2a6d8c2b.js";import"./index.0050f014.js";import"./VDataTable.c59b74f8.js";import"./TooltipButton.58ec3842.js";import"./VTooltip.21cae413.js";import"./VBreadcrumbs.2e2663d0.js";import"./download-api.f7703f16.js";import"./VSwitch.f8266b20.js";const i={name:"ModuleExecute",components:{AgentExecuteModule:o,EditPageTop:n},data(){return{selectedAgents:[],moduleName:""}},computed:{...a({agents:s=>s.agent.agents.filter(e=>e.archived===!1&&e.stale===!1)}),breads(){return[{text:"Modules",disabled:!1,to:"/modules",exact:!0},{text:`${this.moduleName}`,disabled:!0,to:"/modules/execute"}]}},mounted(){this.getAgents(),this.moduleName=this.$route.params.id},methods:{submit(){this.$refs.executeform.create()},moduleChange(s){this.moduleName=s,this.$router.push({name:"moduleExecute",params:{id:s}})},getAgents(){this.$store.dispatch("agent/getAgents")},clearAgents(){this.selectedAgents=[]}}};var d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"p4"},[t(n,{attrs:{breads:e.breads,"show-submit":!0},on:{submit:e.submit}}),t("h4",{staticClass:"pl-4 pb-4"},[e._v(" Execute Module ")]),t(l,{attrs:{dense:"",outlined:"",chips:"",multiple:"",placeholder:"Agents",items:e.agents,"item-text":"name","item-value":"name"},model:{value:e.selectedAgents,callback:function(m){e.selectedAgents=m},expression:"selectedAgents"}}),t(u,[t(o,{ref:"executeform",attrs:{"module-name":e.moduleName,agents:e.selectedAgents,"show-submit":!1},on:{moduleChange:e.moduleChange,submitted:e.clearAgents}})],1)],1)},p=[],c=r(i,d,p,!1,null,null,null,null);const P=c.exports;export{P as default};