import { createStore, applyMiddleware } from "redux";
import appReducer, {initialAppState} from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
	appReducer,
	initialAppState,
	composeWithDevTools(applyMiddleware(thunk))
);
