import { newSpecPage } from '@stencil/core/testing';
import { MyExperienceComponent } from '../my-experience-component';

describe('my-experience-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyExperienceComponent],
      html: `<my-experience-component></my-experience-component>`,
    });
    expect(page.root).toEqualHtml(`
      <my-experience-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-experience-component>
    `);
  });
});
