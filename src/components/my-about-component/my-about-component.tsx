import { Component, Element, Host, Listen, h } from '@stencil/core';
import { animate, onScroll } from 'animejs';

@Component({
  tag: 'my-about-component',
  styleUrl: 'my-about-component.css',
  shadow: true,
})

export class MyAboutComponent {

  @Element() el: HTMLElement;

  getDiv(query){
    return this.el.shadowRoot.querySelector(query)
  }

  componentDidLoad(){
      animate(
        this.getDiv('.leftDescription'),
        {
          translateY: ['300%', '0'],
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
          translateX: ['300%', '50%'],
          opacity: [0, 1],
          skewX: [-50, 0],
          delay: 0,
          ease: 'inOutExpo',
          duration: 1500,
          autoplay: onScroll({ container: this.getDiv('window'), debug: false })
        }
      )
  }

  render() {
    return (
      <Host>
        <div class="mainAboutContainer">

          <div class="leftDescription">

            {/* <div class="title">{"< SOBRE >"}</div>      */}
            <div class="textDescription">
              <span> Sou um profissional em programação de Front e BackEnd, que constantemente busca as 
              melhores soluções  e atingir experiências gratificantes através do meu Design, API's e interfaces.
                </span> <br /><br />

              Além disso atuo com planejamento técnico, participando de reuniões estratégicas e 
              regras de negócio relacionada a sistemas, auxilio também em questão de suporte e 
              treinamentos. <br /><br />

              Busco expressar através do meu código e design a preocupação com o usuário final, 
              além de produzir um software escalável e adaptável.</div>  
          </div>

          <div class="rightPhoto"></div>
          </div>
      </Host>
    );
  }
}
