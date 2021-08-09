import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css';

class InputForm extends Component {

    render() {

        return (
            <form>
                <Container className="input-form-container">
                    <Row>
                        <Col sm={6}>

                        </Col>
                    </Row>
                </Container>
            </form>
        )
    }
}

export default InputForm;