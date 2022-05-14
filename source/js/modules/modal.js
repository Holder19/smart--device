const buttonOpenModal = document.querySelector('#button-open-modal');
const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
const buttonClose = modal.querySelector('#button-close');
const inputName = modal.querySelector('#name-field-modal');

const body = document.querySelector('.page__body');

const openModal = () => {
  modal.classList.remove('modal--close');
  overlay.classList.add('overlay--visible');
  body.style.overflow = 'hidden';
  inputName.focus();
};

const closeModal = () => {
  modal.classList.add('modal--close');
  overlay.classList.remove('overlay--visible');
  body.style.overflow = 'initial';
};

const onEscKeyClick = (evt) => {
  if (evt.key === 'Escape') {
    closeModal();
  }
};

const addHandlersOnModal = () => {
  buttonOpenModal.addEventListener('click', openModal);
  buttonClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  window.addEventListener('keydown', onEscKeyClick);
};

export {addHandlersOnModal};
