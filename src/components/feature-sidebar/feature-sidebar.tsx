import { Component, State, Prop, Host, h, Listen, Method, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'feature-sidebar',
  styleUrl: 'feature-sidebar.scss',
  shadow: false,
})
export class FeatureSidebar {
  @Prop() title: string = 'Menu';
  @State() active = false;
  @State() toggleElement: HTMLElement;
  @Element() component: HTMLElement;
  @Event({ bubbles: true, composed: true }) scActiveState;

  @Listen('stSetToggleElement', { target: 'body' })
  setToggleElement(event: CustomEvent): void {
    this.toggleElement = event.detail;
  }

  @Listen('stSetActiveSidebar', { target: 'body' })
  @Method()
  @Listen('click', { target: 'body' })
  handleActive(event: CustomEvent): void {
    if (event.detail === true || event.detail === false) {
      this.active = event.detail;
      return;
    }
    if (
      (!this.component.contains(event.target as Node) || event.target === this.component) &&
      !(this.toggleElement.contains(event.target as Node) || this.toggleElement === event.target)
    ) {
      this.active = false;
      this.scActiveState.emit(false);
      return;
    }
  }

  render() {
    const baseClass = 'feature-sidebar';
    const classes = [baseClass];
    if (this.active) {
      classes.push('active');
    }
    return (
      <Host>
        <div class={classes.join(' ')}>
          <h2 class={baseClass + '__title'}>
            <span class={baseClass + '__title-icon'}>&#9918;</span>
            {this.title}
          </h2>
          <p class={baseClass + '__subtitle'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nobis molestiae necessitatibus quibusdam corrupti explicabo itaque aut, quas.
          </p>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
