import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const Login = () => {

    const {user, login} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = event => {

        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        login(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                navigate('/category/0')
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    return (
        <Container className='w-25 mx-auto mt-4'>
            
            <h3>Please Login</h3>
            
            <Form onSubmit={handleLogin}>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                
                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
                <br></br>
                <Form.Text className="text-secondary">
                   Don't have account? <Link to='/register'>Register</Link>
                </Form.Text>
                <Form.Text className="text-success">
                   
                </Form.Text>
                <Form.Text className="text-danger">
                   
                </Form.Text>

            </Form>

        </Container>
    );
};

export default Login;