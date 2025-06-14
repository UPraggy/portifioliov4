import { newE2EPage } from '@stencil/core/testing';

describe('my-taypage', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-taypage></my-taypage>');

    const element = await page.find('my-taypage');
    expect(element).toHaveClass('hydrated');
  });
});
