function Rd(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Dd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ru={exports:{}},Xo={},ou={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Er=Symbol.for("react.element"),Ad=Symbol.for("react.portal"),Fd=Symbol.for("react.fragment"),Id=Symbol.for("react.strict_mode"),$d=Symbol.for("react.profiler"),Ud=Symbol.for("react.provider"),Bd=Symbol.for("react.context"),qd=Symbol.for("react.forward_ref"),Hd=Symbol.for("react.suspense"),Wd=Symbol.for("react.memo"),Vd=Symbol.for("react.lazy"),Ra=Symbol.iterator;function Qd(e){return e===null||typeof e!="object"?null:(e=Ra&&e[Ra]||e["@@iterator"],typeof e=="function"?e:null)}var lu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},iu=Object.assign,au={};function Tt(e,n,t){this.props=e,this.context=n,this.refs=au,this.updater=t||lu}Tt.prototype.isReactComponent={};Tt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Tt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function su(){}su.prototype=Tt.prototype;function Fi(e,n,t){this.props=e,this.context=n,this.refs=au,this.updater=t||lu}var Ii=Fi.prototype=new su;Ii.constructor=Fi;iu(Ii,Tt.prototype);Ii.isPureReactComponent=!0;var Da=Array.isArray,uu=Object.prototype.hasOwnProperty,$i={current:null},cu={key:!0,ref:!0,__self:!0,__source:!0};function du(e,n,t){var r,o={},l=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(l=""+n.key),n)uu.call(n,r)&&!cu.hasOwnProperty(r)&&(o[r]=n[r]);var a=arguments.length-2;if(a===1)o.children=t;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Er,type:e,key:l,ref:i,props:o,_owner:$i.current}}function Kd(e,n){return{$$typeof:Er,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ui(e){return typeof e=="object"&&e!==null&&e.$$typeof===Er}function Xd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Aa=/\/+/g;function hl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Xd(""+e.key):n.toString(36)}function uo(e,n,t,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Er:case Ad:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+hl(i,0):r,Da(o)?(t="",e!=null&&(t=e.replace(Aa,"$&/")+"/"),uo(o,n,t,"",function(u){return u})):o!=null&&(Ui(o)&&(o=Kd(o,t+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Aa,"$&/")+"/")+e)),n.push(o)),1;if(i=0,r=r===""?".":r+":",Da(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+hl(l,a);i+=uo(l,n,t,s,o)}else if(s=Qd(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+hl(l,a++),i+=uo(l,n,t,s,o);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function Ir(e,n,t){if(e==null)return e;var r=[],o=0;return uo(e,r,"","",function(l){return n.call(t,l,o++)}),r}function Yd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},co={transition:null},Gd={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:co,ReactCurrentOwner:$i};function fu(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Ir,forEach:function(e,n,t){Ir(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ir(e,function(){n++}),n},toArray:function(e){return Ir(e,function(n){return n})||[]},only:function(e){if(!Ui(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Tt;F.Fragment=Fd;F.Profiler=$d;F.PureComponent=Fi;F.StrictMode=Id;F.Suspense=Hd;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gd;F.act=fu;F.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=iu({},e.props),o=e.key,l=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,i=$i.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)uu.call(n,s)&&!cu.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Er,type:e.type,key:o,ref:l,props:r,_owner:i}};F.createContext=function(e){return e={$$typeof:Bd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ud,_context:e},e.Consumer=e};F.createElement=du;F.createFactory=function(e){var n=du.bind(null,e);return n.type=e,n};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:qd,render:e}};F.isValidElement=Ui;F.lazy=function(e){return{$$typeof:Vd,_payload:{_status:-1,_result:e},_init:Yd}};F.memo=function(e,n){return{$$typeof:Wd,type:e,compare:n===void 0?null:n}};F.startTransition=function(e){var n=co.transition;co.transition={};try{e()}finally{co.transition=n}};F.unstable_act=fu;F.useCallback=function(e,n){return me.current.useCallback(e,n)};F.useContext=function(e){return me.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return me.current.useDeferredValue(e)};F.useEffect=function(e,n){return me.current.useEffect(e,n)};F.useId=function(){return me.current.useId()};F.useImperativeHandle=function(e,n,t){return me.current.useImperativeHandle(e,n,t)};F.useInsertionEffect=function(e,n){return me.current.useInsertionEffect(e,n)};F.useLayoutEffect=function(e,n){return me.current.useLayoutEffect(e,n)};F.useMemo=function(e,n){return me.current.useMemo(e,n)};F.useReducer=function(e,n,t){return me.current.useReducer(e,n,t)};F.useRef=function(e){return me.current.useRef(e)};F.useState=function(e){return me.current.useState(e)};F.useSyncExternalStore=function(e,n,t){return me.current.useSyncExternalStore(e,n,t)};F.useTransition=function(){return me.current.useTransition()};F.version="18.3.1";ou.exports=F;var S=ou.exports;const $=Dd(S),Zd=Rd({__proto__:null,default:$},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd=S,ef=Symbol.for("react.element"),nf=Symbol.for("react.fragment"),tf=Object.prototype.hasOwnProperty,rf=Jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,of={key:!0,ref:!0,__self:!0,__source:!0};function pu(e,n,t){var r,o={},l=null,i=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)tf.call(n,r)&&!of.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:ef,type:e,key:l,ref:i,props:o,_owner:rf.current}}Xo.Fragment=nf;Xo.jsx=pu;Xo.jsxs=pu;ru.exports=Xo;var c=ru.exports,hu={exports:{}},Ne={},mu={exports:{}},vu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,L){var R=E.length;E.push(L);e:for(;0<R;){var W=R-1>>>1,j=E[W];if(0<o(j,L))E[W]=L,E[R]=j,R=W;else break e}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var L=E[0],R=E.pop();if(R!==L){E[0]=R;e:for(var W=0,j=E.length,M=j>>>1;W<M;){var We=2*(W+1)-1,It=E[We],Un=We+1,Fr=E[Un];if(0>o(It,R))Un<j&&0>o(Fr,It)?(E[W]=Fr,E[Un]=R,W=Un):(E[W]=It,E[We]=R,W=We);else if(Un<j&&0>o(Fr,R))E[W]=Fr,E[Un]=R,W=Un;else break e}}return L}function o(E,L){var R=E.sortIndex-L.sortIndex;return R!==0?R:E.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],u=[],f=1,p=null,v=3,x=!1,y=!1,g=!1,k=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(E){for(var L=t(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=E)r(u),L.sortIndex=L.expirationTime,n(s,L);else break;L=t(u)}}function b(E){if(g=!1,m(E),!y)if(t(s)!==null)y=!0,At(P);else{var L=t(u);L!==null&&Ft(b,L.startTime-E)}}function P(E,L){y=!1,g&&(g=!1,h(_),_=-1),x=!0;var R=v;try{for(m(L),p=t(s);p!==null&&(!(p.expirationTime>L)||E&&!ke());){var W=p.callback;if(typeof W=="function"){p.callback=null,v=p.priorityLevel;var j=W(p.expirationTime<=L);L=e.unstable_now(),typeof j=="function"?p.callback=j:p===t(s)&&r(s),m(L)}else r(s);p=t(s)}if(p!==null)var M=!0;else{var We=t(u);We!==null&&Ft(b,We.startTime-L),M=!1}return M}finally{p=null,v=R,x=!1}}var C=!1,O=null,_=-1,T=5,D=-1;function ke(){return!(e.unstable_now()-D<T)}function In(){if(O!==null){var E=e.unstable_now();D=E;var L=!0;try{L=O(!0,E)}finally{L?$n():(C=!1,O=null)}}else C=!1}var $n;if(typeof d=="function")$n=function(){d(In)};else if(typeof MessageChannel<"u"){var Ar=new MessageChannel,pl=Ar.port2;Ar.port1.onmessage=In,$n=function(){pl.postMessage(null)}}else $n=function(){k(In,0)};function At(E){O=E,C||(C=!0,$n())}function Ft(E,L){_=k(function(){E(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,At(P))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(E){switch(v){case 1:case 2:case 3:var L=3;break;default:L=v}var R=v;v=L;try{return E()}finally{v=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,L){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=v;v=E;try{return L()}finally{v=R}},e.unstable_scheduleCallback=function(E,L,R){var W=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?W+R:W):R=W,E){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=R+j,E={id:f++,callback:L,priorityLevel:E,startTime:R,expirationTime:j,sortIndex:-1},R>W?(E.sortIndex=R,n(u,E),t(s)===null&&E===t(u)&&(g?(h(_),_=-1):g=!0,Ft(b,R-W))):(E.sortIndex=j,n(s,E),y||x||(y=!0,At(P))),E},e.unstable_shouldYield=ke,e.unstable_wrapCallback=function(E){var L=v;return function(){var R=v;v=L;try{return E.apply(this,arguments)}finally{v=R}}}})(vu);mu.exports=vu;var lf=mu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var af=S,Ee=lf;function w(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gu=new Set,ur={};function et(e,n){Ct(e,n),Ct(e+"Capture",n)}function Ct(e,n){for(ur[e]=n,e=0;e<n.length;e++)gu.add(n[e])}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bl=Object.prototype.hasOwnProperty,sf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fa={},Ia={};function uf(e){return Bl.call(Ia,e)?!0:Bl.call(Fa,e)?!1:sf.test(e)?Ia[e]=!0:(Fa[e]=!0,!1)}function cf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function df(e,n,t,r){if(n===null||typeof n>"u"||cf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ve(e,n,t,r,o,l,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=i}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];se[n]=new ve(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bi=/[\-:]([a-z])/g;function qi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Bi,qi);se[n]=new ve(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Bi,qi);se[n]=new ve(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Bi,qi);se[n]=new ve(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Hi(e,n,t,r){var o=se.hasOwnProperty(n)?se[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(df(n,t,o,r)&&(t=null),r||o===null?uf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var fn=af.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$r=Symbol.for("react.element"),at=Symbol.for("react.portal"),st=Symbol.for("react.fragment"),Wi=Symbol.for("react.strict_mode"),ql=Symbol.for("react.profiler"),yu=Symbol.for("react.provider"),xu=Symbol.for("react.context"),Vi=Symbol.for("react.forward_ref"),Hl=Symbol.for("react.suspense"),Wl=Symbol.for("react.suspense_list"),Qi=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),bu=Symbol.for("react.offscreen"),$a=Symbol.iterator;function $t(e){return e===null||typeof e!="object"?null:(e=$a&&e[$a]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,ml;function Xt(e){if(ml===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ml=n&&n[1]||""}return`
`+ml+e}var vl=!1;function gl(e,n){if(!e||vl)return"";vl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{vl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Xt(e):""}function ff(e){switch(e.tag){case 5:return Xt(e.type);case 16:return Xt("Lazy");case 13:return Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 2:case 15:return e=gl(e.type,!1),e;case 11:return e=gl(e.type.render,!1),e;case 1:return e=gl(e.type,!0),e;default:return""}}function Vl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case st:return"Fragment";case at:return"Portal";case ql:return"Profiler";case Wi:return"StrictMode";case Hl:return"Suspense";case Wl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xu:return(e.displayName||"Context")+".Consumer";case yu:return(e._context.displayName||"Context")+".Provider";case Vi:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qi:return n=e.displayName||null,n!==null?n:Vl(e.type)||"Memo";case mn:n=e._payload,e=e._init;try{return Vl(e(n))}catch{}}return null}function pf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vl(n);case 8:return n===Wi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function jn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function hf(e){var n=wu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ur(e){e._valueTracker||(e._valueTracker=hf(e))}function ku(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=wu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ko(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ql(e,n){var t=n.checked;return Y({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ua(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=jn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Su(e,n){n=n.checked,n!=null&&Hi(e,"checked",n,!1)}function Kl(e,n){Su(e,n);var t=jn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Xl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Xl(e,n.type,jn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ba(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Xl(e,n,t){(n!=="number"||ko(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Yt=Array.isArray;function xt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+jn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Yl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(w(91));return Y({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qa(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(w(92));if(Yt(t)){if(1<t.length)throw Error(w(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:jn(t)}}function Pu(e,n){var t=jn(n.value),r=jn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ha(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Cu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Cu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Br,Ou=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Br=Br||document.createElement("div"),Br.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Br.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function cr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var er={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mf=["Webkit","ms","Moz","O"];Object.keys(er).forEach(function(e){mf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),er[n]=er[e]})});function Eu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||er.hasOwnProperty(e)&&er[e]?(""+n).trim():n+"px"}function Nu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=Eu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var vf=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zl(e,n){if(n){if(vf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(w(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(w(61))}if(n.style!=null&&typeof n.style!="object")throw Error(w(62))}}function Jl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ei=null;function Ki(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ni=null,bt=null,wt=null;function Wa(e){if(e=_r(e)){if(typeof ni!="function")throw Error(w(280));var n=e.stateNode;n&&(n=el(n),ni(e.stateNode,e.type,n))}}function zu(e){bt?wt?wt.push(e):wt=[e]:bt=e}function _u(){if(bt){var e=bt,n=wt;if(wt=bt=null,Wa(e),n)for(e=0;e<n.length;e++)Wa(n[e])}}function ju(e,n){return e(n)}function Tu(){}var yl=!1;function Mu(e,n,t){if(yl)return e(n,t);yl=!0;try{return ju(e,n,t)}finally{yl=!1,(bt!==null||wt!==null)&&(Tu(),_u())}}function dr(e,n){var t=e.stateNode;if(t===null)return null;var r=el(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(w(231,n,typeof t));return t}var ti=!1;if(sn)try{var Ut={};Object.defineProperty(Ut,"passive",{get:function(){ti=!0}}),window.addEventListener("test",Ut,Ut),window.removeEventListener("test",Ut,Ut)}catch{ti=!1}function gf(e,n,t,r,o,l,i,a,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(f){this.onError(f)}}var nr=!1,So=null,Po=!1,ri=null,yf={onError:function(e){nr=!0,So=e}};function xf(e,n,t,r,o,l,i,a,s){nr=!1,So=null,gf.apply(yf,arguments)}function bf(e,n,t,r,o,l,i,a,s){if(xf.apply(this,arguments),nr){if(nr){var u=So;nr=!1,So=null}else throw Error(w(198));Po||(Po=!0,ri=u)}}function nt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Lu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Va(e){if(nt(e)!==e)throw Error(w(188))}function wf(e){var n=e.alternate;if(!n){if(n=nt(e),n===null)throw Error(w(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===t)return Va(o),e;if(l===r)return Va(o),n;l=l.sibling}throw Error(w(188))}if(t.return!==r.return)t=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===t){i=!0,t=o,r=l;break}if(a===r){i=!0,r=o,t=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===t){i=!0,t=l,r=o;break}if(a===r){i=!0,r=l,t=o;break}a=a.sibling}if(!i)throw Error(w(189))}}if(t.alternate!==r)throw Error(w(190))}if(t.tag!==3)throw Error(w(188));return t.stateNode.current===t?e:n}function Ru(e){return e=wf(e),e!==null?Du(e):null}function Du(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Du(e);if(n!==null)return n;e=e.sibling}return null}var Au=Ee.unstable_scheduleCallback,Qa=Ee.unstable_cancelCallback,kf=Ee.unstable_shouldYield,Sf=Ee.unstable_requestPaint,Z=Ee.unstable_now,Pf=Ee.unstable_getCurrentPriorityLevel,Xi=Ee.unstable_ImmediatePriority,Fu=Ee.unstable_UserBlockingPriority,Co=Ee.unstable_NormalPriority,Cf=Ee.unstable_LowPriority,Iu=Ee.unstable_IdlePriority,Yo=null,Ge=null;function Of(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Yo,e,void 0,(e.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:zf,Ef=Math.log,Nf=Math.LN2;function zf(e){return e>>>=0,e===0?32:31-(Ef(e)/Nf|0)|0}var qr=64,Hr=4194304;function Gt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Oo(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=t&268435455;if(i!==0){var a=i&~o;a!==0?r=Gt(a):(l&=i,l!==0&&(r=Gt(l)))}else i=t&~o,i!==0?r=Gt(i):l!==0&&(r=Gt(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,l=n&-n,o>=l||o===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Be(n),o=1<<t,r|=e[t],n&=~o;return r}function _f(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Be(l),a=1<<i,s=o[i];s===-1?(!(a&t)||a&r)&&(o[i]=_f(a,n)):s<=n&&(e.expiredLanes|=a),l&=~a}}function oi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $u(){var e=qr;return qr<<=1,!(qr&4194240)&&(qr=64),e}function xl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Nr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Be(n),e[n]=t}function Tf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Be(t),l=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~l}}function Yi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Be(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var U=0;function Uu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bu,Gi,qu,Hu,Wu,li=!1,Wr=[],kn=null,Sn=null,Pn=null,fr=new Map,pr=new Map,gn=[],Mf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ka(e,n){switch(e){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":fr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":pr.delete(n.pointerId)}}function Bt(e,n,t,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},n!==null&&(n=_r(n),n!==null&&Gi(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Lf(e,n,t,r,o){switch(n){case"focusin":return kn=Bt(kn,e,n,t,r,o),!0;case"dragenter":return Sn=Bt(Sn,e,n,t,r,o),!0;case"mouseover":return Pn=Bt(Pn,e,n,t,r,o),!0;case"pointerover":var l=o.pointerId;return fr.set(l,Bt(fr.get(l)||null,e,n,t,r,o)),!0;case"gotpointercapture":return l=o.pointerId,pr.set(l,Bt(pr.get(l)||null,e,n,t,r,o)),!0}return!1}function Vu(e){var n=Hn(e.target);if(n!==null){var t=nt(n);if(t!==null){if(n=t.tag,n===13){if(n=Lu(t),n!==null){e.blockedOn=n,Wu(e.priority,function(){qu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ii(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ei=r,t.target.dispatchEvent(r),ei=null}else return n=_r(t),n!==null&&Gi(n),e.blockedOn=t,!1;n.shift()}return!0}function Xa(e,n,t){fo(e)&&t.delete(n)}function Rf(){li=!1,kn!==null&&fo(kn)&&(kn=null),Sn!==null&&fo(Sn)&&(Sn=null),Pn!==null&&fo(Pn)&&(Pn=null),fr.forEach(Xa),pr.forEach(Xa)}function qt(e,n){e.blockedOn===n&&(e.blockedOn=null,li||(li=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,Rf)))}function hr(e){function n(o){return qt(o,e)}if(0<Wr.length){qt(Wr[0],e);for(var t=1;t<Wr.length;t++){var r=Wr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(kn!==null&&qt(kn,e),Sn!==null&&qt(Sn,e),Pn!==null&&qt(Pn,e),fr.forEach(n),pr.forEach(n),t=0;t<gn.length;t++)r=gn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<gn.length&&(t=gn[0],t.blockedOn===null);)Vu(t),t.blockedOn===null&&gn.shift()}var kt=fn.ReactCurrentBatchConfig,Eo=!0;function Df(e,n,t,r){var o=U,l=kt.transition;kt.transition=null;try{U=1,Zi(e,n,t,r)}finally{U=o,kt.transition=l}}function Af(e,n,t,r){var o=U,l=kt.transition;kt.transition=null;try{U=4,Zi(e,n,t,r)}finally{U=o,kt.transition=l}}function Zi(e,n,t,r){if(Eo){var o=ii(e,n,t,r);if(o===null)zl(e,n,r,No,t),Ka(e,r);else if(Lf(o,e,n,t,r))r.stopPropagation();else if(Ka(e,r),n&4&&-1<Mf.indexOf(e)){for(;o!==null;){var l=_r(o);if(l!==null&&Bu(l),l=ii(e,n,t,r),l===null&&zl(e,n,r,No,t),l===o)break;o=l}o!==null&&r.stopPropagation()}else zl(e,n,r,null,t)}}var No=null;function ii(e,n,t,r){if(No=null,e=Ki(r),e=Hn(e),e!==null)if(n=nt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Lu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return No=e,null}function Qu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pf()){case Xi:return 1;case Fu:return 4;case Co:case Cf:return 16;case Iu:return 536870912;default:return 16}default:return 16}}var xn=null,Ji=null,po=null;function Ku(){if(po)return po;var e,n=Ji,t=n.length,r,o="value"in xn?xn.value:xn.textContent,l=o.length;for(e=0;e<t&&n[e]===o[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===o[l-r];r++);return po=o.slice(e,1<r?1-r:void 0)}function ho(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Vr(){return!0}function Ya(){return!1}function ze(e){function n(t,r,o,l,i){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Vr:Ya,this.isPropagationStopped=Ya,this}return Y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Vr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Vr)},persist:function(){},isPersistent:Vr}),n}var Mt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ea=ze(Mt),zr=Y({},Mt,{view:0,detail:0}),Ff=ze(zr),bl,wl,Ht,Go=Y({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:na,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ht&&(Ht&&e.type==="mousemove"?(bl=e.screenX-Ht.screenX,wl=e.screenY-Ht.screenY):wl=bl=0,Ht=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:wl}}),Ga=ze(Go),If=Y({},Go,{dataTransfer:0}),$f=ze(If),Uf=Y({},zr,{relatedTarget:0}),kl=ze(Uf),Bf=Y({},Mt,{animationName:0,elapsedTime:0,pseudoElement:0}),qf=ze(Bf),Hf=Y({},Mt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wf=ze(Hf),Vf=Y({},Mt,{data:0}),Za=ze(Vf),Qf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Xf[e])?!!n[e]:!1}function na(){return Yf}var Gf=Y({},zr,{key:function(e){if(e.key){var n=Qf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:na,charCode:function(e){return e.type==="keypress"?ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zf=ze(Gf),Jf=Y({},Go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ja=ze(Jf),ep=Y({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:na}),np=ze(ep),tp=Y({},Mt,{propertyName:0,elapsedTime:0,pseudoElement:0}),rp=ze(tp),op=Y({},Go,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lp=ze(op),ip=[9,13,27,32],ta=sn&&"CompositionEvent"in window,tr=null;sn&&"documentMode"in document&&(tr=document.documentMode);var ap=sn&&"TextEvent"in window&&!tr,Xu=sn&&(!ta||tr&&8<tr&&11>=tr),es=" ",ns=!1;function Yu(e,n){switch(e){case"keyup":return ip.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ut=!1;function sp(e,n){switch(e){case"compositionend":return Gu(n);case"keypress":return n.which!==32?null:(ns=!0,es);case"textInput":return e=n.data,e===es&&ns?null:e;default:return null}}function up(e,n){if(ut)return e==="compositionend"||!ta&&Yu(e,n)?(e=Ku(),po=Ji=xn=null,ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Xu&&n.locale!=="ko"?null:n.data;default:return null}}var cp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ts(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!cp[e.type]:n==="textarea"}function Zu(e,n,t,r){zu(r),n=zo(n,"onChange"),0<n.length&&(t=new ea("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var rr=null,mr=null;function dp(e){uc(e,0)}function Zo(e){var n=ft(e);if(ku(n))return e}function fp(e,n){if(e==="change")return n}var Ju=!1;if(sn){var Sl;if(sn){var Pl="oninput"in document;if(!Pl){var rs=document.createElement("div");rs.setAttribute("oninput","return;"),Pl=typeof rs.oninput=="function"}Sl=Pl}else Sl=!1;Ju=Sl&&(!document.documentMode||9<document.documentMode)}function os(){rr&&(rr.detachEvent("onpropertychange",ec),mr=rr=null)}function ec(e){if(e.propertyName==="value"&&Zo(mr)){var n=[];Zu(n,mr,e,Ki(e)),Mu(dp,n)}}function pp(e,n,t){e==="focusin"?(os(),rr=n,mr=t,rr.attachEvent("onpropertychange",ec)):e==="focusout"&&os()}function hp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zo(mr)}function mp(e,n){if(e==="click")return Zo(n)}function vp(e,n){if(e==="input"||e==="change")return Zo(n)}function gp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var He=typeof Object.is=="function"?Object.is:gp;function vr(e,n){if(He(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!Bl.call(n,o)||!He(e[o],n[o]))return!1}return!0}function ls(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function is(e,n){var t=ls(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ls(t)}}function nc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?nc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function tc(){for(var e=window,n=ko();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ko(e.document)}return n}function ra(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function yp(e){var n=tc(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&nc(t.ownerDocument.documentElement,t)){if(r!==null&&ra(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=is(t,l);var i=is(t,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xp=sn&&"documentMode"in document&&11>=document.documentMode,ct=null,ai=null,or=null,si=!1;function as(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;si||ct==null||ct!==ko(r)||(r=ct,"selectionStart"in r&&ra(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),or&&vr(or,r)||(or=r,r=zo(ai,"onSelect"),0<r.length&&(n=new ea("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=ct)))}function Qr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var dt={animationend:Qr("Animation","AnimationEnd"),animationiteration:Qr("Animation","AnimationIteration"),animationstart:Qr("Animation","AnimationStart"),transitionend:Qr("Transition","TransitionEnd")},Cl={},rc={};sn&&(rc=document.createElement("div").style,"AnimationEvent"in window||(delete dt.animationend.animation,delete dt.animationiteration.animation,delete dt.animationstart.animation),"TransitionEvent"in window||delete dt.transitionend.transition);function Jo(e){if(Cl[e])return Cl[e];if(!dt[e])return e;var n=dt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in rc)return Cl[e]=n[t];return e}var oc=Jo("animationend"),lc=Jo("animationiteration"),ic=Jo("animationstart"),ac=Jo("transitionend"),sc=new Map,ss="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(e,n){sc.set(e,n),et(n,[e])}for(var Ol=0;Ol<ss.length;Ol++){var El=ss[Ol],bp=El.toLowerCase(),wp=El[0].toUpperCase()+El.slice(1);Ln(bp,"on"+wp)}Ln(oc,"onAnimationEnd");Ln(lc,"onAnimationIteration");Ln(ic,"onAnimationStart");Ln("dblclick","onDoubleClick");Ln("focusin","onFocus");Ln("focusout","onBlur");Ln(ac,"onTransitionEnd");Ct("onMouseEnter",["mouseout","mouseover"]);Ct("onMouseLeave",["mouseout","mouseover"]);Ct("onPointerEnter",["pointerout","pointerover"]);Ct("onPointerLeave",["pointerout","pointerover"]);et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));et("onBeforeInput",["compositionend","keypress","textInput","paste"]);et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zt));function us(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,bf(r,n,void 0,e),e.currentTarget=null}function uc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;us(o,a,u),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,u=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;us(o,a,u),l=s}}}if(Po)throw e=ri,Po=!1,ri=null,e}function q(e,n){var t=n[pi];t===void 0&&(t=n[pi]=new Set);var r=e+"__bubble";t.has(r)||(cc(n,e,2,!1),t.add(r))}function Nl(e,n,t){var r=0;n&&(r|=4),cc(t,e,r,n)}var Kr="_reactListening"+Math.random().toString(36).slice(2);function gr(e){if(!e[Kr]){e[Kr]=!0,gu.forEach(function(t){t!=="selectionchange"&&(kp.has(t)||Nl(t,!1,e),Nl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Kr]||(n[Kr]=!0,Nl("selectionchange",!1,n))}}function cc(e,n,t,r){switch(Qu(n)){case 1:var o=Df;break;case 4:o=Af;break;default:o=Zi}t=o.bind(null,n,t,e),o=void 0,!ti||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function zl(e,n,t,r,o){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=Hn(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}Mu(function(){var u=l,f=Ki(t),p=[];e:{var v=sc.get(e);if(v!==void 0){var x=ea,y=e;switch(e){case"keypress":if(ho(t)===0)break e;case"keydown":case"keyup":x=Zf;break;case"focusin":y="focus",x=kl;break;case"focusout":y="blur",x=kl;break;case"beforeblur":case"afterblur":x=kl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ga;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=$f;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=np;break;case oc:case lc:case ic:x=qf;break;case ac:x=rp;break;case"scroll":x=Ff;break;case"wheel":x=lp;break;case"copy":case"cut":case"paste":x=Wf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ja}var g=(n&4)!==0,k=!g&&e==="scroll",h=g?v!==null?v+"Capture":null:v;g=[];for(var d=u,m;d!==null;){m=d;var b=m.stateNode;if(m.tag===5&&b!==null&&(m=b,h!==null&&(b=dr(d,h),b!=null&&g.push(yr(d,b,m)))),k)break;d=d.return}0<g.length&&(v=new x(v,y,null,t,f),p.push({event:v,listeners:g}))}}if(!(n&7)){e:{if(v=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",v&&t!==ei&&(y=t.relatedTarget||t.fromElement)&&(Hn(y)||y[un]))break e;if((x||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,x?(y=t.relatedTarget||t.toElement,x=u,y=y?Hn(y):null,y!==null&&(k=nt(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=u),x!==y)){if(g=Ga,b="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(g=Ja,b="onPointerLeave",h="onPointerEnter",d="pointer"),k=x==null?v:ft(x),m=y==null?v:ft(y),v=new g(b,d+"leave",x,t,f),v.target=k,v.relatedTarget=m,b=null,Hn(f)===u&&(g=new g(h,d+"enter",y,t,f),g.target=m,g.relatedTarget=k,b=g),k=b,x&&y)n:{for(g=x,h=y,d=0,m=g;m;m=lt(m))d++;for(m=0,b=h;b;b=lt(b))m++;for(;0<d-m;)g=lt(g),d--;for(;0<m-d;)h=lt(h),m--;for(;d--;){if(g===h||h!==null&&g===h.alternate)break n;g=lt(g),h=lt(h)}g=null}else g=null;x!==null&&cs(p,v,x,g,!1),y!==null&&k!==null&&cs(p,k,y,g,!0)}}e:{if(v=u?ft(u):window,x=v.nodeName&&v.nodeName.toLowerCase(),x==="select"||x==="input"&&v.type==="file")var P=fp;else if(ts(v))if(Ju)P=vp;else{P=hp;var C=pp}else(x=v.nodeName)&&x.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(P=mp);if(P&&(P=P(e,u))){Zu(p,P,t,f);break e}C&&C(e,v,u),e==="focusout"&&(C=v._wrapperState)&&C.controlled&&v.type==="number"&&Xl(v,"number",v.value)}switch(C=u?ft(u):window,e){case"focusin":(ts(C)||C.contentEditable==="true")&&(ct=C,ai=u,or=null);break;case"focusout":or=ai=ct=null;break;case"mousedown":si=!0;break;case"contextmenu":case"mouseup":case"dragend":si=!1,as(p,t,f);break;case"selectionchange":if(xp)break;case"keydown":case"keyup":as(p,t,f)}var O;if(ta)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ut?Yu(e,t)&&(_="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(Xu&&t.locale!=="ko"&&(ut||_!=="onCompositionStart"?_==="onCompositionEnd"&&ut&&(O=Ku()):(xn=f,Ji="value"in xn?xn.value:xn.textContent,ut=!0)),C=zo(u,_),0<C.length&&(_=new Za(_,e,null,t,f),p.push({event:_,listeners:C}),O?_.data=O:(O=Gu(t),O!==null&&(_.data=O)))),(O=ap?sp(e,t):up(e,t))&&(u=zo(u,"onBeforeInput"),0<u.length&&(f=new Za("onBeforeInput","beforeinput",null,t,f),p.push({event:f,listeners:u}),f.data=O))}uc(p,n)})}function yr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function zo(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=dr(e,t),l!=null&&r.unshift(yr(e,l,o)),l=dr(e,n),l!=null&&r.push(yr(e,l,o))),e=e.return}return r}function lt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cs(e,n,t,r,o){for(var l=n._reactName,i=[];t!==null&&t!==r;){var a=t,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=dr(t,l),s!=null&&i.unshift(yr(t,s,a))):o||(s=dr(t,l),s!=null&&i.push(yr(t,s,a)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Sp=/\r\n?/g,Pp=/\u0000|\uFFFD/g;function ds(e){return(typeof e=="string"?e:""+e).replace(Sp,`
`).replace(Pp,"")}function Xr(e,n,t){if(n=ds(n),ds(e)!==n&&t)throw Error(w(425))}function _o(){}var ui=null,ci=null;function di(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var fi=typeof setTimeout=="function"?setTimeout:void 0,Cp=typeof clearTimeout=="function"?clearTimeout:void 0,fs=typeof Promise=="function"?Promise:void 0,Op=typeof queueMicrotask=="function"?queueMicrotask:typeof fs<"u"?function(e){return fs.resolve(null).then(e).catch(Ep)}:fi;function Ep(e){setTimeout(function(){throw e})}function _l(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),hr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);hr(n)}function Cn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ps(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Lt=Math.random().toString(36).slice(2),Ke="__reactFiber$"+Lt,xr="__reactProps$"+Lt,un="__reactContainer$"+Lt,pi="__reactEvents$"+Lt,Np="__reactListeners$"+Lt,zp="__reactHandles$"+Lt;function Hn(e){var n=e[Ke];if(n)return n;for(var t=e.parentNode;t;){if(n=t[un]||t[Ke]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ps(e);e!==null;){if(t=e[Ke])return t;e=ps(e)}return n}e=t,t=e.parentNode}return null}function _r(e){return e=e[Ke]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ft(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function el(e){return e[xr]||null}var hi=[],pt=-1;function Rn(e){return{current:e}}function H(e){0>pt||(e.current=hi[pt],hi[pt]=null,pt--)}function B(e,n){pt++,hi[pt]=e.current,e.current=n}var Tn={},fe=Rn(Tn),xe=Rn(!1),Xn=Tn;function Ot(e,n){var t=e.type.contextTypes;if(!t)return Tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in t)o[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function be(e){return e=e.childContextTypes,e!=null}function jo(){H(xe),H(fe)}function hs(e,n,t){if(fe.current!==Tn)throw Error(w(168));B(fe,n),B(xe,t)}function dc(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(w(108,pf(e)||"Unknown",o));return Y({},t,r)}function To(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tn,Xn=fe.current,B(fe,e),B(xe,xe.current),!0}function ms(e,n,t){var r=e.stateNode;if(!r)throw Error(w(169));t?(e=dc(e,n,Xn),r.__reactInternalMemoizedMergedChildContext=e,H(xe),H(fe),B(fe,e)):H(xe),B(xe,t)}var tn=null,nl=!1,jl=!1;function fc(e){tn===null?tn=[e]:tn.push(e)}function _p(e){nl=!0,fc(e)}function Dn(){if(!jl&&tn!==null){jl=!0;var e=0,n=U;try{var t=tn;for(U=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}tn=null,nl=!1}catch(o){throw tn!==null&&(tn=tn.slice(e+1)),Au(Xi,Dn),o}finally{U=n,jl=!1}}return null}var ht=[],mt=0,Mo=null,Lo=0,_e=[],je=0,Yn=null,rn=1,on="";function Bn(e,n){ht[mt++]=Lo,ht[mt++]=Mo,Mo=e,Lo=n}function pc(e,n,t){_e[je++]=rn,_e[je++]=on,_e[je++]=Yn,Yn=e;var r=rn;e=on;var o=32-Be(r)-1;r&=~(1<<o),t+=1;var l=32-Be(n)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,rn=1<<32-Be(n)+o|t<<o|r,on=l+e}else rn=1<<l|t<<o|r,on=e}function oa(e){e.return!==null&&(Bn(e,1),pc(e,1,0))}function la(e){for(;e===Mo;)Mo=ht[--mt],ht[mt]=null,Lo=ht[--mt],ht[mt]=null;for(;e===Yn;)Yn=_e[--je],_e[je]=null,on=_e[--je],_e[je]=null,rn=_e[--je],_e[je]=null}var Oe=null,Ce=null,Q=!1,$e=null;function hc(e,n){var t=Te(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function vs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Oe=e,Ce=Cn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Oe=e,Ce=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Yn!==null?{id:rn,overflow:on}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Te(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Oe=e,Ce=null,!0):!1;default:return!1}}function mi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vi(e){if(Q){var n=Ce;if(n){var t=n;if(!vs(e,n)){if(mi(e))throw Error(w(418));n=Cn(t.nextSibling);var r=Oe;n&&vs(e,n)?hc(r,t):(e.flags=e.flags&-4097|2,Q=!1,Oe=e)}}else{if(mi(e))throw Error(w(418));e.flags=e.flags&-4097|2,Q=!1,Oe=e}}}function gs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oe=e}function Yr(e){if(e!==Oe)return!1;if(!Q)return gs(e),Q=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!di(e.type,e.memoizedProps)),n&&(n=Ce)){if(mi(e))throw mc(),Error(w(418));for(;n;)hc(e,n),n=Cn(n.nextSibling)}if(gs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ce=Cn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ce=null}}else Ce=Oe?Cn(e.stateNode.nextSibling):null;return!0}function mc(){for(var e=Ce;e;)e=Cn(e.nextSibling)}function Et(){Ce=Oe=null,Q=!1}function ia(e){$e===null?$e=[e]:$e.push(e)}var jp=fn.ReactCurrentBatchConfig;function Wt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(w(309));var r=t.stateNode}if(!r)throw Error(w(147,e));var o=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},n._stringRef=l,n)}if(typeof e!="string")throw Error(w(284));if(!t._owner)throw Error(w(290,e))}return e}function Gr(e,n){throw e=Object.prototype.toString.call(n),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ys(e){var n=e._init;return n(e._payload)}function vc(e){function n(h,d){if(e){var m=h.deletions;m===null?(h.deletions=[d],h.flags|=16):m.push(d)}}function t(h,d){if(!e)return null;for(;d!==null;)n(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function o(h,d){return h=zn(h,d),h.index=0,h.sibling=null,h}function l(h,d,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<d?(h.flags|=2,d):m):(h.flags|=2,d)):(h.flags|=1048576,d)}function i(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,d,m,b){return d===null||d.tag!==6?(d=Fl(m,h.mode,b),d.return=h,d):(d=o(d,m),d.return=h,d)}function s(h,d,m,b){var P=m.type;return P===st?f(h,d,m.props.children,b,m.key):d!==null&&(d.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===mn&&ys(P)===d.type)?(b=o(d,m.props),b.ref=Wt(h,d,m),b.return=h,b):(b=wo(m.type,m.key,m.props,null,h.mode,b),b.ref=Wt(h,d,m),b.return=h,b)}function u(h,d,m,b){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Il(m,h.mode,b),d.return=h,d):(d=o(d,m.children||[]),d.return=h,d)}function f(h,d,m,b,P){return d===null||d.tag!==7?(d=Kn(m,h.mode,b,P),d.return=h,d):(d=o(d,m),d.return=h,d)}function p(h,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Fl(""+d,h.mode,m),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case $r:return m=wo(d.type,d.key,d.props,null,h.mode,m),m.ref=Wt(h,null,d),m.return=h,m;case at:return d=Il(d,h.mode,m),d.return=h,d;case mn:var b=d._init;return p(h,b(d._payload),m)}if(Yt(d)||$t(d))return d=Kn(d,h.mode,m,null),d.return=h,d;Gr(h,d)}return null}function v(h,d,m,b){var P=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return P!==null?null:a(h,d,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case $r:return m.key===P?s(h,d,m,b):null;case at:return m.key===P?u(h,d,m,b):null;case mn:return P=m._init,v(h,d,P(m._payload),b)}if(Yt(m)||$t(m))return P!==null?null:f(h,d,m,b,null);Gr(h,m)}return null}function x(h,d,m,b,P){if(typeof b=="string"&&b!==""||typeof b=="number")return h=h.get(m)||null,a(d,h,""+b,P);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case $r:return h=h.get(b.key===null?m:b.key)||null,s(d,h,b,P);case at:return h=h.get(b.key===null?m:b.key)||null,u(d,h,b,P);case mn:var C=b._init;return x(h,d,m,C(b._payload),P)}if(Yt(b)||$t(b))return h=h.get(m)||null,f(d,h,b,P,null);Gr(d,b)}return null}function y(h,d,m,b){for(var P=null,C=null,O=d,_=d=0,T=null;O!==null&&_<m.length;_++){O.index>_?(T=O,O=null):T=O.sibling;var D=v(h,O,m[_],b);if(D===null){O===null&&(O=T);break}e&&O&&D.alternate===null&&n(h,O),d=l(D,d,_),C===null?P=D:C.sibling=D,C=D,O=T}if(_===m.length)return t(h,O),Q&&Bn(h,_),P;if(O===null){for(;_<m.length;_++)O=p(h,m[_],b),O!==null&&(d=l(O,d,_),C===null?P=O:C.sibling=O,C=O);return Q&&Bn(h,_),P}for(O=r(h,O);_<m.length;_++)T=x(O,h,_,m[_],b),T!==null&&(e&&T.alternate!==null&&O.delete(T.key===null?_:T.key),d=l(T,d,_),C===null?P=T:C.sibling=T,C=T);return e&&O.forEach(function(ke){return n(h,ke)}),Q&&Bn(h,_),P}function g(h,d,m,b){var P=$t(m);if(typeof P!="function")throw Error(w(150));if(m=P.call(m),m==null)throw Error(w(151));for(var C=P=null,O=d,_=d=0,T=null,D=m.next();O!==null&&!D.done;_++,D=m.next()){O.index>_?(T=O,O=null):T=O.sibling;var ke=v(h,O,D.value,b);if(ke===null){O===null&&(O=T);break}e&&O&&ke.alternate===null&&n(h,O),d=l(ke,d,_),C===null?P=ke:C.sibling=ke,C=ke,O=T}if(D.done)return t(h,O),Q&&Bn(h,_),P;if(O===null){for(;!D.done;_++,D=m.next())D=p(h,D.value,b),D!==null&&(d=l(D,d,_),C===null?P=D:C.sibling=D,C=D);return Q&&Bn(h,_),P}for(O=r(h,O);!D.done;_++,D=m.next())D=x(O,h,_,D.value,b),D!==null&&(e&&D.alternate!==null&&O.delete(D.key===null?_:D.key),d=l(D,d,_),C===null?P=D:C.sibling=D,C=D);return e&&O.forEach(function(In){return n(h,In)}),Q&&Bn(h,_),P}function k(h,d,m,b){if(typeof m=="object"&&m!==null&&m.type===st&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case $r:e:{for(var P=m.key,C=d;C!==null;){if(C.key===P){if(P=m.type,P===st){if(C.tag===7){t(h,C.sibling),d=o(C,m.props.children),d.return=h,h=d;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===mn&&ys(P)===C.type){t(h,C.sibling),d=o(C,m.props),d.ref=Wt(h,C,m),d.return=h,h=d;break e}t(h,C);break}else n(h,C);C=C.sibling}m.type===st?(d=Kn(m.props.children,h.mode,b,m.key),d.return=h,h=d):(b=wo(m.type,m.key,m.props,null,h.mode,b),b.ref=Wt(h,d,m),b.return=h,h=b)}return i(h);case at:e:{for(C=m.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){t(h,d.sibling),d=o(d,m.children||[]),d.return=h,h=d;break e}else{t(h,d);break}else n(h,d);d=d.sibling}d=Il(m,h.mode,b),d.return=h,h=d}return i(h);case mn:return C=m._init,k(h,d,C(m._payload),b)}if(Yt(m))return y(h,d,m,b);if($t(m))return g(h,d,m,b);Gr(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(t(h,d.sibling),d=o(d,m),d.return=h,h=d):(t(h,d),d=Fl(m,h.mode,b),d.return=h,h=d),i(h)):t(h,d)}return k}var Nt=vc(!0),gc=vc(!1),Ro=Rn(null),Do=null,vt=null,aa=null;function sa(){aa=vt=Do=null}function ua(e){var n=Ro.current;H(Ro),e._currentValue=n}function gi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function St(e,n){Do=e,aa=vt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ye=!0),e.firstContext=null)}function Le(e){var n=e._currentValue;if(aa!==e)if(e={context:e,memoizedValue:n,next:null},vt===null){if(Do===null)throw Error(w(308));vt=e,Do.dependencies={lanes:0,firstContext:e}}else vt=vt.next=e;return n}var Wn=null;function ca(e){Wn===null?Wn=[e]:Wn.push(e)}function yc(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,ca(n)):(t.next=o.next,o.next=t),n.interleaved=t,cn(e,r)}function cn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var vn=!1;function da(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function an(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function On(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,cn(e,t)}return o=r.interleaved,o===null?(n.next=n,ca(r)):(n.next=o.next,o.next=n),r.interleaved=n,cn(e,t)}function mo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Yi(e,t)}}function xs(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?o=l=i:l=l.next=i,t=t.next}while(t!==null);l===null?o=l=n:l=l.next=n}else o=l=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ao(e,n,t,r){var o=e.updateQueue;vn=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,i===null?l=u:i.next=u,i=s;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==i&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=s))}if(l!==null){var p=o.baseState;i=0,f=u=s=null,a=l;do{var v=a.lane,x=a.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,g=a;switch(v=n,x=t,g.tag){case 1:if(y=g.payload,typeof y=="function"){p=y.call(x,p,v);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=g.payload,v=typeof y=="function"?y.call(x,p,v):y,v==null)break e;p=Y({},p,v);break e;case 2:vn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[a]:v.push(a))}else x={eventTime:x,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=x,s=p):f=f.next=x,i|=v;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;v=a,a=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(!0);if(f===null&&(s=p),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=f,n=o.shared.interleaved,n!==null){o=n;do i|=o.lane,o=o.next;while(o!==n)}else l===null&&(o.shared.lanes=0);Zn|=i,e.lanes=i,e.memoizedState=p}}function bs(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(w(191,o));o.call(r)}}}var jr={},Ze=Rn(jr),br=Rn(jr),wr=Rn(jr);function Vn(e){if(e===jr)throw Error(w(174));return e}function fa(e,n){switch(B(wr,n),B(br,e),B(Ze,jr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Gl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Gl(n,e)}H(Ze),B(Ze,n)}function zt(){H(Ze),H(br),H(wr)}function bc(e){Vn(wr.current);var n=Vn(Ze.current),t=Gl(n,e.type);n!==t&&(B(br,e),B(Ze,t))}function pa(e){br.current===e&&(H(Ze),H(br))}var K=Rn(0);function Fo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Tl=[];function ha(){for(var e=0;e<Tl.length;e++)Tl[e]._workInProgressVersionPrimary=null;Tl.length=0}var vo=fn.ReactCurrentDispatcher,Ml=fn.ReactCurrentBatchConfig,Gn=0,X=null,ee=null,oe=null,Io=!1,lr=!1,kr=0,Tp=0;function ue(){throw Error(w(321))}function ma(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!He(e[t],n[t]))return!1;return!0}function va(e,n,t,r,o,l){if(Gn=l,X=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,vo.current=e===null||e.memoizedState===null?Dp:Ap,e=t(r,o),lr){l=0;do{if(lr=!1,kr=0,25<=l)throw Error(w(301));l+=1,oe=ee=null,n.updateQueue=null,vo.current=Fp,e=t(r,o)}while(lr)}if(vo.current=$o,n=ee!==null&&ee.next!==null,Gn=0,oe=ee=X=null,Io=!1,n)throw Error(w(300));return e}function ga(){var e=kr!==0;return kr=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?X.memoizedState=oe=e:oe=oe.next=e,oe}function Re(){if(ee===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var n=oe===null?X.memoizedState:oe.next;if(n!==null)oe=n,ee=e;else{if(e===null)throw Error(w(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},oe===null?X.memoizedState=oe=e:oe=oe.next=e}return oe}function Sr(e,n){return typeof n=="function"?n(e):n}function Ll(e){var n=Re(),t=n.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var r=ee,o=r.baseQueue,l=t.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,t.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,u=l;do{var f=u.lane;if((Gn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=p,i=r):s=s.next=p,X.lanes|=f,Zn|=f}u=u.next}while(u!==null&&u!==l);s===null?i=r:s.next=a,He(r,n.memoizedState)||(ye=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do l=o.lane,X.lanes|=l,Zn|=l,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Rl(e){var n=Re(),t=n.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,l=n.memoizedState;if(o!==null){t.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);He(l,n.memoizedState)||(ye=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function wc(){}function kc(e,n){var t=X,r=Re(),o=n(),l=!He(r.memoizedState,o);if(l&&(r.memoizedState=o,ye=!0),r=r.queue,ya(Cc.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||oe!==null&&oe.memoizedState.tag&1){if(t.flags|=2048,Pr(9,Pc.bind(null,t,r,o,n),void 0,null),le===null)throw Error(w(349));Gn&30||Sc(t,n,o)}return o}function Sc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=X.updateQueue,n===null?(n={lastEffect:null,stores:null},X.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Pc(e,n,t,r){n.value=t,n.getSnapshot=r,Oc(n)&&Ec(e)}function Cc(e,n,t){return t(function(){Oc(n)&&Ec(e)})}function Oc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!He(e,t)}catch{return!0}}function Ec(e){var n=cn(e,1);n!==null&&qe(n,e,1,-1)}function ws(e){var n=Qe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:e},n.queue=e,e=e.dispatch=Rp.bind(null,X,e),[n.memoizedState,e]}function Pr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=X.updateQueue,n===null?(n={lastEffect:null,stores:null},X.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Nc(){return Re().memoizedState}function go(e,n,t,r){var o=Qe();X.flags|=e,o.memoizedState=Pr(1|n,t,void 0,r===void 0?null:r)}function tl(e,n,t,r){var o=Re();r=r===void 0?null:r;var l=void 0;if(ee!==null){var i=ee.memoizedState;if(l=i.destroy,r!==null&&ma(r,i.deps)){o.memoizedState=Pr(n,t,l,r);return}}X.flags|=e,o.memoizedState=Pr(1|n,t,l,r)}function ks(e,n){return go(8390656,8,e,n)}function ya(e,n){return tl(2048,8,e,n)}function zc(e,n){return tl(4,2,e,n)}function _c(e,n){return tl(4,4,e,n)}function jc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Tc(e,n,t){return t=t!=null?t.concat([e]):null,tl(4,4,jc.bind(null,n,e),t)}function xa(){}function Mc(e,n){var t=Re();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ma(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Lc(e,n){var t=Re();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ma(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Rc(e,n,t){return Gn&21?(He(t,n)||(t=$u(),X.lanes|=t,Zn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=t)}function Mp(e,n){var t=U;U=t!==0&&4>t?t:4,e(!0);var r=Ml.transition;Ml.transition={};try{e(!1),n()}finally{U=t,Ml.transition=r}}function Dc(){return Re().memoizedState}function Lp(e,n,t){var r=Nn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ac(e))Fc(n,t);else if(t=yc(e,n,t,r),t!==null){var o=he();qe(t,e,r,o),Ic(t,n,r)}}function Rp(e,n,t){var r=Nn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ac(e))Fc(n,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var i=n.lastRenderedState,a=l(i,t);if(o.hasEagerState=!0,o.eagerState=a,He(a,i)){var s=n.interleaved;s===null?(o.next=o,ca(n)):(o.next=s.next,s.next=o),n.interleaved=o;return}}catch{}finally{}t=yc(e,n,o,r),t!==null&&(o=he(),qe(t,e,r,o),Ic(t,n,r))}}function Ac(e){var n=e.alternate;return e===X||n!==null&&n===X}function Fc(e,n){lr=Io=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ic(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Yi(e,t)}}var $o={readContext:Le,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Dp={readContext:Le,useCallback:function(e,n){return Qe().memoizedState=[e,n===void 0?null:n],e},useContext:Le,useEffect:ks,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,go(4194308,4,jc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return go(4194308,4,e,n)},useInsertionEffect:function(e,n){return go(4,2,e,n)},useMemo:function(e,n){var t=Qe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Qe();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Lp.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var n=Qe();return e={current:e},n.memoizedState=e},useState:ws,useDebugValue:xa,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=ws(!1),n=e[0];return e=Mp.bind(null,e[1]),Qe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=X,o=Qe();if(Q){if(t===void 0)throw Error(w(407));t=t()}else{if(t=n(),le===null)throw Error(w(349));Gn&30||Sc(r,n,t)}o.memoizedState=t;var l={value:t,getSnapshot:n};return o.queue=l,ks(Cc.bind(null,r,l,e),[e]),r.flags|=2048,Pr(9,Pc.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Qe(),n=le.identifierPrefix;if(Q){var t=on,r=rn;t=(r&~(1<<32-Be(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=kr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Tp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Ap={readContext:Le,useCallback:Mc,useContext:Le,useEffect:ya,useImperativeHandle:Tc,useInsertionEffect:zc,useLayoutEffect:_c,useMemo:Lc,useReducer:Ll,useRef:Nc,useState:function(){return Ll(Sr)},useDebugValue:xa,useDeferredValue:function(e){var n=Re();return Rc(n,ee.memoizedState,e)},useTransition:function(){var e=Ll(Sr)[0],n=Re().memoizedState;return[e,n]},useMutableSource:wc,useSyncExternalStore:kc,useId:Dc,unstable_isNewReconciler:!1},Fp={readContext:Le,useCallback:Mc,useContext:Le,useEffect:ya,useImperativeHandle:Tc,useInsertionEffect:zc,useLayoutEffect:_c,useMemo:Lc,useReducer:Rl,useRef:Nc,useState:function(){return Rl(Sr)},useDebugValue:xa,useDeferredValue:function(e){var n=Re();return ee===null?n.memoizedState=e:Rc(n,ee.memoizedState,e)},useTransition:function(){var e=Rl(Sr)[0],n=Re().memoizedState;return[e,n]},useMutableSource:wc,useSyncExternalStore:kc,useId:Dc,unstable_isNewReconciler:!1};function Fe(e,n){if(e&&e.defaultProps){n=Y({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function yi(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Y({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var rl={isMounted:function(e){return(e=e._reactInternals)?nt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=he(),o=Nn(e),l=an(r,o);l.payload=n,t!=null&&(l.callback=t),n=On(e,l,o),n!==null&&(qe(n,e,o,r),mo(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=he(),o=Nn(e),l=an(r,o);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=On(e,l,o),n!==null&&(qe(n,e,o,r),mo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=he(),r=Nn(e),o=an(t,r);o.tag=2,n!=null&&(o.callback=n),n=On(e,o,r),n!==null&&(qe(n,e,r,t),mo(n,e,r))}};function Ss(e,n,t,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):n.prototype&&n.prototype.isPureReactComponent?!vr(t,r)||!vr(o,l):!0}function $c(e,n,t){var r=!1,o=Tn,l=n.contextType;return typeof l=="object"&&l!==null?l=Le(l):(o=be(n)?Xn:fe.current,r=n.contextTypes,l=(r=r!=null)?Ot(e,o):Tn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=rl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),n}function Ps(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&rl.enqueueReplaceState(n,n.state,null)}function xi(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},da(e);var l=n.contextType;typeof l=="object"&&l!==null?o.context=Le(l):(l=be(n)?Xn:fe.current,o.context=Ot(e,l)),o.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(yi(e,n,l,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&rl.enqueueReplaceState(o,o.state,null),Ao(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function _t(e,n){try{var t="",r=n;do t+=ff(r),r=r.return;while(r);var o=t}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:o,digest:null}}function Dl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function bi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Ip=typeof WeakMap=="function"?WeakMap:Map;function Uc(e,n,t){t=an(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Bo||(Bo=!0,_i=r),bi(e,n)},t}function Bc(e,n,t){t=an(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){bi(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){bi(e,n),typeof r!="function"&&(En===null?En=new Set([this]):En.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Cs(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Ip;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=Jp.bind(null,e,n,t),n.then(e,e))}function Os(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Es(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=an(-1,1),n.tag=2,On(t,n,1))),t.lanes|=1),e)}var $p=fn.ReactCurrentOwner,ye=!1;function pe(e,n,t,r){n.child=e===null?gc(n,null,t,r):Nt(n,e.child,t,r)}function Ns(e,n,t,r,o){t=t.render;var l=n.ref;return St(n,o),r=va(e,n,t,r,l,o),t=ga(),e!==null&&!ye?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,dn(e,n,o)):(Q&&t&&oa(n),n.flags|=1,pe(e,n,r,o),n.child)}function zs(e,n,t,r,o){if(e===null){var l=t.type;return typeof l=="function"&&!Ea(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,qc(e,n,l,r,o)):(e=wo(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(t=t.compare,t=t!==null?t:vr,t(i,r)&&e.ref===n.ref)return dn(e,n,o)}return n.flags|=1,e=zn(l,r),e.ref=n.ref,e.return=n,n.child=e}function qc(e,n,t,r,o){if(e!==null){var l=e.memoizedProps;if(vr(l,r)&&e.ref===n.ref)if(ye=!1,n.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(ye=!0);else return n.lanes=e.lanes,dn(e,n,o)}return wi(e,n,t,r,o)}function Hc(e,n,t){var r=n.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(yt,Pe),Pe|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,B(yt,Pe),Pe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,B(yt,Pe),Pe|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,B(yt,Pe),Pe|=r;return pe(e,n,o,t),n.child}function Wc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function wi(e,n,t,r,o){var l=be(t)?Xn:fe.current;return l=Ot(n,l),St(n,o),t=va(e,n,t,r,l,o),r=ga(),e!==null&&!ye?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,dn(e,n,o)):(Q&&r&&oa(n),n.flags|=1,pe(e,n,t,o),n.child)}function _s(e,n,t,r,o){if(be(t)){var l=!0;To(n)}else l=!1;if(St(n,o),n.stateNode===null)yo(e,n),$c(n,t,r),xi(n,t,r,o),r=!0;else if(e===null){var i=n.stateNode,a=n.memoizedProps;i.props=a;var s=i.context,u=t.contextType;typeof u=="object"&&u!==null?u=Le(u):(u=be(t)?Xn:fe.current,u=Ot(n,u));var f=t.getDerivedStateFromProps,p=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Ps(n,i,r,u),vn=!1;var v=n.memoizedState;i.state=v,Ao(n,r,i,o),s=n.memoizedState,a!==r||v!==s||xe.current||vn?(typeof f=="function"&&(yi(n,t,f,r),s=n.memoizedState),(a=vn||Ss(n,t,a,r,v,s,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),i.props=r,i.state=s,i.context=u,r=a):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,xc(e,n),a=n.memoizedProps,u=n.type===n.elementType?a:Fe(n.type,a),i.props=u,p=n.pendingProps,v=i.context,s=t.contextType,typeof s=="object"&&s!==null?s=Le(s):(s=be(t)?Xn:fe.current,s=Ot(n,s));var x=t.getDerivedStateFromProps;(f=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==p||v!==s)&&Ps(n,i,r,s),vn=!1,v=n.memoizedState,i.state=v,Ao(n,r,i,o);var y=n.memoizedState;a!==p||v!==y||xe.current||vn?(typeof x=="function"&&(yi(n,t,x,r),y=n.memoizedState),(u=vn||Ss(n,t,u,r,v,y,s)||!1)?(f||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,y,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,y,s)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),i.props=r,i.state=y,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),r=!1)}return ki(e,n,t,r,l,o)}function ki(e,n,t,r,o,l){Wc(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return o&&ms(n,t,!1),dn(e,n,l);r=n.stateNode,$p.current=n;var a=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=Nt(n,e.child,null,l),n.child=Nt(n,null,a,l)):pe(e,n,a,l),n.memoizedState=r.state,o&&ms(n,t,!0),n.child}function Vc(e){var n=e.stateNode;n.pendingContext?hs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&hs(e,n.context,!1),fa(e,n.containerInfo)}function js(e,n,t,r,o){return Et(),ia(o),n.flags|=256,pe(e,n,t,r),n.child}var Si={dehydrated:null,treeContext:null,retryLane:0};function Pi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qc(e,n,t){var r=n.pendingProps,o=K.current,l=!1,i=(n.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),B(K,o&1),e===null)return vi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,l?(r=n.mode,l=n.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=il(i,r,0,null),e=Kn(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Pi(t),n.memoizedState=Si,e):ba(n,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Up(e,n,i,r,a,o,t);if(l){l=r.fallback,i=n.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=zn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=zn(a,l):(l=Kn(l,i,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,i=e.child.memoizedState,i=i===null?Pi(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~t,n.memoizedState=Si,r}return l=e.child,e=l.sibling,r=zn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ba(e,n){return n=il({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Zr(e,n,t,r){return r!==null&&ia(r),Nt(n,e.child,null,t),e=ba(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Up(e,n,t,r,o,l,i){if(t)return n.flags&256?(n.flags&=-257,r=Dl(Error(w(422))),Zr(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,o=n.mode,r=il({mode:"visible",children:r.children},o,0,null),l=Kn(l,o,i,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&Nt(n,e.child,null,i),n.child.memoizedState=Pi(i),n.memoizedState=Si,l);if(!(n.mode&1))return Zr(e,n,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(w(419)),r=Dl(l,r,void 0),Zr(e,n,i,r)}if(a=(i&e.childLanes)!==0,ye||a){if(r=le,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,cn(e,o),qe(r,e,o,-1))}return Oa(),r=Dl(Error(w(421))),Zr(e,n,i,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=e0.bind(null,e),o._reactRetry=n,null):(e=l.treeContext,Ce=Cn(o.nextSibling),Oe=n,Q=!0,$e=null,e!==null&&(_e[je++]=rn,_e[je++]=on,_e[je++]=Yn,rn=e.id,on=e.overflow,Yn=n),n=ba(n,r.children),n.flags|=4096,n)}function Ts(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),gi(e.return,n,t)}function Al(e,n,t,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=o)}function Kc(e,n,t){var r=n.pendingProps,o=r.revealOrder,l=r.tail;if(pe(e,n,r.children,t),r=K.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ts(e,t,n);else if(e.tag===19)Ts(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(K,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&Fo(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),Al(n,!1,o,t,l);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&Fo(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Al(n,!0,t,null,l);break;case"together":Al(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function yo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function dn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Zn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(w(153));if(n.child!==null){for(e=n.child,t=zn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=zn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Bp(e,n,t){switch(n.tag){case 3:Vc(n),Et();break;case 5:bc(n);break;case 1:be(n.type)&&To(n);break;case 4:fa(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;B(Ro,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(B(K,K.current&1),n.flags|=128,null):t&n.child.childLanes?Qc(e,n,t):(B(K,K.current&1),e=dn(e,n,t),e!==null?e.sibling:null);B(K,K.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Kc(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(K,K.current),r)break;return null;case 22:case 23:return n.lanes=0,Hc(e,n,t)}return dn(e,n,t)}var Xc,Ci,Yc,Gc;Xc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ci=function(){};Yc=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,Vn(Ze.current);var l=null;switch(t){case"input":o=Ql(e,o),r=Ql(e,r),l=[];break;case"select":o=Y({},o,{value:void 0}),r=Y({},r,{value:void 0}),l=[];break;case"textarea":o=Yl(e,o),r=Yl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=_o)}Zl(t,r);var i;t=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(i in a)a.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ur.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(t||(t={}),t[i]=s[i])}else t||(l||(l=[]),l.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ur.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&q("scroll",e),l||a===s||(l=[])):(l=l||[]).push(u,s))}t&&(l=l||[]).push("style",t);var u=l;(n.updateQueue=u)&&(n.flags|=4)}};Gc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Vt(e,n){if(!Q)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function qp(e,n,t){var r=n.pendingProps;switch(la(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(n),null;case 1:return be(n.type)&&jo(),ce(n),null;case 3:return r=n.stateNode,zt(),H(xe),H(fe),ha(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Yr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,$e!==null&&(Mi($e),$e=null))),Ci(e,n),ce(n),null;case 5:pa(n);var o=Vn(wr.current);if(t=n.type,e!==null&&n.stateNode!=null)Yc(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(w(166));return ce(n),null}if(e=Vn(Ze.current),Yr(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[Ke]=n,r[xr]=l,e=(n.mode&1)!==0,t){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(o=0;o<Zt.length;o++)q(Zt[o],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":Ua(r,l),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},q("invalid",r);break;case"textarea":qa(r,l),q("invalid",r)}Zl(t,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Xr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Xr(r.textContent,a,e),o=["children",""+a]):ur.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&q("scroll",r)}switch(t){case"input":Ur(r),Ba(r,l,!0);break;case"textarea":Ur(r),Ha(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=_o)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[Ke]=n,e[xr]=r,Xc(e,n,!1,!1),n.stateNode=e;e:{switch(i=Jl(t,r),t){case"dialog":q("cancel",e),q("close",e),o=r;break;case"iframe":case"object":case"embed":q("load",e),o=r;break;case"video":case"audio":for(o=0;o<Zt.length;o++)q(Zt[o],e);o=r;break;case"source":q("error",e),o=r;break;case"img":case"image":case"link":q("error",e),q("load",e),o=r;break;case"details":q("toggle",e),o=r;break;case"input":Ua(e,r),o=Ql(e,r),q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Y({},r,{value:void 0}),q("invalid",e);break;case"textarea":qa(e,r),o=Yl(e,r),q("invalid",e);break;default:o=r}Zl(t,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?Nu(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ou(e,s)):l==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&cr(e,s):typeof s=="number"&&cr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(ur.hasOwnProperty(l)?s!=null&&l==="onScroll"&&q("scroll",e):s!=null&&Hi(e,l,s,i))}switch(t){case"input":Ur(e),Ba(e,r,!1);break;case"textarea":Ur(e),Ha(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?xt(e,!!r.multiple,l,!1):r.defaultValue!=null&&xt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=_o)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ce(n),null;case 6:if(e&&n.stateNode!=null)Gc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(w(166));if(t=Vn(wr.current),Vn(Ze.current),Yr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ke]=n,(l=r.nodeValue!==t)&&(e=Oe,e!==null))switch(e.tag){case 3:Xr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xr(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ke]=n,n.stateNode=r}return ce(n),null;case 13:if(H(K),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Ce!==null&&n.mode&1&&!(n.flags&128))mc(),Et(),n.flags|=98560,l=!1;else if(l=Yr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(w(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(w(317));l[Ke]=n}else Et(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ce(n),l=!1}else $e!==null&&(Mi($e),$e=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||K.current&1?ne===0&&(ne=3):Oa())),n.updateQueue!==null&&(n.flags|=4),ce(n),null);case 4:return zt(),Ci(e,n),e===null&&gr(n.stateNode.containerInfo),ce(n),null;case 10:return ua(n.type._context),ce(n),null;case 17:return be(n.type)&&jo(),ce(n),null;case 19:if(H(K),l=n.memoizedState,l===null)return ce(n),null;if(r=(n.flags&128)!==0,i=l.rendering,i===null)if(r)Vt(l,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=Fo(e),i!==null){for(n.flags|=128,Vt(l,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return B(K,K.current&1|2),n.child}e=e.sibling}l.tail!==null&&Z()>jt&&(n.flags|=128,r=!0,Vt(l,!1),n.lanes=4194304)}else{if(!r)if(e=Fo(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Vt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Q)return ce(n),null}else 2*Z()-l.renderingStartTime>jt&&t!==1073741824&&(n.flags|=128,r=!0,Vt(l,!1),n.lanes=4194304);l.isBackwards?(i.sibling=n.child,n.child=i):(t=l.last,t!==null?t.sibling=i:n.child=i,l.last=i)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Z(),n.sibling=null,t=K.current,B(K,r?t&1|2:t&1),n):(ce(n),null);case 22:case 23:return Ca(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Pe&1073741824&&(ce(n),n.subtreeFlags&6&&(n.flags|=8192)):ce(n),null;case 24:return null;case 25:return null}throw Error(w(156,n.tag))}function Hp(e,n){switch(la(n),n.tag){case 1:return be(n.type)&&jo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return zt(),H(xe),H(fe),ha(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return pa(n),null;case 13:if(H(K),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(w(340));Et()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return H(K),null;case 4:return zt(),null;case 10:return ua(n.type._context),null;case 22:case 23:return Ca(),null;case 24:return null;default:return null}}var Jr=!1,de=!1,Wp=typeof WeakSet=="function"?WeakSet:Set,N=null;function gt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){G(e,n,r)}else t.current=null}function Oi(e,n,t){try{t()}catch(r){G(e,n,r)}}var Ms=!1;function Vp(e,n){if(ui=Eo,e=tc(),ra(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var i=0,a=-1,s=-1,u=0,f=0,p=e,v=null;n:for(;;){for(var x;p!==t||o!==0&&p.nodeType!==3||(a=i+o),p!==l||r!==0&&p.nodeType!==3||(s=i+r),p.nodeType===3&&(i+=p.nodeValue.length),(x=p.firstChild)!==null;)v=p,p=x;for(;;){if(p===e)break n;if(v===t&&++u===o&&(a=i),v===l&&++f===r&&(s=i),(x=p.nextSibling)!==null)break;p=v,v=p.parentNode}p=x}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(ci={focusedElem:e,selectionRange:t},Eo=!1,N=n;N!==null;)if(n=N,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,N=e;else for(;N!==null;){n=N;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var g=y.memoizedProps,k=y.memoizedState,h=n.stateNode,d=h.getSnapshotBeforeUpdate(n.elementType===n.type?g:Fe(n.type,g),k);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(b){G(n,n.return,b)}if(e=n.sibling,e!==null){e.return=n.return,N=e;break}N=n.return}return y=Ms,Ms=!1,y}function ir(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Oi(n,t,l)}o=o.next}while(o!==r)}}function ol(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ei(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Zc(e){var n=e.alternate;n!==null&&(e.alternate=null,Zc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ke],delete n[xr],delete n[pi],delete n[Np],delete n[zp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jc(e){return e.tag===5||e.tag===3||e.tag===4}function Ls(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ni(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=_o));else if(r!==4&&(e=e.child,e!==null))for(Ni(e,n,t),e=e.sibling;e!==null;)Ni(e,n,t),e=e.sibling}function zi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zi(e,n,t),e=e.sibling;e!==null;)zi(e,n,t),e=e.sibling}var ie=null,Ie=!1;function pn(e,n,t){for(t=t.child;t!==null;)ed(e,n,t),t=t.sibling}function ed(e,n,t){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Yo,t)}catch{}switch(t.tag){case 5:de||gt(t,n);case 6:var r=ie,o=Ie;ie=null,pn(e,n,t),ie=r,Ie=o,ie!==null&&(Ie?(e=ie,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ie.removeChild(t.stateNode));break;case 18:ie!==null&&(Ie?(e=ie,t=t.stateNode,e.nodeType===8?_l(e.parentNode,t):e.nodeType===1&&_l(e,t),hr(e)):_l(ie,t.stateNode));break;case 4:r=ie,o=Ie,ie=t.stateNode.containerInfo,Ie=!0,pn(e,n,t),ie=r,Ie=o;break;case 0:case 11:case 14:case 15:if(!de&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Oi(t,n,i),o=o.next}while(o!==r)}pn(e,n,t);break;case 1:if(!de&&(gt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){G(t,n,a)}pn(e,n,t);break;case 21:pn(e,n,t);break;case 22:t.mode&1?(de=(r=de)||t.memoizedState!==null,pn(e,n,t),de=r):pn(e,n,t);break;default:pn(e,n,t)}}function Rs(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Wp),n.forEach(function(r){var o=n0.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function De(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var l=e,i=n,a=i;e:for(;a!==null;){switch(a.tag){case 5:ie=a.stateNode,Ie=!1;break e;case 3:ie=a.stateNode.containerInfo,Ie=!0;break e;case 4:ie=a.stateNode.containerInfo,Ie=!0;break e}a=a.return}if(ie===null)throw Error(w(160));ed(l,i,o),ie=null,Ie=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){G(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)nd(n,e),n=n.sibling}function nd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(n,e),Ve(e),r&4){try{ir(3,e,e.return),ol(3,e)}catch(g){G(e,e.return,g)}try{ir(5,e,e.return)}catch(g){G(e,e.return,g)}}break;case 1:De(n,e),Ve(e),r&512&&t!==null&&gt(t,t.return);break;case 5:if(De(n,e),Ve(e),r&512&&t!==null&&gt(t,t.return),e.flags&32){var o=e.stateNode;try{cr(o,"")}catch(g){G(e,e.return,g)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=t!==null?t.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Su(o,l),Jl(a,i);var u=Jl(a,l);for(i=0;i<s.length;i+=2){var f=s[i],p=s[i+1];f==="style"?Nu(o,p):f==="dangerouslySetInnerHTML"?Ou(o,p):f==="children"?cr(o,p):Hi(o,f,p,u)}switch(a){case"input":Kl(o,l);break;case"textarea":Pu(o,l);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?xt(o,!!l.multiple,x,!1):v!==!!l.multiple&&(l.defaultValue!=null?xt(o,!!l.multiple,l.defaultValue,!0):xt(o,!!l.multiple,l.multiple?[]:"",!1))}o[xr]=l}catch(g){G(e,e.return,g)}}break;case 6:if(De(n,e),Ve(e),r&4){if(e.stateNode===null)throw Error(w(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(g){G(e,e.return,g)}}break;case 3:if(De(n,e),Ve(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{hr(n.containerInfo)}catch(g){G(e,e.return,g)}break;case 4:De(n,e),Ve(e);break;case 13:De(n,e),Ve(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Sa=Z())),r&4&&Rs(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(de=(u=de)||f,De(n,e),de=u):De(n,e),Ve(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(N=e,f=e.child;f!==null;){for(p=N=f;N!==null;){switch(v=N,x=v.child,v.tag){case 0:case 11:case 14:case 15:ir(4,v,v.return);break;case 1:gt(v,v.return);var y=v.stateNode;if(typeof y.componentWillUnmount=="function"){r=v,t=v.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(g){G(r,t,g)}}break;case 5:gt(v,v.return);break;case 22:if(v.memoizedState!==null){As(p);continue}}x!==null?(x.return=v,N=x):As(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{o=p.stateNode,u?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=p.stateNode,s=p.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Eu("display",i))}catch(g){G(e,e.return,g)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){G(e,e.return,g)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:De(n,e),Ve(e),r&4&&Rs(e);break;case 21:break;default:De(n,e),Ve(e)}}function Ve(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Jc(t)){var r=t;break e}t=t.return}throw Error(w(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(cr(o,""),r.flags&=-33);var l=Ls(e);zi(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Ls(e);Ni(e,a,i);break;default:throw Error(w(161))}}catch(s){G(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Qp(e,n,t){N=e,td(e)}function td(e,n,t){for(var r=(e.mode&1)!==0;N!==null;){var o=N,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Jr;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||de;a=Jr;var u=de;if(Jr=i,(de=s)&&!u)for(N=o;N!==null;)i=N,s=i.child,i.tag===22&&i.memoizedState!==null?Fs(o):s!==null?(s.return=i,N=s):Fs(o);for(;l!==null;)N=l,td(l),l=l.sibling;N=o,Jr=a,de=u}Ds(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,N=l):Ds(e)}}function Ds(e){for(;N!==null;){var n=N;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:de||ol(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!de)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:Fe(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&bs(n,l,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}bs(n,i,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&hr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}de||n.flags&512&&Ei(n)}catch(v){G(n,n.return,v)}}if(n===e){N=null;break}if(t=n.sibling,t!==null){t.return=n.return,N=t;break}N=n.return}}function As(e){for(;N!==null;){var n=N;if(n===e){N=null;break}var t=n.sibling;if(t!==null){t.return=n.return,N=t;break}N=n.return}}function Fs(e){for(;N!==null;){var n=N;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ol(4,n)}catch(s){G(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(s){G(n,o,s)}}var l=n.return;try{Ei(n)}catch(s){G(n,l,s)}break;case 5:var i=n.return;try{Ei(n)}catch(s){G(n,i,s)}}}catch(s){G(n,n.return,s)}if(n===e){N=null;break}var a=n.sibling;if(a!==null){a.return=n.return,N=a;break}N=n.return}}var Kp=Math.ceil,Uo=fn.ReactCurrentDispatcher,wa=fn.ReactCurrentOwner,Me=fn.ReactCurrentBatchConfig,I=0,le=null,J=null,ae=0,Pe=0,yt=Rn(0),ne=0,Cr=null,Zn=0,ll=0,ka=0,ar=null,ge=null,Sa=0,jt=1/0,nn=null,Bo=!1,_i=null,En=null,eo=!1,bn=null,qo=0,sr=0,ji=null,xo=-1,bo=0;function he(){return I&6?Z():xo!==-1?xo:xo=Z()}function Nn(e){return e.mode&1?I&2&&ae!==0?ae&-ae:jp.transition!==null?(bo===0&&(bo=$u()),bo):(e=U,e!==0||(e=window.event,e=e===void 0?16:Qu(e.type)),e):1}function qe(e,n,t,r){if(50<sr)throw sr=0,ji=null,Error(w(185));Nr(e,t,r),(!(I&2)||e!==le)&&(e===le&&(!(I&2)&&(ll|=t),ne===4&&yn(e,ae)),we(e,r),t===1&&I===0&&!(n.mode&1)&&(jt=Z()+500,nl&&Dn()))}function we(e,n){var t=e.callbackNode;jf(e,n);var r=Oo(e,e===le?ae:0);if(r===0)t!==null&&Qa(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Qa(t),n===1)e.tag===0?_p(Is.bind(null,e)):fc(Is.bind(null,e)),Op(function(){!(I&6)&&Dn()}),t=null;else{switch(Uu(r)){case 1:t=Xi;break;case 4:t=Fu;break;case 16:t=Co;break;case 536870912:t=Iu;break;default:t=Co}t=cd(t,rd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function rd(e,n){if(xo=-1,bo=0,I&6)throw Error(w(327));var t=e.callbackNode;if(Pt()&&e.callbackNode!==t)return null;var r=Oo(e,e===le?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ho(e,r);else{n=r;var o=I;I|=2;var l=ld();(le!==e||ae!==n)&&(nn=null,jt=Z()+500,Qn(e,n));do try{Gp();break}catch(a){od(e,a)}while(!0);sa(),Uo.current=l,I=o,J!==null?n=0:(le=null,ae=0,n=ne)}if(n!==0){if(n===2&&(o=oi(e),o!==0&&(r=o,n=Ti(e,o))),n===1)throw t=Cr,Qn(e,0),yn(e,r),we(e,Z()),t;if(n===6)yn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Xp(o)&&(n=Ho(e,r),n===2&&(l=oi(e),l!==0&&(r=l,n=Ti(e,l))),n===1))throw t=Cr,Qn(e,0),yn(e,r),we(e,Z()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(w(345));case 2:qn(e,ge,nn);break;case 3:if(yn(e,r),(r&130023424)===r&&(n=Sa+500-Z(),10<n)){if(Oo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=fi(qn.bind(null,e,ge,nn),n);break}qn(e,ge,nn);break;case 4:if(yn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var i=31-Be(r);l=1<<i,i=n[i],i>o&&(o=i),r&=~l}if(r=o,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Kp(r/1960))-r,10<r){e.timeoutHandle=fi(qn.bind(null,e,ge,nn),r);break}qn(e,ge,nn);break;case 5:qn(e,ge,nn);break;default:throw Error(w(329))}}}return we(e,Z()),e.callbackNode===t?rd.bind(null,e):null}function Ti(e,n){var t=ar;return e.current.memoizedState.isDehydrated&&(Qn(e,n).flags|=256),e=Ho(e,n),e!==2&&(n=ge,ge=t,n!==null&&Mi(n)),e}function Mi(e){ge===null?ge=e:ge.push.apply(ge,e)}function Xp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],l=o.getSnapshot;o=o.value;try{if(!He(l(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function yn(e,n){for(n&=~ka,n&=~ll,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Be(n),r=1<<t;e[t]=-1,n&=~r}}function Is(e){if(I&6)throw Error(w(327));Pt();var n=Oo(e,0);if(!(n&1))return we(e,Z()),null;var t=Ho(e,n);if(e.tag!==0&&t===2){var r=oi(e);r!==0&&(n=r,t=Ti(e,r))}if(t===1)throw t=Cr,Qn(e,0),yn(e,n),we(e,Z()),t;if(t===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,qn(e,ge,nn),we(e,Z()),null}function Pa(e,n){var t=I;I|=1;try{return e(n)}finally{I=t,I===0&&(jt=Z()+500,nl&&Dn())}}function Jn(e){bn!==null&&bn.tag===0&&!(I&6)&&Pt();var n=I;I|=1;var t=Me.transition,r=U;try{if(Me.transition=null,U=1,e)return e()}finally{U=r,Me.transition=t,I=n,!(I&6)&&Dn()}}function Ca(){Pe=yt.current,H(yt)}function Qn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Cp(t)),J!==null)for(t=J.return;t!==null;){var r=t;switch(la(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jo();break;case 3:zt(),H(xe),H(fe),ha();break;case 5:pa(r);break;case 4:zt();break;case 13:H(K);break;case 19:H(K);break;case 10:ua(r.type._context);break;case 22:case 23:Ca()}t=t.return}if(le=e,J=e=zn(e.current,null),ae=Pe=n,ne=0,Cr=null,ka=ll=Zn=0,ge=ar=null,Wn!==null){for(n=0;n<Wn.length;n++)if(t=Wn[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,l=t.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}t.pending=r}Wn=null}return e}function od(e,n){do{var t=J;try{if(sa(),vo.current=$o,Io){for(var r=X.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Io=!1}if(Gn=0,oe=ee=X=null,lr=!1,kr=0,wa.current=null,t===null||t.return===null){ne=1,Cr=n,J=null;break}e:{var l=e,i=t.return,a=t,s=n;if(n=ae,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=Os(i);if(x!==null){x.flags&=-257,Es(x,i,a,l,n),x.mode&1&&Cs(l,u,n),n=x,s=u;var y=n.updateQueue;if(y===null){var g=new Set;g.add(s),n.updateQueue=g}else y.add(s);break e}else{if(!(n&1)){Cs(l,u,n),Oa();break e}s=Error(w(426))}}else if(Q&&a.mode&1){var k=Os(i);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Es(k,i,a,l,n),ia(_t(s,a));break e}}l=s=_t(s,a),ne!==4&&(ne=2),ar===null?ar=[l]:ar.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var h=Uc(l,s,n);xs(l,h);break e;case 1:a=s;var d=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(En===null||!En.has(m)))){l.flags|=65536,n&=-n,l.lanes|=n;var b=Bc(l,a,n);xs(l,b);break e}}l=l.return}while(l!==null)}ad(t)}catch(P){n=P,J===t&&t!==null&&(J=t=t.return);continue}break}while(!0)}function ld(){var e=Uo.current;return Uo.current=$o,e===null?$o:e}function Oa(){(ne===0||ne===3||ne===2)&&(ne=4),le===null||!(Zn&268435455)&&!(ll&268435455)||yn(le,ae)}function Ho(e,n){var t=I;I|=2;var r=ld();(le!==e||ae!==n)&&(nn=null,Qn(e,n));do try{Yp();break}catch(o){od(e,o)}while(!0);if(sa(),I=t,Uo.current=r,J!==null)throw Error(w(261));return le=null,ae=0,ne}function Yp(){for(;J!==null;)id(J)}function Gp(){for(;J!==null&&!kf();)id(J)}function id(e){var n=ud(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,n===null?ad(e):J=n,wa.current=null}function ad(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Hp(t,n),t!==null){t.flags&=32767,J=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,J=null;return}}else if(t=qp(t,n,Pe),t!==null){J=t;return}if(n=n.sibling,n!==null){J=n;return}J=n=e}while(n!==null);ne===0&&(ne=5)}function qn(e,n,t){var r=U,o=Me.transition;try{Me.transition=null,U=1,Zp(e,n,t,r)}finally{Me.transition=o,U=r}return null}function Zp(e,n,t,r){do Pt();while(bn!==null);if(I&6)throw Error(w(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Tf(e,l),e===le&&(J=le=null,ae=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||eo||(eo=!0,cd(Co,function(){return Pt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Me.transition,Me.transition=null;var i=U;U=1;var a=I;I|=4,wa.current=null,Vp(e,t),nd(t,e),yp(ci),Eo=!!ui,ci=ui=null,e.current=t,Qp(t),Sf(),I=a,U=i,Me.transition=l}else e.current=t;if(eo&&(eo=!1,bn=e,qo=o),l=e.pendingLanes,l===0&&(En=null),Of(t.stateNode),we(e,Z()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(Bo)throw Bo=!1,e=_i,_i=null,e;return qo&1&&e.tag!==0&&Pt(),l=e.pendingLanes,l&1?e===ji?sr++:(sr=0,ji=e):sr=0,Dn(),null}function Pt(){if(bn!==null){var e=Uu(qo),n=Me.transition,t=U;try{if(Me.transition=null,U=16>e?16:e,bn===null)var r=!1;else{if(e=bn,bn=null,qo=0,I&6)throw Error(w(331));var o=I;for(I|=4,N=e.current;N!==null;){var l=N,i=l.child;if(N.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(N=u;N!==null;){var f=N;switch(f.tag){case 0:case 11:case 15:ir(8,f,l)}var p=f.child;if(p!==null)p.return=f,N=p;else for(;N!==null;){f=N;var v=f.sibling,x=f.return;if(Zc(f),f===u){N=null;break}if(v!==null){v.return=x,N=v;break}N=x}}}var y=l.alternate;if(y!==null){var g=y.child;if(g!==null){y.child=null;do{var k=g.sibling;g.sibling=null,g=k}while(g!==null)}}N=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,N=i;else e:for(;N!==null;){if(l=N,l.flags&2048)switch(l.tag){case 0:case 11:case 15:ir(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,N=h;break e}N=l.return}}var d=e.current;for(N=d;N!==null;){i=N;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,N=m;else e:for(i=d;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ol(9,a)}}catch(P){G(a,a.return,P)}if(a===i){N=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,N=b;break e}N=a.return}}if(I=o,Dn(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Yo,e)}catch{}r=!0}return r}finally{U=t,Me.transition=n}}return!1}function $s(e,n,t){n=_t(t,n),n=Uc(e,n,1),e=On(e,n,1),n=he(),e!==null&&(Nr(e,1,n),we(e,n))}function G(e,n,t){if(e.tag===3)$s(e,e,t);else for(;n!==null;){if(n.tag===3){$s(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(En===null||!En.has(r))){e=_t(t,e),e=Bc(n,e,1),n=On(n,e,1),e=he(),n!==null&&(Nr(n,1,e),we(n,e));break}}n=n.return}}function Jp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=he(),e.pingedLanes|=e.suspendedLanes&t,le===e&&(ae&t)===t&&(ne===4||ne===3&&(ae&130023424)===ae&&500>Z()-Sa?Qn(e,0):ka|=t),we(e,n)}function sd(e,n){n===0&&(e.mode&1?(n=Hr,Hr<<=1,!(Hr&130023424)&&(Hr=4194304)):n=1);var t=he();e=cn(e,n),e!==null&&(Nr(e,n,t),we(e,t))}function e0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),sd(e,t)}function n0(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(n),sd(e,t)}var ud;ud=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||xe.current)ye=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ye=!1,Bp(e,n,t);ye=!!(e.flags&131072)}else ye=!1,Q&&n.flags&1048576&&pc(n,Lo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;yo(e,n),e=n.pendingProps;var o=Ot(n,fe.current);St(n,t),o=va(null,n,r,e,o,t);var l=ga();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,be(r)?(l=!0,To(n)):l=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,da(n),o.updater=rl,n.stateNode=o,o._reactInternals=n,xi(n,r,e,t),n=ki(null,n,r,!0,l,t)):(n.tag=0,Q&&l&&oa(n),pe(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(yo(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=r0(r),e=Fe(r,e),o){case 0:n=wi(null,n,r,e,t);break e;case 1:n=_s(null,n,r,e,t);break e;case 11:n=Ns(null,n,r,e,t);break e;case 14:n=zs(null,n,r,Fe(r.type,e),t);break e}throw Error(w(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Fe(r,o),wi(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Fe(r,o),_s(e,n,r,o,t);case 3:e:{if(Vc(n),e===null)throw Error(w(387));r=n.pendingProps,l=n.memoizedState,o=l.element,xc(e,n),Ao(n,r,null,t);var i=n.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){o=_t(Error(w(423)),n),n=js(e,n,r,t,o);break e}else if(r!==o){o=_t(Error(w(424)),n),n=js(e,n,r,t,o);break e}else for(Ce=Cn(n.stateNode.containerInfo.firstChild),Oe=n,Q=!0,$e=null,t=gc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Et(),r===o){n=dn(e,n,t);break e}pe(e,n,r,t)}n=n.child}return n;case 5:return bc(n),e===null&&vi(n),r=n.type,o=n.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,di(r,o)?i=null:l!==null&&di(r,l)&&(n.flags|=32),Wc(e,n),pe(e,n,i,t),n.child;case 6:return e===null&&vi(n),null;case 13:return Qc(e,n,t);case 4:return fa(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Nt(n,null,r,t):pe(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Fe(r,o),Ns(e,n,r,o,t);case 7:return pe(e,n,n.pendingProps,t),n.child;case 8:return pe(e,n,n.pendingProps.children,t),n.child;case 12:return pe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,l=n.memoizedProps,i=o.value,B(Ro,r._currentValue),r._currentValue=i,l!==null)if(He(l.value,i)){if(l.children===o.children&&!xe.current){n=dn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=an(-1,t&-t),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),gi(l.return,t,n),a.lanes|=t;break}s=s.next}}else if(l.tag===10)i=l.type===n.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(w(341));i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),gi(i,t,n),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===n){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}pe(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,St(n,t),o=Le(o),r=r(o),n.flags|=1,pe(e,n,r,t),n.child;case 14:return r=n.type,o=Fe(r,n.pendingProps),o=Fe(r.type,o),zs(e,n,r,o,t);case 15:return qc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Fe(r,o),yo(e,n),n.tag=1,be(r)?(e=!0,To(n)):e=!1,St(n,t),$c(n,r,o),xi(n,r,o,t),ki(null,n,r,!0,e,t);case 19:return Kc(e,n,t);case 22:return Hc(e,n,t)}throw Error(w(156,n.tag))};function cd(e,n){return Au(e,n)}function t0(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,n,t,r){return new t0(e,n,t,r)}function Ea(e){return e=e.prototype,!(!e||!e.isReactComponent)}function r0(e){if(typeof e=="function")return Ea(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vi)return 11;if(e===Qi)return 14}return 2}function zn(e,n){var t=e.alternate;return t===null?(t=Te(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function wo(e,n,t,r,o,l){var i=2;if(r=e,typeof e=="function")Ea(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case st:return Kn(t.children,o,l,n);case Wi:i=8,o|=8;break;case ql:return e=Te(12,t,n,o|2),e.elementType=ql,e.lanes=l,e;case Hl:return e=Te(13,t,n,o),e.elementType=Hl,e.lanes=l,e;case Wl:return e=Te(19,t,n,o),e.elementType=Wl,e.lanes=l,e;case bu:return il(t,o,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yu:i=10;break e;case xu:i=9;break e;case Vi:i=11;break e;case Qi:i=14;break e;case mn:i=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return n=Te(i,t,n,o),n.elementType=e,n.type=r,n.lanes=l,n}function Kn(e,n,t,r){return e=Te(7,e,r,n),e.lanes=t,e}function il(e,n,t,r){return e=Te(22,e,r,n),e.elementType=bu,e.lanes=t,e.stateNode={isHidden:!1},e}function Fl(e,n,t){return e=Te(6,e,null,n),e.lanes=t,e}function Il(e,n,t){return n=Te(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function o0(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xl(0),this.expirationTimes=xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Na(e,n,t,r,o,l,i,a,s){return e=new o0(e,n,t,a,s),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Te(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},da(l),e}function l0(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:at,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function dd(e){if(!e)return Tn;e=e._reactInternals;e:{if(nt(e)!==e||e.tag!==1)throw Error(w(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(be(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(w(171))}if(e.tag===1){var t=e.type;if(be(t))return dc(e,t,n)}return n}function fd(e,n,t,r,o,l,i,a,s){return e=Na(t,r,!0,e,o,l,i,a,s),e.context=dd(null),t=e.current,r=he(),o=Nn(t),l=an(r,o),l.callback=n??null,On(t,l,o),e.current.lanes=o,Nr(e,o,r),we(e,r),e}function al(e,n,t,r){var o=n.current,l=he(),i=Nn(o);return t=dd(t),n.context===null?n.context=t:n.pendingContext=t,n=an(l,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=On(o,n,i),e!==null&&(qe(e,o,i,l),mo(e,o,i)),i}function Wo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Us(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function za(e,n){Us(e,n),(e=e.alternate)&&Us(e,n)}function i0(){return null}var pd=typeof reportError=="function"?reportError:function(e){console.error(e)};function _a(e){this._internalRoot=e}sl.prototype.render=_a.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(w(409));al(e,n,null,null)};sl.prototype.unmount=_a.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Jn(function(){al(null,e,null,null)}),n[un]=null}};function sl(e){this._internalRoot=e}sl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Hu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<gn.length&&n!==0&&n<gn[t].priority;t++);gn.splice(t,0,e),t===0&&Vu(e)}};function ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bs(){}function a0(e,n,t,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var u=Wo(i);l.call(u)}}var i=fd(n,r,e,0,null,!1,!1,"",Bs);return e._reactRootContainer=i,e[un]=i.current,gr(e.nodeType===8?e.parentNode:e),Jn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Wo(s);a.call(u)}}var s=Na(e,0,!1,null,null,!1,!1,"",Bs);return e._reactRootContainer=s,e[un]=s.current,gr(e.nodeType===8?e.parentNode:e),Jn(function(){al(n,s,t,r)}),s}function cl(e,n,t,r,o){var l=t._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=Wo(i);a.call(s)}}al(n,i,e,o)}else i=a0(t,n,e,o,r);return Wo(i)}Bu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Gt(n.pendingLanes);t!==0&&(Yi(n,t|1),we(n,Z()),!(I&6)&&(jt=Z()+500,Dn()))}break;case 13:Jn(function(){var r=cn(e,1);if(r!==null){var o=he();qe(r,e,1,o)}}),za(e,1)}};Gi=function(e){if(e.tag===13){var n=cn(e,134217728);if(n!==null){var t=he();qe(n,e,134217728,t)}za(e,134217728)}};qu=function(e){if(e.tag===13){var n=Nn(e),t=cn(e,n);if(t!==null){var r=he();qe(t,e,n,r)}za(e,n)}};Hu=function(){return U};Wu=function(e,n){var t=U;try{return U=e,n()}finally{U=t}};ni=function(e,n,t){switch(n){case"input":if(Kl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=el(r);if(!o)throw Error(w(90));ku(r),Kl(r,o)}}}break;case"textarea":Pu(e,t);break;case"select":n=t.value,n!=null&&xt(e,!!t.multiple,n,!1)}};ju=Pa;Tu=Jn;var s0={usingClientEntryPoint:!1,Events:[_r,ft,el,zu,_u,Pa]},Qt={findFiberByHostInstance:Hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},u0={bundleType:Qt.bundleType,version:Qt.version,rendererPackageName:Qt.rendererPackageName,rendererConfig:Qt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ru(e),e===null?null:e.stateNode},findFiberByHostInstance:Qt.findFiberByHostInstance||i0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{Yo=no.inject(u0),Ge=no}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s0;Ne.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ja(n))throw Error(w(200));return l0(e,n,null,t)};Ne.createRoot=function(e,n){if(!ja(e))throw Error(w(299));var t=!1,r="",o=pd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=Na(e,1,!1,null,null,t,!1,r,o),e[un]=n.current,gr(e.nodeType===8?e.parentNode:e),new _a(n)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Ru(n),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return Jn(e)};Ne.hydrate=function(e,n,t){if(!ul(n))throw Error(w(200));return cl(null,e,n,!0,t)};Ne.hydrateRoot=function(e,n,t){if(!ja(e))throw Error(w(405));var r=t!=null&&t.hydratedSources||null,o=!1,l="",i=pd;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=fd(n,null,e,1,t??null,o,!1,l,i),e[un]=n.current,gr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new sl(n)};Ne.render=function(e,n,t){if(!ul(n))throw Error(w(200));return cl(null,e,n,!1,t)};Ne.unmountComponentAtNode=function(e){if(!ul(e))throw Error(w(40));return e._reactRootContainer?(Jn(function(){cl(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1};Ne.unstable_batchedUpdates=Pa;Ne.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ul(t))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return cl(e,n,t,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function hd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hd)}catch(e){console.error(e)}}hd(),hu.exports=Ne;var c0=hu.exports;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vo(){return Vo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Vo.apply(this,arguments)}var wn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(wn||(wn={}));function d0(e){e===void 0&&(e={});let{initialEntries:n=["/"],initialIndex:t,v5Compat:r=!1}=e,o;o=n.map((x,y)=>f(x,typeof x=="string"?null:x.state,y===0?"default":void 0));let l=s(t??o.length-1),i=wn.Pop,a=null;function s(x){return Math.min(Math.max(x,0),o.length-1)}function u(){return o[l]}function f(x,y,g){y===void 0&&(y=null);let k=p0(o?u().pathname:"/",x,y,g);return Ta(k.pathname.charAt(0)==="/","relative pathnames are not supported in memory history: "+JSON.stringify(x)),k}function p(x){return typeof x=="string"?x:Li(x)}return{get index(){return l},get action(){return i},get location(){return u()},createHref:p,createURL(x){return new URL(p(x),"http://localhost")},encodeLocation(x){let y=typeof x=="string"?tt(x):x;return{pathname:y.pathname||"",search:y.search||"",hash:y.hash||""}},push(x,y){i=wn.Push;let g=f(x,y);l+=1,o.splice(l,o.length,g),r&&a&&a({action:i,location:g,delta:1})},replace(x,y){i=wn.Replace;let g=f(x,y);o[l]=g,r&&a&&a({action:i,location:g,delta:0})},go(x){i=wn.Pop;let y=s(l+x),g=o[y];l=y,a&&a({action:i,location:g,delta:x})},listen(x){return a=x,()=>{a=null}}}}function te(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Ta(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function f0(){return Math.random().toString(36).substr(2,8)}function p0(e,n,t,r){return t===void 0&&(t=null),Vo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?tt(n):n,{state:t,key:n&&n.key||r||f0()})}function Li(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function tt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}var qs;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(qs||(qs={}));function h0(e,n,t){return t===void 0&&(t="/"),m0(e,n,t,!1)}function m0(e,n,t,r){let o=typeof n=="string"?tt(n):n,l=Ma(o.pathname||"/",t);if(l==null)return null;let i=md(e);v0(i);let a=null;for(let s=0;a==null&&s<i.length;++s){let u=E0(l);a=C0(i[s],u,r)}return a}function md(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(l,i,a)=>{let s={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};s.relativePath.startsWith("/")&&(te(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=_n([r,s.relativePath]),f=t.concat(s);l.children&&l.children.length>0&&(te(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),md(l.children,n,f,u)),!(l.path==null&&!l.index)&&n.push({path:u,score:S0(u,l.index),routesMeta:f})};return e.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,i);else for(let s of vd(l.path))o(l,i,s)}),n}function vd(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=vd(r.join("/")),a=[];return a.push(...i.map(s=>s===""?l:[l,s].join("/"))),o&&a.push(...i),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function v0(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:P0(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const g0=/^:[\w-]+$/,y0=3,x0=2,b0=1,w0=10,k0=-2,Hs=e=>e==="*";function S0(e,n){let t=e.split("/"),r=t.length;return t.some(Hs)&&(r+=k0),n&&(r+=x0),t.filter(o=>!Hs(o)).reduce((o,l)=>o+(g0.test(l)?y0:l===""?b0:w0),r)}function P0(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function C0(e,n,t){let{routesMeta:r}=e,o={},l="/",i=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,f=l==="/"?n:n.slice(l.length)||"/",p=Ws({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},f),v=s.route;if(!p&&u&&t&&!r[r.length-1].route.index&&(p=Ws({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},f)),!p)return null;Object.assign(o,p.params),i.push({params:o,pathname:_n([l,p.pathname]),pathnameBase:j0(_n([l,p.pathnameBase])),route:v}),p.pathnameBase!=="/"&&(l=_n([l,p.pathnameBase]))}return i}function Ws(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=O0(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,f,p)=>{let{paramName:v,isOptional:x}=f;if(v==="*"){let g=a[p]||"";i=l.slice(0,l.length-g.length).replace(/(.)\/+$/,"$1")}const y=a[p];return x&&!y?u[v]=void 0:u[v]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:i,pattern:e}}function O0(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Ta(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function E0(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Ta(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Ma(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function N0(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?tt(e):e;return{pathname:t?t.startsWith("/")?t:z0(t,n):n,search:T0(r),hash:M0(o)}}function z0(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function $l(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _0(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function gd(e,n){let t=_0(e);return n?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function yd(e,n,t,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=tt(e):(o=Vo({},e),te(!o.pathname||!o.pathname.includes("?"),$l("?","pathname","search",o)),te(!o.pathname||!o.pathname.includes("#"),$l("#","pathname","hash",o)),te(!o.search||!o.search.includes("#"),$l("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,a;if(i==null)a=t;else{let p=n.length-1;if(!r&&i.startsWith("..")){let v=i.split("/");for(;v[0]==="..";)v.shift(),p-=1;o.pathname=v.join("/")}a=p>=0?n[p]:"/"}let s=N0(o,a),u=i&&i!=="/"&&i.endsWith("/"),f=(l||i===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const _n=e=>e.join("/").replace(/\/\/+/g,"/"),j0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),T0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,M0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function L0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const xd=["post","put","patch","delete"];new Set(xd);const R0=["get",...xd];new Set(R0);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Or(){return Or=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Or.apply(this,arguments)}const La=S.createContext(null),D0=S.createContext(null),rt=S.createContext(null),dl=S.createContext(null),An=S.createContext({outlet:null,matches:[],isDataRoute:!1}),bd=S.createContext(null);function A0(e,n){let{relative:t}=n===void 0?{}:n;Tr()||te(!1);let{basename:r,navigator:o}=S.useContext(rt),{hash:l,pathname:i,search:a}=kd(e,{relative:t}),s=i;return r!=="/"&&(s=i==="/"?r:_n([r,i])),o.createHref({pathname:s,search:a,hash:l})}function Tr(){return S.useContext(dl)!=null}function Fn(){return Tr()||te(!1),S.useContext(dl).location}function wd(e){S.useContext(rt).static||S.useLayoutEffect(e)}function ot(){let{isDataRoute:e}=S.useContext(An);return e?Z0():F0()}function F0(){Tr()||te(!1);let e=S.useContext(La),{basename:n,future:t,navigator:r}=S.useContext(rt),{matches:o}=S.useContext(An),{pathname:l}=Fn(),i=JSON.stringify(gd(o,t.v7_relativeSplatPath)),a=S.useRef(!1);return wd(()=>{a.current=!0}),S.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let p=yd(u,JSON.parse(i),l,f.relative==="path");e==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:_n([n,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[n,r,i,l,e])}const I0=S.createContext(null);function $0(e){let n=S.useContext(An).outlet;return n&&S.createElement(I0.Provider,{value:e},n)}function kd(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=S.useContext(rt),{matches:o}=S.useContext(An),{pathname:l}=Fn(),i=JSON.stringify(gd(o,r.v7_relativeSplatPath));return S.useMemo(()=>yd(e,JSON.parse(i),l,t==="path"),[e,i,l,t])}function U0(e,n){return B0(e,n)}function B0(e,n,t,r){Tr()||te(!1);let{navigator:o}=S.useContext(rt),{matches:l}=S.useContext(An),i=l[l.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let u=Fn(),f;if(n){var p;let k=typeof n=="string"?tt(n):n;s==="/"||(p=k.pathname)!=null&&p.startsWith(s)||te(!1),f=k}else f=u;let v=f.pathname||"/",x=v;if(s!=="/"){let k=s.replace(/^\//,"").split("/");x="/"+v.replace(/^\//,"").split("/").slice(k.length).join("/")}let y=h0(e,{pathname:x}),g=Q0(y&&y.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:_n([s,o.encodeLocation?o.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?s:_n([s,o.encodeLocation?o.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),l,t,r);return n&&g?S.createElement(dl.Provider,{value:{location:Or({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:wn.Pop}},g):g}function q0(){let e=G0(),n=L0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},n),t?S.createElement("pre",{style:o},t):null,null)}const H0=S.createElement(q0,null);class W0 extends S.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?S.createElement(An.Provider,{value:this.props.routeContext},S.createElement(bd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function V0(e){let{routeContext:n,match:t,children:r}=e,o=S.useContext(La);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),S.createElement(An.Provider,{value:n},r)}function Q0(e,n,t,r){var o;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var l;if(!t)return null;if(t.errors)e=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let i=e,a=(o=t)==null?void 0:o.errors;if(a!=null){let f=i.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);f>=0||te(!1),i=i.slice(0,Math.min(i.length,f+1))}let s=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let f=0;f<i.length;f++){let p=i[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=f),p.route.id){let{loaderData:v,errors:x}=t,y=p.route.loader&&v[p.route.id]===void 0&&(!x||x[p.route.id]===void 0);if(p.route.lazy||y){s=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((f,p,v)=>{let x,y=!1,g=null,k=null;t&&(x=a&&p.route.id?a[p.route.id]:void 0,g=p.route.errorElement||H0,s&&(u<0&&v===0?(y=!0,k=null):u===v&&(y=!0,k=p.route.hydrateFallbackElement||null)));let h=n.concat(i.slice(0,v+1)),d=()=>{let m;return x?m=g:y?m=k:p.route.Component?m=S.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=f,S.createElement(V0,{match:p,routeContext:{outlet:f,matches:h,isDataRoute:t!=null},children:m})};return t&&(p.route.ErrorBoundary||p.route.errorElement||v===0)?S.createElement(W0,{location:t.location,revalidation:t.revalidation,component:g,error:x,children:d(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):d()},null)}var Sd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Sd||{}),Qo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Qo||{});function K0(e){let n=S.useContext(La);return n||te(!1),n}function X0(e){let n=S.useContext(D0);return n||te(!1),n}function Y0(e){let n=S.useContext(An);return n||te(!1),n}function Pd(e){let n=Y0(),t=n.matches[n.matches.length-1];return t.route.id||te(!1),t.route.id}function G0(){var e;let n=S.useContext(bd),t=X0(Qo.UseRouteError),r=Pd(Qo.UseRouteError);return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Z0(){let{router:e}=K0(Sd.UseNavigateStable),n=Pd(Qo.UseNavigateStable),t=S.useRef(!1);return wd(()=>{t.current=!0}),S.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Or({fromRouteId:n},l)))},[e,n])}const J0="startTransition",Vs=Zd[J0];function e1(e){let{basename:n,children:t,initialEntries:r,initialIndex:o,future:l}=e,i=S.useRef();i.current==null&&(i.current=d0({initialEntries:r,initialIndex:o,v5Compat:!0}));let a=i.current,[s,u]=S.useState({action:a.action,location:a.location}),{v7_startTransition:f}=l||{},p=S.useCallback(v=>{f&&Vs?Vs(()=>u(v)):u(v)},[u,f]);return S.useLayoutEffect(()=>a.listen(p),[a,p]),S.createElement(n1,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:a,future:l})}function Cd(e){return $0(e.context)}function en(e){te(!1)}function n1(e){let{basename:n="/",children:t=null,location:r,navigationType:o=wn.Pop,navigator:l,static:i=!1,future:a}=e;Tr()&&te(!1);let s=n.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:s,navigator:l,static:i,future:Or({v7_relativeSplatPath:!1},a)}),[s,a,l,i]);typeof r=="string"&&(r=tt(r));let{pathname:f="/",search:p="",hash:v="",state:x=null,key:y="default"}=r,g=S.useMemo(()=>{let k=Ma(f,s);return k==null?null:{location:{pathname:k,search:p,hash:v,state:x,key:y},navigationType:o}},[s,f,p,v,x,y,o]);return g==null?null:S.createElement(rt.Provider,{value:u},S.createElement(dl.Provider,{children:t,value:g}))}function t1(e){let{children:n,location:t}=e;return U0(Ri(n),t)}new Promise(()=>{});function Ri(e,n){n===void 0&&(n=[]);let t=[];return S.Children.forEach(e,(r,o)=>{if(!S.isValidElement(r))return;let l=[...n,o];if(r.type===S.Fragment){t.push.apply(t,Ri(r.props.children,l));return}r.type!==en&&te(!1),!r.props.index||!r.props.children||te(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=Ri(r.props.children,l)),t.push(i)}),t}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Di(){return Di=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Di.apply(this,arguments)}function r1(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function o1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function l1(e,n){return e.button===0&&(!n||n==="_self")&&!o1(e)}const i1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],a1="6";try{window.__reactRouterVersion=a1}catch{}const s1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",u1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xe=S.forwardRef(function(n,t){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:a,target:s,to:u,preventScrollReset:f,unstable_viewTransition:p}=n,v=r1(n,i1),{basename:x}=S.useContext(rt),y,g=!1;if(typeof u=="string"&&u1.test(u)&&(y=u,s1))try{let m=new URL(window.location.href),b=u.startsWith("//")?new URL(m.protocol+u):new URL(u),P=Ma(b.pathname,x);b.origin===m.origin&&P!=null?u=P+b.search+b.hash:g=!0}catch{}let k=A0(u,{relative:o}),h=c1(u,{replace:i,state:a,target:s,preventScrollReset:f,relative:o,unstable_viewTransition:p});function d(m){r&&r(m),m.defaultPrevented||h(m)}return S.createElement("a",Di({},v,{href:y||k,onClick:g||l?r:d,ref:t,target:s}))});var Qs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Qs||(Qs={}));var Ks;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ks||(Ks={}));function c1(e,n){let{target:t,replace:r,state:o,preventScrollReset:l,relative:i,unstable_viewTransition:a}=n===void 0?{}:n,s=ot(),u=Fn(),f=kd(e,{relative:i});return S.useCallback(p=>{if(l1(p,t)){p.preventDefault();let v=r!==void 0?r:Li(u)===Li(f);s(e,{replace:v,state:o,preventScrollReset:l,relative:i,unstable_viewTransition:a})}},[u,s,f,r,o,t,e,l,i,a])}const Rt=({className:e})=>c.jsx("svg",{className:`${e}`,fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M15 5L9.66939 11.2191C9.2842 11.6684 9.2842 12.3316 9.66939 12.7809L15 19",stroke:"#FEFEFE",strokeLinecap:"round",strokeWidth:"1.5"})}),d1=({className:e})=>c.jsx("svg",{className:`${e}`,fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M9 19L14.3306 12.7809C14.7158 12.3316 14.7158 11.6684 14.3306 11.2191L9 5",stroke:"#FEFEFE",strokeLinecap:"round",strokeWidth:"1.5"})}),Ye=({icon:e,title:n})=>c.jsxs("div",{className:"flex  overflow-hidden justify-between p-[10px] bg-[#50505026] mini:w-[80%]",children:[c.jsxs("div",{className:"inline-flex items-center gap-[12px]",children:[e,c.jsx("div",{className:"w-fit mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[18px] whitespace-nowrap",children:n})]}),c.jsx(d1,{className:"!relative !w-[24px] !h-[24px] mini:hidden"})]}),Od=({className:e})=>c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:`${e}`,viewBox:"0 0 1024 1024",children:[c.jsx("path",{fill:"yellow",d:"m161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z"}),c.jsx("path",{fill:"yellow",d:"m161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z"}),c.jsx("path",{fill:"yellow",d:"M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224m0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160"})]}),Mn=({className:e})=>c.jsxs("svg",{width:"64",className:`${e}`,height:"65",viewBox:"0 0 64 65",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M49.5678 22.5137H43.9056C43.2471 22.5137 42.6189 22.2516 42.1808 21.7961L39.8857 19.4017C39.544 19.0455 39.0508 18.8394 38.5356 18.8394C38.0203 18.8394 37.5271 19.0429 37.1855 19.4017L35.2154 21.4577C34.5707 22.1294 33.6449 22.5162 32.6723 22.5162H1.68624C0.804545 24.8394 0.228689 27.2923 0 29.8394H29.253C29.7682 29.8394 30.2586 29.646 30.6141 29.3025L33.3391 26.679C33.678 26.3508 34.1491 26.1651 34.6396 26.1651H34.7525C35.2678 26.1651 35.761 26.3686 36.1026 26.7274L38.3978 29.1218C38.8359 29.5773 39.4613 29.8394 40.1226 29.8394H64C63.7713 27.2923 63.1954 24.8394 62.3137 22.5162H49.5678V22.5137Z",fill:"black"}),c.jsx("path",{d:"M17.9561 46.8366C18.4622 46.8366 18.944 46.627 19.2931 46.2547L21.9698 43.4112C22.3027 43.0554 22.7655 42.8541 23.2473 42.8541H23.3582C23.8643 42.8541 24.3488 43.0747 24.6844 43.4636L26.9389 46.0588C27.3692 46.5525 27.9836 46.8366 28.6332 46.8366H60.418C61.6089 44.3296 62.4804 41.6378 63 38.8219H32.4926C31.8457 38.8219 31.2287 38.5378 30.7983 38.0441L28.5438 35.4489C28.2082 35.0628 27.7238 34.8394 27.2177 34.8394C26.7115 34.8394 26.2271 35.06 25.8915 35.4489L23.9563 37.6773C23.323 38.4054 22.4137 38.8246 21.4583 38.8246H1C1.51964 41.6433 2.39114 44.3323 3.58199 46.8394H17.9561V46.8366Z",fill:"black"}),c.jsx("path",{d:"M40.0967 13.8394C40.6083 13.8394 41.0953 13.6272 41.4483 13.2502L44.1542 10.3716C44.4908 10.0114 44.9586 9.80757 45.4457 9.80757H45.5578C46.0695 9.80757 46.5592 10.0309 46.8985 10.4246L49.1776 13.052C49.6127 13.5518 50.2338 13.8394 50.8904 13.8394H57C51.1804 5.9461 41.9244 0.839355 31.5 0.839355C21.0757 0.839355 11.8196 5.9461 6 13.8394H40.0994H40.0967Z",fill:"black"}),c.jsx("path",{d:"M27.7966 54.7633H19.375C18.7159 54.7633 18.0872 54.4834 17.6487 53.997L15.3517 51.4399C15.0097 51.0595 14.5161 50.8394 14.0005 50.8394C13.4848 50.8394 12.9912 51.0567 12.6493 51.4399L10.6776 53.6356C10.0323 54.3529 9.1058 54.766 8.13237 54.766H8C13.8681 60.9616 22.2208 64.8394 31.5 64.8394C40.7792 64.8394 49.1319 60.9616 55 54.766H27.7966V54.7633Z",fill:"black"})]}),Ed=({className:e})=>c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:`${e}`,viewBox:"0 0 1100 1100",width:"1100",height:"1100",children:c.jsx("path",{fill:"yellow",d:"M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"})}),Nd=({className:e})=>c.jsx("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"512.000000pt",height:"512.000000pt",className:`${e}`,viewBox:"0 0 512.000000 512.000000",children:c.jsxs("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"yellow",stroke:"none",children:[c.jsx("path",{d:`M1650 5109 c-32 -13 -68 -47 -86 -81 -29 -55 -18 -102 121 -517 l135
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
115 46 119 0 0 -25 11 -54 24 -51 21 -55 25 -58 58 l-3 36 -62 3 -63 3 0 -43z`})]})}),zd=()=>{const e=ot(),n=()=>{e("/")};return c.jsx("div",{className:"h-[200vh] grow overflow-y-scroll",children:c.jsx("div",{className:"absolute w-[640px] sidebar:w-[400px] h-[766px] top-[-178px] left-[25px]",children:c.jsxs("div",{className:"flex flex-col w-full items-start gap-[64px] absolute top-[228px] left-0",children:[c.jsx("div",{className:"flex-col gap-[40px] p-[24px] self-stretch w-full flex-[0_0_auto] rounded-[16px] flex items-start relative",children:c.jsxs("div",{className:"flex items-end gap-[8px] relative self-stretch w-full flex-[0_0_auto]",onClick:n,children:[c.jsx(Rt,{className:"!relative !w-[24px] !h-[24px]"}),c.jsx(Mn,{className:"!relative !w-[50px] !h-[50px] bg-white rounded-xl"}),c.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[21.6px] whitespace-nowrap uppercase",children:"Aptos Move"})]})}),c.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full",children:c.jsxs("div",{className:"flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full",children:[c.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full",children:c.jsx(Xe,{to:"/faucets",className:"focus:outline-none",state:{page:"aptos"},children:c.jsx(Ye,{icon:c.jsx(Nd,{className:"!relative !w-[24px] !h-[24px]"}),title:"Faucets"})})}),c.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full",children:c.jsx(Xe,{to:"/account-balance",className:"focus:outline-none",state:{page:"aptos"},children:c.jsx(Ye,{icon:c.jsx(Od,{className:"!relative !w-[24px] !h-[24px]"}),title:"Account Balance"})})}),c.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full",children:c.jsx(Xe,{to:"/your-address",className:"focus:outline-none",state:{page:"aptos"},children:c.jsx(Ye,{icon:c.jsx(Ed,{className:"!relative !w-[24px] !h-[24px]"}),title:"YourAddress"})})}),c.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full",children:c.jsx(Xe,{to:"/deploy",className:"focus:outline-none",state:{page:"aptos"},children:c.jsx(Ye,{icon:c.jsx(Mn,{className:"!relative !w-[24px] !h-[24px]"}),title:"Deploy"})})})]})})]})})})},Dt=({className:e})=>c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:`${e}`,width:"300",height:"300",version:"1.0",viewBox:"0 0 200 200",children:[c.jsx("path",{d:"M83.8 9.5C26.4 20.4-6 78.4 14.4 134c2.5 6.7 7.9 15.9 14 23.6 33.1 42.5 98.2 46 136.7 7.5 38.5-38.5 35-103.6-7.5-136.7-16.8-13.2-32.8-19.1-54.1-19.9-8.1-.3-14.5 0-19.7 1zm29.2 3c36.6 5.5 64.7 31.5 73.7 68.1 2.4 10 2.3 29.7-.1 39.4-8.6 33.6-33 58-66.6 66.6-9.7 2.4-29.4 2.5-39.4.1-26.2-6.5-47.2-22.7-59-45.6-13.3-26-13.7-53.7-1.1-79.8 12.9-26.6 38.1-44.8 68.1-49.2 8.9-1.3 14-1.2 24.4.4z"}),c.jsx("path",{d:"M92.5 18c-2.2 2.4-1.7 6.7 2 18.7 2.6 8.5 4.2 10.2 8.5 8.8 2.2-.7 3.3-3.8 5.7-17.2 2.1-11.7 1.7-12.3-7.7-12.3-5.4 0-7 .4-8.5 2zM71.3 23.3C67.5 25.5 66 27 66 28.6 66 31.1 83.1 49 85.5 49c2.8 0 5.5-2 5.5-4 0-3.6-6.1-21.1-8.1-23.1-2.6-2.6-5.5-2.3-11.6 1.4zM118.1 21.9c-1.1 1.1-3.5 6.8-5.5 12.8l-3.5 10.8 2 1.7c1.2 1 2.9 1.8 3.8 1.8C117 49 135 31 135 28.9c0-2-2.4-4.1-7.7-6.8-5.2-2.6-6.8-2.6-9.2-.2zM50.6 36.9c-3 3-4.7 5.5-4.3 6.4.6 1.6 15.3 11.6 21.1 14.3 3.5 1.7 3.6 1.7 6-.6 2.4-2.1 2.4-2.4 1-5.2-2.7-5.3-10.6-17.3-12.2-18.6-3.2-2.5-6.6-1.4-11.6 3.7zM137.8 34.3c-1.1 1.2-4.4 6.3-7.4 11.2l-5.4 8.9 2.4 2.4c1.7 1.7 3 2.2 4.5 1.7 3.8-1.2 23.1-14.4 23.1-15.8 0-.8-2.2-3.5-5-6.1-5.6-5.2-9-5.9-12.2-2.3zM37.2 47.8c-4.1 4.1-7.4 9.3-6.8 10.7.7 1.9 22.2 12.5 25.2 12.5 2 0 5.4-2.8 5.4-4.5 0-1-6.1-8.5-12.4-15.3-5.3-5.6-8.3-6.5-11.4-3.4zM154 49.2c-4.9 5-14 16.4-14 17.5 0 1.6 3.5 4.3 5.6 4.3 2.9 0 24.3-10.7 25-12.5.6-1.4-2.7-6.6-6.8-10.7-2.7-2.7-6.2-2.2-9.8 1.4zM25.1 66.7C22.5 68.9 20 79.4 21.6 81c1.3 1.3 24.8 3.3 27.8 2.4 2.5-.8 3.6-2.2 3.6-5 0-1.7-2.3-3.3-10.9-7.7-11.7-6.2-13.8-6.6-17-4zM158.8 70.7c-9.9 5.1-10.8 5.9-10.8 8.5 0 4.4 3.1 5.1 17.8 3.9 6.9-.6 13-1.5 13.6-2.1 1.6-1.6-.9-12.1-3.5-14.3-3.2-2.6-5.5-2.1-17.1 4zM69.2 68.7c-.7.3-1.9 1.7-2.7 3.3l-1.4 2.8 36 29.8c19.8 16.5 36.5 30 37.2 30.2 1.9.4 4.6-2 4.9-4.4.2-1.7-7.1-8.3-36-32.3-19.9-16.5-36.3-30.1-36.5-30-.1 0-.8.3-1.5.6zM115.8 79.3c-14.7 10.3-15.7 11.2-14.2 12.8 1.5 1.6 2.4 1.1 15.2-8.3 17.1-12.7 17.7-13.2 16-14.5-1-.8-5.3 1.7-17 10zM122.1 85.2c-7.8 6.1-14 11.6-13.8 12.1.2.6 1 1.5 1.9 2 2.3 1.5 29.3-22 27.7-23.9-.6-.8-1.3-1.4-1.4-1.4-.1 0-6.6 5-14.4 11.2zM21.2 88.6c-1.9 1.3-2.2 2.5-2.2 7.8 0 9.1.5 9.3 14.2 6.1 13-3.1 15.8-4.5 15.8-8 0-2.7-2.2-3.6-14.5-5.5-3.8-.6-7.9-1.3-9.1-1.5-1.1-.3-3 .2-4.2 1.1zM164.5 89.7c-10.4 1.5-12.5 2.4-12.5 5.4 0 2.7 3.3 4.4 14.3 7.4 13.4 3.6 14 3.5 15-4 .7-5.7.6-6.1-1.8-8.3-1.5-1.2-3.1-2.2-3.8-2.1-.7.1-5.7.8-11.2 1.6zM80 104.6c-17 12.3-17.7 13.3-19 25.6-.9 9-2.2 11.2-7.1 11-3.8-.1-10.7 4.2-12 7.6-.5 1.3-1.6 2.3-2.6 2.1-3.9-.3-4.6 0-3.3 1.6 2.5 3.1 4.8 2.7 11.2-1.8 3.5-2.4 6.8-4.2 7.5-4 .6.2 2.7-.3 4.7-1.1 2.7-1.1 4.2-2.7 5.6-5.8 1.1-2.4 2-5.1 2-6 0-.9 1.8-3.8 4-6.3 2.7-3.2 4-5.6 4-7.6 0-3.3 1.4-4.9 12.3-13.6 6.6-5.3 6.8-5.6 5.1-7.4-.9-1-1.8-1.9-1.8-1.9-.1 0-4.8 3.5-10.6 7.6zm-9.2 17.8c.6 2.9-1.5 4.3-3.5 2.4-1.4-1.4-1.4-2-.3-3.3 1.6-1.9 3.4-1.5 3.8.9z"}),c.jsx("path",{d:"M87.9 112.2c-7.6 6-11 9.3-12.5 12.5l-2.1 4.3h2.6c1.9 0 6.1-3 14.9-10.6 6.7-5.8 12-10.9 11.7-11.5-.4-.5-1.4-1.3-2.4-1.9-1.5-.8-3.8.5-12.2 7.2zM146.1 122.7c-2.1 2.6-2.7 4-2 4.9 2.3 2.8-3.2 9.4-6.7 8-1.4-.5-5.4 3.2-7.8 7.2-.8 1.4 1.1 9.3 2.3 9.1.7 0 26.4-30.7 26.9-32 .2-.5-1.9-.9-4.6-.9-4.6 0-5.3.3-8.1 3.7zM146.5 136.8l-13.8 16.6 5.4 4.8c3 2.6 5.7 4.8 6 4.8.5 0 20.5-23.4 26.3-30.8 1.9-2.4 1.9-2.5-.1-4.1-1.2-.9-3.8-3-6-4.8l-3.9-3.2-13.9 16.7zM49.5 124.4c-3.2 1.4-5.5 5.1-5.5 8.9 0 1.5-1.9 3.5-6 6.5-5.8 4.2-6.9 6.2-5.1 9 .6 1 1 1 2.1-.3.7-.8.9-1.5.5-1.5s-.2-.6.5-1.4c.6-.8 1.8-1.2 2.6-.9.8.3 3.4-1.1 5.8-3.1 3.7-3 4.4-4.1 4.3-7-.1-4.9 1.8-6.8 6.7-6.4 3.6.2 4 0 4.7-2.5.7-2.6.6-2.7-3.4-2.7-2.3.1-5.6.7-7.2 1.4zM103.5 138.5c1.9 4.5 1.9 8.5-.1 11.3-3.1 4.5-6.2 2.1-7.1-5.7-.3-2.8-.9-5.1-1.3-5.1s-1.5 1.6-2.5 3.6c-1.6 3.5-1.6 4.9.1 13.1.5 2.5.2 3.3-1.5 4.2-3 1.7-6.5-2-5.7-6 .6-3.3-.4-3.7-2.6-1.2-2.5 2.8-3 5.9-1.8 10.5 2.7 9.9 10.2 15.3 20.6 14.6 5.2-.3 7-.9 10.1-3.5 4.8-3.8 7-7.6 7.8-13.3l.6-4.5-1.6 2.7c-1.6 2.9-5.7 3.9-7.1 1.7-.4-.6-.1-3.5.6-6.5 1.1-4.3 1.1-5.9 0-8.5-1.6-3.7-5.5-8.5-8.1-9.9-1.7-1-1.7-.8-.4 2.5z"})]}),_d=()=>{const e=ot(),n=()=>{e("/")};return c.jsx("div",{className:"h-[200vh] grow overflow-y-scroll",children:c.jsx("div",{className:"absolute w-[640px] sidebar:w-[400px] h-[766px] top-[-178px] left-[25px]",children:c.jsxs("div",{className:"flex flex-col w-full items-start gap-[64px] absolute top-[228px] left-0",children:[c.jsx("div",{className:"flex-col gap-[40px] p-[24px] self-stretch w-full flex-[0_0_auto] rounded-[16px] flex items-start relative",children:c.jsxs("div",{className:"flex items-end gap-[8px] relative self-stretch w-full flex-[0_0_auto]",onClick:n,children:[c.jsx(Rt,{className:"!relative !w-[24px] !h-[24px]"}),c.jsx(Dt,{className:"!relative !w-[50px] !h-[50px] bg-white rounded-xl "}),c.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[30px] text-center tracking-[0] leading-[21.6px] whitespace-nowrap uppercase",children:"Solidity"})]})}),c.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full",children:c.jsxs("div",{className:"flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full",children:[c.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full",children:c.jsx(Xe,{to:"/faucets",className:"focus:outline-none",state:{page:"foundry"},children:c.jsx(Ye,{icon:c.jsx(Nd,{className:"!relative !w-[24px] !h-[24px]"}),title:"Faucets"})})}),c.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full",children:c.jsx(Xe,{to:"/account-balance",className:"focus:outline-none",state:{page:"foundry"},children:c.jsx(Ye,{icon:c.jsx(Od,{className:"!relative !w-[24px] !h-[24px]"}),title:"Account Balance"})})}),c.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full",children:c.jsx(Xe,{to:"/your-address",className:"focus:outline-none",state:{page:"foundry"},children:c.jsx(Ye,{icon:c.jsx(Ed,{className:"!relative !w-[24px] !h-[24px]"}),title:"YourAddress"})})}),c.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full",children:c.jsx(Xe,{to:"/deploy",className:"focus:outline-none",state:{page:"foundry"},children:c.jsx(Ye,{icon:c.jsx(Mn,{className:"!relative !w-[24px] !h-[24px]"}),title:"Deploy"})})})]})})]})})})},f1=({className:e})=>c.jsx("svg",{className:e,viewBox:"0 0 158.96933 125.99213",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("g",{transform:"matrix(1.3333333,0,0,-1.3333333,0,125.99213)",children:c.jsx("g",{children:c.jsx("g",{children:c.jsx("g",{transform:"translate(105.7075,48.4499)",children:c.jsx("path",{d:"m 0,0 c -1.07,0 -2.123,0.164 -3.13,0.485 l -0.127,0.038 c -0.112,0.032 -0.231,0.07 -0.365,0.116 -0.299,0.102 -0.624,0.251 -0.989,0.45 l -0.12,0.065 c -1.332,0.695 -2.518,1.695 -3.43,2.895 -2.786,3.659 -2.778,8.76 0.021,12.407 1.138,1.483 2.653,2.628 4.382,3.311 l 0.171,0.071 c 0.521,0.22 0.901,0.34 1.198,0.378 l 0.327,0.054 c 0.676,0.137 1.369,0.207 2.064,0.207 4.177,0 7.665,1.289 10.087,3.727 2.241,2.256 3.409,5.363 3.379,8.984 V 46.044 H -12.046 V 37.57 c 0,-1.65 -0.005,-3.3 0,-4.95 0.006,-3.336 -1.888,-7.89 -5.359,-9.049 -2.209,-0.738 -4.951,0.364 -7.298,0.094 -1.929,-0.222 -3.799,-0.881 -5.44,-1.918 -3.297,-2.083 -5.525,-5.626 -5.953,-9.502 -0.165,-1.496 -0.072,-2.61 -0.004,-3.425 0.076,-0.908 0.098,-1.181 -0.219,-2.086 -0.625,-1.767 -1.96,-3.409 -3.758,-4.622 -1.798,-1.212 -3.865,-1.879 -5.822,-1.879 l -0.191,0.002 -0.191,-0.002 c -1.957,0 -4.026,0.667 -5.822,1.879 -1.798,1.212 -3.133,2.855 -3.758,4.622 -0.318,0.905 -0.296,1.179 -0.219,2.086 0.067,0.813 0.16,1.928 -0.004,3.425 -0.428,3.876 -2.656,7.418 -5.953,9.502 -1.641,1.037 -3.511,1.696 -5.44,1.918 -2.347,0.27 -5.089,-0.832 -7.299,-0.094 -3.471,1.159 -5.364,5.713 -5.357,9.049 0.004,1.65 0,3.3 0,4.95 v 8.474 h -25.519 V 33.188 c -0.03,-3.621 1.14,-6.728 3.379,-8.984 2.421,-2.439 5.91,-3.727 10.087,-3.727 0.695,0 1.388,-0.07 2.064,-0.207 l 0.327,-0.054 c 0.297,-0.039 0.677,-0.159 1.197,-0.378 l 0.171,-0.071 c 1.73,-0.683 3.245,-1.828 4.382,-3.311 2.8,-3.647 2.808,-8.748 0.022,-12.407 -0.913,-1.2 -2.1,-2.2 -3.431,-2.895 l -0.119,-0.065 c -0.365,-0.199 -0.691,-0.347 -0.99,-0.45 -0.133,-0.046 -0.253,-0.084 -0.364,-0.116 L -89.054,0.485 C -90.061,0.163 -91.114,0 -92.184,0 c -8.089,0 -13.523,-4.97 -13.523,-12.367 0,-5.774 2.635,-8.77 4.845,-10.267 2.697,-1.826 5.95,-2.343 9.064,-2.628 l 0.215,-0.025 c 0.827,-0.107 1.524,-0.277 2.325,-0.564 l 0.386,-0.147 0.066,-0.024 c 2.097,-0.715 3.853,-2.177 4.947,-4.116 0.618,-1.096 1.046,-2.531 1.205,-4.038 0.062,-0.593 0.103,-1.167 0.144,-1.735 0.031,-0.431 0.066,-0.915 0.113,-1.402 V -48.45 h 25.334 v 13.113 c 0,3.37 -1.284,6.639 -3.669,9.022 -0.086,0.086 -0.172,0.169 -0.261,0.253 -0.19,0.177 -0.364,0.328 -0.504,0.447 l -0.087,0.074 c -2.745,2.378 -6.316,2.441 -8.924,2.488 h -0.028 c -0.436,0.008 -0.849,0.016 -1.214,0.034 l -0.392,0.06 -0.838,0.187 -0.79,0.243 -0.852,0.339 c -0.893,0.405 -1.726,0.932 -2.464,1.56 l -0.166,0.143 c -2.361,2.108 -3.532,4.707 -3.58,7.944 0.007,2.313 0.747,4.505 2.141,6.34 1.36,1.788 3.285,3.12 5.423,3.749 2.164,0.636 6.2,0.652 8.146,0.031 3.546,-1.131 6.063,-4.382 6.261,-8.091 0.016,-0.307 0.004,-0.628 -0.009,-1.004 -0.041,-1.088 -0.096,-2.578 0.533,-4.462 1.776,-5.239 6.69,-8.774 12.243,-8.798 5.553,0.025 10.467,3.559 12.243,8.798 0.629,1.882 0.573,3.372 0.533,4.462 -0.013,0.376 -0.025,0.699 -0.009,1.004 0.198,3.709 2.713,6.96 6.261,8.091 1.947,0.621 5.982,0.605 8.146,-0.031 2.137,-0.629 4.064,-1.962 5.422,-3.749 1.395,-1.835 2.135,-4.027 2.142,-6.34 -0.049,-3.237 -1.22,-5.835 -3.58,-7.944 l -0.166,-0.143 c -0.739,-0.627 -1.571,-1.155 -2.464,-1.56 l -0.852,-0.339 -0.79,-0.243 -0.838,-0.187 -0.392,-0.06 c -0.363,-0.018 -0.778,-0.026 -1.214,-0.034 h -0.028 c -2.607,-0.047 -6.179,-0.11 -8.925,-2.488 l -0.086,-0.074 c -0.14,-0.119 -0.315,-0.27 -0.504,-0.447 -0.089,-0.084 -0.175,-0.168 -0.262,-0.253 -2.384,-2.383 -3.668,-5.652 -3.668,-9.022 V -48.45 h 25.334 v 11.137 c 0.047,0.485 0.082,0.971 0.113,1.402 0.041,0.566 0.082,1.141 0.144,1.735 0.159,1.507 0.587,2.942 1.204,4.038 1.093,1.939 2.851,3.401 4.948,4.116 l 0.066,0.024 0.386,0.147 c 0.8,0.286 1.498,0.456 2.324,0.564 l 0.215,0.025 c 3.115,0.285 6.368,0.802 9.065,2.628 2.21,1.497 4.846,4.493 4.846,10.267 C 13.52,-4.97 8.085,0 -0.004,0 Z",style:{fill:"#ffda34",fillOpacity:1,fillRule:"nonzero",stroke:"none"}})})})})})});function p1(){const[e,n]=S.useState(null),t=()=>{n(e==="aptos"?"foundry":"aptos")},r=()=>{switch(e){case"aptos":return c.jsx(zd,{});case"foundry":return c.jsx(_d,{});default:return c.jsxs("div",{className:"flex flex-col items-center justify-center h-full",children:[c.jsx("div",{className:"text-white text-lg sm:text-xl mb-4 text-center",children:"Select a simulator to Start"}),c.jsxs("div",{className:"flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4",children:[c.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1",onClick:()=>n("aptos"),children:c.jsx(Xe,{to:"/aptos",className:"focus:outline-none",children:c.jsx(Ye,{icon:c.jsx(Mn,{className:"!relative !w-[24px] !h-[24px]"}),title:"Aptos"})})}),c.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1",onClick:()=>n("foundry"),children:c.jsx(Xe,{to:"/foundry",className:"focus:outline-none",children:c.jsx(Ye,{icon:c.jsx(Dt,{className:"!relative !w-[24px] !h-[24px]"}),title:"Foundry"})})})]})]})}};return c.jsxs("div",{className:"flex flex-col h-screen bg-[#1e1e1e] text-white",children:[c.jsxs("header",{className:"flex flex-col sm:flex-row items-center p-4 bg-[#252526] border-b border-[#3c3c3c]",children:[c.jsx("div",{className:"flex items-center mb-2 sm:mb-0",children:c.jsxs("a",{href:"https://docs.movementnetwork.xyz/",className:"flex items-center border hover:border-[#646cff] py-2 px-4 rounded transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500",children:[c.jsx(f1,{className:"w-8 h-8 mr-3"}),c.jsx("h1",{className:"text-lg sm:text-xl font-semibold text-white",children:"Movement Simulator"})]})}),e&&c.jsx("button",{className:"mt-2 sm:mt-0 sm:ml-auto px-3 py-1 bg-[#ffffff1a] rounded hover:bg-[#ffffff33] transition-colors",onClick:t})]}),c.jsxs("main",{className:"flex-grow overflow-auto p-4",children:[r(),c.jsx(Cd,{context:{currentPage:e}})]})]})}var jd,Xs=c0;jd=Xs.createRoot,Xs.hydrateRoot;const h1=()=>c.jsx("a",{href:"https://weminallabs.featurebase.app/",className:"absolute bg-blue-500 text-white font-bold py-2 px-4 rounded top-[10px] right-[10px]",children:"Feedback"}),m1=()=>c.jsxs("div",{className:"relative bg-[#0e0f0e] flex flex-col justify-between w-full min-h-screen",children:[c.jsx(Cd,{}),c.jsx(h1,{})]}),v1=()=>{var p;const[e,n]=S.useState(""),[t,r]=S.useState(""),o=v=>{n(v.target.value),console.log(v.target.value)},l=v=>{const x=v.target.value;(x===""||/^\d+$/.test(x))&&r(x===""?"":Number(x))},i=v=>{/[0-9]/.test(v.key)||v.preventDefault()},s=(p=Fn().state)==null?void 0:p.page,u=ot(),f=()=>{u(`/${s}`)};return c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"h-[300vh] grow overflow-y-scroll",children:c.jsx("div",{className:"absolute w-[640px] sidebar:w-[400px] h-[766px] top-[-178px] left-[25px]",children:c.jsxs("div",{className:"flex flex-col w-full items-start gap-[20px] absolute top-[228px] left-0",children:[c.jsxs("div",{className:"flex items-end gap-[8px] relative self-stretch w-full flex-[0_0_auto]",onClick:f,children:[c.jsx(Rt,{className:"!relative !w-[24px] !h-[24px]"}),s==="aptos"?c.jsx(Mn,{className:"!relative !w-[24px] !h-[24px] bg-white rounded-xl"}):c.jsx(Dt,{className:"!relative !w-[24px] !h-[24px] bg-white rounded-xl"}),c.jsxs("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[21.6px] whitespace-nowrap uppercase",children:["Account Balance ",s]})]}),c.jsxs("div",{className:"flex flex-col gap-[24px] my-5 w-full ",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"coin",className:" block text-xl text-white font-semibold mb-2 text-gray-700",children:"Asset Type"}),c.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",value:"Coin",disabled:!0})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"coin",className:" block text-xl text-white font-semibold mb-2 text-gray-700",children:"Coin Type"}),c.jsxs("select",{id:"coin",value:e,onChange:o,className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e]",children:[c.jsx("option",{value:"Move",className:"bg-white text-[#8f8f8f]",children:"Move"}),c.jsx("option",{value:"Aptos",className:"bg-white text-[#8f8f8f]",children:"Aptos"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Balance"}),c.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",max:1e10,onChange:l,onKeyPress:i})]})]})]})})}),c.jsx("div",{children:c.jsx("div",{className:" bg-blue-500 text-white font-bold py-2 px-4 rounded  cursor-pointer self-end",onClick:()=>{u("/deploy")},children:"Deploy"})})]})},g1=({file:e,setFile:n,page:t,setFileName:r})=>{const o=l=>{l.target.files&&l.target.files.length>0?(n(l.target.files[0]),r(l.target.files[0].name.split(".").slice(0,-1).join("."))):n(null)};return c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{className:"block text-white text-xl font-semibold mb-2 text-gray-700",htmlFor:"file",children:"Upload Contract File"}),c.jsx("input",{type:"file",id:"file",className:"w-full py-2 px-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200",onChange:o,accept:t==="aptos"?".move":".sol",required:!0}),e&&c.jsxs("p",{className:"mt-2 text-gray-600",children:["Selected file: ",e.name]})," "]})};function re(e,n){n===void 0&&(n={});var t=n.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",t==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}re(`.react-loading-indicator-normalize,
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
}`);var A=function(){return A=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},A.apply(this,arguments)};function Ko(e){return Ko=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ko(e)}var y1=/^\s+/,x1=/\s+$/;function z(e,n){if(n=n||{},(e=e||"")instanceof z)return e;if(!(this instanceof z))return new z(e,n);var t=function(r){var o={r:0,g:0,b:0},l=1,i=null,a=null,s=null,u=!1,f=!1;typeof r=="string"&&(r=function(y){y=y.replace(y1,"").replace(x1,"").toLowerCase();var g,k=!1;if(Ai[y])y=Ai[y],k=!0;else if(y=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(g=Ae.rgb.exec(y))?{r:g[1],g:g[2],b:g[3]}:(g=Ae.rgba.exec(y))?{r:g[1],g:g[2],b:g[3],a:g[4]}:(g=Ae.hsl.exec(y))?{h:g[1],s:g[2],l:g[3]}:(g=Ae.hsla.exec(y))?{h:g[1],s:g[2],l:g[3],a:g[4]}:(g=Ae.hsv.exec(y))?{h:g[1],s:g[2],v:g[3]}:(g=Ae.hsva.exec(y))?{h:g[1],s:g[2],v:g[3],a:g[4]}:(g=Ae.hex8.exec(y))?{r:Se(g[1]),g:Se(g[2]),b:Se(g[3]),a:nu(g[4]),format:k?"name":"hex8"}:(g=Ae.hex6.exec(y))?{r:Se(g[1]),g:Se(g[2]),b:Se(g[3]),format:k?"name":"hex"}:(g=Ae.hex4.exec(y))?{r:Se(g[1]+""+g[1]),g:Se(g[2]+""+g[2]),b:Se(g[3]+""+g[3]),a:nu(g[4]+""+g[4]),format:k?"name":"hex8"}:(g=Ae.hex3.exec(y))?{r:Se(g[1]+""+g[1]),g:Se(g[2]+""+g[2]),b:Se(g[3]+""+g[3]),format:k?"name":"hex"}:!1}(r)),Ko(r)=="object"&&(Je(r.r)&&Je(r.g)&&Je(r.b)?(p=r.r,v=r.g,x=r.b,o={r:255*V(p,255),g:255*V(v,255),b:255*V(x,255)},u=!0,f=String(r.r).substr(-1)==="%"?"prgb":"rgb"):Je(r.h)&&Je(r.s)&&Je(r.v)?(i=Jt(r.s),a=Jt(r.v),o=function(y,g,k){y=6*V(y,360),g=V(g,100),k=V(k,100);var h=Math.floor(y),d=y-h,m=k*(1-g),b=k*(1-d*g),P=k*(1-(1-d)*g),C=h%6,O=[k,b,m,m,P,k][C],_=[P,k,k,b,m,m][C],T=[m,m,P,k,k,b][C];return{r:255*O,g:255*_,b:255*T}}(r.h,i,a),u=!0,f="hsv"):Je(r.h)&&Je(r.s)&&Je(r.l)&&(i=Jt(r.s),s=Jt(r.l),o=function(y,g,k){var h,d,m;function b(O,_,T){return T<0&&(T+=1),T>1&&(T-=1),T<1/6?O+6*(_-O)*T:T<.5?_:T<2/3?O+(_-O)*(2/3-T)*6:O}if(y=V(y,360),g=V(g,100),k=V(k,100),g===0)h=d=m=k;else{var P=k<.5?k*(1+g):k+g-k*g,C=2*k-P;h=b(C,P,y+1/3),d=b(C,P,y),m=b(C,P,y-1/3)}return{r:255*h,g:255*d,b:255*m}}(r.h,i,s),u=!0,f="hsl"),r.hasOwnProperty("a")&&(l=r.a));var p,v,x;return l=Td(l),{ok:u,format:r.format||f,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:l}}(e);this._originalInput=e,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=n.format||t.format,this._gradientType=n.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}function Ys(e,n,t){e=V(e,255),n=V(n,255),t=V(t,255);var r,o,l=Math.max(e,n,t),i=Math.min(e,n,t),a=(l+i)/2;if(l==i)r=o=0;else{var s=l-i;switch(o=a>.5?s/(2-l-i):s/(l+i),l){case e:r=(n-t)/s+(n<t?6:0);break;case n:r=(t-e)/s+2;break;case t:r=(e-n)/s+4}r/=6}return{h:r,s:o,l:a}}function Gs(e,n,t){e=V(e,255),n=V(n,255),t=V(t,255);var r,o,l=Math.max(e,n,t),i=Math.min(e,n,t),a=l,s=l-i;if(o=l===0?0:s/l,l==i)r=0;else{switch(l){case e:r=(n-t)/s+(n<t?6:0);break;case n:r=(t-e)/s+2;break;case t:r=(e-n)/s+4}r/=6}return{h:r,s:o,v:a}}function Zs(e,n,t,r){var o=[Ue(Math.round(e).toString(16)),Ue(Math.round(n).toString(16)),Ue(Math.round(t).toString(16))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function Js(e,n,t,r){return[Ue(Md(r)),Ue(Math.round(e).toString(16)),Ue(Math.round(n).toString(16)),Ue(Math.round(t).toString(16))].join("")}function b1(e,n){n=n===0?0:n||10;var t=z(e).toHsl();return t.s-=n/100,t.s=fl(t.s),z(t)}function w1(e,n){n=n===0?0:n||10;var t=z(e).toHsl();return t.s+=n/100,t.s=fl(t.s),z(t)}function k1(e){return z(e).desaturate(100)}function S1(e,n){n=n===0?0:n||10;var t=z(e).toHsl();return t.l+=n/100,t.l=fl(t.l),z(t)}function P1(e,n){n=n===0?0:n||10;var t=z(e).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(-n/100*255))),t.g=Math.max(0,Math.min(255,t.g-Math.round(-n/100*255))),t.b=Math.max(0,Math.min(255,t.b-Math.round(-n/100*255))),z(t)}function C1(e,n){n=n===0?0:n||10;var t=z(e).toHsl();return t.l-=n/100,t.l=fl(t.l),z(t)}function O1(e,n){var t=z(e).toHsl(),r=(t.h+n)%360;return t.h=r<0?360+r:r,z(t)}function E1(e){var n=z(e).toHsl();return n.h=(n.h+180)%360,z(n)}function eu(e,n){if(isNaN(n)||n<=0)throw new Error("Argument to polyad must be a positive number");for(var t=z(e).toHsl(),r=[z(e)],o=360/n,l=1;l<n;l++)r.push(z({h:(t.h+l*o)%360,s:t.s,l:t.l}));return r}function N1(e){var n=z(e).toHsl(),t=n.h;return[z(e),z({h:(t+72)%360,s:n.s,l:n.l}),z({h:(t+216)%360,s:n.s,l:n.l})]}function z1(e,n,t){n=n||6,t=t||30;var r=z(e).toHsl(),o=360/t,l=[z(e)];for(r.h=(r.h-(o*n>>1)+720)%360;--n;)r.h=(r.h+o)%360,l.push(z(r));return l}function _1(e,n){n=n||6;for(var t=z(e).toHsv(),r=t.h,o=t.s,l=t.v,i=[],a=1/n;n--;)i.push(z({h:r,s:o,v:l})),l=(l+a)%1;return i}z.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,n,t,r=this.toRgb();return e=r.r/255,n=r.g/255,t=r.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))},setAlpha:function(e){return this._a=Td(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Gs(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Gs(this._r,this._g,this._b),n=Math.round(360*e.h),t=Math.round(100*e.s),r=Math.round(100*e.v);return this._a==1?"hsv("+n+", "+t+"%, "+r+"%)":"hsva("+n+", "+t+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=Ys(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Ys(this._r,this._g,this._b),n=Math.round(360*e.h),t=Math.round(100*e.s),r=Math.round(100*e.l);return this._a==1?"hsl("+n+", "+t+"%, "+r+"%)":"hsla("+n+", "+t+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return Zs(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(n,t,r,o,l){var i=[Ue(Math.round(n).toString(16)),Ue(Math.round(t).toString(16)),Ue(Math.round(r).toString(16)),Ue(Md(o))];return l&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*V(this._r,255))+"%",g:Math.round(100*V(this._g,255))+"%",b:Math.round(100*V(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*V(this._r,255))+"%, "+Math.round(100*V(this._g,255))+"%, "+Math.round(100*V(this._b,255))+"%)":"rgba("+Math.round(100*V(this._r,255))+"%, "+Math.round(100*V(this._g,255))+"%, "+Math.round(100*V(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(j1[Zs(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var n="#"+Js(this._r,this._g,this._b,this._a),t=n,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=z(e);t="#"+Js(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+n+",endColorstr="+t+")"},toString:function(e){var n=!!e;e=e||this._format;var t=!1,r=this._a<1&&this._a>=0;return n||!r||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(t=this.toRgbString()),e==="prgb"&&(t=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(t=this.toHexString()),e==="hex3"&&(t=this.toHexString(!0)),e==="hex4"&&(t=this.toHex8String(!0)),e==="hex8"&&(t=this.toHex8String()),e==="name"&&(t=this.toName()),e==="hsl"&&(t=this.toHslString()),e==="hsv"&&(t=this.toHsvString()),t||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return z(this.toString())},_applyModification:function(e,n){var t=e.apply(null,[this].concat([].slice.call(n)));return this._r=t._r,this._g=t._g,this._b=t._b,this.setAlpha(t._a),this},lighten:function(){return this._applyModification(S1,arguments)},brighten:function(){return this._applyModification(P1,arguments)},darken:function(){return this._applyModification(C1,arguments)},desaturate:function(){return this._applyModification(b1,arguments)},saturate:function(){return this._applyModification(w1,arguments)},greyscale:function(){return this._applyModification(k1,arguments)},spin:function(){return this._applyModification(O1,arguments)},_applyCombination:function(e,n){return e.apply(null,[this].concat([].slice.call(n)))},analogous:function(){return this._applyCombination(z1,arguments)},complement:function(){return this._applyCombination(E1,arguments)},monochromatic:function(){return this._applyCombination(_1,arguments)},splitcomplement:function(){return this._applyCombination(N1,arguments)},triad:function(){return this._applyCombination(eu,[3])},tetrad:function(){return this._applyCombination(eu,[4])}},z.fromRatio=function(e,n){if(Ko(e)=="object"){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=r==="a"?e[r]:Jt(e[r]));e=t}return z(e,n)},z.equals=function(e,n){return!(!e||!n)&&z(e).toRgbString()==z(n).toRgbString()},z.random=function(){return z.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},z.mix=function(e,n,t){t=t===0?0:t||50;var r=z(e).toRgb(),o=z(n).toRgb(),l=t/100;return z({r:(o.r-r.r)*l+r.r,g:(o.g-r.g)*l+r.g,b:(o.b-r.b)*l+r.b,a:(o.a-r.a)*l+r.a})},z.readability=function(e,n){var t=z(e),r=z(n);return(Math.max(t.getLuminance(),r.getLuminance())+.05)/(Math.min(t.getLuminance(),r.getLuminance())+.05)},z.isReadable=function(e,n,t){var r,o,l=z.readability(e,n);switch(o=!1,(r=function(i){var a,s;return a=((i=i||{level:"AA",size:"small"}).level||"AA").toUpperCase(),s=(i.size||"small").toLowerCase(),a!=="AA"&&a!=="AAA"&&(a="AA"),s!=="small"&&s!=="large"&&(s="small"),{level:a,size:s}}(t)).level+r.size){case"AAsmall":case"AAAlarge":o=l>=4.5;break;case"AAlarge":o=l>=3;break;case"AAAsmall":o=l>=7}return o},z.mostReadable=function(e,n,t){var r,o,l,i,a=null,s=0;o=(t=t||{}).includeFallbackColors,l=t.level,i=t.size;for(var u=0;u<n.length;u++)(r=z.readability(e,n[u]))>s&&(s=r,a=z(n[u]));return z.isReadable(e,a,{level:l,size:i})||!o?a:(t.includeFallbackColors=!1,z.mostReadable(e,["#fff","#000"],t))};var Ai=z.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},j1=z.hexNames=function(e){var n={};for(var t in e)e.hasOwnProperty(t)&&(n[e[t]]=t);return n}(Ai);function Td(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function V(e,n){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(e)&&(e="100%");var t=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(e);return e=Math.min(n,Math.max(0,parseFloat(e))),t&&(e=parseInt(e*n,10)/100),Math.abs(e-n)<1e-6?1:e%n/parseFloat(n)}function fl(e){return Math.min(1,Math.max(0,e))}function Se(e){return parseInt(e,16)}function Ue(e){return e.length==1?"0"+e:""+e}function Jt(e){return e<=1&&(e=100*e+"%"),e}function Md(e){return Math.round(255*parseFloat(e)).toString(16)}function nu(e){return Se(e)/255}var hn,to,ro,Ae=(to="[\\s|\\(]+("+(hn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+hn+")[,|\\s]+("+hn+")\\s*\\)?",ro="[\\s|\\(]+("+hn+")[,|\\s]+("+hn+")[,|\\s]+("+hn+")[,|\\s]+("+hn+")\\s*\\)?",{CSS_UNIT:new RegExp(hn),rgb:new RegExp("rgb"+to),rgba:new RegExp("rgba"+ro),hsl:new RegExp("hsl"+to),hsla:new RegExp("hsla"+ro),hsv:new RegExp("hsv"+to),hsva:new RegExp("hsva"+ro),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Je(e){return!!Ae.CSS_UNIT.exec(e)}var Mr=function(e,n){var t=(typeof e=="string"?parseInt(e):e)||0;if(t>=-5&&t<=5){var r=t,o=parseFloat(n),l=o+r*(o/5)*-1;return(l==0||l<=Number.EPSILON)&&(l=.1),{animationPeriod:l+"s"}}return{animationPeriod:n}},Lr=function(e,n){var t=e||{},r="";switch(n){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var o={};if(t.fontSize){var l=t.fontSize;o=function(i,a){var s={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&a.indexOf(u)<0&&(s[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function"){var f=0;for(u=Object.getOwnPropertySymbols(i);f<u.length;f++)a.indexOf(u[f])<0&&Object.prototype.propertyIsEnumerable.call(i,u[f])&&(s[u[f]]=i[u[f]])}return s}(t,["fontSize"]),r=l}return{fontSize:r,styles:o}},T1={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Rr=function(e){var n=e.className,t=e.text,r=e.textColor,o=e.staticText,l=e.style;return t?$.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(n||"").trim(),style:A(A(A({},o&&T1),r&&{color:r,mixBlendMode:"unset"}),l&&l)},typeof t=="string"&&t.length?t:"loading"):null},ln="rgb(50, 205, 50)";function Dr(e,n){n===void 0&&(n=0);var t=[];return function r(o,l){return l===void 0&&(l=0),t.push.apply(t,o),t.length<l&&r(t,l),t.slice(0,l)}(e,n)}re(`.atom-rli-bounding-box {
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
}`);z(ln).toRgb();Array.from({length:4},function(e,n){return"--atom-phase".concat(n+1,"-rgb")});re(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--commet-phase".concat(n+1,"-color")});re(`.OP-annulus-rli-bounding-box {
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
}`);var oo=Array.from({length:4},function(e,n){return"--OP-annulus-phase".concat(n+1,"-color")}),M1=function(e){var n,t=Lr(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,l=e==null?void 0:e.easing,i=Mr(e==null?void 0:e.speedPlus,"1.5s").animationPeriod,a=function(u){var f={},p=oo.length;if(u instanceof Array){for(var v=Dr(u,p),x=0;x<v.length&&!(x>=4);x++)f[oo[x]]=v[x];return f}try{if(typeof u!="string")throw new Error("Color String expected");for(var y=0;y<p;y++)f[oo[y]]=u}catch(g){for(g instanceof Error?console.warn("[".concat(g.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),y=0;y<p;y++)f[oo[y]]=ln}return f}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),s=e!=null&&e.dense?4.3:2.9;return $.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:A(A(A(A(A({},o&&{fontSize:o}),i&&{"--rli-animation-duration":i}),l&&{"--rli-animation-function":l}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},$.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},$.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},$.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:s,strokeMiterlimit:"10"})),$.createElement(Rr,{className:"OP-annulus-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};function Ul(e){return e&&e.Math===Math&&e}re(`.OP-dotted-rli-bounding-box {
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
}`);var it=Ul(typeof window=="object"&&window)||Ul(typeof self=="object"&&self)||Ul(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function Ld(){var e,n;return!((e=it==null?void 0:it.crypto)===null||e===void 0)&&e.randomUUID?it.crypto.randomUUID():!((n=it==null?void 0:it.btoa)===null||n===void 0)&&n.name?it.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var lo=Array.from({length:4},function(e,n){return"--OP-dotted-phase".concat(n+1,"-color")}),L1=function(e){var n,t=Lr(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,l=e==null?void 0:e.easing,i=Mr(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,a=function(u){var f={},p=lo.length;if(u instanceof Array){for(var v=Dr(u,p),x=0;x<v.length&&!(x>=4);x++)f[lo[x]]=v[x];return f}try{if(typeof u!="string")throw new Error("Color String expected");for(var y=0;y<p;y++)f[lo[y]]=u}catch(g){for(g instanceof Error?console.warn("[".concat(g.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),y=0;y<p;y++)f[lo[y]]=ln}return f}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),s=e!=null&&e.dense?16:12;return $.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:A(A(A(A(A({},o&&{fontSize:o}),i&&{"--rli-animation-duration":i}),l&&{"--rli-animation-function":l}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},$.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:s}).map(function(u,f){var p=function(y,g,k){if(g===16){var h=360*y/g,d=g-y,m=Number.parseFloat(k)/g*d*-1;return{transform:"rotate(".concat(h,"deg)"),animationDelay:"".concat(m,"s")}}return{transform:"",animationDelay:""}}(f,s,i),v=p.animationDelay,x=p.transform;return $.createElement("span",{key:Ld(),className:"rli-d-i-b dot-shape-holder",style:x?{transform:x}:void 0},$.createElement("span",{className:"dot",style:v?{animationDelay:v}:void 0}))}),$.createElement(Rr,{className:"OP-dotted-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};re(`.OP-spokes-rli-bounding-box {
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
}`);var io=Array.from({length:4},function(e,n){return"--OP-spokes-phase".concat(n+1,"-color")}),R1=function(e){var n,t=Lr(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,l=e==null?void 0:e.easing,i=Mr(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,a=function(u){var f={},p=io.length;if(u instanceof Array){for(var v=Dr(u,p),x=0;x<v.length&&!(x>=4);x++)f[io[x]]=v[x];return f}try{if(typeof u!="string")throw new Error("Color String expected");for(var y=0;y<p;y++)f[io[y]]=u}catch(g){for(g instanceof Error?console.warn("[".concat(g.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),y=0;y<p;y++)f[io[y]]=ln}return f}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),s=e!=null&&e.dense?16:12;return $.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:A(A(A(A(A({},o&&{fontSize:o}),i&&{"--rli-animation-duration":i}),l&&{"--rli-animation-function":l}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},$.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:s},function(u,f){return $.createElement("span",{key:Ld(),className:"rli-d-i-b spoke",style:D1(f,s,i)})})),$.createElement(Rr,{text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};function D1(e,n,t){if(n===16){var r=n-e,o=Number.parseFloat(t)/n;return{transform:"rotate(".concat(360*e/n,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((r-1)*o*-1,"s")}}}re(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);var ao=Array.from({length:4},function(e,n){return"--OP-annulus-dual-sectors-phase".concat(n+1,"-color")}),A1=function(e){var n,t=Lr(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,l=e==null?void 0:e.easing,i=Mr(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,a=function(u){var f={},p=ao.length;if(u instanceof Array){for(var v=Dr(u,p),x=0;x<v.length&&!(x>=4);x++)f[ao[x]]=v[x];return f}try{if(typeof u!="string")throw new Error("Color String expected");for(var y=0;y<p;y++)f[ao[y]]=u}catch(g){for(g instanceof Error?console.warn("[".concat(g.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),y=0;y<p;y++)f[ao[y]]=ln}return f}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),s=e.dense?"0.45em":"";return $.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:A(A(A(A(A({},o&&{fontSize:o}),i&&{"--rli-animation-duration":i}),l&&{"--rli-animation-function":l}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},$.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},$.createElement("span",{className:"rli-d-i-b annulus-sectors",style:A({},s&&{borderWidth:s})}),$.createElement(Rr,{className:"OP-annulus-dual-sectors-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};re(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);var Kt=Array.from({length:4},function(e,n){return["--OP-annulus-track-phase".concat(n+1,"-color"),"--OP-annulus-sector-phase".concat(n+1,"-color")]}),so=function(e){return e===void 0&&(e=1),.25*e},F1=function(e){var n,t=Lr(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,l=e==null?void 0:e.easing,i=Mr(e==null?void 0:e.speedPlus,"1s").animationPeriod,a=function(u){var f={},p=Kt.length;if(u instanceof Array){for(var v=Dr(u,p),x=0;x<v.length&&!(x>=4);x++){var y=Kt[x];try{if(!(h=z(v[x])).isValid())throw new Error("Invalid Color: ".concat(h.getOriginalInput()));var g=h.setAlpha(so(h.getAlpha())).toRgbString(),k=v[x];f[y[0]]=g,f[y[1]]=k}catch{k=ln,g=(h=z(ln)).setAlpha(so(h.getAlpha())).toRgbString(),f[y[0]]=g,f[y[1]]=k}}return f}try{var h=z(u);if(typeof u!="string")throw new Error("Color String expected");if(!h.isValid())throw new Error("Invalid Color: ".concat(h.getOriginalInput()));k=u,g=h.setAlpha(so(h.getAlpha())).toRgbString();for(var d=0;d<p;d++)f[(y=Kt[d])[0]]=g,f[y[1]]=k}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),k=ln,g=(h=z(ln)).setAlpha(so(h.getAlpha())).toRgbString(),d=0;d<Kt.length;d++)f[(y=Kt[d])[0]]=g,f[y[1]]=k}return f}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),s=e.dense?"0.45em":"";return $.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:A(A(A(A(A({},o&&{fontSize:o}),i&&{"--rli-animation-duration":i}),l&&{"--rli-animation-function":l}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},$.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},$.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:A({},s&&{borderWidth:s})}),$.createElement(Rr,{className:"OP-annulus-sector-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))},I1=function(e){var n=Object(e).variant,t=n===void 0?"disc":n;return t==="dotted"?$.createElement(L1,A({},e)):t==="spokes"?$.createElement(R1,A({},e)):t==="disc"?$.createElement(M1,A({},e)):t==="split-disc"?$.createElement(A1,A({},e)):t==="track-disc"?$.createElement(F1,A({},e)):null};re(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--four-square-phase".concat(n+1,"-color")});re(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--mosaic-phase".concat(n+1,"-color")});re(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--riple-phase".concat(n+1,"-color")});re(`.pulsate-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--TD-pulsate-phase".concat(n+1,"-color")});re(`.brick-stack-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--TD-brick-stack-phase".concat(n+1,"-color")});re(`.bob-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--TD-bob-phase".concat(n+1,"-color")});re(`.bounce-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--TD-bounce-phase".concat(n+1,"-color")});re(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--shape-phase".concat(n+1,"-color")});re(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--trophySpin-phase".concat(n+1,"-color")});re(`.slab-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--slab-phase".concat(n+1,"-color")});re(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--life-line-phase".concat(n+1,"-color")});const $1=()=>{var W;const[e,n]=S.useState(""),[t,r]=S.useState(""),[o,l]=S.useState(""),[i,a]=S.useState(""),[s,u]=S.useState(""),[f,p]=S.useState(""),[v,x]=S.useState(!1),[y,g]=S.useState(""),[k,h]=S.useState(null),[d,m]=S.useState(null),[b,P]=S.useState(""),[C,O]=S.useState("https://mevm.devnet.imola.movementlabs.xyz"),T=(W=Fn().state)==null?void 0:W.page,D=j=>{O(j.target.value),console.log(j.target.value)},ke=j=>{const M=j.target.value;u(""),M.length<=64?n(j.target.value):M.length!==64&&a("Input must be exactly 64 characters long")},In=j=>{/^[0-9a-fA-F]*$/.test(j.key)||(j.preventDefault(),u("Only hexadecimal characters are allowed."))},$n=j=>{const M=j.target.value;a(""),M.length===2&&M==="0x"||M.startsWith("0x")&&/^[0-9a-fA-F]{40}$/.test(M.slice(2))?(r(M),a("")):M.startsWith("0x")?T==="aptos"&&M.startsWith("0x")&&M.length!==66||T==="foundry"&&M.startsWith("0x")&&M.length!==42?a(`${T==="aptos"?"Input must be exactly 66 characters long.":"Input must be exactly 42 characters long."}`):M.length>2&&!/^[0-9a-fA-F]*$/.test(M.slice(2))&&a("Only hexadecimal characters are allowed."):a('Input must start with "0x".')},Ar=j=>{const M=j.currentTarget.value;M.startsWith("0x")?!/^[0-9a-fA-F]*$/.test(j.key)&&j.key!=="Backspace"&&(j.preventDefault(),a('Only hexadecimal characters are allowed after "0x".')):(M.length===0&&j.key!=="0"||M.length===1&&j.key!=="x")&&(j.preventDefault(),a('Input must start with "0x".'))},pl=j=>{const M=j.target.value;p(""),T==="aptos"?M.length===2&&M==="0x"||M.startsWith("0x")&&/^[0-9a-fA-F]{40}$/.test(M.slice(2))?(l(M),p("")):M.startsWith("0x")?M.startsWith("0x")&&M.length!==66?p("Input must be exactly 66 characters long."):M.length>2&&!/^[0-9a-fA-F]*$/.test(M.slice(2))&&p("Only hexadecimal characters are allowed."):p('Input must start with "0x".'):M.length<=64?(l(j.target.value),p("")):M.length!==64&&p("Input must be exactly 64 characters long")},At=j=>{const M=j.currentTarget.value;T==="aptos"?M.startsWith("0x")?/^[0-9a-fA-F]*$/.test(j.key)||(j.preventDefault(),p('Only hexadecimal characters are allowed after "0x".')):(M.length===0&&j.key!=="0"||M.length===1&&j.key!=="x")&&(j.preventDefault(),p('Input must start with "0x".')):/^[0-9a-fA-F]*$/.test(j.key)||(j.preventDefault(),p("Only hexadecimal characters are allowed."))},Ft=j=>{P(j.target.value)},E=async()=>{x(!0),g("");const j="http://3.107.36.227:6666/upload/solidity";try{const M=new FormData;if(k)M.append("file",k);else throw new Error("No file selected for upload");M.append("privateKey",o),M.append("rpcUrl",C),console.log("checknetwork",C,o,C);const We=await fetch(j,{method:"POST",body:M});if(!We.ok)throw new Error("Deployment failed");const It=await We.json();console.log("Deployment successful:",It)}catch(M){console.error("Error during deployment:",M),M instanceof Error?g(t===""||o===""?"Fill in the full information":M.message||"Failed to deploy"):g("An unknown error occurred")}finally{x(!1)}},L=ot(),R=()=>{L(`/${T}`)};return c.jsx(c.Fragment,{children:c.jsx("div",{className:"h-[300vh] grow overflow-y-scroll",children:c.jsx("div",{className:"absolute w-[640px] sidebar:w-[400px] h-[766px] top-[-178px] left-[25px]",children:c.jsxs("div",{className:"flex flex-col w-full items-start gap-[20px] absolute top-[228px] left-0",children:[c.jsxs("div",{className:"flex items-end gap-[8px] relative self-stretch w-full flex-[0_0_auto]",onClick:R,children:[c.jsx(Rt,{className:"!relative !w-[24px] !h-[24px]"}),T==="aptos"?c.jsx(Mn,{className:"!relative !w-[24px] !h-[24px] bg-white rounded-xl"}):c.jsx(Dt,{className:"!relative !w-[24px] !h-[24px] bg-white rounded-xl"}),c.jsxs("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[21.6px] whitespace-nowrap uppercase",children:["Deploy ",T]})]}),c.jsxs("div",{className:"flex flex-col gap-[24px] my-5 w-full ",children:[c.jsx("div",{children:c.jsx(g1,{file:k,setFile:h,page:T,setFileName:m})}),c.jsxs("div",{children:[c.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Wallet Address"}),c.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",onChange:$n,onKeyPress:Ar,maxLength:T==="aptos"?66:42}),i&&c.jsx("p",{className:"text-red-500",children:i})]}),c.jsxs("div",{className:`${T==="aptos"?"":"hidden"}`,children:[c.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Module Name"}),c.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",onChange:Ft,disabled:T!=="aptos"})]}),c.jsxs("div",{className:`${T==="aptos"?"":"hidden"}`,children:[c.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Account Address"}),c.jsx("input",{className:" w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",onChange:ke,onKeyPress:In,maxLength:64}),s&&c.jsx("p",{className:"text-red-500",children:s})]}),c.jsxs("div",{children:[c.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Private Key"}),c.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",onChange:pl,onKeyPress:At,maxLength:T==="aptos"?66:64}),f&&c.jsx("p",{className:"text-red-500",children:f})]}),c.jsxs("div",{children:[T==="aptos"&&c.jsxs(c.Fragment,{children:[c.jsx("label",{htmlFor:"network",className:"block text-xl text-white font-semibold mb-2 text-gray-700",children:"Select Network"}),c.jsxs("select",{id:"network",value:C,onChange:D,className:"w-full px-5 py-4 text-[#8f8f8f] text-[17px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e]",children:[c.jsx("option",{value:"https://aptos.testnet.suzuka.movementlabs.xyz/v1",className:"bg-white text-[#8f8f8f]",children:"https://aptos.testnet.suzuka.movementlabs.xyz/v1"}),c.jsx("option",{value:"https://devnet.suzuka.movementnetwork.xyz/v1",className:"bg-white text-[#8f8f8f]",children:"https://devnet.suzuka.movementnetwork.xyz/v1"})]})]}),T==="foundry"&&c.jsxs(c.Fragment,{children:[c.jsx("label",{htmlFor:"network",className:"block text-xl text-white font-semibold mb-2 text-gray-700",children:"Select Network"}),c.jsxs("select",{id:"network",value:C,onChange:D,className:"w-full px-5 py-4 text-[#8f8f8f] text-[17px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e]",children:[c.jsx("option",{value:"",disabled:!0,children:"Select a network"}),c.jsx("option",{value:"https://mevm.devnet.imola.movementlabs.xyz",className:"bg-white text-[#8f8f8f]",children:"https://mevm.devnet.imola.movementlabs.xyz"})]})]})]}),c.jsxs("div",{className:"mt-5",children:[c.jsx("button",{className:`w-full px-5 py-4 mt-4 text-white text-[18px] rounded-lg ${v?"bg-gray-500":"bg-blue-500"} `,onClick:E,disabled:v,children:v?c.jsx(I1,{color:"#7d9cd9",size:"small",text:"",textColor:""}):"Deploy"}),y&&c.jsx("p",{className:"text-red-500 mt-2",children:y})]})]})]})})})})},U1=()=>{var p;const[e,n]=S.useState(""),[t,r]=S.useState(!1),o=v=>{const x=v.target.value;(x===""||/^\d+$/.test(x))&&n(x===""?"":Number(x))},l=v=>{/[0-9]/.test(v.key)||v.preventDefault()},i=()=>{r(!0),setTimeout(()=>r(!1),2e3)},s=(p=Fn().state)==null?void 0:p.page,u=ot(),f=()=>{u(`/${s}`)};return c.jsx(c.Fragment,{children:c.jsx("div",{className:"h-[300vh] grow overflow-y-scroll",children:c.jsx("div",{className:"absolute w-[640px] sidebar:w-[400px] h-[766px] top-[-178px] left-[25px]",children:c.jsxs("div",{className:"flex flex-col w-full items-start gap-[20px] absolute top-[228px] left-0",children:[c.jsxs("div",{className:"flex items-end gap-[8px] relative self-stretch w-full flex-[0_0_auto]",onClick:f,children:[c.jsx(Rt,{className:"!relative !w-[24px] !h-[24px]"}),s==="aptos"?c.jsx(Mn,{className:"!relative !w-[24px] !h-[24px] bg-white rounded-xl"}):c.jsx(Dt,{className:"!relative !w-[24px] !h-[24px] bg-white rounded-xl"}),c.jsxs("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[21.6px] whitespace-nowrap uppercase",children:["Faucets ",s]})]}),c.jsxs("div",{className:"flex flex-col gap-[24px] my-5 w-full ",children:[c.jsxs("div",{children:[c.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Aptos Address"}),c.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",max:1e10,onChange:o,onKeyPress:l})]}),c.jsx("div",{className:"mt-5",children:c.jsx("button",{onClick:i,disabled:t,className:"w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg",children:t?"Loading...":"GET MOVE"})})]})]})})})})},B1=()=>{var s;const[e,n]=S.useState(""),t=u=>{const f=u.target.value;(f===""||/^\d+$/.test(f))&&n(f===""?"":Number(f))},r=u=>{/[0-9]/.test(u.key)||u.preventDefault()},l=(s=Fn().state)==null?void 0:s.page,i=ot(),a=()=>{i(`/${l}`)};return c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"h-[300vh] grow overflow-y-scroll",children:c.jsx("div",{className:"absolute w-[640px] sidebar:w-[400px] h-[766px] top-[-178px] left-[25px]",children:c.jsxs("div",{className:"flex flex-col w-full items-start gap-[20px] absolute top-[228px] left-0",children:[c.jsxs("div",{className:"flex items-end gap-[8px] relative self-stretch w-full flex-[0_0_auto]",onClick:a,children:[c.jsx(Rt,{className:"!relative !w-[24px] !h-[24px]"}),l==="aptos"?c.jsx(Mn,{className:"!relative !w-[24px] !h-[24px] bg-white rounded-xl"}):c.jsx(Dt,{className:"!relative !w-[24px] !h-[24px] bg-white rounded-xl"}),c.jsxs("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[21.6px] whitespace-nowrap uppercase",children:["YourAddress ",l]})]}),c.jsxs("div",{className:"flex flex-col gap-[24px] my-5 w-full ",children:[c.jsxs("div",{children:[c.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Wallet Address"}),c.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",max:1e10,onChange:t,onKeyPress:r})]}),c.jsxs("div",{children:[c.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Pritave key"}),c.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",max:1e10,onChange:t,onKeyPress:r})]}),c.jsxs("div",{children:[c.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Public key"}),c.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",max:1e10,onChange:t,onKeyPress:r})]})]})]})})}),c.jsx("div",{children:c.jsx("div",{className:" bg-blue-500 text-white font-bold py-2 px-4 rounded  cursor-pointer self-end",onClick:()=>{i("/deploy")},children:"Deploy"})})]})},tu=jd(document.getElementById("root"));tu&&tu.render(c.jsx(e1,{initialEntries:["/"],children:c.jsx(t1,{children:c.jsxs(en,{element:c.jsx(m1,{}),children:[c.jsx(en,{index:!0,element:c.jsx(p1,{})}),c.jsx(en,{path:"aptos",element:c.jsx(zd,{})}),c.jsx(en,{path:"foundry",element:c.jsx(_d,{})}),c.jsx(en,{path:"account-balance",element:c.jsx(v1,{})}),c.jsx(en,{path:"deploy",element:c.jsx($1,{})}),c.jsx(en,{path:"faucets",element:c.jsx(U1,{})}),c.jsx(en,{path:"your-address",element:c.jsx(B1,{})})]})})}));
