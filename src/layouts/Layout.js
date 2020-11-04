import Header from "./Header";
import React from "react";
import Row from "reactstrap/lib/Row";
import {Container} from "reactstrap";
import FormTittle from "../components/FormTittle";
import QuestionForm from "../components/QuestionForm";

function Layout() {

    return  <div >
        <Row >
            <Header />
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
