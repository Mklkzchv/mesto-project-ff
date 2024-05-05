export const openPopup = (popup) => {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', escClose);
    document.addEventListener('mousedown', overlayClosePopup);
  };
  
  export const closePopup = (popup) => {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', escClose);
    document.removeEventListener('mousedown', overlayClosePopup);
  };

  export function escClose (evt) {
    if (evt.key === 'Escape') {
      closePopup(document.querySelector('.popup_is-opened'));
    }
  }
  
  export function overlayClosePopup (evt) {
    if (evt.target.classList.contains('popup_is-opened')) {
      closePopup(evt.target);
    }
  }
  