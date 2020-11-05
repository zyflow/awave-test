import React, {useState} from "react";
import {Col, Form, FormGroup, Input} from "reactstrap/lib";
import Row from "reactstrap/lib/Row";
import Label from "reactstrap/lib/Label";
import {DelayedButton} from "./DelayedButton";
import QuestionServices from "../services/questionServices";

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

        if (resp && resp.data && resp.data.status === 'ok') {
            setTimeout(() => {
                setFirstName('');
                setLastName('');
                setPhone('');
                setEmail('');
                setMessage('');
            }, 500)
        }
    }

    const checkIfFilled = (value, elem) => {
        if (!value) {
            elem.classList.add('alert-danger')
        }

        if (value) {
            elem.classList.remove('alert-danger')
        }
    }


    return <Form className='form-container'>
        <Row>
            <Col md={6}>
                <FormGroup >
                    <Label htmlFor='firstName'>First name</Label>
                    <Input name="firstName"
                           placeholder="First name"
                           value={firstName}
                           onChange={({target}) => {
                               setFirstName(target.value);
                           }}
                           onBlur={(elem) => {
                               checkIfFilled(elem.target.value, elem.target)
                           }}
                    />
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <Label htmlFor='lastName'>Last name</Label>
                    <Input name="lastName"
                           value={lastName}
                           placeholder="Last name"
                           onChange={({target}) => {
                               setLastName(target.value);
                           }}
                           onBlur={(elem) => {
                               checkIfFilled(elem.target.value, elem.target)
                           }}
                    />
                </FormGroup>
            </Col>

            <Col md={6}>
                <FormGroup>
                    <Label htmlFor='phone'>Phone number</Label>
                    <Input name="phone"
                           value={phone}
                           placeholder="Phone"
                           onChange={({target}) => {
                               setPhone(target.value);
                           }}
                           onBlur={(elem) => {
                               checkIfFilled(elem.target.value, elem.target)
                           }}
                    />
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <Label htmlFor='email'>Email</Label>
                    <Input name="email"
                           value={email}
                           placeholder="Email"
                           onChange={({target}) => {
                               setEmail(target.value);
                           }}
                           onBlur={(elem) => {
                               checkIfFilled(elem.target.value, elem.target)
                           }}
                    />
                </FormGroup>
            </Col>

            <Col md={12}>
                <FormGroup>
                    <Label htmlFor='message'>Message</Label>
                    <Input type="textarea" name="message" id="message"
                           value={message}
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
