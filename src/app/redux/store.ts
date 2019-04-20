import {createStore} from "redux";
import appReducer from "./reducers";
import {initialAppState} from "./AppState";

export const store = createStore(
	appReducer,
	initialAppState
);
