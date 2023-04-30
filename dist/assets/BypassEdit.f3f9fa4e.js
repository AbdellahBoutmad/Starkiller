import{_ as i}from"./ErrorStateAlert.4b569c8d.js";import{_ as o}from"./EditPageTop.34e2f016.js";import{n,bg as u,bh as l,bi as d,o as m,ab as p,ad as c,a1 as r}from"./index.3392e392.js";import{_ as h}from"./VTextarea.65fcf04a.js";import"./index.d0d7b01b.js";import"./TooltipButton.01c96598.js";import"./VTooltip.991ee143.js";import"./index.df31d39d.js";import"./VBreadcrumbs.7dc6e76b.js";const f={name:"BypassEdit",components:{ErrorStateAlert:i,EditPageTop:o},data(){return{form:{},rules:{name:[s=>!!s||"Name is required",s=>!!s&&s.length>2||"Name must be larger than 2 characters"],language:[s=>!!s||"Language is required",s=>!!s&&s.length>2||"Language must be larger than 2 characters"],code:[s=>!!s||"Code is required"]},bypass:{},valid:!0,loading:!1,errorState:!1}},computed:{isNew(){return this.$route.name==="bypassNew"},isCopy(){return this.$route.params.copy===!0},mode(){return this.isCopy?"Copy":this.isNew?"New":"View"},canEdit(){return!0},id(){return this.isCopy?0:this.$route.params.id},copyLink(){return this.id>0?{name:"bypassNew",params:{copy:!0,id:this.id}}:{}},breads(){return[{text:"Bypasses",disabled:!1,to:"/bypasses",exact:!0},{text:this.breadcrumbName,disabled:!0,to:"/bypasses-edit"}]},breadcrumbName(){return this.isCopy?"New":this.form.name?this.form.name:this.id?this.id:"New"}},watch:{id(s){s&&this.getBypass(s)}},mounted(){!this.isNew||this.isCopy?this.getBypass(this.$route.params.id):this.initialLoad=!0},methods:{async submit(){this.loading||!this.$refs.form.validate()||(this.loading=!0,this.id>0?u(this.form.id,this.form.name,this.form.code,this.form.language).then(()=>{this.$snack.success("Bypass updated"),this.loading=!1}).catch(s=>{this.$snack.error(`Error: ${s}`),this.loading=!1}):l(this.form.name,this.form.code,this.form.language).then(({id:s})=>{this.$snack.success("Bypass created"),this.loading=!1,this.$router.push({name:"bypassEdit",params:{id:s}})}).catch(s=>{this.$snack.error(`Error: ${s}`),this.loading=!1}))},async deleteBypass(){if(await this.$root.$confirm("Delete",`Are you sure you want to delete bypass ${this.form.name}?`,{color:"red"}))try{await this.$store.dispatch("bypass/deleteBypass",this.form.id),this.$router.push({name:"bypasses"})}catch(s){this.$snack.error(`Error: ${s}`)}},getBypass(s){d(s).then(e=>{this.bypass={...e},this.initialLoad=!0,m.set(this,"form",{...e})}).catch(()=>{this.errorState=!0})}}};var y=function(){var e=this,t=e._self._c;return t("div",[t(o,{attrs:{breads:e.breads,"show-submit":e.initialLoad,"disable-submit":!e.canEdit&&e.initialLoad,"show-copy":e.id>0&&e.initialLoad,"show-delete":e.id>0&&e.initialLoad,"submit-loading":e.loading&&e.initialLoad,"copy-link":e.copyLink,"small-copy":!0,"small-delete":!0},on:{submit:e.submit,delete:e.deleteBypass}}),t("div",{staticClass:"headers"},[t("h3",[e._v(e._s(e.mode)+" Bypass")])]),e.errorState?t(i,{attrs:{"resource-id":e.id,"resource-type":"bypass"}}):t(p,{staticStyle:{padding:"10px"}},[t(c,{ref:"form",nativeOn:{submit:function(a){return a.preventDefault(),e.submit.apply(null,arguments)}},model:{value:e.valid,callback:function(a){e.valid=a},expression:"valid"}},[t(r,{attrs:{rules:e.rules.name,label:"name",outlined:"",dense:"",required:"",disabled:!e.isNew},model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}}),t(r,{attrs:{rules:e.rules.language,label:"language",outlined:"",dense:"",required:""},model:{value:e.form.language,callback:function(a){e.$set(e.form,"language",a)},expression:"form.language"}}),t(h,{attrs:{rules:e.rules.code,label:"code",outlined:"",dense:"",required:"","auto-grow":""},model:{value:e.form.code,callback:function(a){e.$set(e.form,"code",a)},expression:"form.code"}})],1)],1)],1)},_=[],g=n(f,y,_,!1,null,null,null,null);const L=g.exports;export{L as default};
