import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'feature-sidebar',
  styleUrl: 'feature-sidebar.css',
  shadow: true,
})
export class FeatureSidebar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
