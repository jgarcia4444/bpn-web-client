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
                        <Col sm={12}>
                            <label htmlFor="forumMessageUsername">Username</label>
                            <input id="forumMessageUsername" className="forum-message-username-input" name="forumMessageUsername" type="text" value={forumMessageUsername} onChange={handleInputChange} />
                        </Col>
                    </Row>
                    <Row className="forum-message-input-row">
                        <Col sm={12}>
                            <label htmlFor="forumMessage">Message</label>
                            <textarea id="forumMessage" onChange={handleInputChange} value={forumMessage} className="forum-message-textarea" name="forumMessage"></textarea>
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