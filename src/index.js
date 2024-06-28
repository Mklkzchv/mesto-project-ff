import Api from "./components/Api.js";
import Card from "./components/Сard.js";
import Section from './components/Section.js';
import UserInfo from './components/UserInfo.js';
import '../pages/index.css';
import { openPopup } from "./components/modal.js";
import { closePopup } from "./components/modal.js";
import FormValidator from "./components/FormValidator.js";
import { config,
  baseUrl,
  authorization,
  userSelector
} from './utils/constants.js';

// @todo: DOM узлы

const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddNewCard = document.querySelector('.popup_type_new-card');
const popupOpenPlace = document.querySelector('.popup_type_image');
const popupEditAvatar = document.querySelector('.popup_type_edit-profile');
const buttonEditAvatar = document.querySelector('.profile__avatar-button');
const buttonPopupAdd = document.querySelector('.profile__add-button');
const buttonPopupEdit = document.querySelector('.profile__edit-button');
const editNameInput = document.querySelector('.popup__input_type_name');
const editJobInput = document.querySelector('.popup__input_type_description');
const profileForm = document.querySelector('[name="edit-form"]');
const nameProfileInput = profileForm.querySelector('[name="name"]'); 
const jobProfileInput = profileForm.querySelector('[name="description"]');
const placeForm = document.querySelector('[name="new-place"]');
const namePlace = placeForm.querySelector('[name="place-name"]');
const urlPlace = placeForm.querySelector('[name="link"]');
const avatarForm = document.querySelector('[name="update-avatar-form"]');
const urlProfileAvatarInput = avatarForm.querySelector('[name="imagelinkAvatar"]');
const imageOpenCard = document.querySelector('.popup__image');
const captionOpenCard = document.querySelector('.popup__caption');

// Устанавливаем валидацию полей форм
//
const formValidators = {}
//
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
// получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name')

   // вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
//
enableValidation(config);
//
// Генерация карточки
//
const generateCard = (data) => {
  const card = new Card( {
    cardData: data, 
    cardTemplate: '#card-template',
    userId: userProfile.getUserInfo()._id, 
    clickCard: (name, link) => {
      openCard(name, link);
    },
    removeCard: (cardId) => {
        api.deleteCard(cardId)
          .then(() => {
            deleteCard.close();
            card.removeCard(); 
          })
          .catch(console.error);
    },
    setLike: (cardId) => {
      api.makeLike(cardId)
        .then((data) => {
          card.makeLike(data);
        })
        .catch(console.error);
    },
    removeLike: (cardId) => {
      api.deleteLike(cardId)
        .then((data) => {
          card.makeLike(data);
        })
        .catch(console.error);
    }
  });
  const cardElement = card.generateCard();
  return cardElement
}

//
// Создаем экземпляр класса Api
//
const api = new Api({
  baseUrl: baseUrl,
  headers: {
      authorization: authorization,
      'Content-Type': 'application/json'
  }
});
//
// Загрузка готовых карточек и данных о пользователе с сервера
//
Promise.all([api.getInitialCards(), api.getUserInfo()])
.then(([initialCards, userData]) => {
  console.log('userData ', userData);
  userProfile.setUserInfo(userData);
  cardList.renderItems(initialCards);
})
.catch(console.error);
//
// Создаем новый обьект класса Section
//
const cardList = new Section({ 
  renderer: (item) => {
    cardList.addItem(generateCard(item));
  }}, config.cardList);
//
// Создаем экземпляр класса UserInfo
//
const userProfile = new UserInfo(userSelector);
//
// Обработчик «отправки» формы редактирования профиля
//
function handleProfileFormSubmit(evt) {
  load(true, evt);
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  const dataUser = {};
  dataUser.username = nameProfileInput.value;
  dataUser.userprofile = jobProfileInput.value;

  api.editUserInfo(dataUser)
  .then((dataUser) => {
    userProfile.setUserInfo(dataUser)
    load(false, evt);
    closePopup(popupEditProfile);
  });
}
//
// Обработчик «отправки» формы изменения аватара
//
function handleAvatarFormSubmit(evt) {
  load(true, evt);
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const dataUserAvatar = {};
  dataUserAvatar.imagelink = urlProfileAvatarInput.value;

  api.editAvatar(dataUserAvatar)
  .then((data) => {
    userProfile.setUserInfo(data);
    closePopup(popupEditAvatar);
    
    load(false, evt);
    urlProfileAvatarInput.value = '';
  });

}
//
// Обработчик «отправки» формы добавления нового места
//
function handleFormPlaceSubmit(evt) {
  load(true, evt);
  evt.preventDefault();
  const newCard = {
    imagename: namePlace.value,
    imagelink: urlPlace.value,
  };

  api.addCard(newCard)
        .then((newCard) => {
          cardList.addItem(generateCard(newCard));

          load(false, evt);
          evt.target.reset(); // сбрасываем форму
          closePopup(popupAddNewCard);
      });
}
//
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileForm.addEventListener('submit', handleProfileFormSubmit); 
placeForm.addEventListener('submit', handleFormPlaceSubmit);
avatarForm.addEventListener('submit', handleAvatarFormSubmit);
//
// Добавление слушателя событий для попапа редактирования данных профиля
//
buttonPopupEdit.addEventListener('click', () => {
  const currentInfoIser = userProfile.getUserInfo();
  editNameInput.value = currentInfoIser.name;
  editJobInput.value = currentInfoIser.about;
  formValidators['edit-form'].resetValidation();
  openPopup(popupEditProfile);
});
//
// Добавление слушателя событий для попапа редактирования фото профиля
//
buttonEditAvatar.addEventListener('click', () => {
  openPopup(popupEditAvatar);
  formValidators['update-avatar-form'].resetValidation();
});
//
// Добавление слушателя событий для попапа добавления нового места
//
buttonPopupAdd.addEventListener('click', () => {
  openPopup(popupAddNewCard);
  formValidators['new-place'].resetValidation();
});
//
//
//
function openCard(name, link) {
  openPopup(popupOpenPlace);
  imageOpenCard.src = link;
  imageOpenCard.alt = name;
  captionOpenCard.textContent = name;
}
//
// Обработчики крестика закрытия попапа
//
// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll('.popup__close');

closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап 
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});
//
// Метод показа статуса загрузки на сервер
//
function load(isLoad, textTarget, textMessage = 'Сохранение...') {
  if (isLoad) {
    textTarget.submitter.innerText = textMessage;
  } else {
    textTarget.submitter.innerText = 'Сохранить';
  }
}
