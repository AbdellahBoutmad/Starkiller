import{m as E,T as C,b5 as M,C as O,W as B,c as R,b6 as v}from"./index.f33523e7.js";const et=E(O,M({onVisible:["init"]}),C).extend({name:"v-pagination",directives:{Resize:B},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:t=>t%1===0},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data(){return{maxButtons:0,selected:null}},computed:{classes(){return{"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled,...this.themeClasses}},items(){const t=parseInt(this.totalVisible,10);if(t===0||isNaN(this.length)||this.length>Number.MAX_SAFE_INTEGER)return[];const e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);const i=e%2===0?1:0,n=Math.floor(e/2),s=this.length-n+1+i;if(this.value>n&&this.value<s){const u=this.length,r=this.value-n+2,o=this.value+n-2-i,h=r-1===1+1?2:"...",p=o+1===u-1?o+1:"...";return[1,h,...this.range(r,o),p,this.length]}else if(this.value===n){const l=this.value+n-1-i;return[...this.range(1,l),"...",this.length]}else if(this.value===s){const l=this.value-n+1;return[1,"...",...this.range(l,this.length)]}else return[...this.range(1,n),"...",...this.range(s,this.length)]}},watch:{value(){this.init()}},beforeMount(){this.init()},methods:{init(){this.selected=null,this.onResize(),this.$nextTick(this.onResize),setTimeout(()=>this.selected=this.value,100)},onResize(){const t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range(t,e){const i=[];t=t>0?t:1;for(let n=t;n<=e;n++)i.push(n);return i},genIcon(t,e,i,n,s){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{disabled:i,type:"button","aria-label":s},on:i?{}:{click:n}},[t(R,[e])])])},genItem(t,e){const i=e===this.value&&(this.color||"primary"),n=e===this.value,s=n?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":n,"aria-label":this.$vuetify.lang.t(s,e)},on:{click:()=>this.$emit("input",e)}}),[e.toString()])},genItems(t){return this.items.map((e,i)=>t("li",{key:i},[isNaN(Number(e))?t("span",{class:"v-pagination__more"},[e.toString()]):this.genItem(t,e)]))},genList(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render(t){const e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}});var P="Expected a function",S=0/0,W="[object Symbol]",z=/^\s+|\s+$/g,V=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,F=/^0o[0-7]+$/i,D=parseInt,G=typeof v=="object"&&v&&v.Object===Object&&v,X=typeof self=="object"&&self&&self.Object===Object&&self,q=G||X||Function("return this")(),H=Object.prototype,U=H.toString,J=Math.max,K=Math.min,I=function(){return q.Date.now()};function Q(t,e,i){var n,s,l,u,r,o,h=0,p=!1,f=!1,b=!0;if(typeof t!="function")throw new TypeError(P);e=T(e)||0,x(i)&&(p=!!i.leading,f="maxWait"in i,l=f?J(T(i.maxWait)||0,e):l,b="trailing"in i?!!i.trailing:b);function d(a){var c=n,g=s;return n=s=void 0,h=a,u=t.apply(g,c),u}function j(a){return h=a,r=setTimeout(m,e),p?d(a):u}function A(a){var c=a-o,g=a-h,_=e-c;return f?K(_,l-g):_}function $(a){var c=a-o,g=a-h;return o===void 0||c>=e||c<0||f&&g>=l}function m(){var a=I();if($(a))return L(a);r=setTimeout(m,A(a))}function L(a){return r=void 0,b&&n?d(a):(n=s=void 0,u)}function N(){r!==void 0&&clearTimeout(r),h=0,n=o=s=r=void 0}function k(){return r===void 0?u:L(I())}function y(){var a=I(),c=$(a);if(n=arguments,s=this,o=a,c){if(r===void 0)return j(o);if(f)return r=setTimeout(m,e),d(o)}return r===void 0&&(r=setTimeout(m,e)),u}return y.cancel=N,y.flush=k,y}function x(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Y(t){return!!t&&typeof t=="object"}function Z(t){return typeof t=="symbol"||Y(t)&&U.call(t)==W}function T(t){if(typeof t=="number")return t;if(Z(t))return S;if(x(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=x(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(z,"");var i=w.test(t);return i||F.test(t)?D(t.slice(2),i?2:8):V.test(t)?S:+t}var it=Q;export{et as _,it as l};
