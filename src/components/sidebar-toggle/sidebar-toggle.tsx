import { Component, Element, Host, Listen, Prop, State, Event, EventEmitter, h } from '@stencil/core';

import { store, Unsubscribe } from '@stencil/redux';
import { toggleSidebar } from '../../redux/actions';
import state from '../../store';

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

  /** redux */

  toggleSidebar!: typeof toggleSidebar;

  @Prop({ mutable: true }) sidebarActive: boolean;
  @Prop() darkTheme: boolean;
  unsubscribe!: Unsubscribe;
  componentWillLoad() {
    this.unsubscribe = store.mapStateToProps(this, state => {
      const { sidebar: {sidebarActive, darkTheme } } = state;
      return { sidebarActive, darkTheme };
    });

    store.mapDispatchToProps(this, { toggleSidebar });
  }

  disconnectedCallback() {
    this.unsubscribe();
  }

  handleClick() {
    this.active = !this.active;
    this.toggleSidebar();
  }

  // this.stSetActiveSidebar.emit(this.active);

  componentDidLoad() {
    this.stSetToggleElement.emit(this.toggleElement);
  }

  @Listen('scActiveState', { target: 'body' })
  handleStateChange(event: CustomEvent) {
    this.active = event.detail;
  }

  render() {
    const classes = ['toggle-button'];
    if (this.active) classes.push('active');
    if(state.theme !== "dark") classes.push('dark-theme');
    return (
      <Host onClick={this.handleClick.bind(this)}>
        <div class={classes.join(' ')}></div>
      </Host>
    );
  }
}
