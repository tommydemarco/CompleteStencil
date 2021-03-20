import { Component, Host, State, Prop, h } from "@stencil/core" 
import Tunnel from '../../state-tunnel';

import { store, Unsubscribe } from '@stencil/redux';
import { initialStore } from '../../redux/store';

@Component({
    tag: "feature-main",
    styleUrl: "feature-main.scss",
    shadow: false,
})
export class FeatureMain {

    backgroundVideo = "rain.mp4"

    @State() activeCard: number = 0;
    setActiveCard = (selectedCard: number): void => {
        this.activeCard = selectedCard
    }

    @Prop() darkTheme: boolean;
    unsubscribe!: Unsubscribe;
    componentWillLoad() {
        store.setStore(initialStore);
        this.unsubscribe = store.mapStateToProps(this, state => {
            const { sidebar: { darkTheme } } = state;
            return { darkTheme };
          });
    }

    disconnectedCallback() {
        this.unsubscribe();
    }

    render() {
        const tunnelState = {
            activeCard: this.activeCard,
            setActiveCard: this.setActiveCard
        };
        const baseClass = ["feature-main"]
        if(!this.darkTheme) baseClass.push("light-theme")
        return (
            <Host class={baseClass.join(" ")}>
                <Tunnel.Provider state={tunnelState}>              
                    {/* <video autoplay muted loop id="bg-video">
                        <source src={this.backgroundVideo} type="video/mp4" />
                    </video> */}
                    <slot />
                </Tunnel.Provider>
            </Host>
        )    
    }
}