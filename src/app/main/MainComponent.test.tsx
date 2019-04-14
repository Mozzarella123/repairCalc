import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json'
import * as React from "react";
import {MainComponent}  from './MainComponent'

jest.mock('./rooms/RoomListContainer', () => "rooms")
jest.mock('./AddProjectFormContainer', () => "form")

describe("MainComponent UI test", () => {
    it('renders', () => {
    const wrapper = shallow(<div>
      <h1>Hello, Enzyme!</h1>
    </div>)
    expect(wrapper.find('h1').html()).toMatch(/Hello, Enzyme/)
  })
    it("Renders Correctly", () => {
        expect(shallow(<MainComponent />)).toMatchSnapshot()
    })
})