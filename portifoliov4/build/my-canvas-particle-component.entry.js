import { r as registerInstance, g as getElement, h, a as Host } from './index-B0epqJa_.js';
import { C as Cirle } from './utils-mV9RDsE1.js';

const myCanvasParticleComponentCss = ":host{display:block}.canvaSubMain{width:100%;height:100%;max-width:100%;max-height:100%;overflow:hidden}";

const MyCanvasParticleComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    statusAnimation = true;
    responsible;
    componentDidLoad() {
        this.allCircleAnimation();
    }
    allCircleAnimation() {
        const canvaElement = this.el.shadowRoot.querySelector('.canvaMainElement');
        const canvaDivMain = this.el.shadowRoot.querySelector('.canvaSubMain');
        if (canvaDivMain) {
            // console.log(canvaDivMain)
            canvaElement.width = canvaDivMain.clientWidth;
            canvaElement.height = canvaDivMain.clientHeight;
            let canvaContext = canvaElement.getContext('2d');
            let circlesArray = [];
            for (let x = 0; x < 80; x++) {
                const randPos = (size) => Math.random() * size;
                circlesArray.push(new Cirle({ x: randPos(canvaElement.clientWidth), y: randPos(canvaElement.clientHeight),
                    dx: (Math.random() < 0.5 ? -1 : 1) * 2, dy: (Math.random() < 0.5 ? -1 : 1) * 2,
                    radius: Number((Math.random() * 5).toFixed(0)), color: (Math.random() < 0.5 ? '#FAF9F6' : Math.random() < 0.5 ? '#A259FF' : '#00D8FF'),
                    canvaContext, canvaElement: canvaDivMain }));
            }
            this.animateCircles(canvaContext, canvaDivMain, circlesArray);
        }
    }
    getScroolPosition() {
        const canvaElement = this.el.shadowRoot.querySelector('.canvaMainElement');
        if (!canvaElement)
            return;
        const rect = canvaElement.getBoundingClientRect();
        const scrollY = window.scrollY;
        const canvaBottom = rect.top + scrollY + rect.height;
        if (scrollY > canvaBottom) {
            this.statusAnimation = false;
        }
        else if (this.statusAnimation == false) {
            this.statusAnimation = true;
            this.allCircleAnimation();
        }
    }
    animateCircles(canvaContext, canvaSize, circlesArray) {
        if (!this.statusAnimation)
            return;
        requestAnimationFrame(() => this.animateCircles(canvaContext, canvaSize, circlesArray));
        canvaContext.clearRect(0, 0, canvaSize.clientWidth, canvaSize.clientHeight);
        circlesArray.forEach(circle => {
            circle.update();
        });
    }
    render() {
        return (h(Host, { key: 'cfdbb036fced7dcef09942d9d405d5eea47cca92' }, h("div", { key: 'b7360804d9e1c43310f9238fb2a97767d678c3da', class: "canvaSubMain" }, h("canvas", { key: 'e45cad3eee459283bd9d4f96bf37541173de3d3b', class: "canvaMainElement" }))));
    }
};
MyCanvasParticleComponent.style = myCanvasParticleComponentCss;

export { MyCanvasParticleComponent as my_canvas_particle_component };
//# sourceMappingURL=my-canvas-particle-component.entry.esm.js.map

//# sourceMappingURL=my-canvas-particle-component.entry.js.map