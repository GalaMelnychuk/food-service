import dishes from './menu.json';
import dishItemTemplate from './templates/dish.hbs';

import './styles.css';

const refs = {
  dishFeed: document.querySelector('.js-menu'),
  btn: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

function dishCollection(dishes) {
  const markup = dishes.reduce((acc, dish) => acc + dishItemTemplate(dish), '');
  refs.dishFeed.insertAdjacentHTML('beforeend', markup);
}
dishCollection(dishes);

refs.body.classList.add('light-theme');

refs.btn.addEventListener('change', henderTheme);

function henderTheme(event) {
  if (refs.btn.checked) {
    refs.body.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('Theme', 'dark-theme');
  } else {
    refs.body.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('Theme', 'light-theme');
  }
}

function savedTheme() {
  if (localStorage.getItem('Theme') === 'dark-theme') {
    refs.body.classList.replace('light-theme', 'dark-theme');
    refs.btn.checked = true;
  }
  // else {
  //  refs.body.classList.add('light-theme');
  //  localStorage.setItem('Theme', 'light-theme');
  // }
}

savedTheme();
