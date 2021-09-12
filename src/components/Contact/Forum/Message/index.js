import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css'
import ReplyFormBtn from './ReplyFormBtn';
import ReplyForm from './ReplyForm';
import Reply from './Reply';

class Message extends Component {

    renderReplies = (replies) => {
        return replies.map(reply => <Reply replyObject={reply} />)
    }

    renderReplyCountText = (replies) => {
        switch(replies.length) {
            case 0:
                return "No replies...";
            case 1:
                return "1 reply";
            case replies.length > 1:
                return `${replies.length} replies`
        }
    }

    render() {

        const {messageObject} = this.props;
        const {message, replies} = messageObject;
        
        return (
            <Container className="message-outer-container">
                <Container className="message-inner-container">
                    <Row>
                        <Col className="username-column" sm={4}>
                            {message.username}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="message-column" sm={8}>
                            {message.message}
                        </Col>
                    </Row>
                </Container>
                
                <Container className="replies-container">
                    <Row className="reply-title-row">
                        {this.renderReplyCountText(replies)}
                    </Row>
                    {this.renderReplies(replies)}
                </Container>
                

            </Container>
        )
    }
}

export default Message;