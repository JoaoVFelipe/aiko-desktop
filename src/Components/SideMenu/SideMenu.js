import React from 'react';
import { RiLayoutGridFill, RiMenuLine, RiSettings5Line } from 'react-icons/ri'
import './SideMenu.scss'


const SideMenu = (props) => {
    return (
        <div className={props.menuCollapsed ? "sidebar" : "sidebar collapsed"}>
            <div className="sidebar-header">
                <RiMenuLine className="sidebar-icon" onClick={props.sidenavToggle}></RiMenuLine>
                <label className="sidebar-logo">LOGO</label>
            </div>
            <div className="sidebar-items">
                <div className="item">
                    <RiLayoutGridFill className="sidebar-icon"></RiLayoutGridFill>
                    <label className="sidebar-text">Dashboard</label>
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
