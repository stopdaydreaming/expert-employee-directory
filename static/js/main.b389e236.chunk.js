(this["webpackJsonpexpert-employee-directory"]=this["webpackJsonpexpert-employee-directory"]||[]).push([[0],{15:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(9),r=c.n(s),l=c(2),i=c(3),o=c(6),j=c(5),d=(c(15),c(0)),b=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("nav",{className:"navbar navbar-dark bg-dark",children:[Object(d.jsx)("div",{className:"container-fluid justify-content-center",children:Object(d.jsx)("span",{className:"navbar-brand mb-0 h1 text-center",children:"Employee Directory"})}),Object(d.jsx)("div",{className:"container-fluid justify-content-center",children:Object(d.jsxs)("p",{className:"text-light",children:["Click on the ",Object(d.jsx)("strong",{children:"Name"})," category to sort by heading and use the ",Object(d.jsx)("strong",{children:"Search"})," box to narrow your results."]})})]})})}}]),c}(n.Component),h=c(8),m=c(10),u=c(4),O=function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"row",children:e.id}),Object(d.jsx)("td",{children:e.image}),Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.phone}),Object(d.jsx)("td",{children:e.email}),Object(d.jsx)("td",{children:e.dob})]})},p=function(e){return Object(d.jsx)("div",{className:"row bg-light",children:Object(d.jsx)("div",{className:"col-md-12 mt-5 mb-5",children:Object(d.jsx)("form",{onSubmit:e.handleSubmit,children:Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("div",{className:"col-md-8",children:Object(d.jsx)("input",{type:"text",className:"form-control",id:"employee",name:"newEmployee",placeholder:"Search for Employee",value:e.newEmployee,onChange:e.handleInputChange})}),Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsx)("button",{type:"submit",className:"btn btn-success",children:"Submit"})})]})})})})},x=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(l.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={employees:[{id:1,image:"url",name:"Hank",phone:"444-555-4444",email:"hank@email.com",dob:"02-09-1991"},{id:2,image:"url",name:"Nancy",phone:"444-556-4444",email:"nancy@email.com",dob:"02-09-1989"},{id:3,image:"url",name:"Dale",phone:"444-557-4444",email:"dale@email.com",dob:"02-09-1986"}],searchEmployee:""},e.handleInputChange=function(t){var c=t.target,n=c.name,a=c.value;e.setState(Object(u.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault();var c={id:e.state.employees.length+1,name:e.state.searchEmployee},n=Object(m.a)(e.state.employees);n.push(c),e.setState({employees:n,searchEmployee:""})},e}return Object(i.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(p,{}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"#"}),Object(d.jsx)("th",{scope:"col",children:"Image"}),Object(d.jsx)("th",{scope:"col",children:"Name"}),Object(d.jsx)("th",{scope:"col",children:"Phone"}),Object(d.jsx)("th",{scope:"col",children:"Email"}),Object(d.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(d.jsx)("tbody",{children:this.state.employees.map((function(e){return Object(n.createElement)(O,Object(h.a)(Object(h.a)({},e),{},{key:e.id}))}))})]})})})]})}}]),c}(n.Component);var y=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{}),Object(d.jsx)(x,{})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};c(17);r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),v()}},[[18,1,2]]]);
//# sourceMappingURL=main.b389e236.chunk.js.map