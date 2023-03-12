import React, {useState} from 'react';
import { connect } from 'react-redux';

import '../../styles/Forum/index.css';

import RefreshButton from './RefreshButton';
import ForumContainer from './ForumContainer';
import ForumMessageInput from './ForumMessageInput';
import SendMessageButton from './SendMessageButton';

const Forum = ({username, sendMessage}) => {

    const [messageValue, setMessageValue] = useState("");

    const handleSendClick = () => {
        console.log("SEND CLICKED!!!");
        let messageInfo = {
            username,
            message: messageValue,
        }
        sendMessage(messageInfo);
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

const mapStateToProps = state => {
    return {
        username: state.user.username,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendMessage: messageInfo => dispatch(sendMessage(messageInfo))
    }
}

export default (
    mapStateToProps,
    mapDispatchToProps
)(Forum);