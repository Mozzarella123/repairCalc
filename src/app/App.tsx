import * as React from "react";
import { TemplateEditor } from "./templateEditor/TemplateEditor";
import RoomEditor from "./roomEditor/RoomEditor";
import { Provider } from "react-redux";
import { MainContainer } from "./main/MainContainer";
import { Menu } from "./Menu";
import { Route } from "react-router-dom";
import LoginForm from "./login/components/LoginFrom";

export const App = () => (
    <div className='appContainer'>
        {
            //todo STUB
            true ?
                <LoginForm /> : 
                <React.Fragment>
                    <div className="menu">
                        <Menu />
                    </div>
                    <div className="active-part">
                        <Route exact path="/" component={MainContainer} />
                        <Route path="/editor" component={RoomEditor} />
                        <Route path="/reports" component={TemplateEditor} />
                    </div>
                </React.Fragment>
    }
    </div>
);
