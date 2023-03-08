
import React from 'react'

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