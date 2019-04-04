import AppState from "../store/models/AppState";
import { Action, ActionType } from "../actions/actionTypes";

export const appReducer = (state: AppState, action: Action): AppState => {

    switch(action.type) {
        case ActionType.SET_MENU_TAB: 
            return {
                ...state,
                currentTab: action.tab
            }

        default: {
            return state
        }
    }
}