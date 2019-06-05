import * as React from 'react';
import { Nav } from 'reactstrap';
import { ITemplate } from '../../models/TemplatesStore';
import NavItem from 'reactstrap/lib/NavItem';
import NavLink from 'reactstrap/lib/NavLink';
import Button from 'reactstrap/lib/Button';
import Template from './models/Template';

export interface TemplatesMenuStateProps {
    templates: Array<Template>;
}


export interface TemplatesMenuProps  extends TemplatesMenuStateProps{
    // templateClickHandler?: (id: string) => void,
    // templateEditHandler?: (id: string, value : boolean) => void
}

export const TemplatesMenuComponent = ({templates}: TemplatesMenuProps) => (
    <div>
        <Nav vertical>
            {templates.map((item, i) => (
                <NavItem key={'item' + i}>
                    <NavLink
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                            e.preventDefault();
                            // props.templateClickHandler(item.id);
                        }}
                        href={"template" + item.id}>{item.title}</NavLink>
                    <Button onClick={() => {
                        //props.templateEditHandler(item.id, true)
                    }} >Edit</Button>
                </NavItem>
            ))}
        </Nav>
    </div>
);