import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css'
import ReplyFormBtn from './ReplyFormBtn';
import ReplyForm from './ReplyForm';
import Reply from './Reply';

class Message extends Component {

    renderReplies = () => {
        const { replies } = this.props.messageObject;
        return replies.map(reply => <Reply replyObject={reply} />)
    }

    render() {

        const {messageObject} = this.props;
        const {message} = messageObject;
        
        return (
            <Container className="message-container">
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
                {this.renderReplies()}

            </Container>
        )
    }
}

export default Message;