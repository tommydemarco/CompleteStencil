import { Component, Host, Prop, h } from "@stencil/core"

@Component({
    tag: "feature-select",
    styleUrl: "feature-select.scss",
    shadow: false
})
export class FeatureSelect {

    @Prop() cardTitle: string;
    @Prop() cardSubtitle: string;

    render() {
        return (
            <Host class="feature-select">
                <h3 class="feature-select__title">{this.cardTitle}</h3>
                <p class="feature-select__title">{this.cardSubtitle}</p>
            </Host>
        )
    }
}