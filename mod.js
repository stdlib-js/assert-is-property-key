// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var s=Math.abs,u=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":s(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=p.call(i,y,"$1e"),i=p.call(i,v,"e"),i=p.call(i,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=p.call(i,f,"e+0$1"),i=p.call(i,g,"e-0$1"),e.alternate&&(i=p.call(i,d,"$1."),i=p.call(i,b,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===l.call(e.specifier)?l.call(i):u.call(i)}function w(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,S=isNaN,j=Array.isArray;function E(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,i,a,o,s,u,l,p,f,g,d,b;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",u=1,l=0;l<e.length;l++)if(i=e[l],"string"==typeof i)s+=i;else{if(r=void 0!==i.precision,!(i=E(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+i+"`.");for(i.mapping&&(u=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[u],10),u+=1,S(i.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[u],10),u+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[u],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(f=i.arg,g=i.width,d=i.padRight,b=void 0,(b=g-f.length)<0?f:f=d?f+w(b):w(b)+f)),s+=i.arg||"",u+=1}return s}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,i,n;for(t=[],n=0,i=k.exec(e);i;)(r=e.slice(n,k.lastIndex-i[0].length)).length&&t.push(r),t.push(x(i)),n=k.lastIndex,i=k.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function P(e){var r,t;if("string"!=typeof e)throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[I(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return O.apply(null,r)}var T=Object.prototype,V=T.toString,F=T.__defineGetter__,$=T.__defineSetter__,N=T.__lookupGetter__,A=T.__lookupSetter__;var C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(N.call(e,r)||A.call(e,r)?(i=e.__proto__,e.__proto__=T,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&F&&F.call(e,r,t.get),o&&$&&$.call(e,r,t.set),e};function R(e,r,t){C(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(e){return"string"==typeof e}function Z(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var W=Z();function L(){return W&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var z=L()?function(e){var r,t,i,n,a;if(null==e)return M.call(e);t=e[Y],a=Y,r=null!=(n=e)&&U.call(n,a);try{e[Y]=void 0}catch(r){return M.call(e)}return i=M.call(e),r?e[Y]=t:delete e[Y],i}:function(e){return M.call(e)},q=String.prototype.valueOf;var B=L();function D(e){return"object"==typeof e&&(e instanceof String||(B?function(e){try{return q.call(e),!0}catch(e){return!1}}(e):"[object String]"===z(e)))}function H(e){return G(e)||D(e)}function J(e){return"symbol"==typeof e}R(H,"isPrimitive",G),R(H,"isObject",D);var K=/^Symbol\(.*\)$/;function Q(e){try{return"symbol"==typeof e.valueOf()&&K.test(function(e){return Symbol.prototype.toString.call(e)}(e))}catch(e){return!1}}function ee(e){return"object"==typeof e&&"[object Symbol]"===z(e)&&Q(e)}function re(e){return J(e)||ee(e)}function te(e){return function(){return e}}R(re,"isPrimitive",J),R(re,"isObject",ee);var ie,ne=te(!1),ae=te(!1),oe=te(!1);R(ne,"isPrimitive",ae),R(ne,"isObject",oe),ie=Z()?re:ne;const{isPrimitive:ce}=ie;function se(e){return"number"==typeof e}var ue=Number,le=ue.prototype.toString;var pe=L();function fe(e){return"object"==typeof e&&(e instanceof ue||(pe?function(e){try{return le.call(e),!0}catch(e){return!1}}(e):"[object Number]"===z(e)))}function ge(e){return se(e)||fe(e)}R(ge,"isPrimitive",se),R(ge,"isObject",fe);var de=Number.POSITIVE_INFINITY,be=ue.NEGATIVE_INFINITY,he=Math.floor;function ve(e){return e<de&&e>be&&he(r=e)===r;var r}function ye(e){return se(e)&&ve(e)}function me(e){return fe(e)&&ve(e.valueOf())}function we(e){return ye(e)||me(e)}function _e(e){return ye(e)&&e>=0}function Se(e){return me(e)&&e.valueOf()>=0}function je(e){return _e(e)||Se(e)}function Ee(e){return G(e)||ce(e)||_e(e)}R(we,"isPrimitive",ye),R(we,"isObject",me),R(je,"isPrimitive",_e),R(je,"isObject",Se);export{Ee as default};
//# sourceMappingURL=mod.js.map
