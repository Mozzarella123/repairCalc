export enum TemplatesActionType {
	CREATE_TEMPLATE = 'CREATE_TEMPLATE',
	ADD_ROOM = 'ADD_ROOM',
	REMOVE_ROOM = 'REMOVE_ROOM',
	SELECT_ROOM = 'SELECT_ROOM'
}

export interface CreateTemplateAction {
	type : TemplatesActionType.CREATE_TEMPLATE,
	title: string
}

export const createTemplate = (title: string) : CreateTemplateAction => ({
	type : TemplatesActionType.CREATE_TEMPLATE,
	title
});

type TemplatesAction =
    CreateTemplateAction
    
export default TemplatesAction;