import{_ as l,a as u}from"./GeneralForm.da9d2d81.js";import{_ as m}from"./InfoViewer.804e1a3d.js";import{_ as c,a as d,b as _,c as h}from"./ErrorStateAlert.4b569c8d.js";import{_ as p}from"./EditPageTop.34e2f016.js";import{a6 as f,a7 as g,a8 as r,a9 as w,aa as b,n as y,b as $,c as L,j as v,k as a,V as o,l as k,ab as T}from"./index.3392e392.js";import{_ as E}from"./VSwitch.3d355dda.js";import{_ as N}from"./VSelect.e9728020.js";import"./VExpansionPanelHeader.6f0f98fd.js";import"./index.d0d7b01b.js";import"./TooltipButton.01c96598.js";import"./VTooltip.991ee143.js";import"./index.df31d39d.js";import"./VBreadcrumbs.7dc6e76b.js";const x={name:"ListenerEdit",components:{InfoViewer:m,GeneralForm:l,ErrorStateAlert:c,EditPageTop:p},data(){return{listener:{options:{}},listenerTemplate:{options:{}},selectedTemplate:"",form:{},reset:!0,loading:!1,formPriorities:["Name","Host","Port"],errorState:!1,validationMessage:null,initialLoad:!1,commonStagers:["multi_launcher","multi_macro","windows_csharp_exe","windows_dll","windows_shellcode"]}},computed:{...f({listenerTemplateIds:"listener/templateIds"}),isNew(){return this.$route.name==="listenerNew"},isCopy(){return this.$route.params.copy===!0},mode(){return this.isCopy?"Copy":this.isNew?"New":"View"},canEdit(){return this.isNew||!this.listener.enabled},id(){return this.isCopy?0:this.$route.params.id},copyLink(){return this.id>0?{name:"listenerNew",params:{copy:!0,id:this.id}}:{}},listenerInfo(){if(!this.listenerTemplate)return{};const t=this.listenerTemplate;return{authors:t.authors,description:t.description,comments:t.comments}},listenerOptions(){if(!this.isNew||this.isCopy){const e={};return Object.keys(this.listener.options).forEach(s=>{e[s]={...this.listenerTemplate.options[s]},e[s].value=this.listener.options[s]}),e}const{options:t}=this.listenerTemplate;return t||{}},breads(){return[{text:"Listeners",disabled:!1,to:"/listeners",exact:!0},{text:this.breadcrumbName,disabled:!0,to:"/listeners-edit"}]},breadcrumbName(){return this.isCopy?"New":this.listener.name?this.listener.name:this.id?this.id:"New"}},watch:{selectedTemplate:{async handler(t){const e=await g(t).catch(s=>this.$snack.error(`Error: ${s}`));e&&(this.reset=!1,this.listenerTemplate=e,await this.$nextTick(),this.reset=!0,this.initialLoad=!0)}},id(t){t&&this.getListener(t)}},mounted(){this.$store.dispatch("listener/getListenerTemplates"),(!this.isNew||this.isCopy)&&this.getListener(this.$route.params.id)},methods:{async submit(){this.loading||!this.$refs.generalform.$refs.form.validate()||(this.loading=!0,this.id>0?r({...this.listener,options:this.form}).then(()=>{this.$snack.success("Listener updated"),this.loading=!1}).catch(t=>{t.startsWith("[*]")?this.validationMessage=t:this.$snack.error(`Error: ${t}`),this.loading=!1}):w(this.selectedTemplate,this.form).then(({id:t})=>{this.$snack.success("Listener created"),this.loading=!1,this.$router.push({name:"listenerEdit",params:{id:t}})}).catch(t=>{t.startsWith("[*]")?this.validationMessage=t:this.$snack.error(`Error: ${t}`),this.loading=!1}))},async kill(){if(await this.$root.$confirm("Delete",`Are you sure you want to kill listener ${this.form.Name}?`,{color:"red"}))try{await this.$store.dispatch("listener/killListener",this.id),this.$router.push({name:"listeners"})}catch(t){this.$snack.error(`Error: ${t}`)}},getListener(t){b(t).then(e=>{this.listener=e,this.selectedTemplate=e.template}).catch(()=>{this.errorState=!0})},async toggleEnabled(t){if(this.listener.enabled=t,t===!0&&!await this.$root.$confirm("","Re-enabling the listener will also save any unsaved option changes.",{color:"yellow"})){this.listener.enabled=!t;return}try{const e=await r({...this.listener,options:this.form});this.listener=e}catch(e){this.listener.enabled=!t,this.$snack.error(`Error: ${e}`)}}}};var C=function(){var e=this,s=e._self._c;return s("div",[s(p,{attrs:{breads:e.breads,"show-submit":e.initialLoad,"disable-submit":!e.canEdit&&e.initialLoad,"show-copy":e.id>0&&e.initialLoad,"show-delete":e.id>0&&e.initialLoad,"submit-loading":e.loading,"copy-link":e.copyLink,"small-copy":!0,"small-delete":!0},on:{submit:e.submit,delete:e.kill}},[s("template",{slot:"extra-stuff"},[!e.isNew&&e.initialLoad?s(E,{staticClass:"mt-6 mr-2",attrs:{color:"green",label:"Enabled"},on:{change:e.toggleEnabled},model:{value:e.listener.enabled,callback:function(i){e.$set(e.listener,"enabled",i)},expression:"listener.enabled"}}):e._e(),!e.isNew&&e.initialLoad?s(N,{attrs:{"offset-y":"","open-on-hover":""},scopedSlots:e._u([{key:"activator",fn:function({on:i,attrs:n}){return[s($,e._g(e._b({staticClass:"mr-5",attrs:{text:"",icon:"",small:""}},"v-btn",n,!1),i),[s(L,[e._v("fa-suitcase-rolling")])],1)]}}],null,!1,265209208)},[s(v,{staticClass:"ml-2 mr-2"},[e._l(e.commonStagers,function(i,n){return s(a,{key:n,attrs:{link:"",to:{name:"stagerNew",query:{template:i,listener:e.listener.name}}}},[s(o,[e._v(" "+e._s(i)+" ")])],1)}),s(k),s(a,{attrs:{link:"",to:{name:"stagerNew"}}},[s(o,[e._v(" Other ")])],1)],2)],1):e._e()],1)],2),s("div",{staticClass:"headers"},[s("h3",[e._v(e._s(e.mode)+" Listener")])]),e.errorState?s(c,{attrs:{"resource-id":e.id,"resource-type":"listener"}}):s(T,{staticStyle:{padding:"10px"}},[s(m,{staticClass:"info-viewer",attrs:{info:e.listenerInfo}}),s(u,{attrs:{items:e.listenerTemplateIds,loading:!e.reset,dense:"",outlined:"",label:"Type",readonly:!e.canEdit},model:{value:e.selectedTemplate,callback:function(i){e.selectedTemplate=i},expression:"selectedTemplate"}}),e.validationMessage?s(d,{attrs:{prominent:"",type:"warning"}},[s(_,{attrs:{align:"center"}},[s(h,{staticClass:"grow",staticStyle:{"word-wrap":"word-break",width:"500px"}},[e._v(" "+e._s(e.validationMessage)+" ")])],1)],1):e._e(),e.reset?s(l,{ref:"generalform",attrs:{options:e.listenerOptions,priority:e.formPriorities,readonly:!e.canEdit},model:{value:e.form,callback:function(i){e.form=i},expression:"form"}}):e._e()],1)],1)},S=[],I=y(x,C,S,!1,null,null,null,null);const H=I.exports;export{H as default};
