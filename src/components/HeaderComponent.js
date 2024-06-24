import { Button, Container, Form, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap';

import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HeaderComponent() {
  const navigate = useNavigate();
  const navigate1 = () => {
    console.log("Page1 component");
    navigate('/page1')
  }
  const navigate2 = () => {
    console.log("Page2 component");
    navigate('/page2')
  }
  const navigaet3 =()=>{
    console.log("projects");
    navigate('projects')
  }
  return (
    <div>
      <Navbar expand='sm' bg="info">
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
          <Navbar.Offcanvas id="offcanvasNavbar-expand-sm"
            aria-labelledby="offcanvasNavbarLabel-expand-sm"
            placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-start flex-grow-1 pe-3'>
                <Nav.Link to='/'>Home</Nav.Link>
                <Nav.Link onClick={navigate1}>Link</Nav.Link>
                <NavDropdown title='Dropdown' id="offcanvasNavbarDropdown-expand-sm">
                  <NavDropdown.Item onClick={navigate2}>Action1</NavDropdown.Item>
                  <NavDropdown.Item onClick={navigaet3}>Action2</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action5'>
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className='d-flex '>
                <Form.Control
                  type='search'
                  placeholder='Search'
                  className='me-2'
                  aria-label='Search'
                />
                <Button variant='outline-success'>Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar >
    </div>

  )
}