import  React from "react";
import { graphql } from "gatsby";
import { getSrc } from "gatsby-plugin-image";

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

const OurImpact = ({
  data: {
    hero: { title, image },
    separationElement: {
      sunsetHeading,
      body: { sunsetParagraph },
      sunsetImage,
    },
    theProblem: {
      problemHeader,
      problemTitle,
      body: { problemBody },
    },
  },
}) => {
  const sunsetImageSrc = getSrc(sunsetImage);
  return (
    <MainLayout>
      <Hero image={image.gatsbyImageData} alt="hero image" title={title} />
      <>
        <WideText
          headerText={problemHeader}
          titleText={problemTitle}
          bodyText={problemBody}
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

    theProblem: contentfulSection(contentId: { eq: "ourImpact-the-problem" }) {
      problemHeader: header
      problemTitle: title
      body {
        problemBody: body
      }
    }
  }
`;

export default OurImpact;
