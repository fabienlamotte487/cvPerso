export class Cardreal{
    constructor(){
        this.backContent = document.getElementById("back-real");
        this.frontContent = document.getElementById("front-real");
        this.frontContentList = this.frontContent.querySelector(".display-card ul");
        this.datas = require("./../../json/datas/card-realisation.json");
        this.backButton = document.getElementById("backFrontReal");
        this.cards = [];
        this.showClassname = "show";

        this.init();
    }

    init()
    {
        let allElementsAreThere = this.checkAllElementAreThere();

        if(!allElementsAreThere)
        {
            console.error("Il manque des éléments dans le HTML, vérifiez la structuration du projet");
            return;
        }

        this.buildCards();
        this.saveCards();
        this.giveCardDiscoveringInteraction();
    }

    checkAllElementAreThere()
    {
        if(!this.backContent 
            || this.datas == null 
            || this.datas.list.length === 0 
            || !this.backButton)
        {
            return false;
        }

        return true;
    }

    // Crée les cards côté front
    buildCards()
    {
        this.datas.list.map(card => 
        {this.frontContentList.innerHTML += 
            '<li> ' + 
                '<a href="#" class="card-real" data-id="' +card.id + '" title=`\'Découvrir le projet "' +card.name+ '"`\'>'  +
                    '<div>' +
                        '<div class="card-real-img">' +
                            '<img src="/images/jpg/' +card.image + '" alt="" title="" />' +
                            '<small>' + card.company + '</small>' +
                        '</div>' +
                        '<div class="card-real-body">' +
                            '<h3>' + card.name + '</h3>' +
                            '<span>Cliquez pour découvrir -></span>' +
                        '</div>' +
                    '</div>' +
                '</a>' +
            '</li> ';
        })
    }

    // Stock les cards dans la variable dédiée
    saveCards()
    {
        this.cards = this.frontContentList.querySelectorAll("li");
    }

    // Attribue à toutes les cards la capacité de découvrir le projet en l'introduisant dans le back content
    giveCardDiscoveringInteraction()
    {
        this.cards.forEach(card => 
        {
            let link = card.querySelector("a");
            link.addEventListener("click", (e) => 
            {
                e.preventDefault();
                let id = link.getAttribute("data-id");
                this.buildBack(this.datas.list[id]);
                this.passingBack();
            })
        });

        this.backButton.addEventListener("click", () => 
        {
            this.passingFront();
        });
    }

    buildBack(data)
    {
        function buildTechno(technoList)
        {
            let technoHTML = "";

            technoList.forEach(techno => {
                technoHTML += `<img src="/images/svg/${techno.image}" alt="logo ${techno.name}" title="${techno.name}" />`;
            })

            return technoHTML;
        }

        let html = `
            <div class="card-img-list">
                <div class="card-real-img">
                    <img src="/images/jpg/${data.image}" title="Capture d'écran de l'application ${data.name}" alt="Application ${data.name}" />
                    <small>${data.company}</small>
                </div>
                <div>
                    ${buildTechno(data.techno)}
                </div>
            </div>
            <h3>${data.name}</h3>
            <p>${data.description}</p>
        `;

        this.backContent.querySelector(".content").innerHTML = html;
    }

    passingBack()
    {
        this.hideFrontCardContent();
        this.showBackCardContent();
    }

    passingFront()
    {
        this.hideBackCardContent();
        this.showFrontCardContent();
    }

    hideFrontCardContent()
    {
        this.frontContent.classList.remove(this.showClassname);
    }

    showFrontCardContent()
    {
        if(!this.frontContent.classList.contains(this.showClassname))
        {
            this.frontContent.classList.add(this.showClassname);
        }
    }

    hideBackCardContent()
    {
        this.backContent.classList.remove(this.showClassname);
    }

    showBackCardContent()
    {
        if(!this.backContent.classList.contains(this.showClassname))
        {
            this.backContent.classList.add(this.showClassname);
        }
    }
}