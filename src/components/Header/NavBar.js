import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Karianca Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">{props.link1}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">{props.link2}</Nav.Link>
            <Nav.Link href="#">{props.link3}</Nav.Link>
            <Nav.Link eventKey={2} href="#">
              <CartWidget name="faShoppingCart" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
