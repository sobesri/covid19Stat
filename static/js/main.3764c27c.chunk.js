(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,a,t){e.exports=t(63)},26:function(e,a,t){},27:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),o=t(19),c=t.n(o),r=(t(26),t(27),t(3)),s=t(20),i=t(4),d=t.n(i),u=d.a.create({baseURL:"https://hpb.health.gov.lk/api/"});d.a.defaults.headers.common["Content-Type"]="application/json",d.a.defaults.headers.common.Accept="application/json";var h={get:m,getStatistics:function(){return m("","get-current-statistical",[]).then((function(e){return e.data}))}};function m(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return _("get",e,a,null,t,l)}function _(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3?arguments[3]:void 0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=b(a,t,n,o),r=g(c,e,l);return u.request(r).then((function(e){return e&&e.data})).catch((function(e){throw console.log(e),e}))}function b(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=e+(a?"/"+a:"");t.forEach((function(e){n+="/"+e}));var o="";return l&&(o+="?"+s.stringify(l)),n+=o}function g(e,a,t,l){var n={url:e,method:a,data:t};return l&&(n.responseType=l),n}var v=t(65),p=t(8),f=t(6),w=t.n(f),E=function(){var e=Object(l.useState)(),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)(new Date),s=Object(r.a)(c,2),i=s[0],d=s[1],u=Object(l.useState)(),m=Object(r.a)(u,2),_=m[0],b=m[1],g=Object(l.useState)(),f=Object(r.a)(g,2),E=f[0],N=f[1],j=Object(l.useState)((new Date).getTime()),C=Object(r.a)(j,2),O=C[0],k=C[1];Object(l.useEffect)((function(){D()}),[]),Object(l.useEffect)((function(){var e=setTimeout((function(){k((new Date).getTime()),D()}),3e5);return function(){clearTimeout(e)}}),[O]);var D=function(){h.getStatistics().then((function(e){d(new Date(e.update_date_time));var a={local_new_cases:e.local_new_cases,local_total_cases:e.local_total_cases,local_total_number_of_individuals_in_hospitals:e.local_total_number_of_individuals_in_hospitals,local_deaths:e.local_deaths,local_new_deaths:e.local_new_deaths,local_recovered:e.local_recovered,global_new_cases:e.global_new_cases,global_total_cases:e.global_total_cases,global_deaths:e.global_deaths,global_new_deaths:e.global_new_deaths,global_recovered:e.global_recovered};o(a);var t={labels:["New","In Hospital","Deaths","New Deaths","Recovered"],datasets:[{label:"Local Cases",data:[e.local_new_cases,e.local_total_number_of_individuals_in_hospitals,e.local_deaths,e.local_new_deaths,e.local_recovered],backgroundColor:["rgba(75, 192, 192, 0.7)","rgba(255, 206, 86, 0.7)","rgba(255, 99, 132, 0.7)","rgba(153, 102, 255, 0.7)","rgba(255, 159, 64, 0.7)"],borderWidth:0}]},l={labels:["New","Deaths","New Deaths","Recovered"],datasets:[{label:"Local Cases",data:[e.global_new_cases,e.global_deaths,e.global_new_deaths,e.global_recovered],backgroundColor:["rgba(75, 192, 192, 0.7)","rgba(255, 99, 132, 0.7)","rgba(153, 102, 255, 0.7)","rgba(255, 159, 64, 0.7)"],borderWidth:0}]};b(t),N(l)}))},y={maintainAspectRatio:!0,aspectRatio:1,legend:{position:"bottom"},layout:{padding:{left:0,right:0,top:0,bottom:0}}};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"header-row"},n.a.createElement("h1",null,"Covid-19"),n.a.createElement("h2",null,"Sri Lanka"),n.a.createElement("p",null,"Updated at ",w()(new Date(i)).format("ddd, MMM D hh:mm:ss")),"Data from ",n.a.createElement("a",{href:"https://hpb.health.gov.lk/",target:"_blank",rel:"noopener noreferrer"},"HPB | Live updates on New Coronavirus (COVID-19) outbreak")),n.a.createElement("div",{className:"refresh-button-panel"},n.a.createElement(v.a,{type:"button",onClick:function(){return D()}},"Reload data")),n.a.createElement("div",{className:"data-panel"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"column"},n.a.createElement("div",{className:"title"},n.a.createElement("h2",null,"Local Cases"),n.a.createElement("h3",null,t&&t.local_total_cases),n.a.createElement("p",null,"total confirmed cases")),n.a.createElement("div",{className:"chart"},n.a.createElement(p.Chart,{width:"",type:"pie",data:_,options:y}))),n.a.createElement("div",{className:"column"},n.a.createElement("div",{className:"title"},n.a.createElement("h2",null,"Global Cases"),n.a.createElement("h3",null,t&&t.global_total_cases),n.a.createElement("p",null,"total confirmed cases")),n.a.createElement("div",{className:"chart"},n.a.createElement(p.Chart,{width:"",type:"pie",data:E,options:y}))))))};var N=function(){return n.a.createElement("div",{className:"wrapper"},n.a.createElement(E,null))};t(62),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.3764c27c.chunk.js.map