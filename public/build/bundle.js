var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function f(){return s(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){(null!=e||t.value)&&(t.value=e)}function y(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let m;function b(t){m=t}const g=[],v=[],x=[],k=[],E=Promise.resolve();let w=!1;function $(t){x.push(t)}const S=new Set;function _(){do{for(;g.length;){const t=g.shift();b(t),T(t.$$)}for(;v.length;)v.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];S.has(e)||(S.add(e),e())}x.length=0}while(g.length);for(;k.length;)k.pop()();w=!1,S.clear()}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($)}}const A=new Set;function O(t,e){t&&t.i&&(A.delete(t),t.i(e))}function C(t,n,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(n,i),$(()=>{const n=c.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]}),u.forEach($)}function j(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function L(t,e){-1===t.$$.dirty[0]&&(g.push(t),w||(w=!0,E.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(e,r,i,a,c,l,u=[-1]){const s=m;b(e);const f=r.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:n(),dirty:u};let p=!1;d.ctx=i?i(e,f,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),p&&L(e,t)),n}):[],d.update(),p=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),r.target&&(r.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(r.target)):d.fragment&&d.fragment.c(),r.intro&&O(e.$$.fragment),C(e,r.target,r.anchor),_()),b(s)}class N{$destroy(){j(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function P(e){let n,o,r,i,d,h;return{c(){n=u("header"),o=u("nav"),r=u("a"),i=s(e[1]),d=f(),h=u("h1"),h.textContent="Indicação de parceiro",p(r,"href",e[1]),p(r,"title","Website"),p(r,"target","_blank"),y(r,"background-image","url("+e[0]+")"),p(r,"class","svelte-3ct4xk"),p(h,"class","svelte-3ct4xk"),p(o,"class","svelte-3ct4xk"),p(n,"class","svelte-3ct4xk")},m(t,e){c(t,n,e),a(n,o),a(o,r),a(r,i),a(o,d),a(o,h)},p(t,[e]){2&e&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(i,t[1]),2&e&&p(r,"href",t[1]),1&e&&y(r,"background-image","url("+t[0]+")")},i:t,o:t,d(t){t&&l(n)}}}function R(t,e,n){let{logo:o}=e,{website:r}=e;return t.$set=t=>{"logo"in t&&n(0,o=t.logo),"website"in t&&n(1,r=t.website)},[o,r]}class H extends N{constructor(t){super(),M(this,t,R,P,i,{logo:0,website:1})}}function F(e){return{c:t,m:t,d:t}}function I(t){let e;return{c(){e=u("small"),p(e,"data-clipboard-text",t[2]),p(e,"class","clipboard svelte-bbtf7x")},m(t,n){c(t,e,n)},p(t,n){4&n&&p(e,"data-clipboard-text",t[2])},d(t){t&&l(e)}}}function q(t){let e,n,r,i,s,y,m,b,g,v,x,k,E,w,$,S,_,T,L,M;const N=new H({props:{website:"https://a55.tech",logo:"https://a55-cdn.s3-sa-east-1.amazonaws.com/I%CC%81CONE+E+LOGO/LOGO/A55_BRANCO.png",$$slots:{default:[F]},$$scope:{ctx:t}}});let P=t[0].length&&I(t);return{c(){var t;e=u("div"),(t=N.$$.fragment)&&t.c(),n=f(),r=u("main"),i=u("h2"),i.textContent="Criar link de indicação",s=f(),y=u("label"),m=u("b"),m.textContent="Seu nome ou como vc quer ser identificado:",b=f(),g=u("input"),v=f(),x=u("label"),k=u("input"),E=f(),w=u("b"),w.textContent="Deseja enviar o formulário em espanhol?",$=f(),S=u("div"),_=u("input"),T=f(),P&&P.c(),p(i,"class","svelte-bbtf7x"),p(m,"class","svelte-bbtf7x"),p(g,"placeholder","Nome do parceiro"),p(g,"type","text"),p(g,"class","svelte-bbtf7x"),p(y,"class","svelte-bbtf7x"),p(k,"type","checkbox"),p(k,"class","svelte-bbtf7x"),p(w,"class","svelte-bbtf7x"),p(x,"class","svelte-bbtf7x"),_.disabled=!0,p(_,"type","text"),p(_,"class","svelte-bbtf7x"),p(S,"class","result svelte-bbtf7x"),p(r,"class","svelte-bbtf7x"),p(e,"class","refereer svelte-bbtf7x")},m(o,l){c(o,e,l),C(N,e,null),a(e,n),a(e,r),a(r,i),a(r,s),a(r,y),a(y,m),a(y,b),a(y,g),h(g,t[0]),a(r,v),a(r,x),a(x,k),k.checked=t[1],a(x,E),a(x,w),a(r,$),a(r,S),a(S,_),h(_,t[2]),a(S,T),P&&P.m(S,null),L=!0,M=[d(g,"input",t[5]),d(k,"change",t[6]),d(_,"input",t[7])]},p(t,[e]){const n={};256&e&&(n.$$scope={dirty:e,ctx:t}),N.$set(n),1&e&&g.value!==t[0]&&h(g,t[0]),2&e&&(k.checked=t[1]),4&e&&_.value!==t[2]&&h(_,t[2]),t[0].length?P?P.p(t,e):(P=I(t),P.c(),P.m(S,null)):P&&(P.d(1),P=null)},i(t){L||(O(N.$$.fragment,t),L=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(A.has(t))return;A.add(t),(void 0).c.push(()=>{A.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}(N.$$.fragment,t),L=!1},d(t){t&&l(e),j(N),P&&P.d(),o(M)}}}let z="https://apply.a55.tech/";function U(t,e,n){let o,r,i,a="s",c=!1;return t.$$.update=()=>{1&t.$$.dirty&&n(3,o=`${z}?referee=${encodeURI(a)}`),1&t.$$.dirty&&n(4,r=`${z}mexico/?referee=${encodeURI(a)}`),26&t.$$.dirty&&n(2,i=c?r:o)},[a,c,i,o,r,function(){a=this.value,n(0,a)},function(){c=this.checked,n(1,c)},function(){i=this.value,n(2,i),n(1,c),n(4,r),n(3,o),n(0,a)}]}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var B,G=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,e){
/*!
     * clipboard.js v2.0.4
     * https://zenorocha.github.io/clipboard.js
     * 
     * Licensed MIT © Zeno Rocha
     */
var n;n=function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=l(n(1)),a=l(n(3)),c=l(n(4));function l(t){return t&&t.__esModule?t:{default:t}}var u=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===o(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,c.default)(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new i.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return s("action",t)}},{key:"defaultTarget",value:function(t){var e=s("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return s("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),e}(a.default);function s(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=u},function(t,e,n){var o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=n(2),c=(o=a)&&o.__esModule?o:{default:o},l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}return i(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,c.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,c.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=l},function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n},function(t,e,n){var o=n(5),r=n(6);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!o.string(e))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(o.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}(t,e,n);if(o.string(t))return function(t,e,n){return r(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var o=n(7);function r(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function i(t,e,n,r){return function(n){n.delegateTarget=o(n.target,e),n.delegateTarget&&r.call(t,n)}}t.exports=function(t,e,n,o,i){return"function"==typeof t.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return r(t,e,n,o,i)})))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}}])},t.exports=n()}));const Y=new((B=G)&&B.__esModule&&Object.prototype.hasOwnProperty.call(B,"default")?B.default:B)(".clipboard");return Y.on("success",(function(t){const e=t.trigger.parentNode;e.classList.add("--copied"),setTimeout(()=>{e.classList.remove("--copied")},1300),t.clearSelection()})),Y.on("error",(function(t){console.error("Action:",t.action),console.error("Trigger:",t.trigger)})),new class extends N{constructor(t){super(),M(this,t,U,q,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
