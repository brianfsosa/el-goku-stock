(this.webpackJsonpgoku=this.webpackJsonpgoku||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(35),i=n.n(r),s=(n(99),n(129)),o=n(128),d=n(39),u=n(4),j=n(31),l=n.n(j),b=n(43),p=n(130),h=n(125),O=n(126),x=n(127),f=n(132),m=n(123),g=n(7),v=n(42),C=n(122),k=n(134),w=n(131),S=n(124),I=n(3);var E=function(e){var t={name:"",cantidad:1,ubication:1},n=Object(c.useState)(t),a=Object(u.a)(n,2),r=a[0],i=a[1],s=Object(p.a)(),o=function(e){var t=e.target,n=t.name,c=t.value;i(Object(d.a)(Object(d.a)({},r),{},Object(g.a)({},n,c)))};return Object(I.jsx)("div",{children:Object(I.jsx)("div",{children:Object(I.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e.addOrEdit(r),i(Object(d.a)({},t)),s({tittle:"Producto Agregado",description:"Producto Agregado",status:"success",duration:2e3,isClosable:!0,position:"top"})},children:[Object(I.jsxs)(v.a,{id:"product",children:[Object(I.jsx)(C.a,{children:"Producto"}),Object(I.jsx)(m.a,{placeholder:"Ej: Otro loco m\xe1s",onChange:o,name:"name",value:r.name})]}),Object(I.jsxs)(k.a,{columns:2,spacing:10,children:[Object(I.jsxs)(v.a,{id:"amount",h:20,children:[Object(I.jsx)(C.a,{children:"Cantidad"}),Object(I.jsx)(w.a,{value:r.cantidad,children:Object(I.jsx)(w.b,{onChange:o,name:"cantidad",value:r.cantidad,inputMode:"numeric"})})]}),Object(I.jsxs)(v.a,{id:"ubication",h:20,children:[Object(I.jsx)(C.a,{children:"Estante"}),Object(I.jsxs)(S.a,{onChange:o,name:"ubication",value:parseInt(r.ubication),inputMode:"numeric",children:[Object(I.jsx)("option",{children:"1"}),Object(I.jsx)("option",{children:"2"}),Object(I.jsx)("option",{children:"3"}),Object(I.jsx)("option",{children:"4"}),Object(I.jsx)("option",{children:"5"}),Object(I.jsx)("option",{children:"6"})]})]})]}),Object(I.jsx)(f.a,{mt:4,colorScheme:"teal",isLoading:e.isSubmitting,type:"submit",children:"Agregar"})]})})})},z=n(86),y=(n(110),z.a.initializeApp({apiKey:"AIzaSyBCuZtBFNr-qmmVffX0jVVdUuq_I8tc-f8",authDomain:"el-goku-desarrollo.firebaseapp.com",projectId:"el-goku-desarrollo",storageBucket:"el-goku-desarrollo.appspot.com",messagingSenderId:"587101152715",appId:"1:587101152715:web:3d5af049aca0931a0c424e",measurementId:"G-EL8ZNSH6JW"}).firestore()),P=function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.collection("products").doc().set(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var A=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),i=Object(u.a)(r,2),s=i[0],j=i[1],g=Object(p.a)(),v=function(){var e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y.collection("products").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(d.a)(Object(d.a)({},e.data()),{},{id:e.id}))})),a(t),j(t)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){v()}),[]);var C,k=function(){var e=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=parseInt(parseInt(t.cantidad)+1),e.next=3,y.collection("products").doc(t.id).update({cantidad:n});case 3:g({tittle:t.name+" +1",description:t.name+" +1",status:"info",duration:2e3,isClosable:!0,position:"top"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=parseInt(parseInt(t.cantidad)-1),e.next=3,y.collection("products").doc(t.id).update({cantidad:n});case 3:g({tittle:t.name+" -1",description:t.name+" -1",status:"warning",duration:2e3,isClosable:!0,position:"top"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Borrar Producto?")){e.next=4;break}return e.next=3,y.collection("products").doc(t).delete();case 3:g({tittle:"Producto Eliminado",description:"Producto Eliminado",status:"error",duration:2e3,isClosable:!0,position:"top"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function z(e,t){return Object(I.jsxs)("div",{children:[Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{as:"h3",size:"sm",children:Object(I.jsxs)(O.a,{colorScheme:"blue",children:[" Estante ",e," "]})}),Object(I.jsx)("br",{}),Object(I.jsxs)(h.a,{variant:"simple",size:"sm",children:[Object(I.jsx)(h.e,{children:Object(I.jsxs)(h.f,{children:[Object(I.jsx)(h.d,{children:"PRODUCTO"}),Object(I.jsx)(h.d,{children:Object(I.jsx)(x.a,{children:"ACCIONES"})})]})}),Object(I.jsx)(h.b,{children:(n=e,c=t,c.filter((function(e){return parseInt(e.ubication)===n})).map((function(e){return Object(I.jsxs)(h.f,{children:[Object(I.jsxs)(h.c,{width:"300px",marginRight:"-10",children:[e.name," ",Object(I.jsx)(O.a,{size:"sm",children:parseInt(e.cantidad)})]}),Object(I.jsx)(h.c,{paddingLeft:"5",paddingRight:"5",children:Object(I.jsxs)(x.a,{children:[Object(I.jsx)(f.a,{size:"xs",colorScheme:"blue",onClick:function(){return k(e)},marginRight:"1",children:"+"}),Object(I.jsx)(f.a,{marginRight:"1",size:"xs",colorScheme:"orange",onClick:function(){return w(e)},children:"-"}),Object(I.jsx)(f.a,{size:"xs",colorScheme:"red",onClick:function(){return S(e.id)},children:"x"})]})})]},e.id)})))})]})]});var n,c}return Object(I.jsxs)("div",{children:[Object(I.jsx)(E,{addOrEdit:P}),Object(I.jsx)(m.a,{placeholder:"Buscar",size:"sm",m:"20px",w:"300px",onChange:function(e){if(console.log(e.target.value),""===e.target.value)j(n);else{var t=n.filter((function(t){return t.name===e.target.value}));j(t),console.log(t)}}}),(C=s,Object(I.jsxs)("div",{children:[z(1,C),z(2,C),z(3,C),z(4,C),z(5,C),z(6,C)]}))]})},B=n(90);n(108);var F=function(){return Object(I.jsxs)("div",{className:"App",children:[Object(I.jsxs)(s.a,{p:"20px",children:[Object(I.jsx)(o.a,{as:"h1",size:"xl",children:"El Goku"}),Object(I.jsx)(A,{})]}),Object(I.jsx)(B.a,{})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},R=n(133);i.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(R.a,{children:Object(I.jsx)(F,{})})}),document.getElementById("root")),L()},99:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.198b7756.chunk.js.map