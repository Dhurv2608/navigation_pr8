import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

import React from 'react'

export const Header = () => {
  return (
    <div> <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
         
              <Link className='text-dark text-decoration-none mx-3'  to="/">Home</Link>
         
           
              <Link  className='text-dark text-decoration-none mx-3' to="/About">About</Link>
           
          <Link  className='text-dark text-decoration-none mx-3' to="/Update" >
            Update
          </Link>
          <Link  className='text-dark text-decoration-none mx-3' to="/Service">Service</Link>
          <Link  className='text-dark text-decoration-none mx-3' to="/Contect">Contect</Link>
          <Link  className='text-dark text-decoration-none mx-3' to="/Blog">Blog</Link>
          <Link  className='text-dark text-decoration-none mx-3' to="/Client">Client</Link>
          <Link  className='text-dark text-decoration-none mx-3' to="/Testimonial">Testimonial</Link>
          <Link  className='text-dark text-decoration-none mx-3' to="/Product">Product</Link>
          <Link  className='text-dark text-decoration-none mx-3' to="/Team">Team</Link>

        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default Header;