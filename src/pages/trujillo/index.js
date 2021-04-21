/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";
import { ThemeProvider } from "@material-ui/core/styles";

import MainLayout from "src/layout/MainLayout";

import Hero from "components/Hero/Hero";

import theme from "../../../theme";

const LongTermProgram = ({
  data: {
    hero: { title, image },
  },
}) => (
  <ThemeProvider theme={theme}>
    <MainLayout>
      <Hero image={image.gatsbyImageData} alt="hero image" title={title} />
      <></>
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

export default LongTermProgram;
