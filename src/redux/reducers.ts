import { combineReducers } from 'redux'
import { Action } from "./actions"

const INITIAL_STATE = {
    sidebarActive: false,
    darkTheme: true,
}

const sidebarReducer = (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case "TOGGLE_SIDEBAR":
            return {...state, sidebarActive: !state.sidebarActive}
        case "SWITCH_THEME":
            return {...state, darkTheme: !state.darkTheme}
        default:
            return state
    }
}




export const rootReducer = combineReducers({
    sidebar: sidebarReducer
});