import { combineReducers } from "redux";
import TemplateEditorState, { SelectedTemplateEditorState } from "./state";
import TemplatesAction, { TemplatesActionType } from "./actions";

const initialSelectedState: SelectedTemplateEditorState = {
    template: null,
    block: null,
    isEditing: false
}

export const initialTemplateState: TemplateEditorState = {
    templates: [],
    selected: initialSelectedState
}

const templateEditor = (state: TemplateEditorState = initialTemplateState, action: TemplatesAction): TemplateEditorState => {
    switch(action.type) {

        case TemplatesActionType.CREATE_TEMPLATE: {
            return {
                ...state,
                selected: {
                    ...state.selected,
                    template: {
                        id: state.templates.length > 0 ? 
                            state.templates.reduce(
                                (maxId, template) => template.id > maxId ? template.id : maxId, 
                                state.templates[0].id
                            ) + 1 : 
                            0,
                        title: '',
                        blocks: []
                    }
                }
            }
        }

        case TemplatesActionType.SELECT_TEMPLATE: {
            return {
                ...state,
                selected: {
                    ...state.selected,
                    template: state.templates.find(template => template.id === action.id)
                }
            }
        }

        case TemplatesActionType.SELECT_EDIT_TEMPLATE: {
            const template = state.templates.find(template => template.id === action.id);

            return {
                ...state,
                selected: {
                    ...state.selected,
                    isEditing: true,
                    template: { 
                        ...template,
                        blocks: template.blocks.map(block => ({ ...block }))
                    }
                }
            }
        }

        case TemplatesActionType.SET_TEMPLATES: {
            return {
                ...state,
                templates: action.templates
            }
        }

        case TemplatesActionType.UPDATE_TEMPLATE: {
            return {
                ...state,
                templates: state.templates.map(
                    template => template.id === action.template.id ? 
                        { ...action.template } : 
                        template
                )
            }
        }

        case TemplatesActionType.UPDATE_SELECTED_TEMPLATE: {
            return {
                ...state,
                selected: {
                    ...state.selected,
                    template: action.template
                }
            }
        }

        case TemplatesActionType.SELECT_BLOCK: {
            return {
                ...state,
                selected: {
                    ...state.selected,
                    block: {
                        ...state.selected.template.blocks
                            .find(block => block.id === action.id)
                    }
                }
            }
        }

        case TemplatesActionType.SET_BLOCK: {
            return {
                ...state,
                selected: {
                    ...state.selected,
                    block: null,
                    template: {
                        ...state.selected.template,
                        blocks: state.selected.template.blocks.map(
                            block => block.id === action.block.id ? action.block : block
                        )
                    }
                }
            }
        }

        default: {
            return state;
        }
    }
}

const templateEditorReducers = templateEditor;

export default templateEditorReducers;
