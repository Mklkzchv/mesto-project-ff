// @todo: Темплейт карточки

// @todo: DOM узлы

const config = {
    cardTemplate: '#card-template',
    cardElement: '.card',
    deleteButton: '.card__delete-button',
    cardImage: '.card__image',
    cardTitle: '.card__title',
    cardList: '.places__list'
  };

const placesList = document.querySelector(config.cardList);

// @todo: Функция создания карточки

function generateCard(card, deleteCard) {
    const cardElement = document
        .querySelector(config.cardTemplate)
        .content
        .querySelector(config.cardElement)
        .cloneNode(true);

    const deleteButton = cardElement.querySelector(config.deleteButton);
    deleteButton.addEventListener('click', (evt) => {
        deleteCard(evt); 
    });
    cardElement.querySelector(config.cardImage).src = card.link;
    cardElement.querySelector(config.cardImage).alt = card.name;
    cardElement.querySelector(config.cardTitle).textContent = card.name;
    return cardElement
}

// @todo: Функция удаления карточки

function deleteCard(item) {
    item.target.parentElement.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach(card => {
    placesList.append(generateCard(card, deleteCard));
});
