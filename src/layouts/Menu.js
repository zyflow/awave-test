import {Col, Row} from "reactstrap";
import React from "react";

function Menu({currentMenuItem, setCurrentMenuItem}) {

    return  <Row>
        <Col className='d-none d-sm-block col-auto'>
            <a href="/" className={currentMenuItem === 'contact' || currentMenuItem === '' ? 'selected' : ''}
               onClick={() => setCurrentMenuItem('contact')}>Contact</a>
        </Col>
        <Col className='d-none d-sm-block col-auto'>
            <a href="/submissions" className={currentMenuItem === 'submissions' ? 'selected' : ''}
            onClick={() => setCurrentMenuItem('submissions')}>Submission</a>
        </Col>
    </Row>
}

export default Menu;
