(this.webpackJsonpmonsters=this.webpackJsonpmonsters||[]).push([[0],[,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(1),s=t.n(c),o=t(4),r=t.n(o),a=(t(13),t(5)),i=t(6),l=t(2),h=t(8),d=t(7),u=(t(14),t(15),t(0)),j=function(e){return console.log(e),Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"monster"}),Object(u.jsx)("h2",{children:e.monster.name}),Object(u.jsx)("p",{children:e.monster.email})]})},m=function(e){return console.log(e),Object(u.jsx)("div",{className:"card-list",children:e.monsters.map((function(e,n){return Object(u.jsx)(j,{monster:e},n)}))})},b=(t(17),function(e){var n=e.placeholder,t=e.handleChange;return Object(u.jsx)("div",{children:Object(u.jsx)("input",{className:"search",type:"search",placeholder:n,onChange:t})})}),f=(t(18),function(e){Object(h.a)(t,e);var n=Object(d.a)(t);function t(){var e;return Object(a.a)(this,t),(e=n.call(this)).handleChange=function(n){e.setState({searchField:n.target.value})},e.handle3=function(){console.log("3 clicked")},e.state={monsters:[],searchField:""},e.handle2=e.handle1.bind(Object(l.a)(e)),e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){console.log(n),e.setState({monsters:n})}))}},{key:"handle1",value:function(){console.log("1 clicked")}},{key:"render",value:function(){var e=this.state,n=e.monsters,t=e.searchField,c=n.filter((function(e){return e.name.toLowerCase().includes(t.toLocaleLowerCase())}));return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("h1",{className:"rolodex",children:"Mohsters Rolodex"}),Object(u.jsx)(b,{placeholder:"search monster",handleChange:this.handleChange}),Object(u.jsx)(m,{monsters:c})]})})}}]),t}(c.Component)),p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),c(e),s(e),o(e),r(e)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),p()}],[[19,1,2]]]);
//# sourceMappingURL=main.f7f077c9.chunk.js.map