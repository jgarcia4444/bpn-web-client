import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css';

const Feature = ({featureDetails, handleIconClick, showFullDescription}) => {

    const {title, shortIntro, icon, description} = featureDetails

    return (
        <Container>
            <div className="feature-container">
                <div onClick={() => handleIconClick(title)} name={title} className="icon-container">
                    {icon}
                </div>
                <Row><h4>{title}</h4></Row>
                <Row><p>{showFullDescription ? description : shortIntro}</p></Row>
            </div>
        </Container>
    )
}

export default Feature;