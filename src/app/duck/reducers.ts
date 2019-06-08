import { combineReducers } from "redux";
import mainReducer from "../main/duck/reducers";
import templateEditorReducers, { initialTemplateState } from "../templateEditor/duck/reducers";
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
	templateEditor: initialTemplateState,
	roomEditor: initialRoomEditorState
};

export default appReducer;
