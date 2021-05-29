import React, { useState } from 'react';
import './ChatHistory.scss'


const ChatHistory = (props) => {
    const [chatHistory, setChatHistory] = useState([
        {
            sender: 'user',
            text: 'Hi!'
        },
        {
            sender: 'aiko',
            text: 'Hi, how are you!'
        },
        {
            sender: 'user',
            text: 'Hi!'
        },
        {
            sender: 'aiko',
            text: 'Hi, how are you!'
        },
        {
            sender: 'user',
            text: 'Hi!'
        },
        {
            sender: 'aiko',
            text: 'Hi, how are you!'
        },
        {
            sender: 'user',
            text: 'Hi!'
        },
        {
            sender: 'aiko',
            text: 'Hi, how are you!'
        },
        {
            sender: 'user',
            text: 'Hi!'
        },
        {
            sender: 'aiko',
            text: 'Hi, how are you!'
        },
        {
            sender: 'user',
            text: 'Hi!'
        },
        {
            sender: 'aiko',
            text: 'Hi, how are you!'
        },
        {
            sender: 'user',
            text: 'Hi!'
        },
        {
            sender: 'aiko',
            text: 'Hi, how are you!'
        },
        {
            sender: 'user',
            text: 'Hi!'
        },
        {
            sender: 'aiko',
            text: 'Hi, how are you!'
        },
        {
            sender: 'user',
            text: 'Hi!'
        },
        {
            sender: 'aiko',
            text: 'Hi, how are you!'
        },
        {
            sender: 'user',
            text: 'Hi!'
        },
        {
            sender: 'aiko',
            text: 'Hi, how are you!'
        },
        {
            sender: 'user',
            text: 'Hi!'
        },
        {
            sender: 'aiko',
            text: 'Hi, how are you!'
        },
        {
            sender: 'user',
            text: 'Hi!'
        },
        {
            sender: 'aiko',
            text: 'Hi, how are you!'
        },
        {
            sender: 'user',
            text: 'Hi!'
        },
        {
            sender: 'aiko',
            text: 'Hi, how are you!'
        },
        {
            sender: 'user',
            text: 'Hi!'
        },
        {
            sender: 'aiko',
            text: 'Hi, how are you!'
        },
        {
            sender: 'user',
            text: 'Hi!'
        },
        {
            sender: 'aiko',
            text: 'Hi, how are you!'
        },
        {
            sender: 'user',
            text: 'Hi!'
        },
        {
            sender: 'aiko',
            text: 'Hi, how are you!'
        },
        {
            sender: 'user',
            text: 'Hi!'
        },
        {
            sender: 'aiko',
            text: 'Hi, how are you!'
        }, {
            sender: 'user',
            text: 'Hi!'
        },
        {
            sender: 'aiko',
            text: 'Hi, how are you!'
        }
    ]);


    return (
        <div className="messages-container">
            {chatHistory.map((message) => {
                if (message.sender === 'user') {
                    return (
                        <div className="row user-message">
                            <label>{message.text}</label>
                        </div>
                    );
                }
                else if (message.sender === 'aiko') {
                    return (
                        <div className="row aiko-message">
                            <label>{message.text}</label>
                        </div>
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
}

export default ChatHistory;