import * as React from "react";
import { TemplateEditor } from "./TemplateEditor/TemplateEditor";
import RoomEditor from './RoomEditor/RoomEditor'
import { Provider } from "react-redux";
import { initialAppState } from "../store/initialStates";
import { appStore } from "../store/store";
import { RootLayout } from "./layouts/RootLayout";


export const App = () => (
    <Provider store={appStore}>
        <RootLayout/>
    </Provider>
);


