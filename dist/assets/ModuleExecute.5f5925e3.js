import{_ as o}from"./AgentExecuteModule.3250c100.js";import{_ as n}from"./EditPageTop.34e2f016.js";import{i as m,n as u,ab as l}from"./index.3392e392.js";import{a as r}from"./GeneralForm.da9d2d81.js";import"./TechniqueChips.020e64ab.js";import"./VSelect.e9728020.js";import"./index.df31d39d.js";import"./InfoViewer.804e1a3d.js";import"./VExpansionPanelHeader.6f0f98fd.js";import"./ErrorStateAlert.4b569c8d.js";import"./index.d0d7b01b.js";import"./VDataTable.f2185226.js";import"./TooltipButton.01c96598.js";import"./VTooltip.991ee143.js";import"./VBreadcrumbs.7dc6e76b.js";import"./VSwitch.3d355dda.js";const i={name:"ModuleExecute",components:{AgentExecuteModule:o,EditPageTop:n},data(){return{selectedAgents:[],moduleName:""}},computed:{...m({agents:s=>s.agent.agents.filter(e=>e.archived===!1&&e.stale===!1)}),breads(){return[{text:"Modules",disabled:!1,to:"/modules",exact:!0},{text:`${this.moduleName}`,disabled:!0,to:"/modules/execute"}]}},mounted(){this.getAgents(),this.moduleName=this.$route.params.id},methods:{submit(){this.$refs.executeform.create()},moduleChange(s){this.moduleName=s,this.$router.push({name:"moduleExecute",params:{id:s}})},getAgents(){this.$store.dispatch("agent/getAgents")},clearAgents(){this.selectedAgents=[]}}};var d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"p4"},[t(n,{attrs:{breads:e.breads,"show-submit":!0},on:{submit:e.submit}}),t("h4",{staticClass:"pl-4 pb-4"},[e._v(" Execute Module ")]),t(r,{attrs:{dense:"",outlined:"",chips:"",multiple:"",placeholder:"Agents",items:e.agents,"item-text":"name","item-value":"name"},model:{value:e.selectedAgents,callback:function(a){e.selectedAgents=a},expression:"selectedAgents"}}),t(l,[t(o,{ref:"executeform",attrs:{"module-name":e.moduleName,agents:e.selectedAgents,"show-submit":!1},on:{moduleChange:e.moduleChange,submitted:e.clearAgents}})],1)],1)},c=[],p=u(i,d,c,!1,null,null,null,null);const z=p.exports;export{z as default};
