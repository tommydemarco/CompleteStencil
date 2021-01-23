import { Component, Element, Host, Listen, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'sidebar-toggle',
  styleUrl: 'sidebar-toggle.scss',
  shadow: true,
})
export class SidebarToggle {
  @Element() toggleElement: HTMLElement;
  @Event({ bubbles: true, composed: false })
  stSetActiveSidebar: EventEmitter<boolean>;
  @Event({ bubbles: true, composed: false }) stSetToggleElement: EventEmitter<HTMLElement>;
  @State() active: boolean = false;

  handleClick() {
    this.active = !this.active;
    this.stSetActiveSidebar.emit(this.active);
  }

  componentDidLoad() {
    this.stSetToggleElement.emit(this.toggleElement);
  }

  @Listen('scActiveState', { target: 'body' })
  handleStateChange(event: CustomEvent) {
    this.active = event.detail;
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
