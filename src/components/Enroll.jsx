import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import config from '../chatbot/config.js';
import MessageParser from '../chatbot/MessageParser.jsx';
import ActionProvider from '../chatbot/ActionProvider.jsx';

// import { ReactComponent as TypingImage } from '../images/typing_img.svg';



const Enroll = () => {
    return (
        <div className="chatbot-container">
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />
            {/* <div className="typing-image">
                <TypingImage />
            </div> */}
        </div>
    );
};

export default Enroll;
