(this.webpackJsonpadvanced_todo_app=this.webpackJsonpadvanced_todo_app||[]).push([[0],{21:function(t,e,a){},23:function(t,e,a){},24:function(t,e,a){},25:function(t,e,a){},26:function(t,e,a){"use strict";a.r(e);var n=a(1),o=a.n(n),s=a(12),c=a.n(s),i=a(2),r=a(3),d=a(5),l=a(4),u=a(6),j=a(14),b=a(13),p=a.n(b),m=a(7),f=a.n(m),h=(a(21),a(0)),O=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).ChangeHandler=function(t){n.setState({task:t.target.value})},n.SubmitHandler=function(t){t.preventDefault(),""===n.state.task?f()({title:"Error",text:"Your Todo is Empty \ud83d\ude25",icon:"warning"}):(n.props.create(Object(u.a)(Object(u.a)({},n.state),{},{id:p()(),completed:!1})),f()({title:"Good job!",text:"Your Todo Created Successfully \ud83d\ude1c",icon:"success"}))},n.state={task:""},n}return Object(r.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("form",{className:"NewTodoForm",onSubmit:this.SubmitHandler,children:[Object(h.jsx)("input",{type:"text",className:"NewTodoForm input",onChange:this.ChangeHandler}),Object(h.jsx)("button",{type:"submit",className:"btn btn-block m-1",children:Object(h.jsx)("i",{className:"fas fa-add"})})]})}}]),a}(o.a.Component),v=a(8),x=(a(23),function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).removeHandler=function(){f()({title:"Are You Sure To Delete ?",icon:"warning",buttons:!0,dangerMode:!0}).then((function(t){t?(f()("Poof! Your imaginary file has been deleted!",{icon:"success"}),n.props.remove(n.props.id)):f()("Your imaginary file is safe!")}))},n.EditHandlerValue=function(t){n.setState(Object(v.a)({},t.target.name,t.target.value))},n.EditFormHandler=function(t){t.preventDefault(),n.state.task&&(f()({title:"Good job!",text:"You Todo Edited Successfully ! \ud83d\ude19",icon:"success"}),n.props.update(n.props.id,n.state.task)),n.setState({Edit:!n.state.Edit})},n.completedHandler=function(){n.props.completedToggle(n.props.id)},n.state={Edit:!1,task:n.props.task},n}return Object(r.a)(a,[{key:"render",value:function(){var t=this;return this.state.Edit?Object(h.jsx)("div",{className:"Todo",children:Object(h.jsxs)("form",{className:"Todo-edit-form",onSubmit:this.EditFormHandler,children:[Object(h.jsx)("input",{name:"task",type:"text",value:this.state.task,onChange:this.EditHandlerValue}),Object(h.jsx)("button",{className:"btn btn-primary btn-block m-1",children:"save"})]})}):Object(h.jsxs)("div",{className:"Todo",children:[Object(h.jsx)("li",{className:this.props.completed?"Todo-task completed":"Todo-task",onClick:this.completedHandler,children:this.props.task}),Object(h.jsxs)("div",{className:"Todo-buttons",children:[Object(h.jsx)("button",{onClick:function(){return t.setState({Edit:!0})},children:Object(h.jsx)("i",{className:"fas fa-pen"})}),Object(h.jsx)("button",{onClick:this.removeHandler,children:Object(h.jsx)("i",{className:"fas fa-trash"})})]})]})}}]),a}(o.a.Component)),k=(a(24),function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).create=function(t){n.setState({todos:[].concat(Object(j.a)(n.state.todos),[t])})},n.remove=function(t){n.setState({todos:n.state.todos.filter((function(e){return e.id!==t}))})},n.update=function(t,e){var a=n.state.todos.map((function(a){return a.id===t?Object(u.a)(Object(u.a)({},a),{},{task:e}):a}));n.setState({todos:a})},n.completedToggle=function(t){var e=n.state.todos.map((function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},{completed:!e.completed}):e}));n.setState({todos:e})},n.state={todos:[]},n}return Object(r.a)(a,[{key:"render",value:function(){var t=this,e=this.state.todos.map((function(e){return Object(h.jsx)(x,{id:e.id,task:e.task,completed:e.completed,completedToggle:t.completedToggle,remove:t.remove,update:t.update},e.id)}));return Object(h.jsxs)("div",{className:"TodoList",children:[Object(h.jsx)("h1",{children:"React to do list"}),Object(h.jsx)("ul",{children:e}),Object(h.jsx)(O,{create:this.create})]})}}]),a}(o.a.Component)),g=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(k,{}),Object(h.jsx)("h6",{className:"appBy",children:"App by: Pooria Asiabi"})]})}}]),a}(o.a.Component),y=g;a(25);c.a.render(Object(h.jsx)(y,{}),document.querySelector("#root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.52fc4e12.chunk.js.map