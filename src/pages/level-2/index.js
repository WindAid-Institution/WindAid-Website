/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";

import MainLayout from "src/layout/MainLayout";

import Overview from "components/Overview";
import Hero from "components/Hero/Hero";
import Structure from "components/LevelTwo/Structure";
import LevelInfo from "components/LevelTwo/LevelInfo";
import Apply from "components/LevelTwo/Apply";
import HearFromPrev from "components/LevelTwo/HearFromPrev";
import Living from "../../components/LevelTwo/Living";
// eslint-disable-next-line max-len

const ShortTermProgram = ({
  data: {
    hero: { title, image },
    overview,
  },
}) => (
  <MainLayout>
    <Hero image={image.gatsbyImageData} alt="hero image" title={title} />
    <Overview header="" title={overview.title} body={overview.body.body} />
    <Structure />
    <LevelInfo />
    <Living />
    <Apply />
    <HearFromPrev />
  </MainLayout>
);

export const query = graphql`
  {
    hero: contentfulPageHero(contentId: { eq: "levelTwo" }) {
      title
      image {
        gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }

    overview: contentfulSection(contentId: { eq: "levelTwo-overview" }) {
      title
      body {
        body
      }
    }

    separationElement: contentfulSeparationImage(
      contentId: { eq: "levelTwo-workshop" }
    ) {
      workshopImage: image {
        gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;

export default ShortTermProgram;
