import * as React from 'react';
import Template from './models/Template';
import ListGroup from 'reactstrap/lib/ListGroup';
import ListGroupItem from 'reactstrap/lib/ListGroupItem';
import { connect } from 'react-redux';
import AppState from '../duck/state';
import { selectTemplate } from './duck/action-creators';

interface StateProps {
    list: Template[];
    selected: Template;
}

interface  DispatchProps {
    selectTemplate: (template: Template) => any;
}

interface Props extends StateProps, DispatchProps {}

const TemplatesListBase = ({ list, selected, selectTemplate }: Props) => (
    <ListGroup>
        {
            list.map((template, index) => (
                <ListGroupItem 
                    key={index} 
                    action
                    active={selected === template}
                    onClick={() => selectTemplate(template)}>
                    {template.title}
                </ListGroupItem>
            ))
        }
    </ListGroup>
)

const TemplatesList = connect(
    ({templateEditor: state}: AppState): StateProps => ({
        list: state.templates,
        selected: state.selected.template
    }),
    (dispatch): DispatchProps => ({
        selectTemplate: template => dispatch(selectTemplate(template.id))
    })
)(TemplatesListBase);

export default TemplatesList;
