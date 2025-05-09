import { Component, Element, Host, Listen, State, h } from '@stencil/core';
import { Cirle } from '../../utils/utils';

@Component({
  tag: 'my-canvas-particle-component',
  styleUrl: 'my-canvas-particle-component.css',
  shadow: true,
})


export class MyCanvasParticleComponent{

  @Element() el: HTMLElement;
  @State() statusAnimation:boolean = true;



  componentDidLoad(){
    this.allCircleAnimation()
  }

  allCircleAnimation(){
    const canvaElement = this.el.shadowRoot.querySelector('.canvaMainElement') as HTMLCanvasElement;

    const canvaDivMain = this.el.shadowRoot.querySelector('.canvaSubMain') as HTMLDivElement;

    if(canvaDivMain){
      // console.log(canvaDivMain)
      canvaElement.width = canvaDivMain.clientWidth;
      canvaElement.height = canvaDivMain.clientHeight;
  
      let canvaContext = canvaElement.getContext('2d')
      let circlesArray = []

      for (let x= 0; x<80; x++){
        const randPos = (size) => Math.random() * size
        circlesArray.push(new Cirle({x: randPos(canvaElement.clientWidth), y: randPos(canvaElement.clientHeight), 
          dx: (Math.random() < 0.5 ? -1 : 1) * 2, dy: (Math.random() < 0.5 ? -1 : 1) * 2, 
          radius: Number((Math.random() * 5).toFixed(0)), color: (Math.random() < 0.5 ? '#FAF9F6' : Math.random() < 0.5 ? '#A259FF' : '#00D8FF') , 
          canvaContext, canvaElement: canvaDivMain}))
      }

      this.animateCircles(canvaContext, canvaDivMain, circlesArray)

    }
  }

  @Listen('scroll', { target: 'window' })
  getScroolPosition(){

    const canvaElement = this.el.shadowRoot.querySelector('.canvaMainElement') as HTMLCanvasElement;

    if (!canvaElement) return;

    const rect = canvaElement.getBoundingClientRect();
    const scrollY = window.scrollY;
    const canvaBottom = rect.top + scrollY + rect.height;

    if (scrollY > canvaBottom) {
      this.statusAnimation = false;
    }else if(this.statusAnimation == false){
      this.statusAnimation = true;
      this.allCircleAnimation()
    }
  }

  animateCircles(canvaContext, canvaSize, circlesArray){
    if(!this.statusAnimation) return;
    requestAnimationFrame(() => this.animateCircles(canvaContext, canvaSize, circlesArray));
    canvaContext.clearRect(0,0,canvaSize.clientWidth ,canvaSize.clientHeight);

    circlesArray.forEach(circle => {
      circle.update()
    });
  }

  render() {
    return (
      <Host>
        <div class="canvaSubMain">
          <canvas class="canvaMainElement">
          </canvas>
        </div>
      </Host>
    );
  }
}
