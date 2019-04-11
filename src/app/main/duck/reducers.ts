import { Action, ActionTypes, MenuTab } from "./types";
import Context from "../../../libraries/Context";

export interface AppState {
    currentTab: MenuTab;
    rooms : Array<Context>;
}
const initialAppState: AppState = {
    currentTab: MenuTab.RoomEditor,
    rooms : []
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