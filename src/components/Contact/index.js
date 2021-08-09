import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css';

class Contact extends Component {

    render() {

        return (
            <Container>
                <h1>Contact</h1>
                <Row className="email-row">
                    <h2>Email</h2>
                    <h4><a href="mailto:bloodpressurenumbers2020@gmail.com">bloodpressurenumbers2020@gmail.com</a></h4>
                </Row>
                <Row>
                    <Col sm={8} className="forum-col">
                        <h2>Live Forum Coming soon</h2>
                        <p>A live forum that support will answer is in development.</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Contact;