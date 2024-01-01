// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function n(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,i,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(i=(-c).toString(e),r.precision&&(i=n(i,r.precision,r.padRight)),i="-"+i):(i=c.toString(e),c||r.precision?r.precision&&(i=n(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):a.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(r){return"string"==typeof r}var u=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,b=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function w(r){var e,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":u(n)<1e-4?((e=r.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(r.precision),r.alternate||(i=f.call(i,m,"$1e"),i=f.call(i,v,"e"),i=f.call(i,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),r.alternate&&(i=f.call(i,b,"$1."),i=f.call(i,h,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===p.call(r.specifier)?p.call(i):l.call(i)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function S(r,e,t){var i=e-r.length;return i<0?r:r=t?r+_(i):_(i)+r}var j=String.fromCharCode,E=isNaN,O=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,i,a,o,u,l,p,f;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,p=0;p<r.length;p++)if(s(i=r[p]))u+=i;else{if(e=void 0!==i.precision,!(i=k(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,E(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,E(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!E(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=E(o)?String(i.arg):j(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=w(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=S(i.arg,i.width,i.padRight)),u+=i.arg||"",l+=1}return u}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,i,n;for(t=[],n=0,i=I.exec(r);i;)(e=r.slice(n,I.lastIndex-i[0].length)).length&&t.push(e),t.push(P(i)),n=I.lastIndex,i=I.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function V(r){return"string"==typeof r}function F(r){var e,t,i;if(!V(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=T(r),(t=new Array(arguments.length))[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return x.apply(null,t)}var $=Object.prototype,N=$.toString,A=$.__defineGetter__,C=$.__defineSetter__,R=$.__lookupGetter__,G=$.__lookupSetter__;var Z=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(R.call(r,e)||G.call(r,e)?(i=r.__proto__,r.__proto__=$,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&A&&A.call(r,e,t.get),o&&C&&C.call(r,e,t.set),r};function W(r,e,t){Z(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(r){return"string"==typeof r}function M(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var U=M();function X(){return U&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var q="function"==typeof Symbol?Symbol:void 0,B="function"==typeof q?q.toStringTag:"";var D=X()?function(r){var e,t,i,n,a;if(null==r)return Y.call(r);t=r[B],a=B,e=null!=(n=r)&&z.call(n,a);try{r[B]=void 0}catch(e){return Y.call(r)}return i=Y.call(r),e?r[B]=t:delete r[B],i}:function(r){return Y.call(r)},H=String.prototype.valueOf;var J=X();function K(r){return"object"==typeof r&&(r instanceof String||(J?function(r){try{return H.call(r),!0}catch(r){return!1}}(r):"[object String]"===D(r)))}function Q(r){return L(r)||K(r)}function rr(r){return"symbol"==typeof r}W(Q,"isPrimitive",L),W(Q,"isObject",K);var er=/^Symbol\(.*\)$/;function tr(r){try{return"symbol"==typeof r.valueOf()&&er.test(function(r){return Symbol.prototype.toString.call(r)}(r))}catch(r){return!1}}function ir(r){return"object"==typeof r&&"[object Symbol]"===D(r)&&tr(r)}function nr(r){return rr(r)||ir(r)}function ar(r){return function(){return r}}W(nr,"isPrimitive",rr),W(nr,"isObject",ir);var or,cr=ar(!1),sr=ar(!1),ur=ar(!1);W(cr,"isPrimitive",sr),W(cr,"isObject",ur),or=M()?nr:cr;const{isPrimitive:lr}=or;function pr(r){return"number"==typeof r}var fr=Number,gr=fr.prototype.toString;var dr=X();function br(r){return"object"==typeof r&&(r instanceof fr||(dr?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function hr(r){return pr(r)||br(r)}W(hr,"isPrimitive",pr),W(hr,"isObject",br);var yr=Number.POSITIVE_INFINITY,vr=fr.NEGATIVE_INFINITY,mr=Math.floor;function wr(r){return r<yr&&r>vr&&mr(e=r)===e;var e}function _r(r){return pr(r)&&wr(r)}function Sr(r){return br(r)&&wr(r.valueOf())}function jr(r){return _r(r)||Sr(r)}function Er(r){return _r(r)&&r>=0}function Or(r){return Sr(r)&&r.valueOf()>=0}function kr(r){return Er(r)||Or(r)}function xr(r){return L(r)||lr(r)||Er(r)}W(jr,"isPrimitive",_r),W(jr,"isObject",Sr),W(kr,"isPrimitive",Er),W(kr,"isObject",Or);export{xr as default};
//# sourceMappingURL=mod.js.map
