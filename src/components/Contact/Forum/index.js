import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css';

class Forum extends Component {

    render() {

        return (
            <Container className="forum-wrapper-container">
                <h2 className="forum-title">Forum</h2>
                <Container className="forum-container">
                    test
                </Container>
            </Container>
        )
    }
}

export default Forum;