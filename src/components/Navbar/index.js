import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Logo from "../../images/navbar/logo.svg";
import "../../styles/navbar.css";

export default function StickyNavbar() {
  return (
    <>
      <Navbar bg="light" sticky="top" className="navbar-whole-container">
        <Navbar.Brand>
          <NavLink to="/">
            <Logo alt="windaid logo" />{" "}
          </NavLink>
        </Navbar.Brand>
        <Nav className="navitems-container">
          <NavLink
            className="nav-item"
            activeClassName="nav-item-active"
            to="/who-we-are"
          >
            Who We Are
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="nav-item-active"
            to="/our-work"
          >
            Our Work
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="nav-item-active"
            to="/join-us"
          >
            Join Us
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="nav-item-active"
            to="/contact"
          >
            Contact Us
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="nav-item-active"
            to="/apply"
          >
            Apply
          </NavLink>
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
