import React, { useState } from 'react';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

const UserProfile = (props) => {

    const [email, setEmail] = useState(props.userinfo ? props.userinfo.email : '');
    const [firstName, setFirstName] = useState(props.userinfo ? props.userinfo.first_name : '');
    const [lastName, setLastName] = useState(props.userinfo ? props.userinfo.last_name : '');
    const [gender, setGender] = useState('');
    const [subscription, setSubscription] = useState('');

    if (typeof props.userinfo == 'undefined') {
        return <Redirect to="/" />;
    }

    return (
        <Container style={{ marginTop: '25px' }}>
            <Form>
                <Row sm={3}>
                    <Col>
                        <Form.Group >
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                onChange={(e) => { setFirstName(e.target.value) }} type="text" value={firstName} placeholder="Enter First Name " />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group >
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                onChange={(e) => { setLastName(e.target.value) }} type="text" value={lastName} placeholder="Enter Last Name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                onChange={(e) => { setEmail(e.target.value) }} value={email} type="text" placeholder="Enter Email " />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group >
                            <Form.Label>Gender</Form.Label>
                            <Form.Control value={gender} onChange={(e) => { setGender(e.target.value) }}  as="select">
                             <option value=''>Select</option>
                                <option value='M'>Male</option>
                                <option value='F'>Female</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group >
                    <Form.Check
                    value={subscription} 
                    onChange={(e) => { setSubscription(e.target.checked) }}
                        type='checkbox'
                        label='Subscribe to Email updates'
                    />
                </Form.Group>
                <Form.Group >
                    <Button onClick={()=>{
                        console.log({email:email,firstName:firstName,lastName:lastName,gender:gender,subscription:subscription})
                        }} >Submit</Button>
                </Form.Group>
            </Form>
        </Container>
    )
}
export default UserProfile;