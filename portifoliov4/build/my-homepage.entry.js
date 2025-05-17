import { r as registerInstance, g as getElement, h, a as Host } from './index-B0epqJa_.js';
import { s as splitTextContentSpan, r as returnSizeClientDiv } from './utils-mV9RDsE1.js';
import { a as animate, s as stagger } from './anime.esm-D3K9Rn9o.js';

const myHomepageCss = ":host{display:block;--topPath:\"M 0,0 L 100,0 L 80,100 L 20,100 L 0,0\"}:host .homePageContent{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;min-height:100vh;background-color:var(--whiteBone-home-color);overflow:auto}:host .mainShapeContent{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;min-width:98%;max-width:98%;min-height:100vh;margin-top:1vh;background-color:var(--blueDark3-home-color);border-radius:25px 25px 25px 25px;margin-bottom:30px}.InitialView{position:relative;width:100%;height:100vh;display:flex;justify-content:center;align-items:center}.mainShapeContent .canvaMain{position:absolute;width:100%;height:100vh;max-height:100vh;z-index:5;border-radius:25px}:host .topPath{position:absolute;top:-5px;padding-top:5px;left:calc(35%);display:flex;justify-content:center;align-items:flex-start;width:30%;height:50px;background-color:var(--whiteBone-home-color);clip-path:path(var(--topPath));z-index:10}:host .topPath .namePortfolio{position:relative;font-family:'Fugaz One', sans-serif;font-weight:900;font-style:italic;color:var(--blueFont-color);font-size:1.7em;padding:0;margin:0;user-select:none;z-index:10}:host .leftPath{position:absolute;top:calc(35%);left:-10px;width:60px;height:30vh;background-color:var(--whiteBone-home-color);clip-path:path(var(--leftPath));display:flex;flex-direction:column;justify-content:center;align-items:flex-start;z-index:13;padding-left:10px}:host .leftPath .socials{width:90%;height:fit-content}:host .leftPath .socials .emailCircle,:host .leftPath .socials .linkedInIcon,:host .leftPath .socials .gitIcon{width:50px;aspect-ratio:1/1;background-color:var(--blueFont-color);border-radius:50%;display:flex;justify-content:center;align-items:center;cursor:pointer}:host .leftPath .socials .emailCircle div{width:30px;aspect-ratio:1/1;background:url('/portifioliov4/static/imgs/emailIcon.png') no-repeat center/contain}:host .leftPath .social2Group{margin-top:10px}:host .leftPath .socials .linkedInIcon{background-color:var(--blueLinkedIn-color);border-radius:50% 50% 0 0}:host .leftPath .socials .gitIcon{border-radius:0 0 50% 50%}:host .leftPath .socials .linkedInIcon div{width:25px;aspect-ratio:1/1;background:url('/portifioliov4/static/imgs/linkedInIcon.png') no-repeat center/contain}:host .leftPath .socials .gitIcon div{width:25px;aspect-ratio:1/1;background:url('/portifioliov4/static/imgs/githubIcon.png') no-repeat center/contain}:host .rightPath{position:absolute;top:calc(41%);right:0;width:23%;height:17vh;background-color:var(--whiteBone-home-color);display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:15px 0 0 15px;overflow:hidden;z-index:10}:host .bordText{width:92%;font-family:'Futura Hv BT', sans-serif;font-weight:800;font-size:1.5em;color:var(--bluegray-color);user-select:none}.mainContentDescrpt{position:relative;display:grid;grid-template-columns:30% 30% 30%;justify-content:center;width:100%;min-height:calc(90vh - 50px);z-index:10}.mainContentDescrpt .left{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:90%;height:100%;margin-left:10%;z-index:10}.mainContentDescrpt .left .textProfission{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:center;font-family:\"Inter\", sans-serif;color:var(--whiteBone-home-color);font-size:2.5em}.mainContentDescrpt .left .curriculumBtn{display:flex;justify-content:center;align-items:center;width:70%;height:50px;background-color:#000000;border:2px solid var(--whiteBone-home-color);margin-top:30px;cursor:pointer}.mainContentDescrpt .left .curriculumBtn .text{width:75%;margin-left:15%;color:var(--whiteBone-home-color);font-family:'Futura Hv BT', sans-serif;font-weight:800;font-size:1.1em;z-index:2}.mainContentDescrpt .left .curriculumBtn .arrow{position:relative;display:flex;justify-content:center;align-items:center;width:25%;height:100%;background-color:var(--whiteBone-home-color);z-index:5;padding-left:5%}.mainContentDescrpt .left .curriculumBtn .arrow .lineArrow{position:absolute;right:20px;width:40px;height:4px;background-color:#000000}.mainContentDescrpt .left .curriculumBtn .arrow .pointArrow{position:absolute;right:20px;width:20px;height:20px;border:2px solid #000000;border-width:4px 4px 0 0;transform:rotate(45deg)}.mainContentDescrpt .center{position:relative;display:flex;justify-content:center;align-items:center;width:100%;height:100%;z-index:2}.mainContentDescrpt .center .perfilPhoto{position:relative;height:105%;aspect-ratio:1 / 0.866;background:url('/portifioliov4/static/imgs/perfilPhoto.png') no-repeat center/contain;z-index:2}.homePageContent .projectComponent,.homePageContent .habilidadeComponent,.homePageContent .aboutComponent,.homePageContent .experienceComponent,.homePageContent .footerComponent{width:100%;max-width:100%}";

