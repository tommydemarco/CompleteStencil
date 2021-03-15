export interface Action {
    type: string;
    payload?: string;
}

export const toggleSidebar = (): Action => {
    return { type: "TOGGLE_SIDEBAR" }
}

export const switchTheme = (): Action => {
    return { type: "SWITCH_THEME" }
}

