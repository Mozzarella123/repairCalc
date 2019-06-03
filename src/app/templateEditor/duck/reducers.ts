import { combineReducers } from "redux";
import TemplateEditorState from "./state";
import TemplatesAction, { TemplatesActionType } from "./actions";


export const templates = (state: Array<Template> = [], action: TemplatesAction) => {
    switch (action.type) {
        case TemplatesActionType.CREATE_TEMPLATE : {
            return [...state, template({}, action)]
        }
        default: { 
            return state
         }
    }
}

export const template = (state : Template = {}, action : TemplatesAction) => {
    switch (action.type) {
        case TemplatesActionType.CREATE_TEMPLATE : {
            return {
                title : action.title
            }
        }
        default : {
            return state;
        }
    }
}

const templateEditorReducers = combineReducers({
    templates
});

export default templateEditorReducers;
