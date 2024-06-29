(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,r(i.key),i)}}function r(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(r)?r:r+""}var n=function(){return e=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers},(r=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"_request",value:function(e,t){return fetch("".concat(this._baseUrl,"/").concat(e),t).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return this._request("cards",{headers:this._headers})}},{key:"editAvatar",value:function(e){return this._request("users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.imagelink})})}},{key:"getUserInfo",value:function(){return this._request("users/me",{headers:this._headers})}},{key:"addCard",value:function(e){return this._request("cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.imagename,link:e.imagelink})})}},{key:"editUserInfo",value:function(e){return this._request("users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.username,about:e.userprofile})})}},{key:"deleteCard",value:function(e){return this._request("cards/".concat(e),{method:"DELETE",headers:this._headers})}},{key:"makeLike",value:function(e){return this._request("cards/".concat(e,"/likes"),{method:"PUT",headers:this._headers})}},{key:"deleteLike",value:function(e){return this._request("cards/".concat(e,"/likes"),{method:"DELETE",headers:this._headers})}}])&&t(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,r}(),i={cardTemplate:"#card-template",cardElement:".card",deleteButton:".card__delete-button",cardImage:".card__image",cardTitle:".card__title",cardList:".places__list",cardLike:".card__like-button",formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,u(n.key),n)}}function u(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(t)?t:t+""}var s=function(){return e=function e(t){var r=t.cardData,n=t.cardTemplate,i=t.userId,o=t.clickCard,a=t.removeCard,u=t.setLike,s=t.removeLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=r.name,this._link=r.link,this._cardId=r._id,this._likes=r.likes,this._cardOwnerId=r.owner._id,this._cardTemplate=n,this._userId=i,this._clickCard=o,this._removeCard=a,this._setLike=u,this._removeLike=s},(t=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._userElementCardImage=this._element.querySelector(".card__image"),this._eventActiveLike=this._element.querySelector(".card__like-button"),this._eventDeleteButton=this._element.querySelector(".card__delete-button"),this._userElementCardImage.alt="Картинка "+this._name,this._userElementCardImage.src=this._link,this._element.querySelector(".card__title").textContent=this._name,this._eventOpenImg=this._element.querySelector(".places__item"),this._deleteButton(),this._setEventListeners(),this._isSetLike(),this._likesCount=this._element.querySelector(".card__like-counter"),this._likesCount.textContent=this._likes.length,this._element}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}},{key:"_deleteButton",value:function(){this._userId!==this._cardOwnerId&&this._eventDeleteButton.remove()}},{key:"_isSetLike",value:function(){var e=this;this._likes.some((function(t){return e._userId===t._id}))&&this._eventActiveLike.classList.add("card__like-button_is-active")}},{key:"makeLike",value:function(e){this._eventActiveLike.classList.toggle("card__like-button_is-active"),this._likes=e.likes,this._likesCount.textContent=this._likes.length}},{key:"_setEventListeners",value:function(){var e=this;this._userElementCardImage.addEventListener("click",(function(){e._clickCard(e._name,e._link)})),this._eventDeleteButton.addEventListener("click",(function(){e._removeCard(e._cardId)})),this._eventActiveLike.addEventListener("click",(function(){e._eventActiveLike.classList.contains("card__like-button_is-active")?e._removeLike(e._cardId):e._setLike(e._cardId)}))}}])&&a(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,d(n.key),n)}}function d(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==c(t)?t:t+""}var f=function(){return e=function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(r),this._renderer=n},(t=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"_clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(e){var t=this;this._clear(),e.forEach((function(e){t._renderer(e)}))}}])&&l(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,p(n.key),n)}}function p(e){var t=function(e,t){if("object"!=m(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(t)?t:t+""}var v=function(){return e=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t.name),this._profile=document.querySelector(t.about),this._avatar=document.querySelector(t.avatar),this._userId=0,this._userData={}},(t=[{key:"setUserInfo",value:function(e){var t=e.name,r=e.about,n=e.avatar,i=e._id;this._userData={name:t,about:r,avatar:n,_id:i},this._name.textContent=t,this._profile.textContent=r,this._avatar.src=n,this._userId=i}},{key:"getUserInfo",value:function(){return this._userData}}])&&_(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}(),y=function(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",b),document.addEventListener("mousedown",k)},h=function(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",b),document.removeEventListener("mousedown",k)};function b(e){"Escape"===e.key&&h(document.querySelector(".popup_is-opened"))}function k(e){e.target.classList.contains("popup_is-opened")&&h(e.target)}function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,L(n.key),n)}}function L(e){var t=function(e,t){if("object"!=S(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==S(t)?t:t+""}var E=function(){return e=function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._inputList=Array.from(r.querySelectorAll(t.inputSelector)),this._submitButtonSelector=r.querySelector(t.submitButtonSelector),this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=r,this._validPattern=/^[a-zA-Zа-яА-ЯёЁ\s-]+$/},(t=[{key:"_showError",value:function(e,t){var r=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),r.textContent=t||e.validationMessage,r.classList.add(this._errorClass),e.dataset.error=t||e.validationMessage}},{key:"_hideError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent="",e.dataset.error=""}},{key:"_checkInputValidity",value:function(e){var t=e.value;this._validPattern.test(t)?e.validity.valid?this._hideError(e):this._showError(e):this._showError(e,"Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы")}},{key:"_isInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._isInvalidInput()?(this._submitButtonSelector.classList.add(this._inactiveButtonClass),this._submitButtonSelector.setAttribute("disabled","")):(this._submitButtonSelector.classList.remove(this._inactiveButtonClass),this._submitButtonSelector.removeAttribute("disabled",""))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideError(t)}))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&g(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var w=document.querySelector(".popup_type_edit"),q=document.querySelector(".popup_type_new-card"),I=document.querySelector(".popup_type_image"),j=document.querySelector(".popup_type_edit-profile"),P=document.querySelector(".profile__avatar-button"),T=document.querySelector(".profile__add-button"),A=document.querySelector(".profile__edit-button"),B=document.querySelector(".popup__input_type_name"),O=document.querySelector(".popup__input_type_description"),U=document.querySelector('[name="edit-form"]'),D=U.querySelector('[name="name"]'),x=U.querySelector('[name="description"]'),V=document.querySelector('[name="new-place"]'),M=V.querySelector('[name="place-name"]'),N=V.querySelector('[name="link"]'),H=document.querySelector('[name="update-avatar-form"]'),J=H.querySelector('[name="imagelinkAvatar"]'),z=document.querySelector(".popup__image"),R=document.querySelector(".popup__caption"),$={};!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){var r=new E(e,t),n=t.getAttribute("name");$[n]=r,r.enableValidation()}))}(i);var Z=function(e){var t=new s({cardData:e,cardTemplate:"#card-template",userId:K.getUserInfo()._id,clickCard:function(e,t){!function(e,t){y(I),z.src=t,z.alt=e,R.textContent=e}(e,t)},removeCard:function(e){F.deleteCard(e).then((function(){deleteCard.close(),t.removeCard()})).catch(console.error)},setLike:function(e){F.makeLike(e).then((function(e){t.makeLike(e)})).catch(console.error)},removeLike:function(e){F.deleteLike(e).then((function(e){t.makeLike(e)})).catch(console.error)}});return t.generateCard()},F=new n({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-magistr-2",headers:{authorization:"f5f8f6d7-7aff-4af9-bd78-112276931e29","Content-Type":"application/json"}});Promise.all([F.getInitialCards(),F.getUserInfo()]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o,a,u=[],s=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);s=!0);}catch(e){c=!0,i=e}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw i}}return u}}(t,r)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?C(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=n[0],o=n[1];console.log("userData ",o),K.setUserInfo(o),G.renderItems(i)})).catch(console.error);var G=new f({renderer:function(e){G.addItem(Z(e))}},i.cardList),K=new v({name:".profile__title",about:".profile__description",avatar:".profile__avatar"});function Q(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...";t.submitter.innerText=e?r:"Сохранить"}U.addEventListener("submit",(function(e){Q(!0,e),e.preventDefault();var t={};t.username=D.value,t.userprofile=x.value,F.editUserInfo(t).then((function(t){K.setUserInfo(t),Q(!1,e),h(w)}))})),V.addEventListener("submit",(function(e){Q(!0,e),e.preventDefault();var t={imagename:M.value,imagelink:N.value};F.addCard(t).then((function(t){G.addItem(Z(t)),Q(!1,e),e.target.reset(),h(q)}))})),H.addEventListener("submit",(function(e){Q(!0,e),e.preventDefault();var t={};t.imagelink=J.value,F.editAvatar(t).then((function(t){K.setUserInfo(t),h(j),Q(!1,e),J.value=""}))})),A.addEventListener("click",(function(){var e=K.getUserInfo();B.value=e.name,O.value=e.about,$["edit-form"].resetValidation(),y(w)})),P.addEventListener("click",(function(){y(j),$["update-avatar-form"].resetValidation()})),T.addEventListener("click",(function(){y(q),$["new-place"].resetValidation()})),document.querySelectorAll(".popup__close").forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return h(t)}))}))})();