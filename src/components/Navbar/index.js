import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Box } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "gatsby";

import Logo from "images/navbar/logo.svg";
import Toggle from "images/navbar/toggle.svg";

import NavLinks from "./Navlinks";
import ApplyButton from "./ApplyButton";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "80px",
    padding: "0 12px",
    backgroundColor: theme.palette.primary.main,

    [theme.breakpoints.up("xl")]: {
      padding: "0 calc(12.6vw - 75px)",
    },
  },
  toolbar: {
    width: "auto",
    display: "flex",
    justifyContent: "space-between",
  },
  itemsContainer: {
    maxHeight: "80px",
  },

  logo: {
    height: "48px",

    [theme.breakpoints.up("sm")]: {
      height: "auto",
    },
  },

  buttonsContainer: {
    display: "flex",
    alignItems: "center",
    paddingTop: "16px",
    paddingBottom: "16px",
    marginRight: "26px",

    [theme.breakpoints.up("lg")]: {
      marginRight: 0,
    },
  },

  toggleButton: {
    cursor: "pointer",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarOpen = () => setIsSidebarOpen(true);
  const handleSidebarClose = () => setIsSidebarOpen(false);

  const isLgScreen = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    if (isSidebarOpen && isLgScreen) {
      handleSidebarClose();
    }
  }, [isSidebarOpen, isLgScreen]);

  return (
    <>
      <AppBar position="fixed" color="default" className={classes.root}>
        <Toolbar className={classes.toolbar} variant="dense" disableGutters>
          <Link to="/">
            <Logo alt="windaid logo" className={classes.logo} />
          </Link>
          <Box
            className={classes.itemsContainer}
            display="flex"
            alignItems="center"
          >
            <NavLinks />

            <Box className={classes.buttonsContainer}>
              <ApplyButton />
              <Toggle
                role="button"
                className={classes.toggleButton}
                onClick={handleSidebarOpen}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <Sidebar isOpen={isSidebarOpen} handleSidebarClose={handleSidebarClose} />
    </>
  );
};

export default Navbar;
