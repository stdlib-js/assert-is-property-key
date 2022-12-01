// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,c=r.__lookupSetter__,l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,l){var f,a,y,b;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((a="value"in l)&&(u.call(t,e)||c.call(t,e)?(f=t.__proto__,t.__proto__=r,delete t[e],t[e]=l.value,t.__proto__=f):t[e]=l.value),y="get"in l,b="set"in l,a&&(y||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,e,l.get),b&&i&&i.call(t,e,l.set),t};function f(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function a(t){return"string"==typeof t}function y(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var b=y();function p(){return b&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,m=Object.prototype.hasOwnProperty,v="function"==typeof Symbol?Symbol.toStringTag:"",_=p()?function(t){var e,r,n,o,i;if(null==t)return s.call(t);r=t[v],i=v,e=null!=(o=t)&&m.call(o,i);try{t[v]=void 0}catch(e){return s.call(t)}return n=s.call(t),e?t[v]=r:delete t[v],n}:function(t){return s.call(t)},j=String.prototype.valueOf,d=p();function g(t){return"object"==typeof t&&(t instanceof String||(d?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object String]"===_(t)))}function S(t){return a(t)||g(t)}function O(t){return"symbol"==typeof t}f(S,"isPrimitive",a),f(S,"isObject",g);var h=/^Symbol\(.*\)$/;function P(t){try{return"symbol"==typeof t.valueOf()&&h.test(function(t){return Symbol.prototype.toString.call(t)}(t))}catch(t){return!1}}function T(t){return"object"==typeof t&&"[object Symbol]"===_(t)&&P(t)}function w(t){return O(t)||T(t)}function I(t){return function(){return t}}f(w,"isPrimitive",O),f(w,"isObject",T);var N,E=I(!1),V=I(!1),x=I(!1);f(E,"isPrimitive",V),f(E,"isObject",x),N=y()?w:E;const{isPrimitive:A}=N;function F(t){return"number"==typeof t}var G=Number,k=G.prototype.toString,Y=p();function C(t){return"object"==typeof t&&(t instanceof G||(Y?function(t){try{return k.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function K(t){return F(t)||C(t)}f(K,"isPrimitive",F),f(K,"isObject",C);var M=Number.POSITIVE_INFINITY,$=G.NEGATIVE_INFINITY,q=Math.floor;function z(t){return t<M&&t>$&&q(e=t)===e;var e}function B(t){return F(t)&&z(t)}function D(t){return C(t)&&z(t.valueOf())}function H(t){return B(t)||D(t)}function J(t){return B(t)&&t>=0}function L(t){return D(t)&&t.valueOf()>=0}function Q(t){return J(t)||L(t)}return f(H,"isPrimitive",B),f(H,"isObject",D),f(Q,"isPrimitive",J),f(Q,"isObject",L),function(t){return a(t)||A(t)||J(t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isPropertyKey=e();
//# sourceMappingURL=browser.js.map
