"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2510],{32313:function(A,o,K){K.d(o,{Z:function(){return g}});var i=K(57437),U=K(2265),F=K(84111),R=K(63019);function g(){let[A,o]=U.useState(!0);return(0,i.jsx)("div",{className:"hidden my-6 lg:block",children:!R.tq&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(F.Ad,{adUnit:"/89929222/Uzone.id_Desktop/Homepage",name:"div-gpt-ad-2867975-4",size:[[300,600],[300,250]],target:[["Position","Giant"]],refreshTimer:5e3,eventSlotRenderEnded:A=>o(A.isEmpty)})}),A&&(0,i.jsx)("div",{className:"text-xs text-gray-400 w-[320px] dark:bg-gray-700 h-[720px] mx-auto mt-20 bg-gray-300 lg:mt-5 relative",children:(0,i.jsx)("div",{className:"absolute bottom-0 right-0 p-2",children:"Sponsored"})})]})})}},4558:function(A,o,K){K.d(o,{Z:function(){return g}});var i=K(57437),U=K(2265),F=K(68550),R=K(8792);function g(A){let{slug:o}=A,[K,g]=U.useState([]);return U.useEffect(()=>{let A=async()=>{let{data:A}=await fetch("".concat("https://sun.uzone.id/","article/"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({category:[o.charAt(0).toUpperCase()+o.slice(1)],page:1,limit:5})}).then(A=>A.json()).catch(A=>{});g(A)};o&&A()},[o]),(0,i.jsx)("div",{className:"justify-center hidden my-5 mt-5 lg:flex",children:(0,i.jsx)("div",{className:"grid grid-rows-1 gap-5 lg:grid-cols-4",children:K.length>0?K.filter((A,o)=>o>0&&o<5).map(A=>(0,i.jsxs)(R.default,{href:"/".concat(A.slug),className:"px-4 my-4 lg:px-0",children:[(0,i.jsx)(F.Z,{className:"w-full lg:w-64 object-cover h:48 lg:h-36 left-0 top-[30px] rounded",src:A.featureImg,alt:A.title}),(0,i.jsx)("h2",{dangerouslySetInnerHTML:{__html:A.title},className:"w-full leading-6 left-0 top-[190px] text-xs font-semibold tracking-wider"})]},A.title)):(0,i.jsx)(i.Fragment,{})})})}},16330:function(A,o,K){var i=K(57437),U=K(2265),F=K(20703),R=K(8792),g=K(30122);o.Z=A=>{let{news:o}=A,[K,C]=U.useState(0);return(0,i.jsx)("div",{className:"block lg:hidden",children:(null==o?void 0:o.length)>0&&(0,i.jsx)(g.Z,{activeSlideIndex:K,onRequestChange:C,containerProps:{style:{width:"100%",justifyContent:"space-between",position:"relative"}},swipeTreshold:60,itemsToShow:3,speed:400,centerMode:!0,responsiveProps:[{itemsToShow:3,minWidth:768}],children:o.filter((A,o)=>o>0&&o<5).map(A=>(0,i.jsxs)(R.default,{href:"/".concat(A.slug),className:"w-[300px] h-[250px] cursor-pointer rounded-md p-[10px] !mb-[20px]",children:[(0,i.jsx)(F.default,{src:A.featureImg,width:300,height:150,alt:A.title,className:"object-cover w-[300px] h-[150px] my-auto rounded-xl justify-self-center"}),(0,i.jsx)("div",{className:"flex mt-5 text-xs",children:(0,i.jsx)("h2",{dangerouslySetInnerHTML:{__html:A.title},className:"ml-1 text-base font-semibold leading-6 tracking-wider text-black dark:text-white"})})]},A.slug))})})}},68550:function(A,o,K){K.d(o,{Z:function(){return R}});var i=K(57437),U=K(2265),F=K(20703),R=A=>{let{alt:o,className:K,src:R,style:g}=A,[C,B]=U.useState("".concat(R,"/800"));return(0,i.jsx)(F.default,{alt:o,title:o,src:C,width:640,height:300,className:K,placeholder:"blur",blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAJYBLADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKSgBaSiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKKSgBaKSigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKXFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAlFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRS0UAJRS0UAJRS0YoASiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiloASilooAMUlLRQAlFLRQAlFLRQAlFLRigBBRilooASilooASilooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApKWkoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApaSloAKKKKACiiigAooooAKKKKAEooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAClpKKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKSlpKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKWkpaACiiigAooooAKKKKACkoooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKWkpaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopaAEooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAEooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFopKWgAooooAKKKKACiijNACUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAC0UlLQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABS0lFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAtBpKWgBKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKSlooASiiigAooooAKKKKACiiigAooooAKUUlLQAUUUUAFJRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRmgAooooAKKM0maAFopM0ZoAWiikzQAtFGaKACijNFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAGaWkooAWijNJmgBaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAEopaSgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACijNGaACijNGaACkoooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWikooAWikzS5oAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKSigBaKSigAooooAWikpaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooASiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACikooAM0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABS5pKKAFopM0uaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWikpaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooNFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAJRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUmaAFpKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKWkooAWikooAWiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFNJSmkoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBKKWkoAKKKKACiiigAooooAKKKKACiiigAooooASiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKMUALRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQACloooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAU0lKaSgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoNFJQAUUUUAFFFFABRRRQAUUUUAJRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAC0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAC0UlLQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFJS0UAFBoooAU0lKaSgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkoooAWkoooAKKKKACiiigAooooAKKKKAEooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKSloAKKSigBaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKXFFFACYpaKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAClpBS0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAKaSlNJQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFJQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAlFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAlFFFAC0UlFAC0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAC0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABS0lLQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAppKU0lABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFJS0lABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFJRS0AFFFFABRRRQAUUlLQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAtFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAClpKWgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigANFBooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooASiiigAooooAKKKKACiiigAooooAKKKKACiiigApKWkoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooo/GgAoo49RRx60AFFHHqKOPWgAoo49RS8e1ACUUcetH40AFJS0UAJRRRQAtFFFABRSUZoAWiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAA0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUlFFAC0UlLQAUUUUAFFFFACUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUABpKWkoAKKKKACiiigAooooAKKKKACiiigAooooAKZI+xc0+q919wfWgCNpnPfFN3se5pgpaAHbj6mjJ9TSUtABk+ppMn1NLRQAZPqaTJ9TS0UAJk+poyfU0tFACZPqaMn1NLikoAMn1NAZh/EaKSgC1C5ZOeoqWoLfo1T0AFLSUUALRSUUALRSUtABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAC0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFAoooAWiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooNFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFGaACikooAKKKKACiiigApaSigBaKKKACg0UUAJRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUlLSUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUCCq939xfrViq9591PrQMrUtJRQA4HmjNMJPateGC3uIEkCYyOcetAGXRWv9hg/un86PsUH90/nQBk0VsC0gH8FKLaEf8s1oAxqK2xDEP8Almv5Uvlp/cX8qAMOkrcKxngKD+FRTWkciEBQrdiKAMikpehIPBHFFAE1v/FViq9v/FVigAooooAKKKKAClpKWgAooooAKKKKACiiigAooooAKKKKACiiigBaKKKACiiigAooooAKKKKACiiigAoopaACiig0AJRRRQAUUUUAFFFFABS0lLQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUABopTSUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAlFFFABRRRQAUUUUAFFFFABRRRQAUtJRQAtFJRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFJS0lABRRRQAUUUUAFFFFABRRRQAUUUlABS0UUAFV7z7q/WrFV7v7i/WgCrRRRQAGrulS7ZHhPRvmH171SpUYxyK69VORQB0NFMimSaMOpGD+lOzQAtFNLgdSKareb9w8dyKAHFwDgcn0FIFZvvnHsKeqhRwKKAAAAYFFFLQBi3ieXduOzfMPxqGr2qL88T9yCKo0ATW/VqsVXt+rVYoAKKKKACiiigApRSUtABRRRQAUUUUAFFFFABRRRQAUUUUAFAoooAWiiigAooooAKKKKACiiigAooooAKWkpaACiig0AJRRRQAUUUUAFFFFABS0lAoAWiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBTSUppKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooASiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKSlpDQAUUUUAFFFFABRRRQAUUUUAFJS0lABRRRQAtV7v7q/WrFVrv7q/WgCtS0UUAFFJmigAGVOVYj6Gnq9w7BVklJ7AGrEFhLLgt8i+/WtOG3jgXCLz3J6mgCnBpzN810xY9kzwPrWgqhVCqAAOgFLRQAUUUySVIl3OwUe9AD6imuI4B8x57KOpqlNqLNlYRtH949apHJOSSSepNAEk8zzybn49B6VFS0GgCW36tViq9v1arFABRRRQAUUUUAFLSUUALRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAC0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAZooooAKKKKACiiigAooooAKKKKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAU0lKaSgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAEooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkNLSGgAooooAKKKKACiiigAooooAQ0UtJQAUUUUALVe7+6v1qxVe76L9aAK1IaWpLWNZrpUboeaAFgtZJz8owO7HpWrBaRQYIG5v7xqZVCqFUAAdAKWgAooooAWmvIkalnYAepqOV32lYQpf1boKqf2fJI2+e4Ln2HAoAbNqTHIgXA/vNVNiztudix9TWgNPQfxNSnT17M1AGdRUtxA1uwBOQehqKgApKWkoAnt+rVPUFv/FU9ABRRRQAUUUUAFFFFAC0UUUAFFFFABRRRQAUUUUAFFFFABRRQKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACmkoNFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFJS0lABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUlLSUAFFFFABRRRQAUUUUAFFFFABRRRQAUlBooAWq910X61YqvdfdX60AVqfbP5dzG3+1imUh9qAOioqK3l82BH7kc/Wnsx/hGTQArOqjJOKi3NJ6qv60bMnLcmn80AIAAMAYFOpMUuKAAU6kpaAIbmHzoGXuOR9axs10FY97F5VycfdfmgCCkoooAnt/4qnqC3/iqegAooooAKKKKACiiigBaKKKACiiigAooooAKKKKACiiigAoFFLQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAC0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUABooNFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACUUppKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkpaSgAooooAKKKKACiiigAooooAKKKKACkpaSgBar3X3V+tWKr3P3V+tAFekIpaSgB8c0sQIRyB6U/7XP/AM9DUNFAE32qb/noaQ3M3981FRQBJ9om/wCejUnny/8APRvzplFADvNl/wCej/nR5sv/AD0f/vqm0UAPE8w/5av+dIzs5+ZifrTaKAHZopM0UAWLf+Kp6r2/8VWKACiiigAooooAKKKWgAooooAKKKKACiiigAooooAKKKKACgUUtABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUALRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFJS0UAJRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABSUtJQAUUUUAFFFFABRRRQAUUUUAFFFFABSGlooASoZwSgx2NTUUAUcUmKvYHpRtHpQBRoxV/avoKNq+goAz6K0Nq+go2r6CgDPorQ2L6CjYvoKAM/FFX9i+go2L6CgChRV/YvoKN",style:g,onError:()=>B("/images/uzone-default.webp")})}},35656:function(A,o,K){K.d(o,{Z:function(){return B}});var i=K(57437);K(2265);var U=K(98594),F=K(99782),R=K(61081),g=K(60976),C=K(2e4);async function B(A,o){switch(A){case"gadget":return(0,i.jsx)(U.T1V,{className:o});case"startup":default:return(0,i.jsx)(U.Zp5,{className:o});case"games":return(0,i.jsx)(U.Wjz,{className:o});case"automotive":return(0,i.jsx)(U.Sid,{className:o});case"game":return(0,i.jsx)(F.iVx,{className:o});case"telco":return(0,i.jsx)(R.fWB,{className:o});case"digilife":return(0,i.jsx)(g.cpI,{className:o});case"govtech":return(0,i.jsx)(C.eWh,{className:o})}}}}]);