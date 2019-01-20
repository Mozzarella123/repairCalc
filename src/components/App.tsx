import * as React from "react";
import { TemplateEditor } from "./TemplateEditor/TemplateEditor";
import RoomEditor from './RoomEditor/RoomEditor'

export interface AppProps { compiler: string; framework: string; }

export const App = (props: AppProps) => <RoomEditor></RoomEditor>;