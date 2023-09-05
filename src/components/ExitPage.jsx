import React from 'react';
import { useSelector } from 'react-redux';
import TypedReact from "../Typed-React/typed.js";
import { ReactComponent as Checklist } from '../images/checklist.svg';


const ExitPage = () => {
    const { name, age } = useSelector((state) => state);

    return (
        <div>
            <Checklist />
            <h1>Your name {name} aged {age} has been added to the student system.</h1>
            <TypedReact />
        </div>
    );
};

export default ExitPage;
