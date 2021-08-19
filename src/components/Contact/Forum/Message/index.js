import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css'

class Message extends Component {

    componentDidMount() {
        console.log("TEST!!!");
    }

    render() {

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
            </Container>
        )
    }
}

export default Message;