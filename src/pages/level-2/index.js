/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";

import MainLayout from "src/layout/MainLayout";

import Overview from "components/Overview";
import Hero from "components/Hero/Hero";
import Structure from "components/ShortTerm/Structure";
import LevelInfo from "components/ShortTerm/LevelInfo";
import Apply from "components/ShortTerm/Apply";
import HearFromPrev from "components/ShortTerm/HearFromPrev";
import Living from "../../components/ShortTerm/Living";
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
    hero: contentfulPageHero(contentId: { eq: "shortTerm" }) {
      title
      image {
        gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }

    overview: contentfulSection(contentId: { eq: "shortTerm-overview" }) {
      title
      body {
        body
      }
    }

    separationElement: contentfulSeparationImage(
      contentId: { eq: "shortTerm-workshop" }
    ) {
      workshopImage: image {
        gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;

export default ShortTermProgram;
