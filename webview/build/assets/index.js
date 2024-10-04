function Nf(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var On=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $u={exports:{}},fl={},Uu={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qr=Symbol.for("react.element"),jf=Symbol.for("react.portal"),Mf=Symbol.for("react.fragment"),Tf=Symbol.for("react.strict_mode"),Rf=Symbol.for("react.profiler"),Df=Symbol.for("react.provider"),Lf=Symbol.for("react.context"),Af=Symbol.for("react.forward_ref"),If=Symbol.for("react.suspense"),Ff=Symbol.for("react.memo"),$f=Symbol.for("react.lazy"),vs=Symbol.iterator;function Uf(e){return e===null||typeof e!="object"?null:(e=vs&&e[vs]||e["@@iterator"],typeof e=="function"?e:null)}var qu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bu=Object.assign,Hu={};function Kt(e,n,t){this.props=e,this.context=n,this.refs=Hu,this.updater=t||qu}Kt.prototype.isReactComponent={};Kt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Kt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vu(){}Vu.prototype=Kt.prototype;function xa(e,n,t){this.props=e,this.context=n,this.refs=Hu,this.updater=t||qu}var ba=xa.prototype=new Vu;ba.constructor=xa;Bu(ba,Kt.prototype);ba.isPureReactComponent=!0;var gs=Array.isArray,Wu=Object.prototype.hasOwnProperty,wa={current:null},Qu={key:!0,ref:!0,__self:!0,__source:!0};function Ku(e,n,t){var r,o={},l=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(l=""+n.key),n)Wu.call(n,r)&&!Qu.hasOwnProperty(r)&&(o[r]=n[r]);var a=arguments.length-2;if(a===1)o.children=t;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:qr,type:e,key:l,ref:i,props:o,_owner:wa.current}}function qf(e,n){return{$$typeof:qr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ka(e){return typeof e=="object"&&e!==null&&e.$$typeof===qr}function Bf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ys=/\/+/g;function Hl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Bf(""+e.key):n.toString(36)}function Oo(e,n,t,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case qr:case jf:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Hl(i,0):r,gs(o)?(t="",e!=null&&(t=e.replace(ys,"$&/")+"/"),Oo(o,n,t,"",function(u){return u})):o!=null&&(ka(o)&&(o=qf(o,t+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(ys,"$&/")+"/")+e)),n.push(o)),1;if(i=0,r=r===""?".":r+":",gs(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+Hl(l,a);i+=Oo(l,n,t,s,o)}else if(s=Uf(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+Hl(l,a++),i+=Oo(l,n,t,s,o);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function no(e,n,t){if(e==null)return e;var r=[],o=0;return Oo(e,r,"","",function(l){return n.call(t,l,o++)}),r}function Hf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},Eo={transition:null},Vf={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:Eo,ReactCurrentOwner:wa};function Xu(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:no,forEach:function(e,n,t){no(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return no(e,function(){n++}),n},toArray:function(e){return no(e,function(n){return n})||[]},only:function(e){if(!ka(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Kt;L.Fragment=Mf;L.Profiler=Rf;L.PureComponent=xa;L.StrictMode=Tf;L.Suspense=If;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vf;L.act=Xu;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Bu({},e.props),o=e.key,l=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,i=wa.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)Wu.call(n,s)&&!Qu.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:qr,type:e.type,key:o,ref:l,props:r,_owner:i}};L.createContext=function(e){return e={$$typeof:Lf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Df,_context:e},e.Consumer=e};L.createElement=Ku;L.createFactory=function(e){var n=Ku.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Af,render:e}};L.isValidElement=ka;L.lazy=function(e){return{$$typeof:$f,_payload:{_status:-1,_result:e},_init:Hf}};L.memo=function(e,n){return{$$typeof:Ff,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=Eo.transition;Eo.transition={};try{e()}finally{Eo.transition=n}};L.unstable_act=Xu;L.useCallback=function(e,n){return ke.current.useCallback(e,n)};L.useContext=function(e){return ke.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};L.useEffect=function(e,n){return ke.current.useEffect(e,n)};L.useId=function(){return ke.current.useId()};L.useImperativeHandle=function(e,n,t){return ke.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return ke.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return ke.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return ke.current.useMemo(e,n)};L.useReducer=function(e,n,t){return ke.current.useReducer(e,n,t)};L.useRef=function(e){return ke.current.useRef(e)};L.useState=function(e){return ke.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return ke.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return ke.current.useTransition()};L.version="18.3.1";Uu.exports=L;var S=Uu.exports;const $=zf(S),Wf=Nf({__proto__:null,default:$},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf=S,Kf=Symbol.for("react.element"),Xf=Symbol.for("react.fragment"),Yf=Object.prototype.hasOwnProperty,Gf=Qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zf={key:!0,ref:!0,__self:!0,__source:!0};function Yu(e,n,t){var r,o={},l=null,i=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)Yf.call(n,r)&&!Zf.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:Kf,type:e,key:l,ref:i,props:o,_owner:Gf.current}}fl.Fragment=Xf;fl.jsx=Yu;fl.jsxs=Yu;$u.exports=fl;var c=$u.exports,Gu={exports:{}},Re={},Zu={exports:{}},Ju={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(O,T){var R=O.length;O.push(T);e:for(;0<R;){var W=R-1>>>1,J=O[W];if(0<o(J,T))O[W]=T,O[R]=J,R=W;else break e}}function t(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var T=O[0],R=O.pop();if(R!==T){O[0]=R;e:for(var W=0,J=O.length,yt=J>>>1;W<yt;){var ln=2*(W+1)-1,xt=O[ln],M=ln+1,j=O[M];if(0>o(xt,R))M<J&&0>o(j,xt)?(O[W]=j,O[M]=R,W=M):(O[W]=xt,O[ln]=R,W=ln);else if(M<J&&0>o(j,R))O[W]=j,O[M]=R,W=M;else break e}}return T}function o(O,T){var R=O.sortIndex-T.sortIndex;return R!==0?R:O.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],u=[],d=1,f=null,h=3,y=!1,x=!1,g=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(O){for(var T=t(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=O)r(u),T.sortIndex=T.expirationTime,n(s,T);else break;T=t(u)}}function b(O){if(g=!1,v(O),!x)if(t(s)!==null)x=!0,Zt(P);else{var T=t(u);T!==null&&Jt(b,T.startTime-O)}}function P(O,T){x=!1,g&&(g=!1,m(N),N=-1),y=!0;var R=h;try{for(v(T),f=t(s);f!==null&&(!(f.expirationTime>T)||O&&!q());){var W=f.callback;if(typeof W=="function"){f.callback=null,h=f.priorityLevel;var J=W(f.expirationTime<=T);T=e.unstable_now(),typeof J=="function"?f.callback=J:f===t(s)&&r(s),v(T)}else r(s);f=t(s)}if(f!==null)var yt=!0;else{var ln=t(u);ln!==null&&Jt(b,ln.startTime-T),yt=!1}return yt}finally{f=null,h=R,y=!1}}var _=!1,C=null,N=-1,I=5,A=-1;function q(){return!(e.unstable_now()-A<I)}function bn(){if(C!==null){var O=e.unstable_now();A=O;var T=!0;try{T=C(!0,O)}finally{T?Gn():(_=!1,C=null)}}else _=!1}var Gn;if(typeof p=="function")Gn=function(){p(bn)};else if(typeof MessageChannel<"u"){var eo=new MessageChannel,Bl=eo.port2;eo.port1.onmessage=bn,Gn=function(){Bl.postMessage(null)}}else Gn=function(){w(bn,0)};function Zt(O){C=O,_||(_=!0,Gn())}function Jt(O,T){N=w(function(){O(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,Zt(P))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(O){switch(h){case 1:case 2:case 3:var T=3;break;default:T=h}var R=h;h=T;try{return O()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,T){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var R=h;h=O;try{return T()}finally{h=R}},e.unstable_scheduleCallback=function(O,T,R){var W=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?W+R:W):R=W,O){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=R+J,O={id:d++,callback:T,priorityLevel:O,startTime:R,expirationTime:J,sortIndex:-1},R>W?(O.sortIndex=R,n(u,O),t(s)===null&&O===t(u)&&(g?(m(N),N=-1):g=!0,Jt(b,R-W))):(O.sortIndex=J,n(s,O),x||y||(x=!0,Zt(P))),O},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(O){var T=h;return function(){var R=h;h=T;try{return O.apply(this,arguments)}finally{h=R}}}})(Ju);Zu.exports=Ju;var Jf=Zu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0=S,Te=Jf;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ec=new Set,Pr={};function ft(e,n){Ut(e,n),Ut(e+"Capture",n)}function Ut(e,n){for(Pr[e]=n,e=0;e<n.length;e++)ec.add(n[e])}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Si=Object.prototype.hasOwnProperty,n0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xs={},bs={};function t0(e){return Si.call(bs,e)?!0:Si.call(xs,e)?!1:n0.test(e)?bs[e]=!0:(xs[e]=!0,!1)}function r0(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function o0(e,n,t,r){if(n===null||typeof n>"u"||r0(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Se(e,n,t,r,o,l,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=i}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];de[n]=new Se(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Sa=/[\-:]([a-z])/g;function Pa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Sa,Pa);de[n]=new Se(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Sa,Pa);de[n]=new Se(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Sa,Pa);de[n]=new Se(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function _a(e,n,t,r){var o=de.hasOwnProperty(n)?de[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(o0(n,t,o,r)&&(t=null),r||o===null?t0(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var xn=e0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,to=Symbol.for("react.element"),St=Symbol.for("react.portal"),Pt=Symbol.for("react.fragment"),Ca=Symbol.for("react.strict_mode"),Pi=Symbol.for("react.profiler"),nc=Symbol.for("react.provider"),tc=Symbol.for("react.context"),Oa=Symbol.for("react.forward_ref"),_i=Symbol.for("react.suspense"),Ci=Symbol.for("react.suspense_list"),Ea=Symbol.for("react.memo"),Sn=Symbol.for("react.lazy"),rc=Symbol.for("react.offscreen"),ws=Symbol.iterator;function nr(e){return e===null||typeof e!="object"?null:(e=ws&&e[ws]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Vl;function cr(e){if(Vl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Vl=n&&n[1]||""}return`
`+Vl+e}var Wl=!1;function Ql(e,n){if(!e||Wl)return"";Wl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{Wl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?cr(e):""}function l0(e){switch(e.tag){case 5:return cr(e.type);case 16:return cr("Lazy");case 13:return cr("Suspense");case 19:return cr("SuspenseList");case 0:case 2:case 15:return e=Ql(e.type,!1),e;case 11:return e=Ql(e.type.render,!1),e;case 1:return e=Ql(e.type,!0),e;default:return""}}function Oi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pt:return"Fragment";case St:return"Portal";case Pi:return"Profiler";case Ca:return"StrictMode";case _i:return"Suspense";case Ci:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tc:return(e.displayName||"Context")+".Consumer";case nc:return(e._context.displayName||"Context")+".Provider";case Oa:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ea:return n=e.displayName||null,n!==null?n:Oi(e.type)||"Memo";case Sn:n=e._payload,e=e._init;try{return Oi(e(n))}catch{}}return null}function i0(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oi(n);case 8:return n===Ca?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function qn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function a0(e){var n=oc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ro(e){e._valueTracker||(e._valueTracker=a0(e))}function lc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=oc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Fo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ei(e,n){var t=n.checked;return G({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ks(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=qn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ic(e,n){n=n.checked,n!=null&&_a(e,"checked",n,!1)}function Ni(e,n){ic(e,n);var t=qn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?zi(e,n.type,t):n.hasOwnProperty("defaultValue")&&zi(e,n.type,qn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ss(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function zi(e,n,t){(n!=="number"||Fo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var dr=Array.isArray;function Dt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+qn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function ji(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return G({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ps(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(dr(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:qn(t)}}function ac(e,n){var t=qn(n.value),r=qn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function _s(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function sc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?sc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oo,uc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(oo=oo||document.createElement("div"),oo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=oo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function _r(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},s0=["Webkit","ms","Moz","O"];Object.keys(mr).forEach(function(e){s0.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),mr[n]=mr[e]})});function cc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||mr.hasOwnProperty(e)&&mr[e]?(""+n).trim():n+"px"}function dc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=cc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var u0=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ti(e,n){if(n){if(u0[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function Ri(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Di=null;function Na(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Li=null,Lt=null,At=null;function Cs(e){if(e=Vr(e)){if(typeof Li!="function")throw Error(k(280));var n=e.stateNode;n&&(n=gl(n),Li(e.stateNode,e.type,n))}}function fc(e){Lt?At?At.push(e):At=[e]:Lt=e}function pc(){if(Lt){var e=Lt,n=At;if(At=Lt=null,Cs(e),n)for(e=0;e<n.length;e++)Cs(n[e])}}function hc(e,n){return e(n)}function mc(){}var Kl=!1;function vc(e,n,t){if(Kl)return e(n,t);Kl=!0;try{return hc(e,n,t)}finally{Kl=!1,(Lt!==null||At!==null)&&(mc(),pc())}}function Cr(e,n){var t=e.stateNode;if(t===null)return null;var r=gl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var Ai=!1;if(mn)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){Ai=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{Ai=!1}function c0(e,n,t,r,o,l,i,a,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(d){this.onError(d)}}var vr=!1,$o=null,Uo=!1,Ii=null,d0={onError:function(e){vr=!0,$o=e}};function f0(e,n,t,r,o,l,i,a,s){vr=!1,$o=null,c0.apply(d0,arguments)}function p0(e,n,t,r,o,l,i,a,s){if(f0.apply(this,arguments),vr){if(vr){var u=$o;vr=!1,$o=null}else throw Error(k(198));Uo||(Uo=!0,Ii=u)}}function pt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function gc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Os(e){if(pt(e)!==e)throw Error(k(188))}function h0(e){var n=e.alternate;if(!n){if(n=pt(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===t)return Os(o),e;if(l===r)return Os(o),n;l=l.sibling}throw Error(k(188))}if(t.return!==r.return)t=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===t){i=!0,t=o,r=l;break}if(a===r){i=!0,r=o,t=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===t){i=!0,t=l,r=o;break}if(a===r){i=!0,r=l,t=o;break}a=a.sibling}if(!i)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function yc(e){return e=h0(e),e!==null?xc(e):null}function xc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=xc(e);if(n!==null)return n;e=e.sibling}return null}var bc=Te.unstable_scheduleCallback,Es=Te.unstable_cancelCallback,m0=Te.unstable_shouldYield,v0=Te.unstable_requestPaint,ee=Te.unstable_now,g0=Te.unstable_getCurrentPriorityLevel,za=Te.unstable_ImmediatePriority,wc=Te.unstable_UserBlockingPriority,qo=Te.unstable_NormalPriority,y0=Te.unstable_LowPriority,kc=Te.unstable_IdlePriority,pl=null,rn=null;function x0(e){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(pl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:k0,b0=Math.log,w0=Math.LN2;function k0(e){return e>>>=0,e===0?32:31-(b0(e)/w0|0)|0}var lo=64,io=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bo(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=t&268435455;if(i!==0){var a=i&~o;a!==0?r=fr(a):(l&=i,l!==0&&(r=fr(l)))}else i=t&~o,i!==0?r=fr(i):l!==0&&(r=fr(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,l=n&-n,o>=l||o===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ye(n),o=1<<t,r|=e[t],n&=~o;return r}function S0(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P0(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Ye(l),a=1<<i,s=o[i];s===-1?(!(a&t)||a&r)&&(o[i]=S0(a,n)):s<=n&&(e.expiredLanes|=a),l&=~a}}function Fi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sc(){var e=lo;return lo<<=1,!(lo&4194240)&&(lo=64),e}function Xl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Br(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ye(n),e[n]=t}function _0(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Ye(t),l=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~l}}function ja(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ye(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var U=0;function Pc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _c,Ma,Cc,Oc,Ec,$i=!1,ao=[],Mn=null,Tn=null,Rn=null,Or=new Map,Er=new Map,_n=[],C0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ns(e,n){switch(e){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Or.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Er.delete(n.pointerId)}}function rr(e,n,t,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},n!==null&&(n=Vr(n),n!==null&&Ma(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function O0(e,n,t,r,o){switch(n){case"focusin":return Mn=rr(Mn,e,n,t,r,o),!0;case"dragenter":return Tn=rr(Tn,e,n,t,r,o),!0;case"mouseover":return Rn=rr(Rn,e,n,t,r,o),!0;case"pointerover":var l=o.pointerId;return Or.set(l,rr(Or.get(l)||null,e,n,t,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Er.set(l,rr(Er.get(l)||null,e,n,t,r,o)),!0}return!1}function Nc(e){var n=et(e.target);if(n!==null){var t=pt(n);if(t!==null){if(n=t.tag,n===13){if(n=gc(t),n!==null){e.blockedOn=n,Ec(e.priority,function(){Cc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function No(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ui(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Di=r,t.target.dispatchEvent(r),Di=null}else return n=Vr(t),n!==null&&Ma(n),e.blockedOn=t,!1;n.shift()}return!0}function zs(e,n,t){No(e)&&t.delete(n)}function E0(){$i=!1,Mn!==null&&No(Mn)&&(Mn=null),Tn!==null&&No(Tn)&&(Tn=null),Rn!==null&&No(Rn)&&(Rn=null),Or.forEach(zs),Er.forEach(zs)}function or(e,n){e.blockedOn===n&&(e.blockedOn=null,$i||($i=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,E0)))}function Nr(e){function n(o){return or(o,e)}if(0<ao.length){or(ao[0],e);for(var t=1;t<ao.length;t++){var r=ao[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Mn!==null&&or(Mn,e),Tn!==null&&or(Tn,e),Rn!==null&&or(Rn,e),Or.forEach(n),Er.forEach(n),t=0;t<_n.length;t++)r=_n[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<_n.length&&(t=_n[0],t.blockedOn===null);)Nc(t),t.blockedOn===null&&_n.shift()}var It=xn.ReactCurrentBatchConfig,Ho=!0;function N0(e,n,t,r){var o=U,l=It.transition;It.transition=null;try{U=1,Ta(e,n,t,r)}finally{U=o,It.transition=l}}function z0(e,n,t,r){var o=U,l=It.transition;It.transition=null;try{U=4,Ta(e,n,t,r)}finally{U=o,It.transition=l}}function Ta(e,n,t,r){if(Ho){var o=Ui(e,n,t,r);if(o===null)li(e,n,r,Vo,t),Ns(e,r);else if(O0(o,e,n,t,r))r.stopPropagation();else if(Ns(e,r),n&4&&-1<C0.indexOf(e)){for(;o!==null;){var l=Vr(o);if(l!==null&&_c(l),l=Ui(e,n,t,r),l===null&&li(e,n,r,Vo,t),l===o)break;o=l}o!==null&&r.stopPropagation()}else li(e,n,r,null,t)}}var Vo=null;function Ui(e,n,t,r){if(Vo=null,e=Na(r),e=et(e),e!==null)if(n=pt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=gc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Vo=e,null}function zc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(g0()){case za:return 1;case wc:return 4;case qo:case y0:return 16;case kc:return 536870912;default:return 16}default:return 16}}var En=null,Ra=null,zo=null;function jc(){if(zo)return zo;var e,n=Ra,t=n.length,r,o="value"in En?En.value:En.textContent,l=o.length;for(e=0;e<t&&n[e]===o[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===o[l-r];r++);return zo=o.slice(e,1<r?1-r:void 0)}function jo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function so(){return!0}function js(){return!1}function De(e){function n(t,r,o,l,i){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?so:js,this.isPropagationStopped=js,this}return G(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),n}var Xt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Da=De(Xt),Hr=G({},Xt,{view:0,detail:0}),j0=De(Hr),Yl,Gl,lr,hl=G({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:La,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&e.type==="mousemove"?(Yl=e.screenX-lr.screenX,Gl=e.screenY-lr.screenY):Gl=Yl=0,lr=e),Yl)},movementY:function(e){return"movementY"in e?e.movementY:Gl}}),Ms=De(hl),M0=G({},hl,{dataTransfer:0}),T0=De(M0),R0=G({},Hr,{relatedTarget:0}),Zl=De(R0),D0=G({},Xt,{animationName:0,elapsedTime:0,pseudoElement:0}),L0=De(D0),A0=G({},Xt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),I0=De(A0),F0=G({},Xt,{data:0}),Ts=De(F0),$0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=q0[e])?!!n[e]:!1}function La(){return B0}var H0=G({},Hr,{key:function(e){if(e.key){var n=$0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?U0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:La,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),V0=De(H0),W0=G({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rs=De(W0),Q0=G({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:La}),K0=De(Q0),X0=G({},Xt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y0=De(X0),G0=G({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Z0=De(G0),J0=[9,13,27,32],Aa=mn&&"CompositionEvent"in window,gr=null;mn&&"documentMode"in document&&(gr=document.documentMode);var ep=mn&&"TextEvent"in window&&!gr,Mc=mn&&(!Aa||gr&&8<gr&&11>=gr),Ds=" ",Ls=!1;function Tc(e,n){switch(e){case"keyup":return J0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _t=!1;function np(e,n){switch(e){case"compositionend":return Rc(n);case"keypress":return n.which!==32?null:(Ls=!0,Ds);case"textInput":return e=n.data,e===Ds&&Ls?null:e;default:return null}}function tp(e,n){if(_t)return e==="compositionend"||!Aa&&Tc(e,n)?(e=jc(),zo=Ra=En=null,_t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Mc&&n.locale!=="ko"?null:n.data;default:return null}}var rp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function As(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!rp[e.type]:n==="textarea"}function Dc(e,n,t,r){fc(r),n=Wo(n,"onChange"),0<n.length&&(t=new Da("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var yr=null,zr=null;function op(e){Wc(e,0)}function ml(e){var n=Et(e);if(lc(n))return e}function lp(e,n){if(e==="change")return n}var Lc=!1;if(mn){var Jl;if(mn){var ei="oninput"in document;if(!ei){var Is=document.createElement("div");Is.setAttribute("oninput","return;"),ei=typeof Is.oninput=="function"}Jl=ei}else Jl=!1;Lc=Jl&&(!document.documentMode||9<document.documentMode)}function Fs(){yr&&(yr.detachEvent("onpropertychange",Ac),zr=yr=null)}function Ac(e){if(e.propertyName==="value"&&ml(zr)){var n=[];Dc(n,zr,e,Na(e)),vc(op,n)}}function ip(e,n,t){e==="focusin"?(Fs(),yr=n,zr=t,yr.attachEvent("onpropertychange",Ac)):e==="focusout"&&Fs()}function ap(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ml(zr)}function sp(e,n){if(e==="click")return ml(n)}function up(e,n){if(e==="input"||e==="change")return ml(n)}function cp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ze=typeof Object.is=="function"?Object.is:cp;function jr(e,n){if(Ze(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!Si.call(n,o)||!Ze(e[o],n[o]))return!1}return!0}function $s(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Us(e,n){var t=$s(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=$s(t)}}function Ic(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ic(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Fc(){for(var e=window,n=Fo();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Fo(e.document)}return n}function Ia(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function dp(e){var n=Fc(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ic(t.ownerDocument.documentElement,t)){if(r!==null&&Ia(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Us(t,l);var i=Us(t,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fp=mn&&"documentMode"in document&&11>=document.documentMode,Ct=null,qi=null,xr=null,Bi=!1;function qs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Bi||Ct==null||Ct!==Fo(r)||(r=Ct,"selectionStart"in r&&Ia(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xr&&jr(xr,r)||(xr=r,r=Wo(qi,"onSelect"),0<r.length&&(n=new Da("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Ct)))}function uo(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ot={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},ni={},$c={};mn&&($c=document.createElement("div").style,"AnimationEvent"in window||(delete Ot.animationend.animation,delete Ot.animationiteration.animation,delete Ot.animationstart.animation),"TransitionEvent"in window||delete Ot.transitionend.transition);function vl(e){if(ni[e])return ni[e];if(!Ot[e])return e;var n=Ot[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in $c)return ni[e]=n[t];return e}var Uc=vl("animationend"),qc=vl("animationiteration"),Bc=vl("animationstart"),Hc=vl("transitionend"),Vc=new Map,Bs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(e,n){Vc.set(e,n),ft(n,[e])}for(var ti=0;ti<Bs.length;ti++){var ri=Bs[ti],pp=ri.toLowerCase(),hp=ri[0].toUpperCase()+ri.slice(1);Vn(pp,"on"+hp)}Vn(Uc,"onAnimationEnd");Vn(qc,"onAnimationIteration");Vn(Bc,"onAnimationStart");Vn("dblclick","onDoubleClick");Vn("focusin","onFocus");Vn("focusout","onBlur");Vn(Hc,"onTransitionEnd");Ut("onMouseEnter",["mouseout","mouseover"]);Ut("onMouseLeave",["mouseout","mouseover"]);Ut("onPointerEnter",["pointerout","pointerover"]);Ut("onPointerLeave",["pointerout","pointerover"]);ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ft("onBeforeInput",["compositionend","keypress","textInput","paste"]);ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mp=new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));function Hs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,p0(r,n,void 0,e),e.currentTarget=null}function Wc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;Hs(o,a,u),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,u=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;Hs(o,a,u),l=s}}}if(Uo)throw e=Ii,Uo=!1,Ii=null,e}function H(e,n){var t=n[Ki];t===void 0&&(t=n[Ki]=new Set);var r=e+"__bubble";t.has(r)||(Qc(n,e,2,!1),t.add(r))}function oi(e,n,t){var r=0;n&&(r|=4),Qc(t,e,r,n)}var co="_reactListening"+Math.random().toString(36).slice(2);function Mr(e){if(!e[co]){e[co]=!0,ec.forEach(function(t){t!=="selectionchange"&&(mp.has(t)||oi(t,!1,e),oi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[co]||(n[co]=!0,oi("selectionchange",!1,n))}}function Qc(e,n,t,r){switch(zc(n)){case 1:var o=N0;break;case 4:o=z0;break;default:o=Ta}t=o.bind(null,n,t,e),o=void 0,!Ai||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function li(e,n,t,r,o){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=et(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}vc(function(){var u=l,d=Na(t),f=[];e:{var h=Vc.get(e);if(h!==void 0){var y=Da,x=e;switch(e){case"keypress":if(jo(t)===0)break e;case"keydown":case"keyup":y=V0;break;case"focusin":x="focus",y=Zl;break;case"focusout":x="blur",y=Zl;break;case"beforeblur":case"afterblur":y=Zl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ms;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=T0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=K0;break;case Uc:case qc:case Bc:y=L0;break;case Hc:y=Y0;break;case"scroll":y=j0;break;case"wheel":y=Z0;break;case"copy":case"cut":case"paste":y=I0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Rs}var g=(n&4)!==0,w=!g&&e==="scroll",m=g?h!==null?h+"Capture":null:h;g=[];for(var p=u,v;p!==null;){v=p;var b=v.stateNode;if(v.tag===5&&b!==null&&(v=b,m!==null&&(b=Cr(p,m),b!=null&&g.push(Tr(p,b,v)))),w)break;p=p.return}0<g.length&&(h=new y(h,x,null,t,d),f.push({event:h,listeners:g}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&t!==Di&&(x=t.relatedTarget||t.fromElement)&&(et(x)||x[vn]))break e;if((y||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,y?(x=t.relatedTarget||t.toElement,y=u,x=x?et(x):null,x!==null&&(w=pt(x),x!==w||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=u),y!==x)){if(g=Ms,b="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(g=Rs,b="onPointerLeave",m="onPointerEnter",p="pointer"),w=y==null?h:Et(y),v=x==null?h:Et(x),h=new g(b,p+"leave",y,t,d),h.target=w,h.relatedTarget=v,b=null,et(d)===u&&(g=new g(m,p+"enter",x,t,d),g.target=v,g.relatedTarget=w,b=g),w=b,y&&x)n:{for(g=y,m=x,p=0,v=g;v;v=bt(v))p++;for(v=0,b=m;b;b=bt(b))v++;for(;0<p-v;)g=bt(g),p--;for(;0<v-p;)m=bt(m),v--;for(;p--;){if(g===m||m!==null&&g===m.alternate)break n;g=bt(g),m=bt(m)}g=null}else g=null;y!==null&&Vs(f,h,y,g,!1),x!==null&&w!==null&&Vs(f,w,x,g,!0)}}e:{if(h=u?Et(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var P=lp;else if(As(h))if(Lc)P=up;else{P=ap;var _=ip}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=sp);if(P&&(P=P(e,u))){Dc(f,P,t,d);break e}_&&_(e,h,u),e==="focusout"&&(_=h._wrapperState)&&_.controlled&&h.type==="number"&&zi(h,"number",h.value)}switch(_=u?Et(u):window,e){case"focusin":(As(_)||_.contentEditable==="true")&&(Ct=_,qi=u,xr=null);break;case"focusout":xr=qi=Ct=null;break;case"mousedown":Bi=!0;break;case"contextmenu":case"mouseup":case"dragend":Bi=!1,qs(f,t,d);break;case"selectionchange":if(fp)break;case"keydown":case"keyup":qs(f,t,d)}var C;if(Aa)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else _t?Tc(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(Mc&&t.locale!=="ko"&&(_t||N!=="onCompositionStart"?N==="onCompositionEnd"&&_t&&(C=jc()):(En=d,Ra="value"in En?En.value:En.textContent,_t=!0)),_=Wo(u,N),0<_.length&&(N=new Ts(N,e,null,t,d),f.push({event:N,listeners:_}),C?N.data=C:(C=Rc(t),C!==null&&(N.data=C)))),(C=ep?np(e,t):tp(e,t))&&(u=Wo(u,"onBeforeInput"),0<u.length&&(d=new Ts("onBeforeInput","beforeinput",null,t,d),f.push({event:d,listeners:u}),d.data=C))}Wc(f,n)})}function Tr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Wo(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Cr(e,t),l!=null&&r.unshift(Tr(e,l,o)),l=Cr(e,n),l!=null&&r.push(Tr(e,l,o))),e=e.return}return r}function bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vs(e,n,t,r,o){for(var l=n._reactName,i=[];t!==null&&t!==r;){var a=t,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=Cr(t,l),s!=null&&i.unshift(Tr(t,s,a))):o||(s=Cr(t,l),s!=null&&i.push(Tr(t,s,a)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var vp=/\r\n?/g,gp=/\u0000|\uFFFD/g;function Ws(e){return(typeof e=="string"?e:""+e).replace(vp,`
`).replace(gp,"")}function fo(e,n,t){if(n=Ws(n),Ws(e)!==n&&t)throw Error(k(425))}function Qo(){}var Hi=null,Vi=null;function Wi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qi=typeof setTimeout=="function"?setTimeout:void 0,yp=typeof clearTimeout=="function"?clearTimeout:void 0,Qs=typeof Promise=="function"?Promise:void 0,xp=typeof queueMicrotask=="function"?queueMicrotask:typeof Qs<"u"?function(e){return Qs.resolve(null).then(e).catch(bp)}:Qi;function bp(e){setTimeout(function(){throw e})}function ii(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Nr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Nr(n)}function Dn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ks(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Yt=Math.random().toString(36).slice(2),nn="__reactFiber$"+Yt,Rr="__reactProps$"+Yt,vn="__reactContainer$"+Yt,Ki="__reactEvents$"+Yt,wp="__reactListeners$"+Yt,kp="__reactHandles$"+Yt;function et(e){var n=e[nn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[vn]||t[nn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ks(e);e!==null;){if(t=e[nn])return t;e=Ks(e)}return n}e=t,t=e.parentNode}return null}function Vr(e){return e=e[nn]||e[vn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Et(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function gl(e){return e[Rr]||null}var Xi=[],Nt=-1;function Wn(e){return{current:e}}function V(e){0>Nt||(e.current=Xi[Nt],Xi[Nt]=null,Nt--)}function B(e,n){Nt++,Xi[Nt]=e.current,e.current=n}var Bn={},xe=Wn(Bn),Ce=Wn(!1),lt=Bn;function qt(e,n){var t=e.type.contextTypes;if(!t)return Bn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in t)o[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Oe(e){return e=e.childContextTypes,e!=null}function Ko(){V(Ce),V(xe)}function Xs(e,n,t){if(xe.current!==Bn)throw Error(k(168));B(xe,n),B(Ce,t)}function Kc(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(k(108,i0(e)||"Unknown",o));return G({},t,r)}function Xo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bn,lt=xe.current,B(xe,e),B(Ce,Ce.current),!0}function Ys(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=Kc(e,n,lt),r.__reactInternalMemoizedMergedChildContext=e,V(Ce),V(xe),B(xe,e)):V(Ce),B(Ce,t)}var cn=null,yl=!1,ai=!1;function Xc(e){cn===null?cn=[e]:cn.push(e)}function Sp(e){yl=!0,Xc(e)}function Qn(){if(!ai&&cn!==null){ai=!0;var e=0,n=U;try{var t=cn;for(U=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}cn=null,yl=!1}catch(o){throw cn!==null&&(cn=cn.slice(e+1)),bc(za,Qn),o}finally{U=n,ai=!1}}return null}var zt=[],jt=0,Yo=null,Go=0,Ae=[],Ie=0,it=null,dn=1,fn="";function Zn(e,n){zt[jt++]=Go,zt[jt++]=Yo,Yo=e,Go=n}function Yc(e,n,t){Ae[Ie++]=dn,Ae[Ie++]=fn,Ae[Ie++]=it,it=e;var r=dn;e=fn;var o=32-Ye(r)-1;r&=~(1<<o),t+=1;var l=32-Ye(n)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,dn=1<<32-Ye(n)+o|t<<o|r,fn=l+e}else dn=1<<l|t<<o|r,fn=e}function Fa(e){e.return!==null&&(Zn(e,1),Yc(e,1,0))}function $a(e){for(;e===Yo;)Yo=zt[--jt],zt[jt]=null,Go=zt[--jt],zt[jt]=null;for(;e===it;)it=Ae[--Ie],Ae[Ie]=null,fn=Ae[--Ie],Ae[Ie]=null,dn=Ae[--Ie],Ae[Ie]=null}var Me=null,je=null,K=!1,Qe=null;function Gc(e,n){var t=Fe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Gs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Me=e,je=Dn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Me=e,je=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=it!==null?{id:dn,overflow:fn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Fe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Me=e,je=null,!0):!1;default:return!1}}function Yi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gi(e){if(K){var n=je;if(n){var t=n;if(!Gs(e,n)){if(Yi(e))throw Error(k(418));n=Dn(t.nextSibling);var r=Me;n&&Gs(e,n)?Gc(r,t):(e.flags=e.flags&-4097|2,K=!1,Me=e)}}else{if(Yi(e))throw Error(k(418));e.flags=e.flags&-4097|2,K=!1,Me=e}}}function Zs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function po(e){if(e!==Me)return!1;if(!K)return Zs(e),K=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Wi(e.type,e.memoizedProps)),n&&(n=je)){if(Yi(e))throw Zc(),Error(k(418));for(;n;)Gc(e,n),n=Dn(n.nextSibling)}if(Zs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){je=Dn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}je=null}}else je=Me?Dn(e.stateNode.nextSibling):null;return!0}function Zc(){for(var e=je;e;)e=Dn(e.nextSibling)}function Bt(){je=Me=null,K=!1}function Ua(e){Qe===null?Qe=[e]:Qe.push(e)}var Pp=xn.ReactCurrentBatchConfig;function ir(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var o=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},n._stringRef=l,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function ho(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Js(e){var n=e._init;return n(e._payload)}function Jc(e){function n(m,p){if(e){var v=m.deletions;v===null?(m.deletions=[p],m.flags|=16):v.push(p)}}function t(m,p){if(!e)return null;for(;p!==null;)n(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function o(m,p){return m=Fn(m,p),m.index=0,m.sibling=null,m}function l(m,p,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<p?(m.flags|=2,p):v):(m.flags|=2,p)):(m.flags|=1048576,p)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,p,v,b){return p===null||p.tag!==6?(p=hi(v,m.mode,b),p.return=m,p):(p=o(p,v),p.return=m,p)}function s(m,p,v,b){var P=v.type;return P===Pt?d(m,p,v.props.children,b,v.key):p!==null&&(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Sn&&Js(P)===p.type)?(b=o(p,v.props),b.ref=ir(m,p,v),b.return=m,b):(b=Io(v.type,v.key,v.props,null,m.mode,b),b.ref=ir(m,p,v),b.return=m,b)}function u(m,p,v,b){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=mi(v,m.mode,b),p.return=m,p):(p=o(p,v.children||[]),p.return=m,p)}function d(m,p,v,b,P){return p===null||p.tag!==7?(p=ot(v,m.mode,b,P),p.return=m,p):(p=o(p,v),p.return=m,p)}function f(m,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=hi(""+p,m.mode,v),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case to:return v=Io(p.type,p.key,p.props,null,m.mode,v),v.ref=ir(m,null,p),v.return=m,v;case St:return p=mi(p,m.mode,v),p.return=m,p;case Sn:var b=p._init;return f(m,b(p._payload),v)}if(dr(p)||nr(p))return p=ot(p,m.mode,v,null),p.return=m,p;ho(m,p)}return null}function h(m,p,v,b){var P=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(m,p,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case to:return v.key===P?s(m,p,v,b):null;case St:return v.key===P?u(m,p,v,b):null;case Sn:return P=v._init,h(m,p,P(v._payload),b)}if(dr(v)||nr(v))return P!==null?null:d(m,p,v,b,null);ho(m,v)}return null}function y(m,p,v,b,P){if(typeof b=="string"&&b!==""||typeof b=="number")return m=m.get(v)||null,a(p,m,""+b,P);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case to:return m=m.get(b.key===null?v:b.key)||null,s(p,m,b,P);case St:return m=m.get(b.key===null?v:b.key)||null,u(p,m,b,P);case Sn:var _=b._init;return y(m,p,v,_(b._payload),P)}if(dr(b)||nr(b))return m=m.get(v)||null,d(p,m,b,P,null);ho(p,b)}return null}function x(m,p,v,b){for(var P=null,_=null,C=p,N=p=0,I=null;C!==null&&N<v.length;N++){C.index>N?(I=C,C=null):I=C.sibling;var A=h(m,C,v[N],b);if(A===null){C===null&&(C=I);break}e&&C&&A.alternate===null&&n(m,C),p=l(A,p,N),_===null?P=A:_.sibling=A,_=A,C=I}if(N===v.length)return t(m,C),K&&Zn(m,N),P;if(C===null){for(;N<v.length;N++)C=f(m,v[N],b),C!==null&&(p=l(C,p,N),_===null?P=C:_.sibling=C,_=C);return K&&Zn(m,N),P}for(C=r(m,C);N<v.length;N++)I=y(C,m,N,v[N],b),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?N:I.key),p=l(I,p,N),_===null?P=I:_.sibling=I,_=I);return e&&C.forEach(function(q){return n(m,q)}),K&&Zn(m,N),P}function g(m,p,v,b){var P=nr(v);if(typeof P!="function")throw Error(k(150));if(v=P.call(v),v==null)throw Error(k(151));for(var _=P=null,C=p,N=p=0,I=null,A=v.next();C!==null&&!A.done;N++,A=v.next()){C.index>N?(I=C,C=null):I=C.sibling;var q=h(m,C,A.value,b);if(q===null){C===null&&(C=I);break}e&&C&&q.alternate===null&&n(m,C),p=l(q,p,N),_===null?P=q:_.sibling=q,_=q,C=I}if(A.done)return t(m,C),K&&Zn(m,N),P;if(C===null){for(;!A.done;N++,A=v.next())A=f(m,A.value,b),A!==null&&(p=l(A,p,N),_===null?P=A:_.sibling=A,_=A);return K&&Zn(m,N),P}for(C=r(m,C);!A.done;N++,A=v.next())A=y(C,m,N,A.value,b),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?N:A.key),p=l(A,p,N),_===null?P=A:_.sibling=A,_=A);return e&&C.forEach(function(bn){return n(m,bn)}),K&&Zn(m,N),P}function w(m,p,v,b){if(typeof v=="object"&&v!==null&&v.type===Pt&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case to:e:{for(var P=v.key,_=p;_!==null;){if(_.key===P){if(P=v.type,P===Pt){if(_.tag===7){t(m,_.sibling),p=o(_,v.props.children),p.return=m,m=p;break e}}else if(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Sn&&Js(P)===_.type){t(m,_.sibling),p=o(_,v.props),p.ref=ir(m,_,v),p.return=m,m=p;break e}t(m,_);break}else n(m,_);_=_.sibling}v.type===Pt?(p=ot(v.props.children,m.mode,b,v.key),p.return=m,m=p):(b=Io(v.type,v.key,v.props,null,m.mode,b),b.ref=ir(m,p,v),b.return=m,m=b)}return i(m);case St:e:{for(_=v.key;p!==null;){if(p.key===_)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){t(m,p.sibling),p=o(p,v.children||[]),p.return=m,m=p;break e}else{t(m,p);break}else n(m,p);p=p.sibling}p=mi(v,m.mode,b),p.return=m,m=p}return i(m);case Sn:return _=v._init,w(m,p,_(v._payload),b)}if(dr(v))return x(m,p,v,b);if(nr(v))return g(m,p,v,b);ho(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(t(m,p.sibling),p=o(p,v),p.return=m,m=p):(t(m,p),p=hi(v,m.mode,b),p.return=m,m=p),i(m)):t(m,p)}return w}var Ht=Jc(!0),ed=Jc(!1),Zo=Wn(null),Jo=null,Mt=null,qa=null;function Ba(){qa=Mt=Jo=null}function Ha(e){var n=Zo.current;V(Zo),e._currentValue=n}function Zi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Ft(e,n){Jo=e,qa=Mt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(_e=!0),e.firstContext=null)}function Ue(e){var n=e._currentValue;if(qa!==e)if(e={context:e,memoizedValue:n,next:null},Mt===null){if(Jo===null)throw Error(k(308));Mt=e,Jo.dependencies={lanes:0,firstContext:e}}else Mt=Mt.next=e;return n}var nt=null;function Va(e){nt===null?nt=[e]:nt.push(e)}function nd(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Va(n)):(t.next=o.next,o.next=t),n.interleaved=t,gn(e,r)}function gn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Pn=!1;function Wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function td(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Ln(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,gn(e,t)}return o=r.interleaved,o===null?(n.next=n,Va(r)):(n.next=o.next,o.next=n),r.interleaved=n,gn(e,t)}function Mo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ja(e,t)}}function eu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?o=l=i:l=l.next=i,t=t.next}while(t!==null);l===null?o=l=n:l=l.next=n}else o=l=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function el(e,n,t,r){var o=e.updateQueue;Pn=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,i===null?l=u:i.next=u,i=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==i&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=s))}if(l!==null){var f=o.baseState;i=0,d=u=s=null,a=l;do{var h=a.lane,y=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,g=a;switch(h=n,y=t,g.tag){case 1:if(x=g.payload,typeof x=="function"){f=x.call(y,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=g.payload,h=typeof x=="function"?x.call(y,f,h):x,h==null)break e;f=G({},f,h);break e;case 2:Pn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=y,s=f):d=d.next=y,i|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(d===null&&(s=f),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=d,n=o.shared.interleaved,n!==null){o=n;do i|=o.lane,o=o.next;while(o!==n)}else l===null&&(o.shared.lanes=0);st|=i,e.lanes=i,e.memoizedState=f}}function nu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var Wr={},on=Wn(Wr),Dr=Wn(Wr),Lr=Wn(Wr);function tt(e){if(e===Wr)throw Error(k(174));return e}function Qa(e,n){switch(B(Lr,n),B(Dr,e),B(on,Wr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Mi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Mi(n,e)}V(on),B(on,n)}function Vt(){V(on),V(Dr),V(Lr)}function rd(e){tt(Lr.current);var n=tt(on.current),t=Mi(n,e.type);n!==t&&(B(Dr,e),B(on,t))}function Ka(e){Dr.current===e&&(V(on),V(Dr))}var X=Wn(0);function nl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var si=[];function Xa(){for(var e=0;e<si.length;e++)si[e]._workInProgressVersionPrimary=null;si.length=0}var To=xn.ReactCurrentDispatcher,ui=xn.ReactCurrentBatchConfig,at=0,Y=null,te=null,ie=null,tl=!1,br=!1,Ar=0,_p=0;function fe(){throw Error(k(321))}function Ya(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ze(e[t],n[t]))return!1;return!0}function Ga(e,n,t,r,o,l){if(at=l,Y=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,To.current=e===null||e.memoizedState===null?Np:zp,e=t(r,o),br){l=0;do{if(br=!1,Ar=0,25<=l)throw Error(k(301));l+=1,ie=te=null,n.updateQueue=null,To.current=jp,e=t(r,o)}while(br)}if(To.current=rl,n=te!==null&&te.next!==null,at=0,ie=te=Y=null,tl=!1,n)throw Error(k(300));return e}function Za(){var e=Ar!==0;return Ar=0,e}function en(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?Y.memoizedState=ie=e:ie=ie.next=e,ie}function qe(){if(te===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var n=ie===null?Y.memoizedState:ie.next;if(n!==null)ie=n,te=e;else{if(e===null)throw Error(k(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ie===null?Y.memoizedState=ie=e:ie=ie.next=e}return ie}function Ir(e,n){return typeof n=="function"?n(e):n}function ci(e){var n=qe(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=te,o=r.baseQueue,l=t.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,t.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,u=l;do{var d=u.lane;if((at&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=f,i=r):s=s.next=f,Y.lanes|=d,st|=d}u=u.next}while(u!==null&&u!==l);s===null?i=r:s.next=a,Ze(r,n.memoizedState)||(_e=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do l=o.lane,Y.lanes|=l,st|=l,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function di(e){var n=qe(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,l=n.memoizedState;if(o!==null){t.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Ze(l,n.memoizedState)||(_e=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function od(){}function ld(e,n){var t=Y,r=qe(),o=n(),l=!Ze(r.memoizedState,o);if(l&&(r.memoizedState=o,_e=!0),r=r.queue,Ja(sd.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||ie!==null&&ie.memoizedState.tag&1){if(t.flags|=2048,Fr(9,ad.bind(null,t,r,o,n),void 0,null),ae===null)throw Error(k(349));at&30||id(t,n,o)}return o}function id(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Y.updateQueue,n===null?(n={lastEffect:null,stores:null},Y.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ad(e,n,t,r){n.value=t,n.getSnapshot=r,ud(n)&&cd(e)}function sd(e,n,t){return t(function(){ud(n)&&cd(e)})}function ud(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ze(e,t)}catch{return!0}}function cd(e){var n=gn(e,1);n!==null&&Ge(n,e,1,-1)}function tu(e){var n=en();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:e},n.queue=e,e=e.dispatch=Ep.bind(null,Y,e),[n.memoizedState,e]}function Fr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Y.updateQueue,n===null?(n={lastEffect:null,stores:null},Y.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function dd(){return qe().memoizedState}function Ro(e,n,t,r){var o=en();Y.flags|=e,o.memoizedState=Fr(1|n,t,void 0,r===void 0?null:r)}function xl(e,n,t,r){var o=qe();r=r===void 0?null:r;var l=void 0;if(te!==null){var i=te.memoizedState;if(l=i.destroy,r!==null&&Ya(r,i.deps)){o.memoizedState=Fr(n,t,l,r);return}}Y.flags|=e,o.memoizedState=Fr(1|n,t,l,r)}function ru(e,n){return Ro(8390656,8,e,n)}function Ja(e,n){return xl(2048,8,e,n)}function fd(e,n){return xl(4,2,e,n)}function pd(e,n){return xl(4,4,e,n)}function hd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function md(e,n,t){return t=t!=null?t.concat([e]):null,xl(4,4,hd.bind(null,n,e),t)}function es(){}function vd(e,n){var t=qe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ya(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function gd(e,n){var t=qe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ya(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function yd(e,n,t){return at&21?(Ze(t,n)||(t=Sc(),Y.lanes|=t,st|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=t)}function Cp(e,n){var t=U;U=t!==0&&4>t?t:4,e(!0);var r=ui.transition;ui.transition={};try{e(!1),n()}finally{U=t,ui.transition=r}}function xd(){return qe().memoizedState}function Op(e,n,t){var r=In(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},bd(e))wd(n,t);else if(t=nd(e,n,t,r),t!==null){var o=we();Ge(t,e,r,o),kd(t,n,r)}}function Ep(e,n,t){var r=In(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(bd(e))wd(n,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var i=n.lastRenderedState,a=l(i,t);if(o.hasEagerState=!0,o.eagerState=a,Ze(a,i)){var s=n.interleaved;s===null?(o.next=o,Va(n)):(o.next=s.next,s.next=o),n.interleaved=o;return}}catch{}finally{}t=nd(e,n,o,r),t!==null&&(o=we(),Ge(t,e,r,o),kd(t,n,r))}}function bd(e){var n=e.alternate;return e===Y||n!==null&&n===Y}function wd(e,n){br=tl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function kd(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ja(e,t)}}var rl={readContext:Ue,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},Np={readContext:Ue,useCallback:function(e,n){return en().memoizedState=[e,n===void 0?null:n],e},useContext:Ue,useEffect:ru,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ro(4194308,4,hd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ro(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ro(4,2,e,n)},useMemo:function(e,n){var t=en();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=en();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Op.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var n=en();return e={current:e},n.memoizedState=e},useState:tu,useDebugValue:es,useDeferredValue:function(e){return en().memoizedState=e},useTransition:function(){var e=tu(!1),n=e[0];return e=Cp.bind(null,e[1]),en().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Y,o=en();if(K){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),ae===null)throw Error(k(349));at&30||id(r,n,t)}o.memoizedState=t;var l={value:t,getSnapshot:n};return o.queue=l,ru(sd.bind(null,r,l,e),[e]),r.flags|=2048,Fr(9,ad.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=en(),n=ae.identifierPrefix;if(K){var t=fn,r=dn;t=(r&~(1<<32-Ye(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ar++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=_p++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},zp={readContext:Ue,useCallback:vd,useContext:Ue,useEffect:Ja,useImperativeHandle:md,useInsertionEffect:fd,useLayoutEffect:pd,useMemo:gd,useReducer:ci,useRef:dd,useState:function(){return ci(Ir)},useDebugValue:es,useDeferredValue:function(e){var n=qe();return yd(n,te.memoizedState,e)},useTransition:function(){var e=ci(Ir)[0],n=qe().memoizedState;return[e,n]},useMutableSource:od,useSyncExternalStore:ld,useId:xd,unstable_isNewReconciler:!1},jp={readContext:Ue,useCallback:vd,useContext:Ue,useEffect:Ja,useImperativeHandle:md,useInsertionEffect:fd,useLayoutEffect:pd,useMemo:gd,useReducer:di,useRef:dd,useState:function(){return di(Ir)},useDebugValue:es,useDeferredValue:function(e){var n=qe();return te===null?n.memoizedState=e:yd(n,te.memoizedState,e)},useTransition:function(){var e=di(Ir)[0],n=qe().memoizedState;return[e,n]},useMutableSource:od,useSyncExternalStore:ld,useId:xd,unstable_isNewReconciler:!1};function Ve(e,n){if(e&&e.defaultProps){n=G({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ji(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:G({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var bl={isMounted:function(e){return(e=e._reactInternals)?pt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=we(),o=In(e),l=hn(r,o);l.payload=n,t!=null&&(l.callback=t),n=Ln(e,l,o),n!==null&&(Ge(n,e,o,r),Mo(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=we(),o=In(e),l=hn(r,o);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Ln(e,l,o),n!==null&&(Ge(n,e,o,r),Mo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=we(),r=In(e),o=hn(t,r);o.tag=2,n!=null&&(o.callback=n),n=Ln(e,o,r),n!==null&&(Ge(n,e,r,t),Mo(n,e,r))}};function ou(e,n,t,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):n.prototype&&n.prototype.isPureReactComponent?!jr(t,r)||!jr(o,l):!0}function Sd(e,n,t){var r=!1,o=Bn,l=n.contextType;return typeof l=="object"&&l!==null?l=Ue(l):(o=Oe(n)?lt:xe.current,r=n.contextTypes,l=(r=r!=null)?qt(e,o):Bn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=bl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),n}function lu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&bl.enqueueReplaceState(n,n.state,null)}function ea(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Wa(e);var l=n.contextType;typeof l=="object"&&l!==null?o.context=Ue(l):(l=Oe(n)?lt:xe.current,o.context=qt(e,l)),o.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Ji(e,n,l,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&bl.enqueueReplaceState(o,o.state,null),el(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Wt(e,n){try{var t="",r=n;do t+=l0(r),r=r.return;while(r);var o=t}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:o,digest:null}}function fi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function na(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Mp=typeof WeakMap=="function"?WeakMap:Map;function Pd(e,n,t){t=hn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ll||(ll=!0,da=r),na(e,n)},t}function _d(e,n,t){t=hn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){na(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){na(e,n),typeof r!="function"&&(An===null?An=new Set([this]):An.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function iu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Mp;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=Wp.bind(null,e,n,t),n.then(e,e))}function au(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function su(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=hn(-1,1),n.tag=2,Ln(t,n,1))),t.lanes|=1),e)}var Tp=xn.ReactCurrentOwner,_e=!1;function be(e,n,t,r){n.child=e===null?ed(n,null,t,r):Ht(n,e.child,t,r)}function uu(e,n,t,r,o){t=t.render;var l=n.ref;return Ft(n,o),r=Ga(e,n,t,r,l,o),t=Za(),e!==null&&!_e?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,yn(e,n,o)):(K&&t&&Fa(n),n.flags|=1,be(e,n,r,o),n.child)}function cu(e,n,t,r,o){if(e===null){var l=t.type;return typeof l=="function"&&!ss(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Cd(e,n,l,r,o)):(e=Io(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(t=t.compare,t=t!==null?t:jr,t(i,r)&&e.ref===n.ref)return yn(e,n,o)}return n.flags|=1,e=Fn(l,r),e.ref=n.ref,e.return=n,n.child=e}function Cd(e,n,t,r,o){if(e!==null){var l=e.memoizedProps;if(jr(l,r)&&e.ref===n.ref)if(_e=!1,n.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(_e=!0);else return n.lanes=e.lanes,yn(e,n,o)}return ta(e,n,t,r,o)}function Od(e,n,t){var r=n.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Rt,ze),ze|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,B(Rt,ze),ze|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,B(Rt,ze),ze|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,B(Rt,ze),ze|=r;return be(e,n,o,t),n.child}function Ed(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ta(e,n,t,r,o){var l=Oe(t)?lt:xe.current;return l=qt(n,l),Ft(n,o),t=Ga(e,n,t,r,l,o),r=Za(),e!==null&&!_e?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,yn(e,n,o)):(K&&r&&Fa(n),n.flags|=1,be(e,n,t,o),n.child)}function du(e,n,t,r,o){if(Oe(t)){var l=!0;Xo(n)}else l=!1;if(Ft(n,o),n.stateNode===null)Do(e,n),Sd(n,t,r),ea(n,t,r,o),r=!0;else if(e===null){var i=n.stateNode,a=n.memoizedProps;i.props=a;var s=i.context,u=t.contextType;typeof u=="object"&&u!==null?u=Ue(u):(u=Oe(t)?lt:xe.current,u=qt(n,u));var d=t.getDerivedStateFromProps,f=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==u)&&lu(n,i,r,u),Pn=!1;var h=n.memoizedState;i.state=h,el(n,r,i,o),s=n.memoizedState,a!==r||h!==s||Ce.current||Pn?(typeof d=="function"&&(Ji(n,t,d,r),s=n.memoizedState),(a=Pn||ou(n,t,a,r,h,s,u))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),i.props=r,i.state=s,i.context=u,r=a):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,td(e,n),a=n.memoizedProps,u=n.type===n.elementType?a:Ve(n.type,a),i.props=u,f=n.pendingProps,h=i.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ue(s):(s=Oe(t)?lt:xe.current,s=qt(n,s));var y=t.getDerivedStateFromProps;(d=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==f||h!==s)&&lu(n,i,r,s),Pn=!1,h=n.memoizedState,i.state=h,el(n,r,i,o);var x=n.memoizedState;a!==f||h!==x||Ce.current||Pn?(typeof y=="function"&&(Ji(n,t,y,r),x=n.memoizedState),(u=Pn||ou(n,t,u,r,h,x,s)||!1)?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,x,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,x,s)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=x),i.props=r,i.state=x,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return ra(e,n,t,r,l,o)}function ra(e,n,t,r,o,l){Ed(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return o&&Ys(n,t,!1),yn(e,n,l);r=n.stateNode,Tp.current=n;var a=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=Ht(n,e.child,null,l),n.child=Ht(n,null,a,l)):be(e,n,a,l),n.memoizedState=r.state,o&&Ys(n,t,!0),n.child}function Nd(e){var n=e.stateNode;n.pendingContext?Xs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Xs(e,n.context,!1),Qa(e,n.containerInfo)}function fu(e,n,t,r,o){return Bt(),Ua(o),n.flags|=256,be(e,n,t,r),n.child}var oa={dehydrated:null,treeContext:null,retryLane:0};function la(e){return{baseLanes:e,cachePool:null,transitions:null}}function zd(e,n,t){var r=n.pendingProps,o=X.current,l=!1,i=(n.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),B(X,o&1),e===null)return Gi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,l?(r=n.mode,l=n.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Sl(i,r,0,null),e=ot(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=la(t),n.memoizedState=oa,e):ns(n,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Rp(e,n,i,r,a,o,t);if(l){l=r.fallback,i=n.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Fn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=Fn(a,l):(l=ot(l,i,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,i=e.child.memoizedState,i=i===null?la(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~t,n.memoizedState=oa,r}return l=e.child,e=l.sibling,r=Fn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ns(e,n){return n=Sl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function mo(e,n,t,r){return r!==null&&Ua(r),Ht(n,e.child,null,t),e=ns(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Rp(e,n,t,r,o,l,i){if(t)return n.flags&256?(n.flags&=-257,r=fi(Error(k(422))),mo(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,o=n.mode,r=Sl({mode:"visible",children:r.children},o,0,null),l=ot(l,o,i,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&Ht(n,e.child,null,i),n.child.memoizedState=la(i),n.memoizedState=oa,l);if(!(n.mode&1))return mo(e,n,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(k(419)),r=fi(l,r,void 0),mo(e,n,i,r)}if(a=(i&e.childLanes)!==0,_e||a){if(r=ae,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,gn(e,o),Ge(r,e,o,-1))}return as(),r=fi(Error(k(421))),mo(e,n,i,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Qp.bind(null,e),o._reactRetry=n,null):(e=l.treeContext,je=Dn(o.nextSibling),Me=n,K=!0,Qe=null,e!==null&&(Ae[Ie++]=dn,Ae[Ie++]=fn,Ae[Ie++]=it,dn=e.id,fn=e.overflow,it=n),n=ns(n,r.children),n.flags|=4096,n)}function pu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Zi(e.return,n,t)}function pi(e,n,t,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=o)}function jd(e,n,t){var r=n.pendingProps,o=r.revealOrder,l=r.tail;if(be(e,n,r.children,t),r=X.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pu(e,t,n);else if(e.tag===19)pu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(X,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&nl(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),pi(n,!1,o,t,l);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&nl(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}pi(n,!0,t,null,l);break;case"together":pi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Do(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function yn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),st|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=Fn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Fn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Dp(e,n,t){switch(n.tag){case 3:Nd(n),Bt();break;case 5:rd(n);break;case 1:Oe(n.type)&&Xo(n);break;case 4:Qa(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;B(Zo,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(B(X,X.current&1),n.flags|=128,null):t&n.child.childLanes?zd(e,n,t):(B(X,X.current&1),e=yn(e,n,t),e!==null?e.sibling:null);B(X,X.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return jd(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(X,X.current),r)break;return null;case 22:case 23:return n.lanes=0,Od(e,n,t)}return yn(e,n,t)}var Md,ia,Td,Rd;Md=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ia=function(){};Td=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,tt(on.current);var l=null;switch(t){case"input":o=Ei(e,o),r=Ei(e,r),l=[];break;case"select":o=G({},o,{value:void 0}),r=G({},r,{value:void 0}),l=[];break;case"textarea":o=ji(e,o),r=ji(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qo)}Ti(t,r);var i;t=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(i in a)a.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Pr.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(t||(t={}),t[i]=s[i])}else t||(l||(l=[]),l.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Pr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&H("scroll",e),l||a===s||(l=[])):(l=l||[]).push(u,s))}t&&(l=l||[]).push("style",t);var u=l;(n.updateQueue=u)&&(n.flags|=4)}};Rd=function(e,n,t,r){t!==r&&(n.flags|=4)};function ar(e,n){if(!K)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Lp(e,n,t){var r=n.pendingProps;switch($a(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(n),null;case 1:return Oe(n.type)&&Ko(),pe(n),null;case 3:return r=n.stateNode,Vt(),V(Ce),V(xe),Xa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(po(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Qe!==null&&(ha(Qe),Qe=null))),ia(e,n),pe(n),null;case 5:Ka(n);var o=tt(Lr.current);if(t=n.type,e!==null&&n.stateNode!=null)Td(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return pe(n),null}if(e=tt(on.current),po(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[nn]=n,r[Rr]=l,e=(n.mode&1)!==0,t){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(o=0;o<pr.length;o++)H(pr[o],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":ks(r,l),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},H("invalid",r);break;case"textarea":Ps(r,l),H("invalid",r)}Ti(t,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&fo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&fo(r.textContent,a,e),o=["children",""+a]):Pr.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&H("scroll",r)}switch(t){case"input":ro(r),Ss(r,l,!0);break;case"textarea":ro(r),_s(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Qo)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[nn]=n,e[Rr]=r,Md(e,n,!1,!1),n.stateNode=e;e:{switch(i=Ri(t,r),t){case"dialog":H("cancel",e),H("close",e),o=r;break;case"iframe":case"object":case"embed":H("load",e),o=r;break;case"video":case"audio":for(o=0;o<pr.length;o++)H(pr[o],e);o=r;break;case"source":H("error",e),o=r;break;case"img":case"image":case"link":H("error",e),H("load",e),o=r;break;case"details":H("toggle",e),o=r;break;case"input":ks(e,r),o=Ei(e,r),H("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=G({},r,{value:void 0}),H("invalid",e);break;case"textarea":Ps(e,r),o=ji(e,r),H("invalid",e);break;default:o=r}Ti(t,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?dc(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&uc(e,s)):l==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&_r(e,s):typeof s=="number"&&_r(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Pr.hasOwnProperty(l)?s!=null&&l==="onScroll"&&H("scroll",e):s!=null&&_a(e,l,s,i))}switch(t){case"input":ro(e),Ss(e,r,!1);break;case"textarea":ro(e),_s(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Dt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Dt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Qo)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return pe(n),null;case 6:if(e&&n.stateNode!=null)Rd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=tt(Lr.current),tt(on.current),po(n)){if(r=n.stateNode,t=n.memoizedProps,r[nn]=n,(l=r.nodeValue!==t)&&(e=Me,e!==null))switch(e.tag){case 3:fo(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fo(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[nn]=n,n.stateNode=r}return pe(n),null;case 13:if(V(X),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&je!==null&&n.mode&1&&!(n.flags&128))Zc(),Bt(),n.flags|=98560,l=!1;else if(l=po(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(k(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(k(317));l[nn]=n}else Bt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;pe(n),l=!1}else Qe!==null&&(ha(Qe),Qe=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||X.current&1?re===0&&(re=3):as())),n.updateQueue!==null&&(n.flags|=4),pe(n),null);case 4:return Vt(),ia(e,n),e===null&&Mr(n.stateNode.containerInfo),pe(n),null;case 10:return Ha(n.type._context),pe(n),null;case 17:return Oe(n.type)&&Ko(),pe(n),null;case 19:if(V(X),l=n.memoizedState,l===null)return pe(n),null;if(r=(n.flags&128)!==0,i=l.rendering,i===null)if(r)ar(l,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=nl(e),i!==null){for(n.flags|=128,ar(l,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return B(X,X.current&1|2),n.child}e=e.sibling}l.tail!==null&&ee()>Qt&&(n.flags|=128,r=!0,ar(l,!1),n.lanes=4194304)}else{if(!r)if(e=nl(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ar(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!K)return pe(n),null}else 2*ee()-l.renderingStartTime>Qt&&t!==1073741824&&(n.flags|=128,r=!0,ar(l,!1),n.lanes=4194304);l.isBackwards?(i.sibling=n.child,n.child=i):(t=l.last,t!==null?t.sibling=i:n.child=i,l.last=i)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=ee(),n.sibling=null,t=X.current,B(X,r?t&1|2:t&1),n):(pe(n),null);case 22:case 23:return is(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ze&1073741824&&(pe(n),n.subtreeFlags&6&&(n.flags|=8192)):pe(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function Ap(e,n){switch($a(n),n.tag){case 1:return Oe(n.type)&&Ko(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vt(),V(Ce),V(xe),Xa(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ka(n),null;case 13:if(V(X),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));Bt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return V(X),null;case 4:return Vt(),null;case 10:return Ha(n.type._context),null;case 22:case 23:return is(),null;case 24:return null;default:return null}}var vo=!1,ye=!1,Ip=typeof WeakSet=="function"?WeakSet:Set,E=null;function Tt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Z(e,n,r)}else t.current=null}function aa(e,n,t){try{t()}catch(r){Z(e,n,r)}}var hu=!1;function Fp(e,n){if(Hi=Ho,e=Fc(),Ia(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var i=0,a=-1,s=-1,u=0,d=0,f=e,h=null;n:for(;;){for(var y;f!==t||o!==0&&f.nodeType!==3||(a=i+o),f!==l||r!==0&&f.nodeType!==3||(s=i+r),f.nodeType===3&&(i+=f.nodeValue.length),(y=f.firstChild)!==null;)h=f,f=y;for(;;){if(f===e)break n;if(h===t&&++u===o&&(a=i),h===l&&++d===r&&(s=i),(y=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=y}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Vi={focusedElem:e,selectionRange:t},Ho=!1,E=n;E!==null;)if(n=E,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,E=e;else for(;E!==null;){n=E;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var g=x.memoizedProps,w=x.memoizedState,m=n.stateNode,p=m.getSnapshotBeforeUpdate(n.elementType===n.type?g:Ve(n.type,g),w);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(b){Z(n,n.return,b)}if(e=n.sibling,e!==null){e.return=n.return,E=e;break}E=n.return}return x=hu,hu=!1,x}function wr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&aa(n,t,l)}o=o.next}while(o!==r)}}function wl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function sa(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Dd(e){var n=e.alternate;n!==null&&(e.alternate=null,Dd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[nn],delete n[Rr],delete n[Ki],delete n[wp],delete n[kp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ld(e){return e.tag===5||e.tag===3||e.tag===4}function mu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ld(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ua(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Qo));else if(r!==4&&(e=e.child,e!==null))for(ua(e,n,t),e=e.sibling;e!==null;)ua(e,n,t),e=e.sibling}function ca(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ca(e,n,t),e=e.sibling;e!==null;)ca(e,n,t),e=e.sibling}var ue=null,We=!1;function wn(e,n,t){for(t=t.child;t!==null;)Ad(e,n,t),t=t.sibling}function Ad(e,n,t){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(pl,t)}catch{}switch(t.tag){case 5:ye||Tt(t,n);case 6:var r=ue,o=We;ue=null,wn(e,n,t),ue=r,We=o,ue!==null&&(We?(e=ue,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ue.removeChild(t.stateNode));break;case 18:ue!==null&&(We?(e=ue,t=t.stateNode,e.nodeType===8?ii(e.parentNode,t):e.nodeType===1&&ii(e,t),Nr(e)):ii(ue,t.stateNode));break;case 4:r=ue,o=We,ue=t.stateNode.containerInfo,We=!0,wn(e,n,t),ue=r,We=o;break;case 0:case 11:case 14:case 15:if(!ye&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&aa(t,n,i),o=o.next}while(o!==r)}wn(e,n,t);break;case 1:if(!ye&&(Tt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){Z(t,n,a)}wn(e,n,t);break;case 21:wn(e,n,t);break;case 22:t.mode&1?(ye=(r=ye)||t.memoizedState!==null,wn(e,n,t),ye=r):wn(e,n,t);break;default:wn(e,n,t)}}function vu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Ip),n.forEach(function(r){var o=Kp.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function Be(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var l=e,i=n,a=i;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,We=!1;break e;case 3:ue=a.stateNode.containerInfo,We=!0;break e;case 4:ue=a.stateNode.containerInfo,We=!0;break e}a=a.return}if(ue===null)throw Error(k(160));Ad(l,i,o),ue=null,We=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){Z(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Id(n,e),n=n.sibling}function Id(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(n,e),Je(e),r&4){try{wr(3,e,e.return),wl(3,e)}catch(g){Z(e,e.return,g)}try{wr(5,e,e.return)}catch(g){Z(e,e.return,g)}}break;case 1:Be(n,e),Je(e),r&512&&t!==null&&Tt(t,t.return);break;case 5:if(Be(n,e),Je(e),r&512&&t!==null&&Tt(t,t.return),e.flags&32){var o=e.stateNode;try{_r(o,"")}catch(g){Z(e,e.return,g)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=t!==null?t.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&ic(o,l),Ri(a,i);var u=Ri(a,l);for(i=0;i<s.length;i+=2){var d=s[i],f=s[i+1];d==="style"?dc(o,f):d==="dangerouslySetInnerHTML"?uc(o,f):d==="children"?_r(o,f):_a(o,d,f,u)}switch(a){case"input":Ni(o,l);break;case"textarea":ac(o,l);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?Dt(o,!!l.multiple,y,!1):h!==!!l.multiple&&(l.defaultValue!=null?Dt(o,!!l.multiple,l.defaultValue,!0):Dt(o,!!l.multiple,l.multiple?[]:"",!1))}o[Rr]=l}catch(g){Z(e,e.return,g)}}break;case 6:if(Be(n,e),Je(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(g){Z(e,e.return,g)}}break;case 3:if(Be(n,e),Je(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Nr(n.containerInfo)}catch(g){Z(e,e.return,g)}break;case 4:Be(n,e),Je(e);break;case 13:Be(n,e),Je(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(os=ee())),r&4&&vu(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(ye=(u=ye)||d,Be(n,e),ye=u):Be(n,e),Je(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(E=e,d=e.child;d!==null;){for(f=E=d;E!==null;){switch(h=E,y=h.child,h.tag){case 0:case 11:case 14:case 15:wr(4,h,h.return);break;case 1:Tt(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(g){Z(r,t,g)}}break;case 5:Tt(h,h.return);break;case 22:if(h.memoizedState!==null){yu(f);continue}}y!==null?(y.return=h,E=y):yu(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,u?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=f.stateNode,s=f.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=cc("display",i))}catch(g){Z(e,e.return,g)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){Z(e,e.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Be(n,e),Je(e),r&4&&vu(e);break;case 21:break;default:Be(n,e),Je(e)}}function Je(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Ld(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(_r(o,""),r.flags&=-33);var l=mu(e);ca(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=mu(e);ua(e,a,i);break;default:throw Error(k(161))}}catch(s){Z(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function $p(e,n,t){E=e,Fd(e)}function Fd(e,n,t){for(var r=(e.mode&1)!==0;E!==null;){var o=E,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||vo;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||ye;a=vo;var u=ye;if(vo=i,(ye=s)&&!u)for(E=o;E!==null;)i=E,s=i.child,i.tag===22&&i.memoizedState!==null?xu(o):s!==null?(s.return=i,E=s):xu(o);for(;l!==null;)E=l,Fd(l),l=l.sibling;E=o,vo=a,ye=u}gu(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,E=l):gu(e)}}function gu(e){for(;E!==null;){var n=E;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ye||wl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ye)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:Ve(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&nu(n,l,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}nu(n,i,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Nr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ye||n.flags&512&&sa(n)}catch(h){Z(n,n.return,h)}}if(n===e){E=null;break}if(t=n.sibling,t!==null){t.return=n.return,E=t;break}E=n.return}}function yu(e){for(;E!==null;){var n=E;if(n===e){E=null;break}var t=n.sibling;if(t!==null){t.return=n.return,E=t;break}E=n.return}}function xu(e){for(;E!==null;){var n=E;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{wl(4,n)}catch(s){Z(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(s){Z(n,o,s)}}var l=n.return;try{sa(n)}catch(s){Z(n,l,s)}break;case 5:var i=n.return;try{sa(n)}catch(s){Z(n,i,s)}}}catch(s){Z(n,n.return,s)}if(n===e){E=null;break}var a=n.sibling;if(a!==null){a.return=n.return,E=a;break}E=n.return}}var Up=Math.ceil,ol=xn.ReactCurrentDispatcher,ts=xn.ReactCurrentOwner,$e=xn.ReactCurrentBatchConfig,F=0,ae=null,ne=null,ce=0,ze=0,Rt=Wn(0),re=0,$r=null,st=0,kl=0,rs=0,kr=null,Pe=null,os=0,Qt=1/0,un=null,ll=!1,da=null,An=null,go=!1,Nn=null,il=0,Sr=0,fa=null,Lo=-1,Ao=0;function we(){return F&6?ee():Lo!==-1?Lo:Lo=ee()}function In(e){return e.mode&1?F&2&&ce!==0?ce&-ce:Pp.transition!==null?(Ao===0&&(Ao=Sc()),Ao):(e=U,e!==0||(e=window.event,e=e===void 0?16:zc(e.type)),e):1}function Ge(e,n,t,r){if(50<Sr)throw Sr=0,fa=null,Error(k(185));Br(e,t,r),(!(F&2)||e!==ae)&&(e===ae&&(!(F&2)&&(kl|=t),re===4&&Cn(e,ce)),Ee(e,r),t===1&&F===0&&!(n.mode&1)&&(Qt=ee()+500,yl&&Qn()))}function Ee(e,n){var t=e.callbackNode;P0(e,n);var r=Bo(e,e===ae?ce:0);if(r===0)t!==null&&Es(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Es(t),n===1)e.tag===0?Sp(bu.bind(null,e)):Xc(bu.bind(null,e)),xp(function(){!(F&6)&&Qn()}),t=null;else{switch(Pc(r)){case 1:t=za;break;case 4:t=wc;break;case 16:t=qo;break;case 536870912:t=kc;break;default:t=qo}t=Qd(t,$d.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function $d(e,n){if(Lo=-1,Ao=0,F&6)throw Error(k(327));var t=e.callbackNode;if($t()&&e.callbackNode!==t)return null;var r=Bo(e,e===ae?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=al(e,r);else{n=r;var o=F;F|=2;var l=qd();(ae!==e||ce!==n)&&(un=null,Qt=ee()+500,rt(e,n));do try{Hp();break}catch(a){Ud(e,a)}while(!0);Ba(),ol.current=l,F=o,ne!==null?n=0:(ae=null,ce=0,n=re)}if(n!==0){if(n===2&&(o=Fi(e),o!==0&&(r=o,n=pa(e,o))),n===1)throw t=$r,rt(e,0),Cn(e,r),Ee(e,ee()),t;if(n===6)Cn(e,r);else{if(o=e.current.alternate,!(r&30)&&!qp(o)&&(n=al(e,r),n===2&&(l=Fi(e),l!==0&&(r=l,n=pa(e,l))),n===1))throw t=$r,rt(e,0),Cn(e,r),Ee(e,ee()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:Jn(e,Pe,un);break;case 3:if(Cn(e,r),(r&130023424)===r&&(n=os+500-ee(),10<n)){if(Bo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Qi(Jn.bind(null,e,Pe,un),n);break}Jn(e,Pe,un);break;case 4:if(Cn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var i=31-Ye(r);l=1<<i,i=n[i],i>o&&(o=i),r&=~l}if(r=o,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Up(r/1960))-r,10<r){e.timeoutHandle=Qi(Jn.bind(null,e,Pe,un),r);break}Jn(e,Pe,un);break;case 5:Jn(e,Pe,un);break;default:throw Error(k(329))}}}return Ee(e,ee()),e.callbackNode===t?$d.bind(null,e):null}function pa(e,n){var t=kr;return e.current.memoizedState.isDehydrated&&(rt(e,n).flags|=256),e=al(e,n),e!==2&&(n=Pe,Pe=t,n!==null&&ha(n)),e}function ha(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function qp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],l=o.getSnapshot;o=o.value;try{if(!Ze(l(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Cn(e,n){for(n&=~rs,n&=~kl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ye(n),r=1<<t;e[t]=-1,n&=~r}}function bu(e){if(F&6)throw Error(k(327));$t();var n=Bo(e,0);if(!(n&1))return Ee(e,ee()),null;var t=al(e,n);if(e.tag!==0&&t===2){var r=Fi(e);r!==0&&(n=r,t=pa(e,r))}if(t===1)throw t=$r,rt(e,0),Cn(e,n),Ee(e,ee()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Jn(e,Pe,un),Ee(e,ee()),null}function ls(e,n){var t=F;F|=1;try{return e(n)}finally{F=t,F===0&&(Qt=ee()+500,yl&&Qn())}}function ut(e){Nn!==null&&Nn.tag===0&&!(F&6)&&$t();var n=F;F|=1;var t=$e.transition,r=U;try{if($e.transition=null,U=1,e)return e()}finally{U=r,$e.transition=t,F=n,!(F&6)&&Qn()}}function is(){ze=Rt.current,V(Rt)}function rt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,yp(t)),ne!==null)for(t=ne.return;t!==null;){var r=t;switch($a(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ko();break;case 3:Vt(),V(Ce),V(xe),Xa();break;case 5:Ka(r);break;case 4:Vt();break;case 13:V(X);break;case 19:V(X);break;case 10:Ha(r.type._context);break;case 22:case 23:is()}t=t.return}if(ae=e,ne=e=Fn(e.current,null),ce=ze=n,re=0,$r=null,rs=kl=st=0,Pe=kr=null,nt!==null){for(n=0;n<nt.length;n++)if(t=nt[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,l=t.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}t.pending=r}nt=null}return e}function Ud(e,n){do{var t=ne;try{if(Ba(),To.current=rl,tl){for(var r=Y.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}tl=!1}if(at=0,ie=te=Y=null,br=!1,Ar=0,ts.current=null,t===null||t.return===null){re=1,$r=n,ne=null;break}e:{var l=e,i=t.return,a=t,s=n;if(n=ce,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=au(i);if(y!==null){y.flags&=-257,su(y,i,a,l,n),y.mode&1&&iu(l,u,n),n=y,s=u;var x=n.updateQueue;if(x===null){var g=new Set;g.add(s),n.updateQueue=g}else x.add(s);break e}else{if(!(n&1)){iu(l,u,n),as();break e}s=Error(k(426))}}else if(K&&a.mode&1){var w=au(i);if(w!==null){!(w.flags&65536)&&(w.flags|=256),su(w,i,a,l,n),Ua(Wt(s,a));break e}}l=s=Wt(s,a),re!==4&&(re=2),kr===null?kr=[l]:kr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var m=Pd(l,s,n);eu(l,m);break e;case 1:a=s;var p=l.type,v=l.stateNode;if(!(l.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(An===null||!An.has(v)))){l.flags|=65536,n&=-n,l.lanes|=n;var b=_d(l,a,n);eu(l,b);break e}}l=l.return}while(l!==null)}Hd(t)}catch(P){n=P,ne===t&&t!==null&&(ne=t=t.return);continue}break}while(!0)}function qd(){var e=ol.current;return ol.current=rl,e===null?rl:e}function as(){(re===0||re===3||re===2)&&(re=4),ae===null||!(st&268435455)&&!(kl&268435455)||Cn(ae,ce)}function al(e,n){var t=F;F|=2;var r=qd();(ae!==e||ce!==n)&&(un=null,rt(e,n));do try{Bp();break}catch(o){Ud(e,o)}while(!0);if(Ba(),F=t,ol.current=r,ne!==null)throw Error(k(261));return ae=null,ce=0,re}function Bp(){for(;ne!==null;)Bd(ne)}function Hp(){for(;ne!==null&&!m0();)Bd(ne)}function Bd(e){var n=Wd(e.alternate,e,ze);e.memoizedProps=e.pendingProps,n===null?Hd(e):ne=n,ts.current=null}function Hd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Ap(t,n),t!==null){t.flags&=32767,ne=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,ne=null;return}}else if(t=Lp(t,n,ze),t!==null){ne=t;return}if(n=n.sibling,n!==null){ne=n;return}ne=n=e}while(n!==null);re===0&&(re=5)}function Jn(e,n,t){var r=U,o=$e.transition;try{$e.transition=null,U=1,Vp(e,n,t,r)}finally{$e.transition=o,U=r}return null}function Vp(e,n,t,r){do $t();while(Nn!==null);if(F&6)throw Error(k(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(_0(e,l),e===ae&&(ne=ae=null,ce=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||go||(go=!0,Qd(qo,function(){return $t(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=$e.transition,$e.transition=null;var i=U;U=1;var a=F;F|=4,ts.current=null,Fp(e,t),Id(t,e),dp(Vi),Ho=!!Hi,Vi=Hi=null,e.current=t,$p(t),v0(),F=a,U=i,$e.transition=l}else e.current=t;if(go&&(go=!1,Nn=e,il=o),l=e.pendingLanes,l===0&&(An=null),x0(t.stateNode),Ee(e,ee()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(ll)throw ll=!1,e=da,da=null,e;return il&1&&e.tag!==0&&$t(),l=e.pendingLanes,l&1?e===fa?Sr++:(Sr=0,fa=e):Sr=0,Qn(),null}function $t(){if(Nn!==null){var e=Pc(il),n=$e.transition,t=U;try{if($e.transition=null,U=16>e?16:e,Nn===null)var r=!1;else{if(e=Nn,Nn=null,il=0,F&6)throw Error(k(331));var o=F;for(F|=4,E=e.current;E!==null;){var l=E,i=l.child;if(E.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(E=u;E!==null;){var d=E;switch(d.tag){case 0:case 11:case 15:wr(8,d,l)}var f=d.child;if(f!==null)f.return=d,E=f;else for(;E!==null;){d=E;var h=d.sibling,y=d.return;if(Dd(d),d===u){E=null;break}if(h!==null){h.return=y,E=h;break}E=y}}}var x=l.alternate;if(x!==null){var g=x.child;if(g!==null){x.child=null;do{var w=g.sibling;g.sibling=null,g=w}while(g!==null)}}E=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,E=i;else e:for(;E!==null;){if(l=E,l.flags&2048)switch(l.tag){case 0:case 11:case 15:wr(9,l,l.return)}var m=l.sibling;if(m!==null){m.return=l.return,E=m;break e}E=l.return}}var p=e.current;for(E=p;E!==null;){i=E;var v=i.child;if(i.subtreeFlags&2064&&v!==null)v.return=i,E=v;else e:for(i=p;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wl(9,a)}}catch(P){Z(a,a.return,P)}if(a===i){E=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,E=b;break e}E=a.return}}if(F=o,Qn(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(pl,e)}catch{}r=!0}return r}finally{U=t,$e.transition=n}}return!1}function wu(e,n,t){n=Wt(t,n),n=Pd(e,n,1),e=Ln(e,n,1),n=we(),e!==null&&(Br(e,1,n),Ee(e,n))}function Z(e,n,t){if(e.tag===3)wu(e,e,t);else for(;n!==null;){if(n.tag===3){wu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(An===null||!An.has(r))){e=Wt(t,e),e=_d(n,e,1),n=Ln(n,e,1),e=we(),n!==null&&(Br(n,1,e),Ee(n,e));break}}n=n.return}}function Wp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=we(),e.pingedLanes|=e.suspendedLanes&t,ae===e&&(ce&t)===t&&(re===4||re===3&&(ce&130023424)===ce&&500>ee()-os?rt(e,0):rs|=t),Ee(e,n)}function Vd(e,n){n===0&&(e.mode&1?(n=io,io<<=1,!(io&130023424)&&(io=4194304)):n=1);var t=we();e=gn(e,n),e!==null&&(Br(e,n,t),Ee(e,t))}function Qp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Vd(e,t)}function Kp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),Vd(e,t)}var Wd;Wd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ce.current)_e=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return _e=!1,Dp(e,n,t);_e=!!(e.flags&131072)}else _e=!1,K&&n.flags&1048576&&Yc(n,Go,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Do(e,n),e=n.pendingProps;var o=qt(n,xe.current);Ft(n,t),o=Ga(null,n,r,e,o,t);var l=Za();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Oe(r)?(l=!0,Xo(n)):l=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Wa(n),o.updater=bl,n.stateNode=o,o._reactInternals=n,ea(n,r,e,t),n=ra(null,n,r,!0,l,t)):(n.tag=0,K&&l&&Fa(n),be(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Do(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=Yp(r),e=Ve(r,e),o){case 0:n=ta(null,n,r,e,t);break e;case 1:n=du(null,n,r,e,t);break e;case 11:n=uu(null,n,r,e,t);break e;case 14:n=cu(null,n,r,Ve(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ve(r,o),ta(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ve(r,o),du(e,n,r,o,t);case 3:e:{if(Nd(n),e===null)throw Error(k(387));r=n.pendingProps,l=n.memoizedState,o=l.element,td(e,n),el(n,r,null,t);var i=n.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){o=Wt(Error(k(423)),n),n=fu(e,n,r,t,o);break e}else if(r!==o){o=Wt(Error(k(424)),n),n=fu(e,n,r,t,o);break e}else for(je=Dn(n.stateNode.containerInfo.firstChild),Me=n,K=!0,Qe=null,t=ed(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Bt(),r===o){n=yn(e,n,t);break e}be(e,n,r,t)}n=n.child}return n;case 5:return rd(n),e===null&&Gi(n),r=n.type,o=n.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Wi(r,o)?i=null:l!==null&&Wi(r,l)&&(n.flags|=32),Ed(e,n),be(e,n,i,t),n.child;case 6:return e===null&&Gi(n),null;case 13:return zd(e,n,t);case 4:return Qa(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ht(n,null,r,t):be(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ve(r,o),uu(e,n,r,o,t);case 7:return be(e,n,n.pendingProps,t),n.child;case 8:return be(e,n,n.pendingProps.children,t),n.child;case 12:return be(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,l=n.memoizedProps,i=o.value,B(Zo,r._currentValue),r._currentValue=i,l!==null)if(Ze(l.value,i)){if(l.children===o.children&&!Ce.current){n=yn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=hn(-1,t&-t),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),Zi(l.return,t,n),a.lanes|=t;break}s=s.next}}else if(l.tag===10)i=l.type===n.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(k(341));i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),Zi(i,t,n),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===n){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}be(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,Ft(n,t),o=Ue(o),r=r(o),n.flags|=1,be(e,n,r,t),n.child;case 14:return r=n.type,o=Ve(r,n.pendingProps),o=Ve(r.type,o),cu(e,n,r,o,t);case 15:return Cd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ve(r,o),Do(e,n),n.tag=1,Oe(r)?(e=!0,Xo(n)):e=!1,Ft(n,t),Sd(n,r,o),ea(n,r,o,t),ra(null,n,r,!0,e,t);case 19:return jd(e,n,t);case 22:return Od(e,n,t)}throw Error(k(156,n.tag))};function Qd(e,n){return bc(e,n)}function Xp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,n,t,r){return new Xp(e,n,t,r)}function ss(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yp(e){if(typeof e=="function")return ss(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Oa)return 11;if(e===Ea)return 14}return 2}function Fn(e,n){var t=e.alternate;return t===null?(t=Fe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Io(e,n,t,r,o,l){var i=2;if(r=e,typeof e=="function")ss(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Pt:return ot(t.children,o,l,n);case Ca:i=8,o|=8;break;case Pi:return e=Fe(12,t,n,o|2),e.elementType=Pi,e.lanes=l,e;case _i:return e=Fe(13,t,n,o),e.elementType=_i,e.lanes=l,e;case Ci:return e=Fe(19,t,n,o),e.elementType=Ci,e.lanes=l,e;case rc:return Sl(t,o,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nc:i=10;break e;case tc:i=9;break e;case Oa:i=11;break e;case Ea:i=14;break e;case Sn:i=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=Fe(i,t,n,o),n.elementType=e,n.type=r,n.lanes=l,n}function ot(e,n,t,r){return e=Fe(7,e,r,n),e.lanes=t,e}function Sl(e,n,t,r){return e=Fe(22,e,r,n),e.elementType=rc,e.lanes=t,e.stateNode={isHidden:!1},e}function hi(e,n,t){return e=Fe(6,e,null,n),e.lanes=t,e}function mi(e,n,t){return n=Fe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Gp(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xl(0),this.expirationTimes=Xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function us(e,n,t,r,o,l,i,a,s){return e=new Gp(e,n,t,a,s),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Fe(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wa(l),e}function Zp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:St,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Kd(e){if(!e)return Bn;e=e._reactInternals;e:{if(pt(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Oe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(Oe(t))return Kc(e,t,n)}return n}function Xd(e,n,t,r,o,l,i,a,s){return e=us(t,r,!0,e,o,l,i,a,s),e.context=Kd(null),t=e.current,r=we(),o=In(t),l=hn(r,o),l.callback=n??null,Ln(t,l,o),e.current.lanes=o,Br(e,o,r),Ee(e,r),e}function Pl(e,n,t,r){var o=n.current,l=we(),i=In(o);return t=Kd(t),n.context===null?n.context=t:n.pendingContext=t,n=hn(l,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Ln(o,n,i),e!==null&&(Ge(e,o,i,l),Mo(e,o,i)),i}function sl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ku(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function cs(e,n){ku(e,n),(e=e.alternate)&&ku(e,n)}function Jp(){return null}var Yd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ds(e){this._internalRoot=e}_l.prototype.render=ds.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));Pl(e,n,null,null)};_l.prototype.unmount=ds.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ut(function(){Pl(null,e,null,null)}),n[vn]=null}};function _l(e){this._internalRoot=e}_l.prototype.unstable_scheduleHydration=function(e){if(e){var n=Oc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<_n.length&&n!==0&&n<_n[t].priority;t++);_n.splice(t,0,e),t===0&&Nc(e)}};function fs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Su(){}function e1(e,n,t,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var u=sl(i);l.call(u)}}var i=Xd(n,r,e,0,null,!1,!1,"",Su);return e._reactRootContainer=i,e[vn]=i.current,Mr(e.nodeType===8?e.parentNode:e),ut(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=sl(s);a.call(u)}}var s=us(e,0,!1,null,null,!1,!1,"",Su);return e._reactRootContainer=s,e[vn]=s.current,Mr(e.nodeType===8?e.parentNode:e),ut(function(){Pl(n,s,t,r)}),s}function Ol(e,n,t,r,o){var l=t._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=sl(i);a.call(s)}}Pl(n,i,e,o)}else i=e1(t,n,e,o,r);return sl(i)}_c=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=fr(n.pendingLanes);t!==0&&(ja(n,t|1),Ee(n,ee()),!(F&6)&&(Qt=ee()+500,Qn()))}break;case 13:ut(function(){var r=gn(e,1);if(r!==null){var o=we();Ge(r,e,1,o)}}),cs(e,1)}};Ma=function(e){if(e.tag===13){var n=gn(e,134217728);if(n!==null){var t=we();Ge(n,e,134217728,t)}cs(e,134217728)}};Cc=function(e){if(e.tag===13){var n=In(e),t=gn(e,n);if(t!==null){var r=we();Ge(t,e,n,r)}cs(e,n)}};Oc=function(){return U};Ec=function(e,n){var t=U;try{return U=e,n()}finally{U=t}};Li=function(e,n,t){switch(n){case"input":if(Ni(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=gl(r);if(!o)throw Error(k(90));lc(r),Ni(r,o)}}}break;case"textarea":ac(e,t);break;case"select":n=t.value,n!=null&&Dt(e,!!t.multiple,n,!1)}};hc=ls;mc=ut;var n1={usingClientEntryPoint:!1,Events:[Vr,Et,gl,fc,pc,ls]},sr={findFiberByHostInstance:et,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},t1={bundleType:sr.bundleType,version:sr.version,rendererPackageName:sr.rendererPackageName,rendererConfig:sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yc(e),e===null?null:e.stateNode},findFiberByHostInstance:sr.findFiberByHostInstance||Jp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yo.isDisabled&&yo.supportsFiber)try{pl=yo.inject(t1),rn=yo}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n1;Re.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fs(n))throw Error(k(200));return Zp(e,n,null,t)};Re.createRoot=function(e,n){if(!fs(e))throw Error(k(299));var t=!1,r="",o=Yd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=us(e,1,!1,null,null,t,!1,r,o),e[vn]=n.current,Mr(e.nodeType===8?e.parentNode:e),new ds(n)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=yc(n),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return ut(e)};Re.hydrate=function(e,n,t){if(!Cl(n))throw Error(k(200));return Ol(null,e,n,!0,t)};Re.hydrateRoot=function(e,n,t){if(!fs(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,o=!1,l="",i=Yd;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=Xd(n,null,e,1,t??null,o,!1,l,i),e[vn]=n.current,Mr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new _l(n)};Re.render=function(e,n,t){if(!Cl(n))throw Error(k(200));return Ol(null,e,n,!1,t)};Re.unmountComponentAtNode=function(e){if(!Cl(e))throw Error(k(40));return e._reactRootContainer?(ut(function(){Ol(null,null,e,!1,function(){e._reactRootContainer=null,e[vn]=null})}),!0):!1};Re.unstable_batchedUpdates=ls;Re.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Cl(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ol(e,n,t,!1,r)};Re.version="18.3.1-next-f1338f8080-20240426";function Gd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gd)}catch(e){console.error(e)}}Gd(),Gu.exports=Re;var r1=Gu.exports;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ul(){return ul=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ul.apply(this,arguments)}var zn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(zn||(zn={}));function o1(e){e===void 0&&(e={});let{initialEntries:n=["/"],initialIndex:t,v5Compat:r=!1}=e,o;o=n.map((y,x)=>d(y,typeof y=="string"?null:y.state,x===0?"default":void 0));let l=s(t??o.length-1),i=zn.Pop,a=null;function s(y){return Math.min(Math.max(y,0),o.length-1)}function u(){return o[l]}function d(y,x,g){x===void 0&&(x=null);let w=i1(o?u().pathname:"/",y,x,g);return ps(w.pathname.charAt(0)==="/","relative pathnames are not supported in memory history: "+JSON.stringify(y)),w}function f(y){return typeof y=="string"?y:ma(y)}return{get index(){return l},get action(){return i},get location(){return u()},createHref:f,createURL(y){return new URL(f(y),"http://localhost")},encodeLocation(y){let x=typeof y=="string"?ht(y):y;return{pathname:x.pathname||"",search:x.search||"",hash:x.hash||""}},push(y,x){i=zn.Push;let g=d(y,x);l+=1,o.splice(l,o.length,g),r&&a&&a({action:i,location:g,delta:1})},replace(y,x){i=zn.Replace;let g=d(y,x);o[l]=g,r&&a&&a({action:i,location:g,delta:0})},go(y){i=zn.Pop;let x=s(l+y),g=o[x];l=x,a&&a({action:i,location:g,delta:y})},listen(y){return a=y,()=>{a=null}}}}function oe(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function ps(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function l1(){return Math.random().toString(36).substr(2,8)}function i1(e,n,t,r){return t===void 0&&(t=null),ul({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?ht(n):n,{state:t,key:n&&n.key||r||l1()})}function ma(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function ht(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}var Pu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Pu||(Pu={}));function a1(e,n,t){return t===void 0&&(t="/"),s1(e,n,t,!1)}function s1(e,n,t,r){let o=typeof n=="string"?ht(n):n,l=hs(o.pathname||"/",t);if(l==null)return null;let i=Zd(e);u1(i);let a=null;for(let s=0;a==null&&s<i.length;++s){let u=b1(l);a=y1(i[s],u,r)}return a}function Zd(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(l,i,a)=>{let s={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};s.relativePath.startsWith("/")&&(oe(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=$n([r,s.relativePath]),d=t.concat(s);l.children&&l.children.length>0&&(oe(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Zd(l.children,n,d,u)),!(l.path==null&&!l.index)&&n.push({path:u,score:v1(u,l.index),routesMeta:d})};return e.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,i);else for(let s of Jd(l.path))o(l,i,s)}),n}function Jd(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=Jd(r.join("/")),a=[];return a.push(...i.map(s=>s===""?l:[l,s].join("/"))),o&&a.push(...i),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function u1(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:g1(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const c1=/^:[\w-]+$/,d1=3,f1=2,p1=1,h1=10,m1=-2,_u=e=>e==="*";function v1(e,n){let t=e.split("/"),r=t.length;return t.some(_u)&&(r+=m1),n&&(r+=f1),t.filter(o=>!_u(o)).reduce((o,l)=>o+(c1.test(l)?d1:l===""?p1:h1),r)}function g1(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function y1(e,n,t){let{routesMeta:r}=e,o={},l="/",i=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,d=l==="/"?n:n.slice(l.length)||"/",f=Cu({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},d),h=s.route;if(!f&&u&&t&&!r[r.length-1].route.index&&(f=Cu({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},d)),!f)return null;Object.assign(o,f.params),i.push({params:o,pathname:$n([l,f.pathname]),pathnameBase:P1($n([l,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(l=$n([l,f.pathnameBase]))}return i}function Cu(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=x1(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:h,isOptional:y}=d;if(h==="*"){let g=a[f]||"";i=l.slice(0,l.length-g.length).replace(/(.)\/+$/,"$1")}const x=a[f];return y&&!x?u[h]=void 0:u[h]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:i,pattern:e}}function x1(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),ps(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function b1(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return ps(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function hs(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function w1(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?ht(e):e;return{pathname:t?t.startsWith("/")?t:k1(t,n):n,search:_1(r),hash:C1(o)}}function k1(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function vi(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function S1(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function ef(e,n){let t=S1(e);return n?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function nf(e,n,t,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=ht(e):(o=ul({},e),oe(!o.pathname||!o.pathname.includes("?"),vi("?","pathname","search",o)),oe(!o.pathname||!o.pathname.includes("#"),vi("#","pathname","hash",o)),oe(!o.search||!o.search.includes("#"),vi("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,a;if(i==null)a=t;else{let f=n.length-1;if(!r&&i.startsWith("..")){let h=i.split("/");for(;h[0]==="..";)h.shift(),f-=1;o.pathname=h.join("/")}a=f>=0?n[f]:"/"}let s=w1(o,a),u=i&&i!=="/"&&i.endsWith("/"),d=(l||i===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const $n=e=>e.join("/").replace(/\/\/+/g,"/"),P1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,C1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function O1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const tf=["post","put","patch","delete"];new Set(tf);const E1=["get",...tf];new Set(E1);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ur(){return Ur=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ur.apply(this,arguments)}const ms=S.createContext(null),N1=S.createContext(null),mt=S.createContext(null),El=S.createContext(null),Kn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),rf=S.createContext(null);function z1(e,n){let{relative:t}=n===void 0?{}:n;Qr()||oe(!1);let{basename:r,navigator:o}=S.useContext(mt),{hash:l,pathname:i,search:a}=lf(e,{relative:t}),s=i;return r!=="/"&&(s=i==="/"?r:$n([r,i])),o.createHref({pathname:s,search:a,hash:l})}function Qr(){return S.useContext(El)!=null}function Xn(){return Qr()||oe(!1),S.useContext(El).location}function of(e){S.useContext(mt).static||S.useLayoutEffect(e)}function vt(){let{isDataRoute:e}=S.useContext(Kn);return e?V1():j1()}function j1(){Qr()||oe(!1);let e=S.useContext(ms),{basename:n,future:t,navigator:r}=S.useContext(mt),{matches:o}=S.useContext(Kn),{pathname:l}=Xn(),i=JSON.stringify(ef(o,t.v7_relativeSplatPath)),a=S.useRef(!1);return of(()=>{a.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=nf(u,JSON.parse(i),l,d.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:$n([n,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[n,r,i,l,e])}const M1=S.createContext(null);function T1(e){let n=S.useContext(Kn).outlet;return n&&S.createElement(M1.Provider,{value:e},n)}function lf(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=S.useContext(mt),{matches:o}=S.useContext(Kn),{pathname:l}=Xn(),i=JSON.stringify(ef(o,r.v7_relativeSplatPath));return S.useMemo(()=>nf(e,JSON.parse(i),l,t==="path"),[e,i,l,t])}function R1(e,n){return D1(e,n)}function D1(e,n,t,r){Qr()||oe(!1);let{navigator:o}=S.useContext(mt),{matches:l}=S.useContext(Kn),i=l[l.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let u=Xn(),d;if(n){var f;let w=typeof n=="string"?ht(n):n;s==="/"||(f=w.pathname)!=null&&f.startsWith(s)||oe(!1),d=w}else d=u;let h=d.pathname||"/",y=h;if(s!=="/"){let w=s.replace(/^\//,"").split("/");y="/"+h.replace(/^\//,"").split("/").slice(w.length).join("/")}let x=a1(e,{pathname:y}),g=$1(x&&x.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:$n([s,o.encodeLocation?o.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:$n([s,o.encodeLocation?o.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),l,t,r);return n&&g?S.createElement(El.Provider,{value:{location:Ur({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:zn.Pop}},g):g}function L1(){let e=H1(),n=O1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},n),t?S.createElement("pre",{style:o},t):null,null)}const A1=S.createElement(L1,null);class I1 extends S.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?S.createElement(Kn.Provider,{value:this.props.routeContext},S.createElement(rf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function F1(e){let{routeContext:n,match:t,children:r}=e,o=S.useContext(ms);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),S.createElement(Kn.Provider,{value:n},r)}function $1(e,n,t,r){var o;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var l;if(!t)return null;if(t.errors)e=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let i=e,a=(o=t)==null?void 0:o.errors;if(a!=null){let d=i.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||oe(!1),i=i.slice(0,Math.min(i.length,d+1))}let s=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let d=0;d<i.length;d++){let f=i[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:h,errors:y}=t,x=f.route.loader&&h[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||x){s=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((d,f,h)=>{let y,x=!1,g=null,w=null;t&&(y=a&&f.route.id?a[f.route.id]:void 0,g=f.route.errorElement||A1,s&&(u<0&&h===0?(x=!0,w=null):u===h&&(x=!0,w=f.route.hydrateFallbackElement||null)));let m=n.concat(i.slice(0,h+1)),p=()=>{let v;return y?v=g:x?v=w:f.route.Component?v=S.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,S.createElement(F1,{match:f,routeContext:{outlet:d,matches:m,isDataRoute:t!=null},children:v})};return t&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?S.createElement(I1,{location:t.location,revalidation:t.revalidation,component:g,error:y,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var af=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(af||{}),cl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(cl||{});function U1(e){let n=S.useContext(ms);return n||oe(!1),n}function q1(e){let n=S.useContext(N1);return n||oe(!1),n}function B1(e){let n=S.useContext(Kn);return n||oe(!1),n}function sf(e){let n=B1(),t=n.matches[n.matches.length-1];return t.route.id||oe(!1),t.route.id}function H1(){var e;let n=S.useContext(rf),t=q1(cl.UseRouteError),r=sf(cl.UseRouteError);return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function V1(){let{router:e}=U1(af.UseNavigateStable),n=sf(cl.UseNavigateStable),t=S.useRef(!1);return of(()=>{t.current=!0}),S.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Ur({fromRouteId:n},l)))},[e,n])}const W1="startTransition",Ou=Wf[W1];function Q1(e){let{basename:n,children:t,initialEntries:r,initialIndex:o,future:l}=e,i=S.useRef();i.current==null&&(i.current=o1({initialEntries:r,initialIndex:o,v5Compat:!0}));let a=i.current,[s,u]=S.useState({action:a.action,location:a.location}),{v7_startTransition:d}=l||{},f=S.useCallback(h=>{d&&Ou?Ou(()=>u(h)):u(h)},[u,d]);return S.useLayoutEffect(()=>a.listen(f),[a,f]),S.createElement(K1,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:a,future:l})}function uf(e){return T1(e.context)}function sn(e){oe(!1)}function K1(e){let{basename:n="/",children:t=null,location:r,navigationType:o=zn.Pop,navigator:l,static:i=!1,future:a}=e;Qr()&&oe(!1);let s=n.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:s,navigator:l,static:i,future:Ur({v7_relativeSplatPath:!1},a)}),[s,a,l,i]);typeof r=="string"&&(r=ht(r));let{pathname:d="/",search:f="",hash:h="",state:y=null,key:x="default"}=r,g=S.useMemo(()=>{let w=hs(d,s);return w==null?null:{location:{pathname:w,search:f,hash:h,state:y,key:x},navigationType:o}},[s,d,f,h,y,x,o]);return g==null?null:S.createElement(mt.Provider,{value:u},S.createElement(El.Provider,{children:t,value:g}))}function X1(e){let{children:n,location:t}=e;return R1(va(n),t)}new Promise(()=>{});function va(e,n){n===void 0&&(n=[]);let t=[];return S.Children.forEach(e,(r,o)=>{if(!S.isValidElement(r))return;let l=[...n,o];if(r.type===S.Fragment){t.push.apply(t,va(r.props.children,l));return}r.type!==sn&&oe(!1),!r.props.index||!r.props.children||oe(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=va(r.props.children,l)),t.push(i)}),t}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ga(){return ga=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ga.apply(this,arguments)}function Y1(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function G1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Z1(e,n){return e.button===0&&(!n||n==="_self")&&!G1(e)}const J1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],eh="6";try{window.__reactRouterVersion=eh}catch{}const nh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",th=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Un=S.forwardRef(function(n,t){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:a,target:s,to:u,preventScrollReset:d,unstable_viewTransition:f}=n,h=Y1(n,J1),{basename:y}=S.useContext(mt),x,g=!1;if(typeof u=="string"&&th.test(u)&&(x=u,nh))try{let v=new URL(window.location.href),b=u.startsWith("//")?new URL(v.protocol+u):new URL(u),P=hs(b.pathname,y);b.origin===v.origin&&P!=null?u=P+b.search+b.hash:g=!0}catch{}let w=z1(u,{relative:o}),m=rh(u,{replace:i,state:a,target:s,preventScrollReset:d,relative:o,unstable_viewTransition:f});function p(v){r&&r(v),v.defaultPrevented||m(v)}return S.createElement("a",ga({},h,{href:x||w,onClick:g||l?r:p,ref:t,target:s}))});var Eu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Eu||(Eu={}));var Nu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Nu||(Nu={}));function rh(e,n){let{target:t,replace:r,state:o,preventScrollReset:l,relative:i,unstable_viewTransition:a}=n===void 0?{}:n,s=vt(),u=Xn(),d=lf(e,{relative:i});return S.useCallback(f=>{if(Z1(f,t)){f.preventDefault();let h=r!==void 0?r:ma(u)===ma(d);s(e,{replace:h,state:o,preventScrollReset:l,relative:i,unstable_viewTransition:a})}},[u,s,d,r,o,t,e,l,i,a])}const Gt=({className:e})=>c.jsx("svg",{className:`${e}`,fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M15 5L9.66939 11.2191C9.2842 11.6684 9.2842 12.3316 9.66939 12.7809L15 19",stroke:"#FEFEFE",strokeLinecap:"round",strokeWidth:"1.5"})}),oh=({className:e})=>c.jsx("svg",{className:`${e}`,fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M9 19L14.3306 12.7809C14.7158 12.3316 14.7158 11.6684 14.3306 11.2191L9 5",stroke:"#FEFEFE",strokeLinecap:"round",strokeWidth:"1.5"})}),tn=({icon:e,title:n})=>c.jsxs("div",{className:"flex  overflow-hidden justify-between p-[10px] bg-[#50505026] mini:w-[80%]",children:[c.jsxs("div",{className:"inline-flex items-center gap-[12px]",children:[e,c.jsx("div",{className:"w-fit mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[18px] whitespace-nowrap",children:n})]}),c.jsx(oh,{className:"!relative !w-[24px] !h-[24px] mini:hidden"})]}),cf=({className:e})=>c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:`${e}`,viewBox:"0 0 1024 1024",children:[c.jsx("path",{fill:"yellow",d:"m161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z"}),c.jsx("path",{fill:"yellow",d:"m161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z"}),c.jsx("path",{fill:"yellow",d:"M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224m0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160"})]}),ct=({className:e})=>c.jsxs("svg",{width:"64",className:`${e}`,height:"65",viewBox:"0 0 64 65",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M49.5678 22.5137H43.9056C43.2471 22.5137 42.6189 22.2516 42.1808 21.7961L39.8857 19.4017C39.544 19.0455 39.0508 18.8394 38.5356 18.8394C38.0203 18.8394 37.5271 19.0429 37.1855 19.4017L35.2154 21.4577C34.5707 22.1294 33.6449 22.5162 32.6723 22.5162H1.68624C0.804545 24.8394 0.228689 27.2923 0 29.8394H29.253C29.7682 29.8394 30.2586 29.646 30.6141 29.3025L33.3391 26.679C33.678 26.3508 34.1491 26.1651 34.6396 26.1651H34.7525C35.2678 26.1651 35.761 26.3686 36.1026 26.7274L38.3978 29.1218C38.8359 29.5773 39.4613 29.8394 40.1226 29.8394H64C63.7713 27.2923 63.1954 24.8394 62.3137 22.5162H49.5678V22.5137Z",fill:"black"}),c.jsx("path",{d:"M17.9561 46.8366C18.4622 46.8366 18.944 46.627 19.2931 46.2547L21.9698 43.4112C22.3027 43.0554 22.7655 42.8541 23.2473 42.8541H23.3582C23.8643 42.8541 24.3488 43.0747 24.6844 43.4636L26.9389 46.0588C27.3692 46.5525 27.9836 46.8366 28.6332 46.8366H60.418C61.6089 44.3296 62.4804 41.6378 63 38.8219H32.4926C31.8457 38.8219 31.2287 38.5378 30.7983 38.0441L28.5438 35.4489C28.2082 35.0628 27.7238 34.8394 27.2177 34.8394C26.7115 34.8394 26.2271 35.06 25.8915 35.4489L23.9563 37.6773C23.323 38.4054 22.4137 38.8246 21.4583 38.8246H1C1.51964 41.6433 2.39114 44.3323 3.58199 46.8394H17.9561V46.8366Z",fill:"black"}),c.jsx("path",{d:"M40.0967 13.8394C40.6083 13.8394 41.0953 13.6272 41.4483 13.2502L44.1542 10.3716C44.4908 10.0114 44.9586 9.80757 45.4457 9.80757H45.5578C46.0695 9.80757 46.5592 10.0309 46.8985 10.4246L49.1776 13.052C49.6127 13.5518 50.2338 13.8394 50.8904 13.8394H57C51.1804 5.9461 41.9244 0.839355 31.5 0.839355C21.0757 0.839355 11.8196 5.9461 6 13.8394H40.0994H40.0967Z",fill:"black"}),c.jsx("path",{d:"M27.7966 54.7633H19.375C18.7159 54.7633 18.0872 54.4834 17.6487 53.997L15.3517 51.4399C15.0097 51.0595 14.5161 50.8394 14.0005 50.8394C13.4848 50.8394 12.9912 51.0567 12.6493 51.4399L10.6776 53.6356C10.0323 54.3529 9.1058 54.766 8.13237 54.766H8C13.8681 60.9616 22.2208 64.8394 31.5 64.8394C40.7792 64.8394 49.1319 60.9616 55 54.766H27.7966V54.7633Z",fill:"black"})]}),df=({className:e})=>c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:`${e}`,viewBox:"0 0 1100 1100",width:"1100",height:"1100",children:c.jsx("path",{fill:"yellow",d:"M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"})}),ff=({className:e})=>c.jsx("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"512.000000pt",height:"512.000000pt",className:`${e}`,viewBox:"0 0 512.000000 512.000000",children:c.jsxs("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"yellow",stroke:"none",children:[c.jsx("path",{d:`M1650 5109 c-32 -13 -68 -47 -86 -81 -29 -55 -18 -102 121 -517 l135
-405 -62 -65 c-87 -92 -106 -101 -205 -101 l-83 0 0 -165 0 -165 84 0 c188 0
277 39 418 182 78 80 110 105 171 134 209 99 411 58 593 -121 93 -93 187 -147
283 -165 29 -6 181 -10 337 -10 168 0 305 -4 336 -11 171 -36 317 -167 387
-347 25 -67 25 -68 29 -424 l3 -358 -150 0 -151 0 0 183 c0 255 -21 326 -132
443 -56 59 -121 97 -203 119 -71 18 -388 21 -481 4 -94 -17 -173 -61 -265
-147 -46 -42 -100 -87 -119 -99 -108 -66 -277 -85 -398 -44 -84 29 -132 60
-225 147 -125 118 -224 154 -419 154 l-98 0 0 -165 0 -165 100 0 c118 0 134
-6 214 -84 159 -156 354 -236 576 -236 221 0 408 76 575 234 93 89 89 88 302
84 l185 -3 29 -33 29 -32 0 -269 c0 -173 4 -280 11 -302 17 -51 65 -96 115
-108 56 -14 665 -15 716 -1 45 13 105 77 113 122 4 18 5 236 3 483 -4 427 -5
454 -26 530 -79 285 -285 514 -548 606 -121 42 -191 49 -495 49 -317 0 -330 2
-384 59 l-29 32 148 445 c160 483 160 481 113 552 -12 18 -40 41 -63 52 -39
19 -62 20 -760 19 -453 0 -728 -4 -744 -10z m580 -454 l0 -135 165 0 165 0 0
135 0 135 145 0 c80 0 145 -3 145 -6 0 -4 -39 -125 -87 -271 -70 -215 -89
-264 -102 -259 -133 43 -170 49 -301 50 -94 0 -152 -5 -192 -16 l-57 -16 -82
247 c-45 135 -84 252 -87 259 -3 9 29 12 142 12 l146 0 0 -135z`}),c.jsx("path",{d:`M430 4438 c-18 -13 -43 -36 -54 -51 -21 -28 -21 -33 -24 -928 -3
-1003 -7 -942 66 -997 l35 -27 357 0 357 0 35 27 c72 55 69 9 66 1004 l-3 891
-28 36 c-51 68 -48 67 -430 67 -340 0 -344 0 -377 -22z m510 -988 l0 -690
-130 0 -130 0 0 690 0 690 130 0 130 0 0 -690z`}),c.jsx("path",{d:`M3879 1987 c-19 -12 -78 -74 -133 -137 -279 -325 -471 -619 -548
-840 -30 -87 -33 -105 -32 -215 0 -93 5 -137 22 -198 79 -278 291 -490 569
-569 112 -32 305 -32 417 0 276 79 489 293 568 569 34 118 31 289 -5 399 -54
164 -178 375 -362 619 -115 152 -283 345 -324 372 -47 32 -125 32 -172 0z
m235 -572 c161 -212 279 -411 313 -525 20 -68 13 -173 -17 -252 -45 -122 -154
-230 -279 -280 -81 -32 -251 -32 -332 0 -124 49 -232 157 -280 280 -18 44 -23
78 -23 152 -1 85 2 102 31 166 61 140 199 350 362 553 l75 94 33 -39 c19 -22
71 -88 117 -149z`}),c.jsx("path",{d:`M3910 1198 c0 -40 -3 -45 -40 -66 -76 -43 -104 -153 -57 -222 14 -22
53 -50 107 -79 85 -46 103 -68 80 -96 -19 -23 -75 -18 -131 10 -36 19 -51 22
-54 13 -20 -57 -35 -102 -35 -109 0 -10 65 -44 103 -53 24 -6 27 -11 27 -52
l0 -45 58 3 57 3 5 47 c4 40 10 50 40 70 56 38 80 82 80 148 0 82 -34 126
-135 174 -65 31 -76 40 -73 59 4 31 63 35 117 8 22 -12 42 -17 45 -13 4 6 46
115 46 119 0 0 -25 11 -54 24 -51 21 -55 25 -58 58 l-3 36 -62 3 -63 3 0 -43z`})]})}),pf=()=>{const e=vt(),n=()=>{e("/")};return c.jsx("div",{className:"h-[200vh] grow overflow-y-scroll",children:c.jsx("div",{className:"absolute w-[640px] sidebar:w-[400px] h-[766px] top-[-178px] left-[25px]",children:c.jsxs("div",{className:"flex flex-col w-full items-start gap-[64px] absolute top-[228px] left-0",children:[c.jsx("div",{className:"flex-col gap-[40px] p-[24px] self-stretch w-full flex-[0_0_auto] rounded-[16px] flex items-start relative",children:c.jsxs("div",{className:"flex items-end gap-[8px] relative self-stretch w-full flex-[0_0_auto]",onClick:n,children:[c.jsx(Gt,{className:"!relative !w-[24px] !h-[24px]"}),c.jsx(ct,{className:"!relative !w-[50px] !h-[50px] bg-white rounded-xl"}),c.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[21.6px] whitespace-nowrap uppercase",children:"Aptos Move"})]})}),c.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full",children:c.jsxs("div",{className:"flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full",children:[c.jsx("a",{href:"https://faucet.movementlabs.xyz/?network=aptos",target:"_blank",className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full",children:c.jsx(tn,{icon:c.jsx(ff,{className:"!relative !w-[24px] !h-[24px]"}),title:"Faucets"})}),c.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full",children:c.jsx(Un,{to:"/account-balance",className:"focus:outline-none",state:{page:"aptos"},children:c.jsx(tn,{icon:c.jsx(cf,{className:"!relative !w-[24px] !h-[24px]"}),title:"Account Balance"})})}),c.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full",children:c.jsx(Un,{to:"/your-address",className:"focus:outline-none",state:{page:"aptos"},children:c.jsx(tn,{icon:c.jsx(df,{className:"!relative !w-[24px] !h-[24px]"}),title:"YourAddress"})})}),c.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full",children:c.jsx(Un,{to:"/deploy",className:"focus:outline-none",state:{page:"aptos"},children:c.jsx(tn,{icon:c.jsx(ct,{className:"!relative !w-[24px] !h-[24px]"}),title:"Deploy"})})})]})})]})})})},dt=({className:e})=>c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:`${e}`,width:"300",height:"300",version:"1.0",viewBox:"0 0 200 200",children:[c.jsx("path",{d:"M83.8 9.5C26.4 20.4-6 78.4 14.4 134c2.5 6.7 7.9 15.9 14 23.6 33.1 42.5 98.2 46 136.7 7.5 38.5-38.5 35-103.6-7.5-136.7-16.8-13.2-32.8-19.1-54.1-19.9-8.1-.3-14.5 0-19.7 1zm29.2 3c36.6 5.5 64.7 31.5 73.7 68.1 2.4 10 2.3 29.7-.1 39.4-8.6 33.6-33 58-66.6 66.6-9.7 2.4-29.4 2.5-39.4.1-26.2-6.5-47.2-22.7-59-45.6-13.3-26-13.7-53.7-1.1-79.8 12.9-26.6 38.1-44.8 68.1-49.2 8.9-1.3 14-1.2 24.4.4z"}),c.jsx("path",{d:"M92.5 18c-2.2 2.4-1.7 6.7 2 18.7 2.6 8.5 4.2 10.2 8.5 8.8 2.2-.7 3.3-3.8 5.7-17.2 2.1-11.7 1.7-12.3-7.7-12.3-5.4 0-7 .4-8.5 2zM71.3 23.3C67.5 25.5 66 27 66 28.6 66 31.1 83.1 49 85.5 49c2.8 0 5.5-2 5.5-4 0-3.6-6.1-21.1-8.1-23.1-2.6-2.6-5.5-2.3-11.6 1.4zM118.1 21.9c-1.1 1.1-3.5 6.8-5.5 12.8l-3.5 10.8 2 1.7c1.2 1 2.9 1.8 3.8 1.8C117 49 135 31 135 28.9c0-2-2.4-4.1-7.7-6.8-5.2-2.6-6.8-2.6-9.2-.2zM50.6 36.9c-3 3-4.7 5.5-4.3 6.4.6 1.6 15.3 11.6 21.1 14.3 3.5 1.7 3.6 1.7 6-.6 2.4-2.1 2.4-2.4 1-5.2-2.7-5.3-10.6-17.3-12.2-18.6-3.2-2.5-6.6-1.4-11.6 3.7zM137.8 34.3c-1.1 1.2-4.4 6.3-7.4 11.2l-5.4 8.9 2.4 2.4c1.7 1.7 3 2.2 4.5 1.7 3.8-1.2 23.1-14.4 23.1-15.8 0-.8-2.2-3.5-5-6.1-5.6-5.2-9-5.9-12.2-2.3zM37.2 47.8c-4.1 4.1-7.4 9.3-6.8 10.7.7 1.9 22.2 12.5 25.2 12.5 2 0 5.4-2.8 5.4-4.5 0-1-6.1-8.5-12.4-15.3-5.3-5.6-8.3-6.5-11.4-3.4zM154 49.2c-4.9 5-14 16.4-14 17.5 0 1.6 3.5 4.3 5.6 4.3 2.9 0 24.3-10.7 25-12.5.6-1.4-2.7-6.6-6.8-10.7-2.7-2.7-6.2-2.2-9.8 1.4zM25.1 66.7C22.5 68.9 20 79.4 21.6 81c1.3 1.3 24.8 3.3 27.8 2.4 2.5-.8 3.6-2.2 3.6-5 0-1.7-2.3-3.3-10.9-7.7-11.7-6.2-13.8-6.6-17-4zM158.8 70.7c-9.9 5.1-10.8 5.9-10.8 8.5 0 4.4 3.1 5.1 17.8 3.9 6.9-.6 13-1.5 13.6-2.1 1.6-1.6-.9-12.1-3.5-14.3-3.2-2.6-5.5-2.1-17.1 4zM69.2 68.7c-.7.3-1.9 1.7-2.7 3.3l-1.4 2.8 36 29.8c19.8 16.5 36.5 30 37.2 30.2 1.9.4 4.6-2 4.9-4.4.2-1.7-7.1-8.3-36-32.3-19.9-16.5-36.3-30.1-36.5-30-.1 0-.8.3-1.5.6zM115.8 79.3c-14.7 10.3-15.7 11.2-14.2 12.8 1.5 1.6 2.4 1.1 15.2-8.3 17.1-12.7 17.7-13.2 16-14.5-1-.8-5.3 1.7-17 10zM122.1 85.2c-7.8 6.1-14 11.6-13.8 12.1.2.6 1 1.5 1.9 2 2.3 1.5 29.3-22 27.7-23.9-.6-.8-1.3-1.4-1.4-1.4-.1 0-6.6 5-14.4 11.2zM21.2 88.6c-1.9 1.3-2.2 2.5-2.2 7.8 0 9.1.5 9.3 14.2 6.1 13-3.1 15.8-4.5 15.8-8 0-2.7-2.2-3.6-14.5-5.5-3.8-.6-7.9-1.3-9.1-1.5-1.1-.3-3 .2-4.2 1.1zM164.5 89.7c-10.4 1.5-12.5 2.4-12.5 5.4 0 2.7 3.3 4.4 14.3 7.4 13.4 3.6 14 3.5 15-4 .7-5.7.6-6.1-1.8-8.3-1.5-1.2-3.1-2.2-3.8-2.1-.7.1-5.7.8-11.2 1.6zM80 104.6c-17 12.3-17.7 13.3-19 25.6-.9 9-2.2 11.2-7.1 11-3.8-.1-10.7 4.2-12 7.6-.5 1.3-1.6 2.3-2.6 2.1-3.9-.3-4.6 0-3.3 1.6 2.5 3.1 4.8 2.7 11.2-1.8 3.5-2.4 6.8-4.2 7.5-4 .6.2 2.7-.3 4.7-1.1 2.7-1.1 4.2-2.7 5.6-5.8 1.1-2.4 2-5.1 2-6 0-.9 1.8-3.8 4-6.3 2.7-3.2 4-5.6 4-7.6 0-3.3 1.4-4.9 12.3-13.6 6.6-5.3 6.8-5.6 5.1-7.4-.9-1-1.8-1.9-1.8-1.9-.1 0-4.8 3.5-10.6 7.6zm-9.2 17.8c.6 2.9-1.5 4.3-3.5 2.4-1.4-1.4-1.4-2-.3-3.3 1.6-1.9 3.4-1.5 3.8.9z"}),c.jsx("path",{d:"M87.9 112.2c-7.6 6-11 9.3-12.5 12.5l-2.1 4.3h2.6c1.9 0 6.1-3 14.9-10.6 6.7-5.8 12-10.9 11.7-11.5-.4-.5-1.4-1.3-2.4-1.9-1.5-.8-3.8.5-12.2 7.2zM146.1 122.7c-2.1 2.6-2.7 4-2 4.9 2.3 2.8-3.2 9.4-6.7 8-1.4-.5-5.4 3.2-7.8 7.2-.8 1.4 1.1 9.3 2.3 9.1.7 0 26.4-30.7 26.9-32 .2-.5-1.9-.9-4.6-.9-4.6 0-5.3.3-8.1 3.7zM146.5 136.8l-13.8 16.6 5.4 4.8c3 2.6 5.7 4.8 6 4.8.5 0 20.5-23.4 26.3-30.8 1.9-2.4 1.9-2.5-.1-4.1-1.2-.9-3.8-3-6-4.8l-3.9-3.2-13.9 16.7zM49.5 124.4c-3.2 1.4-5.5 5.1-5.5 8.9 0 1.5-1.9 3.5-6 6.5-5.8 4.2-6.9 6.2-5.1 9 .6 1 1 1 2.1-.3.7-.8.9-1.5.5-1.5s-.2-.6.5-1.4c.6-.8 1.8-1.2 2.6-.9.8.3 3.4-1.1 5.8-3.1 3.7-3 4.4-4.1 4.3-7-.1-4.9 1.8-6.8 6.7-6.4 3.6.2 4 0 4.7-2.5.7-2.6.6-2.7-3.4-2.7-2.3.1-5.6.7-7.2 1.4zM103.5 138.5c1.9 4.5 1.9 8.5-.1 11.3-3.1 4.5-6.2 2.1-7.1-5.7-.3-2.8-.9-5.1-1.3-5.1s-1.5 1.6-2.5 3.6c-1.6 3.5-1.6 4.9.1 13.1.5 2.5.2 3.3-1.5 4.2-3 1.7-6.5-2-5.7-6 .6-3.3-.4-3.7-2.6-1.2-2.5 2.8-3 5.9-1.8 10.5 2.7 9.9 10.2 15.3 20.6 14.6 5.2-.3 7-.9 10.1-3.5 4.8-3.8 7-7.6 7.8-13.3l.6-4.5-1.6 2.7c-1.6 2.9-5.7 3.9-7.1 1.7-.4-.6-.1-3.5.6-6.5 1.1-4.3 1.1-5.9 0-8.5-1.6-3.7-5.5-8.5-8.1-9.9-1.7-1-1.7-.8-.4 2.5z"})]}),hf=()=>{const e=vt(),n=()=>{e("/")};return c.jsx("div",{className:"h-[200vh] grow overflow-y-scroll",children:c.jsx("div",{className:"absolute w-[640px] sidebar:w-[400px] h-[766px] top-[-178px] left-[25px]",children:c.jsxs("div",{className:"flex flex-col w-full items-start gap-[64px] absolute top-[228px] left-0",children:[c.jsx("div",{className:"flex-col gap-[40px] p-[24px] self-stretch w-full flex-[0_0_auto] rounded-[16px] flex items-start relative",children:c.jsxs("div",{className:"flex items-end gap-[8px] relative self-stretch w-full flex-[0_0_auto]",onClick:n,children:[c.jsx(Gt,{className:"!relative !w-[24px] !h-[24px]"}),c.jsx(dt,{className:"!relative !w-[50px] !h-[50px] bg-white rounded-xl "}),c.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[30px] text-center tracking-[0] leading-[21.6px] whitespace-nowrap uppercase",children:"Solidity"})]})}),c.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full",children:c.jsxs("div",{className:"flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full",children:[c.jsx("a",{href:"https://faucet.movementlabs.xyz/?network=mevm",target:"_blank",className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full",children:c.jsx(tn,{icon:c.jsx(ff,{className:"!relative !w-[24px] !h-[24px]"}),title:"Faucets"})}),c.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full",children:c.jsx(Un,{to:"/account-balance",className:"focus:outline-none",state:{page:"foundry"},children:c.jsx(tn,{icon:c.jsx(cf,{className:"!relative !w-[24px] !h-[24px]"}),title:"Account Balance"})})}),c.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full",children:c.jsx(Un,{to:"/your-address",className:"focus:outline-none",state:{page:"foundry"},children:c.jsx(tn,{icon:c.jsx(df,{className:"!relative !w-[24px] !h-[24px]"}),title:"YourAddress"})})}),c.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full",children:c.jsx(Un,{to:"/deploy",className:"focus:outline-none",state:{page:"foundry"},children:c.jsx(tn,{icon:c.jsx(dt,{className:"!relative !w-[24px] !h-[24px]"}),title:"Deploy"})})})]})})]})})})},lh=({className:e})=>c.jsx("svg",{className:e,viewBox:"0 0 158.96933 125.99213",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("g",{transform:"matrix(1.3333333,0,0,-1.3333333,0,125.99213)",children:c.jsx("g",{children:c.jsx("g",{children:c.jsx("g",{transform:"translate(105.7075,48.4499)",children:c.jsx("path",{d:"m 0,0 c -1.07,0 -2.123,0.164 -3.13,0.485 l -0.127,0.038 c -0.112,0.032 -0.231,0.07 -0.365,0.116 -0.299,0.102 -0.624,0.251 -0.989,0.45 l -0.12,0.065 c -1.332,0.695 -2.518,1.695 -3.43,2.895 -2.786,3.659 -2.778,8.76 0.021,12.407 1.138,1.483 2.653,2.628 4.382,3.311 l 0.171,0.071 c 0.521,0.22 0.901,0.34 1.198,0.378 l 0.327,0.054 c 0.676,0.137 1.369,0.207 2.064,0.207 4.177,0 7.665,1.289 10.087,3.727 2.241,2.256 3.409,5.363 3.379,8.984 V 46.044 H -12.046 V 37.57 c 0,-1.65 -0.005,-3.3 0,-4.95 0.006,-3.336 -1.888,-7.89 -5.359,-9.049 -2.209,-0.738 -4.951,0.364 -7.298,0.094 -1.929,-0.222 -3.799,-0.881 -5.44,-1.918 -3.297,-2.083 -5.525,-5.626 -5.953,-9.502 -0.165,-1.496 -0.072,-2.61 -0.004,-3.425 0.076,-0.908 0.098,-1.181 -0.219,-2.086 -0.625,-1.767 -1.96,-3.409 -3.758,-4.622 -1.798,-1.212 -3.865,-1.879 -5.822,-1.879 l -0.191,0.002 -0.191,-0.002 c -1.957,0 -4.026,0.667 -5.822,1.879 -1.798,1.212 -3.133,2.855 -3.758,4.622 -0.318,0.905 -0.296,1.179 -0.219,2.086 0.067,0.813 0.16,1.928 -0.004,3.425 -0.428,3.876 -2.656,7.418 -5.953,9.502 -1.641,1.037 -3.511,1.696 -5.44,1.918 -2.347,0.27 -5.089,-0.832 -7.299,-0.094 -3.471,1.159 -5.364,5.713 -5.357,9.049 0.004,1.65 0,3.3 0,4.95 v 8.474 h -25.519 V 33.188 c -0.03,-3.621 1.14,-6.728 3.379,-8.984 2.421,-2.439 5.91,-3.727 10.087,-3.727 0.695,0 1.388,-0.07 2.064,-0.207 l 0.327,-0.054 c 0.297,-0.039 0.677,-0.159 1.197,-0.378 l 0.171,-0.071 c 1.73,-0.683 3.245,-1.828 4.382,-3.311 2.8,-3.647 2.808,-8.748 0.022,-12.407 -0.913,-1.2 -2.1,-2.2 -3.431,-2.895 l -0.119,-0.065 c -0.365,-0.199 -0.691,-0.347 -0.99,-0.45 -0.133,-0.046 -0.253,-0.084 -0.364,-0.116 L -89.054,0.485 C -90.061,0.163 -91.114,0 -92.184,0 c -8.089,0 -13.523,-4.97 -13.523,-12.367 0,-5.774 2.635,-8.77 4.845,-10.267 2.697,-1.826 5.95,-2.343 9.064,-2.628 l 0.215,-0.025 c 0.827,-0.107 1.524,-0.277 2.325,-0.564 l 0.386,-0.147 0.066,-0.024 c 2.097,-0.715 3.853,-2.177 4.947,-4.116 0.618,-1.096 1.046,-2.531 1.205,-4.038 0.062,-0.593 0.103,-1.167 0.144,-1.735 0.031,-0.431 0.066,-0.915 0.113,-1.402 V -48.45 h 25.334 v 13.113 c 0,3.37 -1.284,6.639 -3.669,9.022 -0.086,0.086 -0.172,0.169 -0.261,0.253 -0.19,0.177 -0.364,0.328 -0.504,0.447 l -0.087,0.074 c -2.745,2.378 -6.316,2.441 -8.924,2.488 h -0.028 c -0.436,0.008 -0.849,0.016 -1.214,0.034 l -0.392,0.06 -0.838,0.187 -0.79,0.243 -0.852,0.339 c -0.893,0.405 -1.726,0.932 -2.464,1.56 l -0.166,0.143 c -2.361,2.108 -3.532,4.707 -3.58,7.944 0.007,2.313 0.747,4.505 2.141,6.34 1.36,1.788 3.285,3.12 5.423,3.749 2.164,0.636 6.2,0.652 8.146,0.031 3.546,-1.131 6.063,-4.382 6.261,-8.091 0.016,-0.307 0.004,-0.628 -0.009,-1.004 -0.041,-1.088 -0.096,-2.578 0.533,-4.462 1.776,-5.239 6.69,-8.774 12.243,-8.798 5.553,0.025 10.467,3.559 12.243,8.798 0.629,1.882 0.573,3.372 0.533,4.462 -0.013,0.376 -0.025,0.699 -0.009,1.004 0.198,3.709 2.713,6.96 6.261,8.091 1.947,0.621 5.982,0.605 8.146,-0.031 2.137,-0.629 4.064,-1.962 5.422,-3.749 1.395,-1.835 2.135,-4.027 2.142,-6.34 -0.049,-3.237 -1.22,-5.835 -3.58,-7.944 l -0.166,-0.143 c -0.739,-0.627 -1.571,-1.155 -2.464,-1.56 l -0.852,-0.339 -0.79,-0.243 -0.838,-0.187 -0.392,-0.06 c -0.363,-0.018 -0.778,-0.026 -1.214,-0.034 h -0.028 c -2.607,-0.047 -6.179,-0.11 -8.925,-2.488 l -0.086,-0.074 c -0.14,-0.119 -0.315,-0.27 -0.504,-0.447 -0.089,-0.084 -0.175,-0.168 -0.262,-0.253 -2.384,-2.383 -3.668,-5.652 -3.668,-9.022 V -48.45 h 25.334 v 11.137 c 0.047,0.485 0.082,0.971 0.113,1.402 0.041,0.566 0.082,1.141 0.144,1.735 0.159,1.507 0.587,2.942 1.204,4.038 1.093,1.939 2.851,3.401 4.948,4.116 l 0.066,0.024 0.386,0.147 c 0.8,0.286 1.498,0.456 2.324,0.564 l 0.215,0.025 c 3.115,0.285 6.368,0.802 9.065,2.628 2.21,1.497 4.846,4.493 4.846,10.267 C 13.52,-4.97 8.085,0 -0.004,0 Z",style:{fill:"#ffda34",fillOpacity:1,fillRule:"nonzero",stroke:"none"}})})})})})});function ih(){const[e,n]=S.useState(null),t=()=>{n(e==="aptos"?"foundry":"aptos")},r=()=>{switch(e){case"aptos":return c.jsx(pf,{});case"foundry":return c.jsx(hf,{});default:return c.jsxs("div",{className:"flex flex-col items-center justify-center h-full",children:[c.jsx("div",{className:"text-white text-lg sm:text-xl mb-4 text-center",children:"Select a simulator to Start"}),c.jsxs("div",{className:"flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4",children:[c.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1",onClick:()=>n("aptos"),children:c.jsx(Un,{to:"/aptos",className:"focus:outline-none",children:c.jsx(tn,{icon:c.jsx(ct,{className:"!relative !w-[24px] !h-[24px]"}),title:"Aptos"})})}),c.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1",onClick:()=>n("foundry"),children:c.jsx(Un,{to:"/foundry",className:"focus:outline-none",children:c.jsx(tn,{icon:c.jsx(dt,{className:"!relative !w-[24px] !h-[24px]"}),title:"Foundry"})})})]})]})}};return c.jsxs("div",{className:"flex flex-col h-screen bg-[#1e1e1e] text-white",children:[c.jsxs("header",{className:"flex flex-col sm:flex-row items-center p-4 bg-[#252526] border-b border-[#3c3c3c]",children:[c.jsx("div",{className:"flex items-center mb-2 sm:mb-0",children:c.jsxs("a",{href:"https://docs.movementnetwork.xyz/",className:"flex items-center border hover:border-[#646cff] py-2 px-4 rounded transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500",children:[c.jsx(lh,{className:"w-8 h-8 mr-3"}),c.jsx("h1",{className:"text-lg sm:text-xl font-semibold text-white",children:"Movement Simulator"})]})}),e&&c.jsx("button",{className:"mt-2 sm:mt-0 sm:ml-auto px-3 py-1 bg-[#ffffff1a] rounded hover:bg-[#ffffff33] transition-colors",onClick:t})]}),c.jsxs("main",{className:"flex-grow overflow-auto p-4",children:[r(),c.jsx(uf,{context:{currentPage:e}})]})]})}var mf,zu=r1;mf=zu.createRoot,zu.hydrateRoot;const ah=()=>c.jsx("a",{href:"https://weminallabs.featurebase.app/",className:"absolute bg-blue-500 text-white font-bold py-2 px-4 rounded top-[10px] right-[10px]",children:"Feedback"}),sh=()=>c.jsxs("div",{className:"relative bg-[#0e0f0e] flex flex-col justify-between w-full min-h-screen",children:[c.jsx(uf,{}),c.jsx(ah,{})]}),uh=()=>{var f;const[e,n]=S.useState(""),[t,r]=S.useState(""),o=h=>{n(h.target.value),console.log(h.target.value)},l=h=>{const y=h.target.value;(y===""||/^\d+$/.test(y))&&r(y===""?"":Number(y))},i=h=>{/[0-9]/.test(h.key)||h.preventDefault()},s=(f=Xn().state)==null?void 0:f.page,u=vt(),d=()=>{u(`/${s}`)};return c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"h-[300vh] grow overflow-y-scroll",children:c.jsx("div",{className:"absolute w-[640px] sidebar:w-[400px] h-[766px] top-[-178px] left-[25px]",children:c.jsxs("div",{className:"flex flex-col w-full items-start gap-[20px] absolute top-[228px] left-0",children:[c.jsxs("div",{className:"flex items-end gap-[8px] relative self-stretch w-full flex-[0_0_auto]",onClick:d,children:[c.jsx(Gt,{className:"!relative !w-[24px] !h-[24px]"}),s==="aptos"?c.jsx(ct,{className:"!relative !w-[24px] !h-[24px] bg-white rounded-xl"}):c.jsx(dt,{className:"!relative !w-[24px] !h-[24px] bg-white rounded-xl"}),c.jsxs("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[21.6px] whitespace-nowrap uppercase",children:["Account Balance ",s]})]}),c.jsxs("div",{className:"flex flex-col gap-[24px] my-5 w-full ",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"coin",className:" block text-xl text-white font-semibold mb-2 text-gray-700",children:"Asset Type"}),c.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",value:"Coin",disabled:!0})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"coin",className:" block text-xl text-white font-semibold mb-2 text-gray-700",children:"Coin Type"}),c.jsxs("select",{id:"coin",value:e,onChange:o,className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e]",children:[c.jsx("option",{value:"Move",className:"bg-white text-[#8f8f8f]",children:"Move"}),c.jsx("option",{value:"Aptos",className:"bg-white text-[#8f8f8f]",children:"Aptos"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Balance"}),c.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",max:1e10,onChange:l,onKeyPress:i})]})]})]})})}),c.jsx("div",{children:c.jsx("div",{className:" bg-blue-500 text-white font-bold py-2 px-4 rounded  cursor-pointer self-end",onClick:()=>{u("/deploy")},children:"Deploy"})})]})},ch=({file:e,setFile:n,page:t,setFileName:r})=>{const o=l=>{l.target.files&&l.target.files.length>0?(n(l.target.files[0]),r(l.target.files[0].name.split(".").slice(0,-1).join("."))):n(null)};return c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{className:"block text-white text-xl font-semibold mb-2 text-gray-700",htmlFor:"file",children:"Upload Contract File"}),c.jsx("input",{type:"file",id:"file",className:"w-full py-2 px-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200",onChange:o,accept:t==="aptos"?".move":".sol",required:!0}),e&&c.jsxs("p",{className:"mt-2 text-gray-600",children:["Selected file: ",e.name]})," "]})};function le(e,n){n===void 0&&(n={});var t=n.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",t==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}le(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var D=function(){return D=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},D.apply(this,arguments)};function dl(e){return dl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},dl(e)}var dh=/^\s+/,fh=/\s+$/;function z(e,n){if(n=n||{},(e=e||"")instanceof z)return e;if(!(this instanceof z))return new z(e,n);var t=function(r){var o={r:0,g:0,b:0},l=1,i=null,a=null,s=null,u=!1,d=!1;typeof r=="string"&&(r=function(x){x=x.replace(dh,"").replace(fh,"").toLowerCase();var g,w=!1;if(ya[x])x=ya[x],w=!0;else if(x=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(g=He.rgb.exec(x))?{r:g[1],g:g[2],b:g[3]}:(g=He.rgba.exec(x))?{r:g[1],g:g[2],b:g[3],a:g[4]}:(g=He.hsl.exec(x))?{h:g[1],s:g[2],l:g[3]}:(g=He.hsla.exec(x))?{h:g[1],s:g[2],l:g[3],a:g[4]}:(g=He.hsv.exec(x))?{h:g[1],s:g[2],v:g[3]}:(g=He.hsva.exec(x))?{h:g[1],s:g[2],v:g[3],a:g[4]}:(g=He.hex8.exec(x))?{r:Ne(g[1]),g:Ne(g[2]),b:Ne(g[3]),a:Lu(g[4]),format:w?"name":"hex8"}:(g=He.hex6.exec(x))?{r:Ne(g[1]),g:Ne(g[2]),b:Ne(g[3]),format:w?"name":"hex"}:(g=He.hex4.exec(x))?{r:Ne(g[1]+""+g[1]),g:Ne(g[2]+""+g[2]),b:Ne(g[3]+""+g[3]),a:Lu(g[4]+""+g[4]),format:w?"name":"hex8"}:(g=He.hex3.exec(x))?{r:Ne(g[1]+""+g[1]),g:Ne(g[2]+""+g[2]),b:Ne(g[3]+""+g[3]),format:w?"name":"hex"}:!1}(r)),dl(r)=="object"&&(an(r.r)&&an(r.g)&&an(r.b)?(f=r.r,h=r.g,y=r.b,o={r:255*Q(f,255),g:255*Q(h,255),b:255*Q(y,255)},u=!0,d=String(r.r).substr(-1)==="%"?"prgb":"rgb"):an(r.h)&&an(r.s)&&an(r.v)?(i=hr(r.s),a=hr(r.v),o=function(x,g,w){x=6*Q(x,360),g=Q(g,100),w=Q(w,100);var m=Math.floor(x),p=x-m,v=w*(1-g),b=w*(1-p*g),P=w*(1-(1-p)*g),_=m%6,C=[w,b,v,v,P,w][_],N=[P,w,w,b,v,v][_],I=[v,v,P,w,w,b][_];return{r:255*C,g:255*N,b:255*I}}(r.h,i,a),u=!0,d="hsv"):an(r.h)&&an(r.s)&&an(r.l)&&(i=hr(r.s),s=hr(r.l),o=function(x,g,w){var m,p,v;function b(C,N,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?C+6*(N-C)*I:I<.5?N:I<2/3?C+(N-C)*(2/3-I)*6:C}if(x=Q(x,360),g=Q(g,100),w=Q(w,100),g===0)m=p=v=w;else{var P=w<.5?w*(1+g):w+g-w*g,_=2*w-P;m=b(_,P,x+1/3),p=b(_,P,x),v=b(_,P,x-1/3)}return{r:255*m,g:255*p,b:255*v}}(r.h,i,s),u=!0,d="hsl"),r.hasOwnProperty("a")&&(l=r.a));var f,h,y;return l=vf(l),{ok:u,format:r.format||d,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:l}}(e);this._originalInput=e,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=n.format||t.format,this._gradientType=n.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}function ju(e,n,t){e=Q(e,255),n=Q(n,255),t=Q(t,255);var r,o,l=Math.max(e,n,t),i=Math.min(e,n,t),a=(l+i)/2;if(l==i)r=o=0;else{var s=l-i;switch(o=a>.5?s/(2-l-i):s/(l+i),l){case e:r=(n-t)/s+(n<t?6:0);break;case n:r=(t-e)/s+2;break;case t:r=(e-n)/s+4}r/=6}return{h:r,s:o,l:a}}function Mu(e,n,t){e=Q(e,255),n=Q(n,255),t=Q(t,255);var r,o,l=Math.max(e,n,t),i=Math.min(e,n,t),a=l,s=l-i;if(o=l===0?0:s/l,l==i)r=0;else{switch(l){case e:r=(n-t)/s+(n<t?6:0);break;case n:r=(t-e)/s+2;break;case t:r=(e-n)/s+4}r/=6}return{h:r,s:o,v:a}}function Tu(e,n,t,r){var o=[Xe(Math.round(e).toString(16)),Xe(Math.round(n).toString(16)),Xe(Math.round(t).toString(16))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function Ru(e,n,t,r){return[Xe(gf(r)),Xe(Math.round(e).toString(16)),Xe(Math.round(n).toString(16)),Xe(Math.round(t).toString(16))].join("")}function ph(e,n){n=n===0?0:n||10;var t=z(e).toHsl();return t.s-=n/100,t.s=Nl(t.s),z(t)}function hh(e,n){n=n===0?0:n||10;var t=z(e).toHsl();return t.s+=n/100,t.s=Nl(t.s),z(t)}function mh(e){return z(e).desaturate(100)}function vh(e,n){n=n===0?0:n||10;var t=z(e).toHsl();return t.l+=n/100,t.l=Nl(t.l),z(t)}function gh(e,n){n=n===0?0:n||10;var t=z(e).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(-n/100*255))),t.g=Math.max(0,Math.min(255,t.g-Math.round(-n/100*255))),t.b=Math.max(0,Math.min(255,t.b-Math.round(-n/100*255))),z(t)}function yh(e,n){n=n===0?0:n||10;var t=z(e).toHsl();return t.l-=n/100,t.l=Nl(t.l),z(t)}function xh(e,n){var t=z(e).toHsl(),r=(t.h+n)%360;return t.h=r<0?360+r:r,z(t)}function bh(e){var n=z(e).toHsl();return n.h=(n.h+180)%360,z(n)}function Du(e,n){if(isNaN(n)||n<=0)throw new Error("Argument to polyad must be a positive number");for(var t=z(e).toHsl(),r=[z(e)],o=360/n,l=1;l<n;l++)r.push(z({h:(t.h+l*o)%360,s:t.s,l:t.l}));return r}function wh(e){var n=z(e).toHsl(),t=n.h;return[z(e),z({h:(t+72)%360,s:n.s,l:n.l}),z({h:(t+216)%360,s:n.s,l:n.l})]}function kh(e,n,t){n=n||6,t=t||30;var r=z(e).toHsl(),o=360/t,l=[z(e)];for(r.h=(r.h-(o*n>>1)+720)%360;--n;)r.h=(r.h+o)%360,l.push(z(r));return l}function Sh(e,n){n=n||6;for(var t=z(e).toHsv(),r=t.h,o=t.s,l=t.v,i=[],a=1/n;n--;)i.push(z({h:r,s:o,v:l})),l=(l+a)%1;return i}z.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,n,t,r=this.toRgb();return e=r.r/255,n=r.g/255,t=r.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))},setAlpha:function(e){return this._a=vf(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Mu(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Mu(this._r,this._g,this._b),n=Math.round(360*e.h),t=Math.round(100*e.s),r=Math.round(100*e.v);return this._a==1?"hsv("+n+", "+t+"%, "+r+"%)":"hsva("+n+", "+t+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=ju(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=ju(this._r,this._g,this._b),n=Math.round(360*e.h),t=Math.round(100*e.s),r=Math.round(100*e.l);return this._a==1?"hsl("+n+", "+t+"%, "+r+"%)":"hsla("+n+", "+t+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return Tu(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(n,t,r,o,l){var i=[Xe(Math.round(n).toString(16)),Xe(Math.round(t).toString(16)),Xe(Math.round(r).toString(16)),Xe(gf(o))];return l&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Q(this._r,255))+"%",g:Math.round(100*Q(this._g,255))+"%",b:Math.round(100*Q(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Q(this._r,255))+"%, "+Math.round(100*Q(this._g,255))+"%, "+Math.round(100*Q(this._b,255))+"%)":"rgba("+Math.round(100*Q(this._r,255))+"%, "+Math.round(100*Q(this._g,255))+"%, "+Math.round(100*Q(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Ph[Tu(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var n="#"+Ru(this._r,this._g,this._b,this._a),t=n,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=z(e);t="#"+Ru(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+n+",endColorstr="+t+")"},toString:function(e){var n=!!e;e=e||this._format;var t=!1,r=this._a<1&&this._a>=0;return n||!r||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(t=this.toRgbString()),e==="prgb"&&(t=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(t=this.toHexString()),e==="hex3"&&(t=this.toHexString(!0)),e==="hex4"&&(t=this.toHex8String(!0)),e==="hex8"&&(t=this.toHex8String()),e==="name"&&(t=this.toName()),e==="hsl"&&(t=this.toHslString()),e==="hsv"&&(t=this.toHsvString()),t||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return z(this.toString())},_applyModification:function(e,n){var t=e.apply(null,[this].concat([].slice.call(n)));return this._r=t._r,this._g=t._g,this._b=t._b,this.setAlpha(t._a),this},lighten:function(){return this._applyModification(vh,arguments)},brighten:function(){return this._applyModification(gh,arguments)},darken:function(){return this._applyModification(yh,arguments)},desaturate:function(){return this._applyModification(ph,arguments)},saturate:function(){return this._applyModification(hh,arguments)},greyscale:function(){return this._applyModification(mh,arguments)},spin:function(){return this._applyModification(xh,arguments)},_applyCombination:function(e,n){return e.apply(null,[this].concat([].slice.call(n)))},analogous:function(){return this._applyCombination(kh,arguments)},complement:function(){return this._applyCombination(bh,arguments)},monochromatic:function(){return this._applyCombination(Sh,arguments)},splitcomplement:function(){return this._applyCombination(wh,arguments)},triad:function(){return this._applyCombination(Du,[3])},tetrad:function(){return this._applyCombination(Du,[4])}},z.fromRatio=function(e,n){if(dl(e)=="object"){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=r==="a"?e[r]:hr(e[r]));e=t}return z(e,n)},z.equals=function(e,n){return!(!e||!n)&&z(e).toRgbString()==z(n).toRgbString()},z.random=function(){return z.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},z.mix=function(e,n,t){t=t===0?0:t||50;var r=z(e).toRgb(),o=z(n).toRgb(),l=t/100;return z({r:(o.r-r.r)*l+r.r,g:(o.g-r.g)*l+r.g,b:(o.b-r.b)*l+r.b,a:(o.a-r.a)*l+r.a})},z.readability=function(e,n){var t=z(e),r=z(n);return(Math.max(t.getLuminance(),r.getLuminance())+.05)/(Math.min(t.getLuminance(),r.getLuminance())+.05)},z.isReadable=function(e,n,t){var r,o,l=z.readability(e,n);switch(o=!1,(r=function(i){var a,s;return a=((i=i||{level:"AA",size:"small"}).level||"AA").toUpperCase(),s=(i.size||"small").toLowerCase(),a!=="AA"&&a!=="AAA"&&(a="AA"),s!=="small"&&s!=="large"&&(s="small"),{level:a,size:s}}(t)).level+r.size){case"AAsmall":case"AAAlarge":o=l>=4.5;break;case"AAlarge":o=l>=3;break;case"AAAsmall":o=l>=7}return o},z.mostReadable=function(e,n,t){var r,o,l,i,a=null,s=0;o=(t=t||{}).includeFallbackColors,l=t.level,i=t.size;for(var u=0;u<n.length;u++)(r=z.readability(e,n[u]))>s&&(s=r,a=z(n[u]));return z.isReadable(e,a,{level:l,size:i})||!o?a:(t.includeFallbackColors=!1,z.mostReadable(e,["#fff","#000"],t))};var ya=z.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Ph=z.hexNames=function(e){var n={};for(var t in e)e.hasOwnProperty(t)&&(n[e[t]]=t);return n}(ya);function vf(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Q(e,n){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(e)&&(e="100%");var t=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(e);return e=Math.min(n,Math.max(0,parseFloat(e))),t&&(e=parseInt(e*n,10)/100),Math.abs(e-n)<1e-6?1:e%n/parseFloat(n)}function Nl(e){return Math.min(1,Math.max(0,e))}function Ne(e){return parseInt(e,16)}function Xe(e){return e.length==1?"0"+e:""+e}function hr(e){return e<=1&&(e=100*e+"%"),e}function gf(e){return Math.round(255*parseFloat(e)).toString(16)}function Lu(e){return Ne(e)/255}var kn,xo,bo,He=(xo="[\\s|\\(]+("+(kn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+kn+")[,|\\s]+("+kn+")\\s*\\)?",bo="[\\s|\\(]+("+kn+")[,|\\s]+("+kn+")[,|\\s]+("+kn+")[,|\\s]+("+kn+")\\s*\\)?",{CSS_UNIT:new RegExp(kn),rgb:new RegExp("rgb"+xo),rgba:new RegExp("rgba"+bo),hsl:new RegExp("hsl"+xo),hsla:new RegExp("hsla"+bo),hsv:new RegExp("hsv"+xo),hsva:new RegExp("hsva"+bo),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function an(e){return!!He.CSS_UNIT.exec(e)}var Kr=function(e,n){var t=(typeof e=="string"?parseInt(e):e)||0;if(t>=-5&&t<=5){var r=t,o=parseFloat(n),l=o+r*(o/5)*-1;return(l==0||l<=Number.EPSILON)&&(l=.1),{animationPeriod:l+"s"}}return{animationPeriod:n}},Xr=function(e,n){var t=e||{},r="";switch(n){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var o={};if(t.fontSize){var l=t.fontSize;o=function(i,a){var s={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&a.indexOf(u)<0&&(s[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function"){var d=0;for(u=Object.getOwnPropertySymbols(i);d<u.length;d++)a.indexOf(u[d])<0&&Object.prototype.propertyIsEnumerable.call(i,u[d])&&(s[u[d]]=i[u[d]])}return s}(t,["fontSize"]),r=l}return{fontSize:r,styles:o}},_h={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Yr=function(e){var n=e.className,t=e.text,r=e.textColor,o=e.staticText,l=e.style;return t?$.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(n||"").trim(),style:D(D(D({},o&&_h),r&&{color:r,mixBlendMode:"unset"}),l&&l)},typeof t=="string"&&t.length?t:"loading"):null},pn="rgb(50, 205, 50)";function Gr(e,n){n===void 0&&(n=0);var t=[];return function r(o,l){return l===void 0&&(l=0),t.push.apply(t,o),t.length<l&&r(t,l),t.slice(0,l)}(e,n)}le(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);z(pn).toRgb();Array.from({length:4},function(e,n){return"--atom-phase".concat(n+1,"-rgb")});le(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--commet-phase".concat(n+1,"-color")});le(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var wo=Array.from({length:4},function(e,n){return"--OP-annulus-phase".concat(n+1,"-color")}),Ch=function(e){var n,t=Xr(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,l=e==null?void 0:e.easing,i=Kr(e==null?void 0:e.speedPlus,"1.5s").animationPeriod,a=function(u){var d={},f=wo.length;if(u instanceof Array){for(var h=Gr(u,f),y=0;y<h.length&&!(y>=4);y++)d[wo[y]]=h[y];return d}try{if(typeof u!="string")throw new Error("Color String expected");for(var x=0;x<f;x++)d[wo[x]]=u}catch(g){for(g instanceof Error?console.warn("[".concat(g.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),x=0;x<f;x++)d[wo[x]]=pn}return d}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),s=e!=null&&e.dense?4.3:2.9;return $.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:D(D(D(D(D({},o&&{fontSize:o}),i&&{"--rli-animation-duration":i}),l&&{"--rli-animation-function":l}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},$.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},$.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},$.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:s,strokeMiterlimit:"10"})),$.createElement(Yr,{className:"OP-annulus-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};function gi(e){return e&&e.Math===Math&&e}le(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var wt=gi(typeof window=="object"&&window)||gi(typeof self=="object"&&self)||gi(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function yf(){var e,n;return!((e=wt==null?void 0:wt.crypto)===null||e===void 0)&&e.randomUUID?wt.crypto.randomUUID():!((n=wt==null?void 0:wt.btoa)===null||n===void 0)&&n.name?wt.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var ko=Array.from({length:4},function(e,n){return"--OP-dotted-phase".concat(n+1,"-color")}),Oh=function(e){var n,t=Xr(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,l=e==null?void 0:e.easing,i=Kr(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,a=function(u){var d={},f=ko.length;if(u instanceof Array){for(var h=Gr(u,f),y=0;y<h.length&&!(y>=4);y++)d[ko[y]]=h[y];return d}try{if(typeof u!="string")throw new Error("Color String expected");for(var x=0;x<f;x++)d[ko[x]]=u}catch(g){for(g instanceof Error?console.warn("[".concat(g.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),x=0;x<f;x++)d[ko[x]]=pn}return d}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),s=e!=null&&e.dense?16:12;return $.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:D(D(D(D(D({},o&&{fontSize:o}),i&&{"--rli-animation-duration":i}),l&&{"--rli-animation-function":l}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},$.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:s}).map(function(u,d){var f=function(x,g,w){if(g===16){var m=360*x/g,p=g-x,v=Number.parseFloat(w)/g*p*-1;return{transform:"rotate(".concat(m,"deg)"),animationDelay:"".concat(v,"s")}}return{transform:"",animationDelay:""}}(d,s,i),h=f.animationDelay,y=f.transform;return $.createElement("span",{key:yf(),className:"rli-d-i-b dot-shape-holder",style:y?{transform:y}:void 0},$.createElement("span",{className:"dot",style:h?{animationDelay:h}:void 0}))}),$.createElement(Yr,{className:"OP-dotted-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};le(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var So=Array.from({length:4},function(e,n){return"--OP-spokes-phase".concat(n+1,"-color")}),Eh=function(e){var n,t=Xr(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,l=e==null?void 0:e.easing,i=Kr(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,a=function(u){var d={},f=So.length;if(u instanceof Array){for(var h=Gr(u,f),y=0;y<h.length&&!(y>=4);y++)d[So[y]]=h[y];return d}try{if(typeof u!="string")throw new Error("Color String expected");for(var x=0;x<f;x++)d[So[x]]=u}catch(g){for(g instanceof Error?console.warn("[".concat(g.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),x=0;x<f;x++)d[So[x]]=pn}return d}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),s=e!=null&&e.dense?16:12;return $.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:D(D(D(D(D({},o&&{fontSize:o}),i&&{"--rli-animation-duration":i}),l&&{"--rli-animation-function":l}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},$.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:s},function(u,d){return $.createElement("span",{key:yf(),className:"rli-d-i-b spoke",style:Nh(d,s,i)})})),$.createElement(Yr,{text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};function Nh(e,n,t){if(n===16){var r=n-e,o=Number.parseFloat(t)/n;return{transform:"rotate(".concat(360*e/n,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((r-1)*o*-1,"s")}}}le(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var Po=Array.from({length:4},function(e,n){return"--OP-annulus-dual-sectors-phase".concat(n+1,"-color")}),zh=function(e){var n,t=Xr(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,l=e==null?void 0:e.easing,i=Kr(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,a=function(u){var d={},f=Po.length;if(u instanceof Array){for(var h=Gr(u,f),y=0;y<h.length&&!(y>=4);y++)d[Po[y]]=h[y];return d}try{if(typeof u!="string")throw new Error("Color String expected");for(var x=0;x<f;x++)d[Po[x]]=u}catch(g){for(g instanceof Error?console.warn("[".concat(g.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),x=0;x<f;x++)d[Po[x]]=pn}return d}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),s=e.dense?"0.45em":"";return $.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:D(D(D(D(D({},o&&{fontSize:o}),i&&{"--rli-animation-duration":i}),l&&{"--rli-animation-function":l}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},$.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},$.createElement("span",{className:"rli-d-i-b annulus-sectors",style:D({},s&&{borderWidth:s})}),$.createElement(Yr,{className:"OP-annulus-dual-sectors-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};le(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var ur=Array.from({length:4},function(e,n){return["--OP-annulus-track-phase".concat(n+1,"-color"),"--OP-annulus-sector-phase".concat(n+1,"-color")]}),_o=function(e){return e===void 0&&(e=1),.25*e},jh=function(e){var n,t=Xr(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,l=e==null?void 0:e.easing,i=Kr(e==null?void 0:e.speedPlus,"1s").animationPeriod,a=function(u){var d={},f=ur.length;if(u instanceof Array){for(var h=Gr(u,f),y=0;y<h.length&&!(y>=4);y++){var x=ur[y];try{if(!(m=z(h[y])).isValid())throw new Error("Invalid Color: ".concat(m.getOriginalInput()));var g=m.setAlpha(_o(m.getAlpha())).toRgbString(),w=h[y];d[x[0]]=g,d[x[1]]=w}catch{w=pn,g=(m=z(pn)).setAlpha(_o(m.getAlpha())).toRgbString(),d[x[0]]=g,d[x[1]]=w}}return d}try{var m=z(u);if(typeof u!="string")throw new Error("Color String expected");if(!m.isValid())throw new Error("Invalid Color: ".concat(m.getOriginalInput()));w=u,g=m.setAlpha(_o(m.getAlpha())).toRgbString();for(var p=0;p<f;p++)d[(x=ur[p])[0]]=g,d[x[1]]=w}catch(v){for(v instanceof Error?console.warn("[".concat(v.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),w=pn,g=(m=z(pn)).setAlpha(_o(m.getAlpha())).toRgbString(),p=0;p<ur.length;p++)d[(x=ur[p])[0]]=g,d[x[1]]=w}return d}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),s=e.dense?"0.45em":"";return $.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:D(D(D(D(D({},o&&{fontSize:o}),i&&{"--rli-animation-duration":i}),l&&{"--rli-animation-function":l}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},$.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},$.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:D({},s&&{borderWidth:s})}),$.createElement(Yr,{className:"OP-annulus-sector-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))},Mh=function(e){var n=Object(e).variant,t=n===void 0?"disc":n;return t==="dotted"?$.createElement(Oh,D({},e)):t==="spokes"?$.createElement(Eh,D({},e)):t==="disc"?$.createElement(Ch,D({},e)):t==="split-disc"?$.createElement(zh,D({},e)):t==="track-disc"?$.createElement(jh,D({},e)):null};le(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--four-square-phase".concat(n+1,"-color")});le(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--mosaic-phase".concat(n+1,"-color")});le(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--riple-phase".concat(n+1,"-color")});le(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--TD-pulsate-phase".concat(n+1,"-color")});le(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--TD-brick-stack-phase".concat(n+1,"-color")});le(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--TD-bob-phase".concat(n+1,"-color")});le(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--TD-bounce-phase".concat(n+1,"-color")});le(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--shape-phase".concat(n+1,"-color")});le(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--trophySpin-phase".concat(n+1,"-color")});le(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--slab-phase".concat(n+1,"-color")});le(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--life-line-phase".concat(n+1,"-color")});var kt={},xf={},zl={},bf={},jl={},Ml={};Object.defineProperty(Ml,"__esModule",{value:!0});Ml.default=Rh;let Co;const Th=new Uint8Array(16);function Rh(){if(!Co&&(Co=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Co))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Co(Th)}var Yn={},gt={},Tl={};Object.defineProperty(Tl,"__esModule",{value:!0});Tl.default=void 0;var Dh=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;Tl.default=Dh;Object.defineProperty(gt,"__esModule",{value:!0});gt.default=void 0;var Lh=Ah(Tl);function Ah(e){return e&&e.__esModule?e:{default:e}}function Ih(e){return typeof e=="string"&&Lh.default.test(e)}var Fh=Ih;gt.default=Fh;Object.defineProperty(Yn,"__esModule",{value:!0});Yn.default=void 0;Yn.unsafeStringify=wf;var $h=Uh(gt);function Uh(e){return e&&e.__esModule?e:{default:e}}const se=[];for(let e=0;e<256;++e)se.push((e+256).toString(16).slice(1));function wf(e,n=0){return se[e[n+0]]+se[e[n+1]]+se[e[n+2]]+se[e[n+3]]+"-"+se[e[n+4]]+se[e[n+5]]+"-"+se[e[n+6]]+se[e[n+7]]+"-"+se[e[n+8]]+se[e[n+9]]+"-"+se[e[n+10]]+se[e[n+11]]+se[e[n+12]]+se[e[n+13]]+se[e[n+14]]+se[e[n+15]]}function qh(e,n=0){const t=wf(e,n);if(!(0,$h.default)(t))throw TypeError("Stringified UUID is invalid");return t}var Bh=qh;Yn.default=Bh;Object.defineProperty(jl,"__esModule",{value:!0});jl.default=void 0;var Hh=Wh(Ml),Vh=Yn;function Wh(e){return e&&e.__esModule?e:{default:e}}let Au,yi,xi=0,bi=0;function Qh(e,n,t){let r=n&&t||0;const o=n||new Array(16);e=e||{};let l=e.node||Au,i=e.clockseq!==void 0?e.clockseq:yi;if(l==null||i==null){const h=e.random||(e.rng||Hh.default)();l==null&&(l=Au=[h[0]|1,h[1],h[2],h[3],h[4],h[5]]),i==null&&(i=yi=(h[6]<<8|h[7])&16383)}let a=e.msecs!==void 0?e.msecs:Date.now(),s=e.nsecs!==void 0?e.nsecs:bi+1;const u=a-xi+(s-bi)/1e4;if(u<0&&e.clockseq===void 0&&(i=i+1&16383),(u<0||a>xi)&&e.nsecs===void 0&&(s=0),s>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");xi=a,bi=s,yi=i,a+=122192928e5;const d=((a&268435455)*1e4+s)%4294967296;o[r++]=d>>>24&255,o[r++]=d>>>16&255,o[r++]=d>>>8&255,o[r++]=d&255;const f=a/4294967296*1e4&268435455;o[r++]=f>>>8&255,o[r++]=f&255,o[r++]=f>>>24&15|16,o[r++]=f>>>16&255,o[r++]=i>>>8|128,o[r++]=i&255;for(let h=0;h<6;++h)o[r+h]=l[h];return n||(0,Vh.unsafeStringify)(o)}var Kh=Qh;jl.default=Kh;var Rl={},Hn={},Zr={};Object.defineProperty(Zr,"__esModule",{value:!0});Zr.default=void 0;var Xh=Yh(gt);function Yh(e){return e&&e.__esModule?e:{default:e}}function Gh(e){if(!(0,Xh.default)(e))throw TypeError("Invalid UUID");let n;const t=new Uint8Array(16);return t[0]=(n=parseInt(e.slice(0,8),16))>>>24,t[1]=n>>>16&255,t[2]=n>>>8&255,t[3]=n&255,t[4]=(n=parseInt(e.slice(9,13),16))>>>8,t[5]=n&255,t[6]=(n=parseInt(e.slice(14,18),16))>>>8,t[7]=n&255,t[8]=(n=parseInt(e.slice(19,23),16))>>>8,t[9]=n&255,t[10]=(n=parseInt(e.slice(24,36),16))/1099511627776&255,t[11]=n/4294967296&255,t[12]=n>>>24&255,t[13]=n>>>16&255,t[14]=n>>>8&255,t[15]=n&255,t}var Zh=Gh;Zr.default=Zh;Object.defineProperty(Hn,"__esModule",{value:!0});Hn.URL=Hn.DNS=void 0;Hn.default=rm;var Jh=Yn,em=nm(Zr);function nm(e){return e&&e.__esModule?e:{default:e}}function tm(e){e=unescape(encodeURIComponent(e));const n=[];for(let t=0;t<e.length;++t)n.push(e.charCodeAt(t));return n}const kf="6ba7b810-9dad-11d1-80b4-00c04fd430c8";Hn.DNS=kf;const Sf="6ba7b811-9dad-11d1-80b4-00c04fd430c8";Hn.URL=Sf;function rm(e,n,t){function r(o,l,i,a){var s;if(typeof o=="string"&&(o=tm(o)),typeof l=="string"&&(l=(0,em.default)(l)),((s=l)===null||s===void 0?void 0:s.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let u=new Uint8Array(16+o.length);if(u.set(l),u.set(o,l.length),u=t(u),u[6]=u[6]&15|n,u[8]=u[8]&63|128,i){a=a||0;for(let d=0;d<16;++d)i[a+d]=u[d];return i}return(0,Jh.unsafeStringify)(u)}try{r.name=e}catch{}return r.DNS=kf,r.URL=Sf,r}var Dl={};Object.defineProperty(Dl,"__esModule",{value:!0});Dl.default=void 0;function om(e){if(typeof e=="string"){const n=unescape(encodeURIComponent(e));e=new Uint8Array(n.length);for(let t=0;t<n.length;++t)e[t]=n.charCodeAt(t)}return lm(im(am(e),e.length*8))}function lm(e){const n=[],t=e.length*32,r="0123456789abcdef";for(let o=0;o<t;o+=8){const l=e[o>>5]>>>o%32&255,i=parseInt(r.charAt(l>>>4&15)+r.charAt(l&15),16);n.push(i)}return n}function Pf(e){return(e+64>>>9<<4)+14+1}function im(e,n){e[n>>5]|=128<<n%32,e[Pf(n)-1]=n;let t=1732584193,r=-271733879,o=-1732584194,l=271733878;for(let i=0;i<e.length;i+=16){const a=t,s=r,u=o,d=l;t=he(t,r,o,l,e[i],7,-680876936),l=he(l,t,r,o,e[i+1],12,-389564586),o=he(o,l,t,r,e[i+2],17,606105819),r=he(r,o,l,t,e[i+3],22,-1044525330),t=he(t,r,o,l,e[i+4],7,-176418897),l=he(l,t,r,o,e[i+5],12,1200080426),o=he(o,l,t,r,e[i+6],17,-1473231341),r=he(r,o,l,t,e[i+7],22,-45705983),t=he(t,r,o,l,e[i+8],7,1770035416),l=he(l,t,r,o,e[i+9],12,-1958414417),o=he(o,l,t,r,e[i+10],17,-42063),r=he(r,o,l,t,e[i+11],22,-1990404162),t=he(t,r,o,l,e[i+12],7,1804603682),l=he(l,t,r,o,e[i+13],12,-40341101),o=he(o,l,t,r,e[i+14],17,-1502002290),r=he(r,o,l,t,e[i+15],22,1236535329),t=me(t,r,o,l,e[i+1],5,-165796510),l=me(l,t,r,o,e[i+6],9,-1069501632),o=me(o,l,t,r,e[i+11],14,643717713),r=me(r,o,l,t,e[i],20,-373897302),t=me(t,r,o,l,e[i+5],5,-701558691),l=me(l,t,r,o,e[i+10],9,38016083),o=me(o,l,t,r,e[i+15],14,-660478335),r=me(r,o,l,t,e[i+4],20,-405537848),t=me(t,r,o,l,e[i+9],5,568446438),l=me(l,t,r,o,e[i+14],9,-1019803690),o=me(o,l,t,r,e[i+3],14,-187363961),r=me(r,o,l,t,e[i+8],20,1163531501),t=me(t,r,o,l,e[i+13],5,-1444681467),l=me(l,t,r,o,e[i+2],9,-51403784),o=me(o,l,t,r,e[i+7],14,1735328473),r=me(r,o,l,t,e[i+12],20,-1926607734),t=ve(t,r,o,l,e[i+5],4,-378558),l=ve(l,t,r,o,e[i+8],11,-2022574463),o=ve(o,l,t,r,e[i+11],16,1839030562),r=ve(r,o,l,t,e[i+14],23,-35309556),t=ve(t,r,o,l,e[i+1],4,-1530992060),l=ve(l,t,r,o,e[i+4],11,1272893353),o=ve(o,l,t,r,e[i+7],16,-155497632),r=ve(r,o,l,t,e[i+10],23,-1094730640),t=ve(t,r,o,l,e[i+13],4,681279174),l=ve(l,t,r,o,e[i],11,-358537222),o=ve(o,l,t,r,e[i+3],16,-722521979),r=ve(r,o,l,t,e[i+6],23,76029189),t=ve(t,r,o,l,e[i+9],4,-640364487),l=ve(l,t,r,o,e[i+12],11,-421815835),o=ve(o,l,t,r,e[i+15],16,530742520),r=ve(r,o,l,t,e[i+2],23,-995338651),t=ge(t,r,o,l,e[i],6,-198630844),l=ge(l,t,r,o,e[i+7],10,1126891415),o=ge(o,l,t,r,e[i+14],15,-1416354905),r=ge(r,o,l,t,e[i+5],21,-57434055),t=ge(t,r,o,l,e[i+12],6,1700485571),l=ge(l,t,r,o,e[i+3],10,-1894986606),o=ge(o,l,t,r,e[i+10],15,-1051523),r=ge(r,o,l,t,e[i+1],21,-2054922799),t=ge(t,r,o,l,e[i+8],6,1873313359),l=ge(l,t,r,o,e[i+15],10,-30611744),o=ge(o,l,t,r,e[i+6],15,-1560198380),r=ge(r,o,l,t,e[i+13],21,1309151649),t=ge(t,r,o,l,e[i+4],6,-145523070),l=ge(l,t,r,o,e[i+11],10,-1120210379),o=ge(o,l,t,r,e[i+2],15,718787259),r=ge(r,o,l,t,e[i+9],21,-343485551),t=jn(t,a),r=jn(r,s),o=jn(o,u),l=jn(l,d)}return[t,r,o,l]}function am(e){if(e.length===0)return[];const n=e.length*8,t=new Uint32Array(Pf(n));for(let r=0;r<n;r+=8)t[r>>5]|=(e[r/8]&255)<<r%32;return t}function jn(e,n){const t=(e&65535)+(n&65535);return(e>>16)+(n>>16)+(t>>16)<<16|t&65535}function sm(e,n){return e<<n|e>>>32-n}function Ll(e,n,t,r,o,l){return jn(sm(jn(jn(n,e),jn(r,l)),o),t)}function he(e,n,t,r,o,l,i){return Ll(n&t|~n&r,e,n,o,l,i)}function me(e,n,t,r,o,l,i){return Ll(n&r|t&~r,e,n,o,l,i)}function ve(e,n,t,r,o,l,i){return Ll(n^t^r,e,n,o,l,i)}function ge(e,n,t,r,o,l,i){return Ll(t^(n|~r),e,n,o,l,i)}var um=om;Dl.default=um;Object.defineProperty(Rl,"__esModule",{value:!0});Rl.default=void 0;var cm=_f(Hn),dm=_f(Dl);function _f(e){return e&&e.__esModule?e:{default:e}}const fm=(0,cm.default)("v3",48,dm.default);var pm=fm;Rl.default=pm;var Al={},Il={};Object.defineProperty(Il,"__esModule",{value:!0});Il.default=void 0;const hm=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var mm={randomUUID:hm};Il.default=mm;Object.defineProperty(Al,"__esModule",{value:!0});Al.default=void 0;var Iu=Cf(Il),vm=Cf(Ml),gm=Yn;function Cf(e){return e&&e.__esModule?e:{default:e}}function ym(e,n,t){if(Iu.default.randomUUID&&!n&&!e)return Iu.default.randomUUID();e=e||{};const r=e.random||(e.rng||vm.default)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,n){t=t||0;for(let o=0;o<16;++o)n[t+o]=r[o];return n}return(0,gm.unsafeStringify)(r)}var xm=ym;Al.default=xm;var Fl={},$l={};Object.defineProperty($l,"__esModule",{value:!0});$l.default=void 0;function bm(e,n,t,r){switch(e){case 0:return n&t^~n&r;case 1:return n^t^r;case 2:return n&t^n&r^t&r;case 3:return n^t^r}}function wi(e,n){return e<<n|e>>>32-n}function wm(e){const n=[1518500249,1859775393,2400959708,3395469782],t=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof e=="string"){const i=unescape(encodeURIComponent(e));e=[];for(let a=0;a<i.length;++a)e.push(i.charCodeAt(a))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);const r=e.length/4+2,o=Math.ceil(r/16),l=new Array(o);for(let i=0;i<o;++i){const a=new Uint32Array(16);for(let s=0;s<16;++s)a[s]=e[i*64+s*4]<<24|e[i*64+s*4+1]<<16|e[i*64+s*4+2]<<8|e[i*64+s*4+3];l[i]=a}l[o-1][14]=(e.length-1)*8/Math.pow(2,32),l[o-1][14]=Math.floor(l[o-1][14]),l[o-1][15]=(e.length-1)*8&4294967295;for(let i=0;i<o;++i){const a=new Uint32Array(80);for(let y=0;y<16;++y)a[y]=l[i][y];for(let y=16;y<80;++y)a[y]=wi(a[y-3]^a[y-8]^a[y-14]^a[y-16],1);let s=t[0],u=t[1],d=t[2],f=t[3],h=t[4];for(let y=0;y<80;++y){const x=Math.floor(y/20),g=wi(s,5)+bm(x,u,d,f)+h+n[x]+a[y]>>>0;h=f,f=d,d=wi(u,30)>>>0,u=s,s=g}t[0]=t[0]+s>>>0,t[1]=t[1]+u>>>0,t[2]=t[2]+d>>>0,t[3]=t[3]+f>>>0,t[4]=t[4]+h>>>0}return[t[0]>>24&255,t[0]>>16&255,t[0]>>8&255,t[0]&255,t[1]>>24&255,t[1]>>16&255,t[1]>>8&255,t[1]&255,t[2]>>24&255,t[2]>>16&255,t[2]>>8&255,t[2]&255,t[3]>>24&255,t[3]>>16&255,t[3]>>8&255,t[3]&255,t[4]>>24&255,t[4]>>16&255,t[4]>>8&255,t[4]&255]}var km=wm;$l.default=km;Object.defineProperty(Fl,"__esModule",{value:!0});Fl.default=void 0;var Sm=Of(Hn),Pm=Of($l);function Of(e){return e&&e.__esModule?e:{default:e}}const _m=(0,Sm.default)("v5",80,Pm.default);var Cm=_m;Fl.default=Cm;var Ul={};Object.defineProperty(Ul,"__esModule",{value:!0});Ul.default=void 0;var Om="00000000-0000-0000-0000-000000000000";Ul.default=Om;var ql={};Object.defineProperty(ql,"__esModule",{value:!0});ql.default=void 0;var Em=Nm(gt);function Nm(e){return e&&e.__esModule?e:{default:e}}function zm(e){if(!(0,Em.default)(e))throw TypeError("Invalid UUID");return parseInt(e.slice(14,15),16)}var jm=zm;ql.default=jm;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"NIL",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"parse",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"v1",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"v3",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"v4",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"v5",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"validate",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"version",{enumerable:!0,get:function(){return i.default}});var n=d(jl),t=d(Rl),r=d(Al),o=d(Fl),l=d(Ul),i=d(ql),a=d(gt),s=d(Yn),u=d(Zr);function d(f){return f&&f.__esModule?f:{default:f}}})(bf);var Jr={};Object.defineProperty(Jr,"__esModule",{value:!0});Jr.Messenger=void 0;class Ke{static getVsCodeAPI(){return Ke.vscode||(Ke.vscode=acquireVsCodeApi()),Ke.vscode}static listen(n){window.addEventListener("message",n)}static unlisten(n){window.removeEventListener("message",n)}static send(n,t){const r=Ke.getVsCodeAPI();t?r.postMessage({command:n,payload:t}):r.postMessage({command:n})}static sendWithReqId(n,t,r){const o=Ke.getVsCodeAPI();r?o.postMessage({command:n,requestId:t,payload:r}):o.postMessage({command:n,requestId:t})}}Jr.Messenger=Ke;Ke.getState=()=>Ke.getVsCodeAPI().getState();Ke.setState=e=>{Ke.getVsCodeAPI().setState(Object.assign({},e))};Object.defineProperty(zl,"__esModule",{value:!0});zl.messageHandler=void 0;const Mm=bf,ki=Jr;class Le{constructor(){ki.Messenger.listen(n=>{const{requestId:t,payload:r,error:o}=n.data;t&&Le.listeners[t]&&Le.listeners[t](r,o)})}static getInstance(){return Le.instance||(Le.instance=new Le),Le.instance}send(n,t){ki.Messenger.send(n,t)}request(n,t){const r=(0,Mm.v4)();return new Promise((o,l)=>{Le.listeners[r]=(i,a)=>{a?l(a):o(i),Le.listeners[r]&&delete Le.listeners[r]},ki.Messenger.sendWithReqId(n,r,t)})}}Le.listeners={};zl.messageHandler=Le.getInstance();(function(e){var n=On&&On.__createBinding||(Object.create?function(r,o,l,i){i===void 0&&(i=l),Object.defineProperty(r,i,{enumerable:!0,get:function(){return o[l]}})}:function(r,o,l,i){i===void 0&&(i=l),r[i]=o[l]}),t=On&&On.__exportStar||function(r,o){for(var l in r)l!=="default"&&!Object.prototype.hasOwnProperty.call(o,l)&&n(o,r,l)};Object.defineProperty(e,"__esModule",{value:!0}),t(zl,e),t(Jr,e)})(xf);(function(e){var n=On&&On.__createBinding||(Object.create?function(r,o,l,i){i===void 0&&(i=l),Object.defineProperty(r,i,{enumerable:!0,get:function(){return o[l]}})}:function(r,o,l,i){i===void 0&&(i=l),r[i]=o[l]}),t=On&&On.__exportStar||function(r,o){for(var l in r)l!=="default"&&!Object.prototype.hasOwnProperty.call(o,l)&&n(o,r,l)};Object.defineProperty(e,"__esModule",{value:!0}),t(xf,e)})(kt);const Tm=()=>{var xt;const[e,n]=S.useState(""),[t,r]=S.useState(""),[o,l]=S.useState(""),[i,a]=S.useState(""),[s,u]=S.useState(""),[d,f]=S.useState(""),[h,y]=S.useState(!1),[x,g]=S.useState(""),[w,m]=S.useState(null),[p,v]=S.useState(null),[b,P]=S.useState("");S.useState({file:new File([],""),privateKey:"",rpcUrl:""});const[_,C]=S.useState(null),[N,I]=S.useState("https://mevm.devnet.imola.movementlabs.xyz"),q=(xt=Xn().state)==null?void 0:xt.page,bn=M=>{I(M.target.value),console.log(M.target.value)},Gn=M=>{const j=M.target.value;u(""),j.length<=64?n(M.target.value):j.length!==64&&a("Input must be exactly 64 characters long")},eo=M=>{/^[0-9a-fA-F]*$/.test(M.key)||(M.preventDefault(),u("Only hexadecimal characters are allowed."))},Bl=M=>{const j=M.target.value;a(""),j.length===2&&j==="0x"||j.startsWith("0x")&&/^[0-9a-fA-F]{40}$/.test(j.slice(2))?(r(j),a("")):j.startsWith("0x")?q==="aptos"&&j.startsWith("0x")&&j.length!==66||q==="foundry"&&j.startsWith("0x")&&j.length!==42?a(`${q==="aptos"?"Input must be exactly 66 characters long.":"Input must be exactly 42 characters long."}`):j.length>2&&!/^[0-9a-fA-F]*$/.test(j.slice(2))&&a("Only hexadecimal characters are allowed."):a('Input must start with "0x".')},Zt=M=>{const j=M.currentTarget.value;j.startsWith("0x")?!/^[0-9a-fA-F]*$/.test(M.key)&&M.key!=="Backspace"&&(M.preventDefault(),a('Only hexadecimal characters are allowed after "0x".')):(j.length===0&&M.key!=="0"||j.length===1&&M.key!=="x")&&(M.preventDefault(),a('Input must start with "0x".'))},Jt=M=>{const j=M.target.value;f(""),q==="aptos"?j.length===2&&j==="0x"||j.startsWith("0x")&&/^[0-9a-fA-F]{40}$/.test(j.slice(2))?(l(j),f("")):j.startsWith("0x")?j.startsWith("0x")&&j.length!==66?f("Input must be exactly 66 characters long."):j.length>2&&!/^[0-9a-fA-F]*$/.test(j.slice(2))&&f("Only hexadecimal characters are allowed."):f('Input must start with "0x".'):j.length<=64?(l(M.target.value),f("")):j.length!==64&&f("Input must be exactly 64 characters long")},O=M=>{const j=M.currentTarget.value;q==="aptos"?j.startsWith("0x")?/^[0-9a-fA-F]*$/.test(M.key)||(M.preventDefault(),f('Only hexadecimal characters are allowed after "0x".')):(j.length===0&&M.key!=="0"||j.length===1&&M.key!=="x")&&(M.preventDefault(),f('Input must start with "0x".')):/^[0-9a-fA-F]*$/.test(M.key)||(M.preventDefault(),f("Only hexadecimal characters are allowed."))},T=M=>{P(M.target.value)};kt.Messenger.getVsCodeAPI();const R=M=>{const j=M.data;console.log(j.command,j.payload)};kt.Messenger.listen(R);const[W,J]=S.useState(!1);S.useEffect(()=>{W&&((async()=>{y(!0),g("");try{const j=new FormData;if(w)j.append("file",w);else throw new Error("No file selected for upload");j.append("privateKey",o),j.append("rpcUrl",N);const er=await fetch("http://3.107.36.227:3000/upload/solidity",{method:"POST",body:j,credentials:"include"});if(console.log(er),er.ok){const Ef=await er.json();console.log("Success",Ef)}else g("check respone:"+er.status),console.error("Failed to fetch quote:",er.status)}catch(j){console.error("Error during deployment:",j),j instanceof Error?g(o===""?"Fill in the privateKey information":j.message||"Failed to deploy"):g("An unknown error occurred")}finally{y(!1)}})(),J(!1))},[W]),S.useEffect(()=>{w||kt.messageHandler.send("Get_File",{file:w})},[w]),S.useEffect(()=>{kt.messageHandler.send("Get_privateKey",{privatekey:o})},[o]),S.useEffect(()=>{kt.messageHandler.send("Get_rpcUrl",{rpcUrl:N})});const yt=vt(),ln=()=>{yt(`/${q}`)};return c.jsx(c.Fragment,{children:c.jsx("div",{className:"h-[300vh] grow overflow-y-scroll",children:c.jsx("div",{className:"absolute w-[640px] sidebar:w-[400px] h-[766px] top-[-178px] left-[25px]",children:c.jsxs("div",{className:"flex flex-col w-full items-start gap-[20px] absolute top-[228px] left-0",children:[c.jsxs("div",{className:"flex items-end gap-[8px] relative self-stretch w-full flex-[0_0_auto]",onClick:ln,children:[c.jsx(Gt,{className:"!relative !w-[24px] !h-[24px]"}),q==="aptos"?c.jsx(ct,{className:"!relative !w-[24px] !h-[24px] bg-white rounded-xl"}):c.jsx(dt,{className:"!relative !w-[24px] !h-[24px] bg-white rounded-xl"}),c.jsxs("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[21.6px] whitespace-nowrap uppercase",children:["Deploy ",q]})]}),c.jsxs("div",{className:"flex flex-col gap-[24px] my-5 w-full ",children:[c.jsx("div",{children:c.jsx(ch,{file:w,setFile:m,page:q,setFileName:v})}),c.jsxs("div",{children:[c.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Wallet Address"}),c.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",onChange:Bl,onKeyPress:Zt,maxLength:q==="aptos"?66:42}),i&&c.jsx("p",{className:"text-red-500",children:i})]}),c.jsxs("div",{className:`${q==="aptos"?"":"hidden"}`,children:[c.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Module Name"}),c.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",onChange:T,disabled:q!=="aptos"})]}),c.jsxs("div",{className:`${q==="aptos"?"":"hidden"}`,children:[c.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Account Address"}),c.jsx("input",{className:" w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",onChange:Gn,onKeyPress:eo,maxLength:64}),s&&c.jsx("p",{className:"text-red-500",children:s})]}),c.jsxs("div",{children:[c.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Private Key"}),c.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",onChange:Jt,onKeyPress:O,maxLength:q==="aptos"?66:64}),d&&c.jsx("p",{className:"text-red-500",children:d})]}),c.jsxs("div",{children:[q==="aptos"&&c.jsxs(c.Fragment,{children:[c.jsx("label",{htmlFor:"network",className:"block text-xl text-white font-semibold mb-2 text-gray-700",children:"Select Network"}),c.jsxs("select",{id:"network",value:N,onChange:bn,className:"w-full px-5 py-4 text-[#8f8f8f] text-[17px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e]",children:[c.jsx("option",{value:"https://aptos.testnet.suzuka.movementlabs.xyz/v1",className:"bg-white text-[#8f8f8f]",children:"https://aptos.testnet.suzuka.movementlabs.xyz/v1"}),c.jsx("option",{value:"https://devnet.suzuka.movementnetwork.xyz/v1",className:"bg-white text-[#8f8f8f]",children:"https://devnet.suzuka.movementnetwork.xyz/v1"})]})]}),q==="foundry"&&c.jsxs(c.Fragment,{children:[c.jsx("label",{htmlFor:"network",className:"block text-xl text-white font-semibold mb-2 text-gray-700",children:"Select Network"}),c.jsxs("select",{id:"network",value:N,onChange:bn,className:"w-full px-5 py-4 text-[#8f8f8f] text-[17px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e]",children:[c.jsx("option",{value:"",disabled:!0,children:"Select a network"}),c.jsx("option",{value:"https://mevm.devnet.imola.movementlabs.xyz",className:"bg-white text-[#8f8f8f]",children:"https://mevm.devnet.imola.movementlabs.xyz"})]})]})]}),c.jsxs("div",{className:"mt-5",children:[c.jsx("button",{className:`w-full px-5 py-4 mt-4 text-white text-[18px] rounded-lg ${h?"bg-gray-500":"bg-blue-500"} `,onClick:()=>{J(!0)},disabled:h,children:h?c.jsx(Mh,{color:"#7d9cd9",size:"small",text:"",textColor:""}):"Deploy"}),x&&c.jsx("p",{className:"text-red-500 mt-2",children:x}),_&&c.jsxs("div",{className:"mt-4 p-4 border border-gray-300 rounded text-white",children:[c.jsx("h3",{className:"font-semibold text-white",children:"Response Data:"}),c.jsx("pre",{className:"text-white",children:JSON.stringify(_,null,2)})]})]})]})]})})})})},Rm=()=>{var f;const[e,n]=S.useState(""),[t,r]=S.useState(!1),o=h=>{const y=h.target.value;(y===""||/^\d+$/.test(y))&&n(y===""?"":Number(y))},l=h=>{/[0-9]/.test(h.key)||h.preventDefault()},i=()=>{r(!0),setTimeout(()=>r(!1),2e3)},s=(f=Xn().state)==null?void 0:f.page,u=vt(),d=()=>{u(`/${s}`)};return c.jsx(c.Fragment,{children:c.jsx("div",{className:"h-[300vh] grow overflow-y-scroll",children:c.jsx("div",{className:"absolute w-[640px] sidebar:w-[400px] h-[766px] top-[-178px] left-[25px]",children:c.jsxs("div",{className:"flex flex-col w-full items-start gap-[20px] absolute top-[228px] left-0",children:[c.jsxs("div",{className:"flex items-end gap-[8px] relative self-stretch w-full flex-[0_0_auto]",onClick:d,children:[c.jsx(Gt,{className:"!relative !w-[24px] !h-[24px]"}),s==="aptos"?c.jsx(ct,{className:"!relative !w-[24px] !h-[24px] bg-white rounded-xl"}):c.jsx(dt,{className:"!relative !w-[24px] !h-[24px] bg-white rounded-xl"}),c.jsxs("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[21.6px] whitespace-nowrap uppercase",children:["Faucets ",s]})]}),c.jsxs("div",{className:"flex flex-col gap-[24px] my-5 w-full ",children:[c.jsxs("div",{children:[c.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Aptos Address"}),c.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",max:1e10,onChange:o,onKeyPress:l})]}),c.jsx("div",{className:"mt-5",children:c.jsx("button",{onClick:i,disabled:t,className:"w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg",children:t?"Loading...":"GET MOVE"})})]})]})})})})},Dm=()=>{var s;const[e,n]=S.useState(""),t=u=>{const d=u.target.value;(d===""||/^\d+$/.test(d))&&n(d===""?"":Number(d))},r=u=>{/[0-9]/.test(u.key)||u.preventDefault()},l=(s=Xn().state)==null?void 0:s.page,i=vt(),a=()=>{i(`/${l}`)};return c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"h-[300vh] grow overflow-y-scroll",children:c.jsx("div",{className:"absolute w-[640px] sidebar:w-[400px] h-[766px] top-[-178px] left-[25px]",children:c.jsxs("div",{className:"flex flex-col w-full items-start gap-[20px] absolute top-[228px] left-0",children:[c.jsxs("div",{className:"flex items-end gap-[8px] relative self-stretch w-full flex-[0_0_auto]",onClick:a,children:[c.jsx(Gt,{className:"!relative !w-[24px] !h-[24px]"}),l==="aptos"?c.jsx(ct,{className:"!relative !w-[24px] !h-[24px] bg-white rounded-xl"}):c.jsx(dt,{className:"!relative !w-[24px] !h-[24px] bg-white rounded-xl"}),c.jsxs("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[21.6px] whitespace-nowrap uppercase",children:["YourAddress ",l]})]}),c.jsxs("div",{className:"flex flex-col gap-[24px] my-5 w-full ",children:[c.jsxs("div",{children:[c.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Wallet Address"}),c.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",max:1e10,onChange:t,onKeyPress:r})]}),c.jsxs("div",{children:[c.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Pritave key"}),c.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",max:1e10,onChange:t,onKeyPress:r})]}),c.jsxs("div",{children:[c.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Public key"}),c.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",max:1e10,onChange:t,onKeyPress:r})]})]})]})})}),c.jsx("div",{children:c.jsx("div",{className:" bg-blue-500 text-white font-bold py-2 px-4 rounded  cursor-pointer self-end",onClick:()=>{i("/deploy")},children:"Deploy"})})]})},Fu=mf(document.getElementById("root"));Fu&&Fu.render(c.jsx(Q1,{initialEntries:["/"],children:c.jsx(X1,{children:c.jsxs(sn,{element:c.jsx(sh,{}),children:[c.jsx(sn,{index:!0,element:c.jsx(ih,{})}),c.jsx(sn,{path:"aptos",element:c.jsx(pf,{})}),c.jsx(sn,{path:"foundry",element:c.jsx(hf,{})}),c.jsx(sn,{path:"account-balance",element:c.jsx(uh,{})}),c.jsx(sn,{path:"deploy",element:c.jsx(Tm,{})}),c.jsx(sn,{path:"faucets",element:c.jsx(Rm,{})}),c.jsx(sn,{path:"your-address",element:c.jsx(Dm,{})})]})})}));
