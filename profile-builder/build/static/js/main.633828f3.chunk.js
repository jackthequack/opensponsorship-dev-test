(this["webpackJsonpprofile-builder"]=this["webpackJsonpprofile-builder"]||[]).push([[0],{233:function(e,t,n){},234:function(e,t,n){},272:function(e,t){},274:function(e,t){},282:function(e,t){},291:function(e,t){},308:function(e,t){},310:function(e,t){},338:function(e,t){},340:function(e,t){},341:function(e,t){},346:function(e,t){},348:function(e,t){},367:function(e,t){},379:function(e,t){},382:function(e,t){},389:function(e,t){},391:function(e,t){},396:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(16),s=n.n(c),r=(n(233),n(234),n(29)),o=n(53),l=n(37),j=n(78),b=n(77),u=n(11),d=n(428),h=n(429),O=n(433),x=n(103),m=n(444),f=n(437),p=n(434),g=n(221),y=n(24),v=n.n(y),C=n(436),k=n(10),S=n(1),N={button:{margin:"1em",backgroundColor:"#3f51b5",color:"white"},textField:{margin:"1em",width:"25%"},typography:{marginLeft:"auto",marginRight:"auto"},icon:{position:"absolute"}},F=function(e){var t=i.a.useState(!1),n=Object(u.a)(t,2),a=n[0],c=n[1],s=i.a.useState(null),r=Object(u.a)(s,2),o=r[0],l=(r[1],function(){c(!1)}),j=e.values,b=e.handleChange;return Object(S.jsx)(d.a,{children:Object(S.jsxs)(i.a.Fragment,{children:[Object(S.jsx)(h.a,{position:"static",children:Object(S.jsxs)(O.a,{children:[Object(S.jsxs)(p.a,{edge:"start",className:"menuButton",color:"inherit","aria-label":"menu",style:N.icon,onClick:function(e){c(!a)},children:[Object(S.jsx)(v.a,{}),Object(S.jsxs)(g.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:a,onClose:l,children:[Object(S.jsx)(C.a,{onClick:l,children:Object(S.jsx)(k.b,{to:"/",children:"Form"})}),Object(S.jsx)(C.a,{onClick:l,children:Object(S.jsx)(k.b,{to:"/list",children:"List"})})]})]}),Object(S.jsx)(x.a,{variant:"h6",style:N.typography,children:"OpenSponsorship"})]})}),Object(S.jsx)("br",{}),Object(S.jsx)(m.a,{style:N.textField,hintText:"Enter your First Name",floatingLabelText:"First Name",onChange:b("firstName"),defaultValue:j.firstName,variant:"outlined",label:"First Name"}),Object(S.jsx)("br",{}),Object(S.jsx)(m.a,{style:N.textField,hintText:"Enter your Last Name",floatingLabelText:"Last Name",onChange:b("lastName"),defaultValue:j.lastName,variant:"outlined",label:"Last Name"}),Object(S.jsx)("br",{}),Object(S.jsx)(m.a,{style:N.textField,defaultValue:j.sports,select:!0,variant:"outlined",onChange:b("sports"),children:["Golf","Tennis","Cricket","Basketball","Baseball","American Football","Aquatics","Archery","Automobile Racing","Badminton","Beach Volleyball","Bobsleigh","Body Building","Boxing","Cross Country Running","Cross Country Skiing","Curling","Cycling","Darts","Decathlon","Down Hill Skiing","Equestrianism","eSports","Field Hockey","Figure Skating","Gymnastics","Ice Hockey","Martial Arts","Mixed Martial Arts","Modern Pentathlon","Motorcycle Racing","Netball","Polo","Racquetball","Rowing","Rugby","Sailing","Softball","Shooting","Skateboarding","Skeet Shooting","Skeleton","Snow Boarding","Soccer (Football)","Squash","Surfing","Swimming","Track and Field"].map((function(e){return Object(S.jsx)("option",{value:e,children:e},e)}))}),Object(S.jsx)("br",{}),Object(S.jsx)(m.a,{style:N.textField,label:"Date of Birth",onChange:b("dateOfBirth"),defaultValue:j.dateOfBirth,variant:"outlined"}),Object(S.jsx)("br",{}),Object(S.jsx)(m.a,{style:N.textField,label:"Gender",onChange:b("gender"),defaultValue:j.gender,variant:"outlined"}),Object(S.jsx)("br",{}),Object(S.jsx)(f.a,{variant:"contained",style:N.button,onClick:function(t){t.preventDefault(),e.next()},children:" Continue "})]})})},B=n(438),L=n(100),w=n.n(L),P={imgBtn:{margin:"1em"},button:{margin:"1em",backgroundColor:"#3f51b5",color:"white"},backButton:{margin:"1em"},textField:{margin:"1em",width:"25%"},typography:{marginLeft:"auto",marginRight:"auto"},icon:{position:"absolute"}},R=function(e){var t=i.a.useState(!1),n=Object(u.a)(t,2),a=n[0],c=n[1],s=i.a.useState(null),r=Object(u.a)(s,2),o=r[0],l=(r[1],function(){c(!1)}),j=e.values,b=e.handleChange,y=e.handleChangePic;return Object(S.jsx)(d.a,{children:Object(S.jsxs)(i.a.Fragment,{children:[Object(S.jsx)(h.a,{position:"static",children:Object(S.jsxs)(O.a,{children:[Object(S.jsxs)(p.a,{edge:"start",className:"menuButton",color:"inherit","aria-label":"menu",style:P.icon,onClick:function(e){c(!a)},children:[Object(S.jsx)(v.a,{}),Object(S.jsxs)(g.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:a,onClose:l,children:[Object(S.jsx)(C.a,{onClick:l,children:Object(S.jsx)(k.b,{to:"/",children:"Form"})}),Object(S.jsx)(C.a,{onClick:l,children:Object(S.jsx)(k.b,{to:"/list",children:"List"})})]})]}),Object(S.jsx)(x.a,{variant:"h6",style:P.typography,children:"OpenSponsorship"})]})}),Object(S.jsx)("br",{}),Object(S.jsx)(m.a,{style:P.textField,onChange:b("description"),defaultValue:j.description,variant:"outlined",label:"Description"}),Object(S.jsx)("br",{}),Object(S.jsx)(m.a,{style:P.textField,onChange:b("team"),defaultValue:j.location,variant:"outlined",label:"Team"}),Object(S.jsx)("br",{}),Object(S.jsx)(m.a,{style:P.textField,onChange:b("location"),defaultValue:j.location,variant:"outlined",label:"Location"}),Object(S.jsx)("br",{}),Object(S.jsxs)("label",{htmlFor:"upload-photo",children:[Object(S.jsx)("input",{style:{display:"none"},id:"upload-photo",name:"upload-photo",type:"file",onChange:y("profilePic")}),Object(S.jsxs)(B.a,{color:"secondary",size:"small",component:"span","aria-label":"add",variant:"extended",style:{margin:"1em"},children:[Object(S.jsx)(w.a,{})," Upload photo"]}),Object(S.jsx)("br",{})]}),Object(S.jsx)("br",{}),Object(S.jsx)(f.a,{variant:"contained",style:P.backButton,onClick:function(t){t.preventDefault(),e.back()},children:" Back "}),Object(S.jsx)(f.a,{variant:"contained",style:P.button,onClick:function(t){t.preventDefault(),e.next()},children:" Continue "})]})})},T=n(218),V=n(435),D=n(399),M=n(439),A=n(36),E=n.n(A),I=(n(262),n(166),n(101)),q=n.n(I),G={confirmList:{display:"inline-block"},confirmListitem:{display:"block"},button:{margin:"1em",backgroundColor:"#3f51b5",color:"white"},backButton:{margin:"1em"},textField:{margin:"1em"},typography:{marginLeft:"auto",marginRight:"auto"},icon:{position:"absolute"}},H=function(e){var t=i.a.useState(!1),n=Object(u.a)(t,2),a=n[0],c=n[1],s=i.a.useState(null),r=Object(u.a)(s,2),o=r[0],l=(r[1],function(){c(!1)}),j=e.values,b=j.firstName,m=j.lastName,y=j.sports,N=j.gender,F=j.dateOfBirth,B=j.description,L=j.team,w=j.location;return Object(S.jsx)(d.a,{children:Object(S.jsxs)(i.a.Fragment,{children:[Object(S.jsx)(h.a,{position:"static",children:Object(S.jsxs)(O.a,{children:[Object(S.jsxs)(p.a,{edge:"start",className:"menuButton",color:"inherit","aria-label":"menu",style:G.icon,onClick:function(e){c(!a)},children:[Object(S.jsx)(v.a,{}),Object(S.jsxs)(g.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:a,onClose:l,children:[Object(S.jsx)(C.a,{onClick:l,children:Object(S.jsx)(k.b,{to:"/",children:"Form"})}),Object(S.jsx)(C.a,{onClick:l,children:Object(S.jsx)(k.b,{to:"/list",children:"List"})})]})]}),Object(S.jsx)(x.a,{variant:"h6",style:G.typography,children:"OpenSponsorship"})]})}),Object(S.jsx)("br",{}),Object(S.jsx)("div",{style:G.confirmList,children:Object(S.jsxs)(V.a,{style:G.confirmList,children:[Object(S.jsx)(D.a,{style:G.confirmListitem,children:Object(S.jsx)(M.a,{primary:"Name",secondary:"".concat(b," ").concat(m)})}),Object(S.jsx)(D.a,{style:G.confirmListitem,children:Object(S.jsx)(M.a,{primary:"Sports",secondary:"".concat(y)})}),Object(S.jsx)(D.a,{style:G.confirmListitem,children:Object(S.jsx)(M.a,{primary:"Gender",secondary:"".concat(N)})}),Object(S.jsx)(D.a,{style:G.confirmListitem,children:Object(S.jsx)(M.a,{primary:"DOB",secondary:"".concat(F)})}),Object(S.jsx)(D.a,{style:G.confirmListitem,children:Object(S.jsx)(M.a,{primary:"Description",secondary:"".concat(B)})}),Object(S.jsx)(D.a,{style:G.confirmListitem,children:Object(S.jsx)(M.a,{primary:"Team",secondary:"".concat(L)})}),Object(S.jsx)(D.a,{style:G.confirmListitem,children:Object(S.jsx)(M.a,{primary:"Location",secondary:"".concat(w)})})]})}),Object(S.jsx)("br",{}),Object(S.jsx)(f.a,{variant:"contained",style:G.backButton,onClick:function(t){t.preventDefault(),e.back()},children:" Back "}),Object(S.jsx)(f.a,{variant:"contained",style:G.button,onClick:function(t){t.preventDefault();var n=new q.a,a=e.values,i=a.firstName,c=a.lastName,s=a.sports,r=a.dateOfBirth,o=a.gender,l=a.description,j=a.team,b=a.location,u=a.profilePic,d={firstName:i,lastName:c,sports:s,dateOfBirth:r,gender:o,description:l,team:j,location:b};for(var h in d)n.set(h,d[h]);n.set("file",u,u.name);var O,x=Object(T.a)(n.entries());try{for(x.s();!(O=x.n()).done;){var m=O.value;console.log(m[0],m[1])}}catch(f){x.e(f)}finally{x.f()}E.a.post("/create",n,{headers:{"Content-Type":"multipart/form-data"}}).catch((function(e){return console.log(e)})),e.next()},children:" Confirm "})]})})},_={button:{margin:"1em",backgroundColor:"#3f51b5",color:"white"},textField:{margin:"1em"},typography:{marginLeft:"auto",marginRight:"auto"},icon:{position:"absolute"}},z=function(e){e.values;var t=i.a.useState(!1),n=Object(u.a)(t,2),a=n[0],c=n[1],s=i.a.useState(null),r=Object(u.a)(s,2),o=r[0],l=(r[1],function(){c(!1)});return Object(S.jsx)(d.a,{children:Object(S.jsxs)(i.a.Fragment,{children:[Object(S.jsx)(h.a,{position:"static",children:Object(S.jsxs)(O.a,{children:[Object(S.jsxs)(p.a,{edge:"start",className:"menuButton",color:"inherit","aria-label":"menu",style:_.icon,onClick:function(e){c(!a)},children:[Object(S.jsx)(v.a,{}),Object(S.jsxs)(g.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:a,onClose:l,children:[Object(S.jsx)(C.a,{onClick:l,children:Object(S.jsx)(k.b,{to:"/",children:"Form"})}),Object(S.jsx)(C.a,{onClick:l,children:Object(S.jsx)(k.b,{to:"/list",children:"List"})})]})]}),Object(S.jsx)(x.a,{variant:"h6",style:_.typography,children:"OpenSponsorship"})]})}),Object(S.jsx)("br",{}),Object(S.jsx)("h1",{children:"You have successfully created a new profile!"}),Object(S.jsx)("br",{}),Object(S.jsx)(k.b,{to:"/list/".concat(e.values.firstName,"_").concat(e.values.lastName),className:"btn btn-primary",style:_.button,children:"View My Profile"})]})})},J=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={step:1,firstName:String,lastName:String,sports:String,gender:String,dateOfBirth:Date,description:String,team:String,location:String,profilePic:Image,id:String,signupSuccess:!1},e.next=function(){e.setState((function(e){return{step:e.step+1}}))},e.back=function(){e.setState((function(e){return{step:e.step-1}}))},e.handleID=function(t){e.setState({id:t}),console.log(e.state)},e.handleChange=function(t){return function(n){e.setState(Object(r.a)({},t,n.target.value)),console.log(e.state)}},e.handleChangePic=function(t){return function(n){e.setState(Object(r.a)({},t,n.target.files[0]))}},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.step,t=this.state,n={firstName:t.firstName,lastName:t.lastName,sports:t.sports,gender:t.gender,dateOfBirth:t.dateOfBirth,description:t.description,team:t.team,location:t.location,profilePic:t.profilePic,signupSuccess:t.signupSuccess};switch(e){case 1:return Object(S.jsx)(F,{values:n,handleChange:this.handleChange,next:this.next});case 2:return Object(S.jsx)(R,{values:n,handleChange:this.handleChange,handleChangePic:this.handleChangePic,next:this.next,back:this.back});case 3:return Object(S.jsx)(H,{values:n,next:this.next,back:this.back,handleID:this.handleID});case 4:return Object(S.jsx)(z,{values:n})}}}]),n}(i.a.Component),U=n(19),W=n(445),Y=n(440),K=n(441),Q=n(442),X={textField:{margin:"1em",width:"100%"},img:{width:"10rem",height:"10rem",marginLeft:"auto",marginRight:"auto"},button:{margin:"1em",backgroundColor:"#3f51b5",color:"white"},typography:{marginLeft:"auto",marginRight:"auto"},icon:{position:"absolute"}},Z=function(e){e.onSubmit.bind(undefined);var t=Object(U.f)().slug.split("_"),n=t[0],i=t[1],c=Object(a.useState)(!0),s=Object(u.a)(c,2),r=s[0],o=s[1],l=Object(a.useState)(),j=Object(u.a)(l,2),b=j[0],d=j[1],y=Object(a.useReducer)((function(e){return e+1}),0),N=Object(u.a)(y,2),F=(N[0],N[1]),L=Object(a.useState)(!1),P=Object(u.a)(L,2),R=P[0],T=P[1],V=Object(a.useState)(null),D=Object(u.a)(V,2),M=D[0],A=(D[1],function(){T(!1)});return Object(a.useEffect)((function(){return fetch("/users",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.filter((function(e){return e.firstName==n&&e.lastName==i}))[0];return console.log(t),d(t),o(!1),e}))}),[]),1==r?Object(S.jsx)("div",{children:"Loading..."}):Object(S.jsxs)("div",{children:[Object(S.jsx)(h.a,{position:"static",children:Object(S.jsxs)(O.a,{children:[Object(S.jsxs)(p.a,{edge:"start",className:"menuButton",color:"inherit","aria-label":"menu",style:X.icon,onClick:function(e){T(!R)},children:[Object(S.jsx)(v.a,{}),Object(S.jsxs)(g.a,{id:"simple-menu",anchorEl:M,keepMounted:!0,open:R,onClose:A,children:[Object(S.jsx)(C.a,{onClick:A,children:Object(S.jsx)(k.b,{to:"/",children:"Form"})}),Object(S.jsx)(C.a,{onClick:A,children:Object(S.jsx)(k.b,{to:"/list",children:"List"})})]})]}),Object(S.jsx)(x.a,{variant:"h6",style:X.typography,children:"OpenSponsorship"})]})}),Object(S.jsx)("br",{}),Object(S.jsxs)(Y.a,{children:[Object(S.jsxs)(K.a,{children:[Object(S.jsx)(Q.a,{children:Object(S.jsxs)(Y.a,{children:[Object(S.jsx)(K.a,{children:Object(S.jsxs)(Q.a,{children:[Object(S.jsx)(W.a,{id:"profilePic",style:X.img,src:b.profilePic}),Object(S.jsx)("br",{})]})}),Object(S.jsx)(K.a,{children:Object(S.jsx)(Q.a,{children:Object(S.jsxs)("label",{htmlFor:"upload-photo",children:[Object(S.jsx)("input",{style:{display:"none"},id:"upload-photo",name:"upload-photo",type:"file",onChange:function(e){b.profilePic=e.target.files[0]}}),Object(S.jsxs)(B.a,{color:"secondary",size:"small",component:"span","aria-label":"add",variant:"extended",children:[Object(S.jsx)(w.a,{})," Upload Photo"]})]})})})]})}),Object(S.jsx)(Q.a,{children:Object(S.jsxs)(Y.a,{children:[Object(S.jsxs)(K.a,{children:[Object(S.jsx)(Q.a,{children:Object(S.jsx)(m.a,{style:X.textField,defaultValue:b.firstName,variant:"outlined",onChange:function(e){return b.firstName=e.target.value}})}),Object(S.jsx)(Q.a,{children:Object(S.jsx)(m.a,{style:X.textField,defaultValue:b.lastName,variant:"outlined",onChange:function(e){return b.lastName=e.target.value}})})]}),Object(S.jsxs)(K.a,{children:[Object(S.jsx)(Q.a,{children:Object(S.jsx)(m.a,{style:X.textField,defaultValue:b.sports,select:!0,variant:"outlined",onChange:function(e){return b.sports=e.target.value},children:["Golf","Tennis","Cricket","Basketball","Baseball","American Football","Aquatics","Archery","Automobile Racing","Badminton","Beach Volleyball","Bobsleigh","Body Building","Boxing","Cross Country Running","Cross Country Skiing","Curling","Cycling","Darts","Decathlon","Down Hill Skiing","Equestrianism","eSports","Field Hockey","Figure Skating","Gymnastics","Ice Hockey","Martial Arts","Mixed Martial Arts","Modern Pentathlon","Motorcycle Racing","Netball","Polo","Racquetball","Rowing","Rugby","Sailing","Softball","Shooting","Skateboarding","Skeet Shooting","Skeleton","Snow Boarding","Soccer (Football)","Squash","Surfing","Swimming","Track and Field"].map((function(e){return Object(S.jsx)("option",{value:e,children:e},e)}))})}),Object(S.jsx)(Q.a,{children:Object(S.jsx)(m.a,{style:X.textField,defaultValue:b.gender,variant:"outlined",onChange:function(e){return b.gender=e.target.value}})})]}),Object(S.jsxs)(K.a,{children:[Object(S.jsx)(Q.a,{children:Object(S.jsx)(m.a,{style:X.textField,defaultValue:b.dateOfBirth,variant:"outlined",onChange:function(e){return b.dateOfBirth=e.target.value}})}),Object(S.jsx)(Q.a,{children:Object(S.jsx)(m.a,{style:X.textField,defaultValue:b.description,variant:"outlined",onChange:function(e){return b.description=e.target.value}})})]}),Object(S.jsxs)(K.a,{children:[Object(S.jsx)(Q.a,{children:Object(S.jsx)(m.a,{style:X.textField,defaultValue:b.team,variant:"outlined",onChange:function(e){return b.team=e.target.value}})}),Object(S.jsx)(Q.a,{children:Object(S.jsx)(m.a,{style:X.textField,defaultValue:b.location,variant:"outlined",onChange:function(e){return b.location=e.target.value}})})]})]})})]}),Object(S.jsxs)(K.a,{children:[Object(S.jsx)(Q.a,{}),Object(S.jsx)(Q.a,{})]}),Object(S.jsxs)(K.a,{children:[Object(S.jsx)(Q.a,{children:Object(S.jsx)(f.a,{variant:"contained",style:X.button,onClick:function(){console.log(b);var e=new q.a;for(var t in b)e.set(t,b[t]);b.profilePic instanceof File&&(console.log("Working"),e.delete("profilePic"),e.set("file",b.profilePic,b.profilePic.name)),E.a.put("/update",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){d(e.data)})).then(F()).catch((function(e){return console.log(e)}))},children:" Save changes "})}),Object(S.jsx)(Q.a,{children:Object(S.jsx)(k.b,{to:"/".concat(b.firstName,"_").concat(b.lastName),className:"btn btn-primary",style:X.button,children:"View My Profile"})})]})]}),Object(S.jsx)("br",{})]})},$=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={users:[]},a.state.loading=!0,a}return Object(l.a)(n,[{key:"onSubmit",value:function(){console.log(this.users),E.a.put("/update",this.users).then((function(e){e.json()})).catch((function(e){return console.log(e)}))}},{key:"onRefresh",value:function(){fetch("/users",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){return e}))}},{key:"componentDidMount",value:function(){var e=this;fetch("/users",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){return e.setState({users:t})}))}},{key:"render",value:function(){return Object(S.jsx)(d.a,{children:Object(S.jsx)(i.a.Fragment,{children:Object(S.jsx)(Z,{onSubmit:this.onSubmit})})})}}]),n}(a.Component),ee={button:{backgroundColor:"#3f51b5",color:"white"},textField:{margin:"1em"},typography:{marginLeft:"auto",marginRight:"auto"},icon:{position:"absolute"},img:{marginLeft:"auto",marginRight:"auto"}},te=function(e){var t=i.a.useState(!1),n=Object(u.a)(t,2),a=n[0],c=n[1],s=i.a.useState(null),r=Object(u.a)(s,2),o=r[0],l=(r[1],function(){c(!1)});return Object(S.jsxs)("div",{children:[Object(S.jsx)(h.a,{position:"static",children:Object(S.jsxs)(O.a,{children:[Object(S.jsx)(x.a,{variant:"h6",style:ee.typography,children:"OpenSponsorship"}),Object(S.jsxs)(p.a,{edge:"start",className:"menuButton",color:"inherit","aria-label":"menu",style:ee.icon,onClick:function(e){c(!a)},children:[Object(S.jsx)(v.a,{}),Object(S.jsxs)(g.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:a,onClose:l,children:[Object(S.jsx)(C.a,{onClick:l,children:Object(S.jsx)(k.b,{to:"/",children:"Form"})}),Object(S.jsx)(C.a,{onClick:l,children:Object(S.jsx)(k.b,{to:"/list",children:"List"})})]})]})]})}),Object(S.jsx)("br",{}),Object(S.jsx)(Y.a,{id:"containerList",children:e.elements})]})},ne=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={users:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/users").then((function(t){console.log(t),e.setState({users:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.users.map((function(e){return Object(S.jsxs)("div",{children:[Object(S.jsxs)(K.a,{children:[Object(S.jsx)(Q.a,{xs:2,children:Object(S.jsx)(W.a,{id:"profilePic",style:ae.img,src:e.profilePic})}),Object(S.jsx)(Q.a,{children:Object(S.jsx)("h5",{style:ae.img,children:"".concat(e.firstName," ").concat(e.lastName)})}),Object(S.jsx)(Q.a,{children:Object(S.jsx)(k.b,{to:"/".concat(e.firstName,"_").concat(e.lastName),className:"btn btn-primary",style:ae.button,children:"View Profile"})})]}),Object(S.jsx)("br",{})]})}));return Object(S.jsx)(d.a,{children:Object(S.jsx)(i.a.Fragment,{children:Object(S.jsx)(te,{users:this.state.users,elements:e})})})}}]),n}(a.Component),ae={button:{backgroundColor:"#3f51b5",color:"white"},textField:{margin:"1em"},typography:{marginLeft:"auto",marginRight:"auto"},icon:{position:"absolute"},img:{marginLeft:"auto",marginRight:"auto"}},ie=ne;n(443),n(395);var ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,446)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))},se=n(6),re=Object(se.a)({root:{marginRight:8,"& .MuiInputBase-root.Mui-disabled":{color:"black"}}})(m.a),oe={textField:{margin:"1em",width:"100%"},img:{width:"10rem",height:"10rem",marginLeft:"auto",marginRight:"auto",marginTop:"1rem",border:"solid 3px black"},button:{margin:"3em",backgroundColor:"#3f51b5",color:"white"},typography:{marginLeft:"auto",marginRight:"auto"},icon:{position:"absolute"}},le=function(){var e=Object(U.f)().slug.split("_"),t=e[0],n=e[1],i=Object(a.useState)(!0),c=Object(u.a)(i,2),s=c[0],r=c[1],o=Object(a.useState)(),l=Object(u.a)(o,2),j=l[0],b=l[1],d=Object(a.useState)(!1),m=Object(u.a)(d,2),f=m[0],y=m[1],N=Object(a.useState)(null),F=Object(u.a)(N,2),B=F[0],L=(F[1],function(){y(!1)});return Object(a.useEffect)((function(){return fetch("/users",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e);var a=e.filter((function(e){return e.firstName==t&&e.lastName==n}))[0];return console.log(a),b(a),r(!1),e}))}),[]),1==s?Object(S.jsx)("div",{children:"Loading..."}):Object(S.jsxs)("div",{children:[Object(S.jsx)(h.a,{position:"static",children:Object(S.jsxs)(O.a,{children:[Object(S.jsxs)(p.a,{edge:"start",className:"menuButton",color:"inherit","aria-label":"menu",style:oe.icon,onClick:function(e){y(!f)},children:[Object(S.jsx)(v.a,{}),Object(S.jsxs)(g.a,{id:"simple-menu",anchorEl:B,keepMounted:!0,open:f,onClose:L,children:[Object(S.jsx)(C.a,{onClick:L,children:Object(S.jsx)(k.b,{to:"/",children:"Form"})}),Object(S.jsx)(C.a,{onClick:L,children:Object(S.jsx)(k.b,{to:"/list",children:"List"})})]})]}),Object(S.jsx)(x.a,{variant:"h6",style:oe.typography,children:"OpenSponsorship"})]})}),Object(S.jsxs)(Y.a,{children:[Object(S.jsxs)(K.a,{children:[Object(S.jsx)(Q.a,{children:Object(S.jsxs)(Y.a,{children:[Object(S.jsx)(K.a,{children:Object(S.jsx)(Q.a,{children:Object(S.jsx)(W.a,{style:oe.img,src:j.profilePic})})}),Object(S.jsx)(K.a,{children:Object(S.jsx)(Q.a,{children:Object(S.jsx)("h3",{style:{textDecoration:"underline",marginTop:".5rem"},children:"".concat(j.firstName," ").concat(j.lastName)})})})]})}),Object(S.jsxs)(Q.a,{children:[Object(S.jsx)(re,{style:{textColor:"black",marginTop:"3rem",marginLeft:"3rem"},defaultValue:j.sports,variant:"filled",label:"Sport",disabled:!0}),Object(S.jsx)(re,{style:{textColor:"black",marginTop:"3rem",marginLeft:"3rem"},defaultValue:j.team,label:"Team",variant:"filled",disabled:!0}),Object(S.jsx)(K.a,{children:Object(S.jsxs)(Q.a,{children:[Object(S.jsx)(re,{style:{textColor:"black",marginTop:"3rem",marginLeft:"3rem"},defaultValue:j.location,label:"Location",variant:"filled",disabled:!0}),Object(S.jsx)(re,{style:{textColor:"black",marginTop:"3rem",marginLeft:"3rem"},defaultValue:j.dateOfBirth,label:"Date of Birth",variant:"filled",disabled:!0})]})}),Object(S.jsx)(K.a,{children:Object(S.jsx)(Q.a,{children:Object(S.jsx)(re,{style:{textColor:"black",marginTop:"3rem",marginLeft:"auto",marginRight:"auto",width:"90%"},defaultValue:j.description,label:"Description",variant:"filled",disabled:!0})})}),Object(S.jsx)(K.a,{children:Object(S.jsx)(Q.a,{children:Object(S.jsx)(k.b,{to:"/list/".concat(j.firstName,"_").concat(j.lastName),className:"btn btn-primary",style:oe.button,children:"Edit Profile"})})})]})]}),Object(S.jsxs)(K.a,{children:[Object(S.jsx)(Q.a,{}),Object(S.jsx)(Q.a,{})]})]})]})};s.a.render(Object(S.jsx)(k.a,{children:Object(S.jsxs)(U.c,{children:[Object(S.jsx)(U.a,{exact:!0,path:"/",children:Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(J,{})})}),Object(S.jsx)(U.a,{path:"/list/:slug",children:Object(S.jsx)("div",{className:"App",children:Object(S.jsx)($,{})})}),Object(S.jsx)(U.a,{path:"/list",children:Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(ie,{})})}),Object(S.jsx)(U.a,{path:"/:slug",children:Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(le,{})})})]})}),document.getElementById("root")),ce()}},[[396,1,2]]]);
//# sourceMappingURL=main.633828f3.chunk.js.map