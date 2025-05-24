import './../scss/style.scss';

import { Navigation } from './components/nav.js';
import { Carousel } from './components/carousel.js';
import { Cardreal } from './components/card-real.js';
import { Sections } from './components/sections.js';
import { Portfolio } from './components/portfolio.js';

document.addEventListener('DOMContentLoaded', () => {
    new Sections();
    new Navigation();
    new Cardreal();
    new Portfolio();

    document.querySelectorAll(".carousel").forEach(carousel => {
        let itemsToShow = carousel.getAttribute("data-item");
        if(itemsToShow){
            new Carousel(carousel, itemsToShow);
        } else {
            new Carousel(carousel);
        }
    })
});