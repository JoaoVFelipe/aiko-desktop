import React from 'react';
import ChatAnimation from '../ChatAnimation/ChatAnimation';
import ChatHistory from '../ChatHistory/ChatHistory';
import ChatInput from '../ChatInput/ChatInput';
import './ChatTemplate.scss'


const ChatTemplate = (props) => {
    return (
        <div>
            <div className="chat-container">

                <div className="chat-animation-textbox-container">
                    <div className="chat-animation">
                        <ChatAnimation></ChatAnimation>
                    </div>

                </div>
                <div className="chat-animation-textbox-container">
                    <div className="chat-historic">
                        <ChatHistory></ChatHistory>
                    </div>
                    <div className="chat-textbox">
                        <ChatInput></ChatInput>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ChatTemplate;