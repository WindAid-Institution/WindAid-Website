/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";
import { ThemeProvider } from "@material-ui/core/styles";

import MainLayout from "src/layout/MainLayout";

import Overview from "components/Overview";
import Offering from "components/LongTerm/Offering";
import ExampleProjects from "components/LongTerm/ExampleProjects/index";
import LevelInfo from "components/LongTerm/LevelInfo";
import Hero from "components/Hero/Hero";
import Structure from "../../components/LongTerm/Structure";

import theme from "../../../theme";

const LongTermProgram = ({
  data: {
    hero: { title, image },
    overview,
  },
}) => (
  <ThemeProvider theme={theme}>
    <MainLayout>
      <Hero image={image.gatsbyImageData} alt="hero image" title={title} />
      <>
        <Overview
          header=""
          title={overview.title}
          body={overview.body.body}
          bodyTwo={overview.bodyTwo.bodyTwo}
        />
        <Offering />
        <Structure />
        <ExampleProjects />
        <LevelInfo />
      </>
    </MainLayout>
  </ThemeProvider>
);

export const query = graphql`
  {
    hero: contentfulPageHero(contentId: { eq: "longTerm" }) {
      title
      image {
        gatsbyImageData(
          quality: 100
          placeholder: TRACED_SVG
          layout: FULL_WIDTH
        )
      }
    }

    overview: contentfulSection(contentId: { eq: "longTerm-overview" }) {
      header
      title
      body {
        body
      }
      bodyTwo {
        bodyTwo
      }
    }
  }
`;

export default LongTermProgram;
