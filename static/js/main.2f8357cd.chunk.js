(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(4),s=a.n(r),o=(a(11),a(2)),i=a.p+"static/media/vector-logo.4e8e0a1d.svg",l=a(0);var d=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("img",{src:i,alt:"logo",className:"logo"})})})},u=c.a.createContext();var h=function(e){var t=Object(n.useContext)(u),a=e.card.owner===t._id,c="photo-grid__delete-icon ".concat(a?"photo-grid__delete-icon_visible":"photo-grid__delete-icon_hidden"),r=e.card.likes.some((function(e){return e._id===t._id})),s="opacity photo-grid__heart-icon ".concat(r?"photo-grid__heart-icon_active":"photo-grid__heart-icon");return Object(l.jsx)("div",{children:Object(l.jsxs)("li",{className:"photo-grid__card",children:[Object(l.jsx)("button",{"aria-label":"delete",type:"button",className:c,onClick:function(){e.onCardDelete(e)}}),Object(l.jsx)("img",{className:"photo-grid__image",alt:e.name,src:e.link,onClick:function(){e.onCardClick(e)}}),Object(l.jsxs)("div",{className:"photo-grid__content",children:[Object(l.jsx)("h2",{className:"photo-grid__title",children:e.name}),Object(l.jsxs)("div",{className:"photo-grid__likes",children:[Object(l.jsx)("button",{"aria-label":"like",type:"button",id:"like",className:s,onClick:function(){e.onCardLike(e)}}),Object(l.jsx)("p",{className:"photo-grid__text",children:e.likes.length})]})]})]})})},p=a(5),b=a(6),_=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(p.a)(this,e),this._baseUrl=a,this._headers=n,this._handleResponse=this._handleResponse.bind(this)}return Object(b.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"cards"),{headers:this._headers}).then(this._handleResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"cards"),{headers:this._headers,method:"POST",body:JSON.stringify(e)}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"cards/").concat(e),{headers:this._headers,method:"DELETE",body:JSON.stringify({_id:e})}).then(this._handleResponse)}},{key:"addLike",value:function(e,t){return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{headers:this._headers,method:"PUT",body:JSON.stringify({_id:e,liked:t})}).then(this._handleResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{headers:this._headers,method:"DELETE",body:JSON.stringify({_id:e})}).then(this._handleResponse)}},{key:"getUser",value:function(){return fetch("".concat(this._baseUrl,"users/me"),{headers:this._headers}).then(this._handleResponse)}},{key:"setUser",value:function(e,t){return fetch("".concat(this._baseUrl,"users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e,about:t})}).then(this._handleResponse)}},{key:"getAvatar",value:function(){return fetch("".concat(this._baseUrl,"users/me/avatar"),{headers:this._headers,method:"GET"}).then(this._handleResponse)}},{key:"setAvatar",value:function(e){return fetch("".concat(this._baseUrl,"users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e})}).then(this._handleResponse)}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-11/",headers:{authorization:"ce0cfad9-c022-44c4-8673-897f4eaf9eed","Content-Type":"application/json"}});var m=function(e){var t=Object(n.useContext)(u);return Object(l.jsx)("div",{children:Object(l.jsxs)("main",{children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsxs)("div",{className:"profile__area",children:[Object(l.jsx)("button",{type:"button","aria-label":"avatar",className:"button profile__avatar-button",onClick:e.onEditAvatarClick,children:Object(l.jsx)("img",{src:t.avatar,alt:"Jacques Cousteau",className:"profile__image"})}),Object(l.jsxs)("div",{className:"profile__name-area",children:[Object(l.jsx)("h1",{className:"profile__name",children:t.name}),Object(l.jsx)("button",{"aria-label":"edit",type:"button",className:"button profile__edit-button opacity",onClick:e.onEditProfileClick}),Object(l.jsx)("p",{className:"profile__title",children:t.about})]})]}),Object(l.jsx)("button",{"aria-label":"add",type:"button",className:"button profile__add-button opacity",onClick:e.onAddPlaceClick})]}),Object(l.jsx)("section",{className:"images",children:Object(l.jsx)("ul",{className:"photo-grid",children:e.cards.map((function(t){return Object(l.jsx)(h,{name:t.name,link:t.link,likes:t.likes,card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t.id)}))})})]})})};var j=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),children:Object(l.jsxs)("div",{className:"popup__container",children:[Object(l.jsx)("button",{"aria-label":"close",type:"button",className:"popup__close-button opacity",onClick:e.onClose}),Object(l.jsx)("h2",{className:"popup__heading",children:e.title}),Object(l.jsxs)("form",{className:"form",name:"".concat(e.name,"-form"),noValidate:!0,onSubmit:e.onSubmit,children:[e.children,Object(l.jsx)("button",{type:"submit",className:"form__button opacity",id:"save-button",children:e.buttonName})]})]})})})};var f=function(e){return Object(l.jsx)("div",{className:"popup popup_type_".concat(e.card.name," ").concat(e.isOpen&&"popup_opened"),children:Object(l.jsxs)("div",{className:"popup__container popup__container_type_preview",children:[Object(l.jsx)("button",{"aria-label":"close",type:"button",className:"popup__close-button popup__close-button_type_preview opacity",onClick:e.onClose}),Object(l.jsx)("img",{src:e.card.link,alt:e.card.name,className:"popup__image"}),Object(l.jsx)("h2",{className:"popup__caption",children:e.card.name})]})})};var O=function(e){var t=c.a.useContext(u),a=c.a.useState(""),n=Object(o.a)(a,2),r=n[0],s=n[1],i=c.a.useState(""),d=Object(o.a)(i,2),h=d[0],p=d[1];return c.a.useEffect((function(){t&&(s(t.name),p(t.about))}),[t,e.isOpen]),Object(l.jsxs)(j,{name:"edit",title:"Edit profile",buttonName:"Save",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:r,about:h})},onUpdateUser:e.onUpdateUser,children:[Object(l.jsxs)("label",{htmlFor:"name",className:"form__label",children:[Object(l.jsx)("input",{type:"text",className:"form__input form__input_type_name",id:"name",name:"name",placeholder:"Name",minLength:"2",maxLength:"40",required:!0,value:r||"",onChange:function(e){s(e.target.value)}}),Object(l.jsx)("span",{className:"form__error",id:"name-error"})]}),Object(l.jsxs)("label",{htmlFor:"about",className:"form__label",children:[Object(l.jsx)("input",{type:"text",className:"form__input form__input_type_title",id:"about",name:"about",placeholder:"About me",minLength:"2",maxLength:"200",required:!0,value:h||"",onChange:function(e){p(e.target.value)}}),Object(l.jsx)("span",{className:"form__error",id:"about-error"})]})]})};var v=function(e){var t=c.a.useState(""),a=Object(o.a)(t,2),n=a[0],r=a[1],s=c.a.useRef(null);return Object(l.jsx)(j,{name:"avatar",title:"Change profile picture",buttonName:"Save",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:n}),r("")},onUpdateAvatar:e.onUpdateAvatar,children:Object(l.jsxs)("label",{htmlFor:"link",className:"form__label",children:[Object(l.jsx)("input",{type:"url",className:"form__input form__input_type_link",id:"avatarLink",name:"avatarLink",placeholder:"Profile image link",onChange:function(e){r(e.target.value)},ref:s,value:n,required:!0}),Object(l.jsx)("span",{className:"form__error",id:"avatarLink-error"})]})})};var x=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__text",children:"\xa9 2021 Around The U.S."})})})};var k=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(o.a)(r,2),i=s[0],h=s[1],p=Object(n.useState)(!1),b=Object(o.a)(p,2),k=b[0],g=b[1],N=Object(n.useState)(!1),C=Object(o.a)(N,2),y=C[0],U=C[1],S=Object(n.useState)([]),E=Object(o.a)(S,2),L=E[0],A=E[1],P=Object(n.useState)({}),R=Object(o.a)(P,2),T=R[0],w=R[1],D=Object(n.useState)({}),F=Object(o.a)(D,2),J=F[0],q=F[1];function I(){c(!1),h(!1),g(!1),U(!1),w({})}return Object(n.useEffect)((function(){_.getUser().then((function(e){q(e)})).catch((function(e){return console.log("Error: ".concat(e))}))}),[]),Object(n.useEffect)((function(){_.getInitialCards().then((function(e){A(e.map((function(e){return{name:e.name,link:e.link,likes:e.likes,id:e._id,owner:e.owner._id}})))})).catch((function(e){return console.log("Error: ".concat(e))}))}),[]),Object(l.jsx)("div",{className:"root",children:Object(l.jsxs)(u.Provider,{value:J,children:[Object(l.jsx)(d,{}),Object(l.jsx)(m,{onEditAvatarClick:function(){c(!0)},onEditProfileClick:function(){h(!0)},onAddPlaceClick:function(){g(!0)},onCardClick:function(e){w(e),U(!0)},cards:L,onCardLike:function(e){var t=e.card.likes.some((function(e){return e._id===J._id}));_.addLike(e.card.id,!t).then((function(t){A((function(a){return a.map((function(a){return a._id===e.card.id?t:a}))}))}))},onCardDelete:function(e){_.deleteCard(e.card.id).then((function(e){A((function(t){return t.filter((function(t){return t._id===e.id}))}))}))}}),Object(l.jsx)(O,{isOpen:i,onClose:I,onUpdateUser:function(e){var t=e.name,a=e.about;_.setUser(t,a).then((function(e){q(e),I()})).catch((function(e){return console.log("Error: ".concat(e))}))}}),Object(l.jsxs)(j,{name:"add",title:"New Place",buttonName:"Create",isOpen:k,onClose:I,children:[Object(l.jsxs)("label",{htmlFor:"name",className:"form__label",children:[Object(l.jsx)("input",{type:"text",className:"form__input form__input_type_place",id:"place-name",name:"name",placeholder:"Title",minLength:"1",maxLength:"30",required:!0}),Object(l.jsx)("span",{className:"form__error",id:"place-name-error"})]}),Object(l.jsxs)("label",{htmlFor:"link",className:"form__label",children:[Object(l.jsx)("input",{type:"url",className:"form__input form__input_type_link",id:"link",name:"link",placeholder:"Image link",required:!0}),Object(l.jsx)("span",{className:"form__error",id:"link-error"})]})]}),Object(l.jsx)(v,{isOpen:a,onClose:I,onUpdateAvatar:function(e){var t=e.avatar;_.setAvatar(t).then((function(e){q(e),I()})).catch((function(e){return console.log("Error: ".concat(e))}))}}),Object(l.jsx)(j,{name:"delete",title:"Are you sure?",buttonName:"Yes",children:Object(l.jsx)("input",{type:"hidden",className:"form__input form__input_type_card-id",id:"id",name:"id"})}),Object(l.jsx)(f,{card:T,isOpen:y,onClose:I}),Object(l.jsx)(x,{})]})})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),g()}},[[13,1,2]]]);
//# sourceMappingURL=main.2f8357cd.chunk.js.map