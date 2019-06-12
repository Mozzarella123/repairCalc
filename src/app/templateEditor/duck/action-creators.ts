import { TemplatesActionType } from "./actions";
import Template from "../models/Template";
import { template } from "@babel/core";
import Block from "../models/Block";

export const createTemplate = (title: string) => (<const>{
	type : TemplatesActionType.CREATE_TEMPLATE,
	title
});

export const setTemplates = (templates: Template[]) => (<const>{
    type: TemplatesActionType.SET_TEMPLATES,
    templates
});

export const updateTemplate = (template: Template) => (<const>{
    type: TemplatesActionType.UPDATE_TEMPLATE,
    template
});

export const selectTemplate = (id: number) => (<const>{
    type: TemplatesActionType.SELECT_TEMPLATE,
    id
});

export const selectEditTemplate = (id: number) => (<const>{
    type: TemplatesActionType.SELECT_EDIT_TEMPLATE,
    id
});

export const updateSelectedTemplate = (template: Template) => (<const>{
    type: TemplatesActionType.UPDATE_SELECTED_TEMPLATE,
    template
});

export const selectBlock = (id: number) => (<const>{
    type: TemplatesActionType.SELECT_BLOCK,
    id
});

export const setBlock = (block: Block) => (<const>{
    type: TemplatesActionType.SET_BLOCK,
    block
});
