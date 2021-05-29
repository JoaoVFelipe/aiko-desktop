import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';

import './ChatAnimation.scss'


const ChatAnimation = (props) => {
    return (
        <div className="animation-container">
            <Spritesheet
                className={"animation"}
                image={'/spritesheets/idle.png'}
                widthFrame={510}
                heightFrame={510}
                steps={12}
                fps={12}
                loop={true}
            />
        </div>
    );
}

export default ChatAnimation;