/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
import { ThemeProvider } from "@material-ui/core/styles";

import MainLayout from "src/layout/MainLayout";

import TheProblem from "components/OurImpact/TheProblem";
import Hero from "components/Hero/Hero";
import WhoWereServing from "components/OurImpact/WhoWereServing/index";
// eslint-disable-next-line max-len
import BackgroundSeparator from "components/BackgroundSeparator/BackgroundSeparator";
import Community from "components/OurImpact/Community/index";
import JoinProgram from "components/OurImpact/JoinProgram";
import PartnerWithUs from "components/OurImpact/PartnerWithUs";
import SpreadTheWord from "components/OurImpact/SpreadTheWord";

import theme from "../../../theme";

const OurImpact = ({
  data: {
    hero: { title, image },
    separationElement: {
      sunsetHeading,
      body: { sunsetParagraph },
      sunsetImage,
    },
  },
}) => {
  const sunsetImageSrc = getSrc(sunsetImage);
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Hero image={image.gatsbyImageData} alt="hero image" title={title} />
        <>
          <TheProblem />
          <WhoWereServing />
          <BackgroundSeparator
            imageSrc={sunsetImageSrc}
            headingText={sunsetHeading}
            paragraphText={sunsetParagraph}
          />
          <Community />
          <JoinProgram />
          <PartnerWithUs />
          <SpreadTheWord />
        </>
      </MainLayout>
    </ThemeProvider>
  );
};

export const query = graphql`
  {
    hero: contentfulPageHero(contentId: { eq: "ourImpact" }) {
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
      contentId: { eq: "ourImpact-electricity" }
    ) {
      sunsetHeading: title
      body {
        sunsetParagraph: body
      }
      sunsetImage: image {
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
