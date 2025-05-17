import { r as registerInstance, h, a as Host } from './index-B0epqJa_.js';

const myFooterComponentCss = ":host{display:block}.mainFooterContainer{width:95%;margin:1vh auto 0 auto;padding:2.5% 2.5% 2.5% 2.5%}.mainFooterContainer .titleFooter{width:100%;text-align:center;color:var(--whiteBone-home-color);font-family:\"Poppins\", sans-serif;font-weight:700;font-size:1.8em;margin-bottom:15px}.mainFooterContainer .titleFooter span{color:var(--blueLinkedIn-color)}.mainFooterContainer .bottomFooter{display:flex;justify-content:flex-start;align-items:center;width:90%;background-color:var(--bluegray-color);border-radius:15px;padding:8px 15px;margin:0 auto;color:var(--whiteBone-home-color);font-family:\"Poppins\", sans-serif;font-weight:700}.mainFooterContainer .bottomFooter .copyIcon{width:40px;aspect-ratio:1/1;background:url('/portifioliov4/static/imgs/copyIcon.png') no-repeat center/contain;margin-right:10px}.mainFooterContainer.responsiveMobile .titleFooter{font-size:1em}.mainFooterContainer.responsiveMobile .textRights{font-size:0.8em}";

const MyFooterComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    responsible;
    windowSize = {
        width: window.innerWidth,
        height: window.innerHeight,
    };
    getWindowDimensions() {
        console.log("resize");
        this.windowSize = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }
    render() {
        return (h(Host, { key: 'd74ff25be74339c3bc907bebc31c1177f370beda' }, h("div", { key: '3c86f0fde484d1f76d77d0dac1d7f800d9694afd', class: `mainFooterContainer ${this.windowSize.width <= 767 ? 'responsiveMobile' : ''}` }, h("div", { key: 'efcbd73d6c0dbbb5ccfc6d0d657bb705bcf71603', class: "titleFooter" }, "\u201CCompreendendo o ", h("span", { key: '87c1fc1fe9b0f319ce7ab3421f6bc520a7259bed' }, "passado"), ", estruturando o ", h("span", { key: '48ce560f4e78cbd080a94425c1e6fd3c8c0d6570' }, "futuro"), "\u00A0 e otimizando o ", h("span", { key: '625bcb63b6428941904297f307a6b85d8bd6f92f' }, "presente"), ".\u201D"), h("div", { key: '6906a2a34ccace31955b84d39b417ebab88f90aa', class: "bottomFooter" }, h("div", { key: '23ca094dcce84d9ec2e3ae0601c1fbdf063035ab', class: "copyIcon" }), h("div", { key: '1b81764cd8733a24a9efc2c3c020aa828374c51c', class: "textRights" }, "2024. Todos Direitos Reservados. Design por Rafael Moreira.")))));
    }
};
MyFooterComponent.style = myFooterComponentCss;

export { MyFooterComponent as my_footer_component };
//# sourceMappingURL=my-footer-component.entry.esm.js.map

//# sourceMappingURL=my-footer-component.entry.js.map