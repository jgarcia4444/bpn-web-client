
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Feature from './Feature';

import './index.css';

class Features extends Component {

    render() {

        return (
            <Container className="feature-container">
                <h2 className="feature-title">Features</h2>
                <Feature />
            </Container>
        )
    }
}

export default Features;