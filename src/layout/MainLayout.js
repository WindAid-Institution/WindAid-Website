import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import theme from "../../theme";
// import ClientSideRendering from "../utils/ClientRendering";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <NavBar />
    {children}
    <Footer />
  </ThemeProvider>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
