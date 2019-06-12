import * as React from "react";
import { ITemplateBlock } from "../../models/TemplatesStore";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState, ContentState } from "draft-js";
import Block from "./models/Block";
import Modal from "reactstrap/lib/Modal";
import ModalHeader from "reactstrap/lib/ModalHeader";
import Input from "reactstrap/lib/Input";
import ModalBody from "reactstrap/lib/ModalBody";
import ModalFooter from "reactstrap/lib/ModalFooter";
import Button from "reactstrap/lib/Button";
import { convertToHTML, convertFromHTML } from "draft-convert";
import { connect } from "react-redux";
import AppState from "../duck/state";
import { setBlock, selectBlock } from "./duck/action-creators";

interface StateProps {
    block: Block;
}

interface DispatchProps {
    saveBlock: (block: Block) => any;
    close: () => any;
}

interface Props extends StateProps, DispatchProps { }

export const TemplateBlockEditorBase = ({ block, saveBlock, close }: Props) => {
    const [editorState, setEditorState] = React.useState(
        EditorState.createWithContent(convertFromHTML({})(block.content))
    );

    const [title, setTitle] = React.useState(block.title);

    return (
        <Modal isOpen toggle={close}>
            <ModalHeader>
                <Input value={title} onChange={e => setTitle(e.target.value)} />
            </ModalHeader>
            <ModalBody>
                <Editor
                    onEditorStateChange={setEditorState}
                    editorState={editorState}
                />
            </ModalBody>
            <ModalFooter>
                <Button onClick={() => saveBlock({
                    ...block,
                    title,
                    content: convertToHTML({})(editorState.getCurrentContent())
                })}>
                    Save
                </Button>
            </ModalFooter>
        </Modal>
    )
}

const TemplateBlockEditor = connect(
    ({ templateEditor: state }: AppState): StateProps => ({
        block: state.selected.block
    }),
    (dispatch): DispatchProps => ({
        close: () => dispatch(selectBlock(null)),
        saveBlock: block => dispatch(setBlock(block))
    })
)(TemplateBlockEditorBase);

export default TemplateBlockEditor;
