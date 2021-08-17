import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css';
import Message from './Message';

class Forum extends Component {

    state = {
        messages: []
    }

    componentDidMount() {
        this.fetchMessages()
    }

    fetchMessages = () => {
        fetch('http://localhost:3000/messages')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                return;
                // this.setState({
                //     ...this.state,
                //     messages: data.messages
                // })
            })
    }

    renderMessages = () => {

        const { messages } = this.state;
        if (messages.length > 0) {
            messages.map(message => {
                <Message messageObject={message} />
            })
        }
    }

    render() {

        const { renderMessages } = this;

        return (
            <Container className="forum-wrapper-container">
                <h2 className="forum-title">Forum</h2>
                <Container className="forum-container">
                    {renderMessages()}
                </Container>
            </Container>
        )
    }
}

export default Forum;