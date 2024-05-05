import { initialCards } from './cards';
import '../pages/index.css';
import { config } from './utils/constants.js';
import { generateCard } from "./components/card.js";
import { deleteCard } from "./components/card.js";
import { likeCard } from "./components/card.js";
import { openPopup } from "./components/modal.js";
import { closePopup } from "./components/modal.js";

// @todo: DOM узлы

const placesList = document.querySelector(config.cardList);
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddNewCard = document.querySelector('.popup_type_new-card');
const popupOpenPlace = document.querySelector('.popup_type_image');
const buttonPopupAdd = document.querySelector('.profile__add-button');
const buttonPopupEdit = document.querySelector('.profile__edit-button');
const editNameInput = document.querySelector('.popup__input_type_name');
const editJobInput = document.querySelector('.popup__input_type_description');
const profileForm = document.querySelector('[name="edit-profile"]');
const nameProfileInput = profileForm.querySelector('[name="name"]'); 
const jobProfileInput = profileForm.querySelector('[name="description"]');
const placeForm = document.querySelector('[name="new-place"]');
const namePlace = placeForm.querySelector('[name="place-name"]');
const urlPlace = placeForm.querySelector('[name="link"]');
const imageOpenCard = document.querySelector('.popup__image');
const captionOpenCard = document.querySelector('.popup__caption');
const nameProfile = document.querySelector('.profile__title');
const descriptionProfile = document.querySelector('.profile__description');

editNameInput.value = 'Жак-Ив Кусто';
editJobInput.value = 'Исследователь океана';

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameProfile.textContent = nameProfileInput.value;
  descriptionProfile.textContent = jobProfileInput.value;
  closePopup(popupEditProfile);
}

function handleFormPlaceSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: namePlace.value,
    link: urlPlace.value,
  };
  placesList.prepend(generateCard(newCard, deleteCard, likeCard, openCard));
  namePlace.value = '';
  urlPlace.value = '';
  closePopup(popupAddNewCard);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileForm.addEventListener('submit', handleFormSubmit); 
placeForm.addEventListener('submit', handleFormPlaceSubmit); 

// Добавление слушателя событий для попапа редактирования данных профиля
//
buttonPopupEdit.addEventListener('click', () => {
  editNameInput.value = nameProfile.textContent;
  editJobInput.value = descriptionProfile.textContent;
  openPopup(popupEditProfile);
});

//
// Добавление слушателя событий для попапа добавления нового места
//
buttonPopupAdd.addEventListener('click', () => {
  openPopup(popupAddNewCard);
});

function openCard(item) {
  openPopup(popupOpenPlace);
  imageOpenCard.src = item.target.src;
  imageOpenCard.alt = item.target.alt;
  captionOpenCard.textContent = item.target.alt;
}

// @todo: Вывести карточки на страницу

initialCards.forEach(card => {
    placesList.append(generateCard(card, deleteCard, likeCard, openCard));
});
