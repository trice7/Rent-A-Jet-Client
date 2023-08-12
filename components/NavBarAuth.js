/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBarAuth() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="nav-bar">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand className="logo-text">Rent-A-Jet</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/search">
              <Nav.Link className="nav-text">All Flights</Nav.Link>
            </Link>
            <Link passHref href="/bookings/new">
              <Nav.Link className="nav-text">Book Flight</Nav.Link>
            </Link>
            <Link passHref href="/Profile">
              <Nav.Link className="nav-text">User Profile</Nav.Link>
            </Link>
            <Button variant="light" className="btn-outline-danger nav-text" onClick={signOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
