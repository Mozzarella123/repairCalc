import MainState from "../../duck/state";
import mainReducer, {initialSelectedState} from "../../duck/reducers";
import {selectRoom} from "../../duck/actions";

describe('Select room tests', () => {
	it('First room select', () => {
		const state: MainState = {
			project: {
				title: 'test_project',
				rooms: [
					{ id: 1, title: 'test_room1'},
					{ id: 2, title: 'test_room1'}
				]
			},
			selected: initialSelectedState
		}, action = selectRoom(1),
		   result = mainReducer(state, action);

		expect(result).toEqual({
			...state,
			selected: { roomId: 1 }
		});
	})
});

