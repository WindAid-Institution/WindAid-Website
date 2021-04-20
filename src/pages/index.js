/* This is default route - home page */

import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import { MainLayout } from "src/layout";
import BigBanner from "components/Home/BigBanner";
import OurMission from "components/Home/OurMission";
import Stats from "components/Home/Statistics/Statistics";
import OurApproach from "components/Home/OurApproach";
import OurCoreWork from "components/Home/OurCoreWork";
import OurPrograms from "components/Home/OurPrograms";

import theme from "../../theme";
import "../styles/global.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <BigBanner />
        <OurMission />
        <Stats />
        <OurApproach />
        <OurCoreWork />
        <OurPrograms />
      </MainLayout>
    </ThemeProvider>
  );
}
