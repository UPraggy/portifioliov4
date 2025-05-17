import { r as registerInstance, g as getElement, h, a as Host } from './index-B0epqJa_.js';
import { c as circularPath, a as randomIntFromRange } from './utils-mV9RDsE1.js';
import { a as animate, s as stagger, o as onScroll } from './anime.esm-D3K9Rn9o.js';

const myCardskillComponentCss = "body{margin:0;padding:0}.mainCardSkillContainer{position:relative;display:flex;align-items:center;justify-content:center;flex-direction:column;height:100vh;width:100%;margin:30px 0 5vh;}.mainCardSkillContainer .blackHoleMainSkill{position:absolute;width:100%;height:100%;z-index:10;opacity:0.6}.mainCardSkillContainer .titleSkills{position:relative;font-family:'Nippo Variable', serif;font-size:2.5em;font-weight:700;color:var(--whiteBone-home-color);text-align:center;z-index:11;margin:0 0 30px 0}.mainCardSkillContainer .gridSkills{position:relative;display:grid;grid-template-columns:15% 15% 15% 15% 15%;grid-gap:50px;justify-content:space-around;align-items:center;width:70%;z-index:12;}.mainCardSkillContainer .gridSkills .cardSkill{position:relative;width:100%;aspect-ratio:1/1;margin-bottom:20px}.mainCardSkillContainer .gridSkills .textBottom{color:var(--blueCian-light-color);position:absolute;bottom:5%;text-align:center;width:100%;font-family:\"Playfair Display\", serif;font-weight:800;font-size:1.5em}.mainCardSkillContainer .gridSkills .cardBack{position:absolute;width:100%;height:100%;background:url('/portifioliov4/static/imgs/shapeSkill.png') no-repeat center/contain;margin-bottom:20px}.mainCardSkillContainer .gridSkills .cardSkill .imageBorder{position:absolute;top:calc(43% - 20px);left:calc(43% - 20px);width:30%;aspect-ratio:1/1;border:2px solid var(--blueCian-light-color);padding:5px;border-radius:50%;display:flex;justify-content:center;align-items:center}.mainCardSkillContainer .gridSkills .cardSkill .imageCenter{width:80%;aspect-ratio:1/1}.mainCardSkillContainer .gridSkills .cardSkill.React .imageCenter{background:url('/portifioliov4/static/imgs/reactIcon.png') no-repeat center/contain}.mainCardSkillContainer .gridSkills .cardSkill.GitGitHub .imageCenter{background:url('/portifioliov4/static/imgs/gitIcon.png') no-repeat center/contain}.mainCardSkillContainer .gridSkills .cardSkill.PostgresSql .imageCenter{background:url('/portifioliov4/static/imgs/postgresIcon.png') no-repeat center/contain}.mainCardSkillContainer .gridSkills .cardSkill.NodeJs .imageCenter{background:url('/portifioliov4/static/imgs/nodeIcon.png') no-repeat center/contain}.mainCardSkillContainer .gridSkills .cardSkill.Stencil .imageCenter{background:url('/portifioliov4/static/imgs/stencilIcon.png') no-repeat center/contain}.mainCardSkillContainer .gridSkills .cardSkill.Linux .imageCenter{background:url('/portifioliov4/static/imgs/linuxIcon.png') no-repeat center/contain}.mainCardSkillContainer .gridSkills .cardSkill.Figma .imageCenter{background:url('/portifioliov4/static/imgs/figmaIcon.png') no-repeat center/contain}.mainCardSkillContainer .gridSkills .cardSkill.Java .imageCenter{background:url('/portifioliov4/static/imgs/javaIcon.png') no-repeat center/contain}.mainCardSkillContainer .gridSkills .cardSkill.Oracle .imageCenter{background:url('/portifioliov4/static/imgs/oracleIcon.png') no-repeat center/contain}.mainCardSkillContainer .gridSkills .cardSkill.Python .imageCenter{background:url('/portifioliov4/static/imgs/pythonIcon.png') no-repeat center/contain}";

