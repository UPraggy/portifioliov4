import { r as registerInstance, h, a as Host } from './index-B0epqJa_.js';
import { a as animate } from './anime.esm-D3K9Rn9o.js';

const myProjectsComponentCss = ":host{display:block}.projectsContainer{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;min-height:10vh;padding:15vh 0 10vh 0}.projectsContainer>.divisor{width:50%;height:3px;background-color:var(--whiteBone-home-color)}.projectsContainer>.title{width:50%;height:3px;font-family:\"Poppins\", sans-serif;color:var(--whiteBone-home-color);font-size:2em;font-weight:500;text-align:center;margin-top:60px}.projectsContainer .projectSlider{display:flex;flex-direction:column;align-items:center;width:100%;margin-top:70px}.projectsContainer .projectSlider .divisor{width:80%;height:1px;background-color:var(--whiteBone-home-color)}.projectsContainer .projectCardComponent{width:100%}.projectsContainer .cardProject,.projectsContainer .projectWrapper{display:flex;flex-direction:column;align-items:center;width:100%;color:var(--whiteBone-home-color)}.projectsContainer .cardProject .topCard{display:grid;grid-template-columns:40% 55% 5%;align-items:center;width:80%;padding:20px 0;user-select:none;transition:all 1s}.projectsContainer .cardProject .topCard .info1{display:flex;align-items:flex-end;justify-content:flex-start;width:100%;transition:all 1s}.projectsContainer .cardProject .topCard .info1 .title{font-size:1.5em;margin-right:7px;letter-spacing:0;line-height:1;font-family:'Fugaz One', sans-serif;font-weight:900;font-style:italic}.projectsContainer .cardProject .topCard .info1 .date{font-size:1em;letter-spacing:0;line-height:1}.projectsContainer .projectWrapper .openCard{display:flex;justify-content:center;align-items:center;width:30px;height:2px;background-color:var(--whiteBone-home-color);margin:0 auto;cursor:pointer;transition:all 1s}.projectsContainer .projectWrapper .openCard::before{position:absolute;content:'';width:30px;height:30px;background-color:transparent;margin:0 auto}.projectsContainer .projectWrapper .openCard:not(.active)::after{content:'';width:2px;height:30px;background-color:var(--whiteBone-home-color)}.projectsContainer .cardProject .topCard.showcard{display:grid;grid-template-columns:95% 5%;background-color:var(--whiteBone-home-color);color:var(--blueDark3-home-color)}.projectsContainer .cardProject .topCard.showcard .info1{justify-content:center}.projectsContainer .projectWrapper .topCard.showcard .openCard::after{display:none}.projectsContainer .projectWrapper .topCard.showcard .openCard{background-color:var(--blueDark3-home-color)}.projectsContainer .projectWrapper .info{display:grid;grid-template-columns:40% 55%;grid-gap:5%;margin:15px 0 20px 0;width:78%;position:relative}.projectsContainer .projectWrapper .info .leftCard{position:relative;transform:translateX(-150%)}.projectsContainer .projectWrapper .info .rightCard{position:relative;transform:translateX(150%)}.projectsContainer .projectWrapper .info .description{font-family:\"Neuton\", serif;font-weight:400;font-size:1.5em;user-select:none}.projectsContainer .projectWrapper .info .image{width:100%;aspect-ratio:2/1;background:var(--imageSliderProject) no-repeat center/contain}.projectsContainer .projectWrapper .info .viewInfoCard,.projectsContainer .projectWrapper .info .tecnologiesCard{width:94%;background-color:var(--blueLinkedIn-color);padding:5px 3%;margin-top:20px;border-radius:5px;font-family:\"Fugaz One\", sans-serif;font-weight:700}.projectsContainer .projectWrapper .info .viewInfoCard{background-color:var(--blueGreen-light-color);cursor:pointer;user-select:none;width:fit-content}";

