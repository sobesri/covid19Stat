(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{117:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),l=a.n(o),c=(a(44),a(45),a(38)),d=a(8),s=a(36),i=a(16),m=a.n(i),u=m.a.create({baseURL:"https://hpb.health.gov.lk/api/"}),f=m.a.create({baseURL:"https://api.covid19api.com/"});m.a.defaults.headers.common["Content-Type"]="application/json",m.a.defaults.headers.common.Accept="application/json";var h,v={get:g,getStatistics_HPB:function(){return g(u,"","get-current-statistical",[]).then((function(e){return e.data}))},getStatistics_Global:function(){return g(f,"","summary",[]).then((function(e){return e}))}};function g(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return b(e,"get",t,a,null,n,r)}function b(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4?arguments[4]:void 0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,c=p(a,n,o,l),d=E(c,t,r);return e.request(d).then((function(e){return e&&e.data})).catch((function(e){throw console.log(e),e}))}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=e+(t?"/"+t:"");a.forEach((function(e){r+="/"+e}));var o="";return n&&(o+="?"+s.stringify(n)),r+=o}function E(e,t,a,n){var r={url:e,method:t,data:a};return n&&(r.responseType=n),r}!function(e){e[e.Confirmed=0]="Confirmed",e[e.Deaths=1]="Deaths",e[e.Recovered=2]="Recovered",e[e.NewConfirmed=3]="NewConfirmed",e[e.NewDeaths=4]="NewDeaths",e[e.NewRecovered=5]="NewRecovered"}(h||(h={}));h.Confirmed,h.Deaths,h.Recovered,h.NewConfirmed,h.NewDeaths,h.NewRecovered;var w=[{date:new Date(2020,2,10),recovered:0,deaths:0,confirmed:1},{date:new Date(2020,2,11),recovered:0,deaths:0,confirmed:1},{date:new Date(2020,2,12),recovered:0,deaths:0,confirmed:2},{date:new Date(2020,2,13),recovered:0,deaths:0,confirmed:4},{date:new Date(2020,2,14),recovered:0,deaths:0,confirmed:6},{date:new Date(2020,2,15),recovered:0,deaths:0,confirmed:11},{date:new Date(2020,2,16),recovered:0,deaths:0,confirmed:19},{date:new Date(2020,2,17),recovered:0,deaths:0,confirmed:29},{date:new Date(2020,2,18),recovered:0,deaths:0,confirmed:42},{date:new Date(2020,2,19),recovered:0,deaths:0,confirmed:53},{date:new Date(2020,2,20),recovered:0,deaths:0,confirmed:66},{date:new Date(2020,2,21),recovered:0,deaths:0,confirmed:72},{date:new Date(2020,2,22),recovered:0,deaths:0,confirmed:78},{date:new Date(2020,2,23),recovered:0,deaths:0,confirmed:87},{date:new Date(2020,2,24),recovered:2,deaths:0,confirmed:97},{date:new Date(2020,2,25),recovered:3,deaths:0,confirmed:102},{date:new Date(2020,2,26),recovered:3,deaths:0,confirmed:102},{date:new Date(2020,2,27),recovered:7,deaths:0,confirmed:106},{date:new Date(2020,2,28),recovered:9,deaths:1,confirmed:113},{date:new Date(2020,2,29),recovered:11,deaths:1,confirmed:117},{date:new Date(2020,2,30),recovered:14,deaths:2,confirmed:122},{date:new Date(2020,2,31),recovered:17,deaths:2,confirmed:143},{date:new Date(2020,3,1),recovered:21,deaths:2,confirmed:146},{date:new Date(2020,3,2),recovered:21,deaths:3,confirmed:151},{date:new Date(2020,3,3),recovered:22,deaths:4,confirmed:151},{date:new Date(2020,3,4),recovered:27,deaths:5,confirmed:162},{date:new Date(2020,3,5),recovered:33,deaths:5,confirmed:176},{date:new Date(2020,3,6),recovered:38,deaths:5,confirmed:178},{date:new Date(2020,3,7),recovered:42,deaths:6,confirmed:185},{date:new Date(2020,3,8),recovered:44,deaths:7,confirmed:189},{date:new Date(2020,3,9),recovered:49,deaths:7,confirmed:190},{date:new Date(2020,3,10),recovered:54,deaths:7,confirmed:197},{date:new Date(2020,3,11),recovered:54,deaths:7,confirmed:199},{date:new Date(2020,3,12),recovered:56,deaths:7,confirmed:210},{date:new Date(2020,3,13),recovered:56,deaths:7,confirmed:217},{date:new Date(2020,3,14),recovered:61,deaths:7,confirmed:233},{date:new Date(2020,3,15),recovered:63,deaths:7,confirmed:238},{date:new Date(2020,3,16),recovered:68,deaths:7,confirmed:238},{date:new Date(2020,3,17),recovered:77,deaths:7,confirmed:244},{date:new Date(2020,3,18),recovered:91,deaths:7,confirmed:254},{date:new Date(2020,3,19),recovered:91,deaths:7,confirmed:254}],_=a(122),D=a(10),C=a(13),N=a.n(C),y=a(37),T=a(14),k=(a(107),a(108),a(109),a(119)),S=a(120),L=a(121),R=a(126),O=a(123),j=a(124),P=a(125),x={maintainAspectRatio:!0,aspectRatio:1,rotation:.5*Math.PI,legend:{labels:{fontColor:"#fff"},position:"bottom"},layout:{padding:{left:0,right:0,top:0,bottom:0}}},B=function(e){var t=Object(n.useState)(),a=Object(d.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)(),s=Object(d.a)(c,2),i=s[0],m=s[1],u=Object(n.useState)(new Date),f=Object(d.a)(u,2),h=f[0],v=f[1],g=function(e,t){var a=e.TotalConfirmed,n=t.TotalConfirmed;return a<n?1:a>n?-1:0};Object(n.useEffect)((function(){l(e.data.Countries.sort(g)),v(e.data.Date)}),[e.data]);var b=function(e){return m(e)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header-row header"},r.a.createElement("h3",null,"Outbreak summaries across the world"),r.a.createElement("p",null,"Updated at ",N.a.utc(new Date(h)).local().format("ddd, MMM D hh:mm:ss a"))),r.a.createElement(k.a,null,r.a.createElement(S.a,{md:3,xs:0}),r.a.createElement(S.a,{className:"data-panel"},r.a.createElement(L.a,{placeholder:"Enter search term here...",onChange:function(t){var a=t.target?t.target.value:"",n=e.data.Countries;l(n.filter((function(e){return e.TotalConfirmed&&(!a||e.Country.toLocaleLowerCase().includes((a||"").toLocaleLowerCase()))})))}})),r.a.createElement(S.a,{md:3,xs:0})),r.a.createElement("div",{className:"table-wrapper"},r.a.createElement(y.DataTable,{value:o,paginator:!0,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} entries",rows:5,responsive:!0,emptyMessage:"No Records Found",rowsPerPageOptions:[5,10,20],onRowClick:function(e){b(e.data)}},r.a.createElement(T.Column,{className:"country",field:"Country",header:"Country",sortable:!0}),r.a.createElement(T.Column,{className:"confirmed",field:"TotalConfirmed",header:"Total Confirmed",sortable:!0,body:function(e){return e.TotalConfirmed.toLocaleString()}}),r.a.createElement(T.Column,{className:"active",field:"TotalActive",header:"Total Active",sortable:!0,body:function(e){return(e.TotalConfirmed-e.TotalRecovered-e.TotalDeaths).toLocaleString()}}),r.a.createElement(T.Column,{className:"recovered",field:"TotalRecovered",header:"Total Recovered",sortable:!0,body:function(e){return e.TotalRecovered.toLocaleString()}}),r.a.createElement(T.Column,{className:"deaths",field:"TotalDeaths",header:"Total Deaths",sortable:!0,body:function(e){return e.TotalDeaths.toLocaleString()}}),r.a.createElement(T.Column,{body:function(e){return r.a.createElement(_.a,{type:"button",onClick:function(){return b(e)},title:"View Summary"},r.a.createElement("i",{className:"material-icons"},"remove_red_eye"),r.a.createElement("span",null,"View Summary"))}}))),i&&r.a.createElement(R.a,{isOpen:void 0!==i,toggle:function(){return m(void 0)}},r.a.createElement(O.a,{className:"chart-modal",toggle:function(){return m(void 0)}},r.a.createElement("h2",null,i.Country)),r.a.createElement(j.a,{className:"chart-modal"},function(e){var t={labels:["Active","Recovered","Deaths"],datasets:[{label:"Local Cases",data:[e.TotalConfirmed-e.TotalRecovered-e.TotalDeaths,e.TotalDeaths,e.TotalRecovered],backgroundColor:["rgb(0, 119, 255)","rgb(39, 233, 0)","rgb(255, 38, 0)"],borderWidth:0}]};return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.Chart,{width:"",type:"pie",data:t,options:x}),r.a.createElement("div",{className:"modalRow"},r.a.createElement(k.a,null,r.a.createElement(S.a,{md:6,xs:6},"Total: "),r.a.createElement(S.a,null,e.TotalConfirmed.toLocaleString())),r.a.createElement(k.a,null,r.a.createElement(S.a,{md:6,xs:6},"Total Active: "),r.a.createElement(S.a,null,(e.TotalConfirmed-e.TotalRecovered-e.TotalDeaths).toLocaleString()," ( New: ",e.NewConfirmed.toLocaleString()," )")),r.a.createElement(k.a,null,r.a.createElement(S.a,{md:6,xs:6},"Total Deaths: "),r.a.createElement(S.a,null,e.TotalDeaths.toLocaleString()," ( New: ",e.NewDeaths.toLocaleString()," )")),r.a.createElement(k.a,null,r.a.createElement(S.a,{md:6,xs:6},"Total Recovered: "),r.a.createElement(S.a,null,e.TotalRecovered.toLocaleString()," ( New: ",e.NewRecovered.toLocaleString()," )"))))}(i)),r.a.createElement(P.a,{className:"chart-modal footer"},r.a.createElement(_.a,{className:"btn",type:"button",onClick:function(){return m(void 0)}},"Close Chart"))))},M=function(e){var t=e.summary,a=e.type,n=e.width,o=t.confirmed,l=t.deaths,c=t.recovered,d={labels:["Active","Recovered","Deaths"],datasets:[{label:"Local Cases",data:[o-c-l,c,l],backgroundColor:["rgb(0, 119, 255)","rgb(39, 233, 0)","rgb(255, 38, 0)"],borderWidth:0}]},s={maintainAspectRatio:!0,aspectRatio:1,rotation:.5*Math.PI,legend:{labels:{fontColor:"#fff"},position:"bottom"},layout:{padding:{left:0,right:0,top:0,bottom:0}}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.Chart,{width:n||"",type:a,data:d,options:s}))},A=function(e){var t=e.summaries,a=t?{labels:t.map((function(e){return e.country.length>10?e.country.replace(/[a-z ]/g,""):e.country})),datasets:[{label:"Active",data:t.map((function(e){return e.active})),backgroundColor:"rgb(0, 119, 255)",borderWidth:0},{label:"Recovered",data:t.map((function(e){return e.recovered})),backgroundColor:"rgb(39, 233, 0)",borderWidth:0},{label:"Deaths",data:t.map((function(e){return e.deaths})),backgroundColor:"rgb(255, 38, 0)",borderWidth:0}]}:null;return a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(D.Chart,{width:"",type:"horizontalBar",data:a,options:{maintainAspectRatio:!0,aspectRatio:1,rotation:1,legend:{labels:{fontColor:"#fff"},position:"bottom"},layout:{padding:{left:0,right:0,top:0,bottom:0}}}}))},I=function(){return r.a.createElement("div",{className:"dev-detail"},"Sobedan Sridaran\xa0 |",r.a.createElement(_.a,{type:"button",title:"LinkedIn"},r.a.createElement("a",{href:"https://www.linkedin.com/in/sobedan-sridaran/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-linkedin"}))),"|",r.a.createElement(_.a,{type:"button",title:"Github"},r.a.createElement("a",{href:"https://github.com/sobesri/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-github"}))),"|\xa0\xa0Provide Feedback :",r.a.createElement(_.a,{className:"comment",type:"button",title:"Feedback"},r.a.createElement("a",{href:"https://forms.gle/PsMxEjBuXfGdaB5B6",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-file-text-o"}))))},F=w.filter((function(e){return e.date&&e.date.getDay()===(new Date).getDay()})),G=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(new Date),s=Object(d.a)(l,2),i=s[0],m=s[1],u=Object(n.useState)((new Date).getTime()),f=Object(d.a)(u,2),h=f[0],g=f[1],b=Object(n.useState)(),p=Object(d.a)(b,2),E=p[0],C=p[1],y=Object(n.useState)(F),T=Object(d.a)(y,2),k=T[0],S=T[1],L=Object(n.useState)(!1),R=Object(d.a)(L,2),O=R[0],j=R[1];Object(n.useEffect)((function(){P()}),[]),Object(n.useEffect)((function(){var e=setTimeout((function(){g((new Date).getTime()),P()}),3e5);return function(){clearTimeout(e)}}),[h]),Object(n.useLayoutEffect)((function(){var e=function(){var e=document.getElementById("goToTopButton"),t=document.getElementById("goToGlobalButton"),a=document.getElementById("global");e&&t&&(window.scrollY>(a?a.offsetTop:500)/2?t.style.display="none":t.style.display="block",window.scrollY>900?e.style.display="block":e.style.display="none")};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);var P=function(){v.getStatistics_HPB().then((function(e){m(new Date(e.update_date_time));var t={local_new_cases:e.local_new_cases,local_total_cases:e.local_total_cases,local_total_number_of_individuals_in_hospitals:e.local_total_number_of_individuals_in_hospitals,local_deaths:e.local_deaths,local_new_deaths:e.local_new_deaths,local_recovered:e.local_recovered,global_new_cases:e.global_new_cases,global_total_cases:e.global_total_cases,global_deaths:e.global_deaths,global_new_deaths:e.global_new_deaths,global_recovered:e.global_recovered};o(t)})),v.getStatistics_Global().then((function(e){var t=e.Countries;t=t.filter((function(e,a){return t.map((function(e){return e.Slug})).indexOf(e.Slug)===a})),C(Object(c.a)({},e,{Countries:t}))}))},x=function(e,t){var a=e.TotalConfirmed,n=t.TotalConfirmed;return a<n?1:a>n?-1:0};return a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"local"},r.a.createElement("div",{className:"header-row"},r.a.createElement("h1",null,"Sri Lankan Covid-19 Outbreak Status"),r.a.createElement("p",null,"Updated at ",N.a.utc(new Date(i)).local().format("ddd, MMM D hh:mm:ss a"),r.a.createElement("br",null),"Data source: ",r.a.createElement("a",{href:"https://hpb.health.gov.lk/",target:"_blank",rel:"noopener noreferrer"},"HPB | Live updates on New Coronavirus (COVID-19) outbreak")),r.a.createElement(I,null)),r.a.createElement("div",{className:"data-panel"},r.a.createElement("div",{className:"row border-box-sm"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"chart padding-top-lg"},r.a.createElement(M,{type:"doughnut",summary:{confirmed:a.local_total_cases,deaths:a.local_deaths,recovered:a.local_recovered}})),r.a.createElement("div",{className:"row-panel padding-top-lg"},r.a.createElement("h2",null,"Total Cases: ",a&&a.local_total_cases.toLocaleString())),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column-4 data-border active"},"Active: ",(a.local_total_cases-a.local_recovered-a.local_deaths).toLocaleString()),r.a.createElement("div",{className:"column-4 data-border recovered"},"Recovered: ",a.local_recovered.toLocaleString()),r.a.createElement("div",{className:"column-4 data-border deaths"},"Deaths: ",a.local_deaths.toLocaleString())),r.a.createElement("div",{className:"row-panel"},r.a.createElement("div",{className:"updates data-border"},"Updates ",r.a.createElement("span",null,": "),"New cases : ",r.a.createElement("strong",null,a.local_new_cases.toLocaleString())," ",r.a.createElement("span",null,"- "),"New deaths : ",r.a.createElement("strong",null,a.local_new_deaths.toLocaleString())," ",r.a.createElement("span",null,"- "),"In Hospital : ",r.a.createElement("strong",null,a.local_total_number_of_individuals_in_hospitals.toLocaleString())))),r.a.createElement("div",{className:"column padding-top-lg"},r.a.createElement("div",{className:"chart line"},function(){var e={labels:k.map((function(e){return N.a.utc(e.date?new Date(e.date):new Date).local().format("MMM D")})),datasets:[{label:"Confirmed",data:k.map((function(e){return e.confirmed})),borderColor:"rgb(255, 255, 255)"},{label:"Active",data:k.map((function(e){return e.confirmed-e.deaths-e.recovered})),borderColor:"rgb(0, 119, 255)"},{label:"Recovered",data:k.map((function(e){return e.recovered})),borderColor:"rgb(39, 233, 0)"},{label:"Deaths",data:k.map((function(e){return e.deaths})),borderColor:"rgb(255, 38, 0)"}]},t={aspectRatio:O?1.2:1,responsive:!0,legend:{labels:{fontColor:"#fff"},position:"bottom"},layout:{padding:{left:0,right:0,top:0,bottom:10}},scales:{yAxes:[{display:!1}],xAxes:[{id:"date",type:"category",ticks:{callback:function(e){return e.split(" ")[1]}}},{id:"month",type:"category",gridLines:{drawOnChartArea:!1},ticks:{callback:function(e){return e.split(" ")[0]}}}]}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title"},r.a.createElement("strong",null,O?"":"Mean ","Progression of the outbreak"),r.a.createElement("br",null),r.a.createElement("small",null,"Data updated manually, last updated at ",r.a.createElement("strong",null,N.a.utc(new Date(2020,3,19,13,57,56)).local().format("ddd, MMM D hh:mm:ss a"))),r.a.createElement("br",null),"Source:\xa0",r.a.createElement("a",{href:"http://www.epid.gov.lk/web/index.php?option=com_content&view=article&id=225&Itemid=518&lang=en",target:"_blank",rel:"noopener noreferrer"},"epid.gov.lk/")),r.a.createElement(D.Chart,{className:O?"":"mean",width:"",type:"line",data:e,options:t}),r.a.createElement("div",null,r.a.createElement(_.a,{className:"btn-sm timeline-toggle-btn",type:"button",onClick:function(){O?(j(!1),S(F)):(j(!0),S(w))}},"Show ",O?"Mean":"Complete"," Timeline")))}())))),r.a.createElement("div",{className:"padding-top-xlg"})),r.a.createElement("div",{id:"global"},r.a.createElement("div",{className:"padding-top-lg"}),r.a.createElement("div",null,r.a.createElement("div",{className:"header-row"},r.a.createElement("h1",null,"Global Covid-19 Outbreak Status"),r.a.createElement("p",null,"Data sources: ",r.a.createElement("br",null)," ",r.a.createElement("a",{href:"https://hpb.health.gov.lk/",target:"_blank",rel:"noopener noreferrer"},"HPB | Live updates on New Coronavirus (COVID-19) outbreak")," ",r.a.createElement("br",null),r.a.createElement("a",{href:"https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest",target:"_blank",rel:"noopener noreferrer"},"Coronavirus COVID19 API"))),r.a.createElement("div",{className:"data-panel"},r.a.createElement("div",{className:"row border-box-sm"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"row-panel chart"},r.a.createElement(M,{type:"doughnut",summary:{confirmed:a.global_total_cases,deaths:a.global_deaths,recovered:a.global_recovered}})),r.a.createElement("div",{className:"row-panel padding-top-lg"},r.a.createElement("h2",null,"Global Cases: ",a.global_total_cases.toLocaleString())),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column-4 data-border active"},"Active: ",(a.global_total_cases-a.global_recovered-a.global_deaths).toLocaleString()),r.a.createElement("div",{className:"column-4 data-border recovered"},"Recovered: ",a.global_recovered.toLocaleString()),r.a.createElement("div",{className:"column-4 data-border deaths"},"Deaths: ",a.global_deaths.toLocaleString())),r.a.createElement("div",{className:"row-panel"},r.a.createElement("div",{className:"updates data-border"},"Updates ",r.a.createElement("span",null,": "),"New cases : ",r.a.createElement("strong",null,a.global_new_cases.toLocaleString())," ",r.a.createElement("span",null,"- "),"New deaths : ",r.a.createElement("strong",null,a.global_new_deaths.toLocaleString())))),r.a.createElement("div",{className:"column chart-bar"},r.a.createElement(A,{summaries:function(){var e=E&&E.Countries.sort(x);if(e)return e.slice(0,4).map((function(e){return{confirmed:e.TotalConfirmed,active:e.TotalConfirmed-e.TotalRecovered-e.TotalDeaths,deaths:e.TotalDeaths,recovered:e.TotalRecovered,country:e.Country}}))}()})))),r.a.createElement("div",{className:"data-panel"},r.a.createElement("div",{className:"padding-top-md"}),r.a.createElement("div",{className:"row-panel border-box-sm"},E&&r.a.createElement(B,{data:E}))))),r.a.createElement(_.a,{className:"floating-btn",type:"button",id:"goToTopButton",onClick:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},title:"Go to top"},"Top"),r.a.createElement(_.a,{className:"floating-btn",type:"button",id:"goToGlobalButton",onClick:function(){var e=document.getElementById("global");document.body.scrollTop=e?e.offsetTop:0,document.documentElement.scrollTop=e?e.offsetTop:0},title:"Go to Global"},"Global"),r.a.createElement(_.a,{className:"floating-btn",type:"button",id:"reloadButton",title:"Reload data",onClick:function(){return P()}},r.a.createElement("span",null,"Reload"),r.a.createElement("i",{className:"material-icons"},"refresh"))):r.a.createElement(r.a.Fragment,null)};var W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement(G,null)))};a(117),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},39:function(e,t,a){e.exports=a(118)},44:function(e,t,a){},45:function(e,t,a){}},[[39,1,2]]]);
//# sourceMappingURL=main.1844fa9e.chunk.js.map