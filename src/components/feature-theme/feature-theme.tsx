import { Component, Prop, h, } from "@stencil/core"

import { store, Unsubscribe } from '@stencil/redux';
import state from '../../store';

@Component({
    tag: "feature-theme",
    styleUrl: "feature-theme.scss",
    shadow: false,
})
export class FeatureTheme {

    @Prop({ mutable: true }) darkTheme: string;
    unsubscribe!: Unsubscribe;
    componentWillLoad() {
        this.unsubscribe = store.mapStateToProps(this, state => {
            const { sidebar: {darkTheme} } = state;
            return { darkTheme };
        });
    }

    disconnectedCallback() {
        this.unsubscribe();
    }

    switchTheme() {
        if (state.theme === "dark") state.theme = "light"
        else state.theme = "dark"
    }

    render() {
        return (
            <label class="switch">
                <input type="checkbox" checked onClick={this.switchTheme} />
                <div>
                    <span></span>
                </div>
            </label>
        )
    }
}