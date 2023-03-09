import React, {useState} from 'react';

import '../../styles/Forum/index.css';

import RefreshButton from './RefreshButton';
import ForumContainer from './ForumContainer';
import ForumMessageInput from './ForumMessageInput';
import SendMessageButton from './SendMessageButton';

const Forum = () => {

    const [messageValue, setMessageValue] = useState("");

    const handleSendClick = () => {
        console.log("SEND CLICKED!!!");
    }

    const handleRefreshClick = () => {
        console.log("REFRESH CLICKED!!!");
    }

    return (
        <div className="forumContainer">
            <div className="refreshForumRow">
            <h1 className="containerTitle">Forum</h1>
                <RefreshButton handleClick={handleRefreshClick} />
            </div>
            <ForumContainer />
            <ForumMessageInput messageValue={messageValue} handleChange={e => setMessageValue(e.target.value)} />
            <div className="sendMessageButtonRow">
                <SendMessageButton handleClick={handleSendClick} />
            </div>
        </div>
    )
}

export default Forum;