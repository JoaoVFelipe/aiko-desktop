import React from 'react';
import { RiSendPlane2Fill } from 'react-icons/ri';
import './ChatInput.scss'


const ChatInput = (props) => {
    return (
        <div className="text-container">
            <div className="row text-row">
                <div className="col-md-10">
                    <textarea className="chat-textarea"></textarea>
                </div>
                <div className="col-md-2">
                    <button type="button" class="btn btn-primary chat-sendbutton">
                        <RiSendPlane2Fill></RiSendPlane2Fill>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default ChatInput;