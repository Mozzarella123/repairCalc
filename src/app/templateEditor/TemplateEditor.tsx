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
import Template from "./models/Template";
import { connect } from "react-redux";
import AppState from "../duck/state";
import { template } from "@babel/core";
import { dispatch } from "d3";
import { ThunkDispatch } from "redux-thunk";
import TemplatesAction from "./duck/actions";
import { fetchTemplates } from "./duck/thunks";

interface StateProps {
    templates: Template[];
    selectedTemplate: Template;
}

interface DispatchProps {
    fetchTemplates: () => any;
}

interface Props extends StateProps, DispatchProps {}

export const TemplateEditorBase = ({ }: Props) => {
    const { currentTemplate } = templateStore,
        mode =
            currentTemplate && currentTemplate.isEditing
                ? "редактирования"
                : "просмотра";
    return (
        <div className="template-editor">
            <div className="template-editor-toolbar">
                <span className="mode">Режим {mode}</span>
                {
                    currentTemplate && currentTemplate.isEditing ? (
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
            {
                currentTemplate && currentTemplate.editingBlock ? (
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

const TemplateEditor = connect(
    ({ templateEditor: state }: AppState): StateProps => ({
        templates: state.templates,
        selectedTemplate: state.templates.find(template => template.id === state.selected.templateId)
    }),
    (dispatch: ThunkDispatch<AppState, {}, TemplatesAction>): DispatchProps => ({
        fetchTemplates: () => dispatch(fetchTemplates())
    })
)(TemplateEditorBase);

export default TemplateEditor;
