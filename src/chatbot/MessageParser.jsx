import React from 'react';
import { useDispatch } from 'react-redux';
import { setUserName, setUserAge } from '../redux/actions';

const MessageParser = ({ children, actions }) => {

    const dispatch = useDispatch();

    const parse = (message) => {
        // console.log(message);
        if (children.props.state.checker === "name" && !Number(message)) {
            // Here you will get the name variable and you have to store it in the reducer
            dispatch(setUserName(message));
            console.log("Your name ->", message)
            actions.afterNameMessage();
        } else if (children.props.state.checker === "age" && Number(message)) {
            // Here you will get the age variable and you have to store it in the reducer
            dispatch(setUserAge(message));
            console.log("Your age ->", message)
            actions.afterAgeMessage();
        }
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;