import { shallow, mount, render } from 'enzyme';
import React from 'react';
import { MainComponent } from '../../MainComponent'

jest.mock('../../rooms/RoomListContainer', () => "rooms")
jest.mock('../../AddProjectFormContainer', () => "form")

describe("MainComponent UI test", () => {
    it("Renders Correctly", () => {
        expect(shallow(<MainComponent/>)).toMatchSnapshot()
    })
})