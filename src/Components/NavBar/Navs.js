import React from "react";
import { Button, Container, Nav, Navbar, } from "react-bootstrap";
import { Link } from "react-router-dom";
import { islogin } from "../Login/LoginForm";
import { link } from "../Login/LoginForm";
import { user } from "../Login/LoginForm";

function Navs() {
    return (
        <Navbar style={{ backgroundColor: '#0c0b19' }} expand="lg" className="navBar">
            <Container fluid>
                <Link className="link " to={'/home'}>
                    <Navbar.Brand className="text-main">School Management System </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" style={{ backgroundColor: 'gold' }} />
                <Navbar.Collapse id="navbarScroll" className="text-center ">
                    <Nav
                        className="me-auto my-2 my-lg-0 hoverlink w-100  "
                        style={{}}
                        navbarScroll
                    >
                        <Link to={'/home'} className=' link text-main mx-2 p-1'>
                            Home
                        </Link>
                        <Link to={'/allBooks'} className='link text-main mx-2 p-1'>
                            Books
                        </Link>
                        <Link to={'/about'} className='link text-main mx-2 p-1'>
                            About Us
                        </Link>
                    </Nav>
                    {
                        islogin ? (<Link to={link} className="text-main link">Welcome {user}</Link>) : (<Link to={'/login'} className='link'><Button className="text-main border-0 bg-main bt">Login</Button> </Link>)
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navs;
