import './../scss/style.scss';

import { Navigation } from './components/nav.js';
import { Carousel } from './components/carousel.js';
import { Cardreal } from './components/card-real.js';

document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
    new Carousel();
    new Cardreal();
});