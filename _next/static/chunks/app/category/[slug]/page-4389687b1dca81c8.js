(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{65443:function(e,s,l){Promise.resolve().then(l.bind(l,19721)),Promise.resolve().then(l.bind(l,86988)),Promise.resolve().then(l.bind(l,80968)),Promise.resolve().then(l.bind(l,93726)),Promise.resolve().then(l.bind(l,48137))},86988:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return _}});var a=l(57437),t=l(2265),d=l(7849),r=l(10042),i=l(91893),c=l(71299),n=l(84111),o=l(63019);function m(){let[e,s]=t.useState(!0);return(0,a.jsxs)("div",{className:"mx-auto my-auto justify-self-center",children:[o.tq?(0,a.jsx)(n.Ad,{adUnit:"/89929222/Uzone.id_Mobile/Automotive",name:"div-gpt-ad-9862874-2",size:[300,250],refreshTimer:5e3,target:[["Position","MR1"]],eventSlotRenderEnded:e=>s(e.isEmpty)}):(0,a.jsx)(n.Ad,{adUnit:"/89929222/Uzone.id_Desktop/Automotive",name:"div-gpt-ad-2867975-2",size:[300,250],refreshTimer:5e3,target:[["Position","MR1"]],eventSlotRenderEnded:e=>s(e.isEmpty)}),e&&(0,a.jsx)("div",{className:"lg:justify-self-end justify-self-center",children:(0,a.jsx)("div",{className:"text-xs text-gray-400 dark:bg-gray-700 w-[300px] h-[250px] mx-auto bg-gray-300 relative",children:(0,a.jsx)("div",{className:"absolute bottom-0 right-0 p-2",children:"Sponsored"})})})]})}var x=l(68550),g=l(8792),u=l(58873),h=l(49135),j=l(42289),f=l(6856);function p(e){let{slug:s}=e,[l,d]=t.useState({});return t.useEffect(()=>{let e=async()=>{d(await (0,h.Z)("POST","".concat("https://sun.uzone.id/","article/"),{category:[s.charAt(0).toUpperCase()+s.slice(1)],page:"1",limit:"10",title:"Review"}))};""!=s&&e()},[s]),(0,a.jsx)(a.Fragment,{children:(null==l?void 0:l.status)==200?(0,a.jsx)("div",{className:"mx-auto bg-center bg-cover rounded-2xl min-h-130",children:(0,a.jsx)("div",{className:"grid grid-cols-1 py-6 border-t border-b border-gray-200 dark:border-gray-400 lg:grid-cols-3",children:(0,a.jsxs)("div",{className:"col-span-3 border-gray-200 dark:border-gray-400",children:[(0,a.jsxs)("div",{className:"flex mb-5 ml-3 text-2xl font-bold lg:ml-0 dark:text-white",children:[(0,a.jsx)(j.TKY,{className:"w-8 h-8 p-1 mr-3 text-red-600 bg-white rounded-md shadow-md"}),"Review"]}),(0,a.jsx)("div",{className:"grid grid-cols-1 gap-4 lg:grid-cols-2",children:l.data.data.filter((e,s)=>s<6).map(e=>(0,a.jsxs)(g.default,{href:"/".concat(e.slug),className:"grid grid-cols-2 m-3",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("h2",{dangerouslySetInnerHTML:{__html:e.title},className:"text-base font-semibold leading-5 text-gray-700 font-poppins dark:text-gray-200"}),(0,a.jsx)("p",{className:"mt-3 text-xs leading-5 text-gray-700 dark:text-gray-200",children:(0,f.Z)(e.publishDate).fromNow()})]}),(0,a.jsx)(x.Z,{src:e.featureImg,alt:e.title,className:"object-cover h-32 ml-2 rounded-md"})]},e.slug))})]})})}):""})}var y=l(20703),b=l(32313),v=l(52807);function N(e){let{news:s,slug:l}=e,[d,r]=t.useState(!1),[i,c]=t.useState(3),[n,o]=t.useState([]),m=async()=>{c(i+1),r(!0);let{data:e}=await fetch("".concat("https://sun.uzone.id/","article/"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({category:[l.charAt(0).toUpperCase()+l.slice(1)],page:i,limit:10})}).then(e=>e.json()).catch(e=>{});r(!1),o([...n,...e])};return(0,a.jsxs)("div",{className:"p-5 mx-auto my-3 bg-center bg-cover lg:my-0 rounded-2xl min-h-130",children:[(0,a.jsxs)("div",{className:"flex mb-5 text-[18px] lg:text-2xl font-bold text-red-500 dark:text-white",children:[(0,a.jsx)(y.default,{src:"https://cdn4.uzone.id/assets/uploads/revamp/icon/news.png",width:30,height:30,alt:"populer",className:"object-cover w-10 h-10 mr-5"}),"More Articles"]}),(0,a.jsxs)("div",{className:"grid grid-cols-3",children:[(0,a.jsx)("div",{className:"col-span-3 lg:col-span-2 h-full lg:h-[750px] overflow-auto lg:overflow-y-auto",children:s.length>0?(0,a.jsxs)(a.Fragment,{children:[s.filter((e,s)=>s>=5).map(e=>(0,a.jsxs)(g.default,{href:"/".concat(e.slug),className:"grid grid-cols-5 my-6",children:[(0,a.jsx)(y.default,{src:e.featureImg,width:200,height:150,alt:e.title,className:"object-cover w-full h-24 col-span-2 mr-5 rounded-lg lg:h-full lg:col-span-1"}),(0,a.jsxs)("div",{className:"col-span-3 ml-5 lg:col-span-4",children:[(0,a.jsx)("h2",{className:"font-bold leading-6 text-gray-700 text-md lg:text-lg dark:text-gray-200",dangerouslySetInnerHTML:{__html:e.title}}),(0,a.jsxs)("div",{className:"flex mt-3 text-xs font-semibold text-gray-500 dark:text-gray-400",children:[e.category[0]," ",(0,a.jsx)(u.riV,{className:"w-4 h-4"}),(0,f.Z)(e.publishDate).fromNow()]})]})]},e.slug)),n.length>0&&n.map(e=>(0,a.jsxs)(g.default,{href:"/".concat(e.slug),className:"grid grid-cols-5 my-6",children:[(0,a.jsx)(y.default,{src:e.featureImg,width:200,height:150,alt:e.title,className:"object-cover w-full h-24 col-span-2 mr-5 rounded-lg lg:h-full lg:col-span-1"}),(0,a.jsxs)("div",{className:"col-span-3 ml-5 lg:col-span-4",children:[(0,a.jsx)("h2",{className:"font-bold leading-6 text-gray-700 text-md lg:text-lg dark:text-gray-200",dangerouslySetInnerHTML:{__html:e.title}}),(0,a.jsxs)("div",{className:"flex mt-3 text-xs font-semibold text-gray-500 dark:text-gray-400",children:[e.category[0]," ",(0,a.jsx)(u.riV,{className:"w-4 h-4"}),(0,f.Z)(e.publishDate).fromNow()]})]})]},e.slug)),(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(v.ZP,{loading:d,danger:!0,type:"primary",onClick:m,children:"Load More"})})]}):(0,a.jsx)(a.Fragment,{})}),(0,a.jsx)("div",{className:"hidden lg:block",children:(0,a.jsx)(b.Z,{})})]})]})}var w=l(57912),k=l(82579),Z=l(35656),S=l(16330);function _(e){let{news:s,slug:l,isMobile:t}=e;return(0,a.jsxs)("div",{className:"grid grid-cols-1 pt-5 lg:pt-36 lg:grid-cols-7",children:[(0,a.jsx)(d.Z,{}),(0,a.jsxs)("div",{className:"lg:col-span-5 max-w-full lg:max-w-[67rem] mx-auto",children:[(0,a.jsx)(i.Z,{}),s.length>0?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex mt-4 ml-5 text-base lg:ml-0",children:[(0,a.jsx)("div",{className:"my-auto font-semibold",children:"Home"}),(0,a.jsx)("div",{className:"mx-2",children:"/"}),(0,a.jsx)("div",{className:"my-auto font-bold text-red-500 capitalize",children:l})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 mb-6 border-b border-gray-300 lg:grid-cols-3",children:[(0,a.jsx)("div",{className:"col-span-2 px-5 mt-6 lg:mb-0 mb-4 md:px-0 md:my-2.5 lg:mr-3",children:(0,a.jsxs)(g.default,{href:"/".concat(s[0].slug),className:"",children:[(0,a.jsx)(x.Z,{alt:s[0].title,src:s[0].featureImg,className:"object-cover h-[200px] lg:h-[320px] w-full my-auto rounded-md justify-self-center"}),(0,a.jsx)("div",{className:"bottom-0 w-full ",children:(0,a.jsxs)("div",{className:"w-full pt-2 text-base leading-8 bg-transparent rounded-md",children:[(0,a.jsxs)("div",{className:"flex my-auto",children:[(0,Z.Z)(l,"bg-white rounded-md py-1 w-7 h-7 text-sky-600"),(0,a.jsx)("div",{className:"my-auto ml-2 text-xs capitalize",children:l}),(0,a.jsx)(u.riV,{className:"w-7 h-7"}),(0,a.jsx)("div",{className:"my-auto text-xs capitalize",children:(0,f.Z)(s[0].publishDate).fromNow()})]}),(0,a.jsx)("h2",{className:"py-1 font-semibold",dangerouslySetInnerHTML:{__html:s[0].title}})]})})]})}),(0,a.jsx)("div",{className:"hidden my-auto lg:block",children:"automotive"==l?(0,a.jsx)(m,{}):(0,a.jsx)(c.Z,{})})]}),(0,a.jsx)("div",{className:"hidden gap-5 lg:grid-cols-4 lg:grid",children:s.filter((e,s)=>s>0&&s<5).map(e=>(0,a.jsxs)(g.default,{href:"/".concat(e.slug),className:"",children:[(0,a.jsxs)("div",{className:"flex my-2",children:[(0,Z.Z)(l,"bg-white rounded-md py-1 w-6 h-6 text-sky-600"),(0,a.jsx)("div",{className:"left-[26px] top-[1px] text-xs font-medium tracking-wider ml-2",children:e.category[0]}),(0,a.jsx)(u.riV,{className:"w-5 h-5"}),(0,a.jsx)("div",{className:"left-[89px] top-[1px] text-xs font-medium tracking-wider",children:(0,f.Z)(e.publishDate).fromNow()})]}),(0,a.jsx)(x.Z,{className:"w-64 h-36 left-0 top-[30px] rounded",src:e.featureImg,alt:e.title}),(0,a.jsx)("h2",{dangerouslySetInnerHTML:{__html:e.title},className:"w-full leading-6 left-0 top-[190px] text-xs font-semibold tracking-wider"})]},e.title))}),(0,a.jsx)(S.Z,{news:s})]}):(0,a.jsx)(k.ZP,{status:"404",title:"404",subTitle:"Mohon maaf, data tidak ditemukan."}),(0,a.jsx)("div",{className:"mt-5 border-gray-200 border-y-0 lg:border-y dark:border-gray-400",children:(0,a.jsx)(p,{slug:l})}),(0,a.jsx)("div",{className:"mt-5",children:(0,a.jsx)(N,{news:s,slug:l})}),(0,a.jsx)(w.Z,{})]}),(0,a.jsx)(r.Z,{})]})}},57912:function(e,s,l){"use strict";l.d(s,{Z:function(){return c}});var a=l(57437),t=l(2265),d=l(83350),r=l(47754),i=l(4558);function c(){let[e,s]=t.useState("Gadget");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"justify-center hidden px-4 my-5 mt-5 lg:flex",children:(0,a.jsx)(d.ZP,{theme:{components:{Segmented:{itemSelectedBg:"#E41B1B1A",itemSelectedColor:"#E41B1B"}}},children:(0,a.jsx)(r.Z,{size:"large",className:"w-full overflow-x-auto lg:w-auto",options:["Gadget","Startup","Telco","Digilife","Games","Automotive"],defaultValue:"Gadget",onChange:e=>s(e)})})}),(0,a.jsx)(i.Z,{slug:e})]})}},48137:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return m}});var a=l(57437),t=l(7849),d=l(10042),r=l(83803),i=l(22064),c=l(20703),n=l(63019),o=l(32313);function m(){let e=Array.from({length:n.tq?1:4}),s=Array.from({length:7});return(0,a.jsxs)("div",{className:"grid grid-cols-1 mt-0 lg:mt-5 lg:grid-cols-5",children:[(0,a.jsx)(t.Z,{}),(0,a.jsxs)("div",{className:"lg:col-span-5 max-w-full lg:max-w-[67rem] mx-auto",children:[(0,a.jsx)(r.Z,{}),(0,a.jsxs)("div",{className:"flex mt-4 ml-5 text-base",children:[(0,a.jsx)("div",{className:"w-10 h-6 my-auto font-semibold bg-gray-200 rounded-md"}),(0,a.jsx)("div",{className:"mx-2",children:"/"}),(0,a.jsx)("div",{className:"w-24 h-6 my-auto bg-gray-200 rounded-md"})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 mb-6 border-b border-gray-300 lg:grid-cols-3",children:[(0,a.jsx)("div",{className:"col-span-2 px-5 mt-6 lg:mb-0 mb-4 md:my-2.5",children:(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)(c.default,{alt:"skeleton image",src:"/images/uzone-default.webp",className:"object-cover h-[200px] lg:h-[320px] w-full my-auto rounded-md justify-self-center",width:800,height:320}),(0,a.jsx)("div",{className:"bottom-0 w-full",children:(0,a.jsxs)("div",{className:"w-full pt-2 text-base leading-8 bg-transparent rounded-md",children:[(0,a.jsxs)("div",{className:"flex my-auto",children:[(0,a.jsx)("div",{className:"py-1 bg-gray-200 rounded-md w-7 h-7"}),(0,a.jsx)("div",{className:"my-auto ml-2 text-xs capitalize bg-gray-200"}),(0,a.jsx)("div",{className:"w-24 bg-gray-200 rounded-md h-7"}),(0,a.jsx)("div",{className:"my-auto text-xs capitalize bg-gray-200"})]}),(0,a.jsx)("div",{className:"w-3/4 py-1 my-5 font-semibold bg-gray-200 rounded-md lg:w-full"}),(0,a.jsx)("div",{className:"block py-1 my-5 font-semibold bg-gray-200 rounded-md lg:hidden"})]})})]})}),(0,a.jsx)("div",{className:"hidden my-auto lg:block",children:(0,a.jsx)(i.Z,{})})]}),(0,a.jsx)("div",{className:"grid grid-rows-1 gap-5 my-6 lg:grid-cols-4",children:e.map((e,s)=>(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("div",{className:"hidden my-2 lg:flex",children:[(0,a.jsx)("div",{className:"w-6 bg-gray-200"}),(0,a.jsx)("div",{className:"left-[26px] bg-gray-200 top-[1px] text-xs font-medium tracking-wider ml-2"}),(0,a.jsx)("div",{className:"w-5 h-5 bg-gray-200"}),(0,a.jsx)("div",{className:"bg-gray-200 left-[89px] top-[1px] text-xs font-medium tracking-wider"})]}),(0,a.jsx)(c.default,{className:"w-[300px] h-[150px] mx-auto px-5 rounded lg:px-0 lg:w-64 lg:h-36",alt:"skeleton image",src:"/images/uzone-default.webp",width:256,height:144}),(0,a.jsxs)("div",{className:"px-5",children:[(0,a.jsx)("div",{className:"w-1/2 py-1 my-5 font-semibold bg-gray-200 rounded-md lg:full"}),(0,a.jsx)("div",{className:"block w-3/4 py-1 my-5 font-semibold bg-gray-200 rounded-md lg:w-full lg:hidden"}),(0,a.jsx)("div",{className:"block py-1 my-5 font-semibold bg-gray-200 rounded-md lg:hidden"})]}),(0,a.jsx)("div",{className:"w-full leading-6 left-0 top-[190px] text-xs font-semibold tracking-wider"})]},s))}),(0,a.jsxs)("div",{className:"p-5 mx-auto my-3 bg-center bg-cover lg:my-0 rounded-2xl min-h-130",children:[(0,a.jsxs)("div",{className:"flex mb-5 text-[18px] lg:text-2xl font-bold text-red-500 dark:text-white",children:[(0,a.jsx)("div",{className:"w-6 h-6 my-auto mr-4 bg-gray-200 rounded-md"}),(0,a.jsx)("div",{className:"w-24 h-6 my-auto bg-gray-200 rounded-md"})]}),(0,a.jsxs)("div",{className:"grid grid-cols-3",children:[(0,a.jsx)("div",{className:"col-span-3 lg:col-span-2 h-full lg:h-[750px] overflow-auto lg:overflow-y-auto",children:s.map((e,s)=>(0,a.jsxs)("div",{className:"grid grid-cols-5 my-6",children:[(0,a.jsx)(c.default,{src:"/images/uzone-default.webp",width:200,height:150,alt:"skeleton image",className:"object-cover w-full h-24 col-span-2 mr-5 rounded-lg lg:h-full lg:col-span-1"}),(0,a.jsxs)("div",{className:"col-span-3 ml-5 lg:col-span-4",children:[(0,a.jsx)("div",{className:"w-1/2 py-1 my-5 font-semibold bg-gray-200 rounded-md lg:full"}),(0,a.jsx)("div",{className:"block w-3/4 py-1 my-5 font-semibold bg-gray-200 rounded-md lg:w-full lg:hidden"}),(0,a.jsxs)("div",{className:"flex mt-3 text-xs font-semibold text-gray-500 dark:text-gray-400",children:[(0,a.jsx)("div",{className:"w-10 h-6 my-auto font-semibold bg-gray-200 rounded-md"}),(0,a.jsx)("div",{className:"w-24 h-6 my-auto ml-3 bg-gray-200 rounded-md"})]})]})]},s))}),(0,a.jsx)("div",{className:"hidden lg:block",children:(0,a.jsx)(o.Z,{})})]})]})]}),(0,a.jsx)(d.Z,{})]})}}},function(e){e.O(0,[306,420,400,724,520,82,447,190,582,929,712,33,742,250,749,821,256,944,579,754,817,728,971,69,744],function(){return e(e.s=65443)}),_N_E=e.O()}]);