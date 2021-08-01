import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink as Link } from 'react-router-dom';

import './index.css';
import logoHorizontal from '../imgs/logo/logo-horizontal.jpg';

const Nav = () => {

    const [otherPage, setOtherPage] = useState("Contact");

    const handleOtherPageClick = () => {
        if (otherPage === "Contact") {
            setOtherPage("Home");
        } else {
            setOtherPage("Contact")
        }
    };

    return (
        <Container className="nav-container">
            <Row>
                <Col sm={8}>
                    <img className="nav-link nav-img" src={logoHorizontal} />
                </Col>
                <Col sm={4}>
                    <Link onClick={handleOtherPageClick} className="other-page-btn" to={`/${otherPage.toLowerCase()}`}>{otherPage}</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Nav;