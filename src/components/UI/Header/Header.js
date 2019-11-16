import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import './Header.scss';

const header = props => (
  <Navbar className="navbar">
    <Container>
      <Navbar.Brand href="/">
        <span>Football </span>
        <span>Leagues</span>
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default header;
