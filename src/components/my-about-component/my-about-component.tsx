import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-about-component',
  styleUrl: 'my-about-component.css',
  shadow: true,
})

export class MyAboutComponent {
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
              regras de negócio relacionado a sistemas, auxilio também em questão de suporte e 
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
