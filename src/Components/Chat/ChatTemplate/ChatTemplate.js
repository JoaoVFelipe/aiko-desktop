import React from 'react';
import ChatAnimation from '../ChatAnimation/ChatAnimation';
import './ChatTemplate.scss'


const ChatTemplate = (props) => {
    return (
        <div>
            <div className="chat-container">
                <div className="chat-historic">
                    Histórico do chat
                </div>
                <div className="chat-animation-textbox-container">
                    <div className="chat-animation">
                        <ChatAnimation></ChatAnimation>
                    </div>
                    <div className="chat-textbox">
                        input do chat
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ChatTemplate;