(this.webpackJsonptikitoken=this.webpackJsonptikitoken||[]).push([[2],{38:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var a=n(12),i=n(5),s=n.n(i),u=s.a.createContext(),p=function(e){var t=e.children,n=Object(i.useState)(!1),p=Object(a.a)(n,2),r=p[0],o=p[1];function y(){o(!r)}function d(){o(!1)}var l=Object(i.useMemo)((function(){return{isSidebarOpen:r,toggleSidebar:y,closeSidebar:d}}),[r]);return s.a.createElement(u.Provider,{value:l},t)}},46:function(e,t,n){"use strict";var a=n(5),i=n.n(a);t.a=function(){return i.a.createElement("div",{className:"w-full h-screen p-6 text-lg font-medium text-gray-600 dark:text-gray-400 dark:bg-gray-900"},"Loading...")}},54:function(e,t,n){e.exports=n(76)},64:function(e,t){},72:function(e,t){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n.n(a),s=n(32),u=n.n(s),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function r(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var o=n(36),y=n(12),d=n(29),l=n(7),m=n(28);var c=function(){var e=Object(a.useState)(""),t=Object(y.a)(e,2),n=t[0],s=t[1],u=Object(l.g)();return Object(a.useEffect)((function(){u.pathname.slice(1)?setTimeout((function(){return s("Navigated to ".concat(u.pathname.slice(1)," page."))}),500):s("")}),[u]),i.a.createElement("span",{className:"sr-only",role:"status","aria-live":"polite","aria-atomic":"true"},n)},b=Object(a.lazy)((function(){return n.e(13).then(n.bind(null,227))})),T=new m.a.providers.JsonRpcProvider("https://bsc-dataseed1.defibit.io/");new m.a.Contract("0x790612de7b0e2fff7c5ebc2619f86fa5818c6f3f",[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"bool",name:"isExcluded",type:"bool"}],name:"ExcludeFromFees",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"maxTransactionAmount",type:"uint256"}],name:"MaxTransactionAmountUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"presaleWallet",type:"address"}],name:"PresaleEnded",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"iterations",type:"uint256"},{indexed:!1,internalType:"uint256",name:"claims",type:"uint256"},{indexed:!1,internalType:"bool",name:"automatic",type:"bool"},{indexed:!1,internalType:"uint256",name:"gas",type:"uint256"},{indexed:!1,internalType:"address",name:"processor",type:"address"}],name:"Processed",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokensSwapped",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"SendDividends",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokensSwapped",type:"uint256"},{indexed:!1,internalType:"uint256",name:"ethReceived",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tokensIntoLiqudity",type:"uint256"}],name:"SwapAndLiquify",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"claim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"dividendTokenBalanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"dividendTracker",outputs:[{internalType:"contract MOAIDividendTracker",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"bool",name:"excluded",type:"bool"}],name:"excludeFromFees",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAccountDividendsInfo",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getAccountDividendsInfoAtIndex",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLastProcessedIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isExcludedFromFees",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"liquidityFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"liquidityWallet",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxTransactionAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"presaleEndTimestamp",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"presaleOver",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"presaleWallet",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"gas",type:"uint256"}],name:"process",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxTransactionAmount",type:"uint256"}],name:"setMaxTransactionAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_presaleWallet",type:"address"}],name:"setPresaleOver",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"swapTokensAtAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"taxFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalFees",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"uniswapV2Pair",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"uniswapV2Router",outputs:[{internalType:"contract IUniswapV2Router02",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"withdrawableDividendOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}],T),new m.a.Contract("0x7fe2dbb54ba7230f905ff1a828da7826c6bcf90e",[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"weiAmount",type:"uint256"}],name:"DividendWithdrawn",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"uint256",name:"weiAmount",type:"uint256"}],name:"DividendsDistributed",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"ExcludeFromDividends",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"accumulativeDividendOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"claimWait",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"distributeDividends",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"dividendOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"excludeFromDividends",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"excludedFromDividends",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAccount",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getAccountAtIndex",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLastProcessedIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"lastClaimTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"lastProcessedIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"minimumTokenBalanceForDividends",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"gas",type:"uint256"}],name:"process",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"account",type:"address"}],name:"processAccount",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"account",type:"address"},{internalType:"uint256",name:"newBalance",type:"uint256"}],name:"setBalance",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdrawDividend",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"withdrawableDividendOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"withdrawnDividendOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}],T);var f=function(){var e=Object(a.useState)(0),t=Object(y.a)(e,2),n=t[0],s=t[1],u=Object(a.useState)(0),p=Object(y.a)(u,2),r=p[0],o=p[1],m=Object(a.useState)(0),T=Object(y.a)(m,2),f=T[0],v=T[1],w=Object(a.useState)(0),M=Object(y.a)(w,2),x=M[0],g=M[1],O=Object(a.useState)("N/A"),h=Object(y.a)(O,2),A=h[0],S=h[1],j=Object(a.useState)(!0),k=Object(y.a)(j,2),E=k[0],D=(k[1],Object(a.useState)(!0)),P=Object(y.a)(D,2),F=(P[0],P[1],Object(a.useState)(localStorage.getItem("address")||"")),W=Object(y.a)(F,2),I=W[0],R=W[1];Object(a.useEffect)((function(){"0x"!==I.substring(0,2)&&"0X"!==I.substring(0,2)||(localStorage.getItem("address")!==I&&localStorage.setItem("address",I),C(I))}),[I,E]);var C=function(){};return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,null,i.a.createElement(c,null),i.a.createElement(l.d,null,i.a.createElement(l.b,{path:"/",render:function(e){return i.a.createElement(b,Object.assign({},e,{address:I,setAddress:R,holdings:n,setHoldings:s,paid:r,setPaid:o,pending:f,setPending:v,recent:x,setRecent:g,timeSincePayout:A,setTimeSincePayout:S}))}})),i.a.createElement(l.a,{exact:!0,from:"/",to:{pathname:"/dashboard",state:{address:I,holdings:n,paid:r,pending:f,recent:x,timeSincePayout:A}}})))},v=n(38),w=n(46);n(75);u.a.render(i.a.createElement(v.b,null,i.a.createElement(a.Suspense,{fallback:i.a.createElement(w.a,null)},i.a.createElement(o.Windmill,{usePreferences:!0,dark:!0},i.a.createElement(f,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):r(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):r(t,e)}))}}()}},[[54,3,4]]]);
//# sourceMappingURL=main.e124d731.chunk.js.map