import React from 'react';
import './Header.scss';
import Navbar from 'react-bootstrap/Navbar'

const header = props => (
  <Navbar className="navbar">
    <Navbar.Brand href="#/">
      <span>Football </span>
      <span>Leagues</span>
    </Navbar.Brand>
  </Navbar>
);

export default header;
