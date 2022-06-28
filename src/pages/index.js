/* This is default route - home page */

import React from "react";

import { MainLayout, Seo } from "src/layout";
import BigBanner from "components/Home/BigBanner";
import Stats from "components/Home/Statistics/Statistics";
import CurrentProjects from "components/Home/CurrentProjects/CurrentProjects";
import ProgramLevels from "../components/Home/ProgramLevels/ProgramLevels";
import CareerPortal from "../components/Home/CareerPortal";

import "../styles/global.css";

const metaDescription =
  "We provide certified hands-on and virtual education on renewable energy and community development. Join WindAid today and gain the experience of a lifetime!";

const meta = [
  {
    name: "description",
    content: metaDescription,
  },
];

const App = () => (
  <MainLayout>
    <Seo meta={meta} />
    <BigBanner />
    <Stats />
    <ProgramLevels />
    <CareerPortal />
    <CurrentProjects />
  </MainLayout>
);

export default App;