const myCardskillComponentMobileCss = "body{margin:0;padding:0}.mainCardSkillContainer.responsiveMobile{position:relative;height:auto;z-index:15}.mainCardSkillContainer.responsiveMobile .blackHoleMainSkill{position:absolute;top:5%;width:100%;height:50%;z-index:0;opacity:0.6}.mainCardSkillContainer.responsiveMobile .gridSkills{justify-content:space-around;grid-template-columns:45% 45%;grid-gap:0;overflow-y:hidden}.mainCardSkillContainer.responsiveMobile .gridSkills .cardSkill{margin-bottom:10px}.mainCardSkillContainer.responsiveMobile .gridSkills .textBottom{font-size:0.8em}.mainCardSkillContainer.responsiveMobile .gridSkills .cardSkill .imageBorder{top:calc(35% - 7px);left:calc(35% - 7px)}";

const colorsCss = ":host{--blueDark3-home-color:#0B1215;--blueDark1-home-color:#091920;--blueDark2-home-color:#0f2543;--whiteBone-home-color:#FAF9F6;--blueFont-color:#2F3651;--bluegray-color:#3C3D50;--blueLinkedIn-color:#3357CC;--purpleBorder-color:#A259FF;--purple-gradientDark1-color:#20162D;--purple-gradientDark2-color:#323236;--blueCian-light-color:#A9DBEF;--blueCian-dark-color:#2F3651;--blueGreen-light-color:#33CCAD}";

const MyCardSkillComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    incrementRadius = 0;
    mousePos;
    responsible;
    windowSize = {
        width: window.innerWidth,
        height: window.innerHeight,
    };
    getDiv(query) {
        return this.el.shadowRoot.querySelector(query);
    }
    getDivs(query) {
        return this.el.shadowRoot.querySelectorAll(query);
    }
    componentDidLoad() {
        const canvasDivElement = this.getDiv('.mainCardSkillContainer');
        const canvasElement = this.getDiv('.blackHoleMainSkill');
        if (canvasDivElement) {
            canvasElement.width = canvasDivElement.clientWidth;
            canvasElement.height = canvasDivElement.clientHeight;
            if (!(this.windowSize.width <= 767)) {
                this.createBlackHole({ canvasElement });
            }
        }
        animate(this.getDivs('.gridSkills .cardSkill'), {
            translateY: ['300%', '0'],
            opacity: [0, 1],
            ease: 'inOutExpo',
            duration: 1000,
            autoplay: onScroll({ container: this.getDiv('window'), debug: false }),
            delay: stagger(100),
        });
    }
    createBlackHole({ canvasElement }) {
        const ctx = canvasElement.getContext('2d');
        const circleArray = [];
        //     x: randomIntFromRange(canvasElement.width*0.10,canvasElement.width*0.15), //+ j+20,
        //     y: randomIntFromRange(canvasElement.width*0.10,canvasElement.width*0.15),//+ j+20,
        // }, 
        //     x: canvasElement.width/2,
        //     y: canvasElement.height/2, 
        for (let j = 0; j < 50; j++) {
            circleArray.push(new circularPath({ canvaContext: ctx, distanceFromCenter: {
                    x: randomIntFromRange(canvasElement.width * 0.20, canvasElement.width * 0.25), //+ j+20,
                    y: randomIntFromRange(canvasElement.height * 0.20, canvasElement.height * 0.25), //+ j+20,
                },
                x: canvasElement.width / 2,
                y: canvasElement.height / 2,
                radius: 7,
                color: j % 2 == 0 ? '#2D0066' : '#FFFFFF',
                velocity: 0.02 }));
            circleArray.push(new circularPath({ canvaContext: ctx, distanceFromCenter: {
                    x: randomIntFromRange(canvasElement.width * 0.15, canvasElement.width * 0.20), //+ j+20,
                    y: randomIntFromRange(canvasElement.height * 0.15, canvasElement.height * 0.20), //+ j+20,
                },
                x: canvasElement.width / 2,
                y: canvasElement.height / 2 + (canvasElement.height / 2 * 0.1),
                radius: 5,
                color: j % 2 == 0 ? '#2D0066' : '#FFFFFF',
                velocity: 0.02 }));
            circleArray.push(new circularPath({ canvaContext: ctx, distanceFromCenter: {
                    x: randomIntFromRange(canvasElement.width * 0.15, canvasElement.width * 0.20), //+ j+20,
                    y: randomIntFromRange(canvasElement.height * 0.15, canvasElement.height * 0.20), //+ j+20,
                },
                x: canvasElement.width / 2,
                y: canvasElement.height / 2 + (canvasElement.height / 2 * 0.2),
                radius: 5,
                color: j % 2 == 0 ? '#2D0066' : '#FFFFFF',
                velocity: 0.02 }));
            circleArray.push(new circularPath({ canvaContext: ctx, distanceFromCenter: {
                    x: randomIntFromRange(canvasElement.width * 0.10, canvasElement.width * 0.15), //+ j+20,
                    y: randomIntFromRange(canvasElement.height * 0.10, canvasElement.height * 0.15), //+ j+20,
                },
                x: canvasElement.width / 2,
                y: canvasElement.height / 2 + (canvasElement.height / 2 * 0.3),
                radius: 5,
                color: j % 2 == 0 ? '#2D0066' : '#FFFFFF',
                velocity: 0.02 }));
            circleArray.push(new circularPath({ canvaContext: ctx, distanceFromCenter: {
                    x: randomIntFromRange(canvasElement.width * 0.05, canvasElement.width * 0.10), //+ j+20,
                    y: randomIntFromRange(canvasElement.height * 0.05, canvasElement.height * 0.10), //+ j+20,
                },
                x: canvasElement.width / 2,
                y: canvasElement.height / 2 + (canvasElement.height / 2 * 0.4),
                radius: 5,
                color: j % 2 == 0 ? '#2D0066' : '#FFFFFF',
                velocity: 0.02 }));
        }
        ctx.fillStyle = 'rgba(11, 18, 21, 1)';
        ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
        this.animateBlackHole(circleArray, ctx, canvasElement);
    }
    animateBlackHole(circleArray, ctx, canvasElement) {
        // Limpa completamente a cada 10 frames
        ctx.fillStyle = 'rgba(11, 18, 21, 0.3)';
        ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
        requestAnimationFrame(() => this.animateBlackHole(circleArray, ctx, canvasElement));
        for (let j = 0; j < circleArray.length; j++) {
            circleArray[j].update();
        }
    }
    hoverSkillCard(event) {
        if (this.windowSize.width <= 767)
            return;
        const card = event.currentTarget.querySelector(':scope > .cardBack');
        const text = event.currentTarget.querySelector(':scope > .textBottom');
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        let rotateX = ((y - centerY) / centerY) * 45;
        let rotateY = ((x - centerX) / centerX) * 45;
        animate([card, text], {
            scale: 1.1,
            rotateX: -rotateX,
            rotateY: rotateY,
            duration: 0.2,
            easing: 'ease-out'
        });
    }
    mouseLeaveSkillCard(event) {
        const card = event.currentTarget.querySelector(':scope > .cardBack');
        const text = event.currentTarget.querySelector(':scope > .textBottom');
        animate([card, text], {
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            duration: 0.2,
            easing: 'ease-out'
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
        return h(Host, { key: '943650c3449d1ee5914195bc691f56eb86405ce3' }, h("div", { key: '514b5a76d84387c93c6d1c5041c356eda2be907e', class: `mainCardSkillContainer ${this.windowSize.width <= 767 ? 'responsiveMobile' : ''}` }, h("canvas", { key: '6716874353a32196f4b61c9e922689593fcda740', class: "blackHoleMainSkill" }), h("div", { key: 'a3077072cc097464f23dab0146a1162705142dd0', class: "titleSkills" }, "Habilidades"), h("div", { key: '005fdf4dda0a14e7e1a3cb7a529879e5c16e0e04', class: "gridSkills" }, h("div", { key: '7b1d2eb23f6223a5dd46913d15fc6e716f5e8565', class: "cardSkill React", onMouseMove: (event) => this.hoverSkillCard(event), onMouseLeave: (event) => this.mouseLeaveSkillCard(event) }, h("div", { key: 'fb41f63dedfa538fa8b8142fde1c0d657e9e3d6f', class: "cardBack" }), h("div", { key: '8f8367f279fab8abb1afd52c148983dec9413cf5', class: "imageBorder" }, h("div", { key: 'ea88b7cd49d3d16b64974d46ba16a99b949754ab', class: "imageCenter" })), h("div", { key: '4a3fc54921bb2ce1abe2954d8c73d88a9253f744', class: "textBottom" }, "React")), h("div", { key: '5bae9cb4c733153f9eddadda4c427eccd9339ea7', class: "cardSkill GitGitHub", onMouseMove: (event) => this.hoverSkillCard(event), onMouseLeave: (event) => this.mouseLeaveSkillCard(event) }, h("div", { key: 'bc2eecb93d37f8e4d1a0268274d9482f759fe0a1', class: "cardBack" }), h("div", { key: 'cc07a48676ed8aa5b2c9a107195f33a5df974704', class: "imageBorder" }, h("div", { key: '95b5ae68e19c1887dbbb40a2d88fcbdc659e587b', class: "imageCenter" })), h("div", { key: '3562802d782d0a39b70f419b4abbcd43c5085d57', class: "textBottom" }, "Git/GitHub")), h("div", { key: '049824e49e24e3d89646ff4c908d2d7ae0259ef9', class: "cardSkill PostgresSql", onMouseMove: (event) => this.hoverSkillCard(event), onMouseLeave: (event) => this.mouseLeaveSkillCard(event) }, h("div", { key: '40c95fcada9adcead16677f8ab5ccd6989b0ea37', class: "cardBack" }), h("div", { key: '2e1c79f37f707f6521af7f46e4fe6e2de7145c68', class: "imageBorder" }, h("div", { key: '40e3b4cab3ff171d4d844382d2c625d502bd3b25', class: "imageCenter" })), h("div", { key: '9e3ea76231e11b9b12d43c6fc721122a648f2fa8', class: "textBottom" }, "PostgresSql")), h("div", { key: '692e45d06d44e3eac865267cfe9b9f317168bd98', class: "cardSkill NodeJs", onMouseMove: (event) => this.hoverSkillCard(event), onMouseLeave: (event) => this.mouseLeaveSkillCard(event) }, h("div", { key: 'e08b859709481921d12fabf05d359d7ea42cccbc', class: "cardBack" }), h("div", { key: 'c8e96ad381b0b5a5d5c83777be5e428e3222452c', class: "imageBorder" }, h("div", { key: 'b8451883e48163129e2577348e9c75022abbd1f7', class: "imageCenter" })), h("div", { key: '443925dc179632405b49e73ef3791447a2121f21', class: "textBottom" }, "NodeJs")), h("div", { key: 'd1bc617b3945d4ed949802b8dcf1db6ce8963a91', class: "cardSkill Stencil", onMouseMove: (event) => this.hoverSkillCard(event), onMouseLeave: (event) => this.mouseLeaveSkillCard(event) }, h("div", { key: '2e59f8af275649762b4b67a01e52c6c9bd8da4f8', class: "cardBack" }), h("div", { key: 'c6ab3bdd9031aa376b3d4e29f1e4042e458f710f', class: "imageBorder" }, h("div", { key: 'dcee1a12be15c624b3461a63aa2d418bfd8ade7b', class: "imageCenter" })), h("div", { key: '34672f71084886b840780f87759e4fbaff36976a', class: "textBottom" }, "Stencil")), h("div", { key: 'ed06f5159d13d8a0ccdaf602f9c1aa61b18e83ed', class: "cardSkill Linux", onMouseMove: (event) => this.hoverSkillCard(event), onMouseLeave: (event) => this.mouseLeaveSkillCard(event) }, h("div", { key: '10d41c48e925f1a9981f952956d55ffa08f280c9', class: "cardBack" }), h("div", { key: '2f5d802df57f8cc0d62580c21bcd896cbebefdcf', class: "imageBorder" }, h("div", { key: '48bc1dd95222cfa0ae62b61a09eace4e2d4b50d4', class: "imageCenter" })), h("div", { key: '8699546ce23c20183a96c03ca60b15d40c2a68d9', class: "textBottom" }, "Linux")), h("div", { key: '711e4bfb652f5a9c349378b272d067e3561ad66c', class: "cardSkill Figma", onMouseMove: (event) => this.hoverSkillCard(event), onMouseLeave: (event) => this.mouseLeaveSkillCard(event) }, h("div", { key: 'bfb43d7ddc21575384198d0c03d91be1509af490', class: "cardBack" }), h("div", { key: 'eea900b654c4036d1c3b48bba732290d3a38484c', class: "imageBorder" }, h("div", { key: 'fccd300e3b046e469b72267c9f16d2e47da9fffa', class: "imageCenter" })), h("div", { key: '1dc9df0e609e92777e280acf16663c3c4ca97342', class: "textBottom" }, "Figma")), h("div", { key: '5418da0e5d1bb8b42183813d9d151443a16b8d34', class: "cardSkill Java", onMouseMove: (event) => this.hoverSkillCard(event), onMouseLeave: (event) => this.mouseLeaveSkillCard(event) }, h("div", { key: '89f26b400415b19ba01f7c70ab0dde8b2c660578', class: "cardBack" }), h("div", { key: 'eeaf4c7ea98b9202a1136c507900a0ddc6d40f88', class: "imageBorder" }, h("div", { key: 'c66ff8c31b79b1421ec3bf9d37d23a1bb3ca174d', class: "imageCenter" })), h("div", { key: 'a6f7acc7bda62caf0a8c161264fd33011c3f5d3e', class: "textBottom" }, "Java")), h("div", { key: 'a5c87af2335582ef37acd274e2457662fc4ab73a', class: "cardSkill Oracle", onMouseMove: (event) => this.hoverSkillCard(event), onMouseLeave: (event) => this.mouseLeaveSkillCard(event) }, h("div", { key: '3f9604320fe4a49328a281e64a20b078f44bf145', class: "cardBack" }), h("div", { key: '2289c8d1e994583794d5e0c013ccfab4babf92e0', class: "imageBorder" }, h("div", { key: '73410da06287ab4d9ce83f7c04bb875561e699ca', class: "imageCenter" })), h("div", { key: '6e5e39081bb9245a9ea4ad4ca2a3cfd84a19ff17', class: "textBottom" }, "OracleSql")), h("div", { key: '49062327aa6d0c7ac2efe65140088b5b630b20c5', class: "cardSkill Python", onMouseMove: (event) => this.hoverSkillCard(event), onMouseLeave: (event) => this.mouseLeaveSkillCard(event) }, h("div", { key: '5ee31bd540823580ff6ae859e2e21179b145c7cf', class: "cardBack" }), h("div", { key: 'c826978eb767f5bd8c0a08db1b6362f930a9fcaf', class: "imageBorder" }, h("div", { key: 'df4db265bdf9dfda7612beaa75dc22ec3b33142d', class: "imageCenter" })), h("div", { key: 'cdc4b51c20a3cb0d10b004500504066695f09acc', class: "textBottom" }, "Python")))));
    }
};
MyCardSkillComponent.style = myCardskillComponentCss + (myCardskillComponentMobileCss + colorsCss);

export { MyCardSkillComponent as my_cardskill_component };
//# sourceMappingURL=my-cardskill-component.entry.esm.js.map

//# sourceMappingURL=my-cardskill-component.entry.js.map