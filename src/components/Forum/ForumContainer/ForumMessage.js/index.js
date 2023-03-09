
import React from 'react'

import '../../../../styles/Forum/ForumContainer/ForumMessage/index.css';

const ForumMessage = ({messageInfo}) => {

    const {username, message} = messageInfo;

    return (
        <div className="forumMessageRow">
            <div className="forumMessageContainer">
                <div className="forumMessageUsernameRow">
                    <h5 className="forumMessageUsername">{username}</h5>
                </div>
                <div className="forumMessage">
                    {message}
                </div>
            </div>
        </div>
    )
}

export default ForumMessage