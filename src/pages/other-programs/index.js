/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";

import MainLayout from "src/layout/MainLayout";

import Overview from "components/Overview";
import Offering from "components/LevelThree/Offering";
import ExampleProjects from "components/LevelThree/ExampleProjects/index";
import LevelInfo from "components/LevelThree/LevelInfo";
import Hero from "components/Hero/Hero";
import Structure from "../../components/LevelThree/Structure";

const LongTermProgram = ({
  data: {
    hero: { title, image },
    overview,
  },
}) => (
  <MainLayout>
    <Hero
      image={image.gatsbyImageData}
      alt="hero image"
      title={title || "No Title"}
    />
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
  </MainLayout>
);

export const query = graphql`
  {
    hero: contentfulPageHero(contentId: { eq: "levelThree" }) {
      title
      image {
        gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }

    overview: contentfulSection(contentId: { eq: "levelThree-overview" }) {
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
