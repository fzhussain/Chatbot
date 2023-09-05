import React from 'react';

import BotImg from "./BotImg.svg";
const Avatar = () => {
    return (
        <div className="react-chatbot-kit-chat-bot-avatar">
            <div
                className="react-chatbot-kit-chat-bot-avatar-container"
                style={{ background: "none" }}
            >
                <img alt="BotAvatar" src={BotImg} />
            </div>
        </div>
    );
};

export default Avatar;
