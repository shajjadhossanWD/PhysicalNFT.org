import React, { useState } from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo1.png';

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const changeBackground=()=>{
        if(window.scrollY >=100){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <div>
            <Navbar expand="lg" className={navbar ? 'navbar active' : 'navbar'} fixed="top" variant="dark">
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
                        <Nav.Link className='navItem' as={Link} to="/home" href="#action1">Home</Nav.Link>

                        <NavDropdown.Divider />
                        <NavDropdown className='navItem1 text-white' title="Explore" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#explore" as={Link} to="/explore">Explore</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#art" as={Link} to="/art">Art</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#explore1" as={Link} to="/music">Music</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action2" as={Link} to="/video">Video</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action3" as={Link} to="/realWorld">Real World</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link className='navItem' as={Link} to="/topCreators" href="#action1">Top Creators</Nav.Link>


                        <NavDropdown className='navItem1' title="Stats" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#explore" as={Link} to="activity">Activity</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#explore1" as={Link} to="rankings">Rankings</NavDropdown.Item>
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