import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css';
import ForumError from './ForumError';

class InputForm extends Component {

    state = {
        forumMessageUsername: "",
        forumMessage: "",
        errors: {
            forumMessageLengthErr: false,
            forumMessageUsernameLengthErr: false
        },
        charsRemaining: 80,
    }

    handleInputChange = ({target}) => {
        var charsRemaining = this.state.charsRemaining;
        if (target.name === 'forumMessage') {
            charsRemaining = this.calculateCharsRemaining();
        }
        this.setState({
            ...this.state,
            [target.name]: target.value,
            charsRemaining: charsRemaining
        });
    }

    calculateCharsRemaining = () => {
        let { forumMessage } = this.state;
        if (forumMessage.length === 0) {
            // Test why the chars counter does not go back to 80 when all chars are deleted.
            return 80;
        }
        let minChars = 80;
        let messageLength = forumMessage.length;
        let difference = minChars - messageLength;
        if (difference < 0) {
            return 0;
        } else {
            return difference;
        }
    }


    setupMessagePostOptions = ({ forumMessageUsername, forumMessage }) => {

        return {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                new_message: {
                    username: forumMessageUsername,
                    message: forumMessage
                }
            })
        };

    }

    formValidated = () => {
        const { forumMessage, forumMessageUsername } = this.state;
        let usernameLength = forumMessageUsername.length < 3 ? true : false;
        let forumMessageLength = forumMessage.length < 79 ? true : false;
        this.setState({
            ...this.state,
            errors: {
                forumMessageLengthErr: forumMessageLength,
                forumMessageUsernameLengthErr: usernameLength
            }
        });
        return {
            hasError: (usernameLength === true || forumMessageLength === true) ? true : false
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const { formValidated } = this;
        const { forumMessageUsername, forumMessage, errors } = this.state;

        let validator = formValidated();

        if (!validator.hasError) {
            const { setupMessagePostOptions } = this;
            const messagePostUrl = 'http://localhost:3000/messages';
            let messagePostOptions = setupMessagePostOptions({forumMessage, forumMessageUsername});
            fetch(messagePostUrl, messagePostOptions)
                .then(res => res.json())
                .then(data => {
                    if (data.saved) {
                        console.log("Success!");
                    } else {
                        console.log("Whoops! There was an error persisting the message.");
                    }
                })
        } 
    }

    render() {
        const { handleInputChange, handleFormSubmit } = this;
        const { forumMessageUsername, forumMessage, errors, charsRemaining } = this.state;
        const { forumMessageLengthErr, forumMessageUsernameLengthErr } = errors;

        return (
            <form onSubmit={handleFormSubmit}> 
                <Container className="input-form-container">
                    {forumMessageUsernameLengthErr && <ForumError errorType="USERNAME" />}
                    <Row className="forum-message-input-row">
                        <Col xs={4}>
                            <label className="forum-input-label" htmlFor="forumMessageUsername">Username</label>
                        </Col>
                        <Col xs={8}>
                            <input id="forumMessageUsername" className="forum-message-input" name="forumMessageUsername" type="text" value={forumMessageUsername} onChange={handleInputChange} />
                        </Col>
                    </Row>
                    {forumMessageLengthErr && <ForumError errorType="MESSAGE" />}
                    <Row className="forum-message-input-row">
                        <Col xs={4}>
                            <label htmlFor="forumMessage">Message</label>
                        </Col>
                        <Col xs={8}>
                            <textarea className="forum-message-input" id="forumMessage" onChange={handleInputChange} value={forumMessage} name="forumMessage"></textarea>
                            <div className="char-counter-container">{charsRemaining}</div>
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
//  Message must be 80 (Show a counter)

export default InputForm;