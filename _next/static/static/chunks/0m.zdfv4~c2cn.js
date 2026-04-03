(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,742,(e,t,r)=>{"use strict";var a="function"==typeof Symbol&&Symbol.for,n=a?Symbol.for("react.element"):60103,s=a?Symbol.for("react.portal"):60106,o=a?Symbol.for("react.fragment"):60107,i=a?Symbol.for("react.strict_mode"):60108,c=a?Symbol.for("react.profiler"):60114,l=a?Symbol.for("react.provider"):60109,d=a?Symbol.for("react.context"):60110,m=a?Symbol.for("react.async_mode"):60111,f=a?Symbol.for("react.concurrent_mode"):60111,u=a?Symbol.for("react.forward_ref"):60112,p=a?Symbol.for("react.suspense"):60113,h=a?Symbol.for("react.suspense_list"):60120,g=a?Symbol.for("react.memo"):60115,x=a?Symbol.for("react.lazy"):60116,b=a?Symbol.for("react.block"):60121,y=a?Symbol.for("react.fundamental"):60117,v=a?Symbol.for("react.responder"):60118,w=a?Symbol.for("react.scope"):60119;function j(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case m:case f:case o:case c:case i:case p:return e;default:switch(e=e&&e.$$typeof){case d:case u:case x:case g:case l:return e;default:return t}}case s:return t}}}function k(e){return j(e)===f}r.AsyncMode=m,r.ConcurrentMode=f,r.ContextConsumer=d,r.ContextProvider=l,r.Element=n,r.ForwardRef=u,r.Fragment=o,r.Lazy=x,r.Memo=g,r.Portal=s,r.Profiler=c,r.StrictMode=i,r.Suspense=p,r.isAsyncMode=function(e){return k(e)||j(e)===m},r.isConcurrentMode=k,r.isContextConsumer=function(e){return j(e)===d},r.isContextProvider=function(e){return j(e)===l},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},r.isForwardRef=function(e){return j(e)===u},r.isFragment=function(e){return j(e)===o},r.isLazy=function(e){return j(e)===x},r.isMemo=function(e){return j(e)===g},r.isPortal=function(e){return j(e)===s},r.isProfiler=function(e){return j(e)===c},r.isStrictMode=function(e){return j(e)===i},r.isSuspense=function(e){return j(e)===p},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===f||e===c||e===i||e===p||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===x||e.$$typeof===g||e.$$typeof===l||e.$$typeof===d||e.$$typeof===u||e.$$typeof===y||e.$$typeof===v||e.$$typeof===w||e.$$typeof===b)},r.typeOf=j},27142,(e,t,r)=>{"use strict";t.exports=e.r(742)},5927,(e,t,r)=>{"use strict";var a=e.r(27142),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function c(e){return a.isMemo(e)?o:i[e.$$typeof]||n}i[a.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[a.Memo]=o;var l=Object.defineProperty,d=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,p=Object.prototype;t.exports=function e(t,r,a){if("string"!=typeof r){if(p){var n=u(r);n&&n!==p&&e(t,n,a)}var o=d(r);m&&(o=o.concat(m(r)));for(var i=c(t),h=c(r),g=0;g<o.length;++g){var x=o[g];if(!s[x]&&!(a&&a[x])&&!(h&&h[x])&&!(i&&i[x])){var b=f(r,x);try{l(t,x,b)}catch(e){}}}}return t}},65979,(e,t,r)=>{"use strict";var a,n=Symbol.for("react.element"),s=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),m=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.offscreen");function b(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case o:case c:case i:case u:case p:return e;default:switch(e=e&&e.$$typeof){case m:case d:case f:case g:case h:case l:return e;default:return t}}case s:return t}}}a=Symbol.for("react.module.reference"),r.ContextConsumer=d,r.ContextProvider=l,r.Element=n,r.ForwardRef=f,r.Fragment=o,r.Lazy=g,r.Memo=h,r.Portal=s,r.Profiler=c,r.StrictMode=i,r.Suspense=u,r.SuspenseList=p,r.isAsyncMode=function(){return!1},r.isConcurrentMode=function(){return!1},r.isContextConsumer=function(e){return b(e)===d},r.isContextProvider=function(e){return b(e)===l},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},r.isForwardRef=function(e){return b(e)===f},r.isFragment=function(e){return b(e)===o},r.isLazy=function(e){return b(e)===g},r.isMemo=function(e){return b(e)===h},r.isPortal=function(e){return b(e)===s},r.isProfiler=function(e){return b(e)===c},r.isStrictMode=function(e){return b(e)===i},r.isSuspense=function(e){return b(e)===u},r.isSuspenseList=function(e){return b(e)===p},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===c||e===i||e===u||e===p||e===x||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===l||e.$$typeof===d||e.$$typeof===f||e.$$typeof===a||void 0!==e.getModuleId)||!1},r.typeOf=b},87683,(e,t,r)=>{"use strict";t.exports=e.r(65979)},30729,e=>{"use strict";var t,r,a,n,s,o=e.i(59954),i=e.i(35917),c=e.i(36054),l=e.i(30198),d=e.i(53893),m=e.i(16986),f=e.i(71754),u=e.i(55388),p=e.i(97354),h=e.i(5124);e.i(29863);var g=e.i(99428),x=e.i(77320),b=e.i(17874);let y=({onClick:e,active:t,index:r})=>(0,o.jsx)("li",{children:t?(0,o.jsx)(b.Circle,{className:"w-6 h-6 text-white cursor-pointer",onClick:e}):(0,o.jsx)(b.Circle,{className:"w-6 h-6 text-gray-600 cursor-pointer",onClick:e})}),v=()=>(0,o.jsx)("div",{className:"my-10 bg-black",children:(0,o.jsx)(g.default,{arrows:!1,autoPlay:!0,autoPlaySpeed:3e3,infinite:!0,responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5,slidesToSlide:5},desktop:{breakpoint:{max:3e3,min:1024},items:5,slidesToSlide:5},tablet:{breakpoint:{max:1024,min:464},items:3,slidesToSlide:3},mobile:{breakpoint:{max:464,min:0},items:2,slidesToSlide:2}},showDots:!0,customDot:(0,o.jsx)(y,{}),dotListClass:"",className:"pb-8",children:[{img:"https://cdn.jsdelivr.net/gh/jyumino/assets@main/uca/images/webp/eno-1-655ef14e98e1c.webp",name:"Trisno Heriyanto",job_title:"Editor In Chief"},{img:"https://cdn.jsdelivr.net/gh/jyumino/assets@main/uca/images/webp/tyo-1-655ef14ea4050.webp",name:"Susetyo Dwi Prihadi",job_title:"Vice Editor In Chief"},{img:"https://cdn.jsdelivr.net/gh/jyumino/assets@main/uca/images/webp/hani-655b14967ee8a.webp",name:"Hani Nur Fajrina",job_title:"Editor"},{img:"https://cdn.jsdelivr.net/gh/jyumino/assets@main/uca/images/webp/faisal-655b149491405.webp",name:"M. Faisal Hadi Putra",job_title:"Editor"},{img:"https://cdn.jsdelivr.net/gh/jyumino/assets@main/uca/images/webp/bagja-655b14922d0d2.webp",name:"Bagja Pratama",job_title:"Editor"},{img:"https://cdn.jsdelivr.net/gh/jyumino/assets@main/uca/images/webp/vina-655b148f5bd57.webp",name:"Vina Insyani",job_title:"Editor"},{img:"https://cdn.jsdelivr.net/gh/jyumino/assets@main/uca/images/webp/brian-1-655ef18214513.webp",name:"Brian Priambudi",job_title:"Editor"}].map(e=>(0,o.jsx)("div",{className:"mx-2 bg-white dark:bg-gray-700 lg:bg-transparent shadow-md lg:shadow-none rounded-xl h-auto lg:h-[300px]",children:(0,o.jsxs)("div",{className:"bg-black",children:[(0,o.jsx)(x.default,{src:e.img,alt:e.name,width:240,height:240,className:"object-cover object-top h-[240px] lg:h-[230px] my-auto rounded-md justify-self-center"}),(0,o.jsx)("h2",{className:"px-3 text-base font-semibold leading-6 text-[#e079b5] dark:text-gray-200",children:e.name}),(0,o.jsx)("h2",{className:"px-3 text-base font-semibold leading-6 text-white dark:text-gray-200",children:e.job_title})]})},e.name))})});var w=e.i(10708),j=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(((t=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&t.setAttribute("nonce",this.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t));var t,r=this.tags[this.tags.length-1];if(this.isSpeedy){var a=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{a.insertRule(e,a.cssRules.length)}catch(e){}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),this.tags=[],this.ctr=0},e}(),k=Math.abs,N=String.fromCharCode,C=Object.assign;function S(e,t,r){return e.replace(t,r)}function $(e,t){return e.indexOf(t)}function A(e,t){return 0|e.charCodeAt(t)}function O(e,t,r){return e.slice(t,r)}function z(e){return e.length}function E(e,t){return t.push(e),e}var P=1,_=1,T=0,M=0,I=0,U="";function Y(e,t,r,a,n,s,o){return{value:e,root:t,parent:r,type:a,props:n,children:s,line:P,column:_,length:o,return:""}}function R(e,t){return C(Y("",null,null,"",null,null,0),e,{length:-e.length},t)}function V(){return I=M<T?A(U,M++):0,_++,10===I&&(_=1,P++),I}function X(){return A(U,M)}function L(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function F(e){return P=_=1,T=z(U=e),M=0,[]}function D(e){var t,r;return(t=M-1,r=function e(t){for(;V();)switch(I){case t:return M;case 34:case 39:34!==t&&39!==t&&e(I);break;case 40:41===t&&e(t);break;case 92:V()}return M}(91===e?e+2:40===e?e+1:e),O(U,t,r)).trim()}var B="-ms-",W="-moz-",G="-webkit-",H="comm",J="rule",Z="decl",q="@keyframes";function K(e,t){for(var r="",a=e.length,n=0;n<a;n++)r+=t(e[n],n,e,t)||"";return r}function Q(e,t,r,a){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Z:return e.return=e.return||e.value;case H:return"";case q:return e.return=e.value+"{"+K(e.children,a)+"}";case J:e.value=e.props.join(",")}return z(r=K(e.children,a))?e.return=e.value+"{"+r+"}":""}function ee(e,t,r,a,n,s,o,i,c,l,d){for(var m=n-1,f=0===n?s:[""],u=f.length,p=0,h=0,g=0;p<a;++p)for(var x=0,b=O(e,m+1,m=k(h=o[p])),y=e;x<u;++x)(y=(h>0?f[x]+" "+b:S(b,/&\f/g,f[x])).trim())&&(c[g++]=y);return Y(e,t,r,0===n?J:i,c,l,d)}function et(e,t,r,a){return Y(e,t,r,Z,O(e,0,a),O(e,a+1,-1),a)}var er=function(e,t,r){for(var a=0,n=0;a=n,n=X(),38===a&&12===n&&(t[r]=1),!L(n);)V();return O(U,e,M)},ea=function(e,t){var r=-1,a=44;do switch(L(a)){case 0:38===a&&12===X()&&(t[r]=1),e[r]+=er(M-1,t,r);break;case 2:e[r]+=D(a);break;case 4:if(44===a){e[++r]=58===X()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=N(a)}while(a=V())return e},en=function(e,t){var r;return r=ea(F(e),t),U="",r},es=new WeakMap,eo=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,a=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||es.get(r))&&!a){es.set(e,!0);for(var n=[],s=en(t,n),o=r.props,i=0,c=0;i<s.length;i++)for(var l=0;l<o.length;l++,c++)e.props[c]=n[i]?s[i].replace(/&\f/g,o[l]):o[l]+" "+s[i]}}},ei=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},ec=[function(e,t,r,a){if(e.length>-1&&!e.return)switch(e.type){case Z:e.return=function e(t,r){switch(45^A(t,0)?(((r<<2^A(t,0))<<2^A(t,1))<<2^A(t,2))<<2^A(t,3):0){case 5103:return G+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return G+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return G+t+W+t+B+t+t;case 6828:case 4268:return G+t+B+t+t;case 6165:return G+t+B+"flex-"+t+t;case 5187:return G+t+S(t,/(\w+).+(:[^]+)/,G+"box-$1$2"+B+"flex-$1$2")+t;case 5443:return G+t+B+"flex-item-"+S(t,/flex-|-self/,"")+t;case 4675:return G+t+B+"flex-line-pack"+S(t,/align-content|flex-|-self/,"")+t;case 5548:return G+t+B+S(t,"shrink","negative")+t;case 5292:return G+t+B+S(t,"basis","preferred-size")+t;case 6060:return G+"box-"+S(t,"-grow","")+G+t+B+S(t,"grow","positive")+t;case 4554:return G+S(t,/([^-])(transform)/g,"$1"+G+"$2")+t;case 6187:return S(S(S(t,/(zoom-|grab)/,G+"$1"),/(image-set)/,G+"$1"),t,"")+t;case 5495:case 3959:return S(t,/(image-set\([^]*)/,G+"$1$`$1");case 4968:return S(S(t,/(.+:)(flex-)?(.*)/,G+"box-pack:$3"+B+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+G+t+t;case 4095:case 3583:case 4068:case 2532:return S(t,/(.+)-inline(.+)/,G+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(z(t)-1-r>6)switch(A(t,r+1)){case 109:if(45!==A(t,r+4))break;case 102:return S(t,/(.+:)(.+)-([^]+)/,"$1"+G+"$2-$3$1"+W+(108==A(t,r+3)?"$3":"$2-$3"))+t;case 115:return~$(t,"stretch")?e(S(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(115!==A(t,r+1))break;case 6444:switch(A(t,z(t)-3-(~$(t,"!important")&&10))){case 107:return S(t,":",":"+G)+t;case 101:return S(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+G+(45===A(t,14)?"inline-":"")+"box$3$1"+G+"$2$3$1"+B+"$2box$3")+t}break;case 5936:switch(A(t,r+11)){case 114:return G+t+B+S(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return G+t+B+S(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return G+t+B+S(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return G+t+B+t+t}return t}(e.value,e.length);break;case q:return K([R(e,{value:S(e.value,"@","@"+G)})],a);case J:if(e.length){var n,s;return n=e.props,s=function(t){var r;switch(r=t,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){case":read-only":case":read-write":return K([R(e,{props:[S(t,/:(read-\w+)/,":"+W+"$1")]})],a);case"::placeholder":return K([R(e,{props:[S(t,/:(plac\w+)/,":"+G+"input-$1")]}),R(e,{props:[S(t,/:(plac\w+)/,":"+W+"$1")]}),R(e,{props:[S(t,/:(plac\w+)/,B+"input-$1")]})],a)}return""},n.map(s).join("")}}}];function el(e,t,r){var a="";return r.split(" ").forEach(function(r){void 0!==e[r]?t.push(e[r]+";"):r&&(a+=r+" ")}),a}e.i(5927);var ed=function(e,t,r){var a=e.key+"-"+t.name;!1===r&&void 0===e.registered[a]&&(e.registered[a]=t.styles)},em=function(e,t,r){ed(e,t,r);var a=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var n=t;do e.insert(t===n?"."+a:"",n,e.sheet,!0),n=n.next;while(void 0!==n)}},ef={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},eu=/[A-Z]|^ms/g,ep=/_EMO_([^_]+?)_([^]*?)_EMO_/g,eh=function(e){return 45===e.charCodeAt(1)},eg=function(e){return null!=e&&"boolean"!=typeof e},ex=(t=function(e){return eh(e)?e:e.replace(eu,"-$&").toLowerCase()},r=Object.create(null),function(e){return void 0===r[e]&&(r[e]=t(e)),r[e]}),eb=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(ep,function(e,t,r){return s={name:t,styles:r,next:s},t})}return 1===ef[e]||eh(e)||"number"!=typeof t||0===t?t:t+"px"};function ey(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return s={name:r.name,styles:r.styles,next:s},r.name;if(void 0!==r.styles){var a=r.next;if(void 0!==a)for(;void 0!==a;)s={name:a.name,styles:a.styles,next:s},a=a.next;return r.styles+";"}return function(e,t,r){var a="";if(Array.isArray(r))for(var n=0;n<r.length;n++)a+=ey(e,t,r[n])+";";else for(var s in r){var o=r[s];if("object"!=typeof o)null!=t&&void 0!==t[o]?a+=s+"{"+t[o]+"}":eg(o)&&(a+=ex(s)+":"+eb(s,o)+";");else if(Array.isArray(o)&&"string"==typeof o[0]&&(null==t||void 0===t[o[0]]))for(var i=0;i<o.length;i++)eg(o[i])&&(a+=ex(s)+":"+eb(s,o[i])+";");else{var c=ey(e,t,o);switch(s){case"animation":case"animationName":a+=ex(s)+":"+c+";";break;default:a+=s+"{"+c+"}"}}}return a}(e,t,r);case"function":if(void 0!==e){var n=s,o=r(e);return s=n,ey(e,t,o)}}if(null==t)return r;var i=t[r];return void 0!==i?i:r}var ev=/label:\s*([^\s;{]+)\s*(;|$)/g;function ew(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var a,n=!0,o="";s=void 0;var i=e[0];null==i||void 0===i.raw?(n=!1,o+=ey(r,t,i)):o+=i[0];for(var c=1;c<e.length;c++)o+=ey(r,t,e[c]),n&&(o+=i[c]);ev.lastIndex=0;for(var l="";null!==(a=ev.exec(o));)l+="-"+a[1];return{name:function(e){for(var t,r=0,a=0,n=e.length;n>=4;++a,n-=4)t=(65535&(t=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24))*0x5bd1e995+((t>>>16)*59797<<16),t^=t>>>24,r=(65535&t)*0x5bd1e995+((t>>>16)*59797<<16)^(65535&r)*0x5bd1e995+((r>>>16)*59797<<16);switch(n){case 3:r^=(255&e.charCodeAt(a+2))<<16;case 2:r^=(255&e.charCodeAt(a+1))<<8;case 1:r^=255&e.charCodeAt(a),r=(65535&r)*0x5bd1e995+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*0x5bd1e995+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)}(o)+l,styles:o,next:s}}var ej=!!i.useInsertionEffect&&i.useInsertionEffect,ek=ej||function(e){return e()};ej||i.useLayoutEffect;var eN=i.createContext("u">typeof HTMLElement?function(e){var t,r,a,n,s,o=e.key;if("css"===o){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var c=e.stylisPlugins||ec,l={},d=[];n=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+o+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)l[t[r]]=!0;d.push(e)});var m=(r=(t=[eo,ei].concat(c,[Q,(a=function(e){s.insert(e)},function(e){!e.root&&(e=e.return)&&a(e)})])).length,function(e,a,n,s){for(var o="",i=0;i<r;i++)o+=t[i](e,a,n,s)||"";return o}),f=function(e){var t,r;return K((r=function e(t,r,a,n,s,o,i,c,l){for(var d,m=0,f=0,u=i,p=0,h=0,g=0,x=1,b=1,y=1,v=0,w="",j=s,k=o,C=n,T=w;b;)switch(g=v,v=V()){case 40:if(108!=g&&58==A(T,u-1)){-1!=$(T+=S(D(v),"&","&\f"),"&\f")&&(y=-1);break}case 34:case 39:case 91:T+=D(v);break;case 9:case 10:case 13:case 32:T+=function(e){for(;I=X();)if(I<33)V();else break;return L(e)>2||L(I)>3?"":" "}(g);break;case 92:T+=function(e,t){for(var r;--t&&V()&&!(I<48)&&!(I>102)&&(!(I>57)||!(I<65))&&(!(I>70)||!(I<97)););return r=M+(t<6&&32==X()&&32==V()),O(U,e,r)}(M-1,7);continue;case 47:switch(X()){case 42:case 47:E((d=function(e,t){for(;V();)if(e+I===57)break;else if(e+I===84&&47===X())break;return"/*"+O(U,t,M-1)+"*"+N(47===e?e:V())}(V(),M),Y(d,r,a,H,N(I),O(d,2,-2),0)),l);break;default:T+="/"}break;case 123*x:c[m++]=z(T)*y;case 125*x:case 59:case 0:switch(v){case 0:case 125:b=0;case 59+f:-1==y&&(T=S(T,/\f/g,"")),h>0&&z(T)-u&&E(h>32?et(T+";",n,a,u-1):et(S(T," ","")+";",n,a,u-2),l);break;case 59:T+=";";default:if(E(C=ee(T,r,a,m,f,s,c,w,j=[],k=[],u),o),123===v)if(0===f)e(T,r,C,C,j,o,u,c,k);else switch(99===p&&110===A(T,3)?100:p){case 100:case 108:case 109:case 115:e(t,C,C,n&&E(ee(t,C,C,0,0,s,c,w,s,j=[],u),k),s,k,u,c,n?j:k);break;default:e(T,C,C,C,[""],k,0,c,k)}}m=f=h=0,x=y=1,w=T="",u=i;break;case 58:u=1+z(T),h=g;default:if(x<1){if(123==v)--x;else if(125==v&&0==x++&&125==(I=M>0?A(U,--M):0,_--,10===I&&(_=1,P--),I))continue}switch(T+=N(v),v*x){case 38:y=f>0?1:(T+="\f",-1);break;case 44:c[m++]=(z(T)-1)*y,y=1;break;case 64:45===X()&&(T+=D(V())),p=X(),f=u=z(w=T+=function(e){for(;!L(X());)V();return O(U,e,M)}(M)),v++;break;case 45:45===g&&2==z(T)&&(x=0)}}return o}("",null,null,null,[""],t=F(t=e),0,[0],t),U="",r),m)},u={key:o,sheet:new j({key:o,container:n,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:function(e,t,r,a){s=r,f(e?e+"{"+t.styles+"}":t.styles),a&&(u.inserted[t.name]=!0)}};return u.sheet.hydrate(d),u}({key:"css"}):null);eN.Provider;var eC=function(e){return(0,i.forwardRef)(function(t,r){return e(t,(0,i.useContext)(eN),r)})},eS=i.createContext({}),e$={}.hasOwnProperty,eA="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",eO=function(e,t){var r={};for(var a in t)e$.call(t,a)&&(r[a]=t[a]);return r[eA]=e,r},ez=function(e){var t=e.cache,r=e.serialized,a=e.isStringTag;return ed(t,r,a),ek(function(){return em(t,r,a)}),null},eE=eC(function(e,t,r){var a=e.css;"string"==typeof a&&void 0!==t.registered[a]&&(a=t.registered[a]);var n=e[eA],s=[a],o="";"string"==typeof e.className?o=el(t.registered,s,e.className):null!=e.className&&(o=e.className+" ");var c=ew(s,void 0,i.useContext(eS));o+=t.key+"-"+c.name;var l={};for(var d in e)e$.call(e,d)&&"css"!==d&&d!==eA&&(l[d]=e[d]);return l.className=o,r&&(l.ref=r),i.createElement(i.Fragment,null,i.createElement(ez,{cache:t,serialized:c,isStringTag:"string"==typeof n}),i.createElement(n,l))}),eP=o.Fragment,e_=function(e,t,r){return e$.call(t,"css")?o.jsx(eE,eO(e,t),r):o.jsx(e,t,r)},eT=function(e,t){var r=arguments;if(null==t||!e$.call(t,"css"))return i.createElement.apply(void 0,r);var a=r.length,n=Array(a);n[0]=eE,n[1]=eO(e,t);for(var s=2;s<a;s++)n[s]=r[s];return i.createElement.apply(null,n)};function eM(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return ew(t)}function eI(){var e=eM.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}a=eT||(eT={}),n||(n=a.JSX||(a.JSX={}));var eU=function e(t){for(var r=t.length,a=0,n="";a<r;a++){var s=t[a];if(null!=s){var o=void 0;switch(typeof s){case"boolean":break;case"object":if(Array.isArray(s))o=e(s);else for(var i in o="",s)s[i]&&i&&(o&&(o+=" "),o+=i);break;default:o=s}o&&(n&&(n+=" "),n+=o)}}return n},eY=function(e){var t=e.cache,r=e.serializedArr;return ek(function(){for(var e=0;e<r.length;e++)em(t,r[e],!1)}),null},eR=eC(function(e,t){var r=!1,a=[],n=function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];var s=ew(r,t.registered);return a.push(s),ed(t,s,!1),t.key+"-"+s.name},s={css:n,cx:function(){for(var e,r,a,s,o=arguments.length,i=Array(o),c=0;c<o;c++)i[c]=arguments[c];return e=t.registered,s=el(e,a=[],r=eU(i)),a.length<2?r:s+n(a)},theme:i.useContext(eS)},o=e.children(s);return r=!0,i.createElement(i.Fragment,null,i.createElement(eY,{cache:t,serializedArr:a}),o)}),eV=i,eX=Object.defineProperty,eL=(e,t,r)=>{let a;return(a="symbol"!=typeof t?t+"":t)in e?eX(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r},eF=new Map,eD=new WeakMap,eB=0,eW=void 0;function eG(e,t,r={},a=eW){if(void 0===window.IntersectionObserver&&void 0!==a){let n=e.getBoundingClientRect();return t(a,{isIntersecting:a,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}let{id:n,observer:s,elements:o}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var r;return`${t}_${"root"===t?!(r=e.root)?"0":(eD.has(r)||(eB+=1,eD.set(r,eB.toString())),eD.get(r)):e[t]}`}).toString(),r=eF.get(t);if(!r){let a,n=new Map,s=new IntersectionObserver(t=>{t.forEach(t=>{var r;let s=t.isIntersecting&&a.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=s),null==(r=n.get(t.target))||r.forEach(e=>{e(s,t)})})},e);a=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:s,elements:n},eF.set(t,r)}return r}(r),i=o.get(e)||[];return o.has(e)||o.set(e,i),i.push(t),s.observe(e),function(){i.splice(i.indexOf(t),1),0===i.length&&(o.delete(e),s.unobserve(e)),0===o.size&&(s.disconnect(),eF.delete(n))}}var eH=class extends eV.Component{constructor(e){super(e),eL(this,"node",null),eL(this,"_unobserveCb",null),eL(this,"handleNode",e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),eL(this,"handleChange",(e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),"function"==typeof this.props.children&&this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;let{threshold:e,root:t,rootMargin:r,trackVisibility:a,delay:n,fallbackInView:s}=this.props;this._unobserveCb=eG(this.node,this.handleChange,{threshold:e,root:t,rootMargin:r,trackVisibility:a,delay:n},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){let{children:e}=this.props;if("function"==typeof e){let{inView:t,entry:r}=this.state;return e({inView:t,entry:r,ref:this.handleNode})}let{as:t,triggerOnce:r,threshold:a,root:n,rootMargin:s,onChange:o,skip:i,trackVisibility:c,delay:l,initialInView:d,fallbackInView:m,...f}=this.props;return eV.createElement(t||"div",{ref:this.handleNode,...f},e)}};function eJ({threshold:e,delay:t,trackVisibility:r,rootMargin:a,root:n,triggerOnce:s,skip:o,initialInView:i,fallbackInView:c,onChange:l}={}){var d;let[m,f]=eV.useState(null),u=eV.useRef(),[p,h]=eV.useState({inView:!!i,entry:void 0});u.current=l,eV.useEffect(()=>{let i;if(!o&&m)return i=eG(m,(e,t)=>{h({inView:e,entry:t}),u.current&&u.current(e,t),t.isIntersecting&&s&&i&&(i(),i=void 0)},{root:n,rootMargin:a,threshold:e,trackVisibility:r,delay:t},c),()=>{i&&i()}},[Array.isArray(e)?e.toString():e,m,n,a,s,o,r,c,t]);let g=null==(d=p.entry)?void 0:d.target,x=eV.useRef();m||!g||s||o||x.current===g||(x.current=g,h({inView:!!i,entry:void 0}));let b=[f,p.inView,p.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}var eZ=e.i(87683);eI`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,eI`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,eI`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,eI`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,eI`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,eI`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,eI`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,eI`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,eI`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,eI`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,eI`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,eI`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,eI`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;let eq=eI`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,eK=eI`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eQ=eI`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e0=eI`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e1=eI`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e5=eI`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e3=eI`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e2=eI`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e4=eI`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e9=eI`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e6=eI`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e7=eI`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e8=eI`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function te(e){var t;return t=()=>null,r=>r?e():t()}function tt(e){return te(()=>({opacity:0}))(e)}let tr=e=>{let{cascade:t=!1,damping:r=.5,delay:a=0,duration:n=1e3,fraction:s=0,keyframes:o=e5,triggerOnce:c=!1,className:l,style:d,childClassName:m,childStyle:f,children:u,onVisibilityChange:p}=e,h=(0,i.useMemo)(()=>(function({duration:e=1e3,delay:t=0,timingFunction:r="ease",keyframes:a=e5,iterationCount:n=1}){return eM`
    animation-duration: ${e}ms;
    animation-timing-function: ${r};
    animation-delay: ${t}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${n};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `})({keyframes:o,duration:n}),[n,o]);return void 0==u?null:"string"==typeof u||"number"==typeof u||"boolean"==typeof u?e_(tn,{...e,animationStyles:h,children:String(u)}):(0,eZ.isFragment)(u)?e_(ts,{...e,animationStyles:h}):e_(eP,{children:i.Children.map(u,(o,u)=>{if(!(0,i.isValidElement)(o))return null;let g=a+(t?u*n*r:0);switch(o.type){case"ol":case"ul":return e_(eR,{children:({cx:t})=>e_(o.type,{...o.props,className:t(l,o.props.className),style:Object.assign({},d,o.props.style),children:e_(tr,{...e,children:o.props.children})})});case"li":return e_(eH,{threshold:s,triggerOnce:c,onChange:p,children:({inView:e,ref:t})=>e_(eR,{children:({cx:r})=>e_(o.type,{...o.props,ref:t,className:r(m,o.props.className),css:te(()=>h)(e),style:Object.assign({},f,o.props.style,tt(!e),{animationDelay:g+"ms"})})})});default:return e_(eH,{threshold:s,triggerOnce:c,onChange:p,children:({inView:e,ref:t})=>e_("div",{ref:t,className:l,css:te(()=>h)(e),style:Object.assign({},d,tt(!e),{animationDelay:g+"ms"}),children:e_(eR,{children:({cx:e})=>e_(o.type,{...o.props,className:e(m,o.props.className),style:Object.assign({},f,o.props.style)})})})})}})})},ta={display:"inline-block",whiteSpace:"pre"},tn=e=>{var t,r;let{animationStyles:a,cascade:n=!1,damping:s=.5,delay:o=0,duration:i=1e3,fraction:c=0,triggerOnce:l=!1,className:d,style:m,children:f,onVisibilityChange:u}=e,{ref:p,inView:h}=eJ({triggerOnce:l,threshold:c,onChange:u});return(t=()=>e_("div",{ref:p,className:d,style:Object.assign({},m,ta),children:f.split("").map((e,t)=>e_("span",{css:te(()=>a)(h),style:{animationDelay:o+t*i*s+"ms"},children:e},t))}),r=()=>e_(ts,{...e,children:f}),e=>e?t():r())(n)},ts=e=>{let{animationStyles:t,fraction:r=0,triggerOnce:a=!1,className:n,style:s,children:o,onVisibilityChange:i}=e,{ref:c,inView:l}=eJ({triggerOnce:a,threshold:r,onChange:i});return e_("div",{ref:c,className:n,css:te(()=>t)(l),style:Object.assign({},s,tt(!l)),children:o})};eI`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,eI`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,eI`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,eI`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,eI`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,eI`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,eI`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,eI`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,eI`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,eI`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;let to=eI`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,ti=eI`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,tc=eI`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,tl=eI`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,td=eI`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,tm=eI`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,tf=eI`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,tu=eI`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,tp=eI`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,th=eI`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,tg=eI`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,tx=eI`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,tb=eI`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`,ty=e=>{let{big:t=!1,direction:r,reverse:a=!1,...n}=e;return e_(tr,{keyframes:(0,i.useMemo)(()=>(function(e,t,r){switch(r){case"bottom-left":return t?ti:eK;case"bottom-right":return t?tc:eQ;case"down":return e?t?td:e1:t?tl:e0;case"left":return e?t?tf:e3:t?tm:e5;case"right":return e?t?tp:e4:t?tu:e2;case"top-left":return t?th:e9;case"top-right":return t?tg:e6;case"up":return e?t?tb:e8:t?tx:e7;default:return t?to:eq}})(t,a,r),[t,r,a]),...n})};eI`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,eI`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,eI`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,eI`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,eI`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`,eI`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,eI`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,eI`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eI`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,eI`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,eI`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,eI`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,eI`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,eI`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,eI`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,eI`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,eI`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,eI`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,eI`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;let tv=eI`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw=eI`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tj=eI`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tk=eI`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tN=eI`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,tC=eI`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,tS=eI`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,t$=eI`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`,tA=e=>{let{direction:t,reverse:r=!1,...a}=e;return e_(tr,{keyframes:(0,i.useMemo)(()=>(function(e,t){switch(t){case"down":return e?tN:tv;case"right":return e?tS:tj;case"up":return e?t$:tk;default:return e?tC:tw}})(r,t),[t,r]),...a})};eI`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,eI`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,eI`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,eI`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,eI`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,eI`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,eI`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,eI`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,eI`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,eI`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,e.s(["default",0,function({news:e}){let[t,r]=i.default.useState(!1),[a,n]=i.default.useState(!1),s=()=>{window.pageYOffset>500?r(!0):r(!1)},g=e=>{let t=document.getElementById(e);t&&window.scrollTo({top:t.offsetTop,behavior:"smooth"})};return i.default.useEffect(()=>(window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}),[]),(0,o.jsx)("div",{className:"overflow-x-hidden font-poppins",children:(0,o.jsxs)("div",{className:"bg-black font-poppins",children:[(0,o.jsxs)("nav",{className:"bg-black border-b border-gray-600 navbar",children:[(0,o.jsxs)("div",{className:"container flex items-center justify-between px-4 py-5 mx-auto max-w-7xl",children:[(0,o.jsxs)("a",{className:"flex items-center navbar-brand",href:"#",children:[(0,o.jsxs)("h2",{className:"hidden text-lg font-bold text-center text-white md:block font-aAstroSpace",children:["UZONE CHOICE ",(0,o.jsx)("br",{}),"AWARD"]}),(0,o.jsx)(x.default,{width:144,height:48,src:"https://cdn.jsdelivr.net/gh/metranet-1704/8d2a271545b09ffc20c93a85d68b8cdd@main/images/uca-2024/logo-uca-low.png",className:"block ml-3 w-36 lg:w-12 md:hidden",alt:"Logo"})]}),(0,o.jsx)("div",{className:"block text-white lg:hidden",children:(0,o.jsx)("button",{className:"flex items-center w-full px-4 py-2 font-bold text-white rounded lg:hidden focus:outline-none focus:shadow-outline",onClick:()=>n(!a),children:(0,o.jsx)(h.Menu,{className:"w-6 h-6"})})}),(0,o.jsx)("div",{className:"hidden w-3/4 font-bold md:flex font-poppins-regular",children:(0,o.jsxs)("ul",{className:"flex space-x-10",children:[(0,o.jsx)("li",{onClick:()=>g("beranda"),className:"cursor-pointer",children:(0,o.jsx)("div",{className:"text-[#e079b5] hover:text-[#e079b5]",children:"Beranda"})}),(0,o.jsx)("li",{onClick:()=>g("tentang-uca"),className:"cursor-pointer",children:(0,o.jsx)("a",{className:"text-white hover:text-[#e079b5]",children:"Tentang UCA 2024"})}),(0,o.jsx)("li",{onClick:()=>g("juri"),className:"cursor-pointer",children:(0,o.jsx)("a",{className:"text-white hover:text-[#e079b5]",children:"Penjurian"})}),(0,o.jsx)("li",{onClick:()=>g("vote"),className:"cursor-pointer",children:(0,o.jsx)("a",{className:"text-white hover:text-[#e079b5]",children:"Voting"})})]})})]}),(0,o.jsx)("div",{className:`overflow-hidden transition-all duration-300 ease-in-out ${a?"max-h-screen":"max-h-0"}`,children:(0,o.jsx)("div",{className:"p-4",children:(0,o.jsx)("div",{className:"w-full font-bold font-poppins-regular",children:(0,o.jsxs)("ul",{className:"flex flex-col space-y-6 md:space-y-0 md:space-x-10 md:flex-row",children:[(0,o.jsx)("li",{onClick:()=>g("beranda"),className:"cursor-pointer",children:(0,o.jsx)("div",{className:"text-[#e079b5] hover:text-[#e079b5]",children:"Beranda"})}),(0,o.jsx)("li",{onClick:()=>g("tentang-uca"),className:"cursor-pointer",children:(0,o.jsx)("a",{className:"text-white hover:text-[#e079b5]",children:"Tentang UCA 2024"})}),(0,o.jsx)("li",{onClick:()=>g("juri"),className:"cursor-pointer",children:(0,o.jsx)("a",{className:"text-white hover:text-[#e079b5]",children:"Penjurian"})}),(0,o.jsx)("li",{onClick:()=>g("vote"),className:"cursor-pointer",children:(0,o.jsx)("a",{className:"text-white hover:text-[#e079b5]",children:"Voting"})})]})})})})]}),(0,o.jsxs)("div",{className:"mx-auto",children:[(0,o.jsx)("div",{className:"bg-no-repeat bg-[length:130%] lg:bg-cover lg:bg-[20px] relative clip-path-polygon bg-gray-900 bg-[url('https://cdn.jsdelivr.net/gh/metranet-1704/8d2a271545b09ffc20c93a85d68b8cdd@main/images/uca-2024/background.jpg')] h-[500px] lg:h-[650px]",style:{clipPath:"polygon(0 0, 100% 5%, 100% 95%, 0 100%)"},children:(0,o.jsx)("div",{className:"absolute top-0 bottom-0 left-0 right-0 bg-gradient-uca-2024",children:(0,o.jsx)("div",{className:"relative mt-[170px] bottom-0 text-center lg:text-left lg:ml-16 right-0 md:right-[-75px] w-full",children:(0,o.jsxs)(ty,{triggerOnce:!0,delay:500,duration:200,children:[(0,o.jsx)("h3",{className:"text-lg text-white font-aAstroSpace",children:"The 5th Annual"}),(0,o.jsxs)("h1",{className:"text-6xl font-bold text-white font-rajdhani",children:["UZONE CHOICE ",(0,o.jsx)("br",{}),"AWARD"," ",(0,o.jsx)("span",{className:"text-[56px] text-white text-stroke-uca-2024 font-aestethicMonoline",children:"2024"})]}),(0,o.jsx)("p",{className:"text-lg font-bold text-white",children:"Penghargaan untuk industri teknologi dan otomotif"})]})})})}),(0,o.jsx)("div",{id:"tentang-uca",className:"about-section bg-cover bg-center py-20 bg-[url('https://cdn.jsdelivr.net/gh/metranet-1704/8d2a271545b09ffc20c93a85d68b8cdd@main/images/uca-2024/background-mid.jpg')]",children:(0,o.jsxs)("div",{className:"container grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-2",children:[(0,o.jsx)(ty,{triggerOnce:!0,delay:700,duration:1100,children:(0,o.jsx)("div",{className:"about-section-images-left",children:(0,o.jsx)(x.default,{width:500,height:500,src:"https://cdn.jsdelivr.net/gh/metranet-1704/8d2a271545b09ffc20c93a85d68b8cdd@main/images/uca-2024/ENO.png",className:"rounded-lg",alt:"ENO"})})}),(0,o.jsx)(tA,{triggerOnce:!0,direction:"up",duration:900,children:(0,o.jsxs)("div",{className:"mx-3",children:[(0,o.jsxs)("h3",{className:"text-2xl font-bold text-white uppercase",children:["Tentang Uzone Choice Award",(0,o.jsx)("span",{className:"year",children:" 2024"})]}),(0,o.jsxs)("div",{className:"text-base leading-relaxed text-white lg:text-xl font-poppins-regular",children:[(0,o.jsx)("p",{className:"mt-3 mb-5",children:"Uzone Indonesia konsisten menyajikan berita seputar teknologi, games, dan otomotif melalui website, channel YouTube, serta media sosial. Ada lebih dari ratusan ribu artikel dan ratusan video yang telah kami produksi yang membahas lebih dari 100 produk, seperti smartphone, laptop, perangkat IoT, motor, hingga mobil."}),(0,o.jsx)("p",{className:"",children:"Sebagai bentuk apresiasi, kami ingin merekomendasikan produk terbaik tiap tahunnya melalui Uzone Choice Award. Produk yang menurut tim redaksi dan pembaca Uzone.id paling superior dari segi fitur, desain, performa, sampai harga yang sesuai dengan segmennya."})]})]})})]})}),(0,o.jsx)("div",{id:"juri",className:"py-5 bg-[#111111] lg:py-20 judge-section",children:(0,o.jsx)("div",{className:"container max-w-7xl mx-3 lg:mx-auto lg:h-[450px]",children:(0,o.jsxs)("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-7",children:[(0,o.jsx)("div",{className:"block w-full h-full col-span-2 overflow-hidden text-center rounded-md lg:hidden custom-clip-path",children:(0,o.jsx)(x.default,{width:500,height:500,src:"https://cdn.jsdelivr.net/gh/metranet-1704/8d2a271545b09ffc20c93a85d68b8cdd@main/images/uca-2024/VANIA_.png",className:"object-cover rounded-lg lg:h-[400px] w-[125%] h-full",alt:"Vania Uzone"})}),(0,o.jsxs)("div",{className:"col-span-5",children:[(0,o.jsx)("h3",{className:"my-10 text-2xl font-bold text-center text-white uppercase lg:text-left",children:"Mekanisme Penjurian"}),(0,o.jsx)(ty,{triggerOnce:!0,delay:900,duration:900,children:(0,o.jsxs)("div",{className:"grid grid-cols-1 gap-3 lg:grid-cols-2",children:[(0,o.jsxs)("div",{className:"p-5 bg-black rounded-lg bg-[url('https://cdn.jsdelivr.net/gh/metranet-1704/8d2a271545b09ffc20c93a85d68b8cdd@main/images/uca-2024/background-list-left.jpg')] bg-cover lg:h-[300px]",children:[(0,o.jsx)("h4",{className:"text-xl text-center lg:text-left mb-5 font-bold text-[#e079b5]",children:"EDITORIAL TEAM"}),(0,o.jsx)("p",{className:"text-white",children:"Jumlah penilai dari Uzone.id adalah 20 orang anggota redaksi Uzone.id yang berkompeten di bidangnya. Pembaca Uzone juga dapat memilih nominasi favoritnya."})]}),(0,o.jsxs)("div",{className:"p-5 bg-black rounded-lg bg-[url('https://cdn.jsdelivr.net/gh/metranet-1704/8d2a271545b09ffc20c93a85d68b8cdd@main/images/uca-2024/background-list-mid.jpg')] bg-cover lg:h-[300px]",children:[(0,o.jsx)("h4",{className:"text-xl text-center lg:text-left mb-5 font-bold text-[#e079b5]",children:"POLLING PEMBACA"}),(0,o.jsx)("p",{className:"text-white",children:"Jutaan pembaca Uzone.id dapat melakukan polling Uzone Choice Award melalui link Google Form yang kami sebar melalui platform website dan media sosial Uzone Indonesia."})]})]})})]}),(0,o.jsx)("div",{className:"hidden w-full h-full col-span-2 overflow-hidden text-center rounded-md lg:block custom-clip-path",children:(0,o.jsx)(ty,{triggerOnce:!0,delay:300,duration:900,children:(0,o.jsx)(x.default,{width:500,height:500,src:"https://cdn.jsdelivr.net/gh/metranet-1704/8d2a271545b09ffc20c93a85d68b8cdd@main/images/uca-2024/VANIA_.png",className:"object-cover rounded-lg lg:h-[400px] w-[125%] h-full",alt:"Vania Uzone"})})})]})})}),(0,o.jsx)(ty,{triggerOnce:!0,delay:800,duration:900,children:(0,o.jsxs)("div",{id:"vote",className:"vote-section bg-cover bg-center relative h-[520px] lg:h-[540px] bg-[url('https://cdn.jsdelivr.net/gh/metranet-1704/8d2a271545b09ffc20c93a85d68b8cdd@main/images/uca-2024/background-bottom-3.jpg')] ",children:[(0,o.jsx)("div",{className:"absolute left-0 right-0 h-[100px] z-0 bg-custom-uca-2024-gradient"}),(0,o.jsxs)("div",{className:"pt-24 mx-auto text-center",children:[(0,o.jsx)(x.default,{width:500,height:500,src:"https://cdn.jsdelivr.net/gh/metranet-1704/8d2a271545b09ffc20c93a85d68b8cdd@main/images/uca-2024/logo-uca-low.png",className:"w-[500px] mx-auto",alt:"Vote Logo"}),(0,o.jsx)("h2",{className:"mb-6 text-3xl font-bold text-[#e079b5]",children:"Vote Pilihanmu Sekarang!"}),(0,o.jsx)("a",{href:"https://bit.ly/VoteUCA2024",className:"font-semibold inline-block px-10 py-3 text-lg text-white rounded-lg button-vote bg-[#e079b5] hover:bg-[#d64398]",children:"Klik di Sini"}),(0,o.jsx)("p",{className:"my-2 text-white",children:"atau"}),(0,o.jsx)(x.default,{width:120,height:120,src:"https://cdn.jsdelivr.net/gh/metranet-1704/8d2a271545b09ffc20c93a85d68b8cdd@main/images/uca-2024/bit.ly_VoteUCA2024.png",className:"mx-auto mt-1 rounded-md",alt:"Vote Logo"})]})]})}),(0,o.jsx)(ty,{triggerOnce:!0,delay:500,duration:700,children:(0,o.jsx)("div",{className:"container mx-auto max-w-7xl",id:"juri",children:(0,o.jsx)("div",{className:"",children:(0,o.jsxs)("div",{className:"juri-section-container",children:[(0,o.jsx)("h3",{className:"my-4 ml-0 text-2xl font-semibold text-center text-white lg:ml-0 lg:text-left",children:"Tim Juri"}),(0,o.jsx)(v,{})]})})})}),(0,o.jsx)(ty,{triggerOnce:!0,delay:700,duration:500,children:(0,o.jsxs)("div",{className:"container mx-auto max-w-7xl",children:[(0,o.jsx)("h3",{className:"my-4 ml-0 text-2xl font-semibold text-center text-white lg:ml-0 lg:text-left",children:"Berita Seputar Uzone Choice Award"}),(0,o.jsx)("div",{className:"grid grid-rows-1 gap-6 mt-4 md:grid-cols-3 lg:grid-cols-3",children:e&&e.map(e=>(0,o.jsxs)(w.default,{href:`/${e.slug}`,className:"relative text-pink-400 bg-gray-900 rounded-lg cursor-pointer hover:text-pink-600",children:[(0,o.jsx)(x.default,{width:500,height:500,src:e.featureImg,className:"object-cover h-64 rounded-lg",alt:"Berita 1"}),(0,o.jsx)("h2",{className:"absolute bottom-0 p-3 text-base font-semibold leading-6 bg-opacity-30 dark:text-gray-200",style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.75) 50%, rgba(255, 255, 255, 0) 100%)"},children:e.title})]},e.title))}),(0,o.jsx)("div",{className:"pt-5 mx-1 mx-auto text-center lg:flex lg:justify-end",children:(0,o.jsx)("a",{href:"https://uzone.id/tag/uzone-choice-award",className:"font-semibold inline-block px-10 py-3 text-lg text-white button-vote bg-[#e079b5] hover:bg-[#d64398]",style:{clipPath:"polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)"},children:"Selengkapnya >"})})]})}),(0,o.jsx)(ty,{triggerOnce:!0,delay:1e3,duration:500,children:(0,o.jsxs)("div",{className:"container mx-auto max-w-7xl",children:[(0,o.jsx)("h3",{className:"my-4 ml-0 text-2xl font-semibold text-center text-white lg:ml-0 lg:text-left",children:"UZONE CHOICE AWARD SEBELUMNYA"}),(0,o.jsxs)("div",{className:"grid grid-rows-1 gap-6 mt-4 md:grid-cols-2 lg:grid-cols-2",children:[(0,o.jsxs)("div",{className:"text-white",children:[(0,o.jsx)("iframe",{className:"w-full p-2 lg:p-0 aspect-video ...",src:"https://www.youtube.com/embed/JP6XrvWk3a0"}),(0,o.jsx)("h2",{className:"bg-[#e079b5] px-3 text-base font-semibold leading-6 text-white dark:text-gray-200 text-center",children:"Uzone Choice Award 2023"})]}),(0,o.jsxs)("div",{className:"text-white",children:[(0,o.jsx)("iframe",{className:"w-full p-2 lg:p-0 aspect-video ...",src:"https://www.youtube.com/embed/N8fbhc3VA_U?si=W196PuTqNF0lWaXt"}),(0,o.jsx)("h2",{className:"bg-[#e079b5] px-3 text-base font-semibold leading-6 text-white dark:text-gray-200 text-center",children:"Uzone Choice Award 2022"})]}),(0,o.jsxs)("div",{className:"text-white",children:[(0,o.jsx)("iframe",{className:"w-full p-2 lg:p-0 aspect-video ...",src:"https://www.youtube.com/embed/oonmUIayIYA"}),(0,o.jsx)("h2",{className:"bg-[#e079b5] px-3 text-base font-semibold leading-6 text-white dark:text-gray-200 text-center",children:"Uzone Choice Award 2021"})]}),(0,o.jsxs)("div",{className:"text-white",children:[(0,o.jsx)("iframe",{className:"w-full p-2 lg:p-0 aspect-video ...",src:"https://www.youtube.com/embed/yRqfglKz4mA"}),(0,o.jsx)("h2",{className:"bg-[#e079b5] px-3 text-base font-semibold leading-6 text-white dark:text-gray-200 text-center",children:"Uzone Choice Award 2020"})]})]})]})}),(0,o.jsxs)("div",{className:"py-16 text-center bg-black top-footer",children:[(0,o.jsxs)("h1",{className:"text-6xl font-bold text-white font-rajdhani",children:["UZONE CHOICE ",(0,o.jsx)("br",{}),"AWARD"," ",(0,o.jsx)("span",{className:"text-[56px] text-white text-stroke-uca-2024 font-aestethicMonoline",children:"2024"})]}),(0,o.jsxs)("div",{className:"mt-8",children:[(0,o.jsx)("p",{className:"text-lg text-white",children:"Connect with us"}),(0,o.jsxs)("div",{className:"flex justify-center mt-4 space-x-6",children:[(0,o.jsx)("div",{className:"bg-black rounded-full",children:(0,o.jsx)(w.default,{href:"https://web.facebook.com/uzoneindonesia",children:(0,o.jsx)(l.Facebook,{className:"w-6 h-6 p-1 text-white"})})}),(0,o.jsx)("div",{className:"bg-black rounded-full",children:(0,o.jsx)(w.default,{href:"https://www.instagram.com/uzoneindonesia/",children:(0,o.jsx)(d.Instagram,{className:"w-6 h-6 p-1 text-white"})})}),(0,o.jsx)("div",{className:"bg-black rounded-full",children:(0,o.jsx)(w.default,{href:"https://twitter.com/uzoneindonesia",children:(0,o.jsx)(m.Twitter,{className:"w-6 h-6 p-1 text-white"})})}),(0,o.jsx)("div",{className:"bg-black rounded-full",children:(0,o.jsx)(w.default,{href:"https://www.youtube.com/c/UzoneIndonesia",children:(0,o.jsx)(f.Youtube,{className:"w-6 h-6 p-1 text-white"})})}),(0,o.jsx)("div",{className:"bg-black rounded-full",children:(0,o.jsx)(w.default,{href:"https://www.linkedin.com/company/uzone/",children:(0,o.jsx)(u.Linkedin,{className:"w-6 h-6 p-1 text-white"})})}),(0,o.jsx)("div",{className:"bg-black rounded-full",children:(0,o.jsx)(w.default,{href:"https://www.tiktok.com/@uzoneindonesia",children:(0,o.jsx)(p.Music,{className:"w-6 h-6 p-1 text-white"})})})]})]})]})]}),(0,o.jsx)("footer",{className:"py-4 text-center bg-black footer",children:(0,o.jsx)("p",{className:"text-sm text-white",children:"© 2024 Uzone.id. All rights reserved."})}),t&&(0,o.jsx)("a",{className:"fixed p-4 text-white bg-[#e079b5] rounded-full backToTopBtn bottom-4 right-4 bg-main-theme cursor-pointer",title:"Back to Top",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:(0,o.jsx)(c.ChevronUp,{className:"w-6 h-6"})})]})})}],30729)}]);