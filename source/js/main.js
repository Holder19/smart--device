import {iosVhFix} from './utils/ios-vh-fix';
import {onDetailsButtonClick} from './modules/show-more-elements';
import {accordionToggle} from './modules/accordion';
import {breakpointChecker} from './modules/breakpoint-checker';
import {addListenersOnForm} from './modules/form';
import {addHandlersOnModal} from './modules/modal';


const detailsButton = document.querySelector('#details-button');

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();
  accordionToggle();
  breakpointChecker();
  detailsButton.addEventListener('click', onDetailsButtonClick);
  addListenersOnForm();
  addHandlersOnModal();
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener

// используйте .closest(el)
