"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[305],{1305:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var a=t(2791),r=t(9434),c=t(5984),s="ContactForm_contactForm__y0Rca",o="ContactForm_labelForm__DEnf8",i="ContactForm_labelInput__Qk4qS",l="ContactForm_btnForm__cx8-v",m=t(2561),u=t(6916),d=function(e){return e.contacts.items},_=function(e){return e.filter},h=function(e){return e.contacts.isLoading},x=function(e){return e.contacts.error},f=(0,u.P1)([d,_],(function(e,n){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))})),b=t(5705),p=t(6727),j=t(184),C=(0,c.x0)(),v=(0,c.x0)(),N=p.Ry().shape({name:p.Z_().min(3).max(30).required(),number:p.Z_().min(6).max(15).required()}),F={name:"",number:""},y=function(){var e=(0,r.I0)(),n=(0,r.v9)(d);return(0,j.jsx)(b.J9,{initialValues:F,validationSchema:N,onSubmit:function(t,a){var r=a.resetForm;n.some((function(e){return e.name===t.name}))?alert("This contact has already been added."):(e((0,m.uK)(t)),r())},children:(0,j.jsxs)(b.l0,{className:s,autoComplete:"off",children:[(0,j.jsx)("label",{htmlFor:C,className:o,children:"Name"}),(0,j.jsx)(b.gN,{id:C,className:i,type:"text",name:"name",placeholder:"Enter name"}),(0,j.jsx)(b.Bc,{name:"name"}),(0,j.jsx)("label",{htmlFor:v,className:o,children:"Number"}),(0,j.jsx)(b.gN,{id:v,className:i,type:"tel",name:"number",placeholder:"Enter phone number"}),(0,j.jsx)(b.Bc,{name:"number"}),(0,j.jsx)("button",{className:l,type:"submit",children:"Add contact"})]})})},g="ContactItem_list_item__2NJz8",k="ContactItem_textitem__ZqOCO",I="ContactItem_delete_btn__g7vZ0",w=function(e){var n=e.id,t=e.name,a=e.number,c=(0,r.I0)();return(0,j.jsxs)("li",{className:g,children:[(0,j.jsx)("p",{className:k,children:"".concat(t," : ").concat(a)}),(0,j.jsx)("button",{className:I,type:"button",onClick:function(){return c((0,m.GK)(n))},children:"Delete"})]})},q="ContactList_contacts_list__jhchV",L=function(){var e=(0,r.v9)(f);return(0,j.jsx)("ul",{className:q,children:e.map((function(e){return(0,j.jsx)(w,{id:e.id,name:e.name,number:e.number},e.id)}))})},E="ContactFind_find_label__Od46H",R="ContactFind_find_input__sRzmp",Z=t(1473),z=function(){var e=(0,r.I0)(),n=(0,r.v9)(_),t=(0,c.x0)();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("label",{className:E,htmlFor:t,children:"Find contacts by name"}),(0,j.jsx)("input",{id:t,className:R,type:"text",name:"find",value:n,placeholder:"Find name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(n){var t=n.currentTarget.value.toLowerCase();e((0,Z.T)(t))}})]})};function A(){var e=(0,r.I0)(),n=(0,r.v9)(h),t=(0,r.v9)(x);return(0,a.useEffect)((function(){e((0,m.CL)())}),[e]),(0,j.jsxs)("div",{children:[(0,j.jsx)("h1",{children:"Phonebook"}),(0,j.jsx)(y,{}),(0,j.jsx)("h2",{children:"Contacts"}),(0,j.jsx)(z,{}),n&&!t&&(0,j.jsx)("b",{children:"Request in progress..."}),(0,j.jsx)(L,{})]})}}}]);
//# sourceMappingURL=305.513bb769.chunk.js.map