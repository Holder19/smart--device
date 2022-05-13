const accordions = document.querySelectorAll('.accordion');
const accordionsTitles = document.querySelectorAll('#accordion-title');

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

export {accordionToggle};
