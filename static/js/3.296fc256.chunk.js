(this.webpackJsonpc=this.webpackJsonpc||[]).push([[3],{291:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(34),o=a(35),r=a(38),l=a(36),s=a(39),c=a(0),i=a.n(c),u=a(30),m=a(19),p=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(s.a)(a,t),Object(o.a)(a,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(u.a,{to:"/login"})}}]),a}(i.a.Component);return Object(m.b)(p)(t)}},292:function(e,t,a){e.exports={headerPhoto:"ProfileInfo_headerPhoto__3Et2P",descriptionBlock:"ProfileInfo_descriptionBlock__HzZQK",spanText:"ProfileInfo_spanText__3ZIpC",mainPhoto:"ProfileInfo_mainPhoto__3E8EV",contact:"ProfileInfo_contact__1TEoo"}},296:function(e,t,a){e.exports=a.p+"static/media/roller.5d432515.jpg"},297:function(e,t,a){e.exports={postBlock:"MyPosts_postBlock__3r8OO"}},298:function(e,t,a){e.exports={item:"Post_item__1eweQ"}},299:function(e,t,a){"use strict";a.r(t);var n=a(34),o=a(35),r=a(38),l=a(36),s=a(39),c=a(0),i=a.n(c),u=a(94),m=a(292),p=a.n(m),f=a(41),d=a(296),b=a.n(d),E=function(e){var t=Object(c.useState)(!1),a=Object(u.a)(t,2),n=a[0],o=a[1],r=Object(c.useState)(e.status),l=Object(u.a)(r,2),s=l[0],m=l[1];Object(c.useEffect)((function(){m(e.status)}),[e.status]);return i.a.createElement(i.a.Fragment,null,!n&&i.a.createElement("div",{className:p.a.spanText},i.a.createElement("span",{onDoubleClick:function(){return o(!0)}},e.status||"-------")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(s)},value:s})))},h=a(25),v=a(126),O=a(49),P=a.n(O),g=Object(v.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return i.a.createElement("form",{onSubmit:t},i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){}},"Save")),n&&i.a.createElement("div",{className:P.a.formSummaryError},n),i.a.createElement("div",null,i.a.createElement("b",null,"full name"),": ",Object(h.c)("Full name","fullName",[],h.a)),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),": ",Object(h.c)("","lookingForAJob",[],h.a,{type:"checkbox"})),i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),":",Object(h.c)("My professional skills","lookingForAJobDescription",[],h.b)),"}",i.a.createElement("div",null,i.a.createElement("b",null,"About me"),":",Object(h.c)("About me","aboutMe",[],h.b)),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",Object.keys(a.contacts).map((function(e){return i.a.createElement("div",{key:e,className:p.a.contact},i.a.createElement("b",null,e,": ",Object(h.c)(e,"contacts."+e,[],h.a)))}))))})),j=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return i.a.createElement("div",null,a&&i.a.createElement("div",null,i.a.createElement("button",{onClick:n},"Edit")),i.a.createElement("div",null,i.a.createElement("b",null,"full name"),": ",t.fullName),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),": ",t.aboutMe),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map((function(e){return i.a.createElement(k,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},k=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",{className:p.a.contact},i.a.createElement("b",null,t),": ",a)},y=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,r=e.savePhoto,l=e.saveProfile,s=Object(c.useState)(!1),m=Object(u.a)(s,2),d=m[0],h=m[1];if(!t)return i.a.createElement(f.a,null);return i.a.createElement("div",{className:p.a.headerPhoto},i.a.createElement("div",{className:p.a.descriptionBlock},i.a.createElement("img",{src:t.photos.large||b.a,className:p.a.mainPhoto}),o&&i.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&r(e.target.files[0])}}),d?i.a.createElement(g,{initialValues:t,profile:t,onSubmit:function(e){l(e).then((function(){return h(!1)}))}}):i.a.createElement(j,{goToEditMode:function(){h(!0)},profile:t,isOwner:o}),i.a.createElement(E,{status:a,updateStatus:n})))},S=a(93),_=a(297),A=a.n(_),w=a(298),N=a.n(w),x=function(e){return i.a.createElement("div",{className:N.a.item},i.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeYatHjn3DBnwvvyHDdtNAx0-x0QUV7cG056KlBa1reeHp-F7v",alt:""}),e.message,i.a.createElement("div",null,i.a.createElement("span",null,"like ",e.likesCount)))},T=a(87),C=a(64),I=Object(C.a)(10),F=Object(v.a)({form:"profileAddNewPostForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(T.a,{placeholder:"Post message",name:"newPostText",component:h.b,validate:[C.b,I],cols:"30",rows:"1"})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))})),M=i.a.memo((function(e){var t=e.posts.map((function(e){return i.a.createElement(x,{key:e.id,message:e.message,likesCount:e.likesCount})}));return i.a.createElement("div",{className:A.a.postBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(F,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:A.a.post},t))})),B=a(19),D=Object(B.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){return e(Object(S.a)(t))}}}))(M),J=function(e){return i.a.createElement("div",null,i.a.createElement(y,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),i.a.createElement(D,null))},U=a(30),V=a(291),H=a(8),z=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(J,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),t}(i.a.Component);t.default=Object(H.d)(Object(B.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:S.d,getStatus:S.c,updateStatus:S.g,savePhoto:S.e,saveProfile:S.f}),U.g,V.a)(z)}}]);
//# sourceMappingURL=3.296fc256.chunk.js.map