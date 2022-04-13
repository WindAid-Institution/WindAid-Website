/* This is default route - home page */

import React from "react";

import { MainLayout, Seo } from "src/layout";
import BigBanner from "components/Home/BigBanner";
import Stats from "components/Home/Statistics/Statistics";
import CurrentProjects from "components/Home/CurrentProjects/CurrentProjects";
import { Helmet } from "react-helmet";
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
  <>
    <Helmet>
      <meta name="icon" href="/link/to/favicon.png" />

      <meta
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <meta
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <meta
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>

    <MainLayout>
      <Seo meta={meta} />
      <BigBanner />
      <Stats />
      <ProgramLevels />
      <CareerPortal />
      <CurrentProjects />
    </MainLayout>
  </>
);

export default App;
