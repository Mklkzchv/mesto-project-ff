const ArhyzImage = new URL('../images/arkhyz.jpg', import.meta.url);
const ChelyabImage = new URL('../images/chelyabinsk-oblast.jpg', import.meta.url);
const IvanovoImage = new URL('../images/ivanovo.jpg', import.meta.url);
const KamchaImage = new URL('../images/kamchatka.jpg', import.meta.url);
const HolmogorImage = new URL('../images/kholmogorsky-rayon.jpg', import.meta.url);
const BaykalImage = new URL('../images/baikal.jpg', import.meta.url);

const initialCards = [
    {
      name: "Архыз",
      link: ArhyzImage,
    },
    {
      name: "Челябинская область",
      link: ChelyabImage,
    },
    {
      name: "Иваново",
      link: IvanovoImage,
    },
    {
      name: "Камчатка",
      link: KamchaImage,
    },
    {
      name: "Холмогорский район",
      link: HolmogorImage,
    },
    {
      name: "Байкал",
      link: BaykalImage,
    }
];

export { initialCards };
