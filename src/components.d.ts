/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FeatureCard {
        "img": string;
        "sidebarActive": string;
    }
    interface FeatureContent {
        "sidebarActive": boolean;
    }
    interface FeatureMain {
        "darkTheme": boolean;
    }
    interface FeatureSelect {
        "cardNumber": number;
        "cardSubtitle": string;
        "cardTitle": string;
    }
    interface FeatureSidebar {
        "selectTitle": string;
        "sidebarActive": boolean;
        "sidebarTitle": string;
    }
    interface FeatureTheme {
        "darkTheme": string;
    }
    interface SidebarToggle {
        "darkTheme": boolean;
        "sidebarActive": boolean;
    }
}
declare global {
    interface HTMLFeatureCardElement extends Components.FeatureCard, HTMLStencilElement {
    }
    var HTMLFeatureCardElement: {
        prototype: HTMLFeatureCardElement;
        new (): HTMLFeatureCardElement;
    };
    interface HTMLFeatureContentElement extends Components.FeatureContent, HTMLStencilElement {
    }
    var HTMLFeatureContentElement: {
        prototype: HTMLFeatureContentElement;
        new (): HTMLFeatureContentElement;
    };
    interface HTMLFeatureMainElement extends Components.FeatureMain, HTMLStencilElement {
    }
    var HTMLFeatureMainElement: {
        prototype: HTMLFeatureMainElement;
        new (): HTMLFeatureMainElement;
    };
    interface HTMLFeatureSelectElement extends Components.FeatureSelect, HTMLStencilElement {
    }
    var HTMLFeatureSelectElement: {
        prototype: HTMLFeatureSelectElement;
        new (): HTMLFeatureSelectElement;
    };
    interface HTMLFeatureSidebarElement extends Components.FeatureSidebar, HTMLStencilElement {
    }
    var HTMLFeatureSidebarElement: {
        prototype: HTMLFeatureSidebarElement;
        new (): HTMLFeatureSidebarElement;
    };
    interface HTMLFeatureThemeElement extends Components.FeatureTheme, HTMLStencilElement {
    }
    var HTMLFeatureThemeElement: {
        prototype: HTMLFeatureThemeElement;
        new (): HTMLFeatureThemeElement;
    };
    interface HTMLSidebarToggleElement extends Components.SidebarToggle, HTMLStencilElement {
    }
    var HTMLSidebarToggleElement: {
        prototype: HTMLSidebarToggleElement;
        new (): HTMLSidebarToggleElement;
    };
    interface HTMLElementTagNameMap {
        "feature-card": HTMLFeatureCardElement;
        "feature-content": HTMLFeatureContentElement;
        "feature-main": HTMLFeatureMainElement;
        "feature-select": HTMLFeatureSelectElement;
        "feature-sidebar": HTMLFeatureSidebarElement;
        "feature-theme": HTMLFeatureThemeElement;
        "sidebar-toggle": HTMLSidebarToggleElement;
    }
}
declare namespace LocalJSX {
    interface FeatureCard {
        "img"?: string;
        "sidebarActive"?: string;
    }
    interface FeatureContent {
        "sidebarActive"?: boolean;
    }
    interface FeatureMain {
        "darkTheme"?: boolean;
    }
    interface FeatureSelect {
        "cardNumber"?: number;
        "cardSubtitle"?: string;
        "cardTitle"?: string;
    }
    interface FeatureSidebar {
        "selectTitle"?: string;
        "sidebarActive"?: boolean;
        "sidebarTitle"?: string;
    }
    interface FeatureTheme {
        "darkTheme"?: string;
    }
    interface SidebarToggle {
        "darkTheme"?: boolean;
        "onStSetActiveSidebar"?: (event: CustomEvent<boolean>) => void;
        "onStSetToggleElement"?: (event: CustomEvent<HTMLElement>) => void;
        "sidebarActive"?: boolean;
    }
    interface IntrinsicElements {
        "feature-card": FeatureCard;
        "feature-content": FeatureContent;
        "feature-main": FeatureMain;
        "feature-select": FeatureSelect;
        "feature-sidebar": FeatureSidebar;
        "feature-theme": FeatureTheme;
        "sidebar-toggle": SidebarToggle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "feature-card": LocalJSX.FeatureCard & JSXBase.HTMLAttributes<HTMLFeatureCardElement>;
            "feature-content": LocalJSX.FeatureContent & JSXBase.HTMLAttributes<HTMLFeatureContentElement>;
            "feature-main": LocalJSX.FeatureMain & JSXBase.HTMLAttributes<HTMLFeatureMainElement>;
            "feature-select": LocalJSX.FeatureSelect & JSXBase.HTMLAttributes<HTMLFeatureSelectElement>;
            "feature-sidebar": LocalJSX.FeatureSidebar & JSXBase.HTMLAttributes<HTMLFeatureSidebarElement>;
            "feature-theme": LocalJSX.FeatureTheme & JSXBase.HTMLAttributes<HTMLFeatureThemeElement>;
            "sidebar-toggle": LocalJSX.SidebarToggle & JSXBase.HTMLAttributes<HTMLSidebarToggleElement>;
        }
    }
}
