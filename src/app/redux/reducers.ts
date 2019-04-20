import {combineReducers} from "redux";
import mainReducer from "../main/duck/redux/reducers";
import templateEditorReducers from "../templateEditor/redux/reducers";
import roomEditorReducers from "../roomEditor/redux/reducers";

const appReducer = combineReducers({
	main: mainReducer,
	templateEditor: templateEditorReducers,
	roomEditor: roomEditorReducers
});

export default appReducer;
