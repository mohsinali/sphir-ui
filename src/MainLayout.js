import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MainLayout = (props) => {
  return (
    <Container className="App-body">
      <Row className="justify-content-md-center">
        <Col>
          <div className="App">
            {props.children}            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
