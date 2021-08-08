import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css';

const Feature = ({featureDetails}) => {

    const {title, shortIntro, icon} = featureDetails

    return (
        <Container className="feature-container">
            {icon}
            <Row><h4>{title}</h4></Row>
            <Row><p>{shortIntro}</p></Row>
        </Container>
    )
}

export default Feature;