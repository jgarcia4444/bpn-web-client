
import React from 'react';
import { connect } from 'react-redux';

import ForumMessage from './ForumMessage.js';
import SpinningLoader from '../../Loaders/SpinningLoader/index.js';

import '../../../styles/Forum/ForumContainer/index.css';

const ForumContainer = ({forum}) => {
    // const messages = [{username: "Test", message: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"}, {username: "bball4", message: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"},{username: "Test", message: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"}, {username: "bball4", message: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"}];

    const {messages, loadingMessages} = forum;

    const renderMessages = () => {
        return messages.map((message, i) => <ForumMessage key={`${i}-${message.username}`} messageInfo={message} />);
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