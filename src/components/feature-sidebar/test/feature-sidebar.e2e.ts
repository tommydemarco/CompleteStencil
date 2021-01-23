import { newE2EPage } from '@stencil/core/testing';

describe('feature-sidebar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<feature-sidebar></feature-sidebar>');

    const element = await page.find('feature-sidebar');
    expect(element).toHaveClass('hydrated');
  });
});
