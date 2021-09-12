import React from 'react';

import './index.css';

const Reply = ({ replyObject }) => {

    return (
        <div>
            {replyObject.username}
            {replyObject.account_type}
            {replyObject.content}
        </div>
    )
}

export default Reply;