import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "gatsby"
import Button from "react-bootstrap/Button";
import Logo from "../../images/navbar/logo.svg";
import "../../styles/navbar.css";
import navbarRoutes from "../../data/navbarRoutesConfig"


export default function StickyNavbar() {
  return (
    <>
      <Navbar bg="light" sticky="top" className="navbar-whole-container">
        <Navbar.Brand>
          <Link to="/">
            <Logo alt="windaid logo" />{" "}
          </Link>
        </Navbar.Brand>
        <Nav className="navitems-container">
          {navbarRoutes.map((route, index) => 
            <Link
              key={index}
              className="nav-item"
              activeClassName="nav-item-active"
              to={route.path}
            >
              {route.name}
            </Link>)
          }
          <div className="button-div">
            <Button variant="primary" size="lg" className="donate-button">
              Donate
            </Button>{" "}
          </div>
        </Nav>
      </Navbar>
    </>
  );
}
