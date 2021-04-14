import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../theme";
import ClientSideRendering from "../utils/ClientRendering";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <ClientSideRendering>
        <NavBar />
        {children}
        <Footer />
      </ClientSideRendering>
    </ThemeProvider>
  );
}
