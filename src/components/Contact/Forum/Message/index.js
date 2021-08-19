import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css'
import ReplyFormBtn from './ReplyFormBtn';

class Message extends Component {

    state = {
        willReply: false
    }

    handleShowClick = () => {
        this.setState({
            ...this.state,
            willReply: !this.state.willReply
        })
    }

    render() {

        const { willReply } = this.state;
        const {messageObject} = this.props;
        const {username, message} = messageObject;
        return (
            <Container className="message-container">
                <Row>
                    <Col className="username-column" sm={4}>
                        {username}
                    </Col>
                </Row>
                <Row>
                    <Col className="message-column" sm={8}>
                        {message}
                    </Col>
                </Row>
                <Row>
                    <ReplyFormBtn handleClick={this.handleShowClick} show={willReply} />
                </Row>
            </Container>
        )
    }
}

export default Message;