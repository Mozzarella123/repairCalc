import { combineReducers } from "redux";
import TemplateEditorState, { SelectedTemplateEditorState } from "./state";
import TemplatesAction, { TemplatesActionType } from "./actions";
import Template from "../models/Template";

const initialSelectedState: SelectedTemplateEditorState = {
    templateId: null
}

export const initialTemplateState: TemplateEditorState = {
    templates: [],
    selected: initialSelectedState
}

export const templates = (state: Array<Template> = [], action: TemplatesAction) => {
    switch (action.type) {
        case TemplatesActionType.TE_CREATE_TEMPLATE : {
            return [...state, template(null, action)]
        }

        case TemplatesActionType.TE_SET_TEMPLATES: {
            return action.templates;
        }

        case TemplatesActionType.TE_UPDATE_TEMPLATE: {
            return state.map(
                template => template.id === action.template.id ? 
                    { ...action.template } : 
                    template
            )
        }

        default: { 
            return state
        }
    }
}

export const template = (state : Template = null, action : TemplatesAction) => {
    switch (action.type) {
        case TemplatesActionType.TE_CREATE_TEMPLATE : {
            return {
                title : action.title
            }
        }

        default : {
            return state;
        }
    }
}

export const selected = (state: SelectedTemplateEditorState = initialSelectedState, action: TemplatesAction): SelectedTemplateEditorState => {
    switch (action.type) {
        case TemplatesActionType.TE_SELECT_TEMPLATE: {
            return {
                ...state,
                templateId: action.id
            }
        }

        default: {
            return state;
        }
    }
}

const templateEditorReducers = combineReducers({
    templates,
    selected
});

export default templateEditorReducers;
