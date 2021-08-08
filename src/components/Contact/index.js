import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css';
import ShowInputBtn from './ShowInputBtn';
import InputForm from './InputForm';

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

        const { showInputForm } = this.state;

        return (
            <Container>
                <h1>Contact</h1>
                <Row>
                    {showInputForm ? <ShowInputBtn handleShowBtnClick={this.handleShowBtnClick} show={showInputForm} /> : <ShowInputBtn handleShowBtnClick={this.handleShowBtnClick} show={showInputForm} />}
                </Row>
                {showInputForm &&
                    <InputForm />
                }
            </Container>
        )
    }
}

export default Contact;