import * as React from 'react';
import { Nav } from 'reactstrap';
import { ITemplate } from '../../models/TemplatesStore';
import NavItem from 'reactstrap/lib/NavItem';
import NavLink from 'reactstrap/lib/NavLink';
import Button from 'reactstrap/lib/Button';
import Template from './models/Template';
import AppState from '../duck/state';
import { connect } from 'react-redux';
import { selectTemplate } from './duck/action-creators';
import { template } from '@babel/core';

interface StateProps {
    templates: Array<Template>;
}

interface DispatchProps {
    selectTemplate: (id: number) => any;
}

interface Props  extends StateProps, DispatchProps {}

const TemplatesMenuBase = ({ templates, selectTemplate }: Props) => (
    <div>
        <Nav vertical>
            {
                templates.map((template, i) => (
                    <NavItem key={'item' + i}>
                        <NavLink
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                e.preventDefault();
                                selectTemplate(template.id)
                            }}
                            href={"template" + template.id}>{template.title}</NavLink>
                        <Button onClick={() => {
                            //props.templateEditHandler(item.id, true)
                        }} >Edit</Button>
                    </NavItem>
                ))
            }
        </Nav>
    </div>
);

const TemplatesMenu = connect(
    ({ templateEditor : state }: AppState): StateProps => ({
        templates: state.templates
    }),
    (dispatch): DispatchProps => ({
        selectTemplate: id => dispatch(selectTemplate(id))
    })
)(TemplatesMenuBase);

export default TemplatesMenu;
