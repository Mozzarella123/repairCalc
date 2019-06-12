import * as React from 'react';
import Block from './models/Block';
import Button from 'reactstrap/lib/Button';
import { Editor, convertFromHTML, ContentState, EditorState } from 'draft-js';

interface Props {
    block: Block;
    onEdit: () => any;
}

const TemplatesBlockView = ({ block, onEdit }: Props) => {
    const html = convertFromHTML(block.content);
    const contentState = ContentState.createFromBlockArray(html.contentBlocks, html.entityMap);
    const state = EditorState.createWithContent(contentState);
    return(
        <div>
            <span>{block.title}</span>
            <Button onClick={() => onEdit() }>Edit</Button>
            <Editor
                onChange={() => {}}
                editorState={state}
                readOnly/>
        </div> 
    )
}

export default TemplatesBlockView;
