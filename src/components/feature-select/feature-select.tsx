import { Component, Prop, h } from "@stencil/core"

import Tunnel, { TunnelState } from '../../state-tunnel';
import themeState from '../../store';

@Component({
    tag: "feature-select",
    styleUrl: "feature-select.scss",
    shadow: false
})
export class FeatureSelect {

    @Prop() cardTitle: string;
    @Prop() cardSubtitle: string;
    @Prop() cardNumber: number;

    render() {
        return (
            <Tunnel.Consumer>
                {(state: TunnelState) => {
                    const classes = ["feature-select"]
                    if(themeState.theme !== "dark") classes.push('feature-select--dark')
                    if (state.activeCard === this.cardNumber) {
                        classes.push("feature-select--active")
                    }
                    console.log(state.activeCard)
                    return (
                        <div class={classes.join(" ")} onClick={() => {
                            if(state.activeCard !== this.cardNumber) state.setActiveCard(this.cardNumber)
                            else state.setActiveCard(0)}}>
                            <h3 class="feature-select__title">{this.cardTitle}</h3>
                            <p class="feature-select__subtitle">{this.cardSubtitle}</p>
                        </div>
                )}}
            </Tunnel.Consumer>
        )
    }
}