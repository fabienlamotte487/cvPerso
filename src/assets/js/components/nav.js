export class Navigation{
    constructor(){
        this.buttonBurger = document.getElementById("menuBurger");
        this.buttonCloseBurger = document.getElementById("menuClose");
        this.nav = document.querySelector("nav");
        this.header = document.querySelector("header");
        this.liMenus = document.querySelectorAll("nav ul:first-child li a");
        this.evitLink = document.getElementById("evit_link");
        this.init();
    }

    init(){
        let isNavigationElementsThere = this.isNavigationElementsThere();

        if(!isNavigationElementsThere){
            console.error("Des éléments de navigation ne sont pas présents ! Vérifiez le HTML.");
            return;
        }

        this.buttonBurger.addEventListener("click", this.showResponsiveNavigation.bind(this));
        this.buttonCloseBurger.addEventListener("click", this.hideResponsiveNavigation.bind(this));
        [...this.liMenus, this.evitLink].forEach((liMenu) => {
            liMenu.addEventListener("click", (e) => {
                this.hideResponsiveNavigation.bind(this)
                this.scrollToSmooth.bind(this)(e, liMenu)
            });
        });
        
        window.addEventListener("scroll", this.stickyWhileScrolling.bind(this));
    }

    isNavigationElementsThere(){
        if(this.buttonBurger && this.buttonCloseBurger && this.nav && this.header && this.liMenus.length > 0){
            return true;
        }else{
            return false;
        }
    }

    showResponsiveNavigation(){
        this.nav.classList.add("display");
        this.buttonBurger.classList.remove("show");
        this.buttonCloseBurger.classList.add("show");
    }

    scrollToSmooth(e, itemMenu){
        e.preventDefault();
        const targetId = itemMenu.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 150, // Ajuster la position pour le header sticky
                behavior: "smooth"
            });
        } else {
            console.error(`L'élément avec l'ID ${targetId} n'existe pas.`);
        }
    }

    hideResponsiveNavigation(e, liMenu = null){
        this.nav.classList.remove("display");
        this.buttonBurger.classList.add("show");
        this.buttonCloseBurger.classList.remove("show");
    }   

    stickyWhileScrolling(){
        if (window.scrollY > 75) {
            this.header.classList.add("scroll");
        } else {
            this.header.classList.remove("scroll");
        }
    }
}