(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[982],{26247:function(e,s,l){Promise.resolve().then(l.bind(l,19721)),Promise.resolve().then(l.bind(l,80968)),Promise.resolve().then(l.bind(l,93726)),Promise.resolve().then(l.bind(l,48137)),Promise.resolve().then(l.bind(l,14809))},14809:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return k}});var t=l(57437),a=l(2265),i=l(7849),r=l(10042),d=l(91893),c=l(71299),n=l(68550),o=l(8792),m=l(58873),x=l(20703),g=l(6856),h=l(32313),u=l(52807);function f(e){let{news:s,slug:l,total:i}=e,[r,d]=a.useState(!1),[c,n]=a.useState(3),[f,j]=a.useState([]),p=async()=>{n(c+1),d(!0);let{data:e}=await fetch("".concat("https://sun.uzone.id/","article/"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({tags:[l.replace(/-/g," ")],page:c,limit:10})}).then(e=>e.json()).catch(e=>{});d(!1),e&&j([...f,...e])};return(0,t.jsxs)("div",{className:"p-5 mx-auto my-3 bg-center bg-cover lg:my-0 rounded-2xl min-h-130",children:[(0,t.jsxs)("div",{className:"flex mb-5 text-[18px] lg:text-2xl font-bold text-red-500 dark:text-white",children:[(0,t.jsx)(x.default,{src:"https://cdn4.uzone.id/assets/uploads/revamp/icon/news.png",width:30,height:30,alt:"populer",className:"object-cover w-10 h-10 mr-5"}),"More Articles"]}),(0,t.jsxs)("div",{className:"grid grid-cols-3",children:[(0,t.jsx)("div",{className:"col-span-3 lg:col-span-2 h-full lg:h-[750px] overflow-auto lg:overflow-y-auto",children:i>0?(0,t.jsxs)(t.Fragment,{children:[s.filter((e,s)=>s>=5).map(e=>(0,t.jsxs)(o.default,{href:"/".concat(e.slug),className:"grid grid-cols-5 my-6",children:[(0,t.jsx)(x.default,{src:e.featureImg,width:200,height:150,alt:e.title,className:"object-cover w-full h-24 col-span-2 mr-5 rounded-lg lg:h-full lg:col-span-1"}),(0,t.jsxs)("div",{className:"col-span-3 ml-5 lg:col-span-4",children:[(0,t.jsx)("h2",{className:"font-bold leading-6 text-gray-700 text-md lg:text-lg dark:text-gray-200",children:e.title}),(0,t.jsxs)("div",{className:"flex mt-3 text-xs font-semibold text-gray-500 dark:text-gray-400",children:[e.category[0]," ",(0,t.jsx)(m.riV,{className:"w-4 h-4"}),(0,g.Z)(e.publishDate).fromNow()]})]})]},e.slug)),(null==f?void 0:f.length)>0&&f.map(e=>(0,t.jsxs)(o.default,{href:"/".concat(e.slug),className:"grid grid-cols-5 my-6",children:[(0,t.jsx)(x.default,{src:e.featureImg,width:200,height:150,alt:e.title,className:"object-cover w-full h-24 col-span-2 mr-5 rounded-lg lg:h-full lg:col-span-1"}),(0,t.jsxs)("div",{className:"col-span-3 ml-5 lg:col-span-4",children:[(0,t.jsx)("h2",{className:"font-bold leading-6 text-gray-700 text-md lg:text-lg dark:text-gray-200",children:e.title}),(0,t.jsxs)("div",{className:"flex mt-3 text-xs font-semibold text-gray-500 dark:text-gray-400",children:[e.category[0]," ",(0,t.jsx)(m.riV,{className:"w-4 h-4"}),(0,g.Z)(e.publishDate).fromNow()]})]})]},e.slug)),(0,t.jsx)("div",{className:"flex justify-center",children:i>15&&(0,t.jsx)(u.ZP,{loading:r,danger:!0,type:"primary",onClick:p,children:"Load More"})})]}):(0,t.jsx)(t.Fragment,{})}),(0,t.jsx)("div",{className:"hidden lg:block",children:(0,t.jsx)(h.Z,{})})]})]})}var j=l(83350),p=l(47754),N=l(4558);function v(){let[e,s]=a.useState("Gadget");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"justify-center hidden px-4 my-5 mt-5 lg:flex",children:(0,t.jsx)(j.ZP,{theme:{components:{Segmented:{itemSelectedBg:"#E41B1B1A",itemSelectedColor:"#E41B1B"}}},children:(0,t.jsx)(p.Z,{size:"large",className:"w-full overflow-x-auto lg:w-auto",options:["Gadget","Startup","Telco","Digilife","Games","Automotive"],defaultValue:"Gadget",onChange:e=>s(e)})})}),(0,t.jsx)(N.Z,{slug:e})]})}var y=l(82579),b=l(35656),w=l(16330);function k(e){let{news:s,slug:l,total:a}=e;return(0,t.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-7",children:[(0,t.jsx)(i.Z,{}),(0,t.jsxs)("div",{className:"lg:col-span-5 max-w-full lg:max-w-[67rem] mx-auto",children:[(0,t.jsx)(d.Z,{}),a>0?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"flex mt-4 ml-5 text-base lg:ml-0",children:[(0,t.jsx)("div",{className:"my-auto font-semibold",children:"Tags"}),(0,t.jsx)("div",{className:"mx-2",children:"/"}),(0,t.jsx)("div",{className:"my-auto font-bold text-red-500 capitalize",children:l})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 mb-6 border-b border-gray-300 lg:grid-cols-3",children:[(0,t.jsx)("div",{className:"col-span-2 px-5 mt-6 lg:mb-0 mb-4 md:px-0 md:my-2.5 lg:mr-3",children:(0,t.jsxs)(o.default,{href:"/".concat(s[0].slug),className:"",children:[(0,t.jsx)(n.Z,{alt:s[0].title,src:s[0].featureImg,className:"object-cover h-[200px] lg:h-[320px] w-full my-auto rounded-md justify-self-center"}),(0,t.jsx)("div",{className:"bottom-0 w-full ",children:(0,t.jsxs)("div",{className:"w-full pt-2 text-base leading-8 bg-transparent rounded-md",children:[(0,t.jsxs)("div",{className:"flex my-auto",children:[(0,b.Z)(s[0].category[0].toLowerCase(),"bg-white rounded-md py-1 w-7 h-7 text-sky-600"),(0,t.jsx)("div",{className:"my-auto ml-2 text-xs capitalize",children:s[0].category[0]}),(0,t.jsx)(m.riV,{className:"w-7 h-7"}),(0,t.jsx)("div",{className:"my-auto text-xs capitalize",children:(0,g.Z)(s[0].publishDate).fromNow()})]}),(0,t.jsx)("h2",{className:"py-1 font-semibold",dangerouslySetInnerHTML:{__html:s[0].title}})]})})]})}),(0,t.jsx)("div",{className:"hidden my-auto lg:block",children:(0,t.jsx)(c.Z,{})})]}),(0,t.jsx)("div",{className:"hidden gap-5 lg:grid-cols-4 lg:grid",children:s.filter((e,s)=>s>0&&s<5).map(e=>(0,t.jsxs)(o.default,{href:"/".concat(e.slug),className:"",children:[(0,t.jsxs)("div",{className:"flex my-2",children:[(0,b.Z)(e.category[0].toLowerCase(),"w-6 h-6 text-sky-600"),(0,t.jsx)("div",{className:"left-[26px] top-[1px] text-xs font-medium tracking-wider ml-2",children:e.category[0]}),(0,t.jsx)(m.riV,{className:"w-5 h-5"}),(0,t.jsx)("div",{className:"left-[89px] top-[1px] text-xs font-medium tracking-wider",children:(0,g.Z)(e.publishDate).fromNow()})]}),(0,t.jsx)(n.Z,{className:"w-64 h-36 left-0 top-[30px] rounded",src:e.featureImg,alt:e.title}),(0,t.jsx)("h2",{dangerouslySetInnerHTML:{__html:e.title},className:"w-full leading-6 left-0 top-[190px] text-xs font-semibold tracking-wider"})]},e.title))}),(0,t.jsx)(w.Z,{news:s})]}):(0,t.jsx)(y.ZP,{status:"404",title:"404",subTitle:"Mohon maaf, data tidak ditemukan."}),(0,t.jsx)("div",{className:"mt-5",children:a>1&&(0,t.jsx)(f,{news:s,slug:l,total:a})}),(0,t.jsx)(v,{})]}),(0,t.jsx)(r.Z,{})]})}}},function(e){e.O(0,[306,420,400,724,520,82,447,190,929,712,33,742,250,749,821,256,944,579,754,817,907,178,971,69,744],function(){return e(e.s=26247)}),_N_E=e.O()}]);