(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4171],{61768:function(e,s,t){Promise.resolve().then(t.bind(t,19721)),Promise.resolve().then(t.bind(t,80968)),Promise.resolve().then(t.bind(t,93726)),Promise.resolve().then(t.bind(t,67222)),Promise.resolve().then(t.bind(t,77854))},30122:function(e,s,t){"use strict";t.d(s,{Z:function(){return r}});var a=t(2265),l=function(){return(l=Object.assign||function(e){for(var s,t=1,a=arguments.length;t<a;t++)for(var l in s=arguments[t])Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l]);return e}).apply(this,arguments)};function i(e,s){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>s.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>s.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]])}return t}function n(e,s){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var a,l,i=t.call(e),n=[];try{for(;(void 0===s||s-- >0)&&!(a=i.next()).done;)n.push(a.value)}catch(e){l={error:e}}finally{try{a&&!a.done&&(t=i.return)&&t.call(i)}finally{if(l)throw l.error}}return n}function d(e,s,t){if(t||2==arguments.length)for(var a,l=0,i=s.length;l<i;l++)!a&&l in s||(a||(a=Array.prototype.slice.call(s,0,l)),a[l]=s[l]);return e.concat(a||Array.prototype.slice.call(s))}"function"==typeof SuppressedError&&SuppressedError;var r=(0,a.memo)(function(e){var s,t,r=e.responsiveProps,o=i(e,["responsiveProps"]),c=n((0,a.useState)(0),2),m=c[0],x=c[1],u=n((0,a.useState)(o.activeSlideIndex),2),h=u[0],f=u[1],g=(0,a.useRef)(null),p=(0,a.useRef)(null),v=(0,a.useRef)(null),j=(0,a.useRef)(!1),b=(0,a.useRef)(0),N=(0,a.useRef)(!1),y=(0,a.useRef)(""),w=(0,a.useRef)(null),k=(0,a.useRef)(null),S=(0,a.useRef)(0),z=(0,a.useRef)(h),E=(void 0===r?[]:r).reduce(function(e,s){void 0===s&&(s={});var t=s.minWidth,a=s.maxWidth,n=void 0===a?null:a,d=i(s,["minWidth","maxWidth"]);return m>(void 0===t?0:t)&&(!n||m<=n)?l(l({},e),d):e},o),T=a.Children.toArray(E.children),I=m?l(l({},E),{activeSlideIndex:Math.max(0,Math.min(E.activeSlideIndex,T.length-1)),itemsToShow:Math.min(T.length,E.itemsToShow||0),itemsToScroll:Math.min(T.length,E.itemsToScroll||1)}):o,P=I.containerProps,C=void 0===P?{}:P,M=C.style,L=i(C,["style"]),A=I.innerProps,U=void 0===A?{}:A,R=U.style,W=i(U,["style"]),B=I.itemsListProps,D=void 0===B?{}:B,O=D.style,V=D.onTransitionEnd,F=void 0===V?void 0:V,X=i(D,["style","onTransitionEnd"]),H=I.backwardBtnProps,J=void 0===H?{}:H,G=J.children,K=J.show,_=i(J,["children","show"]),q=I.forwardBtnProps,Z=void 0===q?{}:q,Y=Z.children,Q=Z.show,$=i(Z,["children","show"]),ee=I.activeSlideProps,es=void 0===ee?{}:ee,et=es.className,ea=void 0===et?"":et,el=es.style,ei=void 0===el?{}:el,en=i(es,["className","style"]),ed=I.visibleSlideProps,er=void 0===ed?{}:ed,eo=er.className,ec=void 0===eo?"":eo,em=er.style,ex=void 0===em?{}:em,eu=i(er,["className","style"]),eh=I.updateOnItemClick,ef=void 0!==eh&&eh,eg=I.activeSlideIndex,ep=I.onRequestChange,ev=I.speed,ej=void 0===ev?0:ev,eb=I.delay,eN=void 0===eb?0:eb,ey=I.easing,ew=void 0===ey?"linear":ey,ek=I.itemsToShow,eS=void 0===ek?0:ek,ez=I.itemsToScroll,eE=void 0===ez?1:ez,eT=I.children,eI=I.onAfterChange,eP=I.autoplay,eC=void 0!==eP&&eP,eM=I.autoplayDirection,eL=void 0===eM?"forward":eM,eA=I.disableNavIfAllVisible,eU=I.hideNavIfAllVisible,eR=I.centerMode,eW=void 0!==eR&&eR,eB=I.infinite,eD=void 0===eB||eB,eO=I.disableNavIfEdgeVisible,eV=void 0===eO||eO,eF=I.disableNavIfEdgeActive,eX=void 0===eF||eF,eH=I.dotsNav,eJ=I.persistentChangeCallbacks,eG=void 0!==eJ&&eJ,eK=I.autoplayDelay,e_=void 0===eK?0:eK,eq=I.preventScrollOnSwipe,eZ=I.disableSwipeByMouse,eY=void 0!==eZ&&eZ,eQ=I.disableSwipeByTouch,e$=void 0!==eQ&&eQ,e0=I.touchSwipeTreshold,e6=I.mouseSwipeTreshold,e1=I.swipeTreshold,e2=I.touchSwipeRatio,e7=I.mouseSwipeRatio,e5=I.swipeRatio,e4=void 0===e5?1:e5,e3=I.dirRTL,e8=void 0!==e3&&e3,e9=(void 0===eH?{}:eH)||{},se=e9.show,ss=e9.containerProps,st=e9.itemBtnProps,sa=void 0===st?{}:st,sl=e9.activeItemBtnProps,si=void 0===sl?{}:sl,sn=a.Children.count(eT)-1,sd=!!m&&(null===(s=p.current)||void 0===s?void 0:s.offsetWidth)>=(null===(t=v.current)||void 0===t?void 0:t.offsetWidth),sr=(void 0===eU||eU)&&sd,so=(void 0===eA||eA)&&sd,sc=eg-h!=0&&(ej||eN)?"transform ".concat(ej,"ms ").concat(ew," ").concat(eN,"ms"):"none",sm=(0,a.useCallback)(function(e){var s,t=e.correctionSlideIndex,a=e.prevCorrectionSlideIndex,l=e.curActiveSlideIndex,i=v.current.offsetWidth,r=v.current.children,o=r.length,c=eD?d([],n(r),!1).slice(o/3-a,o/3-a+o/3):d([],n(r),!1),m=null===(s=c[l])||void 0===s?void 0:s.offsetWidth,x=eS?c.reduce(function(e,s,t){return t>=l&&t<l+eS||t<l&&t<l+eS-c.length?e+s.offsetWidth:e},0):p.current.offsetWidth,u=Math.min(x,p.current.offsetWidth),h=i-u,f=eW&&eD?-(u-m)/2:0,g=eD?i/3:0,j=t-l==0?0:"forward"===y.current&&l<t?g:"backward"===y.current&&l>t?-g:0,b=l-t!=0,N=function(e){var s=c.reduce(function(s,t,a){return a>=e?s:s+(t.offsetWidth||0)},0);return eD?s:Math.min(h,s)},w=b&&eD?N(t):0,k=b||!eD?N(l):0,S=so?0:k-w+f+j+g,z="translateX(".concat(e8?"":"-").concat(S,"px)"),E=eD?g+f:Math.min(h,c.reduce(function(e,s,t){return t<l?e+s.offsetWidth:e},0)),T=E+u,I=c.map(function(e,s){return{slideIndex:s,htmlElement:e}}),P=(eD?d(d(d(d([],n(c.slice(l).map(function(e,s){return{slideIndex:s+l,htmlElement:e}})),!1),n(I),!1),n(I),!1),n(c.slice(0,l).map(function(e,s){return{slideIndex:s,htmlElement:e}})),!1):I).reduce(function(e,s){var t=s.slideIndex,a=s.htmlElement.offsetWidth;return(e.summ>=E&&e.summ<T||e.summ+a>E&&e.summ+a<=T)&&e.items.push({slideIndex:t,isFullyVisible:e.summ+a<=T&&e.summ>=E}),e.summ+=a,e},{summ:0,items:[]}),C=!!P.items.find(function(e){return 0===e.slideIndex}),M=!!P.items.find(function(e){return e.slideIndex===c.length-1});return{slidesHTMLElements:c,innerMaxWidth:x,itemsListMaxTranslateX:h,activeSlideWidth:m,offsetCorrectionForCenterMode:f,offsetCorrectionForInfiniteMode:g,itemsListTranslateX:S,itemsListTransform:z,visibleSlides:P.items,isFirstSlideVisible:C,isLastSlideVisible:M}},[eW,so,eD,eS,e8]),sx=m?sm({prevCorrectionSlideIndex:z.current,curActiveSlideIndex:eg,correctionSlideIndex:h}):{},su=sx.innerMaxWidth,sh=void 0===su?0:su,sf=sx.itemsListMaxTranslateX,sg=void 0===sf?0:sf,sp=sx.activeSlideWidth,sv=void 0===sp?0:sp,sj=sx.offsetCorrectionForCenterMode,sb=void 0===sj?0:sj,sN=sx.offsetCorrectionForInfiniteMode,sy=void 0===sN?0:sN,sw=sx.itemsListTranslateX,sk=void 0===sw?0:sw,sS=sx.itemsListTransform,sz=void 0===sS?"none":sS,sE=sx.visibleSlides,sT=void 0===sE?[]:sE,sI=(0,a.useCallback)(function(e){var s;return"forward"===e?(s=eg+eE)>sn?eD?s-sn-1:sn:s:"backward"===e?(s=eg-eE)<0?eD?sn+1+s:0:s:eg},[eg,eE,sn,eD]),sP=(0,a.useCallback)(function(e,s){var t;if(y.current=s,v.current.style.transition=ej||eN?"transform ".concat(ej,"ms ").concat(ew," ").concat(eN,"ms"):"none",e!==eg||eG){clearTimeout(w.current);var a=sm({correctionSlideIndex:h,prevCorrectionSlideIndex:h,curActiveSlideIndex:e}),l=a.visibleSlides,i=a.isFirstSlideVisible,n=a.isLastSlideVisible,d=a.itemsListTransform;e!==eg&&(null===(t=v.current)||void 0===t?void 0:t.style.transform)===d&&(j.current=!0),v.current.style.transform=d,ep(e,{visibleSlides:l,isFirstSlideVisible:i,isLastSlideVisible:n})}else v.current.style.transform="translateX(".concat(e8?"":"-").concat(sb+sy+(eD?0:sk),"px)")},[eG,eg,sb,eN,ew,ej,ep,sy,eD,sk,h,sm,e8]),sC=(0,a.useCallback)(function(){eC&&(clearTimeout(w.current),w.current=setTimeout(function(){sP(sI(eL),eL)},e_||eN))},[eC,eL,e_,sP,sI,eN]),sM=(0,a.useCallback)(function(){sP(sI("backward"),"backward")},[sP,sI]),sL=(0,a.useCallback)(function(e){f(eg),F&&F(e)},[eg,F]),sA=(0,a.useCallback)(function(){sP(sI("forward"),"forward")},[sP,sI]),sU=function(e,s,t){return e.map(function(e,a){var n,d,r,o,c=e.props,m=void 0===c?{}:c,x=m.className,u=m.onClick,h=void 0===u?null:u,f=m.style,g=i(m,["className","onClick","style"]),p=i(e,["props"]),v=eD?S.current>=T.length?"forward":"backward":a>=eg?"forward":"backward",j=a+s===eg,b=sT.find(function(e){return e.slideIndex===a+s}),N="".concat(void 0===x?"":x," ").concat(j?ea:""," ").concat(b?ec:"").trim()||void 0,y=l(l(l(l({},void 0===f?{}:f),b?ex:{}),j?ei:{}),{boxSizing:"border-box",margin:0}),w=!t&&ef?(d=(n={direction:v,index:a+s,onClick:h}).direction,r=n.index,o=n.onClick,function(e){sP(r,d||(eg<r?"forward":"")||(eg>r?"backward":"")),o&&o(e)}):h,k=l(l(l({role:"tabpanel",className:N,style:y,onClick:w},g),b?eu:{}),j?en:{});return S.current+=1,l({props:k},p)})};return(0,a.useEffect)(function(){var e=v.current;function s(e){e.preventDefault(),e.stopPropagation()}function t(e){N.current=!0;var s,t,a=!!(null===(s=e.touches)||void 0===s?void 0:s[0]),l=a?null===(t=e.touches)||void 0===t?void 0:t[0].clientX:e.clientX,i=(b.current-l)*((a?e2:e7)||e4)+sb+sy+(eD?0:sk),n=v.current.offsetWidth;v.current.style.transition="none",v.current.style.transform="translateX(".concat((e8?-1:1)*Math.max(-i,-n),"px)")}function a(e){var l,i,n;if(document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",a),document.removeEventListener("touchmove",t),document.removeEventListener("touchend",a),N.current){null===(l=e.target)||void 0===l||l.addEventListener("click",s);var d=!!(null===(i=e.changedTouches)||void 0===i?void 0:i[0]),r=d?e.changedTouches[e.changedTouches.length-1].clientX:e.clientX,o=(b.current-r)*((d?e2:e7)||e4),c=(d?e0:e6)||e1||sv/2,m=o>c?{index:sI("forward"),direction:"forward"}:o<-c?{index:sI("backward"),direction:"backward"}:{index:eg,direction:"forward"};sP(m.index,m.direction)}else null===(n=e.target)||void 0===n||n.removeEventListener("click",s);b.current=0,N.current=!1}function l(e){clearTimeout(w.current);var s,l,i=!!(null===(s=e.touches)||void 0===s?void 0:s[0]);b.current=i?null===(l=e.touches)||void 0===l?void 0:l[0].clientX:e.clientX,i?(document.addEventListener("touchmove",t),document.addEventListener("touchend",a)):(document.addEventListener("mousemove",t),document.addEventListener("mouseup",a))}return so||(eY||null==e||e.addEventListener("mousedown",l),e$||null==e||e.addEventListener("touchstart",l,{passive:!0}),eY&&e$||null==e||e.addEventListener("dragstart",a)),function(){N.current=!1,b.current=0,null==e||e.removeEventListener("mousedown",l),null==e||e.removeEventListener("touchstart",l),null==e||e.removeEventListener("dragstart",a),document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",a),document.removeEventListener("touchmove",t),document.removeEventListener("touchend",a)}},[eD,sk,sz,sb,sy,eg,sv,sI,sP,so,eY,e$,e0,e6,e1,e2,e7,e4,e8]),(0,a.useEffect)(function(){return eg!==h?(ej||eN)&&!j.current||(j.current=!1,f(eg)):(eI&&eI(eg,h),(eD||"forward"===eL&&eg!==sn||"backward"===eL&&0!==eg)&&sC()),function(){clearTimeout(w.current)}},[h,eg,eI,ej,eN,sC,eD,sn,eL]),(0,a.useEffect)(function(){return m&&sC(),function(){clearTimeout(w.current)}},[m]),(0,a.useEffect)(function(){function e(){clearTimeout(k.current),clearTimeout(w.current),k.current=setTimeout(function(){m!==window.innerWidth&&x(0)},400)}return m!==window.innerWidth&&x(window.innerWidth),window.addEventListener("resize",e),function(){clearTimeout(k.current),window.removeEventListener("resize",e)}},[m]),S.current=0,z.current=h,a.createElement("div",l({style:l({display:"flex",flexFlow:"row wrap",boxSizing:"border-box",justifyContent:"center",width:"100%"},void 0===M?{}:M)},L,{ref:g}),(void 0===K||K)&&!sr&&a.createElement("button",l({},_,{type:"button",onClick:(0===sk&&eV||0===eg&&eX)&&!eD?void 0:sM,disabled:"boolean"==typeof _.disabled?_.disabled:!(!(0===sk&&eV||0===eg&&eX)||eD)}),void 0===G?null:G),a.createElement("div",l({},W,{style:l(l({width:"100%"},void 0===R?{}:R),{display:"flex",boxSizing:"border-box",flexFlow:"row wrap",padding:"0",overflow:"hidden",maxWidth:sh?"".concat(sh,"px"):void 0,flex:sh?void 0:"1 0 auto"}),ref:p}),a.createElement("div",l({},X,{style:l(l({},void 0===O?{}:O),{display:"flex",boxSizing:"border-box",outline:"none",transition:sc,transform:sz,touchAction:void 0!==eq&&eq?"none":"auto"}),onTransitionEnd:ej||eN?sL:F,tabIndex:-1,role:"presentation",ref:v}),eD&&sU(T.slice(h),h,so),sU(T,0,so),eD&&sU(T,0,so),eD&&sU(T.slice(0,h),0,so))),(void 0===Q||Q)&&!sr&&a.createElement("button",l({},$,{type:"button",onClick:(sk===sg&&eV||eg===sn&&eX)&&!eD?void 0:sA,disabled:"boolean"==typeof $.disabled?$.disabled:!(!(sk===sg&&eV||eg===sn&&eX)||eD)}),void 0===Y?null:Y),!!(void 0!==se&&se)&&a.createElement("div",l({style:{width:"100%",display:"flex",justifyContent:"center"}},void 0===ss?{}:ss),Array.from({length:Math.ceil(T.length/eE)}).map(function(e,s){return a.createElement("button",l({type:"button",key:s,title:"".concat(s)},sa,eg>=s*eE&&eg<Math.min(eE*(s+1),sn+1)?si:{},{onClick:function(){sP(Math.min(s*eE,T.length-1),Math.min(s*eE,T.length-1)>eg?"forward":"backward")}}))})))})},67222:function(e,s,t){"use strict";t.r(s);var a=t(57437);t(2265);var l=t(56208),i=t(31261),n=t(83803),d=t(22064);s.default=()=>(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-7",children:[(0,a.jsx)(l.Z,{}),(0,a.jsxs)("div",{className:"lg:col-span-5",children:[(0,a.jsx)(n.Z,{}),(0,a.jsx)("div",{className:"lg:col-span-2 mt-7",children:(0,a.jsxs)("div",{className:"grid grid-rows-1 lg:grid-cols-2",children:[(0,a.jsx)("div",{className:"w-full p-3 lg:p-1 lg:w-[500px] lg:h-[320px] bg-gray-300 rounded-md"}),(0,a.jsxs)("div",{className:"grid grid-rows-1 gap-3 lg:grid-cols-2",children:[(0,a.jsx)("div",{className:"w-full p-3 lg:p-1 lg:w-[250px] lg:h-[160px] bg-gray-300 rounded-md"}),(0,a.jsx)("div",{className:"w-full p-3 lg:p-1 lg:w-[250px] lg:h-[160px] bg-gray-300 rounded-md"}),(0,a.jsx)("div",{className:"w-full p-3 lg:p-1 lg:w-[250px] lg:h-[160px] bg-gray-300 rounded-md"}),(0,a.jsx)("div",{className:"w-full p-3 lg:p-1 lg:w-[250px] lg:h-[160px] bg-gray-300 rounded-md"})]})]})}),(0,a.jsx)("div",{className:"my-8 border-b border-gray-200 dark:border-gray-500"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3",children:[(0,a.jsxs)("div",{className:"col-span-2",children:[(0,a.jsx)("div",{className:"flex mb-5 text-2xl font-bold bg-gray-200"}),(0,a.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-2",children:(0,a.jsx)("div",{className:"",children:(0,a.jsxs)("div",{className:"px-2",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{className:"float-left w-10 mr-3 h-36",children:(0,a.jsx)("div",{className:"flex items-center px-1 py-2 bg-gray-200"})}),(0,a.jsx)("div",{className:"text-lg font-bold leading-7 bg-gray-200"})]}),(0,a.jsx)("div",{className:"flex mt-3 text-xs font-semibold bg-gray-200"})]})})})]}),(0,a.jsxs)("div",{className:"col-span-2",children:[(0,a.jsx)("div",{className:"flex mb-5 text-2xl font-bold bg-gray-200"}),(0,a.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-2",children:(0,a.jsx)("div",{className:"",children:(0,a.jsxs)("div",{className:"px-2",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{className:"float-left w-10 mr-3 h-36",children:(0,a.jsx)("div",{className:"flex items-center px-1 py-2 bg-gray-200"})}),(0,a.jsx)("div",{className:"text-lg font-bold leading-7 bg-gray-200"})]}),(0,a.jsx)("div",{className:"flex mt-3 text-xs font-semibold bg-gray-200"})]})})})]}),(0,a.jsxs)("div",{className:"col-span-2",children:[(0,a.jsx)("div",{className:"flex mb-5 text-2xl font-bold bg-gray-200"}),(0,a.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-2",children:(0,a.jsx)("div",{className:"",children:(0,a.jsxs)("div",{className:"px-2",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{className:"float-left w-10 mr-3 h-36",children:(0,a.jsx)("div",{className:"flex items-center px-1 py-2 bg-gray-200"})}),(0,a.jsx)("div",{className:"text-lg font-bold leading-7 bg-gray-200"})]}),(0,a.jsx)("div",{className:"flex mt-3 text-xs font-semibold bg-gray-200"})]})})})]}),(0,a.jsxs)("div",{className:"col-span-2",children:[(0,a.jsx)("div",{className:"flex mb-5 text-2xl font-bold bg-gray-200"}),(0,a.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-2",children:(0,a.jsx)("div",{className:"",children:(0,a.jsxs)("div",{className:"px-2",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{className:"float-left w-10 mr-3 h-36",children:(0,a.jsx)("div",{className:"flex items-center px-1 py-2 bg-gray-200"})}),(0,a.jsx)("div",{className:"text-lg font-bold leading-7 bg-gray-200"})]}),(0,a.jsx)("div",{className:"flex mt-3 text-xs font-semibold bg-gray-200"})]})})})]}),(0,a.jsx)(d.Z,{})]})]}),(0,a.jsx)(i.Z,{})]})},77854:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return r}});var a=t(57437),l=t(20703),i=t(2265),n=t(30122),d=t(99782);function r(){let[e,s]=(0,i.useState)(0);return(0,a.jsxs)("div",{className:"max-w-5xl mx-auto",children:[(0,a.jsx)("h1",{className:"mx-5 my-12 text-4xl font-bold md:my-5",children:"Tentang Kami"}),(0,a.jsxs)("div",{className:"mx-5 leading-7 text-justify text-gray-600 dark:text-gray-200",children:[(0,a.jsx)(l.default,{src:"/images/img_ttg_kami.jpg",width:950,height:425,alt:"",className:"w-full rounded-md"}),(0,a.jsxs)("div",{className:"my-4",children:["Data"," ",(0,a.jsx)("b",{children:"Asosiasi Penyelenggara Jasa Internet Indonesia (APJII)"})," ","di tahun 2018 menyebutkan ",(0,a.jsx)("b",{children:"171,17"})," juta pengguna internet di Indonesia mencari berita. Beberapa asyik berselancar di dunia teknologi dan otomotif."]}),(0,a.jsx)("p",{className:"my-4",children:"Wajar, gaya hidup masyarakat yang dekat dengan dunia digital membuat mereka, ingin tahu perkembangan teknologi dan otomotif yang selalu berkembang pesat tiap bulannya."}),(0,a.jsx)("p",{className:"my-4",children:"Mulai dari gadget terkini, belanja online, layanan operator seluler, hingga inovasi anyar dari para start-up dicari oleh mereka yang haus informasi. Karena itulah kami hadir. Uzone.id berkomitmen menjadi portal Informasi Teknologi Terkini"}),(0,a.jsxs)("p",{className:"my-4",children:["Kami punya sajian utama soal"," ",(0,a.jsx)("b",{children:"Gadget, Startup, Telco dan Digilife"}),". Ditambah topik seputar mobil dan motor sebagai pelengkap yang tak kalah nikmatnya."]}),(0,a.jsxs)("p",{className:"my-4",children:["Tenang,"," ",(0,a.jsx)("a",{href:"https://uzone.id",children:(0,a.jsx)("strong",{children:"Uzone.id"})})," ","tidak akan membuat tulisan yang teknis, rumit dan bikin pusing tujuh keliling. Nikmati renyahnya berita terbaru atau ulasan terkini dari kami."]}),(0,a.jsxs)("p",{className:"my-4",children:["Jangan harap"," ",(0,a.jsx)("a",{href:"https://uzone.id",children:(0,a.jsx)("strong",{children:"Uzone.id"})})," ","menyajikan click-bait, karena kami menyampaikan fakta sebenarnya, sedikit nakal, tapi tetap kritis."]}),(0,a.jsxs)("p",{className:"my-4",children:["Karena"," ",(0,a.jsx)("a",{href:"https://uzone.id",children:(0,a.jsx)("strong",{children:"Uzone.id"})})," ","adalah Media Informasi Teknologi Terkini!"]}),(0,a.jsx)("p",{className:"my-4 text-lg font-bold",children:"Demografi pembaca Uzone.id"}),(0,a.jsx)("p",{className:"my-4",children:"Berdasarkan data Google Analytics 360, rata-rata traffic Uzone.id pada 2019 ini mencapai 14,7 juta (page view) dengan 3,1 juta pengunjung (unique visitor) 3,1 setiap bulannya"}),(0,a.jsxs)("div",{className:"grid-cols-4 md:grid lg:grid-cols-4",children:[(0,a.jsxs)("div",{className:"grid grid-cols-2 p-2 mx-2 my-2 border border-green-500 rounded-xl",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("p",{className:"font-bold text-[#666666]",children:"Usia 18 - 24"}),(0,a.jsx)("p",{className:"text-3xl font-bold",children:"28 %"})]}),(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/revamp/1.png",className:"mx-auto text-center",alt:"logo",width:60,height:61})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 p-2 mx-2 my-2 border border-blue-500 rounded-xl",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("p",{className:"font-bold text-[#666666]",children:"Usia 25 - 34"}),(0,a.jsx)("p",{className:"text-3xl font-bold",children:"37 %"})]}),(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/revamp/2.png",className:"mx-auto text-center",alt:"logo",width:60,height:61})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 p-2 mx-2 my-2 border border-orange-500 rounded-xl",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("p",{className:"font-bold text-[#666666]",children:"Usia 35 - 44"}),(0,a.jsx)("p",{className:"text-3xl font-bold",children:"15 %"})]}),(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/revamp/3.png",className:"mx-auto text-center",alt:"logo",width:60,height:61})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 p-2 mx-2 my-2 border border-red-500 rounded-xl",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("p",{className:"font-bold text-[#666666]",children:"Usia 45 - 65+"}),(0,a.jsx)("p",{className:"text-3xl font-bold",children:"20 %"})]}),(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/revamp/4.png",className:"mx-auto text-center",alt:"logo",width:60,height:61})]})]}),(0,a.jsx)("p",{className:"my-4 text-lg font-bold",children:"Akses Via"}),(0,a.jsx)("p",{className:"my-4",children:"Platform yang digunakan oleh pengguna untuk membaca berita di Uzone.id. Data diambil berdasarkan Google Analytics 360"}),(0,a.jsxs)("div",{className:"grid-cols-3 p-3 mx-1 border border-green-500 rounded-lg md:grid lg:grid-cols-3",children:[(0,a.jsx)("div",{className:"grid grid-cols-1 p-2 mx-2 my-2",children:(0,a.jsxs)("div",{className:"grid grid-cols-2 md:p-6",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("p",{className:"font-bold text-[#666666]",children:"Mobile Site"}),(0,a.jsx)("p",{className:"text-4xl font-bold",children:"73 %"})]}),(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/revamp/1.png",className:"mx-auto text-center",alt:"logo",width:60,height:61})]})}),(0,a.jsx)("div",{className:"grid grid-cols-1 p-2 mx-2 my-2",children:(0,a.jsxs)("div",{className:"grid grid-cols-2 md:p-6",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("p",{className:"font-bold text-[#666666]",children:"Desktop"}),(0,a.jsx)("p",{className:"text-4xl font-bold",children:"25 %"})]}),(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/revamp/1.png",className:"mx-auto text-center",alt:"logo",width:60,height:61})]})}),(0,a.jsx)("div",{className:"grid grid-cols-1 p-2 mx-2 my-2",children:(0,a.jsxs)("div",{className:"grid grid-cols-2 md:p-6",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("p",{className:"font-bold text-[#666666]",children:"Tablet"}),(0,a.jsx)("p",{className:"text-4xl font-bold",children:"2 %"})]}),(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/revamp/1.png",className:"mx-auto text-center",alt:"logo",width:60,height:61})]})})]}),(0,a.jsx)("p",{className:"my-4 text-lg font-bold",children:"Redaksi"}),(0,a.jsx)("p",{className:"my-4",children:"Platform yang digunakan oleh pengguna untuk membaca berita di Uzone.id. Data diambil berdasarkan Google Analytics 360"}),(0,a.jsx)("div",{className:"w-full p-3 bg-white rounded-md",children:(0,a.jsxs)(n.Z,{activeSlideIndex:e,onRequestChange:s,containerProps:{style:{width:"100%",justifyContent:"space-between",position:"relative"}},swipeTreshold:60,itemsToShow:4,speed:400,centerMode:!0,dotsNav:{show:!0,itemBtnProps:{className:"bg-white"},activeItemBtnProps:{className:"bg-red-500"}},forwardBtnProps:{className:"text-white z-10 p-2 rounded-full right-0 absolute top-1/4 lg:top-[40%] transform -translate-y-1/2",children:(0,a.jsx)("div",{className:"p-2 bg-white rounded-full shadow-lg cursor-pointer",children:(0,a.jsx)(d.Dli,{className:"w-6 h-6 text-black lg"})})},backwardBtnProps:{className:"text-white z-10 p-2 rounded-full left-0 absolute top-1/4 lg:top-[40%] transform -translate-y-1/2",children:(0,a.jsx)("div",{className:"p-2 bg-white rounded-full shadow-lg cursor-pointer",children:(0,a.jsx)(d.bUI,{className:"w-6 h-6 text-black lg"})})},children:[(0,a.jsxs)("div",{className:"w-[320px] p-2 !mx-3 rounded-xl",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/UzoneSementara/foto/faisal.jpg",width:150,height:150,alt:"",className:"object-cover w-16 my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Muhammad Faisal"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Editor Executive"})]})]}),(0,a.jsxs)("div",{className:"flex my-7",children:[(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/UzoneSementara/foto/bagja.jpg",width:150,height:150,alt:"",className:"object-cover w-16 my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Bagja Pratama"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Editorial Auto Spesialist"})]})]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/UzoneSementara/brian.png",width:150,height:150,alt:"",className:"object-cover w-16 my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Brian Priambudi"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Reporter"})]})]})]}),(0,a.jsxs)("div",{className:"w-[320px] p-2 !mx-3 rounded-xl",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/UzoneSementara/tyo.png",width:150,height:150,alt:"",className:"object-cover w-16 my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Susetyo Dwi Prihadi"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Vice Editor in Chief"})]})]}),(0,a.jsxs)("div",{className:"flex my-7",children:[(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/UzoneSementara/foto/vania.jpg",width:150,height:150,alt:"",className:"object-cover w-16 my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Vania Puteri"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Social Media Executive"})]})]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/UzoneSementara/foto/budi.jpg",width:150,height:150,alt:"",className:"object-cover w-16 my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Budi Haryanto"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Social Media Editor"})]})]})]}),(0,a.jsxs)("div",{className:"w-[320px] p-2 !mx-3 rounded-xl",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/UzoneSementara/ajeng.png",width:150,height:150,alt:"",className:"object-cover w-16 my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Brigitta Ajeng"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Social Media Excutive"})]})]}),(0,a.jsxs)("div",{className:"flex my-7",children:[(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/UzoneSementara/foto/vescha.jpg",width:150,height:150,alt:"",className:"object-cover w-16 my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Vescha Permata Sari"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Graphic Designer"})]})]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/UzoneSementara/foto/rizki.jpg",width:150,height:150,alt:"",className:"object-cover w-16 my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Rizki Pramana"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Production Manager"})]})]})]}),(0,a.jsxs)("div",{className:"w-[320px] p-2 !mx-3 rounded-xl",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/UzoneSementara/foto/putri.jpg",width:150,height:150,alt:"",className:"object-cover w-16 my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Adinda Ayu Saskia"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Event Planner"})]})]}),(0,a.jsxs)("div",{className:"flex my-7",children:[(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/UzoneSementara/foto/yudi.jpg",width:150,height:150,alt:"",className:"object-cover w-16 my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Yudi Agustia"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Videographer & Editor"})]})]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/UzoneSementara/rangga.png",width:150,height:150,alt:"",className:"object-cover w-16 my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Rangga Septian"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Videographer & Editor"})]})]})]}),(0,a.jsxs)("div",{className:"w-[320px] p-2 !mx-3 rounded-xl",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/revamp/female.jpg",width:150,height:150,alt:"",className:"object-cover w-16 my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Siti Aisyah Ayya"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Business Development"})]})]}),(0,a.jsxs)("div",{className:"flex my-7",children:[(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/revamp/yosi2.jpg",width:150,height:150,alt:"",className:"object-cover w-16 my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Yosida Bagus Adrianto"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Sales"})]})]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/revamp/jumin.jpg",width:150,height:150,alt:"",className:"object-cover w-16 my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Jumin Tantrikarta"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Manager IT Technologies"})]})]})]}),(0,a.jsxs)("div",{className:"w-[320px] p-2 !mx-3 rounded-xl",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/revamp/male.jpg",width:150,height:150,alt:"",className:"object-cover w-16 my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Hani Andrianto"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Manager Development"})]})]}),(0,a.jsxs)("div",{className:"flex my-7",children:[(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/revamp/jepri.jpg",width:150,height:150,alt:"",className:"object-cover w-16 my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Jepri Trianto"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Backend Developer"})]})]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(l.default,{src:"/images/wahyono.png",width:150,height:150,alt:"",className:"object-cover w-[64px] h-[64px] w-16 my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Wahyono"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Backend Developer"})]})]})]}),(0,a.jsxs)("div",{className:"w-[320px] p-2 !mx-3 rounded-xl",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(l.default,{src:"/images/agengw.jpg",width:150,height:150,alt:"",className:"object-cover w-[64px] h-[64px]  my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Ageng Wicaksono"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Frontend Developer"})]})]}),(0,a.jsxs)("div",{className:"flex my-7",children:[(0,a.jsx)(l.default,{src:"/images/asep.png",width:150,height:150,alt:"",className:"object-cover w-[64px] h-[64px] my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Asep Alazhari"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Frontend Developer"})]})]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(l.default,{src:"/images/nanaros.png",width:150,height:150,alt:"",className:"object-cover w-[64px] h-[64px] my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Nana Rosdiana"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"UI/UX Designer"})]})]})]}),(0,a.jsxs)("div",{className:"w-[320px] p-2 !mx-3 rounded-xl",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/revamp/agung.jpg",width:150,height:150,alt:"",className:"object-cover w-16 my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Agung Juharto"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Growth Hacking Manager"})]})]}),(0,a.jsxs)("div",{className:"flex my-7",children:[(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/revamp/rifqi.jpg",width:150,height:150,alt:"",className:"object-cover w-16 my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Rifqi Alfurqan"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Growth Hacking Ass. M."})]})]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/revamp/sakti.jpg",width:150,height:150,alt:"",className:"object-cover w-16 my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Sakti Ramadhan"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Growth Hacking Specialist"})]})]})]}),(0,a.jsxs)("div",{className:"w-[320px] p-2 !mx-3 rounded-xl",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/UzoneSementara/eno.png",width:150,height:150,alt:"",className:"object-cover w-16 my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Trisno Heriyanto"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Editor in Chief"})]})]}),(0,a.jsxs)("div",{className:"flex my-7",children:[(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/UzoneSementara/foto/hani.jpg",width:150,height:150,alt:"",className:"object-cover w-16 my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Hani Nur Fajrina"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Editor Executive"})]})]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(l.default,{src:"https://cdn4.uzone.id/assets/uploads/UzoneSementara/foto/vina.jpg",width:150,height:150,alt:"",className:"object-cover w-16 my-auto rounded-full justify-self-center"}),(0,a.jsxs)("div",{className:"ml-6",children:[(0,a.jsx)("p",{className:"text-lg font-bold leading-7 text-gray-700",children:"Vina Insyani"}),(0,a.jsx)("p",{className:"text-sm font-bold leading-7 text-[#666]",children:"Reporter"})]})]})]})]})}),(0,a.jsx)("p",{className:"my-4 text-lg font-bold",children:"Our Headquarter"}),(0,a.jsxs)("div",{className:"p-3 mx-1 md:grid-cols-2 md:grid lg:grid-cols-2",children:[(0,a.jsx)("div",{className:"grid-cols-1",children:(0,a.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1391586237237!2d106.84280547569286!3d-6.245385593742947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f389fa8f48af%3A0xf59c2cf745e48a31!2sUzone.id!5e0!3m2!1sid!2sid!4v1707969608127!5m2!1sid!2sid",title:"Uzone.id",className:"w-full mb-5 mr-5 border-0 rounded-lg",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),(0,a.jsx)("div",{className:"grid-cols-1 ml-5",children:(0,a.jsxs)("ul",{className:"max-w-md space-y-1 text-lg text-gray-500 list-disc list-inside dark:text-gray-400",children:[(0,a.jsx)("li",{className:"mb-5",children:"Mulia Business Park Building J, Jl. Letjen M.T. Haryono No.Kav. 58-60, RT.2/RW.2, Pancoran, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12780"}),(0,a.jsx)("li",{className:"mb-5",children:"+62 21 791 87250"}),(0,a.jsx)("li",{className:"mb-5",children:"sales@uzone.id / redaksi@uzone.id"})]})})]})]})]})}}},function(e){e.O(0,[2306,2420,2400,1724,5520,3082,8792,1749,6589,2676,3267,9640,222,977,2971,8069,1744],function(){return e(e.s=61768)}),_N_E=e.O()}]);