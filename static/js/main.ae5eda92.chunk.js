(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{117:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(12),l=a.n(o),c=(a(44),a(45),a(38)),d=a(9),s=a(36),i=a(16),m=a.n(i),u=m.a.create({baseURL:"https://hpb.health.gov.lk/api/"}),f=m.a.create({baseURL:"https://api.covid19api.com/"});m.a.defaults.headers.common["Content-Type"]="application/json",m.a.defaults.headers.common.Accept="application/json";var h,v={get:g,getStatistics_HPB:function(){return g(u,"","get-current-statistical",[]).then((function(e){return e.data}))},getStatistics_Global:function(){return g(f,"","summary",[]).then((function(e){return e}))}};function g(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return b(e,"get",t,a,null,r,n)}function b(e,t,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=arguments.length>4?arguments[4]:void 0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,c=p(a,r,o,l),d=E(c,t,n);return e.request(d).then((function(e){return e&&e.data})).catch((function(e){throw console.log(e),e}))}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=e+(t?"/"+t:"");a.forEach((function(e){n+="/"+e}));var o="";return r&&(o+="?"+s.stringify(r)),n+=o}function E(e,t,a,r){var n={url:e,method:t,data:a};return r&&(n.responseType=r),n}!function(e){e[e.Confirmed=0]="Confirmed",e[e.Deaths=1]="Deaths",e[e.Recovered=2]="Recovered",e[e.NewConfirmed=3]="NewConfirmed",e[e.NewDeaths=4]="NewDeaths",e[e.NewRecovered=5]="NewRecovered"}(h||(h={}));h.Confirmed,h.Deaths,h.Recovered,h.NewConfirmed,h.NewDeaths,h.NewRecovered;var w=[{date:new Date(2020,2,10),recovered:0,deaths:0,confirmed:1},{date:new Date(2020,2,11),recovered:0,deaths:0,confirmed:1},{date:new Date(2020,2,12),recovered:0,deaths:0,confirmed:2},{date:new Date(2020,2,13),recovered:0,deaths:0,confirmed:4},{date:new Date(2020,2,14),recovered:0,deaths:0,confirmed:6},{date:new Date(2020,2,15),recovered:0,deaths:0,confirmed:11},{date:new Date(2020,2,16),recovered:0,deaths:0,confirmed:19},{date:new Date(2020,2,17),recovered:0,deaths:0,confirmed:29},{date:new Date(2020,2,18),recovered:0,deaths:0,confirmed:42},{date:new Date(2020,2,19),recovered:0,deaths:0,confirmed:53},{date:new Date(2020,2,20),recovered:0,deaths:0,confirmed:66},{date:new Date(2020,2,21),recovered:0,deaths:0,confirmed:72},{date:new Date(2020,2,22),recovered:0,deaths:0,confirmed:78},{date:new Date(2020,2,23),recovered:0,deaths:0,confirmed:87},{date:new Date(2020,2,24),recovered:2,deaths:0,confirmed:97},{date:new Date(2020,2,25),recovered:3,deaths:0,confirmed:102},{date:new Date(2020,2,26),recovered:3,deaths:0,confirmed:102},{date:new Date(2020,2,27),recovered:7,deaths:0,confirmed:106},{date:new Date(2020,2,28),recovered:9,deaths:1,confirmed:113},{date:new Date(2020,2,29),recovered:11,deaths:1,confirmed:117},{date:new Date(2020,2,30),recovered:14,deaths:2,confirmed:122},{date:new Date(2020,2,31),recovered:17,deaths:2,confirmed:143},{date:new Date(2020,3,1),recovered:21,deaths:2,confirmed:146},{date:new Date(2020,3,2),recovered:21,deaths:3,confirmed:151},{date:new Date(2020,3,3),recovered:22,deaths:4,confirmed:151},{date:new Date(2020,3,4),recovered:27,deaths:5,confirmed:162},{date:new Date(2020,3,5),recovered:33,deaths:5,confirmed:176},{date:new Date(2020,3,6),recovered:38,deaths:5,confirmed:178},{date:new Date(2020,3,7),recovered:42,deaths:6,confirmed:185},{date:new Date(2020,3,8),recovered:44,deaths:7,confirmed:189},{date:new Date(2020,3,9),recovered:49,deaths:7,confirmed:190},{date:new Date(2020,3,10),recovered:54,deaths:7,confirmed:197},{date:new Date(2020,3,11),recovered:54,deaths:7,confirmed:199},{date:new Date(2020,3,12),recovered:56,deaths:7,confirmed:210},{date:new Date(2020,3,13),recovered:56,deaths:7,confirmed:217},{date:new Date(2020,3,14),recovered:61,deaths:7,confirmed:233},{date:new Date(2020,3,15),recovered:63,deaths:7,confirmed:238},{date:new Date(2020,3,16),recovered:68,deaths:7,confirmed:238},{date:new Date(2020,3,17),recovered:77,deaths:7,confirmed:244},{date:new Date(2020,3,18),recovered:91,deaths:7,confirmed:254},{date:new Date(2020,3,19),recovered:96,deaths:7,confirmed:271},{date:new Date(2020,3,20),recovered:98,deaths:7,confirmed:304},{date:new Date(2020,3,21),recovered:98,deaths:7,confirmed:304}],_=a(122),D=a(10),N=a(13),C=a.n(N),y=a(37),T=a(14),S=(a(107),a(108),a(109),a(119)),k=a(120),L=a(121),R=a(126),O=a(123),j=a(124),x=a(125),P={maintainAspectRatio:!0,aspectRatio:1,rotation:.5*Math.PI,legend:{labels:{fontColor:"#fff"},position:"bottom"},layout:{padding:{left:0,right:0,top:0,bottom:0}}},B=function(e){var t=Object(r.useState)(),a=Object(d.a)(t,2),o=a[0],l=a[1],c=Object(r.useState)(),s=Object(d.a)(c,2),i=s[0],m=s[1],u=Object(r.useState)(new Date),f=Object(d.a)(u,2),h=f[0],v=f[1],g=function(e,t){var a=e.TotalConfirmed,r=t.TotalConfirmed;return a<r?1:a>r?-1:0};Object(r.useEffect)((function(){l(e.data.Countries.sort(g)),v(e.data.Date)}),[e.data]);var b=function(e){return m(e)};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"header-row header"},n.a.createElement("h3",null,"Outbreak summaries across the world"),n.a.createElement("p",null,"Updated at ",C.a.utc(new Date(h)).local().format("ddd, MMM D hh:mm:ss a"))),n.a.createElement(S.a,null,n.a.createElement(k.a,{md:3,xs:0}),n.a.createElement(k.a,{className:"data-panel"},n.a.createElement(L.a,{placeholder:"Enter search term here...",onChange:function(t){var a=t.target?t.target.value:"",r=e.data.Countries;l(r.filter((function(e){return e.TotalConfirmed&&(!a||e.Country.toLocaleLowerCase().includes((a||"").toLocaleLowerCase()))})))}})),n.a.createElement(k.a,{md:3,xs:0})),n.a.createElement("div",{className:"table-wrapper"},n.a.createElement(y.DataTable,{value:o,paginator:!0,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} entries",rows:5,responsive:!0,emptyMessage:"No Records Found",rowsPerPageOptions:[5,10,20],onRowClick:function(e){b(e.data)}},n.a.createElement(T.Column,{className:"country",field:"Country",header:"Country",sortable:!0}),n.a.createElement(T.Column,{className:"confirmed",field:"TotalConfirmed",header:"Total Confirmed",sortable:!0,body:function(e){return e.TotalConfirmed.toLocaleString()}}),n.a.createElement(T.Column,{className:"active",field:"TotalActive",header:"Total Active",sortable:!0,body:function(e){return(e.TotalConfirmed-e.TotalRecovered-e.TotalDeaths).toLocaleString()}}),n.a.createElement(T.Column,{className:"recovered",field:"TotalRecovered",header:"Total Recovered",sortable:!0,body:function(e){return e.TotalRecovered.toLocaleString()}}),n.a.createElement(T.Column,{className:"deaths",field:"TotalDeaths",header:"Total Deaths",sortable:!0,body:function(e){return e.TotalDeaths.toLocaleString()}}),n.a.createElement(T.Column,{body:function(e){return n.a.createElement(_.a,{type:"button",onClick:function(){return b(e)},title:"View Summary"},n.a.createElement("i",{className:"material-icons"},"remove_red_eye"),n.a.createElement("span",null,"View Summary"))}}))),i&&n.a.createElement(R.a,{isOpen:void 0!==i,toggle:function(){return m(void 0)}},n.a.createElement(O.a,{className:"chart-modal",toggle:function(){return m(void 0)}},n.a.createElement("h2",null,i.Country)),n.a.createElement(j.a,{className:"chart-modal"},function(e){var t={labels:["Active","Recovered","Deaths"],datasets:[{label:"Local Cases",data:[e.TotalConfirmed-e.TotalRecovered-e.TotalDeaths,e.TotalDeaths,e.TotalRecovered],backgroundColor:["rgb(0, 119, 255)","rgb(39, 233, 0)","rgb(255, 38, 0)"],borderWidth:0}]};return n.a.createElement(n.a.Fragment,null,n.a.createElement(D.Chart,{width:"",type:"pie",data:t,options:P}),n.a.createElement("div",{className:"modalRow"},n.a.createElement(S.a,null,n.a.createElement(k.a,{md:6,xs:6},"Total: "),n.a.createElement(k.a,null,e.TotalConfirmed.toLocaleString())),n.a.createElement(S.a,null,n.a.createElement(k.a,{md:6,xs:6},"Total Active: "),n.a.createElement(k.a,null,(e.TotalConfirmed-e.TotalRecovered-e.TotalDeaths).toLocaleString()," ( New: ",e.NewConfirmed.toLocaleString()," )")),n.a.createElement(S.a,null,n.a.createElement(k.a,{md:6,xs:6},"Total Deaths: "),n.a.createElement(k.a,null,e.TotalDeaths.toLocaleString()," ( New: ",e.NewDeaths.toLocaleString()," )")),n.a.createElement(S.a,null,n.a.createElement(k.a,{md:6,xs:6},"Total Recovered: "),n.a.createElement(k.a,null,e.TotalRecovered.toLocaleString()," ( New: ",e.NewRecovered.toLocaleString()," )"))))}(i)),n.a.createElement(x.a,{className:"chart-modal footer"},n.a.createElement(_.a,{className:"btn",type:"button",onClick:function(){return m(void 0)}},"Close Chart"))))},A=function(e){var t=e.summary,a=e.type,r=e.width,o=t.confirmed,l=t.deaths,c=t.recovered,d={labels:["Active","Recovered","Deaths"],datasets:[{label:"Local Cases",data:[o-c-l,c,l],backgroundColor:["rgb(0, 119, 255)","rgb(39, 233, 0)","rgb(255, 38, 0)"],borderWidth:0}]},s={maintainAspectRatio:!0,aspectRatio:1,rotation:.5*Math.PI,legend:{labels:{fontColor:"#fff"},position:"bottom"},layout:{padding:{left:0,right:0,top:0,bottom:0}}};return n.a.createElement(n.a.Fragment,null,n.a.createElement(D.Chart,{width:r||"",type:a,data:d,options:s}))},M=function(e){var t=e.summaries,a=t?{labels:t.map((function(e){return e.country.length>10?e.country.replace(/[a-z ]/g,""):e.country})),datasets:[{label:"Active",data:t.map((function(e){return e.active})),backgroundColor:"rgb(0, 119, 255)",borderWidth:0},{label:"Recovered",data:t.map((function(e){return e.recovered})),backgroundColor:"rgb(39, 233, 0)",borderWidth:0},{label:"Deaths",data:t.map((function(e){return e.deaths})),backgroundColor:"rgb(255, 38, 0)",borderWidth:0}]}:null;return a&&n.a.createElement(n.a.Fragment,null,n.a.createElement(D.Chart,{width:"",type:"horizontalBar",data:a,options:{maintainAspectRatio:!0,aspectRatio:1,rotation:1,legend:{labels:{fontColor:"#fff"},position:"bottom"},layout:{padding:{left:0,right:0,top:0,bottom:0}}}}))},I=function(){return n.a.createElement("div",{className:"dev-detail"},"Sobedan Sridaran\xa0 |",n.a.createElement(_.a,{type:"button",title:"LinkedIn"},n.a.createElement("a",{href:"https://www.linkedin.com/in/sobedan-sridaran/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fa fa-linkedin"}))),"|",n.a.createElement(_.a,{type:"button",title:"Github"},n.a.createElement("a",{href:"https://github.com/sobesri/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fa fa-github"}))),"|\xa0\xa0Provide Feedback :",n.a.createElement(_.a,{className:"comment",type:"button",title:"Feedback"},n.a.createElement("a",{href:"https://forms.gle/PsMxEjBuXfGdaB5B6",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fa fa-file-text-o"}))))},G=function(){var e=Object(r.useState)(),t=Object(d.a)(e,2),a=t[0],o=t[1],l=Object(r.useState)(new Date),s=Object(d.a)(l,2),i=s[0],m=s[1],u=Object(r.useState)((new Date).getTime()),f=Object(d.a)(u,2),h=f[0],g=f[1],b=Object(r.useState)(),p=Object(d.a)(b,2),E=p[0],N=p[1];Object(r.useEffect)((function(){y()}),[]),Object(r.useEffect)((function(){var e=setTimeout((function(){g((new Date).getTime()),y()}),3e5);return function(){clearTimeout(e)}}),[h]),Object(r.useLayoutEffect)((function(){var e=function(){var e=document.getElementById("goToTopButton"),t=document.getElementById("goToGlobalButton"),a=document.getElementById("global");e&&t&&(window.scrollY>(a?a.offsetTop:500)/2?t.style.display="none":t.style.display="block",window.scrollY>900?e.style.display="block":e.style.display="none")};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);var y=function(){v.getStatistics_HPB().then((function(e){m(new Date(e.update_date_time));var t={local_new_cases:e.local_new_cases,local_total_cases:e.local_total_cases,local_total_number_of_individuals_in_hospitals:e.local_total_number_of_individuals_in_hospitals,local_deaths:e.local_deaths,local_new_deaths:e.local_new_deaths,local_recovered:e.local_recovered,global_new_cases:e.global_new_cases,global_total_cases:e.global_total_cases,global_deaths:e.global_deaths,global_new_deaths:e.global_new_deaths,global_recovered:e.global_recovered};o(t)})),v.getStatistics_Global().then((function(e){var t=e.Countries;t=t.filter((function(e,a){return t.map((function(e){return e.Slug})).indexOf(e.Slug)===a})),N(Object(c.a)({},e,{Countries:t}))}))},T=function(e,t){var a=e.TotalConfirmed,r=t.TotalConfirmed;return a<r?1:a>r?-1:0};return a?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"local"},n.a.createElement("div",{className:"header-row"},n.a.createElement("h1",null,"Sri Lankan Covid-19 Outbreak Status"),n.a.createElement("p",null,"Updated at ",C.a.utc(new Date(i)).local().format("ddd, MMM D hh:mm:ss a"),n.a.createElement("br",null),"Data source: ",n.a.createElement("a",{href:"https://hpb.health.gov.lk/",target:"_blank",rel:"noopener noreferrer"},"HPB | Live updates on New Coronavirus (COVID-19) outbreak")),n.a.createElement(I,null),n.a.createElement("div",{className:"data-panel row special-box"},n.a.createElement("div",{className:"column-wide"},n.a.createElement("strong",null,"Gone, but not forgotten. 21-04-2019 "),n.a.createElement("i",{className:"fa fa-fire"})))),n.a.createElement("div",{className:"data-panel"},n.a.createElement("div",{className:"row border-box-sm"},n.a.createElement("div",{className:"column"},n.a.createElement("div",{className:"chart padding-top-lg"},n.a.createElement(A,{type:"doughnut",summary:{confirmed:a.local_total_cases,deaths:a.local_deaths,recovered:a.local_recovered}})),n.a.createElement("div",{className:"row-panel padding-top-lg"},n.a.createElement("h2",null,"Total Cases: ",a&&a.local_total_cases.toLocaleString())),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"column-4 data-border active"},"Active: ",(a.local_total_cases-a.local_recovered-a.local_deaths).toLocaleString()),n.a.createElement("div",{className:"column-4 data-border recovered"},"Recovered: ",a.local_recovered.toLocaleString()),n.a.createElement("div",{className:"column-4 data-border deaths"},"Deaths: ",a.local_deaths.toLocaleString())),n.a.createElement("div",{className:"row-panel"},n.a.createElement("div",{className:"updates data-border"},"Updates ",n.a.createElement("span",null,": "),"New cases : ",n.a.createElement("strong",null,a.local_new_cases.toLocaleString())," ",n.a.createElement("span",null,"- "),"New deaths : ",n.a.createElement("strong",null,a.local_new_deaths.toLocaleString())," ",n.a.createElement("span",null,"- "),"In Hospital : ",n.a.createElement("strong",null,a.local_total_number_of_individuals_in_hospitals.toLocaleString())))),n.a.createElement("div",{className:"column padding-top-lg"},n.a.createElement("div",{className:"chart line"},function(){var e=w,t={labels:e.map((function(e){return C.a.utc(e.date?new Date(e.date):new Date).local().format("MMM D")})),datasets:[{label:"Confirmed",data:e.map((function(e){return e.confirmed})),borderColor:"rgb(255, 255, 255)"},{label:"Active",data:e.map((function(e){return e.confirmed-e.deaths-e.recovered})),borderColor:"rgb(0, 119, 255)"},{label:"Recovered",data:e.map((function(e){return e.recovered})),borderColor:"rgb(39, 233, 0)"},{label:"Deaths",data:e.map((function(e){return e.deaths})),borderColor:"rgb(255, 38, 0)"}]};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"title"},n.a.createElement("strong",null,"Progression of the outbreak"),n.a.createElement("br",null),n.a.createElement("small",null,"Data updated manually, last updated at ",n.a.createElement("strong",null,C.a.utc(new Date(2020,3,21,8,1,30)).local().format("ddd, MMM D hh:mm:ss a"))),n.a.createElement("br",null),"Source:\xa0",n.a.createElement("a",{href:"http://www.epid.gov.lk/web/index.php?option=com_content&view=article&id=225&Itemid=518&lang=en",target:"_blank",rel:"noopener noreferrer"},"epid.gov.lk/")),n.a.createElement(D.Chart,{width:"",type:"line",data:t,options:{aspectRatio:1.2,lineWidth:[.03],elements:{point:{radius:0}},legend:{labels:{fontSize:12,fontColor:"#fff",generateLabels:function(e){var t=e.data;return t.datasets.length&&t.datasets.length?t.datasets.map((function(e,t){return{text:e.label,fillStyle:e.borderColor,index:t}})):[]}},position:"bottom"},layout:{padding:{left:0,right:0,top:20,bottom:10}},scales:{yAxes:[{position:"right",gridLines:{color:"rgba(255, 255, 255, 0.06)",borderDash:[3]},ticks:{fontSize:10}}],xAxes:[{id:"date",type:"category",gridLines:{color:"rgba(255, 255, 255, 0.04)",borderDash:[6]},ticks:{fontSize:10,callback:function(e){return e.split(" ")[1]}}},{id:"month",type:"category",ticks:{fontSize:10,color:"rgba(255, 255, 255, 1)",callback:function(e){return e.split(" ")[0]}}}]}}}))}())))),n.a.createElement("div",{className:"padding-top-xlg"})),n.a.createElement("div",{id:"global"},n.a.createElement("div",{className:"padding-top-lg"}),n.a.createElement("div",null,n.a.createElement("div",{className:"header-row"},n.a.createElement("h1",null,"Global Covid-19 Outbreak Status"),n.a.createElement("p",null,"Data sources: ",n.a.createElement("br",null)," ",n.a.createElement("a",{href:"https://hpb.health.gov.lk/",target:"_blank",rel:"noopener noreferrer"},"HPB | Live updates on New Coronavirus (COVID-19) outbreak")," ",n.a.createElement("br",null),n.a.createElement("a",{href:"https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest",target:"_blank",rel:"noopener noreferrer"},"Coronavirus COVID19 API"))),n.a.createElement("div",{className:"data-panel"},n.a.createElement("div",{className:"row border-box-sm"},n.a.createElement("div",{className:"column"},n.a.createElement("div",{className:"row-panel chart"},n.a.createElement(A,{type:"doughnut",summary:{confirmed:a.global_total_cases,deaths:a.global_deaths,recovered:a.global_recovered}})),n.a.createElement("div",{className:"row-panel padding-top-lg"},n.a.createElement("h2",null,"Global Cases: ",a.global_total_cases.toLocaleString())),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"column-4 data-border active"},"Active: ",(a.global_total_cases-a.global_recovered-a.global_deaths).toLocaleString()),n.a.createElement("div",{className:"column-4 data-border recovered"},"Recovered: ",a.global_recovered.toLocaleString()),n.a.createElement("div",{className:"column-4 data-border deaths"},"Deaths: ",a.global_deaths.toLocaleString())),n.a.createElement("div",{className:"row-panel"},n.a.createElement("div",{className:"updates data-border"},"Updates ",n.a.createElement("span",null,": "),"New cases : ",n.a.createElement("strong",null,a.global_new_cases.toLocaleString())," ",n.a.createElement("span",null,"- "),"New deaths : ",n.a.createElement("strong",null,a.global_new_deaths.toLocaleString())))),n.a.createElement("div",{className:"column chart-bar"},n.a.createElement(M,{summaries:function(){var e=E&&E.Countries.sort(T);if(e)return e.slice(0,4).map((function(e){return{confirmed:e.TotalConfirmed,active:e.TotalConfirmed-e.TotalRecovered-e.TotalDeaths,deaths:e.TotalDeaths,recovered:e.TotalRecovered,country:e.Country}}))}()})))),n.a.createElement("div",{className:"data-panel"},n.a.createElement("div",{className:"padding-top-md"}),n.a.createElement("div",{className:"row-panel border-box-sm"},E&&n.a.createElement(B,{data:E}))))),n.a.createElement(_.a,{className:"floating-btn",type:"button",id:"goToTopButton",onClick:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},title:"Go to top"},"Top"),n.a.createElement(_.a,{className:"floating-btn",type:"button",id:"goToGlobalButton",onClick:function(){var e=document.getElementById("global");document.body.scrollTop=e?e.offsetTop:0,document.documentElement.scrollTop=e?e.offsetTop:0},title:"Go to Global"},"Global"),n.a.createElement(_.a,{className:"floating-btn",type:"button",id:"reloadButton",title:"Reload data",onClick:function(){return y()}},n.a.createElement("span",null,"Reload"),n.a.createElement("i",{className:"material-icons"},"refresh"))):n.a.createElement(n.a.Fragment,null)};var F=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"wrapper"},n.a.createElement(G,null)))};a(117),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},39:function(e,t,a){e.exports=a(118)},44:function(e,t,a){},45:function(e,t,a){}},[[39,1,2]]]);
//# sourceMappingURL=main.ae5eda92.chunk.js.map