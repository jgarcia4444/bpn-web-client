
import React from 'react';
import { connect } from 'react-redux';

import ForumMessage from './ForumMessage.js';
import SpinningLoader from '../../Loaders/SpinningLoader/index.js';

import '../../../styles/Forum/ForumContainer/index.css';

const ForumContainer = ({forum}) => {

    const {messages, loadingMessages} = forum;

    const renderMessages = () => {
        return messages.length > 0 ? messages.map((message, i) => <ForumMessage key={`${i}-${message.username}`} messageInfo={message} />)
        :
        (<p>No Messages saved yet...</p>)
    };

    return (
        <div className="forumMessagesContainer">
            {loadingMessages === true ?
                <SpinningLoader color={"#f00"} size={48} />
            :
                renderMessages()
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        forum: state.forum,
    }
}

export default connect(
    mapStateToProps,
    null
)(ForumContainer);