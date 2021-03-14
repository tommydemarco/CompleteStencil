import { Component, Host, h } from "@stencil/core" 

@Component({
    tag: "feature-main",
    styleUrl: "feature-main.scss",
    shadow: false,
})
export class FeatureMain {

    render() {
        <Host>
            <video autoplay muted loop id="myVideo">
                <source src="rain.mp4" type="video/mp4" />
            </video>
            <slot />
        </Host>
    }
}