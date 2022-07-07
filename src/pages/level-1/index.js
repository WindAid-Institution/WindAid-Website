/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";

import MainLayout from "src/layout/MainLayout";

import Overview from "components/Overview";
import Hero from "components/Hero/Hero";
import Structure from "components/LevelOne/Structure";
import LevelInfo from "components/LevelOne/LevelInfo";
import Apply from "components/LevelOne/Apply";
// import HearFromPrev from "components/LevelTwo/HearFromPrev";
// import Living from "../../components/LevelTwo/Living";
// eslint-disable-next-line max-len

const Level1Program = ({
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
    <Apply />
  </MainLayout>
);

export const query = graphql`
  {
    hero: contentfulPageHero(contentId: { eq: "levelOne" }) {
      title
      image {
        gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }

    overview: contentfulSection(contentId: { eq: "levelOne-overview" }) {
      title
      body {
        body
      }
    }
  }
`;

export default Level1Program;
