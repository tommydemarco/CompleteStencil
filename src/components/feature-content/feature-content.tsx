import { Component, Host, Prop, h } from "@stencil/core"

import { store, Unsubscribe } from '@stencil/redux';
@Component({
    tag: "feature-content",
    styleUrl: "feature-content.scss",
    shadow: false,
})
export class FeatureContent {

    @Prop() sidebarActive: boolean = false;

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
        const baseClass = ["feature-content"]
        if(this.sidebarActive) baseClass.push("retract")
        return (
            <Host class={baseClass.join(" ")}>
                <slot />
            </Host>
        )
    }
}