import Header from "./Header";
import React, {useState} from "react";
import Row from "reactstrap/lib/Row";
import {Container} from "reactstrap";
import FormTittle from "../components/FormTittle";
import QuestionForm from "../components/QuestionForm";

function Layout() {
    const [currentMenuItem, setCurrentMenuItem] = useState('contact');

    return  <div >
        <Row >
            <Header currentMenuItem={currentMenuItem} setCurrentMenuItem={setCurrentMenuItem} />
        </Row>
        <Row>
            <Container className="wrapper custom-container-image">
                <div className='content'>
                    <FormTittle />
                    <QuestionForm />
                </div>
            </Container>
        </Row>
    </div>
}

export default Layout;
