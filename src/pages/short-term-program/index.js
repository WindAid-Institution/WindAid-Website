/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
import { ThemeProvider } from "@material-ui/core/styles";

import MainLayout from "src/layout/MainLayout";

import Overview from "components/ShortTerm/Overview";
import Hero from "components/Hero/Hero";
import Day1To3 from "components/ShortTerm/Day1To3";
import Day4To20 from "components/ShortTerm/Day4To20";
import Day21To27 from "components/ShortTerm/Day21To27";
import Volunteers from "components/ShortTerm/Volunteers";
import HearFromPrev from "components/ShortTerm/HearFromPrev";
// eslint-disable-next-line max-len
import BackgroundSeparator from "components/BackgroundSeparator/BackgroundSeparator";

import theme from "../../../theme";

const OurImpact = ({
  data: {
    hero: { title, image },
    separationElement: { workshopImage },
  },
}) => {
  const sunsetImageSrc = getSrc(workshopImage);
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Hero image={image.gatsbyImageData} alt="hero image" title={title} />
        <>
          <Overview />
          <Day1To3 />
          <Day4To20 />
          <Day21To27 />
          <Volunteers />
          <BackgroundSeparator imageSrc={sunsetImageSrc} isFilter={false} />
          <HearFromPrev />
        </>
      </MainLayout>
    </ThemeProvider>
  );
};

export const query = graphql`
  {
    hero: contentfulPageHero(contentId: { eq: "shortTerm" }) {
      title
      image {
        gatsbyImageData(
          quality: 100
          placeholder: TRACED_SVG
          layout: FULL_WIDTH
        )
      }
    }

    separationElement: contentfulSeparationImage(
      contentId: { eq: "shortTerm-workshop" }
    ) {
      workshopImage: image {
        gatsbyImageData(
          quality: 100
          placeholder: TRACED_SVG
          layout: FULL_WIDTH
        )
      }
    }
  }
`;

export default OurImpact;
