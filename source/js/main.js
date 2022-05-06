import {iosVhFix} from './utils/ios-vh-fix';
const accordions = document.querySelectorAll('.accordion');
const accordionsTitles = document.querySelectorAll('#accordion-title');
const breakpoint = window.matchMedia('(max-width: 767px)');
const detailsItems = document.querySelectorAll('#details-item');
const detailsButton = document.querySelector('#details-button');

const replacingTextOnButton = () => {
  const buttonFeedback = document.querySelector('#button-feedback');
  buttonFeedback.innerText = 'бесплатная консультация';
};

const breakpointChecker = () => {
  if (breakpoint.matches) {
    replacingTextOnButton();
    const hiddenContent = document.querySelector('[data-hidden="hidden"]');

    if (!hiddenContent.classList.contains('about__item--hidden')) {
      hiddenContent.classList.add('about__item--hidden');
    } else {
      hiddenContent.classList.remove('about__item--hidden');
    }
  }
};

const onDetailsButtonClick = () => {

  detailsItems.forEach((item) => {
    if (item.classList.contains('about__item--hidden')) {
      item.classList.remove('about__item--hidden');
      detailsButton.innerText = 'Свернуть';
    } else {
      item.classList.add('about__item--hidden');
      detailsButton.innerText = 'Подробнее';
    }
  });
};

const accordionToggle = () => {
  accordions.forEach((accordion) => {

    if (accordion.classList.contains('accordion--nojs')) {
      accordion.classList.remove('accordion--nojs');
      accordion.classList.add('accordion--close');
    }
  });

  accordionsTitles.forEach((accordionTitle) => {

    accordionTitle.addEventListener('click', () => {

      let currentAccordionTitle = accordionTitle;
      let accordionTitleId = currentAccordionTitle.getAttribute('data-accordion');
      let currentAccordionContent = document.querySelector(accordionTitleId);

      if (currentAccordionContent.classList.contains('accordion--close')) {
        accordions.forEach((item) => {
          item.classList.add('accordion--close');
          item.classList.remove('accordion--open');
        });

        currentAccordionContent.classList.remove('accordion--close');
        currentAccordionContent.classList.add('accordion--open');
      } else {
        currentAccordionContent.classList.remove('accordion--open');
        currentAccordionContent.classList.add('accordion--close');
      }
    });
  });

};

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();
  accordionToggle();
  breakpointChecker();
  detailsButton.addEventListener('click', onDetailsButtonClick);
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
