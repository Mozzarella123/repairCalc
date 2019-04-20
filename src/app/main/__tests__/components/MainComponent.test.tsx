import { shallow, mount, render } from 'enzyme';
import React from 'react';
import { MainComponent } from '../../MainComponent'

jest.mock('../../roomsReducer/RoomListContainer', () => <div>rooms</div>)
jest.mock('../../AddProjectFormContainer', () => <div>add project</div>)

describe("MainComponent UI test", () => {
    it("Renders Correctly", () => {
        expect(shallow(<MainComponent/>)).toMatchSnapshot()
    })
})