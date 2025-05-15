import { Component, Element, Host, Listen, Prop, State, h } from '@stencil/core';
import { animate, onScroll } from 'animejs';

@Component({
  tag: 'my-about-component',
  styleUrl: 'my-about-component.css',
  shadow: true,
})

export class MyAboutComponent {

  @Element() el: HTMLElement;
  @Prop() responsible: boolean;

  @State() windowSize: { width: number; height: number } = {
            width: window.innerWidth,
            height: window.innerHeight,
          };

  getDiv(query){
    return this.el.shadowRoot.querySelector(query)
  }

  componentDidLoad(){
      animate(
        this.getDiv('.leftDescription'),
        {
          translateY: this.windowSize.width <= 767 ? ['300%', '-15%'] : ['300%', '0%'],
          opacity: [0, 1],
          delay: 0,
          ease: 'inOutExpo',
          duration: 1500,
          autoplay: onScroll({ container: this.getDiv('window'), debug: false })
        }
      )

      animate(
        this.getDiv('.rightPhoto'),
        {
          translateX: this.windowSize.width <= 767 ? ['300%', '0%'] : ['300%', '50%'],
          opacity: [0, 1],
          skewX: [-50, 0],
          delay: 0,
          ease: 'inOutExpo',
          duration: 1500,
          autoplay: onScroll({ container: this.getDiv('window'), debug: false })
        }
      )
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
    return (
      <Host>
        <div class={`mainAboutContainer ${this.windowSize.width <= 767 ? 'responsiveMobile' : ''}`}>

          <div class="leftDescription">

            {/* <div class="title">{"< SOBRE >"}</div>      */}
            <div class="textDescription">
              <span> Sou um profissional de programação de Front e BackEnd, que constantemente busca as 
              melhores soluções para proporcionar experiências gratificantes através do meu Design, APIs e interfaces.
                </span> <br /><br />

              Além disso, atuo com planejamento técnico, participando de reuniões estratégicas e 
              desenvolvimento de regras de negócio relacionadas a sistemas. Auxilio também em 
              questões de suporte e treinamentos. <br /><br />

              Busco expressar por meio do meu código e design a preocupação com o usuário final, 
              além de produzir um software escalável e adaptável.</div>  
          </div>

          <div class="rightPhoto"></div>
          </div>
      </Host>
    );
  }
}
