(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(6),i=n.n(s),r=(n(14),n(9)),o=n(2),l=n(0),u=c.a.memo((function(){return Object(l.jsx)("div",{className:"header page__header",children:Object(l.jsx)("div",{className:"header__logo"})})})),p=c.a.createContext();var d=function(e){var t=e.cardValues,n=e.onCardClick,a=e.onCardLike,s=e.onCardDelete,i=t.name,r=t.link,o=t.likes,u=t.owner,d=t._id,j=c.a.useContext(p),b=u._id===j._id,h="element__deleted ".concat(b?"element__deleted_active":""),m=o.some((function(e){return e._id===j._id})),O="element__like ".concat(m?"element__like_active":"");return Object(l.jsxs)("article",{className:"element",children:[Object(l.jsx)("img",{src:r,alt:i,onError:function(e){return e.target.src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"},className:"element__image",onClick:function(){n(i,r)}}),Object(l.jsx)("button",{type:"button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",className:h,onClick:function(){s(d)}}),Object(l.jsxs)("div",{className:"element__description-wrapper",children:[Object(l.jsx)("h2",{className:"element__title",children:i}),Object(l.jsxs)("div",{className:"element__of-wrapper-likes",children:[Object(l.jsx)("button",{type:"button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0441 \u043e\u0442\u043c\u0435\u0442\u043a\u043e\u0439 - \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",title:"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",className:O,onClick:function(){a(o,d)}}),Object(l.jsx)("p",{className:"element__of-number-likes",children:o.length})]})]})]})};var j=function(e){var t=e.onEditAvatar,n=e.onEditProfile,a=e.onAddPlace,s=e.onCardClick,i=e.cards,r=e.cardsError,o=e.onCardLike,u=e.onCardDelete,j=c.a.useContext(p),b=j.name,h=j.about,m=j.avatar;return Object(l.jsxs)("div",{className:"content page__content",children:[Object(l.jsxs)("section",{className:"profile content__profile",children:[Object(l.jsxs)("div",{className:"profile__wrapper",children:[Object(l.jsxs)("div",{className:"profile__avatar-wrapper",children:[Object(l.jsx)("img",{src:m,alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"}),Object(l.jsx)("div",{className:"profile__edit-avatar",onClick:t})]}),Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsx)("h1",{className:"profile__title",children:b}),Object(l.jsx)("button",{type:"button",className:"profile__edit-button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 - \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:n}),Object(l.jsx)("p",{className:"profile__subtitile",children:h})]})]}),Object(l.jsx)("button",{type:"button",className:"profile__add-button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 - \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443 \u0441 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u043c\u0435\u0441\u0442\u0430",onClick:a})]}),Object(l.jsx)("section",{className:"elements content__elements","aria-label":"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438, \u0441 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f\u043c\u0438 \u043c\u0435\u0441\u0442",children:r||i.map((function(e){return Object(l.jsx)(d,{cardValues:e,onCardClick:s,onCardLike:o,onCardDelete:u},e._id)}))})]})},b=c.a.memo((function(){return Object(l.jsx)("div",{className:"footer page__footer",children:Object(l.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})})),h=c.a.createContext(),m=(n(16),function(){return Object(l.jsx)("div",{className:"loadingio-spinner-spin-fnepk7fl33h",children:Object(l.jsxs)("div",{className:"ldio-gqe9nbj4c1",children:[Object(l.jsx)("div",{children:Object(l.jsx)("div",{})}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{})}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{})}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{})}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{})}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{})}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{})}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{})})]})})});var O=function(e){var t=e.title,n=e.name,a=e.buttonText,s=e.children,i=e.isOpen,r=e.onClose,o=e.onSubmit,u=e.submitButtonValidation,p=c.a.useContext(h);return Object(l.jsx)("div",{className:"pop-up pop-up_".concat(n," ").concat(i?"pop-up_opened":""),children:Object(l.jsxs)("div",{className:"pop-up__container",children:[Object(l.jsxs)("form",{className:"pop-up__form",name:n,onSubmit:o,noValidate:!0,children:[Object(l.jsx)("h2",{className:"pop-up__title",children:t}),s,Object(l.jsxs)("button",{type:"submit","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0444\u043e\u0440\u043c\u044b",className:"pop-up__save-btn ".concat(u?"":"pop-up__save-btn_invalid"),disabled:!u,children:[a,p?Object(l.jsx)(m,{}):null]})]}),Object(l.jsx)("button",{type:"button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430",title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"pop-up__close-btn",onClick:r})]})})};var f=function(e){var t=e.isOpen,n=e.onClose,s=e.onUpdateUser,i=e.loading,r=e.resetForms,u=c.a.useContext(p),d=Object(a.useState)(""),j=Object(o.a)(d,2),b=j[0],h=j[1],m=Object(a.useState)(""),f=Object(o.a)(m,2),_=f[0],v=f[1],x=Object(a.useState)(""),g=Object(o.a)(x,2),N=g[0],C=g[1],k=Object(a.useState)(""),S=Object(o.a)(k,2),y=S[0],w=S[1],E=Object(a.useState)(!1),T=Object(o.a)(E,2),A=T[0],L=T[1],U=Object(a.useState)(!1),P=Object(o.a)(U,2),R=P[0],B=P[1];function D(e){e.target.value||"userName"!==e.target.name?e.target.value||"userAbout"!==e.target.name||w("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"):C("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c")}return Object(a.useEffect)((function(){h(u.name),v(u.about)}),[u,t]),Object(a.useEffect)((function(){B(!(!b||!_||N||y))}),[b,_,N,y]),Object(a.useEffect)((function(){r&&(C(""),w(""),L(!1),B(!1))}),[r]),Object(l.jsxs)(O,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",buttonText:i?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s({userName:b,about:_})},submitButtonValidation:R,children:[Object(l.jsxs)("div",{className:"pop-up__input-wrapper",children:[Object(l.jsx)("input",{name:"userName",value:b||"",required:!0,minLength:"2",maxLength:"20",autoComplete:"off",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f",type:"text",className:"pop-up__input-text pop-up__input-text_type_name",id:"userName",onChange:function(e){h(e.target.value),e.target.value.length<2||e.target.value.length>=20?(C("\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0435\u043d\u0435\u0435 2 \u0438 \u0431\u043e\u043b\u0435\u0435 20 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),L(!0)):C("")},onBlur:D}),A&&N&&Object(l.jsx)("span",{id:"userName-error",className:"error",children:N})]}),Object(l.jsxs)("div",{className:"pop-up__input-wrapper",children:[Object(l.jsx)("input",{name:"userAbout",value:_||"",required:!0,minLength:"2",maxLength:"200",autoComplete:"off",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c",type:"text",className:"pop-up__input-text pop-up__input-text_type_about",id:"userAbout",onChange:function(e){v(e.target.value),e.target.value.length<2||e.target.value.length>=200?(w("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0435\u043d\u0435\u0435 2 \u0438 \u0431\u043e\u043b\u0435\u0435 200 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),L(!0)):w("")},onBlur:D}),A&&y&&Object(l.jsx)("span",{id:"userAbout-error",className:"error",children:y})]})]})};var _=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,s=e.loading,i=e.resetForms,r=Object(a.useState)(""),u=Object(o.a)(r,2),p=u[0],d=u[1],j=Object(a.useState)(""),b=Object(o.a)(j,2),h=b[0],m=b[1],f=Object(a.useState)(!1),_=Object(o.a)(f,2),v=_[0],x=_[1],g=Object(a.useState)(!1),N=Object(o.a)(g,2),C=N[0],k=N[1];return Object(a.useEffect)((function(){i&&(d(""),m(""),x(!1),k(!1))}),[i]),Object(a.useEffect)((function(){k(!(!p||h))}),[p,h]),Object(l.jsx)(O,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"change-avatar",buttonText:s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c(p),d("")},submitButtonValidation:C,children:Object(l.jsxs)("div",{className:"pop-up__input-wrapper",children:[Object(l.jsx)("input",{name:"linkToAvatar",required:!0,autoComplete:"off",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",type:"url",className:"pop-up__input-text pop-up__input-text_type_link",id:"linkToAvatar",value:p,onChange:function(e){d(e.target.value),/^(ftp|http|https):\/\/[^ "]+$/.test(e.target.value)?(m(""),x(!1),k(!0)):(m("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL"),x(!0))},onBlur:function(e){e.target.value||m("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c")}}),v&&h&&Object(l.jsx)("span",{id:"linkToAvatar-error",className:"error",children:h})]})})};var v=function(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,s=e.loading,i=e.resetForms,r=Object(a.useState)(""),u=Object(o.a)(r,2),p=u[0],d=u[1],j=Object(a.useState)(""),b=Object(o.a)(j,2),h=b[0],m=b[1],f=Object(a.useState)(""),_=Object(o.a)(f,2),v=_[0],x=_[1],g=Object(a.useState)(""),N=Object(o.a)(g,2),C=N[0],k=N[1],S=Object(a.useState)(!1),y=Object(o.a)(S,2),w=y[0],E=y[1],T=Object(a.useState)(!1),A=Object(o.a)(T,2),L=A[0],U=A[1];function P(e){e.target.value||"placeTitle"!==e.target.name?e.target.value||"placeLink"!==e.target.name||k("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"):x("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c")}return Object(a.useEffect)((function(){U(!(!p||!h||v||C))}),[p,h,v,C]),Object(a.useEffect)((function(){i&&(d(""),m(""),x(""),k(""),E(!1),U(!1))}),[i]),Object(l.jsxs)(O,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"img",buttonText:s?"\u0421\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:p,link:h}),d(""),m("")},submitButtonValidation:L,children:[Object(l.jsxs)("div",{className:"pop-up__input-wrapper",children:[Object(l.jsx)("input",{name:"placeTitle",required:!0,minLength:"2",maxLength:"30",autoComplete:"off",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"text",className:"pop-up__input-text pop-up__input-text_type_title",id:"placeName",value:p,onChange:function(e){d(e.target.value),e.target.value.length<2||e.target.value.length>=30?(x("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0435\u043d\u0435\u0435 2 \u0438 \u0431\u043e\u043b\u0435\u0435 30 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),E(!0)):x("")},onBlur:P}),w&&v&&Object(l.jsx)("span",{id:"placeName-error",className:"error",children:v})]}),Object(l.jsxs)("div",{className:"pop-up__input-wrapper",children:[Object(l.jsx)("input",{name:"placeLink",required:!0,autoComplete:"off",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",type:"url",className:"pop-up__input-text pop-up__input-text_type_link",id:"linkToImage",value:h,onChange:function(e){m(e.target.value),/^(ftp|http|https):\/\/[^ "]+$/.test(e.target.value)?(k(""),E(!1),U(!0)):(k("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL"),E(!0))},onBlur:P}),w&&C&&Object(l.jsx)("span",{id:"linkToImage-error",className:"error",children:C})]})]})};var x=function(e){var t=e.card,n=t.isOpen,a=t.name,c=t.link,s=e.onClose;return Object(l.jsx)("div",{className:"pop-up pop-up_fullscreen ".concat(n?"pop-up_opened":""),children:Object(l.jsxs)("div",{className:"pop-up__container-fullscreen",children:[Object(l.jsx)("img",{src:c,alt:"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u043c\u0435\u0441\u0442\u0430",className:"pop-up__image-fullscreen"}),Object(l.jsx)("p",{className:"pop-up__captiion-fullscreen",children:a}),Object(l.jsx)("button",{type:"button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430",title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"pop-up__close-btn",onClick:s})]})})},g=c.a.memo((function(e){var t=e.title,n=e.isOpen;return Object(l.jsx)("div",{className:"pop-up ".concat(n?"pop-up_opened":""),children:Object(l.jsx)("div",{className:"pop-up__container",children:Object(l.jsx)("h2",{className:"pop-up__title",style:{margin:"0",textAlign:"center"},children:t})})})})),N=n(7),C=n(8),k=new(function(){function e(t){Object(N.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(C.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e,t){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"setNewCard",value:function(e){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers,body:JSON.stringify({_id:e})}).then(this._checkResponse)}},{key:"changeLike",value:function(e,t){return t?fetch("".concat(this._url,"cards/likes/").concat(e),{method:"PUT",headers:this._headers,body:JSON.stringify({_id:e})}).then(this._checkResponse):fetch("".concat(this._url,"cards/likes/").concat(e),{method:"DELETE",headers:this._headers,body:JSON.stringify({_id:e})}).then(this._checkResponse)}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-22/",headers:{authorization:"fc55fa6a-67b0-4119-9d98-e2f765087414","Content-Type":"application/json; charset=UTF-8"}});var S=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),i=Object(o.a)(s,2),d=i[0],m=i[1],O=Object(a.useState)(!1),N=Object(o.a)(O,2),C=N[0],S=N[1],y=Object(a.useState)(!1),w=Object(o.a)(y,2),E=w[0],T=w[1],A=Object(a.useState)({}),L=Object(o.a)(A,2),U=L[0],P=L[1],R=Object(a.useState)([]),B=Object(o.a)(R,2),D=B[0],I=B[1],J=Object(a.useState)(null),F=Object(o.a)(J,2),V=F[0],q=F[1],H=Object(a.useState)(!1),G=Object(o.a)(H,2),M=G[0],$=G[1],z=Object(a.useState)({}),W=Object(o.a)(z,2),K=W[0],Q=W[1],X=Object(a.useState)(!1),Y=Object(o.a)(X,2),Z=Y[0],ee=Y[1],te=Object(a.useState)(""),ne=Object(o.a)(te,2),ae=ne[0],ce=ne[1];Object(a.useEffect)((function(){k.getInitialCards().then((function(e){return I(e)})).catch((function(e){return q("".concat(e," - Something went wrong"))}))}),[]),Object(a.useEffect)((function(){k.getUserInfo().then((function(e){Q(e)})).catch((function(e){Q({name:e,about:"Something went wrong",avatar:"https://www.wpfixit.com/wp-content/uploads/2019/03/HTTP-error-when-uploading-images-in-WordPress.jpg"})}))}),[]);var se=function(e){T(!0),ce(e);setTimeout((function(){T(!1)}),1500)},ie=function(){c(!1),m(!1),S(!1),P({}),ee(!1),$(!0)};return Object(l.jsx)(h.Provider,{value:Z,children:Object(l.jsx)(p.Provider,{value:K,children:Object(l.jsx)("div",{className:"body",children:Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)(u,{}),Object(l.jsx)(j,{onEditAvatar:function(){c(!0),$(!1)},onEditProfile:function(){m(!0),$(!1)},onAddPlace:function(){S(!0),$(!1)},onCardClick:function(e,t){P({isOpen:!0,name:e,link:t})},cards:D,cardsError:V,onCardLike:function(e,t){var n=e.some((function(e){return e._id===K._id}));k.changeLike(t,!n).then((function(e){I((function(n){return n.map((function(n){return n._id===t?e:n}))}))})).catch((function(e){return se("Something went wrong - ".concat(e))}))},onCardDelete:function(e){k.deleteCard(e).then((function(t){if(I((function(t){return t.filter((function(t){return t._id!==e}))})),t)return se("\u041f\u043e\u0441\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d")})).catch((function(e){return se("Something went wrong - ".concat(e))}))}}),Object(l.jsx)(_,{isOpen:n,onClose:ie,onUpdateAvatar:function(e){ee(!0),k.setUserAvatar(e).then((function(e){Q(e),ee(!1),ie()})).catch((function(e){se("Something went wrong - ".concat(e)),ee(!1)}))},loading:Z,resetForms:M}),Object(l.jsx)(f,{isOpen:d,onClose:ie,onUpdateUser:function(e){var t=e.userName,n=e.about;ee(!0),k.setUserInfo(t,n).then((function(e){Q(e),ee(!1),ie()})).catch((function(e){se("Something went wrong - ".concat(e)),ee(!1)}))},loading:Z,resetForms:M}),Object(l.jsx)(v,{isOpen:C,onClose:ie,onAddPlace:function(e){ee(!0),k.setNewCard(e).then((function(e){I([e].concat(Object(r.a)(D))),ee(!1),ie()})).catch((function(e){se("Something went wrong - ".concat(e)),ee(!1)}))},loading:Z,resetForms:M}),Object(l.jsx)(x,{card:U,onClose:ie}),Object(l.jsx)(g,{title:ae,isOpen:E}),Object(l.jsx)(b,{})]})})})})};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0d58c2c2.chunk.js.map