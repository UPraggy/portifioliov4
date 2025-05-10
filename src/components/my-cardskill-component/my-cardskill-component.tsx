import { Component, Element, h, Host, State } from '@stencil/core';
import { circularPath, randomIntFromRange } from '../../utils/utils';
import { animate, onScroll, stagger } from 'animejs';

@Component({
  tag: 'my-cardskill-component',
  styleUrls: ['./my-cardskill-component.css', '../../global/colors.css'],
  shadow: true,
})
export class MyCardSkillComponent{

  @Element() el: HTMLElement;
  @State() incrementRadius: number = 0;
  @State() mousePos: {x:number, y:number};

  getDiv(query){
    return this.el.shadowRoot.querySelector(query)
  }

  getDivs(query){
    return this.el.shadowRoot.querySelectorAll(query)
  }

  componentDidLoad(){
    const canvasDivElement = this.getDiv('.mainCardSkillContainer') as HTMLDivElement;
    const canvasElement = this.getDiv('.blackHoleMainSkill') as HTMLCanvasElement;
  
    if(canvasDivElement){
      canvasElement.width = canvasDivElement.clientWidth;
      canvasElement.height = canvasDivElement.clientHeight;
      this.createBlackHole({canvasElement})
    }

     animate(
        this.getDivs('.gridSkills .cardSkill'),
        {
          translateY: ['300%', '0'],
          opacity: [0, 1],
          ease: 'inOutExpo',
          duration: 1000,
          autoplay: onScroll({ container: this.getDiv('window'), debug: false }),
          delay: stagger(100),
        }
      )

  }

  createBlackHole({canvasElement}:
    {canvasElement: HTMLCanvasElement}
  ) {
      const ctx = canvasElement.getContext('2d') as CanvasRenderingContext2D;
      const circleArray = []
  //     x: randomIntFromRange(canvasElement.width*0.10,canvasElement.width*0.15), //+ j+20,
  //     y: randomIntFromRange(canvasElement.width*0.10,canvasElement.width*0.15),//+ j+20,
  // }, 
  //     x: canvasElement.width/2,
  //     y: canvasElement.height/2, 
      
      for (let j = 0; j < 50; j++){
        circleArray.push(new circularPath(
          {canvaContext: ctx, distanceFromCenter: {
            x: randomIntFromRange(canvasElement.width*0.20,canvasElement.width*0.25), //+ j+20,
            y: randomIntFromRange(canvasElement.height*0.20,canvasElement.height*0.25),//+ j+20,
        }, 
            x: canvasElement.width/2,
            y: canvasElement.height/2, 
            radius: 7, 
            color: j%2 == 0 ? '#2D0066': '#FFFFFF', 
            velocity: 0.02}))

        circleArray.push(new circularPath(
          {canvaContext: ctx, distanceFromCenter: {
            x: randomIntFromRange(canvasElement.width*0.15,canvasElement.width*0.20), //+ j+20,
            y: randomIntFromRange(canvasElement.height*0.15,canvasElement.height*0.20),//+ j+20,
        }, 
            x: canvasElement.width/2,
            y: canvasElement.height/2 + (canvasElement.height/2*0.1),  
            radius: 5, 
            color: j%2 == 0 ? '#2D0066': '#FFFFFF', 
            velocity: 0.02}))

        circleArray.push(new circularPath(
          {canvaContext: ctx, distanceFromCenter: {
            x: randomIntFromRange(canvasElement.width*0.15,canvasElement.width*0.20), //+ j+20,
            y: randomIntFromRange(canvasElement.height*0.15,canvasElement.height*0.20),//+ j+20,
        }, 
            x: canvasElement.width/2,
            y: canvasElement.height/2 + (canvasElement.height/2*0.2),  
            radius: 5, 
            color: j%2 == 0 ? '#2D0066': '#FFFFFF', 
            velocity: 0.02}))
          
        circleArray.push(new circularPath(
          {canvaContext: ctx, distanceFromCenter: {
            x: randomIntFromRange(canvasElement.width*0.10,canvasElement.width*0.15), //+ j+20,
            y: randomIntFromRange(canvasElement.height*0.10,canvasElement.height*0.15),//+ j+20,
        }, 
            x: canvasElement.width/2,
            y: canvasElement.height/2 + (canvasElement.height/2*0.3), 
            radius: 5, 
            color: j%2 == 0 ? '#2D0066': '#FFFFFF', 
            velocity: 0.02}))

        circleArray.push(new circularPath(
          {canvaContext: ctx, distanceFromCenter: {
            x: randomIntFromRange(canvasElement.width*0.05,canvasElement.width*0.10), //+ j+20,
            y: randomIntFromRange(canvasElement.height*0.05,canvasElement.height*0.10),//+ j+20,
        }, 
            x: canvasElement.width/2,
            y: canvasElement.height/2 + (canvasElement.height/2*0.4), 
            radius: 5, 
            color: j%2 == 0 ? '#2D0066': '#FFFFFF', 
            velocity: 0.02}))
      }
      ctx.fillStyle = 'rgba(11, 18, 21, 1)';
      ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);

