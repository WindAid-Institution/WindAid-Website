/* eslint-disable react/prop-types */
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "gatsby";

import MainLayout from "src/layout/MainLayout";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import Button from "shared/Button";

import theme from "../../../theme";

const LongTermProgram = () => (
  <ThemeProvider theme={theme}>
    <MainLayout>
      <SectionWrapper>
        <TextSection
          title="Thank you for your application"
          body="Your application is completed and we will reach you out soon"
        />
        <Link to="/">
          <Button text="Go to homepage" />
        </Link>
      </SectionWrapper>
    </MainLayout>
  </ThemeProvider>
);

export default LongTermProgram;
