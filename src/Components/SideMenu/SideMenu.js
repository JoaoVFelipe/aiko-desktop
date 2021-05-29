import React from 'react';
import { RiChat1Line, RiComputerLine, RiMenuLine, RiSettings5Line } from 'react-icons/ri'
import './SideMenu.scss'


const SideMenu = (props) => {
    return (
        <div className={props.menuOpen ? "sidebar not-collapsed" : "sidebar collapsed"}>
            <div className="sidebar-header">
                <RiMenuLine className="sidebar-icon" onClick={props.sidenavToggle}></RiMenuLine>
                <label className="sidebar-logo">Assistente AIKO</label>
            </div>
            <div className="sidebar-items">
                <div className="item">
                    <RiChat1Line className="sidebar-icon"></RiChat1Line>
                    <label className="sidebar-text">Sua Assistente</label>
                </div>

                <div className="item">
                    <RiComputerLine className="sidebar-icon"></RiComputerLine>
                    <label className="sidebar-text">Seus dispositivos</label>
                </div>

                <div className="item">
                    <RiSettings5Line className="sidebar-icon"></RiSettings5Line>
                    <label className="sidebar-text">Configurações</label>
                </div>
            </div>
        </div>
    );
}

export default SideMenu;
