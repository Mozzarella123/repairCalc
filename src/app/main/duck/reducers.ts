import { Action, ActionTypes } from "./types";
import { Room } from "../rooms/duck/types";

export interface AppState {
    project? : ProjectState
}

export interface ProjectState {
    title : string;
    currentRoom? : string;
    rooms : Array<Room>; 
}

const initialAppState: AppState = {
}

export const appReducer = (state = initialAppState, action: Action): AppState => {

    switch(action.type) {
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