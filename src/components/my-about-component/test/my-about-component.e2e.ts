import { newE2EPage } from '@stencil/core/testing';

describe('my-about-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-about-component></my-about-component>');

    const element = await page.find('my-about-component');
    expect(element).toHaveClass('hydrated');
  });
});
