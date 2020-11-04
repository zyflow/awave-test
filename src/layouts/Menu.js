import {Col, Row} from "reactstrap";
import React from "react";

function Menu({currentMenuItem, setCurrentMenuItem}) {

    return  <Row>
        <Col className='d-none d-sm-block col-auto'>
            <a href="/" className={currentMenuItem === 'contact' ? 'selected' : ''}
               onClick={() => setCurrentMenuItem('contact')}>Contact</a>
        </Col>
        <Col className='d-none d-sm-block col-auto'>
            <a href="/submissions" className={currentMenuItem === 'submission' ? 'selected' : ''}
            onClick={() => setCurrentMenuItem('submission')}>Submission</a>
        </Col>
    </Row>
}

export default Menu;
