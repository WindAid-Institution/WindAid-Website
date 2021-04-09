import * as React from "react";
import { graphql } from "gatsby";
import { getImage, getSrc } from "gatsby-plugin-image";

import MainLayout from "src/layout/MainLayout";
import Hero from "components/Hero/Hero";
import WideText from "components/WideText/WideText";
import WhoWereServing from "components/OurImpact/WhoWereServing/index";
// eslint-disable-next-line max-len
import BackgroundSeparator from "components/BackgroundSeparator/BackgroundSeparator";
import Community from "components/OurImpact/Community/index";
import JoinProgram from "components/OurImpact/JoinProgram";
import PartnerWithUs from "components/OurImpact/PartnerWithUs";
import SpreadTheWord from "components/OurImpact/SpreadTheWord";

import OUR_IMPACT_DATA from "./data";

const { PROBLEM, ELECTRICITY } = OUR_IMPACT_DATA;

const OurImpact = ({ data: { heroImage, sunsetImage } }) => {
  const heroImageData = getImage(heroImage);
  const sunsetImageSrc = getSrc(sunsetImage);
  return (
    <MainLayout>
      <Hero image={heroImageData} alt="hero image" title="Our Impact" />
      <>
        <WideText
          headerText={PROBLEM.HEADER}
          titleText={PROBLEM.TITLE}
          bodyText={PROBLEM.BODY}
        />
        <WhoWereServing />
        <BackgroundSeparator
          imageSrc={sunsetImageSrc}
          headingText={ELECTRICITY.HEADING}
          paragraphText={ELECTRICITY.PARAGRAPH}
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
    heroImage: file(relativePath: { eq: "OurImpact/hero.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: TRACED_SVG
          quality: 100
          tracedSVGOptions: { color: "#056839" }
        )
      }
    }

    sunsetImage: file(relativePath: { eq: "OurImpact/sunset.png" }) {
      childImageSharp {
        gatsbyImageData(
          quality: 100
          placeholder: TRACED_SVG
          tracedSVGOptions: { color: "#056839" }
          layout: FULL_WIDTH
        )
      }
    }
  }
`;

export default OurImpact;
