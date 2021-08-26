import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Karianca Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#"></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">{props.link2}</Nav.Link>
            <Nav.Link href="#">{props.link3}</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category/lenovo">
                Laptops
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/tv">Tv</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2} href="#">
              <CartWidget icon={faShoppingCart} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
