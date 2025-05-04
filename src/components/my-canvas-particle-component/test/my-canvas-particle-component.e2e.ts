import { newE2EPage } from '@stencil/core/testing';

describe('my-canvas-particle-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-canvas-particle-component></my-canvas-particle-component>');

    const element = await page.find('my-canvas-particle-component');
    expect(element).toHaveClass('hydrated');
  });
});
