import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css';

class InputForm extends Component {

    state = {
        forumMessageUsername: "",
        forumMessage: ""
    }

    handleInputChange = ({target}) => {
        this.setState({
            ...this.state,
            [target.name]: target.value
        });
    }

    render() {
        const { handleInputChange } = this;
        const { forumMessageUsername, forumMessage } = this.state;

        return (
            <form>
                <Container className="input-form-container">
                    <Row className="forum-message-input-row">
                        <Col xs={4}>
                            <label className="forum-input-label" htmlFor="forumMessageUsername">Username</label>
                        </Col>
                        <Col xs={8}>
                            <input id="forumMessageUsername" className="forum-message-input" name="forumMessageUsername" type="text" value={forumMessageUsername} onChange={handleInputChange} />
                        </Col>
                    </Row>
                    <Row className="forum-message-input-row">
                        <Col xs={4}>
                            <label htmlFor="forumMessage">Message</label>
                        </Col>
                        <Col xs={8}>
                            <textarea className="forum-message-input" id="forumMessage" onChange={handleInputChange} value={forumMessage} name="forumMessage"></textarea>
                        </Col>
                    </Row>
                </Container>
            </form>
        )
    }
}

// What will the forum have?
// replies to the message
// with username and message as well
// TODO
// style the show form btn
// style the form
// create a function to handle the submit of the form 
// with validation
// no empty fields, username must be 4 characters, Message must be 80 (Show a counter)

export default InputForm;