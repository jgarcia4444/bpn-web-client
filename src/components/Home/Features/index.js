
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MdBuild } from 'react-icons/md';

import Feature from './Feature';

import './index.css';

class Features extends Component {

    displayFeatures = () => {
        const featureObject = {
            title: "Skill Learning",
            shortIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            icon: <MdBuild />
        }

        return Array(4).fill(0).map((_, i) => {
            return <Feature featureDetails={featureObject} />
        })

    }

    

    render() {

        return (
            <Container className="feature-container">
                <h2 className="feature-title">Features</h2>
                {this.displayFeatures()}
            </Container>
        )
    }
}

export default Features;