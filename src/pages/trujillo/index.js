/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";

import MainLayout from "src/layout/MainLayout";

import Hero from "components/Hero/Hero";
import Spring from "components/Trujillo/Spring";
import Explore from "components/Trujillo/Explore";
import Beach from "components/Trujillo/Beach";
import Immerse from "components/Trujillo/Immerse";
import Entertainment from "components/Trujillo/Entertainment";
import Accommodation from "components/Trujillo/Accommodation";
import DayInLife from "../../components/Trujillo/DayInLife";
import Apply from "../../components/ShortTerm/Apply";

const Trujillo = ({
  data: {
    hero: { title, image },
  },
}) => (
  <MainLayout>
    <Hero image={image.gatsbyImageData} alt="hero image" title={title} />
    <Accommodation />
    <DayInLife />
    <Spring />
    <Immerse />
    <Entertainment />
    <Explore />
    <Beach />
    <Apply />
  </MainLayout>
);

export const query = graphql`
  {
    hero: contentfulPageHero(contentId: { eq: "trujillo" }) {
      title
      image {
        gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;

export default Trujillo;
