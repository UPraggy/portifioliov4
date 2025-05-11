import { newE2EPage } from '@stencil/core/testing';

describe('my-experience-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-experience-component></my-experience-component>');

    const element = await page.find('my-experience-component');
    expect(element).toHaveClass('hydrated');
  });
});
