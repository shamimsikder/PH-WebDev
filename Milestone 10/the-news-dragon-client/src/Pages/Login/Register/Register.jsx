import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const Register = () => {

    const {user, createUser} = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false)

    const handleRegistration = event => {

        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (
        <Container className='w-25 mx-auto mt-4'>
            
            <h3>Register</h3>
            
            <Form onSubmit={handleRegistration}>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter photo URL" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccepted} type="checkbox" name='accept' label={<>Accept <Link to='/terms'>Term and Conditions</Link></>} />
                </Form.Group>
                
                <Button className='w-100' variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
                <br></br>
                <Form.Text className="text-secondary">
                   Already have an account? <Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className="text-success">
                   
                </Form.Text>
                <Form.Text className="text-danger">
                   
                </Form.Text>

            </Form>

        </Container>
    );
};

export default Register;