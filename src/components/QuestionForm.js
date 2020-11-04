import React, {useState} from "react";
import {Col, Form, FormGroup, Input} from "reactstrap/lib";
import Row from "reactstrap/lib/Row";
import Label from "reactstrap/lib/Label";
import {DelayedButton} from "./DelayedButton";

function QuestionForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const submit = () => {
        console.log('submitting data')
        const data = {
            firstName, lastName, email, phoneNumber, message
        }
        console.log(data)
    }


    return <Form className='form-container'>
        <Row>
            <Col md={6}>
                <FormGroup>
                    <Label htmlFor='firstName'>First name</Label>
                    <Input name="firstName"
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
                           onChange={({target}) => {
                               setPhoneNumber(target.value);
                           }}
                    />
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <Label htmlFor='email'>Email</Label>
                    <Input name="email"
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
