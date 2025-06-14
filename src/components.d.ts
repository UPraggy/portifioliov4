/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IntroButton {
        "onSetchangetext": () => void;
        "playButtonRef"?: (el: HTMLDivElement) => void;
    }
    interface MyAboutComponent {
        "responsible": boolean;
    }
    interface MyCanvasParticleComponent {
        "responsible": boolean;
    }
    interface MyCardskillComponent {
        "responsible": boolean;
    }
    interface MyExperienceComponent {
        "responsible": boolean;
    }
    interface MyFooterComponent {
        "responsible": boolean;
    }
    interface MyHomepage {
    }
    interface MyProjectsComponent {
        "responsible": boolean;
    }
    interface MyProjectscardComponent {
        "projectObj": {
        title: string,
        date: string,
        description: string,
        sinopse: string,
        imagesSlider: string[],
        tecnologias: string,
        funccionality: string
    };
    }
    interface MyRouter {
    }
    interface MyTaypage {
    }
}
declare global {
    interface HTMLIntroButtonElement extends Components.IntroButton, HTMLStencilElement {
    }
    var HTMLIntroButtonElement: {
        prototype: HTMLIntroButtonElement;
        new (): HTMLIntroButtonElement;
    };
    interface HTMLMyAboutComponentElement extends Components.MyAboutComponent, HTMLStencilElement {
    }
    var HTMLMyAboutComponentElement: {
        prototype: HTMLMyAboutComponentElement;
        new (): HTMLMyAboutComponentElement;
    };
    interface HTMLMyCanvasParticleComponentElement extends Components.MyCanvasParticleComponent, HTMLStencilElement {
    }
    var HTMLMyCanvasParticleComponentElement: {
        prototype: HTMLMyCanvasParticleComponentElement;
        new (): HTMLMyCanvasParticleComponentElement;
    };
    interface HTMLMyCardskillComponentElement extends Components.MyCardskillComponent, HTMLStencilElement {
    }
    var HTMLMyCardskillComponentElement: {
        prototype: HTMLMyCardskillComponentElement;
        new (): HTMLMyCardskillComponentElement;
    };
    interface HTMLMyExperienceComponentElement extends Components.MyExperienceComponent, HTMLStencilElement {
    }
    var HTMLMyExperienceComponentElement: {
        prototype: HTMLMyExperienceComponentElement;
        new (): HTMLMyExperienceComponentElement;
    };
    interface HTMLMyFooterComponentElement extends Components.MyFooterComponent, HTMLStencilElement {
    }
    var HTMLMyFooterComponentElement: {
        prototype: HTMLMyFooterComponentElement;
        new (): HTMLMyFooterComponentElement;
    };
    interface HTMLMyHomepageElement extends Components.MyHomepage, HTMLStencilElement {
    }
    var HTMLMyHomepageElement: {
        prototype: HTMLMyHomepageElement;
        new (): HTMLMyHomepageElement;
    };
    interface HTMLMyProjectsComponentElement extends Components.MyProjectsComponent, HTMLStencilElement {
    }
    var HTMLMyProjectsComponentElement: {
        prototype: HTMLMyProjectsComponentElement;
        new (): HTMLMyProjectsComponentElement;
    };
    interface HTMLMyProjectscardComponentElement extends Components.MyProjectscardComponent, HTMLStencilElement {
    }
    var HTMLMyProjectscardComponentElement: {
        prototype: HTMLMyProjectscardComponentElement;
        new (): HTMLMyProjectscardComponentElement;
    };
    interface HTMLMyRouterElement extends Components.MyRouter, HTMLStencilElement {
    }
    var HTMLMyRouterElement: {
        prototype: HTMLMyRouterElement;
        new (): HTMLMyRouterElement;
    };
    interface HTMLMyTaypageElement extends Components.MyTaypage, HTMLStencilElement {
    }
    var HTMLMyTaypageElement: {
        prototype: HTMLMyTaypageElement;
        new (): HTMLMyTaypageElement;
    };
    interface HTMLElementTagNameMap {
        "intro-button": HTMLIntroButtonElement;
        "my-about-component": HTMLMyAboutComponentElement;
        "my-canvas-particle-component": HTMLMyCanvasParticleComponentElement;
        "my-cardskill-component": HTMLMyCardskillComponentElement;
        "my-experience-component": HTMLMyExperienceComponentElement;
        "my-footer-component": HTMLMyFooterComponentElement;
        "my-homepage": HTMLMyHomepageElement;
        "my-projects-component": HTMLMyProjectsComponentElement;
        "my-projectscard-component": HTMLMyProjectscardComponentElement;
        "my-router": HTMLMyRouterElement;
        "my-taypage": HTMLMyTaypageElement;
    }
}
declare namespace LocalJSX {
    interface IntroButton {
        "onSetchangetext"?: () => void;
        "playButtonRef"?: (el: HTMLDivElement) => void;
    }
    interface MyAboutComponent {
        "responsible"?: boolean;
    }
    interface MyCanvasParticleComponent {
        "responsible"?: boolean;
    }
    interface MyCardskillComponent {
        "responsible"?: boolean;
    }
    interface MyExperienceComponent {
        "responsible"?: boolean;
    }
    interface MyFooterComponent {
        "responsible"?: boolean;
    }
    interface MyHomepage {
    }
    interface MyProjectsComponent {
        "responsible"?: boolean;
    }
    interface MyProjectscardComponent {
        "projectObj"?: {
        title: string,
        date: string,
        description: string,
        sinopse: string,
        imagesSlider: string[],
        tecnologias: string,
        funccionality: string
    };
    }
    interface MyRouter {
    }
    interface MyTaypage {
    }
    interface IntrinsicElements {
        "intro-button": IntroButton;
        "my-about-component": MyAboutComponent;
        "my-canvas-particle-component": MyCanvasParticleComponent;
        "my-cardskill-component": MyCardskillComponent;
        "my-experience-component": MyExperienceComponent;
        "my-footer-component": MyFooterComponent;
        "my-homepage": MyHomepage;
        "my-projects-component": MyProjectsComponent;
        "my-projectscard-component": MyProjectscardComponent;
        "my-router": MyRouter;
        "my-taypage": MyTaypage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "intro-button": LocalJSX.IntroButton & JSXBase.HTMLAttributes<HTMLIntroButtonElement>;
            "my-about-component": LocalJSX.MyAboutComponent & JSXBase.HTMLAttributes<HTMLMyAboutComponentElement>;
            "my-canvas-particle-component": LocalJSX.MyCanvasParticleComponent & JSXBase.HTMLAttributes<HTMLMyCanvasParticleComponentElement>;
            "my-cardskill-component": LocalJSX.MyCardskillComponent & JSXBase.HTMLAttributes<HTMLMyCardskillComponentElement>;
            "my-experience-component": LocalJSX.MyExperienceComponent & JSXBase.HTMLAttributes<HTMLMyExperienceComponentElement>;
            "my-footer-component": LocalJSX.MyFooterComponent & JSXBase.HTMLAttributes<HTMLMyFooterComponentElement>;
            "my-homepage": LocalJSX.MyHomepage & JSXBase.HTMLAttributes<HTMLMyHomepageElement>;
            "my-projects-component": LocalJSX.MyProjectsComponent & JSXBase.HTMLAttributes<HTMLMyProjectsComponentElement>;
            "my-projectscard-component": LocalJSX.MyProjectscardComponent & JSXBase.HTMLAttributes<HTMLMyProjectscardComponentElement>;
            "my-router": LocalJSX.MyRouter & JSXBase.HTMLAttributes<HTMLMyRouterElement>;
            "my-taypage": LocalJSX.MyTaypage & JSXBase.HTMLAttributes<HTMLMyTaypageElement>;
        }
    }
}
