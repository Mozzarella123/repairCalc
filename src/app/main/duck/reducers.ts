import { Action, ActionTypes, MenuTab } from "./types";
import { Room } from "../rooms/duck/types";

export interface AppState {
    currentTab: MenuTab;
    project? : {
        title : string,
        currentRoom? : string;
        rooms : Array<Room>;        
    }
}
const initialAppState: AppState = {
    currentTab: MenuTab.RoomEditor,
}

export const appReducer = (state = initialAppState, action: Action): AppState => {

    switch(action.type) {
        case ActionTypes.SET_MENU_TAB: 
            return {
                ...state,
                currentTab: action.tab
            }
        case ActionTypes.CREATE_PROJECT: {
            return {
                ...state,
                project: {
                    title: action.title,
                    rooms : []
                }
            }
        }
        default: {
            return state
        }
    }
}