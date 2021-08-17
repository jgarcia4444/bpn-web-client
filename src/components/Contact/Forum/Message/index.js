import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css'

class Message extends Component {

    componentDidMount() {
        console.log("TEST!!!");
    }

    render() {

        const {messageObject} = this.props;

        return (
            <>
                <Row>{messageObject.username}</Row>
                <Row>{messageObject.message}</Row>
            </>
        )
    }
}

export default Message;