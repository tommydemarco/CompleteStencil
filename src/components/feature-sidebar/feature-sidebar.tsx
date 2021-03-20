import { Component, Prop, Host, h } from '@stencil/core';

import Tunnel, { TunnelState } from '../../state-tunnel';
import { store, Unsubscribe } from '@stencil/redux';
import state from '../../store';

@Component({
  tag: 'feature-sidebar',
  styleUrl: 'feature-sidebar.scss',
  shadow: false,
})
export class FeatureSidebar {
    @Prop() sidebarTitle: string;
    @Prop() selectTitle: string;
    @Prop() sidebarActive = false;

    unsubscribe!: Unsubscribe;
    componentWillLoad() {
        this.unsubscribe = store.mapStateToProps(this, state => {
            const { sidebar: { sidebarActive } } = state;
            return { sidebarActive };
        });
    }

    disconnectedCallback() {
        this.unsubscribe();
    }

    render() {
      const baseClass = 'feature-sidebar';
      let classes = [baseClass];
      if (this.sidebarActive) classes.push('active');
      if(state.theme !== "dark") classes.push('dark-theme');
      return (
        <Tunnel.Consumer>
          {(state: TunnelState) => {
            return (
              <Host class={classes.join(' ')}>
                <h2 class={`${baseClass}__title`}>
                  {this.sidebarTitle}
                </h2>
                <p class={`${baseClass}__subtitle`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Architecto nobis molestiae necessitatibus quibusdam corrupti 
                  explicabo itaque aut, quas.
                </p> 
                <h4 class={`${baseClass}__select-title`}>
                  {this.selectTitle}
                </h4>
                <p class={`${baseClass}__select-copy`}>
                  Lorem ipsum dolor sit amet consectetur.
                </p> 
            </Host>
          )}}
        </Tunnel.Consumer>
      );
    }
}
