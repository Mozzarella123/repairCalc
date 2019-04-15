import { shallow, mount, render } from 'enzyme';
import * as React from 'react';
import MainComponent  from './MainComponent'

jest.mock('./rooms/RoomListContainer', () => "rooms")
jest.mock('./AddProjectFormContainer', () => "form")

describe("MainComponent UI test", () => {
    it("Renders Correctly", () => {
        expect(mount(<MainComponent />)).toMatchSnapshot()
    })
})