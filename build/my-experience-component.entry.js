import { r as registerInstance, h, a as Host } from './index-B0epqJa_.js';

const myExperienceComponentCss = ":host{display:block}.mainExperienceContainer{display:grid;grid-template-columns:30% 75%;width:95%;margin:5vh auto 20px auto;padding:4.5% 2.5%;background-color:transparent;align-items:flex-start;justify-content:flex-start;color:var(--whiteBone-home-color)}.mainExperienceContainer .leftDescription{font-family:'Futura Hv BT', sans-serif}.mainExperienceContainer .leftDescription .title{font-weight:800;font-size:2em}.mainExperienceContainer .leftDescription .subTitle{font-weight:400;font-size:1em;color:#acacac}.mainExperienceContainer .experienceTable{width:90%;display:grid;grid-template-columns:40% 40% 20%;padding:0 2.5%;font-family:'Futura Md BT', sans-serif;font-weight:300;font-size:1em}.mainExperienceContainer .experienceTable>div:nth-child(-n+3){font-weight:800}.mainExperienceContainer .experienceTable>div{margin-bottom:8px}.mainExperienceContainer.responsiveMobile{display:flex;flex-direction:column;justify-content:center;align-items:center}.mainExperienceContainer.responsiveMobile .leftDescription{text-align:center}.mainExperienceContainer.responsiveMobile .experienceTable{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;margin:15px 0 0 0}.mainExperienceContainer.responsiveMobile .experienceLine{width:100%;display:flex;flex-direction:column}.mainExperienceContainer.responsiveMobile .experienceLine::after{content:'';width:95%;height:2px;background-color:var(--whiteBone-home-color);margin:6px 0 6px 0}.mainExperienceContainer.responsiveMobile .experienceTable>div{font-weight:400}";

const MyExperienceComponent = class {
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
        return (h(Host, { key: 'ab36c974feacfd5aa574bfdab0a22f1f0acb2f08' }, h("div", { key: 'ebddee90c16978f79959e6692fc4fa69876134e6', class: `mainExperienceContainer ${this.windowSize.width <= 767 ? 'responsiveMobile' : ''}` }, h("div", { key: '49f23d6a4202c76227e5e1a0f64e57d0547b848d', class: "leftDescription" }, h("div", { key: 'e60d0cb89e0d5f21749f76a65e295d9bf67cd989', class: "title" }, "Minha Experi\u00EAncia"), h("div", { key: '1ac344642654e9855deee946af9fc4365f3c52f2', class: "subTitle" }, "Ao longo da minha jornada, tive o prazer de aprender com profissionais brilhantes em organiza\u00E7\u00F5es excepcionais.")), this.windowSize.width <= 767 ?
            h("div", { class: "experienceTable" }, h("div", { class: "experienceLine" }, h("div", null, "Cargo"), h("div", null, "Empresa"), h("div", null, "Ano")), h("div", { class: "experienceLine" }, h("div", null, "Full Stack Developer"), h("div", null, "Babita"), h("div", null, "2023 - ATUAL")), h("div", { class: "experienceLine" }, h("div", null, "FreeLancer"), h("div", null, "-"), h("div", null, "2023 - ATUAL")), h("div", { class: "experienceLine" }, h("div", null, "Estagi\u00E1rio TI"), h("div", null, "R\u00E1dio Inconfid\u00EAncia"), h("div", null, "2022 - 2023")))
            :
                h("div", { class: "experienceTable" }, h("div", null, "Cargo"), h("div", null, "Empresa"), h("div", null, "Ano"), h("div", null, "Full Stack Developer"), h("div", null, "Babita"), h("div", null, "2023 - ATUAL"), h("div", null, "FreeLancer"), h("div", null, "-"), h("div", null, "2023 - ATUAL"), h("div", null, "Estagi\u00E1rio TI"), h("div", null, "R\u00E1dio Inconfid\u00EAncia"), h("div", null, "2022 - 2023")))));
    }
};
MyExperienceComponent.style = myExperienceComponentCss;

export { MyExperienceComponent as my_experience_component };
//# sourceMappingURL=my-experience-component.entry.esm.js.map

//# sourceMappingURL=my-experience-component.entry.js.map