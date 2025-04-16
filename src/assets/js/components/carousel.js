export class Carousel{
    constructor(){
        this.list = document.querySelector('.carousel-list');
        this.buttons = document.querySelectorAll('.carousel-nav button');
        this.items = this.list.querySelectorAll('.carousel-item');
        this.currentIndex = 0;
        this.maxIndex = this.items.length - 1;
        this.numberOfIndex = this.items.length;
        this.previousButton = this.buttons[0];
        this.nextButton = this.buttons[1];

        this.init();
    }

    init(){
        let isCarouselElementsThere = this.checkElements();

        if(!isCarouselElementsThere){
            console.error("Des éléments du carousel ne sont pas présents ! Vérifiez le HTML.");
            return;
        }

        this.previousButton.addEventListener('click', this.decrement.bind(this));
        this.nextButton.addEventListener('click', this.increment.bind(this));
    }

    checkElements(){
        if(!this.list || this.buttons.length === 0 || this.items.length === 0){
            return false;
        }
        return true;
    }

    increment(){
        if(this.currentIndex < this.maxIndex){
            this.currentIndex++;
            this.updateCarousel();
        }
        this.disableOrEnableButtons();
    }

    decrement(){
        if(this.currentIndex > 0){
            this.currentIndex--;
            this.updateCarousel();
        } 
        this.disableOrEnableButtons();
    }

    disableOrEnableButtons(){
        if(this.currentIndex === 0){
            this.previousButton.setAttribute("disabled", "true");
        } else {
            this.previousButton.removeAttribute("disabled");
        }

        if(this.currentIndex === this.maxIndex){
            this.nextButton.setAttribute("disabled", "true");
        } else {
            this.nextButton.removeAttribute("disabled");
        }
    }

    updateCarousel() {
        this.list.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }
}