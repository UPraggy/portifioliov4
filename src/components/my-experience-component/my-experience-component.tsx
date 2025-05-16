import { Component, Host, Listen, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'my-experience-component',
  styleUrl: 'my-experience-component.css',
  shadow: true,
})
export class MyExperienceComponent {

  @Prop() responsible: boolean;
  
  @State() windowSize: { width: number; height: number } = {
            width: window.innerWidth,
            height: window.innerHeight,
          };


  @Listen('resize', {target: 'window'})
          getWindowDimensions(){
            console.log("resize")
            this.windowSize = {
              width: window.innerWidth,
              height: window.innerHeight,
            };
          }

  render() {
    return (
      <Host>
        <div class={`mainExperienceContainer ${this.windowSize.width <= 767 ? 'responsiveMobile' : ''}`}>
          <div class="leftDescription">
              <div class="title">Minha Experiência</div>
              <div class="subTitle">Ao longo da minha jornada, tive o prazer de aprender com profissionais brilhantes em organizações excepcionais.</div>
          </div>

          {this.windowSize.width <= 767 ? 
          <div class="experienceTable">
            <div class="experienceLine">
              <div>Cargo</div>
              <div>Empresa</div>
              <div>Ano</div>
            </div>
            <div class="experienceLine">
              <div>Full Stack Developer</div>
              <div>Babita</div>
              <div>2023 - ATUAL</div>
            </div>
            <div class="experienceLine">
              <div>FreeLancer</div>
              <div>-</div>
              <div>2023 - ATUAL</div>
            </div>
            <div class="experienceLine">
              <div>Estagiário TI</div>
              <div>Rádio Inconfidência</div>
              <div>2022 - 2023</div>
            </div>
          </div>
             : 
            
            <div class="experienceTable">
              <div>Cargo</div>
              <div>Empresa</div>
              <div>Ano</div>
              <div>Full Stack Developer</div>
              <div>Babita</div>
              <div>2023 - ATUAL</div>
              <div>FreeLancer</div>
              <div>-</div>
              <div>2023 - ATUAL</div>
              <div>Estagiário TI</div>
              <div>Rádio Inconfidência</div>
              <div>2022 - 2023</div>
            </div>}
        </div> 
      </Host>
    );
  }
}
