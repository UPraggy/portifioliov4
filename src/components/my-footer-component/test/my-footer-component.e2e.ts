import { newE2EPage } from '@stencil/core/testing';

describe('my-footer-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-footer-component></my-footer-component>');

    const element = await page.find('my-footer-component');
    expect(element).toHaveClass('hydrated');
  });
});
