
import React from 'react';

import ForumMessage from './ForumMessage.js';

const ForumContainer = () => {
    const messages = [{username: "Test", message: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"}, {username: "Test2", message: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"}];

    const renderMessages = () => {
        return messages.map((message, i) => <ForumMessage key={`${i}-${message.username}`} messageInfo={message} />);
    };

    return (
        <div className="forumMessagesContainer">
            Forum
            {renderMessages()}
        </div>
    )
}

export default ForumContainer;