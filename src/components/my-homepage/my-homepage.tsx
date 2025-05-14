import { Component, Element, h, Host, Listen, State } from '@stencil/core';
import {returnSizeClientDiv, splitTextContentSpan} from '../../utils/utils'
import { animate, stagger  } from 'animejs';

@Component({
  tag: 'my-homepage',
  styleUrls: ['./my-homepage.css', './my-homepage-mobile.css', '../../global/colors.css', '../../global/fonts.css'],
  shadow: true,
})




export class MyHomePage{

  @Element() el: HTMLElement;

  private topPathRef: HTMLDivElement;
  private leftPathRef: HTMLDivElement;

  @State() windowSize: { width: number; height: number } = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

  componentDidLoad() {
    console.log('render')

    if(!this.windowSize.width) return;
    splitTextContentSpan(this.el, '.mainShapeContent .textProfission')

    let leftPathSize = returnSizeClientDiv({ref: this.leftPathRef})

    let leftPathVar = this.windowSize.width > 767 ? [`"M 0,0 L ${leftPathSize.width},0 L ${leftPathSize.width},${leftPathSize.height} L 0,${leftPathSize.height} L 0,0"`,
          `"M 0,0 L ${leftPathSize.width},${leftPathSize.height*0.1} L ${leftPathSize.width},${leftPathSize.height * 0.9} L 0,${leftPathSize.height} L 0,0"`,
        ] : [`"M ${leftPathSize.width},0 L 0,0 L 0,${leftPathSize.height} L ${leftPathSize.width},${leftPathSize.height} L ${leftPathSize.width},0"`,
          `"M ${leftPathSize.width},0 L 0,${leftPathSize.height*0.1} L 0,${leftPathSize.height * 0.9} L ${leftPathSize.width},${leftPathSize.height} L ${leftPathSize.width},0"`,
        ]

    animate(
      this.el.shadowRoot.querySelector('.mainShapeContent .leftPath'),
      {
        '--leftPath': leftPathVar,
        easing: 'easeInOutQuad',
        duration: 500,
      }
    );

    let topPathSize = returnSizeClientDiv({ref: this.topPathRef})

    let topPathVar = [`"M 0,0 L ${topPathSize.width},0 L ${topPathSize.width},${topPathSize.height} L 0,${topPathSize.height} L 0,0"`,
          `"M 0,0 L ${topPathSize.width},0 L ${topPathSize.width * 0.8},${topPathSize.height} L ${topPathSize.width * 0.2},${topPathSize.height} L 0,0"`,
        ]

    animate(
      this.el.shadowRoot.querySelector('.mainShapeContent .topPath'),
      {
        '--topPath': topPathVar,
        easing: 'easeInOutQuad',
        duration: 900,
      }
    );

    animate(
      this.el.shadowRoot.querySelectorAll('.mainShapeContent .textProfission span'),
      {
        display: 'inline-block',
        translateY: ['10%', '0'],
        opacity: [0,1],
        easing: 'easeInOut',
        duration: 30,
        delay: stagger(60)
      }
    );
  }

  hoverCurriculumBtn(typeMouse: string){
      console.log("FUNCTION CALL" + typeMouse)
      if (typeMouse == 'Enter') {
        animate(
          this.el.shadowRoot.querySelector('.curriculumBtn .arrow'),
          {
            translateX: ['-300%', '0%'],
            easing: 'easeInOutQuad',
            duration: 500,
          }
        );
    }
  }

  pathPerfilPhotoOrbit({width, height}: {width: number, height: number}): string{
    const widthround = (percentage) => (width*percentage).toFixed(2)
    const heightround = (percentage) => (height*percentage).toFixed(2)

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
     Z`
    }
    
    @Listen('resize', {target: 'window'})
    getWindowDimensions(){
      console.log("resize")
      this.windowSize = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    
    render() {
      return <Host>
      <div class="homePageContent">

        <div class={`mainShapeContent ${this.windowSize.width <= 767 ? 'responsiveMobile' : ''}`} >

          <div class="InitialView">


        <my-canvas-particle-component class="canvaMain" responsible={this.windowSize.width <= 767}/>
            
           <div class="topPath" ref={el => this.topPathRef = el as HTMLDivElement}>
              <p class="namePortfolio">RAFAEL MOREIRA</p>
            </div>

            <div class="leftPath" ref={el => this.leftPathRef = el as HTMLDivElement}>
              <div class="socials">
                  <div class="emailCircle" onClick={()=>window.location.href="mailto:rafaelmoreira2001ofc@gmail.com"}><div></div></div>
                  <div class="social2Group">
                      <div class="linkedInIcon" onClick={()=>window.location.href="https://www.linkedin.com/in/rafael-moreira-ramos-de-rezende-16420b21b/"}><div></div></div>
                      <div class="gitIcon" onClick={()=>window.location.href="https://github.com/UPraggy"}><div></div></div>
                  </div>
              </div>
            </div>

           {this.windowSize.width > 767 ? <div class="rightPath">
                <div class="bordText">Não é só código ou design. É sobre entender, adaptar e conectar.</div>
            </div> : '' }

            <div class="mainContentDescrpt">

              {this.windowSize.width <= 767 ? <div class="descPath">
                  <div class="bordText">Não é só código ou design. É sobre entender, adaptar e conectar.</div>
              </div> : '' }
                <div class="left">
                  <div class="textProfission">Full Stack Developer & Designer</div>

                  <div class="curriculumBtn" onClick={()=>window.location.href="/static/docs/RafaelMoreira_Curriculo_25042025.pdf"}
                    onMouseEnter={()=>this.hoverCurriculumBtn('Enter')}>
                    <div class="text">MY CURRICULUM</div>
                    <div class="arrow">
                      <div class="lineArrow"></div>
                      <div class="pointArrow"></div>
                    </div>
                  </div>
                </div>
                <div class="center">
                  <div class="perfilPhoto"></div>
                </div>
              
            </div> 
         </div> 



          <my-cardskill-component class="habilidadeComponent" />

          <my-about-component class="aboutComponent" />

          <my-projects-component class="projectComponent"/> 
          
          <my-experience-component class="experienceComponent"/>

          <my-footer-component class="footerComponent"/>

        </div>
      </div>
    </Host>
  }
}
