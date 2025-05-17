import { r as registerInstance, g as getElement, h, a as Host } from './index-B0epqJa_.js';

function projectStaticObject() {
    this.projectsListObj = [
        {
            title: 'QUERY BOARD',
            date: '04/2025',
            description: `<div class="description">
                Um sistema inteligente que usa LLM (Language Model) para interpretar a estrutura real do seu banco de dados 
                incluindo tabelas e relacionamentos e retornar esses dados. <br/><br/> Inicialmente feito o BackEnd e com o 
                objetivo de ter um Front responsivo que gera os DashBoards de acordo com os dados obtidos, através de perguntas 
                ou montagens manuais.
            </div>`,
            sinopse: 'Um sistema inteligente que usa LLM (Language Model) para interpretar a estrutura real do seu banco de dados  incluindo tabelas e relacionamentos e retornar esses dados.',
            imagesSlider: [
                "url('/portifioliov4/static/imgs/project/queryBoard1.png')",
                "url('/portifioliov4/static/imgs/project/queryBoard2.png')",
                "url('/portifioliov4/static/imgs/project/queryBoard3.png')"
            ],
            tecnologias: 'NodeJs - LLM - Ollama - IA - WebSocket',
            funccionality: 'https://www.linkedin.com/posts/rafael-moreira-ramos-de-rezende-16420b21b_apresentando-o-queryboard-sua-pergunta-activity-7320077577799327745-EQE9?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdh0xwBdIu6TW2euY9gRDD7CyR_85V0-hE'
        },
        {
            title: 'BH Tour Assistant',
            date: '03/2025',
            description: `<div class="description">
                Uma assistente virtual com foco em ser o melhor guia turístico de BH, para moradores ou turistas 
                oferecerendo informações de lugares diversos, para sair em Bh, inicialmente feito no campo de museus, 
                ele tem o poder de interpretar perguntas e retornar através de uma base o museu, horários, se está aberto 
                ou qual está aberto no momento.
            </div>`,
            sinopse: 'Uma assistente virtual com foco em ser o melhor guia turístico de BH, para moradores ou turistas',
            imagesSlider: [
                "url('/portifioliov4/static/imgs/project/bhTour1.png')",
                "url('/portifioliov4/static/imgs/project/bhTour2.png')",
                "url('/portifioliov4/static/imgs/project/bhTour3.png')"
            ],
            tecnologias: 'React - NodeJs - NLP - IA - WebSocket - Figma',
            funccionality: 'https://www.linkedin.com/posts/rafael-moreira-ramos-de-rezende-16420b21b_frontend-ux-chatbot-activity-7313322726457274368-K6XC?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdh0xwBdIu6TW2euY9gRDD7CyR_85V0-hE'
        },
        {
            title: 'Site Igreja São Pedro V2',
            date: '07/2024',
            description: `<div class="description">
                Um app voluntário desenvolvido para a Igreja São Pedro, com foco na reformulação do design e 
                integração de uma Bíblia Digital via API própria, liturgia diária, informações da comunidade, 
                como horário, pastorais e mais. Criado como site para reduzir custos, o projeto envolveu tecnologias 
                como React, Node, MongoDB, Firebase e Figma. Voltado à comunidade, permitiu a prática de design intuitivo, 
                levantamento de requisitos e apresentação em mockup 3D.
            </div>`,
            imagesSlider: [
                "url('/portifioliov4/static/imgs/project/siteIgrejaSaoPedro.png')"
            ],
            sinopse: 'Um app voluntário e FreeLancer com acesso a Bíblia, Liturgia diária e informações sobre a comunidade através de uma API',
            tecnologias: 'React - NodeJs - RestAPI - Figma - FireBase - NoSql - MongoDb',
            funccionality: 'https://igrejasaopedroapp.web.app/'
        },
        // {
        //   title: 'SafiraShop',
        //   date: '06/2023',
        //   description: <div class="description">
        //       Um sistema inteligente que usa LLM (Language Model) para interpretar a estrutura real do seu banco de dados 
        //       incluindo tabelas e relacionamentos e retornar esses dados. <br/><br/> Inicialmente feito o BackEnd e com o 
        //       objetivo de ter um Front responsivo que gera os DashBoards de acordo com os dados obtidos, através de perguntas 
        //       ou montagens manuais.
        //   </div>,
        //   sinopse: '',
        //   imagesSlider: [],
        //   tecnologias: 'React - NodeJs - RestAPI - Figma - FireBase - NoSql - MongoDb'
        // }
    ];
}

