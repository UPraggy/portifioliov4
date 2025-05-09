import { newSpecPage } from '@stencil/core/testing';
import { MyProjectsComponent } from '../my-projects-component';

describe('my-projects-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyProjectsComponent],
      html: `<my-projects-component></my-projects-component>`,
    });
    expect(page.root).toEqualHtml(`
      <my-projects-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-projects-component>
    `);
  });
});
