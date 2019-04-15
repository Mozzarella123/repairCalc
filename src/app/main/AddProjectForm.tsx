import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, FormGroup, Form, Label, Input, Button } from 'reactstrap';
import React from 'react';

interface Props {
    onCreateProject: (title: string) => any
}

export const AddProjectForm = ({ onCreateProject }: Props) => {
    let _title : HTMLInputElement;
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onCreateProject(_title.value)
        _title.value = ''
    }

    return (<Form onSubmit={submit}>
        <FormGroup>
            <Label for="projectTitle">Project name</Label>
            <Input type="text"
                innerRef={(ref) => _title = ref}
                name="title" id="projectTitle" />
        </FormGroup>
        <Button type="submit">Submit</Button>
    </Form>)
}

export default AddProjectForm;