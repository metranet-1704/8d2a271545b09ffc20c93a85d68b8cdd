(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{82104:function(e,t,n){Promise.resolve().then(n.bind(n,70877)),Promise.resolve().then(n.bind(n,91845)),Promise.resolve().then(n.bind(n,37388)),Promise.resolve().then(n.bind(n,26016)),Promise.resolve().then(n.t.bind(n,85935,23)),Promise.resolve().then(n.t.bind(n,63385,23)),Promise.resolve().then(n.t.bind(n,2441,23)),Promise.resolve().then(n.t.bind(n,15716,23)),Promise.resolve().then(n.t.bind(n,46751,23)),Promise.resolve().then(n.bind(n,86888)),Promise.resolve().then(n.bind(n,47547)),Promise.resolve().then(n.bind(n,55533))},70877:function(e,t,n){"use strict";n.r(t);var r=n(2265),a=n(4553),o=n(47907);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(e){var t,n=(function(e){if(Array.isArray(e))return e}(t=(0,r.useState)(function(){return(0,a.Df)()}))||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],c=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw a}}return l}}(t,1)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}}(t,1)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],c=(0,r.useRef)(!1);return(0,o.useServerInsertedHTML)(function(){var e=(0,a.EN)(n,{plain:!0});return c.current?null:(c.current=!0,r.createElement("style",{id:"antd-cssinjs","data-rc-order":"prepend","data-rc-priority":"-1000",dangerouslySetInnerHTML:{__html:e}}))}),r.createElement(a.V9,i({},e,{cache:n}))}},26016:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=n(57437),a=n(2265);t.default=function(e){let{html:t,height:n=null,width:o=null,children:i,dataNtpc:l=""}=e;return(0,a.useEffect)(()=>{l&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(l)}})},[l]),(0,r.jsxs)(r.Fragment,{children:[i,t?(0,r.jsx)("div",{style:{height:null!=n?"".concat(n,"px"):"auto",width:null!=o?"".concat(o,"px"):"auto"},"data-ntpc":l,dangerouslySetInnerHTML:{__html:t}}):null]})}},91845:function(e,t,n){"use strict";var r;let a;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let o=n(57437),i=n(2265),l=(r=n(54983))&&r.__esModule?r:{default:r};t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:n="dataLayer"}=e;return void 0===a&&(a=n),(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(n,"'] = window['").concat(n,"'] || [];\n          function gtag(){window['").concat(n,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"');")}}),(0,o.jsx)(l.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];void 0!==a&&window[a]&&window[a].push(arguments)}},37388:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let a=n(57437),o=n(2265),i=(r=n(54983))&&r.__esModule?r:{default:r},l="dataLayer";t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:n="dataLayer",auth:r,preview:c,dataLayer:s}=e;l=n;let u="dataLayer"!==n?"&l=".concat(n):"";return(0,o.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(s?"w[l].push(".concat(JSON.stringify(s),")"):"","\n      })(window,'").concat(n,"');")}}),(0,a.jsx)(i.default,{id:"_next-gtm","data-ntpc":"GTM",src:"https://www.googletagmanager.com/gtm.js?id=".concat(t).concat(u).concat(r?"&gtm_auth=".concat(r):"").concat(c?"&gtm_preview=".concat(c,"&gtm_cookies_win=x"):"")})]})},t.sendGTMEvent=(e,t)=>{let n=t||l;window[n]=window[n]||[],window[n].push(e)}},52185:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},18314:function(e,t,n){"use strict";var r=n(41811);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},74404:function(e,t,n){e.exports=n(18314)()},41811:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},86888:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(57437);n(2265);var a=n(91774);function o(e){let{children:t}=e;return(0,r.jsx)(a.f,{enableSystem:!1,attribute:"class",children:t})}},47547:function(e,t,n){"use strict";n.r(t),n.d(t,{NextAuthProvider:function(){return l}});var r=n(57437),a=n(71126),o=n(74404),i=n.n(o);let l=e=>{let{children:t}=e;return l.propTypes={children:i().node.isRequired},(0,r.jsx)(a.SessionProvider,{refetchOnWindowFocus:!1,basePath:"",children:t})}},55533:function(e,t,n){"use strict";n.r(t);var r=n(2265),a=n(47907);t.default=()=>{let e=(0,a.usePathname)(),t=r.useCallback(()=>setTimeout(()=>{window.location.href="https://redirect.uzone.co.id/api/redirection"},12e4),[]);return r.useEffect(()=>{if(!["/uzone-choice-award","/uzone-choice-award/2023","/uzone-choice-award/2024"].includes(e)){let e=t(),n=()=>{clearTimeout(e),e=t()};return window.addEventListener("scroll",n),()=>{clearTimeout(e),window.removeEventListener("scroll",n)}}},[e,t]),null}},63385:function(){},15716:function(e){e.exports={style:{fontFamily:"'__Montserrat_422231', '__Montserrat_Fallback_422231'",fontStyle:"normal"},className:"__className_422231",variable:"__variable_422231"}},2441:function(e){e.exports={style:{fontFamily:"'__Poppins_e581d1', '__Poppins_Fallback_e581d1'",fontStyle:"normal"},className:"__className_e581d1",variable:"__variable_e581d1"}},46751:function(e){e.exports={style:{fontFamily:"'__Rajdhani_58f9d6', '__Rajdhani_Fallback_58f9d6'",fontStyle:"normal"},className:"__className_58f9d6",variable:"__variable_58f9d6"}}},function(e){e.O(0,[6589,3267,4983,2971,8069,1744],function(){return e(e.s=82104)}),_N_E=e.O()}]);