/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";
import { ThemeProvider } from "@material-ui/core/styles";

import MainLayout from "src/layout/MainLayout";

import Hero from "components/Hero/Hero";
import Spring from "components/Trujillo/Spring";
import Explore from "components/Trujillo/Explore";
import Beach from "components/Trujillo/Beach";
import Immerse from "components/Trujillo/Immerse";
import Accommodation from "components/Trujillo/Accommodation";

import theme from "../../../theme";

const Trujillo = ({
  data: {
    hero: { title, image },
  },
}) => (
  <ThemeProvider theme={theme}>
    <MainLayout>
      <Hero image={image.gatsbyImageData} alt="hero image" title={title} />
      <>
        <Spring />
        <Explore />
        <Beach />
        <Immerse />
        <Accommodation />
      </>
    </MainLayout>
  </ThemeProvider>
);

export const query = graphql`
  {
    hero: contentfulPageHero(contentId: { eq: "trujillo" }) {
      title
      image {
        gatsbyImageData(
          quality: 100
          placeholder: TRACED_SVG
          layout: FULL_WIDTH
        )
      }
    }
  }
`;

export default Trujillo;
