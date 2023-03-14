import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import '../../styles/Forum/index.css';

import RefreshButton from './RefreshButton';
import ForumContainer from './ForumContainer';
import ForumMessageInput from './ForumMessageInput';
import SendMessageButton from './SendMessageButton';
import AuthAlert from '../Alerts/AuthAlert';

import sendMessage from '../../redux/actions/forumActions/sendMessage';
import fetchMessages from '../../redux/actions/forumActions/fetchMessages';

const Forum = ({username, sendMessage, fetchMessages, forum}) => {

    const [messageValue, setMessageValue] = useState("");
    const [loginAlert, setLoginAlert] = useState(false);

    const {messages, fetchServed} = forum;

    const handleSendClick = () => {
        if (messageValue !== "") {
            if (username === "") {
                setLoginAlert(true);
            } else {
                let messageInfo = {
                    username,
                    message: messageValue,
                }
                sendMessage(messageInfo);
            }
        }
    }

    const handleRefreshClick = () => {
        fetchMessages();
    }

    useEffect(() => {
        if (messages.length === 0 && fetchServed === false) {
            fetchMessages();
        }   
    })

    return (
        <div className="forumContainer">
            {loginAlert === true && <AuthAlert dismissAlert={() => setLoginAlert(false)} />}
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
        forum: state.forum,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendMessage: messageInfo => dispatch(sendMessage(messageInfo)),
        fetchMessages: () => dispatch(fetchMessages())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Forum);