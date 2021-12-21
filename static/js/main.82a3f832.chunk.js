(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(6),r=n.n(c),s=(n(14),n(9)),i=n(2),l=n.p+"static/media/vector-logo.4e8e0a1d.svg",u=n(0);var d=function(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("img",{src:l,alt:"logo",className:"logo"})})},h=o.a.createContext();var p=function(e){var t=e.card,n=e.onCardClick,o=e.onCardLike,c=e.onCardDelete,r=Object(a.useContext)(h),s=t.owner._id===r._id,i="photo-grid__delete-icon ".concat(s?"photo-grid__delete-icon_visible":"photo-grid__delete-icon_hidden"),l=t.likes.some((function(e){return e._id===r._id})),d="opacity photo-grid__heart-icon ".concat(l?"photo-grid__heart-icon_active":"photo-grid__heart-icon_disabled");return Object(u.jsxs)("li",{className:"photo-grid__card",children:[Object(u.jsx)("button",{"aria-label":"delete",type:"button",className:i,onClick:function(){c(t)}}),Object(u.jsx)("img",{className:"photo-grid__image",alt:t.name,src:t.link,onClick:function(){n(t)}}),Object(u.jsxs)("div",{className:"photo-grid__content",children:[Object(u.jsx)("h2",{className:"photo-grid__title",children:t.name}),Object(u.jsxs)("div",{className:"photo-grid__likes",children:[Object(u.jsx)("button",{"aria-label":"like",type:"button",id:"like",className:d,onClick:function(){o(t)}}),Object(u.jsx)("p",{className:"photo-grid__text",children:t.likes.length})]})]})]})};var _=function(e){var t=o.a.useContext(h);return Object(u.jsx)("div",{children:Object(u.jsxs)("main",{children:[Object(u.jsxs)("section",{className:"profile",children:[Object(u.jsxs)("div",{className:"profile__area",children:[Object(u.jsx)("button",{type:"button","aria-label":"avatar",className:"button profile__avatar-button",onClick:e.onEditAvatarClick,children:Object(u.jsx)("img",{src:t.avatar,alt:"avatar of ".concat(t.name),className:"profile__image"})}),Object(u.jsxs)("div",{className:"profile__name-area",children:[Object(u.jsx)("h1",{className:"profile__name",children:t.name}),Object(u.jsx)("button",{"aria-label":"edit",type:"button",className:"button profile__edit-button opacity",onClick:e.onEditProfileClick}),Object(u.jsx)("p",{className:"profile__title",children:t.about})]})]}),Object(u.jsx)("button",{"aria-label":"add",type:"button",className:"button profile__add-button opacity",onClick:e.onAddPlaceClick})]}),Object(u.jsx)("section",{className:"images",children:Object(u.jsx)("ul",{className:"photo-grid",children:e.cards.map((function(t,n){return Object(u.jsx)(p,{name:t.name,link:t.link,owner:t.owner,_id:t._id,likes:t.likes,card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})})};var b=function(e){return Object(u.jsx)("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),children:Object(u.jsxs)("div",{className:"popup__container",children:[Object(u.jsx)("button",{"aria-label":"close",type:"button",className:"popup__close-button opacity",onClick:e.onClose}),Object(u.jsx)("h2",{className:"popup__heading",children:e.title}),Object(u.jsxs)("form",{className:"form",name:"".concat(e.name,"-form"),onSubmit:e.onSubmit,children:[e.children,Object(u.jsx)("button",{type:"submit",className:"form__button opacity",children:e.buttonName})]})]})})};var m=function(e){var t=e.card,n=e.isOpen,a=e.onClose;return Object(u.jsx)("div",{className:"popup popup_type_".concat(t.name," ").concat(n&&"popup_opened"),children:Object(u.jsxs)("div",{className:"popup__container popup__container_type_preview",children:[Object(u.jsx)("button",{"aria-label":"close",type:"button",className:"popup__close-button popup__close-button_type_preview opacity",onClick:a}),Object(u.jsx)("img",{src:t.link,alt:t.name,className:"popup__image"}),Object(u.jsx)("h2",{className:"popup__caption",children:t.name})]})})};var j=function(e){var t=o.a.useContext(h),n=o.a.useState(""),a=Object(i.a)(n,2),c=a[0],r=a[1],s=o.a.useState(""),l=Object(i.a)(s,2),d=l[0],p=l[1];return o.a.useEffect((function(){t&&(r(t.name),p(t.about))}),[t,e.isOpen]),Object(u.jsxs)(b,{name:"edit",title:"Edit profile",buttonName:"Save",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:d})},onUpdateUser:e.onUpdateUser,children:[Object(u.jsxs)("label",{htmlFor:"name",className:"form__label",children:[Object(u.jsx)("input",{type:"text",className:"form__input form__input_type_name",id:"name",name:"name",placeholder:"Name",minLength:"2",maxLength:"40",required:!0,value:c||"",onChange:function(e){r(e.target.value)}}),Object(u.jsx)("span",{className:"form__error",id:"name-error"})]}),Object(u.jsxs)("label",{htmlFor:"about",className:"form__label",children:[Object(u.jsx)("input",{type:"text",className:"form__input form__input_type_title",id:"about",name:"about",placeholder:"About me",minLength:"2",maxLength:"200",required:!0,value:d||"",onChange:function(e){p(e.target.value)}}),Object(u.jsx)("span",{className:"form__error",id:"about-error"})]})]})};var f=function(e){var t=o.a.useRef(null);return Object(u.jsx)(b,{name:"avatar",title:"Change profile picture",buttonName:"Save",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},onUpdateAvatar:e.onUpdateAvatar,children:Object(u.jsxs)("label",{htmlFor:"link",className:"form__label",children:[Object(u.jsx)("input",{type:"url",className:"form__input form__input_type_link",id:"avatarLink",name:"avatarLink",placeholder:"Profile image link",ref:t,required:!0}),Object(u.jsx)("span",{className:"form__error",id:"avatarLink-error"})]})})};var O=function(e){var t=o.a.useState(""),n=Object(i.a)(t,2),a=n[0],c=n[1],r=o.a.useState(""),s=Object(i.a)(r,2),l=s[0],d=s[1];return o.a.useEffect((function(){c(""),d("")}),[e.isOpen]),Object(u.jsxs)(b,{name:"add",title:"New Place",buttonName:"Create",isOpen:e.isOpen,onClose:e.onClose,onAddPlace:e.onAddPlace,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:l})},children:[Object(u.jsxs)("label",{htmlFor:"name",className:"form__label",children:[Object(u.jsx)("input",{type:"text",className:"form__input form__input_type_place",id:"place-name",name:"name",placeholder:"Title",minLength:"1",maxLength:"30",required:!0,value:a,onChange:function(e){c(e.target.value)}}),Object(u.jsx)("span",{className:"form__error",id:"place-name-error"})]}),Object(u.jsxs)("label",{htmlFor:"link",className:"form__label",children:[Object(u.jsx)("input",{type:"url",className:"form__input form__input_type_link",id:"link",name:"link",placeholder:"Image link",required:!0,value:l,onChange:function(e){d(e.target.value)}}),Object(u.jsx)("span",{className:"form__error",id:"link-error"})]})]})};var v=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("p",{className:"footer__text",children:"\xa9 2021 Around The U.S."})})},x=n(7),k=n(8),g=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(x.a)(this,e),this._baseUrl=n,this._headers=a,this._handleResponse=this._handleResponse.bind(this)}return Object(k.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"cards"),{headers:this._headers}).then(this._handleResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"cards"),{headers:this._headers,method:"POST",body:JSON.stringify(e)}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"cards/").concat(e),{headers:this._headers,method:"DELETE",body:JSON.stringify({_id:e})}).then(this._handleResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{headers:this._headers,method:"PUT",body:JSON.stringify({_id:e})}).then(this._handleResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{headers:this._headers,method:"DELETE",body:JSON.stringify({_id:e})}).then(this._handleResponse)}},{key:"changeLikeStatus",value:function(e,t){return t?this.addLike(e):this.deleteLike(e)}},{key:"getUser",value:function(){return fetch("".concat(this._baseUrl,"users/me"),{headers:this._headers}).then(this._handleResponse)}},{key:"setUser",value:function(e,t){return fetch("".concat(this._baseUrl,"users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e,about:t})}).then(this._handleResponse)}},{key:"getAvatar",value:function(){return fetch("".concat(this._baseUrl,"users/me/avatar"),{headers:this._headers,method:"GET"}).then(this._handleResponse)}},{key:"setAvatar",value:function(e){return fetch("".concat(this._baseUrl,"users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e})}).then(this._handleResponse)}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-11/",headers:{authorization:"ce0cfad9-c022-44c4-8673-897f4eaf9eed","Content-Type":"application/json"}});var C=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),r=Object(i.a)(c,2),l=r[0],p=r[1],x=Object(a.useState)(!1),k=Object(i.a)(x,2),C=k[0],N=k[1],y=Object(a.useState)(!1),S=Object(i.a)(y,2),U=S[0],E=S[1],L=Object(a.useState)([]),A=Object(i.a)(L,2),P=A[0],R=A[1],T=Object(a.useState)({}),w=Object(i.a)(T,2),D=w[0],F=w[1],J=Object(a.useState)({}),q=Object(i.a)(J,2),I=q[0],B=q[1];function H(){o(!1),p(!1),N(!1),E(!1),F({})}return Object(a.useEffect)((function(){g.getUser().then((function(e){B(e)})).catch((function(e){return console.log("Error: ".concat(e))}))}),[]),Object(a.useEffect)((function(){g.getInitialCards().then((function(e){R(e.map((function(e){return{name:e.name,link:e.link,likes:e.likes,_id:e._id,owner:e.owner}})))})).catch((function(e){return console.log("Error: ".concat(e))}))}),[]),Object(u.jsx)("div",{className:"root",children:Object(u.jsxs)(h.Provider,{value:I,children:[Object(u.jsx)(d,{}),Object(u.jsx)(_,{onEditAvatarClick:function(){o(!0)},onEditProfileClick:function(){p(!0)},onAddPlaceClick:function(){N(!0)},onCardClick:function(e){F(e),E(!0)},cards:P,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===I._id}));g.changeLikeStatus(e._id,!t).then((function(t){R((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log("Error: ".concat(e))}))},onCardDelete:function(e){g.deleteCard(e._id).then((function(t){R((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){return console.log("Error: ".concat(e))}))}}),Object(u.jsx)(j,{isOpen:l,onClose:H,onUpdateUser:function(e){var t=e.name,n=e.about;g.setUser(t,n).then((function(e){B(e),H()})).catch((function(e){return console.log("Error: ".concat(e))}))}}),Object(u.jsx)(O,{isOpen:C,onClose:H,onAddPlace:function(e){g.addCard(e).then((function(e){R([e].concat(Object(s.a)(P))),H()})).catch((function(e){return console.log("Error: ".concat(e))}))}}),Object(u.jsx)(f,{isOpen:n,onClose:H,onUpdateAvatar:function(e){var t=e.avatar;g.setAvatar(t).then((function(e){B(e),H()})).catch((function(e){return console.log("Error: ".concat(e))}))}}),Object(u.jsx)(b,{name:"delete",title:"Are you sure?",buttonName:"Yes",children:Object(u.jsx)("input",{className:"form__input form__input_type_card-id",id:"id",name:"id"})}),Object(u.jsx)(m,{card:D,isOpen:U,onClose:H}),Object(u.jsx)(v,{})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root")),N()}},[[16,1,2]]]);
//# sourceMappingURL=main.82a3f832.chunk.js.map