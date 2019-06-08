import { TemplatesActionType } from "./actions";
import Template from "../models/Template";

export const createTemplate = (title: string) => (<const>{
	type : TemplatesActionType.TE_CREATE_TEMPLATE,
	title
});

export const setTemplates = (templates: Template[]) => (<const>{
    type: TemplatesActionType.TE_SET_TEMPLATES,
    templates
});

export const updateTemplate = (template: Template) => (<const>{
    type: TemplatesActionType.TE_UPDATE_TEMPLATE,
    template
});

export const selectTemplate = (id: number) => (<const>{
    type: TemplatesActionType.TE_SELECT_TEMPLATE,
    id
});
