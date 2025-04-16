import './../scss/style.scss';

import { Navigation } from './components/nav.js';

document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
    const card = document.querySelector('.card-link');
    card.classList.add('show');
  });
  