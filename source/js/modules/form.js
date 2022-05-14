import IMask from 'imask';

const inputsTel = document.querySelectorAll('[data-input=tel]');
const inputsName = document.querySelectorAll('[data-input=name]');
const inputCheckbox = document.querySelector('#checkbox');
const buttonSubmitForm = document.querySelector('#button-submit');
const TEL_LENGTH = 16;

const initMask = (element) => {
  const maskOptions = {
    mask: '+{7}(000)000-00-00',
  };
  // eslint-disable-next-line new-cap
  IMask(element, maskOptions);
};

const addListenerOnTelChange = () => {
  inputsTel.forEach((inputTel) => {
    initMask(inputTel);

    inputTel.addEventListener('change', () => {
      if (inputTel.value.length < TEL_LENGTH) {
        inputTel.setCustomValidity('Пожалуйста введите ваш номер полностью, пример: +7(999)999-99-99');
      } else {
        inputTel.setCustomValidity('');
      }
      inputTel.reportValidity();
    });
  });
};

const addListenerOnNameChange = () => {
  inputsName.forEach((inputName)=> {

    inputName.addEventListener('change', () => {
      const nameValue = inputName.value;

      if (nameValue === '') {
        inputName.setCustomValidity('Пожалуйста введите ваше имя');
      } else {
        inputName.setCustomValidity('');
      }
      inputName.reportValidity();
    });
  });
};

const addListenerOnCheckboxChange = () => {
  inputCheckbox.addEventListener('change', () => {
    if (inputCheckbox.checked === false) {
      buttonSubmitForm.disabled = true;
    } else {
      buttonSubmitForm.disabled = false;
    }
  });
};

const addListenersOnForm = () => {
  addListenerOnTelChange();
  addListenerOnNameChange();
  addListenerOnCheckboxChange();
};

export {addListenersOnForm};
