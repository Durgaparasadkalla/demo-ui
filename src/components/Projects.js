import { Button, Col, Container, Row } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router';

import React from 'react';

export default function Projects() {
  const navigate = useNavigate();
  const navigateToPage1 = () => {
    navigate('project1')
  }
  const navigateToPage2 = () => {
    navigate('project2')
  }
  const styles = {
    sideDrawer: {
      backgroundColor: 'blue'
    }
  }
  function sample() {
    navigate('project3')
  }
  return (
    <Container fluid>
      <Row >
        <Col md={2} style={styles.sideDrawer}>
          <Button variant='primary' onClick={navigateToPage1}>project1</Button>
          <Button variant='primary' onClick={navigateToPage2}>project2</Button>
          <Button variant='primary' onClick={sample}>Project3</Button>
        </Col>
        <Col md={8}>

          <Outlet />
        </Col>

      </Row>



    </Container>
  )
}


