//
// Класс валидации поля формы
//
export default class FormValidator {
    constructor(validationConfig, formElement) {
      this._formSelector = validationConfig.formSelector; 
      this._inputSelector = validationConfig.inputSelector; 
      this._inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
      this._submitButtonSelector = formElement.querySelector(validationConfig.submitButtonSelector);
      this._inactiveButtonClass = validationConfig.inactiveButtonClass;
      this._inputErrorClass = validationConfig.inputErrorClass;
      this._errorClass = validationConfig.errorClass;
      this._formElement = formElement;
    }
//
//
//
    _showError(inputElement, errorMessage) {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(this._inputErrorClass);
      errorElement.textContent = errorMessage || inputElement.validationMessage;
      errorElement.classList.add(this._errorClass);
      inputElement.dataset.error = errorMessage || inputElement.validationMessage; // Устанавливаем кастомное сообщение в data-* атрибут
    };
//
//
//
    _hideError(inputElement) {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = '';
      inputElement.dataset.error = ''; // Очищаем data-* атрибут
    };
//
//
//
  _checkInputValidity(inputElement) {
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      inputElement.setCustomValidity("");
    }
    if (!inputElement.validity.valid) {
      this._showError(inputElement);
    } else {
      this._hideError(inputElement);
    }
  };
//
//
//
    _isInvalidInput() {
      return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
  }; 
//
//
//
    _toggleButtonState() {
      if (this._isInvalidInput()) {
        this._submitButtonSelector.classList.add(this._inactiveButtonClass);
        this._submitButtonSelector.setAttribute("disabled", "");
      } else {
        this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
        this._submitButtonSelector.removeAttribute("disabled", "");
      }
  }; 
//
//
//
    resetValidation() {
      this._inputList.forEach((inputElement) => {
        this._checkInputValidity(inputElement);
        this._hideError(inputElement);
      });
      this._toggleButtonState(); 
    }; 
//
//
//
    _setEventListeners() {
        this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState();
        });
        });
    };
//
//
//
    enableValidation() {
        this._setEventListeners();
    };
}
//
//
//