import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 
import { Navbar, Nav } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
        Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/sponsordata">Sponsors</Nav.Link>
          <Nav.Link as={Link} to="/matchdata">Match-Details</Nav.Link>
          <Nav.Link as={Link} to="/datapage">Payment-Data</Nav.Link>
          <Nav.Link as={Link} to="/addpayment">Form-Payment</Nav.Link>
          <Nav.Link as={Link} to="/deletepayment">Delete-Payment</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
