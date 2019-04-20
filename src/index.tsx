import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles/main.scss";
import { App } from "./app/App";
import { Provider } from "react-redux";
import { HashRouter} from 'react-router-dom'
import {store} from "./app/redux/store";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("example")
);
