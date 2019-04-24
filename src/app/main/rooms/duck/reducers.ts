import Room from "../../models/Room";
import MainAction, {MainActionType} from "../../duck/actions";

export const roomsReducer = (state: Array<Room>, action: MainAction): Array<Room> => {
	switch (action.type) {
		case MainActionType.ADD_ROOM: {
			return [...state, roomReducer({}, action)];
		}

		case MainActionType.REMOVE_ROOM: {
			return state.filter(v => v.id !== action.id);
		}

		default: {
			return state;
		}
	}
};

export const roomReducer = (state: Room = {}, action: MainAction): Room => {
	switch (action.type) {
		case MainActionType.ADD_ROOM:
			return {
				title: action.title,
			};

		default: {
			return state;
		}
	}
};
