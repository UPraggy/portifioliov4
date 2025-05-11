import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-footer-component',
  styleUrl: 'my-footer-component.css',
  shadow: true,
})
export class MyFooterComponent {
  render() {
    return (
      <Host>
        <div class="mainFooterContainer">
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
