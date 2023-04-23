import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>

            <div className='d-flex gap-1 flex-column'>
                <h3>Login With</h3>
                <Button variant="primary"><FaGoogle></FaGoogle> Login With Google</Button>{' '}
                <Button variant="secondary"><FaGithub></FaGithub> Login with Github</Button>{' '}
            </div>

            <div className='mt-4 d-flex flex-column'>
                <h3>Find Us On</h3>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
        
        </div>
    );
};

export default RightNav;