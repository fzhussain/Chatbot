import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './Avatar/Avatar';
import StartBtn from './Buttons/StartBtn';
import EndBtn from './Buttons/EndBtn';



const botName = 'FarazBot';


const config = {
    initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`, {
        withAvatar: true,
        delay: 1000,
        widget: 'Gotit',
    })],
    botName: botName,
    customComponents: {
        botAvatar: (props) => <Avatar {...props} />,
    },
    widgets: [
        {
            widgetName: 'Gotit',
            widgetFunc: (props) => <StartBtn {...props} />,
            // mapStateToProps: ['gist'],
        },
        {
            widgetName: "EndButton",
            widgetFunc: () => <EndBtn />,
        }

    ],
};

export default config;