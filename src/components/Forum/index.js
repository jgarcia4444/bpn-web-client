import React from 'react';

import '../../styles/Forum/index.css';

import RefreshButton from './RefreshButton';
import ForumContainer from './ForumContainer';
import ForumMessageInput from './ForumMessageInput';
import SendMessageButton from './SendMessageButton';

const Forum = () => {

    const handleSendClick = () => {
        console.log("SEND CLICKED!!!");
    }

    const handleRefreshClick = () => {
        console.log("REFRESH CLICKED!!!");
    }

    return (
        <div className="forumContainer">
            <h1 className="containerTitle">Forum</h1>
            <div className="refreshForumRow">
                <RefreshButton handleClick={handleRefreshClick} />
            </div>
            <ForumContainer />
            <ForumMessageInput />
            <div className="sendMessageButtonRow">
                <SendMessageButton handleClick={handleSendClick} />
            </div>
        </div>
    )
}

export default Forum;