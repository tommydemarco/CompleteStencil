import { newSpecPage } from '@stencil/core/testing';
import { SidebarToggle } from '../sidebar-toggle';

describe('sidebar-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SidebarToggle],
      html: `<sidebar-toggle></sidebar-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <sidebar-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sidebar-toggle>
    `);
  });
});
