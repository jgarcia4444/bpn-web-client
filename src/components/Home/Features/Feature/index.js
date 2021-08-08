import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css';

const Feature = ({featureDetails}) => {

    const {title, shortIntro, icon} = featureDetails

    return (
        <Container>
            <div className="feature-container">
                <div className="icon-container">
                    {icon}
                </div>
                <Row><h4>{title}</h4></Row>
                <Row><p>{shortIntro}</p></Row>
            </div>
        </Container>
    )
}

export default Feature;