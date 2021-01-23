import { newE2EPage } from '@stencil/core/testing';

describe('sidebar-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sidebar-toggle></sidebar-toggle>');

    const element = await page.find('sidebar-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
