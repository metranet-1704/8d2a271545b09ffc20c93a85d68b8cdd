(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[498],{91129:function(e,s,l){Promise.resolve().then(l.bind(l,19721)),Promise.resolve().then(l.bind(l,80968)),Promise.resolve().then(l.bind(l,93726)),Promise.resolve().then(l.bind(l,48137)),Promise.resolve().then(l.bind(l,97337))},57912:function(e,s,l){"use strict";l.d(s,{Z:function(){return d}});var a=l(57437),t=l(2265),i=l(83350),c=l(47754),r=l(4558);function d(){let[e,s]=t.useState("Gadget");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"justify-center hidden px-4 my-5 mt-5 lg:flex",children:(0,a.jsx)(i.ZP,{theme:{components:{Segmented:{itemSelectedBg:"#E41B1B1A",itemSelectedColor:"#E41B1B"}}},children:(0,a.jsx)(c.Z,{size:"large",className:"w-full overflow-x-auto lg:w-auto",options:["Gadget","Startup","Telco","Digilife","Games","Automotive"],defaultValue:"Gadget",onChange:e=>s(e)})})}),(0,a.jsx)(r.Z,{slug:e})]})}},97337:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return w}});var a=l(57437),t=l(2265),i=l(7849),c=l(10042),r=l(22064),d=l(68550),n=l(8792),x=l(58873),m=l(20703),o=l(6856);function u(e){let{news:s}=e;return(0,a.jsxs)("div",{className:"px-5 mx-auto mb-10 bg-center bg-cover rounded-2xl min-h-130",children:[(0,a.jsxs)("div",{className:"flex mb-5 text-2xl font-bold text-red-500 dark:text-white",children:[(0,a.jsx)(m.default,{src:"https://cdn4.uzone.id/assets/uploads/revamp/icon/news.png",width:30,height:30,alt:"populer",className:"object-cover w-10 h-10 mr-5"}),"More Article"]}),(0,a.jsx)("div",{className:"grid grid-cols-3",children:(0,a.jsx)("div",{className:"col-span-3 lg:col-span-3 h-[800px] overflow-y-auto pr-5",children:(null==s?void 0:s.length)>0?s.filter((e,s)=>s>=5).map(e=>(0,a.jsxs)(n.default,{href:"/".concat(e.slug),className:"grid grid-cols-5 my-6",children:[(0,a.jsx)(m.default,{src:e.featureImg,width:200,height:150,alt:e.title,className:"object-cover w-full h-24 col-span-2 mr-5 rounded-lg lg:h-full lg:col-span-1"}),(0,a.jsxs)("div",{className:"col-span-3 ml-5 lg:col-span-4",children:[(0,a.jsx)("h2",{className:"font-bold leading-7 text-gray-700 text-md lg:text-lg dark:text-gray-200",children:e.title}),(0,a.jsxs)("div",{className:"flex mt-3 text-xs font-semibold text-gray-500 dark:text-gray-400",children:[e.category[0]," ",(0,a.jsx)(x.riV,{className:"w-4 h-4"}),(0,o.Z)(e.publishDate).fromNow()]})]})]},e.id)):""})})]})}var g=l(57912),h=l(49135),j=l(38203),f=l(10534),p=l(82579),v=l(95437);function N(){let[e,s]=t.useState({});return t.useEffect(()=>{(async()=>{s(await (0,h.Z)("GET","".concat("https://sun.uzone.id/","trending/"),{}))})()},[]),(0,a.jsxs)("ul",{className:"mx-2 mt-5 mb-10 font-semibold leading-6 tracking-tighter text-gray-600 dark:text-white mr-[-20px]",children:[(0,a.jsxs)("div",{className:"flex my-4",children:[(0,a.jsx)(v.HLD,{className:"w-5 h-5 my-auto text-orange-600"}),(0,a.jsxs)("div",{className:"mx-2 my-auto whitespace-nowrap",children:["Trending Saat Ini:"," "]})]}),(0,a.jsx)("div",{className:"flex flex-wrap items-start justify-start w-full overflow-x-auto max-w-auto lg:max-w-5xl ronded-lg dark:from-gray-700 dark:to-gray-800 bg-gradient-to-r to-gray-100 from-white",children:e.status?e.data.data.map(e=>(0,a.jsx)(n.default,{href:"/tag/".concat(e.slug),className:"flex p-1 rounded-md cursor-pointer",children:(0,a.jsx)("div",{className:"h-9 px-4 py-2 bg-white rounded-full border border-neutral-200 justify-start items-start gap-2.5 inline-flex hover:bg-gray-100 hover:text-blue-700",children:(0,a.jsx)("h2",{className:"text-xs leading-snug text-stone-500 whitespace-nowrap",children:e.title})})},e.title)):(0,a.jsxs)("div",{className:"flex flex-wrap",children:[(0,a.jsx)(f.Z.Input,{active:!0,size:"default",rootClassName:"w-10",className:"mx-4"}),(0,a.jsx)(f.Z.Input,{active:!0,size:"default",block:!0,className:"mx-4"}),(0,a.jsx)(f.Z.Input,{active:!0,size:"default",block:!0,rootClassName:"w-7",className:"mx-4"}),(0,a.jsx)(f.Z.Input,{active:!0,size:"default",block:!0,className:"mx-4"})]})})]})}function w(){let[e,s]=t.useState(148),[l,m]=t.useState({}),[v,w]=t.useState(""),[b,y]=t.useState(0),Z=t.useRef(null),{Search:k}=j.default,I=async e=>{s(100),w(e);let l=await (0,h.Z)("POST","".concat("https://sun.uzone.id/","article/"),{title:e,page:1,limit:25});s(l.status),m(l.data.data),y(l.data.total_article)};return(t.useEffect(()=>{var e;null===(e=Z.current)||void 0===e||e.focus()},[]),100==e)?(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-7",children:[(0,a.jsx)(i.Z,{}),(0,a.jsxs)("div",{className:"lg:col-span-5",children:[(0,a.jsx)("div",{className:"mx-5 mt-8",children:(0,a.jsx)(k,{placeholder:"cari sesuatu...",onSearch:I,enterButton:!0,size:"large",ref:Z})}),(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3",children:[(0,a.jsx)("div",{className:"col-span-2 px-5 mt-6",children:(0,a.jsxs)("div",{className:"grid grid-rows-1 lg:grid-cols-4",children:[(0,a.jsx)("div",{className:"w-full col-span-3 bg-gray-200 h-[300px] lg:h-[250px] rounded-xl"}),(0,a.jsxs)("div",{className:"ml-3 ",children:[(0,a.jsxs)("div",{className:"flex my-3",children:[(0,a.jsx)(f.Z.Avatar,{active:!0,shape:"circle"}),(0,a.jsx)(f.Z.Button,{className:"ml-1",active:!0})]}),(0,a.jsxs)("div",{className:"my-4 text-lg font-bold",children:[(0,a.jsx)(f.Z.Input,{active:!0}),(0,a.jsx)(f.Z.Button,{active:!0,className:"my-2"}),(0,a.jsx)(f.Z.Input,{active:!0})]})]})]})}),(0,a.jsx)("div",{className:"hidden my-4 border-l border-gray-200 lg:block",children:(0,a.jsx)(r.Z,{})})]}),(0,a.jsxs)("div",{className:"hidden gap-5 lg:grid-cols-4 lg:grid",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("div",{className:"flex my-2",children:[(0,a.jsx)(f.Z.Avatar,{active:!0,shape:"circle"}),(0,a.jsx)(f.Z.Input,{className:"ml-1",active:!0})]}),(0,a.jsx)("div",{className:"w-full h-full lg:h-[150px] col-span-3 bg-gray-200 rounded-xl"}),(0,a.jsx)("div",{className:"w-full leading-6 left-0 top-[190px] text-xs font-semibold tracking-wider",children:(0,a.jsx)(f.Z.Input,{className:"my-2",active:!0,block:!0})})]}),(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("div",{className:"flex my-2",children:[(0,a.jsx)(f.Z.Avatar,{active:!0,shape:"circle"}),(0,a.jsx)(f.Z.Input,{className:"ml-1",active:!0})]}),(0,a.jsx)("div",{className:"w-full h-full lg:h-[150px] col-span-3 bg-gray-200 rounded-xl"}),(0,a.jsx)("div",{className:"w-full leading-6 left-0 top-[190px] text-xs font-semibold tracking-wider",children:(0,a.jsx)(f.Z.Input,{className:"my-2",active:!0,block:!0})})]}),(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("div",{className:"flex my-2",children:[(0,a.jsx)(f.Z.Avatar,{active:!0,shape:"circle"}),(0,a.jsx)(f.Z.Input,{className:"ml-1",active:!0})]}),(0,a.jsx)("div",{className:"w-full h-full lg:h-[150px] col-span-3 bg-gray-200 rounded-xl"}),(0,a.jsx)("div",{className:"w-full leading-6 left-0 top-[190px] text-xs font-semibold tracking-wider",children:(0,a.jsx)(f.Z.Input,{className:"my-2",active:!0,block:!0})})]}),(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("div",{className:"flex my-2",children:[(0,a.jsx)(f.Z.Avatar,{active:!0,shape:"circle"}),(0,a.jsx)(f.Z.Input,{className:"ml-1",active:!0})]}),(0,a.jsx)("div",{className:"w-full h-full lg:h-[150px] col-span-3 bg-gray-200 rounded-xl"}),(0,a.jsx)("div",{className:"w-full leading-6 left-0 top-[190px] text-xs font-semibold tracking-wider",children:(0,a.jsx)(f.Z.Input,{className:"my-2",active:!0,block:!0})})]})]})]}),(0,a.jsx)(c.Z,{})]}):148===e?(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-7",children:[(0,a.jsx)(i.Z,{}),(0,a.jsxs)("div",{className:"lg:col-span-5",children:[(0,a.jsx)("div",{className:"mx-5 mt-8",children:(0,a.jsx)(k,{placeholder:"cari sesuatu...",onSearch:I,enterButton:!0,size:"large",ref:Z})}),(0,a.jsx)("div",{className:"mt-5 ",children:(0,a.jsx)(N,{})})]}),(0,a.jsx)(c.Z,{})]}):(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-7",children:[(0,a.jsx)(i.Z,{}),(0,a.jsxs)("div",{className:"lg:col-span-5",children:[(0,a.jsx)("div",{className:"mx-5 mt-8",children:(0,a.jsx)(k,{placeholder:"cari sesuatu...",onSearch:I,enterButton:!0,size:"large",ref:Z})}),200==e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"px-5 my-6 font-bold",children:["Menampilkan ",b," berita dalam pencarian",(0,a.jsxs)("span",{className:"ml-1 text-red-500",children:['"',v,'"']})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3",children:[(0,a.jsx)("div",{className:"col-span-2 px-5 my-6",children:(0,a.jsxs)(n.default,{href:"/".concat(l[0].slug),className:"grid grid-rows-1 lg:grid-cols-4",children:[(0,a.jsx)(d.Z,{src:l[0].featureImg,alt:"gadget",className:"col-span-3 rounded-xl"}),(0,a.jsxs)("div",{className:"ml-3 ",children:[(0,a.jsx)("div",{className:"flex my-3",children:(0,a.jsx)("div",{className:"my-auto",children:l[0].category[0]})}),(0,a.jsx)("h2",{dangerouslySetInnerHTML:{__html:l[0].title},className:"my-4 text-lg font-bold"})]})]})}),(0,a.jsx)("div",{className:"hidden my-4 border-l border-gray-200 lg:block",children:(0,a.jsx)(r.Z,{})})]}),(0,a.jsx)("div",{className:"hidden gap-5 lg:grid-cols-4 lg:grid",children:l.filter((e,s)=>s>0&&s<5).map(e=>(0,a.jsxs)(n.default,{href:"/".concat(e.slug),className:"",children:[(0,a.jsxs)("div",{className:"flex my-2",children:[(0,a.jsx)("div",{className:"left-[26px] top-[1px] text-xs font-medium tracking-wider ml-2",children:e.category[0]}),(0,a.jsx)(x.riV,{className:"w-5 h-5"}),(0,a.jsx)("div",{className:"left-[89px] top-[1px] text-xs font-medium tracking-wider",children:(0,o.Z)(e.publishDate).fromNow()})]}),(0,a.jsx)(d.Z,{className:"w-64 h-36 left-0 top-[30px] rounded",src:e.featureImg,alt:"gadget"}),(0,a.jsx)("h2",{dangerouslySetInnerHTML:{__html:e.title},className:"w-full leading-6 left-0 top-[190px] text-xs font-semibold tracking-wider"})]},e.title))})]}):(0,a.jsx)(p.ZP,{status:"404",title:"404",subTitle:"Mohon maaf, data tidak ditemukan."}),(0,a.jsx)("div",{className:"mt-5 ",children:(0,a.jsx)(u,{news:l})}),(0,a.jsx)("div",{className:"mt-5 ",children:(0,a.jsx)(g.Z,{})})]}),(0,a.jsx)(c.Z,{})]})}}},function(e){e.O(0,[306,420,400,724,520,82,447,548,250,749,119,256,944,579,754,817,907,971,69,744],function(){return e(e.s=91129)}),_N_E=e.O()}]);