const myProjectsComponentMobileCss = ":host{display:block}.projectsContainer.responsiveMobile{padding:0px 0 30px 0}.projectsContainer.responsiveMobile .sinopse{display:none}.projectsContainer.responsiveMobile>.divisor{width:95%}.projectsContainer.responsiveMobile>.title{width:90%;margin-top:20px}.projectsContainer.responsiveMobile .projectSlider .divisor{width:95%}.projectsContainer.responsiveMobile .cardProject .topCard{grid-template-columns:90% 10%;width:95%}.projectsContainer.responsiveMobile .cardProject .topCard.showcard{display:grid;grid-template-columns:90% 10%}.projectsContainer.responsiveMobile .projectWrapper .info{display:flex;flex-direction:column-reverse;grid-gap:5%;width:90%}.projectsContainer.responsiveMobile .projectWrapper .slideShowCard{margin-bottom:30px}";

const MyProjectsCardComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    projectObj;
    showCard = false;
    imageSliderCounter = 0;
    infoRef;
    leftCardRef;
    rightCardRef;
    componentDidLoad() {
        setInterval(() => this.imageSliderCounter = !this.showCard || this.imageSliderCounter == (this.projectObj.imagesSlider.length - 1) ? 0 :
            this.imageSliderCounter + 1, 4000);
    }
    handleShowCardChange(newValue) {
        if (newValue) {
            this.waitForRefAndAnimate();
        }
    }
    waitForRefAndAnimate(attempt = 0) {
        if (this.infoRef) {
            animate(this.leftCardRef, {
                translateX: ['-150%', '0'],
                opacity: [0, 1],
                easing: 'easeInOutExpo',
                duration: 500,
                delay: 100,
            });
            animate(this.rightCardRef, {
                translateX: ['150%', '0'],
                opacity: [0, 1],
                easing: 'easeInOutExpo',
                duration: 500,
                delay: 100,
            });
        }
        else if (attempt < 10) {
            setTimeout(() => this.waitForRefAndAnimate(attempt + 1), 50);
        }
        else {
            console.warn('infoRef não foi encontrado após várias tentativas');
        }
    }
    render() {
        return h(Host, { key: '8327e76760e2c239f7917a31ff7aba4d7fd819c4' }, h("div", { key: 'd488405b092b5aa9a2ecdbd956144b706979ce08', class: "projectWrapper" }, h("div", { key: 'd0eec120544627735e4e35a5ab2d26488af12b80', class: "cardProject" }, h("div", { key: '92e7d0b80d2e305453d30238adac162feac38311', class: `topCard ${this.showCard ? 'showcard' : ''}` }, h("div", { key: '8723735ceb90c455dec7b55bc103869cf251ba09', class: "info1" }, h("div", { key: '8b52d2bcaeed20b83a85e64f192469665f88daae', class: "title" }, this.projectObj.title), h("div", { key: 'a6ef7eeeea18480adc79bf48bfa3bbdb29fcb6dd', class: "date" }, this.projectObj.date)), !this.showCard ? h("div", { class: "sinopse" }, this.projectObj.sinopse) : '', h("div", { key: '5a4c7bae9dc0ff06d1a0be44e53bf97de2218d24', class: "openCard", onClick: () => this.showCard = !this.showCard }))), this.showCard ?
            h("div", { class: "info", ref: el => this.infoRef = el }, h("div", { class: "leftCard", ref: el => this.leftCardRef = el }, h("div", { class: "textInfoCard", innerHTML: this.projectObj.description }), h("div", { class: "tecnologiesCard" }, this.projectObj.tecnologias), h("div", { class: "viewInfoCard", onClick: () => window.location.href = this.projectObj.funccionality }, "Veja o Funcionamento")), h("div", { class: "rightCard", ref: el => this.rightCardRef = el, onClick: () => {
                    this.imageSliderCounter = !this.showCard || this.imageSliderCounter ==
                        (this.projectObj.imagesSlider.length - 1) ? 0 : this.imageSliderCounter + 1;
                } }, h("div", { class: "slideShowCard" }, h("div", { class: "image", style: { '--imageSliderProject': this.projectObj.imagesSlider[this.imageSliderCounter] } }))))
            : '', h("div", { key: 'f742c16d1bb6d11da127067310906143e4c27db7', class: "divisor" })));
    }
    static get watchers() { return {
        "showCard": ["handleShowCardChange"]
    }; }
};
MyProjectsCardComponent.style = myProjectsComponentCss + myProjectsComponentMobileCss;

export { MyProjectsCardComponent as my_projectscard_component };
//# sourceMappingURL=my-projectscard-component.entry.esm.js.map

//# sourceMappingURL=my-projectscard-component.entry.js.map