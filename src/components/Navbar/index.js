import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "gatsby"
import Button from "react-bootstrap/Button";
import Logo from "../../images/navbar/logo.svg";
import "../../styles/navbar.css";

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
          <Link
            className="nav-item"
            activeClassName="nav-item-active"
            to="/who-we-are"
          >
            Who We Are
          </Link>
          <Link
            className="nav-item"
            activeClassName="nav-item-active"
            to="/our-work"
          >
            Our Work
          </Link>
          <Link
            className="nav-item"
            activeClassName="nav-item-active"
            to="/join-us"
          >
            Join Us
          </Link>
          <Link
            className="nav-item"
            activeClassName="nav-item-active"
            to="/contact"
          >
            Contact Us
          </Link>
          <Link
            className="nav-item"
            activeClassName="nav-item-active"
            to="/apply"
          >
            Apply
          </Link>
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
