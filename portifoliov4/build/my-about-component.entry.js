import { r as registerInstance, g as getElement, h, a as Host } from './index-B0epqJa_.js';
import { a as animate, o as onScroll } from './anime.esm-D3K9Rn9o.js';

const myAboutComponentCss = ":host{display:block}.mainAboutContainer{position:relative;display:flex;justify-content:center;min-height:68vh;max-height:80vh;width:90%;color:#d9d9d9;margin:50px auto 15vh auto;overflow:hidden}.mainAboutContainer .leftDescription{position:absolute;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;min-height:100%;max-height:100%;width:60%;z-index:16}.mainAboutContainer .leftDescription .title{width:60%;font-family:'Fugaz One', sans-serif;font-weight:800;font-size:1.5em}.mainAboutContainer .leftDescription .textDescription{width:60%;position:relative;font-family:\"Poppins\", sans-serif;font-weight:300;font-size:1.3em;text-align:left;margin:20px 0 80px 0}.mainAboutContainer .leftDescription .textDescription span{font-weight:800}.mainAboutContainer .rightPhoto{position:absolute;height:65vh;max-height:65vh;aspect-ratio:0.666 / 1;background:url('/portifioliov4/static/imgs/perfilPhotoAbout.png') no-repeat center/contain;border-radius:5px;transform:translateX(50%);z-index:14;}.mainAboutContainer.responsiveMobile{flex-direction:column-reverse;max-height:unset;margin:50px auto 0px auto}.mainAboutContainer.responsiveMobile .leftDescription{position:relative;width:100%;justify-content:flex-start}.mainAboutContainer.responsiveMobile .leftDescription .textDescription{width:95%;text-align:left;margin:0px auto 20px auto}.mainAboutContainer.responsiveMobile .rightPhoto{position:relative;height:auto;max-height:unset;width:80%;aspect-ratio:0.666 /1;transform:translateX(0%);margin:0 auto}";

const MyAboutComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    responsible;
    windowSize = {
        width: window.innerWidth,
        height: window.innerHeight,
    };
    getDiv(query) {
        return this.el.shadowRoot.querySelector(query);
    }
    componentDidLoad() {
        animate(this.getDiv('.leftDescription'), {
            translateY: this.windowSize.width <= 767 ? ['300%', '-15%'] : ['300%', '0%'],
            opacity: [0, 1],
            delay: 0,
            ease: 'inOutExpo',
            duration: 1500,
            autoplay: onScroll({ container: this.getDiv('window'), debug: false })
        });
        animate(this.getDiv('.rightPhoto'), {
            translateX: this.windowSize.width <= 767 ? ['300%', '0%'] : ['300%', '50%'],
            opacity: [0, 1],
            skewX: [-50, 0],
            delay: 0,
            ease: 'inOutExpo',
            duration: 1500,
            autoplay: onScroll({ container: this.getDiv('window'), debug: false })
        });
    }
    getWindowDimensions() {
        console.log("resize");
        this.windowSize = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }
    render() {
        return (h(Host, { key: '8b8d3e05d2c8d7723b6b6d0eda772680543a9567' }, h("div", { key: 'a13a6a08f69ca4480dcd5f600d74fb8a2cd9fd41', class: `mainAboutContainer ${this.windowSize.width <= 767 ? 'responsiveMobile' : ''}` }, h("div", { key: '1eb361a321644d5774baf2379436455c51a24d7f', class: "leftDescription" }, h("div", { key: '1fc360251e5deaf60bf9c265a7f86fd98bb15299', class: "textDescription" }, h("span", { key: '87f84ac12836bf2008f34b1115dcd0065f205f24' }, " Sou um profissional de programa\u00E7\u00E3o de Front e BackEnd, que constantemente busca as melhores solu\u00E7\u00F5es para proporcionar experi\u00EAncias gratificantes atrav\u00E9s do meu Design, APIs e interfaces."), " ", h("br", { key: '169f30f612ef624ae27cf7adc289faf24a20fefd' }), h("br", { key: '931f213225d78899caccf5f6d684d0dea37d9bbb' }), "Al\u00E9m disso, atuo com planejamento t\u00E9cnico, participando de reuni\u00F5es estrat\u00E9gicas e desenvolvimento de regras de neg\u00F3cio relacionadas a sistemas. Auxilio tamb\u00E9m em quest\u00F5es de suporte e treinamentos. ", h("br", { key: '072d4bba261d8914b4e9329896a5c0159895df36' }), h("br", { key: '8cef75b8d8b5b020256ebaa1b9b3bd7ce459845b' }), "Busco expressar por meio do meu c\u00F3digo e design a preocupa\u00E7\u00E3o com o usu\u00E1rio final, al\u00E9m de produzir um software escal\u00E1vel e adapt\u00E1vel.")), h("div", { key: '2da716b350dfd85de77b3def7257ec3b39dc3391', class: "rightPhoto" }))));
    }
};
MyAboutComponent.style = myAboutComponentCss;

export { MyAboutComponent as my_about_component };
//# sourceMappingURL=my-about-component.entry.esm.js.map

//# sourceMappingURL=my-about-component.entry.js.map