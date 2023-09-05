import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    // const invalidDataType = () => {
    //     const message = createChatBotMessage("Please Enter Valid Data")
    //     updateState(message)
    // }



    const afterAgeMessage = () => {
        const message = createChatBotMessage("Thank you for the data, you can now go to exit page.", {
            withAvatar: true,
            delay: 500,
            widget: 'EndButton',
        })
        updateState(message)
    }

    const afterNameMessage = () => {
        const message = createChatBotMessage("Please let me know your age")
        updateState(message, "age")
    }

    const initialAction = () => {
        const message = createChatBotMessage('Please enter your name')
        updateState(message, "name")
    }


    const updateState = (message, checker = "") => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
            checker

        }))
    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        initialAction,
                        afterNameMessage,
                        afterAgeMessage,
                        // invalidDataType
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;