import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "gatsby";

import Logo from "../../images/navbar/logo.svg";
import Toggle from "../../images/navbar/toggle.svg";
import NavLinks from "./Navlinks";
import DonateButton from "./DonateButton";
import Sidebar from "./Sidebar";
import useWindowSize from "../../hooks/useWindowSize";

import "../../styles/navbar.css";

const useStyles = makeStyles({
  root: {
    width: "auto",
    display: "flex",
    justifyContent: "space-between",
  },
  itemsContainer: {
    maxHeight: "80px",
  },
});

export default function StickyNavbar() {
  const classes = useStyles();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { width } = useWindowSize();

  const handleSidebarOpen = () => setIsSidebarOpen(true);
  const handleSidebarClose = () => setIsSidebarOpen(false);

  useEffect(() => {
    if (isSidebarOpen && width > 1158) {
      handleSidebarClose();
    }
  }, [isSidebarOpen, width]);

  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        className="navbar-whole-container"
      >
        <Toolbar className={classes.root} variant="dense" disableGutters>
          <Link to="/">
            <Logo alt="windaid logo" className="nav-logo" />
          </Link>
          <Box
            className={classes.itemsContainer}
            display="flex"
            alignItems="center"
          >
            <NavLinks />

            <div className="button-div">
              <DonateButton />
              <Toggle
                role="button"
                className="toggle-button"
                onClick={handleSidebarOpen}
              />
            </div>
          </Box>
        </Toolbar>
      </AppBar>

      <Sidebar isOpen={isSidebarOpen} handleSidebarClose={handleSidebarClose} />
    </>
  );
}
/*
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
*/
