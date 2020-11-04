import React from "react";
import {Col, Container} from "reactstrap/lib";
import Row from "reactstrap/lib/Row";
import { ReactComponent as StockMan } from '../assets/images/stock-man.svg';

function FormTittle() {

    return <Container>
        <Row >
            <Col md={8} className='p-0 mt-5 '>
                <h1>Have any questions?</h1>
                <p>Fill out the form and we’ll be in touch as soon as possible!</p>
            </Col>
            <Col md={4} className='p-0'>
                <StockMan className='stockMan' />
            </Col>
    </Row>
    </Container>
}

export default FormTittle;
