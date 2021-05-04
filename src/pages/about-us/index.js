/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";
import { ThemeProvider } from "@material-ui/core/styles";

import MainLayout from "src/layout/MainLayout";
import Hero from "components/Hero/Hero";
import OurPurpose from "components/AboutUs/OurPurpose";
import Team from "components/AboutUs/Team/index";

import theme from "../../../theme";

const AboutUs = ({
  data: {
    hero: { title, image },
  },
}) => (
  <ThemeProvider theme={theme}>
    <MainLayout>
      <Hero image={image.gatsbyImageData} alt={title} title={title} />
      <>
        <OurPurpose />
        <Team />
      </>
    </MainLayout>
  </ThemeProvider>
);

export const query = graphql`
  {
    hero: contentfulPageHero(contentId: { eq: "aboutUs" }) {
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

export default AboutUs;
