/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";
import { ThemeProvider } from "@material-ui/core/styles";

import MainLayout from "src/layout/MainLayout";
import Hero from "components/Hero/Hero";
import OurAmbassadors from "components/Ambassadors/OurAmbassadors";
import Meet from "components/Ambassadors/Meet/index";

import theme from "../../../theme";

const Ambassadors = ({
  data: {
    hero: { title, image },
  },
}) => (
  <ThemeProvider theme={theme}>
    <MainLayout>
      <Hero image={image.gatsbyImageData} alt={title} title={title} />
      <>
        <OurAmbassadors />
        <Meet />
      </>
    </MainLayout>
  </ThemeProvider>
);

export const query = graphql`
  {
    hero: contentfulPageHero(contentId: { eq: "ambassadors" }) {
      title
      image {
        gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;

export default Ambassadors;
