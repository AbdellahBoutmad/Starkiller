import{m as a,H as h,I as r,C as l,g as n,J as c,K as p,N as u,z as d}from"./index.f33523e7.js";import{M as f}from"./index.64fab82e.js";const m=a(l,r,h,f).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,o=!this.bottom&&!this.left&&!this.top&&!this.right,i=this.attach!==!1?t.offsetLeft:t.left;let s=0;return this.top||this.bottom||o?s=i+t.width/2-e.width/2:(this.left||this.right)&&(s=i+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),`${this.calcXOverflow(s,this.dimensions.content.width)}px`},calculatedTop(){const{activator:t,content:e}=this.dimensions,o=this.attach!==!1?t.offsetTop:t.top;let i=0;return this.top||this.bottom?i=o+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(i=o+t.height/2-e.height/2),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),this.attach===!1&&(i+=this.pageYOffset),`${this.calcYOverflow(i)}px`},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":this.attach===""||this.attach===!0||this.attach==="attach"}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:n(this.maxWidth),minWidth:n(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){c(this,"activator",!0)==="v-slot"&&p(`v-tooltip's activator slot must be bound, try '<template #activator="data"><v-btn v-on="data.on>'`,this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=u.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(t.focus=e=>{this.getActivator(e),this.runDelay("open")},t.blur=e=>{this.getActivator(e),this.runDelay("close")}),t.keydown=e=>{e.keyCode===d.esc&&(this.getActivator(e),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent(()=>[this.genTransition()]),this.genActivator()])}});export{m as _};
