import * as React from "react";
import { ITemplateBlock } from "../../models/TemplatesStore";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw } from "draft-js";

export interface ITemplateBlockEditorProps {
  block: ITemplateBlock;
}
export const TemplateBlockEditor = (props: ITemplateBlockEditorProps) => (
  <div className="templateblock-editor">
    <Editor
      onEditorStateChange={editorState => {
        props.block.setTempContent(JSON.stringify(convertToRaw(editorState.getCurrentContent())));
      }}
    />
  </div>
);
