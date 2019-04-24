import {createStore} from "redux";
import appReducer, {initialAppState} from "./reducers";

export const store = createStore(
	appReducer,
	initialAppState
);
