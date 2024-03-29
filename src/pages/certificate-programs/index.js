/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
import { ThemeProvider } from "@mui/material/styles";

import MainLayout from "src/layout/MainLayout";
import Hero from "components/Hero/Hero";
import Overview from "components/GeneralProgram/Overview";
import Impact from "components/GeneralProgram/Impact";
// eslint-disable-next-line max-len
import BackgroundSeparator from "components/BackgroundSeparator/BackgroundSeparator";
import ExperienceSection from "components/GeneralProgram/ExperienceSection";
import AdventureSection from "components/GeneralProgram/AdventureSection";
import CertificationProgram from "components/GeneralProgram/CertificationProgram";

import theme from "../../../theme";

function GeneralProgram({
  data: {
    hero: { title, image },
    separationElement: {
      body: { separationBody },
      bodyTwo: { separationBodyTwo },
      separationImage,
    },
  },
}) {
  const separationImageSrc = getSrc(separationImage);
  const separationParagraph = [separationBody, separationBodyTwo];

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Hero
          image={image.gatsbyImageData}
          alt="Certificate Programs"
          title={title}
        />
        <>
          <Overview />
          <Impact />
          <BackgroundSeparator
            imageSrc={separationImageSrc}
            paragraphText={separationParagraph}
          />
          <ExperienceSection />
          <CertificationProgram />
          <AdventureSection />
        </>
      </MainLayout>
    </ThemeProvider>
  );
}

export const query = graphql`
  {
    hero: contentfulPageHero(contentId: { eq: "generalProgram" }) {
      title
      image {
        gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }

    separationElement: contentfulSeparationImage(
      contentId: { eq: "generalProgram-focus" }
    ) {
      body {
        separationBody: body
      }
      bodyTwo {
        separationBodyTwo: bodyTwo
      }
      separationImage: image {
        gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;

export default GeneralProgram;
