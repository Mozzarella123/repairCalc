import { createStore } from "redux";
import { appReducer } from "../reducers/appReducer";
import { initialAppState } from "./initialStates";

export const appStore = createStore(
    appReducer,
    initialAppState,
    //devtools
)