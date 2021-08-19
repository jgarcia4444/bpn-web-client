import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css';

class ReplyForm extends Component {

    state = {
        replyForm: {
            replyUsername: "",
            replyContent: ""
        },
    }

    handleReplySubmit = (e) => {
        e.preventDefault();

    }

    handleInputChange = ({target}) => {

        const { name, value } = target;

        this.setState({
            ...this.state,
            [name]: value
        });

    }

    render() {

        const { handleInputChange, handleReplySubmit } = this;
        const { replyForm, } = this.state;
        const { replyUsername, replyContent } = replyForm;

        return (
            <form onSubmit={handleReplySubmit}>
                <Container className="reply-form-container">
                    <Row>
                        <Col sm={6}>
                            <label htmlFor="replyUsername">Username</label>
                            <input name="replyUsername" id="replyUsername" type="text" value={replyUsername} onChange={handleInputChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <label htmlFor="replyContent">Username</label>
                            <textarea name="replyContent" id="replyContent" value={replyContent} onChange={handleInputChange}></textarea>
                        </Col>
                    </Row>
                </Container>
            </form>
        )
    }
}

export default ReplyForm;