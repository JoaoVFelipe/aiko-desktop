import React from 'react';
import ChatTemplate from '../Components/Chat/ChatTemplate/ChatTemplate';

import './Main.scss'


const MainPage = (props) => {
    return (
        <div>
            <div className="row">
                <div>
                    Bem-vindo a aplicação de gerenciamento de sua assistente AIKO!
                </div>
            </div>
            <div className={props.menuOpen ? "row main-content-row collapsed" : "row main-content-row"}>
                <div className="col-md-5">
                    <div className="row">
                        <div>
                            O que gostaria de fazer hoje?
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <ChatTemplate></ChatTemplate>
                </div>
            </div>
        </div>

    );
}

export default MainPage;
