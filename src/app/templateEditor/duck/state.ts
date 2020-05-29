import Template from "../models/Template";
import Block from "../models/Block";

export interface SelectedTemplateEditorState {
    template: Template;
    block: Block;
    isEditing: boolean;
}

export default interface TemplateEditorState {
    templates : Array<Template>;
    selected: SelectedTemplateEditorState;
}
