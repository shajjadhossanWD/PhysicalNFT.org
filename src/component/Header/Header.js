import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import logo from './logo1.png';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className='headerNav' variant="dark">
                <Container>
                    <Navbar.Brand href="#">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2 searchBar"
                        aria-label="Search"
                        />
                    </Form>
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className='navItem' href="#action1">Home</Nav.Link>

                        <NavDropdown.Divider />
                        <NavDropdown className='navItem1 text-white' title="Explore" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#explore">Explore</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#explore1">Explore1</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action2">Something2</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action3">Something3</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action4">Something4</NavDropdown.Item>
                        </NavDropdown>


                        <NavDropdown className='navItem1' title="Author" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#explore">Explore</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#explore1">Explore1</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action2">Something2</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action3">Something3</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action4">Something4</NavDropdown.Item>
                        </NavDropdown>


                        <NavDropdown className='navItem1' title="Stats" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#explore">Explore</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#explore1">Explore1</NavDropdown.Item>
                        </NavDropdown>
                        <button className='navBtn'>Log in</button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default Header;