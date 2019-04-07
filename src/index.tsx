import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles/main.scss";
import { App } from "./app/App";
import { Provider } from "react-redux";
import { appReducer } from "./app/main/duck/reducers";
import { createStore } from "redux";
import rootReducer from "./reducer";

export const store = createStore(
    rootReducer
    //devtools
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("example")
);
