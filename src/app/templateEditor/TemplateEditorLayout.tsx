import * as React from 'react';
import SplitPane from 'react-split-pane';
import TemplatesList from './TemplatesList';
import TemplateEditor from './TemplateEditor';
import { connect } from 'react-redux';
import AppState from '../duck/state';
import { fetchTemplates } from './duck/thunks';
import { ThunkDispatch } from 'redux-thunk';
import TemplatesAction from './duck/actions';
import Template from './models/Template';
import TemplatesView from './TemplateView';

interface StateProps {
    selectedTemplate: Template;
}

interface DispatchProps {
    fetchTemplates: () => any;
}

interface Props extends StateProps, DispatchProps {}

const TemplatesEditorLayoutBase = ({ fetchTemplates, selectedTemplate }: Props) => {
    //componentDidMount
    React.useEffect(() => fetchTemplates(), [])

    return (
        <SplitPane split='vertical' minSize={150} defaultSize={300}>
            <TemplatesList/>
            {
                selectedTemplate ?
                    <TemplatesView/> :
                    <div>Select template</div>
            }
        </SplitPane>
    )
}

const TemplatesEditorLayout = connect(
    ({ templateEditor: state }: AppState): StateProps => ({
        selectedTemplate: state.selected.template
    }),
    (dispatch: ThunkDispatch<AppState, {}, TemplatesAction>): DispatchProps => ({
        fetchTemplates: () => dispatch(fetchTemplates())
    })
)(TemplatesEditorLayoutBase);

export default TemplatesEditorLayout;
