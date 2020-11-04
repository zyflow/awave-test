import React, {useState} from "react";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import {Container} from "reactstrap/lib";
import {Question} from "./Question";


function QuestionList() {

    return  <div className='question-list mt-5 '>
        <Container>
            <Row className="center title-block">
                <h1>Submissions</h1>
            </Row>
            <Row >
                <p className="question-header mb-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <Question />
            </Row>
        </Container>
    </div>
}

export default QuestionList;
