import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css';

class InputForm extends Component {

    state = {
        forumMessageUsername: "",
        forumMessage: "",
        errors: {
            forumMessageLength: false,
            forumMessageUsernameLength: false
        }
    }

    handleInputChange = ({target}) => {
        this.setState({
            ...this.state,
            [target.name]: target.value
        });
    }


    setupMessagePostOptions = ({ forumMessageUsername, forumMessage }) => {

        return {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                forum_message_username: forumMessageUsername,
                forum_message: forumMessage
            })
        };

    }

    formValidated = () => {
        const { forumMessage, forumMessageUsername } = this.state;
        let usernameLengthValid = forumMessageUsername.length > 3 ? true : false;
        let forumMessageValid = forumMessage.length > 79 ? true : false;
        this.setState({
            ...this.state,
            error: {
                forumMessageLength: forumMessageValid,
                forumMessageUsernameLength: usernameLengthValid
            }
        });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const { formValidated } = this;
        const { forumMessageUsername, forumMessage, errors } = this.state;

        const { forumMessageLength, forumMessageUsernameLength } = errors;

        formValidated();

        if (forumMessageLength === false || forumMessageUsernameLength === false) {
            // error handling
        } 

        const { setupMessagePostOptions } = this;
        const messagePostUrl = 'http://localhost:3000/forum-messages';
        let messagePostOptions = setupMessagePostOptions({forumMessage, forumMessageUsername});
        fetch(messagePostUrl, messagePostOptions)
            .then(res => res.json())
            .then(data => console.log(data))

        

    }

    render() {
        const { handleInputChange, handleFormSubmit } = this;
        const { forumMessageUsername, forumMessage } = this.state;

        return (
            <form onSubmit={handleFormSubmit}> 
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
                    <Row className="forum-message-submit-row">
                        <Col xs={12}>
                            <input type="submit" className="basic-btn forum-message-submit-btn" value="Post Message" />
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
// with validation
// no empty fields, username must be 4 characters, Message must be 80 (Show a counter)

export default InputForm;