(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var a=c(8),n=c.n(a),s=c(7),r=c(17),o=c(6),i=c(15),l=c(16),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},b=c(4),h=function(e){return{type:"filter/SET_QUERY",payload:e}},O=function(e){return{type:"filter/SET_STATUS",payload:e}},m={query:"",status:"all"},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/SET_QUERY":return Object(b.a)(Object(b.a)({},e),{},{query:t.payload});case"filter/SET_STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.payload});default:return e}},x=function(e){return{type:"todos/SET",payload:e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/SET"===t.type?t.payload:e},v=Object(o.combineReducers)({currentTodo:j,filter:f,todos:p}),y=Object(o.createStore)(v,Object(i.composeWithDevTools)(Object(o.applyMiddleware)(l.a))),N=c(9),g=c(3),T=c(5),w=c.n(T),S=c(0),E=(c(26),c(27),c(13)),k=c.n(E),C=s.b,L=s.c,_=c(1),I=function(e){var t=e.todo,c=C(),a=L((function(e){return e})).currentTodo,n=(null===a||void 0===a?void 0:a.id)===t.id,s=t.id,r=t.title,o=t.completed;return Object(_.jsxs)("tr",{"data-cy":"todo",children:[Object(_.jsx)("td",{className:"is-vcentered",children:s}),Object(_.jsx)("td",{className:"is-vcentered",children:o&&Object(_.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(_.jsx)("i",{className:"fas fa-check"})})}),Object(_.jsx)("td",{className:"is-vcentered is-expanded",children:Object(_.jsx)("p",{className:k()({"has-text-success":o,"has-text-danger":!o}),children:r})}),Object(_.jsx)("td",{className:"has-text-right is-vcentered",children:Object(_.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(d(t))},children:Object(_.jsx)("span",{className:"icon",children:Object(_.jsx)("i",{className:k()("far",{"fa-eye":!n,"fa-eye-slash":n})})})})})]})},R=function(e){var t=e.visibleTodos;return Object(_.jsxs)(_.Fragment,{children:[!t.length&&Object(_.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),Object(_.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(_.jsx)("thead",{children:Object(_.jsxs)("tr",{children:[Object(_.jsx)("th",{children:"#"}),Object(_.jsx)("th",{children:Object(_.jsx)("span",{className:"icon",children:Object(_.jsx)("i",{className:"fas fa-check"})})}),Object(_.jsx)("th",{children:"Title"}),Object(_.jsx)("th",{children:" "})]})}),Object(_.jsx)("tbody",{children:t.map((function(e){return Object(_.jsx)(I,{todo:e},e.id)}))})]})]})},q=function(){var e=L((function(e){return e.filter})),t=e.query,c=e.status,a=C(),n=function(e){return a(h(e))};return Object(_.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(_.jsx)("p",{className:"control",children:Object(_.jsx)("span",{className:"select",children:Object(_.jsxs)("select",{value:c,"data-cy":"statusSelect",onChange:function(e){return t=e.target.value,a(O(t));var t},children:[Object(_.jsx)("option",{value:"all",children:"All"}),Object(_.jsx)("option",{value:"active",children:"Active"}),Object(_.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(_.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(_.jsx)("input",{value:t,"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",onChange:function(e){return n(e.target.value)}}),Object(_.jsx)("span",{className:"icon is-left",children:Object(_.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(_.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(_.jsx)("button",{"data-cy":"clearSearchButton","aria-label":"clearButton",type:"button",className:"delete",onClick:function(){return n("")}})})]})]})},A=(c(29),function(){return Object(_.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(_.jsx)("div",{className:"Loader__content"})})});function B(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var M=function(e,t,c){setTimeout((function(){e(t)}),c)},U=function(e){var t=e.currentTodo,c=e.setIsHasError,a=Object(S.useState)(!1),n=Object(g.a)(a,2),s=n[0],r=n[1],o=Object(S.useState)(null),i=Object(g.a)(o,2),l=i[0],d=i[1],j=C();return Object(S.useEffect)((function(){Object(N.a)(w.a.mark((function e(){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!0),e.next=4,n=t.userId,B("/users/".concat(n));case 4:a=e.sent,d(a),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),c("".concat(e.t0)),M(c,"",3e3);case 12:return e.prev=12,r(!1),e.finish(12);case 15:case"end":return e.stop()}var n}),e,null,[[0,8,12,15]])})))()}),[]),Object(_.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(_.jsx)("div",{className:"modal-background"}),s?Object(_.jsx)(A,{}):Object(_.jsxs)("div",{className:"modal-card",children:[Object(_.jsxs)("header",{className:"modal-card-head",children:[Object(_.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(_.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return j(u())}})]}),Object(_.jsxs)("div",{className:"modal-card-body",children:[Object(_.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(_.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(_.jsx)("strong",{className:"has-text-danger",children:"Planned"}):Object(_.jsx)("strong",{className:"has-text-success",children:"Done"})," by ",Object(_.jsx)("a",{href:"mailto:".concat(null===l||void 0===l?void 0:l.email),children:null===l||void 0===l?void 0:l.name})]})]})]})]})},D=function(){var e=C(),t=L((function(e){return e})),c=t.todos,a=t.currentTodo,n=t.filter,s=n.query,r=n.status,o=Object(S.useState)(!1),i=Object(g.a)(o,2),l=i[0],d=i[1],u=Object(S.useState)(""),j=Object(g.a)(u,2),b=j[0],h=j[1],O=Object(S.useMemo)((function(){return function(e,t,c){return e.filter((function(e){var a=e.completed,n=e.title;switch(c){case"active":return!a&&(!t||n.toLowerCase().includes(t.toLocaleLowerCase()));case"completed":return a&&(!t||n.toLowerCase().includes(t.toLocaleLowerCase()));default:return!t||n.toLowerCase().includes(t.toLocaleLowerCase())}}))}(c,s,r)}),[c,s,r]);return Object(S.useEffect)((function(){Object(N.a)(w.a.mark((function t(){var c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,d(!0),t.next=4,B("/todos");case 4:c=t.sent,e(x(c)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),h("".concat(t.t0)),M(h,"",3e3);case 12:return t.prev=12,d(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,8,12,15]])})))()}),[]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:"section",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"box",children:[Object(_.jsx)("h1",{className:"title",children:"Todos:"}),Object(_.jsx)("div",{className:"block",children:Object(_.jsx)(q,{})}),b&&Object(_.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),Object(_.jsx)("div",{className:"block",children:l?Object(_.jsx)(A,{}):Object(_.jsx)(R,{visibleTodos:O})})]})})}),a&&Object(_.jsx)(U,{currentTodo:a,setIsHasError:h})]})},P=function(){return Object(_.jsx)(s.a,{store:y,children:Object(_.jsx)(r.a,{children:Object(_.jsx)(D,{})})})};n.a.render(Object(_.jsx)(P,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.53a40648.chunk.js.map