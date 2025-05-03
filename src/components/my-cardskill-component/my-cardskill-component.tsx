import { Component, Element, h, Host } from '@stencil/core';

@Component({
  tag: 'my-cardskill-component',
  styleUrls: ['./my-cardskill-component.css', '../../global/colors.css'],
  shadow: true,
})
export class MyCardSkillComponent{

  @Element() el: HTMLElement;

  private topPathRef: HTMLDivElement;

  componentDidLoad() {
    const width = this.topPathRef.clientWidth;
    const height = this.topPathRef.clientHeight;

    const topPath = `M 0,0 L ${width},0 L ${width * 0.8},${height} L ${width * 0.2},${height} L 0,0`;

    // Atribui a variável CSS à div diretamente
    this.topPathRef.style.setProperty('--topPath', `"${topPath}"`);
  }

  render() {
    return <Host>
      <div class="mainCardSkillContainer">
        <div class="baseCard">
          <div class="leftTop1Border borderBaseCard"></div>
          <div class="leftTop2Border borderBaseCard"></div>
          <div class="leftTopClipBorder borderBaseCard"></div>
          
          
          <div class="rightTop1Border borderBaseCard"></div>
          <div class="rightTop2Border borderBaseCard"></div>
          <div class="rightTopClipBorder borderBaseCard"></div>
          
          
          <div class="leftBottom1Border borderBaseCard"></div>
          <div class="leftBottom2Border borderBaseCard"></div>
          <div class="leftBottomClipBorder borderBaseCard"></div>
          
          
          <div class="rightBottom1Border borderBaseCard"></div>
          <div class="rightBottom2Border borderBaseCard"></div>
          <div class="rightBottomClipBorder borderBaseCard"></div>
          
          <div class="Border borderBaseCard"></div>
          <div class="Border borderBaseCard"></div>
        </div>
  </div>
    </Host>
  }
}
