import { newSpecPage } from '@stencil/core/testing';
import { MyAboutComponent } from '../my-about-component';

describe('my-about-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyAboutComponent],
      html: `<my-about-component></my-about-component>`,
    });
    expect(page.root).toEqualHtml(`
      <my-about-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-about-component>
    `);
  });
});
