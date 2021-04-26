/* eslint-disable react/prop-types */
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import MainLayout from "src/layout/MainLayout";
import ApplicationProgram from "components/ApplicationProgram/index";

import theme from "../../../theme";

const ApplicationProgramPage = () => (
  <ThemeProvider theme={theme}>
    <MainLayout>
      <ApplicationProgram />
    </MainLayout>
  </ThemeProvider>
);

export default ApplicationProgramPage;