const myHomepageMobileCss = ":host .mainShapeContent.responsiveMobile .InitialView{flex-direction:column;align-items:flex-start;height:100vh}:host .mainShapeContent.responsiveMobile .mainShapeContent .canvaMain{height:100vh;max-height:100vh}:host .mainShapeContent.responsiveMobile .topPath{left:calc(15%);width:70%;height:1.8em}:host .mainShapeContent.responsiveMobile .namePortfolio{font-size:1.2em}:host .mainShapeContent.responsiveMobile .mainContentDescrpt .left{width:100%;transform:translateY(-50%);text-align:center;margin-left:0}:host .mainShapeContent.responsiveMobile .mainContentDescrpt .left .textProfission{justify-content:center;font-size:1.8em}:host .mainShapeContent.responsiveMobile .mainContentDescrpt .left .curriculumBtn{margin:30px auto 10px auto}:host .mainShapeContent.responsiveMobile .mainContentDescrpt .left .curriculumBtn .text{margin-left:4%;font-size:0.9em}:host .mainShapeContent.responsiveMobile .mainContentDescrpt{display:flex;flex-direction:column-reverse;justify-content:unset;margin-top:35px;z-index:5}:host .mainShapeContent.responsiveMobile .mainContentDescrpt .center{align-items:flex-start}:host .mainShapeContent.responsiveMobile .mainContentDescrpt .center .perfilPhoto{width:100%;aspect-ratio:0.8666 /1;overflow:hidden}:host .mainShapeContent.responsiveMobile .leftPath{left:unset;right:-10px;margin:0 10px 0 0;top:calc(10%);width:40px;padding-right:5px;height:calc(35px*5)}:host .mainShapeContent.responsiveMobile .leftPath .socials .emailCircle,:host .mainShapeContent.responsiveMobile .leftPath .socials .linkedInIcon,:host .mainShapeContent.responsiveMobile .leftPath .socials .gitIcon{width:40px}:host .mainShapeContent.responsiveMobile .leftPath .socials .emailCircle div,:host .mainShapeContent.responsiveMobile .leftPath .socials .gitIcon div,:host .mainShapeContent.responsiveMobile .leftPath .socials .linkedInIcon div{width:20px}:host .descPath{width:50%;background-color:var(--whiteBone-home-color);display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:15px;overflow:hidden;margin:0 auto 0 auto;z-index:10;min-height:calc(7em);text-align:center;transform:translateY(-70%)}:host .descPath{width:92%;font-family:'Futura Hv BT', sans-serif;font-weight:800;font-size:0.7em;color:var(--bluegray-color);user-select:none}";

const colorsCss = ":host{--blueDark3-home-color:#0B1215;--blueDark1-home-color:#091920;--blueDark2-home-color:#0f2543;--whiteBone-home-color:#FAF9F6;--blueFont-color:#2F3651;--bluegray-color:#3C3D50;--blueLinkedIn-color:#3357CC;--purpleBorder-color:#A259FF;--purple-gradientDark1-color:#20162D;--purple-gradientDark2-color:#323236;--blueCian-light-color:#A9DBEF;--blueCian-dark-color:#2F3651;--blueGreen-light-color:#33CCAD}";

const fontsCss = "@import url('https://fonts.googleapis.com/css2?family=Freeman&family=Podkova:wght@400..800&display=swap');@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'); @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,900&display=swap'); @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,200..900;1,200..900&display=swap'); @import url('https://fonts.googleapis.com/css2?family=Neuton:ital,wght@0,200;0,300;0,400;0,700;0,800;1,400&display=swap'); @font-face{font-family:'Fugaz One';src:url('/portifioliov4/static/fonts/FugazOne-Regular.ttf') format('truetype');font-weight:400;font-style:normal}@font-face{font-family:'Futura Hv BT';src:url('/portifioliov4/static/fonts/Futura-Heavy.ttf') format('truetype');font-weight:800;font-style:normal}@font-face{font-family:'Futura Md BT';src:url('/portifioliov4/static/fonts/Futura-Md-BT.ttf') format('truetype');font-weight:800;font-style:normal}@font-face{font-family:'Nippo Variable';src:url('/portifioliov4/static/fonts/Nippo-Variable.ttf') format('truetype');font-weight:800;font-style:normal}";

