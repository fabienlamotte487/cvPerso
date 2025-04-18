export class Sections{
    constructor(){
        this.sections = document.querySelectorAll("section");
        this.classNameToTrigger = "appear";
        this.init();
        this.offsetRatio = 0.8;
    }

    init(){
        let allElementsAreThere = this.checkIfElementsAreThere();

        if(!allElementsAreThere){
            console.error("Il n'y a aucune section dans ce document. Vérifier le HTML");
            return;
        }

        this.appearWhileScrollingTo();
        this.checkOnLoad();
    }

    checkIfElementsAreThere(){
        if(this.sections.length === 0){
            return false;
        }

        return true;
    }

    appearWhileScrollingTo() {
        window.addEventListener("scroll", () => {
            this.checkVisibility();
        });
    }

    checkVisibility() {
        const offset = window.innerHeight * this.offsetRatio;

        this.sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (!section.classList.contains(this.classNameToTrigger) &&
                rect.top <= offset && rect.bottom >= 0) {
                section.classList.add(this.classNameToTrigger);
            }
        });
    }

    checkOnLoad() {
        window.addEventListener("load", () => {
            this.checkVisibility();
        });
    }
}