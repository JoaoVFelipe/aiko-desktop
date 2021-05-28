import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SideMenu from './Components/SideMenu/SideMenu';
import MainPage from './Main/MainPage';


const App = () => {
    const [menuCollapsed, setMenuCollapsed] = useState(false);

    const sidenavToggle = () => {
        setMenuCollapsed(!menuCollapsed);
    };

    return (
        <div>
            <SideMenu sidenavToggle={sidenavToggle} menuCollapsed={menuCollapsed}></SideMenu>
            <div className={menuCollapsed ? 'main' : 'main collapsed'}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact={true} component={MainPage} />
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
