import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {

    return (
        <Container>
            
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>

            <div className='mt-5 mb-5 d-flex'>
                <Button variant="danger">Latest</Button>{' '}
                <Marquee className='text-danger' speed={80}>
                    I can be a React component, multiple React components, 
                    or just some text......  
                    I can be a React component, multiple React components, 
                    or just some text
                </Marquee>
            </div>

        </Container>
    );
};

export default Header;