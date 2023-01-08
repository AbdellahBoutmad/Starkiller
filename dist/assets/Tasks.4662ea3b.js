import{_ as x}from"./TooltipButton.a73557f3.js";import{_ as v}from"./ListPageTop.7f8519d3.js";import{i as b,aR as r,o as g,aS as w,n as y,ab as h,a1 as T,ay as u,l as m,b as f,aT as k,c as o,j as P,k as l,V as d,a as A}from"./index.f33523e7.js";import{h as I}from"./moment.9709ab41.js";import{l as C,_ as S}from"./index.a91bf094.js";import{a as U,b as $}from"./download-api.57842e7d.js";import{_ as D,a as p,b as c,c as _}from"./VExpansionPanelHeader.573cfe54.js";import{_ as O}from"./VDataTable.9a5c4dfc.js";import{_ as B}from"./VTooltip.91352f29.js";import{_ as F}from"./VSelect.eca0a1c3.js";import"./VBreadcrumbs.fe72e785.js";import"./index.64fab82e.js";const G={name:"Tasks",components:{ListPageTop:v,TooltipButton:x},data(){return{breads:[{text:"Tasks",disabled:!0,href:"/tasks"}],search:"",selectedAgents:[],selectedUsers:[],tasks:[],currentPage:1,totalPages:1,totalItems:0,itemsPerPage:10,loading:!1,moment:I,sortBy:"updated_at",sortDesc:!0,refreshInterval:null,expandedTasks:{},headers:[{text:"Task ID",value:"id",sortable:!0},{text:"Status",value:"status",sortable:!0},{text:"Agent",value:"agent_id",sortable:!0},{text:"Task Input",value:"input",sortable:!1},{text:"Task Name",value:"task_name",sortable:!1},{text:"User",value:"username",sortable:!1},{text:"Updated At",value:"updated_at",sortable:!0},{text:"Actions",value:"actions",sortable:!1}]}},computed:{...b({agents:t=>t.agent.agents,users:t=>t.user.users}),selectedAllAgents:{set(t){t?this.selectedAgents=this.agents.map(e=>e.session_id):this.selectedAgents=[],this.debouncedGetTasks()},get(){return this.selectedAgents.length===this.agents.length}},selectedAllUsers:{set(t){t?this.selectedUsers=this.users.map(e=>e.id):this.selectedUsers=[],this.debouncedGetTasks()},get(){return this.selectedUsers.length===this.users.length}}},async mounted(){await Promise.all([this.$store.dispatch("agent/getAgents"),this.$store.dispatch("user/getUsers")]),this.selectedAgents=this.agents.map(t=>t.session_id),this.selectedUsers=this.users.map(t=>t.id),this.debouncedGetTasks=C(this.getTasks,500),this.debouncedGetTasks()},methods:{truncateMessage(t){return t?t.length>30?`${t.substr(0,30)}...`:t:""},isDownload(t){return t.downloads&&t.downloads.length>0},downloadFile(t){U(t.id)},hasOutput(t){return!!t.output},async downloadInput(t){if(t.input){if(!this.expandedTasks[t.id]){const e=await r(t.agent_id,t.id);this.expandedTasks[t.id]=e}this.downloadText(this.expandedTasks[t.id].full_input,`${t.agent_id}-${t.id}-input.txt`)}},downloadOutput(t){t.output&&this.downloadText(t.output,`${t.agent_id}-${t.id}-output.txt`)},async copyInput(t){if(t.input){if(!this.expandedTasks[t.id]){const e=await r(t.agent_id,t.id);this.expandedTasks[t.id]=e}navigator.clipboard.writeText(this.expandedTasks[t.id].full_input)}},copyOutput(t){t.output&&navigator.clipboard.writeText(t.output)},async toggleSeeFullInput(t){if(this.expandedTasks[t.id])t.expandedInput=!t.expandedInput;else{const e=await r(t.agent_id,t.id);this.expandedTasks[t.id]=e,t.expandedInput=!0}g.set(this.tasks,this.tasks.indexOf(t),t)},async getTasks(){if(this.selectedAgents.length===0){this.tasks=[],this.currentPage=1,this.totalPages=1,this.totalItems=0;return}this.loading=!0;let t=null;this.selectedAgents.length>0&&(t=this.selectedAgents);const e=await w(t,{page:this.currentPage,limit:this.itemsPerPage,sortBy:this.sortBy,sortOrder:this.sortDesc?"desc":"asc",users:this.selectedUsers,search:this.search});this.currentPage=e.page,this.totalPages=e.total_pages,this.totalItems=e.total,this.tasks=e.records.map(s=>(s.uniqueId=`${s.agent_id}-${s.id}`,this.expandedTasks[s.id]&&(s.expandedInput=!0),s)),this.tasks=e.records,this.loading=!1},imageData(t,e){var n;const s=(n=this.expandedTasks[t.id])==null?void 0:n.downloads;if(s){const a=s.find(i=>i.id===e.id);if(a)return a.image}return null},async getImagesForTask(t){var e;if(!this.expandedTasks[t.id]){const s=await r(t.agent_id,t.id);this.expandedTasks[t.id]=s}for(let s=0;s<t.downloads.length;s++){const n=t.downloads[s];if(!((e=this.expandedTasks[t.id].downloads[n.id])!=null&&e.image)&&n.filename.match(/[^/]+(jpg|jpeg|png|gif)$/)){const a=await $(n.id);this.expandedTasks[t.id].downloads[s].image=a}}g.set(this.tasks,this.tasks.indexOf(t),t)},handleSearch(){this.debouncedGetTasks()},handleFilterChange(){this.debouncedGetTasks()},handlePageChange(t){this.currentPage=t,this.debouncedGetTasks()},handleOptionsChange(t){this.currentPage=t.page,this.itemsPerPage=t.itemsPerPage,t.sortBy.length>0?(this.sortBy=t.sortBy[0],this.sortDesc=t.sortDesc[0]):(this.sortBy="id",this.sortDesc=!0),this.sortBy==="agent_id"&&(this.sortBy="agent"),this.debouncedGetTasks()}}};var j=function(){var e=this,s=e._self._c;return s("div",[s(v,{attrs:{breads:e.breads}}),s("div",{staticStyle:{display:"flex","flix-direction":"row"}},[s(h,{staticClass:"mr-2 pa-2",staticStyle:{width:"300px"}},[s(D,{staticClass:"mb-6",attrs:{multiple:""}},[s(p,[s(c,{attrs:{"expand-icon":"mdi-menu-down"}},[e._v(" Search ")]),s(_,[s(T,{attrs:{label:"Search",outlined:"",dense:"",required:""},on:{input:e.handleSearch},model:{value:e.search,callback:function(n){e.search=n},expression:"search"}})],1)],1),s(p,[s(c,{attrs:{"expand-icon":"mdi-menu-down"}},[e._v(" Agents ")]),s(_,[s(u,{attrs:{"x-small":"",dense:"",label:"Select All"},model:{value:e.selectedAllAgents,callback:function(n){e.selectedAllAgents=n},expression:"selectedAllAgents"}}),s(m,{staticClass:"pb-4"}),e._l(e.agents,function(n){return s(u,{key:n.session_id,attrs:{value:n.session_id,"x-small":"",dense:"",label:n.name},on:{change:e.handleFilterChange},model:{value:e.selectedAgents,callback:function(a){e.selectedAgents=a},expression:"selectedAgents"}})})],2)],1),s(p,[s(c,{attrs:{"expand-icon":"mdi-menu-down"}},[e._v(" Users ")]),s(_,[s(u,{attrs:{"x-small":"",dense:"",label:"Select All"},model:{value:e.selectedAllUsers,callback:function(n){e.selectedAllUsers=n},expression:"selectedAllUsers"}}),s(m,{staticClass:"pb-4"}),e._l(e.users,function(n){return s(u,{key:n.id,attrs:{value:n.id,"x-small":"",dense:"",label:n.username},on:{change:e.handleFilterChange},model:{value:e.selectedUsers,callback:function(a){e.selectedUsers=a},expression:"selectedUsers"}})})],2)],1)],1)],1),s(h,{staticStyle:{"flex-grow":"1"}},[s(S,{attrs:{length:e.totalPages,"total-visible":10},on:{input:e.handlePageChange},model:{value:e.currentPage,callback:function(n){e.currentPage=n},expression:"currentPage"}}),s(O,{attrs:{headers:e.headers,items:e.tasks,"item-key":"uniqueId","sort-by":e.sortBy,"sort-desc":e.sortDesc,"server-items-length":e.totalItems,"footer-props":{"items-per-page-options":[10,25,50,100]},"items-per-page":e.itemsPerPage,loading:e.loading,page:e.currentPage,"show-expand":""},on:{"update:itemsPerPage":function(n){e.itemsPerPage=n},"update:items-per-page":function(n){e.itemsPerPage=n},"update:options":e.handleOptionsChange},scopedSlots:e._u([{key:"expanded-item",fn:function({headers:n,item:a}){return[s("td",{attrs:{colspan:n.length}},[s("div",[s("div",{staticClass:"pt-2"},[s(x,{attrs:{icon:a.expandedInput?"fa-minus":"fa-plus",text:"See Full Input","x-small":""},on:{click:function(i){return e.toggleSeeFullInput(a)}}})],1),s("p",[s("b",[e._v("Task Input:")])]),s("p",{staticClass:"mono",staticStyle:{"max-width":"900px"}},[e._v(" "+e._s(a.expandedInput?e.expandedTasks[a.id].full_input:a.input)+" ")]),s("p",[s("b",[e._v("Task Output:")])]),a.downloads.length>0&&a.downloads.some(i=>i.filename.match(/[^/]+(jpg|jpeg|png|gif)$/))?s("div",[s(f,{attrs:{text:"","x-small":""},on:{click:function(i){return e.getImagesForTask(a)}}},[e._v(" View Images ")]),s("div",e._l(a.downloads,function(i){return s(k,{key:i.id,attrs:{src:e.imageData(a,i),alt:i.filename,"max-width":700,contain:""}})}),1)],1):e._e(),s("p",{staticClass:"mono",staticStyle:{"max-width":"900px"}},[e._v(" "+e._s(a.output)+" ")])])])]}},{key:"item.status",fn:function({item:n}){return[n.status==="pulled"?s(o,{attrs:{color:"green",small:""}},[e._v(" fa-check-square ")]):n.status==="queued"?s(o,{attrs:{color:"orange",small:""}},[e._v(" fa-clock ")]):e._e()]}},{key:"item.input",fn:function({item:n}){return[s("span",[e._v(e._s(e.truncateMessage(n.input)))])]}},{key:"item.updated_at",fn:function({item:n}){return[s(B,{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function({on:a}){return[s("span",e._g({},a),[e._v(e._s(e.moment(n.updated_at).fromNow()))])]}}],null,!0)},[s("span",[e._v(e._s(e.moment(n.updated_at).format("MMM D YYYY, h:mm:ss a")))])])]}},{key:"item.actions",fn:function({item:n}){return[s(F,{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:i}){return[s(f,e._g(e._b({attrs:{text:"",icon:"","x-small":""}},"v-btn",i,!1),a),[s(o,[e._v("fa-ellipsis-v")])],1)]}}],null,!0)},[s(P,{staticClass:"ml-2 mr-2"},[s(l,{key:"downloadInput",attrs:{link:""},on:{click:function(a){return e.downloadInput(n)}}},[s(d,[s(o,[e._v("fa-download")]),e._v(" Download Input ")],1)],1),e.hasOutput(n)?s(l,{key:"downloadOutput",attrs:{link:""},on:{click:function(a){return e.downloadOutput(n)}}},[s(d,[s(o,[e._v("fa-download")]),e._v(" Download Output ")],1)],1):e._e(),s(l,{key:"clipboardInput",attrs:{link:""},on:{click:function(a){return e.copyInput(n)}}},[s(d,[s(o,[e._v("fa-paperclip")]),e._v(" Copy Input to Clipboard ")],1)],1),e.hasOutput(n)?s(l,{key:"clipboardOutput",attrs:{link:""},on:{click:function(a){return e.copyOutput(n)}}},[s(d,[s(o,[e._v("fa-paperclip")]),e._v(" Copy Output to Clipboard ")],1)],1):e._e(),s(A),e._l(n.downloads,function(a){return s(l,{key:"download-"+a.id,attrs:{link:""},on:{click:function(i){return e.downloadFile(a)}}},[s(d,[s(o,[e._v("fa-download")]),e._v(" Download "+e._s(a.filename)+" ")],1)],1)})],2)],1)]}}])})],1)],1)],1)},q=[],M=y(G,j,q,!1,null,null,null,null);const X=M.exports;export{X as default};
