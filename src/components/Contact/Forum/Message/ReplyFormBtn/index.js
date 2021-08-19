import React from 'react';

import './index.css';

const ReplyFormBtn = ({show, handleClick}) => {

    return (
        <div onClick={handleClick} className="basic-btn reply-form-btn-container">
            { show ? "Hide" : "Show" } Reply Form
        </div>
    )
}

export default ReplyFormBtn;