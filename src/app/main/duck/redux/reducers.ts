import MainState, {initialMainState} from "./MainState";
import MainAction, {MainActionType} from "./actions";
import {roomsReducer} from "../../rooms/duck/reducers";

function mainReducer(state: MainState = initialMainState, action: MainAction): MainState {

	switch (action.type) {
		case MainActionType.CREATE_PROJECT: {
			// TODO: on server?
			return state;
		}

		case MainActionType.SELECT_ROOM: {
			return {
				...state,
				selected: {
					...state.selected,
					roomId: action.id
				}
			}
		}

		case MainActionType.REMOVE_ROOM:
		case MainActionType.ADD_ROOM: {
			return {
				...state,
				project: {
					...state.project,
					rooms: roomsReducer(state.project.rooms, action)
				}
			}
		}

		default: {
			return state;
		}
	}
}

export default mainReducer;
