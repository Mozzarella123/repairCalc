import { InferValueTypes } from "../../duck/helpers";
import * as actions from './action-creators';

export enum TemplatesActionType {
	TE_CREATE_TEMPLATE = 'TE_CREATE_TEMPLATE',
	TE_SET_TEMPLATES = 'TE_SET_TEMPLATES',
	TE_UPDATE_TEMPLATE = 'TE_UPDATE_TEMPLATE',
	TE_SELECT_TEMPLATE = 'TE_SELECT_TEMPLATE'
}

type TemplatesAction = ReturnType<InferValueTypes<typeof actions>>;
    
export default TemplatesAction;