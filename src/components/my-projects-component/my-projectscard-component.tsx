import { Component, Host, Prop, State, Watch, h } from '@stencil/core';
import { animate, onScroll, stagger } from 'animejs';

@Component({
  tag: 'my-projectscard-component',
  styleUrls: ['my-projects-component.css', 'my-projects-component-mobile.css'],
  shadow: false,
})

export class MyProjectsCardComponent {

    @Prop() projectObj: {
        title: string,
        date: string,
        description: HTMLElement,
        sinopse: string,
        imagesSlider: string[],
        tecnologias: string,
        funccionality: string
    };

    @State() showCard: boolean = false;
    @State() imageSliderCounter: number = 0;

    private infoRef: HTMLDivElement;

    private leftCardRef: HTMLDivElement;
    private  rightCardRef: HTMLDivElement;

    componentDidLoad(){
        setInterval(()=>
            this.imageSliderCounter = !this.showCard || this.imageSliderCounter == (this.projectObj.imagesSlider.length-1) ? 0 : 
        this.imageSliderCounter + 1, 4000)
    }



    @Watch('showCard')
handleShowCardChange(newValue: boolean) {
  if (newValue) {
    this.waitForRefAndAnimate();
  }
}

private waitForRefAndAnimate(attempt = 0) {
  if (this.infoRef) {
    animate(
        this.leftCardRef,
        {
        translateX: ['-150%', '0'],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 500,
        delay: 100,
        }
    );
    animate(
        this.rightCardRef,
        {
        translateX: ['150%', '0'],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 500,
        delay: 100,
        }
    );
  } else if (attempt < 10) {
    setTimeout(() => this.waitForRefAndAnimate(attempt + 1), 50);
  } else {
    console.warn('infoRef não foi encontrado após várias tentativas');
  }
}

    render(){
        return <Host>
            <div class="projectWrapper">
            <div class="cardProject">
                <div class={`topCard ${this.showCard ? 'showcard' : ''}`}>
                    <div class="info1">
                    <div class="title">{this.projectObj.title}</div>
                    <div class="date">{this.projectObj.date}</div>
                    </div>

                    {!this.showCard ? <div class="sinopse">{this.projectObj.sinopse}</div> : ''}
                    <div class="openCard" onClick={()=>this.showCard = !this.showCard}></div>
                </div>
                </div>
                {this.showCard ? 
                    <div class="info" ref={el => this.infoRef = el as HTMLDivElement}>
                        <div class="leftCard" ref={el => this.leftCardRef = el as HTMLDivElement}>
                            <div class="textInfoCard">{this.projectObj.description}</div>
                            <div class="tecnologiesCard">{this.projectObj.tecnologias}</div>
                            <div class="viewInfoCard" onClick={()=>window.location.href = this.projectObj.funccionality}>Veja o Funcionamento</div>
                        </div>
                        <div class="rightCard" ref={el => this.rightCardRef = el as HTMLDivElement}
                        onClick={() =>{
                                    this.imageSliderCounter = !this.showCard || this.imageSliderCounter == 
                                    (this.projectObj.imagesSlider.length-1) ? 0 : this.imageSliderCounter + 1
                                }}>
                            <div class="slideShowCard">
                                <div class="image" 
                                style={{'--imageSliderProject': this.projectObj.imagesSlider[this.imageSliderCounter]}}
                                ></div>
                            </div>
                        </div>
                    </div>
                : ''}
                <div class="divisor"></div>
            </div>
        </Host>
    }
}