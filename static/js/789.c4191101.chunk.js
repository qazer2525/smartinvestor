"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[789],{1205:(e,t,n)=>{n.d(t,{f:()=>s});const s=n(9335).Ay.div.withConfig({componentId:"sc-1phan5d-0"})(["width:960px;margin:0 auto;padding:0 1.5rem;box-sizing:content-box;"])},2789:(e,t,n)=>{n.r(t),n.d(t,{HomePage:()=>Q});var s=n(9950),r=n(1205),o=n(6473),i=n(4191),a=n(3245),l=n(158),c=n(4813),d=n(6335),p=n(5102),m=n(4598),u=n(6890),x=n(5391),y=n(4215),g=n(6479),h=n(4414);const f=e=>{let{onClose:t}=e;const[n,r]=(0,s.useState)(0),o=[{title:"Welcome to the Dot-com Bubble Simulator",content:"Experience the dramatic rise and fall of tech stocks during the 1998-2002 period. You'll start with $10,000 to invest across three companies: Microsoft (stable tech), Pets.com (dot-com startup), and WorldCom (telecom giant)."},{title:"Market View",content:"The main chart shows stock prices over time. You can track Microsoft (blue), Pets.com (red), and WorldCom (green). Watch how they perform differently as the market evolves."},{title:"Making Trades",content:"Use the Buy and Sell buttons to trade stocks. Keep an eye on your cash balance and number of shares. Choose your positions carefully as market conditions change."},{title:"News Feed",content:"Switch to the News tab to see important market updates and company-specific news. These events can significantly impact stock prices - use this information to make informed decisions."},{title:"Advancing Time",content:"Click 'Next Quarter' to advance time and see how your investments perform. The simulation runs from 1998 to 2002, covering the entire dot-com bubble period."},{title:"Final Tips",content:"Remember: Not all tech companies are the same. Look for strong business fundamentals, be wary of hype, and don't invest more than you can afford to lose. Good luck!"}],i={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.75)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},container:{backgroundColor:"white",borderRadius:"8px",padding:"24px",maxWidth:"500px",width:"90%",position:"relative"},closeButton:{position:"absolute",top:"12px",right:"12px",background:"none",border:"none",cursor:"pointer",padding:"4px"},title:{fontSize:"24px",marginBottom:"16px",color:"#2196F3"},content:{fontSize:"16px",lineHeight:1.5,marginBottom:"24px",color:"#333"},navigation:{display:"flex",justifyContent:"space-between",alignItems:"center"},button:{padding:"8px 16px",borderRadius:"4px",cursor:"pointer",border:"none",backgroundColor:"#2196F3",color:"white",fontSize:"14px"},secondaryButton:{backgroundColor:"#e0e0e0",color:"#333"},progress:{display:"flex",justifyContent:"center",gap:"8px",marginTop:"16px"},dot:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"#e0e0e0"},activeDot:{backgroundColor:"#2196F3"}};return(0,h.jsx)("div",{style:i.overlay,children:(0,h.jsxs)("div",{style:i.container,children:[(0,h.jsx)("button",{style:i.closeButton,onClick:t,children:(0,h.jsx)(g.A,{size:24})}),(0,h.jsx)("h2",{style:i.title,children:o[n].title}),(0,h.jsx)("p",{style:i.content,children:o[n].content}),(0,h.jsxs)("div",{style:i.navigation,children:[n>0&&(0,h.jsx)("button",{onClick:()=>{n>0&&r(n-1)},style:{...i.button,...i.secondaryButton},children:"Previous"}),(0,h.jsx)("button",{onClick:()=>{n<o.length-1?r(n+1):t()},style:i.button,children:n===o.length-1?"Start Trading":"Next"})]}),(0,h.jsx)("div",{style:i.progress,children:o.map(((e,t)=>(0,h.jsx)("div",{style:{...i.dot,...t===n?i.activeDot:{}}},t)))})]})})},b=e=>{let{isOpen:t,onClose:n,onTrade:r,company:o,currentPrice:i,maxBuyShares:a,currentShares:l,isBuy:c}=e;const[d,p]=(0,s.useState)("1"),[m,u]=(0,s.useState)("");(0,s.useEffect)((()=>{t&&(p("1"),u(""))}),[t]);const x=0===i&&c,y={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.75)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},container:{backgroundColor:"white",borderRadius:"8px",padding:"24px",maxWidth:"400px",width:"90%",position:"relative"},header:{marginBottom:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"},title:{fontSize:"20px",fontWeight:"bold",margin:0,color:"#333"},closeButton:{background:"none",border:"none",cursor:"pointer",padding:"4px"},content:{marginBottom:"24px"},label:{display:"block",marginBottom:"8px",color:"#666"},input:{width:"100%",padding:"8px 12px",borderRadius:"4px",border:"1px solid #ddd",fontSize:"16px",marginBottom:"8px"},info:{color:"#666",fontSize:"14px",marginBottom:"8px"},error:{color:"#dc3545",fontSize:"14px",marginBottom:"8px"},warning:{backgroundColor:"#fff3cd",color:"#856404",padding:"12px",borderRadius:"4px",marginBottom:"16px",fontSize:"14px",display:"flex",alignItems:"center",gap:"8px"},buttonGroup:{display:"flex",gap:"12px"},button:{flex:1,padding:"10px",borderRadius:"4px",border:"none",cursor:"pointer",fontSize:"14px",fontWeight:"bold"},confirmButton:{backgroundColor:c?"#4CAF50":"#dc3545",color:"white",opacity:x?.5:1,cursor:x?"not-allowed":"pointer"},cancelButton:{backgroundColor:"#e0e0e0",color:"#333"}},f=e=>isNaN(e)||e<=0?(u("Please enter a valid number of shares"),!1):c&&e>a?(u(`You can only buy up to ${a} shares with your current balance`),!1):!c&&e>l?(u(`You only have ${l} shares to sell`),!1):(u(""),!0);return t?(0,h.jsx)("div",{style:y.overlay,children:(0,h.jsxs)("div",{style:y.container,children:[(0,h.jsxs)("div",{style:y.header,children:[(0,h.jsxs)("h2",{style:y.title,children:[c?"Buy":"Sell"," ",o.toUpperCase()]}),(0,h.jsx)("button",{style:y.closeButton,onClick:n,children:(0,h.jsx)(g.A,{size:24})})]}),x&&(0,h.jsx)("div",{style:y.warning,children:"\u26a0\ufe0f Trading is currently unavailable - Company has been delisted"}),(0,h.jsxs)("div",{style:y.content,children:[(0,h.jsx)("label",{style:y.label,children:"Number of Shares"}),(0,h.jsx)("input",{type:"number",min:"1",max:c?a:l,value:d,onChange:e=>{const t=e.target.value;p(t),f(parseInt(t))},style:y.input,disabled:x}),(0,h.jsxs)("div",{style:y.info,children:[(0,h.jsxs)("p",{children:["Current Price: $",i.toFixed(2)]}),(0,h.jsxs)("p",{children:["Total Value: $",(parseFloat(d)*i).toFixed(2)]}),c?(0,h.jsxs)("p",{children:["Max shares you can buy: ",a]}):(0,h.jsxs)("p",{children:["Current shares owned: ",l]})]}),m&&(0,h.jsx)("p",{style:y.error,children:m})]}),(0,h.jsxs)("div",{style:y.buttonGroup,children:[(0,h.jsx)("button",{style:{...y.button,...y.cancelButton},onClick:n,children:"Cancel"}),(0,h.jsxs)("button",{style:{...y.button,...y.confirmButton},onClick:()=>{if(x)return;const e=parseInt(d);f(e)&&(r(e,c),n())},disabled:x,children:["Confirm ",c?"Buy":"Sell"]})]})]})}):null};var v=n(9201),w=n(7737);const k=e=>{let{currentIndex:t,totalQuarters:n,currentYear:s}=e;const r={container:{backgroundColor:"white",padding:"20px",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)",marginBottom:"20px"},header:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"15px"},title:{display:"flex",alignItems:"center",gap:"8px",margin:0,color:"#333",fontSize:"16px",fontWeight:"bold"},currentPeriod:{display:"flex",alignItems:"center",gap:"8px",color:"#666",fontSize:"14px"},progressContainer:{width:"100%",height:"24px",backgroundColor:"#f0f0f0",borderRadius:"12px",overflow:"hidden",position:"relative"},progressBar:{height:"100%",backgroundColor:"#4CAF50",width:t/(n-1)*100+"%",transition:"width 0.3s ease",display:"flex",alignItems:"center",justifyContent:"center"},progressText:{position:"absolute",width:"100%",textAlign:"center",fontSize:"12px",fontWeight:"bold",zIndex:1,color:"white",textShadow:"0px 0px 2px rgba(0, 0, 0, 0.5)"},milestones:{display:"flex",justifyContent:"space-between",marginTop:"8px",padding:"0 4px"},milestone:{fontSize:"12px",color:"#666",position:"relative",textAlign:"center",width:"60px"},activeMilestone:{color:"#4CAF50",fontWeight:"bold"},timeRemaining:{display:"flex",alignItems:"center",gap:"8px",color:"#666",fontSize:"14px",marginTop:"10px"}},o=n-t-1;return(0,h.jsxs)("div",{style:r.container,children:[(0,h.jsxs)("div",{style:r.header,children:[(0,h.jsxs)("h3",{style:r.title,children:[(0,h.jsx)(v.A,{size:18}),"Simulation Progress"]}),(0,h.jsxs)("div",{style:r.currentPeriod,children:[(0,h.jsx)(w.A,{size:16}),"Current: ",s]})]}),(0,h.jsxs)("div",{style:r.progressContainer,children:[(0,h.jsx)("div",{style:r.progressBar}),(0,h.jsxs)("div",{style:r.progressText,children:[Math.round(t/(n-1)*100),"% Complete"]})]}),(0,h.jsx)("div",{style:r.milestones,children:["1998","1999","2000","2001","2002"].map(((e,t)=>(0,h.jsx)("div",{style:{...r.milestone,...s.includes(e)?r.activeMilestone:{}},children:e},e)))}),(0,h.jsxs)("div",{style:r.timeRemaining,children:[(0,h.jsx)(w.A,{size:14}),o," ",1===o?"quarter":"quarters"," remaining"]})]})},j=e=>{let{currentRange:t,onRangeChange:n}=e;const s={container:{display:"flex",gap:"8px",marginBottom:"16px",padding:"4px",backgroundColor:"#f5f5f5",borderRadius:"8px",width:"fit-content"},button:{padding:"6px 12px",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px",backgroundColor:"transparent",color:"#666",transition:"all 0.2s ease"},activeButton:{backgroundColor:"white",color:"#2196F3",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}};return(0,h.jsx)("div",{style:s.container,children:[{label:"1Q",value:"quarter"},{label:"2Q",value:"halfYear"},{label:"1Y",value:"year"},{label:"2Y",value:"twoYears"},{label:"All",value:"all"}].map((e=>(0,h.jsx)("button",{onClick:()=>n(e.value),style:{...s.button,...t===e.value?s.activeButton:{}},children:e.label},e.value)))})};var C=n(5924),S=n(2828),T=n(6859);const M=e=>{let{news:t,currentYear:n,currentIndex:r}=e;const[o,i]=(0,s.useState)([]),a=(0,s.useRef)(new Set),l=(0,s.useRef)(r),c={container:{position:"fixed",top:"20px",right:"20px",zIndex:1e3,display:"flex",flexDirection:"column",gap:"10px",maxWidth:"350px"},notification:{backgroundColor:"white",borderRadius:"8px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",padding:"12px 16px",display:"flex",flexDirection:"column",gap:"8px"},header:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},companyTag:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"4px 8px",borderRadius:"4px",fontSize:"13px",fontWeight:500},closeButton:{background:"none",border:"none",padding:"4px",cursor:"pointer",color:"#666",display:"flex",alignItems:"center",justifyContent:"center"},content:{fontSize:"14px",color:"#333",marginLeft:"4px"},progressBar:{height:"3px",backgroundColor:"#eee",borderRadius:"1.5px",marginTop:"8px",overflow:"hidden"},progress:{height:"100%",backgroundColor:"#4CAF50",width:"100%"}},d=e=>{switch(e){case"Microsoft":return{backgroundColor:"rgba(0, 168, 232, 0.1)",color:"#00a8e8"};case"Pets.com":return{backgroundColor:"rgba(255, 107, 107, 0.1)",color:"#ff6b6b"};case"WorldCom":return{backgroundColor:"rgba(81, 207, 102, 0.1)",color:"#51cf66"};default:return{backgroundColor:"rgba(102, 102, 102, 0.1)",color:"#666"}}},p=e=>{switch(e){case"warning":return(0,h.jsx)(C.A,{size:16});case"alert":return(0,h.jsx)(S.A,{size:16});default:return(0,h.jsx)(T.A,{size:16})}},m=e=>{if(!e)return"info";const t=e.toLowerCase();return t.includes("warning")||t.includes("concern")?"warning":t.includes("critical")||t.includes("emergency")?"alert":"info"};(0,s.useEffect)((()=>{if(r!==l.current){l.current=r;const e=t.filter((e=>{if(!e.company||!e.title)return!1;const t=`${e.company}-${e.title}-${n}`;return!a.current.has(t)&&(a.current.add(t),!0)})).map((e=>({id:`${e.company}-${e.title}-${n}`,company:e.company,title:e.title,type:m(e.impact),timestamp:new Date})));e.length>0&&i((t=>[...e,...t].slice(0,3)))}}),[t,n,r]);const u=e=>{i((t=>t.filter((t=>t.id!==e))))};return(0,s.useEffect)((()=>{o.forEach((e=>{const t=setTimeout((()=>{u(e.id)}),5e3);return()=>clearTimeout(t)}))}),[o]),(0,h.jsxs)("div",{style:c.container,children:[(0,h.jsx)("style",{children:"\n          .notification-enter {\n            opacity: 0;\n            transform: translateX(100%);\n          }\n          .notification-enter-active {\n            opacity: 1;\n            transform: translateX(0);\n            transition: opacity 300ms, transform 300ms;\n          }\n          .notification-exit {\n            opacity: 1;\n            transform: translateX(0);\n          }\n          .notification-exit-active {\n            opacity: 0;\n            transform: translateX(100%);\n            transition: opacity 300ms, transform 300ms;\n          }\n          @keyframes countdown {\n            from { width: 100%; }\n            to { width: 0%; }\n          }\n          .progress-bar {\n            animation: countdown 5s linear forwards;\n          }\n        "}),o.map((e=>(0,h.jsxs)("div",{className:"notification-enter notification-enter-active",style:c.notification,children:[(0,h.jsxs)("div",{style:c.header,children:[(0,h.jsxs)("div",{style:{...c.companyTag,...d(e.company)},children:[p(e.type),e.company]}),(0,h.jsx)("button",{style:c.closeButton,onClick:()=>u(e.id),children:(0,h.jsx)(g.A,{size:16})})]}),(0,h.jsx)("div",{style:c.content,children:e.title}),(0,h.jsx)("div",{style:c.progressBar,children:(0,h.jsx)("div",{className:"progress-bar",style:c.progress})})]},e.id)))]})},B=()=>{const[e,t]=(0,s.useState)("all"),[n,r]=(0,s.useState)(!0),[g,v]=(0,s.useState)(0),[w,C]=(0,s.useState)(!1),S=(()=>{const[e,t]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{const e=()=>{t(window.innerWidth<=768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),e})(),T=(e=>({container:{maxWidth:"1300px",margin:"-1.5rem",width:"98.5%",boxSizing:"border-box",display:"flex",flexDirection:"column",justifyContent:"center"},card:{backgroundColor:"#fff",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)",padding:e?"16px":"24px",marginBottom:"24px",width:"100%",boxSizing:"border-box",maxWidth:e?"100%":"1400px"},cardHeader:{marginBottom:e?"12px":"16px",display:"flex",flexDirection:e?"column":"row",justifyContent:"space-between",alignItems:e?"flex-start":"center",gap:e?"8px":"0"},title:{fontSize:e?"20px":"24px",fontWeight:"bold",margin:0},subtitle:{color:"#666",margin:0,fontSize:e?"14px":"16px"},chartContainer:{marginBottom:"24px",width:"100%",overflow:"hidden",position:"relative"},statsGrid:{display:"grid",gridTemplateColumns:e?"repeat(2, 1fr)":"repeat(4, 1fr)",gap:e?"12px":"16px",marginBottom:"24px"},statBox:{padding:e?"12px":"16px",borderRadius:"8px",backgroundColor:"#f8f9fa"},statLabel:{color:"#666",fontSize:"14px",marginBottom:"4px"},statValue:{fontSize:e?"18px":"20px",fontWeight:"bold"},buttonGrid:{display:"grid",gridTemplateColumns:e?"1fr":"repeat(3, 1fr)",gap:e?"12px":"16px",marginBottom:"24px"},buttonContainer:{display:"flex",gap:"8px",width:"100%"},button:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:e?"12px":"8px 16px",borderRadius:"4px",border:"none",cursor:"pointer",fontSize:"14px",flex:1},primaryButton:{backgroundColor:"#4CAF50",color:"white"},outlineButton:{backgroundColor:"transparent",border:"1px solid #dc3545",color:"#dc3545"},secondaryButton:{backgroundColor:"#2196F3",color:"white",width:e?"100%":"auto"},newsContainer:{display:"grid",gap:e?"12px":"16px",gridTemplateColumns:e?"1fr":"repeat(auto-fill, minmax(300px, 1fr))"},newsItem:{padding:e?"12px":"16px",borderRadius:"8px",border:"1px solid #ddd",backgroundColor:"#ffffff",display:"flex",flexDirection:"column",gap:e?"8px":"12px",cursor:"pointer"},newsTitle:{fontSize:e?"16px":"18px",fontWeight:"bold",margin:0,lineHeight:1.4},newsImpact:{color:"#666",margin:0,fontSize:e?"13px":"14px",lineHeight:1.5},newsPrice:{color:"#888",fontSize:e?"12px":"14px",margin:0,marginTop:"auto"},companyTag:{display:"inline-block",padding:"4px 8px",borderRadius:"4px",fontSize:e?"11px":"12px",fontWeight:"500",marginBottom:"4px"},endScreenOverlay:{position:"fixed",top:0,right:0,bottom:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:50},endScreenContent:{backgroundColor:"#fff",borderRadius:"8px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",width:e?"90%":"80%",maxHeight:"90vh",overflowY:"auto",padding:e?"16px":"24px"},endScreenGrid:{display:"grid",gridTemplateColumns:e?"1fr":"1fr 1fr",gap:e?"16px":"24px"},resultsBox:{backgroundColor:"#f8f9fa",padding:e?"12px":"16px",borderRadius:"8px",marginBottom:"16px"},list:{paddingLeft:e?"16px":"24px",marginBottom:"16px"},listItem:{marginBottom:"8px"},centerAlign:{textAlign:"center",marginTop:"24px"},tabs:{display:"flex",borderBottom:"1px solid #ddd",marginBottom:"10px",position:e?"sticky":"relative",top:e?0:"auto",backgroundColor:"#fff",zIndex:e?10:1,width:"100%",paddingTop:e?"0rem":"1.5rem"},tab:{padding:e?"10px 16px":"12px 24px",cursor:"pointer",backgroundColor:"transparent",border:"none",borderBottom:"2px solid transparent",transition:"all 0.3s ease",color:"#666",fontSize:e?"14px":"16px",fontWeight:"500",flex:e?1:"initial",marginRight:e?0:"8px"},activeTab:{color:"#2196F3",borderBottom:"2px solid #2196F3"},content:{display:"none",height:"calc(100vh - 100px)"},activeContent:{display:"block"},notificationDot:{position:"absolute",top:"4px",right:"4px",width:"8px",height:"8px",backgroundColor:"#ff4444",borderRadius:"50%",display:"block",zIndex:10,pointerEvents:"none"}}))(S),[B,Q]=(0,s.useState)("market"),[z,I]=(0,s.useState)(!1),[W,R]=(0,s.useState)(!1),[A,F]=(0,s.useState)(""),[P,$]=(0,s.useState)(!0),D=[{year:"1996 Q1",msft:40,pets:0,wcom:25},{year:"1996 Q2",msft:45,pets:0,wcom:30},{year:"1996 Q3",msft:50,pets:0,wcom:35},{year:"1996 Q4",msft:55,pets:0,wcom:40},{year:"1997 Q1",msft:60,pets:0,wcom:45},{year:"1997 Q2",msft:65,pets:0,wcom:50},{year:"1997 Q3",msft:70,pets:0,wcom:55},{year:"1997 Q4",msft:85,pets:0,wcom:70}],N=[{year:"1998 Q1",msft:100,pets:0,wcom:100},{year:"1998 Q2",msft:110,pets:0,wcom:120},{year:"1998 Q3",msft:130,pets:0,wcom:135},{year:"1998 Q4",msft:145,pets:0,wcom:150},{year:"1999 Q1",msft:160,pets:0,wcom:180},{year:"1999 Q2",msft:180,pets:0,wcom:210},{year:"1999 Q3",msft:190,pets:100,wcom:230},{year:"1999 Q4",msft:220,pets:120,wcom:280},{year:"2000 Q1",msft:250,pets:150,wcom:320},{year:"2000 Q2",msft:200,pets:80,wcom:250},{year:"2000 Q3",msft:180,pets:40,wcom:200},{year:"2000 Q4",msft:170,pets:10,wcom:150},{year:"2001 Q1",msft:160,pets:0,wcom:120},{year:"2001 Q2",msft:165,pets:0,wcom:100},{year:"2001 Q3",msft:155,pets:0,wcom:80},{year:"2001 Q4",msft:160,pets:0,wcom:60},{year:"2002 Q1",msft:165,pets:0,wcom:40},{year:"2002 Q2",msft:160,pets:0,wcom:20},{year:"2002 Q3",msft:155,pets:0,wcom:5},{year:"2002 Q4",msft:160,pets:0,wcom:0}],E=function(e,t,n){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.1;const r=[];for(let o=0;o<=n;o++){const i=e+(t-e)*(o/n),a=Math.abs(t-e)*s,l=(Math.random()-.5)*a;r.push(Math.max(0,i+l))}return r},L=10,O={"1998 Q1":[{category:"Market",title:"Fed Keeps Interest Rates Low",impact:"Easy money fuels tech investment",analysis:"Low rates encourage speculative investments"},{company:"Microsoft",title:"Windows 98 Launch Planned",impact:"Strong enterprise position",price:"MSFT: $28.75"},{company:"WorldCom",title:"Continues Aggressive Expansion",impact:"Growth through acquisitions",price:"WCOM: $24.50"},{category:"Technology",title:"Google Founded in Garage",impact:"New search engine enters market",analysis:"Innovation continues in Silicon Valley"}],"1998 Q2":[{company:"Microsoft",title:"Windows 98 Launches Successfully",impact:"PC market grows stronger",price:"MSFT: $32.50"},{category:"Technology",title:"Apple Introduces iMac",impact:"Consumer tech gets stylish",analysis:"Design becomes key differentiator"},{category:"Market",title:"Tech IPOs Surge 200%",impact:"Investor appetite grows",analysis:"Early signs of market fever"}],"1998 Q3":[{category:"Technology",title:"Yahoo Acquires GeoCities",impact:"Web community consolidation begins",analysis:"Big players start buying growth"},{company:"WorldCom",title:"Announces Major Fiber Expansion",impact:"Network capacity increases",price:"WCOM: $28.75"},{category:"Market",title:"Online Trading Platforms Emerge",impact:"Retail investors gain direct access",analysis:"Democratization of trading"}],"1998 Q4":[{category:"Technology",title:"Amazon Expands Beyond Books",impact:"E-commerce scope widens",analysis:"Digital retail revolution begins"},{category:"Market",title:"Internet Fund Returns 196%",impact:"Tech sector outperformance",analysis:"Momentum investing takes hold"},{company:"Microsoft",title:"MSN Growth Accelerates",impact:"Internet services expand",price:"MSFT: $35.50"}],"1999 Q1":[{category:"Market",title:"Day Trading Becomes Mainstream",impact:"Retail investors flood the market",analysis:"Speculation increases market volatility"},{company:"Microsoft",title:"Reports Record Profits",impact:"Traditional metrics still strong",price:"MSFT: $85.50"},{category:"Technology",title:"PayPal Launches Online Payments",impact:"E-commerce infrastructure grows",analysis:"Internet financial services emerge"}],"1999 Q2":[{category:"Technology",title:"Webvan Raises Record VC Round",impact:"Online grocery delivery boom",analysis:"Traditional retail disruption attempt"},{category:"Market",title:"NASDAQ Tops 2,500",impact:"Tech valuations soar",analysis:"Momentum investing accelerates"},{company:"WorldCom",title:'Revenue Growth "Unstoppable"',impact:"Aggressive expansion continues",price:"WCOM: $35.25"}],"1999 Q3":[{company:"Pets.com",title:"Files for IPO",impact:"Heavy marketing spending begins",price:"Initial pricing planned"},{category:"Technology",title:"Napster Disrupts Music Industry",impact:"Digital distribution challenges emerge",analysis:"Internet threatens traditional business"},{category:"Market",title:"Margin Debt Reaches Record High",impact:"Investors taking on more risk",analysis:"Leverage increases system risk"}],"1999 Q4":[{category:"Technology",title:"E-commerce Holiday Sales Surge",impact:"Online shopping goes mainstream",analysis:"Digital retail validation"},{category:"Market",title:"Tech Valuations Hit New Heights",impact:'P/E ratios become "irrelevant"',analysis:"Traditional metrics abandoned"},{company:"Microsoft",title:"Stock Splits Again",impact:"Market cap reaches $500B",price:"MSFT: $95.50"}],"2000 Q1":[{category:"Market",title:"NASDAQ Hits 5,048.62",impact:"Peak of the bubble",analysis:"Maximum market euphoria"},{company:"Pets.com",title:"Super Bowl Ad Success",impact:"High marketing spend continues",price:"IPET: $14.00"},{category:"Technology",title:"AOL Merges with Time Warner",impact:"Largest merger in history",analysis:"Old and new media combine"}],"2000 Q2":[{category:"Market",title:"Margin Calls Accelerate",impact:"Forced selling begins",analysis:"Leverage unwind starts"},{company:"WorldCom",title:"Growth Numbers Questioned",impact:"Accounting concerns emerge",price:"WCOM: $45.00"},{category:"Technology",title:"Amazon Loses 75% of Value",impact:"E-commerce model questioned",analysis:"Profitability concerns mount"}],"2000 Q3":[{category:"Market",title:"Tech Layoffs Begin",impact:"Dot-com workforce shrinks",analysis:"Reality sets in"},{category:"Technology",title:"Startup Funding Freezes",impact:"Cash runway becomes critical",analysis:"VC sentiment shifts dramatically"},{company:"Microsoft",title:"Growth Slows Significantly",impact:"Enterprise spending cuts hit",price:"MSFT: $65.50"}],"2000 Q4":[{company:"Pets.com",title:"Announces Shutdown",impact:"Liquidates all assets",price:"IPET: $0.19"},{category:"Technology",title:"Internet Ad Rates Collapse",impact:"Revenue models fail",analysis:"Basic business models prove unsustainable"},{category:"Market",title:"NASDAQ Down 50% from Peak",impact:"Tech crash accelerates",analysis:"Wealth effect reverses"}],"2001 Q1":[{category:"Market",title:"Dot-com Bankruptcies Surge",impact:"Industry consolidation begins",analysis:"Survivors emerge stronger"},{company:"WorldCom",title:"Debt Concerns Mount",impact:"Credit ratings cut",price:"WCOM: $15.00"},{category:"Technology",title:"Silicon Valley Office Vacancy Spikes",impact:"Real estate market crashes",analysis:"Tech hub contraction"}],"2001 Q2":[{category:"Market",title:"Nasdaq Down 68% From Peak",impact:"Tech crash accelerates",analysis:"Wealth effect reverses"},{company:"Microsoft",title:"Enterprise Sales Stable",impact:"Traditional software resilient",price:"MSFT: $67.75"},{category:"Technology",title:"Bandwidth Prices Plummet",impact:"Infrastructure commoditization",analysis:"Tech deflation begins"}],"2001 Q3":[{category:"Global",title:"9/11 Attacks Shake Markets",impact:"Trading halted for days",analysis:"Economic uncertainty deepens"},{category:"Technology",title:"Tech Spending Hits New Lows",impact:"CIOs slash budgets",analysis:"Recovery timeline extends"},{company:"WorldCom",title:"Accounting Probe Begins",impact:"SEC investigates financials",price:"WCOM: $8.00"}],"2001 Q4":[{category:"Market",title:"Tech Sector Jobs Down 20%",impact:"Mass layoffs continue",analysis:"Skilled worker surplus grows"},{category:"Technology",title:"Amazon Posts First Profit",impact:"E-commerce survivor emerges",analysis:"New business models validated"},{company:"Microsoft",title:"Xbox Launch Success",impact:"Digital entertainment grows",price:"MSFT: $70.25"}],"2002 Q1":[{category:"Market",title:"IPO Market Remains Frozen",impact:"No tech offerings planned",analysis:"Capital markets reset continues"},{company:"WorldCom",title:"Major Restatement Expected",impact:"Fraud scope expands",price:"WCOM: $5.00"},{category:"Technology",title:"Google Gains Search Dominance",impact:"New tech leaders emerge",analysis:"Industry reorganization accelerates"}],"2002 Q2":[{category:"Market",title:"Venture Capital at 1997 Levels",impact:"Investment reset complete",analysis:"New normal established"},{category:"Technology",title:"Enterprise Software Stabilizes",impact:"Core tech spending returns",analysis:"Recovery begins in select sectors"},{company:"Microsoft",title:".NET Strategy Takes Shape",impact:"Web services era begins",price:"MSFT: $65.50"}],"2002 Q3":[{company:"WorldCom",title:"Files Largest Bankruptcy in History",impact:"$11B accounting fraud revealed",price:"WCOM: $0.06"},{category:"Market",title:"Crisis of Confidence",impact:"Corporate fraud fears spread",analysis:"Trust in markets damaged"},{category:"Technology",title:"Return to Basics",impact:"Focus on profitable growth",analysis:"Business model reality check"}],"2002 Q4":[{category:"Market",title:"NASDAQ Bottoms at 1,114",impact:"Down 78% from peak",analysis:"Bubble fully deflated"},{category:"Technology",title:"PayPal Acquired by eBay",impact:"Consolidation continues",analysis:"Strong survivors expand"},{company:"Microsoft",title:"Enterprise Focus Pays Off",impact:"Steady growth resumes",price:"MSFT: $55.75"}]},G={marketStats:{peakToTroughNasdaq:"-78%",peakToTroughSP:"-49%",totalLostMarketCap:"$5 trillion",failedCompanies:"51%"},keyLessons:["Fundamental business models matter more than growth","Excessive leverage amplifies market crashes","Infrastructure must match market expectations","Venture capital abundance can mask unsustainable businesses","Traditional metrics shouldn't be ignored during bubbles"],survivorCharacteristics:["Strong cash flows (Microsoft)","Real revenue models","Sustainable competitive advantages","Conservative financial management","Diverse customer base"],failurePatterns:["Excessive marketing spend (Pets.com)","Accounting fraud (WorldCom)","Unsustainable unit economics","Over-reliance on external funding","Ignored fundamental business metrics"]},Y=()=>{v(0),H(N.slice(0,1)),K({msft:{shares:0,value:0},pets:{shares:0,value:0},wcom:{shares:0,value:0}}),X(1e4),C(!1)},[V,H]=(0,s.useState)(N.slice(0,1)),[q,K]=(0,s.useState)({msft:{shares:0,value:0},pets:{shares:0,value:0},wcom:{shares:0,value:0}}),[U,X]=(0,s.useState)(1e4),_=()=>{const e=V[V.length-1];return{msft:e.msft,pets:e.pets,wcom:e.wcom}},J=()=>{const t=(e=>{const t=[];for(let n=0;n<e.length-1;n++){const s=e[n],r=e[n+1];if("1997 Q4"===s.year&&"1998 Q1"===r.year){const e=E(s.msft,r.msft,L,.05);t.push({...s,isQuarter:!0});for(let n=1;n<L;n++)t.push({year:`W${n}`,msft:e[n],pets:s.pets,wcom:E(s.wcom,r.wcom,L,.05)[n],isQuarter:!1,isTransition:!0})}else{const e=E(s.msft,r.msft,L),n=E(s.pets,r.pets,L),o=E(s.wcom,r.wcom,L);t.push({...s,isQuarter:!0});for(let r=1;r<L;r++)t.push({year:`${s.year} W${r}`,msft:e[r],pets:n[r],wcom:o[r],isQuarter:!1})}}return t.push({...e[e.length-1],isQuarter:!0}),t})([...D,...N]),n=(D.length+g)*L;switch(e){case"quarter":return t.slice(Math.max(0,n-Math.floor(L)),n+1);case"halfYear":return t.slice(Math.max(0,n-20),n+1);case"year":return t.slice(Math.max(0,n-40),n+1);case"twoYears":return t.slice(Math.max(0,n-80),n+1);case"all":return t.slice(0,n+1);default:return t}},Z=(e,t)=>{const n=_()[A];t?U>=n*e&&(K({...q,[A]:{shares:q[A].shares+e,value:(q[A].shares+e)*n}}),X(U-n*e)):q[A].shares>=e&&(K({...q,[A]:{shares:q[A].shares-e,value:(q[A].shares-e)*n}}),X(U+n*e))},ee=(e,t)=>{F(e),$(t),R(!0)},te=e=>{const t=_();return Math.floor(U/t[e])},ne=()=>{if(I(!0),g<N.length-1){const e=g+1;v(e),H(N.slice(0,e+1));const t=N[e];K({msft:{...q.msft,value:q.msft.shares*t.msft},pets:{...q.pets,value:q.pets.shares*t.pets},wcom:{...q.wcom,value:q.wcom.shares*t.wcom}}),e===N.length-1&&C(!0)}},se=()=>{const e=U+q.msft.value+q.pets.value+q.wcom.value,t=((e-1e4)/1e4*100).toFixed(2),n=e>1e4;return(0,h.jsx)("div",{style:T.endScreenOverlay,children:(0,h.jsxs)("div",{style:T.endScreenContent,children:[(0,h.jsx)("h2",{style:T.title,children:"Dot-com Bubble Simulation Results"}),(0,h.jsxs)("div",{style:T.endScreenGrid,children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{style:T.title,children:"Your Performance"}),(0,h.jsxs)("div",{style:T.resultsBox,children:[(0,h.jsxs)("p",{children:["Final Portfolio Value: $",e.toFixed(2)]}),(0,h.jsxs)("p",{children:["Total Return: ",t,"%"]}),(0,h.jsxs)("p",{children:["Strategy Outcome:"," ",n?"\u2705 Survived the Crash":"\u274c Lost to the Bubble"]})]}),(0,h.jsx)("h3",{style:T.title,children:"Market Statistics"}),(0,h.jsx)("div",{style:T.statsGrid,children:Object.entries(G.marketStats).map((e=>{let[t,n]=e;return(0,h.jsxs)("div",{style:T.resultsBox,children:[(0,h.jsx)("p",{style:T.statLabel,children:t.replace(/([A-Z])/g," $1").trim()}),(0,h.jsx)("p",{style:T.statValue,children:n})]},t)}))})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{style:T.title,children:"Key Lessons"}),(0,h.jsx)("ul",{style:T.list,children:G.keyLessons.map(((e,t)=>(0,h.jsx)("li",{style:T.listItem,children:e},t)))}),(0,h.jsx)("h3",{style:T.title,children:"Success Factors"}),(0,h.jsx)("ul",{style:T.list,children:G.survivorCharacteristics.map(((e,t)=>(0,h.jsx)("li",{style:T.listItem,children:e},t)))}),(0,h.jsx)("h3",{style:T.title,children:"Failure Patterns"}),(0,h.jsx)("ul",{style:T.list,children:G.failurePatterns.map(((e,t)=>(0,h.jsx)("li",{style:T.listItem,children:e},t)))})]})]}),(0,h.jsx)("div",{style:{textAlign:"center",marginTop:"24px"},children:(0,h.jsxs)("button",{onClick:Y,style:{...T.button,...T.secondaryButton},children:[(0,h.jsx)(m.A,{size:16})," Restart Simulation"]})})]})})},re=()=>(0,h.jsxs)("div",{style:T.card,children:[(0,h.jsxs)("div",{style:T.cardHeader,children:[(0,h.jsx)("h2",{style:T.title,children:"Company News"}),(0,h.jsxs)("p",{style:T.subtitle,children:["Return: ",oe,"%"]})]}),(0,h.jsx)("div",{style:T.newsContainer,children:(O[N[g].year]||[]).map(((e,t)=>{const n=(e=>{switch(e){case"Microsoft":return{color:"#00a8e8",backgroundColor:"rgba(0, 168, 232, 0.1)"};case"Pets.com":return{color:"#ff6b6b",backgroundColor:"rgba(255, 107, 107, 0.1)"};case"WorldCom":return{color:"#51cf66",backgroundColor:"rgba(81, 207, 102, 0.1)"};default:return{color:"#666",backgroundColor:"rgba(102, 102, 102, 0.1)"}}})(e.company);return(0,h.jsxs)("div",{style:{...T.newsItem,borderColor:n.color},children:[e.company&&(0,h.jsx)("span",{style:{...T.companyTag,...n},children:e.company}),(0,h.jsx)("h3",{style:T.newsTitle,children:e.title}),(0,h.jsx)("p",{style:T.newsImpact,children:e.impact}),e.price&&(0,h.jsx)("p",{style:T.newsPrice,children:e.price})]},t)}))})]}),oe=((U+q.msft.value+q.pets.value+q.wcom.value-1e4)/1e4*100).toFixed(2),ie=e=>{Q(e),"news"===e&&I(!1)},ae=()=>{var n;const s=J();return(0,h.jsxs)("div",{style:T.card,children:[(0,h.jsx)("div",{style:T.cardHeader,children:(0,h.jsx)("h2",{style:T.title,children:"Dot-com Companies Comparison (1998-2002)"})}),(0,h.jsx)(k,{currentIndex:g,totalQuarters:N.length,currentYear:N[g].year}),(0,h.jsx)(j,{currentRange:e,onRangeChange:t}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{style:{...T.chartContainer,position:"relative",width:"100%",paddingRight:"20px"},children:(0,h.jsxs)(i.b,{width:S?window.innerWidth-80:600,height:300,data:s,margin:{right:20,left:0,top:5,bottom:5},children:[(0,h.jsx)(a.d,{strokeDasharray:"3 3"}),(0,h.jsx)(l.W,{dataKey:"year",tick:{fontSize:S?10:12},tickFormatter:(r=e,e=>{if(e.includes("W")){const t=parseInt(e.split("W")[1]);return"quarter"===r&&t%2===0||"halfYear"===r&&t%4===0?`W${t}`:""}const t=e.split(" "),n=t[0],s=t[1];return"quarter"===r||"halfYear"===r?`${n} ${s}`:s?"Q1"===s?`${n}\n${s}`:s:e}),interval:0,minTickGap:10,angle:-30,textAnchor:"end",height:60,padding:{left:10,right:10}}),(0,h.jsx)(c.h,{domain:[0,400],tick:{fontSize:S?10:12}}),(0,h.jsx)(d.m,{formatter:e=>[`$${e.toFixed(2)}`],labelFormatter:e=>e.includes("W")?`Week ${e.split("W")[1]}`:e}),(0,h.jsx)(p.s,{}),(0,h.jsx)(p.s,{}),(0,h.jsx)(o.N,{type:"monotone",dataKey:"msft",stroke:"#00a8e8",name:"Microsoft",dot:!1,activeDot:{r:6,fill:"#00a8e8",stroke:"#fff",strokeWidth:2}}),(0,h.jsx)(o.N,{type:"monotone",dataKey:"pets",stroke:"#ff6b6b",name:"Pets.com",dot:!1,activeDot:{r:6,fill:"#ff6b6b",stroke:"#fff",strokeWidth:2}}),(0,h.jsx)(o.N,{type:"monotone",dataKey:"wcom",stroke:"#51cf66",name:"WorldCom",dot:!1,activeDot:{r:6,fill:"#51cf66",stroke:"#fff",strokeWidth:2}})]})}),(0,h.jsxs)("div",{style:T.statsGrid,children:[(0,h.jsxs)("div",{style:T.statBox,children:[(0,h.jsx)("p",{style:T.statLabel,children:"Cash"}),(0,h.jsxs)("p",{style:T.statValue,children:["$",U.toFixed(2)]})]}),(0,h.jsxs)("div",{style:T.statBox,children:[(0,h.jsx)("p",{style:T.statLabel,children:"MSFT Shares"}),(0,h.jsx)("p",{style:T.statValue,children:q.msft.shares})]}),(0,h.jsxs)("div",{style:T.statBox,children:[(0,h.jsx)("p",{style:T.statLabel,children:"PETS Shares"}),(0,h.jsx)("p",{style:T.statValue,children:q.pets.shares})]}),(0,h.jsxs)("div",{style:T.statBox,children:[(0,h.jsx)("p",{style:T.statLabel,children:"WCOM Shares"}),(0,h.jsx)("p",{style:T.statValue,children:q.wcom.shares})]})]}),(0,h.jsx)("div",{style:T.buttonGrid,children:["msft","pets","wcom"].map((e=>(0,h.jsxs)("div",{style:T.buttonContainer,children:[(0,h.jsxs)("button",{onClick:()=>ee(e,!0),style:{...T.button,...T.primaryButton},children:[(0,h.jsx)(u.A,{size:16}),"Buy ",e.toUpperCase()]}),(0,h.jsxs)("button",{onClick:()=>ee(e,!1),style:{...T.button,...T.outlineButton},children:[(0,h.jsx)(x.A,{size:16}),"Sell"]})]},e)))}),(0,h.jsx)("div",{style:{textAlign:"center"},children:(0,h.jsxs)("button",{onClick:ne,style:{...T.button,...T.secondaryButton},children:[(0,h.jsx)(y.A,{size:16}),"Next Quarter"]})})]}),(0,h.jsx)(b,{isOpen:W,onClose:()=>R(!1),onTrade:Z,company:A,currentPrice:_()[A],maxBuyShares:te(A),currentShares:(null===(n=q[A])||void 0===n?void 0:n.shares)||0,isBuy:P})]});var r};return(0,h.jsxs)("div",{style:T.container,className:"flex-container",children:[n&&(0,h.jsx)(f,{onClose:()=>r(!1)}),(0,h.jsxs)("div",{style:T.tabs,children:[(0,h.jsx)("button",{style:{...T.tab,..."market"===B?T.activeTab:{}},onClick:()=>ie("market"),children:"Market"}),(0,h.jsxs)("button",{style:{...T.tab,..."news"===B?T.activeTab:{}},onClick:()=>ie("news"),children:["News",z&&"news"!==B&&(0,h.jsx)("span",{style:T.notificationDot})]})]}),(0,h.jsx)("div",{style:{...T.content,..."market"===B?T.activeContent:{}},children:(0,h.jsx)(ae,{})}),(0,h.jsx)("div",{style:{...T.content,..."news"===B?T.activeContent:{}},children:(0,h.jsx)(re,{})}),(0,h.jsx)(M,{news:O[N[g].year]||[],currentYear:N[g].year,currentIndex:g}),w&&(0,h.jsx)(se,{})]})};function Q(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(r.f,{children:(0,h.jsx)(B,{})})})}}}]);