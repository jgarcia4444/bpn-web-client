import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css';
import logo from '../imgs/logo/logo-1024.png';

class Home extends Component {

    render() {

        return (
            <Container className="home-container">
                <h1>Blood Pressure Numbers</h1>
                <img className="logo" src={logo} alt="Logo" />
            </Container>
        )
    }
}

export default Home;