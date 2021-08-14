import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css';
import ShowInputBtn from './ShowInputBtn';
import InputForm from './InputForm';
import Forum from './Forum';

class Contact extends Component {

    state = {
        showInputForm: false,
        showFormBtnMargin: {
            margin: '2em auto'
        }
    }

    handleShowBtnClick = () => {
        const newMargin = this.state.showInputForm === false ? '0 auto' : '2em auto';
        this.setState({
            ...this.state,
            showInputForm: !this.state.showInputForm,
            showFormBtnMargin: {
                margin: newMargin
            }
        });
    }

    render() {

        const { showInputForm, showFormBtnMargin } = this.state;

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
                <Row>
                    <ShowInputBtn margin={showFormBtnMargin} handleShowBtnClick={this.handleShowBtnClick} show={showInputForm} />
                </Row>
                {showInputForm &&
                    <InputForm />
                }
                <Forum />
            </Container>
        )
    }
}

export default Contact;