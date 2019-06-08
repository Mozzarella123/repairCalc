import * as React from "react";
import TemplateEditor from "./templateEditor/TemplateEditor";
import RoomEditor from "./roomEditor/RoomEditor";
import { Provider } from "react-redux";
import { MainContainer } from "./main/MainContainer";
import { Menu } from "./Menu";
import { Route } from "react-router-dom";
import LoginForm from "./login/components/LoginFrom";

export const App = () => {
    const [isLogin, setIsLogin] = React.useState(false);
    return (
    <div className='appContainer'>
        {
            //todo STUB
            isLogin ?
                <React.Fragment>
                    <div className="menu">
                        <Menu />
                    </div>
                    <div className="active-part">
                        <Route exact path="/" component={MainContainer} />
                        <Route path="/editor" component={RoomEditor} />
                        <Route path="/reports" component={TemplateEditor} />
                    </div>
                </React.Fragment> : 
                <LoginForm isLoginned={isLogin} onLogin={() => setIsLogin(!isLogin)}/> 

    }
    </div>
)};
