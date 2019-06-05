import { combineReducers } from "redux";
import mainReducer from "../main/duck/reducers";
import templateEditorReducers from "../templateEditor/duck/reducers";
import roomEditorReducers, { initialRoomEditorState } from "../roomEditor/duck/reducers";
import { initialMainState } from "../main/duck/reducers";
import AppState from "./state";

const appReducer = combineReducers({
	main: mainReducer,
	templateEditor: templateEditorReducers,
	roomEditor: roomEditorReducers
});

export const initialAppState: AppState = {
	main: initialMainState,
	templateEditor: {
		templates: [{
			title: "Template 1"
		}, {
			title: "Template 2"
		}]
	},
	roomEditor: initialRoomEditorState
};

export default appReducer;
