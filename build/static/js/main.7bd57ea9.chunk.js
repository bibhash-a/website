(this.webpackJsonpcountry=this.webpackJsonpcountry||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n(0),a=n(2),s=n(13),u=n.n(s),o=n(14),i=n.n(o),l=function(e){var t=e.found;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:t.name}),Object(r.jsxs)("p",{children:["capital: ",t.capital]}),Object(r.jsxs)("p",{children:["population: ",t.population]}),Object(r.jsx)("h2",{children:"languages"}),Object(r.jsx)("ul",{children:t.languages.map((function(e){return Object(r.jsxs)("li",{children:[" ",e.name]},e.name.concat(t.alpha3Code))}))}),Object(r.jsx)("img",{width:200,src:t.flag,alt:"Flag of "+t.name})]})},j=function(e){var t=e.country,n=e.setResult;return Object(r.jsxs)(r.Fragment,{children:[" ",Object(r.jsx)("button",{type:"button",onClick:function(){return n(Object(r.jsx)(l,{found:t}))},children:"show"})]})},h=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],s=t[1],u=Object(a.useState)(""),o=Object(c.a)(u,2),h=o[0],b=o[1],d=Object(a.useState)([""]),O=Object(c.a)(d,2),f=O[0],p=O[1];Object(a.useEffect)((function(){i.a.get("https://restcountries.eu/rest/v2/all").then((function(e){return s(e.data)}))}),[]);return Object(r.jsxs)("div",{children:["find countries",Object(r.jsx)("input",{placeholder:"...",value:h,onChange:function(e){b(e.target.value);var t=e.target.value.toLowerCase(),c=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));if(c.length===n.length)p("");else if(c.length>10)p(["Too many matches, narrow your search."]);else if(1===c.length){var a=c[0];p(Object(r.jsx)(l,{found:a}))}else 0===c.length?p(["Could not find a country."]):p(c.map((function(e){return Object(r.jsxs)("p",{children:[e.name,Object(r.jsx)(j,{country:e,setResult:p})]},e.name)})))}}),Object(r.jsx)("div",{children:f})]})};u.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7bd57ea9.chunk.js.map