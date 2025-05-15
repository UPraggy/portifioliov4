import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-experience-component',
  styleUrl: 'my-experience-component.css',
  shadow: true,
})
export class MyExperienceComponent {
  render() {
    return (
      <Host>
        <div class="mainExperienceContainer">
          <div class="leftDescription">
              <div class="title">Minha Experiência</div>
              <div class="subTitle">Ao longo da minha jornada, tive o prazer de aprender com profissionais brilhantes em organizações excepcionais.</div>
          </div>

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
          </div>
        </div>
      </Host>
    );
  }
}
