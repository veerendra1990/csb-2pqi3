(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],[,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(1);var c=n(4),r=n.n(c),a=(n(10),n(0)),i=function(t){var e=t.album;return Object(a.jsxs)("li",{className:"album-item",children:[Object(a.jsx)("img",{alt:e.thumbnailUrl,src:e.url}),Object(a.jsx)("h3",{children:e.title})]})},l=(n(12),function(t){var e=t.albums;return Object(a.jsx)("ul",{className:"album-list",children:e.map((function(t){return Object(a.jsx)(i,{album:t},t.id)}))})}),s=n(2),u=n(5),o=[];fetch("https://jsonplaceholder.typicode.com/photos").then((function(t){return t.json()})).then((function(t){o=t.filter((function(t){return!t.title.includes("e")})),console.log(o.length)}));var b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;return t};n(13);var j=function(t){var e=[u.a],n=[s.a.apply(void 0,e)],c=s.b.apply(void 0,n);return Object(s.c)(b,t,c)}().getState(),h=function(){return Object(a.jsxs)("div",{className:"albums-app",children:[Object(a.jsx)("h1",{children:"React Interview Challenge"}),Object(a.jsx)(l,{albums:j})]})},m=document.getElementById("root");r.a.render(Object(a.jsx)(h,{}),m)}],[[14,1,2]]]);
//# sourceMappingURL=main.36721438.chunk.js.map