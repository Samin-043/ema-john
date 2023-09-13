import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='container-fluid bg-dark'>

            <Navbar expand="lg" className="bg-dark">
                <Container fluid>
                    <Navbar.Brand href="#" className="title">
                        <img src='Logo.svg' alt='image'></img>
                    </Navbar.Brand>
                    
                    <Navbar.Toggle className='bg-light' aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: 'auto' }}
                        // navbarScroll
                        >
                            <Nav.Link href="/order">Order</Nav.Link>
                            <Nav.Link href="/orderReview">Order Review</Nav.Link>
                            <Nav.Link href="/manageinventory">Manage Inventory</Nav.Link>
                            <Nav.Link href="/Login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



            {/* <nav className='headerContainer'>
                <div className="title">
                    <img src='Logo.svg' alt='image'></img>
                </div>

                <div className="menu">
                    
                    
                    <a href='/manageinventory'>Manage Inventory</a>
                    <a href='/Login'>Login</a>
                </div>
            </nav> */}

        </div>
    );
};

export default Header;