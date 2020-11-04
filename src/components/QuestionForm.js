import React, {useState} from "react";
import {Col, Form, FormGroup, Input} from "reactstrap/lib";
import Row from "reactstrap/lib/Row";
import Label from "reactstrap/lib/Label";
import {DelayedButton} from "./DelayedButton";
import QuestionServices from "../services/questionServices";
import {ToastContainer} from "react-toastify";

function QuestionForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const submit = async () => {
        const data = {
            firstName, lastName, email, phone, message
        }

        const resp = await QuestionServices.create(data);
        console.log('re', resp)
        console.log(data)
    }


    return <Form className='form-container'>
        <Row>
            <Col md={6}>
                <FormGroup>
                    <Label htmlFor='firstName'>First name</Label>
                    <Input name="firstName"
                           placeholder="First name"
                           onChange={({target}) => {
                               setFirstName(target.value);
                           }}
                    />
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <Label htmlFor='lastName'>Last name</Label>
                    <Input name="lastName"
                           placeholder="Last name"
                           onChange={({target}) => {
                               setLastName(target.value);
                           }}
                    />
                </FormGroup>
            </Col>

            <Col md={6}>
                <FormGroup>
                    <Label htmlFor='phone'>Phone number</Label>
                    <Input name="phone"
                           placeholder="Phone"
                           onChange={({target}) => {
                               setPhone(target.value);
                           }}
                    />
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <Label htmlFor='email'>Email</Label>
                    <Input name="email"
                           placeholder="Email"
                           onChange={({target}) => {
                               setEmail(target.value);
                           }}
                    />
                </FormGroup>
            </Col>

            <Col md={12}>
                <FormGroup>
                    <Label htmlFor='message'>Message</Label>
                    <Input type="textarea" name="message" id="message"
                           placeholder="Message"
                           onChange={({target}) => {
                               setMessage(target.value);
                           }}
                    />
                </FormGroup>
            </Col>
        </Row>

        <Col xs={12} className='center'>
            <DelayedButton color="primary" type="submit" onClick={() => submit()} label="Contact me"/>
        </Col>

    </Form>
}

export default QuestionForm;
