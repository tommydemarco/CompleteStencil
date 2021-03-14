import { Component, Host, h } from "@stencil/core"

@Component({
    tag: "feature-content",
    styleUrl: "feature-content.scss",
    shadow: false,
})
export class FeatureContent {

    render() {
        return (
            <Host class="main">
                <h1 class="main__title">Our features</h1>
                <div class="main__content">
                    <slot />
                </div>
            </Host>
        )
    }
}