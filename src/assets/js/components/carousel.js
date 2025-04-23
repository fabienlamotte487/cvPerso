export class Carousel {
    constructor(carousel, itemToShow = 1) {
        this.carousel = carousel;
        this.list = this.carousel.querySelector('.carousel-list');
        this.buttons = this.carousel.querySelectorAll('.carousel-nav button');
        this.items = this.list.querySelectorAll('.carousel-item');
        this.itemToShow = itemToShow;

        this.currentIndex = 0;
        this.totalItems = this.items.length;
        this.maxIndex = Math.ceil(this.totalItems / this.itemToShow) - 1;

        this.previousButton = this.buttons[0];
        this.nextButton = this.buttons[1];

        this.init();
    }

    init() {
        if (!this.checkElements()) {
            console.error("Des éléments du carousel ne sont pas présents ! Vérifiez le HTML.");
            return;
        }

        this.setItemWidth();
        this.previousButton.addEventListener('click', this.decrement.bind(this));
        this.nextButton.addEventListener('click', this.increment.bind(this));
        this.disableOrEnableButtons();
    }

    checkElements() {
        return this.list && this.buttons.length === 2 && this.items.length > 0;
    }

    setItemWidth() {
        this.items.forEach(item => {
            item.closest('li').style.flex = `0 0 ${100 / this.itemToShow}%`;
        });
    }

    increment() {
        if (this.currentIndex < this.maxIndex) {
            this.currentIndex++;
            this.updateCarousel();
        }
        this.disableOrEnableButtons();
    }

    decrement() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCarousel();
        }
        this.disableOrEnableButtons();
    }

    disableOrEnableButtons() {
        this.previousButton.disabled = this.currentIndex === 0;
        this.nextButton.disabled = this.currentIndex === this.maxIndex;
    }

    updateCarousel() {
        const translatePercentage = -(this.currentIndex * 100);
        this.list.style.transform = `translateX(${translatePercentage}%)`;
        
    }
}
