const ZERO_VALUE = 0;
const MIN_NAME_LENGTH = 2;
const PHONE_LENGTH = 11;
const phoneRegEx = /[0-9]/;
const form = document.querySelector('.main__feedback');
const nameField = form.querySelector('#user_name');
const phoneField = form.querySelector('#user_phone');
const buttonSubmit = form.querySelector('.main__feedback-button');

const setErrorStyle = (object) => {
  object.style.border = '5px solid rgb(255, 0, 0)';
};

const removeError = (object) => {
  object.removeAttribute('style');
}

const changeButtonText = () => {
  buttonSubmit.textContent = 'Подобрать велосипед мечты';
}

const checkName = () => {
  nameField.addEventListener('blur', () => {
    if (nameField.value.length < MIN_NAME_LENGTH) {
      setErrorStyle(nameField);
    } else if (nameField.value.length > MIN_NAME_LENGTH) {
      removeError(nameField);
    }

    if (nameField.value.length === ZERO_VALUE) {
      removeError(nameField);
    }
  });
}

const checkPhone = () => {
  phoneField.addEventListener('blur', () => {
    if (!(phoneField.value.length === PHONE_LENGTH) || !phoneRegEx.test(phoneField.value)) {
      setErrorStyle(phoneField);
    } else if ((phoneField.value.length === PHONE_LENGTH) && phoneRegEx.test(phoneField.value)) {
      removeError(phoneField);
    }

    if (phoneField.value.length === ZERO_VALUE) {
      removeError(phoneField);
    }
  });
}

const stopSubmit = () => {
  form.addEventListener('change', () => {
    checkName();
    checkPhone();
  })
  buttonSubmit.addEventListener('click', (evt) => {
    if (nameField.hasAttribute('style') || phoneField.hasAttribute('style')) {
      evt.preventDefault()
    }
  });
}

const sentForm = () => {
  form.addEventListener('submit', (evt) => {
    if (!nameField.hasAttribute('style') && !phoneField.hasAttribute('style')) {
      evt.preventDefault();
      form.reset();
      buttonSubmit.textContent = 'Форма Отправлена';
      setTimeout(changeButtonText, 2000);
    }
  })
}

const workForm = () => {
  stopSubmit();
  sentForm();
}

export {workForm};