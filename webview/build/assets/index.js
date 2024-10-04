function sp(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function up(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ic={exports:{}},gi={},ac={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qr=Symbol.for("react.element"),cp=Symbol.for("react.portal"),dp=Symbol.for("react.fragment"),fp=Symbol.for("react.strict_mode"),pp=Symbol.for("react.profiler"),hp=Symbol.for("react.provider"),mp=Symbol.for("react.context"),gp=Symbol.for("react.forward_ref"),vp=Symbol.for("react.suspense"),yp=Symbol.for("react.memo"),xp=Symbol.for("react.lazy"),Ss=Symbol.iterator;function bp(e){return e===null||typeof e!="object"?null:(e=Ss&&e[Ss]||e["@@iterator"],typeof e=="function"?e:null)}var lc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sc=Object.assign,uc={};function Wt(e,n,t){this.props=e,this.context=n,this.refs=uc,this.updater=t||lc}Wt.prototype.isReactComponent={};Wt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Wt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cc(){}cc.prototype=Wt.prototype;function wl(e,n,t){this.props=e,this.context=n,this.refs=uc,this.updater=t||lc}var kl=wl.prototype=new cc;kl.constructor=wl;sc(kl,Wt.prototype);kl.isPureReactComponent=!0;var Ps=Array.isArray,dc=Object.prototype.hasOwnProperty,Sl={current:null},fc={key:!0,ref:!0,__self:!0,__source:!0};function pc(e,n,t){var r,o={},i=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)dc.call(n,r)&&!fc.hasOwnProperty(r)&&(o[r]=n[r]);var l=arguments.length-2;if(l===1)o.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:qr,type:e,key:i,ref:a,props:o,_owner:Sl.current}}function wp(e,n){return{$$typeof:qr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Pl(e){return typeof e=="object"&&e!==null&&e.$$typeof===qr}function kp(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Es=/\/+/g;function Ui(e,n){return typeof e=="object"&&e!==null&&e.key!=null?kp(""+e.key):n.toString(36)}function Co(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case qr:case cp:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Ui(a,0):r,Ps(o)?(t="",e!=null&&(t=e.replace(Es,"$&/")+"/"),Co(o,n,t,"",function(u){return u})):o!=null&&(Pl(o)&&(o=wp(o,t+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Es,"$&/")+"/")+e)),n.push(o)),1;if(a=0,r=r===""?".":r+":",Ps(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+Ui(i,l);a+=Co(i,n,t,s,o)}else if(s=bp(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+Ui(i,l++),a+=Co(i,n,t,s,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function to(e,n,t){if(e==null)return e;var r=[],o=0;return Co(e,r,"","",function(i){return n.call(t,i,o++)}),r}function Sp(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},No={transition:null},Pp={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:No,ReactCurrentOwner:Sl};function hc(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:to,forEach:function(e,n,t){to(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return to(e,function(){n++}),n},toArray:function(e){return to(e,function(n){return n})||[]},only:function(e){if(!Pl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=Wt;I.Fragment=dp;I.Profiler=pp;I.PureComponent=wl;I.StrictMode=fp;I.Suspense=vp;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pp;I.act=hc;I.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=sc({},e.props),o=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=Sl.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)dc.call(n,s)&&!fc.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:qr,type:e.type,key:o,ref:i,props:r,_owner:a}};I.createContext=function(e){return e={$$typeof:mp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hp,_context:e},e.Consumer=e};I.createElement=pc;I.createFactory=function(e){var n=pc.bind(null,e);return n.type=e,n};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:gp,render:e}};I.isValidElement=Pl;I.lazy=function(e){return{$$typeof:xp,_payload:{_status:-1,_result:e},_init:Sp}};I.memo=function(e,n){return{$$typeof:yp,type:e,compare:n===void 0?null:n}};I.startTransition=function(e){var n=No.transition;No.transition={};try{e()}finally{No.transition=n}};I.unstable_act=hc;I.useCallback=function(e,n){return we.current.useCallback(e,n)};I.useContext=function(e){return we.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return we.current.useDeferredValue(e)};I.useEffect=function(e,n){return we.current.useEffect(e,n)};I.useId=function(){return we.current.useId()};I.useImperativeHandle=function(e,n,t){return we.current.useImperativeHandle(e,n,t)};I.useInsertionEffect=function(e,n){return we.current.useInsertionEffect(e,n)};I.useLayoutEffect=function(e,n){return we.current.useLayoutEffect(e,n)};I.useMemo=function(e,n){return we.current.useMemo(e,n)};I.useReducer=function(e,n,t){return we.current.useReducer(e,n,t)};I.useRef=function(e){return we.current.useRef(e)};I.useState=function(e){return we.current.useState(e)};I.useSyncExternalStore=function(e,n,t){return we.current.useSyncExternalStore(e,n,t)};I.useTransition=function(){return we.current.useTransition()};I.version="18.3.1";ac.exports=I;var E=ac.exports;const B=up(E),Ep=sp({__proto__:null,default:B},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op=E,Cp=Symbol.for("react.element"),Np=Symbol.for("react.fragment"),_p=Object.prototype.hasOwnProperty,zp=Op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jp={key:!0,ref:!0,__self:!0,__source:!0};function mc(e,n,t){var r,o={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)_p.call(n,r)&&!jp.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:Cp,type:e,key:i,ref:a,props:o,_owner:zp.current}}gi.Fragment=Np;gi.jsx=mc;gi.jsxs=mc;ic.exports=gi;var f=ic.exports,gc={exports:{}},De={},vc={exports:{}},yc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(_,R){var D=_.length;_.push(R);e:for(;0<D;){var J=D-1>>>1,re=_[J];if(0<o(re,R))_[J]=R,_[D]=re,D=J;else break e}}function t(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var R=_[0],D=_.pop();if(D!==R){_[0]=D;e:for(var J=0,re=_.length,Yn=re>>>1;J<Yn;){var T=2*(J+1)-1,A=_[T],he=T+1,kn=_[he];if(0>o(A,D))he<re&&0>o(kn,A)?(_[J]=kn,_[he]=D,J=he):(_[J]=A,_[T]=D,J=T);else if(he<re&&0>o(kn,D))_[J]=kn,_[he]=D,J=he;else break e}}return R}function o(_,R){var D=_.sortIndex-R.sortIndex;return D!==0?D:_.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,d=null,y=3,x=!1,h=!1,m=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(_){for(var R=t(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=_)r(u),R.sortIndex=R.expirationTime,n(s,R);else break;R=t(u)}}function k(_){if(m=!1,v(_),!h)if(t(s)!==null)h=!0,Gt(S);else{var R=t(u);R!==null&&Zt(k,R.startTime-_)}}function S(_,R){h=!1,m&&(m=!1,g(N),N=-1),x=!0;var D=y;try{for(v(R),d=t(s);d!==null&&(!(d.expirationTime>R)||_&&!H());){var J=d.callback;if(typeof J=="function"){d.callback=null,y=d.priorityLevel;var re=J(d.expirationTime<=R);R=e.unstable_now(),typeof re=="function"?d.callback=re:d===t(s)&&r(s),v(R)}else r(s);d=t(s)}if(d!==null)var Yn=!0;else{var T=t(u);T!==null&&Zt(k,T.startTime-R),Yn=!1}return Yn}finally{d=null,y=D,x=!1}}var O=!1,C=null,N=-1,M=5,U=-1;function H(){return!(e.unstable_now()-U<M)}function wn(){if(C!==null){var _=e.unstable_now();U=_;var R=!0;try{R=C(!0,_)}finally{R?Jn():(O=!1,C=null)}}else O=!1}var Jn;if(typeof p=="function")Jn=function(){p(wn)};else if(typeof MessageChannel<"u"){var no=new MessageChannel,Ii=no.port2;no.port1.onmessage=wn,Jn=function(){Ii.postMessage(null)}}else Jn=function(){b(wn,0)};function Gt(_){C=_,O||(O=!0,Jn())}function Zt(_,R){N=b(function(){_(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){h||x||(h=!0,Gt(S))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(_){switch(y){case 1:case 2:case 3:var R=3;break;default:R=y}var D=y;y=R;try{return _()}finally{y=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,R){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var D=y;y=_;try{return R()}finally{y=D}},e.unstable_scheduleCallback=function(_,R,D){var J=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?J+D:J):D=J,_){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=D+re,_={id:c++,callback:R,priorityLevel:_,startTime:D,expirationTime:re,sortIndex:-1},D>J?(_.sortIndex=D,n(u,_),t(s)===null&&_===t(u)&&(m?(g(N),N=-1):m=!0,Zt(k,D-J))):(_.sortIndex=re,n(s,_),h||x||(h=!0,Gt(S))),_},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(_){var R=y;return function(){var D=y;y=R;try{return _.apply(this,arguments)}finally{y=D}}}})(yc);vc.exports=yc;var Tp=vc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp=E,Le=Tp;function P(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xc=new Set,Pr={};function pt(e,n){Ft(e,n),Ft(e+"Capture",n)}function Ft(e,n){for(Pr[e]=n,e=0;e<n.length;e++)xc.add(n[e])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ya=Object.prototype.hasOwnProperty,Ap=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Os={},Cs={};function Lp(e){return ya.call(Cs,e)?!0:ya.call(Os,e)?!1:Ap.test(e)?Cs[e]=!0:(Os[e]=!0,!1)}function Dp(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Mp(e,n,t,r){if(n===null||typeof n>"u"||Dp(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ke(e,n,t,r,o,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];pe[n]=new ke(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var El=/[\-:]([a-z])/g;function Ol(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(El,Ol);pe[n]=new ke(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(El,Ol);pe[n]=new ke(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(El,Ol);pe[n]=new ke(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Cl(e,n,t,r){var o=pe.hasOwnProperty(n)?pe[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Mp(n,t,o,r)&&(t=null),r||o===null?Lp(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var bn=Rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ro=Symbol.for("react.element"),bt=Symbol.for("react.portal"),wt=Symbol.for("react.fragment"),Nl=Symbol.for("react.strict_mode"),xa=Symbol.for("react.profiler"),bc=Symbol.for("react.provider"),wc=Symbol.for("react.context"),_l=Symbol.for("react.forward_ref"),ba=Symbol.for("react.suspense"),wa=Symbol.for("react.suspense_list"),zl=Symbol.for("react.memo"),On=Symbol.for("react.lazy"),kc=Symbol.for("react.offscreen"),Ns=Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=Ns&&e[Ns]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,$i;function cr(e){if($i===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);$i=n&&n[1]||""}return`
`+$i+e}var Bi=!1;function qi(e,n){if(!e||Bi)return"";Bi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Bi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?cr(e):""}function Fp(e){switch(e.tag){case 5:return cr(e.type);case 16:return cr("Lazy");case 13:return cr("Suspense");case 19:return cr("SuspenseList");case 0:case 2:case 15:return e=qi(e.type,!1),e;case 11:return e=qi(e.type.render,!1),e;case 1:return e=qi(e.type,!0),e;default:return""}}function ka(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wt:return"Fragment";case bt:return"Portal";case xa:return"Profiler";case Nl:return"StrictMode";case ba:return"Suspense";case wa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wc:return(e.displayName||"Context")+".Consumer";case bc:return(e._context.displayName||"Context")+".Provider";case _l:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zl:return n=e.displayName||null,n!==null?n:ka(e.type)||"Memo";case On:n=e._payload,e=e._init;try{return ka(e(n))}catch{}}return null}function Ip(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ka(n);case 8:return n===Nl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Up(e){var n=Sc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function oo(e){e._valueTracker||(e._valueTracker=Up(e))}function Pc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Sc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function $o(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sa(e,n){var t=n.checked;return Z({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function _s(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Bn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ec(e,n){n=n.checked,n!=null&&Cl(e,"checked",n,!1)}function Pa(e,n){Ec(e,n);var t=Bn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ea(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ea(e,n.type,Bn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function zs(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ea(e,n,t){(n!=="number"||$o(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var dr=Array.isArray;function Tt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Bn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Oa(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(P(91));return Z({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function js(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(P(92));if(dr(t)){if(1<t.length)throw Error(P(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Bn(t)}}function Oc(e,n){var t=Bn(n.value),r=Bn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ts(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Cc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ca(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Cc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var io,Nc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(io=io||document.createElement("div"),io.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=io.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Er(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$p=["Webkit","ms","Moz","O"];Object.keys(mr).forEach(function(e){$p.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),mr[n]=mr[e]})});function _c(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||mr.hasOwnProperty(e)&&mr[e]?(""+n).trim():n+"px"}function zc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=_c(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Bp=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Na(e,n){if(n){if(Bp[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(P(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(P(61))}if(n.style!=null&&typeof n.style!="object")throw Error(P(62))}}function _a(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var za=null;function jl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ja=null,Rt=null,At=null;function Rs(e){if(e=Vr(e)){if(typeof ja!="function")throw Error(P(280));var n=e.stateNode;n&&(n=wi(n),ja(e.stateNode,e.type,n))}}function jc(e){Rt?At?At.push(e):At=[e]:Rt=e}function Tc(){if(Rt){var e=Rt,n=At;if(At=Rt=null,Rs(e),n)for(e=0;e<n.length;e++)Rs(n[e])}}function Rc(e,n){return e(n)}function Ac(){}var Hi=!1;function Lc(e,n,t){if(Hi)return e(n,t);Hi=!0;try{return Rc(e,n,t)}finally{Hi=!1,(Rt!==null||At!==null)&&(Ac(),Tc())}}function Or(e,n){var t=e.stateNode;if(t===null)return null;var r=wi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(P(231,n,typeof t));return t}var Ta=!1;if(gn)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){Ta=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{Ta=!1}function qp(e,n,t,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(c){this.onError(c)}}var gr=!1,Bo=null,qo=!1,Ra=null,Hp={onError:function(e){gr=!0,Bo=e}};function Wp(e,n,t,r,o,i,a,l,s){gr=!1,Bo=null,qp.apply(Hp,arguments)}function Vp(e,n,t,r,o,i,a,l,s){if(Wp.apply(this,arguments),gr){if(gr){var u=Bo;gr=!1,Bo=null}else throw Error(P(198));qo||(qo=!0,Ra=u)}}function ht(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Dc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function As(e){if(ht(e)!==e)throw Error(P(188))}function Kp(e){var n=e.alternate;if(!n){if(n=ht(e),n===null)throw Error(P(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return As(o),e;if(i===r)return As(o),n;i=i.sibling}throw Error(P(188))}if(t.return!==r.return)t=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===t){a=!0,t=o,r=i;break}if(l===r){a=!0,r=o,t=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===t){a=!0,t=i,r=o;break}if(l===r){a=!0,r=i,t=o;break}l=l.sibling}if(!a)throw Error(P(189))}}if(t.alternate!==r)throw Error(P(190))}if(t.tag!==3)throw Error(P(188));return t.stateNode.current===t?e:n}function Mc(e){return e=Kp(e),e!==null?Fc(e):null}function Fc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Fc(e);if(n!==null)return n;e=e.sibling}return null}var Ic=Le.unstable_scheduleCallback,Ls=Le.unstable_cancelCallback,Qp=Le.unstable_shouldYield,Xp=Le.unstable_requestPaint,te=Le.unstable_now,Jp=Le.unstable_getCurrentPriorityLevel,Tl=Le.unstable_ImmediatePriority,Uc=Le.unstable_UserBlockingPriority,Ho=Le.unstable_NormalPriority,Yp=Le.unstable_LowPriority,$c=Le.unstable_IdlePriority,vi=null,an=null;function Gp(e){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(vi,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:n0,Zp=Math.log,e0=Math.LN2;function n0(e){return e>>>=0,e===0?32:31-(Zp(e)/e0|0)|0}var ao=64,lo=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wo(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~o;l!==0?r=fr(l):(i&=a,i!==0&&(r=fr(i)))}else a=t&~o,a!==0?r=fr(a):i!==0&&(r=fr(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Je(n),o=1<<t,r|=e[t],n&=~o;return r}function t0(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function r0(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Je(i),l=1<<a,s=o[a];s===-1?(!(l&t)||l&r)&&(o[a]=t0(l,n)):s<=n&&(e.expiredLanes|=l),i&=~l}}function Aa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bc(){var e=ao;return ao<<=1,!(ao&4194240)&&(ao=64),e}function Wi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Hr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Je(n),e[n]=t}function o0(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Je(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function Rl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Je(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var q=0;function qc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hc,Al,Wc,Vc,Kc,La=!1,so=[],Rn=null,An=null,Ln=null,Cr=new Map,Nr=new Map,Nn=[],i0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ds(e,n){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":Cr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(n.pointerId)}}function tr(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=Vr(n),n!==null&&Al(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function a0(e,n,t,r,o){switch(n){case"focusin":return Rn=tr(Rn,e,n,t,r,o),!0;case"dragenter":return An=tr(An,e,n,t,r,o),!0;case"mouseover":return Ln=tr(Ln,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return Cr.set(i,tr(Cr.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Nr.set(i,tr(Nr.get(i)||null,e,n,t,r,o)),!0}return!1}function Qc(e){var n=et(e.target);if(n!==null){var t=ht(n);if(t!==null){if(n=t.tag,n===13){if(n=Dc(t),n!==null){e.blockedOn=n,Kc(e.priority,function(){Wc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _o(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Da(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);za=r,t.target.dispatchEvent(r),za=null}else return n=Vr(t),n!==null&&Al(n),e.blockedOn=t,!1;n.shift()}return!0}function Ms(e,n,t){_o(e)&&t.delete(n)}function l0(){La=!1,Rn!==null&&_o(Rn)&&(Rn=null),An!==null&&_o(An)&&(An=null),Ln!==null&&_o(Ln)&&(Ln=null),Cr.forEach(Ms),Nr.forEach(Ms)}function rr(e,n){e.blockedOn===n&&(e.blockedOn=null,La||(La=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,l0)))}function _r(e){function n(o){return rr(o,e)}if(0<so.length){rr(so[0],e);for(var t=1;t<so.length;t++){var r=so[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Rn!==null&&rr(Rn,e),An!==null&&rr(An,e),Ln!==null&&rr(Ln,e),Cr.forEach(n),Nr.forEach(n),t=0;t<Nn.length;t++)r=Nn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nn.length&&(t=Nn[0],t.blockedOn===null);)Qc(t),t.blockedOn===null&&Nn.shift()}var Lt=bn.ReactCurrentBatchConfig,Vo=!0;function s0(e,n,t,r){var o=q,i=Lt.transition;Lt.transition=null;try{q=1,Ll(e,n,t,r)}finally{q=o,Lt.transition=i}}function u0(e,n,t,r){var o=q,i=Lt.transition;Lt.transition=null;try{q=4,Ll(e,n,t,r)}finally{q=o,Lt.transition=i}}function Ll(e,n,t,r){if(Vo){var o=Da(e,n,t,r);if(o===null)na(e,n,r,Ko,t),Ds(e,r);else if(a0(o,e,n,t,r))r.stopPropagation();else if(Ds(e,r),n&4&&-1<i0.indexOf(e)){for(;o!==null;){var i=Vr(o);if(i!==null&&Hc(i),i=Da(e,n,t,r),i===null&&na(e,n,r,Ko,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else na(e,n,r,null,t)}}var Ko=null;function Da(e,n,t,r){if(Ko=null,e=jl(r),e=et(e),e!==null)if(n=ht(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Dc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ko=e,null}function Xc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jp()){case Tl:return 1;case Uc:return 4;case Ho:case Yp:return 16;case $c:return 536870912;default:return 16}default:return 16}}var zn=null,Dl=null,zo=null;function Jc(){if(zo)return zo;var e,n=Dl,t=n.length,r,o="value"in zn?zn.value:zn.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===o[i-r];r++);return zo=o.slice(e,1<r?1-r:void 0)}function jo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function uo(){return!0}function Fs(){return!1}function Me(e){function n(t,r,o,i,a){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?uo:Fs,this.isPropagationStopped=Fs,this}return Z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),n}var Vt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ml=Me(Vt),Wr=Z({},Vt,{view:0,detail:0}),c0=Me(Wr),Vi,Ki,or,yi=Z({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(Vi=e.screenX-or.screenX,Ki=e.screenY-or.screenY):Ki=Vi=0,or=e),Vi)},movementY:function(e){return"movementY"in e?e.movementY:Ki}}),Is=Me(yi),d0=Z({},yi,{dataTransfer:0}),f0=Me(d0),p0=Z({},Wr,{relatedTarget:0}),Qi=Me(p0),h0=Z({},Vt,{animationName:0,elapsedTime:0,pseudoElement:0}),m0=Me(h0),g0=Z({},Vt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),v0=Me(g0),y0=Z({},Vt,{data:0}),Us=Me(y0),x0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=w0[e])?!!n[e]:!1}function Fl(){return k0}var S0=Z({},Wr,{key:function(e){if(e.key){var n=x0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?b0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fl,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),P0=Me(S0),E0=Z({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$s=Me(E0),O0=Z({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fl}),C0=Me(O0),N0=Z({},Vt,{propertyName:0,elapsedTime:0,pseudoElement:0}),_0=Me(N0),z0=Z({},yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),j0=Me(z0),T0=[9,13,27,32],Il=gn&&"CompositionEvent"in window,vr=null;gn&&"documentMode"in document&&(vr=document.documentMode);var R0=gn&&"TextEvent"in window&&!vr,Yc=gn&&(!Il||vr&&8<vr&&11>=vr),Bs=" ",qs=!1;function Gc(e,n){switch(e){case"keyup":return T0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kt=!1;function A0(e,n){switch(e){case"compositionend":return Zc(n);case"keypress":return n.which!==32?null:(qs=!0,Bs);case"textInput":return e=n.data,e===Bs&&qs?null:e;default:return null}}function L0(e,n){if(kt)return e==="compositionend"||!Il&&Gc(e,n)?(e=Jc(),zo=Dl=zn=null,kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Yc&&n.locale!=="ko"?null:n.data;default:return null}}var D0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!D0[e.type]:n==="textarea"}function ed(e,n,t,r){jc(r),n=Qo(n,"onChange"),0<n.length&&(t=new Ml("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var yr=null,zr=null;function M0(e){dd(e,0)}function xi(e){var n=Et(e);if(Pc(n))return e}function F0(e,n){if(e==="change")return n}var nd=!1;if(gn){var Xi;if(gn){var Ji="oninput"in document;if(!Ji){var Ws=document.createElement("div");Ws.setAttribute("oninput","return;"),Ji=typeof Ws.oninput=="function"}Xi=Ji}else Xi=!1;nd=Xi&&(!document.documentMode||9<document.documentMode)}function Vs(){yr&&(yr.detachEvent("onpropertychange",td),zr=yr=null)}function td(e){if(e.propertyName==="value"&&xi(zr)){var n=[];ed(n,zr,e,jl(e)),Lc(M0,n)}}function I0(e,n,t){e==="focusin"?(Vs(),yr=n,zr=t,yr.attachEvent("onpropertychange",td)):e==="focusout"&&Vs()}function U0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xi(zr)}function $0(e,n){if(e==="click")return xi(n)}function B0(e,n){if(e==="input"||e==="change")return xi(n)}function q0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ge=typeof Object.is=="function"?Object.is:q0;function jr(e,n){if(Ge(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!ya.call(n,o)||!Ge(e[o],n[o]))return!1}return!0}function Ks(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qs(e,n){var t=Ks(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ks(t)}}function rd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?rd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function od(){for(var e=window,n=$o();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=$o(e.document)}return n}function Ul(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function H0(e){var n=od(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&rd(t.ownerDocument.documentElement,t)){if(r!==null&&Ul(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Qs(t,i);var a=Qs(t,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var W0=gn&&"documentMode"in document&&11>=document.documentMode,St=null,Ma=null,xr=null,Fa=!1;function Xs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Fa||St==null||St!==$o(r)||(r=St,"selectionStart"in r&&Ul(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xr&&jr(xr,r)||(xr=r,r=Qo(Ma,"onSelect"),0<r.length&&(n=new Ml("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=St)))}function co(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Pt={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},Yi={},id={};gn&&(id=document.createElement("div").style,"AnimationEvent"in window||(delete Pt.animationend.animation,delete Pt.animationiteration.animation,delete Pt.animationstart.animation),"TransitionEvent"in window||delete Pt.transitionend.transition);function bi(e){if(Yi[e])return Yi[e];if(!Pt[e])return e;var n=Pt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in id)return Yi[e]=n[t];return e}var ad=bi("animationend"),ld=bi("animationiteration"),sd=bi("animationstart"),ud=bi("transitionend"),cd=new Map,Js="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wn(e,n){cd.set(e,n),pt(n,[e])}for(var Gi=0;Gi<Js.length;Gi++){var Zi=Js[Gi],V0=Zi.toLowerCase(),K0=Zi[0].toUpperCase()+Zi.slice(1);Wn(V0,"on"+K0)}Wn(ad,"onAnimationEnd");Wn(ld,"onAnimationIteration");Wn(sd,"onAnimationStart");Wn("dblclick","onDoubleClick");Wn("focusin","onFocus");Wn("focusout","onBlur");Wn(ud,"onTransitionEnd");Ft("onMouseEnter",["mouseout","mouseover"]);Ft("onMouseLeave",["mouseout","mouseover"]);Ft("onPointerEnter",["pointerout","pointerover"]);Ft("onPointerLeave",["pointerout","pointerover"]);pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pt("onBeforeInput",["compositionend","keypress","textInput","paste"]);pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Q0=new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));function Ys(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Vp(r,n,void 0,e),e.currentTarget=null}function dd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;Ys(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;Ys(o,l,u),i=s}}}if(qo)throw e=Ra,qo=!1,Ra=null,e}function V(e,n){var t=n[qa];t===void 0&&(t=n[qa]=new Set);var r=e+"__bubble";t.has(r)||(fd(n,e,2,!1),t.add(r))}function ea(e,n,t){var r=0;n&&(r|=4),fd(t,e,r,n)}var fo="_reactListening"+Math.random().toString(36).slice(2);function Tr(e){if(!e[fo]){e[fo]=!0,xc.forEach(function(t){t!=="selectionchange"&&(Q0.has(t)||ea(t,!1,e),ea(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[fo]||(n[fo]=!0,ea("selectionchange",!1,n))}}function fd(e,n,t,r){switch(Xc(n)){case 1:var o=s0;break;case 4:o=u0;break;default:o=Ll}t=o.bind(null,n,t,e),o=void 0,!Ta||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function na(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=et(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Lc(function(){var u=i,c=jl(t),d=[];e:{var y=cd.get(e);if(y!==void 0){var x=Ml,h=e;switch(e){case"keypress":if(jo(t)===0)break e;case"keydown":case"keyup":x=P0;break;case"focusin":h="focus",x=Qi;break;case"focusout":h="blur",x=Qi;break;case"beforeblur":case"afterblur":x=Qi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=f0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=C0;break;case ad:case ld:case sd:x=m0;break;case ud:x=_0;break;case"scroll":x=c0;break;case"wheel":x=j0;break;case"copy":case"cut":case"paste":x=v0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=$s}var m=(n&4)!==0,b=!m&&e==="scroll",g=m?y!==null?y+"Capture":null:y;m=[];for(var p=u,v;p!==null;){v=p;var k=v.stateNode;if(v.tag===5&&k!==null&&(v=k,g!==null&&(k=Or(p,g),k!=null&&m.push(Rr(p,k,v)))),b)break;p=p.return}0<m.length&&(y=new x(y,h,null,t,c),d.push({event:y,listeners:m}))}}if(!(n&7)){e:{if(y=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",y&&t!==za&&(h=t.relatedTarget||t.fromElement)&&(et(h)||h[vn]))break e;if((x||y)&&(y=c.window===c?c:(y=c.ownerDocument)?y.defaultView||y.parentWindow:window,x?(h=t.relatedTarget||t.toElement,x=u,h=h?et(h):null,h!==null&&(b=ht(h),h!==b||h.tag!==5&&h.tag!==6)&&(h=null)):(x=null,h=u),x!==h)){if(m=Is,k="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(m=$s,k="onPointerLeave",g="onPointerEnter",p="pointer"),b=x==null?y:Et(x),v=h==null?y:Et(h),y=new m(k,p+"leave",x,t,c),y.target=b,y.relatedTarget=v,k=null,et(c)===u&&(m=new m(g,p+"enter",h,t,c),m.target=v,m.relatedTarget=b,k=m),b=k,x&&h)n:{for(m=x,g=h,p=0,v=m;v;v=yt(v))p++;for(v=0,k=g;k;k=yt(k))v++;for(;0<p-v;)m=yt(m),p--;for(;0<v-p;)g=yt(g),v--;for(;p--;){if(m===g||g!==null&&m===g.alternate)break n;m=yt(m),g=yt(g)}m=null}else m=null;x!==null&&Gs(d,y,x,m,!1),h!==null&&b!==null&&Gs(d,b,h,m,!0)}}e:{if(y=u?Et(u):window,x=y.nodeName&&y.nodeName.toLowerCase(),x==="select"||x==="input"&&y.type==="file")var S=F0;else if(Hs(y))if(nd)S=B0;else{S=U0;var O=I0}else(x=y.nodeName)&&x.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(S=$0);if(S&&(S=S(e,u))){ed(d,S,t,c);break e}O&&O(e,y,u),e==="focusout"&&(O=y._wrapperState)&&O.controlled&&y.type==="number"&&Ea(y,"number",y.value)}switch(O=u?Et(u):window,e){case"focusin":(Hs(O)||O.contentEditable==="true")&&(St=O,Ma=u,xr=null);break;case"focusout":xr=Ma=St=null;break;case"mousedown":Fa=!0;break;case"contextmenu":case"mouseup":case"dragend":Fa=!1,Xs(d,t,c);break;case"selectionchange":if(W0)break;case"keydown":case"keyup":Xs(d,t,c)}var C;if(Il)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else kt?Gc(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(Yc&&t.locale!=="ko"&&(kt||N!=="onCompositionStart"?N==="onCompositionEnd"&&kt&&(C=Jc()):(zn=c,Dl="value"in zn?zn.value:zn.textContent,kt=!0)),O=Qo(u,N),0<O.length&&(N=new Us(N,e,null,t,c),d.push({event:N,listeners:O}),C?N.data=C:(C=Zc(t),C!==null&&(N.data=C)))),(C=R0?A0(e,t):L0(e,t))&&(u=Qo(u,"onBeforeInput"),0<u.length&&(c=new Us("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=C))}dd(d,n)})}function Rr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Qo(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Or(e,t),i!=null&&r.unshift(Rr(e,i,o)),i=Or(e,n),i!=null&&r.push(Rr(e,i,o))),e=e.return}return r}function yt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gs(e,n,t,r,o){for(var i=n._reactName,a=[];t!==null&&t!==r;){var l=t,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=Or(t,i),s!=null&&a.unshift(Rr(t,s,l))):o||(s=Or(t,i),s!=null&&a.push(Rr(t,s,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var X0=/\r\n?/g,J0=/\u0000|\uFFFD/g;function Zs(e){return(typeof e=="string"?e:""+e).replace(X0,`
`).replace(J0,"")}function po(e,n,t){if(n=Zs(n),Zs(e)!==n&&t)throw Error(P(425))}function Xo(){}var Ia=null,Ua=null;function $a(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ba=typeof setTimeout=="function"?setTimeout:void 0,Y0=typeof clearTimeout=="function"?clearTimeout:void 0,eu=typeof Promise=="function"?Promise:void 0,G0=typeof queueMicrotask=="function"?queueMicrotask:typeof eu<"u"?function(e){return eu.resolve(null).then(e).catch(Z0)}:Ba;function Z0(e){setTimeout(function(){throw e})}function ta(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),_r(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);_r(n)}function Dn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function nu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Kt=Math.random().toString(36).slice(2),tn="__reactFiber$"+Kt,Ar="__reactProps$"+Kt,vn="__reactContainer$"+Kt,qa="__reactEvents$"+Kt,eh="__reactListeners$"+Kt,nh="__reactHandles$"+Kt;function et(e){var n=e[tn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[vn]||t[tn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=nu(e);e!==null;){if(t=e[tn])return t;e=nu(e)}return n}e=t,t=e.parentNode}return null}function Vr(e){return e=e[tn]||e[vn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Et(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function wi(e){return e[Ar]||null}var Ha=[],Ot=-1;function Vn(e){return{current:e}}function K(e){0>Ot||(e.current=Ha[Ot],Ha[Ot]=null,Ot--)}function W(e,n){Ot++,Ha[Ot]=e.current,e.current=n}var qn={},ye=Vn(qn),Ee=Vn(!1),lt=qn;function It(e,n){var t=e.type.contextTypes;if(!t)return qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Oe(e){return e=e.childContextTypes,e!=null}function Jo(){K(Ee),K(ye)}function tu(e,n,t){if(ye.current!==qn)throw Error(P(168));W(ye,n),W(Ee,t)}function pd(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(P(108,Ip(e)||"Unknown",o));return Z({},t,r)}function Yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qn,lt=ye.current,W(ye,e),W(Ee,Ee.current),!0}function ru(e,n,t){var r=e.stateNode;if(!r)throw Error(P(169));t?(e=pd(e,n,lt),r.__reactInternalMemoizedMergedChildContext=e,K(Ee),K(ye),W(ye,e)):K(Ee),W(Ee,t)}var dn=null,ki=!1,ra=!1;function hd(e){dn===null?dn=[e]:dn.push(e)}function th(e){ki=!0,hd(e)}function Kn(){if(!ra&&dn!==null){ra=!0;var e=0,n=q;try{var t=dn;for(q=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}dn=null,ki=!1}catch(o){throw dn!==null&&(dn=dn.slice(e+1)),Ic(Tl,Kn),o}finally{q=n,ra=!1}}return null}var Ct=[],Nt=0,Go=null,Zo=0,Fe=[],Ie=0,st=null,fn=1,pn="";function Gn(e,n){Ct[Nt++]=Zo,Ct[Nt++]=Go,Go=e,Zo=n}function md(e,n,t){Fe[Ie++]=fn,Fe[Ie++]=pn,Fe[Ie++]=st,st=e;var r=fn;e=pn;var o=32-Je(r)-1;r&=~(1<<o),t+=1;var i=32-Je(n)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,fn=1<<32-Je(n)+o|t<<o|r,pn=i+e}else fn=1<<i|t<<o|r,pn=e}function $l(e){e.return!==null&&(Gn(e,1),md(e,1,0))}function Bl(e){for(;e===Go;)Go=Ct[--Nt],Ct[Nt]=null,Zo=Ct[--Nt],Ct[Nt]=null;for(;e===st;)st=Fe[--Ie],Fe[Ie]=null,pn=Fe[--Ie],Fe[Ie]=null,fn=Fe[--Ie],Fe[Ie]=null}var Re=null,Te=null,X=!1,Qe=null;function gd(e,n){var t=Ue(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ou(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Re=e,Te=Dn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Re=e,Te=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=st!==null?{id:fn,overflow:pn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ue(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Re=e,Te=null,!0):!1;default:return!1}}function Wa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Va(e){if(X){var n=Te;if(n){var t=n;if(!ou(e,n)){if(Wa(e))throw Error(P(418));n=Dn(t.nextSibling);var r=Re;n&&ou(e,n)?gd(r,t):(e.flags=e.flags&-4097|2,X=!1,Re=e)}}else{if(Wa(e))throw Error(P(418));e.flags=e.flags&-4097|2,X=!1,Re=e}}}function iu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function ho(e){if(e!==Re)return!1;if(!X)return iu(e),X=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!$a(e.type,e.memoizedProps)),n&&(n=Te)){if(Wa(e))throw vd(),Error(P(418));for(;n;)gd(e,n),n=Dn(n.nextSibling)}if(iu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Te=Dn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Te=null}}else Te=Re?Dn(e.stateNode.nextSibling):null;return!0}function vd(){for(var e=Te;e;)e=Dn(e.nextSibling)}function Ut(){Te=Re=null,X=!1}function ql(e){Qe===null?Qe=[e]:Qe.push(e)}var rh=bn.ReactCurrentBatchConfig;function ir(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(P(309));var r=t.stateNode}if(!r)throw Error(P(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var l=o.refs;a===null?delete l[i]:l[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(P(284));if(!t._owner)throw Error(P(290,e))}return e}function mo(e,n){throw e=Object.prototype.toString.call(n),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function au(e){var n=e._init;return n(e._payload)}function yd(e){function n(g,p){if(e){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function t(g,p){if(!e)return null;for(;p!==null;)n(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function o(g,p){return g=Un(g,p),g.index=0,g.sibling=null,g}function i(g,p,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,p,v,k){return p===null||p.tag!==6?(p=ca(v,g.mode,k),p.return=g,p):(p=o(p,v),p.return=g,p)}function s(g,p,v,k){var S=v.type;return S===wt?c(g,p,v.props.children,k,v.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===On&&au(S)===p.type)?(k=o(p,v.props),k.ref=ir(g,p,v),k.return=g,k):(k=Fo(v.type,v.key,v.props,null,g.mode,k),k.ref=ir(g,p,v),k.return=g,k)}function u(g,p,v,k){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=da(v,g.mode,k),p.return=g,p):(p=o(p,v.children||[]),p.return=g,p)}function c(g,p,v,k,S){return p===null||p.tag!==7?(p=it(v,g.mode,k,S),p.return=g,p):(p=o(p,v),p.return=g,p)}function d(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ca(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ro:return v=Fo(p.type,p.key,p.props,null,g.mode,v),v.ref=ir(g,null,p),v.return=g,v;case bt:return p=da(p,g.mode,v),p.return=g,p;case On:var k=p._init;return d(g,k(p._payload),v)}if(dr(p)||er(p))return p=it(p,g.mode,v,null),p.return=g,p;mo(g,p)}return null}function y(g,p,v,k){var S=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:l(g,p,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ro:return v.key===S?s(g,p,v,k):null;case bt:return v.key===S?u(g,p,v,k):null;case On:return S=v._init,y(g,p,S(v._payload),k)}if(dr(v)||er(v))return S!==null?null:c(g,p,v,k,null);mo(g,v)}return null}function x(g,p,v,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(v)||null,l(p,g,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ro:return g=g.get(k.key===null?v:k.key)||null,s(p,g,k,S);case bt:return g=g.get(k.key===null?v:k.key)||null,u(p,g,k,S);case On:var O=k._init;return x(g,p,v,O(k._payload),S)}if(dr(k)||er(k))return g=g.get(v)||null,c(p,g,k,S,null);mo(p,k)}return null}function h(g,p,v,k){for(var S=null,O=null,C=p,N=p=0,M=null;C!==null&&N<v.length;N++){C.index>N?(M=C,C=null):M=C.sibling;var U=y(g,C,v[N],k);if(U===null){C===null&&(C=M);break}e&&C&&U.alternate===null&&n(g,C),p=i(U,p,N),O===null?S=U:O.sibling=U,O=U,C=M}if(N===v.length)return t(g,C),X&&Gn(g,N),S;if(C===null){for(;N<v.length;N++)C=d(g,v[N],k),C!==null&&(p=i(C,p,N),O===null?S=C:O.sibling=C,O=C);return X&&Gn(g,N),S}for(C=r(g,C);N<v.length;N++)M=x(C,g,N,v[N],k),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?N:M.key),p=i(M,p,N),O===null?S=M:O.sibling=M,O=M);return e&&C.forEach(function(H){return n(g,H)}),X&&Gn(g,N),S}function m(g,p,v,k){var S=er(v);if(typeof S!="function")throw Error(P(150));if(v=S.call(v),v==null)throw Error(P(151));for(var O=S=null,C=p,N=p=0,M=null,U=v.next();C!==null&&!U.done;N++,U=v.next()){C.index>N?(M=C,C=null):M=C.sibling;var H=y(g,C,U.value,k);if(H===null){C===null&&(C=M);break}e&&C&&H.alternate===null&&n(g,C),p=i(H,p,N),O===null?S=H:O.sibling=H,O=H,C=M}if(U.done)return t(g,C),X&&Gn(g,N),S;if(C===null){for(;!U.done;N++,U=v.next())U=d(g,U.value,k),U!==null&&(p=i(U,p,N),O===null?S=U:O.sibling=U,O=U);return X&&Gn(g,N),S}for(C=r(g,C);!U.done;N++,U=v.next())U=x(C,g,N,U.value,k),U!==null&&(e&&U.alternate!==null&&C.delete(U.key===null?N:U.key),p=i(U,p,N),O===null?S=U:O.sibling=U,O=U);return e&&C.forEach(function(wn){return n(g,wn)}),X&&Gn(g,N),S}function b(g,p,v,k){if(typeof v=="object"&&v!==null&&v.type===wt&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ro:e:{for(var S=v.key,O=p;O!==null;){if(O.key===S){if(S=v.type,S===wt){if(O.tag===7){t(g,O.sibling),p=o(O,v.props.children),p.return=g,g=p;break e}}else if(O.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===On&&au(S)===O.type){t(g,O.sibling),p=o(O,v.props),p.ref=ir(g,O,v),p.return=g,g=p;break e}t(g,O);break}else n(g,O);O=O.sibling}v.type===wt?(p=it(v.props.children,g.mode,k,v.key),p.return=g,g=p):(k=Fo(v.type,v.key,v.props,null,g.mode,k),k.ref=ir(g,p,v),k.return=g,g=k)}return a(g);case bt:e:{for(O=v.key;p!==null;){if(p.key===O)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){t(g,p.sibling),p=o(p,v.children||[]),p.return=g,g=p;break e}else{t(g,p);break}else n(g,p);p=p.sibling}p=da(v,g.mode,k),p.return=g,g=p}return a(g);case On:return O=v._init,b(g,p,O(v._payload),k)}if(dr(v))return h(g,p,v,k);if(er(v))return m(g,p,v,k);mo(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(t(g,p.sibling),p=o(p,v),p.return=g,g=p):(t(g,p),p=ca(v,g.mode,k),p.return=g,g=p),a(g)):t(g,p)}return b}var $t=yd(!0),xd=yd(!1),ei=Vn(null),ni=null,_t=null,Hl=null;function Wl(){Hl=_t=ni=null}function Vl(e){var n=ei.current;K(ei),e._currentValue=n}function Ka(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Dt(e,n){ni=e,Hl=_t=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Pe=!0),e.firstContext=null)}function Be(e){var n=e._currentValue;if(Hl!==e)if(e={context:e,memoizedValue:n,next:null},_t===null){if(ni===null)throw Error(P(308));_t=e,ni.dependencies={lanes:0,firstContext:e}}else _t=_t.next=e;return n}var nt=null;function Kl(e){nt===null?nt=[e]:nt.push(e)}function bd(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Kl(n)):(t.next=o.next,o.next=t),n.interleaved=t,yn(e,r)}function yn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Cn=!1;function Ql(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Mn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,yn(e,t)}return o=r.interleaved,o===null?(n.next=n,Kl(r)):(n.next=o.next,o.next=n),r.interleaved=n,yn(e,t)}function To(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Rl(e,t)}}function lu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ti(e,n,t,r){var o=e.updateQueue;Cn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(i!==null){var d=o.baseState;a=0,c=u=s=null,l=i;do{var y=l.lane,x=l.eventTime;if((r&y)===y){c!==null&&(c=c.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(y=n,x=t,m.tag){case 1:if(h=m.payload,typeof h=="function"){d=h.call(x,d,y);break e}d=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=m.payload,y=typeof h=="function"?h.call(x,d,y):h,y==null)break e;d=Z({},d,y);break e;case 2:Cn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,y=o.effects,y===null?o.effects=[l]:y.push(l))}else x={eventTime:x,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=x,s=d):c=c.next=x,a|=y;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;y=l,l=y.next,y.next=null,o.lastBaseUpdate=y,o.shared.pending=null}}while(!0);if(c===null&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=c,n=o.shared.interleaved,n!==null){o=n;do a|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);ct|=a,e.lanes=a,e.memoizedState=d}}function su(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var Kr={},ln=Vn(Kr),Lr=Vn(Kr),Dr=Vn(Kr);function tt(e){if(e===Kr)throw Error(P(174));return e}function Xl(e,n){switch(W(Dr,n),W(Lr,e),W(ln,Kr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ca(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ca(n,e)}K(ln),W(ln,n)}function Bt(){K(ln),K(Lr),K(Dr)}function kd(e){tt(Dr.current);var n=tt(ln.current),t=Ca(n,e.type);n!==t&&(W(Lr,e),W(ln,t))}function Jl(e){Lr.current===e&&(K(ln),K(Lr))}var Y=Vn(0);function ri(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oa=[];function Yl(){for(var e=0;e<oa.length;e++)oa[e]._workInProgressVersionPrimary=null;oa.length=0}var Ro=bn.ReactCurrentDispatcher,ia=bn.ReactCurrentBatchConfig,ut=0,G=null,ie=null,ue=null,oi=!1,br=!1,Mr=0,oh=0;function me(){throw Error(P(321))}function Gl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ge(e[t],n[t]))return!1;return!0}function Zl(e,n,t,r,o,i){if(ut=i,G=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ro.current=e===null||e.memoizedState===null?sh:uh,e=t(r,o),br){i=0;do{if(br=!1,Mr=0,25<=i)throw Error(P(301));i+=1,ue=ie=null,n.updateQueue=null,Ro.current=ch,e=t(r,o)}while(br)}if(Ro.current=ii,n=ie!==null&&ie.next!==null,ut=0,ue=ie=G=null,oi=!1,n)throw Error(P(300));return e}function es(){var e=Mr!==0;return Mr=0,e}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?G.memoizedState=ue=e:ue=ue.next=e,ue}function qe(){if(ie===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var n=ue===null?G.memoizedState:ue.next;if(n!==null)ue=n,ie=e;else{if(e===null)throw Error(P(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ue===null?G.memoizedState=ue=e:ue=ue.next=e}return ue}function Fr(e,n){return typeof n=="function"?n(e):n}function aa(e){var n=qe(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=ie,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var c=u.lane;if((ut&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,G.lanes|=c,ct|=c}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,Ge(r,n.memoizedState)||(Pe=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,G.lanes|=i,ct|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function la(e){var n=qe(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Ge(i,n.memoizedState)||(Pe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Sd(){}function Pd(e,n){var t=G,r=qe(),o=n(),i=!Ge(r.memoizedState,o);if(i&&(r.memoizedState=o,Pe=!0),r=r.queue,ns(Cd.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||ue!==null&&ue.memoizedState.tag&1){if(t.flags|=2048,Ir(9,Od.bind(null,t,r,o,n),void 0,null),ce===null)throw Error(P(349));ut&30||Ed(t,n,o)}return o}function Ed(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=G.updateQueue,n===null?(n={lastEffect:null,stores:null},G.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Od(e,n,t,r){n.value=t,n.getSnapshot=r,Nd(n)&&_d(e)}function Cd(e,n,t){return t(function(){Nd(n)&&_d(e)})}function Nd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ge(e,t)}catch{return!0}}function _d(e){var n=yn(e,1);n!==null&&Ye(n,e,1,-1)}function uu(e){var n=nn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:e},n.queue=e,e=e.dispatch=lh.bind(null,G,e),[n.memoizedState,e]}function Ir(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=G.updateQueue,n===null?(n={lastEffect:null,stores:null},G.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function zd(){return qe().memoizedState}function Ao(e,n,t,r){var o=nn();G.flags|=e,o.memoizedState=Ir(1|n,t,void 0,r===void 0?null:r)}function Si(e,n,t,r){var o=qe();r=r===void 0?null:r;var i=void 0;if(ie!==null){var a=ie.memoizedState;if(i=a.destroy,r!==null&&Gl(r,a.deps)){o.memoizedState=Ir(n,t,i,r);return}}G.flags|=e,o.memoizedState=Ir(1|n,t,i,r)}function cu(e,n){return Ao(8390656,8,e,n)}function ns(e,n){return Si(2048,8,e,n)}function jd(e,n){return Si(4,2,e,n)}function Td(e,n){return Si(4,4,e,n)}function Rd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ad(e,n,t){return t=t!=null?t.concat([e]):null,Si(4,4,Rd.bind(null,n,e),t)}function ts(){}function Ld(e,n){var t=qe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Gl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Dd(e,n){var t=qe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Gl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Md(e,n,t){return ut&21?(Ge(t,n)||(t=Bc(),G.lanes|=t,ct|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=t)}function ih(e,n){var t=q;q=t!==0&&4>t?t:4,e(!0);var r=ia.transition;ia.transition={};try{e(!1),n()}finally{q=t,ia.transition=r}}function Fd(){return qe().memoizedState}function ah(e,n,t){var r=In(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Id(e))Ud(n,t);else if(t=bd(e,n,t,r),t!==null){var o=be();Ye(t,e,r,o),$d(t,n,r)}}function lh(e,n,t){var r=In(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Id(e))Ud(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,l=i(a,t);if(o.hasEagerState=!0,o.eagerState=l,Ge(l,a)){var s=n.interleaved;s===null?(o.next=o,Kl(n)):(o.next=s.next,s.next=o),n.interleaved=o;return}}catch{}finally{}t=bd(e,n,o,r),t!==null&&(o=be(),Ye(t,e,r,o),$d(t,n,r))}}function Id(e){var n=e.alternate;return e===G||n!==null&&n===G}function Ud(e,n){br=oi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function $d(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Rl(e,t)}}var ii={readContext:Be,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},sh={readContext:Be,useCallback:function(e,n){return nn().memoizedState=[e,n===void 0?null:n],e},useContext:Be,useEffect:cu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ao(4194308,4,Rd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ao(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ao(4,2,e,n)},useMemo:function(e,n){var t=nn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=nn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ah.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var n=nn();return e={current:e},n.memoizedState=e},useState:uu,useDebugValue:ts,useDeferredValue:function(e){return nn().memoizedState=e},useTransition:function(){var e=uu(!1),n=e[0];return e=ih.bind(null,e[1]),nn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=G,o=nn();if(X){if(t===void 0)throw Error(P(407));t=t()}else{if(t=n(),ce===null)throw Error(P(349));ut&30||Ed(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,cu(Cd.bind(null,r,i,e),[e]),r.flags|=2048,Ir(9,Od.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=nn(),n=ce.identifierPrefix;if(X){var t=pn,r=fn;t=(r&~(1<<32-Je(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Mr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=oh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},uh={readContext:Be,useCallback:Ld,useContext:Be,useEffect:ns,useImperativeHandle:Ad,useInsertionEffect:jd,useLayoutEffect:Td,useMemo:Dd,useReducer:aa,useRef:zd,useState:function(){return aa(Fr)},useDebugValue:ts,useDeferredValue:function(e){var n=qe();return Md(n,ie.memoizedState,e)},useTransition:function(){var e=aa(Fr)[0],n=qe().memoizedState;return[e,n]},useMutableSource:Sd,useSyncExternalStore:Pd,useId:Fd,unstable_isNewReconciler:!1},ch={readContext:Be,useCallback:Ld,useContext:Be,useEffect:ns,useImperativeHandle:Ad,useInsertionEffect:jd,useLayoutEffect:Td,useMemo:Dd,useReducer:la,useRef:zd,useState:function(){return la(Fr)},useDebugValue:ts,useDeferredValue:function(e){var n=qe();return ie===null?n.memoizedState=e:Md(n,ie.memoizedState,e)},useTransition:function(){var e=la(Fr)[0],n=qe().memoizedState;return[e,n]},useMutableSource:Sd,useSyncExternalStore:Pd,useId:Fd,unstable_isNewReconciler:!1};function Ve(e,n){if(e&&e.defaultProps){n=Z({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Qa(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Z({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Pi={isMounted:function(e){return(e=e._reactInternals)?ht(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=be(),o=In(e),i=mn(r,o);i.payload=n,t!=null&&(i.callback=t),n=Mn(e,i,o),n!==null&&(Ye(n,e,o,r),To(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=be(),o=In(e),i=mn(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Mn(e,i,o),n!==null&&(Ye(n,e,o,r),To(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=be(),r=In(e),o=mn(t,r);o.tag=2,n!=null&&(o.callback=n),n=Mn(e,o,r),n!==null&&(Ye(n,e,r,t),To(n,e,r))}};function du(e,n,t,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):n.prototype&&n.prototype.isPureReactComponent?!jr(t,r)||!jr(o,i):!0}function Bd(e,n,t){var r=!1,o=qn,i=n.contextType;return typeof i=="object"&&i!==null?i=Be(i):(o=Oe(n)?lt:ye.current,r=n.contextTypes,i=(r=r!=null)?It(e,o):qn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Pi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function fu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Pi.enqueueReplaceState(n,n.state,null)}function Xa(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Ql(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=Be(i):(i=Oe(n)?lt:ye.current,o.context=It(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Qa(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&Pi.enqueueReplaceState(o,o.state,null),ti(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function qt(e,n){try{var t="",r=n;do t+=Fp(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function sa(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ja(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var dh=typeof WeakMap=="function"?WeakMap:Map;function qd(e,n,t){t=mn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){li||(li=!0,al=r),Ja(e,n)},t}function Hd(e,n,t){t=mn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){Ja(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ja(e,n),typeof r!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function pu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new dh;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=Eh.bind(null,e,n,t),n.then(e,e))}function hu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function mu(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=mn(-1,1),n.tag=2,Mn(t,n,1))),t.lanes|=1),e)}var fh=bn.ReactCurrentOwner,Pe=!1;function xe(e,n,t,r){n.child=e===null?xd(n,null,t,r):$t(n,e.child,t,r)}function gu(e,n,t,r,o){t=t.render;var i=n.ref;return Dt(n,o),r=Zl(e,n,t,r,i,o),t=es(),e!==null&&!Pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,xn(e,n,o)):(X&&t&&$l(n),n.flags|=1,xe(e,n,r,o),n.child)}function vu(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!cs(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Wd(e,n,i,r,o)):(e=Fo(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:jr,t(a,r)&&e.ref===n.ref)return xn(e,n,o)}return n.flags|=1,e=Un(i,r),e.ref=n.ref,e.return=n,n.child=e}function Wd(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(jr(i,r)&&e.ref===n.ref)if(Pe=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Pe=!0);else return n.lanes=e.lanes,xn(e,n,o)}return Ya(e,n,t,r,o)}function Vd(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(jt,je),je|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,W(jt,je),je|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,W(jt,je),je|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,W(jt,je),je|=r;return xe(e,n,o,t),n.child}function Kd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ya(e,n,t,r,o){var i=Oe(t)?lt:ye.current;return i=It(n,i),Dt(n,o),t=Zl(e,n,t,r,i,o),r=es(),e!==null&&!Pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,xn(e,n,o)):(X&&r&&$l(n),n.flags|=1,xe(e,n,t,o),n.child)}function yu(e,n,t,r,o){if(Oe(t)){var i=!0;Yo(n)}else i=!1;if(Dt(n,o),n.stateNode===null)Lo(e,n),Bd(n,t,r),Xa(n,t,r,o),r=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var s=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=Be(u):(u=Oe(t)?lt:ye.current,u=It(n,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&fu(n,a,r,u),Cn=!1;var y=n.memoizedState;a.state=y,ti(n,r,a,o),s=n.memoizedState,l!==r||y!==s||Ee.current||Cn?(typeof c=="function"&&(Qa(n,t,c,r),s=n.memoizedState),(l=Cn||du(n,t,l,r,y,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,wd(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:Ve(n.type,l),a.props=u,d=n.pendingProps,y=a.context,s=t.contextType,typeof s=="object"&&s!==null?s=Be(s):(s=Oe(t)?lt:ye.current,s=It(n,s));var x=t.getDerivedStateFromProps;(c=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||y!==s)&&fu(n,a,r,s),Cn=!1,y=n.memoizedState,a.state=y,ti(n,r,a,o);var h=n.memoizedState;l!==d||y!==h||Ee.current||Cn?(typeof x=="function"&&(Qa(n,t,x,r),h=n.memoizedState),(u=Cn||du(n,t,u,r,y,h,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,h,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,h,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=h),a.props=r,a.state=h,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(n.flags|=1024),r=!1)}return Ga(e,n,t,r,i,o)}function Ga(e,n,t,r,o,i){Kd(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return o&&ru(n,t,!1),xn(e,n,i);r=n.stateNode,fh.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=$t(n,e.child,null,i),n.child=$t(n,null,l,i)):xe(e,n,l,i),n.memoizedState=r.state,o&&ru(n,t,!0),n.child}function Qd(e){var n=e.stateNode;n.pendingContext?tu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&tu(e,n.context,!1),Xl(e,n.containerInfo)}function xu(e,n,t,r,o){return Ut(),ql(o),n.flags|=256,xe(e,n,t,r),n.child}var Za={dehydrated:null,treeContext:null,retryLane:0};function el(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xd(e,n,t){var r=n.pendingProps,o=Y.current,i=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(Y,o&1),e===null)return Va(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,i?(r=n.mode,i=n.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Ci(a,r,0,null),e=it(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=el(t),n.memoizedState=Za,e):rs(n,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return ph(e,n,a,r,l,o,t);if(i){i=r.fallback,a=n.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Un(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Un(l,i):(i=it(i,a,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,a=e.child.memoizedState,a=a===null?el(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=Za,r}return i=e.child,e=i.sibling,r=Un(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function rs(e,n){return n=Ci({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function go(e,n,t,r){return r!==null&&ql(r),$t(n,e.child,null,t),e=rs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ph(e,n,t,r,o,i,a){if(t)return n.flags&256?(n.flags&=-257,r=sa(Error(P(422))),go(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=Ci({mode:"visible",children:r.children},o,0,null),i=it(i,o,a,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&$t(n,e.child,null,a),n.child.memoizedState=el(a),n.memoizedState=Za,i);if(!(n.mode&1))return go(e,n,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(P(419)),r=sa(i,r,void 0),go(e,n,a,r)}if(l=(a&e.childLanes)!==0,Pe||l){if(r=ce,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,yn(e,o),Ye(r,e,o,-1))}return us(),r=sa(Error(P(421))),go(e,n,a,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Oh.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,Te=Dn(o.nextSibling),Re=n,X=!0,Qe=null,e!==null&&(Fe[Ie++]=fn,Fe[Ie++]=pn,Fe[Ie++]=st,fn=e.id,pn=e.overflow,st=n),n=rs(n,r.children),n.flags|=4096,n)}function bu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ka(e.return,n,t)}function ua(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function Jd(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(xe(e,n,r.children,t),r=Y.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bu(e,t,n);else if(e.tag===19)bu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Y,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&ri(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),ua(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&ri(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}ua(n,!0,t,null,i);break;case"together":ua(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Lo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function xn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ct|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(P(153));if(n.child!==null){for(e=n.child,t=Un(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Un(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function hh(e,n,t){switch(n.tag){case 3:Qd(n),Ut();break;case 5:kd(n);break;case 1:Oe(n.type)&&Yo(n);break;case 4:Xl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;W(ei,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(W(Y,Y.current&1),n.flags|=128,null):t&n.child.childLanes?Xd(e,n,t):(W(Y,Y.current&1),e=xn(e,n,t),e!==null?e.sibling:null);W(Y,Y.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Jd(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(Y,Y.current),r)break;return null;case 22:case 23:return n.lanes=0,Vd(e,n,t)}return xn(e,n,t)}var Yd,nl,Gd,Zd;Yd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};nl=function(){};Gd=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,tt(ln.current);var i=null;switch(t){case"input":o=Sa(e,o),r=Sa(e,r),i=[];break;case"select":o=Z({},o,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":o=Oa(e,o),r=Oa(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xo)}Na(t,r);var a;t=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Pr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(i||(i=[]),i.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Pr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&V("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};Zd=function(e,n,t,r){t!==r&&(n.flags|=4)};function ar(e,n){if(!X)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function mh(e,n,t){var r=n.pendingProps;switch(Bl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(n),null;case 1:return Oe(n.type)&&Jo(),ge(n),null;case 3:return r=n.stateNode,Bt(),K(Ee),K(ye),Yl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ho(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Qe!==null&&(ul(Qe),Qe=null))),nl(e,n),ge(n),null;case 5:Jl(n);var o=tt(Dr.current);if(t=n.type,e!==null&&n.stateNode!=null)Gd(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(P(166));return ge(n),null}if(e=tt(ln.current),ho(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[tn]=n,r[Ar]=i,e=(n.mode&1)!==0,t){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<pr.length;o++)V(pr[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":_s(r,i),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},V("invalid",r);break;case"textarea":js(r,i),V("invalid",r)}Na(t,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&po(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&po(r.textContent,l,e),o=["children",""+l]):Pr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&V("scroll",r)}switch(t){case"input":oo(r),zs(r,i,!0);break;case"textarea":oo(r),Ts(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Xo)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[tn]=n,e[Ar]=r,Yd(e,n,!1,!1),n.stateNode=e;e:{switch(a=_a(t,r),t){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<pr.length;o++)V(pr[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":_s(e,r),o=Sa(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Z({},r,{value:void 0}),V("invalid",e);break;case"textarea":js(e,r),o=Oa(e,r),V("invalid",e);break;default:o=r}Na(t,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?zc(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Nc(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Er(e,s):typeof s=="number"&&Er(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Pr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&V("scroll",e):s!=null&&Cl(e,i,s,a))}switch(t){case"input":oo(e),zs(e,r,!1);break;case"textarea":oo(e),Ts(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Tt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Tt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Xo)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ge(n),null;case 6:if(e&&n.stateNode!=null)Zd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(P(166));if(t=tt(Dr.current),tt(ln.current),ho(n)){if(r=n.stateNode,t=n.memoizedProps,r[tn]=n,(i=r.nodeValue!==t)&&(e=Re,e!==null))switch(e.tag){case 3:po(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&po(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[tn]=n,n.stateNode=r}return ge(n),null;case 13:if(K(Y),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Te!==null&&n.mode&1&&!(n.flags&128))vd(),Ut(),n.flags|=98560,i=!1;else if(i=ho(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[tn]=n}else Ut(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ge(n),i=!1}else Qe!==null&&(ul(Qe),Qe=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||Y.current&1?ae===0&&(ae=3):us())),n.updateQueue!==null&&(n.flags|=4),ge(n),null);case 4:return Bt(),nl(e,n),e===null&&Tr(n.stateNode.containerInfo),ge(n),null;case 10:return Vl(n.type._context),ge(n),null;case 17:return Oe(n.type)&&Jo(),ge(n),null;case 19:if(K(Y),i=n.memoizedState,i===null)return ge(n),null;if(r=(n.flags&128)!==0,a=i.rendering,a===null)if(r)ar(i,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=ri(e),a!==null){for(n.flags|=128,ar(i,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return W(Y,Y.current&1|2),n.child}e=e.sibling}i.tail!==null&&te()>Ht&&(n.flags|=128,r=!0,ar(i,!1),n.lanes=4194304)}else{if(!r)if(e=ri(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ar(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!X)return ge(n),null}else 2*te()-i.renderingStartTime>Ht&&t!==1073741824&&(n.flags|=128,r=!0,ar(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=te(),n.sibling=null,t=Y.current,W(Y,r?t&1|2:t&1),n):(ge(n),null);case 22:case 23:return ss(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?je&1073741824&&(ge(n),n.subtreeFlags&6&&(n.flags|=8192)):ge(n),null;case 24:return null;case 25:return null}throw Error(P(156,n.tag))}function gh(e,n){switch(Bl(n),n.tag){case 1:return Oe(n.type)&&Jo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Bt(),K(Ee),K(ye),Yl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Jl(n),null;case 13:if(K(Y),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(P(340));Ut()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return K(Y),null;case 4:return Bt(),null;case 10:return Vl(n.type._context),null;case 22:case 23:return ss(),null;case 24:return null;default:return null}}var vo=!1,ve=!1,vh=typeof WeakSet=="function"?WeakSet:Set,z=null;function zt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ne(e,n,r)}else t.current=null}function tl(e,n,t){try{t()}catch(r){ne(e,n,r)}}var wu=!1;function yh(e,n){if(Ia=Vo,e=od(),Ul(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,l=-1,s=-1,u=0,c=0,d=e,y=null;n:for(;;){for(var x;d!==t||o!==0&&d.nodeType!==3||(l=a+o),d!==i||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(x=d.firstChild)!==null;)y=d,d=x;for(;;){if(d===e)break n;if(y===t&&++u===o&&(l=a),y===i&&++c===r&&(s=a),(x=d.nextSibling)!==null)break;d=y,y=d.parentNode}d=x}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ua={focusedElem:e,selectionRange:t},Vo=!1,z=n;z!==null;)if(n=z,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,z=e;else for(;z!==null;){n=z;try{var h=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var m=h.memoizedProps,b=h.memoizedState,g=n.stateNode,p=g.getSnapshotBeforeUpdate(n.elementType===n.type?m:Ve(n.type,m),b);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(k){ne(n,n.return,k)}if(e=n.sibling,e!==null){e.return=n.return,z=e;break}z=n.return}return h=wu,wu=!1,h}function wr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&tl(n,t,i)}o=o.next}while(o!==r)}}function Ei(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function rl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function ef(e){var n=e.alternate;n!==null&&(e.alternate=null,ef(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[tn],delete n[Ar],delete n[qa],delete n[eh],delete n[nh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nf(e){return e.tag===5||e.tag===3||e.tag===4}function ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ol(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Xo));else if(r!==4&&(e=e.child,e!==null))for(ol(e,n,t),e=e.sibling;e!==null;)ol(e,n,t),e=e.sibling}function il(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(il(e,n,t),e=e.sibling;e!==null;)il(e,n,t),e=e.sibling}var de=null,Ke=!1;function Sn(e,n,t){for(t=t.child;t!==null;)tf(e,n,t),t=t.sibling}function tf(e,n,t){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(vi,t)}catch{}switch(t.tag){case 5:ve||zt(t,n);case 6:var r=de,o=Ke;de=null,Sn(e,n,t),de=r,Ke=o,de!==null&&(Ke?(e=de,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):de.removeChild(t.stateNode));break;case 18:de!==null&&(Ke?(e=de,t=t.stateNode,e.nodeType===8?ta(e.parentNode,t):e.nodeType===1&&ta(e,t),_r(e)):ta(de,t.stateNode));break;case 4:r=de,o=Ke,de=t.stateNode.containerInfo,Ke=!0,Sn(e,n,t),de=r,Ke=o;break;case 0:case 11:case 14:case 15:if(!ve&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&tl(t,n,a),o=o.next}while(o!==r)}Sn(e,n,t);break;case 1:if(!ve&&(zt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){ne(t,n,l)}Sn(e,n,t);break;case 21:Sn(e,n,t);break;case 22:t.mode&1?(ve=(r=ve)||t.memoizedState!==null,Sn(e,n,t),ve=r):Sn(e,n,t);break;default:Sn(e,n,t)}}function Su(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new vh),n.forEach(function(r){var o=Ch.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function He(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:de=l.stateNode,Ke=!1;break e;case 3:de=l.stateNode.containerInfo,Ke=!0;break e;case 4:de=l.stateNode.containerInfo,Ke=!0;break e}l=l.return}if(de===null)throw Error(P(160));tf(i,a,o),de=null,Ke=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){ne(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)rf(n,e),n=n.sibling}function rf(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(n,e),en(e),r&4){try{wr(3,e,e.return),Ei(3,e)}catch(m){ne(e,e.return,m)}try{wr(5,e,e.return)}catch(m){ne(e,e.return,m)}}break;case 1:He(n,e),en(e),r&512&&t!==null&&zt(t,t.return);break;case 5:if(He(n,e),en(e),r&512&&t!==null&&zt(t,t.return),e.flags&32){var o=e.stateNode;try{Er(o,"")}catch(m){ne(e,e.return,m)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Ec(o,i),_a(l,a);var u=_a(l,i);for(a=0;a<s.length;a+=2){var c=s[a],d=s[a+1];c==="style"?zc(o,d):c==="dangerouslySetInnerHTML"?Nc(o,d):c==="children"?Er(o,d):Cl(o,c,d,u)}switch(l){case"input":Pa(o,i);break;case"textarea":Oc(o,i);break;case"select":var y=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Tt(o,!!i.multiple,x,!1):y!==!!i.multiple&&(i.defaultValue!=null?Tt(o,!!i.multiple,i.defaultValue,!0):Tt(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ar]=i}catch(m){ne(e,e.return,m)}}break;case 6:if(He(n,e),en(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(m){ne(e,e.return,m)}}break;case 3:if(He(n,e),en(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{_r(n.containerInfo)}catch(m){ne(e,e.return,m)}break;case 4:He(n,e),en(e);break;case 13:He(n,e),en(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(as=te())),r&4&&Su(e);break;case 22:if(c=t!==null&&t.memoizedState!==null,e.mode&1?(ve=(u=ve)||c,He(n,e),ve=u):He(n,e),en(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(z=e,c=e.child;c!==null;){for(d=z=c;z!==null;){switch(y=z,x=y.child,y.tag){case 0:case 11:case 14:case 15:wr(4,y,y.return);break;case 1:zt(y,y.return);var h=y.stateNode;if(typeof h.componentWillUnmount=="function"){r=y,t=y.return;try{n=r,h.props=n.memoizedProps,h.state=n.memoizedState,h.componentWillUnmount()}catch(m){ne(r,t,m)}}break;case 5:zt(y,y.return);break;case 22:if(y.memoizedState!==null){Eu(d);continue}}x!==null?(x.return=y,z=x):Eu(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=_c("display",a))}catch(m){ne(e,e.return,m)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(m){ne(e,e.return,m)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:He(n,e),en(e),r&4&&Su(e);break;case 21:break;default:He(n,e),en(e)}}function en(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(nf(t)){var r=t;break e}t=t.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Er(o,""),r.flags&=-33);var i=ku(e);il(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=ku(e);ol(e,l,a);break;default:throw Error(P(161))}}catch(s){ne(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function xh(e,n,t){z=e,of(e)}function of(e,n,t){for(var r=(e.mode&1)!==0;z!==null;){var o=z,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||vo;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||ve;l=vo;var u=ve;if(vo=a,(ve=s)&&!u)for(z=o;z!==null;)a=z,s=a.child,a.tag===22&&a.memoizedState!==null?Ou(o):s!==null?(s.return=a,z=s):Ou(o);for(;i!==null;)z=i,of(i),i=i.sibling;z=o,vo=l,ve=u}Pu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,z=i):Pu(e)}}function Pu(e){for(;z!==null;){var n=z;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ve||Ei(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ve)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:Ve(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&su(n,i,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}su(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&_r(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}ve||n.flags&512&&rl(n)}catch(y){ne(n,n.return,y)}}if(n===e){z=null;break}if(t=n.sibling,t!==null){t.return=n.return,z=t;break}z=n.return}}function Eu(e){for(;z!==null;){var n=z;if(n===e){z=null;break}var t=n.sibling;if(t!==null){t.return=n.return,z=t;break}z=n.return}}function Ou(e){for(;z!==null;){var n=z;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ei(4,n)}catch(s){ne(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(s){ne(n,o,s)}}var i=n.return;try{rl(n)}catch(s){ne(n,i,s)}break;case 5:var a=n.return;try{rl(n)}catch(s){ne(n,a,s)}}}catch(s){ne(n,n.return,s)}if(n===e){z=null;break}var l=n.sibling;if(l!==null){l.return=n.return,z=l;break}z=n.return}}var bh=Math.ceil,ai=bn.ReactCurrentDispatcher,os=bn.ReactCurrentOwner,$e=bn.ReactCurrentBatchConfig,$=0,ce=null,oe=null,fe=0,je=0,jt=Vn(0),ae=0,Ur=null,ct=0,Oi=0,is=0,kr=null,Se=null,as=0,Ht=1/0,cn=null,li=!1,al=null,Fn=null,yo=!1,jn=null,si=0,Sr=0,ll=null,Do=-1,Mo=0;function be(){return $&6?te():Do!==-1?Do:Do=te()}function In(e){return e.mode&1?$&2&&fe!==0?fe&-fe:rh.transition!==null?(Mo===0&&(Mo=Bc()),Mo):(e=q,e!==0||(e=window.event,e=e===void 0?16:Xc(e.type)),e):1}function Ye(e,n,t,r){if(50<Sr)throw Sr=0,ll=null,Error(P(185));Hr(e,t,r),(!($&2)||e!==ce)&&(e===ce&&(!($&2)&&(Oi|=t),ae===4&&_n(e,fe)),Ce(e,r),t===1&&$===0&&!(n.mode&1)&&(Ht=te()+500,ki&&Kn()))}function Ce(e,n){var t=e.callbackNode;r0(e,n);var r=Wo(e,e===ce?fe:0);if(r===0)t!==null&&Ls(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ls(t),n===1)e.tag===0?th(Cu.bind(null,e)):hd(Cu.bind(null,e)),G0(function(){!($&6)&&Kn()}),t=null;else{switch(qc(r)){case 1:t=Tl;break;case 4:t=Uc;break;case 16:t=Ho;break;case 536870912:t=$c;break;default:t=Ho}t=pf(t,af.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function af(e,n){if(Do=-1,Mo=0,$&6)throw Error(P(327));var t=e.callbackNode;if(Mt()&&e.callbackNode!==t)return null;var r=Wo(e,e===ce?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ui(e,r);else{n=r;var o=$;$|=2;var i=sf();(ce!==e||fe!==n)&&(cn=null,Ht=te()+500,ot(e,n));do try{Sh();break}catch(l){lf(e,l)}while(!0);Wl(),ai.current=i,$=o,oe!==null?n=0:(ce=null,fe=0,n=ae)}if(n!==0){if(n===2&&(o=Aa(e),o!==0&&(r=o,n=sl(e,o))),n===1)throw t=Ur,ot(e,0),_n(e,r),Ce(e,te()),t;if(n===6)_n(e,r);else{if(o=e.current.alternate,!(r&30)&&!wh(o)&&(n=ui(e,r),n===2&&(i=Aa(e),i!==0&&(r=i,n=sl(e,i))),n===1))throw t=Ur,ot(e,0),_n(e,r),Ce(e,te()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(P(345));case 2:Zn(e,Se,cn);break;case 3:if(_n(e,r),(r&130023424)===r&&(n=as+500-te(),10<n)){if(Wo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){be(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ba(Zn.bind(null,e,Se,cn),n);break}Zn(e,Se,cn);break;case 4:if(_n(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var a=31-Je(r);i=1<<a,a=n[a],a>o&&(o=a),r&=~i}if(r=o,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bh(r/1960))-r,10<r){e.timeoutHandle=Ba(Zn.bind(null,e,Se,cn),r);break}Zn(e,Se,cn);break;case 5:Zn(e,Se,cn);break;default:throw Error(P(329))}}}return Ce(e,te()),e.callbackNode===t?af.bind(null,e):null}function sl(e,n){var t=kr;return e.current.memoizedState.isDehydrated&&(ot(e,n).flags|=256),e=ui(e,n),e!==2&&(n=Se,Se=t,n!==null&&ul(n)),e}function ul(e){Se===null?Se=e:Se.push.apply(Se,e)}function wh(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!Ge(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function _n(e,n){for(n&=~is,n&=~Oi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Je(n),r=1<<t;e[t]=-1,n&=~r}}function Cu(e){if($&6)throw Error(P(327));Mt();var n=Wo(e,0);if(!(n&1))return Ce(e,te()),null;var t=ui(e,n);if(e.tag!==0&&t===2){var r=Aa(e);r!==0&&(n=r,t=sl(e,r))}if(t===1)throw t=Ur,ot(e,0),_n(e,n),Ce(e,te()),t;if(t===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Zn(e,Se,cn),Ce(e,te()),null}function ls(e,n){var t=$;$|=1;try{return e(n)}finally{$=t,$===0&&(Ht=te()+500,ki&&Kn())}}function dt(e){jn!==null&&jn.tag===0&&!($&6)&&Mt();var n=$;$|=1;var t=$e.transition,r=q;try{if($e.transition=null,q=1,e)return e()}finally{q=r,$e.transition=t,$=n,!($&6)&&Kn()}}function ss(){je=jt.current,K(jt)}function ot(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Y0(t)),oe!==null)for(t=oe.return;t!==null;){var r=t;switch(Bl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jo();break;case 3:Bt(),K(Ee),K(ye),Yl();break;case 5:Jl(r);break;case 4:Bt();break;case 13:K(Y);break;case 19:K(Y);break;case 10:Vl(r.type._context);break;case 22:case 23:ss()}t=t.return}if(ce=e,oe=e=Un(e.current,null),fe=je=n,ae=0,Ur=null,is=Oi=ct=0,Se=kr=null,nt!==null){for(n=0;n<nt.length;n++)if(t=nt[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}t.pending=r}nt=null}return e}function lf(e,n){do{var t=oe;try{if(Wl(),Ro.current=ii,oi){for(var r=G.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}oi=!1}if(ut=0,ue=ie=G=null,br=!1,Mr=0,os.current=null,t===null||t.return===null){ae=1,Ur=n,oe=null;break}e:{var i=e,a=t.return,l=t,s=n;if(n=fe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var y=c.alternate;y?(c.updateQueue=y.updateQueue,c.memoizedState=y.memoizedState,c.lanes=y.lanes):(c.updateQueue=null,c.memoizedState=null)}var x=hu(a);if(x!==null){x.flags&=-257,mu(x,a,l,i,n),x.mode&1&&pu(i,u,n),n=x,s=u;var h=n.updateQueue;if(h===null){var m=new Set;m.add(s),n.updateQueue=m}else h.add(s);break e}else{if(!(n&1)){pu(i,u,n),us();break e}s=Error(P(426))}}else if(X&&l.mode&1){var b=hu(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),mu(b,a,l,i,n),ql(qt(s,l));break e}}i=s=qt(s,l),ae!==4&&(ae=2),kr===null?kr=[i]:kr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var g=qd(i,s,n);lu(i,g);break e;case 1:l=s;var p=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Fn===null||!Fn.has(v)))){i.flags|=65536,n&=-n,i.lanes|=n;var k=Hd(i,l,n);lu(i,k);break e}}i=i.return}while(i!==null)}cf(t)}catch(S){n=S,oe===t&&t!==null&&(oe=t=t.return);continue}break}while(!0)}function sf(){var e=ai.current;return ai.current=ii,e===null?ii:e}function us(){(ae===0||ae===3||ae===2)&&(ae=4),ce===null||!(ct&268435455)&&!(Oi&268435455)||_n(ce,fe)}function ui(e,n){var t=$;$|=2;var r=sf();(ce!==e||fe!==n)&&(cn=null,ot(e,n));do try{kh();break}catch(o){lf(e,o)}while(!0);if(Wl(),$=t,ai.current=r,oe!==null)throw Error(P(261));return ce=null,fe=0,ae}function kh(){for(;oe!==null;)uf(oe)}function Sh(){for(;oe!==null&&!Qp();)uf(oe)}function uf(e){var n=ff(e.alternate,e,je);e.memoizedProps=e.pendingProps,n===null?cf(e):oe=n,os.current=null}function cf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=gh(t,n),t!==null){t.flags&=32767,oe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,oe=null;return}}else if(t=mh(t,n,je),t!==null){oe=t;return}if(n=n.sibling,n!==null){oe=n;return}oe=n=e}while(n!==null);ae===0&&(ae=5)}function Zn(e,n,t){var r=q,o=$e.transition;try{$e.transition=null,q=1,Ph(e,n,t,r)}finally{$e.transition=o,q=r}return null}function Ph(e,n,t,r){do Mt();while(jn!==null);if($&6)throw Error(P(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(o0(e,i),e===ce&&(oe=ce=null,fe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||yo||(yo=!0,pf(Ho,function(){return Mt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=$e.transition,$e.transition=null;var a=q;q=1;var l=$;$|=4,os.current=null,yh(e,t),rf(t,e),H0(Ua),Vo=!!Ia,Ua=Ia=null,e.current=t,xh(t),Xp(),$=l,q=a,$e.transition=i}else e.current=t;if(yo&&(yo=!1,jn=e,si=o),i=e.pendingLanes,i===0&&(Fn=null),Gp(t.stateNode),Ce(e,te()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(li)throw li=!1,e=al,al=null,e;return si&1&&e.tag!==0&&Mt(),i=e.pendingLanes,i&1?e===ll?Sr++:(Sr=0,ll=e):Sr=0,Kn(),null}function Mt(){if(jn!==null){var e=qc(si),n=$e.transition,t=q;try{if($e.transition=null,q=16>e?16:e,jn===null)var r=!1;else{if(e=jn,jn=null,si=0,$&6)throw Error(P(331));var o=$;for($|=4,z=e.current;z!==null;){var i=z,a=i.child;if(z.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(z=u;z!==null;){var c=z;switch(c.tag){case 0:case 11:case 15:wr(8,c,i)}var d=c.child;if(d!==null)d.return=c,z=d;else for(;z!==null;){c=z;var y=c.sibling,x=c.return;if(ef(c),c===u){z=null;break}if(y!==null){y.return=x,z=y;break}z=x}}}var h=i.alternate;if(h!==null){var m=h.child;if(m!==null){h.child=null;do{var b=m.sibling;m.sibling=null,m=b}while(m!==null)}}z=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,z=a;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:wr(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,z=g;break e}z=i.return}}var p=e.current;for(z=p;z!==null;){a=z;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,z=v;else e:for(a=p;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ei(9,l)}}catch(S){ne(l,l.return,S)}if(l===a){z=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,z=k;break e}z=l.return}}if($=o,Kn(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(vi,e)}catch{}r=!0}return r}finally{q=t,$e.transition=n}}return!1}function Nu(e,n,t){n=qt(t,n),n=qd(e,n,1),e=Mn(e,n,1),n=be(),e!==null&&(Hr(e,1,n),Ce(e,n))}function ne(e,n,t){if(e.tag===3)Nu(e,e,t);else for(;n!==null;){if(n.tag===3){Nu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fn===null||!Fn.has(r))){e=qt(t,e),e=Hd(n,e,1),n=Mn(n,e,1),e=be(),n!==null&&(Hr(n,1,e),Ce(n,e));break}}n=n.return}}function Eh(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=be(),e.pingedLanes|=e.suspendedLanes&t,ce===e&&(fe&t)===t&&(ae===4||ae===3&&(fe&130023424)===fe&&500>te()-as?ot(e,0):is|=t),Ce(e,n)}function df(e,n){n===0&&(e.mode&1?(n=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):n=1);var t=be();e=yn(e,n),e!==null&&(Hr(e,n,t),Ce(e,t))}function Oh(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),df(e,t)}function Ch(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(n),df(e,t)}var ff;ff=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ee.current)Pe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Pe=!1,hh(e,n,t);Pe=!!(e.flags&131072)}else Pe=!1,X&&n.flags&1048576&&md(n,Zo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Lo(e,n),e=n.pendingProps;var o=It(n,ye.current);Dt(n,t),o=Zl(null,n,r,e,o,t);var i=es();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Oe(r)?(i=!0,Yo(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ql(n),o.updater=Pi,n.stateNode=o,o._reactInternals=n,Xa(n,r,e,t),n=Ga(null,n,r,!0,i,t)):(n.tag=0,X&&i&&$l(n),xe(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Lo(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=_h(r),e=Ve(r,e),o){case 0:n=Ya(null,n,r,e,t);break e;case 1:n=yu(null,n,r,e,t);break e;case 11:n=gu(null,n,r,e,t);break e;case 14:n=vu(null,n,r,Ve(r.type,e),t);break e}throw Error(P(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ve(r,o),Ya(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ve(r,o),yu(e,n,r,o,t);case 3:e:{if(Qd(n),e===null)throw Error(P(387));r=n.pendingProps,i=n.memoizedState,o=i.element,wd(e,n),ti(n,r,null,t);var a=n.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=qt(Error(P(423)),n),n=xu(e,n,r,t,o);break e}else if(r!==o){o=qt(Error(P(424)),n),n=xu(e,n,r,t,o);break e}else for(Te=Dn(n.stateNode.containerInfo.firstChild),Re=n,X=!0,Qe=null,t=xd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ut(),r===o){n=xn(e,n,t);break e}xe(e,n,r,t)}n=n.child}return n;case 5:return kd(n),e===null&&Va(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,$a(r,o)?a=null:i!==null&&$a(r,i)&&(n.flags|=32),Kd(e,n),xe(e,n,a,t),n.child;case 6:return e===null&&Va(n),null;case 13:return Xd(e,n,t);case 4:return Xl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=$t(n,null,r,t):xe(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ve(r,o),gu(e,n,r,o,t);case 7:return xe(e,n,n.pendingProps,t),n.child;case 8:return xe(e,n,n.pendingProps.children,t),n.child;case 12:return xe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,a=o.value,W(ei,r._currentValue),r._currentValue=a,i!==null)if(Ge(i.value,a)){if(i.children===o.children&&!Ee.current){n=xn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=mn(-1,t&-t),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Ka(i.return,t,n),l.lanes|=t;break}s=s.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(P(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),Ka(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}xe(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,Dt(n,t),o=Be(o),r=r(o),n.flags|=1,xe(e,n,r,t),n.child;case 14:return r=n.type,o=Ve(r,n.pendingProps),o=Ve(r.type,o),vu(e,n,r,o,t);case 15:return Wd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ve(r,o),Lo(e,n),n.tag=1,Oe(r)?(e=!0,Yo(n)):e=!1,Dt(n,t),Bd(n,r,o),Xa(n,r,o,t),Ga(null,n,r,!0,e,t);case 19:return Jd(e,n,t);case 22:return Vd(e,n,t)}throw Error(P(156,n.tag))};function pf(e,n){return Ic(e,n)}function Nh(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,n,t,r){return new Nh(e,n,t,r)}function cs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _h(e){if(typeof e=="function")return cs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_l)return 11;if(e===zl)return 14}return 2}function Un(e,n){var t=e.alternate;return t===null?(t=Ue(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Fo(e,n,t,r,o,i){var a=2;if(r=e,typeof e=="function")cs(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case wt:return it(t.children,o,i,n);case Nl:a=8,o|=8;break;case xa:return e=Ue(12,t,n,o|2),e.elementType=xa,e.lanes=i,e;case ba:return e=Ue(13,t,n,o),e.elementType=ba,e.lanes=i,e;case wa:return e=Ue(19,t,n,o),e.elementType=wa,e.lanes=i,e;case kc:return Ci(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bc:a=10;break e;case wc:a=9;break e;case _l:a=11;break e;case zl:a=14;break e;case On:a=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return n=Ue(a,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function it(e,n,t,r){return e=Ue(7,e,r,n),e.lanes=t,e}function Ci(e,n,t,r){return e=Ue(22,e,r,n),e.elementType=kc,e.lanes=t,e.stateNode={isHidden:!1},e}function ca(e,n,t){return e=Ue(6,e,null,n),e.lanes=t,e}function da(e,n,t){return n=Ue(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function zh(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wi(0),this.expirationTimes=Wi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ds(e,n,t,r,o,i,a,l,s){return e=new zh(e,n,t,l,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Ue(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ql(i),e}function jh(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function hf(e){if(!e)return qn;e=e._reactInternals;e:{if(ht(e)!==e||e.tag!==1)throw Error(P(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Oe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(P(171))}if(e.tag===1){var t=e.type;if(Oe(t))return pd(e,t,n)}return n}function mf(e,n,t,r,o,i,a,l,s){return e=ds(t,r,!0,e,o,i,a,l,s),e.context=hf(null),t=e.current,r=be(),o=In(t),i=mn(r,o),i.callback=n??null,Mn(t,i,o),e.current.lanes=o,Hr(e,o,r),Ce(e,r),e}function Ni(e,n,t,r){var o=n.current,i=be(),a=In(o);return t=hf(t),n.context===null?n.context=t:n.pendingContext=t,n=mn(i,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Mn(o,n,a),e!==null&&(Ye(e,o,a,i),To(e,o,a)),a}function ci(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _u(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function fs(e,n){_u(e,n),(e=e.alternate)&&_u(e,n)}function Th(){return null}var gf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ps(e){this._internalRoot=e}_i.prototype.render=ps.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(P(409));Ni(e,n,null,null)};_i.prototype.unmount=ps.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;dt(function(){Ni(null,e,null,null)}),n[vn]=null}};function _i(e){this._internalRoot=e}_i.prototype.unstable_scheduleHydration=function(e){if(e){var n=Vc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Nn.length&&n!==0&&n<Nn[t].priority;t++);Nn.splice(t,0,e),t===0&&Qc(e)}};function hs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zu(){}function Rh(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ci(a);i.call(u)}}var a=mf(n,r,e,0,null,!1,!1,"",zu);return e._reactRootContainer=a,e[vn]=a.current,Tr(e.nodeType===8?e.parentNode:e),dt(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=ci(s);l.call(u)}}var s=ds(e,0,!1,null,null,!1,!1,"",zu);return e._reactRootContainer=s,e[vn]=s.current,Tr(e.nodeType===8?e.parentNode:e),dt(function(){Ni(n,s,t,r)}),s}function ji(e,n,t,r,o){var i=t._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=ci(a);l.call(s)}}Ni(n,a,e,o)}else a=Rh(t,n,e,o,r);return ci(a)}Hc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=fr(n.pendingLanes);t!==0&&(Rl(n,t|1),Ce(n,te()),!($&6)&&(Ht=te()+500,Kn()))}break;case 13:dt(function(){var r=yn(e,1);if(r!==null){var o=be();Ye(r,e,1,o)}}),fs(e,1)}};Al=function(e){if(e.tag===13){var n=yn(e,134217728);if(n!==null){var t=be();Ye(n,e,134217728,t)}fs(e,134217728)}};Wc=function(e){if(e.tag===13){var n=In(e),t=yn(e,n);if(t!==null){var r=be();Ye(t,e,n,r)}fs(e,n)}};Vc=function(){return q};Kc=function(e,n){var t=q;try{return q=e,n()}finally{q=t}};ja=function(e,n,t){switch(n){case"input":if(Pa(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=wi(r);if(!o)throw Error(P(90));Pc(r),Pa(r,o)}}}break;case"textarea":Oc(e,t);break;case"select":n=t.value,n!=null&&Tt(e,!!t.multiple,n,!1)}};Rc=ls;Ac=dt;var Ah={usingClientEntryPoint:!1,Events:[Vr,Et,wi,jc,Tc,ls]},lr={findFiberByHostInstance:et,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lh={bundleType:lr.bundleType,version:lr.version,rendererPackageName:lr.rendererPackageName,rendererConfig:lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mc(e),e===null?null:e.stateNode},findFiberByHostInstance:lr.findFiberByHostInstance||Th,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{vi=xo.inject(Lh),an=xo}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ah;De.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hs(n))throw Error(P(200));return jh(e,n,null,t)};De.createRoot=function(e,n){if(!hs(e))throw Error(P(299));var t=!1,r="",o=gf;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=ds(e,1,!1,null,null,t,!1,r,o),e[vn]=n.current,Tr(e.nodeType===8?e.parentNode:e),new ps(n)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Mc(n),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return dt(e)};De.hydrate=function(e,n,t){if(!zi(n))throw Error(P(200));return ji(null,e,n,!0,t)};De.hydrateRoot=function(e,n,t){if(!hs(e))throw Error(P(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",a=gf;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=mf(n,null,e,1,t??null,o,!1,i,a),e[vn]=n.current,Tr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new _i(n)};De.render=function(e,n,t){if(!zi(n))throw Error(P(200));return ji(null,e,n,!1,t)};De.unmountComponentAtNode=function(e){if(!zi(e))throw Error(P(40));return e._reactRootContainer?(dt(function(){ji(null,null,e,!1,function(){e._reactRootContainer=null,e[vn]=null})}),!0):!1};De.unstable_batchedUpdates=ls;De.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!zi(t))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return ji(e,n,t,!1,r)};De.version="18.3.1-next-f1338f8080-20240426";function vf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vf)}catch(e){console.error(e)}}vf(),gc.exports=De;var Dh=gc.exports;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function di(){return di=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},di.apply(this,arguments)}var Tn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Tn||(Tn={}));function Mh(e){e===void 0&&(e={});let{initialEntries:n=["/"],initialIndex:t,v5Compat:r=!1}=e,o;o=n.map((x,h)=>c(x,typeof x=="string"?null:x.state,h===0?"default":void 0));let i=s(t??o.length-1),a=Tn.Pop,l=null;function s(x){return Math.min(Math.max(x,0),o.length-1)}function u(){return o[i]}function c(x,h,m){h===void 0&&(h=null);let b=Ih(o?u().pathname:"/",x,h,m);return ms(b.pathname.charAt(0)==="/","relative pathnames are not supported in memory history: "+JSON.stringify(x)),b}function d(x){return typeof x=="string"?x:cl(x)}return{get index(){return i},get action(){return a},get location(){return u()},createHref:d,createURL(x){return new URL(d(x),"http://localhost")},encodeLocation(x){let h=typeof x=="string"?mt(x):x;return{pathname:h.pathname||"",search:h.search||"",hash:h.hash||""}},push(x,h){a=Tn.Push;let m=c(x,h);i+=1,o.splice(i,o.length,m),r&&l&&l({action:a,location:m,delta:1})},replace(x,h){a=Tn.Replace;let m=c(x,h);o[i]=m,r&&l&&l({action:a,location:m,delta:0})},go(x){a=Tn.Pop;let h=s(i+x),m=o[h];i=h,l&&l({action:a,location:m,delta:x})},listen(x){return l=x,()=>{l=null}}}}function le(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function ms(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Fh(){return Math.random().toString(36).substr(2,8)}function Ih(e,n,t,r){return t===void 0&&(t=null),di({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?mt(n):n,{state:t,key:n&&n.key||r||Fh()})}function cl(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function mt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}var ju;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ju||(ju={}));function Uh(e,n,t){return t===void 0&&(t="/"),$h(e,n,t,!1)}function $h(e,n,t,r){let o=typeof n=="string"?mt(n):n,i=gs(o.pathname||"/",t);if(i==null)return null;let a=yf(e);Bh(a);let l=null;for(let s=0;l==null&&s<a.length;++s){let u=Zh(i);l=Yh(a[s],u,r)}return l}function yf(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(le(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=$n([r,s.relativePath]),c=t.concat(s);i.children&&i.children.length>0&&(le(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),yf(i.children,n,c,u)),!(i.path==null&&!i.index)&&n.push({path:u,score:Xh(u,i.index),routesMeta:c})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of xf(i.path))o(i,a,s)}),n}function xf(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,o=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=xf(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Bh(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Jh(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const qh=/^:[\w-]+$/,Hh=3,Wh=2,Vh=1,Kh=10,Qh=-2,Tu=e=>e==="*";function Xh(e,n){let t=e.split("/"),r=t.length;return t.some(Tu)&&(r+=Qh),n&&(r+=Wh),t.filter(o=>!Tu(o)).reduce((o,i)=>o+(qh.test(i)?Hh:i===""?Vh:Kh),r)}function Jh(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function Yh(e,n,t){let{routesMeta:r}=e,o={},i="/",a=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,c=i==="/"?n:n.slice(i.length)||"/",d=Ru({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c),y=s.route;if(!d&&u&&t&&!r[r.length-1].route.index&&(d=Ru({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},c)),!d)return null;Object.assign(o,d.params),a.push({params:o,pathname:$n([i,d.pathname]),pathnameBase:r1($n([i,d.pathnameBase])),route:y}),d.pathnameBase!=="/"&&(i=$n([i,d.pathnameBase]))}return a}function Ru(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Gh(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:y,isOptional:x}=c;if(y==="*"){let m=l[d]||"";a=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}const h=l[d];return x&&!h?u[y]=void 0:u[y]=(h||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function Gh(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),ms(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function Zh(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return ms(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function gs(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function e1(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?mt(e):e;return{pathname:t?t.startsWith("/")?t:n1(t,n):n,search:o1(r),hash:i1(o)}}function n1(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function fa(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function t1(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function bf(e,n){let t=t1(e);return n?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function wf(e,n,t,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=mt(e):(o=di({},e),le(!o.pathname||!o.pathname.includes("?"),fa("?","pathname","search",o)),le(!o.pathname||!o.pathname.includes("#"),fa("#","pathname","hash",o)),le(!o.search||!o.search.includes("#"),fa("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=t;else{let d=n.length-1;if(!r&&a.startsWith("..")){let y=a.split("/");for(;y[0]==="..";)y.shift(),d-=1;o.pathname=y.join("/")}l=d>=0?n[d]:"/"}let s=e1(o,l),u=a&&a!=="/"&&a.endsWith("/"),c=(i||a===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const $n=e=>e.join("/").replace(/\/\/+/g,"/"),r1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),o1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,i1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function a1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const kf=["post","put","patch","delete"];new Set(kf);const l1=["get",...kf];new Set(l1);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $r(){return $r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},$r.apply(this,arguments)}const vs=E.createContext(null),s1=E.createContext(null),gt=E.createContext(null),Ti=E.createContext(null),Qn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Sf=E.createContext(null);function u1(e,n){let{relative:t}=n===void 0?{}:n;Qr()||le(!1);let{basename:r,navigator:o}=E.useContext(gt),{hash:i,pathname:a,search:l}=Ef(e,{relative:t}),s=a;return r!=="/"&&(s=a==="/"?r:$n([r,a])),o.createHref({pathname:s,search:l,hash:i})}function Qr(){return E.useContext(Ti)!=null}function Xn(){return Qr()||le(!1),E.useContext(Ti).location}function Pf(e){E.useContext(gt).static||E.useLayoutEffect(e)}function vt(){let{isDataRoute:e}=E.useContext(Qn);return e?P1():c1()}function c1(){Qr()||le(!1);let e=E.useContext(vs),{basename:n,future:t,navigator:r}=E.useContext(gt),{matches:o}=E.useContext(Qn),{pathname:i}=Xn(),a=JSON.stringify(bf(o,t.v7_relativeSplatPath)),l=E.useRef(!1);return Pf(()=>{l.current=!0}),E.useCallback(function(u,c){if(c===void 0&&(c={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let d=wf(u,JSON.parse(a),i,c.relative==="path");e==null&&n!=="/"&&(d.pathname=d.pathname==="/"?n:$n([n,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[n,r,a,i,e])}const d1=E.createContext(null);function f1(e){let n=E.useContext(Qn).outlet;return n&&E.createElement(d1.Provider,{value:e},n)}function Ef(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=E.useContext(gt),{matches:o}=E.useContext(Qn),{pathname:i}=Xn(),a=JSON.stringify(bf(o,r.v7_relativeSplatPath));return E.useMemo(()=>wf(e,JSON.parse(a),i,t==="path"),[e,a,i,t])}function p1(e,n){return h1(e,n)}function h1(e,n,t,r){Qr()||le(!1);let{navigator:o}=E.useContext(gt),{matches:i}=E.useContext(Qn),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let u=Xn(),c;if(n){var d;let b=typeof n=="string"?mt(n):n;s==="/"||(d=b.pathname)!=null&&d.startsWith(s)||le(!1),c=b}else c=u;let y=c.pathname||"/",x=y;if(s!=="/"){let b=s.replace(/^\//,"").split("/");x="/"+y.replace(/^\//,"").split("/").slice(b.length).join("/")}let h=Uh(e,{pathname:x}),m=x1(h&&h.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:$n([s,o.encodeLocation?o.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?s:$n([s,o.encodeLocation?o.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,t,r);return n&&m?E.createElement(Ti.Provider,{value:{location:$r({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Tn.Pop}},m):m}function m1(){let e=S1(),n=a1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},n),t?E.createElement("pre",{style:o},t):null,null)}const g1=E.createElement(m1,null);class v1 extends E.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?E.createElement(Qn.Provider,{value:this.props.routeContext},E.createElement(Sf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function y1(e){let{routeContext:n,match:t,children:r}=e,o=E.useContext(vs);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),E.createElement(Qn.Provider,{value:n},r)}function x1(e,n,t,r){var o;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let a=e,l=(o=t)==null?void 0:o.errors;if(l!=null){let c=a.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);c>=0||le(!1),a=a.slice(0,Math.min(a.length,c+1))}let s=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let c=0;c<a.length;c++){let d=a[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:y,errors:x}=t,h=d.route.loader&&y[d.route.id]===void 0&&(!x||x[d.route.id]===void 0);if(d.route.lazy||h){s=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((c,d,y)=>{let x,h=!1,m=null,b=null;t&&(x=l&&d.route.id?l[d.route.id]:void 0,m=d.route.errorElement||g1,s&&(u<0&&y===0?(h=!0,b=null):u===y&&(h=!0,b=d.route.hydrateFallbackElement||null)));let g=n.concat(a.slice(0,y+1)),p=()=>{let v;return x?v=m:h?v=b:d.route.Component?v=E.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=c,E.createElement(y1,{match:d,routeContext:{outlet:c,matches:g,isDataRoute:t!=null},children:v})};return t&&(d.route.ErrorBoundary||d.route.errorElement||y===0)?E.createElement(v1,{location:t.location,revalidation:t.revalidation,component:m,error:x,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var Of=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Of||{}),fi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(fi||{});function b1(e){let n=E.useContext(vs);return n||le(!1),n}function w1(e){let n=E.useContext(s1);return n||le(!1),n}function k1(e){let n=E.useContext(Qn);return n||le(!1),n}function Cf(e){let n=k1(),t=n.matches[n.matches.length-1];return t.route.id||le(!1),t.route.id}function S1(){var e;let n=E.useContext(Sf),t=w1(fi.UseRouteError),r=Cf(fi.UseRouteError);return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function P1(){let{router:e}=b1(Of.UseNavigateStable),n=Cf(fi.UseNavigateStable),t=E.useRef(!1);return Pf(()=>{t.current=!0}),E.useCallback(function(o,i){i===void 0&&(i={}),t.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,$r({fromRouteId:n},i)))},[e,n])}const E1="startTransition",Au=Ep[E1];function O1(e){let{basename:n,children:t,initialEntries:r,initialIndex:o,future:i}=e,a=E.useRef();a.current==null&&(a.current=Mh({initialEntries:r,initialIndex:o,v5Compat:!0}));let l=a.current,[s,u]=E.useState({action:l.action,location:l.location}),{v7_startTransition:c}=i||{},d=E.useCallback(y=>{c&&Au?Au(()=>u(y)):u(y)},[u,c]);return E.useLayoutEffect(()=>l.listen(d),[l,d]),E.createElement(C1,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:l,future:i})}function Nf(e){return f1(e.context)}function un(e){le(!1)}function C1(e){let{basename:n="/",children:t=null,location:r,navigationType:o=Tn.Pop,navigator:i,static:a=!1,future:l}=e;Qr()&&le(!1);let s=n.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:s,navigator:i,static:a,future:$r({v7_relativeSplatPath:!1},l)}),[s,l,i,a]);typeof r=="string"&&(r=mt(r));let{pathname:c="/",search:d="",hash:y="",state:x=null,key:h="default"}=r,m=E.useMemo(()=>{let b=gs(c,s);return b==null?null:{location:{pathname:b,search:d,hash:y,state:x,key:h},navigationType:o}},[s,c,d,y,x,h,o]);return m==null?null:E.createElement(gt.Provider,{value:u},E.createElement(Ti.Provider,{children:t,value:m}))}function N1(e){let{children:n,location:t}=e;return p1(dl(n),t)}new Promise(()=>{});function dl(e,n){n===void 0&&(n=[]);let t=[];return E.Children.forEach(e,(r,o)=>{if(!E.isValidElement(r))return;let i=[...n,o];if(r.type===E.Fragment){t.push.apply(t,dl(r.props.children,i));return}r.type!==un&&le(!1),!r.props.index||!r.props.children||le(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=dl(r.props.children,i)),t.push(a)}),t}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},fl.apply(this,arguments)}function _1(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function z1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function j1(e,n){return e.button===0&&(!n||n==="_self")&&!z1(e)}const T1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],R1="6";try{window.__reactRouterVersion=R1}catch{}const A1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",L1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rn=E.forwardRef(function(n,t){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:s,to:u,preventScrollReset:c,unstable_viewTransition:d}=n,y=_1(n,T1),{basename:x}=E.useContext(gt),h,m=!1;if(typeof u=="string"&&L1.test(u)&&(h=u,A1))try{let v=new URL(window.location.href),k=u.startsWith("//")?new URL(v.protocol+u):new URL(u),S=gs(k.pathname,x);k.origin===v.origin&&S!=null?u=S+k.search+k.hash:m=!0}catch{}let b=u1(u,{relative:o}),g=D1(u,{replace:a,state:l,target:s,preventScrollReset:c,relative:o,unstable_viewTransition:d});function p(v){r&&r(v),v.defaultPrevented||g(v)}return E.createElement("a",fl({},y,{href:h||b,onClick:m||i?r:p,ref:t,target:s}))});var Lu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Lu||(Lu={}));var Du;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Du||(Du={}));function D1(e,n){let{target:t,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l}=n===void 0?{}:n,s=vt(),u=Xn(),c=Ef(e,{relative:a});return E.useCallback(d=>{if(j1(d,t)){d.preventDefault();let y=r!==void 0?r:cl(u)===cl(c);s(e,{replace:y,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l})}},[u,s,c,r,o,t,e,i,a,l])}const Qt=({className:e})=>f.jsx("svg",{className:`${e}`,fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M15 5L9.66939 11.2191C9.2842 11.6684 9.2842 12.3316 9.66939 12.7809L15 19",stroke:"#FEFEFE",strokeLinecap:"round",strokeWidth:"1.5"})}),M1=({className:e})=>f.jsx("svg",{className:`${e}`,fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M9 19L14.3306 12.7809C14.7158 12.3316 14.7158 11.6684 14.3306 11.2191L9 5",stroke:"#FEFEFE",strokeLinecap:"round",strokeWidth:"1.5"})}),on=({icon:e,title:n})=>f.jsxs("div",{className:"flex  overflow-hidden justify-between p-[10px] bg-[#50505026] mini:w-[80%]",children:[f.jsxs("div",{className:"inline-flex items-center gap-[12px]",children:[e,f.jsx("div",{className:"w-fit mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[18px] whitespace-nowrap",children:n})]}),f.jsx(M1,{className:"!relative !w-[24px] !h-[24px] mini:hidden"})]}),_f=({className:e})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:`${e}`,viewBox:"0 0 1024 1024",children:[f.jsx("path",{fill:"yellow",d:"m161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z"}),f.jsx("path",{fill:"yellow",d:"m161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z"}),f.jsx("path",{fill:"yellow",d:"M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224m0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160"})]}),Hn=({className:e})=>f.jsxs("svg",{width:"64",className:`${e}`,height:"65",viewBox:"0 0 64 65",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[f.jsx("path",{d:"M49.5678 22.5137H43.9056C43.2471 22.5137 42.6189 22.2516 42.1808 21.7961L39.8857 19.4017C39.544 19.0455 39.0508 18.8394 38.5356 18.8394C38.0203 18.8394 37.5271 19.0429 37.1855 19.4017L35.2154 21.4577C34.5707 22.1294 33.6449 22.5162 32.6723 22.5162H1.68624C0.804545 24.8394 0.228689 27.2923 0 29.8394H29.253C29.7682 29.8394 30.2586 29.646 30.6141 29.3025L33.3391 26.679C33.678 26.3508 34.1491 26.1651 34.6396 26.1651H34.7525C35.2678 26.1651 35.761 26.3686 36.1026 26.7274L38.3978 29.1218C38.8359 29.5773 39.4613 29.8394 40.1226 29.8394H64C63.7713 27.2923 63.1954 24.8394 62.3137 22.5162H49.5678V22.5137Z",fill:"black"}),f.jsx("path",{d:"M17.9561 46.8366C18.4622 46.8366 18.944 46.627 19.2931 46.2547L21.9698 43.4112C22.3027 43.0554 22.7655 42.8541 23.2473 42.8541H23.3582C23.8643 42.8541 24.3488 43.0747 24.6844 43.4636L26.9389 46.0588C27.3692 46.5525 27.9836 46.8366 28.6332 46.8366H60.418C61.6089 44.3296 62.4804 41.6378 63 38.8219H32.4926C31.8457 38.8219 31.2287 38.5378 30.7983 38.0441L28.5438 35.4489C28.2082 35.0628 27.7238 34.8394 27.2177 34.8394C26.7115 34.8394 26.2271 35.06 25.8915 35.4489L23.9563 37.6773C23.323 38.4054 22.4137 38.8246 21.4583 38.8246H1C1.51964 41.6433 2.39114 44.3323 3.58199 46.8394H17.9561V46.8366Z",fill:"black"}),f.jsx("path",{d:"M40.0967 13.8394C40.6083 13.8394 41.0953 13.6272 41.4483 13.2502L44.1542 10.3716C44.4908 10.0114 44.9586 9.80757 45.4457 9.80757H45.5578C46.0695 9.80757 46.5592 10.0309 46.8985 10.4246L49.1776 13.052C49.6127 13.5518 50.2338 13.8394 50.8904 13.8394H57C51.1804 5.9461 41.9244 0.839355 31.5 0.839355C21.0757 0.839355 11.8196 5.9461 6 13.8394H40.0994H40.0967Z",fill:"black"}),f.jsx("path",{d:"M27.7966 54.7633H19.375C18.7159 54.7633 18.0872 54.4834 17.6487 53.997L15.3517 51.4399C15.0097 51.0595 14.5161 50.8394 14.0005 50.8394C13.4848 50.8394 12.9912 51.0567 12.6493 51.4399L10.6776 53.6356C10.0323 54.3529 9.1058 54.766 8.13237 54.766H8C13.8681 60.9616 22.2208 64.8394 31.5 64.8394C40.7792 64.8394 49.1319 60.9616 55 54.766H27.7966V54.7633Z",fill:"black"})]}),zf=({className:e})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:`${e}`,viewBox:"0 0 1100 1100",width:"1100",height:"1100",children:f.jsx("path",{fill:"yellow",d:"M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"})}),jf=({className:e})=>f.jsx("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"512.000000pt",height:"512.000000pt",className:`${e}`,viewBox:"0 0 512.000000 512.000000",children:f.jsxs("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"yellow",stroke:"none",children:[f.jsx("path",{d:`M1650 5109 c-32 -13 -68 -47 -86 -81 -29 -55 -18 -102 121 -517 l135\r
-405 -62 -65 c-87 -92 -106 -101 -205 -101 l-83 0 0 -165 0 -165 84 0 c188 0\r
277 39 418 182 78 80 110 105 171 134 209 99 411 58 593 -121 93 -93 187 -147\r
283 -165 29 -6 181 -10 337 -10 168 0 305 -4 336 -11 171 -36 317 -167 387\r
-347 25 -67 25 -68 29 -424 l3 -358 -150 0 -151 0 0 183 c0 255 -21 326 -132\r
443 -56 59 -121 97 -203 119 -71 18 -388 21 -481 4 -94 -17 -173 -61 -265\r
-147 -46 -42 -100 -87 -119 -99 -108 -66 -277 -85 -398 -44 -84 29 -132 60\r
-225 147 -125 118 -224 154 -419 154 l-98 0 0 -165 0 -165 100 0 c118 0 134\r
-6 214 -84 159 -156 354 -236 576 -236 221 0 408 76 575 234 93 89 89 88 302\r
84 l185 -3 29 -33 29 -32 0 -269 c0 -173 4 -280 11 -302 17 -51 65 -96 115\r
-108 56 -14 665 -15 716 -1 45 13 105 77 113 122 4 18 5 236 3 483 -4 427 -5\r
454 -26 530 -79 285 -285 514 -548 606 -121 42 -191 49 -495 49 -317 0 -330 2\r
-384 59 l-29 32 148 445 c160 483 160 481 113 552 -12 18 -40 41 -63 52 -39\r
19 -62 20 -760 19 -453 0 -728 -4 -744 -10z m580 -454 l0 -135 165 0 165 0 0\r
135 0 135 145 0 c80 0 145 -3 145 -6 0 -4 -39 -125 -87 -271 -70 -215 -89\r
-264 -102 -259 -133 43 -170 49 -301 50 -94 0 -152 -5 -192 -16 l-57 -16 -82\r
247 c-45 135 -84 252 -87 259 -3 9 29 12 142 12 l146 0 0 -135z`}),f.jsx("path",{d:`M430 4438 c-18 -13 -43 -36 -54 -51 -21 -28 -21 -33 -24 -928 -3\r
-1003 -7 -942 66 -997 l35 -27 357 0 357 0 35 27 c72 55 69 9 66 1004 l-3 891\r
-28 36 c-51 68 -48 67 -430 67 -340 0 -344 0 -377 -22z m510 -988 l0 -690\r
-130 0 -130 0 0 690 0 690 130 0 130 0 0 -690z`}),f.jsx("path",{d:`M3879 1987 c-19 -12 -78 -74 -133 -137 -279 -325 -471 -619 -548\r
-840 -30 -87 -33 -105 -32 -215 0 -93 5 -137 22 -198 79 -278 291 -490 569\r
-569 112 -32 305 -32 417 0 276 79 489 293 568 569 34 118 31 289 -5 399 -54\r
164 -178 375 -362 619 -115 152 -283 345 -324 372 -47 32 -125 32 -172 0z\r
m235 -572 c161 -212 279 -411 313 -525 20 -68 13 -173 -17 -252 -45 -122 -154\r
-230 -279 -280 -81 -32 -251 -32 -332 0 -124 49 -232 157 -280 280 -18 44 -23\r
78 -23 152 -1 85 2 102 31 166 61 140 199 350 362 553 l75 94 33 -39 c19 -22\r
71 -88 117 -149z`}),f.jsx("path",{d:`M3910 1198 c0 -40 -3 -45 -40 -66 -76 -43 -104 -153 -57 -222 14 -22\r
53 -50 107 -79 85 -46 103 -68 80 -96 -19 -23 -75 -18 -131 10 -36 19 -51 22\r
-54 13 -20 -57 -35 -102 -35 -109 0 -10 65 -44 103 -53 24 -6 27 -11 27 -52\r
l0 -45 58 3 57 3 5 47 c4 40 10 50 40 70 56 38 80 82 80 148 0 82 -34 126\r
-135 174 -65 31 -76 40 -73 59 4 31 63 35 117 8 22 -12 42 -17 45 -13 4 6 46\r
115 46 119 0 0 -25 11 -54 24 -51 21 -55 25 -58 58 l-3 36 -62 3 -63 3 0 -43z`})]})}),Tf=()=>{const e=vt(),n=()=>{e("/")};return f.jsx("div",{className:"h-[200vh] grow overflow-y-scroll",children:f.jsx("div",{className:"absolute w-[640px] sidebar:w-[400px] h-[766px] top-[-178px] left-[25px]",children:f.jsxs("div",{className:"flex flex-col w-full items-start gap-[64px] absolute top-[228px] left-0",children:[f.jsx("div",{className:"flex-col gap-[40px] p-[24px] self-stretch w-full flex-[0_0_auto] rounded-[16px] flex items-start relative",children:f.jsxs("div",{className:"flex items-end gap-[8px] relative self-stretch w-full flex-[0_0_auto]",onClick:n,children:[f.jsx(Qt,{className:"!relative !w-[24px] !h-[24px]"}),f.jsx(Hn,{className:"!relative !w-[50px] !h-[50px] bg-white rounded-xl"}),f.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[21.6px] whitespace-nowrap uppercase",children:"Aptos Move"})]})}),f.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full",children:f.jsxs("div",{className:"flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full",children:[f.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full",children:f.jsx(rn,{to:"/faucets",className:"focus:outline-none",state:{page:"aptos"},children:f.jsx(on,{icon:f.jsx(jf,{className:"!relative !w-[24px] !h-[24px]"}),title:"Faucets"})})}),f.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full",children:f.jsx(rn,{to:"/account-balance",className:"focus:outline-none",state:{page:"aptos"},children:f.jsx(on,{icon:f.jsx(_f,{className:"!relative !w-[24px] !h-[24px]"}),title:"Account Balance"})})}),f.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full",children:f.jsx(rn,{to:"/your-address",className:"focus:outline-none",state:{page:"aptos"},children:f.jsx(on,{icon:f.jsx(zf,{className:"!relative !w-[24px] !h-[24px]"}),title:"YourAddress"})})}),f.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full",children:f.jsx(rn,{to:"/deploy",className:"focus:outline-none",state:{page:"aptos"},children:f.jsx(on,{icon:f.jsx(Hn,{className:"!relative !w-[24px] !h-[24px]"}),title:"Deploy"})})})]})})]})})})},Xt=({className:e})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:`${e}`,width:"300",height:"300",version:"1.0",viewBox:"0 0 200 200",children:[f.jsx("path",{d:"M83.8 9.5C26.4 20.4-6 78.4 14.4 134c2.5 6.7 7.9 15.9 14 23.6 33.1 42.5 98.2 46 136.7 7.5 38.5-38.5 35-103.6-7.5-136.7-16.8-13.2-32.8-19.1-54.1-19.9-8.1-.3-14.5 0-19.7 1zm29.2 3c36.6 5.5 64.7 31.5 73.7 68.1 2.4 10 2.3 29.7-.1 39.4-8.6 33.6-33 58-66.6 66.6-9.7 2.4-29.4 2.5-39.4.1-26.2-6.5-47.2-22.7-59-45.6-13.3-26-13.7-53.7-1.1-79.8 12.9-26.6 38.1-44.8 68.1-49.2 8.9-1.3 14-1.2 24.4.4z"}),f.jsx("path",{d:"M92.5 18c-2.2 2.4-1.7 6.7 2 18.7 2.6 8.5 4.2 10.2 8.5 8.8 2.2-.7 3.3-3.8 5.7-17.2 2.1-11.7 1.7-12.3-7.7-12.3-5.4 0-7 .4-8.5 2zM71.3 23.3C67.5 25.5 66 27 66 28.6 66 31.1 83.1 49 85.5 49c2.8 0 5.5-2 5.5-4 0-3.6-6.1-21.1-8.1-23.1-2.6-2.6-5.5-2.3-11.6 1.4zM118.1 21.9c-1.1 1.1-3.5 6.8-5.5 12.8l-3.5 10.8 2 1.7c1.2 1 2.9 1.8 3.8 1.8C117 49 135 31 135 28.9c0-2-2.4-4.1-7.7-6.8-5.2-2.6-6.8-2.6-9.2-.2zM50.6 36.9c-3 3-4.7 5.5-4.3 6.4.6 1.6 15.3 11.6 21.1 14.3 3.5 1.7 3.6 1.7 6-.6 2.4-2.1 2.4-2.4 1-5.2-2.7-5.3-10.6-17.3-12.2-18.6-3.2-2.5-6.6-1.4-11.6 3.7zM137.8 34.3c-1.1 1.2-4.4 6.3-7.4 11.2l-5.4 8.9 2.4 2.4c1.7 1.7 3 2.2 4.5 1.7 3.8-1.2 23.1-14.4 23.1-15.8 0-.8-2.2-3.5-5-6.1-5.6-5.2-9-5.9-12.2-2.3zM37.2 47.8c-4.1 4.1-7.4 9.3-6.8 10.7.7 1.9 22.2 12.5 25.2 12.5 2 0 5.4-2.8 5.4-4.5 0-1-6.1-8.5-12.4-15.3-5.3-5.6-8.3-6.5-11.4-3.4zM154 49.2c-4.9 5-14 16.4-14 17.5 0 1.6 3.5 4.3 5.6 4.3 2.9 0 24.3-10.7 25-12.5.6-1.4-2.7-6.6-6.8-10.7-2.7-2.7-6.2-2.2-9.8 1.4zM25.1 66.7C22.5 68.9 20 79.4 21.6 81c1.3 1.3 24.8 3.3 27.8 2.4 2.5-.8 3.6-2.2 3.6-5 0-1.7-2.3-3.3-10.9-7.7-11.7-6.2-13.8-6.6-17-4zM158.8 70.7c-9.9 5.1-10.8 5.9-10.8 8.5 0 4.4 3.1 5.1 17.8 3.9 6.9-.6 13-1.5 13.6-2.1 1.6-1.6-.9-12.1-3.5-14.3-3.2-2.6-5.5-2.1-17.1 4zM69.2 68.7c-.7.3-1.9 1.7-2.7 3.3l-1.4 2.8 36 29.8c19.8 16.5 36.5 30 37.2 30.2 1.9.4 4.6-2 4.9-4.4.2-1.7-7.1-8.3-36-32.3-19.9-16.5-36.3-30.1-36.5-30-.1 0-.8.3-1.5.6zM115.8 79.3c-14.7 10.3-15.7 11.2-14.2 12.8 1.5 1.6 2.4 1.1 15.2-8.3 17.1-12.7 17.7-13.2 16-14.5-1-.8-5.3 1.7-17 10zM122.1 85.2c-7.8 6.1-14 11.6-13.8 12.1.2.6 1 1.5 1.9 2 2.3 1.5 29.3-22 27.7-23.9-.6-.8-1.3-1.4-1.4-1.4-.1 0-6.6 5-14.4 11.2zM21.2 88.6c-1.9 1.3-2.2 2.5-2.2 7.8 0 9.1.5 9.3 14.2 6.1 13-3.1 15.8-4.5 15.8-8 0-2.7-2.2-3.6-14.5-5.5-3.8-.6-7.9-1.3-9.1-1.5-1.1-.3-3 .2-4.2 1.1zM164.5 89.7c-10.4 1.5-12.5 2.4-12.5 5.4 0 2.7 3.3 4.4 14.3 7.4 13.4 3.6 14 3.5 15-4 .7-5.7.6-6.1-1.8-8.3-1.5-1.2-3.1-2.2-3.8-2.1-.7.1-5.7.8-11.2 1.6zM80 104.6c-17 12.3-17.7 13.3-19 25.6-.9 9-2.2 11.2-7.1 11-3.8-.1-10.7 4.2-12 7.6-.5 1.3-1.6 2.3-2.6 2.1-3.9-.3-4.6 0-3.3 1.6 2.5 3.1 4.8 2.7 11.2-1.8 3.5-2.4 6.8-4.2 7.5-4 .6.2 2.7-.3 4.7-1.1 2.7-1.1 4.2-2.7 5.6-5.8 1.1-2.4 2-5.1 2-6 0-.9 1.8-3.8 4-6.3 2.7-3.2 4-5.6 4-7.6 0-3.3 1.4-4.9 12.3-13.6 6.6-5.3 6.8-5.6 5.1-7.4-.9-1-1.8-1.9-1.8-1.9-.1 0-4.8 3.5-10.6 7.6zm-9.2 17.8c.6 2.9-1.5 4.3-3.5 2.4-1.4-1.4-1.4-2-.3-3.3 1.6-1.9 3.4-1.5 3.8.9z"}),f.jsx("path",{d:"M87.9 112.2c-7.6 6-11 9.3-12.5 12.5l-2.1 4.3h2.6c1.9 0 6.1-3 14.9-10.6 6.7-5.8 12-10.9 11.7-11.5-.4-.5-1.4-1.3-2.4-1.9-1.5-.8-3.8.5-12.2 7.2zM146.1 122.7c-2.1 2.6-2.7 4-2 4.9 2.3 2.8-3.2 9.4-6.7 8-1.4-.5-5.4 3.2-7.8 7.2-.8 1.4 1.1 9.3 2.3 9.1.7 0 26.4-30.7 26.9-32 .2-.5-1.9-.9-4.6-.9-4.6 0-5.3.3-8.1 3.7zM146.5 136.8l-13.8 16.6 5.4 4.8c3 2.6 5.7 4.8 6 4.8.5 0 20.5-23.4 26.3-30.8 1.9-2.4 1.9-2.5-.1-4.1-1.2-.9-3.8-3-6-4.8l-3.9-3.2-13.9 16.7zM49.5 124.4c-3.2 1.4-5.5 5.1-5.5 8.9 0 1.5-1.9 3.5-6 6.5-5.8 4.2-6.9 6.2-5.1 9 .6 1 1 1 2.1-.3.7-.8.9-1.5.5-1.5s-.2-.6.5-1.4c.6-.8 1.8-1.2 2.6-.9.8.3 3.4-1.1 5.8-3.1 3.7-3 4.4-4.1 4.3-7-.1-4.9 1.8-6.8 6.7-6.4 3.6.2 4 0 4.7-2.5.7-2.6.6-2.7-3.4-2.7-2.3.1-5.6.7-7.2 1.4zM103.5 138.5c1.9 4.5 1.9 8.5-.1 11.3-3.1 4.5-6.2 2.1-7.1-5.7-.3-2.8-.9-5.1-1.3-5.1s-1.5 1.6-2.5 3.6c-1.6 3.5-1.6 4.9.1 13.1.5 2.5.2 3.3-1.5 4.2-3 1.7-6.5-2-5.7-6 .6-3.3-.4-3.7-2.6-1.2-2.5 2.8-3 5.9-1.8 10.5 2.7 9.9 10.2 15.3 20.6 14.6 5.2-.3 7-.9 10.1-3.5 4.8-3.8 7-7.6 7.8-13.3l.6-4.5-1.6 2.7c-1.6 2.9-5.7 3.9-7.1 1.7-.4-.6-.1-3.5.6-6.5 1.1-4.3 1.1-5.9 0-8.5-1.6-3.7-5.5-8.5-8.1-9.9-1.7-1-1.7-.8-.4 2.5z"})]}),Rf=()=>{const e=vt(),n=()=>{e("/")};return f.jsx("div",{className:"h-[200vh] grow overflow-y-scroll",children:f.jsx("div",{className:"absolute w-[640px] sidebar:w-[400px] h-[766px] top-[-178px] left-[25px]",children:f.jsxs("div",{className:"flex flex-col w-full items-start gap-[64px] absolute top-[228px] left-0",children:[f.jsx("div",{className:"flex-col gap-[40px] p-[24px] self-stretch w-full flex-[0_0_auto] rounded-[16px] flex items-start relative",children:f.jsxs("div",{className:"flex items-end gap-[8px] relative self-stretch w-full flex-[0_0_auto]",onClick:n,children:[f.jsx(Qt,{className:"!relative !w-[24px] !h-[24px]"}),f.jsx(Xt,{className:"!relative !w-[50px] !h-[50px] bg-white rounded-xl "}),f.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[30px] text-center tracking-[0] leading-[21.6px] whitespace-nowrap uppercase",children:"Solidity"})]})}),f.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full",children:f.jsxs("div",{className:"flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full",children:[f.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full",children:f.jsx(rn,{to:"/faucets",className:"focus:outline-none",state:{page:"foundry"},children:f.jsx(on,{icon:f.jsx(jf,{className:"!relative !w-[24px] !h-[24px]"}),title:"Faucets"})})}),f.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full",children:f.jsx(rn,{to:"/account-balance",className:"focus:outline-none",state:{page:"foundry"},children:f.jsx(on,{icon:f.jsx(_f,{className:"!relative !w-[24px] !h-[24px]"}),title:"Account Balance"})})}),f.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full",children:f.jsx(rn,{to:"/your-address",className:"focus:outline-none",state:{page:"foundry"},children:f.jsx(on,{icon:f.jsx(zf,{className:"!relative !w-[24px] !h-[24px]"}),title:"YourAddress"})})}),f.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full",children:f.jsx(rn,{to:"/deploy",className:"focus:outline-none",state:{page:"foundry"},children:f.jsx(on,{icon:f.jsx(Hn,{className:"!relative !w-[24px] !h-[24px]"}),title:"Deploy"})})})]})})]})})})},F1=({className:e})=>f.jsx("svg",{className:e,viewBox:"0 0 158.96933 125.99213",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("g",{transform:"matrix(1.3333333,0,0,-1.3333333,0,125.99213)",children:f.jsx("g",{children:f.jsx("g",{children:f.jsx("g",{transform:"translate(105.7075,48.4499)",children:f.jsx("path",{d:"m 0,0 c -1.07,0 -2.123,0.164 -3.13,0.485 l -0.127,0.038 c -0.112,0.032 -0.231,0.07 -0.365,0.116 -0.299,0.102 -0.624,0.251 -0.989,0.45 l -0.12,0.065 c -1.332,0.695 -2.518,1.695 -3.43,2.895 -2.786,3.659 -2.778,8.76 0.021,12.407 1.138,1.483 2.653,2.628 4.382,3.311 l 0.171,0.071 c 0.521,0.22 0.901,0.34 1.198,0.378 l 0.327,0.054 c 0.676,0.137 1.369,0.207 2.064,0.207 4.177,0 7.665,1.289 10.087,3.727 2.241,2.256 3.409,5.363 3.379,8.984 V 46.044 H -12.046 V 37.57 c 0,-1.65 -0.005,-3.3 0,-4.95 0.006,-3.336 -1.888,-7.89 -5.359,-9.049 -2.209,-0.738 -4.951,0.364 -7.298,0.094 -1.929,-0.222 -3.799,-0.881 -5.44,-1.918 -3.297,-2.083 -5.525,-5.626 -5.953,-9.502 -0.165,-1.496 -0.072,-2.61 -0.004,-3.425 0.076,-0.908 0.098,-1.181 -0.219,-2.086 -0.625,-1.767 -1.96,-3.409 -3.758,-4.622 -1.798,-1.212 -3.865,-1.879 -5.822,-1.879 l -0.191,0.002 -0.191,-0.002 c -1.957,0 -4.026,0.667 -5.822,1.879 -1.798,1.212 -3.133,2.855 -3.758,4.622 -0.318,0.905 -0.296,1.179 -0.219,2.086 0.067,0.813 0.16,1.928 -0.004,3.425 -0.428,3.876 -2.656,7.418 -5.953,9.502 -1.641,1.037 -3.511,1.696 -5.44,1.918 -2.347,0.27 -5.089,-0.832 -7.299,-0.094 -3.471,1.159 -5.364,5.713 -5.357,9.049 0.004,1.65 0,3.3 0,4.95 v 8.474 h -25.519 V 33.188 c -0.03,-3.621 1.14,-6.728 3.379,-8.984 2.421,-2.439 5.91,-3.727 10.087,-3.727 0.695,0 1.388,-0.07 2.064,-0.207 l 0.327,-0.054 c 0.297,-0.039 0.677,-0.159 1.197,-0.378 l 0.171,-0.071 c 1.73,-0.683 3.245,-1.828 4.382,-3.311 2.8,-3.647 2.808,-8.748 0.022,-12.407 -0.913,-1.2 -2.1,-2.2 -3.431,-2.895 l -0.119,-0.065 c -0.365,-0.199 -0.691,-0.347 -0.99,-0.45 -0.133,-0.046 -0.253,-0.084 -0.364,-0.116 L -89.054,0.485 C -90.061,0.163 -91.114,0 -92.184,0 c -8.089,0 -13.523,-4.97 -13.523,-12.367 0,-5.774 2.635,-8.77 4.845,-10.267 2.697,-1.826 5.95,-2.343 9.064,-2.628 l 0.215,-0.025 c 0.827,-0.107 1.524,-0.277 2.325,-0.564 l 0.386,-0.147 0.066,-0.024 c 2.097,-0.715 3.853,-2.177 4.947,-4.116 0.618,-1.096 1.046,-2.531 1.205,-4.038 0.062,-0.593 0.103,-1.167 0.144,-1.735 0.031,-0.431 0.066,-0.915 0.113,-1.402 V -48.45 h 25.334 v 13.113 c 0,3.37 -1.284,6.639 -3.669,9.022 -0.086,0.086 -0.172,0.169 -0.261,0.253 -0.19,0.177 -0.364,0.328 -0.504,0.447 l -0.087,0.074 c -2.745,2.378 -6.316,2.441 -8.924,2.488 h -0.028 c -0.436,0.008 -0.849,0.016 -1.214,0.034 l -0.392,0.06 -0.838,0.187 -0.79,0.243 -0.852,0.339 c -0.893,0.405 -1.726,0.932 -2.464,1.56 l -0.166,0.143 c -2.361,2.108 -3.532,4.707 -3.58,7.944 0.007,2.313 0.747,4.505 2.141,6.34 1.36,1.788 3.285,3.12 5.423,3.749 2.164,0.636 6.2,0.652 8.146,0.031 3.546,-1.131 6.063,-4.382 6.261,-8.091 0.016,-0.307 0.004,-0.628 -0.009,-1.004 -0.041,-1.088 -0.096,-2.578 0.533,-4.462 1.776,-5.239 6.69,-8.774 12.243,-8.798 5.553,0.025 10.467,3.559 12.243,8.798 0.629,1.882 0.573,3.372 0.533,4.462 -0.013,0.376 -0.025,0.699 -0.009,1.004 0.198,3.709 2.713,6.96 6.261,8.091 1.947,0.621 5.982,0.605 8.146,-0.031 2.137,-0.629 4.064,-1.962 5.422,-3.749 1.395,-1.835 2.135,-4.027 2.142,-6.34 -0.049,-3.237 -1.22,-5.835 -3.58,-7.944 l -0.166,-0.143 c -0.739,-0.627 -1.571,-1.155 -2.464,-1.56 l -0.852,-0.339 -0.79,-0.243 -0.838,-0.187 -0.392,-0.06 c -0.363,-0.018 -0.778,-0.026 -1.214,-0.034 h -0.028 c -2.607,-0.047 -6.179,-0.11 -8.925,-2.488 l -0.086,-0.074 c -0.14,-0.119 -0.315,-0.27 -0.504,-0.447 -0.089,-0.084 -0.175,-0.168 -0.262,-0.253 -2.384,-2.383 -3.668,-5.652 -3.668,-9.022 V -48.45 h 25.334 v 11.137 c 0.047,0.485 0.082,0.971 0.113,1.402 0.041,0.566 0.082,1.141 0.144,1.735 0.159,1.507 0.587,2.942 1.204,4.038 1.093,1.939 2.851,3.401 4.948,4.116 l 0.066,0.024 0.386,0.147 c 0.8,0.286 1.498,0.456 2.324,0.564 l 0.215,0.025 c 3.115,0.285 6.368,0.802 9.065,2.628 2.21,1.497 4.846,4.493 4.846,10.267 C 13.52,-4.97 8.085,0 -0.004,0 Z",style:{fill:"#ffda34",fillOpacity:1,fillRule:"nonzero",stroke:"none"}})})})})})});function I1(){const[e,n]=E.useState(null),t=()=>{n(e==="aptos"?"foundry":"aptos")},r=()=>{switch(e){case"aptos":return f.jsx(Tf,{});case"foundry":return f.jsx(Rf,{});default:return f.jsxs("div",{className:"flex flex-col items-center justify-center h-full",children:[f.jsx("div",{className:"text-white text-lg sm:text-xl mb-4 text-center",children:"Select a simulator to Start"}),f.jsxs("div",{className:"flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4",children:[f.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1",onClick:()=>n("aptos"),children:f.jsx(rn,{to:"/aptos",className:"focus:outline-none",children:f.jsx(on,{icon:f.jsx(Hn,{className:"!relative !w-[24px] !h-[24px]"}),title:"Aptos"})})}),f.jsx("button",{className:"px-4 py-2 bg-[#ffffff1a] text-white rounded hover:bg-[#ffffff33] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1",onClick:()=>n("foundry"),children:f.jsx(rn,{to:"/foundry",className:"focus:outline-none",children:f.jsx(on,{icon:f.jsx(Xt,{className:"!relative !w-[24px] !h-[24px]"}),title:"Foundry"})})})]})]})}};return f.jsxs("div",{className:"flex flex-col h-screen bg-[#1e1e1e] text-white",children:[f.jsxs("header",{className:"flex flex-col sm:flex-row items-center p-4 bg-[#252526] border-b border-[#3c3c3c]",children:[f.jsx("div",{className:"flex items-center mb-2 sm:mb-0",children:f.jsxs("a",{href:"https://docs.movementnetwork.xyz/",className:"flex items-center border hover:border-[#646cff] py-2 px-4 rounded transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500",children:[f.jsx(F1,{className:"w-8 h-8 mr-3"}),f.jsx("h1",{className:"text-lg sm:text-xl font-semibold text-white",children:"Movement Simulator"})]})}),e&&f.jsx("button",{className:"mt-2 sm:mt-0 sm:ml-auto px-3 py-1 bg-[#ffffff1a] rounded hover:bg-[#ffffff33] transition-colors",onClick:t})]}),f.jsxs("main",{className:"flex-grow overflow-auto p-4",children:[r(),f.jsx(Nf,{context:{currentPage:e}})]})]})}var Af,Mu=Dh;Af=Mu.createRoot,Mu.hydrateRoot;const U1=()=>f.jsx("a",{href:"https://weminallabs.featurebase.app/",className:"absolute bg-blue-500 text-white font-bold py-2 px-4 rounded top-[10px] right-[10px]",children:"Feedback"}),$1=()=>f.jsxs("div",{className:"relative bg-[#0e0f0e] flex flex-col justify-between w-full min-h-screen",children:[f.jsx(Nf,{}),f.jsx(U1,{})]}),B1=()=>{var d;const[e,n]=E.useState(""),[t,r]=E.useState(""),o=y=>{n(y.target.value),console.log(y.target.value)},i=y=>{const x=y.target.value;(x===""||/^\d+$/.test(x))&&r(x===""?"":Number(x))},a=y=>{/[0-9]/.test(y.key)||y.preventDefault()},s=(d=Xn().state)==null?void 0:d.page,u=vt(),c=()=>{u(`/${s}`)};return f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"h-[300vh] grow overflow-y-scroll",children:f.jsx("div",{className:"absolute w-[640px] sidebar:w-[400px] h-[766px] top-[-178px] left-[25px]",children:f.jsxs("div",{className:"flex flex-col w-full items-start gap-[20px] absolute top-[228px] left-0",children:[f.jsxs("div",{className:"flex items-end gap-[8px] relative self-stretch w-full flex-[0_0_auto]",onClick:c,children:[f.jsx(Qt,{className:"!relative !w-[24px] !h-[24px]"}),s==="aptos"?f.jsx(Hn,{className:"!relative !w-[24px] !h-[24px] bg-white rounded-xl"}):f.jsx(Xt,{className:"!relative !w-[24px] !h-[24px] bg-white rounded-xl"}),f.jsxs("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[21.6px] whitespace-nowrap uppercase",children:["Account Balance ",s]})]}),f.jsxs("div",{className:"flex flex-col gap-[24px] my-5 w-full ",children:[f.jsxs("div",{children:[f.jsx("label",{htmlFor:"coin",className:" block text-xl text-white font-semibold mb-2 text-gray-700",children:"Asset Type"}),f.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",value:"Coin",disabled:!0})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"coin",className:" block text-xl text-white font-semibold mb-2 text-gray-700",children:"Coin Type"}),f.jsxs("select",{id:"coin",value:e,onChange:o,className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e]",children:[f.jsx("option",{value:"Move",className:"bg-white text-[#8f8f8f]",children:"Move"}),f.jsx("option",{value:"Aptos",className:"bg-white text-[#8f8f8f]",children:"Aptos"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Balance"}),f.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",max:1e10,onChange:i,onKeyPress:a})]})]})]})})}),f.jsx("div",{children:f.jsx("div",{className:" bg-blue-500 text-white font-bold py-2 px-4 rounded  cursor-pointer self-end",onClick:()=>{u("/deploy")},children:"Deploy"})})]})};function Lf(e,n){return function(){return e.apply(n,arguments)}}const{toString:q1}=Object.prototype,{getPrototypeOf:ys}=Object,Ri=(e=>n=>{const t=q1.call(n);return e[t]||(e[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Ze=e=>(e=e.toLowerCase(),n=>Ri(n)===e),Ai=e=>n=>typeof n===e,{isArray:Jt}=Array,Br=Ai("undefined");function H1(e){return e!==null&&!Br(e)&&e.constructor!==null&&!Br(e.constructor)&&Ae(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Df=Ze("ArrayBuffer");function W1(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&Df(e.buffer),n}const V1=Ai("string"),Ae=Ai("function"),Mf=Ai("number"),Li=e=>e!==null&&typeof e=="object",K1=e=>e===!0||e===!1,Io=e=>{if(Ri(e)!=="object")return!1;const n=ys(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Q1=Ze("Date"),X1=Ze("File"),J1=Ze("Blob"),Y1=Ze("FileList"),G1=e=>Li(e)&&Ae(e.pipe),Z1=e=>{let n;return e&&(typeof FormData=="function"&&e instanceof FormData||Ae(e.append)&&((n=Ri(e))==="formdata"||n==="object"&&Ae(e.toString)&&e.toString()==="[object FormData]"))},em=Ze("URLSearchParams"),[nm,tm,rm,om]=["ReadableStream","Request","Response","Headers"].map(Ze),im=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Xr(e,n,{allOwnKeys:t=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Jt(e))for(r=0,o=e.length;r<o;r++)n.call(null,e[r],r,e);else{const i=t?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let l;for(r=0;r<a;r++)l=i[r],n.call(null,e[l],l,e)}}function Ff(e,n){n=n.toLowerCase();const t=Object.keys(e);let r=t.length,o;for(;r-- >0;)if(o=t[r],n===o.toLowerCase())return o;return null}const rt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,If=e=>!Br(e)&&e!==rt;function pl(){const{caseless:e}=If(this)&&this||{},n={},t=(r,o)=>{const i=e&&Ff(n,o)||o;Io(n[i])&&Io(r)?n[i]=pl(n[i],r):Io(r)?n[i]=pl({},r):Jt(r)?n[i]=r.slice():n[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Xr(arguments[r],t);return n}const am=(e,n,t,{allOwnKeys:r}={})=>(Xr(n,(o,i)=>{t&&Ae(o)?e[i]=Lf(o,t):e[i]=o},{allOwnKeys:r}),e),lm=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),sm=(e,n,t,r)=>{e.prototype=Object.create(n.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:n.prototype}),t&&Object.assign(e.prototype,t)},um=(e,n,t,r)=>{let o,i,a;const l={};if(n=n||{},e==null)return n;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,n))&&!l[a]&&(n[a]=e[a],l[a]=!0);e=t!==!1&&ys(e)}while(e&&(!t||t(e,n))&&e!==Object.prototype);return n},cm=(e,n,t)=>{e=String(e),(t===void 0||t>e.length)&&(t=e.length),t-=n.length;const r=e.indexOf(n,t);return r!==-1&&r===t},dm=e=>{if(!e)return null;if(Jt(e))return e;let n=e.length;if(!Mf(n))return null;const t=new Array(n);for(;n-- >0;)t[n]=e[n];return t},fm=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&ys(Uint8Array)),pm=(e,n)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;n.call(e,i[0],i[1])}},hm=(e,n)=>{let t;const r=[];for(;(t=e.exec(n))!==null;)r.push(t);return r},mm=Ze("HTMLFormElement"),gm=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,o){return r.toUpperCase()+o}),Fu=(({hasOwnProperty:e})=>(n,t)=>e.call(n,t))(Object.prototype),vm=Ze("RegExp"),Uf=(e,n)=>{const t=Object.getOwnPropertyDescriptors(e),r={};Xr(t,(o,i)=>{let a;(a=n(o,i,e))!==!1&&(r[i]=a||o)}),Object.defineProperties(e,r)},ym=e=>{Uf(e,(n,t)=>{if(Ae(e)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const r=e[t];if(Ae(r)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},xm=(e,n)=>{const t={},r=o=>{o.forEach(i=>{t[i]=!0})};return Jt(e)?r(e):r(String(e).split(n)),t},bm=()=>{},wm=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n,pa="abcdefghijklmnopqrstuvwxyz",Iu="0123456789",$f={DIGIT:Iu,ALPHA:pa,ALPHA_DIGIT:pa+pa.toUpperCase()+Iu},km=(e=16,n=$f.ALPHA_DIGIT)=>{let t="";const{length:r}=n;for(;e--;)t+=n[Math.random()*r|0];return t};function Sm(e){return!!(e&&Ae(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Pm=e=>{const n=new Array(10),t=(r,o)=>{if(Li(r)){if(n.indexOf(r)>=0)return;if(!("toJSON"in r)){n[o]=r;const i=Jt(r)?[]:{};return Xr(r,(a,l)=>{const s=t(a,o+1);!Br(s)&&(i[l]=s)}),n[o]=void 0,i}}return r};return t(e,0)},Em=Ze("AsyncFunction"),Om=e=>e&&(Li(e)||Ae(e))&&Ae(e.then)&&Ae(e.catch),Bf=((e,n)=>e?setImmediate:n?((t,r)=>(rt.addEventListener("message",({source:o,data:i})=>{o===rt&&i===t&&r.length&&r.shift()()},!1),o=>{r.push(o),rt.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",Ae(rt.postMessage)),Cm=typeof queueMicrotask<"u"?queueMicrotask.bind(rt):typeof process<"u"&&process.nextTick||Bf,w={isArray:Jt,isArrayBuffer:Df,isBuffer:H1,isFormData:Z1,isArrayBufferView:W1,isString:V1,isNumber:Mf,isBoolean:K1,isObject:Li,isPlainObject:Io,isReadableStream:nm,isRequest:tm,isResponse:rm,isHeaders:om,isUndefined:Br,isDate:Q1,isFile:X1,isBlob:J1,isRegExp:vm,isFunction:Ae,isStream:G1,isURLSearchParams:em,isTypedArray:fm,isFileList:Y1,forEach:Xr,merge:pl,extend:am,trim:im,stripBOM:lm,inherits:sm,toFlatObject:um,kindOf:Ri,kindOfTest:Ze,endsWith:cm,toArray:dm,forEachEntry:pm,matchAll:hm,isHTMLForm:mm,hasOwnProperty:Fu,hasOwnProp:Fu,reduceDescriptors:Uf,freezeMethods:ym,toObjectSet:xm,toCamelCase:gm,noop:bm,toFiniteNumber:wm,findKey:Ff,global:rt,isContextDefined:If,ALPHABET:$f,generateString:km,isSpecCompliantForm:Sm,toJSONObject:Pm,isAsyncFn:Em,isThenable:Om,setImmediate:Bf,asap:Cm};function L(e,n,t,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",n&&(this.code=n),t&&(this.config=t),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}w.inherits(L,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:w.toJSONObject(this.config),code:this.code,status:this.status}}});const qf=L.prototype,Hf={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Hf[e]={value:e}});Object.defineProperties(L,Hf);Object.defineProperty(qf,"isAxiosError",{value:!0});L.from=(e,n,t,r,o,i)=>{const a=Object.create(qf);return w.toFlatObject(e,a,function(s){return s!==Error.prototype},l=>l!=="isAxiosError"),L.call(a,e.message,n,t,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const Nm=null;function hl(e){return w.isPlainObject(e)||w.isArray(e)}function Wf(e){return w.endsWith(e,"[]")?e.slice(0,-2):e}function Uu(e,n,t){return e?e.concat(n).map(function(o,i){return o=Wf(o),!t&&i?"["+o+"]":o}).join(t?".":""):n}function _m(e){return w.isArray(e)&&!e.some(hl)}const zm=w.toFlatObject(w,{},null,function(n){return/^is[A-Z]/.test(n)});function Di(e,n,t){if(!w.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,t=w.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,b){return!w.isUndefined(b[m])});const r=t.metaTokens,o=t.visitor||c,i=t.dots,a=t.indexes,s=(t.Blob||typeof Blob<"u"&&Blob)&&w.isSpecCompliantForm(n);if(!w.isFunction(o))throw new TypeError("visitor must be a function");function u(h){if(h===null)return"";if(w.isDate(h))return h.toISOString();if(!s&&w.isBlob(h))throw new L("Blob is not supported. Use a Buffer instead.");return w.isArrayBuffer(h)||w.isTypedArray(h)?s&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function c(h,m,b){let g=h;if(h&&!b&&typeof h=="object"){if(w.endsWith(m,"{}"))m=r?m:m.slice(0,-2),h=JSON.stringify(h);else if(w.isArray(h)&&_m(h)||(w.isFileList(h)||w.endsWith(m,"[]"))&&(g=w.toArray(h)))return m=Wf(m),g.forEach(function(v,k){!(w.isUndefined(v)||v===null)&&n.append(a===!0?Uu([m],k,i):a===null?m:m+"[]",u(v))}),!1}return hl(h)?!0:(n.append(Uu(b,m,i),u(h)),!1)}const d=[],y=Object.assign(zm,{defaultVisitor:c,convertValue:u,isVisitable:hl});function x(h,m){if(!w.isUndefined(h)){if(d.indexOf(h)!==-1)throw Error("Circular reference detected in "+m.join("."));d.push(h),w.forEach(h,function(g,p){(!(w.isUndefined(g)||g===null)&&o.call(n,g,w.isString(p)?p.trim():p,m,y))===!0&&x(g,m?m.concat(p):[p])}),d.pop()}}if(!w.isObject(e))throw new TypeError("data must be an object");return x(e),n}function $u(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return n[r]})}function xs(e,n){this._pairs=[],e&&Di(e,this,n)}const Vf=xs.prototype;Vf.append=function(n,t){this._pairs.push([n,t])};Vf.toString=function(n){const t=n?function(r){return n.call(this,r,$u)}:$u;return this._pairs.map(function(o){return t(o[0])+"="+t(o[1])},"").join("&")};function jm(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Kf(e,n,t){if(!n)return e;const r=t&&t.encode||jm,o=t&&t.serialize;let i;if(o?i=o(n,t):i=w.isURLSearchParams(n)?n.toString():new xs(n,t).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Bu{constructor(){this.handlers=[]}use(n,t,r){return this.handlers.push({fulfilled:n,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){w.forEach(this.handlers,function(r){r!==null&&n(r)})}}const Qf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Tm=typeof URLSearchParams<"u"?URLSearchParams:xs,Rm=typeof FormData<"u"?FormData:null,Am=typeof Blob<"u"?Blob:null,Lm={isBrowser:!0,classes:{URLSearchParams:Tm,FormData:Rm,Blob:Am},protocols:["http","https","file","blob","url","data"]},bs=typeof window<"u"&&typeof document<"u",ml=typeof navigator=="object"&&navigator||void 0,Dm=bs&&(!ml||["ReactNative","NativeScript","NS"].indexOf(ml.product)<0),Mm=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Fm=bs&&window.location.href||"http://localhost",Im=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:bs,hasStandardBrowserEnv:Dm,hasStandardBrowserWebWorkerEnv:Mm,navigator:ml,origin:Fm},Symbol.toStringTag,{value:"Module"})),Ne={...Im,...Lm};function Um(e,n){return Di(e,new Ne.classes.URLSearchParams,Object.assign({visitor:function(t,r,o,i){return Ne.isNode&&w.isBuffer(t)?(this.append(r,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},n))}function $m(e){return w.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function Bm(e){const n={},t=Object.keys(e);let r;const o=t.length;let i;for(r=0;r<o;r++)i=t[r],n[i]=e[i];return n}function Xf(e){function n(t,r,o,i){let a=t[i++];if(a==="__proto__")return!0;const l=Number.isFinite(+a),s=i>=t.length;return a=!a&&w.isArray(o)?o.length:a,s?(w.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!l):((!o[a]||!w.isObject(o[a]))&&(o[a]=[]),n(t,r,o[a],i)&&w.isArray(o[a])&&(o[a]=Bm(o[a])),!l)}if(w.isFormData(e)&&w.isFunction(e.entries)){const t={};return w.forEachEntry(e,(r,o)=>{n($m(r),o,t,0)}),t}return null}function qm(e,n,t){if(w.isString(e))try{return(n||JSON.parse)(e),w.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const Jr={transitional:Qf,adapter:["xhr","http","fetch"],transformRequest:[function(n,t){const r=t.getContentType()||"",o=r.indexOf("application/json")>-1,i=w.isObject(n);if(i&&w.isHTMLForm(n)&&(n=new FormData(n)),w.isFormData(n))return o?JSON.stringify(Xf(n)):n;if(w.isArrayBuffer(n)||w.isBuffer(n)||w.isStream(n)||w.isFile(n)||w.isBlob(n)||w.isReadableStream(n))return n;if(w.isArrayBufferView(n))return n.buffer;if(w.isURLSearchParams(n))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Um(n,this.formSerializer).toString();if((l=w.isFileList(n))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return Di(l?{"files[]":n}:n,s&&new s,this.formSerializer)}}return i||o?(t.setContentType("application/json",!1),qm(n)):n}],transformResponse:[function(n){const t=this.transitional||Jr.transitional,r=t&&t.forcedJSONParsing,o=this.responseType==="json";if(w.isResponse(n)||w.isReadableStream(n))return n;if(n&&w.isString(n)&&(r&&!this.responseType||o)){const a=!(t&&t.silentJSONParsing)&&o;try{return JSON.parse(n)}catch(l){if(a)throw l.name==="SyntaxError"?L.from(l,L.ERR_BAD_RESPONSE,this,null,this.response):l}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ne.classes.FormData,Blob:Ne.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};w.forEach(["delete","get","head","post","put","patch"],e=>{Jr.headers[e]={}});const Hm=w.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Wm=e=>{const n={};let t,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),t=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!t||n[t]&&Hm[t])&&(t==="set-cookie"?n[t]?n[t].push(r):n[t]=[r]:n[t]=n[t]?n[t]+", "+r:r)}),n},qu=Symbol("internals");function sr(e){return e&&String(e).trim().toLowerCase()}function Uo(e){return e===!1||e==null?e:w.isArray(e)?e.map(Uo):String(e)}function Vm(e){const n=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(e);)n[r[1]]=r[2];return n}const Km=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ha(e,n,t,r,o){if(w.isFunction(r))return r.call(this,n,t);if(o&&(n=t),!!w.isString(n)){if(w.isString(r))return n.indexOf(r)!==-1;if(w.isRegExp(r))return r.test(n)}}function Qm(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,t,r)=>t.toUpperCase()+r)}function Xm(e,n){const t=w.toCamelCase(" "+n);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+t,{value:function(o,i,a){return this[r].call(this,n,o,i,a)},configurable:!0})})}class _e{constructor(n){n&&this.set(n)}set(n,t,r){const o=this;function i(l,s,u){const c=sr(s);if(!c)throw new Error("header name must be a non-empty string");const d=w.findKey(o,c);(!d||o[d]===void 0||u===!0||u===void 0&&o[d]!==!1)&&(o[d||s]=Uo(l))}const a=(l,s)=>w.forEach(l,(u,c)=>i(u,c,s));if(w.isPlainObject(n)||n instanceof this.constructor)a(n,t);else if(w.isString(n)&&(n=n.trim())&&!Km(n))a(Wm(n),t);else if(w.isHeaders(n))for(const[l,s]of n.entries())i(s,l,r);else n!=null&&i(t,n,r);return this}get(n,t){if(n=sr(n),n){const r=w.findKey(this,n);if(r){const o=this[r];if(!t)return o;if(t===!0)return Vm(o);if(w.isFunction(t))return t.call(this,o,r);if(w.isRegExp(t))return t.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,t){if(n=sr(n),n){const r=w.findKey(this,n);return!!(r&&this[r]!==void 0&&(!t||ha(this,this[r],r,t)))}return!1}delete(n,t){const r=this;let o=!1;function i(a){if(a=sr(a),a){const l=w.findKey(r,a);l&&(!t||ha(r,r[l],l,t))&&(delete r[l],o=!0)}}return w.isArray(n)?n.forEach(i):i(n),o}clear(n){const t=Object.keys(this);let r=t.length,o=!1;for(;r--;){const i=t[r];(!n||ha(this,this[i],i,n,!0))&&(delete this[i],o=!0)}return o}normalize(n){const t=this,r={};return w.forEach(this,(o,i)=>{const a=w.findKey(r,i);if(a){t[a]=Uo(o),delete t[i];return}const l=n?Qm(i):String(i).trim();l!==i&&delete t[i],t[l]=Uo(o),r[l]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const t=Object.create(null);return w.forEach(this,(r,o)=>{r!=null&&r!==!1&&(t[o]=n&&w.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,t])=>n+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...t){const r=new this(n);return t.forEach(o=>r.set(o)),r}static accessor(n){const r=(this[qu]=this[qu]={accessors:{}}).accessors,o=this.prototype;function i(a){const l=sr(a);r[l]||(Xm(o,a),r[l]=!0)}return w.isArray(n)?n.forEach(i):i(n),this}}_e.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);w.reduceDescriptors(_e.prototype,({value:e},n)=>{let t=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(r){this[t]=r}}});w.freezeMethods(_e);function ma(e,n){const t=this||Jr,r=n||t,o=_e.from(r.headers);let i=r.data;return w.forEach(e,function(l){i=l.call(t,i,o.normalize(),n?n.status:void 0)}),o.normalize(),i}function Jf(e){return!!(e&&e.__CANCEL__)}function Yt(e,n,t){L.call(this,e??"canceled",L.ERR_CANCELED,n,t),this.name="CanceledError"}w.inherits(Yt,L,{__CANCEL__:!0});function Yf(e,n,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?e(t):n(new L("Request failed with status code "+t.status,[L.ERR_BAD_REQUEST,L.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function Jm(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function Ym(e,n){e=e||10;const t=new Array(e),r=new Array(e);let o=0,i=0,a;return n=n!==void 0?n:1e3,function(s){const u=Date.now(),c=r[i];a||(a=u),t[o]=s,r[o]=u;let d=i,y=0;for(;d!==o;)y+=t[d++],d=d%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-a<n)return;const x=c&&u-c;return x?Math.round(y*1e3/x):void 0}}function Gm(e,n){let t=0,r=1e3/n,o,i;const a=(u,c=Date.now())=>{t=c,o=null,i&&(clearTimeout(i),i=null),e.apply(null,u)};return[(...u)=>{const c=Date.now(),d=c-t;d>=r?a(u,c):(o=u,i||(i=setTimeout(()=>{i=null,a(o)},r-d)))},()=>o&&a(o)]}const pi=(e,n,t=3)=>{let r=0;const o=Ym(50,250);return Gm(i=>{const a=i.loaded,l=i.lengthComputable?i.total:void 0,s=a-r,u=o(s),c=a<=l;r=a;const d={loaded:a,total:l,progress:l?a/l:void 0,bytes:s,rate:u||void 0,estimated:u&&l&&c?(l-a)/u:void 0,event:i,lengthComputable:l!=null,[n?"download":"upload"]:!0};e(d)},t)},Hu=(e,n)=>{const t=e!=null;return[r=>n[0]({lengthComputable:t,total:e,loaded:r}),n[1]]},Wu=e=>(...n)=>w.asap(()=>e(...n)),Zm=Ne.hasStandardBrowserEnv?function(){const n=Ne.navigator&&/(msie|trident)/i.test(Ne.navigator.userAgent),t=document.createElement("a");let r;function o(i){let a=i;return n&&(t.setAttribute("href",a),a=t.href),t.setAttribute("href",a),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return r=o(window.location.href),function(a){const l=w.isString(a)?o(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),eg=Ne.hasStandardBrowserEnv?{write(e,n,t,r,o,i){const a=[e+"="+encodeURIComponent(n)];w.isNumber(t)&&a.push("expires="+new Date(t).toGMTString()),w.isString(r)&&a.push("path="+r),w.isString(o)&&a.push("domain="+o),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function ng(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function tg(e,n){return n?e.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):e}function Gf(e,n){return e&&!ng(n)?tg(e,n):n}const Vu=e=>e instanceof _e?{...e}:e;function ft(e,n){n=n||{};const t={};function r(u,c,d){return w.isPlainObject(u)&&w.isPlainObject(c)?w.merge.call({caseless:d},u,c):w.isPlainObject(c)?w.merge({},c):w.isArray(c)?c.slice():c}function o(u,c,d){if(w.isUndefined(c)){if(!w.isUndefined(u))return r(void 0,u,d)}else return r(u,c,d)}function i(u,c){if(!w.isUndefined(c))return r(void 0,c)}function a(u,c){if(w.isUndefined(c)){if(!w.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function l(u,c,d){if(d in n)return r(u,c);if(d in e)return r(void 0,u)}const s={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(u,c)=>o(Vu(u),Vu(c),!0)};return w.forEach(Object.keys(Object.assign({},e,n)),function(c){const d=s[c]||o,y=d(e[c],n[c],c);w.isUndefined(y)&&d!==l||(t[c]=y)}),t}const Zf=e=>{const n=ft({},e);let{data:t,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:a,auth:l}=n;n.headers=a=_e.from(a),n.url=Kf(Gf(n.baseURL,n.url),e.params,e.paramsSerializer),l&&a.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let s;if(w.isFormData(t)){if(Ne.hasStandardBrowserEnv||Ne.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if((s=a.getContentType())!==!1){const[u,...c]=s?s.split(";").map(d=>d.trim()).filter(Boolean):[];a.setContentType([u||"multipart/form-data",...c].join("; "))}}if(Ne.hasStandardBrowserEnv&&(r&&w.isFunction(r)&&(r=r(n)),r||r!==!1&&Zm(n.url))){const u=o&&i&&eg.read(i);u&&a.set(o,u)}return n},rg=typeof XMLHttpRequest<"u",og=rg&&function(e){return new Promise(function(t,r){const o=Zf(e);let i=o.data;const a=_e.from(o.headers).normalize();let{responseType:l,onUploadProgress:s,onDownloadProgress:u}=o,c,d,y,x,h;function m(){x&&x(),h&&h(),o.cancelToken&&o.cancelToken.unsubscribe(c),o.signal&&o.signal.removeEventListener("abort",c)}let b=new XMLHttpRequest;b.open(o.method.toUpperCase(),o.url,!0),b.timeout=o.timeout;function g(){if(!b)return;const v=_e.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),S={data:!l||l==="text"||l==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:v,config:e,request:b};Yf(function(C){t(C),m()},function(C){r(C),m()},S),b=null}"onloadend"in b?b.onloadend=g:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(g)},b.onabort=function(){b&&(r(new L("Request aborted",L.ECONNABORTED,e,b)),b=null)},b.onerror=function(){r(new L("Network Error",L.ERR_NETWORK,e,b)),b=null},b.ontimeout=function(){let k=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const S=o.transitional||Qf;o.timeoutErrorMessage&&(k=o.timeoutErrorMessage),r(new L(k,S.clarifyTimeoutError?L.ETIMEDOUT:L.ECONNABORTED,e,b)),b=null},i===void 0&&a.setContentType(null),"setRequestHeader"in b&&w.forEach(a.toJSON(),function(k,S){b.setRequestHeader(S,k)}),w.isUndefined(o.withCredentials)||(b.withCredentials=!!o.withCredentials),l&&l!=="json"&&(b.responseType=o.responseType),u&&([y,h]=pi(u,!0),b.addEventListener("progress",y)),s&&b.upload&&([d,x]=pi(s),b.upload.addEventListener("progress",d),b.upload.addEventListener("loadend",x)),(o.cancelToken||o.signal)&&(c=v=>{b&&(r(!v||v.type?new Yt(null,e,b):v),b.abort(),b=null)},o.cancelToken&&o.cancelToken.subscribe(c),o.signal&&(o.signal.aborted?c():o.signal.addEventListener("abort",c)));const p=Jm(o.url);if(p&&Ne.protocols.indexOf(p)===-1){r(new L("Unsupported protocol "+p+":",L.ERR_BAD_REQUEST,e));return}b.send(i||null)})},ig=(e,n)=>{const{length:t}=e=e?e.filter(Boolean):[];if(n||t){let r=new AbortController,o;const i=function(u){if(!o){o=!0,l();const c=u instanceof Error?u:this.reason;r.abort(c instanceof L?c:new Yt(c instanceof Error?c.message:c))}};let a=n&&setTimeout(()=>{a=null,i(new L(`timeout ${n} of ms exceeded`,L.ETIMEDOUT))},n);const l=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),e=null)};e.forEach(u=>u.addEventListener("abort",i));const{signal:s}=r;return s.unsubscribe=()=>w.asap(l),s}},ag=function*(e,n){let t=e.byteLength;if(t<n){yield e;return}let r=0,o;for(;r<t;)o=r+n,yield e.slice(r,o),r=o},lg=async function*(e,n){for await(const t of sg(e))yield*ag(t,n)},sg=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const n=e.getReader();try{for(;;){const{done:t,value:r}=await n.read();if(t)break;yield r}}finally{await n.cancel()}},Ku=(e,n,t,r)=>{const o=lg(e,n);let i=0,a,l=s=>{a||(a=!0,r&&r(s))};return new ReadableStream({async pull(s){try{const{done:u,value:c}=await o.next();if(u){l(),s.close();return}let d=c.byteLength;if(t){let y=i+=d;t(y)}s.enqueue(new Uint8Array(c))}catch(u){throw l(u),u}},cancel(s){return l(s),o.return()}},{highWaterMark:2})},Mi=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",ep=Mi&&typeof ReadableStream=="function",ug=Mi&&(typeof TextEncoder=="function"?(e=>n=>e.encode(n))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),np=(e,...n)=>{try{return!!e(...n)}catch{return!1}},cg=ep&&np(()=>{let e=!1;const n=new Request(Ne.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!n}),Qu=64*1024,gl=ep&&np(()=>w.isReadableStream(new Response("").body)),hi={stream:gl&&(e=>e.body)};Mi&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(n=>{!hi[n]&&(hi[n]=w.isFunction(e[n])?t=>t[n]():(t,r)=>{throw new L(`Response type '${n}' is not supported`,L.ERR_NOT_SUPPORT,r)})})})(new Response);const dg=async e=>{if(e==null)return 0;if(w.isBlob(e))return e.size;if(w.isSpecCompliantForm(e))return(await new Request(Ne.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(w.isArrayBufferView(e)||w.isArrayBuffer(e))return e.byteLength;if(w.isURLSearchParams(e)&&(e=e+""),w.isString(e))return(await ug(e)).byteLength},fg=async(e,n)=>{const t=w.toFiniteNumber(e.getContentLength());return t??dg(n)},pg=Mi&&(async e=>{let{url:n,method:t,data:r,signal:o,cancelToken:i,timeout:a,onDownloadProgress:l,onUploadProgress:s,responseType:u,headers:c,withCredentials:d="same-origin",fetchOptions:y}=Zf(e);u=u?(u+"").toLowerCase():"text";let x=ig([o,i&&i.toAbortSignal()],a),h;const m=x&&x.unsubscribe&&(()=>{x.unsubscribe()});let b;try{if(s&&cg&&t!=="get"&&t!=="head"&&(b=await fg(c,r))!==0){let S=new Request(n,{method:"POST",body:r,duplex:"half"}),O;if(w.isFormData(r)&&(O=S.headers.get("content-type"))&&c.setContentType(O),S.body){const[C,N]=Hu(b,pi(Wu(s)));r=Ku(S.body,Qu,C,N)}}w.isString(d)||(d=d?"include":"omit");const g="credentials"in Request.prototype;h=new Request(n,{...y,signal:x,method:t.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",credentials:g?d:void 0});let p=await fetch(h);const v=gl&&(u==="stream"||u==="response");if(gl&&(l||v&&m)){const S={};["status","statusText","headers"].forEach(M=>{S[M]=p[M]});const O=w.toFiniteNumber(p.headers.get("content-length")),[C,N]=l&&Hu(O,pi(Wu(l),!0))||[];p=new Response(Ku(p.body,Qu,C,()=>{N&&N(),m&&m()}),S)}u=u||"text";let k=await hi[w.findKey(hi,u)||"text"](p,e);return!v&&m&&m(),await new Promise((S,O)=>{Yf(S,O,{data:k,headers:_e.from(p.headers),status:p.status,statusText:p.statusText,config:e,request:h})})}catch(g){throw m&&m(),g&&g.name==="TypeError"&&/fetch/i.test(g.message)?Object.assign(new L("Network Error",L.ERR_NETWORK,e,h),{cause:g.cause||g}):L.from(g,g&&g.code,e,h)}}),vl={http:Nm,xhr:og,fetch:pg};w.forEach(vl,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const Xu=e=>`- ${e}`,hg=e=>w.isFunction(e)||e===null||e===!1,tp={getAdapter:e=>{e=w.isArray(e)?e:[e];const{length:n}=e;let t,r;const o={};for(let i=0;i<n;i++){t=e[i];let a;if(r=t,!hg(t)&&(r=vl[(a=String(t)).toLowerCase()],r===void 0))throw new L(`Unknown adapter '${a}'`);if(r)break;o[a||"#"+i]=r}if(!r){const i=Object.entries(o).map(([l,s])=>`adapter ${l} `+(s===!1?"is not supported by the environment":"is not available in the build"));let a=n?i.length>1?`since :
`+i.map(Xu).join(`
`):" "+Xu(i[0]):"as no adapter specified";throw new L("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:vl};function ga(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Yt(null,e)}function Ju(e){return ga(e),e.headers=_e.from(e.headers),e.data=ma.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),tp.getAdapter(e.adapter||Jr.adapter)(e).then(function(r){return ga(e),r.data=ma.call(e,e.transformResponse,r),r.headers=_e.from(r.headers),r},function(r){return Jf(r)||(ga(e),r&&r.response&&(r.response.data=ma.call(e,e.transformResponse,r.response),r.response.headers=_e.from(r.response.headers))),Promise.reject(r)})}const rp="1.7.7",ws={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{ws[e]=function(r){return typeof r===e||"a"+(n<1?"n ":" ")+e}});const Yu={};ws.transitional=function(n,t,r){function o(i,a){return"[Axios v"+rp+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,l)=>{if(n===!1)throw new L(o(a," has been removed"+(t?" in "+t:"")),L.ERR_DEPRECATED);return t&&!Yu[a]&&(Yu[a]=!0,console.warn(o(a," has been deprecated since v"+t+" and will be removed in the near future"))),n?n(i,a,l):!0}};function mg(e,n,t){if(typeof e!="object")throw new L("options must be an object",L.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=n[i];if(a){const l=e[i],s=l===void 0||a(l,i,e);if(s!==!0)throw new L("option "+i+" must be "+s,L.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new L("Unknown option "+i,L.ERR_BAD_OPTION)}}const yl={assertOptions:mg,validators:ws},Pn=yl.validators;class at{constructor(n){this.defaults=n,this.interceptors={request:new Bu,response:new Bu}}async request(n,t){try{return await this._request(n,t)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(n,t){typeof n=="string"?(t=t||{},t.url=n):t=n||{},t=ft(this.defaults,t);const{transitional:r,paramsSerializer:o,headers:i}=t;r!==void 0&&yl.assertOptions(r,{silentJSONParsing:Pn.transitional(Pn.boolean),forcedJSONParsing:Pn.transitional(Pn.boolean),clarifyTimeoutError:Pn.transitional(Pn.boolean)},!1),o!=null&&(w.isFunction(o)?t.paramsSerializer={serialize:o}:yl.assertOptions(o,{encode:Pn.function,serialize:Pn.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let a=i&&w.merge(i.common,i[t.method]);i&&w.forEach(["delete","get","head","post","put","patch","common"],h=>{delete i[h]}),t.headers=_e.concat(a,i);const l=[];let s=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(t)===!1||(s=s&&m.synchronous,l.unshift(m.fulfilled,m.rejected))});const u=[];this.interceptors.response.forEach(function(m){u.push(m.fulfilled,m.rejected)});let c,d=0,y;if(!s){const h=[Ju.bind(this),void 0];for(h.unshift.apply(h,l),h.push.apply(h,u),y=h.length,c=Promise.resolve(t);d<y;)c=c.then(h[d++],h[d++]);return c}y=l.length;let x=t;for(d=0;d<y;){const h=l[d++],m=l[d++];try{x=h(x)}catch(b){m.call(this,b);break}}try{c=Ju.call(this,x)}catch(h){return Promise.reject(h)}for(d=0,y=u.length;d<y;)c=c.then(u[d++],u[d++]);return c}getUri(n){n=ft(this.defaults,n);const t=Gf(n.baseURL,n.url);return Kf(t,n.params,n.paramsSerializer)}}w.forEach(["delete","get","head","options"],function(n){at.prototype[n]=function(t,r){return this.request(ft(r||{},{method:n,url:t,data:(r||{}).data}))}});w.forEach(["post","put","patch"],function(n){function t(r){return function(i,a,l){return this.request(ft(l||{},{method:n,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}at.prototype[n]=t(),at.prototype[n+"Form"]=t(!0)});class ks{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(i){t=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(l=>{r.subscribe(l),i=l}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},n(function(i,a,l){r.reason||(r.reason=new Yt(i,a,l),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const t=this._listeners.indexOf(n);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const n=new AbortController,t=r=>{n.abort(r)};return this.subscribe(t),n.signal.unsubscribe=()=>this.unsubscribe(t),n.signal}static source(){let n;return{token:new ks(function(o){n=o}),cancel:n}}}function gg(e){return function(t){return e.apply(null,t)}}function vg(e){return w.isObject(e)&&e.isAxiosError===!0}const xl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(xl).forEach(([e,n])=>{xl[n]=e});function op(e){const n=new at(e),t=Lf(at.prototype.request,n);return w.extend(t,at.prototype,n,{allOwnKeys:!0}),w.extend(t,n,null,{allOwnKeys:!0}),t.create=function(o){return op(ft(e,o))},t}const ee=op(Jr);ee.Axios=at;ee.CanceledError=Yt;ee.CancelToken=ks;ee.isCancel=Jf;ee.VERSION=rp;ee.toFormData=Di;ee.AxiosError=L;ee.Cancel=ee.CanceledError;ee.all=function(n){return Promise.all(n)};ee.spread=gg;ee.isAxiosError=vg;ee.mergeConfig=ft;ee.AxiosHeaders=_e;ee.formToJSON=e=>Xf(w.isHTMLForm(e)?new FormData(e):e);ee.getAdapter=tp.getAdapter;ee.HttpStatusCode=xl;ee.default=ee;const yg=({file:e,setFile:n,page:t,setFileName:r})=>{const o=i=>{i.target.files&&i.target.files.length>0?(n(i.target.files[0]),r(i.target.files[0].name.split(".").slice(0,-1).join("."))):n(null)};return f.jsxs("div",{className:"mb-4",children:[f.jsx("label",{className:"block text-white text-xl font-semibold mb-2 text-gray-700",htmlFor:"file",children:"Upload Contract File"}),f.jsx("input",{type:"file",id:"file",className:"w-full py-2 px-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200",onChange:o,accept:t==="aptos"?".move":".sol",required:!0}),e&&f.jsxs("p",{className:"mt-2 text-gray-600",children:["Selected file: ",e.name]})," "]})};function se(e,n){n===void 0&&(n={});var t=n.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",t==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}se(`.react-loading-indicator-normalize,
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
}`);var F=function(){return F=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},F.apply(this,arguments)};function mi(e){return mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},mi(e)}var xg=/^\s+/,bg=/\s+$/;function j(e,n){if(n=n||{},(e=e||"")instanceof j)return e;if(!(this instanceof j))return new j(e,n);var t=function(r){var o={r:0,g:0,b:0},i=1,a=null,l=null,s=null,u=!1,c=!1;typeof r=="string"&&(r=function(h){h=h.replace(xg,"").replace(bg,"").toLowerCase();var m,b=!1;if(bl[h])h=bl[h],b=!0;else if(h=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(m=We.rgb.exec(h))?{r:m[1],g:m[2],b:m[3]}:(m=We.rgba.exec(h))?{r:m[1],g:m[2],b:m[3],a:m[4]}:(m=We.hsl.exec(h))?{h:m[1],s:m[2],l:m[3]}:(m=We.hsla.exec(h))?{h:m[1],s:m[2],l:m[3],a:m[4]}:(m=We.hsv.exec(h))?{h:m[1],s:m[2],v:m[3]}:(m=We.hsva.exec(h))?{h:m[1],s:m[2],v:m[3],a:m[4]}:(m=We.hex8.exec(h))?{r:ze(m[1]),g:ze(m[2]),b:ze(m[3]),a:rc(m[4]),format:b?"name":"hex8"}:(m=We.hex6.exec(h))?{r:ze(m[1]),g:ze(m[2]),b:ze(m[3]),format:b?"name":"hex"}:(m=We.hex4.exec(h))?{r:ze(m[1]+""+m[1]),g:ze(m[2]+""+m[2]),b:ze(m[3]+""+m[3]),a:rc(m[4]+""+m[4]),format:b?"name":"hex8"}:(m=We.hex3.exec(h))?{r:ze(m[1]+""+m[1]),g:ze(m[2]+""+m[2]),b:ze(m[3]+""+m[3]),format:b?"name":"hex"}:!1}(r)),mi(r)=="object"&&(sn(r.r)&&sn(r.g)&&sn(r.b)?(d=r.r,y=r.g,x=r.b,o={r:255*Q(d,255),g:255*Q(y,255),b:255*Q(x,255)},u=!0,c=String(r.r).substr(-1)==="%"?"prgb":"rgb"):sn(r.h)&&sn(r.s)&&sn(r.v)?(a=hr(r.s),l=hr(r.v),o=function(h,m,b){h=6*Q(h,360),m=Q(m,100),b=Q(b,100);var g=Math.floor(h),p=h-g,v=b*(1-m),k=b*(1-p*m),S=b*(1-(1-p)*m),O=g%6,C=[b,k,v,v,S,b][O],N=[S,b,b,k,v,v][O],M=[v,v,S,b,b,k][O];return{r:255*C,g:255*N,b:255*M}}(r.h,a,l),u=!0,c="hsv"):sn(r.h)&&sn(r.s)&&sn(r.l)&&(a=hr(r.s),s=hr(r.l),o=function(h,m,b){var g,p,v;function k(C,N,M){return M<0&&(M+=1),M>1&&(M-=1),M<1/6?C+6*(N-C)*M:M<.5?N:M<2/3?C+(N-C)*(2/3-M)*6:C}if(h=Q(h,360),m=Q(m,100),b=Q(b,100),m===0)g=p=v=b;else{var S=b<.5?b*(1+m):b+m-b*m,O=2*b-S;g=k(O,S,h+1/3),p=k(O,S,h),v=k(O,S,h-1/3)}return{r:255*g,g:255*p,b:255*v}}(r.h,a,s),u=!0,c="hsl"),r.hasOwnProperty("a")&&(i=r.a));var d,y,x;return i=ip(i),{ok:u,format:r.format||c,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:i}}(e);this._originalInput=e,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=n.format||t.format,this._gradientType=n.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}function Gu(e,n,t){e=Q(e,255),n=Q(n,255),t=Q(t,255);var r,o,i=Math.max(e,n,t),a=Math.min(e,n,t),l=(i+a)/2;if(i==a)r=o=0;else{var s=i-a;switch(o=l>.5?s/(2-i-a):s/(i+a),i){case e:r=(n-t)/s+(n<t?6:0);break;case n:r=(t-e)/s+2;break;case t:r=(e-n)/s+4}r/=6}return{h:r,s:o,l}}function Zu(e,n,t){e=Q(e,255),n=Q(n,255),t=Q(t,255);var r,o,i=Math.max(e,n,t),a=Math.min(e,n,t),l=i,s=i-a;if(o=i===0?0:s/i,i==a)r=0;else{switch(i){case e:r=(n-t)/s+(n<t?6:0);break;case n:r=(t-e)/s+2;break;case t:r=(e-n)/s+4}r/=6}return{h:r,s:o,v:l}}function ec(e,n,t,r){var o=[Xe(Math.round(e).toString(16)),Xe(Math.round(n).toString(16)),Xe(Math.round(t).toString(16))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function nc(e,n,t,r){return[Xe(ap(r)),Xe(Math.round(e).toString(16)),Xe(Math.round(n).toString(16)),Xe(Math.round(t).toString(16))].join("")}function wg(e,n){n=n===0?0:n||10;var t=j(e).toHsl();return t.s-=n/100,t.s=Fi(t.s),j(t)}function kg(e,n){n=n===0?0:n||10;var t=j(e).toHsl();return t.s+=n/100,t.s=Fi(t.s),j(t)}function Sg(e){return j(e).desaturate(100)}function Pg(e,n){n=n===0?0:n||10;var t=j(e).toHsl();return t.l+=n/100,t.l=Fi(t.l),j(t)}function Eg(e,n){n=n===0?0:n||10;var t=j(e).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(-n/100*255))),t.g=Math.max(0,Math.min(255,t.g-Math.round(-n/100*255))),t.b=Math.max(0,Math.min(255,t.b-Math.round(-n/100*255))),j(t)}function Og(e,n){n=n===0?0:n||10;var t=j(e).toHsl();return t.l-=n/100,t.l=Fi(t.l),j(t)}function Cg(e,n){var t=j(e).toHsl(),r=(t.h+n)%360;return t.h=r<0?360+r:r,j(t)}function Ng(e){var n=j(e).toHsl();return n.h=(n.h+180)%360,j(n)}function tc(e,n){if(isNaN(n)||n<=0)throw new Error("Argument to polyad must be a positive number");for(var t=j(e).toHsl(),r=[j(e)],o=360/n,i=1;i<n;i++)r.push(j({h:(t.h+i*o)%360,s:t.s,l:t.l}));return r}function _g(e){var n=j(e).toHsl(),t=n.h;return[j(e),j({h:(t+72)%360,s:n.s,l:n.l}),j({h:(t+216)%360,s:n.s,l:n.l})]}function zg(e,n,t){n=n||6,t=t||30;var r=j(e).toHsl(),o=360/t,i=[j(e)];for(r.h=(r.h-(o*n>>1)+720)%360;--n;)r.h=(r.h+o)%360,i.push(j(r));return i}function jg(e,n){n=n||6;for(var t=j(e).toHsv(),r=t.h,o=t.s,i=t.v,a=[],l=1/n;n--;)a.push(j({h:r,s:o,v:i})),i=(i+l)%1;return a}j.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,n,t,r=this.toRgb();return e=r.r/255,n=r.g/255,t=r.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))},setAlpha:function(e){return this._a=ip(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Zu(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Zu(this._r,this._g,this._b),n=Math.round(360*e.h),t=Math.round(100*e.s),r=Math.round(100*e.v);return this._a==1?"hsv("+n+", "+t+"%, "+r+"%)":"hsva("+n+", "+t+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=Gu(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Gu(this._r,this._g,this._b),n=Math.round(360*e.h),t=Math.round(100*e.s),r=Math.round(100*e.l);return this._a==1?"hsl("+n+", "+t+"%, "+r+"%)":"hsla("+n+", "+t+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return ec(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(n,t,r,o,i){var a=[Xe(Math.round(n).toString(16)),Xe(Math.round(t).toString(16)),Xe(Math.round(r).toString(16)),Xe(ap(o))];return i&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Q(this._r,255))+"%",g:Math.round(100*Q(this._g,255))+"%",b:Math.round(100*Q(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Q(this._r,255))+"%, "+Math.round(100*Q(this._g,255))+"%, "+Math.round(100*Q(this._b,255))+"%)":"rgba("+Math.round(100*Q(this._r,255))+"%, "+Math.round(100*Q(this._g,255))+"%, "+Math.round(100*Q(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Tg[ec(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var n="#"+nc(this._r,this._g,this._b,this._a),t=n,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=j(e);t="#"+nc(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+n+",endColorstr="+t+")"},toString:function(e){var n=!!e;e=e||this._format;var t=!1,r=this._a<1&&this._a>=0;return n||!r||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(t=this.toRgbString()),e==="prgb"&&(t=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(t=this.toHexString()),e==="hex3"&&(t=this.toHexString(!0)),e==="hex4"&&(t=this.toHex8String(!0)),e==="hex8"&&(t=this.toHex8String()),e==="name"&&(t=this.toName()),e==="hsl"&&(t=this.toHslString()),e==="hsv"&&(t=this.toHsvString()),t||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return j(this.toString())},_applyModification:function(e,n){var t=e.apply(null,[this].concat([].slice.call(n)));return this._r=t._r,this._g=t._g,this._b=t._b,this.setAlpha(t._a),this},lighten:function(){return this._applyModification(Pg,arguments)},brighten:function(){return this._applyModification(Eg,arguments)},darken:function(){return this._applyModification(Og,arguments)},desaturate:function(){return this._applyModification(wg,arguments)},saturate:function(){return this._applyModification(kg,arguments)},greyscale:function(){return this._applyModification(Sg,arguments)},spin:function(){return this._applyModification(Cg,arguments)},_applyCombination:function(e,n){return e.apply(null,[this].concat([].slice.call(n)))},analogous:function(){return this._applyCombination(zg,arguments)},complement:function(){return this._applyCombination(Ng,arguments)},monochromatic:function(){return this._applyCombination(jg,arguments)},splitcomplement:function(){return this._applyCombination(_g,arguments)},triad:function(){return this._applyCombination(tc,[3])},tetrad:function(){return this._applyCombination(tc,[4])}},j.fromRatio=function(e,n){if(mi(e)=="object"){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=r==="a"?e[r]:hr(e[r]));e=t}return j(e,n)},j.equals=function(e,n){return!(!e||!n)&&j(e).toRgbString()==j(n).toRgbString()},j.random=function(){return j.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},j.mix=function(e,n,t){t=t===0?0:t||50;var r=j(e).toRgb(),o=j(n).toRgb(),i=t/100;return j({r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a})},j.readability=function(e,n){var t=j(e),r=j(n);return(Math.max(t.getLuminance(),r.getLuminance())+.05)/(Math.min(t.getLuminance(),r.getLuminance())+.05)},j.isReadable=function(e,n,t){var r,o,i=j.readability(e,n);switch(o=!1,(r=function(a){var l,s;return l=((a=a||{level:"AA",size:"small"}).level||"AA").toUpperCase(),s=(a.size||"small").toLowerCase(),l!=="AA"&&l!=="AAA"&&(l="AA"),s!=="small"&&s!=="large"&&(s="small"),{level:l,size:s}}(t)).level+r.size){case"AAsmall":case"AAAlarge":o=i>=4.5;break;case"AAlarge":o=i>=3;break;case"AAAsmall":o=i>=7}return o},j.mostReadable=function(e,n,t){var r,o,i,a,l=null,s=0;o=(t=t||{}).includeFallbackColors,i=t.level,a=t.size;for(var u=0;u<n.length;u++)(r=j.readability(e,n[u]))>s&&(s=r,l=j(n[u]));return j.isReadable(e,l,{level:i,size:a})||!o?l:(t.includeFallbackColors=!1,j.mostReadable(e,["#fff","#000"],t))};var bl=j.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Tg=j.hexNames=function(e){var n={};for(var t in e)e.hasOwnProperty(t)&&(n[e[t]]=t);return n}(bl);function ip(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Q(e,n){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(e)&&(e="100%");var t=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(e);return e=Math.min(n,Math.max(0,parseFloat(e))),t&&(e=parseInt(e*n,10)/100),Math.abs(e-n)<1e-6?1:e%n/parseFloat(n)}function Fi(e){return Math.min(1,Math.max(0,e))}function ze(e){return parseInt(e,16)}function Xe(e){return e.length==1?"0"+e:""+e}function hr(e){return e<=1&&(e=100*e+"%"),e}function ap(e){return Math.round(255*parseFloat(e)).toString(16)}function rc(e){return ze(e)/255}var En,bo,wo,We=(bo="[\\s|\\(]+("+(En="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+En+")[,|\\s]+("+En+")\\s*\\)?",wo="[\\s|\\(]+("+En+")[,|\\s]+("+En+")[,|\\s]+("+En+")[,|\\s]+("+En+")\\s*\\)?",{CSS_UNIT:new RegExp(En),rgb:new RegExp("rgb"+bo),rgba:new RegExp("rgba"+wo),hsl:new RegExp("hsl"+bo),hsla:new RegExp("hsla"+wo),hsv:new RegExp("hsv"+bo),hsva:new RegExp("hsva"+wo),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function sn(e){return!!We.CSS_UNIT.exec(e)}var Yr=function(e,n){var t=(typeof e=="string"?parseInt(e):e)||0;if(t>=-5&&t<=5){var r=t,o=parseFloat(n),i=o+r*(o/5)*-1;return(i==0||i<=Number.EPSILON)&&(i=.1),{animationPeriod:i+"s"}}return{animationPeriod:n}},Gr=function(e,n){var t=e||{},r="";switch(n){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var o={};if(t.fontSize){var i=t.fontSize;o=function(a,l){var s={};for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&l.indexOf(u)<0&&(s[u]=a[u]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function"){var c=0;for(u=Object.getOwnPropertySymbols(a);c<u.length;c++)l.indexOf(u[c])<0&&Object.prototype.propertyIsEnumerable.call(a,u[c])&&(s[u[c]]=a[u[c]])}return s}(t,["fontSize"]),r=i}return{fontSize:r,styles:o}},Rg={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Zr=function(e){var n=e.className,t=e.text,r=e.textColor,o=e.staticText,i=e.style;return t?B.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(n||"").trim(),style:F(F(F({},o&&Rg),r&&{color:r,mixBlendMode:"unset"}),i&&i)},typeof t=="string"&&t.length?t:"loading"):null},hn="rgb(50, 205, 50)";function eo(e,n){n===void 0&&(n=0);var t=[];return function r(o,i){return i===void 0&&(i=0),t.push.apply(t,o),t.length<i&&r(t,i),t.slice(0,i)}(e,n)}se(`.atom-rli-bounding-box {
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
}`);j(hn).toRgb();Array.from({length:4},function(e,n){return"--atom-phase".concat(n+1,"-rgb")});se(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--commet-phase".concat(n+1,"-color")});se(`.OP-annulus-rli-bounding-box {
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
}`);var ko=Array.from({length:4},function(e,n){return"--OP-annulus-phase".concat(n+1,"-color")}),Ag=function(e){var n,t=Gr(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,i=e==null?void 0:e.easing,a=Yr(e==null?void 0:e.speedPlus,"1.5s").animationPeriod,l=function(u){var c={},d=ko.length;if(u instanceof Array){for(var y=eo(u,d),x=0;x<y.length&&!(x>=4);x++)c[ko[x]]=y[x];return c}try{if(typeof u!="string")throw new Error("Color String expected");for(var h=0;h<d;h++)c[ko[h]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),h=0;h<d;h++)c[ko[h]]=hn}return c}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),s=e!=null&&e.dense?4.3:2.9;return B.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:F(F(F(F(F({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},B.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},B.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},B.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:s,strokeMiterlimit:"10"})),B.createElement(Zr,{className:"OP-annulus-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};function va(e){return e&&e.Math===Math&&e}se(`.OP-dotted-rli-bounding-box {
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
}`);var xt=va(typeof window=="object"&&window)||va(typeof self=="object"&&self)||va(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function lp(){var e,n;return!((e=xt==null?void 0:xt.crypto)===null||e===void 0)&&e.randomUUID?xt.crypto.randomUUID():!((n=xt==null?void 0:xt.btoa)===null||n===void 0)&&n.name?xt.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var So=Array.from({length:4},function(e,n){return"--OP-dotted-phase".concat(n+1,"-color")}),Lg=function(e){var n,t=Gr(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,i=e==null?void 0:e.easing,a=Yr(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=function(u){var c={},d=So.length;if(u instanceof Array){for(var y=eo(u,d),x=0;x<y.length&&!(x>=4);x++)c[So[x]]=y[x];return c}try{if(typeof u!="string")throw new Error("Color String expected");for(var h=0;h<d;h++)c[So[h]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),h=0;h<d;h++)c[So[h]]=hn}return c}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),s=e!=null&&e.dense?16:12;return B.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:F(F(F(F(F({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},B.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:s}).map(function(u,c){var d=function(h,m,b){if(m===16){var g=360*h/m,p=m-h,v=Number.parseFloat(b)/m*p*-1;return{transform:"rotate(".concat(g,"deg)"),animationDelay:"".concat(v,"s")}}return{transform:"",animationDelay:""}}(c,s,a),y=d.animationDelay,x=d.transform;return B.createElement("span",{key:lp(),className:"rli-d-i-b dot-shape-holder",style:x?{transform:x}:void 0},B.createElement("span",{className:"dot",style:y?{animationDelay:y}:void 0}))}),B.createElement(Zr,{className:"OP-dotted-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};se(`.OP-spokes-rli-bounding-box {
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
}`);var Po=Array.from({length:4},function(e,n){return"--OP-spokes-phase".concat(n+1,"-color")}),Dg=function(e){var n,t=Gr(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,i=e==null?void 0:e.easing,a=Yr(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=function(u){var c={},d=Po.length;if(u instanceof Array){for(var y=eo(u,d),x=0;x<y.length&&!(x>=4);x++)c[Po[x]]=y[x];return c}try{if(typeof u!="string")throw new Error("Color String expected");for(var h=0;h<d;h++)c[Po[h]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),h=0;h<d;h++)c[Po[h]]=hn}return c}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),s=e!=null&&e.dense?16:12;return B.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:F(F(F(F(F({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},B.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:s},function(u,c){return B.createElement("span",{key:lp(),className:"rli-d-i-b spoke",style:Mg(c,s,a)})})),B.createElement(Zr,{text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};function Mg(e,n,t){if(n===16){var r=n-e,o=Number.parseFloat(t)/n;return{transform:"rotate(".concat(360*e/n,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((r-1)*o*-1,"s")}}}se(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);var Eo=Array.from({length:4},function(e,n){return"--OP-annulus-dual-sectors-phase".concat(n+1,"-color")}),Fg=function(e){var n,t=Gr(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,i=e==null?void 0:e.easing,a=Yr(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=function(u){var c={},d=Eo.length;if(u instanceof Array){for(var y=eo(u,d),x=0;x<y.length&&!(x>=4);x++)c[Eo[x]]=y[x];return c}try{if(typeof u!="string")throw new Error("Color String expected");for(var h=0;h<d;h++)c[Eo[h]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),h=0;h<d;h++)c[Eo[h]]=hn}return c}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),s=e.dense?"0.45em":"";return B.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:F(F(F(F(F({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},B.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},B.createElement("span",{className:"rli-d-i-b annulus-sectors",style:F({},s&&{borderWidth:s})}),B.createElement(Zr,{className:"OP-annulus-dual-sectors-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};se(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);var ur=Array.from({length:4},function(e,n){return["--OP-annulus-track-phase".concat(n+1,"-color"),"--OP-annulus-sector-phase".concat(n+1,"-color")]}),Oo=function(e){return e===void 0&&(e=1),.25*e},Ig=function(e){var n,t=Gr(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,i=e==null?void 0:e.easing,a=Yr(e==null?void 0:e.speedPlus,"1s").animationPeriod,l=function(u){var c={},d=ur.length;if(u instanceof Array){for(var y=eo(u,d),x=0;x<y.length&&!(x>=4);x++){var h=ur[x];try{if(!(g=j(y[x])).isValid())throw new Error("Invalid Color: ".concat(g.getOriginalInput()));var m=g.setAlpha(Oo(g.getAlpha())).toRgbString(),b=y[x];c[h[0]]=m,c[h[1]]=b}catch{b=hn,m=(g=j(hn)).setAlpha(Oo(g.getAlpha())).toRgbString(),c[h[0]]=m,c[h[1]]=b}}return c}try{var g=j(u);if(typeof u!="string")throw new Error("Color String expected");if(!g.isValid())throw new Error("Invalid Color: ".concat(g.getOriginalInput()));b=u,m=g.setAlpha(Oo(g.getAlpha())).toRgbString();for(var p=0;p<d;p++)c[(h=ur[p])[0]]=m,c[h[1]]=b}catch(v){for(v instanceof Error?console.warn("[".concat(v.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),b=hn,m=(g=j(hn)).setAlpha(Oo(g.getAlpha())).toRgbString(),p=0;p<ur.length;p++)c[(h=ur[p])[0]]=m,c[h[1]]=b}return c}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),s=e.dense?"0.45em":"";return B.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:F(F(F(F(F({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},B.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},B.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:F({},s&&{borderWidth:s})}),B.createElement(Zr,{className:"OP-annulus-sector-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))},Ug=function(e){var n=Object(e).variant,t=n===void 0?"disc":n;return t==="dotted"?B.createElement(Lg,F({},e)):t==="spokes"?B.createElement(Dg,F({},e)):t==="disc"?B.createElement(Ag,F({},e)):t==="split-disc"?B.createElement(Fg,F({},e)):t==="track-disc"?B.createElement(Ig,F({},e)):null};se(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--four-square-phase".concat(n+1,"-color")});se(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--mosaic-phase".concat(n+1,"-color")});se(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--riple-phase".concat(n+1,"-color")});se(`.pulsate-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--TD-pulsate-phase".concat(n+1,"-color")});se(`.brick-stack-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--TD-brick-stack-phase".concat(n+1,"-color")});se(`.bob-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--TD-bob-phase".concat(n+1,"-color")});se(`.bounce-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--TD-bounce-phase".concat(n+1,"-color")});se(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--shape-phase".concat(n+1,"-color")});se(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--trophySpin-phase".concat(n+1,"-color")});se(`.slab-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--slab-phase".concat(n+1,"-color")});se(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--life-line-phase".concat(n+1,"-color")});const $g=()=>{var Yn;const[e,n]=E.useState(""),[t,r]=E.useState(""),[o,i]=E.useState(""),[a,l]=E.useState(""),[s,u]=E.useState(""),[c,d]=E.useState(""),[y,x]=E.useState(""),[h,m]=E.useState(!1),[b,g]=E.useState(""),[p,v]=E.useState(null),[k,S]=E.useState(null),[O,C]=E.useState(""),[N,M]=E.useState("https://mevm.devnet.imola.movementlabs.xyz"),H=(Yn=Xn().state)==null?void 0:Yn.page,wn=T=>{M(T.target.value),console.log(T.target.value)},Jn=T=>{const A=T.target.value;u(""),A.length<=64?n(T.target.value):A.length!==64&&l("Input must be exactly 64 characters long")},no=T=>{/^[0-9a-fA-F]*$/.test(T.key)||(T.preventDefault(),u("Only hexadecimal characters are allowed."))},Ii=T=>{const A=T.target.value;l(""),A.length===2&&A==="0x"||A.startsWith("0x")&&/^[0-9a-fA-F]{40}$/.test(A.slice(2))?(r(A),l("")):A.startsWith("0x")?H==="aptos"&&A.startsWith("0x")&&A.length!==66||H==="foundry"&&A.startsWith("0x")&&A.length!==42?l(`${H==="aptos"?"Input must be exactly 66 characters long.":"Input must be exactly 42 characters long."}`):A.length>2&&!/^[0-9a-fA-F]*$/.test(A.slice(2))&&l("Only hexadecimal characters are allowed."):l('Input must start with "0x".')},Gt=T=>{const A=T.currentTarget.value;A.startsWith("0x")?!/^[0-9a-fA-F]*$/.test(T.key)&&T.key!=="Backspace"&&(T.preventDefault(),l('Only hexadecimal characters are allowed after "0x".')):(A.length===0&&T.key!=="0"||A.length===1&&T.key!=="x")&&(T.preventDefault(),l('Input must start with "0x".'))},Zt=T=>{const A=T.target.value;d(""),H==="aptos"?A.length===2&&A==="0x"||A.startsWith("0x")&&/^[0-9a-fA-F]{40}$/.test(A.slice(2))?(i(A),d("")):A.startsWith("0x")?A.startsWith("0x")&&A.length!==66?d("Input must be exactly 66 characters long."):A.length>2&&!/^[0-9a-fA-F]*$/.test(A.slice(2))&&d("Only hexadecimal characters are allowed."):d('Input must start with "0x".'):A.length<=64?(i(T.target.value),d("")):A.length!==64&&d("Input must be exactly 64 characters long")},_=T=>{const A=T.currentTarget.value;H==="aptos"?A.startsWith("0x")?/^[0-9a-fA-F]*$/.test(T.key)||(T.preventDefault(),d('Only hexadecimal characters are allowed after "0x".')):(A.length===0&&T.key!=="0"||A.length===1&&T.key!=="x")&&(T.preventDefault(),d('Input must start with "0x".')):/^[0-9a-fA-F]*$/.test(T.key)||(T.preventDefault(),d("Only hexadecimal characters are allowed."))},R=T=>{C(T.target.value)},D=async()=>{var A;m(!0),g(""),x("");const T="http://3.107.36.227:3000/upload/solidity";try{const he=new FormData;if(p)he.append("file",p);else throw new Error("No file selected for upload");he.append("privateKey",o),he.append("rpcUrl",N);const kn=await ee.post(T,he,{headers:{"Content-Type":"multipart/form-data"}});console.log("Deployment successful:",kn.data),x(kn.data),alert(`Deployment successful:
${kn.data}`)}catch(he){console.error("Error during deployment:",he),ee.isAxiosError(he)?g(((A=he.response)==null?void 0:A.data)||"Failed to deploy"):g("An unknown error occurred")}finally{m(!1)}},J=vt(),re=()=>{J(`/${H}`)};return f.jsx(f.Fragment,{children:f.jsx("div",{className:"h-[300vh] grow overflow-y-scroll",children:f.jsx("div",{className:"absolute w-[640px] sidebar:w-[400px] h-[766px] top-[-178px] left-[25px]",children:f.jsxs("div",{className:"flex flex-col w-full items-start gap-[20px] absolute top-[228px] left-0",children:[f.jsxs("div",{className:"flex items-end gap-[8px] relative self-stretch w-full flex-[0_0_auto]",onClick:re,children:[f.jsx(Qt,{className:"!relative !w-[24px] !h-[24px]"}),H==="aptos"?f.jsx(Hn,{className:"!relative !w-[24px] !h-[24px] bg-white rounded-xl"}):f.jsx(Xt,{className:"!relative !w-[24px] !h-[24px] bg-white rounded-xl"}),f.jsxs("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[21.6px] whitespace-nowrap uppercase",children:["Deploy ",H]})]}),f.jsxs("div",{className:"flex flex-col gap-[24px] my-5 w-full ",children:[f.jsx("div",{children:f.jsx(yg,{file:p,setFile:v,page:H,setFileName:S})}),f.jsxs("div",{children:[f.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Wallet Address"}),f.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",onChange:Ii,onKeyPress:Gt,maxLength:H==="aptos"?66:42}),a&&f.jsx("p",{className:"text-red-500",children:a})]}),f.jsxs("div",{className:`${H==="aptos"?"":"hidden"}`,children:[f.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Module Name"}),f.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",onChange:R,disabled:H!=="aptos"})]}),f.jsxs("div",{className:`${H==="aptos"?"":"hidden"}`,children:[f.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Account Address"}),f.jsx("input",{className:" w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",onChange:Jn,onKeyPress:no,maxLength:64}),s&&f.jsx("p",{className:"text-red-500",children:s})]}),f.jsxs("div",{children:[f.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Private Key"}),f.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",onChange:Zt,onKeyPress:_,maxLength:H==="aptos"?66:64}),c&&f.jsx("p",{className:"text-red-500",children:c})]}),f.jsxs("div",{children:[H==="aptos"&&f.jsxs(f.Fragment,{children:[f.jsx("label",{htmlFor:"network",className:"block text-xl text-white font-semibold mb-2 text-gray-700",children:"Select Network"}),f.jsxs("select",{id:"network",value:N,onChange:wn,className:"w-full px-5 py-4 text-[#8f8f8f] text-[17px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e]",children:[f.jsx("option",{value:"https://aptos.testnet.suzuka.movementlabs.xyz/v1",className:"bg-white text-[#8f8f8f]",children:"https://aptos.testnet.suzuka.movementlabs.xyz/v1"}),f.jsx("option",{value:"https://devnet.suzuka.movementnetwork.xyz/v1",className:"bg-white text-[#8f8f8f]",children:"https://devnet.suzuka.movementnetwork.xyz/v1"})]})]}),H==="foundry"&&f.jsxs(f.Fragment,{children:[f.jsx("label",{htmlFor:"network",className:"block text-xl text-white font-semibold mb-2 text-gray-700",children:"Select Network"}),f.jsxs("select",{id:"network",value:N,onChange:wn,className:"w-full px-5 py-4 text-[#8f8f8f] text-[17px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e]",children:[f.jsx("option",{value:"",disabled:!0,children:"Select a network"}),f.jsx("option",{value:"https://mevm.devnet.imola.movementlabs.xyz",className:"bg-white text-[#8f8f8f]",children:"https://mevm.devnet.imola.movementlabs.xyz"})]})]})]}),f.jsxs("div",{className:"mt-5",children:[f.jsx("button",{className:`w-full px-5 py-4 mt-4 text-white text-[18px] rounded-lg ${h?"bg-gray-500":"bg-blue-500"} `,onClick:D,disabled:h,children:h?f.jsx(Ug,{color:"#7d9cd9",size:"small",text:"",textColor:""}):"Deploy"}),b&&f.jsx("p",{className:"text-red-500 mt-2",children:b})]}),y&&f.jsxs("div",{className:"mt-4 p-4 bg-gray-800 text-white rounded-lg",children:[f.jsx("h3",{className:"text-lg font-semibold",children:"Deployment Info:"}),f.jsx("pre",{className:"whitespace-pre-wrap",children:y})]})]})]})})})})},Bg=()=>{var u;E.useState("");const[e,n]=E.useState(!1),[t,r]=E.useState(""),o=()=>{n(!0),ee.post("http://3.107.36.227:6666",{aptosAddress:t}).then(c=>{console.log("Response:",c.data)}).catch(c=>{console.error("Có lỗi xảy ra khi gửi dữ liệu!",c)}).finally(()=>{n(!1)})},a=(u=Xn().state)==null?void 0:u.page,l=vt(),s=()=>{l(`/${a}`)};return f.jsx(f.Fragment,{children:f.jsx("div",{className:"h-[300vh] grow overflow-y-scroll",children:f.jsx("div",{className:"absolute w-[640px] sidebar:w-[400px] h-[766px] top-[-178px] left-[25px]",children:f.jsxs("div",{className:"flex flex-col w-full items-start gap-[20px] absolute top-[228px] left-0",children:[f.jsxs("div",{className:"flex items-end gap-[8px] relative self-stretch w-full flex-[0_0_auto]",onClick:s,children:[f.jsx(Qt,{className:"!relative !w-[24px] !h-[24px]"}),a==="aptos"?f.jsx(Hn,{className:"!relative !w-[24px] !h-[24px] bg-white rounded-xl"}):f.jsx(Xt,{className:"!relative !w-[24px] !h-[24px] bg-white rounded-xl"}),f.jsxs("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[21.6px] whitespace-nowrap uppercase",children:["Faucets ",a]})]}),f.jsxs("div",{className:"flex flex-col gap-[24px] my-5 w-full ",children:[f.jsxs("div",{children:[f.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Wallet Address"}),f.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",value:t,onChange:c=>r(c.target.value)})]}),f.jsx("div",{className:"mt-5",children:f.jsx("button",{onClick:o,disabled:e,className:"w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg",children:e?"Loading...":"GET MOVE"})})]})]})})})})},qg=()=>{var c;E.useState("");const[e,n]=E.useState(""),[t,r]=E.useState(""),[o,i]=E.useState("");E.useEffect(()=>{ee.get("http://localhost:3000").then(d=>{const{walletAddress:y,privateKey:x,publicKey:h}=d.data;n(y),r(x),i(h)}).catch(d=>{console.error("Có lỗi xảy ra khi lấy dữ liệu!",d)})},[]);const l=(c=Xn().state)==null?void 0:c.page,s=vt(),u=()=>{s(`/${l}`)};return f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"h-[300vh] grow overflow-y-scroll",children:f.jsx("div",{className:"absolute w-[640px] sidebar:w-[400px] h-[766px] top-[-178px] left-[25px]",children:f.jsxs("div",{className:"flex flex-col w-full items-start gap-[20px] absolute top-[228px] left-0",children:[f.jsxs("div",{className:"flex items-end gap-[8px] relative self-stretch w-full flex-[0_0_auto]",onClick:u,children:[f.jsx(Qt,{className:"!relative !w-[24px] !h-[24px]"}),l==="aptos"?f.jsx(Hn,{className:"!relative !w-[24px] !h-[24px] bg-white rounded-xl"}):f.jsx(Xt,{className:"!relative !w-[24px] !h-[24px] bg-white rounded-xl"}),f.jsxs("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[18px] text-center tracking-[0] leading-[21.6px] whitespace-nowrap uppercase",children:["YourAddress ",l]})]}),f.jsxs("div",{className:"flex flex-col gap-[24px] my-5 w-full ",children:[f.jsxs("div",{children:[f.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Wallet Address"}),f.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",value:e,readOnly:!0})]}),f.jsxs("div",{children:[f.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Pritave key"}),f.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",value:t,readOnly:!0})]}),f.jsxs("div",{children:[f.jsx("label",{className:" block text-white text-xl font-semibold mb-2 text-gray-700",children:"Public key"}),f.jsx("input",{className:"w-full px-5 py-4 text-[#8f8f8f] text-[20px] border border-[#5a5a5a] rounded-lg bg-[#0e0f0e] ",type:"text",value:o,readOnly:!0})]})]})]})})}),f.jsx("div",{children:f.jsx("div",{className:" bg-blue-500 text-white font-bold py-2 px-4 rounded  cursor-pointer self-end",onClick:()=>{s("/deploy")},children:"Deploy"})})]})},oc=Af(document.getElementById("root"));oc&&oc.render(f.jsx(O1,{initialEntries:["/"],children:f.jsx(N1,{children:f.jsxs(un,{element:f.jsx($1,{}),children:[f.jsx(un,{index:!0,element:f.jsx(I1,{})}),f.jsx(un,{path:"aptos",element:f.jsx(Tf,{})}),f.jsx(un,{path:"foundry",element:f.jsx(Rf,{})}),f.jsx(un,{path:"account-balance",element:f.jsx(B1,{})}),f.jsx(un,{path:"deploy",element:f.jsx($g,{})}),f.jsx(un,{path:"faucets",element:f.jsx(Bg,{})}),f.jsx(un,{path:"your-address",element:f.jsx(qg,{})})]})})}));
