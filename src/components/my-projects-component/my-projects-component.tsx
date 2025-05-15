import { Component, Element, Host, Listen, Prop, State, h } from '@stencil/core';
import { projectStaticObject } from './project-static-objects';

@Component({
  tag: 'my-projects-component',
  styleUrl: 'my-projects-component.css',
  shadow: true,
})

export class MyProjectsComponent {

  @Element() el: HTMLElement;

  @Prop() responsible: boolean;
  
  @State() windowSize: { width: number; height: number } = {
            width: window.innerWidth,
            height: window.innerHeight,
          };

  private projectsListObj = (new projectStaticObject).projectsListObj
  
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
        <div class={`projectsContainer ${this.windowSize.width <= 767 ? 'responsiveMobile' : ''}`} >
            <div class="divisor"></div>
            <p class="title">Projetos Recentes</p>

            <div class="projectSlider">
              <div class="divisor"></div>

                {this.projectsListObj.map(projectObj =>{
                      return <my-projectscard-component class="projectCardComponent" projectObj={projectObj}/>
                })}

                
            </div>
        </div>
      </Host>
    );
  }
}
