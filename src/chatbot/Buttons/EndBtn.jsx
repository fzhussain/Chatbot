import React from 'react';
import { Link } from 'react-router-dom';


const EndBtn = (props) => {

    const goodByeMessage = () => {
        props.actions.goodByeMessage();
    }
    return (
        <div className='options-container exit-btn'>
            <Link to="/">
                <button className='option-item '>Go Back to Home Page</button>
            </Link>

            <Link to="/exitpage">
                <button className='option-item'>Go to Exit Page</button>
            </Link>

        </div>
    );
};

export default EndBtn;