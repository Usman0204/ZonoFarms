(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[7],{1100:function(e,t,n){"use strict";n.r(t);var c,r,i,a,o,s,l,u,b,d,j,p,x,f,O,h,m,g,v=n(0),y=n(46),w=n(252),k=n(16),S=n(7),A=n(67),C=n(12),I=n(4),E=S.e.div(c||(c=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 39px;\n"]))),B=function(){var e=Object(y.i)(),t=e.url,n=e.isExact;return Object(I.jsx)(E,{children:Object(I.jsxs)(C.l,{activeIndex:n?0:1,scale:"sm",variant:"subtle",children:[Object(I.jsx)(C.m,{as:A.a,to:"".concat(t),children:"Next IFO"}),Object(I.jsx)(C.m,{as:A.a,to:"".concat(t,"/history"),children:"Past IFOs"})]})})},T=n(44),F=Object(S.e)(C.F).attrs({as:"h1",size:"xl"})(r||(r=Object(k.a)(["\n  color: ",";\n  margin-bottom: 24px;\n"])),(function(e){return e.theme.colors.secondary})),D=Object(S.e)(C.bb)(i||(i=Object(k.a)(["\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n"]))),P=S.e.div(a||(a=Object(k.a)(["\n  background-image: linear-gradient(180deg, #53dee9 0%, #1fc7d4 100%);\n  padding-bottom: 40px;\n  padding-top: 40px;\n  margin-bottom: 32px;\n"]))),z=function(){var e=Object(T.a)();return Object(I.jsx)(P,{children:Object(I.jsxs)(w.a,{children:[Object(I.jsx)(F,{children:e(500,"IFO: Initial Farm Offerings")}),Object(I.jsx)(D,{children:e(502,"Buy new tokens with a brand new token sale model.")})]})})},L=n(248),N=n(27),R=n(246),U=n(2),_=n.n(U),M=n(11),q=n(22),K=n(13),Q=n.n(K),Z=n(154),W=n(54),G=n(48),V=n(155),J=function(e,t,n){return 0===e?"idle":e<t?"coming_soon":e>=t&&e<=n?"live":e>n?"finished":"idle"},H=function(e){var t=e.address,n=e.releaseBlockNumber,c=Object(v.useState)({status:"idle",blocksRemaining:0,secondsUntilStart:0,progress:5,secondsUntilEnd:0,raisingAmount:new Q.a(0),totalAmount:new Q.a(0),startBlockNum:0,endBlockNum:0}),r=Object(q.a)(c,2),i=r[0],a=r[1],o=Object(W.b)().blockNumber,s=Object(G.f)(t);return Object(v.useEffect)((function(){(function(){var e=Object(M.a)(_.a.mark((function e(){var t,c,r,i,l,u,b,d,j,p,x,f;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.a)([s.methods.startBlock().call,s.methods.endBlock().call,s.methods.raisingAmount().call,s.methods.totalAmount().call]);case 2:t=e.sent,c=Object(q.a)(t,4),r=c[0],i=c[1],l=c[2],u=c[3],b=parseInt(r,10),d=parseInt(i,10),j=J(o,b,d),p=d-b,f=o>b?(o-b)/p*100:(o-n)/(b-n)*100,a({secondsUntilEnd:(x=d-o)*Z.d,secondsUntilStart:(b-o)*Z.d,raisingAmount:new Q.a(l),totalAmount:new Q.a(u),status:j,progress:f,blocksRemaining:x,startBlockNum:b,endBlockNum:d});case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,o,s,n,a]),i},Y=Object(S.e)(C.E)(o||(o=Object(k.a)(["\n  & > div {\n    flex: 1;\n  }\n"]))),$=Object(S.e)(C.F).attrs({as:"h3",size:"lg"})(s||(s=Object(k.a)(["\n  margin-bottom: 4px;\n  text-align: right;\n"]))),X=Object(S.e)(C.bb)(l||(l=Object(k.a)(["\n  color: ",";\n  font-size: 14px;\n  text-align: right;\n"])),(function(e){return e.theme.colors.textSubtle})),ee=function(e){var t=e.ifoId,n=e.name,c=e.subTitle;return Object(I.jsxs)(Y,{mb:"24px",alignItems:"center",children:[Object(I.jsx)("img",{src:"/images/ifos/".concat(t,".svg"),alt:t,width:"64px",height:"64px"}),Object(I.jsxs)("div",{children:[Object(I.jsx)($,{children:n}),Object(I.jsx)(X,{children:c})]})]})},te=S.e.div(u||(u=Object(k.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n"])),(function(e){return e.theme.colors.secondary})),ne=Object(S.e)(C.bb)(b||(b=Object(k.a)(["\n  flex: 1;\n"]))),ce=function(e){var t=e.ifo,n=e.publicIfoData,c=Object(v.useState)(!1),r=Object(q.a)(c,2),i=r[0],a=r[1],o=Object(T.a)(),s=t.description,l=t.cakeToBurn,u=t.projectSiteUrl,b=t.launchDate,d=t.launchTime,j=t.saleAmount,p=t.raiseAmount,x=n.raisingAmount,f=n.totalAmount;return Object(I.jsxs)(C.q,{children:[Object(I.jsx)(C.k,{variant:"text",onClick:function(){return a(!i)},width:"100%",endIcon:i?Object(I.jsx)(C.A,{color:"primary",width:"24px"}):Object(I.jsx)(C.x,{color:"primary",width:"24px"}),children:i?o(1066,"Hide"):o(658,"Details")}),i&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(C.bb,{as:"p",color:"textSubtle",my:"24px",children:s}),Object(I.jsxs)(C.h,{mb:"24px",children:[Object(I.jsxs)(te,{children:[Object(I.jsx)(ne,{children:o(582,"Launch Time")}),Object(I.jsxs)(C.bb,{children:[b,",",Object(I.jsx)(C.K,{href:"https://www.timeanddate.com/worldclock/singapore/singapore",target:"blank",rel:"noopener noreferrer",ml:"4px",style:{display:"inline"},children:d})]})]}),Object(I.jsxs)(te,{children:[Object(I.jsx)(ne,{children:o(584,"For Sale")}),Object(I.jsx)(C.bb,{children:j})]}),Object(I.jsxs)(te,{children:[Object(I.jsx)(ne,{children:o(999,"To raise (USD)")}),Object(I.jsx)(C.bb,{children:p})]}),Object(I.jsxs)(te,{children:[Object(I.jsx)(ne,{children:o(586,"CAKE to burn (USD)")}),Object(I.jsx)(C.bb,{children:l})]}),Object(I.jsxs)(te,{children:[Object(I.jsx)(ne,{children:o(999,"Total raised (% of target)")}),Object(I.jsx)(C.bb,{children:"".concat(f.div(x).times(100).toFixed(2),"%")})]})]}),Object(I.jsx)(C.L,{href:u,style:{margin:"auto"},children:o(412,"View project site")})]})]})},re=n(15),ie=n(875),ae=function(e){var t=Object(v.useState)({isPendingTx:!1,offeringTokenBalance:new Q.a(0),refundingAmount:new Q.a(0),userInfo:{amount:new Q.a(0),claimed:!1}}),n=Object(q.a)(t,2),c=n[0],r=n[1],i=e.address,a=e.currencyAddress,o=c.isPendingTx,s=Object(N.c)().account,l=Object(G.f)(i),u=Object(G.e)(a),b=Object(ie.a)(u,i,o);return Object(v.useEffect)((function(){s&&function(){var e=Object(M.a)(_.a.mark((function e(){var t,n,c,i,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.a)([l.methods.getOfferingAmount(s).call,l.methods.userInfo(s).call,l.methods.getRefundingAmount(s).call]);case 2:t=e.sent,n=Object(q.a)(t,3),c=n[0],i=n[1],a=n[2],r((function(e){return Object(re.a)(Object(re.a)({},e),{},{offeringTokenBalance:new Q.a(c),refundingAmount:new Q.a(a),userInfo:{amount:new Q.a(i.amount),claimed:i.claimed}})}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,l,r]),Object(re.a)(Object(re.a)({},c),{},{allowance:b,contract:l,setPendingTx:function(e){return r((function(t){return Object(re.a)(Object(re.a)({},t),{},{isPendingTx:e})}))},addUserContributedAmount:function(e){r((function(t){return Object(re.a)(Object(re.a)({},t),{},{userInfo:Object(re.a)(Object(re.a)({},t.userInfo),{},{amount:t.userInfo.amount.plus(e)})})}))},setIsClaimed:function(){r((function(e){return Object(re.a)(Object(re.a)({},e),{},{userInfo:Object(re.a)(Object(re.a)({},e.userInfo),{},{claimed:!0})})}))}})},oe=n(73),se=n(176),le=n(855),ue=Object(S.e)(C.h)(d||(d=Object(k.a)(["\n  background: ",";\n  box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.2) inset;\n  border-radius: ",";\n  padding: 8px 16px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.radii.default})),be=Object(S.e)(C.J)(j||(j=Object(k.a)(["\n  box-shadow: none;\n  flex: 1;\n"]))),de=Object(S.e)(C.bb)(p||(p=Object(k.a)(["\n  max-width: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n"]))),je=function(e){var t=e.title,n=e.max,c=e.symbol,r=e.onChange,i=e.onSelectMax,a=e.value,o=Object(le.a)(e,["title","max","symbol","onChange","onSelectMax","value"]),s=Object(T.a)(),l=n.toFixed(6);return Object(I.jsxs)(ue,Object(re.a)(Object(re.a)({},o),{},{children:[Object(I.jsxs)(C.E,{alignItems:"center",justifyContent:"space-between",mb:"8px",children:[Object(I.jsx)(C.bb,{fontSize:"14px",children:t}),Object(I.jsx)(C.bb,{fontSize:"14px",children:s(999,"Balance: ".concat(l),{num:l})})]}),Object(I.jsxs)(C.E,{alignItems:"center",children:[Object(I.jsx)(be,{onChange:r,placeholder:"0",value:a}),i&&Object(I.jsx)(C.k,{scale:"sm",onClick:i,mr:"8px",children:s(452,"Max")}),Object(I.jsx)(de,{title:c,children:c})]})]}))},pe=n(861),xe=n(867),fe=n(868),Oe=function(e){var t=e.currency,n=e.contract,c=e.currencyAddress,r=e.onDismiss,i=e.onSuccess,a=Object(v.useState)(""),o=Object(q.a)(a,2),s=o[0],l=o[1],u=Object(N.c)().account,b=Object(G.e)(c),d=Object(oe.a)(Object(pe.a)(c)),j=Object(T.a)(),p=new Q.a(s).times(new Q.a(10).pow(18)),x=Object(fe.a)({onRequiresApproval:function(){var e=Object(M.a)(_.a.mark((function e(){var t,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.methods.allowance(u,n.options.address).call();case 3:return t=e.sent,c=new Q.a(t),e.abrupt("return",c.gt(0));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),onApprove:function(){return b.methods.approve(n.options.address,se.a.constants.MaxUint256).send({from:u})},onConfirm:function(){return n.methods.deposit(p.toString()).send({from:u})},onSuccess:function(){var e=Object(M.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(),i(p);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),f=x.isApproving,O=x.isApproved,h=x.isConfirmed,m=x.isConfirming,g=x.handleApprove,y=x.handleConfirm;return Object(I.jsx)(C.Q,{title:"Contribute ".concat(t),onDismiss:r,children:Object(I.jsxs)(C.h,{maxWidth:"400px",children:[Object(I.jsx)(je,{title:j(999,"Contribute"),value:s,onChange:function(e){return l(e.currentTarget.value)},symbol:t,max:d,onSelectMax:function(){return l(d.toString())},mb:"24px"}),Object(I.jsx)(C.bb,{as:"p",mb:"24px",children:j(999,"If you don't contribute enough LP tokens, you may not receive any IFO tokens at all and will only receive a full refund of your LP tokens.")}),Object(I.jsx)(xe.a,{isApproveDisabled:h||m||O,isApproving:f,isConfirmDisabled:!O||h||p.isNaN()||p.eq(0),isConfirming:m,onApprove:g,onConfirm:y}),Object(I.jsx)(C.L,{href:"https://exchange.pancakeswap.finance/#/add/BNB/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",style:{margin:"16px auto 0"},children:"Get ".concat(t)})]})})},he=function(e){var t=e.userAmount,n=e.totalAmount,c=Object(T.a)(),r=t.div(n).times(100).toNumber().toLocaleString(void 0,{maximumFractionDigits:5});return Object(I.jsx)(C.bb,{fontSize:"14px",color:"textSubtle",children:c(999,"".concat(r,"% of total"),{num:r})})},me=function(e){var t=e.ifo,n=e.contract,c=e.userInfo,r=e.isPendingTx,i=e.publicIfoData,a=e.addUserContributedAmount,o=t.currency,s=t.currencyAddress,l=i.totalAmount,u=Object(T.a)(),b=Object(oe.a)(c.amount),d=Object(W.r)().toastSuccess,j=Object(C.pb)(Object(I.jsx)(Oe,{currency:o,contract:n,currencyAddress:s,onSuccess:function(e){d("Success!","You have contributed ".concat(Object(oe.a)(e)," CAKE-BNB LP tokens to this IFO!")),a(e)}}),!1),p=Object(q.a)(j,1)[0];return Object(I.jsxs)(C.h,{children:[Object(I.jsxs)(C.E,{mb:"4px",children:[Object(I.jsx)(C.bb,{as:"span",bold:!0,fontSize:"12px",mr:"4px",textTransform:"uppercase",children:"CAKE-BNB LP"}),Object(I.jsx)(C.bb,{as:"span",color:"textSubtle",fontSize:"12px",textTransform:"uppercase",bold:!0,children:"Committed"})]}),Object(I.jsxs)(C.E,{alignItems:"center",children:[Object(I.jsx)(C.h,{style:{flex:1},pr:"8px",children:Object(I.jsx)(C.bb,{bold:!0,fontSize:"20px",children:b.toFixed(4)})}),Object(I.jsx)(C.k,{onClick:p,disabled:r,children:u(999,"Contribute")})]}),Object(I.jsx)(he,{userAmount:c.amount,totalAmount:l})]})},ge=function(e){var t=e.children,n=Object(le.a)(e,["children"]);return Object(I.jsx)(C.h,Object(re.a)(Object(re.a)({minHeight:"18px"},n),{},{children:Object(I.jsx)(C.bb,{color:"textSubtle",fontSize:"12px",children:t})}))},ve=function(e){var t=e.token,n=e.balance,c=Object(W.j)(t),r=!!c&&n>0,i=c*n;return Object(I.jsx)(ge,{children:r&&"~$".concat(i.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))})},ye=S.e.div(x||(x=Object(k.a)(["\n  display: grid;\n  grid-gap: 8px;\n  grid-template-columns: repeat(2, 1fr);\n  margin-bottom: 24px;\n"]))),we=function(e){var t=e.ifo,n=e.contract,c=e.userInfo,r=e.isPendingTx,i=e.setPendingTx,a=e.offeringTokenBalance,o=e.refundingAmount,s=e.setIsClaimed,l=Object(T.a)(),u=Object(N.c)().account,b=c.amount.gt(0),d=!c.claimed,j=Object(oe.a)(c.amount),p=Object(oe.a)(o).toFixed(c.amount.eq(0)?0:4),x=t.tokenSymbol,f=t.tokenDecimals,O=Object(oe.a)(a,f),h=Object(W.r)(),m=h.toastError,g=h.toastSuccess,v=function(){var e=Object(M.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,n.methods.harvest().send({from:u});case 4:s(),g("Success!","You have successfully claimed your rewards."),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),m("Error",null===e.t0||void 0===e.t0?void 0:e.t0.message),console.error(e.t0);case 12:return e.prev=12,i(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(ye,{children:[Object(I.jsxs)(C.h,{children:[Object(I.jsxs)(C.E,{mb:"4px",children:[Object(I.jsx)(C.bb,{as:"span",bold:!0,fontSize:"12px",mr:"4px",textTransform:"uppercase",children:"LP Tokens"}),Object(I.jsx)(C.bb,{as:"span",color:"textSubtle",fontSize:"12px",textTransform:"uppercase",bold:!0,children:"Committed"})]}),Object(I.jsx)(C.bb,{fontSize:"20px",bold:!0,color:a.gt(0)?"text":"textDisabled",children:j.toFixed(c.amount.eq(0)?0:4)}),Object(I.jsx)(ge,{children:l(999,"".concat(p,d?" to reclaim":" reclaimed"),{num:p})})]}),Object(I.jsxs)(C.h,{children:[Object(I.jsxs)(C.E,{mb:"4px",children:[Object(I.jsx)(C.bb,{as:"span",bold:!0,fontSize:"12px",mr:"4px",textTransform:"uppercase",children:x}),d?Object(I.jsx)(C.bb,{as:"span",color:"textSubtle",fontSize:"12px",textTransform:"uppercase",bold:!0,children:"To Claim"}):Object(I.jsx)(C.bb,{as:"span",color:"textSubtle",fontSize:"12px",textTransform:"uppercase",bold:!0,children:"Claimed"})]}),Object(I.jsx)(C.bb,{fontSize:"20px",bold:!0,color:a.gt(0)?"text":"textDisabled",children:O.toFixed(a.eq(0)?0:4)}),d&&Object(I.jsx)(ve,{token:x,balance:O})]})]}),b?Object(I.jsx)(C.k,{onClick:v,disabled:r||!d,width:"100%",mb:"24px",isLoading:r,endIcon:r?Object(I.jsx)(C.d,{spin:!0,color:"currentColor"}):null,children:l(999,d?"Claim":"Claimed")}):Object(I.jsx)(C.k,{disabled:!0,width:"100%",mb:"24px",children:l(999,"Nothing to Claim")}),Object(I.jsx)(C.bb,{mt:"4px",children:l(999,"You'll be refunded any excess tokens when you claim")})]})},ke=function(){return Object(I.jsxs)(C.h,{children:[Object(I.jsx)(C.Z,{height:"18px",mb:"4px",width:"30%"}),Object(I.jsx)(C.Z,{height:"48px",mb:"2px"}),Object(I.jsx)(C.Z,{height:"19px",width:"15%"})]})},Se=function(){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(C.E,{mb:"24px",children:[Object(I.jsxs)(C.h,{width:"50%",height:"52px",children:[Object(I.jsx)(C.Z,{height:"18px",mb:"4px",width:"70%"}),Object(I.jsx)(C.Z,{height:"30px",width:"20%"})]}),Object(I.jsxs)(C.h,{width:"50%",height:"52px",children:[Object(I.jsx)(C.Z,{height:"18px",mb:"4px",width:"70%"}),Object(I.jsx)(C.Z,{height:"30px",width:"20%"})]})]}),Object(I.jsx)(C.Z,{height:"48px",mb:"24px"}),Object(I.jsx)(C.Z,{height:"48px",mt:"4px"})]})},Ae=function(e){var t=e.ifo,n=e.publicIfoData,c=ae(t),r=c.isPendingTx,i=c.offeringTokenBalance,a=c.refundingAmount,o=c.userInfo,s=c.contract,l=c.setPendingTx,u=c.addUserContributedAmount,b=c.setIsClaimed;return Object(N.c)().account?Object(I.jsxs)(I.Fragment,{children:[t.isActive&&"idle"===n.status&&Object(I.jsx)(ke,{}),!t.isActive&&"idle"===n.status&&Object(I.jsx)(Se,{}),"live"===n.status&&Object(I.jsx)(me,{ifo:t,contract:s,userInfo:o,isPendingTx:r,publicIfoData:n,addUserContributedAmount:u}),"finished"===n.status&&Object(I.jsx)(we,{ifo:t,contract:s,userInfo:o,isPendingTx:r,setPendingTx:l,offeringTokenBalance:i,refundingAmount:a,setIsClaimed:b})]}):Object(I.jsx)(R.a,{})},Ce=function(e){var t=e.progress;return Object(I.jsx)(C.h,{mb:"16px",children:Object(I.jsx)(C.W,{primaryStep:t})})},Ie=n(881),Ee=S.e.div(f||(f=Object(k.a)(["\n  align-items: center;\n  display: flex;\n  height: 24px;\n  justify-content: center;\n  margin-bottom: 24px;\n"]))),Be=S.e.div(O||(O=Object(k.a)(["\n  color: ",";\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n"])),(function(e){return e.theme.colors.secondary})),Te=function(e){var t=e.status,n=e.secondsUntilStart,c=e.secondsUntilEnd,r=e.block,i=Object(T.a)(),a="coming_soon"===t?n:c,o=Object(Ie.a)(a),s="coming_soon"===t?"start":"finish";return"idle"===t?Object(I.jsx)(C.E,{alignItems:"center",justifyContent:"center",mb:"24px",height:"24px",children:i(656,"Loading...")}):Object(I.jsxs)(Ee,{children:[Object(I.jsx)(Be,{children:"".concat(o.days,"d, ").concat(o.hours,"h, ").concat(o.minutes,"m until ").concat(s)}),Object(I.jsx)(C.K,{href:"https://bscscan.com/block/countdown/".concat(r),target:"blank",rel:"noopener noreferrer",ml:"8px",children:"(blocks)"})]})},Fe=Object(S.e)(C.o)(h||(h=Object(k.a)(["\n  background-image: ",";\n  background-repeat: no-repeat;\n  background-size: contain;\n  padding-top: 112px;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 437px;\n  width: 100%;\n"])),(function(e){var t=e.ifoId;return"url('/images/ifos/".concat(t,"-bg.svg')")})),De=function(e){var t=e.ifo,n=t.id,c=t.name,r=t.subTitle,i=H(t),a=Object(N.c)().account,o=Object(T.a)(),s=function(e,t){return"coming_soon"===e?Object(I.jsx)(C.s,{variantColor:"textDisabled",text:t(999,"Coming Soon")}):"live"===e?Object(I.jsx)(C.s,{variantColor:"primary",text:t(999,"LIVE NOW!")}):null}(i.status,o);return Object(I.jsxs)(Fe,{ifoId:n,ribbon:s,isActive:"live"===i.status,children:[Object(I.jsxs)(C.p,{children:[Object(I.jsx)(ee,{ifoId:n,name:c,subTitle:r}),"finished"!==i.status&&t.isActive&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(Ce,{progress:i.progress}),Object(I.jsx)(Te,{status:i.status,secondsUntilStart:i.secondsUntilStart,secondsUntilEnd:i.secondsUntilEnd,block:i.startBlockNum})]}),a?Object(I.jsx)(Ae,{ifo:t,publicIfoData:i}):Object(I.jsx)(R.a,{width:"100%"})]}),Object(I.jsx)(ce,{ifo:t,publicIfoData:i})]})},Pe=Object(S.e)(C.F).attrs({size:"lg"})(m||(m=Object(k.a)(["\n  color: ",";\n  margin-bottom: 16px;\n"])),(function(e){return e.theme.colors.secondary})),ze=S.e.div(g||(g=Object(k.a)(["\n  align-items: start;\n  border-top: 2px solid ",";\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 32px;\n  padding-bottom: 40px;\n  padding-top: 40px;\n\n  "," {\n    grid-template-columns: ",";\n  }\n"])),(function(e){return e.theme.colors.textSubtle}),(function(e){return e.theme.mediaQueries.md}),(function(e){var t=e.isSingle;return"repeat(".concat(t?1:2,", 1fr)")}));ze.defaultProps={isSingle:!1};var Le,Ne,Re=ze,Ue=Object(S.e)(C.e)(Le||(Le=Object(k.a)(["\n  border-top: 2px solid ",";\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 32px;\n  margin: 0 auto;\n  padding: 32px 0;\n\n  "," {\n    grid-template-columns: 1fr 1fr;\n  }\n"])),(function(e){return e.theme.colors.textSubtle}),(function(e){return e.theme.mediaQueries.sm})),_e=S.e.ul(Ne||(Ne=Object(k.a)(["\n  color: ",";\n  margin-bottom: 16px;\n\n  & > li {\n    line-height: 1.4;\n    margin-bottom: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),Me=L.c.find((function(e){return e.isActive})),qe=function(){var e=Object(T.a)();return Object(I.jsxs)("div",{children:[Object(I.jsx)(Re,{isSingle:!0,children:Object(I.jsx)(De,{ifo:Me})}),Object(I.jsxs)(Ue,{children:[Object(I.jsxs)("div",{children:[Object(I.jsx)(Pe,{as:"h2",children:e(592,"How to take part")}),Object(I.jsxs)(C.F,{mb:"16px",children:[e(594,"Before Sale"),":"]}),Object(I.jsxs)(_e,{children:[Object(I.jsx)("li",{children:e(596,"Buy CAKE and BNB tokens")}),Object(I.jsx)("li",{children:e(598,"Get CAKE-BNB LP tokens by adding CAKE and BNB liquidity")})]}),Object(I.jsxs)(C.E,{mb:"16px",children:[Object(I.jsx)(C.L,{href:"https://exchange.pancakeswap.finance/#/swap",mr:"16px",children:e(1060,"Buy CAKE")}),Object(I.jsx)(C.L,{href:"https://exchange.pancakeswap.finance/#/add/BNB/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",children:e(1062,"Get LP tokens")})]}),Object(I.jsxs)(C.F,{mb:"16px",children:[e(600,"During Sale"),":"]}),Object(I.jsx)(_e,{children:Object(I.jsx)("li",{children:e(602,"While the sale is live, commit your CAKE-LP tokens to buy the IFO tokens")})}),Object(I.jsxs)(C.F,{mb:"16px",children:[e(604,"After Sale"),":"]}),Object(I.jsxs)(_e,{children:[Object(I.jsx)("li",{children:e(606,"Claim the tokens you bought, along with any unspent funds.")}),Object(I.jsx)("li",{children:e(608,"Done!")})]}),Object(I.jsx)(C.bb,{as:"div",pt:"16px",children:Object(I.jsx)(C.k,{as:"a",variant:"secondary",href:"https://docs.pancakeswap.finance/core-products/ifo-initial-farm-offering",children:e(610,"Read more")})})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)(C.I,{src:"/images/ifo-bunny.svg",alt:"ifo bunny",width:436,height:406,responsive:!0}),Object(I.jsxs)("div",{children:[Object(I.jsx)(Pe,{as:"h2",children:e(512,"Want to launch your own IFO?")}),Object(I.jsx)(C.bb,{mb:3,children:e(514,"Launch your project with PancakeSwap, Binance Smart Chain\u2019s most-used AMM project and liquidity provider, to bring your token directly to the most active and rapidly growing community on BSC.")}),Object(I.jsx)(C.k,{as:"a",href:"https://docs.google.com/forms/d/e/1FAIpQLScGdT5rrVMr4WOWr08pvcroSeuIOtEJf1sVdQGVdcAOqryigQ/viewform",external:!0,children:e(516,"Apply to launch")})]})]})]})]})},Ke=L.c.filter((function(e){return!e.isActive})),Qe=function(){return Object(I.jsx)(Re,{children:Ke.map((function(e){return Object(I.jsx)(De,{ifo:e},e.id)}))})};t.default=function(){var e=Object(y.i)().path;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(z,{}),Object(I.jsxs)(w.a,{children:[Object(I.jsx)(B,{}),Object(I.jsx)(y.b,{exact:!0,path:"".concat(e),children:Object(I.jsx)(qe,{})}),Object(I.jsx)(y.b,{path:"".concat(e,"/history"),children:Object(I.jsx)(Qe,{})})]})]})}},855:function(e,t,n){"use strict";function c(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},i=Object.keys(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return c}))},861:function(e,t,n){"use strict";var c=n(2),r=n.n(c),i=n(11),a=n(22),o=n(0),s=n(13),l=n.n(s),u=n(27),b=n(42),d=n(63),j=n(153);t.a=function(e){var t=Object(o.useState)(new l.a(0)),n=Object(a.a)(t,2),c=n[0],s=n[1],p=Object(u.c)().account,x=Object(d.a)(),f=Object(j.a)().fastRefresh;return Object(o.useEffect)((function(){p&&function(){var t=Object(i.a)(r.a.mark((function t(){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(b.a)(e,x),t.next=3,n.methods.balanceOf(p).call();case 3:c=t.sent,s(new l.a(c));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[p,e,x,f]),c}},867:function(e,t,n){"use strict";var c,r,i,a,o=n(16),s=(n(0),n(7)),l=n(12),u=n(44),b=n(4),d=s.e.div(c||(c=Object(o.a)(["\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n\n  "," {\n    grid-template-columns: 1fr 24px 1fr;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),j=Object(s.e)(l.k)(r||(r=Object(o.a)(["\n  width: 100%;\n\n  "," {\n    min-width: 160px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),p={width:"24px",color:"textDisabled"},x=Object(s.e)(l.z).attrs(p)(i||(i=Object(o.a)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),f=Object(s.e)(l.x).attrs(p)(a||(a=Object(o.a)(["\n  display: block;\n\n  "," {\n    display: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),O=Object(b.jsx)(l.d,{spin:!0,color:"currentColor"});t.a=function(e){var t=e.isApproveDisabled,n=e.isApproving,c=e.isConfirming,r=e.isConfirmDisabled,i=e.onApprove,a=e.onConfirm,o=Object(u.a)();return Object(b.jsxs)(d,{children:[Object(b.jsx)(l.h,{children:Object(b.jsx)(j,{disabled:t,onClick:i,endIcon:n?O:void 0,isLoading:n,children:n?o(800,"Approving"):o(564,"Approve")})}),Object(b.jsxs)(l.E,{justifyContent:"center",children:[Object(b.jsx)(x,{}),Object(b.jsx)(f,{})]}),Object(b.jsx)(l.h,{children:Object(b.jsx)(j,{onClick:a,disabled:r,isLoading:c,endIcon:c?O:void 0,children:c?o(802,"Confirming"):o(464,"Confirm")})})]})}},868:function(e,t,n){"use strict";var c=n(22),r=n(15),i=n(0),a=n(81),o=n(27),s=n(54),l={approvalState:"idle",approvalReceipt:null,approvalError:null,confirmState:"idle",confirmReceipt:null,confirmError:null},u=function(e,t){switch(t.type){case"requires_approval":return Object(r.a)(Object(r.a)({},e),{},{approvalState:"success"});case"approve_sending":return Object(r.a)(Object(r.a)({},e),{},{approvalState:"loading"});case"approve_receipt":return Object(r.a)(Object(r.a)({},e),{},{approvalState:"success",approvalReceipt:t.payload});case"approve_error":return Object(r.a)(Object(r.a)({},e),{},{approvalState:"fail",approvalError:t.payload});case"confirm_sending":return Object(r.a)(Object(r.a)({},e),{},{confirmState:"loading"});case"confirm_receipt":return Object(r.a)(Object(r.a)({},e),{},{confirmState:"success",confirmReceipt:t.payload});case"confirm_error":return Object(r.a)(Object(r.a)({},e),{},{confirmState:"fail",confirmError:t.payload});default:return e}};t.a=function(e){var t=e.onApprove,n=e.onConfirm,r=e.onRequiresApproval,b=e.onSuccess,d=void 0===b?a.noop:b,j=Object(o.c)().account,p=Object(i.useReducer)(u,l),x=Object(c.a)(p,2),f=x[0],O=x[1],h=Object(i.useRef)(r),m=Object(s.r)().toastError;return Object(i.useEffect)((function(){j&&h.current&&h.current().then((function(e){e&&O({type:"requires_approval"})}))}),[j,h,O]),{isApproving:"loading"===f.approvalState,isApproved:"success"===f.approvalState,isConfirming:"loading"===f.confirmState,isConfirmed:"success"===f.confirmState,approvalReceipt:f.approvalReceipt,approvalError:f.approvalError,confirmReceipt:f.confirmReceipt,confirmError:f.confirmError,handleApprove:function(){t().on("sending",(function(){O({type:"approve_sending"})})).on("receipt",(function(e){O({type:"approve_receipt",payload:e})})).on("error",(function(e){O({type:"approve_error",payload:e}),console.error("An error occurred approving transaction:",e),m("An error occurred approving transaction")}))},handleConfirm:function(){n().on("sending",(function(){O({type:"confirm_sending"})})).on("receipt",(function(e){O({type:"confirm_receipt",payload:e}),d(f)})).on("error",(function(e){O({type:"confirm_error",payload:e}),console.error("An error occurred confirming transaction:",e),m("An error occurred confirming transaction")}))}}}},875:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return x}));var c=n(2),r=n.n(c),i=n(11),a=n(22),o=n(0),s=n(13),l=n.n(s),u=n(27),b=n(24),d=n(48),j=n(153),p=function(){var e=Object(o.useState)(new l.a(0)),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(u.c)().account,p=Object(d.c)(),x=Object(j.a)().fastRefresh;return Object(o.useEffect)((function(){s&&function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.methods.allowance(s,Object(b.f)()).call();case 2:t=e.sent,c(new l.a(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,p,x]),n},x=function(e,t,n){var c=Object(u.c)().account,s=Object(o.useState)(new l.a(0)),b=Object(a.a)(s,2),d=b[0],j=b[1];return Object(o.useEffect)((function(){(function(){var n=Object(i.a)(r.a.mark((function n(){var i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.methods.allowance(c,t).call();case 3:i=n.sent,j(new l.a(i)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}})()()}),[c,t,e,n]),d}},881:function(e,t,n){"use strict";var c=3600,r=86400,i=2629800,a=31557600;t.a=function(e){var t=e,n={years:0,months:0,days:0,hours:0,minutes:0,seconds:0};return t>=a&&(n.years=Math.floor(t/a),t-=n.years*a),t>=i&&(n.months=Math.floor(t/i),t-=n.months*i),t>=r&&(n.days=Math.floor(t/r),t-=n.days*r),t>=c&&(n.hours=Math.floor(t/c),t-=n.hours*c),t>=60&&(n.minutes=Math.floor(t/60),t-=60*n.minutes),n.seconds=t,n}}}]);
//# sourceMappingURL=7.0ab4fa1a.chunk.js.map