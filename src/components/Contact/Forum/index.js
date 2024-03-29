import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css';
import Message from './Message';

// Sprint Plan 08/18/21 5:33 pm 
// Create the replies form that appears if someone wants to reply to a forum message
// at the bottom of the message show the number of replies on the message and add a show btn that displays them 

class Forum extends Component {

    state = {
        messages: [],
        replies: []
    }

    componentDidMount() {
        this.fetchMessages()
    }

    fetchMessages = () => {
        fetch('http://localhost:3000/messages')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    ...this.state,
                    messages: data.messages,
                    replies: data.replies
                })
            })
    }

    renderMessages = () => {
        const { messages, replies } = this.state;
        if (messages.length > 0) {
            return messages.map( (message, id) => {
                let messageReplies = replies.filter(reply => reply.message_id === message.id);
                let messageObject = {
                    message: message,
                    replies: messageReplies
                }
                return <Message key={`${id}-${message.username}`} messageObject={messageObject} /> 
            })
        }
    }

    render() {

        const { renderMessages } = this;

        return (
            <>
                <h2 className="forum-title">Forum</h2>
                <Container className="forum-wrapper-container">
                    {renderMessages()}
                </Container>
            </>
        )
    }
}

export default Forum;