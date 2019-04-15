import { mount } from "enzyme";
import React from "react" ;
import { AddProjectForm } from "./AddProjectForm";


describe("AddProjectForm UI", ()=> {
    const _onCreateProject = jest.fn();
        const wrapper = mount(<AddProjectForm onCreateProject={_onCreateProject}/>);
        const input  = wrapper.find('input[name="title"]').first();
        const form = wrapper.find('form').first();

    (input.instance() as unknown as HTMLInputElement).value = "Project 1"
    form.simulate('submit');

    it('form clear', () => {
        expect((input.instance() as unknown as HTMLInputElement).value).toEqual("");
    })

    it('submit handler', () => {
        expect(_onCreateProject).toBeCalled()
    })

    it('submit with title', () => {
        expect(_onCreateProject).toBeCalledWith("Project 1")
    })

})