/* This is default route - home page */

import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../theme";

import { MainLayout } from "../layout";
import Home from "../components/Home";
import "../styles/global.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Home />
      </MainLayout>
    </ThemeProvider>
  );
}
