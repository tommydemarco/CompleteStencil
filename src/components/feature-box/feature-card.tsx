import { Component, Host, Prop, h } from "@stencil/core"

import { store, Unsubscribe } from '@stencil/redux';
import Tunnel, { TunnelState } from '../../state-tunnel';
import themeState from '../../store';
@Component({
    tag: "feature-card",
    styleUrl: "feature-card.scss",
    shadow: false,
})
export class FeatureContent {

    @Prop() img: string;
    @Prop() cardNumber: number;

    @Prop({ mutable: true }) sidebarActive: string;

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
        console.log("SIDEBAR ACTIVE", this.sidebarActive)
        return (
    <Host>
        <Tunnel.Consumer>
                {(state: TunnelState) => {
                    const classes = ["content"]
                    if(themeState.theme !== "dark") classes.push('dark')
                    if (state.activeCard === this.cardNumber) classes.push("active")
        return (      
                <div class={classes.join(" ")}>
                    <input type="checkbox" id="card1" class="more" aria-hidden="true" />
                    <div class="front" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529408686214-b48b8532f72c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=986e2dee5c1b488d877ad7ba1afaf2ec&auto=format&fit=crop&w=1350&q=80')"}}>
                        <div class="inner">
                            <h2>APARTMENTS</h2>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                            <label onClick={() => state.setActiveCard(this.cardNumber)} class="button" aria-hidden="true">
                                Details
                            </label>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                            <div class="info">
                                <span>5</span>
                                <div class="icon">
                                    <i class="fas fa-users"></i>
                                    <span>people</span>
                                </div>
                            </div>
                            <div class="info">
                                <span>4</span>
                                <div class="icon">
                                    <i class="fas fa-door-open"></i>
                                    <span>rooms</span>
                                </div>
                            </div>
                            <div class="info">
                                <span>3</span>
                                <div class="icon">
                                    <i class="fas fa-bed"></i>
                                    <span>beds</span>
                                </div>
                            </div>
                            <div class="info">
                                <span>1</span>
                                <div class="icon">
                                    <i class="fas fa-bath"></i>
                                    <span>bath</span>
                                </div>
                            </div>
                            <div class="description">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates earum nostrum ipsam
                                    ullam, reiciendis nam consectetur? Lorem ipszum earum nostrum ipsam
                                    ullam, reiciendis nam consectetur</p>
                            </div>
                            <div class="location">Warsaw, Poland</div>
                            <div class="price">38€ / day</div>
                            <label onClick={() => state.setActiveCard(0)} class="button return" aria-hidden="true">
                                BACK
                            </label>
                        </div>
                    </div>
                </div>     
                )}}
            </Tunnel.Consumer>
        </Host>
     )
    }
}