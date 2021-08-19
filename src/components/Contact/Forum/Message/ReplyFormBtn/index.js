import React from 'react';

import './index.css';

const ReplyFormBtn = ({show, handleClick}) => {

    return (
        <div onClick={handleClick} className="reply-form-btn-container">
            { show ? "Hide" : "Show" } Message Form
        </div>
    )
}

export default ReplyFormBtn;