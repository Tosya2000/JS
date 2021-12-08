/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */

function createCarousel(slidesCount = 5) {
  // ваш код здесь
  container=document.getElementById('carousel');

  slide = document.createElement('ul');
  slide.setAttribute('class', 'slides');

  indicator = document.createElement('div');
  indicator.setAttribute('class', 'indicators');
  
  for (i = 0; i < slidesCount; i++) {
    let slideItem = document.createElement('li');
    let slideLink = document.createElement('a');

    slideItem.setAttribute(
      'class',
      i === 0 ? 'slides__item active' : 'slides__item'
    );
    slideLink.setAttribute('href', '#');
    slideItem.appendChild(slideLink);
    slide.appendChild(slideItem);

    let indicatorsItem = document.createElement('span');

    indicatorsItem.setAttribute(
      'class',
      i === 0 ? 'indicators__item active' : 'indicators__item'
    );
    indicatorsItem.setAttribute('data-slide-to', i);
    indicator.appendChild(indicatorsItem);
  }

  container.appendChild(slide);
  container.appendChild(indicator);

  controlsContainer = document.createElement('div');
  controlsContainer.setAttribute('class', 'controls');

  for (i = 0; i < 3; i++) {
    let controlItem = document.createElement('div');
    let controlIcon = document.createElement('i');
    const defItemClass = 'controls__item';
    const defIconClass = 'fas';

    switch (i) {
      case 0:
        controlItem.setAttribute('class', `${defItemClass} controls__prev`);
        controlIcon.setAttribute('class', `${defIconClass} fa-chevron-left`);
        break;
      case 1:
        controlItem.setAttribute('class', `${defItemClass} controls__next`);
        controlIcon.setAttribute('class', `${defIconClass} fa-chevron-right`);
        break;
      case 2:
        controlItem.setAttribute('class', `${defItemClass} controls__pause`);
        controlIcon.setAttribute('class', `${defIconClass} fa-play`);
        break;
    }
    controlItem.appendChild(controlIcon);
    controlsContainer.appendChild(controlItem);
  }
  container.appendChild(controlsContainer);

  styleContainer = document.createElement('style');
  let styleCode = `
    .controls,
    .slides {
      position: relative;
    }
    .indicators {
      display: flex;
    }
    .indicators__item {
      display: block;
      width: 20px;
      height: 40px;
      background-color: blue;
      margin: 10px;
      border-radius: 5px;
    }`;

  styleContainer.innerHTML = styleCode;
  container.appendChild(styleContainer);


  let indicatorContainer = document.querySelector('div.indicators');
  indicatorContainer.addEventListener('click', indicatorsHandler);
}
function indicatorsHandler(e) {
  let target = e.target;

  if (target.classList.contains('indicators__item')) {
    target.style.backgroundColor = 'red';

    if (prevIndicator !== null) prevIndicator.removeAttribute('style');

    prevIndicator = target;
  }
}
createCarousel(4);