const myProjectsComponentCss = ":host{display:block}.projectsContainer{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;min-height:10vh;padding:15vh 0 10vh 0}.projectsContainer>.divisor{width:50%;height:3px;background-color:var(--whiteBone-home-color)}.projectsContainer>.title{width:50%;height:3px;font-family:\"Poppins\", sans-serif;color:var(--whiteBone-home-color);font-size:2em;font-weight:500;text-align:center;margin-top:60px}.projectsContainer .projectSlider{display:flex;flex-direction:column;align-items:center;width:100%;margin-top:70px}.projectsContainer .projectSlider .divisor{width:80%;height:1px;background-color:var(--whiteBone-home-color)}.projectsContainer .projectCardComponent{width:100%}.projectsContainer .cardProject,.projectsContainer .projectWrapper{display:flex;flex-direction:column;align-items:center;width:100%;color:var(--whiteBone-home-color)}.projectsContainer .cardProject .topCard{display:grid;grid-template-columns:40% 55% 5%;align-items:center;width:80%;padding:20px 0;user-select:none;transition:all 1s}.projectsContainer .cardProject .topCard .info1{display:flex;align-items:flex-end;justify-content:flex-start;width:100%;transition:all 1s}.projectsContainer .cardProject .topCard .info1 .title{font-size:1.5em;margin-right:7px;letter-spacing:0;line-height:1;font-family:'Fugaz One', sans-serif;font-weight:900;font-style:italic}.projectsContainer .cardProject .topCard .info1 .date{font-size:1em;letter-spacing:0;line-height:1}.projectsContainer .projectWrapper .openCard{display:flex;justify-content:center;align-items:center;width:30px;height:2px;background-color:var(--whiteBone-home-color);margin:0 auto;cursor:pointer;transition:all 1s}.projectsContainer .projectWrapper .openCard::before{position:absolute;content:'';width:30px;height:30px;background-color:transparent;margin:0 auto}.projectsContainer .projectWrapper .openCard:not(.active)::after{content:'';width:2px;height:30px;background-color:var(--whiteBone-home-color)}.projectsContainer .cardProject .topCard.showcard{display:grid;grid-template-columns:95% 5%;background-color:var(--whiteBone-home-color);color:var(--blueDark3-home-color)}.projectsContainer .cardProject .topCard.showcard .info1{justify-content:center}.projectsContainer .projectWrapper .topCard.showcard .openCard::after{display:none}.projectsContainer .projectWrapper .topCard.showcard .openCard{background-color:var(--blueDark3-home-color)}.projectsContainer .projectWrapper .info{display:grid;grid-template-columns:40% 55%;grid-gap:5%;margin:15px 0 20px 0;width:78%;position:relative}.projectsContainer .projectWrapper .info .leftCard{position:relative;transform:translateX(-150%)}.projectsContainer .projectWrapper .info .rightCard{position:relative;transform:translateX(150%)}.projectsContainer .projectWrapper .info .description{font-family:\"Neuton\", serif;font-weight:400;font-size:1.5em;user-select:none}.projectsContainer .projectWrapper .info .image{width:100%;aspect-ratio:2/1;background:var(--imageSliderProject) no-repeat center/contain}.projectsContainer .projectWrapper .info .viewInfoCard,.projectsContainer .projectWrapper .info .tecnologiesCard{width:94%;background-color:var(--blueLinkedIn-color);padding:5px 3%;margin-top:20px;border-radius:5px;font-family:\"Fugaz One\", sans-serif;font-weight:700}.projectsContainer .projectWrapper .info .viewInfoCard{background-color:var(--blueGreen-light-color);cursor:pointer;user-select:none;width:fit-content}";

const MyProjectsComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    responsible;
    windowSize = {
        width: window.innerWidth,
        height: window.innerHeight,
    };
    projectsListObj = (new projectStaticObject).projectsListObj;
    getWindowDimensions() {
        console.log("resize");
        this.windowSize = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }
    render() {
        return (h(Host, { key: 'c5cea838b6089275494d1e5c42630242483b7c51' }, h("div", { key: 'fe4410e4ed778058c51494e7ef4fb6b177fc2317', class: `projectsContainer ${this.windowSize.width <= 767 ? 'responsiveMobile' : ''}` }, h("div", { key: 'f7d557ccd0235b7363b89841f008b316a127f55f', class: "divisor" }), h("p", { key: 'c9bf08cb122841b6d1178d6f955b955bbf4e3685', class: "title" }, "Projetos Recentes"), h("div", { key: '61d8d49056e400e16f39e17d358073052c99ebd4', class: "projectSlider" }, h("div", { key: '80944898bf2437c378d86ab0dbcc3461702589f4', class: "divisor" }), this.projectsListObj.map(projectObj => {
            return h("my-projectscard-component", { class: "projectCardComponent", projectObj: projectObj });
        })))));
    }
};
MyProjectsComponent.style = myProjectsComponentCss;

export { MyProjectsComponent as my_projects_component };
//# sourceMappingURL=my-projects-component.entry.esm.js.map

//# sourceMappingURL=my-projects-component.entry.js.map