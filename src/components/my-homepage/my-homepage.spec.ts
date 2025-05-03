import { newSpecPage } from '@stencil/core/testing';
import { MyHomePage } from './my-homepage';

describe('my-homepage.e2e', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyHomePage],
      html: '<my-homepage.e2e></my-homepage.e2e>',
    });
    expect(root).toEqualHtml(`
      <my-homepage.e2e>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-homepage.e2e>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyHomePage],
      html: `<my-homepage.e2e first="Stencil" middle="'Don't call me a framework'" last="JS"></my-homepage.e2e>`,
    });
    expect(root).toEqualHtml(`
      <my-homepage.e2e first="Stencil" middle="'Don't call me a framework'" last="JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </my-homepage.e2e>
    `);
  });
});
