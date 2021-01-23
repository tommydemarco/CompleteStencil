import { newSpecPage } from '@stencil/core/testing';
import { FeatureSidebar } from '../feature-sidebar';

describe('feature-sidebar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FeatureSidebar],
      html: `<feature-sidebar></feature-sidebar>`,
    });
    expect(page.root).toEqualHtml(`
      <feature-sidebar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </feature-sidebar>
    `);
  });
});
