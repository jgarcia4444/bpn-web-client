import React, {useState} from 'react'

const ForumMessageInput = () => {

    const [forumMessage, setForumMessage] = useState("");

    const handleTextChange = (e) => {
        console.log("Text area value changed.",e)
    }

    return (
        <div className="forumMessageInputContainer">
            <textarea value={forumMessage} onChange={handleTextChange} name="forumInput" cols="30" rows="10">{forumMessage}</textarea>
        </div>
    )
}

export default ForumMessageInput;