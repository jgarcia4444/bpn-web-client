import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css';

const ScreenShots = () => {

    return (
        <Container>
            <Row>
                <h2>Screen Shots</h2>
            </Row>
            <Row>
                <Col xs={4}>
                    img1
                </Col>
                <Col xs={4}>img2</Col>
                <Col xs={4}>img3</Col>
            </Row>
        </Container>
    )
}

export default ScreenShots;