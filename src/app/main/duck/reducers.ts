import { Action, ActionTypes, MenuTab } from "./types";

export interface AppState {
    currentTab: MenuTab;
}
const initialAppState: AppState = {
    currentTab: MenuTab.RoomEditor
}

export const appReducer = (state = initialAppState, action: Action): AppState => {

    switch(action.type) {
        case ActionTypes.SET_MENU_TAB: 
            return {
                ...state,
                currentTab: action.tab
            }

        default: {
            return state
        }
    }
}