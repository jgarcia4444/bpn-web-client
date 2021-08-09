import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import homeScreen from '../../imgs/screenshots/homeScreen.png';
import AddRecordScreen from '../../imgs/screenshots/AddRecordScreen.png';
import recordsScreen from '../../imgs/screenshots/recordsScreen.png';

import './index.css';

const ScreenShots = () => {

    return (
        <Container className="screen-shots-container">
            <Row>
                <h2>Screen Shots</h2>
            </Row>
            <Row className="screen-shots-row">
                <Col xs={4}>
                    <Row><h4>Home</h4></Row>
                    <img alt="Home Screen" className="screen-shot-img" src={homeScreen} />
                </Col>
                <Col xs={4}>
                    <Row><h4>Records</h4></Row>
                    <img alt="All Records Screen" className="screen-shot-img" src={recordsScreen} />
                </Col>
                <Col xs={4}>
                    <Row><h4>Add Records</h4></Row>
                    <img alt="Add Record Screen" className="screen-shot-img" src={AddRecordScreen} />
                </Col>
            </Row>
        </Container>
    )
}

export default ScreenShots;