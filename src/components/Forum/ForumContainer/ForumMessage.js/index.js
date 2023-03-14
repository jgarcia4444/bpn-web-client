
import React from 'react'
import { connect } from 'react-redux';

import '../../../../styles/Forum/ForumContainer/ForumMessage/index.css';

const ForumMessage = ({messageInfo, user}) => {

    const {username, message} = messageInfo;
    console.log("Username: ", username);

    return (
        <div className={`forumMessageRow ${user.username === username ? "flexRight" : ""}`}>
            <div className="forumMessageContainer">
                <div className="forumMessageUsernameRow">
                    <h5 className="forumMessageUsername">{username}</h5>
                </div>
                <div className={`forumMessage ${user.username === username ? "userMessage" : ""}`}>
                    {message}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    null
)(ForumMessage);