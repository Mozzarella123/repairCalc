import * as React from "react";
import { ITemplateBlock } from "../../models/TemplatesStore";
import Button from "reactstrap/lib/Button";
import { observer } from "mobx-react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState, convertFromRaw } from "draft-js";
export interface TemplateBlockProps {
  blocks: Map<string, ITemplateBlock>;
  isEditing?: boolean;
  editBlockHandler?: (id: string, value: boolean) => void;
  removeBlockHandler?: (id: string) => void;
}
export const TemplateBlocks: React.SFC<TemplateBlockProps> = observer(
  (props: TemplateBlockProps) => (
    <div className="template-blocks">
      {Array.from(props.blocks.values()).map(block => (
        <div key={"block" + block.id} className="template-block">
          <div
            className="template-block-toolbar"
            style={{ display: props.isEditing ? "block" : "none" }}
          >
            <Button
              onClick={() => props.editBlockHandler(block.id, true)}
              className="template-block-toolbar-btn"
            >
              Edit
            </Button>
            <Button
              onClick={() => props.removeBlockHandler(block.id)}
              className="template-block-toolbar-btn"
            >
              Remove
            </Button>
          </div>
          <div className="title"> {block.title}</div>
          <div className="content">
            <Editor
              readonly
              toolbarHidden
              editorState={
                block.content !== ""
                  ? EditorState.createWithContent(
                      convertFromRaw(JSON.parse(block.content))
                    )
                  : EditorState.createEmpty()
              }
            />
          </div>
        </div>
      ))}
    </div>
  )
);
TemplateBlocks.defaultProps = {
  isEditing: false
};
