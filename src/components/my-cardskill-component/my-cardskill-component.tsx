import { Component, Element, h, Host, Listen, State } from '@stencil/core';
import { circularPath, randomIntFromRange } from '../../utils/utils';

@Component({
  tag: 'my-cardskill-component',
  styleUrls: ['./my-cardskill-component.css', '../../global/colors.css'],
  shadow: true,
})
export class MyCardSkillComponent{

  @Element() el: HTMLElement;
  @State() incrementRadius: number = 0;
  @State() mousePos: {x:number, y:number};

  componentDidLoad(){
    const canvasDivElement = this.el.shadowRoot.querySelector('.mainCardSkillContainer') as HTMLDivElement;
    const canvasElement = this.el.shadowRoot.querySelector('.blackHoleMainSkill') as HTMLCanvasElement;
  
    if(canvasDivElement){
      canvasElement.width = canvasDivElement.clientWidth;
      canvasElement.height = canvasDivElement.clientHeight;
      this.createBlackHole({canvasElement})
    }
  }

  @Listen('mousemove', { target: 'window' })
  mouseMove(event: MouseEvent){
    this.mousePos = {
      x: event.clientX,
      y: event.clientY
    };
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
      
      for (let j = 0; j < 20; j++){
        circleArray.push(new circularPath(
          {canvaContext: ctx, distanceFromCenter: {
            x: randomIntFromRange(300*0.10,300*0.15), //+ j+20,
            y: randomIntFromRange(300*0.10,300*0.15),//+ j+20,
        }, 
            x: canvasElement.width/2,
            y: canvasElement.height/2, 
            radius: 4, 
            color: j%2 == 0 ? '#3357CC': '#FFFFFF', 
            velocity: 0.04}))
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
      circleArray[j].update(this.mousePos)
    }
  }
  

  render() {
    return <Host>
      <div class="mainCardSkillContainer">
              <canvas class="blackHoleMainSkill"></canvas>
              <div class="titleSkills">Habilidades</div>
          </div>
    </Host>
  }
}
