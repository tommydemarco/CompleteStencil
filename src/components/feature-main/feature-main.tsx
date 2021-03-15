import { Component, Host, State, h } from "@stencil/core" 
import Tunnel from '../../state-tunnel';

import { store } from '@stencil/redux';
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

    componentWillLoad() {
        store.setStore(initialStore);
    }

    render() {
        const tunnelState = {
            activeCard: this.activeCard,
            setActiveCard: this.setActiveCard
        };
        return (
            <Host>
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