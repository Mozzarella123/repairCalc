import * as React from 'react';
import Template from './models/Template';
import TemplatesBlockView from './TemplateBlockView';
import { connect } from 'react-redux';
import AppState from '../duck/state';
import Block from './models/Block';
import { selectBlock } from './duck/action-creators';
import TemplateBlockEditor from './TemplateBlockEditor';

interface StateProps {
    template: Template;
    editingBlock: Block;
}

interface DispatchProps {
    saveTemplate: () => any;
    setEditingBlock: (block: Block) => any;
}

interface Props extends StateProps, DispatchProps {}

const TemplatesViewBase = ({ template, saveTemplate, setEditingBlock, editingBlock }: Props ) => (
    <div>
        <p>{template.title}</p>
        {
            template.blocks.map((block, index) => (
                <div key={index}>
                    <TemplatesBlockView
                        block={block}
                        onEdit={() => setEditingBlock(block)}/>
                </div>
            ))
        }
        {
            editingBlock ? 
                <TemplateBlockEditor/>
                : null
        }
    </div>
)

const TemplatesView = connect(
    ({templateEditor: state}: AppState): StateProps => ({
        template: state.selected.template,
        editingBlock: state.selected.block
    }),
    (dispatch): DispatchProps => ({
        saveTemplate: () => {},
        setEditingBlock: block => dispatch(selectBlock(block.id))
    })
)(TemplatesViewBase);

export default TemplatesView;
