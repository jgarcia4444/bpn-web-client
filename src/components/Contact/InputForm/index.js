import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css';

class InputForm extends Component {

    state = {
        messageUsername: ""
    }

    handleInputChange = ({target}) => {
        this.setState({
            ...this.state,
            [target.name]: target.value
        });
    }

    render() {
        const { handleInputChange } = this;
        const { messageUsername } = this.state;

        return (
            <form>
                <Container className="input-form-container">
                    <Row>
                        <Col sm={6}>
                            <label htmlFor="messageUsername">Username</label>
                            <input name="messageUsername" type="text" value={messageUsername} onChange={handleInputChange} />
                        </Col>
                    </Row>
                </Container>
            </form>
        )
    }
}

// What will the forum have?
// Username
// Message
// replies to the message
// with username and message as well

export default InputForm;