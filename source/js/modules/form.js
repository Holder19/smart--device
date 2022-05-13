import IMask from 'imask';

const inputTel = document.querySelector('#phone-field');
const inputName = document.querySelector('#name-field');
const inputCheckbox = document.querySelector('#checkbox');
const buttonSubmit = document.querySelector('#button-submit');
const TEL_LENGTH = 16;

const onInputTelChange = () => {
  const telValue = inputTel.value.length;

  if (telValue < TEL_LENGTH) {
    inputTel.setCustomValidity('Пожалуйста введите ваш номер полностью, пример: +7(999)999-99-99');
  } else {
    inputTel.setCustomValidity('');
  }
  inputTel.reportValidity();

};

const onInputNameChange = () => {
  const nameValue = inputName.value;

  if (nameValue === '') {
    inputName.setCustomValidity('Пожалуйста введите ваше имя');
  } else {
    inputName.setCustomValidity('');
  }
  inputName.reportValidity();
};

const onInputCheckboxChange = () => {
  if (inputCheckbox.checked === false) {
    buttonSubmit.disabled = true;
  } else {
    buttonSubmit.disabled = false;
  }
};

const addListenersOnForm = () => {
  inputTel.addEventListener('change', onInputTelChange);
  inputName.addEventListener('change', onInputNameChange);
  inputCheckbox.addEventListener('change', onInputCheckboxChange);
};


const initMask = () => {
  const maskOptions = {
    mask: '+{7}(000)000-00-00',
  };
  // eslint-disable-next-line new-cap
  IMask(inputTel, maskOptions);
};

export {initMask, addListenersOnForm};
