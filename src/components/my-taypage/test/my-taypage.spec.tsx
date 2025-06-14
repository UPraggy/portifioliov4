import { newSpecPage } from '@stencil/core/testing';
import { MyTaypage } from '../my-taypage';

describe('my-taypage', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyTaypage],
      html: `<my-taypage></my-taypage>`,
    });
    expect(page.root).toEqualHtml(`
      <my-taypage>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-taypage>
    `);
  });
});
