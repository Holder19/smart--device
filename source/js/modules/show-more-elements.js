const detailsItems = document.querySelectorAll('[data-content=details-item]');
const detailsButton = document.querySelector('#details-button');
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
  detailsButton.addEventListener('click', onDetailsButtonClick);
};

export {onDetailsButtonClick};
