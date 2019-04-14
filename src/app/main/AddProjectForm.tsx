import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, FormGroup, Form, Label, Input, Button } from 'reactstrap';
import React from 'react';

export class AddProjectForm extends React.Component<{ 
    onCreateProject: (title: string) => any 
}, {}> {

    submit(e: React.FormEvent<HTMLFormElement>) {
        const { _title } = this.refs
        const { onCreateProject } = this.props
        e.preventDefault()
        onCreateProject(_title.value)
        _title.value = ''
    }

    render() {
        return (<Form onSubmit={(e) => this.submit(e)}>
            <FormGroup>
                <Label for="projectTitle">Project name</Label>
                <Input type="text"
                    ref='_title'
                    name="title" id="projectTitle" />
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>)
    }
}