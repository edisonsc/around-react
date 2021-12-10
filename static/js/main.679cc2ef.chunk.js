(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(4),i=a.n(c),r=(a(11),a(2)),o=a.p+"static/media/vector-logo.4e8e0a1d.svg",l=a(0);var d=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("img",{src:o,alt:"logo",className:"logo"})})})};var h=function(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("li",{className:"photo-grid__card",children:[Object(l.jsx)("button",{"aria-label":"delete",type:"button",className:"photo-grid__delete-icon"}),Object(l.jsx)("img",{className:"photo-grid__image",alt:e.name,src:e.link,onClick:function(){e.onCardClick(e.card)}}),Object(l.jsxs)("div",{className:"photo-grid__content",children:[Object(l.jsx)("h2",{className:"photo-grid__title",children:e.name}),Object(l.jsxs)("div",{className:"photo-grid__likes",children:[Object(l.jsx)("button",{"aria-label":"like",type:"button",id:"like",className:"photo-grid__heart-icon opacity"}),Object(l.jsx)("p",{className:"photo-grid__text",children:e.likes})]})]})]})})},u=a(5),b=a(6),p=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(u.a)(this,e),this._baseUrl=a,this._headers=n,this._handleResponse=this._handleResponse.bind(this)}return Object(b.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"cards"),{headers:this._headers}).then(this._handleResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"cards"),{headers:this._headers,method:"POST",body:JSON.stringify(e)}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"cards/").concat(e),{headers:this._headers,method:"DELETE",body:JSON.stringify({_id:e})}).then(this._handleResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{headers:this._headers,method:"PUT",body:JSON.stringify({_id:e})}).then(this._handleResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{headers:this._headers,method:"DELETE",body:JSON.stringify({_id:e})}).then(this._handleResponse)}},{key:"getUser",value:function(){return fetch("".concat(this._baseUrl,"users/me"),{headers:this._headers}).then(this._handleResponse)}},{key:"setUser",value:function(e,t,a){return fetch("".concat(this._baseUrl,"users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e,about:t,avatar:a})}).then(this._handleResponse)}},{key:"getAvatar",value:function(){return fetch("".concat(this._baseUrl,"users/me/avatar"),{headers:this._headers,method:"GET"}).then(this._handleResponse)}},{key:"setAvatar",value:function(e){return fetch("".concat(this._baseUrl,"users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e})}).then(this._handleResponse)}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-11/",headers:{authorization:"ce0cfad9-c022-44c4-8673-897f4eaf9eed","Content-Type":"application/json"}});var m=function(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),s=a[0],c=a[1],i=Object(n.useState)(""),o=Object(r.a)(i,2),d=o[0],u=o[1],b=Object(n.useState)(""),m=Object(r.a)(b,2),j=m[0],_=m[1],f=Object(n.useState)([]),O=Object(r.a)(f,2),x=O[0],N=O[1];return Object(n.useEffect)((function(){p.getUser().then((function(e){c(e.name),u(e.about),_(e.avatar)}))}),[]),Object(n.useEffect)((function(){p.getInitialCards().then((function(e){N(e.map((function(e){return{name:e.name,link:e.link,likes:e.likes.length,id:e._id}})))}))}),[]),Object(l.jsx)("div",{children:Object(l.jsxs)("main",{children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsxs)("div",{className:"profile__area",children:[Object(l.jsx)("button",{type:"button","aria-label":"avatar",className:"button profile__avatar-button",onClick:e.onEditAvatarClick,children:Object(l.jsx)("img",{src:j,alt:"Jacques Cousteau",className:"profile__image"})}),Object(l.jsxs)("div",{className:"profile__name-area",children:[Object(l.jsx)("h1",{className:"profile__name",children:s}),Object(l.jsx)("button",{"aria-label":"edit",type:"button",className:"button profile__edit-button opacity",onClick:e.onEditProfileClick}),Object(l.jsx)("p",{className:"profile__title",children:d})]})]}),Object(l.jsx)("button",{"aria-label":"add",type:"button",className:"button profile__add-button opacity",onClick:e.onAddPlaceClick})]}),Object(l.jsx)("section",{className:"images",children:Object(l.jsx)("ul",{className:"photo-grid",children:x.map((function(t){return Object(l.jsx)(h,{name:t.name,link:t.link,likes:t.likes,card:t,onCardClick:e.onCardClick},t.id)}))})})]})})};var j=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(l.jsxs)("div",{className:"popup__container",children:[Object(l.jsx)("button",{"aria-label":"close",type:"button",className:"popup__close-button opacity",onClick:e.onClose}),Object(l.jsx)("h2",{className:"popup__heading",children:e.title}),Object(l.jsxs)("form",{className:"form",name:"".concat(e.name,"-form"),noValidate:!0,children:[e.children,Object(l.jsx)("button",{type:"submit",className:"form__button opacity",id:"save-button",children:e.buttonName})]})]})})})};var _=function(e){return Object(l.jsx)("div",{className:"popup popup_type_".concat(e.card.name," ").concat(e.card?"popup_opened":""),children:Object(l.jsxs)("div",{className:"popup__container popup__container_type_preview",children:[Object(l.jsx)("button",{"aria-label":"close",type:"button",className:"popup__close-button popup__close-button_type_preview opacity",onClick:e.onClose}),Object(l.jsx)("img",{src:e.card.link,alt:e.card.name,className:"popup__image"}),Object(l.jsx)("h2",{className:"popup__caption",children:e.card.name})]})})};var f=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__text",children:"\xa9 2021 Around The U.S."})})})};var O=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),i=Object(r.a)(c,2),o=i[0],h=i[1],u=Object(n.useState)(!1),b=Object(r.a)(u,2),p=b[0],O=b[1],x=Object(n.useState)(!1),N=Object(r.a)(x,2),k=N[0],v=N[1];function y(){s(!1),h(!1),O(!1),v(!1)}return Object(l.jsxs)("div",{className:"root",children:[Object(l.jsx)(d,{}),Object(l.jsx)(m,{onEditAvatarClick:function(){s(!0)},onEditProfileClick:function(){h(!0)},onAddPlaceClick:function(){O(!0)},onCardClick:function(e){v(e)}}),Object(l.jsxs)(j,{name:"edit",title:"Edit profile",buttonName:"Save",isOpen:o,onClose:y,children:[Object(l.jsxs)("label",{htmlFor:"name",className:"form__label",children:[Object(l.jsx)("input",{type:"text",className:"form__input form__input_type_name",id:"name",name:"name",placeholder:"Name",minLength:"2",maxLength:"40",required:!0}),Object(l.jsx)("span",{className:"form__error",id:"name-error"})]}),Object(l.jsxs)("label",{htmlFor:"about",className:"form__label",children:[Object(l.jsx)("input",{type:"text",className:"form__input form__input_type_title",id:"about",name:"about",placeholder:"About me",minLength:"2",maxLength:"200",required:!0}),Object(l.jsx)("span",{className:"form__error",id:"about-error"})]})]}),Object(l.jsxs)(j,{name:"add",title:"New Place",buttonName:"Create",isOpen:p,onClose:y,children:[Object(l.jsxs)("label",{htmlFor:"name",className:"form__label",children:[Object(l.jsx)("input",{type:"text",className:"form__input form__input_type_place",id:"place-name",name:"name",placeholder:"Title",minLength:"1",maxLength:"30",required:!0}),Object(l.jsx)("span",{className:"form__error",id:"place-name-error"})]}),Object(l.jsxs)("label",{htmlFor:"link",className:"form__label",children:[Object(l.jsx)("input",{type:"url",className:"form__input form__input_type_link",id:"link",name:"link",placeholder:"Image link",required:!0}),Object(l.jsx)("span",{className:"form__error",id:"link-error"})]})]}),Object(l.jsx)(j,{name:"avatar",title:"Change profile picture",buttonName:"Save",isOpen:a,onClose:y,children:Object(l.jsxs)("label",{htmlFor:"link",className:"form__label",children:[Object(l.jsx)("input",{type:"url",className:"form__input form__input_type_link",id:"avatarLink",name:"avatarLink",placeholder:"Profile image link",required:!0}),Object(l.jsx)("span",{className:"form__error",id:"avatarLink-error"})]})}),Object(l.jsx)(j,{name:"delete",title:"Are you sure?",buttonName:"Yes",children:Object(l.jsx)("input",{type:"hidden",className:"form__input form__input_type_card-id",id:"id",name:"id"})}),Object(l.jsx)(_,{card:k,onClose:y}),Object(l.jsx)(f,{})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),x()}},[[13,1,2]]]);
//# sourceMappingURL=main.679cc2ef.chunk.js.map