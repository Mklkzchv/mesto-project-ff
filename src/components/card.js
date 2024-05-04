import { config } from '../utils/constants.js';

// @todo: Функция создания карточки

export function generateCard(card, deleteCard, likeCard, openCard) {
    const cardElement = document
        .querySelector(config.cardTemplate)
        .content
        .querySelector(config.cardElement)
        .cloneNode(true);

    const deleteButton = cardElement.querySelector(config.deleteButton);
    deleteButton.addEventListener('click', (evt) => {
      deleteCard(evt); 
    });

    const likeButton = cardElement.querySelector(config.cardLike);
    likeButton.addEventListener('click', (evt) => {
      likeCard(evt); 
    });

    const cardImg = cardElement.querySelector(config.cardImage);
    cardImg.addEventListener('click', (evt) => {
      openCard(evt);
    });

    cardImg.src = card.link;
    cardImg.alt = card.name;
    cardElement.querySelector(config.cardTitle).textContent = card.name;
    return cardElement
}

// @todo: Функция удаления карточки

export function deleteCard(item) {
  item.target.parentElement.remove();
}

export function likeCard(item) {
  item.target.classList.toggle('card__like-button_is-active');
}
  