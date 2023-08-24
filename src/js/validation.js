export default class Validator {
  constructor(form, submitCallback) {
    this._form = document.querySelector(form);
    this._submitCallback = submitCallback;
    this._inputList = this._form.querySelectorAll('.footer__form-input');
    this._button = this._form.querySelector('.footer__form-button');
    this._setEventListeners();
  }

  _getInputValues() {
    const formValuesInputs = {};

    this._inputList.forEach(input => {
      formValuesInputs[input.name] = input.value;
    });

    return formValuesInputs;
  }

  _setEventListeners() {
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();

      let isValid = true; 
      
      this._inputList.forEach(input => {
        if (input.checkValidity()) {
          input.classList.remove('footer__form-input_error');
        } else {
          isValid = false;
          input.classList.add('footer__form-input_error');
        }
      });

      if (isValid) {
        this._submitCallback(this._getInputValues());
        this._form.reset();
      }
    });
  }
}