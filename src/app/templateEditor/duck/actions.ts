import { InferValueTypes } from "../../duck/helpers";
import * as actions from './action-creators';

export enum TemplatesActionType {
	CREATE_TEMPLATE = 'TE_CREATE_TEMPLATE',
	SET_TEMPLATES = 'TE_SET_TEMPLATES',
	UPDATE_TEMPLATE = 'TE_UPDATE_TEMPLATE',
	SELECT_TEMPLATE = 'TE_SELECT_TEMPLATE',
	UPDATE_SELECTED_TEMPLATE = 'UPDATE_SELECTED_TEMPLATE',
	SELECT_EDIT_TEMPLATE = 'TE_SELECT_EDIT_TEMPLATE',
	SELECT_BLOCK = 'TE_SELECT_BLOCK',
	SET_BLOCK = 'TE_SET_BLOCK'
}

type TemplatesAction = ReturnType<InferValueTypes<typeof actions>>;
    
export default TemplatesAction;
