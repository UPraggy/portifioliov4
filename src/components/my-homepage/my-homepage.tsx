import { Component, Element, h, Host } from '@stencil/core';
import {createPathDiv} from '../../utils/utils'

@Component({
  tag: 'my-homepage',
  styleUrls: ['./my-homepage.css', '../../global/colors.css', '../../global/fonts.css'],
  shadow: true,
})




export class MyHomePage{

  @Element() el: HTMLElement;

  private topPathRef: HTMLDivElement;
  private leftPathRef: HTMLDivElement;
  private rightPathRef: HTMLDivElement;
  

  componentDidLoad() {
    createPathDiv({ref: this.topPathRef, propertyName: '--topPath', 
      path: (width, height) => {return `M 0,0 L ${width},0 L ${width * 0.8},${height} L ${width * 0.2},${height} L 0,0`}
    })

    createPathDiv({ref: this.leftPathRef, propertyName: '--leftPath', 
      path: (width, height) => {return `M 0,0 L ${width},${height*0.2} L ${width},${height * 0.8} L 0,${height} L 0,0`}
    })

    createPathDiv({ref: this.rightPathRef, propertyName: '--rightPath', 
      path: (width, height) => {return `M 0,0 L ${width},0 L ${width},${height} L 0,${height} L 0,0`}
    })

  }

  render() {
    return <Host>
      <div class="homePageContent">

        <div class="mainShapeContent" >

          <div class="topPath" ref={el => this.topPathRef = el as HTMLDivElement}>
              <p class="namePortfolio">RAFAEL MOREIRA</p>
            </div>

            <div class="leftPath" ref={el => this.leftPathRef = el as HTMLDivElement}>
              <div class="socials">
                  <div class="emailCircle"><div></div></div>
                  <div class="social2Group">
                      <div class="linkedInIcon"><div></div></div>
                      <div class="gitIcon"><div></div></div>
                  </div>
              </div>
            </div>

            <div class="rightPath" ref={el => this.rightPathRef = el as HTMLDivElement}>
                <div class="bordText">Não é só código ou design. É sobre entender, adaptar e conectar.</div>
            </div>
        </div>
      </div>
    </Host>
  }
}
