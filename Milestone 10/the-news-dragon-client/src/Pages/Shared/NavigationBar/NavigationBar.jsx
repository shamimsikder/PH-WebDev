import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {

    const {user} = useContext(AuthContext)

    return (
        <Container>
            
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        
                        <Link to='/category/0'>Home</Link>
                        <Link to='/'>About</Link>
                        <Link to='/'>Career</Link>
                       
                    </Nav>
                    <Nav className='d-flex justify-content-center align-items-center'>
                       { user && 
                            <FaUserCircle style={{fontSize: '2rem'}}>{user.displayName}</FaUserCircle>
                       }
                        
                        {user ? <Button variant="secondary">Log Out</Button>
                        :
                        <Link to='/login'>
                            <Button variant="secondary">Login</Button>
                        </Link>
                        }
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default NavigationBar;