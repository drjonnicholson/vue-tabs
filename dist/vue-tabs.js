!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueTabs=e():t.VueTabs=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=5)}([function(t,e){t.exports=function(t,e,n,i){var r,s=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(r=t,s=t.default);var a="function"==typeof s?s.options:s;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),i){var c=Object.create(a.computed||null);Object.keys(i).forEach(function(t){var e=i[t];c[t]=function(){return e}}),a.computed=c}return{esModule:r,exports:s,options:a}}},function(t,e,n){var i=n(0)(n(3),n(9),null,null);i.options.__file="C:\\work\\Github\\vue-tabs\\src\\components\\TabContent.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] TabContent.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},function(t,e,n){n(7),n(6);var i=n(0)(n(4),n(10),null,null);i.options.__file="C:\\work\\Github\\vue-tabs\\src\\components\\VueTabs.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] VueTabs.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(11);n.n(i);e.default={name:"v-tab",components:{VTouch:i.component},props:{title:{type:String,default:""},icon:{type:String,default:""},beforeChange:{type:Function},route:{type:[String,Object]},transitionName:String,transitionMode:String},computed:{isValidParent:function(){return"vue-tabs"===this.$parent.$options.name}},data:function(){return{active:!1}},methods:{onSwipeLeft:function(){if(this.isValidParent){var t=this.$parent.activeTabIndex;this.$parent.changeTab(t,t+1)}},onSwipeRight:function(){if(this.isValidParent){var t=this.$parent.activeTabIndex;this.$parent.changeTab(t,t-1)}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"vue-tabs",props:{activeTabColor:String,activeTextColor:String,textPosition:{type:String,default:"center"},type:{type:String,default:"tabs"},direction:{type:String,default:"horizontal"},centered:Boolean,startIndex:{type:Number,default:0}},data:function(){return{activeTabIndex:0,tabs:[]}},computed:{tabCount:function(){return this.tabs.length},isTabShape:function(){return"tabs"===this.type},isStacked:function(){return"vertical"===this.direction},classList:function(){return"nav "+(this.isTabShape?"nav-tabs":"nav-pills")+" "+(this.centered?"nav-justified":"")+" "+(this.isStacked?"nav-stacked":"")},stackedClass:function(){return this.isStacked?"stacked":""},activeTabStyle:function(){return{backgroundColor:this.activeTabColor,color:this.activeTextColor}},activeTitleColor:function(){return{color:this.activeTabColor}}},methods:{navigateToTab:function(t){this.beforeTabChange(this.activeTabIndex)&&this.changeTab(this.activeTabIndex,t)},beforeTabChange:function(t){var e=this.tabs[t];return!e||void 0===e.beforeChange||e.beforeChange()},changeTab:function(t,e){if(!(e<0||e>=this.tabCount)){var n=this.tabs[t],i=this.tabs[e];n&&(n.active=!1,i&&(i.active=!0)),this.activeTabIndex=e,this.tryChangeRoute(i)}},tryChangeRoute:function(t){this.$router&&t&&t.route&&this.$router.push(t.route)}},mounted:function(){if(this.tabs=this.$children.filter(function(t){return"v-tab"===t.$options.name}),this.tabs.length>0&&0===this.startIndex){var t=this.tabs[this.activeTabIndex];t.active=!0,this.tryChangeRoute(t)}if(this.startIndex<this.tabs.length){var e=this.tabs[this.startIndex];this.activeTabIndex=this.startIndex,e.active=!0,this.tryChangeRoute(this.tabs[this.startIndex])}else console.warn("Prop startIndex set to "+this.startIndex+" is greater than the number of tabs - "+this.tabs.length+". Make sure that the starting index is less than the number of tabs registered")}}},function(t,e,n){t.exports={VueTabs:n(2),VTab:n(1),install:function(e){e.component("vue-tabs",t.exports.VueTabs),e.component("v-tab",t.exports.VTab)}}},function(t,e){},function(t,e){},function(t,e,n){var i;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(r,s,o,a){"use strict";function c(t,e,n){return setTimeout(f(t,n),e)}function u(t,e,n){return!!Array.isArray(t)&&(h(t,n[e],n),!0)}function h(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==a)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function l(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",s=r.console&&(r.console.warn||r.console.log);return s&&s.call(r.console,i,n),t.apply(this,arguments)}}function p(t,e,n){var i,r=e.prototype;i=t.prototype=Object.create(r),i.constructor=t,i._super=r,n&&dt(i,n)}function f(t,e){return function(){return t.apply(e,arguments)}}function d(t,e){return typeof t==mt?t.apply(e?e[0]||a:a,e):t}function v(t,e){return t===a?e:t}function g(t,e,n){h(T(e),function(e){t.addEventListener(e,n,!1)})}function m(t,e,n){h(T(e),function(e){t.removeEventListener(e,n,!1)})}function b(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function y(t,e){return t.indexOf(e)>-1}function T(t){return t.trim().split(/\s+/g)}function E(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function x(t){return Array.prototype.slice.call(t,0)}function _(t,e,n){for(var i=[],r=[],s=0;s<t.length;){var o=e?t[s][e]:t[s];E(r,o)<0&&i.push(t[s]),r[s]=o,s++}return n&&(i=e?i.sort(function(t,n){return t[e]>n[e]}):i.sort()),i}function C(t,e){for(var n,i,r=e[0].toUpperCase()+e.slice(1),s=0;s<vt.length;){if(n=vt[s],(i=n?n+r:e)in t)return i;s++}return a}function w(){return _t++}function I(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||r}function S(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){d(t.options.enable,[t])&&n.handler(e)},this.init()}function O(t){var e=t.options.inputClass;return new(e||(It?L:St?q:wt?U:V))(t,A)}function A(t,e,n){var i=n.pointers.length,r=n.changedPointers.length,s=e&At&&i-r==0,o=e&(zt|Rt)&&i-r==0;n.isFirst=!!s,n.isFinal=!!o,s&&(t.session={}),n.eventType=e,P(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function P(t,e){var n=t.session,i=e.pointers,r=i.length;n.firstInput||(n.firstInput=M(e)),r>1&&!n.firstMultiple?n.firstMultiple=M(e):1===r&&(n.firstMultiple=!1);var s=n.firstInput,o=n.firstMultiple,a=o?o.center:s.center,c=e.center=D(i);e.timeStamp=Tt(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=F(a,c),e.distance=N(a,c),z(n,e),e.offsetDirection=j(e.deltaX,e.deltaY);var u=k(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=u.x,e.overallVelocityY=u.y,e.overallVelocity=yt(u.x)>yt(u.y)?u.x:u.y,e.scale=o?Y(o.pointers,i):1,e.rotation=o?X(o.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,R(n,e);var h=t.element;b(e.srcEvent.target,h)&&(h=e.srcEvent.target),e.target=h}function z(t,e){var n=e.center,i=t.offsetDelta||{},r=t.prevDelta||{},s=t.prevInput||{};e.eventType!==At&&s.eventType!==zt||(r=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=r.x+(n.x-i.x),e.deltaY=r.y+(n.y-i.y)}function R(t,e){var n,i,r,s,o=t.lastInterval||e,c=e.timeStamp-o.timeStamp;if(e.eventType!=Rt&&(c>Ot||o.velocity===a)){var u=e.deltaX-o.deltaX,h=e.deltaY-o.deltaY,l=k(c,u,h);i=l.x,r=l.y,n=yt(l.x)>yt(l.y)?l.x:l.y,s=j(u,h),t.lastInterval=e}else n=o.velocity,i=o.velocityX,r=o.velocityY,s=o.direction;e.velocity=n,e.velocityX=i,e.velocityY=r,e.direction=s}function M(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:bt(t.pointers[n].clientX),clientY:bt(t.pointers[n].clientY)},n++;return{timeStamp:Tt(),pointers:e,center:D(e),deltaX:t.deltaX,deltaY:t.deltaY}}function D(t){var e=t.length;if(1===e)return{x:bt(t[0].clientX),y:bt(t[0].clientY)};for(var n=0,i=0,r=0;r<e;)n+=t[r].clientX,i+=t[r].clientY,r++;return{x:bt(n/e),y:bt(i/e)}}function k(t,e,n){return{x:e/t||0,y:n/t||0}}function j(t,e){return t===e?Mt:yt(t)>=yt(e)?t<0?Dt:kt:e<0?jt:Nt}function N(t,e,n){n||(n=Vt);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return Math.sqrt(i*i+r*r)}function F(t,e,n){n||(n=Vt);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return 180*Math.atan2(r,i)/Math.PI}function X(t,e){return F(e[1],e[0],Lt)+F(t[1],t[0],Lt)}function Y(t,e){return N(e[0],e[1],Lt)/N(t[0],t[1],Lt)}function V(){this.evEl=$t,this.evWin=qt,this.pressed=!1,S.apply(this,arguments)}function L(){this.evEl=Gt,this.evWin=Bt,S.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function W(){this.evTarget=Jt,this.evWin=Kt,this.started=!1,S.apply(this,arguments)}function $(t,e){var n=x(t.touches),i=x(t.changedTouches);return e&(zt|Rt)&&(n=_(n.concat(i),"identifier",!0)),[n,i]}function q(){this.evTarget=te,this.targetIds={},S.apply(this,arguments)}function H(t,e){var n=x(t.touches),i=this.targetIds;if(e&(At|Pt)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var r,s,o=x(t.changedTouches),a=[],c=this.target;if(s=n.filter(function(t){return b(t.target,c)}),e===At)for(r=0;r<s.length;)i[s[r].identifier]=!0,r++;for(r=0;r<o.length;)i[o[r].identifier]&&a.push(o[r]),e&(zt|Rt)&&delete i[o[r].identifier],r++;return a.length?[_(s.concat(a),"identifier",!0),a]:void 0}function U(){S.apply(this,arguments);var t=f(this.handler,this);this.touch=new q(this.manager,t),this.mouse=new V(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function G(t,e){t&At?(this.primaryTouch=e.changedPointers[0].identifier,B.call(this,e)):t&(zt|Rt)&&B.call(this,e)}function B(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches,r=function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)};setTimeout(r,ee)}}function Z(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var r=this.lastTouches[i],s=Math.abs(e-r.x),o=Math.abs(n-r.y);if(s<=ne&&o<=ne)return!0}return!1}function J(t,e){this.manager=t,this.set(e)}function K(t){if(y(t,ae))return ae;var e=y(t,ce),n=y(t,ue);return e&&n?ae:e||n?e?ce:ue:y(t,oe)?oe:se}function Q(t){this.options=dt({},this.defaults,t||{}),this.id=w(),this.manager=null,this.options.enable=v(this.options.enable,!0),this.state=le,this.simultaneous={},this.requireFail=[]}function tt(t){return t&ge?"cancel":t&de?"end":t&fe?"move":t&pe?"start":""}function et(t){return t==Nt?"down":t==jt?"up":t==Dt?"left":t==kt?"right":""}function nt(t,e){var n=e.manager;return n?n.get(t):t}function it(){Q.apply(this,arguments)}function rt(){it.apply(this,arguments),this.pX=null,this.pY=null}function st(){it.apply(this,arguments)}function ot(){Q.apply(this,arguments),this._timer=null,this._input=null}function at(){it.apply(this,arguments)}function ct(){it.apply(this,arguments)}function ut(){Q.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ht(t,e){return e=e||{},e.recognizers=v(e.recognizers,ht.defaults.preset),new lt(t,e)}function lt(t,e){this.options=dt({},ht.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=O(this),this.touchAction=new J(this,this.options.touchAction),pt(this,!0),h(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function pt(t,e){var n=t.element;if(n.style){var i;h(t.options.cssProps,function(r,s){i=C(n.style,s),e?(t.oldCssProps[i]=n.style[i],n.style[i]=r):n.style[i]=t.oldCssProps[i]||""}),e||(t.oldCssProps={})}}function ft(t,e){var n=s.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}var dt,vt=["","webkit","Moz","MS","ms","o"],gt=s.createElement("div"),mt="function",bt=Math.round,yt=Math.abs,Tt=Date.now;dt="function"!=typeof Object.assign?function(t){if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(i!==a&&null!==i)for(var r in i)i.hasOwnProperty(r)&&(e[r]=i[r])}return e}:Object.assign;var Et=l(function(t,e,n){for(var i=Object.keys(e),r=0;r<i.length;)(!n||n&&t[i[r]]===a)&&(t[i[r]]=e[i[r]]),r++;return t},"extend","Use `assign`."),xt=l(function(t,e){return Et(t,e,!0)},"merge","Use `assign`."),_t=1,Ct=/mobile|tablet|ip(ad|hone|od)|android/i,wt="ontouchstart"in r,It=C(r,"PointerEvent")!==a,St=wt&&Ct.test(navigator.userAgent),Ot=25,At=1,Pt=2,zt=4,Rt=8,Mt=1,Dt=2,kt=4,jt=8,Nt=16,Ft=Dt|kt,Xt=jt|Nt,Yt=Ft|Xt,Vt=["x","y"],Lt=["clientX","clientY"];S.prototype={handler:function(){},init:function(){this.evEl&&g(this.element,this.evEl,this.domHandler),this.evTarget&&g(this.target,this.evTarget,this.domHandler),this.evWin&&g(I(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(I(this.element),this.evWin,this.domHandler)}};var Wt={mousedown:At,mousemove:Pt,mouseup:zt},$t="mousedown",qt="mousemove mouseup";p(V,S,{handler:function(t){var e=Wt[t.type];e&At&&0===t.button&&(this.pressed=!0),e&Pt&&1!==t.which&&(e=zt),this.pressed&&(e&zt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var Ht={pointerdown:At,pointermove:Pt,pointerup:zt,pointercancel:Rt,pointerout:Rt},Ut={2:"touch",3:"pen",4:"mouse",5:"kinect"},Gt="pointerdown",Bt="pointermove pointerup pointercancel";r.MSPointerEvent&&!r.PointerEvent&&(Gt="MSPointerDown",Bt="MSPointerMove MSPointerUp MSPointerCancel"),p(L,S,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),r=Ht[i],s=Ut[t.pointerType]||t.pointerType,o="touch"==s,a=E(e,t.pointerId,"pointerId");r&At&&(0===t.button||o)?a<0&&(e.push(t),a=e.length-1):r&(zt|Rt)&&(n=!0),a<0||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),n&&e.splice(a,1))}});var Zt={touchstart:At,touchmove:Pt,touchend:zt,touchcancel:Rt},Jt="touchstart",Kt="touchstart touchmove touchend touchcancel";p(W,S,{handler:function(t){var e=Zt[t.type];if(e===At&&(this.started=!0),this.started){var n=$.call(this,t,e);e&(zt|Rt)&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}}});var Qt={touchstart:At,touchmove:Pt,touchend:zt,touchcancel:Rt},te="touchstart touchmove touchend touchcancel";p(q,S,{handler:function(t){var e=Qt[t.type],n=H.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}});var ee=2500,ne=25;p(U,S,{handler:function(t,e,n){var i="touch"==n.pointerType,r="mouse"==n.pointerType;if(!(r&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)G.call(this,e,n);else if(r&&Z.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var ie=C(gt.style,"touchAction"),re=ie!==a,se="auto",oe="manipulation",ae="none",ce="pan-x",ue="pan-y",he=function(){if(!re)return!1;var t={},e=r.CSS&&r.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){t[n]=!e||r.CSS.supports("touch-action",n)}),t}();J.prototype={set:function(t){"compute"==t&&(t=this.compute()),re&&this.manager.element.style&&he[t]&&(this.manager.element.style[ie]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return h(this.manager.recognizers,function(e){d(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),K(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var i=this.actions,r=y(i,ae)&&!he[ae],s=y(i,ue)&&!he[ue],o=y(i,ce)&&!he[ce];if(r){var a=1===t.pointers.length,c=t.distance<2,u=t.deltaTime<250;if(a&&c&&u)return}return o&&s?void 0:r||s&&n&Ft||o&&n&Xt?this.preventSrc(e):void 0},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var le=1,pe=2,fe=4,de=8,ve=de,ge=16;Q.prototype={defaults:{},set:function(t){return dt(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(u(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=nt(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return u(t,"dropRecognizeWith",this)?this:(t=nt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(u(t,"requireFailure",this))return this;var e=this.requireFail;return t=nt(t,this),-1===E(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(u(t,"dropRequireFailure",this))return this;t=nt(t,this);var e=E(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){n.manager.emit(e,t)}var n=this,i=this.state;i<de&&e(n.options.event+tt(i)),e(n.options.event),t.additionalEvent&&e(t.additionalEvent),i>=de&&e(n.options.event+tt(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|le)))return!1;t++}return!0},recognize:function(t){var e=dt({},t);if(!d(this.options.enable,[this,e]))return this.reset(),void(this.state=32);this.state&(ve|ge|32)&&(this.state=le),this.state=this.process(e),this.state&(pe|fe|de|ge)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},p(it,Q,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&(pe|fe),r=this.attrTest(t);return i&&(n&Rt||!r)?e|ge:i||r?n&zt?e|de:e&pe?e|fe:pe:32}}),p(rt,it,{defaults:{event:"pan",threshold:10,pointers:1,direction:Yt},getTouchAction:function(){var t=this.options.direction,e=[];return t&Ft&&e.push(ue),t&Xt&&e.push(ce),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,r=t.direction,s=t.deltaX,o=t.deltaY;return r&e.direction||(e.direction&Ft?(r=0===s?Mt:s<0?Dt:kt,n=s!=this.pX,i=Math.abs(t.deltaX)):(r=0===o?Mt:o<0?jt:Nt,n=o!=this.pY,i=Math.abs(t.deltaY))),t.direction=r,n&&i>e.threshold&&r&e.direction},attrTest:function(t){return it.prototype.attrTest.call(this,t)&&(this.state&pe||!(this.state&pe)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=et(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),p(st,it,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[ae]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&pe)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),p(ot,Q,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[se]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!i||!n||t.eventType&(zt|Rt)&&!r)this.reset();else if(t.eventType&At)this.reset(),this._timer=c(function(){this.state=ve,this.tryEmit()},e.time,this);else if(t.eventType&zt)return ve;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===ve&&(t&&t.eventType&zt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=Tt(),this.manager.emit(this.options.event,this._input)))}}),p(at,it,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[ae]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&pe)}}),p(ct,it,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Ft|Xt,pointers:1},getTouchAction:function(){return rt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(Ft|Xt)?e=t.overallVelocity:n&Ft?e=t.overallVelocityX:n&Xt&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&yt(e)>this.options.velocity&&t.eventType&zt},emit:function(t){var e=et(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),p(ut,Q,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[oe]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),t.eventType&At&&0===this.count)return this.failTimeout();if(i&&r&&n){if(t.eventType!=zt)return this.failTimeout();var s=!this.pTime||t.timeStamp-this.pTime<e.interval,o=!this.pCenter||N(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,o&&s?this.count+=1:this.count=1,this._input=t;if(0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=c(function(){this.state=ve,this.tryEmit()},e.interval,this),pe):ve}return 32},failTimeout:function(){return this._timer=c(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ve&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ht.VERSION="2.0.7",ht.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[at,{enable:!1}],[st,{enable:!1},["rotate"]],[ct,{direction:Ft}],[rt,{direction:Ft},["swipe"]],[ut],[ut,{event:"doubletap",taps:2},["tap"]],[ot]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};lt.prototype={set:function(t){return dt(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var n,i=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&ve)&&(r=e.curRecognizer=null);for(var s=0;s<i.length;)n=i[s],2===e.stopped||r&&n!=r&&!n.canRecognizeWith(r)?n.reset():n.recognize(t),!r&&n.state&(pe|fe|de)&&(r=e.curRecognizer=n),s++}},get:function(t){if(t instanceof Q)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(u(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(u(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=E(e,t);-1!==n&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var n=this.handlers;return h(T(t),function(t){n[t]=n[t]||[],n[t].push(e)}),this}},off:function(t,e){if(t!==a){var n=this.handlers;return h(T(t),function(t){e?n[t]&&n[t].splice(E(n[t],e),1):delete n[t]}),this}},emit:function(t,e){this.options.domEvents&&ft(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&pt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},dt(ht,{INPUT_START:At,INPUT_MOVE:Pt,INPUT_END:zt,INPUT_CANCEL:Rt,STATE_POSSIBLE:le,STATE_BEGAN:pe,STATE_CHANGED:fe,STATE_ENDED:de,STATE_RECOGNIZED:ve,STATE_CANCELLED:ge,STATE_FAILED:32,DIRECTION_NONE:Mt,DIRECTION_LEFT:Dt,DIRECTION_RIGHT:kt,DIRECTION_UP:jt,DIRECTION_DOWN:Nt,DIRECTION_HORIZONTAL:Ft,DIRECTION_VERTICAL:Xt,DIRECTION_ALL:Yt,Manager:lt,Input:S,TouchAction:J,TouchInput:q,MouseInput:V,PointerEventInput:L,TouchMouseInput:U,SingleTouchInput:W,Recognizer:Q,AttrRecognizer:it,Tap:ut,Pan:rt,Swipe:ct,Pinch:st,Rotate:at,Press:ot,on:g,off:m,each:h,merge:xt,extend:Et,assign:dt,inherit:p,bindFn:f,prefixed:C}),(void 0!==r?r:"undefined"!=typeof self?self:{}).Hammer=ht,(i=function(){return ht}.call(e,n,e,t))!==a&&(t.exports=i)}(window,document)},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.active?n("v-touch",{staticClass:"tab-container",attrs:{tag:"div"},on:{swiperight:t.onSwipeRight,swipeleft:t.onSwipeLeft}},[t._t("default")],2):t._e()},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-tabs",class:t.stackedClass},[n("ul",{class:t.classList},[t._l(t.tabs,function(e,i){return t._t("tab",[n("li",{key:e,staticClass:"tab",class:{active:e.active}},["top"===t.textPosition?n("span",{staticClass:"title title_top",style:e.active?t.activeTitleColor:{}},[t._v("\n            "+t._s(e.title)+"\n        ")]):t._e(),t._v(" "),n("a",{style:e.active?t.activeTabStyle:{},attrs:{href:""},on:{click:function(e){e.preventDefault(),t.navigateToTab(i)}}},[n("i",{class:e.icon},["center"===t.textPosition?n("span",[t._v("\n               "+t._s(e.title)+"\n            ")]):t._e()])]),t._v(" "),"bottom"===t.textPosition?n("span",{staticClass:"title title_bottom",style:e.active?t.activeTitleColor:{}},[t._v("\n            "+t._s(e.title)+"\n        ")]):t._e()])],{tab:e,index:i,clickHandler:t.navigateToTab})})],2),t._v(" "),n("div",{staticClass:"tab-content"},[t._t("default")],2)])},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,n){!function(t,e){e(n(8))}(0,function(e){"use strict";function n(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];for(var i=0;i<e.length;i++)for(var r=e[i],s=Object.keys(r),o=0;o<s.length;o++){var a=s[o];t[a]=r[a]}return t}function i(){return{type:Object,default:function(){return{}}}}function r(t){return t.charAt(0).toUpperCase()+t.slice(1)}function s(t){var n=t.direction;if("string"==typeof n){var i="DIRECTION_"+n.toUpperCase();o.indexOf(n)>-1&&e.hasOwnProperty(i)?t.direction=e[i]:console.warn("[vue-touch] invalid direction: "+n)}return t}e="default"in e?e.default:e;var o=["up","down","left","right","horizontal","vertical","all"],a={},c={},u=["pan","panstart","panmove","panend","pancancel","panleft","panright","panup","pandown","pinch","pinchstart","pinchmove","pinchend","pinchcancel","pinchin","pinchout","press","pressup","rotate","rotatestart","rotatemove","rotateend","rotatecancel","swipe","swipeleft","swiperight","swipeup","swipedown","tap"],h={pan:"pan",panstart:"pan",panmove:"pan",panend:"pan",pancancel:"pan",panleft:"pan",panright:"pan",panup:"pan",pandown:"pan",pinch:"pinch",pinchstart:"pinch",pinchmove:"pinch",pinchend:"pinch",pinchcancel:"pinch",pinchin:"pinch",pinchout:"pinch",press:"press",pressup:"press",rotate:"rotate",rotatestart:"rotate",rotatemove:"rotate",rotateend:"rotate",rotatecancel:"rotate",swipe:"swipe",swipeleft:"swipe",swiperight:"swipe",swipeup:"swipe",swipedown:"swipe",tap:"tap"},l={props:{options:i(),tapOptions:i(),panOptions:i(),pinchOptions:i(),pressOptions:i(),rotateOptions:i(),swipeOptions:i(),tag:{type:String,default:"div"},enabled:{default:!0,type:[Boolean,Object]}},mounted:function(){this.$isServer||(this.hammer=new e.Manager(this.$el,this.options),this.recognizers={},this.setupBuiltinRecognizers(),this.setupCustomRecognizers(),this.updateEnabled(this.enabled))},destroyed:function(){this.$isServer||this.hammer.destroy()},watch:{enabled:{deep:!0,handler:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];(n=this).updateEnabled.apply(n,t);var n}}},methods:{setupBuiltinRecognizers:function(){for(var t=this,e=0;e<u.length;e++){var i=u[e];if(t._events[i]){var r=h[i],s=n({},a[r]||{},t[r+"Options"]);t.addRecognizer(r,s),t.addEvent(i)}}},setupCustomRecognizers:function(){for(var t=this,e=Object.keys(c),i=0;i<e.length;i++){var r=e[i];if(t._events[r]){var s=c[r],o=t[r+"Options"]||{},a=n({},s,o);t.addRecognizer(r,a,{mainGesture:a.type}),t.addEvent(r)}}},addRecognizer:function(t,n,i){void 0===i&&(i={});var o=i.mainGesture;if(!this.recognizers[t]){var a=new(e[r(o||t)])(s(n));this.recognizers[t]=a,this.hammer.add(a),a.recognizeWith(this.hammer.recognizers)}},addEvent:function(t){var e=this;this.hammer.on(t,function(n){return e.$emit(t,n)})},updateEnabled:function(t,e){var n=this;if(!0===t)this.enableAll();else if(!1===t)this.disableAll();else if("object"==typeof t)for(var i=Object.keys(t),r=0;r<i.length;r++){var s=i[r];n.recognizers[s]&&(t[s]?n.enable(s):n.disable(s))}},enable:function(t){var e=this.recognizers[t];e.options.enable||e.set({enable:!0})},disable:function(t){var e=this.recognizers[t];e.options.enable&&e.set({enable:!1})},toggle:function(t){var e=this.recognizers[t];e&&(e.options.enable?this.disable(t):this.enable(t))},enableAll:function(t){this.toggleAll({enable:!0})},disableAll:function(t){this.toggleAll({enable:!1})},toggleAll:function(t){for(var e=this,n=t.enable,i=Object.keys(this.recognizers),r=0;r<i.length;r++){var s=e.recognizers[i[r]];s.options.enable!==n&&s.set({enable:n})}},isEnabled:function(t){return this.recognizers[t]&&this.recognizers[t].options.enable}},render:function(t){return t(this.tag,{},this.$slots.default)}},p=!1,f={config:a,customEvents:c};f.install=function(t,e){void 0===e&&(e={});var i=e.name||"v-touch";t.component(i,n(l,{name:i})),p=!0}.bind(f),f.registerCustomEvent=function(t,e){if(void 0===e&&(e={}),p)return void console.warn("\n      [vue-touch]: Custom Event '"+t+"' couldn't be added to vue-touch.\n      Custom Events have to be registered before installing the plugin.\n      ");e.event=t,c[t]=e,l.props[t+"Options"]={type:Object,default:function(){return{}}}}.bind(f),f.component=l,t.exports=f})}])});