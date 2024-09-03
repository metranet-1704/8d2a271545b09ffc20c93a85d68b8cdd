"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7382],{47754:function(e,t,n){n.d(t,{Z:function(){return j}});var i=n(2265),o=n(16480),r=n.n(o),l=n(14749),a=n(80406),d=n(6787),c=n(50833),s=n(5239),u=n(6976),m=n(44329),f=n(74084),v=n(35704),b=n(3682),h=n(24800),p=function(e){return e?{left:e.offsetLeft,right:e.parentElement.clientWidth-e.clientWidth-e.offsetLeft,width:e.clientWidth}:null},g=function(e){return void 0!==e?"".concat(e,"px"):void 0};function w(e){var t=e.prefixCls,n=e.containerRef,o=e.value,l=e.getValueIndex,d=e.motionName,c=e.onMotionStart,u=e.onMotionEnd,m=e.direction,v=i.useRef(null),w=i.useState(o),S=(0,a.Z)(w,2),y=S[0],x=S[1],E=function(e){var i,o=l(e),r=null===(i=n.current)||void 0===i?void 0:i.querySelectorAll(".".concat(t,"-item"))[o];return(null==r?void 0:r.offsetParent)&&r},C=i.useState(null),k=(0,a.Z)(C,2),I=k[0],M=k[1],O=i.useState(null),$=(0,a.Z)(O,2),L=$[0],R=$[1];(0,h.Z)(function(){if(y!==o){var e=E(y),t=E(o),n=p(e),i=p(t);x(o),M(n),R(i),e&&t?c():u()}},[o]);var T=i.useMemo(function(){return"rtl"===m?g(-(null==I?void 0:I.right)):g(null==I?void 0:I.left)},[m,I]),N=i.useMemo(function(){return"rtl"===m?g(-(null==L?void 0:L.right)):g(null==L?void 0:L.left)},[m,L]);return I&&L?i.createElement(b.ZP,{visible:!0,motionName:d,motionAppear:!0,onAppearStart:function(){return{transform:"translateX(var(--thumb-start-left))",width:"var(--thumb-start-width)"}},onAppearActive:function(){return{transform:"translateX(var(--thumb-active-left))",width:"var(--thumb-active-width)"}},onVisibleChanged:function(){M(null),R(null),u()}},function(e,n){var o=e.className,l=e.style,a=(0,s.Z)((0,s.Z)({},l),{},{"--thumb-start-left":T,"--thumb-start-width":g(null==I?void 0:I.width),"--thumb-active-left":N,"--thumb-active-width":g(null==L?void 0:L.width)}),d={ref:(0,f.sQ)(v,n),style:a,className:r()("".concat(t,"-thumb"),o)};return i.createElement("div",d)}):null}var S=["prefixCls","direction","options","disabled","defaultValue","value","onChange","className","motionName"],y=function(e){var t=e.prefixCls,n=e.className,o=e.disabled,l=e.checked,a=e.label,d=e.title,s=e.value,u=e.onChange;return i.createElement("label",{className:r()(n,(0,c.Z)({},"".concat(t,"-item-disabled"),o))},i.createElement("input",{className:"".concat(t,"-item-input"),type:"radio",disabled:o,checked:l,onChange:function(e){o||u(e,s)}}),i.createElement("div",{className:"".concat(t,"-item-label"),title:d},a))},x=i.forwardRef(function(e,t){var n,o,b=e.prefixCls,h=void 0===b?"rc-segmented":b,p=e.direction,g=e.options,x=void 0===g?[]:g,E=e.disabled,C=e.defaultValue,k=e.value,I=e.onChange,M=e.className,O=e.motionName,$=(0,d.Z)(e,S),L=i.useRef(null),R=i.useMemo(function(){return(0,f.sQ)(L,t)},[L,t]),T=i.useMemo(function(){return x.map(function(e){if("object"===(0,u.Z)(e)&&null!==e){var t=function(e){if(void 0!==e.title)return e.title;if("object"!==(0,u.Z)(e.label)){var t;return null===(t=e.label)||void 0===t?void 0:t.toString()}}(e);return(0,s.Z)((0,s.Z)({},e),{},{title:t})}return{label:null==e?void 0:e.toString(),title:null==e?void 0:e.toString(),value:e}})},[x]),N=(0,m.Z)(null===(n=T[0])||void 0===n?void 0:n.value,{value:k,defaultValue:C}),P=(0,a.Z)(N,2),j=P[0],W=P[1],Z=i.useState(!1),H=(0,a.Z)(Z,2),A=H[0],X=H[1],z=function(e,t){E||(W(t),null==I||I(t))},B=(0,v.Z)($,["children"]);return i.createElement("div",(0,l.Z)({},B,{className:r()(h,(o={},(0,c.Z)(o,"".concat(h,"-rtl"),"rtl"===p),(0,c.Z)(o,"".concat(h,"-disabled"),E),o),void 0===M?"":M),ref:R}),i.createElement("div",{className:"".concat(h,"-group")},i.createElement(w,{prefixCls:h,value:j,containerRef:L,motionName:"".concat(h,"-").concat(void 0===O?"thumb-motion":O),direction:p,getValueIndex:function(e){return T.findIndex(function(t){return t.value===e})},onMotionStart:function(){X(!0)},onMotionEnd:function(){X(!1)}}),T.map(function(e){return i.createElement(y,(0,l.Z)({},e,{key:e.value,prefixCls:h,className:r()(e.className,"".concat(h,"-item"),(0,c.Z)({},"".concat(h,"-item-selected"),e.value===j&&!A)),checked:e.value===j,onChange:z,disabled:!!E||!!e.disabled}))})))}),E=n(57499),C=n(10693),k=n(4553),I=n(11303),M=n(78387),O=n(95317);function $(e,t){return{[`${e}, ${e}:hover, ${e}:focus`]:{color:t.colorTextDisabled,cursor:"not-allowed"}}}function L(e){return{backgroundColor:e.itemSelectedBg,boxShadow:e.boxShadowTertiary}}let R=Object.assign({overflow:"hidden"},I.vS),T=e=>{let{componentCls:t}=e,n=e.calc(e.controlHeight).sub(e.calc(e.trackPadding).mul(2)).equal(),i=e.calc(e.controlHeightLG).sub(e.calc(e.trackPadding).mul(2)).equal(),o=e.calc(e.controlHeightSM).sub(e.calc(e.trackPadding).mul(2)).equal();return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},(0,I.Wf)(e)),{display:"inline-block",padding:e.trackPadding,color:e.itemColor,background:e.trackBg,borderRadius:e.borderRadius,transition:`all ${e.motionDurationMid} ${e.motionEaseInOut}`,[`${t}-group`]:{position:"relative",display:"flex",alignItems:"stretch",justifyItems:"flex-start",width:"100%"},[`&${t}-rtl`]:{direction:"rtl"},[`&${t}-block`]:{display:"flex"},[`&${t}-block ${t}-item`]:{flex:1,minWidth:0},[`${t}-item`]:{position:"relative",textAlign:"center",cursor:"pointer",transition:`color ${e.motionDurationMid} ${e.motionEaseInOut}`,borderRadius:e.borderRadiusSM,transform:"translateZ(0)","&-selected":Object.assign(Object.assign({},L(e)),{color:e.itemSelectedColor}),"&::after":{content:'""',position:"absolute",zIndex:-1,width:"100%",height:"100%",top:0,insetInlineStart:0,borderRadius:"inherit",transition:`background-color ${e.motionDurationMid}`,pointerEvents:"none"},[`&:hover:not(${t}-item-selected):not(${t}-item-disabled)`]:{color:e.itemHoverColor,"&::after":{backgroundColor:e.itemHoverBg}},[`&:active:not(${t}-item-selected):not(${t}-item-disabled)`]:{color:e.itemHoverColor,"&::after":{backgroundColor:e.itemActiveBg}},"&-label":Object.assign({minHeight:n,lineHeight:(0,k.bf)(n),padding:`0 ${(0,k.bf)(e.segmentedPaddingHorizontal)}`},R),"&-icon + *":{marginInlineStart:e.calc(e.marginSM).div(2).equal()},"&-input":{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:0,height:0,opacity:0,pointerEvents:"none"}},[`${t}-thumb`]:Object.assign(Object.assign({},L(e)),{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:0,height:"100%",padding:`${(0,k.bf)(e.paddingXXS)} 0`,borderRadius:e.borderRadiusSM,[`& ~ ${t}-item:not(${t}-item-selected):not(${t}-item-disabled)::after`]:{backgroundColor:"transparent"}}),[`&${t}-lg`]:{borderRadius:e.borderRadiusLG,[`${t}-item-label`]:{minHeight:i,lineHeight:(0,k.bf)(i),padding:`0 ${(0,k.bf)(e.segmentedPaddingHorizontal)}`,fontSize:e.fontSizeLG},[`${t}-item, ${t}-thumb`]:{borderRadius:e.borderRadius}},[`&${t}-sm`]:{borderRadius:e.borderRadiusSM,[`${t}-item-label`]:{minHeight:o,lineHeight:(0,k.bf)(o),padding:`0 ${(0,k.bf)(e.segmentedPaddingHorizontalSM)}`},[`${t}-item, ${t}-thumb`]:{borderRadius:e.borderRadiusXS}}}),$(`&-disabled ${t}-item`,e)),$(`${t}-item-disabled`,e)),{[`${t}-thumb-motion-appear-active`]:{transition:`transform ${e.motionDurationSlow} ${e.motionEaseInOut}, width ${e.motionDurationSlow} ${e.motionEaseInOut}`,willChange:"transform, width"}})}};var N=(0,M.I$)("Segmented",e=>{let{lineWidth:t,calc:n}=e;return[T((0,O.IX)(e,{segmentedPaddingHorizontal:n(e.controlPaddingHorizontal).sub(t).equal(),segmentedPaddingHorizontalSM:n(e.controlPaddingHorizontalSM).sub(t).equal()}))]},e=>{let{colorTextLabel:t,colorText:n,colorFillSecondary:i,colorBgElevated:o,colorFill:r,lineWidthBold:l,colorBgLayout:a}=e;return{trackPadding:l,trackBg:a,itemColor:t,itemHoverColor:n,itemHoverBg:i,itemSelectedBg:o,itemActiveBg:r,itemSelectedColor:n}}),P=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]]);return n},j=i.forwardRef((e,t)=>{let{prefixCls:n,className:o,rootClassName:l,block:a,options:d=[],size:c="middle",style:s}=e,u=P(e,["prefixCls","className","rootClassName","block","options","size","style"]),{getPrefixCls:m,direction:f,segmented:v}=i.useContext(E.E_),b=m("segmented",n),[h,p,g]=N(b),w=(0,C.Z)(c),S=i.useMemo(()=>d.map(e=>{if("object"==typeof e&&(null==e?void 0:e.icon)){let{icon:t,label:n}=e;return Object.assign(Object.assign({},P(e,["icon","label"])),{label:i.createElement(i.Fragment,null,i.createElement("span",{className:"".concat(b,"-item-icon")},t),n&&i.createElement("span",null,n))})}return e}),[d,b]),y=r()(o,l,null==v?void 0:v.className,{["".concat(b,"-block")]:a,["".concat(b,"-sm")]:"small"===w,["".concat(b,"-lg")]:"large"===w},p,g),k=Object.assign(Object.assign({},null==v?void 0:v.style),s);return h(i.createElement(x,Object.assign({},u,{className:y,style:k,options:S,ref:t,prefixCls:b,direction:f})))})},30122:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(2265),o=function(){return(o=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function r(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n}function l(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var i,o,r=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(i=r.next()).done;)l.push(i.value)}catch(e){o={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return l}function a(e,t,n){if(n||2==arguments.length)for(var i,o=0,r=t.length;o<r;o++)!i&&o in t||(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o]);return e.concat(i||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var d=(0,i.memo)(function(e){var t,n,d=e.responsiveProps,c=r(e,["responsiveProps"]),s=l((0,i.useState)(0),2),u=s[0],m=s[1],f=l((0,i.useState)(c.activeSlideIndex),2),v=f[0],b=f[1],h=(0,i.useRef)(null),p=(0,i.useRef)(null),g=(0,i.useRef)(null),w=(0,i.useRef)(!1),S=(0,i.useRef)(0),y=(0,i.useRef)(!1),x=(0,i.useRef)(""),E=(0,i.useRef)(null),C=(0,i.useRef)(null),k=(0,i.useRef)(0),I=(0,i.useRef)(v),M=(void 0===d?[]:d).reduce(function(e,t){void 0===t&&(t={});var n=t.minWidth,i=t.maxWidth,l=void 0===i?null:i,a=r(t,["minWidth","maxWidth"]);return u>(void 0===n?0:n)&&(!l||u<=l)?o(o({},e),a):e},c),O=i.Children.toArray(M.children),$=u?o(o({},M),{activeSlideIndex:Math.max(0,Math.min(M.activeSlideIndex,O.length-1)),itemsToShow:Math.min(O.length,M.itemsToShow||0),itemsToScroll:Math.min(O.length,M.itemsToScroll||1)}):c,L=$.containerProps,R=void 0===L?{}:L,T=R.style,N=r(R,["style"]),P=$.innerProps,j=void 0===P?{}:P,W=j.style,Z=r(j,["style"]),H=$.itemsListProps,A=void 0===H?{}:H,X=A.style,z=A.onTransitionEnd,B=void 0===z?void 0:z,V=r(A,["style","onTransitionEnd"]),F=$.backwardBtnProps,D=void 0===F?{}:F,q=D.children,_=D.show,G=r(D,["children","show"]),Q=$.forwardBtnProps,J=void 0===Q?{}:Q,K=J.children,U=J.show,Y=r(J,["children","show"]),ee=$.activeSlideProps,et=void 0===ee?{}:ee,en=et.className,ei=void 0===en?"":en,eo=et.style,er=void 0===eo?{}:eo,el=r(et,["className","style"]),ea=$.visibleSlideProps,ed=void 0===ea?{}:ea,ec=ed.className,es=void 0===ec?"":ec,eu=ed.style,em=void 0===eu?{}:eu,ef=r(ed,["className","style"]),ev=$.updateOnItemClick,eb=void 0!==ev&&ev,eh=$.activeSlideIndex,ep=$.onRequestChange,eg=$.speed,ew=void 0===eg?0:eg,eS=$.delay,ey=void 0===eS?0:eS,ex=$.easing,eE=void 0===ex?"linear":ex,eC=$.itemsToShow,ek=void 0===eC?0:eC,eI=$.itemsToScroll,eM=void 0===eI?1:eI,eO=$.children,e$=$.onAfterChange,eL=$.autoplay,eR=void 0!==eL&&eL,eT=$.autoplayDirection,eN=void 0===eT?"forward":eT,eP=$.disableNavIfAllVisible,ej=$.hideNavIfAllVisible,eW=$.centerMode,eZ=void 0!==eW&&eW,eH=$.infinite,eA=void 0===eH||eH,eX=$.disableNavIfEdgeVisible,ez=void 0===eX||eX,eB=$.disableNavIfEdgeActive,eV=void 0===eB||eB,eF=$.dotsNav,eD=$.persistentChangeCallbacks,eq=void 0!==eD&&eD,e_=$.autoplayDelay,eG=void 0===e_?0:e_,eQ=$.preventScrollOnSwipe,eJ=$.disableSwipeByMouse,eK=void 0!==eJ&&eJ,eU=$.disableSwipeByTouch,eY=void 0!==eU&&eU,e0=$.touchSwipeTreshold,e1=$.mouseSwipeTreshold,e2=$.swipeTreshold,e3=$.touchSwipeRatio,e4=$.mouseSwipeRatio,e7=$.swipeRatio,e5=void 0===e7?1:e7,e8=$.dirRTL,e6=void 0!==e8&&e8,e9=(void 0===eF?{}:eF)||{},te=e9.show,tt=e9.containerProps,tn=e9.itemBtnProps,ti=void 0===tn?{}:tn,to=e9.activeItemBtnProps,tr=void 0===to?{}:to,tl=i.Children.count(eO)-1,ta=!!u&&(null===(t=p.current)||void 0===t?void 0:t.offsetWidth)>=(null===(n=g.current)||void 0===n?void 0:n.offsetWidth),td=(void 0===ej||ej)&&ta,tc=(void 0===eP||eP)&&ta,ts=eh-v!=0&&(ew||ey)?"transform ".concat(ew,"ms ").concat(eE," ").concat(ey,"ms"):"none",tu=(0,i.useCallback)(function(e){var t,n=e.correctionSlideIndex,i=e.prevCorrectionSlideIndex,o=e.curActiveSlideIndex,r=g.current.offsetWidth,d=g.current.children,c=d.length,s=eA?a([],l(d),!1).slice(c/3-i,c/3-i+c/3):a([],l(d),!1),u=null===(t=s[o])||void 0===t?void 0:t.offsetWidth,m=ek?s.reduce(function(e,t,n){return n>=o&&n<o+ek||n<o&&n<o+ek-s.length?e+t.offsetWidth:e},0):p.current.offsetWidth,f=Math.min(m,p.current.offsetWidth),v=r-f,b=eZ&&eA?-(f-u)/2:0,h=eA?r/3:0,w=n-o==0?0:"forward"===x.current&&o<n?h:"backward"===x.current&&o>n?-h:0,S=o-n!=0,y=function(e){var t=s.reduce(function(t,n,i){return i>=e?t:t+(n.offsetWidth||0)},0);return eA?t:Math.min(v,t)},E=S&&eA?y(n):0,C=S||!eA?y(o):0,k=tc?0:C-E+b+w+h,I="translateX(".concat(e6?"":"-").concat(k,"px)"),M=eA?h+b:Math.min(v,s.reduce(function(e,t,n){return n<o?e+t.offsetWidth:e},0)),O=M+f,$=s.map(function(e,t){return{slideIndex:t,htmlElement:e}}),L=(eA?a(a(a(a([],l(s.slice(o).map(function(e,t){return{slideIndex:t+o,htmlElement:e}})),!1),l($),!1),l($),!1),l(s.slice(0,o).map(function(e,t){return{slideIndex:t,htmlElement:e}})),!1):$).reduce(function(e,t){var n=t.slideIndex,i=t.htmlElement.offsetWidth;return(e.summ>=M&&e.summ<O||e.summ+i>M&&e.summ+i<=O)&&e.items.push({slideIndex:n,isFullyVisible:e.summ+i<=O&&e.summ>=M}),e.summ+=i,e},{summ:0,items:[]}),R=!!L.items.find(function(e){return 0===e.slideIndex}),T=!!L.items.find(function(e){return e.slideIndex===s.length-1});return{slidesHTMLElements:s,innerMaxWidth:m,itemsListMaxTranslateX:v,activeSlideWidth:u,offsetCorrectionForCenterMode:b,offsetCorrectionForInfiniteMode:h,itemsListTranslateX:k,itemsListTransform:I,visibleSlides:L.items,isFirstSlideVisible:R,isLastSlideVisible:T}},[eZ,tc,eA,ek,e6]),tm=u?tu({prevCorrectionSlideIndex:I.current,curActiveSlideIndex:eh,correctionSlideIndex:v}):{},tf=tm.innerMaxWidth,tv=void 0===tf?0:tf,tb=tm.itemsListMaxTranslateX,th=void 0===tb?0:tb,tp=tm.activeSlideWidth,tg=void 0===tp?0:tp,tw=tm.offsetCorrectionForCenterMode,tS=void 0===tw?0:tw,ty=tm.offsetCorrectionForInfiniteMode,tx=void 0===ty?0:ty,tE=tm.itemsListTranslateX,tC=void 0===tE?0:tE,tk=tm.itemsListTransform,tI=void 0===tk?"none":tk,tM=tm.visibleSlides,tO=void 0===tM?[]:tM,t$=(0,i.useCallback)(function(e){var t;return"forward"===e?(t=eh+eM)>tl?eA?t-tl-1:tl:t:"backward"===e?(t=eh-eM)<0?eA?tl+1+t:0:t:eh},[eh,eM,tl,eA]),tL=(0,i.useCallback)(function(e,t){var n;if(x.current=t,g.current.style.transition=ew||ey?"transform ".concat(ew,"ms ").concat(eE," ").concat(ey,"ms"):"none",e!==eh||eq){clearTimeout(E.current);var i=tu({correctionSlideIndex:v,prevCorrectionSlideIndex:v,curActiveSlideIndex:e}),o=i.visibleSlides,r=i.isFirstSlideVisible,l=i.isLastSlideVisible,a=i.itemsListTransform;e!==eh&&(null===(n=g.current)||void 0===n?void 0:n.style.transform)===a&&(w.current=!0),g.current.style.transform=a,ep(e,{visibleSlides:o,isFirstSlideVisible:r,isLastSlideVisible:l})}else g.current.style.transform="translateX(".concat(e6?"":"-").concat(tS+tx+(eA?0:tC),"px)")},[eq,eh,tS,ey,eE,ew,ep,tx,eA,tC,v,tu,e6]),tR=(0,i.useCallback)(function(){eR&&(clearTimeout(E.current),E.current=setTimeout(function(){tL(t$(eN),eN)},eG||ey))},[eR,eN,eG,tL,t$,ey]),tT=(0,i.useCallback)(function(){tL(t$("backward"),"backward")},[tL,t$]),tN=(0,i.useCallback)(function(e){b(eh),B&&B(e)},[eh,B]),tP=(0,i.useCallback)(function(){tL(t$("forward"),"forward")},[tL,t$]),tj=function(e,t,n){return e.map(function(e,i){var l,a,d,c,s=e.props,u=void 0===s?{}:s,m=u.className,f=u.onClick,v=void 0===f?null:f,b=u.style,h=r(u,["className","onClick","style"]),p=r(e,["props"]),g=eA?k.current>=O.length?"forward":"backward":i>=eh?"forward":"backward",w=i+t===eh,S=tO.find(function(e){return e.slideIndex===i+t}),y="".concat(void 0===m?"":m," ").concat(w?ei:""," ").concat(S?es:"").trim()||void 0,x=o(o(o(o({},void 0===b?{}:b),S?em:{}),w?er:{}),{boxSizing:"border-box",margin:0}),E=!n&&eb?(a=(l={direction:g,index:i+t,onClick:v}).direction,d=l.index,c=l.onClick,function(e){tL(d,a||(eh<d?"forward":"")||(eh>d?"backward":"")),c&&c(e)}):v,C=o(o(o({role:"tabpanel",className:y,style:x,onClick:E},h),S?ef:{}),w?el:{});return k.current+=1,o({props:C},p)})};return(0,i.useEffect)(function(){var e=g.current;function t(e){e.preventDefault(),e.stopPropagation()}function n(e){y.current=!0;var t,n,i=!!(null===(t=e.touches)||void 0===t?void 0:t[0]),o=i?null===(n=e.touches)||void 0===n?void 0:n[0].clientX:e.clientX,r=(S.current-o)*((i?e3:e4)||e5)+tS+tx+(eA?0:tC),l=g.current.offsetWidth;g.current.style.transition="none",g.current.style.transform="translateX(".concat((e6?-1:1)*Math.max(-r,-l),"px)")}function i(e){var o,r,l;if(document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",i),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",i),y.current){null===(o=e.target)||void 0===o||o.addEventListener("click",t);var a=!!(null===(r=e.changedTouches)||void 0===r?void 0:r[0]),d=a?e.changedTouches[e.changedTouches.length-1].clientX:e.clientX,c=(S.current-d)*((a?e3:e4)||e5),s=(a?e0:e1)||e2||tg/2,u=c>s?{index:t$("forward"),direction:"forward"}:c<-s?{index:t$("backward"),direction:"backward"}:{index:eh,direction:"forward"};tL(u.index,u.direction)}else null===(l=e.target)||void 0===l||l.removeEventListener("click",t);S.current=0,y.current=!1}function o(e){clearTimeout(E.current);var t,o,r=!!(null===(t=e.touches)||void 0===t?void 0:t[0]);S.current=r?null===(o=e.touches)||void 0===o?void 0:o[0].clientX:e.clientX,r?(document.addEventListener("touchmove",n),document.addEventListener("touchend",i)):(document.addEventListener("mousemove",n),document.addEventListener("mouseup",i))}return tc||(eK||null==e||e.addEventListener("mousedown",o),eY||null==e||e.addEventListener("touchstart",o,{passive:!0}),eK&&eY||null==e||e.addEventListener("dragstart",i)),function(){y.current=!1,S.current=0,null==e||e.removeEventListener("mousedown",o),null==e||e.removeEventListener("touchstart",o),null==e||e.removeEventListener("dragstart",i),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",i),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",i)}},[eA,tC,tI,tS,tx,eh,tg,t$,tL,tc,eK,eY,e0,e1,e2,e3,e4,e5,e6]),(0,i.useEffect)(function(){return eh!==v?(ew||ey)&&!w.current||(w.current=!1,b(eh)):(e$&&e$(eh,v),(eA||"forward"===eN&&eh!==tl||"backward"===eN&&0!==eh)&&tR()),function(){clearTimeout(E.current)}},[v,eh,e$,ew,ey,tR,eA,tl,eN]),(0,i.useEffect)(function(){return u&&tR(),function(){clearTimeout(E.current)}},[u]),(0,i.useEffect)(function(){function e(){clearTimeout(C.current),clearTimeout(E.current),C.current=setTimeout(function(){u!==window.innerWidth&&m(0)},400)}return u!==window.innerWidth&&m(window.innerWidth),window.addEventListener("resize",e),function(){clearTimeout(C.current),window.removeEventListener("resize",e)}},[u]),k.current=0,I.current=v,i.createElement("div",o({style:o({display:"flex",flexFlow:"row wrap",boxSizing:"border-box",justifyContent:"center",width:"100%"},void 0===T?{}:T)},N,{ref:h}),(void 0===_||_)&&!td&&i.createElement("button",o({},G,{type:"button",onClick:(0===tC&&ez||0===eh&&eV)&&!eA?void 0:tT,disabled:"boolean"==typeof G.disabled?G.disabled:!(!(0===tC&&ez||0===eh&&eV)||eA)}),void 0===q?null:q),i.createElement("div",o({},Z,{style:o(o({width:"100%"},void 0===W?{}:W),{display:"flex",boxSizing:"border-box",flexFlow:"row wrap",padding:"0",overflow:"hidden",maxWidth:tv?"".concat(tv,"px"):void 0,flex:tv?void 0:"1 0 auto"}),ref:p}),i.createElement("div",o({},V,{style:o(o({},void 0===X?{}:X),{display:"flex",boxSizing:"border-box",outline:"none",transition:ts,transform:tI,touchAction:void 0!==eQ&&eQ?"none":"auto"}),onTransitionEnd:ew||ey?tN:B,tabIndex:-1,role:"presentation",ref:g}),eA&&tj(O.slice(v),v,tc),tj(O,0,tc),eA&&tj(O,0,tc),eA&&tj(O.slice(0,v),0,tc))),(void 0===U||U)&&!td&&i.createElement("button",o({},Y,{type:"button",onClick:(tC===th&&ez||eh===tl&&eV)&&!eA?void 0:tP,disabled:"boolean"==typeof Y.disabled?Y.disabled:!(!(tC===th&&ez||eh===tl&&eV)||eA)}),void 0===K?null:K),!!(void 0!==te&&te)&&i.createElement("div",o({style:{width:"100%",display:"flex",justifyContent:"center"}},void 0===tt?{}:tt),Array.from({length:Math.ceil(O.length/eM)}).map(function(e,t){return i.createElement("button",o({type:"button",key:t,title:"".concat(t)},ti,eh>=t*eM&&eh<Math.min(eM*(t+1),tl+1)?tr:{},{onClick:function(){tL(Math.min(t*eM,O.length-1),Math.min(t*eM,O.length-1)>eh?"forward":"backward")}}))})))})}}]);