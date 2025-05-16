import { Component, Host, Listen, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'my-footer-component',
  styleUrl: 'my-footer-component.css',
  shadow: true,
})
export class MyFooterComponent {

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
        <div class={`mainFooterContainer ${this.windowSize.width <= 767 ? 'responsiveMobile' : ''}`}>
          <div class="titleFooter">“Compreendendo o <span>passado</span>, estruturando o <span>futuro</span>&nbsp; 
              e otimizando o <span>presente</span>.”</div>

          <div class="bottomFooter">
            <div class="copyIcon"></div>
            <div class="textRights">2024. Todos Direitos Reservados. Design por Rafael Moreira.</div>
          </div>
        </div>
      </Host>
    );
  }
}
