/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";
import { getSrc } from "gatsby-plugin-image";

import MainLayout from "src/layout/MainLayout";
import Overview from "components/Overview";
import Hero from "components/Hero/Hero";
import WhoWereServing from "components/OurImpact/WhoWereServing/index";
// eslint-disable-next-line max-len
import BackgroundSeparator from "components/BackgroundSeparator/BackgroundSeparator";
import Community from "components/OurImpact/Community/index";
import JoinProgram from "components/OurImpact/JoinProgram";
import PartnerWithUs from "components/OurImpact/PartnerWithUs";
import SpreadTheWord from "components/OurImpact/SpreadTheWord";

const OurImpact = ({
  data: {
    hero: { title, image },
    separationElement: {
      sunsetHeading,
      body: { sunsetParagraph },
      sunsetImage,
    },
    theProblem,
  },
}) => {
  const sunsetImageSrc = getSrc(sunsetImage);

  return (
    <MainLayout>
      <Hero image={image.gatsbyImageData} alt="hero image" title={title} />
      <>
        <Overview
          header={theProblem.header}
          title={theProblem.title}
          body={theProblem.body.body}
        />
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
  );
};

export const query = graphql`
  {
    hero: contentfulPageHero(contentId: { eq: "ourImpact" }) {
      title
      image {
        gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }

    theProblem: contentfulSection(contentId: { eq: "ourImpact-the-problem" }) {
      header
      title
      body {
        body
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
        gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;

export default OurImpact;
