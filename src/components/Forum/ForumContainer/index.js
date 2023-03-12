
import React from 'react';

import ForumMessage from './ForumMessage.js';

import '../../../styles/Forum/ForumContainer/index.css';

const ForumContainer = () => {
    const messages = [{username: "Test", message: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"}, {username: "jg4444", message: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"},{username: "Test", message: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"}, {username: "jg4444", message: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"}];

    const renderMessages = () => {
        return messages.map((message, i) => <ForumMessage key={`${i}-${message.username}`} messageInfo={message} />);
    };

    return (
        <div className="forumMessagesContainer">
            {renderMessages()}
        </div>
    )
}

export default ForumContainer;