import Template from "../models/Template";

export interface SelectedTemplateEditorState {
    templateId: number;
}

export default interface TemplateEditorState {
    templates : Array<Template>;
    selected: SelectedTemplateEditorState;
}
