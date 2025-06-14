import { newE2EPage } from '@stencil/core/testing';

describe('my-router', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-router></my-router>');

    const element = await page.find('my-router');
    expect(element).toHaveClass('hydrated');
  });
});
