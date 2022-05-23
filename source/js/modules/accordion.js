const accordions = document.querySelectorAll('.accordion');

const accordionToggle = () => {
  accordions.forEach((accordion) => {

    if (accordion.classList.contains('accordion--nojs')) {
      accordion.classList.remove('accordion--nojs');
      accordion.classList.add('accordion--close');

      accordion.addEventListener('click', () => {
        let currentAccordion = accordion;

        if (currentAccordion.classList.contains('accordion--close')) {
          accordions.forEach((item) => {
            item.classList.add('accordion--close');
            item.classList.remove('accordion--open');
          });
          currentAccordion.classList.remove('accordion--close');
          currentAccordion.classList.add('accordion--open');
        } else {
          currentAccordion.classList.remove('accordion--open');
          currentAccordion.classList.add('accordion--close');
        }
      });
    }
  });
};

export {accordionToggle};
