(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[930],{678:function(e){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.EmailObfuscate=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=r(n(1)),u=r(n(2)),a=r(n(3)),c=r(n(6)),s={name:"email",domain:"obfuscate",tld:"js",altText:"Email"},l=t.EmailObfuscate=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,e),this.el=t;var r=(0,o.default)(s,n);return window.HTMLCanvasElement?this._pseudoElement(r):this._simpleText(r)}return i(e,[{key:"_pseudoElement",value:function(e){var t=new u.default(this.el,e).determineStyle();return new a.default(this.el,t).create()}},{key:"_simpleText",value:function(e){return new c.default(this.el,e).create()}}]),e}();t.default=function(e,t){return new l(e,t)}},function(e,t){"use strict";var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=!function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(e){i[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(o){return!1}}()?function(e,t){for(var o,u,a=function(e){if(null==e)throw TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var s in o=Object(arguments[c]))r.call(o,s)&&(a[s]=o[s]);if(n){u=n(o);for(var l=0;l<u.length;l++)i.call(o,u[l])&&(a[u[l]]=o[u[l]])}}return a}:Object.assign},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=function(){function e(t,n){if(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e),!t)throw Error("Require DOM element");this.parent=t,this.options=n}return n(e,[{key:"determineStyle",value:function(){this._createElement(),this._insertElement();var e=this._computeStyle(),t=Number(e.fontSize.slice(0,-2)),n={font:e.fontSize+" "+e.fontFamily,fontSize:t,color:e.color,width:this.element.offsetWidth,height:this.element.offsetHeight,underline:"underline"===e.textDecoration,text:this._generateText()};return this.parent.removeChild(this.element),n}},{key:"_createElement",value:function(){this.element=document.createElement("a"),this.element.style.visibility="hidden",this.element.innerHTML=this._obfuscateText()}},{key:"_insertElement",value:function(){this.parent.appendChild(this.element)}},{key:"_computeStyle",value:function(){return window.getComputedStyle(this.element)}},{key:"_obfuscateText",value:function(){return"@."+this.options.tld+this.options.domain+this.options.name}},{key:"_generateText",value:function(){return this.options.name+"@"+this.options.domain+"."+this.options.tld}}]),e}();t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=r(n(4)),u=r(n(5)),a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"_createElement",value:function(){this._createCanvas(),this._createText()}},{key:"_createCanvas",value:function(){var e=this.parent.getElementsByTagName("canvas").length>0;e?this.element=this.parent.getElementsByTagName("canvas")[0]:this.element=document.createElement("canvas"),this.context=this.element.getContext("2d"),this._styleCanvas(),e||this.parent.appendChild(this.element)}},{key:"_styleCanvas",value:function(){var e=this.options.width,t=this.options.height,n=new u.default(this.context).calculate();this.element.width=e*n,this.element.height=t*n,this.element.style.width=e+"px",this.element.style.height=t+"px",this.context.scale(n,n),this.element.style.cursor="pointer"}},{key:"_createText",value:function(){if(this.context.textAlign="left",this.context.textBaseline="bottom",this.context.font=this.options.font,this.context.fillStyle=this.options.color,this.context.fillText(this.options.text,0,this.options.height),this.options.underline){var e=this.options.fontSize/10,t=this.options.height-e-e;this.context.fillRect(0,t,this.options.width,e)}}}]),t}(o.default);t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=function(){function e(t,n){if(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e),!t)throw Error("Require DOM element");if(!n)throw Error("Require options");this.parent=t,this.options=n}return n(e,[{key:"create",value:function(){return this._createElement(),this._addEvents(),this.element}},{key:"handleOnClick",value:function(){window.location.href="mailto:"+this.options.text}},{key:"_addEvents",value:function(){var e=this;this.parent.addEventListener?this.parent.addEventListener("click",function(){return e.handleOnClick()}):this.parent.attachEvent&&this.parent.attachEvent("onclick",function(){return e.handleOnClick()})}},{key:"_createElement",value:function(){}}]),e}();t.default=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=function(){function e(t){(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,e),this.context=t}return n(e,[{key:"calculate",value:function(){return this._devicePixelRatio()/this._backingStorePixelRatio()}},{key:"_devicePixelRatio",value:function(){return window.devicePixelRatio||1}},{key:"_backingStorePixelRatio",value:function(){return this.context.webkitBackingStorePixelRatio||this.context.mozBackingStorePixelRatio||this.context.msBackingStorePixelRatio||this.context.oBackingStorePixelRatio||this.context.backingStorePixelRatio||1}}]),e}();t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"_createElement",value:function(){var e=this.parent.getElementsByTagName("a").length>0;e?this.element=this.parent.getElementsByTagName("a")[0]:this.element=document.createElement("a"),this.element.innerHTML=this.options.altText,this._styleElement(),e||this.parent.appendChild(this.element)}},{key:"_styleElement",value:function(){this.element.style.cursor="pointer"}}]),t}(((r=n(4))&&r.__esModule?r:{default:r}).default);t.default=o}])},2761:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(7378);function i(e){return"number"==typeof e}function o(e){return"[object Object]"===Object.prototype.toString.call(e)}function u(e){return o(e)||Array.isArray(e)}function a(e){return Math.abs(e)}function c(e){return e?e/a(e):0}function s(e){return d(e).map(Number)}function l(e){return e[f(e)]}function f(e){return Math.max(0,e.length-1)}function d(e){return Object.keys(e)}function p(e,t){var n=a(e-t);function r(n){return n<e||n>t}return{length:n,max:t,min:e,constrain:function(n){return r(n)?n<e?e:t:n},reachedAny:r,reachedMax:function(e){return e>t},reachedMin:function(t){return t<e},removeOffset:function(e){return n?e-n*Math.ceil((e-t)/n):e}}}function h(){var e=[],t={add:function(n,r,i,o){return void 0===o&&(o=!1),n.addEventListener(r,i,o),e.push(function(){return n.removeEventListener(r,i,o)}),t},removeAll:function(){return e=e.filter(function(e){return e()}),t}};return t}function m(e){var t=e;function n(e){return t/=e,o}function r(e){return i(e)?e:e.get()}var o={add:function(e){return t+=r(e),o},divide:n,get:function(){return t},multiply:function(e){return t*=e,o},normalize:function(){return 0!==t&&n(t),o},set:function(e){return t=r(e),o},subtract:function(e){return t-=r(e),o}};return o}function v(e,t,n){var r="x"===e.scroll?function(e){return"translate3d(".concat(e,"px,0px,0px)")}:function(e){return"translate3d(0px,".concat(e,"px,0px)")},i=n.style,o=!1;return{clear:function(){o||(i.transform="",n.getAttribute("style")||n.removeAttribute("style"))},to:function(e){o||(i.transform=r(t.apply(e.get())))},toggleActive:function(e){o=!e}}}var g={align:"center",axis:"x",containScroll:"",direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,draggable:!0,inViewThreshold:0,loop:!1,skipSnaps:!1,speed:10,startIndex:0,active:!0};function y(){function e(e,t){return function e(t,n){return[t,n].reduce(function(t,n){return d(n).forEach(function(r){var i=t[r],u=n[r],a=o(i)&&o(u);t[r]=a?e(i,u):u}),t},{})}(e,t||{})}return{merge:e,areEqual:function(e,t){return JSON.stringify(d(e.breakpoints||{}))===JSON.stringify(d(t.breakpoints||{}))&&function e(t,n){var r=d(t),i=d(n);return r.length===i.length&&r.every(function(r){var i=t[r],o=n[r];return"function"==typeof i?"".concat(i)==="".concat(o):u(i)&&u(o)?e(i,o):i===o})}(e,t)},atMedia:function(t){var n=t.breakpoints||{},r=d(n).filter(function(e){return window.matchMedia(e).matches}).map(function(e){return n[e]}).reduce(function(t,n){return e(t,n)},{});return e(t,r)}}}function b(e,t,n){var r,o,u,d,x,w,E,_=h(),O=y(),S=function(){var e=y(),t=e.atMedia,n=e.areEqual,r=[],i=[];function o(e){var r=t(e.options);return function(){return!n(r,t(e.options))}}return{init:function(e,n){return i=e.map(o),(r=e.filter(function(e){return t(e.options).active})).forEach(function(e){return e.init(n)}),e.reduce(function(e,t){var n;return Object.assign(e,((n={})[t.name]=t,n))},{})},destroy:function(){r=r.filter(function(e){return e.destroy()})},haveChanged:function(){return i.some(function(e){return e()})}}}(),k=(r={},o={emit:function(e){return(r[e]||[]).forEach(function(t){return t(e)}),o},off:function(e,t){return r[e]=(r[e]||[]).filter(function(e){return e!==t}),o},on:function(e,t){return r[e]=(r[e]||[]).concat([t]),o}}),P=k.on,j=k.off,T=!1,M=O.merge(g,b.globalOptions),C=O.merge(M),A=[],B=0;function R(t,n){if(!T){var r,o;if(r="container"in e&&e.container,o="slides"in e&&e.slides,x="root"in e?e.root:e,w=r||x.children[0],E=o||[].slice.call(w.children),M=O.merge(M,t),B=(u=function(e,t,n,r,o){var u,d,g,y,b,x,w,E,_,O,S,k,P,j,T,M,C,A,B,R,N,z,I,L,D,H,q,V,F,U,W,G,J,X=r.align,Y=r.axis,Z=r.direction,K=r.startIndex,Q=r.inViewThreshold,$=r.loop,ee=r.speed,et=r.dragFree,en=r.slidesToScroll,er=r.skipSnaps,ei=r.containScroll,eo=t.getBoundingClientRect(),eu=n.map(function(e){return e.getBoundingClientRect()}),ea=(b="rtl"===Z?-1:1,{apply:function(e){return e*b}}),ec={scroll:x="y"===Y?"y":"x",cross:"y"===Y?"x":"y",startEdge:"y"===x?"top":"rtl"===Z?"right":"left",endEdge:"y"===x?"bottom":"rtl"===Z?"left":"right",measureSize:function(e){var t=e.width,n=e.height;return"x"===x?t:n}},es=ec.measureSize(eo),el={measure:function(e){return es*(e/100)}},ef=(u={start:function(){return 0},center:function(e){return(es-e)/2},end:function(e){return es-e}},{measure:function(e){return i(X)?es*Number(X):u[X](e)}}),ed=!$&&""!==ei,ep=(w=$||""!==ei,E=ec.measureSize,_=ec.startEdge,O=ec.endEdge,S=function(){if(!w)return 0;var e=eu[0];return a(eo[_]-e[_])}(),k=w?parseFloat(window.getComputedStyle(l(n)).getPropertyValue("margin-".concat(O))):0,P=eu.map(E),j=eu.map(function(e,t,n){var r=t===f(n);return t?r?P[t]+k:n[t+1][_]-e[_]:P[t]+S}).map(a),{slideSizes:P,slideSizesWithGaps:j}),eh=ep.slideSizes,em=ep.slideSizesWithGaps,ev=(T=i(en),{groupSlides:function(e){return T?s(e).filter(function(e){return e%en==0}).map(function(t){return e.slice(t,t+en)}):s(e).reduce(function(e,t){var n=em.slice(l(e),t+1).reduce(function(e,t){return e+t},0);return!t||n>es?e.concat(t):e},[]).map(function(t,n,r){return e.slice(t,r[n+1])})}}),eg=(M=ec.startEdge,C=ec.endEdge,B=(A=ev.groupSlides)(eu).map(function(e){return l(e)[C]-e[0][M]}).map(a).map(ef.measure),d=l(R=eu.map(function(e){return eo[M]-e[M]}).map(function(e){return-a(e)}))-l(em),N=A(R).map(function(e){return e[0]}).map(function(e,t,n){var r=t===f(n);return ed&&!t?0:ed&&r?d:e+B[t]}),{snaps:R,snapsAligned:N}),ey=eg.snaps,eb=eg.snapsAligned,ex=-l(ey)+l(em),ew=(z=p(-ex+es,eb[0]),I=eb.map(z.constrain),{snapsContained:function(){if(ex<=es)return[z.max];if("keepSnaps"===ei)return I;var e,t,n=(e=I[0],t=l(I),p(I.lastIndexOf(e),I.indexOf(t)+1)),r=n.min,i=n.max;return I.slice(r,i)}()}).snapsContained,eE=ed?ew:eb,e_={limit:(g=eE[0],y=l(eE),p($?g-ex:y,g))}.limit,eO=function e(t,n,r){var i=p(0,t),o=i.min,u=i.constrain,c=t+1,s=l(n);function l(e){return r?a((c+e)%c):u(e)}function f(e){return s=l(e),d}var d={add:function(e){return f(s+e)},clone:function(){return e(t,s,r)},get:function(){return s},set:f,min:o,max:t};return d}(f(eE),K,$),eS=eO.clone(),ek=s(n),eP=function(e){var t=0;function n(e,n){return function(){!!t===e&&n()}}function r(){t=window.requestAnimationFrame(e)}return{proceed:n(!0,r),start:n(!1,r),stop:n(!0,function(){window.cancelAnimationFrame(t),t=0})}}(function(){$||ez.scrollBounds.constrain(ez.dragHandler.pointerDown()),ez.scrollBody.seek(eM).update();var e=ez.scrollBody.settle(eM);e&&!ez.dragHandler.pointerDown()&&(ez.animation.stop(),o.emit("settle")),e||o.emit("scroll"),$&&(ez.scrollLooper.loop(ez.scrollBody.direction()),ez.slideLooper.loop()),ez.translate.to(eT),ez.animation.proceed()}),ej=eE[eO.get()],eT=m(ej),eM=m(ej),eC=function(e,t,n){var r=m(0),i=m(0),o=m(0),u=0,a=t,s=n;function l(e){return a=e,d}function f(e){return s=e,d}var d={direction:function(){return u},seek:function(t){o.set(t).subtract(e);var n=0+(a-0)*((o.get()-0)/100);return u=c(o.get()),o.normalize().multiply(n).subtract(r),o.divide(s),i.add(o),d},settle:function(t){var n=!(Math.round((t.get()-e.get())*100)/100);return n&&e.set(t),n},update:function(){r.add(i),e.add(r),i.multiply(0)},useBaseMass:function(){return f(n)},useBaseSpeed:function(){return l(t)},useMass:f,useSpeed:l};return d}(eT,ee,1),eA=function(e,t,n,r,i){var o=r.reachedAny,u=r.removeOffset,s=r.constrain;function l(e){return e.concat().sort(function(e,t){return a(e)-a(t)})[0]}function f(t,r){var i=[t,t+n,t-n];return e?r?l(i.filter(function(e){return c(e)===r})):l(i):i[0]}return{byDistance:function(n,r){var c,l=i.get()+n,d=(c=e?u(l):s(l),{index:t.map(function(e){return e-c}).map(function(e){return f(e,0)}).map(function(e,t){return{diff:e,index:t}}).sort(function(e,t){return a(e.diff)-a(t.diff)})[0].index,distance:c}),p=d.index,h=d.distance,m=!e&&o(l);if(!r||m)return{index:p,distance:n};var v=n+f(t[p]-h,0);return{index:p,distance:v}},byIndex:function(e,n){var r=f(t[e]-i.get(),n);return{index:e,distance:r}},shortcut:f}}($,eE,ex,e_,eM),eB=function(e,t,n,r,i,o){function u(r){var u=r.distance,a=r.index!==t.get();u&&(e.start(),i.add(u)),a&&(n.set(t.get()),t.set(r.index),o.emit("select"))}return{distance:function(e,t){u(r.byDistance(e,t))},index:function(e,n){var i=t.clone().set(e);u(r.byIndex(i.get(),n))}}}(eP,eO,eS,eA,eM,o),eR=function(e,t,n,r,i,o,u){var a=i.removeOffset,c=i.constrain,s=o?[0,t,-t]:[0],l=f(s,u);function f(t,i){var o,u=(o=i||0,n.map(function(e){return p(.5,e-.5).constrain(e*o)}));return(t||s).reduce(function(t,i){var o=r.map(function(t,r){return{start:t-n[r]+u[r]+i,end:t+e-u[r]+i,index:r}});return t.concat(o)},[])}return{check:function(e,t){var n=o?a(e):c(e);return(t||l).reduce(function(e,t){var r=t.index,i=t.start,o=t.end;return!(-1!==e.indexOf(r))&&i<n&&o>n?e.concat([r]):e},[])},findSlideBounds:f}}(es,ex,eh,ey,e_,$,Q),eN=function(e,t,n,r,i,o,u,s,l,f,d,p,v,g,y,b){var x=e.cross,w=["INPUT","SELECT","TEXTAREA"],E=m(0),_=h(),O=h(),S=v.measure(20),k={mouse:300,touch:400},P={mouse:500,touch:600},j=y?5:16,T=0,M=0,C=!1,A=!1,B=!1,R=!1;function N(e){if(!(R="mousedown"===e.type)||0===e.button){var t,u,c=a(r.get()-o.get())>=2,s=R||!c,f=(t=e.target.nodeName||"",!(w.indexOf(t)>-1)),d=c||R&&f;C=!0,i.pointerDown(e),E.set(r),r.set(o),l.useBaseMass().useSpeed(80),u=R?document:n,O.add(u,"touchmove",z).add(u,"touchend",I).add(u,"mousemove",z).add(u,"mouseup",I),T=i.readPoint(e),M=i.readPoint(e,x),p.emit("pointerDown"),s&&(B=!1),d&&e.preventDefault()}}function z(e){if(!A&&!R){if(!e.cancelable)return I(e);var n=i.readPoint(e),o=i.readPoint(e,x);if(!(A=a(n-T)>a(o-M))&&!B)return I(e)}var c=i.pointerMove(e);!B&&c&&(B=!0),u.start(),r.add(t.apply(c)),e.preventDefault()}function I(e){var n,o,u,h,m=f.byDistance(0,!1).index!==d.get(),v=i.pointerUp(e)*(y?P:k)[R?"mouse":"touch"],x=(n=t.apply(v),u=(o=d.clone().add(-1*c(n))).get()===d.min||o.get()===d.max,h=f.byDistance(n,!y).distance,y||a(n)<S?h:!g&&u?.4*h:b&&m?.5*h:f.byIndex(o.get(),0).distance),w=function(e,t){if(0===e||0===t||a(e)<=a(t))return 0;var n,r,i=(n=a(e),r=a(t),a(n-r));return a(i/e)}(v,x),_=a(r.get()-E.get())>=.5,T=m&&w>.75,M=a(v)<S;_&&!R&&(B=!0),A=!1,C=!1,O.removeAll(),l.useSpeed(M?9:T?10:j).useMass(T?1+2.5*w:1),s.distance(x,!y),R=!1,p.emit("pointerUp")}function L(e){B&&e.preventDefault()}return{addActivationEvents:function(){_.add(n,"touchmove",function(){}).add(n,"touchend",function(){}).add(n,"touchstart",N).add(n,"mousedown",N).add(n,"touchcancel",I).add(n,"contextmenu",I).add(n,"click",L)},clickAllowed:function(){return!B},pointerDown:function(){return C},removeAllEvents:function(){_.removeAll(),O.removeAll()}}}(ec,ea,e,eM,function(e){var t,n;function r(e){return"undefined"!=typeof TouchEvent&&e instanceof TouchEvent}function i(e){return e.timeStamp}function o(t,n){var i=n||e.scroll;return(r(t)?t.touches[0]:t)["client".concat("x"===i?"X":"Y")]}return{isTouchEvent:r,pointerDown:function(e){return t=e,n=e,o(e)},pointerMove:function(e){var r=o(e)-o(n),u=i(e)-i(t)>170;return n=e,u&&(t=e),r},pointerUp:function(e){if(!t||!n)return 0;var r=o(n)-o(t),u=i(e)-i(t),c=i(e)-i(n)>170,s=r/u;return u&&!c&&a(s)>.1?s:0},readPoint:o}}(ec),eT,eP,eB,eC,eA,eO,o,el,$,et,er),ez={containerRect:eo,slideRects:eu,animation:eP,axis:ec,direction:ea,dragHandler:eN,eventStore:h(),percentOfView:el,index:eO,indexPrevious:eS,limit:e_,location:eT,options:r,scrollBody:eC,scrollBounds:(D=el.measure(10),H=el.measure(50),q=!1,{constrain:function(e){if(!q&&e_.reachedAny(eM.get())&&e_.reachedAny(eT.get())){var t=e_.reachedMin(eT.get())?"min":"max",n=a(e_[t]-eT.get()),r=eM.get()-eT.get();eM.subtract(r*Math.min(n/H,.85)),!e&&a(r)<D&&(eM.set(e_.constrain(eM.get())),eC.useSpeed(10).useMass(3))}},toggleActive:function(e){q=!e}}),scrollLooper:(V=[eT,eM],U=(F=p(e_.min+.1,e_.max+.1)).reachedMin,W=F.reachedMax,{loop:function(e){if(1===e?W(eT.get()):-1===e&&U(eT.get())){var t=ex*(-1*e);V.forEach(function(e){return e.add(t)})}}}),scrollProgress:(G=e_.max,J=e_.length,{get:function(e){return-((e-G)/J)}}),scrollSnaps:eE,scrollTarget:eA,scrollTo:eB,slideLooper:function(e,t,n,r,i,o,u,a,c){var l=s(i),f=h(p(s(i).reverse(),o[0]-1),"end").concat(h(p(l,n-o[0]-1),"start"));function d(e,t){return e.reduce(function(e,t){return e-i[t]},t)}function p(e,t){return e.reduce(function(e,n){return d(e,t)>0?e.concat([n]):e},[])}function h(n,i){var o="start"===i,s=u.findSlideBounds([o?-r:r]);return n.map(function(n){var i=o?0:-r,u=o?r:0,l=s.filter(function(e){return e.index===n})[0][o?"end":"start"],f=m(-1),d=m(-1),p=v(e,t,c[n]);return{index:n,location:d,translate:p,target:function(){return f.set(a.get()>l?i:u)}}})}return{canLoop:function(){return f.every(function(e){var t=e.index;return .1>=d(l.filter(function(e){return e!==t}),n)})},clear:function(){f.forEach(function(e){return e.translate.clear()})},loop:function(){f.forEach(function(e){var t=e.target,n=e.translate,r=e.location,i=t();i.get()!==r.get()&&(0===i.get()?n.clear():n.to(i),r.set(i))})},loopPoints:f}}(ec,ea,es,ex,em,eE,eR,eT,n),slidesToScroll:ev,slidesInView:eR,slideIndexes:ek,target:eM,translate:v(ec,ea,t)};return ez}(x,w,E,C=O.atMedia(M),k)).axis.measureSize(x.getBoundingClientRect()),!C.active)return z();if(u.translate.to(u.location),A=n||A,d=S.init(A,H),C.loop){if(!u.slideLooper.canLoop())return z(),R({loop:!1},n);u.slideLooper.loop()}C.draggable&&w.offsetParent&&E.length&&u.dragHandler.addActivationEvents()}}function N(e,t){var n=D();z(),R(O.merge({startIndex:n},e),t),k.emit("reInit")}function z(){u.dragHandler.removeAllEvents(),u.animation.stop(),u.eventStore.removeAll(),u.translate.clear(),u.slideLooper.clear(),S.destroy()}function I(e){var t=u[e?"target":"location"].get(),n=C.loop?"removeOffset":"constrain";return u.slidesInView.check(u.limit[n](t))}function L(e,t,n){C.active&&!T&&(u.scrollBody.useBaseMass().useSpeed(t?100:C.speed),u.scrollTo.index(e,n||0))}function D(){return u.index.get()}var H={canScrollNext:function(){return u.index.clone().add(1).get()!==D()},canScrollPrev:function(){return u.index.clone().add(-1).get()!==D()},clickAllowed:function(){return u.dragHandler.clickAllowed()},containerNode:function(){return w},internalEngine:function(){return u},destroy:function(){T||(T=!0,_.removeAll(),z(),k.emit("destroy"))},off:j,on:P,plugins:function(){return d},previousScrollSnap:function(){return u.indexPrevious.get()},reInit:N,rootNode:function(){return x},scrollNext:function(e){L(u.index.clone().add(1).get(),!0===e,-1)},scrollPrev:function(e){L(u.index.clone().add(-1).get(),!0===e,1)},scrollProgress:function(){return u.scrollProgress.get(u.location.get())},scrollSnapList:function(){return u.scrollSnaps.map(u.scrollProgress.get)},scrollTo:L,selectedScrollSnap:D,slideNodes:function(){return E},slidesInView:I,slidesNotInView:function(e){var t=I(e);return u.slideIndexes.filter(function(e){return -1===t.indexOf(e)})}};return R(t,n),_.add(window,"resize",function(){var e=O.atMedia(M),t=!O.areEqual(e,C),n=B!==u.axis.measureSize(x.getBoundingClientRect()),r=S.haveChanged();(n||t||r)&&N(),k.emit("resize")}),setTimeout(function(){return k.emit("init")},0),H}function x(e){return e.concat().sort(function(e,t){return e.name>t.name?1:-1}).map(function(e){return e.options})}function w(e,t){void 0===e&&(e={}),void 0===t&&(t=[]);var n=(0,r.useRef)(b.optionsHandler()),i=(0,r.useRef)(e),o=(0,r.useRef)(t),u=(0,r.useState)(),a=u[0],c=u[1],s=(0,r.useState)(),l=s[0],f=s[1],d=(0,r.useCallback)(function(){a&&a.reInit(i.current,o.current)},[a]);return(0,r.useEffect)(function(){if("undefined"!=typeof window&&window.document&&window.document.createElement&&l){b.globalOptions=w.globalOptions;var e=b(l,i.current,o.current);return c(e),function(){return e.destroy()}}c(void 0)},[l,c]),(0,r.useEffect)(function(){n.current.areEqual(i.current,e)||(i.current=e,d())},[e,d]),(0,r.useEffect)(function(){!function(e,t){if(e.length!==t.length)return!1;var n=b.optionsHandler().areEqual,r=x(e),i=x(t);return r.every(function(e,t){return n(e,i[t])})}(o.current,t)&&(o.current=t,d())},[t,d]),[f,a]}b.globalOptions=void 0,b.optionsHandler=y,w.globalOptions=void 0},8038:function(e,t,n){e.exports=n(3057)}}]);