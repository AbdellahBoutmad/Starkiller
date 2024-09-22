import{J as w,b8 as A,b9 as F,ba as j,U as W,P as G,R as o,bb as U,bc as Y,a0 as $,bd as f,aH as q,be as N,bf as y,bg as S,bh as K,bi as X,bj as x,bk as J,bl as Q,I as V,bm as Z,bn as tt,bo as B,a as _,b as p,T as P,bp as D,bq as et,Q as it,aP as st,n as H,k as at,c as nt,a7 as rt,aa as lt,j as L,ab as ot,a2 as ht}from"./index-e409ba63.js";import{a as ct}from"./VSelect-22e7980f.js";const ut=w(F,A).extend({name:"v-slider",directives:{ClickOutside:j},mixins:[A],props:{disabled:Boolean,inverseLabel:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:1},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:t=>typeof t=="boolean"||t==="always"},thumbSize:{type:[Number,String],default:32},tickLabels:{type:Array,default:()=>[]},ticks:{type:[Boolean,String],default:!1,validator:t=>typeof t=="boolean"||t==="always"},tickSize:{type:[Number,String],default:2},trackColor:String,trackFillColor:String,value:[Number,String],vertical:Boolean},data:()=>({app:null,oldValue:null,thumbPressed:!1,mouseTimeout:-1,isFocused:!1,isActive:!1,noClick:!1,startOffset:0}),computed:{classes(){return{...F.options.computed.classes.call(this),"v-input__slider":!0,"v-input__slider--vertical":this.vertical,"v-input__slider--inverse-label":this.inverseLabel}},internalValue:{get(){return this.lazyValue},set(t){t=isNaN(t)?this.minValue:t;const e=this.roundValue(Math.min(Math.max(t,this.minValue),this.maxValue));e!==this.lazyValue&&(this.lazyValue=e,this.$emit("input",e))}},trackTransition(){return this.thumbPressed?this.showTicks||this.stepNumeric?"0.1s cubic-bezier(0.25, 0.8, 0.5, 1)":"none":""},minValue(){return parseFloat(this.min)},maxValue(){return parseFloat(this.max)},stepNumeric(){return this.step>0?parseFloat(this.step):0},inputWidth(){const t=(this.roundValue(this.internalValue)-this.minValue)/(this.maxValue-this.minValue)*100;return isNaN(t)?0:t},trackFillStyles(){const t=this.vertical?"bottom":"left",e=this.vertical?"top":"right",i=this.vertical?"height":"width",s=this.$vuetify.rtl?"auto":"0",n=this.$vuetify.rtl?"0":"auto",a=this.isDisabled?`calc(${this.inputWidth}% - 10px)`:`${this.inputWidth}%`;return{transition:this.trackTransition,[t]:s,[e]:n,[i]:a}},trackStyles(){const t=this.vertical?this.$vuetify.rtl?"bottom":"top":this.$vuetify.rtl?"left":"right",e=this.vertical?"height":"width",i="0px",s=this.isDisabled?`calc(${100-this.inputWidth}% - 10px)`:`calc(${100-this.inputWidth}%)`;return{transition:this.trackTransition,[t]:i,[e]:s}},showTicks(){return this.tickLabels.length>0||!!(!this.isDisabled&&this.stepNumeric&&this.ticks)},numTicks(){return Math.ceil((this.maxValue-this.minValue)/this.stepNumeric)},showThumbLabel(){return!this.isDisabled&&!!(this.thumbLabel||this.$scopedSlots["thumb-label"])},computedTrackColor(){if(!this.isDisabled)return this.trackColor?this.trackColor:this.isDark?this.validationState:this.validationState||"primary lighten-3"},computedTrackFillColor(){if(!this.isDisabled)return this.trackFillColor?this.trackFillColor:this.validationState||this.computedColor},computedThumbColor(){return this.thumbColor?this.thumbColor:this.validationState||this.computedColor}},watch:{min(t){const e=parseFloat(t);e>this.internalValue&&this.$emit("input",e)},max(t){const e=parseFloat(t);e<this.internalValue&&this.$emit("input",e)},value:{handler(t){this.internalValue=t},immediate:!0}},mounted(){this.app=document.querySelector("[data-app]")||W("Missing v-app or a non-body wrapping element with the [data-app] attribute",this)},methods:{genDefaultSlot(){const t=[this.genLabel()],e=this.genSlider();return this.inverseLabel?t.unshift(e):t.push(e),t.push(this.genProgress()),t},genSlider(){return this.$createElement("div",{class:{"v-slider":!0,"v-slider--horizontal":!this.vertical,"v-slider--vertical":this.vertical,"v-slider--focused":this.isFocused,"v-slider--active":this.isActive,"v-slider--disabled":this.isDisabled,"v-slider--readonly":this.isReadonly,...this.themeClasses},directives:[{name:"click-outside",value:this.onBlur}],on:{click:this.onSliderClick,mousedown:this.onSliderMouseDown,touchstart:this.onSliderMouseDown}},this.genChildren())},genChildren(){return[this.genInput(),this.genTrackContainer(),this.genSteps(),this.genThumbContainer(this.internalValue,this.inputWidth,this.isActive,this.isFocused,this.onFocus,this.onBlur)]},genInput(){return this.$createElement("input",{attrs:{value:this.internalValue,id:this.computedId,disabled:!0,readonly:!0,tabindex:-1,...this.$attrs}})},genTrackContainer(){const t=[this.$createElement("div",this.setBackgroundColor(this.computedTrackColor,{staticClass:"v-slider__track-background",style:this.trackStyles})),this.$createElement("div",this.setBackgroundColor(this.computedTrackFillColor,{staticClass:"v-slider__track-fill",style:this.trackFillStyles}))];return this.$createElement("div",{staticClass:"v-slider__track-container",ref:"track"},t)},genSteps(){if(!this.step||!this.showTicks)return null;const t=parseFloat(this.tickSize),e=G(this.numTicks+1),i=this.vertical?"bottom":this.$vuetify.rtl?"right":"left",s=this.vertical?this.$vuetify.rtl?"left":"right":"top";this.vertical&&e.reverse();const n=e.map(a=>{const l=[];this.tickLabels[a]&&l.push(this.$createElement("div",{staticClass:"v-slider__tick-label"},this.tickLabels[a]));const r=a*(100/this.numTicks),c=this.$vuetify.rtl?100-this.inputWidth<r:r<this.inputWidth;return this.$createElement("span",{key:a,staticClass:"v-slider__tick",class:{"v-slider__tick--filled":c},style:{width:`${t}px`,height:`${t}px`,[i]:`calc(${r}% - ${t/2}px)`,[s]:`calc(50% - ${t/2}px)`}},l)});return this.$createElement("div",{staticClass:"v-slider__ticks-container",class:{"v-slider__ticks-container--always-show":this.ticks==="always"||this.tickLabels.length>0}},n)},genThumbContainer(t,e,i,s,n,a,l="thumb"){const r=[this.genThumb()],c=this.genThumbLabelContent(t);return this.showThumbLabel&&r.push(this.genThumbLabel(c)),this.$createElement("div",this.setTextColor(this.computedThumbColor,{ref:l,key:l,staticClass:"v-slider__thumb-container",class:{"v-slider__thumb-container--active":i,"v-slider__thumb-container--focused":s,"v-slider__thumb-container--show-label":this.showThumbLabel},style:this.getThumbContainerStyles(e),attrs:{role:"slider",tabindex:this.isDisabled?-1:this.$attrs.tabindex?this.$attrs.tabindex:0,"aria-label":this.$attrs["aria-label"]||this.label,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.internalValue,"aria-readonly":String(this.isReadonly),"aria-orientation":this.vertical?"vertical":"horizontal"},on:{focus:n,blur:a,keydown:this.onKeyDown}}),r)},genThumbLabelContent(t){return this.$scopedSlots["thumb-label"]?this.$scopedSlots["thumb-label"]({value:t}):[this.$createElement("span",[String(t)])]},genThumbLabel(t){const e=o(this.thumbSize),i=this.vertical?`translateY(20%) translateY(${Number(this.thumbSize)/3-1}px) translateX(55%) rotate(135deg)`:"translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)";return this.$createElement(U,{props:{origin:"bottom center"}},[this.$createElement("div",{staticClass:"v-slider__thumb-label-container",directives:[{name:"show",value:this.isFocused||this.isActive||this.thumbLabel==="always"}]},[this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb-label",style:{height:e,width:e,transform:i}}),[this.$createElement("div",t)])])])},genThumb(){return this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb"}))},getThumbContainerStyles(t){const e=this.vertical?"top":"left";let i=this.$vuetify.rtl?100-t:t;return i=this.vertical?100-i:i,{transition:this.trackTransition,[e]:`${i}%`}},onSliderMouseDown(t){var e;if(t.preventDefault(),this.oldValue=this.internalValue,this.isActive=!0,!((e=t.target)===null||e===void 0)&&e.matches(".v-slider__thumb-container, .v-slider__thumb-container *")){this.thumbPressed=!0;const a=t.target.getBoundingClientRect(),l="touches"in t?t.touches[0]:t;this.startOffset=this.vertical?l.clientY-(a.top+a.height/2):l.clientX-(a.left+a.width/2)}else this.startOffset=0,window.clearTimeout(this.mouseTimeout),this.mouseTimeout=window.setTimeout(()=>{this.thumbPressed=!0},300);const i=f?{passive:!0,capture:!0}:!0,s=f?{passive:!0}:!1,n="touches"in t;this.onMouseMove(t),this.app.addEventListener(n?"touchmove":"mousemove",this.onMouseMove,s),Y(this.app,n?"touchend":"mouseup",this.onSliderMouseUp,i),this.$emit("start",this.internalValue)},onSliderMouseUp(t){t.stopPropagation(),window.clearTimeout(this.mouseTimeout),this.thumbPressed=!1;const e=f?{passive:!0}:!1;this.app.removeEventListener("touchmove",this.onMouseMove,e),this.app.removeEventListener("mousemove",this.onMouseMove,e),this.$emit("mouseup",t),this.$emit("end",this.internalValue),$(this.oldValue,this.internalValue)||(this.$emit("change",this.internalValue),this.noClick=!0),this.isActive=!1},onMouseMove(t){t.type==="mousemove"&&(this.thumbPressed=!0),this.internalValue=this.parseMouseMove(t)},onKeyDown(t){if(!this.isInteractive)return;const e=this.parseKeyDown(t,this.internalValue);e==null||e<this.minValue||e>this.maxValue||(this.internalValue=e,this.$emit("change",e))},onSliderClick(t){if(this.noClick){this.noClick=!1;return}this.$refs.thumb.focus(),this.onMouseMove(t),this.$emit("change",this.internalValue)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},parseMouseMove(t){const e=this.vertical?"top":"left",i=this.vertical?"height":"width",s=this.vertical?"clientY":"clientX",{[e]:n,[i]:a}=this.$refs.track.getBoundingClientRect(),l="touches"in t?t.touches[0][s]:t[s];let r=Math.min(Math.max((l-n-this.startOffset)/a,0),1)||0;return this.vertical&&(r=1-r),this.$vuetify.rtl&&(r=1-r),parseFloat(this.min)+r*(this.maxValue-this.minValue)},parseKeyDown(t,e){if(!this.isInteractive)return;const{pageup:i,pagedown:s,end:n,home:a,left:l,right:r,down:c,up:d}=q;if(![i,s,n,a,l,r,c,d].includes(t.keyCode))return;t.preventDefault();const v=this.stepNumeric||1,M=(this.maxValue-this.minValue)/v;if([l,r,c,d].includes(t.keyCode)){const I=(this.$vuetify.rtl?[l,d]:[r,d]).includes(t.keyCode)?1:-1,z=t.shiftKey?3:t.ctrlKey?2:1;e=e+I*v*z}else if(t.keyCode===a)e=this.minValue;else if(t.keyCode===n)e=this.maxValue;else{const E=t.keyCode===s?1:-1;e=e-E*v*(M>100?M/10:10)}return e},roundValue(t){if(!this.stepNumeric)return t;const e=this.step.toString().trim(),i=e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0,s=this.minValue%this.stepNumeric,n=Math.round((t-s)/this.stepNumeric)*this.stepNumeric+s;return parseFloat(Math.min(n,this.maxValue).toFixed(i))}}});function m(t){t={...t};const e=N(t),i=y(t),s=S(t);return{alpha:t.a,hex:e.substr(0,7),hexa:e,hsla:i,hsva:t,hue:t.h,rgba:s}}function O(t){const e=J(t),i=N(e),s=S(e);return{alpha:e.a,hex:i.substr(0,7),hexa:i,hsla:t,hsva:e,hue:e.h,rgba:s}}function u(t){const e=K(t),i=X(t),s=y(e);return{alpha:e.a,hex:i.substr(0,7),hexa:i,hsla:s,hsva:e,hue:e.h,rgba:t}}function g(t){const e=Q(t),i=y(e),s=S(e);return{alpha:e.a,hex:t.substr(0,7),hexa:t,hsla:i,hsva:e,hue:e.h,rgba:s}}function T(t){return g(x(t))}function h(t,e){return e.every(i=>t.hasOwnProperty(i))}function R(t,e){if(!t)return u({r:255,g:0,b:0,a:1});if(typeof t=="string"){if(t==="transparent")return g("#00000000");const i=x(t);return e&&i===e.hexa?e:g(i)}if(typeof t=="object"){if(t.hasOwnProperty("alpha"))return t;const i=t.hasOwnProperty("a")?parseFloat(t.a):1;if(h(t,["r","g","b"]))return e&&t===e.rgba?e:u({...t,a:i});if(h(t,["h","s","l"]))return e&&t===e.hsla?e:O({...t,a:i});if(h(t,["h","s","v"]))return e&&t===e.hsva?e:m({...t,a:i})}return u({r:255,g:0,b:0,a:1})}function b(t,e){if(e){const{a:i,...s}=t;return s}return t}function dt(t,e){if(e==null)return t;if(typeof e=="string")return e.length===7?t.hex:t.hexa;if(typeof e=="object"){const i=typeof e.a=="number"&&e.a===0?!!e.a:!e.a;if(h(e,["r","g","b"]))return b(t.rgba,i);if(h(e,["h","s","l"]))return b(t.hsla,i);if(h(e,["h","s","v"]))return b(t.hsva,i)}return t}function pt(t){return t?typeof t=="string"?t.length>7:typeof t=="object"?h(t,["a"])||h(t,["alpha"]):!1:!1}const mt=V.extend({name:"v-color-picker-preview",props:{color:Object,disabled:Boolean,hideAlpha:Boolean},methods:{genAlpha(){return this.genTrack({staticClass:"v-color-picker__alpha",props:{thumbColor:"grey lighten-2",hideDetails:!0,value:this.color.alpha,step:0,min:0,max:1},style:{backgroundImage:this.disabled?void 0:`linear-gradient(to ${this.$vuetify.rtl?"left":"right"}, transparent, ${Z(this.color.rgba)})`},on:{input:t=>this.color.alpha!==t&&this.$emit("update:color",m({...this.color.hsva,a:t}))}})},genSliders(){return this.$createElement("div",{staticClass:"v-color-picker__sliders"},[this.genHue(),!this.hideAlpha&&this.genAlpha()])},genDot(){return this.$createElement("div",{staticClass:"v-color-picker__dot"},[this.$createElement("div",{style:{background:tt(this.color.rgba)}})])},genHue(){return this.genTrack({staticClass:"v-color-picker__hue",props:{thumbColor:"grey lighten-2",hideDetails:!0,value:this.color.hue,step:0,min:0,max:360},on:{input:t=>this.color.hue!==t&&this.$emit("update:color",m({...this.color.hsva,h:t}))}})},genTrack(t){return this.$createElement(ut,{class:"v-color-picker__track",...t,props:{disabled:this.disabled,...t.props}})}},render(t){return t("div",{staticClass:"v-color-picker__preview",class:{"v-color-picker__preview--hide-alpha":this.hideAlpha}},[this.genDot(),this.genSliders()])}});const gt=V.extend({name:"v-color-picker-canvas",props:{color:{type:Object,default:()=>u({r:255,g:0,b:0,a:1})},disabled:Boolean,dotSize:{type:[Number,String],default:10},height:{type:[Number,String],default:150},width:{type:[Number,String],default:300}},data(){return{boundingRect:{width:0,height:0,left:0,top:0}}},computed:{dot(){return this.color?{x:this.color.hsva.s*parseInt(this.width,10),y:(1-this.color.hsva.v)*parseInt(this.height,10)}:{x:0,y:0}}},watch:{"color.hue":"updateCanvas"},mounted(){this.updateCanvas()},methods:{emitColor(t,e){const{left:i,top:s,width:n,height:a}=this.boundingRect;this.$emit("update:color",m({h:this.color.hue,s:B(t-i,0,n)/n,v:1-B(e-s,0,a)/a,a:this.color.alpha}))},updateCanvas(){if(!this.color)return;const t=this.$refs.canvas,e=t.getContext("2d");if(!e)return;const i=e.createLinearGradient(0,0,t.width,0);i.addColorStop(0,"hsla(0, 0%, 100%, 1)"),i.addColorStop(1,`hsla(${this.color.hue}, 100%, 50%, 1)`),e.fillStyle=i,e.fillRect(0,0,t.width,t.height);const s=e.createLinearGradient(0,0,0,t.height);s.addColorStop(0,"hsla(0, 0%, 100%, 0)"),s.addColorStop(1,"hsla(0, 0%, 0%, 1)"),e.fillStyle=s,e.fillRect(0,0,t.width,t.height)},handleClick(t){this.disabled||(this.boundingRect=this.$el.getBoundingClientRect(),this.emitColor(t.clientX,t.clientY))},handleMouseDown(t){t.preventDefault(),!this.disabled&&(this.boundingRect=this.$el.getBoundingClientRect(),window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("mouseup",this.handleMouseUp))},handleMouseMove(t){this.disabled||this.emitColor(t.clientX,t.clientY)},handleMouseUp(){window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("mouseup",this.handleMouseUp)},genCanvas(){return this.$createElement("canvas",{ref:"canvas",attrs:{width:this.width,height:this.height}})},genDot(){const t=parseInt(this.dotSize,10)/2,e=o(this.dot.x-t),i=o(this.dot.y-t);return this.$createElement("div",{staticClass:"v-color-picker__canvas-dot",class:{"v-color-picker__canvas-dot--disabled":this.disabled},style:{width:o(this.dotSize),height:o(this.dotSize),transform:`translate(${e}, ${i})`}})}},render(t){return t("div",{staticClass:"v-color-picker__canvas",style:{width:o(this.width),height:o(this.height)},on:{click:this.handleClick,mousedown:this.handleMouseDown}},[this.genCanvas(),this.genDot()])}});const k={rgba:{inputs:[["r",255,"int"],["g",255,"int"],["b",255,"int"],["a",1,"float"]],from:u},hsla:{inputs:[["h",360,"int"],["s",1,"float"],["l",1,"float"],["a",1,"float"]],from:O},hexa:{from:g}},vt=V.extend({name:"v-color-picker-edit",props:{color:Object,disabled:Boolean,hideAlpha:Boolean,hideModeSwitch:Boolean,mode:{type:String,default:"rgba",validator:t=>Object.keys(k).includes(t)}},data(){return{modes:k,internalMode:this.mode}},computed:{currentMode(){return this.modes[this.internalMode]}},watch:{mode(t){this.internalMode=t}},created(){this.internalMode=this.mode},methods:{getValue(t,e){return e==="float"?Math.round(t*100)/100:e==="int"?Math.round(t):0},parseValue(t,e){return e==="float"?parseFloat(t):e==="int"&&parseInt(t,10)||0},changeMode(){const t=Object.keys(this.modes),e=t.indexOf(this.internalMode),i=t[(e+1)%t.length];this.internalMode=i,this.$emit("update:mode",i)},genInput(t,e,i,s){return this.$createElement("div",{staticClass:"v-color-picker__input"},[this.$createElement("input",{key:t,attrs:e,domProps:{value:i},on:s}),this.$createElement("span",t.toUpperCase())])},genInputs(){if(this.internalMode==="hexa"){const t=this.color.hexa,e=this.hideAlpha&&t.endsWith("FF")?t.substr(0,7):t;return this.genInput("hex",{maxlength:this.hideAlpha?7:9,disabled:this.disabled},e,{change:i=>{const s=i.target;this.$emit("update:color",this.currentMode.from(x(s.value)))}})}else return(this.hideAlpha?this.currentMode.inputs.slice(0,-1):this.currentMode.inputs).map(([e,i,s])=>{const n=this.color[this.internalMode];return this.genInput(e,{type:"number",min:0,max:i,step:s==="float"?"0.01":s==="int"?"1":void 0,disabled:this.disabled},this.getValue(n[e],s),{input:a=>{const l=a.target,r=this.parseValue(l.value||"0",s);this.$emit("update:color",this.currentMode.from(Object.assign({},n,{[e]:r}),this.color.alpha))}})})},genSwitch(){return this.$createElement(_,{props:{small:!0,icon:!0,disabled:this.disabled},on:{click:this.changeMode}},[this.$createElement(p,"$unfold")])}},render(t){return t("div",{staticClass:"v-color-picker__edit"},[this.genInputs(),!this.hideModeSwitch&&this.genSwitch()])}});function ft(t){return Object.keys(t).map(e=>{const i=t[e];return i.base?[i.base,i.darken4,i.darken3,i.darken2,i.darken1,i.lighten1,i.lighten2,i.lighten3,i.lighten4,i.lighten5]:[i.black,i.white,i.transparent]})}const bt=T("#FFFFFF").rgba,_t=T("#000000").rgba,kt=w(P).extend({name:"v-color-picker-swatches",props:{swatches:{type:Array,default:()=>ft(et)},disabled:Boolean,color:Object,maxWidth:[Number,String],maxHeight:[Number,String]},methods:{genColor(t){const e=this.$createElement("div",{style:{background:t}},[$(this.color,R(t,null))&&this.$createElement(p,{props:{small:!0,dark:D(this.color.rgba,bt)>2&&this.color.alpha>.5,light:D(this.color.rgba,_t)>2&&this.color.alpha>.5}},"$success")]);return this.$createElement("div",{staticClass:"v-color-picker__color",on:{click:()=>this.disabled||this.$emit("update:color",T(t==="transparent"?"#00000000":t))}},[e])},genSwatches(){return this.swatches.map(t=>{const e=t.map(this.genColor);return this.$createElement("div",{staticClass:"v-color-picker__swatch"},e)})}},render(t){return t("div",{staticClass:"v-color-picker__swatches",style:{maxWidth:o(this.maxWidth),maxHeight:o(this.maxHeight)}},[this.$createElement("div",this.genSwatches())])}}),Ct=w(it,P).extend({name:"v-color-picker",props:{canvasHeight:{type:[String,Number],default:150},disabled:Boolean,dotSize:{type:[Number,String],default:10},flat:Boolean,hideCanvas:Boolean,hideSliders:Boolean,hideInputs:Boolean,hideModeSwitch:Boolean,mode:{type:String,default:"rgba",validator:t=>Object.keys(k).includes(t)},showSwatches:Boolean,swatches:Array,swatchesMaxHeight:{type:[Number,String],default:150},value:{type:[Object,String]},width:{type:[Number,String],default:300}},data:()=>({internalValue:u({r:255,g:0,b:0,a:1})}),computed:{hideAlpha(){return this.value?!pt(this.value):!1}},watch:{value:{handler(t){this.updateColor(R(t,this.internalValue))},immediate:!0}},methods:{updateColor(t){this.internalValue=t;const e=dt(this.internalValue,this.value);$(e,this.value)||(this.$emit("input",e),this.$emit("update:color",this.internalValue))},genCanvas(){return this.$createElement(gt,{props:{color:this.internalValue,disabled:this.disabled,dotSize:this.dotSize,width:this.width,height:this.canvasHeight},on:{"update:color":this.updateColor}})},genControls(){return this.$createElement("div",{staticClass:"v-color-picker__controls"},[!this.hideSliders&&this.genPreview(),!this.hideInputs&&this.genEdit()])},genEdit(){return this.$createElement(vt,{props:{color:this.internalValue,disabled:this.disabled,hideAlpha:this.hideAlpha,hideModeSwitch:this.hideModeSwitch,mode:this.mode},on:{"update:color":this.updateColor,"update:mode":t=>this.$emit("update:mode",t)}})},genPreview(){return this.$createElement(mt,{props:{color:this.internalValue,disabled:this.disabled,hideAlpha:this.hideAlpha},on:{"update:color":this.updateColor}})},genSwatches(){return this.$createElement(kt,{props:{dark:this.dark,light:this.light,disabled:this.disabled,swatches:this.swatches,color:this.internalValue,maxHeight:this.swatchesMaxHeight},on:{"update:color":this.updateColor}})}},render(t){return t(st,{staticClass:"v-color-picker",class:{"v-color-picker--flat":this.flat,...this.themeClasses,...this.elevationClasses},props:{maxWidth:this.width}},[!this.hideCanvas&&this.genCanvas(),(!this.hideSliders||!this.hideInputs)&&this.genControls(),this.showSwatches&&this.genSwatches()])}});const wt={name:"TagChip",props:{isNew:{type:Boolean,default:!1},tag:{type:Object,default:()=>({name:"New Tag",value:"",color:"#2196F3"})},close:{type:Boolean,default:!0},customIcon:{type:String,default:null}},data(){return{menu:!1,internalTag:this.tag,rules:{noColon:[t=>!!t||"Required.",t=>!t.includes(":")||"Cannot contain a colon."]}}},watch:{menu(t){t?(this.isNew&&(this.internalTag={name:"",value:"",color:"#2196F3"}),this.$nextTick(()=>{this.$refs.form.resetValidation(),setTimeout(()=>{this.$refs.nameField.focus()},500)})):this.internalTag=this.tag}},methods:{deleteTag(t){this.$emit("delete-tag",t)},updateTag(t){this.$refs.form.validate()&&(this.$emit("update-tag",t),this.menu=!1,this.$refs.form.resetValidation())}}};var $t=function(){var e=this,i=e._self._c;return i(at,{attrs:{"close-on-content-click":!1,"close-on-click":!1,bottom:"",right:"",transition:"scale-transition",origin:"top left"},scopedSlots:e._u([{key:"activator",fn:function({on:s}){return[i(ct,e._g({staticClass:"mt-4 mr-1 ml-1 mb-4",attrs:{color:e.internalTag.color,"text-color":"white",close:e.close},on:{"click:close":function(n){return e.deleteTag(e.internalTag)}}},s),[e._v(" "+e._s(`${e.tag.name}:${e.tag.value}`)+" "),e.customIcon?i(p,{attrs:{right:""}},[e._v(" "+e._s(e.customIcon)+" ")]):e._e()],1)]}}]),model:{value:e.menu,callback:function(s){e.menu=s},expression:"menu"}},[i(nt,{staticStyle:{display:"flex","flex-direction":"row-reverse"},attrs:{width:"400"}},[i(_,{staticClass:"mt-2 mr-2",attrs:{icon:""},on:{click:function(s){e.menu=!1}}},[i(p,[e._v("mdi-close-circle")])],1),i(rt,{ref:"form"},[i(lt,[i(L,{ref:"nameField",attrs:{outlined:"",dense:"",label:"Name",rules:e.rules.noColon,required:""},model:{value:e.internalTag.name,callback:function(s){e.$set(e.internalTag,"name",s)},expression:"internalTag.name"}}),i(L,{attrs:{outlined:"",dense:"",label:"Value",rules:e.rules.noColon,required:""},model:{value:e.internalTag.value,callback:function(s){e.$set(e.internalTag,"value",s)},expression:"internalTag.value"}}),i(Ct,{attrs:{"hide-inputs":"","dot-size":"16",mode:"hexa","swatches-max-height":"100"},model:{value:e.internalTag.color,callback:function(s){e.$set(e.internalTag,"color",s)},expression:"internalTag.color"}})],1),i(ot,[i(ht),i(_,{attrs:{color:"green",text:""},on:{click:function(s){return e.updateTag(e.internalTag)}}},[e._v(" Update ")])],1)],1)],1)],1)},yt=[],St=H(wt,$t,yt,!1,null,null,null,null);const C=St.exports;const xt={name:"TagViewer",components:{TagChip:C},props:{tags:{type:Array,default:()=>[]}},data(){return{menu:{}}},methods:{deleteTag(t){this.$emit("delete-tag",t)},updateTag(t){this.$emit("update-tag",t)},newTag(t){this.$emit("new-tag",t)}}};var Vt=function(){var e=this,i=e._self._c;return i("div",{staticStyle:{display:"flex","flex-direction":"row-reverse"}},[i("div",e._l(e.tags,function(s){return i(C,{key:s.id,attrs:{tag:s},on:{"delete-tag":e.deleteTag,"update-tag":e.updateTag}})}),1),i("div",[i(C,{attrs:{"is-new":!0,close:!1,"custom-icon":"mdi-plus-circle"},on:{"update-tag":e.newTag}})],1)])},Tt=[],Mt=H(xt,Vt,Tt,!1,null,null,null,null);const Ft=Mt.exports;export{Ft as _};