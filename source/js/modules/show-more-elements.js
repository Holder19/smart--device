const detailsItems = document.querySelectorAll('[data-content=details-item]');

const onDetailsButtonClick = (button) => {

  detailsItems.forEach((item) => {
    if (item.classList.contains('about__item--hidden')) {
      item.classList.remove('about__item--hidden');
      button.innerText = 'Свернуть';
    } else {
      item.classList.add('about__item--hidden');
      button.innerText = 'Подробнее';
    }
  });
};

export {onDetailsButtonClick};
