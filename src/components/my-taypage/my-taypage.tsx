import { Component, Element, Host, State, h } from '@stencil/core';
import { taypageStaticObject } from './my-taypage-objects';


@Component({
  tag: 'my-taypage',
  styleUrls: ['./my-taypage.css', '../../global/colors.css', '../../global/fonts.css'],
  shadow: true,
})



export class MyTaypage {

  @State() tempoDecorrido = this.calcularTempoRestante("2024-10-18T22:00:00")
  @State() tempoDecorridoNamoro = this.calcularTempoRestante("2024-12-08T22:00:00")


  @State() slideController: number = 0;
  @State() changeText: number = 0;
  @State() changeAnimation: string = '';
  @State() changeAnimation2: string = '';

  @State() windowSize: { width: number; height: number } = {
          width: window.innerWidth,
          height: window.innerHeight,
        };

  private intervalo1: any;
  private intervalo2: any;
  private intervaloSlider: any;
  private imagesCountMax: number = 5; // exemplo fixo
  private imagesArr: any = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', 
          '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', 
          '17.jpg', '18.jpg', '19.jpg', '20.jpg','21.jpg','22.jpg','23.jpg','24.jpg','25.jpg','26.jpg',
        '27.jpg','28.jpg','29.jpg','30.jpg','31.jpg','32.jpg','33.jpg','34.jpg','35.jpg','36.jpg','37.jpg'
      ,'38.jpg'];


  @Element() el: HTMLElement;
  audioRef: HTMLAudioElement;
  playButtonRef: HTMLButtonElement;

  private taypageListObj = (new taypageStaticObject).taypageListObj
  @State() changeTextList: number = 0;

  handleNextRandomText = () => {
  const maxIndex = this.taypageListObj.length;
  const randomIndex = Math.floor(Math.random() * maxIndex);

  this.changeTextList = randomIndex;
  }

  calcularTempoRestante(dataInicial) {
      const agora:Date = new Date();
      const alvo:Date = new Date(dataInicial);
      
      // Se a data inicial for no futuro, retorna tudo zero
      if (agora < alvo) {
        return { anos: 0, meses: 0, dias: 0, horas: 0, minutos: 0, segundos: 0 };
      }
    
      // Calculando a diferença em anos
      let anos = agora.getFullYear() - alvo.getFullYear();
      let meses = agora.getMonth() - alvo.getMonth();
      let dias = agora.getDate() - alvo.getDate();
    
      // Ajustar se o mês ainda não foi atingido no ano atual
      if (meses < 0) {
        anos -= 1;
        meses += 12;
      }
    
      // Ajustar se o dia ainda não foi atingido no mês atual
      if (dias < 0) {
        const ultimoDiaMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate(); // Último dia do mês anterior
        dias += ultimoDiaMesAnterior;
        meses -= 1;
    
        if (meses < 0) {
          anos -= 1;
          meses += 12;
        }
      }
    
      // Calculando horas, minutos e segundos
      const diferenca = agora.getTime() - alvo.getTime();
      const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
      const segundos = Math.floor((diferenca / 1000) % 60);
    
      return { anos, meses, dias, horas, minutos, segundos };
    }

    
  componentWillLoad() {
    this.intervalo1 = setInterval(() => {
      this.tempoDecorrido = this.calcularTempoRestante("2024-10-18T22:00:00");
    }, 1000);

    this.intervalo2 = setInterval(() => {
      this.tempoDecorridoNamoro = this.calcularTempoRestante("2024-12-08T22:00:00");
    }, 1000);

    this.intervaloSlider = setInterval(() => {
      if (this.changeText === 1) {
        this.slideController = (this.slideController + 1) % this.imagesCountMax;
        this.handleNextRandomText()
      }
    }, 3000);
  }

  componentDidUpdate() {
    if (this.changeText === 1) {
      setTimeout(() => { this.changeAnimation = 'animaText'; }, 2000);
      setTimeout(() => { this.changeAnimation2 = 'animaText'; }, 2300);
    }
  }

  disconnectedCallback() {
    clearInterval(this.intervalo1);
    clearInterval(this.intervalo2);
    clearInterval(this.intervaloSlider);
  }

  handlePlay = () => {
    this.audioRef?.play();
  };

  setChangeText = (val: number) => {
    console.log(val)
    this.changeText = val;
    this.handlePlay();
  };


  render() {
    return (
      <Host>
        <slot>
        
         <div class={`containerPrincipalTay TayPageTempo ${this.changeText === 0 ? 'introBtn' : ''}`}>
        <audio
          ref={el => (this.audioRef = el)}
          controls
          style={{ opacity: '0', height: '0' }}
        >
          <source src="../static/audio/SouTodoLoveLove.mp3" type="audio/mp3" />
          Seu navegador não suporta a tag de áudio.
        </audio>

        { this.changeText === 0   ?  <intro-button
            onSetchangetext={() => {
              this.setChangeText(1)}}
          /> : 
        <div>
        

              <div class={`heartsInitial ${this.changeAnimation2}`}>
                <div class="heart" style={{'--hearth-rotate': '70deg', '--hearth-size': this.windowSize.width > 767 ? '30%' : '70%', 
                  '--topPos': this.windowSize.width > 767 ? '25%' : '45%', '--leftPos': this.windowSize.width > 767 ? '35%' : '9%',
                  '--hearth-colorTMP': '#FB6A78'}}></div>
                <div class="heart" style={{'--hearth-rotate': '179deg', '--hearth-size': this.windowSize.width > 767 ? '44%' : '44%', 
                  '--topPos': this.windowSize.width > 767 ? '0%' : '-12%', '--leftPos': this.windowSize.width > 767 ? '-16%' : '-29%',
                  '--hearth-colorTMP': '#F70820'}}></div>
                <div class="heart" style={{'--hearth-rotate': '280deg', '--hearth-size': this.windowSize.width > 767 ? '30%' : '44%', 
                  '--topPos': this.windowSize.width > 767 ? '25%' : '-8%', '--leftPos': this.windowSize.width > 767 ? '35%' : '87%',
                  '--hearth-colorTMP': '#F70820'}}></div>
                <div class="heart" style={{'--hearth-rotate': '395deg', '--hearth-size': this.windowSize.width > 767 ? '30%' : '29%', 
                  '--topPos': this.windowSize.width > 767 ? '27%' : '23%', '--leftPos': this.windowSize.width > 767 ? '35%' : '5%',
                  '--hearth-colorTMP': '#F9394C'}}></div>
                <div class="heart" style={{'--hearth-rotate': '385deg', '--hearth-size': this.windowSize.width > 767 ? '30%' : '25%', 
                  '--topPos': this.windowSize.width > 767 ? '385%' : '22%', '--leftPos': this.windowSize.width > 767 ? '35%' : '69%',
                  '--hearth-colorTMP': '#F9394C', zIndex: '32'}}></div>
                <div class="heart" style={{'--hearth-rotate': '385deg', '--hearth-size': this.windowSize.width > 767 ? '30%' : '25%', 
                  '--topPos': this.windowSize.width > 767 ? '25%' : '73%', '--leftPos': this.windowSize.width > 767 ? '35%' : '9%',
                  '--hearth-colorTMP': '#F70820'}}></div>

                <div class="heart" style={{'--hearth-rotate': '385deg', '--hearth-size': this.windowSize.width > 767 ? '30%' : '28%', 
                  '--topPos': this.windowSize.width > 767 ? '25%' : '75%', '--leftPos': this.windowSize.width > 767 ? '35%' : '73%',
                  '--hearth-colorTMP': '#F9394C', zIndex: '32'}}></div>

                {/* <div class="heart" style={{'--hearth-rotate': '70deg', '--hearth-size': this.windowSize.width > 767 ? '30%' : '90%', 
                  '--topPos': this.windowSize.width > 767 ? '25%' : '-100%', '--leftPos': this.windowSize.width > 767 ? '35%' : '5%',
                  '--hearth-colorTMP': '#F70820'}}></div>
                <div class="heart" style={{'--hearth-rotate': '70deg', '--hearth-size': this.windowSize.width > 767 ? '30%' : '90%', 
                  '--topPos': this.windowSize.width > 767 ? '25%' : '-100%', '--leftPos': this.windowSize.width > 767 ? '35%' : '5%',
                  '--hearth-colorTMP': '#F70820'}}></div> */}
              </div>
            <div class={`title ${this.changeAnimation}`}>Que o nosso amor seja eterno e nossas memórias não se percam com o tempo e jamais se limite a apenas palavras</div>

            <div class={`leftContainer ${this.changeAnimation2}`}>
                    <div class="imageSlider" style={{'--imageTay': `url('../static/imgs/taynaraContador/${this.imagesArr[this.slideController]}')`}}
                    onClick={()=>{
                      const sliderVal = this.slideController+1
                      if(sliderVal >= this.imagesCountMax){
                          this.slideController = 0;
                      }else{
                          this.slideController = sliderVal;
                      }
                      }}></div>

                </div>

            { this.changeAnimation2 !== '' ? <div>
            
            <div class="subtext">
               Quem diria que seria tão difícil falar sobre o tempo, sendo que juntos o tempo muda sua maneira de contar,
              passando de uma maneira tão rápida e difícil de acompanhar. Sei que perto da eternidade, apenas aquele que 
              nos uniu e a tudo governa tem o controle sobre. Mas se posso pedir algo, eu desejo que o nosso amor seja bom e perfeito
              enquanto dure, e que nem o tempo, a distância, ou as dificuldades da vida nos separe.

              Esse site eu dedico ao nosso amor, que pode não ser infinito, mas também nunca passará na minha mente como algo finito. 
            </div>

            <div class="subtitle ">Oficialmente Juntos há:</div>
            
            <div class="temporizador ">

              <div class="countBox">
                <div>{this.tempoDecorridoNamoro.anos}</div>
                <div>anos</div>
              </div>

              <div class="countBox">
                <div>{this.tempoDecorridoNamoro.meses}</div>
                <div>meses</div>
              </div>

              <div class="countBox">
                <div>{this.tempoDecorridoNamoro.dias}</div>
                <div>dias</div>
              </div>

              <div class="countBox">
                <div>{this.tempoDecorridoNamoro.horas}</div>
                <div>horas</div>
              </div>

              <div class="countBox">
                <div>{this.tempoDecorridoNamoro.minutos}</div>
                <div>minutos</div>
              </div>

              <div class="countBox">
                <div>{this.tempoDecorridoNamoro.segundos}</div>
                <div>segundos</div>
              </div>

            </div>


            <div class="subtitle conheceu">Juntos há:</div>
            
            <div class="temporizador conheceu">

              <div class="countBox">
                <div>{this.tempoDecorrido.anos}</div>
                <div>anos</div>
              </div>

              <div class="countBox">
                <div>{this.tempoDecorrido.meses}</div>
                <div>meses</div>
              </div>

              <div class="countBox">
                <div>{this.tempoDecorrido.dias}</div>
                <div>dias</div>
              </div>

              <div class="countBox">
                <div>{this.tempoDecorrido.horas}</div>
                <div>horas</div>
              </div>

              <div class="countBox">
                <div>{this.tempoDecorrido.minutos}</div>
                <div>minutos</div>
              </div>

              <div class="countBox">
                <div>{this.tempoDecorrido.segundos}</div>
                <div>segundos</div>
              </div>

            </div> 
            
            
            <div class="porqueamar">
              <div class="titlePq">Porque te amar</div>
              <div class="fraseAleatoria">{this.taypageListObj[this.changeTextList].text}</div>
              <div class="proximo" onClick={() => this.handleNextRandomText()}>Mais+</div>
            </div>

            <div class="skyImageEncontros">
              <div class="titleSy">Céu no dia em que tudo começou</div>
              <div class="skyimg"></div>
            </div>
            
            </div> : <div></div> }  </div>}

        </div> 

        </slot>
      </Host>
    );
  }
}






