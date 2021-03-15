import { Component, Prop, h, } from "@stencil/core"

import { store, Unsubscribe } from '@stencil/redux';
import { switchTheme } from '../../redux/actions';

@Component({
    tag: "feature-theme",
    styleUrl: "feature-theme.scss",
    shadow: false,
})
export class FeatureTheme {

    switchTheme!: typeof switchTheme;

    @Prop({ mutable: true }) darkTheme: string;
    unsubscribe!: Unsubscribe;
    componentWillLoad() {
        this.unsubscribe = store.mapStateToProps(this, state => {
            const { sidebar: {darkTheme} } = state;
            return { darkTheme };
        });

        store.mapDispatchToProps(this, { switchTheme });
    }

    disconnectedCallback() {
        this.unsubscribe();
    }

    render() {
        console.log(this.darkTheme)
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