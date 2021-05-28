import React, { useState } from 'react';
import SideMenu from '../Components/SideMenu/SideMenu';

import './Main.scss'


const MainPage = () => {
    const [menuCollapsed, setMenuCollapsed] = useState(false);

    const sidenavToggle = () => {
        console.log("ENTROU", menuCollapsed)
        setMenuCollapsed(!menuCollapsed);
    };

    return (
        <div>
            <SideMenu sidenavToggle={sidenavToggle} menuCollapsed={menuCollapsed}></SideMenu>
            <div className={menuCollapsed ? 'main' : 'main collapsed'}>
                Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo
            </div>
        </div>
    );
}

export default MainPage;
