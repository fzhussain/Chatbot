import React from 'react';

const StartBtn = (props) => {

    const initialAction = () => {
        props.actions.initialAction();
    }
    return (
        <div className='options-container start-btn'>
            <button className='option-item ' onClick={() => initialAction()}>Got it!</button>
        </div>
    );
};

export default StartBtn;