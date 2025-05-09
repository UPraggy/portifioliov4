import { newE2EPage } from '@stencil/core/testing';

describe('my-projects-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-projects-component></my-projects-component>');

    const element = await page.find('my-projects-component');
    expect(element).toHaveClass('hydrated');
  });
});
