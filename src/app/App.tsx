import * as React from "react";
import { TemplateEditor } from "./templateEditor/TemplateEditor";
import RoomEditor from "./roomEditor/RoomEditor";
import { Provider } from "react-redux";
import { MainContainer } from "./main/MainContainer";
import { Menu } from "./Menu";
import { Route } from "react-router-dom";

export const App = () => (
  <div className='appContainer'>
    <div className="menu">
      <Menu />
    </div>
    <div className="active-part">
      <Route exact path="/" component={MainContainer} />
      <Route path="/editor" component={RoomEditor} />
      <Route path="/reports" component={TemplateEditor} />
    </div>
  </div>
);
