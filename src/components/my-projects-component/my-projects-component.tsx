import { Component, Element, Host, h } from '@stencil/core';
import { projectStaticObject } from './project-static-objects';

@Component({
  tag: 'my-projects-component',
  styleUrl: 'my-projects-component.css',
  shadow: true,
})

export class MyProjectsComponent {

  @Element() el: HTMLElement;

  private projectsListObj = (new projectStaticObject).projectsListObj
  


  render() {
    return (
      <Host>
        <div class="projects">
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
