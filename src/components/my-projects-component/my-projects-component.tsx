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
                      return <div class="projectWrapper">
                        <div class="cardProject">
                            <div class="topCard">
                              <div class="info1">
                                <div class="title">{projectObj.title}</div>
                                <div class="date">{projectObj.date}</div>
                              </div>

                              <div class="description">{projectObj.description}</div>
                              <div class="openCard"></div>
                            </div>
                          </div>
                          <div class="divisor"></div>
                      </div>
                })}

                
            </div>
        </div>
      </Host>
    );
  }
}
