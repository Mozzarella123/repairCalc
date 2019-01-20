import * as React from "react";
import * as ReactDOM from "react-dom";
import './styles/main.scss';
import { App } from "./components/App";

ReactDOM.render(
    <App compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);