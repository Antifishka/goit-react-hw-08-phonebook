"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[497],{2497:function(n,e,t){t.r(e),t.d(e,{default:function(){return jn}});var r,i,o,a,s,c,u=t(9439),d=t(2791),h=t(9434),l=t(4270),m=t(5036),p=t(6916),f=function(n){return n.filter},x=function(n){return n.contacts.items},g=function(n){return n.contacts.isFormLoading},b=function(n){return n.contacts.isLoading},j=function(n){return n.contacts.error},w=(0,p.P1)([x,f],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),v=t(6355),Z=t(9126),z=t(5218),y=t(5984),C=t(168),k=t(6088),S=t(8445),A=t(1607),W=k.Z.form(r||(r=(0,C.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: ","px;\n\n    text-align: center;\n"])),(function(n){return n.theme.space[4]})),_=k.Z.label(i||(i=(0,C.Z)(["\n    position: relative;   \n    width: 100%;\n    text-align: left;\n    font-size: ",";\n\n    :focus-within{\n        color: ",";\n    }\n"])),(function(n){return A.r.fontSizes.s}),(function(n){return n.theme.colors.accent})),L=k.Z.input(o||(o=(0,C.Z)(["\n    margin-top: ","px; \n    padding-top: ","px;\n    padding-bottom: ","px;\n    padding-left: 26px;\n    padding-right: ","px;\n    width: 100%;\n    border: 1px solid rgba(33, 33, 33, 0.2);\n    border-radius: ",";\n\n    font: inherit;\n    font-size: ",";\n\n    background-color: #fff;\n\n    ::placeholder {\n        font-size: ",";\n    }\n"])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.normal}),(function(n){return A.r.fontSizes.m}),(function(n){return A.r.fontSizes.s})),F=k.Z.div(a||(a=(0,C.Z)(["\n    position: absolute;\n    top: 30px;\n    left: ","px;\n"])),(function(n){return n.theme.space[3]})),I=(0,k.Z)(S.O)(s||(s=(0,C.Z)(["\n    display: flex;\n    align-items: center;;\n    gap: ","px;\n    margin: 0 auto;\n    padding-top: ","px;\n    padding-bottom: ","px;\n    padding-left: ","px;\n    padding-right: ","px;\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]})),P=k.Z.p(c||(c=(0,C.Z)(["\n    color: ",";\n"])),(function(n){return n.theme.colors.error})),T=t(5705),q=t(2797),E=t(2007),N=t.n(E),R=t(111),B=t(184),V=q.Ry().shape({name:q.Z_().min(2,"Too Short!").max(50,"Too Long!").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Name is required"),number:q.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Number is required")}),G=function(n){var e=n.onAdd,t=(0,h.v9)(x),r=(0,h.v9)(g),i=(0,h.I0)(),o=(0,T.TA)({initialValues:{name:"",number:""},validationSchema:V,onSubmit:function(n,r){var o=n.name,a=n.number,s=r.resetForm;console.log(o,a);var c=o.toLowerCase(),u=t.find((function(n){return n.name.toLowerCase()===c}));if(u)return(0,z.ZP)("".concat(o," is already in contacts."),{icon:"\u2139\ufe0f"});var d={name:o,number:a};i((0,m.uK)(d)),z.ZP.success("Contact added!"),e(),s()}}),a=o.values,s=o.errors,c=o.touched,u=o.handleBlur,d=o.handleChange,l=o.handleSubmit,p=(0,y.x0)(),f=(0,y.x0)();return(0,B.jsxs)(W,{onSubmit:l,children:[(0,B.jsx)(R.x,{fontSize:A.r.fontSizes.l,fontWeight:A.r.fontWeights.bold,as:"strong",children:"Create new contact"}),(0,B.jsxs)(_,{htmlFor:p,children:["Name",(0,B.jsx)(F,{children:(0,B.jsx)(v.dfI,{size:15})}),(0,B.jsx)(L,{type:"text",name:"name",id:p,value:a.name,placeholder:"Alexander Repeta",onChange:d,onBlur:u}),s.name&&c.name&&(0,B.jsx)(P,{children:s.name})]}),(0,B.jsxs)(_,{htmlFor:f,children:["Phone number",(0,B.jsx)(F,{children:(0,B.jsx)(v.DNl,{size:14})}),(0,B.jsx)(L,{type:"tel",name:"number",id:f,value:a.number,placeholder:"+38-(012)-345-67-89",onChange:d,onBlur:u}),s.number&&c.number&&(0,B.jsx)(P,{children:s.number})]}),(0,B.jsxs)(I,{type:"submit",children:[r?"Adding...":"Add contact",(0,B.jsx)(Z.im1,{})]})]})},H=G;G.propsType={onSubmit:N().func.isRequired};var K,D,J,M,O,U,Y,$,Q=t(2609),X=k.Z.p(K||(K=(0,C.Z)(["\n    display: flex;\n    align-items: center;;\n    gap: ","px;\n"])),(function(n){return n.theme.space[2]})),nn=k.Z.p(D||(D=(0,C.Z)(["\n    display: flex;\n    align-items: center;;\n    gap: ","px;\n    min-width: 220px;\n    text-align: left;\n"])),(function(n){return n.theme.space[2]})),en=t(8820),tn=t(6856),rn=function(n){var e=n.id,t=n.name,r=n.number,i=(0,h.I0)();return(0,B.jsxs)(R.x,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,B.jsxs)(R.x,{display:"flex",alignItems:"center",justifyContent:"space-between",width:"70%",children:[(0,B.jsxs)(X,{children:[(0,B.jsx)(Z.HHm,{}),t]}),(0,B.jsxs)(nn,{children:[(0,B.jsx)(tn.REU,{}),r]})]}),(0,B.jsx)(Q.z,{type:"button",onClick:function(){return i((0,m.GK)(e))},children:(0,B.jsx)(en.VPh,{size:18})})]})},on=k.Z.ul(J||(J=(0,C.Z)(["\n    position: relative;\n    min-width: ",";\n    max-width: ",";\n    margin-left: auto;\n    margin-right: auto;\n    background-color: ",";\n    padding: ","px;\n    padding-top: ","px;\n    padding-bottom: ","px;\n    border-radius: ",";\n    box-shadow: ",";\n\n    text-align: center;\n"])),(function(n){return n.theme.sizes.minWidth}),(function(n){return n.theme.sizes.maxWidth}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.box}),(function(n){return n.theme.shadows.box})),an=k.Z.li(M||(M=(0,C.Z)(["\n    width: 100%;\n    padding-top: ","px;\n    padding-bottom: ","px;\n    padding-left: ","px;\n    padding-right: ","px;\n    \n    font-size: ",";\n\n    transform: scale(1);\n    transition: ",";\n\n    :not(:first-of-type){\n       border-top: ","; \n    }\n\n    :hover,\n    :focus{\n        position: absolute;\n        transform: scale(1.02);\n        width: 100%;\n        right: 0;\n        z-index: 2;\n        padding: ","px;\n        \n        border-top: ","; \n        border-radius: ",";\n        box-shadow: ",";\n\n        background-color: ",";\n    } \n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.transition.main}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.radii.box}),(function(n){return n.theme.shadows.box}),(function(n){return n.theme.colors.white})),sn=function(){var n=(0,h.v9)(w);return(0,B.jsx)(B.Fragment,{children:n.length>0?(0,B.jsx)(on,{children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,B.jsx)(an,{children:(0,B.jsx)(rn,{id:e,name:t,number:r})},e)}))}):(0,B.jsx)(on,{children:"There are no contacts"})})},cn=t(5653),un=k.Z.label(O||(O=(0,C.Z)(["\n    position: relative;\n    width: 100%;\n"]))),dn=k.Z.input(U||(U=(0,C.Z)(["\n    margin-top: ","px; \n    padding-top: ","px;\n    padding-bottom: ","px;\n    padding-left: 26px;\n    padding-right: ","px;\n    width: 100%;\n    font: inherit;\n    border: 1px solid rgba(33, 33, 33, 0.2);\n    border-radius: ",";\n    \n    background-color: inherit;\n\n    transition: ",";\n\n    ::placeholder {\n        font-size: ",";\n    }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.transition.main}),(function(n){return n.theme.fontSizes.s})),hn=k.Z.div(Y||(Y=(0,C.Z)(["\n    position: absolute;\n    top: 15px;\n    left: ","px;\n"])),(function(n){return n.theme.space[3]})),ln=t(3728),mn=function(n){var e=n.onClick,t=(0,h.v9)(f),r=(0,h.I0)();return(0,B.jsxs)(R.x,{minWidth:A.r.sizes.minWidth,mb:3,mx:"auto",p:3,textAlign:"left",maxWidth:A.r.sizes.mediumWidth,display:"flex",alignItems:"center",justifyContaent:"center",gridGap:[2,2,3],borderRadius:A.r.radii.box,boxShadow:A.r.shadows.box,backgroundColor:A.r.colors.white,children:[(0,B.jsxs)(un,{htmlFor:"",children:[(0,B.jsx)(hn,{children:(0,B.jsx)(ln.Vph,{size:17})}),(0,B.jsx)(dn,{type:"text",value:t,placeholder:"Search by name",onChange:function(n){r((0,cn.T)(n.currentTarget.value))}})]}),(0,B.jsx)(Q.z,{onClick:e,"aria-label":"Add contact",children:(0,B.jsx)(Z.im1,{size:18})})]})},pn=t(4164),fn=k.Z.div($||($=(0,C.Z)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    max-width: ",";\n    min-width: ",";\n    padding: ","px;\n    background-color: ",";\n    border-radius: ",";\n    box-shadow: ",";\n    "])),(function(n){return n.theme.sizes.mediumWidth}),(function(n){return n.theme.sizes.minWidth}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.box}),(function(n){return n.theme.shadows.box})),xn=document.querySelector("#modal-root"),gn=function(n){var e=n.onClose,t=n.children;(0,d.useEffect)((function(){var n=function(n){"Escape"===n.code&&(console.log("\u041d\u0430\u0436\u0430\u043b\u0438 ESC, \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u043a\u0443"),e())};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return(0,pn.createPortal)((0,B.jsx)(R.x,{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",bg:"rgba(0, 0, 0, 0.5)",onClick:function(n){console.log("\u041a\u043b\u0438\u043a\u043d\u0443\u043b\u0438 \u0432 \u0431\u0435\u043a\u0434\u0440\u043e\u043f"),n.currentTarget===n.target&&e()},children:(0,B.jsx)(fn,{children:t})}),xn)},bn=t(854);function jn(){var n=(0,h.I0)(),e=(0,h.v9)(b),t=(0,h.v9)(j),r=(0,d.useState)(!1),i=(0,u.Z)(r,2),o=i[0],a=i[1],s=function(){return a((function(n){return!n}))};(0,d.useEffect)((function(){n((0,m.yF)()),t&&z.ZP.error("No response from server!")}),[n,t]);var c=e&&!t;return(0,B.jsxs)(R.x,{p:"16px 0",as:"main",children:[(0,B.jsx)(l.q,{children:(0,B.jsx)("title",{children:"Your contacts"})}),(0,B.jsx)(mn,{onClick:s}),c?(0,B.jsx)(bn.a,{}):(0,B.jsx)(sn,{}),o&&(0,B.jsx)(gn,{onClose:s,children:(0,B.jsx)(H,{onAdd:s})})]})}}}]);
//# sourceMappingURL=497.a85525a8.chunk.js.map