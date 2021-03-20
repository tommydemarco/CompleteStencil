import { Component, Host, Prop, h } from "@stencil/core"

import Tunnel, { TunnelState } from '../../state-tunnel';
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
                    if (state.activeCard === this.cardNumber) {
                        classes.push("feature-select--active")
                    }
                    return (
                        <Host class={classes.join(" ")}>
                            <h3 class="feature-select__title">{this.cardTitle}</h3>
                            <p class="feature-select__title">{this.cardSubtitle}</p>
                        </Host>
                )}}
            </Tunnel.Consumer>
        )
    }
}