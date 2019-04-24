import {combineReducers} from "redux";
import mainReducer from "../main/duck/reducers";
import templateEditorReducers, {initialTemplateEditorState} from "../templateEditor/duck/reducers";
import roomEditorReducers, {initialRoomEditorState} from "../roomEditor/duck/reducers";
import {initialMainState} from "../main/duck/reducers";
import AppState from "./state";

const appReducer = combineReducers({
	main: mainReducer,
	templateEditor: templateEditorReducers,
	roomEditor: roomEditorReducers
});

export const initialAppState : AppState = {
	main: initialMainState,
	templateEditor: initialTemplateEditorState,
	roomEditor: initialRoomEditorState
};

export default appReducer;
