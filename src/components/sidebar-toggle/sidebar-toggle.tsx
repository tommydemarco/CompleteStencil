import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'sidebar-toggle',
  styleUrl: 'sidebar-toggle.scss',
  shadow: true,
})
export class SidebarToggle {
  @State() active: boolean = false;

  handleClick() {
    this.active = !this.active;
  }

  render() {
    const classes = ['toggle-button'];
    if (this.active) {
      classes.push('active');
    }
    return (
      <Host onClick={this.handleClick.bind(this)}>
        <div class={classes.join(' ')}></div>
      </Host>
    );
  }
}