const MyHomePage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    topPathRef;
    leftPathRef;
    windowSize = {
        width: window.innerWidth,
        height: window.innerHeight,
    };
    componentDidLoad() {
        console.log('render');
        if (!this.windowSize.width)
            return;
        splitTextContentSpan(this.el, '.mainShapeContent .textProfission');
        let leftPathSize = returnSizeClientDiv({ ref: this.leftPathRef });
        let leftPathVar = this.windowSize.width > 767 ? [`"M 0,0 L ${leftPathSize.width},0 L ${leftPathSize.width},${leftPathSize.height} L 0,${leftPathSize.height} L 0,0"`,
            `"M 0,0 L ${leftPathSize.width},${leftPathSize.height * 0.1} L ${leftPathSize.width},${leftPathSize.height * 0.9} L 0,${leftPathSize.height} L 0,0"`,
        ] : [`"M ${leftPathSize.width},0 L 0,0 L 0,${leftPathSize.height} L ${leftPathSize.width},${leftPathSize.height} L ${leftPathSize.width},0"`,
            `"M ${leftPathSize.width},0 L 0,${leftPathSize.height * 0.1} L 0,${leftPathSize.height * 0.9} L ${leftPathSize.width},${leftPathSize.height} L ${leftPathSize.width},0"`,
        ];
        animate(this.el.shadowRoot.querySelector('.mainShapeContent .leftPath'), {
            '--leftPath': leftPathVar,
            easing: 'easeInOutQuad',
            duration: 500,
        });
        let topPathSize = returnSizeClientDiv({ ref: this.topPathRef });
        let topPathVar = [`"M 0,0 L ${topPathSize.width},0 L ${topPathSize.width},${topPathSize.height} L 0,${topPathSize.height} L 0,0"`,
            `"M 0,0 L ${topPathSize.width},0 L ${topPathSize.width * 0.8},${topPathSize.height} L ${topPathSize.width * 0.2},${topPathSize.height} L 0,0"`,
        ];
        animate(this.el.shadowRoot.querySelector('.mainShapeContent .topPath'), {
            '--topPath': topPathVar,
            easing: 'easeInOutQuad',
            duration: 900,
        });
        animate(this.el.shadowRoot.querySelectorAll('.mainShapeContent .textProfission span'), {
            display: 'inline-block',
            translateY: ['10%', '0'],
            opacity: [0, 1],
            easing: 'easeInOut',
            duration: 30,
            delay: stagger(60)
        });
    }
    hoverCurriculumBtn(typeMouse) {
        console.log("FUNCTION CALL" + typeMouse);
        if (typeMouse == 'Enter') {
            animate(this.el.shadowRoot.querySelector('.curriculumBtn .arrow'), {
                translateX: ['-300%', '0%'],
                easing: 'easeInOutQuad',
                duration: 500,
            });
        }
    }
    pathPerfilPhotoOrbit({ width, height }) {
        const widthround = (percentage) => (width * percentage).toFixed(2);
        const heightround = (percentage) => (height * percentage).toFixed(2);
        return `M 
    ${widthround(0.1)},${heightround(0.3)} 
    C ${widthround(0.1)} ${heightround(0.3)} 
      ${widthround(0.1)},${heightround(0.5)}
     ${widthround(0.6)},${heightround(0.4)}
    
    
    C ${widthround(1)} ${heightround(0.4)}
      ${widthround(1)},${heightround(0.5)}
      ${widthround(0.2)},${heightround(0.63)}

    C ${widthround(0)} ${heightround(0.64)}
      ${widthround(0.1)} ${heightround(0.7)}
     ${widthround(0.9)},${heightround(0.8)}
     
     C ${widthround(1.2)},${heightround(0.8)}
     ${widthround(0.5)} ${heightround(0)}
     ${widthround(0.1)},${heightround(0.3)} 
     Z`;
    }
    getWindowDimensions() {
        console.log("resize");
        this.windowSize = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }
    render() {
        return h(Host, { key: 'd2e67965f6faf5488aa11887b91bf5169f47adfe' }, h("div", { key: '89bb6fd0b6d6e27ada5dd4cc36d1eff5525ec242', class: "homePageContent" }, h("div", { key: 'f26ecd1b66bafe5ad02fefa8078458f9d0aca139', class: `mainShapeContent ${this.windowSize.width <= 767 ? 'responsiveMobile' : ''}` }, h("div", { key: '3d42663282952070d9d43fbc3d9bcca2f5570f37', class: "InitialView" }, h("my-canvas-particle-component", { key: '1689f18b2fcc34851525ed0ce0b7259886498302', class: "canvaMain", responsible: this.windowSize.width <= 767 }), h("div", { key: '047d116194381e084c08b1940c76ff6d30ade3b5', class: "topPath", ref: el => this.topPathRef = el }, h("p", { key: '445cff1b6a93d5db5e6c2cbaf5f866340992a091', class: "namePortfolio" }, "RAFAEL MOREIRA")), h("div", { key: '4a7257018ac66279cf185daaa0f3b2aa990042f8', class: "leftPath", ref: el => this.leftPathRef = el }, h("div", { key: '1fb2bcbc6e1e2a7f08729367227f27020505e8a4', class: "socials" }, h("div", { key: '00ad90d73d5b2e15c6fb340a1cf3e28c9a961380', class: "emailCircle", onClick: () => window.location.href = "mailto:rafaelmoreira2001ofc@gmail.com" }, h("div", { key: '1b1c379ddf89cfba081ed2e148d607e037973fe3' })), h("div", { key: 'bb113b09d1fa6b7899b77a8b7fdc02c18c39341f', class: "social2Group" }, h("div", { key: '63ce916c85755b447613dbcab7ae2e22a70f90fb', class: "linkedInIcon", onClick: () => window.location.href = "https://www.linkedin.com/in/rafael-moreira-ramos-de-rezende-16420b21b/" }, h("div", { key: 'bf790b5a78b31d844ec47085cde9682d94a04be7' })), h("div", { key: 'bf6caaf27c602504dca41088e8c71cad779b4d42', class: "gitIcon", onClick: () => window.location.href = "https://github.com/UPraggy" }, h("div", { key: 'bf3c236c4359cb88a3e0f7b18ad6c86988b6dad1' }))))), this.windowSize.width > 767 ? h("div", { class: "rightPath" }, h("div", { class: "bordText" }, "N\u00E3o \u00E9 s\u00F3 c\u00F3digo ou design. \u00C9 sobre entender, adaptar e conectar.")) : '', h("div", { key: '85a8761c365e91d5fe4fbff01c802a81240897ff', class: "mainContentDescrpt" }, this.windowSize.width <= 767 ? h("div", { class: "descPath" }, h("div", { class: "bordText" }, "N\u00E3o \u00E9 s\u00F3 c\u00F3digo ou design. \u00C9 sobre entender, adaptar e conectar.")) : '', h("div", { key: 'fa1adb2e04c30eebbc9bce5990305b84516f6775', class: "left" }, h("div", { key: '7ab42d54c4484c51ceb9ec852d5100597a1c5de6', class: "textProfission" }, "Full Stack Developer & Designer"), h("div", { key: '27cadafd87e16bdd29b2ee3f0d93aabff3955d5a', class: "curriculumBtn", onClick: () => window.location.href = "/static/docs/RafaelMoreira_Curriculo_25042025.pdf", onMouseEnter: () => this.hoverCurriculumBtn('Enter') }, h("div", { key: '6c6877f6724ff20578688f0aee1cea713815b802', class: "text" }, "MY CURRICULUM"), h("div", { key: '422f2e34ef5bff6d7905a75017a0c94d167ef19e', class: "arrow" }, h("div", { key: '07c6adf24dd0af23a513336487acf67d66b57f75', class: "lineArrow" }), h("div", { key: 'adc5e8785cb9bd8243e32c085e1cc0b7be13562e', class: "pointArrow" })))), h("div", { key: 'e9c9fbdef73ad7f1ffedfe1303651eb0bd5edf04', class: "center" }, h("div", { key: '548239bc310ca44eaa706e6d5b1703f444836bed', class: "perfilPhoto" })))), h("my-cardskill-component", { key: 'a9cf7ea751b6f2a0884c30f8d8ae2d73e540e223', class: "habilidadeComponent", responsible: this.windowSize.width <= 767 }), h("my-about-component", { key: 'cf59c1a899834ed4b43aef1abeca1b3ead5afa73', class: "aboutComponent", responsible: this.windowSize.width <= 767 }), h("my-projects-component", { key: '851726eba824be0c4919471add509a670f47b3db', class: "projectComponent", responsible: this.windowSize.width <= 767 }), h("my-experience-component", { key: '6b4f2d660eb51f3534e0c6f47c86621dec6786d2', class: "experienceComponent", responsible: this.windowSize.width <= 767 }), h("my-footer-component", { key: '04886c1873422b07e58312e0d572b784b4da77d9', class: "footerComponent", responsible: this.windowSize.width <= 767 }))));
    }
};
MyHomePage.style = myHomepageCss + (myHomepageMobileCss + (colorsCss + fontsCss));

export { MyHomePage as my_homepage };
//# sourceMappingURL=my-homepage.entry.esm.js.map

//# sourceMappingURL=my-homepage.entry.js.map