import React from "react";
import {Col} from "reactstrap/lib";
import Row from "reactstrap/lib/Row";
import { ReactComponent as StockMan } from '../assets/images/stock-man.svg';

function FormTittle() {

    return  <Row className='formTitleContainer'>
        <Col className='formTitle'>
            <h1>Have any questions?</h1>
            <p>Fill out the form and we’ll be in touch as soon as possible!</p>
        </Col>
        <Col>
            <StockMan className='stockMan' />
        </Col>
    </Row>
}

export default FormTittle;
