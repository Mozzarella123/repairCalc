import { appReducer } from "./app/main/duck/reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  appReducer
});

export default rootReducer;
