import { newSpecPage } from '@stencil/core/testing';
import { MyFooterComponent } from '../my-footer-component';

describe('my-footer-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyFooterComponent],
      html: `<my-footer-component></my-footer-component>`,
    });
    expect(page.root).toEqualHtml(`
      <my-footer-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-footer-component>
    `);
  });
});
