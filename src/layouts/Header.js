import { ReactComponent as Logo } from '../assets/images/logo.svg';
import {Col, Container, Row} from "reactstrap";
import React from "react";

function Header() {

    return  <div className='header menu-item align-items-center' >
        <Container>
            <Row className='menu-item align-items-center' >
                <Col>
                    <Logo />
                </Col>
                <Col className='d-none d-sm-block col-auto'>
                    <a href="/contact">Contact</a>
                </Col>
                <Col className='d-none d-sm-block col-auto'>
                    <a href="/submission">Submission</a>
                </Col>
            </Row>
        </Container>
    </div>
}

export default Header;
