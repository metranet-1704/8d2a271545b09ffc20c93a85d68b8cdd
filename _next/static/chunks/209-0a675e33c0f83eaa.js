"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[209],{30122:function(o,A,i){i.d(A,{Z:function(){return n}});var K=i(2265),e=function(){return(e=Object.assign||function(o){for(var A,i=1,K=arguments.length;i<K;i++)for(var e in A=arguments[i])Object.prototype.hasOwnProperty.call(A,e)&&(o[e]=A[e]);return o}).apply(this,arguments)};function U(o,A){var i={};for(var K in o)Object.prototype.hasOwnProperty.call(o,K)&&0>A.indexOf(K)&&(i[K]=o[K]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var e=0;for(K=Object.getOwnPropertySymbols(o);e<K.length;e++)0>A.indexOf(K[e])&&Object.prototype.propertyIsEnumerable.call(o,K[e])&&(i[K[e]]=o[K[e]])}return i}function F(o,A){var i="function"==typeof Symbol&&o[Symbol.iterator];if(!i)return o;var K,e,U=i.call(o),F=[];try{for(;(void 0===A||A-- >0)&&!(K=U.next()).done;)F.push(K.value)}catch(o){e={error:o}}finally{try{K&&!K.done&&(i=U.return)&&i.call(U)}finally{if(e)throw e.error}}return F}function t(o,A,i){if(i||2==arguments.length)for(var K,e=0,U=A.length;e<U;e++)!K&&e in A||(K||(K=Array.prototype.slice.call(A,0,e)),K[e]=A[e]);return o.concat(K||Array.prototype.slice.call(A))}"function"==typeof SuppressedError&&SuppressedError;var n=(0,K.memo)(function(o){var A,i,n=o.responsiveProps,R=U(o,["responsiveProps"]),r=F((0,K.useState)(0),2),a=r[0],l=r[1],s=F((0,K.useState)(R.activeSlideIndex),2),d=s[0],c=s[1],g=(0,K.useRef)(null),u=(0,K.useRef)(null),C=(0,K.useRef)(null),B=(0,K.useRef)(!1),Q=(0,K.useRef)(0),m=(0,K.useRef)(!1),f=(0,K.useRef)(""),v=(0,K.useRef)(null),p=(0,K.useRef)(null),h=(0,K.useRef)(0),x=(0,K.useRef)(d),S=(void 0===n?[]:n).reduce(function(o,A){void 0===A&&(A={});var i=A.minWidth,K=A.maxWidth,F=void 0===K?null:K,t=U(A,["minWidth","maxWidth"]);return a>(void 0===i?0:i)&&(!F||a<=F)?e(e({},o),t):o},R),y=K.Children.toArray(S.children),b=a?e(e({},S),{activeSlideIndex:Math.max(0,Math.min(S.activeSlideIndex,y.length-1)),itemsToShow:Math.min(y.length,S.itemsToShow||0),itemsToScroll:Math.min(y.length,S.itemsToScroll||1)}):R,w=b.containerProps,k=void 0===w?{}:w,E=k.style,L=U(k,["style"]),N=b.innerProps,j=void 0===N?{}:N,W=j.style,I=U(j,["style"]),M=b.itemsListProps,T=void 0===M?{}:M,q=T.style,J=T.onTransitionEnd,V=void 0===J?void 0:J,P=U(T,["style","onTransitionEnd"]),O=b.backwardBtnProps,H=void 0===O?{}:O,Z=H.children,D=H.show,z=U(H,["children","show"]),G=b.forwardBtnProps,X=void 0===G?{}:G,Y=X.children,_=X.show,$=U(X,["children","show"]),oo=b.activeSlideProps,oA=void 0===oo?{}:oo,oi=oA.className,oK=void 0===oi?"":oi,oe=oA.style,oU=void 0===oe?{}:oe,oF=U(oA,["className","style"]),ot=b.visibleSlideProps,on=void 0===ot?{}:ot,oR=on.className,or=void 0===oR?"":oR,oa=on.style,ol=void 0===oa?{}:oa,os=U(on,["className","style"]),od=b.updateOnItemClick,oc=void 0!==od&&od,og=b.activeSlideIndex,ou=b.onRequestChange,oC=b.speed,oB=void 0===oC?0:oC,oQ=b.delay,om=void 0===oQ?0:oQ,of=b.easing,ov=void 0===of?"linear":of,op=b.itemsToShow,oh=void 0===op?0:op,ox=b.itemsToScroll,oS=void 0===ox?1:ox,oy=b.children,ob=b.onAfterChange,ow=b.autoplay,ok=void 0!==ow&&ow,oE=b.autoplayDirection,oL=void 0===oE?"forward":oE,oN=b.disableNavIfAllVisible,oj=b.hideNavIfAllVisible,oW=b.centerMode,oI=void 0!==oW&&oW,oM=b.infinite,oT=void 0===oM||oM,oq=b.disableNavIfEdgeVisible,oJ=void 0===oq||oq,oV=b.disableNavIfEdgeActive,oP=void 0===oV||oV,oO=b.dotsNav,oH=b.persistentChangeCallbacks,oZ=void 0!==oH&&oH,oD=b.autoplayDelay,oz=void 0===oD?0:oD,oG=b.preventScrollOnSwipe,oX=b.disableSwipeByMouse,oY=void 0!==oX&&oX,o_=b.disableSwipeByTouch,o$=void 0!==o_&&o_,o0=b.touchSwipeTreshold,o1=b.mouseSwipeTreshold,o3=b.swipeTreshold,o2=b.touchSwipeRatio,o5=b.mouseSwipeRatio,o6=b.swipeRatio,o9=void 0===o6?1:o6,o7=b.dirRTL,o4=void 0!==o7&&o7,o8=(void 0===oO?{}:oO)||{},Ao=o8.show,AA=o8.containerProps,Ai=o8.itemBtnProps,AK=void 0===Ai?{}:Ai,Ae=o8.activeItemBtnProps,AU=void 0===Ae?{}:Ae,AF=K.Children.count(oy)-1,At=!!a&&(null===(A=u.current)||void 0===A?void 0:A.offsetWidth)>=(null===(i=C.current)||void 0===i?void 0:i.offsetWidth),An=(void 0===oj||oj)&&At,AR=(void 0===oN||oN)&&At,Ar=og-d!=0&&(oB||om)?"transform ".concat(oB,"ms ").concat(ov," ").concat(om,"ms"):"none",Aa=(0,K.useCallback)(function(o){var A,i=o.correctionSlideIndex,K=o.prevCorrectionSlideIndex,e=o.curActiveSlideIndex,U=C.current.offsetWidth,n=C.current.children,R=n.length,r=oT?t([],F(n),!1).slice(R/3-K,R/3-K+R/3):t([],F(n),!1),a=null===(A=r[e])||void 0===A?void 0:A.offsetWidth,l=oh?r.reduce(function(o,A,i){return i>=e&&i<e+oh||i<e&&i<e+oh-r.length?o+A.offsetWidth:o},0):u.current.offsetWidth,s=Math.min(l,u.current.offsetWidth),d=U-s,c=oI&&oT?-(s-a)/2:0,g=oT?U/3:0,B=i-e==0?0:"forward"===f.current&&e<i?g:"backward"===f.current&&e>i?-g:0,Q=e-i!=0,m=function(o){var A=r.reduce(function(A,i,K){return K>=o?A:A+(i.offsetWidth||0)},0);return oT?A:Math.min(d,A)},v=Q&&oT?m(i):0,p=Q||!oT?m(e):0,h=AR?0:p-v+c+B+g,x="translateX(".concat(o4?"":"-").concat(h,"px)"),S=oT?g+c:Math.min(d,r.reduce(function(o,A,i){return i<e?o+A.offsetWidth:o},0)),y=S+s,b=r.map(function(o,A){return{slideIndex:A,htmlElement:o}}),w=(oT?t(t(t(t([],F(r.slice(e).map(function(o,A){return{slideIndex:A+e,htmlElement:o}})),!1),F(b),!1),F(b),!1),F(r.slice(0,e).map(function(o,A){return{slideIndex:A,htmlElement:o}})),!1):b).reduce(function(o,A){var i=A.slideIndex,K=A.htmlElement.offsetWidth;return(o.summ>=S&&o.summ<y||o.summ+K>S&&o.summ+K<=y)&&o.items.push({slideIndex:i,isFullyVisible:o.summ+K<=y&&o.summ>=S}),o.summ+=K,o},{summ:0,items:[]}),k=!!w.items.find(function(o){return 0===o.slideIndex}),E=!!w.items.find(function(o){return o.slideIndex===r.length-1});return{slidesHTMLElements:r,innerMaxWidth:l,itemsListMaxTranslateX:d,activeSlideWidth:a,offsetCorrectionForCenterMode:c,offsetCorrectionForInfiniteMode:g,itemsListTranslateX:h,itemsListTransform:x,visibleSlides:w.items,isFirstSlideVisible:k,isLastSlideVisible:E}},[oI,AR,oT,oh,o4]),Al=a?Aa({prevCorrectionSlideIndex:x.current,curActiveSlideIndex:og,correctionSlideIndex:d}):{},As=Al.innerMaxWidth,Ad=void 0===As?0:As,Ac=Al.itemsListMaxTranslateX,Ag=void 0===Ac?0:Ac,Au=Al.activeSlideWidth,AC=void 0===Au?0:Au,AB=Al.offsetCorrectionForCenterMode,AQ=void 0===AB?0:AB,Am=Al.offsetCorrectionForInfiniteMode,Af=void 0===Am?0:Am,Av=Al.itemsListTranslateX,Ap=void 0===Av?0:Av,Ah=Al.itemsListTransform,Ax=void 0===Ah?"none":Ah,AS=Al.visibleSlides,Ay=void 0===AS?[]:AS,Ab=(0,K.useCallback)(function(o){var A;return"forward"===o?(A=og+oS)>AF?oT?A-AF-1:AF:A:"backward"===o?(A=og-oS)<0?oT?AF+1+A:0:A:og},[og,oS,AF,oT]),Aw=(0,K.useCallback)(function(o,A){var i;if(f.current=A,C.current.style.transition=oB||om?"transform ".concat(oB,"ms ").concat(ov," ").concat(om,"ms"):"none",o!==og||oZ){clearTimeout(v.current);var K=Aa({correctionSlideIndex:d,prevCorrectionSlideIndex:d,curActiveSlideIndex:o}),e=K.visibleSlides,U=K.isFirstSlideVisible,F=K.isLastSlideVisible,t=K.itemsListTransform;o!==og&&(null===(i=C.current)||void 0===i?void 0:i.style.transform)===t&&(B.current=!0),C.current.style.transform=t,ou(o,{visibleSlides:e,isFirstSlideVisible:U,isLastSlideVisible:F})}else C.current.style.transform="translateX(".concat(o4?"":"-").concat(AQ+Af+(oT?0:Ap),"px)")},[oZ,og,AQ,om,ov,oB,ou,Af,oT,Ap,d,Aa,o4]),Ak=(0,K.useCallback)(function(){ok&&(clearTimeout(v.current),v.current=setTimeout(function(){Aw(Ab(oL),oL)},oz||om))},[ok,oL,oz,Aw,Ab,om]),AE=(0,K.useCallback)(function(){Aw(Ab("backward"),"backward")},[Aw,Ab]),AL=(0,K.useCallback)(function(o){c(og),V&&V(o)},[og,V]),AN=(0,K.useCallback)(function(){Aw(Ab("forward"),"forward")},[Aw,Ab]),Aj=function(o,A,i){return o.map(function(o,K){var F,t,n,R,r=o.props,a=void 0===r?{}:r,l=a.className,s=a.onClick,d=void 0===s?null:s,c=a.style,g=U(a,["className","onClick","style"]),u=U(o,["props"]),C=oT?h.current>=y.length?"forward":"backward":K>=og?"forward":"backward",B=K+A===og,Q=Ay.find(function(o){return o.slideIndex===K+A}),m="".concat(void 0===l?"":l," ").concat(B?oK:""," ").concat(Q?or:"").trim()||void 0,f=e(e(e(e({},void 0===c?{}:c),Q?ol:{}),B?oU:{}),{boxSizing:"border-box",margin:0}),v=!i&&oc?(t=(F={direction:C,index:K+A,onClick:d}).direction,n=F.index,R=F.onClick,function(o){Aw(n,t||(og<n?"forward":"")||(og>n?"backward":"")),R&&R(o)}):d,p=e(e(e({role:"tabpanel",className:m,style:f,onClick:v},g),Q?os:{}),B?oF:{});return h.current+=1,e({props:p},u)})};return(0,K.useEffect)(function(){var o=C.current;function A(o){var i;o.preventDefault(),o.stopPropagation(),null===(i=o.target)||void 0===i||i.removeEventListener("click",A)}function i(o){m.current=!0;var A,i,K=!!(null===(A=o.touches)||void 0===A?void 0:A[0]),e=K?null===(i=o.touches)||void 0===i?void 0:i[0].clientX:o.clientX,U=(Q.current-e)*((K?o2:o5)||o9)+AQ+Af+(oT?0:Ap),F=C.current.offsetWidth;C.current.style.transition="none",C.current.style.transform="translateX(".concat((o4?-1:1)*Math.max(-U,-F),"px)")}function K(o){var e,U,F;if(document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",K),document.removeEventListener("touchmove",i),document.removeEventListener("touchend",K),m.current){null===(e=o.target)||void 0===e||e.addEventListener("click",A);var t=!!(null===(U=o.changedTouches)||void 0===U?void 0:U[0]),n=t?o.changedTouches[o.changedTouches.length-1].clientX:o.clientX,R=(Q.current-n)*((t?o2:o5)||o9),r=(t?o0:o1)||o3||AC/2,a=R>r?{index:Ab("forward"),direction:"forward"}:R<-r?{index:Ab("backward"),direction:"backward"}:{index:og,direction:"forward"};Aw(a.index,a.direction)}else null===(F=o.target)||void 0===F||F.removeEventListener("click",A);Q.current=0,m.current=!1}function e(o){clearTimeout(v.current);var A,e,U=!!(null===(A=o.touches)||void 0===A?void 0:A[0]);Q.current=U?null===(e=o.touches)||void 0===e?void 0:e[0].clientX:o.clientX,U?(document.addEventListener("touchmove",i),document.addEventListener("touchend",K)):(document.addEventListener("mousemove",i),document.addEventListener("mouseup",K))}return AR||(oY||null==o||o.addEventListener("mousedown",e),o$||null==o||o.addEventListener("touchstart",e,{passive:!0}),oY&&o$||null==o||o.addEventListener("dragstart",K)),function(){m.current=!1,Q.current=0,null==o||o.removeEventListener("mousedown",e),null==o||o.removeEventListener("touchstart",e),null==o||o.removeEventListener("dragstart",K),document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",K),document.removeEventListener("touchmove",i),document.removeEventListener("touchend",K)}},[oT,Ap,Ax,AQ,Af,og,AC,Ab,Aw,AR,oY,o$,o0,o1,o3,o2,o5,o9,o4]),(0,K.useEffect)(function(){return og!==d?(oB||om)&&!B.current||(B.current=!1,c(og)):(ob&&ob(og,d),(oT||"forward"===oL&&og!==AF||"backward"===oL&&0!==og)&&Ak()),function(){clearTimeout(v.current)}},[d,og,ob,oB,om,Ak,oT,AF,oL]),(0,K.useEffect)(function(){return a&&Ak(),function(){clearTimeout(v.current)}},[a]),(0,K.useEffect)(function(){function o(){clearTimeout(p.current),clearTimeout(v.current),p.current=setTimeout(function(){a!==window.innerWidth&&l(0)},400)}return a!==window.innerWidth&&l(window.innerWidth),window.addEventListener("resize",o),function(){clearTimeout(p.current),window.removeEventListener("resize",o)}},[a]),h.current=0,x.current=d,K.createElement("div",e({style:e({display:"flex",flexFlow:"row wrap",boxSizing:"border-box",justifyContent:"center",width:"100%"},void 0===E?{}:E)},L,{ref:g}),(void 0===D||D)&&!An&&K.createElement("button",e({},z,{type:"button",onClick:(0===Ap&&oJ||0===og&&oP)&&!oT?void 0:AE,disabled:"boolean"==typeof z.disabled?z.disabled:!(!(0===Ap&&oJ||0===og&&oP)||oT)}),void 0===Z?null:Z),K.createElement("div",e({},I,{style:e(e({width:"100%"},void 0===W?{}:W),{display:"flex",boxSizing:"border-box",flexFlow:"row wrap",padding:"0",overflow:"hidden",maxWidth:Ad?"".concat(Ad,"px"):void 0,flex:Ad?void 0:"1 0 auto"}),ref:u}),K.createElement("div",e({},P,{style:e(e({},void 0===q?{}:q),{display:"flex",boxSizing:"border-box",outline:"none",transition:Ar,transform:Ax,touchAction:void 0!==oG&&oG?"none":"auto"}),onTransitionEnd:oB||om?AL:V,tabIndex:-1,role:"presentation",ref:C}),oT&&Aj(y.slice(d),d,AR),Aj(y,0,AR),oT&&Aj(y,0,AR),oT&&Aj(y.slice(0,d),0,AR))),(void 0===_||_)&&!An&&K.createElement("button",e({},$,{type:"button",onClick:(Ap===Ag&&oJ||og===AF&&oP)&&!oT?void 0:AN,disabled:"boolean"==typeof $.disabled?$.disabled:!(!(Ap===Ag&&oJ||og===AF&&oP)||oT)}),void 0===Y?null:Y),!!(void 0!==Ao&&Ao)&&K.createElement("div",e({style:{width:"100%",display:"flex",justifyContent:"center"}},void 0===AA?{}:AA),Array.from({length:Math.ceil(y.length/oS)}).map(function(o,A){return K.createElement("button",e({type:"button",key:A,title:"".concat(A)},AK,og>=A*oS&&og<Math.min(oS*(A+1),AF+1)?AU:{},{onClick:function(){Aw(Math.min(A*oS,y.length-1),Math.min(A*oS,y.length-1)>og?"forward":"backward")}}))})))})},70964:function(o,A,i){i.d(A,{Z:function(){return t}});var K=i(57437),e=i(2265),U=i(63019),F=i(83946);function t(){let{showMr1:o}=(0,F.N)(),A=e.useRef(null),[i,t]=e.useState(!1);return e.useEffect(()=>{if(A.current&&!A.current.classList.contains("adsbygoogle-initialized")&&o){let o=setTimeout(()=>{t(!0)},3e3);try{(window.adsbygoogle=window.adsbygoogle||[]).push({}),A.current.classList.add("adsbygoogle-initialized"),A.current.addEventListener("load",()=>{clearTimeout(o),t(!1)}),A.current.addEventListener("error",()=>{clearTimeout(o),t(!0)})}catch(o){t(!0)}}},[o]),(0,K.jsx)("div",{className:"mx-auto my-auto justify-self-center",children:i?(0,K.jsx)("div",{className:"lg:justify-self-end justify-self-center",children:(0,K.jsx)("div",{className:"text-xs text-gray-400 dark:bg-gray-700 w-[300px] h-[250px] mx-auto bg-gray-300 relative",children:(0,K.jsx)("div",{className:"absolute bottom-0 right-0 p-2",children:"Sponsored"})})}):U.tq?(0,K.jsx)("ins",{ref:A,className:"adsbygoogle",style:{display:"block",width:300,height:250},"data-ad-client":"ca-pub-3104347776958652","data-ad-slot":"2479350029"}):(0,K.jsx)("ins",{ref:A,className:"adsbygoogle",style:{display:"block",width:300,height:250},"data-ad-client":"ca-pub-3104347776958652","data-ad-slot":"1870241283"})})}},32313:function(o,A,i){i.d(A,{Z:function(){return t}});var K=i(57437),e=i(2265),U=i(84111),F=i(63019);function t(){let[o,A]=e.useState(!0);return(0,K.jsx)("div",{className:"hidden my-6 lg:block",children:!F.tq&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)("div",{className:"flex justify-center",children:(0,K.jsx)(U.Ad,{adUnit:"/89929222/Uzone.id_Desktop/Homepage",name:"div-gpt-ad-2867975-4",size:[[300,600],[300,250]],target:[["Position","Giant"]],refreshTimer:5e3,eventSlotRenderEnded:o=>A(o.isEmpty)})}),o&&(0,K.jsx)("div",{className:"text-xs text-gray-400 w-[320px] dark:bg-gray-700 h-[720px] mx-auto mt-20 bg-gray-300 lg:mt-5 relative",children:(0,K.jsx)("div",{className:"absolute bottom-0 right-0 p-2",children:"Sponsored"})})]})})}},91893:function(o,A,i){i.d(A,{Z:function(){return t}});var K=i(57437),e=i(2265),U=i(63019),F=i(83946);function t(){let{show:o}=(0,F.N)(),A=e.useRef(null);return e.useEffect(()=>{if(A.current&&!A.current.classList.contains("adsbygoogle-initialized")&&o)try{(window.adsbygoogle=window.adsbygoogle||[]).push({}),A.current.classList.add("adsbygoogle-initialized")}catch(o){}},[o]),(0,K.jsx)(K.Fragment,{children:o&&(0,K.jsx)("div",{className:"flex justify-center h-32 mt-5 lg:h-24 lg:mt-5",children:U.tq?(0,K.jsx)("ins",{ref:A,className:"adsbygoogle",style:{display:"block",width:320,height:100},"data-ad-client":"ca-pub-3104347776958652","data-ad-slot":"5563844213"}):(0,K.jsx)("ins",{ref:A,className:"adsbygoogle",style:{display:"block",width:728,height:90},"data-ad-client":"ca-pub-3104347776958652","data-ad-slot":"1574258625"})})})}},4558:function(o,A,i){i.d(A,{Z:function(){return t}});var K=i(57437),e=i(2265),U=i(68550),F=i(8792);function t(o){let{slug:A}=o,[i,t]=e.useState([]);return e.useEffect(()=>{let o=async()=>{let{data:o}=await fetch("".concat("https://sun.uzone.id/","article/"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({category:[A.charAt(0).toUpperCase()+A.slice(1)],page:1,limit:5})}).then(o=>o.json()).catch(o=>{});t(o)};A&&o()},[A]),(0,K.jsx)("div",{className:"justify-center hidden my-5 mt-5 lg:flex",children:(0,K.jsx)("div",{className:"grid grid-rows-1 gap-5 lg:grid-cols-4",children:i.length>0?i.filter((o,A)=>A>0&&A<5).map(o=>(0,K.jsxs)(F.default,{href:"/".concat(o.slug),className:"px-4 my-4 lg:px-0",children:[(0,K.jsx)(U.Z,{className:"w-full lg:w-64 object-cover h:48 lg:h-36 left-0 top-[30px] rounded",src:o.featureImg,alt:o.title}),(0,K.jsx)("h2",{dangerouslySetInnerHTML:{__html:o.title},className:"w-full leading-6 left-0 top-[190px] text-xs font-semibold tracking-wider"})]},o.title)):(0,K.jsx)(K.Fragment,{})})})}},16330:function(o,A,i){var K=i(57437),e=i(2265),U=i(20703),F=i(8792),t=i(30122);A.Z=o=>{let{news:A}=o,[i,n]=e.useState(0);return(0,K.jsx)("div",{className:"block lg:hidden",children:(null==A?void 0:A.length)>0&&(0,K.jsx)(t.Z,{activeSlideIndex:i,onRequestChange:n,containerProps:{style:{width:"100%",justifyContent:"space-between",position:"relative"}},swipeTreshold:60,itemsToShow:3,speed:400,centerMode:!0,responsiveProps:[{itemsToShow:3,minWidth:768}],children:A.filter((o,A)=>A>0&&A<5).map(o=>(0,K.jsxs)(F.default,{href:"/".concat(o.slug),className:"w-[300px] h-[250px] cursor-pointer rounded-md p-[10px] !mb-[20px]",children:[(0,K.jsx)(U.default,{src:o.featureImg,width:300,height:150,alt:o.title,className:"object-cover w-[300px] h-[150px] my-auto rounded-xl justify-self-center"}),(0,K.jsx)("div",{className:"flex mt-5 text-xs",children:(0,K.jsx)("h2",{dangerouslySetInnerHTML:{__html:o.title},className:"ml-1 text-base font-semibold leading-6 tracking-wider text-black dark:text-white"})})]},o.slug))})})}},68550:function(o,A,i){i.d(A,{Z:function(){return F}});var K=i(57437),e=i(2265),U=i(20703),F=o=>{let{alt:A,className:i,src:F}=o,[t,n]=e.useState("".concat(F,"/800"));return(0,K.jsx)(U.default,{alt:A,title:A,src:t,width:640,height:300,className:i,placeholder:"blur",blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAJYBLADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKSgBaSiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKKSgBaKSigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKXFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAlFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRS0UAJRS0UAJRS0YoASiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiloASilooAMUlLRQAlFLRQAlFLRQAlFLRigBBRilooASilooASilooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApKWkoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApaSloAKKKKACiiigAooooAKKKKAEooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAClpKKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKSlpKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKWkpaACiiigAooooAKKKKACkoooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKWkpaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopaAEooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAEooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFopKWgAooooAKKKKACiijNACUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAC0UlLQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABS0lFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAtBpKWgBKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKSlooASiiigAooooAKKKKACiiigAooooAKUUlLQAUUUUAFJRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRmgAooooAKKM0maAFopM0ZoAWiikzQAtFGaKACijNFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAGaWkooAWijNJmgBaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAEopaSgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACijNGaACijNGaACkoooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWikooAWikzS5oAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKSigBaKSigAooooAWikpaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooASiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACikooAM0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABS5pKKAFopM0uaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWikpaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooNFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAJRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUmaAFpKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKWkooAWikooAWiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFNJSmkoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBKKWkoAKKKKACiiigAooooAKKKKACiiigAooooASiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKMUALRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQACloooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAU0lKaSgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoNFJQAUUUUAFFFFABRRRQAUUUUAJRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAC0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAC0UlLQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFJS0UAFBoooAU0lKaSgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkoooAWkoooAKKKKACiiigAooooAKKKKAEooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKSloAKKSigBaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKXFFFACYpaKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAClpBS0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAKaSlNJQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFJQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAlFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAlFFFAC0UlFAC0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAC0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABS0lLQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAppKU0lABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFJS0lABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFJRS0AFFFFABRRRQAUUlLQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAtFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAClpKWgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigANFBooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooASiiigAooooAKKKKACiiigAooooAKKKKACiiigApKWkoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooo/GgAoo49RRx60AFFHHqKOPWgAoo49RS8e1ACUUcetH40AFJS0UAJRRRQAtFFFABRSUZoAWiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAA0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUlFFAC0UlLQAUUUUAFFFFACUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUABpKWkoAKKKKACiiigAooooAKKKKACiiigAooooAKZI+xc0+q919wfWgCNpnPfFN3se5pgpaAHbj6mjJ9TSUtABk+ppMn1NLRQAZPqaTJ9TS0UAJk+poyfU0tFACZPqaMn1NLikoAMn1NAZh/EaKSgC1C5ZOeoqWoLfo1T0AFLSUUALRSUUALRSUtABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAC0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFAoooAWiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooNFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFGaACikooAKKKKACiiigApaSigBaKKKACg0UUAJRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUlLSUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUCCq939xfrViq9591PrQMrUtJRQA4HmjNMJPateGC3uIEkCYyOcetAGXRWv9hg/un86PsUH90/nQBk0VsC0gH8FKLaEf8s1oAxqK2xDEP8Almv5Uvlp/cX8qAMOkrcKxngKD+FRTWkciEBQrdiKAMikpehIPBHFFAE1v/FViq9v/FVigAooooAKKKKAClpKWgAooooAKKKKACiiigAooooAKKKKACiiigBaKKKACiiigAooooAKKKKACiiigAoopaACiig0AJRRRQAUUUUAFFFFABS0lLQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUABopTSUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAlFFFABRRRQAUUUUAFFFFABRRRQAUtJRQAtFJRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFJS0lABRRRQAUUUUAFFFFABRRRQAUUUlABS0UUAFV7z7q/WrFV7v7i/WgCrRRRQAGrulS7ZHhPRvmH171SpUYxyK69VORQB0NFMimSaMOpGD+lOzQAtFNLgdSKareb9w8dyKAHFwDgcn0FIFZvvnHsKeqhRwKKAAAAYFFFLQBi3ieXduOzfMPxqGr2qL88T9yCKo0ATW/VqsVXt+rVYoAKKKKACiiigApRSUtABRRRQAUUUUAFFFFABRRRQAUUUUAFAoooAWiiigAooooAKKKKACiiigAooooAKWkpaACiig0AJRRRQAUUUUAFFFFABS0lAoAWiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBTSUppKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooASiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKSlpDQAUUUUAFFFFABRRRQAUUUUAFJS0lABRRRQAtV7v7q/WrFVrv7q/WgCtS0UUAFFJmigAGVOVYj6Gnq9w7BVklJ7AGrEFhLLgt8i+/WtOG3jgXCLz3J6mgCnBpzN810xY9kzwPrWgqhVCqAAOgFLRQAUUUySVIl3OwUe9AD6imuI4B8x57KOpqlNqLNlYRtH949apHJOSSSepNAEk8zzybn49B6VFS0GgCW36tViq9v1arFABRRRQAUUUUAFLSUUALRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAC0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAZooooAKKKKACiiigAooooAKKKKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAU0lKaSgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAEooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkNLSGgAooooAKKKKACiiigAooooAQ0UtJQAUUUUALVe7+6v1qxVe76L9aAK1IaWpLWNZrpUboeaAFgtZJz8owO7HpWrBaRQYIG5v7xqZVCqFUAAdAKWgAooooAWmvIkalnYAepqOV32lYQpf1boKqf2fJI2+e4Ln2HAoAbNqTHIgXA/vNVNiztudix9TWgNPQfxNSnT17M1AGdRUtxA1uwBOQehqKgApKWkoAnt+rVPUFv/FU9ABRRRQAUUUUAFFFFAC0UUUAFFFFABRRRQAUUUUAFFFFABRRQKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACmkoNFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFJS0lABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUlLSUAFFFFABRRRQAUUUUAFFFFABRRRQAUlBooAWq910X61YqvdfdX60AVqfbP5dzG3+1imUh9qAOioqK3l82BH7kc/Wnsx/hGTQArOqjJOKi3NJ6qv60bMnLcmn80AIAAMAYFOpMUuKAAU6kpaAIbmHzoGXuOR9axs10FY97F5VycfdfmgCCkoooAnt/4qnqC3/iqegAooooAKKKKACiiigBaKKKACiiigAooooAKKKKACiiigAoFFLQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAC0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUABooNFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACUUppKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkpaSgAooooAKKKKACiiigAooooAKKKKACkpaSgBar3X3V+tWKr3P3V+tAFekIpaSgB8c0sQIRyB6U/7XP/AM9DUNFAE32qb/noaQ3M3981FRQBJ9om/wCejUnny/8APRvzplFADvNl/wCej/nR5sv/AD0f/vqm0UAPE8w/5av+dIzs5+ZifrTaKAHZopM0UAWLf+Kp6r2/8VWKACiiigAooooAKKKWgAooooAKKKKACiiigAooooAKKKKACgUUtABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUALRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFJS0UAJRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABSUtJQAUUUUAFFFFABRRRQAUUUUAFFFFABSGlooASoZwSgx2NTUUAUcUmKvYHpRtHpQBRoxV/avoKNq+goAz6K0Nq+go2r6CgDPorQ2L6CjYvoKAM/FFX9i+go2L6CgChRV/YvoKN",onError:()=>n("/images/uzone-default.webp")})}},35656:function(o,A,i){i.d(A,{Z:function(){return R}});var K=i(57437);i(2265);var e=i(98594),U=i(99782),F=i(61081),t=i(60976),n=i(2e4);async function R(o,A){switch(o){case"gadget":return(0,K.jsx)(e.T1V,{className:A});case"startup":default:return(0,K.jsx)(e.Zp5,{className:A});case"games":return(0,K.jsx)(e.Wjz,{className:A});case"automotive":return(0,K.jsx)(e.Sid,{className:A});case"game":return(0,K.jsx)(U.iVx,{className:A});case"telco":return(0,K.jsx)(F.fWB,{className:A});case"digilife":return(0,K.jsx)(t.cpI,{className:A});case"govtech":return(0,K.jsx)(n.eWh,{className:A})}}}}]);