      this.animateBlackHole(circleArray, ctx, canvasElement)
    }
    
    animateBlackHole(circleArray, ctx, canvasElement){

    // Limpa completamente a cada 10 frames
      ctx.fillStyle = 'rgba(11, 18, 21, 0.3)';
      ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);


    requestAnimationFrame(() => this.animateBlackHole(circleArray, ctx, canvasElement));
    for (let j = 0; j < circleArray.length; j++){
      circleArray[j].update()
    }
  }

  
  hoverSkillCard(event){
    const card = event.currentTarget.querySelector(':scope > .cardBack') as HTMLElement;
    const text = event.currentTarget.querySelector(':scope > .textBottom') as HTMLElement;

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

mouseLeaveSkillCard(event){
  const card = event.currentTarget.querySelector(':scope > .cardBack') as HTMLElement;
  const text = event.currentTarget.querySelector(':scope > .textBottom') as HTMLElement;

    animate([card,text], {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      duration: 0.2,
      easing: 'ease-out'
    });
    }


    
  

  render() {
    return <Host>
      <div class="mainCardSkillContainer">
              <canvas class="blackHoleMainSkill"></canvas>
              <div class="titleSkills">Habilidades</div>

              <div class="gridSkills">
            <div class="cardSkill React" onMouseMove={(event)=>this.hoverSkillCard(event)}
                onMouseLeave={(event)=>this.mouseLeaveSkillCard(event)}>
                <div class="cardBack"></div>

                <div class="imageBorder">
                  <div class="imageCenter"></div>
                </div>
                <div class="textBottom">React</div>

            </div>
            <div class="cardSkill GitGitHub"
            onMouseMove={(event)=>this.hoverSkillCard(event)}
                onMouseLeave={(event)=>this.mouseLeaveSkillCard(event)}>
                <div class="cardBack"></div>

                <div class="imageBorder">
                  <div class="imageCenter"></div>
                </div>
                <div class="textBottom">Git/GitHub</div>

            </div>
            <div class="cardSkill PostgresSql"
                onMouseMove={(event)=>this.hoverSkillCard(event)}
                onMouseLeave={(event)=>this.mouseLeaveSkillCard(event)}>
                <div class="cardBack" ></div>

                <div class="imageBorder">
                  <div class="imageCenter"></div>
                </div>
                <div class="textBottom">PostgresSql</div>

            </div>
            <div class="cardSkill NodeJs"
                onMouseMove={(event)=>this.hoverSkillCard(event)}
                onMouseLeave={(event)=>this.mouseLeaveSkillCard(event)}>
                <div class="cardBack" ></div>

                <div class="imageBorder">
                  <div class="imageCenter"></div>
                </div>
                <div class="textBottom">NodeJs</div>

            </div>
            <div class="cardSkill Stencil"
                onMouseMove={(event)=>this.hoverSkillCard(event)}
                onMouseLeave={(event)=>this.mouseLeaveSkillCard(event)}>
                <div class="cardBack" ></div>

                <div class="imageBorder">
                  <div class="imageCenter"></div>
                </div>
                <div class="textBottom">Stencil</div>

            </div>
            <div class="cardSkill Linux"
                onMouseMove={(event)=>this.hoverSkillCard(event)}
                onMouseLeave={(event)=>this.mouseLeaveSkillCard(event)}>
                <div class="cardBack" ></div>

                <div class="imageBorder">
                  <div class="imageCenter"></div>
                </div>
                <div class="textBottom">Linux</div>

            </div>
            <div class="cardSkill Figma"
                onMouseMove={(event)=>this.hoverSkillCard(event)}
                onMouseLeave={(event)=>this.mouseLeaveSkillCard(event)}>
                <div class="cardBack" ></div>

                <div class="imageBorder">
                  <div class="imageCenter"></div>
                </div>
                <div class="textBottom">Figma</div>

            </div>
            <div class="cardSkill Java"
                onMouseMove={(event)=>this.hoverSkillCard(event)}
                onMouseLeave={(event)=>this.mouseLeaveSkillCard(event)}>
                <div class="cardBack" ></div>

                <div class="imageBorder">
                  <div class="imageCenter"></div>
                </div>
                <div class="textBottom">Java</div>
            </div>

            <div class="cardSkill Oracle"
                onMouseMove={(event)=>this.hoverSkillCard(event)}
                onMouseLeave={(event)=>this.mouseLeaveSkillCard(event)}>
                <div class="cardBack" ></div>

                <div class="imageBorder">
                  <div class="imageCenter"></div>
                </div>
                <div class="textBottom">OracleSql</div>
            </div>

            <div class="cardSkill Python"
                onMouseMove={(event)=>this.hoverSkillCard(event)}
                onMouseLeave={(event)=>this.mouseLeaveSkillCard(event)}>
                <div class="cardBack" ></div>

                <div class="imageBorder">
                  <div class="imageCenter"></div>
                </div>
                <div class="textBottom">Python</div>
            </div>
          </div>
          </div>
    </Host>
  }
}
