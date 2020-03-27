(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{34:function(e,t,a){e.exports=a(83)},39:function(e,t,a){},40:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var l=a(0),o=a.n(l),n=a(9),c=a.n(n),r=(a(39),a(40),a(8)),s=a(32),i=a(11),d=a.n(i),m=d.a.create({baseURL:"https://hpb.health.gov.lk/api/"}),u=d.a.create({baseURL:"https://api.covid19api.com/"});d.a.defaults.headers.common["Content-Type"]="application/json",d.a.defaults.headers.common.Accept="application/json";var v,h={get:f,getStatistics_HPB:function(){return f(m,"","get-current-statistical",[]).then((function(e){return e.data}))},getStatistics_Global:function(){return f(u,"","summary",[]).then((function(e){return e}))}};function f(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return b(e,"get",t,a,null,l,o)}function b(e,t,a){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4?arguments[4]:void 0,n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,r=g(a,l,n,c),s=E(r,t,o);return e.request(s).then((function(e){return e&&e.data})).catch((function(e){throw console.log(e),e}))}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=e+(t?"/"+t:"");a.forEach((function(e){o+="/"+e}));var n="";return l&&(n+="?"+s.stringify(l)),o+=n}function E(e,t,a,l){var o={url:e,method:t,data:a};return l&&(o.responseType=l),o}!function(e){e[e.Confirmed=0]="Confirmed",e[e.Deaths=1]="Deaths",e[e.Recovered=2]="Recovered",e[e.NewConfirmed=3]="NewConfirmed",e[e.NewDeaths=4]="NewDeaths",e[e.NewRecovered=5]="NewRecovered"}(v||(v={}));var p=[{label:"Total Confirmed",value:v.Confirmed},{label:"Total Deaths",value:v.Deaths},{label:"Total Recovered",value:v.Recovered},{label:"New Confirmed",value:v.NewConfirmed},{label:"New Deaths",value:v.NewDeaths},{label:"New Recovered",value:v.NewRecovered}],w=[{label:"Desc",value:0},{label:"Asc",value:1}],_=a(85),N=a(86),C=a(87),T=a(88),y=a(89),D=a(94),S=a(93),L=a(90),R=a(91),j=a(92),O=a(13),k=a(17),B=a(12),A=a.n(B),G=function(){var e=Object(l.useState)(),t=Object(r.a)(e,2),a=t[0],n=t[1],c=Object(l.useState)(new Date),s=Object(r.a)(c,2),i=s[0],d=s[1],m=Object(l.useState)(new Date),u=Object(r.a)(m,2),f=u[0],b=u[1],g=Object(l.useState)(),E=Object(r.a)(g,2),B=E[0],G=E[1],I=Object(l.useState)(),F=Object(r.a)(I,2),M=F[0],x=F[1],P=Object(l.useState)((new Date).getTime()),W=Object(r.a)(P,2),H=W[0],U=W[1],V=Object(l.useState)(),J=Object(r.a)(V,2),Y=J[0],q=J[1],z=Object(l.useState)(),$=Object(r.a)(z,2),K=$[0],Q=$[1],X=Object(l.useState)(),Z=Object(r.a)(X,2),ee=Z[0],te=Z[1],ae=Object(l.useState)(v.Confirmed),le=Object(r.a)(ae,2),oe=le[0],ne=le[1],ce=Object(l.useState)(v.Confirmed),re=Object(r.a)(ce,2),se=re[0],ie=re[1];Object(l.useEffect)((function(){de()}),[]),Object(l.useEffect)((function(){var e=setTimeout((function(){U((new Date).getTime()),de()}),3e5);return function(){clearTimeout(e)}}),[H]),Object(l.useLayoutEffect)((function(){var e=function(){var e=document.getElementById("goToTopButton"),t=document.getElementById("goToGlobalButton"),a=document.getElementById("global");e&&t&&(window.scrollY>(a?a.offsetTop:500)/2?t.style.display="none":t.style.display="block",window.scrollY>900?e.style.display="block":e.style.display="none")};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);var de=function(){h.getStatistics_HPB().then((function(e){d(new Date(e.update_date_time));var t={local_new_cases:e.local_new_cases,local_total_cases:e.local_total_cases,local_total_number_of_individuals_in_hospitals:e.local_total_number_of_individuals_in_hospitals,local_deaths:e.local_deaths,local_new_deaths:e.local_new_deaths,local_recovered:e.local_recovered,global_new_cases:e.global_new_cases,global_total_cases:e.global_total_cases,global_deaths:e.global_deaths,global_new_deaths:e.global_new_deaths,global_recovered:e.global_recovered};n(t);var a={labels:["Active","Deaths","Recovered"],datasets:[{label:"Global Cases",data:[t.global_total_cases-t.global_recovered-t.global_deaths,t.global_deaths,t.global_recovered],backgroundColor:["#F1C40F","#CB4335","#27AE60"],borderWidth:0}]};G({labels:["Active","Deaths","Recovered"],datasets:[{label:"Local Cases",data:[t.local_total_cases-t.local_recovered-t.local_deaths,t.local_deaths,t.local_recovered],backgroundColor:["#F1C40F","#CB4335","#27AE60"],borderWidth:0}]}),x(a)})),h.getStatistics_Global().then((function(e){q(e.Countries),b(e.Date)}))},me={maintainAspectRatio:!0,aspectRatio:1,rotation:.5*Math.PI,legend:{labels:{fontColor:"#fff"},position:"bottom"},layout:{padding:{left:0,right:0,top:0,bottom:0}}},ue=function(e,t){var a=e.TotalConfirmed,l=t.TotalConfirmed;switch(oe){case v.Deaths:a=e.TotalDeaths,l=t.TotalDeaths;break;case v.Recovered:a=e.TotalRecovered,l=t.TotalRecovered;break;case v.NewConfirmed:a=e.NewConfirmed,l=t.NewConfirmed;break;case v.NewDeaths:a=e.NewDeaths,l=t.NewDeaths;break;case v.NewRecovered:a=e.NewRecovered,l=t.NewRecovered}if(0===se){if(a<l)return 1;if(a>l)return-1}if(1===se){if(a>l)return 1;if(a<l)return-1}return 0};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"local"},o.a.createElement("div",{className:"header-row"},o.a.createElement("h1",null,"Covid-19"),o.a.createElement("h3",null,"Sri Lanka"),o.a.createElement("p",null,"Updated at ",A.a.utc(new Date(i)).local().format("ddd, MMM D hh:mm:ss a"),o.a.createElement("br",null),"Data from ",o.a.createElement("a",{href:"https://hpb.health.gov.lk/",target:"_blank",rel:"noopener noreferrer"},"HPB | Live updates on New Coronavirus (COVID-19) outbreak"))),o.a.createElement("div",{className:"row-panel"},o.a.createElement(C.a,{className:"btn",type:"button",onClick:function(){return de()}},"Reload data")),o.a.createElement("div",{className:"data-panel"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"column"},o.a.createElement("div",{className:"title"},o.a.createElement("h2",null,"Local Cases: ",a&&a.local_total_cases.toLocaleString()),o.a.createElement("span",null,o.a.createElement("p",null,o.a.createElement("small",null,a&&"( Total cases: ".concat(a.local_total_cases.toLocaleString(),", New cases: ").concat(a.local_new_cases.toLocaleString(),", New deaths: ").concat(a.local_new_deaths.toLocaleString(),", In Hospital: ").concat(a.local_total_number_of_individuals_in_hospitals.toLocaleString()," )"))))),o.a.createElement("div",{className:"chart"},o.a.createElement(O.Chart,{width:"",type:"pie",data:B,options:me}))),o.a.createElement("div",{className:"column"},o.a.createElement("div",{className:"title"},o.a.createElement("h2",null,"Global Cases: ",a&&a.global_total_cases.toLocaleString()),o.a.createElement("span",null,o.a.createElement("p",null,o.a.createElement("small",null,a&&"( Total cases: ".concat(a.global_total_cases.toLocaleString(),", New cases: ").concat(a.global_new_cases.toLocaleString(),", New deaths: ").concat(a.global_new_deaths.toLocaleString()," )"))))),o.a.createElement("div",{className:"chart"},o.a.createElement(O.Chart,{width:"",type:"pie",data:M,options:me}))))),o.a.createElement("div",{className:"padding-top-xlg"})),o.a.createElement("div",{id:"global"},o.a.createElement("div",{className:"padding-top-lg"}),Y&&o.a.createElement("div",null,o.a.createElement("div",{className:"header-row"},o.a.createElement("h1",null,"Covid-19"),o.a.createElement("h3",null,"Global Summaries"),o.a.createElement("p",null,"Updated at ",A.a.utc(new Date(f)).local().format("ddd, MMM D hh:mm:ss a"),o.a.createElement("br",null),"Data from ",o.a.createElement("a",{href:"https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest",target:"_blank",rel:"noopener noreferrer"},"Coronavirus COVID19 API"))),o.a.createElement("div",{className:"row-panel"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"column"},o.a.createElement(T.a,null,o.a.createElement(y.a,{value:ee||"",onChange:function(e){return e.target&&te(e.target.value)},placeholder:"Enter search term here..."}),ee&&o.a.createElement(D.a,{className:"addon",addonType:"append"},o.a.createElement(C.a,{type:"button",onClick:function(){return te(void 0)},title:"Clear Search Term"},o.a.createElement("i",{className:"material-icons"},"clear"))))),o.a.createElement("div",{className:"column"},o.a.createElement(k.a,{value:p.filter((function(e){return e.value===oe})),placeholder:"Sort By",options:p,onChange:function(e){e&&ne(e.value)}})),o.a.createElement("div",{className:"column"},o.a.createElement(k.a,{value:w.filter((function(e){return e.value===se})),options:w,onChange:function(e){e&&ie(e.value)}})))),o.a.createElement("div",{className:"data-panel"},function(e){var t=e.filter((function(e){return e.TotalConfirmed&&(!ee||e.Country.toLocaleLowerCase().includes((ee||"").toLocaleLowerCase()))})).sort(ue);return t.length>0?o.a.createElement("div",{className:"row"},t.map((function(e,t){return o.a.createElement("div",{key:t,className:"column-4"},o.a.createElement("div",{className:"title"},o.a.createElement("h2",null,e.Country,": ",e.TotalConfirmed.toLocaleString()),o.a.createElement("p",null,"Total: ",e.TotalConfirmed.toLocaleString()," ( New: ",e.NewConfirmed.toLocaleString()," )",o.a.createElement("br",null),"Total Deaths: ",e.TotalDeaths.toLocaleString()," ( New: ",e.NewDeaths.toLocaleString()," )",o.a.createElement("br",null),"Total Recovered: ",e.TotalRecovered.toLocaleString()," ( New: ",e.NewRecovered.toLocaleString()," )",o.a.createElement("br",null)),o.a.createElement(C.a,{className:"btn",type:"button",onClick:function(){return Q(e)}},"View ",e.Country,"'s Chart")))}))):o.a.createElement("div",{className:"fixed-row"},o.a.createElement("p",null,'No results found for "',ee,'"'))}(Y)),K&&o.a.createElement(S.a,{isOpen:void 0!==K,toggle:function(){return Q(void 0)}},o.a.createElement(L.a,{className:"chart-modal",toggle:function(){return Q(void 0)}},o.a.createElement("h2",null,K.Country)),o.a.createElement(R.a,{className:"chart-modal"},function(e){var t={labels:["Active","Deaths","Recovered"],datasets:[{label:"Local Cases",data:[e.TotalConfirmed-e.TotalRecovered-e.TotalDeaths,e.TotalDeaths,e.TotalRecovered],backgroundColor:["#F1C40F","#CB4335","#27AE60"],borderWidth:0}]};return o.a.createElement(o.a.Fragment,null,o.a.createElement(O.Chart,{width:"",type:"pie",data:t,options:me}),o.a.createElement("div",{className:"modalRow"},o.a.createElement(_.a,null,o.a.createElement(N.a,{md:6,xs:6},"Total: "),o.a.createElement(N.a,null,e.TotalConfirmed," ( New: ",e.NewConfirmed.toLocaleString()," )")),o.a.createElement(_.a,null,o.a.createElement(N.a,{md:6,xs:6},"Total Deaths: "),o.a.createElement(N.a,null,e.TotalDeaths," ( New: ",e.NewDeaths.toLocaleString()," )")),o.a.createElement(_.a,null,o.a.createElement(N.a,{md:6,xs:6},"Total Recovered: "),o.a.createElement(N.a,null,e.TotalRecovered," ( New: ",e.NewRecovered.toLocaleString()," )"))))}(K)),o.a.createElement(j.a,{className:"chart-modal footer"},o.a.createElement(C.a,{className:"btn",type:"button",onClick:function(){return Q(void 0)}},"Close Chart"))))),o.a.createElement(C.a,{type:"button",id:"goToTopButton",onClick:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},title:"Go to top"},"Top"),o.a.createElement(C.a,{type:"button",id:"goToGlobalButton",onClick:function(){var e=document.getElementById("global");document.body.scrollTop=e?e.offsetTop:0,document.documentElement.scrollTop=e?e.offsetTop:0},title:"Go to top"},"Global"))};var I=function(){return o.a.createElement("div",{className:"wrapper"},o.a.createElement(G,null))};a(82),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.bf38b06b.chunk.js.map