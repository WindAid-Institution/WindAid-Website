/* This is default route - home page */

import React from "react";

import { MainLayout } from "src/layout";
import BigBanner from "components/Home/BigBanner";
import Stats from "components/Home/Statistics/Statistics";
import CurrentProjects from "components/Home/CurrentProjects/CurrentProjects";
import ProgramLevels from "../components/Home/ProgramLevels/ProgramLevels";
import CareerPortal from "../components/Home/CareerPortal";

import "../styles/global.css";

const App = () => (
  <MainLayout>
    <BigBanner />
    <Stats />
    <ProgramLevels />
    <CareerPortal />
    <CurrentProjects />
  </MainLayout>
);

export default App;
