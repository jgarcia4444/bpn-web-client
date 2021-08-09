import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css';
// import ShowInputBtn from './ShowInputBtn';
// import InputForm from './InputForm';

class Contact extends Component {

    state = {
        showInputForm: false,
    }

    handleShowBtnClick = () => {
        this.setState({
            ...this.state,
            showInputForm: !this.state.showInputForm,
        })
    }

    render() {

        // const { showInputForm } = this.state;

        return (
            <Container>
                <h1>Contact</h1>
                <Row className="email-row">
                    <h2>Email</h2>
                    <h4><a href="mailto:bloodpressurenumbers2020@gmail.com">bloodpressurenumbers2020@gmail.com</a></h4>
                </Row>
                <Row>
                    <Col sm={8} className="forum-col">
                        <h2>Live Forum Coming soon</h2>
                        <p>A live forum that support will answer is in development.</p>
                    </Col>
                </Row>
                {/* <Row>
                    {showInputForm ? <ShowInputBtn handleShowBtnClick={this.handleShowBtnClick} show={showInputForm} /> : <ShowInputBtn handleShowBtnClick={this.handleShowBtnClick} show={showInputForm} />}
                </Row>
                {showInputForm &&
                    <InputForm />
                } */}
            </Container>
        )
    }
}

export default Contact;