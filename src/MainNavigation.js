import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import CreateCard from './Cards/CreateCard';

class MainNavigation extends Component {
  refCreateCard = React.createRef();

  render(){
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Sphir</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Discover</Nav.Link>
            <Nav.Link href="#link">Library</Nav.Link>
            <Nav.Link href="#createCard" onClick={() => this.refCreateCard.current.openCardTypeModal()}>+ Card</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <CreateCard ref={this.refCreateCard} />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNavigation;