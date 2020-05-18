import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import CreateCard from './Cards/CreateCard';

const MainNavigation = () => {
  const [createCard, setCreateCard] = useState(false);
  const handleCreateCardClick = () => setCreateCard(true);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Sphir</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Discover</Nav.Link>
          <Nav.Link href="#link">Library</Nav.Link>
          <Nav.Link href="#createCard" onClick={handleCreateCardClick}>+ Card</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <CreateCard openSelectCardTyp={createCard} />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNavigation;