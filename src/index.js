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
const togglePopupEdit = document.querySelector('.popup_type_edit');
const togglePopupNewCard = document.querySelector('.popup_type_new-card');
const togglePopupOpenCard = document.querySelector('.popup_type_image');
const buttonPopupAdd = document.querySelector('.profile__add-button');
const buttonPopupEdit = document.querySelector('.profile__edit-button');
const editNameInput = document.querySelector('.popup__input_type_name');
const editJobInput = document.querySelector('.popup__input_type_description');
const formElement = document.querySelector('[name="edit-profile"]');
const nameInput = formElement.querySelector('[name="name"]');
const jobInput = formElement.querySelector('[name="description"]');
const formElementPlace = document.querySelector('[name="new-place"]');
const namePlace = formElementPlace.querySelector('[name="place-name"]');
const urlPlace = formElementPlace.querySelector('[name="link"]');
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
  nameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = jobInput.value;
  closePopup(togglePopupEdit);
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
  closePopup(togglePopupNewCard);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 
formElementPlace.addEventListener('submit', handleFormPlaceSubmit); 

// Добавление слушателя событий для попапа редактирования данных профиля
//
buttonPopupEdit.addEventListener('click', () => {
  editNameInput.value = nameProfile.textContent;
  editJobInput.value = descriptionProfile.textContent;
  openPopup(togglePopupEdit);
});

//
// Добавление слушателя событий для попапа добавления нового места
//
buttonPopupAdd.addEventListener('click', () => {
  openPopup(togglePopupNewCard);
});

function openCard(item) {
  openPopup(togglePopupOpenCard);
  imageOpenCard.src = item.target.src;
  captionOpenCard.textContent = item.target.alt;
}

// @todo: Вывести карточки на страницу

initialCards.forEach(card => {
    placesList.append(generateCard(card, deleteCard, likeCard, openCard));
});
