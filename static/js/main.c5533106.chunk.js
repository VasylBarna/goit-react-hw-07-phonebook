(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{17:function(t,e,n){t.exports={form:"ContactForm_form__11ny5",btn:"ContactForm_btn__quVG9"}},18:function(t,e,n){t.exports={list:"ContactsList_list__319Xg",btn:"ContactsList_btn__3UEVe",date:"ContactsList_date__3xBH_"}},19:function(t,e,n){t.exports={title:"App_title__2XBc-",subtitle:"App_subtitle__3STAd"}},25:function(t,e,n){t.exports={container:"Container_container__2D-xJ"}},27:function(t,e,n){t.exports={find:"Filter_find__2Kfxj"}},65:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),o=n(13),i=n.n(o),s=n(29),u=n(5),b=n(30),d=n(9),l=n(1),j=n(24),h=n(23),f=n(7),O=Object(h.a)({reducerPath:"contactApi",baseQuery:Object(f.d)({baseUrl:"https://61714b49c20f3a001705fbe1.mockapi.io"}),tagTypes:["Contact"],endpoints:function(t){return{fetchContacts:t.query({query:function(){return"/contacts"},providesTags:["Contact"]}),addContact:t.mutation({query:function(t,e){return{url:"/contacts",method:"POST",body:t,number:e}},invalidatesTags:["Contact"]}),deleteContact:t.mutation({query:function(t){return{url:"/contacts/".concat(t),method:"DELETE",body:t}},invalidatesTags:["Contact"]})}}}),p=O.useFetchContactsQuery,m=O.useAddContactMutation,x=O.useDeleteContactMutation,_="filter",C=Object(l.createReducer)("",Object(d.a)({},_,(function(t,e){return e.payload}))),v=Object(l.configureStore)({reducer:(a={},Object(d.a)(a,O.reducerPath,O.reducer),Object(d.a)(a,"filter",C),a),middleware:function(t){return[].concat(Object(b.a)(t()),[O.middleware])}});Object(j.setupListeners)(v.dispatch);var y=v,g=n(25),A=n.n(g),w=n(2),L=function(t){var e=t.children;return Object(w.jsx)("div",{className:A.a.container,children:e})},k=n(10),N=n(17),F=n.n(N),T=n(26),q=n.n(T);function S(){var t=Object(c.useState)(""),e=Object(k.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),o=Object(k.a)(r,2),i=o[0],s=o[1],u=m(),b=Object(k.a)(u,2),d=b[0],l=b[1].isLoading,j=p().data,h=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"phone":s(c);break;default:return}},f=function(){a(""),s("")};return Object(w.jsxs)("form",{className:F.a.form,onSubmit:function(t){t.preventDefault();var e={name:n,phone:i};j.find((function(t){return n.toLowerCase()===t.name.toLowerCase()}))?alert(n+" is already in contacts"):d(e),f()},children:[Object(w.jsxs)("label",{children:["Name",Object(w.jsx)("input",{type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:h,required:!0})]}),Object(w.jsxs)("label",{children:["Phone number",Object(w.jsx)("input",{type:"tel",name:"phone",value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:h,required:!0})]}),Object(w.jsx)("button",{className:F.a.btn,type:"submit",children:"Add contact"}),l&&Object(w.jsx)(q.a,{type:"Hearts",color:"#00BFFF",height:100,width:100,timeout:1e3})]})}var B=Object(l.createAction)(_),D=n(27),E=n.n(D);function P(){var t=Object(u.d)();return Object(w.jsxs)("label",{className:E.a.find,children:["Find contacts by name",Object(w.jsx)("input",{type:"text",onChange:function(e){return t(B(e.target.value))}})]})}var z=n(18),J=n.n(z);function M(){var t=p().data,e=Object(u.e)((function(e){return function(t,e){var n=e.filter.toLowerCase();return t?t.filter((function(t){return t.name.toLowerCase().includes(n)})):[]}(t,e)})),n=x(),a=Object(k.a)(n,1)[0];return Object(w.jsx)("ul",{className:J.a.list,children:e&&e.map((function(t){var e=t.id,n=t.name,c=t.phone,r=t.createdAt;return Object(w.jsxs)("li",{children:[n,": ",c,Object(w.jsx)("br",{}),r,Object(w.jsx)("button",{className:J.a.btn,type:"button",onClick:function(){return a(e)},children:"Delete"})]},e)}))})}var Z=n(19),H=n.n(Z);function Q(){return Object(w.jsxs)(L,{children:[Object(w.jsx)("h1",{className:H.a.title,children:"Phonebook"}),Object(w.jsx)(S,{}),Object(w.jsx)("h2",{className:H.a.subtitle,children:"Contacts"}),Object(w.jsx)(P,{}),Object(w.jsx)(M,{})]})}i.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(u.a,{store:y,children:Object(w.jsx)(s.a,{children:Object(w.jsx)(Q,{})})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.c5533106.chunk.js.map