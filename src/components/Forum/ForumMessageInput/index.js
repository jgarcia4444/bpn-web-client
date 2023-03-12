import React from 'react'

import '../../../styles/Forum/ForumMessageInput/index.css';

const ForumMessageInput = ({messageValue, handleChange}) => {

    return (
        <div className="forumMessageInputContainer">
            <input placeholder="Write a message..." value={messageValue} onChange={handleChange} name="forumInput" className="messageInput" />
        </div>
    )
}

export default ForumMessageInput;