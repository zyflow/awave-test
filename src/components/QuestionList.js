import React from "react";
import Row from "reactstrap/lib/Row";
import {Container} from "reactstrap/lib";
import {Questions} from "./Questions";
import useQuestionsFetch from "../hooks/useQuestionsFetch";
import Loader from "./Loader";


function QuestionList() {
    const questions = useQuestionsFetch()

    return  <div className='question-list mt-5 '>
        <Container>
            <Row className="center title-block">
                <h1>Submissions</h1>
            </Row>
            <Row >
                <p className="question-header mb-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </Row>
            <Row>
                {questions.loading ? <Loader /> : (
                        questions.data.map((question, key) => {
                            return <Questions key={key} question={question} />
                        })
                )
                }
            </Row>
        </Container>
    </div>
}

export default QuestionList;
