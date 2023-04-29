import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container className='mt-5'>
            <h3>Terms and Conditions</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ullam incidunt ipsum dolorum pariatur fugit voluptatem, sint delectus, est, dicta doloremque aut distinctio laborum vero?</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </Container >
    );
};

export default Terms;