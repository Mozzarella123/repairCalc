import * as React from "react";
import TemplateStore from "../../models/TemplatesStore";
import { observer } from "mobx-react";
import SplitPane from "react-split-pane";
import { TemplatesMenuComponent } from "./TemplatesMenuComponent";
import { TemplateBlocks } from "./TemplateBlocks";
import Button from "reactstrap/lib/Button";
import { TemplateBlocksMenu } from "./TemplateBlocksMenu";
import Modal from "reactstrap/lib/Modal";
import ModalBody from "reactstrap/lib/ModalBody";
import ModalHeader from "reactstrap/lib/ModalHeader";
import ModalFooter from "reactstrap/lib/ModalFooter";
import { TemplateBlockEditor } from "./TemplateBlockEditor";
import { TemplatesMenuContainer } from "./TemplatesMenuContainer";
const templateStore = TemplateStore.create({
  templates: {
    "1": {
      id: "1",
      title: "Title 1",
      isEditing: false,
      blocks: {
        "block1": {
          id: "block1",
          title: "block1",
          type: "a",
          isEditing: false,
          content : "",
          tempContent : ""
        },
        "block2": {
          id: "block2",
          title: "block2",
          type: "b",
          isEditing: false,
          content : "",
          tempContent : ""
        }
      }
    },
    "2": {
      id: "2",
      title: "Title 2",
      blocks: {},
      isEditing: false
    },
    "3": {
      id: "3",
      title: "Title 2",
      blocks: {},
      isEditing: false
    }
  },
  currentTemplate : 1
});

export const TemplateEditor =() => {
  const { currentTemplate } = templateStore,
    mode =
      currentTemplate && currentTemplate.isEditing
        ? "редактирования"
        : "просмотра";
  return (
    <div className="template-editor">
      <div className="template-editor-toolbar">
        <span className="mode">Режим {mode}</span>
        {currentTemplate && currentTemplate.isEditing ? (
          <div>
            <Button>Save</Button>
            <Button
              onClick={() =>
                templateStore.setIsEditing(currentTemplate.id, false)
              }
            >
              Cancel
            </Button>
          </div>
        ) : (
          <div>
            <Button color="primary">Экспорт</Button>
            <Button>Печать</Button>
          </div>
        )}
      </div>
      <SplitPane split="vertical" primary="first" maxSize={250} minSize={150}>
        {currentTemplate && currentTemplate.isEditing ? (
          <TemplateBlocksMenu />
        ) : (
          <TemplatesMenuContainer
            // templateClickHandler={templateStore.setCurrentTemplate}
            // templateEditHandler={templateStore.setIsEditing}
          />
        )}

        {currentTemplate ? (
          <TemplateBlocks
            editBlockHandler={currentTemplate.setBlockEditing}
            isEditing={currentTemplate.isEditing}
            blocks={currentTemplate.blocks}
          />
        ) : (
          <div />
        )}
      </SplitPane>
      {currentTemplate && currentTemplate.editingBlock ? (
        <Modal isOpen={true}>
          <ModalHeader
            toggle={() =>
              currentTemplate.setBlockEditing(
                currentTemplate.editingBlock.id,
                false
              )
            }
          >
            {currentTemplate.editingBlock.title}
          </ModalHeader>
          <ModalBody>
            <TemplateBlockEditor block={currentTemplate.editingBlock} />
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                currentTemplate.editingBlock.setContent(
                  currentTemplate.editingBlock.tempContent
                );
                console.log(JSON.parse(currentTemplate.editingBlock.tempContent))
                currentTemplate.editingBlock.setEditing(false);
              }}
              color="primary"
            >
              Save
            </Button>
            <Button
              onClick={() => currentTemplate.editingBlock.setEditing(false)}
              color="secondary"
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      ) : null}
    </div>
  );
};
