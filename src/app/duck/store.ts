import { createStore, applyMiddleware } from "redux";
import appReducer, {initialAppState} from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(
	appReducer,
	initialAppState,
	applyMiddleware(thunk)
);
