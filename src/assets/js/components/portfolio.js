export class Portfolio{
    constructor(){
        this.containerCarousel = document.querySelector("#portfolio .carousel ul.carousel-list");
        this.itemsCarousel = this.containerCarousel.querySelectorAll("li a.carousel-item");
        this.datas = require("./../../json/datas/portfolio-realisation.json");
        this.details = document.querySelector("#portfolio .portfolio-detail");
        this.init();
    }

    init(){
        if (!this.checkElements()) {
            console.error("Des éléments du portfolio ne sont pas présents ! Vérifiez le HTML.");
            return;
        }

        this.buildCarouselContent();
        this.prepareClickEvent();
        this.prefillContent();
    }
    
    checkElements() {
        if(!this.datas || this.datas.list.length === 0 || !this.containerCarousel){
            return false;
        }

        return true;
    }

    buildCarouselContent(){
        let html = "";

        this.datas.list.forEach(data => {
            html += '<li>';
            html += '   <a href="#" class="carousel-item" data-id="' + data.id + '">';
            html += '       <img src="/images/png/' + data.imageName + '" alt="" title="" />';
            html += '   </a>';
            html += '</li>';
        });
        this.containerCarousel.innerHTML = html;
        this.itemsCarousel = this.containerCarousel.querySelectorAll("li a.carousel-item");
    }

    prepareClickEvent(){
        this.itemsCarousel.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                let id = link.getAttribute("data-id");
                this.fillContent(id);
            });
        });
    }

    prefillContent(){
        this.fillContent(0);
    }

    fillContent(id){
        let datas = this.datas.list[id];
        let html = `
            <div class="portfolio-content">
                <div class="textual-content">
                    <h3>${datas.title}</h3>
                    <p>${datas.description}</p>
                </div>

                <div class="portfolio-footer">
                    ${buildTechno()}
                    <div class="cta">
                        <a href="${datas.projectlink}" class="button">Voir le projet</a>
                        <a href="${datas.githublink}" class="button">Accéder au github</a>
                    </div>
                </div>
            </div>
            <img src="/images/png/${datas.imageName}" alt="Capture d'écran de ${datas.title}" title="Capture d'écran de ${datas.title}" />
        `;
        
        function buildTechno(){
            let content = "";

            datas.techno.forEach(techno => {
                content += `
                    <img src="/images/svg/${techno.filename}" alt="logo ${techno.libelle}" title="logo ${techno.libelle}" />
                `;
            })

            return content;
        }

        this.details.innerHTML = html;
    }
}