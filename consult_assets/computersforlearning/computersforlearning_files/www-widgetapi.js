(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function r(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&da(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;da(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&da(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function v(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.N=b.prototype}
function ra(){this.s=!1;this.j=null;this.h=void 0;this.g=1;this.m=this.l=0;this.G=this.i=null}
function ta(a){if(a.s)throw new TypeError("Generator is already running");a.s=!0}
ra.prototype.B=function(a){this.h=a};
function ua(a,b){a.i={Va:b,cb:!0};a.g=a.l||a.m}
ra.prototype.return=function(a){this.i={return:a};this.g=this.m};
function x(a,b,c){a.g=c;return{value:b}}
ra.prototype.v=function(a){this.g=a};
function wa(a,b,c){a.l=b;void 0!=c&&(a.m=c)}
function xa(a,b){a.g=b;a.l=0}
function za(a){a.l=0;var b=a.i.Va;a.i=null;return b}
function Aa(a){a.G=[a.i];a.l=0;a.m=0}
function Ba(a){var b=a.G.splice(0)[0];(b=a.i=a.i||b)?b.cb?a.g=a.l||a.m:void 0!=b.v&&a.m<b.v?(a.g=b.v,a.i=null):a.g=a.m:a.g=0}
function Ca(a){this.g=new ra;this.h=a}
function Da(a,b){ta(a.g);var c=a.g.j;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.g.j,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.s=!1,e;var f=e.value}catch(g){return a.g.j=null,ua(a.g,g),Fa(a)}a.g.j=null;d.call(a.g,f);return Fa(a)}
function Fa(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.s=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,ua(a.g,c)}a.g.s=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.cb)throw b.Va;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){ta(a.g);a.g.j?b=Ea(a,a.g.j.next,b,a.g.B):(a.g.B(b),b=Fa(a));return b};
this.throw=function(b){ta(a.g);a.g.j?b=Ea(a,a.g.j["throw"],b,a.g.B):(ua(a.g,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function y(a){return Ha(new Ga(new Ca(a)))}
function Ia(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
r("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
r("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.h=[];this.s=!1;var h=this.j();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.m()})}this.g.push(g)};
var e=fa.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.m=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.j(l)}}}this.g=null};
c.prototype.j=function(g){this.i(function(){throw g;})};
b.prototype.j=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Fa),reject:g(this.m)}};
b.prototype.Fa=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.mb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.Ea(g):this.l(g)}};
b.prototype.Ea=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.nb(h,g):this.l(g)};
b.prototype.m=function(g){this.B(2,g)};
b.prototype.l=function(g){this.B(1,g)};
b.prototype.B=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;2===this.g&&this.Ga();this.G()};
b.prototype.Ga=function(){var g=this;e(function(){if(g.Z()){var h=fa.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.Z=function(){if(this.s)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.G=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.mb=function(g){var h=this.j();g.va(h.resolve,h.reject)};
b.prototype.nb=function(g,h){var k=this.j();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,q){return"function"==typeof t?function(w){try{l(t(w))}catch(A){m(A)}}:q}
var l,m,p=new b(function(t,q){l=t;m=q});
this.va(k(g,l),k(h,m));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.va=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.h?f.h(k):this.h.push(k);this.s=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).va(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(w){return function(A){t[w]=A;q--;0==q&&l(t)}}
var t=[],q=0;do t.push(void 0),q++,d(k.value).va(p(t.length-1),m),k=h.next();while(!k.done)})};
return b});
r("WeakMap",function(a){function b(k){this.g=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ja(k,g)){var l=new c;da(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.g]=l;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.g]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.g)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.g)?delete k[g][this.g]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.g;return ha(function(){if(l){for(;l.head!=h.g;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&ja(h.data_,l))for(h=0;h<m.length;h++){var p=m[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:h,entry:p}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.g=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.g,previous:this.g.previous,head:this.g,key:h,value:k},l.list.push(l.entry),this.g.previous.next=l.entry,this.g.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.g=this.g.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
r("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
r("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
r("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
r("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
r("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
r("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
r("Object.setPrototypeOf",function(a){return a||qa});
r("Set",function(a){function b(c){this.g=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
r("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
var z=this||self;function B(a,b,c){a=a.split(".");c=c||z;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function C(a,b){a=a.split(".");b=b||z;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Pa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Va=Ta:Va=Ua;return Va.apply(null,arguments)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.dc=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Wa(a){return a}
;function Xa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Xa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
D(Xa,Error);Xa.prototype.name="CustomError";function Za(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.j=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}
;function $a(){}
function ab(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var bb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},E=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},cb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
E(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},db=Array.prototype.every?function(a,b){return Array.prototype.every.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&!b.call(void 0,d[e],e,a))return!1;
return!0};
function eb(a,b){b=bb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function fb(a){return Array.prototype.concat.apply([],arguments)}
function gb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function hb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ib(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function jb(a){var b=lb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function nb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=nb(a[c]);return b}
var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var qb;function wb(){}
function xb(a){return new wb(yb,a)}
var yb={};xb("");var zb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ab=/&/g,Bb=/</g,Cb=/>/g,Db=/"/g,Eb=/'/g,Fb=/\x00/g,Gb=/[\x00&<>"']/;function Hb(a,b){this.g=b===Ib?a:""}
Hb.prototype.toString=function(){return this.g.toString()};
var Ib={},Jb=new Hb("about:invalid#zClosurez",Ib);function Kb(){var a=z.navigator;return a&&(a=a.userAgent)?a:""}
function F(a){return-1!=Kb().indexOf(a)}
;function Lb(){return(F("Chrome")||F("CriOS"))&&!F("Edge")||F("Silk")}
;var Mb={};function Nb(a){this.g=Mb===Mb?a:""}
Nb.prototype.toString=function(){return this.g.toString()};var Sb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tb(a){return a?decodeURI(a):a}
function Ub(a){return Tb(a.match(Sb)[3]||null)}
function Vb(a){var b=a.match(Sb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Wb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Wb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Xb(a){var b=[],c;for(c in a)Wb(c,a[c],b);return b.join("&")}
var Yb=/#|$/;function Zb(a,b){var c=a.search(Yb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function $b(a){z.setTimeout(function(){throw a;},0)}
;function ac(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function bc(a){bc[" "](a);return a}
bc[" "]=function(){};var cc=F("Opera"),dc=F("Trident")||F("MSIE"),ec=F("Edge"),fc=F("Gecko")&&!(-1!=Kb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),gc=-1!=Kb().toLowerCase().indexOf("webkit")&&!F("Edge");function hc(){var a=z.document;return a?a.documentMode:void 0}
var ic;a:{var jc="",kc=function(){var a=Kb();if(fc)return/rv:([^\);]+)(\)|;)/.exec(a);if(ec)return/Edge\/([\d\.]+)/.exec(a);if(dc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(gc)return/WebKit\/(\S+)/.exec(a);if(cc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
kc&&(jc=kc?kc[1]:"");if(dc){var lc=hc();if(null!=lc&&lc>parseFloat(jc)){ic=String(lc);break a}}ic=jc}var mc=ic,nc;if(z.document&&dc){var pc=hc();nc=pc?pc:parseInt(mc,10)||void 0}else nc=void 0;var qc=nc;var rc=ac()||F("iPod"),sc=F("iPad");!F("Android")||Lb();Lb();var tc=F("Safari")&&!(Lb()||F("Coast")||F("Opera")||F("Edge")||F("Edg/")||F("OPR")||F("Firefox")||F("FxiOS")||F("Silk")||F("Android"))&&!(ac()||F("iPad")||F("iPod"));var uc={},vc=null;function wc(a,b){Oa(a);void 0===b&&(b=0);xc();b=uc[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function yc(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;zc(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function zc(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=vc[l];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
xc();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function xc(){if(!vc){vc={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));uc[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===vc[f]&&(vc[f]=e)}}}}
;var Ac="undefined"!==typeof Uint8Array;function Bc(a){return Ac&&null!=a&&a instanceof Uint8Array}
var Cc={};var Dc;function Ec(){if(Cc!==Cc)throw Error("illegal external caller");}
function Fc(a){Ec();this.oa=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Fc.prototype.za=function(){return null==this.oa};
Fc.prototype.sizeBytes=function(){Ec();var a=this.oa;null==a||Bc(a)||("string"===typeof a?a=yc(a):(Na(a),a=null));return(a=null==a?a:this.oa=a)?a.length:0};var Gc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Kc(a,b){Object.isFrozen(a)||(Gc?a[Gc]|=b:void 0!==a.L?a.L|=b:Object.defineProperties(a,{L:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function Lc(a,b){Object.isExtensible(a)&&(Gc?a[Gc]&&(a[Gc]&=~b):void 0!==a.L&&(a.L&=~b))}
function Mc(a){var b;Gc?b=a[Gc]:b=a.L;return null==b?0:b}
function Nc(a,b){Gc?a[Gc]=b:void 0!==a.L?a.L=b:Object.defineProperties(a,{L:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function Oc(a){Kc(a,1);return a}
function Pc(a){Kc(a,17);return a}
function H(a){return a?!!(Mc(a)&2):!1}
function Qc(a){Kc(a,16);return a}
function Rc(a){if(!Array.isArray(a))throw Error("cannot mark non-array as shared mutably");Lc(a,16)}
function Sc(a,b){Nc(b,(Mc(a)|0)&-51)}
;var Tc={};function Uc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Vc,Wc=Object,Xc=Wc.freeze,Yc=[];Kc(Yc,3);var Zc=Xc.call(Wc,Yc);function $c(a){if(H(a.o))throw Error("Cannot mutate an immutable Message");}
;function ad(a){return a.displayName||a.name||"unknown type name"}
function bd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+ad(b)+" but got "+(a&&ad(a.constructor)));return a}
;function cd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(Bc(a))return wc(a);if(a instanceof Fc){var b=a.oa;return null==b?"":"string"===typeof b?b:a.oa=wc(b)}}}return a}
;function dd(a,b,c,d){if(null!=a){if(Array.isArray(a))a=ed(a,b,c,void 0!==d);else if(Uc(a)){var e={},f;for(f in a)e[f]=dd(a[f],b,c,d);a=e}else a=b(a,d);return a}}
function ed(a,b,c,d){d=d?!!(Mc(a)&16):void 0;var e=Array.prototype.slice.call(a);c(a,e);for(a=0;a<e.length;a++)e[a]=dd(e[a],b,c,d);return e}
function fd(a){return a.Ma===Tc?a.toJSON():cd(a)}
function gd(a){if(!a)return a;if("object"===typeof a){if(Bc(a))return new Uint8Array(a);if(a.Ma===Tc)return a.clone()}return a}
function hd(){}
;function id(a,b,c){return-1===b?null:b>=a.V?a.D?a.D[b]:void 0:(void 0===c?0:c)&&a.D&&(c=a.D[b],null!=c)?c:a.o[b+a.R]}
function I(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||$c(a);a.bb&&(a.bb=void 0);if(b>=a.V||d)return(a.D||(a.D=a.o[a.V+a.R]={}))[b]=c,a;void 0!==a.D&&a.V>=a.o.length?(d=a.o.length-1,e=b+a.R,e>=d?(a.o[d]=void 0,a.o[e]=c,a.o.push(a.D)):a.o[e]=c):a.o[b+a.R]=c;void 0!==a.D&&b in a.D&&delete a.D[b];return a}
function jd(a,b,c,d){var e=id(a,b,d);Array.isArray(e)||(e=Zc);var f=Mc(e);f&1||Oc(e);H(a.o)?(f&2||Kc(e,2),c&1||Object.freeze(e)):e===Zc||!(c&1&&c&2)&&f&2?(e=Oc(Array.prototype.slice.call(e)),I(a,b,e,d)):!(c&2)&&f&16&&Rc(e);return e}
function kd(a,b,c,d){$c(a);(c=ld(a,c))&&c!==b&&null!=d&&I(a,c,void 0,!1);I(a,b,d)}
function ld(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=id(a,e)&&(0!==c&&I(a,c,void 0,!1,!0),c=e)}return c}
function md(a,b,c){var d=void 0===d?!1:d;var e=id(a,c,d);var f=!1;var g=null==e||"object"!==typeof e||(f=Array.isArray(e))||e.Ma!==Tc?f?new b(e):void 0:e;g!==e&&null!=g&&(I(a,c,g,d,!0),Kc(g.o,Mc(a.o)&-33));b=g;if(null==b)return b;H(b.o)&&!H(a.o)&&(b=nd(b),I(a,c,b,d));return b}
function od(a,b,c,d,e){e=void 0===e?!0:e;a.g||(a.g={});var f=a.g[c],g=jd(a,c,3,d),h=H(a.o);if(f)h||(Object.isFrozen(f)?e||(f=Array.prototype.slice.call(f),a.g[c]=f):e&&Object.freeze(f));else{f=[];var k=!!(Mc(a.o)&16),l=H(g);!h&&l&&(g=Oc(Array.prototype.slice.call(g)),I(a,c,g,d));d=l;for(var m=0;m<g.length;m++){var p=g[m];d=d||H(p);var t=b,q=k,w=!1;w=void 0===w?!1:w;q=void 0===q?!1:q;p=Array.isArray(p)?new t(q?Qc(p):p):w?new t:void 0;void 0!==p&&(f.push(p),l&&Kc(p.o,2))}a.g[c]=f;a=g;b=!d;Object.isFrozen(a)||
(c=Mc(a)|33,Nc(a,b?c|8:c&-9));(h||e&&l)&&Kc(f,2);(h||e)&&Object.freeze(f)}return f}
function J(a,b,c,d){$c(a);null!=d?bd(d,b):d=void 0;return I(a,c,d)}
function pd(a,b,c,d,e){$c(a);null!=e?bd(e,b):e=void 0;kd(a,c,d,e)}
function qd(a,b,c,d){$c(a);if(null!=d){var e=Oc([]);for(var f=!1,g=0;g<d.length;g++)e[g]=bd(d[g],b).o,f=f||H(e[g]);a.g||(a.g={});a.g[c]=d;b=e;f?Lc(b,8):Kc(b,8)}else a.g&&(a.g[c]=void 0),e=Zc;return I(a,c,e)}
function rd(a,b,c,d){$c(a);var e=od(a,c,b,void 0,!1);c=null!=d?bd(d,c):new c;a=jd(a,b,2);e.push(c);a.push(c.o);H(c.o)&&Lc(a,8)}
function sd(a,b){return id(a,b)}
function td(a,b){a=id(a,b);return null==a?"":a}
;function ud(a,b,c,d,e,f){(a=a.g&&a.g[c])?(e=f.Ia?Oc(a.slice()):a,qd(b,0<e.length?e[0].constructor:void 0,c,e)):(null!=d?Ac&&d instanceof Uint8Array?e=d.length?new Fc(new Uint8Array(d)):Dc||(Dc=new Fc(null)):(Array.isArray(d)&&(e?Kc(d,2):d&&Mc(d)&1&&f.Ia?(e=Array.prototype.slice.call(d),Nc(e,(Mc(d)|0)&-51),d=e):Rc(d)),e=d):e=void 0,I(b,c,e))}
;function L(a,b,c){null==a&&(a=vd);vd=null;var d=this.constructor.g||0,e=0<d,f=this.constructor.h,g=!1;if(null==a){var h=f?[f]:[];Kc(h,48);a=h;h=!0}else if(h=!!(Mc(a)&16))g=Mc(a),Nc(a,g|32),g=!!(g&32);e&&0<a.length&&Uc(a[a.length-1])&&"g"in a[a.length-1]&&(d=0);this.R=(f?0:-1)-d;this.g=void 0;this.o=a;a:{f=this.o.length;d=f-1;if(f&&(f=this.o[d],Uc(f))){this.D=f;b=Object.keys(f);0<b.length&&db(b,isNaN)?this.V=Number.MAX_VALUE:this.V=d-this.R;break a}void 0!==b&&-1<b?(this.V=Math.max(b,d+1-this.R),this.D=
void 0):this.V=Number.MAX_VALUE}if(!e&&this.D&&"g"in this.D)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c)for(e=h&&!g?Pc:Oc,b=0;b<c.length;b++)h=c[b],(g=id(this,h))?Array.isArray(g)&&e(g):I(this,h,Zc,!1,!0)}
L.prototype.toJSON=function(){var a=this.o,b;Vc?b=a:b=ed(a,fd,hd);return b};
function wd(a){Vc=!0;try{return JSON.stringify(a.toJSON(),xd)}finally{Vc=!1}}
L.prototype.clone=function(){var a=ed(this.o,gd,Sc);Qc(a);vd=a;a=new this.constructor(a);vd=null;yd(a,this);return a};
function nd(a){if(H(a.o)){var b={Ia:!0},c=H(a.o);if(c&&!b.Ia)throw Error("copyRepeatedFields must be true for frozen messages");c||Rc(a.o);var d=new a.constructor;a.ia&&(d.ia=a.ia.slice());for(var e=a.o,f=0;f<e.length;f++){var g=e[f];if(f===e.length-1&&Uc(g))for(var h in g){var k=+h;Number.isNaN(k)?(d.D||(d.D=d.o[d.V+d.R]={}))[h]=g[h]:ud(a,d,k,g[h],c,b)}else ud(a,d,f-a.R,g,c,b)}d.bb=a;a=d}return a}
L.prototype.Ma=Tc;L.prototype.toString=function(){return this.o.toString()};
function xd(a,b){return cd(b)}
function yd(a,b){b.ia&&(a.ia=b.ia.slice());var c=b.g;if(c){b=b.D;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length){var h=a,k=f;k=void 0===k?!1:k;var l=H(h.o);f=od(h,e[0].constructor,g,k,l);g=jd(h,g,3,k);if(h=!l&&g){if(!g)throw Error("cannot check mutability state of non-array");h=!(Mc(g)&8)}if(h){for(h=0;h<f.length;h++)(l=f[h])&&H(l.o)&&(f[h]=nd(f[h]),g[h]=f[h].o);Kc(g,8)}for(g=0;g<Math.min(f.length,e.length);g++)yd(f[g],e[g])}}else throw Error("unexpected object: type: "+
Na(e)+": "+e);}}}}
var vd;var zd=window;xb("csi.gstatic.com");xb("googleads.g.doubleclick.net");xb("partner.googleadservices.com");xb("pubads.g.doubleclick.net");xb("securepubads.g.doubleclick.net");xb("tpc.googlesyndication.com");function Ad(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||z.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Bd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Cd[c])c=Cd[c];else{c=String(c);if(!Cd[c]){var f=/function\s+([^\(]+)/m.exec(c);Cd[c]=f?f[1]:"[Anonymous]"}c=Cd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Bd(a,b){b||(b={});b[Dd(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Dd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Bd(a,b));return c}
function Dd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Cd={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Ed;try{new URL("s://g"),Ed=!0}catch(a){Ed=!1}var Fd=Ed;function Gd(a,b){a.removeAttribute("srcdoc");if(b instanceof Hb)b instanceof Hb&&b.constructor===Hb?b=b.g:(Na(b),b="type_error:SafeUrl");else{b:if(Fd){try{var c=new URL(b)}catch(d){c="https:";break b}c=c.protocol}else c:{c=document.createElement("a");try{c.href=b}catch(d){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b);for(b="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");0<
a.sandbox.length;)a.sandbox.remove(a.sandbox.item(0));for(c=0;c<b.length;c++)a.sandbox.supports&&!a.sandbox.supports(b[c])||a.sandbox.add(b[c])}
;function Hd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=Hd.prototype;n.clone=function(){return new Hd(this.x,this.y)};
n.equals=function(a){return a instanceof Hd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Id(a,b){this.width=a;this.height=b}
n=Id.prototype;n.clone=function(){return new Id(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.za=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Jd(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Kd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Ld(a){var b=Md;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Pd(){var a=[];Ld(function(b){a.push(b)});
return a}
var Md={Kb:"allow-forms",Lb:"allow-modals",Mb:"allow-orientation-lock",Nb:"allow-pointer-lock",Ob:"allow-popups",Pb:"allow-popups-to-escape-sandbox",Qb:"allow-presentation",Rb:"allow-same-origin",Sb:"allow-scripts",Tb:"allow-top-navigation",Ub:"allow-top-navigation-by-user-activation"},Qd=ab(function(){return Pd()});
function Rd(){var a=Sd(),b={};E(Qd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Sd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Td(a){this.Db=a}
function Ud(a){return new Td(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Vd=[Ud("data"),Ud("http"),Ud("https"),Ud("mailto"),Ud("ftp"),new Td(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Wd(a,b){b=void 0===b?Vd:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Td&&d.Db(a))return new Hb(a,Ib)}}
function Xd(a){var b=void 0===b?Vd:b;return Wd(a,b)||Jb}
;var Yd=(new Date).getTime();function Zd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var $d="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ia($d);function ae(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var t=g,q=0;64>q;q+=4)t[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=t[q-3]^t[q-8]^t[q-14]^t[q-16],t[q]=(p<<1|p>>>31)&4294967295;p=e[0];var w=e[1],A=e[2],G=e[3],K=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var M=G^w&(A^G);var O=1518500249}else M=w^A^G,O=1859775393;else 60>q?(M=w&A|G&(w|A),O=2400959708):(M=w^A^G,O=3395469782);M=((p<<5|p>>>27)&4294967295)+M+K+O+t[q]&4294967295;K=G;G=A;A=(w<<30|w>>>2)&4294967295;w=p;p=M}e[0]=e[0]+p&4294967295;e[1]=e[1]+w&4294967295;e[2]=
e[2]+A&4294967295;e[3]=e[3]+G&4294967295;e[4]=e[4]+K&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],w=0,A=p.length;w<A;++w)q.push(p.charCodeAt(w));p=q}t||(t=p.length);q=0;if(0==l)for(;q+64<t;)b(p.slice(q,q+64)),q+=64,m+=64;for(;q<t;)if(f[l++]=p[q++],m++,64==l)for(l=0,b(f);q+64<t;)b(p.slice(q,q+64)),q+=64,m+=64}
function d(){var p=[],t=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=t&255,t>>>=8;b(f);for(q=t=0;5>q;q++)for(var w=24;0<=w;w-=8)p[t++]=e[q]>>w&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,sb:function(){for(var p=d(),t="",q=0;q<p.length;q++)t+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return t}}}
;function be(a,b,c){var d=String(z.location.href);return d&&a&&b?[b,ce(Zd(d),a,c||null)].join(" "):null}
function ce(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],E(d,function(h){e.push(h)}),de(e.join(" "));
var f=[],g=[];E(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];E(d,function(h){e.push(h)});
a=de(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function de(a){var b=ae();b.update(a);return b.sb().toLowerCase()}
;var ee={};function fe(a){this.g=a||{cookie:""}}
n=fe.prototype;n.isEnabled=function(){if(!z.navigator.cookieEnabled)return!1;if(!this.za())return!0;this.set("TESTCOOKIESENABLED","1",{Ka:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.lc;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ka}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=zb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ka:0,path:b,domain:c});return d};
n.za=function(){return!this.g.cookie};
n.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=zb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var ge=new fe("undefined"==typeof document?null:document);function he(a){return!!ee.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function ie(a,b,c,d){(a=z[a])||(a=(new fe(document)).get(b));return a?be(a,c,d):null}
function je(a){var b=void 0===b?!1:b;var c=Zd(String(z.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=z.__SAPISID||z.__APISID||z.__3PSAPISID||z.__OVERRIDE_SID;he(e)&&(f=f||z.__1PSAPISID);if(f)e=!0;else{var g=new fe(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");he(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?z.__SAPISID:z.__APISID,e||(e=new fe(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?be(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&he(b)&&((b=ie("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=ie("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function ke(){this.i=this.i;this.m=this.m}
ke.prototype.i=!1;ke.prototype.dispose=function(){this.i||(this.i=!0,this.ca())};
ke.prototype.ca=function(){if(this.m)for(;this.m.length;)this.m.shift()()};function le(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
le.prototype.stopPropagation=function(){this.i=!0};
le.prototype.preventDefault=function(){this.defaultPrevented=!0};var me=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{z.addEventListener("test",function(){},b),z.removeEventListener("test",function(){},b)}catch(c){}return a}();function ne(a,b){le.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
D(ne,le);var oe={2:"touch",3:"pen",4:"mouse"};
ne.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(fc){a:{try{bc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:oe[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&ne.N.preventDefault.call(this)};
ne.prototype.stopPropagation=function(){ne.N.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
ne.prototype.preventDefault=function(){ne.N.preventDefault.call(this);var a=this.h;a.preventDefault?a.preventDefault():a.returnValue=!1};var pe="closure_listenable_"+(1E6*Math.random()|0);var qe=0;function re(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ya=e;this.key=++qe;this.ka=this.ta=!1}
function se(a){a.ka=!0;a.listener=null;a.proxy=null;a.src=null;a.ya=null}
;function te(a){this.src=a;this.listeners={};this.g=0}
te.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=ue(a,b,d,e);-1<g?(b=a[g],c||(b.ta=!1)):(b=new re(b,this.src,f,!!d,e),b.ta=c,a.push(b));return b};
te.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ue(e,b,c,d);return-1<b?(se(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
function ve(a,b){var c=b.type;c in a.listeners&&eb(a.listeners[c],b)&&(se(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--))}
function ue(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ka&&f.listener==b&&f.capture==!!c&&f.ya==d)return e}return-1}
;var we="closure_lm_"+(1E6*Math.random()|0),xe={},ye=0;function ze(a,b,c,d,e){if(d&&d.once)Ae(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ze(a,b[f],c,d,e);else c=Be(c),a&&a[pe]?a.X(b,c,Pa(d)?!!d.capture:!!d,e):Ce(a,b,c,!1,d,e)}
function Ce(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=De(a);h||(a[we]=h=new te(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ee();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)me||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Fe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ye++}}
function Ee(){function a(c){return b.call(a.src,a.listener,c)}
var b=Ge;return a}
function Ae(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ae(a,b[f],c,d,e);else c=Be(c),a&&a[pe]?a.g.add(String(b),c,!0,Pa(d)?!!d.capture:!!d,e):Ce(a,b,c,!0,d,e)}
function He(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)He(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=Be(c),a&&a[pe])?a.g.remove(String(b),c,d,e):a&&(a=De(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ue(b,c,d,e)),(c=-1<a?b[a]:null)&&Ie(c))}
function Ie(a){if("number"!==typeof a&&a&&!a.ka){var b=a.src;if(b&&b[pe])ve(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Fe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ye--;(c=De(b))?(ve(c,a),0==c.g&&(c.src=null,b[we]=null)):se(a)}}}
function Fe(a){return a in xe?xe[a]:xe[a]="on"+a}
function Ge(a,b){if(a.ka)a=!0;else{b=new ne(b,this);var c=a.listener,d=a.ya||a.src;a.ta&&Ie(a);a=c.call(d,b)}return a}
function De(a){a=a[we];return a instanceof te?a:null}
var Je="__closure_events_fn_"+(1E9*Math.random()>>>0);function Be(a){if("function"===typeof a)return a;a[Je]||(a[Je]=function(b){return a.handleEvent(b)});
return a[Je]}
;function Ke(){ke.call(this);this.g=new te(this);this.Z=this;this.B=null}
D(Ke,ke);Ke.prototype[pe]=!0;Ke.prototype.addEventListener=function(a,b,c,d){ze(this,a,b,c,d)};
Ke.prototype.removeEventListener=function(a,b,c,d){He(this,a,b,c,d)};
function Le(a,b){var c=a.B;if(c){var d=[];for(var e=1;c;c=c.B)d.push(c),++e}a=a.Z;c=b.type||b;"string"===typeof b?b=new le(b,a):b instanceof le?b.target=b.target||a:(e=b,b=new le(c,a),pb(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&0<=f;f--){var g=b.g=d[f];e=Me(g,c,!0,b)&&e}b.i||(g=b.g=a,e=Me(g,c,!0,b)&&e,b.i||(e=Me(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=Me(g,c,!1,b)&&e}
Ke.prototype.ca=function(){Ke.N.ca.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,se(d[e]);delete a.listeners[c];a.g--}}this.B=null};
Ke.prototype.X=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function Me(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ka&&g.capture==c){var h=g.listener,k=g.ya||g.src;g.ta&&ve(a.g,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ne(a){Ke.call(this);var b=this;this.G=this.j=0;this.J=null!=a?a:{P:function(e,f){return setTimeout(e,f)},
aa:function(e){clearTimeout(e)}};
var c,d;this.h=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.l=function(){return y(function(e){return x(e,Oe(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.G||Pe(this)}
v(Ne,Ke);function Qe(){var a=Re;Ne.g||(Ne.g=new Ne(a));return Ne.g}
Ne.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.J.aa(this.G);delete Ne.g};
Ne.prototype.I=function(){return this.h};
function Pe(a){a.G=a.J.P(function(){var b;return y(function(c){if(1==c.g)return a.h?(null==(b=window.navigator)?0:b.onLine)?c.v(3):x(c,Oe(a),3):x(c,Oe(a),3);Pe(a);c.g=0})},3E4)}
function Oe(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return y(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.j=a.J.P(function(){d.abort()},b||2E4)),x(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Aa(h);a.s=void 0;a.j&&(a.J.aa(a.j),a.j=0);g!==a.h&&(a.h=g,a.h?Le(a,"networkstatus-online"):Le(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:za(h),g=!1,h.v(3)}})})}
;function Se(){this.data_=[];this.g=-1}
Se.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.g=-1)};
Se.prototype.get=function(a){return!!this.data_[a]};
function Te(a){-1===a.g&&(a.g=cb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.g}
;function Ue(a){L.call(this,a,-1,Ve)}
v(Ue,L);function We(a,b){return I(a,2,b)}
function Xe(a,b){return I(a,3,b)}
function Ye(a,b){return I(a,4,b)}
function Ze(a,b){return I(a,5,b)}
function $e(a,b){return I(a,9,b)}
function af(a,b){return qd(a,bf,10,b)}
function cf(a,b){return I(a,11,b)}
function df(a,b){return I(a,1,b)}
function ef(a,b){return I(a,7,b)}
function bf(a){L.call(this,a)}
v(bf,L);var Ve=[10,6];var ff="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function gf(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function hf(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function jf(){var a=window;if(!hf(a))return null;var b=gf(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(ff).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function kf(a){var b;return cf(af(Ze(We(df(Ye(ef($e(Xe(new Ue,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new bf;d=I(d,1,c.brand);return I(d,2,c.version)}))||[]),a.wow64||!1)}
function lf(){var a,b;return null!=(b=null==(a=jf())?void 0:a.then(function(c){return kf(c)}))?b:null}
;function mf(a,b){this.i=a;this.j=b;this.h=0;this.g=null}
mf.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function nf(a,b){a.j(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)}
;var of;function pf(){var a=z.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Jd();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!F("Trident")&&!F("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Ta;c.Ta=null;e()}};
return function(e){d.next={Ta:e};d=d.next;b.port2.postMessage(0)}}return function(e){z.setTimeout(e,0)}}
;function qf(){this.h=this.g=null}
qf.prototype.add=function(a,b){var c=rf.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
qf.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var rf=new mf(function(){return new sf},function(a){return a.reset()});
function sf(){this.next=this.scope=this.g=null}
sf.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
sf.prototype.reset=function(){this.next=this.scope=this.g=null};var tf,uf=!1,vf=new qf;function wf(a,b){tf||xf();uf||(tf(),uf=!0);vf.add(a,b)}
function xf(){if(z.Promise&&z.Promise.resolve){var a=z.Promise.resolve(void 0);tf=function(){a.then(yf)}}else tf=function(){var b=yf;
"function"!==typeof z.setImmediate||z.Window&&z.Window.prototype&&!F("Edge")&&z.Window.prototype.setImmediate==z.setImmediate?(of||(of=pf()),of(b)):z.setImmediate(b)}}
function yf(){for(var a;a=vf.remove();){try{a.g.call(a.scope)}catch(b){$b(b)}nf(rf,a)}uf=!1}
;function zf(a,b){this.g=a[z.Symbol.iterator]();this.h=b}
zf.prototype[Symbol.iterator]=function(){return this};
zf.prototype.next=function(){var a=this.g.next();return{value:a.done?void 0:this.h.call(void 0,a.value),done:a.done}};
function Af(a,b){return new zf(a,b)}
;function Bf(){this.blockSize=-1}
;function Cf(){this.blockSize=-1;this.blockSize=64;this.g=[];this.m=[];this.l=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
D(Cf,Bf);Cf.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.j=this.h=0};
function Df(a,b,c){c||(c=0);var d=a.l;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],k=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+k&4294967295}
Cf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.h;d<b;){if(0==f)for(;d<=c;)Df(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Df(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Df(this,e);f=0;break}}this.h=f;this.j+=b}};
Cf.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.blockSize-(this.h-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;Df(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function Ef(){}
Ef.prototype.next=function(){return Ff};
var Ff={done:!0,value:void 0};function Gf(a){return{value:a,done:!1}}
Ef.prototype.K=function(){return this};function Hf(a){if(a instanceof If||a instanceof Jf||a instanceof Kf)return a;if("function"==typeof a.next)return new If(function(){return a});
if("function"==typeof a[Symbol.iterator])return new If(function(){return a[Symbol.iterator]()});
if("function"==typeof a.K)return new If(function(){return a.K()});
throw Error("Not an iterator or iterable.");}
function If(a){this.h=a}
If.prototype.K=function(){return new Jf(this.h())};
If.prototype[Symbol.iterator]=function(){return new Kf(this.h())};
If.prototype.g=function(){return new Kf(this.h())};
function Jf(a){this.h=a}
v(Jf,Ef);Jf.prototype.next=function(){return this.h.next()};
Jf.prototype[Symbol.iterator]=function(){return new Kf(this.h)};
Jf.prototype.g=function(){return new Kf(this.h)};
function Kf(a){If.call(this,function(){return a});
this.i=a}
v(Kf,If);Kf.prototype.next=function(){return this.i.next()};function hg(a,b){this.h={};this.g=[];this.i=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof hg)for(c=ig(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function ig(a){jg(a);return a.g.concat()}
n=hg.prototype;n.has=function(a){return kg(this.h,a)};
n.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||lg;jg(this);for(var c,d=0;c=this.g[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function lg(a,b){return a===b}
n.za=function(){return 0==this.size};
n.clear=function(){this.h={};this.i=this.size=this.g.length=0};
n.remove=function(a){return this.delete(a)};
n.delete=function(a){return kg(this.h,a)?(delete this.h[a],--this.size,this.i++,this.g.length>2*this.size&&jg(this),!0):!1};
function jg(a){if(a.size!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];kg(a.h,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.size!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],kg(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}
n.get=function(a,b){return kg(this.h,a)?this.h[a]:b};
n.set=function(a,b){kg(this.h,a)||(this.size+=1,this.g.push(a),this.i++);this.h[a]=b};
n.forEach=function(a,b){for(var c=ig(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new hg(this)};
n.keys=function(){return Hf(this.K(!0)).g()};
n.values=function(){return Hf(this.K(!1)).g()};
n.entries=function(){var a=this;return Af(this.keys(),function(b){return[b,a.get(b)]})};
n.K=function(a){jg(this);var b=0,c=this.i,d=this,e=new Ef;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)return Ff;var f=d.g[b++];return Gf(a?f:d.h[f])};
return e};
function kg(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var mg=z.JSON.stringify;function ng(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function og(a){this.g=0;this.s=void 0;this.j=this.h=this.i=null;this.m=this.l=!1;if(a!=$a)try{var b=this;a.call(void 0,function(c){pg(b,2,c)},function(c){pg(b,3,c)})}catch(c){pg(this,3,c)}}
function qg(){this.next=this.context=this.h=this.i=this.g=null;this.j=!1}
qg.prototype.reset=function(){this.context=this.h=this.i=this.g=null;this.j=!1};
var rg=new mf(function(){return new qg},function(a){a.reset()});
function sg(a,b,c){var d=rg.get();d.i=a;d.h=b;d.context=c;return d}
og.prototype.then=function(a,b,c){return tg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
og.prototype.$goog_Thenable=!0;og.prototype.cancel=function(a){if(0==this.g){var b=new ug(a);wf(function(){vg(this,b)},this)}};
function vg(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.j||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?vg(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):wg(c),xg(c,e,3,b)))}a.i=null}else pg(a,3,b)}
function yg(a,b){a.h||2!=a.g&&3!=a.g||zg(a);a.j?a.j.next=b:a.h=b;a.j=b}
function tg(a,b,c,d){var e=sg(null,null,null);e.g=new og(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ug?g(h):f(k)}catch(l){g(l)}}:g});
e.g.i=a;yg(a,e);return e.g}
og.prototype.G=function(a){this.g=0;pg(this,2,a)};
og.prototype.Z=function(a){this.g=0;pg(this,3,a)};
function pg(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.G,f=a.Z;if(d instanceof og){yg(d,sg(e||$a,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if("function"===typeof k){Ag(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.s=c,a.g=b,a.i=null,zg(a),3!=b||c instanceof ug||Bg(a,c))}}
function Ag(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function zg(a){a.l||(a.l=!0,wf(a.B,a))}
function wg(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.j=null);return b}
og.prototype.B=function(){for(var a;a=wg(this);)xg(this,a,this.g,this.s);this.l=!1};
function xg(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.m;a=a.i)a.m=!1;if(b.g)b.g.i=null,Cg(b,c,d);else try{b.j?b.i.call(b.context):Cg(b,c,d)}catch(e){Dg.call(null,e)}nf(rg,b)}
function Cg(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Bg(a,b){a.m=!0;wf(function(){a.m&&Dg.call(null,b)})}
var Dg=$b;function ug(a){Xa.call(this,a)}
D(ug,Xa);ug.prototype.name="cancel";function N(a){ke.call(this);this.s=1;this.j=[];this.l=0;this.g=[];this.h={};this.B=!!a}
D(N,ke);n=N.prototype;n.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.s;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.s=e+3;d.push(e);return e};
function Eg(a,b,c){var d=Fg;if(a=d.h[a]){var e=d.g;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.na(a)}}
n.na=function(a){var b=this.g[a];if(b){var c=this.h[b];0!=this.l?(this.j.push(a),this.g[a+1]=function(){}):(c&&eb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
n.ea=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];Gg(this.g[g+1],this.g[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.i;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.na(c)}}return 0!=e}return!1};
function Gg(a,b,c){wf(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.na,this),delete this.h[a])}else this.g.length=0,this.h={}};
n.ca=function(){N.N.ca.call(this);this.clear();this.j.length=0};function Hg(a){this.g=a}
Hg.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,mg(b))};
Hg.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Hg.prototype.remove=function(a){this.g.remove(a)};function Ig(a){this.g=a}
D(Ig,Hg);function Jg(a){this.data=a}
function Kg(a){return void 0===a||a instanceof Jg?a:new Jg(a)}
Ig.prototype.set=function(a,b){Ig.N.set.call(this,a,Kg(b))};
Ig.prototype.h=function(a){a=Ig.N.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ig.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Lg(a){this.g=a}
D(Lg,Ig);Lg.prototype.set=function(a,b,c){if(b=Kg(b)){if(c){if(c<Date.now()){Lg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Lg.N.set.call(this,a,b)};
Lg.prototype.h=function(a){var b=Lg.N.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Lg.prototype.remove.call(this,a);else return b}};function Mg(){}
;function Ng(){}
D(Ng,Mg);Ng.prototype[Symbol.iterator]=function(){return Hf(this.K(!0)).g()};
Ng.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Og(a){this.g=a}
D(Og,Ng);n=Og.prototype;n.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.g.removeItem(a)};
n.K=function(a){var b=0,c=this.g,d=new Ef;d.next=function(){if(b>=c.length)return Ff;var e=c.key(b++);if(a)return Gf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Gf(e)};
return d};
n.clear=function(){this.g.clear()};
n.key=function(a){return this.g.key(a)};function Pg(){var a=null;try{a=window.localStorage||null}catch(b){}this.g=a}
D(Pg,Og);function Qg(a,b){this.h=a;this.g=null;var c;if(c=dc)c=!(9<=Number(qc));if(c){Rg||(Rg=new hg);this.g=Rg.get(a);this.g||(b?this.g=document.getElementById(b):(this.g=document.createElement("userdata"),this.g.addBehavior("#default#userData"),document.body.appendChild(this.g)),Rg.set(a,this.g));try{this.g.load(this.h)}catch(d){this.g=null}}}
D(Qg,Ng);var Sg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Rg=null;function Tg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Sg[b]})}
n=Qg.prototype;n.set=function(a,b){this.g.setAttribute(Tg(a),b);Ug(this)};
n.get=function(a){a=this.g.getAttribute(Tg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.g.removeAttribute(Tg(a));Ug(this)};
n.K=function(a){var b=0,c=this.g.XMLDocument.documentElement.attributes,d=new Ef;d.next=function(){if(b>=c.length)return Ff;var e=c[b++];if(a)return Gf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Gf(e)};
return d};
n.clear=function(){for(var a=this.g.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ug(this)};
function Ug(a){try{a.g.save(a.h)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Vg(a,b){this.h=a;this.g=b+"::"}
D(Vg,Ng);Vg.prototype.set=function(a,b){this.h.set(this.g+a,b)};
Vg.prototype.get=function(a){return this.h.get(this.g+a)};
Vg.prototype.remove=function(a){this.h.remove(this.g+a)};
Vg.prototype.K=function(a){var b=this.h[Symbol.iterator](),c=this,d=new Ef;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return Gf(a?e.slice(c.g.length):c.h.get(e))};
return d};function Wg(a){L.call(this,a)}
v(Wg,L);Wg.prototype.getKey=function(){return id(this,1)};
Wg.prototype.T=function(){return sd(this,2===ld(this,Xg)?2:-1)};
var Xg=[2,3,4,5,6];function Yg(a){L.call(this,a)}
v(Yg,L);function Zg(a){L.call(this,a)}
v(Zg,L);function $g(a){L.call(this,a,-1,ah)}
v($g,L);var ah=[2];function bh(a){L.call(this,a,-1,ch)}
v(bh,L);bh.prototype.getPlayerType=function(){return id(this,36)};
bh.prototype.setHomeGroupInfo=function(a){return J(this,$g,81,a)};
var ch=[9,66,24,32,86,100,101];function dh(a){L.call(this,a,-1,eh)}
v(dh,L);var eh=[15,26,28];function fh(a){L.call(this,a)}
v(fh,L);function gh(a){L.call(this,a,-1,hh)}
v(gh,L);gh.prototype.setSafetyMode=function(a){return I(this,5,a)};
var hh=[12];function ih(a){L.call(this,a,-1,jh)}
v(ih,L);var jh=[12];var kh={Zb:"WEB_DISPLAY_MODE_UNKNOWN",Vb:"WEB_DISPLAY_MODE_BROWSER",Xb:"WEB_DISPLAY_MODE_MINIMAL_UI",Yb:"WEB_DISPLAY_MODE_STANDALONE",Wb:"WEB_DISPLAY_MODE_FULLSCREEN"};function lh(a){L.call(this,a,-1,mh)}
v(lh,L);function nh(a){L.call(this,a)}
v(nh,L);nh.prototype.getKey=function(){return td(this,1)};
nh.prototype.T=function(){return td(this,2)};
var mh=[4,5];function oh(a){L.call(this,a)}
v(oh,L);function ph(a){L.call(this,a)}
v(ph,L);var qh=[2,3,4];function rh(a){L.call(this,a)}
v(rh,L);function sh(a){L.call(this,a)}
v(sh,L);function th(a){L.call(this,a)}
v(th,L);function uh(a){L.call(this,a,-1,vh)}
v(uh,L);var vh=[10,17];function wh(a){L.call(this,a)}
v(wh,L);function xh(a){L.call(this,a)}
v(xh,L);function yh(a){L.call(this,a)}
v(yh,L);function zh(a){L.call(this,a,449)}
v(zh,L);
var Ah=[23,24,11,6,7,5,2,3,13,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,444,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,197,198,199,200,201,402,320,203,204,205,206,258,259,260,261,327,209,219,226,227,232,233,234,240,244,247,248,249,251,256,257,266,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,351,
352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117,439,441,448];function Bh(a){L.call(this,a)}
v(Bh,L);function Ch(a){L.call(this,a)}
v(Ch,L);Ch.prototype.getPlaylistId=function(){return sd(this,2===ld(this,Dh)?2:-1)};
var Dh=[1,2];function Eh(a){L.call(this,a,-1,Fh)}
v(Eh,L);var Fh=[3];var Gh=z.window,Hh,Ih,Jh=(null==Gh?void 0:null==(Hh=Gh.yt)?void 0:Hh.config_)||(null==Gh?void 0:null==(Ih=Gh.ytcfg)?void 0:Ih.data_)||{};B("yt.config_",Jh);function Kh(){var a=arguments;1<a.length?Jh[a[0]]=a[1]:1===a.length&&Object.assign(Jh,a[0])}
function P(a,b){return a in Jh?Jh[a]:b}
function Lh(){return P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Mh(){var a=Jh.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Nh=[];function Oh(a){Nh.forEach(function(b){return b(a)})}
function Ph(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Qh(b)}}:a}
function Qh(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=P("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Kh("ERRORS",e));Oh(a)}
function Rh(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=P("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Kh("ERRORS",e))}
;var Sh=0;B("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++Sh});var Th={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Uh(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Th||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.g=a.pageX;this.h=a.pageY}}catch(e){}}
function Vh(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.g=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.h=a.clientY+b}}
Uh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Uh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Uh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lb=z.ytEventsEventsListeners||{};B("ytEventsEventsListeners",lb);var Wh=z.ytEventsEventsCounter||{count:0};B("ytEventsEventsCounter",Wh);
function Xh(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return jb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Yh(a){a&&("string"==typeof a&&(a=[a]),E(a,function(b){if(b in lb){var c=lb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Zh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete lb[b]}}))}
var Zh=ab(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function $h(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Xh(a,b,c,d);if(e)return e;e=++Wh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Uh(h);if(!Kd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Uh(h);
h.currentTarget=a;return c.call(a,h)};
g=Ph(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Zh()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);lb[e]=[a,b,c,g,d];return e}
;function ai(a,b){"function"===typeof a&&(a=Ph(a));return window.setTimeout(a,b)}
function bi(a,b){"function"===typeof a&&(a=Ph(a));return window.setInterval(a,b)}
;var ci=/^[\w.]*$/,di={q:!0,search_query:!0};function ei(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=fi(f[0]||""),h=fi(f[1]||"");g in c?Array.isArray(c[g])?hb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],m=String(ei);k.args=[{key:l,value:f[1],query:a,method:gi==m?"unchanged":m}];di.hasOwnProperty(l)||Rh(k)}}return c}
var gi=String(ei);function hi(a){var b=[];ib(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];E(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function ii(a){"?"==a.charAt(0)&&(a=a.substr(1));return ei(a,"&")}
function ji(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ii(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Xb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function ki(a){if(!b)var b=window.location.href;var c=a.match(Sb)[1]||null,d=Ub(a);c&&d?(a=a.match(Sb),b=b.match(Sb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Ub(b)==d&&(Number(b.match(Sb)[4]||null)||null)==(Number(a.match(Sb)[4]||null)||null):!0;return a}
function fi(a){return a&&a.match(ci)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function R(a){a=li(a);return"string"===typeof a&&"false"===a?!1:!!a}
function mi(a,b){a=li(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function li(a){var b=P("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:P("EXPERIMENT_FLAGS",{})[a]}
function ni(){var a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=P("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function oi(a){var b=pi;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Yd;e.flash="0";a:{try{var f=b.g.top.location.href}catch(V){f=2;break a}f=f?f===b.h.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?zd:g;try{var h=g.history.length}catch(V){h=0}e.u_his=h;var k;e.u_h=null==(k=zd.screen)?void 0:k.height;var l;e.u_w=null==(l=zd.screen)?void 0:l.width;var m;e.u_ah=null==(m=zd.screen)?void 0:m.availHeight;var p;e.u_aw=null==
(p=zd.screen)?void 0:p.availWidth;var t;e.u_cd=null==(t=zd.screen)?void 0:t.colorDepth}catch(V){}h=b.g;try{var q=h.screenX;var w=h.screenY}catch(V){}try{var A=h.outerWidth;var G=h.outerHeight}catch(V){}try{var K=h.innerWidth;var M=h.innerHeight}catch(V){}try{var O=h.screenLeft;var kb=h.screenTop}catch(V){}try{K=h.innerWidth,M=h.innerHeight}catch(V){}try{var oc=h.screen.availWidth;var ya=h.screen.availTop}catch(V){}q=[O,kb,q,w,oc,ya,A,G,K,M];w=b.g.top;try{var sa=(w||window).document,W="CSS1Compat"==
sa.compatMode?sa.documentElement:sa.body;var ba=(new Id(W.clientWidth,W.clientHeight)).round()}catch(V){ba=new Id(-12245933,-12245933)}sa=ba;ba={};var ca=void 0===ca?z:ca;W=new Se;ca.SVGElement&&ca.document.createElementNS&&W.set(0);w=Rd();w["allow-top-navigation-by-user-activation"]&&W.set(1);w["allow-popups-to-escape-sandbox"]&&W.set(2);ca.crypto&&ca.crypto.subtle&&W.set(3);ca.TextDecoder&&ca.TextEncoder&&W.set(4);ca=Te(W);ba.bc=ca;ba.bih=sa.height;ba.biw=sa.width;ba.brdim=q.join();b=b.h;b=(ba.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ba.wgl=!!zd.WebGLRenderingContext,ba);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var pi=new function(){var a=window.document;this.g=window;this.h=a};
B("yt.ads_.signals_.getAdSignalsString",function(a){return hi(oi(a))});Date.now();var qi="XMLHttpRequest"in z?function(){return new XMLHttpRequest}:null;
function ri(){if(!qi)return null;var a=qi();return"open"in a?a:null}
;var si={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ti="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia($d)),ui=!1;
function vi(a,b){b=void 0===b?{}:b;var c=ki(a),d=R("web_ajax_ignore_global_headers_if_set"),e;for(e in si){var f=P(si[e]);"X-Goog-Visitor-Id"!==e||f||(f=P("VISITOR_DATA"));!f||!c&&Ub(a)||d&&void 0!==b[e]||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Ub(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Ub(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}document.location.hostname.endsWith("youtubeeducation.com")||
!c&&Ub(a)||(b["X-YouTube-Ad-Signals"]=hi(oi()));return b}
function wi(a){var b=window.location.search,c=Ub(a);R("debug_handle_relative_url_for_query_forward_killswitch")||!c&&ki(a)&&(c=document.location.hostname);var d=Tb(a.match(Sb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ii(b),f={};E(ti,function(g){e[g]&&(f[g]=e[g])});
return ji(a,f||{},!1)}
function xi(a,b){var c=b.format||"JSON";a=yi(a,b);var d=zi(a,b),e=!1,f=Ai(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,p=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||p||t)m=Bi(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};p=b.context||z;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.onFinish&&b.onFinish.call(p,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=ai(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||z,f))},d)}}
function yi(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=ji(a,b||{},!0);return a}
function zi(a,b){var c=P("XSRF_FIELD_NAME"),d=P("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=P("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Ub(a)&&!b.withCredentials&&Ub(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=ii(e),pb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):Xb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!ui&&a&&"POST"!=b.method&&(ui=!0,Qh(Error("AJAX request with postData should use POST")));return e}
function Bi(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Rh(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ci(a):null)e={},E(a.getElementsByTagName("*"),function(g){e[g.tagName]=Di(g)})}d&&Ei(e);
return e}
function Ei(a){if(Pa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;xb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b];if(void 0===qb){var e=null;var f=z.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(g){z.console&&z.console.error(g.message)}qb=e}else qb=e}d=(e=qb)?e.createHTML(d):d;a[c]=new Nb(d)}else Ei(a[b])}}
function Ci(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Di(a){var b="";E(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ai(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Ph(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=ri();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=wi(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=vi(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Fi(){if(!z.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return z.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":z.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":z.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":z.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;B("ytglobal.prefsUserPrefsPrefs_",C("ytglobal.prefsUserPrefsPrefs_")||{});var Gi={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Hi={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Ii={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Ji={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Ki(){var a=z.navigator;return a?a.connection:void 0}
;function Li(){}
function Mi(a,b){return Ni(a,0,b)}
Li.prototype.P=function(a,b){return Ni(a,1,b)};
function Oi(a,b){Ni(a,2,b)}
;function Pi(){Li.apply(this,arguments)}
v(Pi,Li);function Qi(){Pi.g||(Pi.g=new Pi);return Pi.g}
function Ni(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):ai(a,c||0)}
Pi.prototype.aa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Pi.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};var Re=Qi();function Ri(a){var b=Ia.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
v(Ri,Error);function Si(){try{return Ti(),!0}catch(a){return!1}}
function Ti(){if(void 0!==P("DATASYNC_ID"))return P("DATASYNC_ID");throw new Ri("Datasync ID not set","unknown");}
;var Ui=rc||sc;function Vi(a){var b=new Pg;if(b.g)try{b.g.setItem("__sak","1");b.g.removeItem("__sak");var c=!0}catch(d){c=!1}else c=!1;(b=c?a?new Vg(b,a):b:null)||(a=new Qg(a||"UserDataSharedStore"),b=a.g?a:null);this.g=(a=b)?new Lg(a):null;this.h=document.domain||window.location.hostname}
Vi.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(mg(b))}catch(f){return}else e=escape(b);b=this.h;ge.set(""+a,e,{Ka:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Vi.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=ge.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Vi.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.h;ge.remove(""+a,"/",void 0===b?"youtube.com":b)};var Wi=function(){var a;return function(){a||(a=new Vi("ytidb"));return a}}();
function Xi(){var a;return null==(a=Wi())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Yi=[],Zi=!1;function $i(a){Zi||(Yi.push({type:"ERROR",payload:a}),10<Yi.length&&Yi.shift())}
function aj(a,b){Zi||(Yi.push({type:"EVENT",eventType:a,payload:b}),10<Yi.length&&Yi.shift())}
;function bj(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function cj(a){return a.substr(0,a.indexOf(":"))||a}
;var dj={},ej=(dj.AUTH_INVALID="No user identifier specified.",dj.EXPLICIT_ABORT="Transaction was explicitly aborted.",dj.IDB_NOT_SUPPORTED="IndexedDB is not supported.",dj.MISSING_INDEX="Index not created.",dj.MISSING_OBJECT_STORES="Object stores not created.",dj.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",dj.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",dj.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
dj.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",dj.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",dj.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",dj.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",dj),fj={},gj=(fj.AUTH_INVALID="ERROR",fj.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",fj.EXPLICIT_ABORT="IGNORED",fj.IDB_NOT_SUPPORTED="ERROR",fj.MISSING_INDEX=
"WARNING",fj.MISSING_OBJECT_STORES="ERROR",fj.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",fj.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",fj.QUOTA_EXCEEDED="WARNING",fj.QUOTA_MAYBE_EXCEEDED="WARNING",fj.UNKNOWN_ABORT="WARNING",fj.INCOMPATIBLE_DB_VERSION="WARNING",fj),hj={},ij=(hj.AUTH_INVALID=!1,hj.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,hj.EXPLICIT_ABORT=!1,hj.IDB_NOT_SUPPORTED=!1,hj.MISSING_INDEX=!1,hj.MISSING_OBJECT_STORES=!1,hj.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,hj.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,hj.QUOTA_EXCEEDED=!1,hj.QUOTA_MAYBE_EXCEEDED=!0,hj.UNKNOWN_ABORT=!0,hj.INCOMPATIBLE_DB_VERSION=!1,hj);function T(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?ej[a]:c;d=void 0===d?gj[a]:d;e=void 0===e?ij[a]:e;Ri.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,T.prototype)}
v(T,Ri);function jj(a,b){T.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},ej.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,jj.prototype)}
v(jj,T);function kj(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,kj.prototype)}
v(kj,Error);var lj=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function mj(a,b,c,d){b=cj(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof T)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new T("QUOTA_EXCEEDED",a);if(tc&&"UnknownError"===e.name)return new T("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof kj)return new T("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&lj.some(function(f){return e.message.includes(f)}))return new T("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new T("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",jc:e.name})];e.level="WARNING";return e}
function nj(a,b,c){var d=Xi();return new T("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function oj(a){if(!a)throw Error();throw a;}
function pj(a){return a}
function qj(a){this.g=a}
function rj(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.h=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
rj.resolve=function(a){return new rj(new qj(function(b,c){a instanceof rj?a.then(b,c):b(a)}))};
rj.reject=function(a){return new rj(new qj(function(b,c){c(a)}))};
rj.prototype.then=function(a,b){var c=this,d=null!=a?a:pj,e=null!=b?b:oj;return new rj(new qj(function(f,g){"PENDING"===c.state.status?(c.g.push(function(){sj(c,c,d,f,g)}),c.h.push(function(){tj(c,c,e,f,g)})):"FULFILLED"===c.state.status?sj(c,c,d,f,g):"REJECTED"===c.state.status&&tj(c,c,e,f,g)}))};
function uj(a,b){a.then(void 0,b)}
function sj(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof rj?vj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function tj(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof rj?vj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function vj(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof rj?vj(a,b,f,d,e):d(f)},function(f){e(f)})}
;function wj(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function xj(a){return new Promise(function(b,c){wj(a,b,c)})}
function yj(a){return new rj(new qj(function(b,c){wj(a,b,c)}))}
;function zj(a,b){return new rj(new qj(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Aj=window,U=Aj.ytcsi&&Aj.ytcsi.now?Aj.ytcsi.now:Aj.performance&&Aj.performance.timing&&Aj.performance.now&&Aj.performance.timing.navigationStart?function(){return Aj.performance.timing.navigationStart+Aj.performance.now()}:function(){return(new Date).getTime()};function Bj(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(U());this.h=!1}
n=Bj.prototype;n.add=function(a,b,c){return Cj(this,[a],{mode:"readwrite",H:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return Cj(this,[a],{mode:"readwrite",H:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){this.g.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function rk(a,b,c){a=a.g.createObjectStore(b,c);return new sk(a)}
n.delete=function(a,b){return Cj(this,[a],{mode:"readwrite",H:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return Cj(this,[a],{mode:"readonly",H:!0},function(c){return c.objectStore(a).get(b)})};
function tk(a,b){return Cj(a,["LogsRequestsStore"],{mode:"readwrite",H:!0},function(c){c=c.objectStore("LogsRequestsStore");return yj(c.g.put(b,void 0))})}
n.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function Cj(a,b,c,d){var e,f,g,h,k,l,m,p,t,q,w,A;return y(function(G){switch(G.g){case 1:var K={mode:"readonly",H:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?K.mode=c:Object.assign(K,c);e=K;a.transactionCount++;f=e.H?3:1;g=0;case 2:if(h){G.v(3);break}g++;k=Math.round(U());wa(G,4);l=a.g.transaction(b,e.mode);K=new uk(l);K=vk(K,d);return x(G,K,6);case 6:return m=G.h,p=Math.round(U()),wk(a,k,p,g,void 0,b.join(),e),G.return(m);case 4:t=za(G);q=Math.round(U());w=mj(t,a.g.name,b.join(),a.g.version);
if((A=w instanceof T&&!w.g)||g>=f)wk(a,k,q,g,w,b.join(),e),h=w;G.v(2);break;case 3:return G.return(Promise.reject(h))}})}
function wk(a,b,c,d,e,f,g){b=c-b;e?(e instanceof T&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&aj("QUOTA_EXCEEDED",{dbName:cj(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof T&&"UNKNOWN_ABORT"===e.type&&(c-=a.i,0>c&&c>=Math.pow(2,31)&&(c=0),aj("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.h=!0),xk(a,!1,d,f,b,g.tag),$i(e)):xk(a,!0,d,f,b,g.tag)}
function xk(a,b,c,d,e,f){aj("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.h,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.g.name};
function sk(a){this.g=a}
n=sk.prototype;n.add=function(a,b){return yj(this.g.add(a,b))};
n.autoIncrement=function(){return this.g.autoIncrement};
n.clear=function(){return yj(this.g.clear()).then(function(){})};
function yk(a,b){return zk(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?yk(this,a):yj(this.g.delete(a))};
n.get=function(a){return yj(this.g.get(a))};
n.index=function(a){try{return new Ak(this.g.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new kj(a,this.g.name);throw b;}};
n.getName=function(){return this.g.name};
n.keyPath=function(){return this.g.keyPath};
function zk(a,b,c){a=a.g.openCursor(b.query,b.direction);return Bk(a).then(function(d){return zj(d,c)})}
function uk(a){var b=this;this.g=a;this.i=new Map;this.h=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.h){e=T;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function vk(a,b){var c=new Promise(function(d,e){try{uj(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
uk.prototype.abort=function(){this.g.abort();this.h=!0;throw new T("EXPLICIT_ABORT");};
uk.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new sk(a),this.i.set(a,b));return b};
function Ak(a){this.g=a}
n=Ak.prototype;n.delete=function(a){return Ck(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
n.get=function(a){return yj(this.g.get(a))};
n.getKey=function(a){return yj(this.g.getKey(a))};
n.keyPath=function(){return this.g.keyPath};
n.unique=function(){return this.g.unique};
function Ck(a,b,c){a=a.g.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Bk(a).then(function(d){return zj(d,c)})}
function Dk(a,b){this.request=a;this.cursor=b}
function Bk(a){return yj(a).then(function(b){return b?new Dk(a,b):null})}
n=Dk.prototype;n.advance=function(a){this.cursor.advance(a);return Bk(this.request)};
n.continue=function(a){this.cursor.continue(a);return Bk(this.request)};
n.delete=function(){return yj(this.cursor.delete()).then(function(){})};
n.getKey=function(){return this.cursor.key};
n.T=function(){return this.cursor.value};
n.update=function(a){return yj(this.cursor.update(a))};function Ek(a,b,c){return new Promise(function(d,e){function f(){t||(t=new Bj(g.result,{closed:p}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.ob,k=c.pb,l=c.Ib,m=c.upgrade,p=c.closed,t;g.addEventListener("upgradeneeded",function(q){try{if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&"none"!==q.dataLoss&&aj("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:cj(a)});var w=f(),A=new uk(g.transaction);m&&
m(w,function(G){return q.oldVersion<G&&q.newVersion>=G},A);
A.done.catch(function(G){e(G)})}catch(G){e(G)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){aj("IDB_UNEXPECTEDLY_CLOSED",{dbName:cj(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Fk(a,b,c){c=void 0===c?{}:c;return Ek(a,b,c)}
function Gk(a,b){b=void 0===b?{}:b;var c,d,e,f;return y(function(g){if(1==g.g)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.ob)&&c.addEventListener("blocked",function(){e()}),x(g,xj(c),4);
if(2!=g.g)return xa(g,0);f=za(g);throw mj(f,a,"",-1);})}
;function Hk(a){return new Promise(function(b){Oi(function(){b()},a)})}
function Ik(a,b){this.name=a;this.options=b;this.j=!0;this.l=this.m=0;this.h=500}
Ik.prototype.i=function(a,b,c){c=void 0===c?{}:c;return Fk(a,b,c)};
Ik.prototype.delete=function(a){a=void 0===a?{}:a;return Gk(this.name,a)};
function Jk(a,b){return new T("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Kk(a,b){if(!b)throw nj("openWithToken",cj(a.name));return Lk(a)}
function Lk(a){function b(){var f,g,h,k,l,m,p,t,q,w;return y(function(A){switch(A.g){case 1:return g=null!=(f=Error().stack)?f:"",wa(A,2),x(A,a.i(a.name,a.options.version,d),4);case 4:h=A.h;for(var G=a.options,K=[],M=u(Object.keys(G.ja)),O=M.next();!O.done;O=M.next()){O=O.value;var kb=G.ja[O],oc=void 0===kb.Gb?Number.MAX_VALUE:kb.Gb;!(h.g.version>=kb.Ha)||h.g.version>=oc||h.g.objectStoreNames.contains(O)||K.push(O)}k=K;if(0===k.length){A.v(5);break}l=Object.keys(a.options.ja);m=h.objectStoreNames();
if(a.l<mi("ytidb_reopen_db_retries",0))return a.l++,h.close(),$i(new T("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),A.return(b());if(!(a.m<mi("ytidb_remake_db_retries",1))){A.v(6);break}a.m++;if(!R("ytidb_remake_db_enable_backoff_delay")){A.v(7);break}return x(A,Hk(a.h),8);case 8:a.h*=2;case 7:return x(A,a.delete(),9);case 9:return $i(new T("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),A.return(b());
case 6:throw new jj(m,l);case 5:return A.return(h);case 2:p=za(A);if(p instanceof DOMException?"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){A.v(10);break}return x(A,a.i(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:t=A.h;q=t.g.version;if(void 0!==a.options.version&&q>a.options.version+1)throw t.close(),
a.j=!1,Jk(a,q);return A.return(t);case 10:throw c(),p instanceof Error&&!R("ytidb_async_stack_killswitch")&&(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),mj(p,a.name,"",null!=(w=a.options.version)?w:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.j)throw Jk(a);if(a.g)return a.g;var d={pb:function(f){f.close()},
closed:c,Ib:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var Mk=new Ik("YtIdbMeta",{ja:{databases:{Ha:1}},upgrade:function(a,b){b(1)&&rk(a,"databases",{keyPath:"actualName"})}});
function Nk(a,b){var c;return y(function(d){if(1==d.g)return x(d,Kk(Mk,b),2);c=d.h;return d.return(Cj(c,["databases"],{H:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return yj(f.g.put(a,void 0)).then(function(){})})}))})}
function Ok(a,b){var c;return y(function(d){if(1==d.g)return a?x(d,Kk(Mk,b),2):d.return();c=d.h;return d.return(c.delete("databases",a))})}
function Pk(a,b){var c,d;return y(function(e){return 1==e.g?(c=[],x(e,Kk(Mk,b),2)):3!=e.g?(d=e.h,x(e,Cj(d,["databases"],{H:!0,mode:"readonly"},function(f){c.length=0;return zk(f.objectStore("databases"),{},function(g){a(g.T())&&c.push(g.T());return g.continue()})}),3)):e.return(c)})}
function Qk(a){return Pk(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Rk,Sk=new function(){}(new function(){});
function Tk(){var a,b,c,d;return y(function(e){switch(e.g){case 1:a=Xi();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Ui)f=/WebKit\/([0-9]+)/.exec(Kb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Kb()),f=!(f&&602<=parseInt(f[1],10)));if(f||ec)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return x(e,Nk(d,Sk),4);case 4:return x(e,Ok("yt-idb-test-do-not-use",Sk),5);case 5:return e.return(!0);case 2:return za(e),e.return(!1)}})}
function Uk(){if(void 0!==Rk)return Rk;Zi=!0;return Rk=Tk().then(function(a){Zi=!1;var b;if(null!=(b=Wi())&&b.g){var c;b={hasSucceededOnce:(null==(c=Xi())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Wi())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Vk(){var a=C("ytglobal.idbToken_")||void 0;return a?Promise.resolve(a):Uk().then(function(b){(b=b?Sk:void 0)&&B("ytglobal.idbToken_",b);return b})}
;new ng;function Wk(a){if(!Si())throw a=new T("AUTH_INVALID",{dbName:a}),$i(a),a;var b=Ti();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Xk(a,b,c,d){var e,f,g,h,k,l;return y(function(m){switch(m.g){case 1:return f=null!=(e=Error().stack)?e:"",x(m,Vk(),2);case 2:g=m.h;if(!g)throw h=nj("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),$i(h),h;bj(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Wk(a);wa(m,3);return x(m,Nk(k,g),5);case 5:return x(m,Fk(k.actualName,b,d),6);case 6:return m.return(m.h);case 3:return l=za(m),wa(m,7),x(m,Ok(k.actualName,g),9);case 9:xa(m,
8);break;case 7:za(m);case 8:throw l;}})}
function Yk(a,b,c){c=void 0===c?{}:c;return Xk(a,b,!1,c)}
function Zk(a,b,c){c=void 0===c?{}:c;return Xk(a,b,!0,c)}
function $k(a,b){b=void 0===b?{}:b;var c,d;return y(function(e){if(1==e.g)return x(e,Vk(),2);if(3!=e.g){c=e.h;if(!c)return e.return();bj(a);d=Wk(a);return x(e,Gk(d.actualName,b),3)}return x(e,Ok(d.actualName,c),0)})}
function al(a,b,c){a=a.map(function(d){return y(function(e){return 1==e.g?x(e,Gk(d.actualName,b),2):x(e,Ok(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function bl(){var a=void 0===a?{}:a;var b,c;return y(function(d){if(1==d.g)return x(d,Vk(),2);if(3!=d.g){b=d.h;if(!b)return d.return();bj("LogsDatabaseV2");return x(d,Qk(b),3)}c=d.h;return x(d,al(c,a,b),0)})}
function cl(a,b){b=void 0===b?{}:b;var c;return y(function(d){if(1==d.g)return x(d,Vk(),2);if(3!=d.g){c=d.h;if(!c)return d.return();bj(a);return x(d,Gk(a,b),3)}return x(d,Ok(a,c),0)})}
;function dl(a,b){Ik.call(this,a,b);this.options=b;bj(a)}
v(dl,Ik);function el(a,b){var c;return function(){c||(c=new dl(a,b));return c}}
dl.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.Qa?Zk:Yk)(a,b,Object.assign({},c))};
dl.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Qa?cl:$k)(this.name,a)};
function fl(a,b){return el(a,b)}
;function gl(){}
;function hl(){return"INNERTUBE_API_KEY"in Jh&&"INNERTUBE_API_VERSION"in Jh}
function il(){return{xb:P("INNERTUBE_API_KEY"),yb:P("INNERTUBE_API_VERSION"),Ja:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Xa:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),zb:P("INNERTUBE_CONTEXT_CLIENT_NAME",1),Ya:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),ab:P("INNERTUBE_CONTEXT_HL"),Za:P("INNERTUBE_CONTEXT_GL"),Ab:P("INNERTUBE_HOST_OVERRIDE")||"",Cb:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Bb:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA")}}
function jl(a){var b={client:{hl:a.ab,gl:a.Za,clientName:a.Xa,clientVersion:a.Ya,configInfo:a.Ja}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=z.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=ni();0<c.length&&(b.request={internalExperimentFlags:c});kl(a,void 0,b);ll(void 0,b);ml(a,void 0,b);nl(void 0,b);R("start_sending_config_hash")&&ol(void 0,b);P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&
(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=u(Object.entries(ii(P("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function pl(a){var b=new ih,c=new bh;I(c,1,a.ab);I(c,2,a.Za);I(c,16,a.zb);I(c,17,a.Ya);if(a.Ja){var d=a.Ja,e=new Yg;d.coldConfigData&&I(e,1,d.coldConfigData);d.appInstallData&&I(e,6,d.appInstallData);d.coldHashData&&I(e,3,d.coldHashData);d.hotHashData&&I(e,5,d.hotHashData);J(c,Yg,62,e)}(d=z.devicePixelRatio)&&1!=d&&I(c,65,d);d=P("EXPERIMENTS_TOKEN","");""!==d&&I(c,54,d);d=ni();if(0<d.length){e=new dh;for(var f=0;f<d.length;f++){var g=new Wg;I(g,1,d[f].key);kd(g,2,Xg,d[f].value);rd(e,15,Wg,g)}J(b,
dh,5,e)}kl(a,c);ll(c);ml(a,c);nl(c);R("start_sending_config_hash")&&ol(c);P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(a=new gh,I(a,3,P("DELEGATED_SESSION_ID")));a=u(Object.entries(ii(P("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=u(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?I(c,12,e):"cmodel"===d?I(c,13,e):"cbr"===d?I(c,87,e):"cbrver"===d?I(c,88,e):"cos"===d?I(c,18,e):"cosver"===d?I(c,19,e):"cplatform"===d&&I(c,42,e);J(b,bh,1,c);return b}
function kl(a,b,c){a=a.Xa;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=md(b,Zg,96)||new Zg;var d=Fi();d=Object.keys(kh).indexOf(d);d=-1===d?null:d;null!==d&&I(c,3,d);J(b,Zg,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Fi())}
function ll(a,b){var c;if(R("web_log_memory_total_kbytes")&&(null==(c=z.navigator)?0:c.deviceMemory)){var d;c=null==(d=z.navigator)?void 0:d.deviceMemory;a?I(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function ml(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=md(b,Yg,62))?d:new Yg;I(c,6,a.appInstallData);J(b,Yg,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function nl(a,b){a:{var c=Ki();if(c){var d=Gi[c.type||"unknown"]||"CONN_UNKNOWN";c=Gi[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?I(a,61,Hi[d]):b&&(b.client.connectionType=d));R("web_log_effective_connection_type")&&(d=Ki(),d=null!=d&&d.effectiveType?Ji.hasOwnProperty(d.effectiveType)?Ji[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?I(a,94,Ii[d]):
b&&(b.client.effectiveConnectionType=d)))}
function ql(a,b,c){c=void 0===c?{}:c;var d={};P("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":P("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.cc||P("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().ac:b=je([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=P("SESSION_INDEX",0),R("pageid_as_header_web")&&(d["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return d}
function ol(a,b){gl.g||(gl.g=new gl);var c=C("yt.gcf.config.coldConfigData");var d=C("yt.gcf.config.hotHashData");var e=C("yt.gcf.config.coldHashData");if(c&&e&&d)if(a){var f;b=null!=(f=md(a,Yg,62))?f:new Yg;I(b,1,c);I(b,3,e);I(b,5,d);J(a,Yg,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=e,b.client.configInfo.hotHashData=d)}
;function rl(a){a=Object.assign({},a);delete a.Authorization;var b=je();if(b){var c=new Cf;c.update(P("INNERTUBE_API_KEY"));c.update(b);a.hash=wc(c.digest(),3)}return a}
;var sl;function tl(){sl||(sl=new Vi("yt.innertube"));return sl}
function ul(a,b,c,d){if(d)return null;d=tl().get("nextId",!0)||1;var e=tl().get("requests",!0)||{};e[d]={method:a,request:b,authState:rl(c),requestTime:Math.round(U())};tl().set("nextId",d+1,86400,!0);tl().set("requests",e,86400,!0);return d}
function vl(a){var b=tl().get("requests",!0)||{};delete b[a];tl().set("requests",b,86400,!0)}
function wl(a){var b=tl().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(U())-d.requestTime)){var e=d.authState,f=rl(ql(!1));mb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),xl(a,d.method,e,{}));delete b[c]}}tl().set("requests",b,86400,!0)}}
;function yl(a){this.sa=this.g=!1;this.potentialEsfErrorCounter=this.h=0;this.handleError=function(){};
this.da=function(){};
this.now=Date.now;this.ha=!1;var b;this.kb=null!=(b=a.kb)?b:100;var c;this.jb=null!=(c=a.jb)?c:1;var d;this.hb=null!=(d=a.hb)?d:2592E6;var e;this.gb=null!=(e=a.gb)?e:12E4;var f;this.ib=null!=(f=a.ib)?f:5E3;var g;this.u=null!=(g=a.u)?g:void 0;this.xa=!!a.xa;var h;this.wa=null!=(h=a.wa)?h:.1;var k;this.Ba=null!=(k=a.Ba)?k:10;a.handleError&&(this.handleError=a.handleError);a.da&&(this.da=a.da);a.ha&&(this.ha=a.ha);a.sa&&(this.sa=a.sa);this.A=a.A;this.J=a.J;this.C=a.C;this.F=a.F;this.O=a.O;this.Oa=a.Oa;
this.Na=a.Na;zl(this)&&(!this.A||this.A("networkless_logging"))&&Al(this)}
function Al(a){zl(a)&&!a.ha&&(a.g=!0,a.xa&&Math.random()<=a.wa&&a.C.rb(a.u),Bl(a),a.F.I()&&a.ma(),a.F.X(a.Oa,a.ma.bind(a)),a.F.X(a.Na,a.Sa.bind(a)))}
n=yl.prototype;n.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(zl(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.C.set(d,this.u).then(function(e){d.id=e;c.F.I()&&Cl(c,d)}).catch(function(e){Cl(c,d);
Dl(c,e)})}else this.O(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(zl(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.A&&this.A("nwl_skip_retry")&&(e.skipRetry=c);if(this.F.I()||this.A&&this.A("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return y(function(k){if(1==k.g)return x(k,d.C.set(e,d.u).catch(function(l){Dl(d,l)}),2);
f(g,h);k.g=0})}}this.O(a,b,e.skipRetry)}else this.C.set(e,this.u).catch(function(g){d.O(a,b,e.skipRetry);
Dl(d,g)})}else this.O(a,b,this.A&&this.A("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(zl(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.C.ba(d.id,c.u):e=!0;c.F.Y&&c.A&&c.A("vss_network_hint")&&c.F.Y(!0);f(g,h)};
this.O(d.url,d.options);this.C.set(d,this.u).then(function(g){d.id=g;e&&c.C.ba(d.id,c.u)}).catch(function(g){Dl(c,g)})}else this.O(a,b)};
n.ma=function(){var a=this;if(!zl(this))throw nj("throttleSend");this.h||(this.h=this.J.P(function(){var b;return y(function(c){if(1==c.g)return x(c,a.C.Wa("NEW",a.u),2);if(3!=c.g)return b=c.h,b?x(c,Cl(a,b),3):(a.Sa(),c.return());a.h&&(a.h=0,a.ma());c.g=0})},this.kb))};
n.Sa=function(){this.J.aa(this.h);this.h=0};
function Cl(a,b){var c,d;return y(function(e){switch(e.g){case 1:if(!zl(a))throw c=nj("immediateSend"),c;if(void 0===b.id){e.v(2);break}return x(e,a.C.Eb(b.id,a.u),3);case 3:(d=e.h)?b=d:a.da(Error("The request cannot be found in the database."));case 2:if(El(a,b,a.hb)){e.v(4);break}a.da(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.v(5);break}return x(e,a.C.ba(b.id,a.u),5);case 5:return e.return();case 4:b.skipRetry||(b=Fl(a,b));if(!b){e.v(0);break}if(!b.skipRetry||
void 0===b.id){e.v(8);break}return x(e,a.C.ba(b.id,a.u),8);case 8:a.O(b.url,b.options,!!b.skipRetry),e.g=0}})}
function Fl(a,b){if(!zl(a))throw nj("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return y(function(l){switch(l.g){case 1:g=Gl(f);if(!(a.A&&a.A("nwl_consider_error_code")&&g||a.A&&!a.A("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Ba)){l.v(2);break}if(!a.F.Da){l.v(3);break}return x(l,a.F.Da(),3);case 3:if(a.F.I()){l.v(2);break}c(e,f);if(!a.A||!a.A("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){l.v(6);break}return x(l,a.C.Pa(b.id,a.u,!1),6);case 6:return l.return();case 2:if(a.A&&a.A("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Ba)return l.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){l.v(8);break}return b.sendCount<a.jb?x(l,a.C.Pa(b.id,a.u),12):x(l,a.C.ba(b.id,a.u),8);case 12:a.J.P(function(){a.F.I()&&a.ma()},a.ib);
case 8:c(e,f),l.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return y(function(h){if(1==h.g)return void 0===(null==(g=b)?void 0:g.id)?h.v(2):x(h,a.C.ba(b.id,a.u),2);a.F.Y&&a.A&&a.A("vss_network_hint")&&a.F.Y(!0);d(e,f);h.g=0})};
return b}
function El(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Bl(a){if(!zl(a))throw nj("retryQueuedRequests");a.C.Wa("QUEUED",a.u).then(function(b){b&&!El(a,b,a.gb)?a.J.P(function(){return y(function(c){if(1==c.g)return void 0===b.id?c.v(2):x(c,a.C.Pa(b.id,a.u),2);Bl(a);c.g=0})}):a.F.I()&&a.ma()})}
function Dl(a,b){a.lb&&!a.F.I()?a.lb(b):a.handleError(b)}
function zl(a){return!!a.u||a.sa}
function Gl(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;var Hl=C("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.na;N.prototype.publish=N.prototype.ea;N.prototype.clear=N.prototype.clear;B("ytPubsub2Pubsub2Instance",Hl);B("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});B("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});B("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});B("ytPubsub2Pubsub2SkipSubKey",null);var Il;
function Jl(){if(Il)return Il();var a={};Il=fl("LogsDatabaseV2",{ja:(a.LogsRequestsStore={Ha:2},a),Qa:!1,upgrade:function(b,c,d){c(2)&&rk(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),d.g.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return Il()}
;function Kl(a){return Kk(Jl(),a)}
function Ll(a,b){var c,d,e,f;return y(function(g){if(1==g.g)return c={startTime:U(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},x(g,Kl(b),2);if(3!=g.g)return d=g.h,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:P("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),x(g,tk(d,e),3);f=g.h;c.Jb=U();Ml(c);return g.return(f)})}
function Nl(a,b){var c,d,e,f,g,h,k;return y(function(l){if(1==l.g)return c={startTime:U(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},x(l,Kl(b),2);if(3!=l.g)return d=l.h,e=P("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,U()],h=IDBKeyRange.bound(f,g),k=void 0,x(l,Cj(d,["LogsRequestsStore"],{mode:"readwrite",H:!0},function(m){return Ck(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.T()&&(k=p.T(),"NEW"===a&&(k.status="QUEUED",p.update(k)))})}),
3);
c.Jb=U();Ml(c);return l.return(k)})}
function Ol(a,b){var c;return y(function(d){if(1==d.g)return x(d,Kl(b),2);c=d.h;return d.return(Cj(c,["LogsRequestsStore"],{mode:"readwrite",H:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",yj(f.g.put(g,void 0)).then(function(){return g})})}))})}
function Pl(a,b,c){c=void 0===c?!0:c;var d;return y(function(e){if(1==e.g)return x(e,Kl(b),2);d=e.h;return e.return(Cj(d,["LogsRequestsStore"],{mode:"readwrite",H:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),yj(g.g.put(h,void 0)).then(function(){return h})):rj.resolve(void 0)})}))})}
function Ql(a,b){var c;return y(function(d){if(1==d.g)return x(d,Kl(b),2);c=d.h;return d.return(c.delete("LogsRequestsStore",a))})}
function Rl(a){var b,c;return y(function(d){if(1==d.g)return x(d,Kl(a),2);b=d.h;c=U()-2592E6;return x(d,Cj(b,["LogsRequestsStore"],{mode:"readwrite",H:!0},function(e){return zk(e.objectStore("LogsRequestsStore"),{},function(f){if(f.T().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Sl(){y(function(a){return x(a,bl(),0)})}
function Ml(a){if(!R("nwl_csi_killswitch")&&.01>=Math.random()){var b=C("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}}
;var Tl={},Ul=fl("ServiceWorkerLogsDatabase",{ja:(Tl.SWHealthLog={Ha:1},Tl),Qa:!0,upgrade:function(a,b){b(1)&&rk(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).g.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Vl(a){return Kk(Ul(),a)}
function Wl(a){var b,c;y(function(d){if(1==d.g)return x(d,Vl(a),2);b=d.h;c=U()-2592E6;return x(d,Cj(b,["SWHealthLog"],{mode:"readwrite",H:!0},function(e){return zk(e.objectStore("SWHealthLog"),{},function(f){if(f.T().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Xl(a){var b;return y(function(c){if(1==c.g)return x(c,Vl(a),2);b=c.h;return x(c,b.clear("SWHealthLog"),0)})}
;var Yl={},Zl=0;function $l(a){var b=new Image,c=""+Zl++;Yl[c]=b;b.onload=b.onerror=function(){delete Yl[c]};
b.src=a}
;function X(){this.g=new Map;this.h=!1}
function am(){if(!X.g){var a=C("yt.networkRequestMonitor.instance")||new X;B("yt.networkRequestMonitor.instance",a);X.g=a}return X.g}
X.prototype.requestComplete=function(a,b){b&&(this.h=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
X.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:!1===a&&this.h?!0:null};
X.prototype.removeParams=function(a){return a.split("?")[0]};
X.prototype.removeParams=X.prototype.removeParams;X.prototype.isEndpointCFR=X.prototype.isEndpointCFR;X.prototype.requestComplete=X.prototype.requestComplete;X.getInstance=am;var bm;function cm(){bm||(bm=new Vi("yt.offline"));return bm}
function dm(a){if(R("offline_error_handling")){var b=cm().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);cm().set("errors",b,2592E3,!0)}}
;function Y(){Ke.call(this);var a=this;this.j=!1;this.h=Qe();this.h.X("networkstatus-online",function(){if(a.j&&R("offline_error_handling")){var b=cm().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Ri(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Qh(d)}cm().set("errors",{},2592E3,!0)}}})}
v(Y,Ke);function em(){if(!Y.g){var a=C("yt.networkStatusManager.instance")||new Y;B("yt.networkStatusManager.instance",a);Y.g=a}return Y.g}
n=Y.prototype;n.I=function(){return this.h.I()};
n.Y=function(a){this.h.h=a};
n.wb=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
n.tb=function(){this.j=!0};
n.X=function(a,b){return this.h.X(a,b)};
n.Da=function(a){a=Oe(this.h,a);a.then(function(b){R("use_cfr_monitor")&&am().requestComplete("generate_204",b)});
return a};
Y.prototype.sendNetworkCheckRequest=Y.prototype.Da;Y.prototype.listen=Y.prototype.X;Y.prototype.enableErrorFlushing=Y.prototype.tb;Y.prototype.getWindowStatus=Y.prototype.wb;Y.prototype.networkStatusHint=Y.prototype.Y;Y.prototype.isNetworkAvailable=Y.prototype.I;Y.getInstance=em;function fm(a){a=void 0===a?{}:a;Ke.call(this);var b=this;this.h=this.s=0;this.j=em();var c=C("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.Ca?(this.Ca=a.Ca,c("networkstatus-online",function(){gm(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){gm(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Le(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Le(b,"publicytnetworkstatus-offline")})))}
v(fm,Ke);fm.prototype.I=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
fm.prototype.Y=function(a){var b=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
fm.prototype.Da=function(a){var b=this,c;return y(function(d){c=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return R("skip_network_check_if_cfr")&&am().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Y((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.I())})):c?d.return(c(a)):d.return(!0)})};
function gm(a,b){a.Ca?a.h?(Re.aa(a.s),a.s=Re.P(function(){a.l!==b&&(Le(a,b),a.l=b,a.h=U())},a.Ca-(U()-a.h))):(Le(a,b),a.l=b,a.h=U()):Le(a,b)}
;var hm;function im(){var a=yl.call;hm||(hm=new fm({hc:!0,fc:!0}));a.call(yl,this,{C:{rb:Rl,ba:Ql,Wa:Nl,Eb:Ol,Pa:Pl,set:Ll},F:hm,handleError:Qh,da:Rh,O:jm,now:U,lb:dm,J:Qi(),Oa:"publicytnetworkstatus-online",Na:"publicytnetworkstatus-offline",xa:!0,wa:.1,Ba:mi("potential_esf_error_limit",10),A:R,ha:!(Si()&&"www.youtube-nocookie.com"!==Ub(document.location.toString()))});this.i=new ng;R("networkless_immediately_drop_all_requests")&&Sl();cl("LogsDatabaseV2")}
v(im,yl);function km(){var a=C("yt.networklessRequestController.instance");a||(a=new im,B("yt.networklessRequestController.instance",a),R("networkless_logging")&&Vk().then(function(b){a.u=b;Al(a);a.i.resolve();a.xa&&Math.random()<=a.wa&&a.u&&Wl(a.u);R("networkless_immediately_drop_sw_health_store")&&lm(a)}));
return a}
im.prototype.writeThenSend=function(a,b){b||(b={});Si()||(this.g=!1);yl.prototype.writeThenSend.call(this,a,b)};
im.prototype.sendThenWrite=function(a,b,c){b||(b={});Si()||(this.g=!1);yl.prototype.sendThenWrite.call(this,a,b,c)};
im.prototype.sendAndWrite=function(a,b){b||(b={});Si()||(this.g=!1);yl.prototype.sendAndWrite.call(this,a,b)};
im.prototype.awaitInitialization=function(){return this.i.promise};
function lm(a){var b;y(function(c){if(!a.u)throw b=nj("clearSWHealthLogsDb"),b;return c.return(Xl(a.u).catch(function(d){a.handleError(d)}))})}
function jm(a,b,c){R("use_cfr_monitor")&&mm(a,b);if(R("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(U())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)Ai(a,void 0,"POST",e);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Ai(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=new Za({url:a});if(g.i&&g.h||
g.j){var h=Tb(a.match(Sb)[5]||null);var k=!(!h||!h.endsWith("/aclk")||"1"!==Zb(a,"ri"));break b}}catch(m){}k=!1}if(k){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var l=!0;break b}}catch(m){}l=!1}c=l?!0:!1}else c=!1;c||$l(a)}}else xi(a,b)}
function mm(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){am().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){am().requestComplete(a,!0);d(e,f)}}
;var nm=z.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};B("ytNetworklessLoggingInitializationOptions",nm);function om(a){var b=this;this.config_=null;a?this.config_=a:hl()&&(this.config_=il());Mi(function(){wl(b)},5E3)}
om.prototype.isReady=function(){!this.config_&&hl()&&(this.config_=il());return!!this.config_};
function xl(a,b,c,d){function e(w){w=void 0===w?!1:w;var A;if(d.retry&&"www.youtube-nocookie.com"!=h&&(w||R("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(A=ul(b,c,l,k)),A)){var G=g.onSuccess,K=g.onFetchSuccess;g.onSuccess=function(M,O){vl(A);G(M,O)};
c.onFetchSuccess=function(M,O){vl(A);K(M,O)}}try{w&&d.retry&&!d.eb.bypassNetworkless?(g.method="POST",d.eb.writeThenSend?km().writeThenSend(q,g):km().sendAndWrite(q,g)):R("web_all_payloads_via_jspb")?xi(q,g):(g.method="POST",g.postParams||(g.postParams={}),xi(q,g))}catch(M){if("InvalidAccessError"==M.name)A&&(vl(A),A=0),Rh(Error("An extension is blocking network request."));
else throw M;}A&&Mi(function(){wl(a)},5E3)}
!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Rh(new Ri("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Ri("innertube xhrclient not ready",b,c,d);Qh(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(w,A){if(d.onSuccess)d.onSuccess(A)},
onFetchSuccess:function(w){if(d.onSuccess)d.onSuccess(w)},
onError:function(w,A){if(d.onError)d.onError(A)},
onFetchError:function(w){if(d.onError)d.onError(w)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Ab)&&(h=f);var k=a.config_.Cb||!1,l=ql(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.yb+"/"+b,p={alt:"json"},t=a.config_.Bb&&f;t=t&&f.startsWith("Bearer");t||(p.key=a.config_.xb);var q=ji(""+h+m,p||{},!0);C("ytNetworklessLoggingInitializationOptions")&&nm.isNwlInitialized?
Uk().then(function(w){e(w)}):e(!1)}
;var pm=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function qm(a){this.G=a;this.g=null;this.l=0;this.B=null;this.s=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.j=0;this.Ea=$h(window,"mousemove",Va(this.Fa,this));this.Ga=bi(Va(this.Z,this),25)}
D(qm,ke);qm.prototype.Fa=function(a){void 0===a.g&&Vh(a);var b=a.g;void 0===a.h&&Vh(a);this.g=new Hd(b,a.h)};
qm.prototype.Z=function(){if(this.g){var a=pm();if(0!=this.l){var b=this.B,c=this.g,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.h[this.j]=.5<Math.abs((d-this.s)/this.s)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.G();this.s=d}this.l=a;this.B=this.g;this.j=(this.j+1)%4}};
qm.prototype.ca=function(){window.clearInterval(this.Ga);Yh(this.Ea)};var rm={};
function sm(){var a={},b=void 0===a.Fb?!1:a.Fb;a=void 0===a.ub?!0:a.ub;if(null==C("_lact",window)){var c=parseInt(P("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;B("_lact",c,window);B("_fact",c,window);-1==c&&tm();$h(document,"keydown",tm);$h(document,"keyup",tm);$h(document,"mousedown",tm);$h(document,"mouseup",tm);b?$h(window,"touchmove",function(){um("touchmove",200)},{passive:!0}):($h(window,"resize",function(){um("resize",200)}),a&&$h(window,"scroll",function(){um("scroll",200)}));
new qm(function(){um("mouse",100)});
$h(document,"touchstart",tm,{passive:!0});$h(document,"touchend",tm,{passive:!0})}}
function um(a,b){rm[a]||(rm[a]=!0,Re.P(function(){tm();rm[a]=!1},b))}
function tm(){null==C("_lact",window)&&sm();var a=Date.now();B("_lact",a,window);-1==C("_fact",window)&&B("_fact",a,window);(a=C("ytglobal.ytUtilActivityCallback_"))&&a()}
function vm(){var a=C("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var wm=z.ytPubsubPubsubInstance||new N,xm=z.ytPubsubPubsubSubscribedKeys||{},ym=z.ytPubsubPubsubTopicToKeys||{},zm=z.ytPubsubPubsubIsSynchronous||{};N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.na;N.prototype.publish=N.prototype.ea;N.prototype.clear=N.prototype.clear;B("ytPubsubPubsubInstance",wm);B("ytPubsubPubsubTopicToKeys",ym);B("ytPubsubPubsubIsSynchronous",zm);B("ytPubsubPubsubSubscribedKeys",xm);function Am(){this.store={}}
Am.prototype.storePayload=function(a,b){a=Bm(a);this.store[a]?this.store[a].push(b):this.store[a]=[b];return a};
Am.prototype.extractMatchingEntries=function(a){a=Cm(this,a);for(var b=[],c=0;c<a.length;c++)b.push.apply(b,ia(this.store[a[c]])),delete this.store[a[c]];return b};
Am.prototype.getSequenceCount=function(a){a=Cm(this,a);for(var b=0,c=0;c<a.length;c++)b+=this.store[a[c]].length||0;return b};
function Cm(a,b){a=Object.keys(a.store)||[];if(1>=a.length&&Bm(b)===a[0])return a;for(var c=[],d=0;d<a.length;d++){var e=a[d].split("/");if(Dm(b.auth,e[0])){var f=b.isJspb;Dm(void 0===f?"undefined":f?"true":"false",e[1])&&Dm(b.cttAuthInfo,e[2])&&c.push(a[d])}}return c}
function Dm(a,b){return void 0===a||"undefined"===a?!0:a===b}
Am.prototype.getSequenceCount=Am.prototype.getSequenceCount;Am.prototype.extractMatchingEntries=Am.prototype.extractMatchingEntries;Am.prototype.storePayload=Am.prototype.storePayload;function Bm(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
;var Em=mi("initial_gel_batch_timeout",2E3),Fm=Math.pow(2,16)-1,Gm=void 0;function Hm(){this.i=this.g=this.h=0}
var Im=new Hm,Jm=new Hm,Km,Lm=!0,Mm=z.ytLoggingTransportGELQueue_||new Map;B("ytLoggingTransportGELQueue_",Mm);var Nm=z.ytLoggingTransportGELProtoQueue_||new Map;B("ytLoggingTransportGELProtoQueue_",Nm);var Om=z.ytLoggingTransportTokensToCttTargetIds_||{};B("ytLoggingTransportTokensToCttTargetIds_",Om);var Pm=z.ytLoggingTransportTokensToJspbCttTargetIds_||{};B("ytLoggingTransportTokensToJspbCttTargetIds_",Pm);var Qm={};function Rm(){var a=C("yt.logging.ims");a||(a=new Am,B("yt.logging.ims",a));return a}
function Sm(a,b){R("web_all_payloads_via_jspb")&&Rh(new Ri("transport.log called for JSON in JSPB only experiment"));if("log_event"===a.endpoint){Tm(a);var c=Um(a);if(R("use_new_in_memory_storage")){Qm[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Rm().storePayload(d,a.payload);Vm(b,[],c,!1,d)}else d=Mm.get(c)||[],Mm.set(c,d),d.push(a.payload),Vm(b,d,c)}}
function Wm(a,b){if("log_event"===a.endpoint){Tm(void 0,a);var c=Um(a,!0);if(R("use_new_in_memory_storage")){Qm[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Rm().storePayload(d,a.payload.toJSON());Vm(b,[],c,!0,d)}else d=Nm.get(c)||[],Nm.set(c,d),a=a.payload.toJSON(),d.push(a),Vm(b,d,c,!0)}}
function Vm(a,b,c,d,e){d=void 0===d?!1:d;a&&(Gm=new a);a=mi("tvhtml5_logging_max_batch")||mi("web_logging_max_batch")||100;var f=U(),g=d?Jm.i:Im.i;b=b.length;e&&(b=Rm().getSequenceCount(e));b>=a?R("background_thread_flush_logs_due_to_batch_limit")?Km||(Km=Xm(function(){Ym({writeThenSend:!0},R("flush_only_full_queue")?c:void 0,d);Km=void 0},0)):Ym({writeThenSend:!0},R("flush_only_full_queue")?c:void 0,d):10<=f-g&&(Zm(d),d?Jm.i=f:Im.i=f)}
function $m(a,b){R("web_all_payloads_via_jspb")&&Rh(new Ri("transport.logIsolatedGelPayload called in JSPB only experiment"));if("log_event"===a.endpoint){Tm(a);var c=Um(a),d=new Map;d.set(c,[a.payload]);b&&(Gm=new b);return new og(function(e,f){Gm&&Gm.isReady()?an(d,Gm,e,f,{bypassNetworkless:!0},!0):e()})}}
function bn(a,b){if("log_event"===a.endpoint){Tm(void 0,a);var c=Um(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(Gm=new b);return new og(function(e){Gm&&Gm.isReady()?cn(d,Gm,e,{bypassNetworkless:!0},!0):e()})}}
function Um(a,b){var c="";if(a.ga)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Ch;c.videoId?kd(d,1,Dh,c.videoId):c.playlistId&&kd(d,2,Dh,c.playlistId);Pm[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Om[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Ym(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;!c&&R("web_all_payloads_via_jspb")&&Rh(new Ri("transport.flushLogs called for JSON in JSPB only experiment"));new og(function(d,e){c?(dn(Jm.h),dn(Jm.g),Jm.g=0):(dn(Im.h),dn(Im.g),Im.g=0);if(Gm&&Gm.isReady())if(R("use_new_in_memory_storage")){var f=a,g=c,h=Gm;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,l=new Map;if(void 0!==b)g?(e=Rm().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),k.set(b,e),cn(k,h,d,f)):(k=Rm().extractMatchingEntries({isJspb:g,
cttAuthInfo:b}),l.set(b,k),an(l,h,d,e,f));else if(g){e=u(Object.keys(Qm));for(g=e.next();!g.done;g=e.next())l=g.value,g=Rm().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),0<g.length&&k.set(l,g),delete Qm[l];cn(k,h,d,f)}else{k=u(Object.keys(Qm));for(g=k.next();!g.done;g=k.next()){g=g.value;var m=Rm().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<m.length&&l.set(g,m);delete Qm[g]}an(l,h,d,e,f)}}else f=a,k=c,h=Gm,f=void 0===f?{}:f,k=void 0===k?!1:k,void 0!==b?k?(e=new Map,k=Nm.get(b)||[],e.set(b,
k),cn(e,h,d,f),Nm.delete(b)):(k=new Map,l=Mm.get(b)||[],k.set(b,l),an(k,h,d,e,f),Mm.delete(b)):k?(cn(Nm,h,d,f),Nm.clear()):(an(Mm,h,d,e,f),Mm.clear());else Zm(c),d()})}
function Zm(a){a=void 0===a?!1:a;if(R("web_gel_timeout_cap")&&(!a&&!Im.g||a&&!Jm.g)){var b=Xm(function(){Ym({writeThenSend:!0},void 0,a)},6E4);
a?Jm.g=b:Im.g=b}dn(a?Jm.h:Im.h);b=P("LOGGING_BATCH_TIMEOUT",mi("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&Lm&&(b=Em);b=Xm(function(){Ym({writeThenSend:!0},void 0,a)},b);
a?Jm.h=b:Im.h=b}
function an(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(U()),h=a.size,k={};a=u(a);for(var l=a.next();!l.done;k={pa:k.pa,W:k.W,fa:k.fa,ra:k.ra,qa:k.qa},l=a.next()){var m=u(l.value);l=m.next().value;m=m.next().value;k.W=nb({context:jl(b.config_||il())});if(!Oa(m)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}k.W.events=m;(m=Om[l])&&en(k.W,l,m);delete Om[l];k.fa="visitorOnlyApprovedKey"===l;fn(k.W,g,k.fa);gn(e);k.ra=function(){h--;h||c()};
k.pa=0;k.qa=function(p){return function(){p.pa++;if(e.bypassNetworkless&&1===p.pa)try{xl(b,"log_event",p.W,hn({writeThenSend:!0},p.fa,p.ra,p.qa,f)),Lm=!1}catch(t){Qh(t),d()}h--;h||c()}}(k);
try{xl(b,"log_event",k.W,hn(e,k.fa,k.ra,k.qa,f)),Lm=!1}catch(p){Qh(p),d()}}}
function cn(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(U()),g=a.size,h=new Map([].concat(ia(a)));h=u(h);for(var k=h.next();!k.done;k=h.next()){var l=u(k.value).next().value,m=a.get(l);k=new Eh;var p=pl(b.config_||il());J(k,ih,1,p);m=m?jn(m):[];m=u(m);for(p=m.next();!p.done;p=m.next())rd(k,3,zh,p.value);(m=Pm[l])&&kn(k,l,m);delete Pm[l];l="visitorOnlyApprovedKey"===l;ln(k,f,l);gn(d);k=wd(k);l=hn(d,l,function(){g--;g||c()},function(){g--;
g||c()},e);
l.headers["Content-Type"]="application/json+protobuf";l.postBodyFormat="JSPB";l.postBody=k;xl(b,"log_event","",l);Lm=!1}}
function gn(a){R("always_send_and_write")&&(a.writeThenSend=!1)}
function hn(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,eb:a,ga:b,ec:!!e,headers:{},postBodyFormat:"",postBody:""};mn()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));return a}
function fn(a,b,c){mn()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=P("EVENT_ID"))&&(c=nn(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function ln(a,b,c){mn()||I(a,2,b);if(!c&&(b=P("EVENT_ID"))){c=nn();var d=new Bh;I(d,1,b);I(d,2,c);J(a,Bh,5,d)}}
function nn(){var a=P("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Fm/2));a++;a>Fm&&(a=1);Kh("BATCH_CLIENT_COUNTER",a);return a}
function en(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function kn(a,b,c){if(sd(c,1===ld(c,Dh)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;J(a,Ch,4,c);a=md(a,ih,1)||new ih;c=md(a,gh,3)||new gh;var e=new fh;I(e,2,b);I(e,1,d);rd(c,12,fh,e);J(a,gh,3,c)}
function jn(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new zh(a[c]))}catch(d){Qh(new Ri("Transport failed to deserialize "+String(a[c])))}return b}
function Tm(a,b){if(C("yt.logging.transport.enableScrapingForTest")){var c=C("yt.logging.transport.scrapedPayloadsForTesting"),d=C("yt.logging.transport.payloadToScrape","");b&&(b=C("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);B("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function mn(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
function Xm(a,b){return R("transport_use_scheduler")?Mi(a,b):ai(a,b)}
function dn(a){R("transport_use_scheduler")?Re.aa(a):window.clearTimeout(a)}
;var on=z.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",on);
function pn(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||U());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;R("enable_unknown_lact_fix_on_html5")&&sm();a=vm();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};R("log_sequence_info_on_gel_web")&&d.la&&(a=e.context,b=d.la,b={index:qn(b),groupKey:b},a.sequence=b,d.vb&&delete on[d.la]);(d.Hb?$m:Sm)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,ga:d.ga},c)}
function rn(a){Ym(void 0,void 0,void 0===a?!1:a)}
function qn(a){on[a]=a in on?on[a]+1:0;return on[a]}
;var sn=[];var tn=z.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",tn);function un(a){var b=void 0;b=void 0===b?{}:b;var c=!1;P("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);c=c?null:om;b=void 0===b?{}:b;var d=Math.round(b.timestamp||U());I(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=vm();d=new yh;I(d,1,b.timestamp||!isFinite(e)?-1:e);if(R("log_sequence_info_on_gel_web")&&b.la){e=b.la;var f=qn(e),g=new xh;I(g,2,f);I(g,1,e);J(d,xh,3,g);b.vb&&delete tn[b.la]}J(a,yh,33,d);(b.Hb?bn:Wm)({endpoint:"log_event",payload:a,cttAuthInfo:b.cttAuthInfo,ga:b.ga},c)}
;function vn(a,b){var c=void 0===c?{}:c;if(R("migrate_events_to_ts")){c=void 0===c?{}:c;var d=om;P("ytLoggingEventsDefaultDisabled",!1)&&om===om&&(d=null);R("web_all_payloads_via_jspb")?sn.push({kc:a,payload:b,options:c}):pn(a,b,d,c)}else d=om,P("ytLoggingEventsDefaultDisabled",!1)&&om==om&&(d=null),pn(a,b,d,c)}
;var wn=[{La:function(a){return"Cannot read property '"+a.key+"'"},
Aa:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{La:function(a){return"Cannot call '"+a.key+"'"},
Aa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{La:function(a){return a.key+" is not defined"},
Aa:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var yn={U:[],S:[{qb:xn,weight:500}]};function xn(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function zn(){this.S=[];this.U=[]}
var An;function Bn(){if(!An){var a=An=new zn;a.U.length=0;a.S.length=0;yn.U&&a.U.push.apply(a.U,yn.U);yn.S&&a.S.push.apply(a.S,yn.S)}return An}
;var Cn=new N;function Dn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=En(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=En(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=En(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function En(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Fn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Gn(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Dn(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Gn(e+".ve",f,g,h):0;d+=g;d+=Gn(e,a[e],b,c);if(500<d)break}}else c[b]=Hn(a),d+=c[b].length;else c[b]=Hn(a),d+=c[b].length;return d}
function Gn(a,b,c,d){c+="."+a;a=Hn(b);d[c]=a;return c.length+a.length}
function Hn(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var In=new Set,Jn=0,Kn=0,Ln=0,Mn=[],Nn=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function On(){for(var a=u(Nn),b=a.next();!b.done;b=a.next()){var c=Kb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
;function Pn(){var a;return y(function(b){return(a=lf())?b.return(a.then(function(c){c=wd(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return wc(d,3)})):b.return(Promise.resolve(null))})}
;var Qn={};function Rn(a){return Qn[a]||(Qn[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Sn={},Tn=[],Fg=new N,Un={};function Vn(){for(var a=u(Tn),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Wn(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Rn(b)]:a.getAttribute("data-"+b):null;return c}
function Xn(a){Fg.ea.apply(Fg,arguments)}
;function Yn(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Z(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Zn(a,b,c){$n||($n={},$h(window,"message",function(d){a:{if(d.origin===Z(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=$n[e.id])d.s=!0,d.s&&(E(d.l,d.sendMessage,d),d.l.length=0),d.Ra(e)}e=void 0}return e}));
$n[c]=b}
var $n=null;var ao=window;
function bo(a,b,c){this.m=this.g=this.h=null;this.i=0;this.s=!1;this.l=[];this.j=null;this.G={};if(!a)throw Error("YouTube player element ID required.");this.id=Qa(this);this.B=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Vb(a.src):"https://www.youtube.com"),this.h=new Yn(b),c||(b=co(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+Qa(this.g)),Sn[this.g.id]=this,window.postMessage){this.j=
new N;eo(this);b=Z(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Un)Un.hasOwnProperty(e)&&fo(this,e)}}
n=bo.prototype;n.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
n.getIframe=function(){return this.g};
n.Ra=function(a){go(this,a.event,a)};
n.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.j.subscribe(a,c);ho(this,a);return this};
function fo(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.B===b[0]&&ho(a,c)}}
n.destroy=function(){this.g&&this.g.id&&(Sn[this.g.id]=null);var a=this.j;a&&"function"==typeof a.dispose&&a.dispose();if(this.m){a=this.g;var b=a.parentNode;b&&b.replaceChild(this.m,a)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);$n&&($n[this.id]=null);this.h=null;a=this.g;for(var c in lb)lb[c][0]==a&&Yh(c);this.m=this.g=null};
n.Ua=function(){return{}};
function io(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.s?a.sendMessage(b):a.l.push(b)}
function go(a,b,c){a.j.i||(c={target:a,data:c},a.j.ea(b,c),Xn(a.B+"."+b,c))}
function co(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Z(a.h,"title"));(b=Z(a.h,"width"))&&c.setAttribute("width",b.toString());(b=Z(a.h,"height"))&&c.setAttribute("height",
b.toString());var g=a.Ua();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&E(["debugjs","debugcss"],function(k){var l=Zb(window.location.href,k);null!==l&&(g[k]=l)});
var h=""+Z(a.h,"host")+("/embed/"+Z(a.h,"videoId"))+"?"+Xb(g);ao.yt_embedsEnableUaChProbe?Pn().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=Wd(l.href).toString();Gd(c,Xd(k));return k}):ao.yt_embedsEnableIframeSrcWithIntent?Gd(c,Xd(h)):c.src=h;
return c}
n.fb=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.i)};
function eo(a){Zn(a.h,a,a.id);a.i=bi(a.fb.bind(a),250);$h(a.g,"load",function(){window.clearInterval(a.i);a.i=bi(a.fb.bind(a),250)})}
function ho(a,b){a.G[b]||(a.G[b]=!0,io(a,"addEventListener",[b]))}
n.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[Vb(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var d=0;d<c.length;d++)try{this.g.contentWindow.postMessage(b,c[d])}catch(Ob){if(Ob.name&&"SyntaxError"===Ob.name){if(!(Ob.message&&0<Ob.message.indexOf("target origin ''"))){var e=void 0,f=Ob;e=void 0===e?{}:e;e.name=P("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=P("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=e||{},h="WARNING";h=void 0===h?"ERROR":
h;if(f){f.hasOwnProperty("level")&&f.level&&(h=f.level);if(R("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=Jn)){var m=void 0,p=void 0,t=f,q=g,w=Ad(t),A=w.message||"Unknown Error",G=w.name||"UnknownError",
K=w.stack||t.h||"Not available";if(K.startsWith(G+": "+A)){var M=K.split("\n");M.shift();K=M.join("\n")}var O=w.lineNumber||"Not available",kb=w.fileName||"Not available",oc=K,ya=0;if(t.hasOwnProperty("args")&&t.args&&t.args.length)for(var sa=0;sa<t.args.length&&!(ya=Fn(t.args[sa],"params."+sa,q,ya),500<=ya);sa++);else if(t.hasOwnProperty("params")&&t.params){var W=t.params;if("object"===typeof t.params)for(p in W){if(W[p]){var ba="params."+p,ca=Hn(W[p]);q[ba]=ca;ya+=ba.length+ca.length;if(500<ya)break}}else q.params=
Hn(W)}if(Mn.length)for(var V=0;V<Mn.length&&!(ya=Fn(Mn[V],"params.context."+V,q,ya),500<=ya);V++);navigator.vendor&&!q.hasOwnProperty("vendor")&&(q["device.vendor"]=navigator.vendor);var S={message:A,name:G,lineNumber:O,fileName:kb,stack:oc,params:q,sampleWeight:1},Dj=Number(t.columnNumber);isNaN(Dj)||(S.lineNumber=S.lineNumber+":"+Dj);if("IGNORED"===t.level)m=0;else a:{for(var Ej=Bn(),Fj=u(Ej.U),Lf=Fj.next();!Lf.done;Lf=Fj.next()){var Gj=Lf.value;if(S.message&&S.message.match(Gj.ic)){m=Gj.weight;
break a}}for(var Hj=u(Ej.S),Mf=Hj.next();!Mf.done;Mf=Hj.next()){var Ij=Mf.value;if(Ij.qb(S)){m=Ij.weight;break a}}m=1}S.sampleWeight=m;for(var Jj=u(wn),Nf=Jj.next();!Nf.done;Nf=Jj.next()){var Of=Nf.value;if(Of.Aa[S.name])for(var Kj=u(Of.Aa[S.name]),Pf=Kj.next();!Pf.done;Pf=Kj.next()){var Lj=Pf.value,Nd=S.message.match(Lj.regexp);if(Nd){S.params["params.error.original"]=Nd[0];for(var Qf=Lj.groups,Mj={},Pb=0;Pb<Qf.length;Pb++)Mj[Qf[Pb]]=Nd[Pb+1],S.params["params.error."+Qf[Pb]]=Nd[Pb+1];S.message=Of.La(Mj);
break}}}S.params||(S.params={});var Nj=Bn();S.params["params.errorServiceSignature"]="msg="+Nj.U.length+"&cb="+Nj.S.length;S.params["params.serviceWorker"]="false";z.document&&z.document.querySelectorAll&&(S.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));xb("sample").constructor!==wb&&(S.params["params.fconst"]="true");var va=S;window.yterr&&"function"===typeof window.yterr&&window.yterr(va);if(0!==va.sampleWeight&&!In.has(va.message)){if("ERROR"===h){Cn.ea("handleError",
va);if(R("record_app_crashed_web")&&0===Ln&&1===va.sampleWeight)if(Ln++,R("errors_via_jspb")){var Rf=new wh;I(Rf,1,1);if(!R("report_client_error_with_app_crash_ks")){var Oj=new rh;I(Oj,1,va.message);var Pj=new sh;J(Pj,rh,3,Oj);var Qj=new th;J(Qj,sh,5,Pj);var Rj=new uh;J(Rj,th,9,Qj);J(Rf,uh,4,Rj)}var oo=Rf,Sj=new zh;pd(Sj,wh,20,Ah,oo);un(Sj)}else{var Tj={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};R("report_client_error_with_app_crash_ks")||(Tj.systemHealth={crashData:{clientError:{logMessage:{message:va.message}}}});
vn("appCrashed",Tj)}Kn++}else"WARNING"===h&&Cn.ea("handleWarning",va);if(R("kevlar_gel_error_routing"))a:{var Sf=void 0,Tf=void 0,Hc=h,Q=va;if(R("errors_via_jspb")){if(On())Tf=void 0;else{var Qb=new oh;I(Qb,1,Q.stack);Q.fileName&&I(Qb,4,Q.fileName);var Ja=Q.lineNumber&&Q.lineNumber.split?Q.lineNumber.split(":"):[];0!==Ja.length&&(1!==Ja.length||isNaN(Number(Ja[0]))?2!==Ja.length||isNaN(Number(Ja[0]))||isNaN(Number(Ja[1]))||(I(Qb,2,Number(Ja[0])),I(Qb,3,Number(Ja[1]))):I(Qb,2,Number(Ja[0])));var rb=
new rh;I(rb,1,Q.message);I(rb,3,Q.name);I(rb,6,Q.sampleWeight);"ERROR"===Hc?I(rb,2,2):"WARNING"===Hc?I(rb,2,1):I(rb,2,0);var Uf=new ph;I(Uf,1,!0);pd(Uf,oh,3,qh,Qb);var sb=new lh;I(sb,3,window.location.href);for(var Uj=P("FEXP_EXPERIMENTS",[]),Vf=0;Vf<Uj.length;Vf++){var Vj=sb,po=Uj[Vf];$c(Vj);jd(Vj,5,2,!1).push(po)}var Wf=Lh();if(!Mh()&&Wf)for(var Wj=u(Object.keys(Wf)),tb=Wj.next();!tb.done;tb=Wj.next()){var Xj=tb.value,Xf=new nh;I(Xf,1,Xj);I(Xf,2,String(Wf[Xj]));rd(sb,4,nh,Xf)}var Yf=Q.params;if(Yf){var Yj=
u(Object.keys(Yf));for(tb=Yj.next();!tb.done;tb=Yj.next()){var Zj=tb.value,Zf=new nh;I(Zf,1,"client."+Zj);I(Zf,2,String(Yf[Zj]));rd(sb,4,nh,Zf)}}var ak=P("SERVER_NAME"),bk=P("SERVER_VERSION");if(ak&&bk){var $f=new nh;I($f,1,"server.name");I($f,2,ak);rd(sb,4,nh,$f);var ag=new nh;I(ag,1,"server.version");I(ag,2,bk);rd(sb,4,nh,ag)}var Od=new sh;J(Od,lh,1,sb);J(Od,ph,2,Uf);J(Od,rh,3,rb);Tf=Od}var ck=Tf;if(!ck)break a;var dk=new zh;pd(dk,sh,163,Ah,ck);un(dk)}else{if(On())Sf=void 0;else{var Ic={stackTrace:Q.stack};
Q.fileName&&(Ic.filename=Q.fileName);var Ka=Q.lineNumber&&Q.lineNumber.split?Q.lineNumber.split(":"):[];0!==Ka.length&&(1!==Ka.length||isNaN(Number(Ka[0]))?2!==Ka.length||isNaN(Number(Ka[0]))||isNaN(Number(Ka[1]))||(Ic.lineNumber=Number(Ka[0]),Ic.columnNumber=Number(Ka[1])):Ic.lineNumber=Number(Ka[0]));var bg={level:"ERROR_LEVEL_UNKNOWN",message:Q.message,errorClassName:Q.name,sampleWeight:Q.sampleWeight};"ERROR"===Hc?bg.level="ERROR_LEVEL_ERROR":"WARNING"===Hc&&(bg.level="ERROR_LEVEL_WARNNING");
var qo={isObfuscated:!0,browserStackInfo:Ic},Rb={pageUrl:window.location.href,kvPairs:[]};P("FEXP_EXPERIMENTS")&&(Rb.experimentIds=P("FEXP_EXPERIMENTS"));var cg=Lh();if(!Mh()&&cg)for(var ek=u(Object.keys(cg)),ub=ek.next();!ub.done;ub=ek.next()){var fk=ub.value;Rb.kvPairs.push({key:fk,value:String(cg[fk])})}var dg=Q.params;if(dg){var gk=u(Object.keys(dg));for(ub=gk.next();!ub.done;ub=gk.next()){var hk=ub.value;Rb.kvPairs.push({key:"client."+hk,value:String(dg[hk])})}}var ik=P("SERVER_NAME"),jk=P("SERVER_VERSION");
ik&&jk&&(Rb.kvPairs.push({key:"server.name",value:ik}),Rb.kvPairs.push({key:"server.version",value:jk}));Sf={errorMetadata:Rb,stackTrace:qo,logMessage:bg}}var kk=Sf;if(!kk)break a;vn("clientError",kk)}if("ERROR"===Hc||R("errors_flush_gel_always_killswitch"))b:if(R("migrate_events_to_ts"))c:{if(R("web_fp_via_jspb")&&(rn(!0),!R("web_fp_via_jspb_and_json")))break c;rn()}else{if(R("web_fp_via_jspb")&&(rn(!0),!R("web_fp_via_jspb_and_json")))break b;rn()}}if(!R("suppress_error_204_logging")){var vb=va,
Jc=vb.params||{},Ya={urlParams:{a:"logerror",t:"jserror",type:vb.name,msg:vb.message.substr(0,250),line:vb.lineNumber,level:h,"client.name":Jc.name},postParams:{url:P("PAGE_NAME",window.location.href),file:vb.fileName},method:"POST"};Jc.version&&(Ya["client.version"]=Jc.version);if(Ya.postParams){vb.stack&&(Ya.postParams.stack=vb.stack);for(var lk=u(Object.keys(Jc)),eg=lk.next();!eg.done;eg=lk.next()){var mk=eg.value;Ya.postParams["client."+mk]=Jc[mk]}var fg=Lh();if(fg)for(var nk=u(Object.keys(fg)),
gg=nk.next();!gg.done;gg=nk.next()){var ok=gg.value;Ya.postParams[ok]=fg[ok]}var pk=P("SERVER_NAME"),qk=P("SERVER_VERSION");pk&&qk&&(Ya.postParams["server.name"]=pk,Ya.postParams["server.version"]=qk)}xi(P("ECATCHER_REPORT_HOST","")+"/error_204",Ya)}try{In.add(va.message)}catch(vo){}Jn++}}}}}else throw Ob;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function jo(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function ko(a){return 0===a.search("get")||0===a.search("is")}
;function lo(a,b){bo.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.M={};this.playerInfo={};this.videoTitle=""}
v(lo,bo);n=lo.prototype;n.Ua=function(){var a=Z(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Z(this.h,"embedConfig")){if(Pa(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
n.Ra=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Pa(a))for(var c in a)a.hasOwnProperty(c)&&(this.M[c]=a[c]);break;case "infoDelivery":mo(this,a);break;case "initialDelivery":Pa(a)&&(window.clearInterval(this.i),this.playerInfo={},this.M={},no(this,a.apiInterface),mo(this,a));break;default:go(this,b,a)}};
function mo(a,b){if(Pa(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+Z(a.h,"title"))))}}
function no(a,b){E(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:jo(c)?this[c]=function(){this.playerInfo={};
this.M={};io(this,c,arguments);return this}:ko(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){io(this,c,arguments);
return this})},a)}
n.getVideoEmbedCode=function(){var a=Z(this.h,"host")+("/embed/"+Z(this.h,"videoId")),b=Number(Z(this.h,"width")),c=Number(Z(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;Gb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Ab,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Bb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Cb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Db,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Eb,"&#39;")),
-1!=a.indexOf("\x00")&&(a=a.replace(Fb,"&#0;")));return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+((null!=d?d:"YouTube video player")+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')};
n.getOptions=function(a){return this.M.namespaces?a?this.M[a]?this.M[a].options||[]:[]:this.M.namespaces||[]:[]};
n.getOption=function(a,b){if(this.M.namespaces&&a&&b&&this.M[a])return this.M[a][b]};
function ro(a){if("iframe"!==a.tagName.toLowerCase()){var b=Wn(a,"videoid");b&&(b={videoId:b,width:Wn(a,"width"),height:Wn(a,"height")},new lo(a,b))}}
;B("YT.PlayerState.UNSTARTED",-1);B("YT.PlayerState.ENDED",0);B("YT.PlayerState.PLAYING",1);B("YT.PlayerState.PAUSED",2);B("YT.PlayerState.BUFFERING",3);B("YT.PlayerState.CUED",5);B("YT.get",function(a){return Sn[a]});
B("YT.scan",Vn);B("YT.subscribe",function(a,b,c){Fg.subscribe(a,b,c);Un[a]=!0;for(var d in Sn)Sn.hasOwnProperty(d)&&fo(Sn[d],a)});
B("YT.unsubscribe",function(a,b,c){Eg(a,b,c)});
B("YT.Player",lo);bo.prototype.destroy=bo.prototype.destroy;bo.prototype.setSize=bo.prototype.setSize;bo.prototype.getIframe=bo.prototype.getIframe;bo.prototype.addEventListener=bo.prototype.addEventListener;lo.prototype.getVideoEmbedCode=lo.prototype.getVideoEmbedCode;lo.prototype.getOptions=lo.prototype.getOptions;lo.prototype.getOption=lo.prototype.getOption;
Tn.push(function(a){var b=a;b||(b=document);a=gb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=bb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=gb(b);E(fb(a,b),ro)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Vn();var so=z.onYTReady;so&&so();var to=z.onYouTubeIframeAPIReady;to&&to();var uo=z.onYouTubePlayerAPIReady;uo&&uo();}).call(this);
