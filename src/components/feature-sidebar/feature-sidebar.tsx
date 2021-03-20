import { Component, State, Prop, Host, h, Listen, Method, Element, Event } from '@stencil/core';

import Tunnel, { TunnelState } from '../../state-tunnel';
import { store, Unsubscribe } from '@stencil/redux';

@Component({
  tag: 'feature-sidebar',
  styleUrl: 'feature-sidebar.scss',
  shadow: false,
})
export class FeatureSidebar {
  @Prop() sidebarTitle: string = 'Menu';
  // @State() active = false;
  // @State() toggleElement: HTMLElement;
  // @Element() component: HTMLElement;
  // @Event({ bubbles: true, composed: true }) scActiveState;

  // @Listen('stSetToggleElement', { target: 'body' })
  // setToggleElement(event: CustomEvent): void {
  //   this.toggleElement = event.detail;
  // }

    @Prop() sidebarActive: boolean = false;
    @Prop() darkTheme: boolean = false;

    unsubscribe!: Unsubscribe;
    componentWillLoad() {
        this.unsubscribe = store.mapStateToProps(this, state => {
            const { sidebar: { sidebarActive, darkTheme } } = state;
            return { sidebarActive, darkTheme };
        });
    }

    disconnectedCallback() {
        this.unsubscribe();
    }

  // @Watch("sidebarActive")
  // setActiveState() {
  //   this.active = this.sidebarActive
  // }

  // @Listen('stSetActiveSidebar', { target: 'body' })
  // @Method()
  // @Listen('click', { target: 'body' })
  // async handleActive(event: CustomEvent): Promise<void> {
  //   if (event.detail === true || event.detail === false) {
  //     this.active = event.detail;
  //     return;
  //   }
  //   if (
  //     (!this.component.contains(event.target as Node) || event.target === this.component) &&
  //     !(this.toggleElement.contains(event.target as Node) || this.toggleElement === event.target)
  //   ) {
  //     this.active = false;
  //     this.scActiveState.emit(false);
  //     return;
  //   }
  // }

  render() {
    const baseClass = 'feature-sidebar';
    let classes = [baseClass];
    if (this.sidebarActive) classes.push('active');
    if(!this.darkTheme) classes.push('dark-theme');
    return (
      <Tunnel.Consumer>
        {(state: TunnelState) => {
          return (
            <Host class={classes.join(' ')}>
              <h2 class={`${baseClass}__title`}>
                {this.sidebarTitle} {state.activeCard}
              </h2>
              <p class={`${baseClass}__subtitle`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nobis molestiae necessitatibus quibusdam corrupti explicabo itaque aut, quas.
              </p>
              <p onClick={() => state.setActiveCard(4)}>Set the active card to 4</p>
              <slot /> 
          </Host>
        )}}
      </Tunnel.Consumer>
    );
  }
}
