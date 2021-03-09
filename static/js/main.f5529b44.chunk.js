(this["webpackJsonpcovid-world"]=this["webpackJsonpcovid-world"]||[]).push([[0],{195:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),s=a(35),n=a.n(s),o=(a(85),a(86),a(17)),i=a.n(o),l=a(23),d=a(5),u=a(67),b=a(218),j=a(213),h=a(217),f=a(26),x=a(77),m=function(e){return Object(x.a)(e).sort((function(e,t){return e.cases>t.cases?-1:1}))},v=a(9),O=a.n(v),p=function(e){return e?"+".concat(O()(e).format("0.0a")):"+0"},g=a(16),k=a(219),w=a(1);var y=function(e){var t=e.title,a=e.cases,r=e.total,c=e.active,s=(e.casesType,Object(g.a)(e,["title","cases","total","active","casesType"])),n="";return"Cases"===t?n="border-t-4 border-red-500":"Recovered"===t?n="border-t-4 border-green-500":"Deaths"===t&&(n="border-t-4 border-blue-500"),Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(b.a,{onClick:s.onClick,className:"dark:bg-darkModeCards dark:text-white  flex-1 cursor-pointer mt-6 sm:mt-0 min-w-full sm:min-w-0",id:"infoBox",children:Object(w.jsxs)(j.a,{className:"".concat(c&&n),children:[Object(w.jsx)(k.a,{color:"textSecondary",className:"dark:text-textDarkMode",children:t}),Object(w.jsx)("h1",{className:"cases",children:a}),Object(w.jsxs)(k.a,{color:"textSecondary",className:"text-total total dark:text-textDarkMode",children:[r," Total"]})]})})})},N=a(73),C={cases:{hex:"#EF4444",rgb:"rgb(239, 68, 68)",half_op:"rgba(239, 68, 68, 0.5)",multiplier:200},recovered:{hex:"#10B981",rgb:"rgb(16, 185, 129)",half_op:"rgba(16, 185, 129, 0.5)",multiplier:200},deaths:{hex:"#3B82F6",rgb:"rgb(59, 130, 246)",half_op:"rgba(59, 130, 246, 0.5)",multiplier:600}},M={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return O()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return O()(e).format("0a")}}}]}},S=function(e,t){var a,r=[];for(var c in e.cases){if(a){var s={x:c,y:e[t][c]-a};r.push(s)}a=e[t][c]}return r};var z=function(e){var t=e.casesType,a=Object(r.useState)({}),c=Object(d.a)(a,2),s=c[0],n=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var a=S(e,t);n(a)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(w.jsx)("div",{children:(null===s||void 0===s?void 0:s.length)>0&&Object(w.jsx)(N.Line,{data:{datasets:[{backgroundColor:C[t].half_op,borderColor:C[t].hex,data:s}]},options:M})})};var _=function(e){var t=e.countries;return Object(w.jsx)("div",{className:"mt-5 overflow-scroll h-96 w-full overflow-x-hidden text-tableGray odd:text-white ",id:"table",children:t.map((function(e){var t=e.country,a=e.cases,r=e.index;return Object(w.jsxs)("tr",{className:"flex justify-between odd:bg-oddPairWhite dark:odd:bg-oddPair",children:[Object(w.jsx)("td",{className:"p-2",children:t},r),Object(w.jsx)("td",{className:"p-2",children:Object(w.jsx)("strong",{children:O()(a).format()})},r)]},r)}))})};var B=function(e){var t=e.children;return Object(w.jsx)("div",{className:"top-0 w-screen bg-white shadow-lg dark:bg-darkModeCards transition duration-500 dark:text-white",children:Object(w.jsx)("div",{className:"mx-auto ",children:t})})},D=a(215),T=a(216),A=a(221),E=a(220),I=a(214),F={cases:{hex:"#EF4444",rgb:"rgb(239, 68, 68)",half_op:"rgba(239, 68, 68, 0.5)",multiplier:200},recovered:{hex:"#10B981",rgb:"rgb(16, 185, 129)",half_op:"rgba(16, 185, 129, 0.5)",multiplier:200},deaths:{hex:"#3B82F6",rgb:"rgb(59, 130, 246)",half_op:"rgba(59, 130, 246, 0.5)",multiplier:600}},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return Object(w.jsx)(E.a,{center:[e.countryInfo.lat,e.countryInfo.long],pathOptions:{color:F[t].hex,fillColor:F[t].hex},fillOpacity:.4,radius:Math.sqrt(e[t])*F[t].multiplier,children:Object(w.jsx)(I.a,{children:Object(w.jsxs)("div",{className:"info-container",children:[Object(w.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(w.jsx)("div",{className:"info-name",children:e.country}),Object(w.jsxs)("div",{className:"info-confirmed",children:["Cases: ",O()(e.cases).format("0,0")]}),Object(w.jsxs)("div",{className:"info-recovered",children:["Recovered: ",O()(e.recovered).format("0,0")]}),Object(w.jsxs)("div",{className:"info-deaths",children:["Deaths: ",O()(e.deaths).format("0,0")]})]})})})}))};function R(e){var t=e.center,a=e.zoom;return Object(D.a)().setView(t,a),null}var W=function(e){var t=e.center,a=e.zoom,r=e.countries,c=e.casesType;return Object(w.jsx)("div",{className:"h-96 bg-white p-4 rounded-2xl mt-4 shadow-lg map dark:bg-darkModeCards transition duration-1000",id:"map",children:Object(w.jsxs)(T.a,{center:t,zoom:a,children:[Object(w.jsx)(R,{center:t,zoom:a}),Object(w.jsx)(A.a,{url:"https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=ea79ab91-7718-4ab6-b8e3-50a5402b94e5"}),L(r,c)]})})};function P(e){var t=e.center,a=e.zoom;return Object(D.a)().setView(t,a),null}var J=function(e){var t=e.center,a=e.zoom,r=e.countries,c=e.casesType;return Object(w.jsx)("div",{className:"h-96 bg-white p-4 rounded-2xl mt-4 shadow-lg map dark:bg-darkModeCards transition duration-1000",id:"map",children:Object(w.jsxs)(T.a,{center:t,zoom:a,children:[Object(w.jsx)(P,{center:t,zoom:a}),Object(w.jsx)(A.a,{url:"https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=ea79ab91-7718-4ab6-b8e3-50a5402b94e5"}),L(r,c)]})})},V=a(74),Y=a.n(V);var q=a.p+"static/media/LightMode.d8ecdf14.svg",G=a.p+"static/media/DarkMode.b275c866.svg";var U=function(e){Object(u.a)(e);var t=Object(r.useState)([]),a=Object(d.a)(t,2),c=a[0],s=a[1],n=Object(r.useState)("worldwide"),o=Object(d.a)(n,2),x=o[0],v=o[1],O=Object(r.useState)([]),g=Object(d.a)(O,2),k=g[0],N=g[1],C=Object(r.useState)([]),M=Object(d.a)(C,2),S=M[0],D=M[1],T=Object(r.useState)({lat:34.80746,lng:-40.4796}),A=Object(d.a)(T,2),E=A[0],I=A[1],F=Object(r.useState)(3),L=Object(d.a)(F,2),R=L[0],P=L[1],V=Object(r.useState)([]),U=Object(d.a)(V,2),H=U[0],K=U[1],Q=Object(r.useState)("cases"),X=Object(d.a)(Q,2),Z=X[0],$=X[1],ee=function(){var e=Object(r.useState)("light"),t=Object(d.a)(e,2),a=t[0],c=t[1],s="dark"===a?"light":"dark";return Object(r.useEffect)((function(){var e=window.document.documentElement;e.classList.remove(s),e.classList.add(a)}),[a,s]),[s,c]}(),te=Object(d.a)(ee,2),ae=te[0],re=te[1],ce=Object(r.useState)((function(){return!1})),se=Object(d.a)(ce,2),ne=se[0],oe=se[1];Object(r.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){N(e)}))}),[]),Object(r.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=m(e);D(a),K(e),s(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var ie=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,v(a),r="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=5,fetch(r).then((function(e){return e.json()})).then((function(e){v(a),N(e),I([e.countryInfo.lat,e.countryInfo.long]),P(6)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le="dark"===ae?Object(w.jsx)(W,{center:E,zoom:R,countries:H,casesType:Z,className:"transition duration-1000"}):Object(w.jsx)(J,{center:E,zoom:R,countries:H,casesType:Z,className:"transition duration-1000"}),de="dark"===ae?Object(w.jsx)("img",{src:q,className:"h-12"}):Object(w.jsx)("img",{src:G,className:"h-12"});return Object(w.jsxs)("div",{className:"relative dark:bg-darkModeBackground dark:text-white h-screen w-screen",children:[Object(w.jsx)(B,{children:Object(w.jsxs)("div",{className:"flex items-center justify-between mx-0 sm:mx-4 p-4",children:[Object(w.jsx)(h.a,{enterAnimation:f.a.scale.enter,exitAnimation:f.a.scale.exit,children:de}),Object(w.jsx)("div",{className:"flex items-center justify-end p-4",children:Object(w.jsx)("button",{onClick:function(){return re(ae)},className:"flex flex-row rounded-full items-center color-white cursor-pointer active:outline-none",children:Object(w.jsx)(Y.a,{size:80,onChange:oe,checked:ne})})})]})}),Object(w.jsxs)("div",{className:"flex flex-col lg:flex-row justify-evenly p-5 dark:bg-darkModeBackground ",children:[Object(w.jsxs)("div",{className:"flex-left-side mb-10 lg:mb-0",children:[Object(w.jsx)("div",{className:"flex justify-center lg:justify-between items-center mb-6 sm:mb-12",children:Object(w.jsx)("form",{children:Object(w.jsxs)("select",{value:x,onChange:ie,className:"w-32 bg-transparent border-b-2 border-darkModeBackground dark:border-oddPairWhite p-2 dark:text-white active:border-blue-500 focus:border-blue-500 ",children:[Object(w.jsx)("option",{value:"worldwide",className:"text-black",children:"Worldwide"}),c.map((function(e,t){return Object(w.jsx)("option",{value:e.value,className:"text-black",children:e.name},t)}))]})})}),Object(w.jsxs)("div",{className:"flex justify-between flex-col sm:flex-row",children:[Object(w.jsx)(y,{onClick:function(e){return $("cases")},title:"Cases",active:"cases"===Z,cases:p(k.todayCases),total:p(k.cases)}),Object(w.jsx)(y,{onClick:function(e){return $("recovered")},title:"Recovered",active:"recovered"===Z,cases:p(k.todayRecovered),total:p(k.recovered)}),Object(w.jsx)(y,{onClick:function(e){return $("deaths")},title:"Deaths",active:"deaths"===Z,cases:p(k.todayDeaths),total:p(k.deaths)})]}),Object(w.jsx)(h.a,{enterAnimation:[f.a.scale.enter,{options:{duration:300}}],exitAnimation:[f.a.scale.exit,{options:{duration:300}}],children:le})]}),Object(w.jsx)(b.a,{className:"dark:bg-darkModeCards",children:Object(w.jsxs)(j.a,{className:"dark:bg-darkModeCards dark:text-white",children:[Object(w.jsx)("h1",{className:"text-2xl font-bold text-center",children:"Live Cases by Country"}),Object(w.jsx)(_,{countries:S}),Object(w.jsxs)("h1",{className:"text-2xl font-bold mt-5 text-center",children:["Worldwide New"," ",Z.charAt(0).toUpperCase()+Z.substring(1)]}),Object(w.jsx)(z,{casesType:Z})]})})]})]})};n.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(U,{})}),document.getElementById("root"))},85:function(e,t,a){}},[[195,1,2]]]);
//# sourceMappingURL=main.f5529b44.chunk.js.map