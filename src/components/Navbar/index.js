import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Box, useMediaQuery } from "@mui/material";
import { Link } from "gatsby";

import Logo from "images/navbar/logo.svg";
import Toggle from "images/navbar/toggle.svg";

import useTheme from "@mui/material/styles/useTheme";
import NavLinks from "./Navlinks";
import ApplyButton from "./ApplyButton";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarOpen = () => setIsSidebarOpen(true);
  const handleSidebarClose = () => setIsSidebarOpen(false);
  const theme = useTheme();
  const isLgScreen = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    if (isSidebarOpen && isLgScreen) {
      handleSidebarClose();
    }
  }, [isSidebarOpen, isLgScreen]);

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        sx={{
          maxHeight: "80px",
          p: { lg: "0 12px", xl: "0 calc(12.6vw - 75px)" },
          backgroundColor: theme.palette.primary.main,

          // [theme.breakpoints.up("xl")]: {
          //   padding: "0 calc(12.6vw - 75px)",
          // },})
        }}
      >
        <Toolbar
          sx={{
            width: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
          variant="dense"
          disableGutters
        >
          <Link to="/">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContet: "center",
                height: { xxs: "40px", md: "48px" },
              }}
            >
              <Logo
                alt="windaid logo"
                style={{ height: "100%" }}

                // [theme.breakpoints.up("sm")]: {
                //   height: "auto",
                // },
              />
            </Box>
          </Link>
          <Box
            sx={{
              maxHeight: "80px",
            }}
            display="flex"
            alignItems="center"
          >
            <NavLinks />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingTop: "16px",
                paddingBottom: "16px",
                marginRight: { xxs: "26px", lg: 0 },

                // [theme.breakpoints.up("lg")]: {
                //   marginRight: 0,
                // },
              }}
            >
              <ApplyButton />
              {!isLgScreen && (
                <Toggle
                  role="button"
                  cursor="pointer"
                  onClick={handleSidebarOpen}
                />
              )}
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
