const breakpoint = window.matchMedia('(max-width: 767px)');
const buttonFeedback = document.querySelector('#button-feedback');
const headingProducts = document.querySelector('#heading-products');

const replacingTextOnElement = (element, text) => {
  element.innerText = `${text}`;
};

const breakpointChecker = () => {
  if (breakpoint.matches) {
    replacingTextOnElement(buttonFeedback, 'бесплатная консультация');
    replacingTextOnElement(headingProducts, 'Товары и услуги Smart Device');
    const hiddenContent = document.querySelector('[data-hidden="hidden"]');

    if (!hiddenContent.classList.contains('about__item--hidden')) {
      hiddenContent.classList.add('about__item--hidden');
    } else {
      hiddenContent.classList.remove('about__item--hidden');
    }
  }
};

export {breakpointChecker};
