import { Component, Host, Prop, h } from "@stencil/core"

import { store, Unsubscribe } from '@stencil/redux';
@Component({
    tag: "feature-content",
    styleUrl: "feature-content.scss",
    shadow: false,
})
export class FeatureContent {

    @Prop() sidebarActive: boolean = false;
    @Prop() darkTheme: boolean;

    unsubscribe!: Unsubscribe;
    componentWillLoad() {
        this.unsubscribe = store.mapStateToProps(this, state => {
            const { sidebar: { sidebarActive, darkTheme } } = state;
            return { sidebarActive, darkTheme };
        });
    }

    disconnectedCallback() {
        this.unsubscribe();
    }

    render() {
        const baseClass = ["feature-content"]
        if(this.sidebarActive) baseClass.push("retract")
        if(!this.darkTheme) baseClass.push("light-theme")
        return (
            <Host class={baseClass.join(" ")}>
                <slot />
            </Host>
        )
    }
}