import { ReactComponent as Logo } from '../assets/images/logo.svg';
import {Col, Container, Row} from "reactstrap";
import React from "react";
import Menu from "./Menu";

function Header({currentMenuItem, setCurrentMenuItem}) {

    return  <div className='header menu-item align-items-center' >
        <Container>
            <Row className='menu-item align-items-center' >
                <Col>
                    <Logo />
                </Col>

                <Menu currentMenuItem={currentMenuItem} setCurrentMenuItem={setCurrentMenuItem} />
            </Row>
        </Container>
    </div>
}

export default Header;
