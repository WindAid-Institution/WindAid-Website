import React from "react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import PropTypes from "prop-types";

import theme from "../../theme";
// import ClientSideRendering from "../utils/ClientRendering";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <NavBar />
      {children}
      <Footer />
    </ThemeProvider>
  </StyledEngineProvider>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
