import React, {useState} from 'react'

import '../../../styles/Forum/ForumMessageInput/index.css';

const ForumMessageInput = ({messageValue, handleChange}) => {

    const [forumMessage, setForumMessage] = useState("");

    const handleTextChange = (e) => {
        console.log("Text area value changed.",e)
        setForumMessage(e.target.value);
    }

    return (
        <div className="forumMessageInputContainer">
            <input placeholder="Write a message..." value={messageValue} onChange={handleChange} name="forumInput" className="messageInput" />
        </div>
    )
}

export default ForumMessageInput;