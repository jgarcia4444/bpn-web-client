import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css';
import heart from '../imgs/backgrounds/heart.png';
import Feature from './Feature';

class Home extends Component {

    render() {

        return (
            <Container className="home-container">
                <Container className="hero-container">
                    <Row>
                        <Col md={4}> 
                            <img className="heart-img" src={heart} alt="Heart figurine" />
                        </Col>
                        <Col md={8}>
                            <h1 className="hero-headline">Heart Health</h1>
                        </Col>
                    </Row>
                    <Row>
                        <h4 className="hero-subheadline">
                            Nearly half of adults in the United States (108 million, or 45%) have hypertension - according to the <a className="content-link" href="https://www.cdc.gov/bloodpressure/facts.htm#:~:text=Nearly%20half%20of%20adults%20in,are%20taking%20medication%20for%20hypertension.&text=Only%20about%201%20in%204,have%20their%20condition%20under%20control." target ="_blank">CDC</a>
                        </h4>
                    </Row>
                </Container>
                <Feature />
            </Container>
        )
    }
}

export default Home;