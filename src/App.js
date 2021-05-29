import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SideMenu from './Components/SideMenu/SideMenu';
import MainPage from './Main/MainPage';


const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const sidenavToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <SideMenu sidenavToggle={sidenavToggle} menuOpen={menuOpen}></SideMenu>
            <div className={menuOpen ? 'main collapsed' : 'main not-collapsed'}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact={true} component={() => <MainPage menuOpen={menuOpen} />} />
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
