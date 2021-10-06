import React from "react";
import { Link } from "react-router-dom";

//Import from bootstrap
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

//Import icon
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

//Import component
import CartWidget from "../CartWidget/CartWidget";

//Import style
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Karianca Store
        </Navbar.Brand>
        <Nav.Link
          eventKey={2}
          as={Link}
          to="/cart"
          className="cart-counter-mobile"
        >
          <CartWidget
            icon={faShoppingCart}
            className="cart-counter"
            style={{ color: "gray" }}
          />
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#"></Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/laptop">
                Laptops
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/tv">
                Tv
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              eventKey={2}
              as={Link}
              to="/cart"
              className="cart-counter-desktop"
            >
              <CartWidget icon={faShoppingCart} className="cart-counter" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
