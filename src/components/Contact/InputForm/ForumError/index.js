import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './index.css';

const ForumError = ({ errorType }) => {

    const errorMessage = () => {
        switch(errorType) {
            case "MESSAGE":
                return "The message must be 80 characters long.";
            case "USERNAME":
                return "Your username must be 4 characters long.";
            default:
                return "There was an error sending your message, please try again."
        }
    }

    return (
        <Row className="forum-error-row">
            <Col xs={12}>
                {errorMessage()}
            </Col>
        </Row>
    )
}

export default ForumError;