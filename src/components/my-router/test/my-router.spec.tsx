import { newSpecPage } from '@stencil/core/testing';
import { MyRouter } from '../my-router';

describe('my-router', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyRouter],
      html: `<my-router></my-router>`,
    });
    expect(page.root).toEqualHtml(`
      <my-router>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-router>
    `);
  });
});
