const breakpoint = window.matchMedia('(max-width: 767px)');
const buttonFeedback = document.querySelector('#button-feedback');
const headingProducts = document.querySelector('#heading-products');

const replacingTextOnElement = (element, text) => {
  element.innerText = `${text}`;
};
const hiddenContent = document.querySelector('[data-hidden="hidden"]');

const breakpointChecker = (_bp) => {
  if (breakpoint.matches) {
    replacingTextOnElement(buttonFeedback, 'бесплатная консультация');
    replacingTextOnElement(headingProducts, 'Товары и услуги Smart Device');
    hiddenContent.classList.add('about__item--hidden');
  } else {
    hiddenContent.classList.remove('about__item--hidden');
    replacingTextOnElement(buttonFeedback, 'Получить бесплатную консультацию');
  }
};

const addListenerOnBreakpoints = () => {
  breakpoint.addListener(breakpointChecker);
  breakpointChecker(breakpoint);
};

export {addListenerOnBreakpoints};
