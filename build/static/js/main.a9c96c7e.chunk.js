(this["webpackJsonpinstagram-clone"]=this["webpackJsonpinstagram-clone"]||[]).push([[0],{52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},64:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(17),o=a.n(s),r=(a(52),a(15)),i=(a(53),a(54),a(94)),l=a(21),u=l.a.initializeApp({apiKey:"AIzaSyCOGgLS4eEp5NK_gbMY5E-LPplti_4bPT4",authDomain:"instagram-clone-react-3317c.firebaseapp.com",projectId:"instagram-clone-react-3317c",storageBucket:"instagram-clone-react-3317c.appspot.com",messagingSenderId:"234229700101",appId:"1:234229700101:web:3ecf5602505964ad1b6e6c",measurementId:"G-JFJ9WH855P"}).firestore(),p=l.a.auth(),d=l.a.storage(),j=a(5);var m=function(e){var t=e.postId,a=e.user,c=e.username,s=e.caption,o=e.imageUrl,p=Object(n.useState)([]),d=Object(r.a)(p,2),m=d[0],b=d[1],g=Object(n.useState)(""),f=Object(r.a)(g,2),h=f[0],O=f[1];return Object(n.useEffect)((function(){var e;return t&&(e=u.collection("posts").doc(t).collection("comments").orderBy("timestamp","asc").onSnapshot((function(e){b(e.docs.map((function(e){return e.data()})))}))),function(){e()}}),[t]),Object(j.jsxs)("div",{className:"post",children:[Object(j.jsxs)("div",{className:"post__header",children:[Object(j.jsx)(i.a,{className:"post__avatar",src:"/static/images/avatar/jpg",alt:c}),Object(j.jsx)("h3",{children:c})]}),Object(j.jsx)("img",{className:"post__image",alt:"abc",src:o}),Object(j.jsxs)("h4",{className:"post__text",children:[Object(j.jsxs)("strong",{children:[c,":"]})," ",s]}),Object(j.jsx)("div",{className:"post__comments",children:m.map((function(e){return Object(j.jsxs)("h6",{children:[Object(j.jsx)("strong",{children:e.username})," ",e.text]})}))}),a&&Object(j.jsxs)("form",{className:"post__commentsBox",children:[Object(j.jsx)("input",{className:"post__input",type:"text",placeholder:"Add a comment..",value:h,onChange:function(e){return O(e.target.value)}}),Object(j.jsx)("button",{className:"post__button",disabled:!h,type:"submit",onClick:function(e){e.preventDefault(),u.collection("posts").doc(t).collection("comments").add({text:h,username:a.displayName,timestamp:l.a.firestore.FieldValue.serverTimestamp()}),O("")},children:"Post"})]})]})},b=a(90),g=a(91),f=a(93),h=a(92);a(64);var O=function(e){var t=e.username,a=Object(n.useState)(""),c=Object(r.a)(a,2),s=c[0],o=c[1],i=Object(n.useState)(null),p=Object(r.a)(i,2),m=p[0],b=p[1],g=Object(n.useState)(0),f=Object(r.a)(g,2),O=f[0],x=f[1];return Object(j.jsxs)("div",{className:"ImageUpload",children:[Object(j.jsx)("progress",{className:"ImageUpload__progress",value:O,max:"100"}),Object(j.jsx)("input",{type:"text",placeholder:"Enter a Caption",onChange:function(e){return o(e.target.value)}}),Object(j.jsx)("input",{type:"file",onChange:function(e){e.target.files[0]&&b(e.target.files[0])}}),Object(j.jsx)(h.a,{onClick:function(){d.ref("images/".concat(m.name)).put(m).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);x(t)}),(function(e){console.log(e),alert(e.message)}),(function(){d.ref("images").child(m.name).getDownloadURL().then((function(e){u.collection("posts").add({timestamp:l.a.firestore.FieldValue.serverTimestamp(),caption:s,imageUrl:e,username:t}),x(0),o(""),b(null)}))}))},variant:"contained",color:"secondry",children:"Upload"})]})},x=a(43);function v(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var _=Object(b.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var N=function(){var e=_(),t=Object(n.useState)(v),a=Object(r.a)(t,1)[0],c=Object(n.useState)([]),s=Object(r.a)(c,2),o=s[0],i=s[1],l=Object(n.useState)(!1),d=Object(r.a)(l,2),b=d[0],N=d[1],y=Object(n.useState)(!1),S=Object(r.a)(y,2),w=S[0],C=S[1],I=Object(n.useState)(""),U=Object(r.a)(I,2),k=U[0],E=U[1],F=Object(n.useState)(""),P=Object(r.a)(F,2),B=P[0],L=P[1],D=Object(n.useState)(""),T=Object(r.a)(D,2),A=T[0],J=T[1],W=Object(n.useState)(null),M=Object(r.a)(W,2),R=M[0],z=M[1];return Object(n.useEffect)((function(){var e=p.onAuthStateChanged((function(e){if(e){if(console.log(e),z(e),!e.displayName)return e.updateProfile({displayName:k})}else z(null)}));return function(){e()}}),[R,k]),Object(n.useEffect)((function(){u.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){i(e.docs.map((function(e){return{id:e.id,post:e.data()}})))}))}),[]),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(g.a,{open:b,onClose:function(){return N(!1)},children:Object(j.jsx)("div",{style:a,className:e.paper,children:Object(j.jsxs)("form",{className:"app__signUp",children:[Object(j.jsx)("center",{children:Object(j.jsx)("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""})}),Object(j.jsx)(f.a,{placeholder:"username",type:"text",value:k,onChange:function(e){return E(e.target.value)}}),Object(j.jsx)(f.a,{placeholder:"email",type:"text",value:A,onChange:function(e){return J(e.target.value)}}),Object(j.jsx)(f.a,{placeholder:"password",type:"password",value:B,onChange:function(e){return L(e.target.value)}}),Object(j.jsx)(h.a,{type:"submit",onClick:function(e){e.preventDefault(),p.createUserWithEmailAndPassword(A,B).then((function(e){return e.user.updateProfile({displayName:k})})).catch((function(e){return alert(e.message)})),N(!1)},children:"Sign Up"})]})})}),Object(j.jsx)(g.a,{open:w,onClose:function(){return C(!1)},children:Object(j.jsx)("div",{style:a,className:e.paper,children:Object(j.jsxs)("form",{className:"app__signUp",children:[Object(j.jsx)("center",{children:Object(j.jsx)("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"abc"})}),Object(j.jsx)(f.a,{placeholder:"email",type:"email",value:A,onChange:function(e){return J(e.target.value)}}),Object(j.jsx)(f.a,{placeholder:"password",type:"password",value:B,onChange:function(e){return L(e.target.value)}}),Object(j.jsx)(h.a,{type:"submit",onClick:function(e){e.preventDefault(),p.signInWithEmailAndPassword(A,B).catch((function(e){return alert(e.message)})),C(!1)},children:"Sign In"})]})})}),Object(j.jsxs)("div",{className:"app__header",children:[Object(j.jsx)("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""}),R?Object(j.jsx)(h.a,{onClick:function(){return p.signOut()},children:"Logout"}):Object(j.jsxs)("div",{className:"app__loginContainer",children:[Object(j.jsx)(h.a,{onClick:function(){return C(!0)},children:"Sign In"}),Object(j.jsx)(h.a,{onClick:function(){return N(!0)},children:"Sign Up"})]})]}),Object(j.jsxs)("div",{className:"app__posts",children:[Object(j.jsx)("div",{className:"app__postsLeft",children:o.map((function(e){var t=e.id,a=e.post;return Object(j.jsx)(m,{postId:t,user:R,username:a.username,caption:a.caption,imageUrl:a.imageUrl},t)}))}),Object(j.jsx)("div",{className:"app_postsRight",children:Object(j.jsx)(x.a,{url:"https://www.instagram.com/p/B3ekQjoltlDImUirH0U5JFaFBETXrNLDxl-iig0/",maxWidth:320,hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){},onSuccess:function(){},onAfterRender:function(){},onFailure:function(){}})})]}),(null===R||void 0===R?void 0:R.displayName)?Object(j.jsx)(O,{username:R.displayName}):Object(j.jsx)("h3",{children:"Sorry you need to login to upload"})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,96)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),s(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),y()}},[[67,1,2]]]);
//# sourceMappingURL=main.a9c96c7e.chunk.js.map