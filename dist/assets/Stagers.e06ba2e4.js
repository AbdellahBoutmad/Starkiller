import{_ as l}from"./ListPageTop.c38f02eb.js";import{i as d,n as _,b as u,c as a,k as p,l as o,V as i,o as m}from"./index.f0e6e38b.js";import{D as f}from"./download-stager.85a6b476.js";import{C as g}from"./copy-stager.b5a59d8f.js";import{h as y}from"./moment.9709ab41.js";import{a as h,b as v}from"./download-api.f7703f16.js";import{_ as S}from"./VSwitch.f8266b20.js";import{_ as w}from"./VDataTable.c59b74f8.js";import{_ as k}from"./VTooltip.21cae413.js";import{_ as x}from"./VSelect.3d0e9241.js";import"./VBreadcrumbs.2e2663d0.js";import"./index.c35c0de2.js";const b={name:"Stagers",components:{ListPageTop:l},mixins:[f,g],data(){return{moment:y,breads:[{text:"Stagers",disabled:!0,href:"/stagers"}],headers:[{text:"Name",value:"name"},{text:"Listener",value:"options.Listener"},{text:"Type",value:"template"},{text:"Language",value:"options.Language"},{text:"Created At",value:"created_at"},{text:"Actions",value:"actions",sortable:!1}],selected:[]}},computed:{...d({stagers:s=>s.stager.stagers,filterOnlyMyStagersCheckbox:s=>s.application.filterOnlyMyStagers}),filteredStagers(){return this.stagers.filter(s=>this.filterOnlyMyStagers?s.user_id===this.user.id:!0)},showDelete(){return this.selected.length>0},filterOnlyMyStagersCheckbox:{set(s){this.$store.dispatch("application/filterOnlyMyStagers",s)},get(){return this.filterOnlyMyStagers}}},mounted(){this.$store.dispatch("stager/getStagers")},methods:{create(){this.$router.push({name:"stagerNew"})},isDownload(s){return s.downloads&&s.downloads.length>0},isOneLiner(s){return s.one_liner},async copy(s){const e=s.downloads.length-1;return this.copyStager(await h(s.downloads[e].id))},async download(s){const e=s.downloads.length-1;return v(s.downloads[e].id)},async deleteStager(s){await this.$root.$confirm("Delete","Are you sure you want to delete this stager?",{color:"red"})&&this.$store.dispatch("stager/deleteStager",s.id)},async deleteStagers(){await this.$root.$confirm("Delete",`Are you sure you want to delete ${this.selected.length} stagers?`,{color:"red"})&&(this.selected.forEach(s=>{this.$store.dispatch("stager/deleteStager",s.id)}),this.selected=[])}}};var C=function(){var e=this,t=e._self._c;return t("div",[t(l,{attrs:{breads:e.breads,"show-create":!0,"show-refresh":!1,"show-delete":e.showDelete},on:{create:e.create,delete:e.deleteStagers}}),t("div",{staticClass:"ml-3 mr-3 align-center",staticStyle:{display:"flex"}},[t(S,{attrs:{label:"Only My Stagers"},model:{value:e.filterOnlyMyStagersCheckbox,callback:function(n){e.filterOnlyMyStagersCheckbox=n},expression:"filterOnlyMyStagersCheckbox"}})],1),t(w,{attrs:{headers:e.headers,items:e.filteredStagers,"footer-props":{itemsPerPageOptions:[5,10,15,20,50,100]},"items-per-page":15,"item-key":"id",dense:"","show-select":""},scopedSlots:e._u([{key:"item.name",fn:function({item:n}){return[t("router-link",{staticStyle:{color:"inherit"},attrs:{to:{name:"stagerEdit",params:{id:n.id}}}},[e._v(" "+e._s(n.name)+" ")])]}},{key:"item.options.Listener",fn:function({item:n}){return[t("router-link",{staticStyle:{color:"inherit"},attrs:{to:{name:"listenerEdit",params:{id:n.id}}}},[e._v(" "+e._s(n.options.Listener)+" ")])]}},{key:"item.created_at",fn:function({item:n}){return[t(k,{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function({on:r}){return[t("span",e._g({},r),[e._v(e._s(e.moment(n.created_at).fromNow()))])]}}],null,!0)},[t("span",[e._v(e._s(e.moment(n.created_at).format("MMM D YYYY, h:mm:ss a")))])])]}},{key:"item.actions",fn:function({item:n}){return[t(x,{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:r,attrs:c}){return[t(u,e._g(e._b({attrs:{text:"",icon:"","x-small":""}},"v-btn",c,!1),r),[t(a,[e._v("fa-ellipsis-v")])],1)]}}],null,!0)},[t(p,{staticClass:"ml-2 mr-2"},[e.isDownload(n)?t(o,{key:"download",attrs:{link:""},on:{click:function(r){return e.download(n)}}},[t(i,[t(a,[e._v("fa-download")]),e._v(" Download ")],1)],1):e._e(),e.isOneLiner(n)?t(o,{key:"clipboard",attrs:{link:""},on:{click:function(r){return e.copy(n)}}},[t(i,[t(a,[e._v("fa-paperclip")]),e._v(" Copy to Clipboard ")],1)],1):e._e(),t(o,{key:"copy",attrs:{to:{name:"stagerNew",params:{copy:!0,id:n.id}},link:""}},[t(i,[t(a,[e._v("fa-clone")]),e._v(" Copy ")],1)],1),t(m,{staticClass:"pb-4"}),t(o,{key:"delete",attrs:{link:""},on:{click:function(r){return e.deleteStager(n)}}},[t(i,[t(a,[e._v("fa-trash-alt")]),e._v(" Delete ")],1)],1)],1)],1)]}}]),model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}})],1)},M=[],D=_(b,C,M,!1,null,null,null,null);const F=D.exports;export{F as default};