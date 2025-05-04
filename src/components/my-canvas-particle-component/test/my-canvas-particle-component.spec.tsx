import { newSpecPage } from '@stencil/core/testing';
import { MyCanvasParticleComponent } from '../my-canvas-particle-component';

describe('my-canvas-particle-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyCanvasParticleComponent],
      html: `<my-canvas-particle-component></my-canvas-particle-component>`,
    });
    expect(page.root).toEqualHtml(`
      <my-canvas-particle-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-canvas-particle-component>
    `);
  });
});
