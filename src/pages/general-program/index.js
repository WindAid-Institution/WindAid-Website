import React from "react";

import GeneralProgramPage from "components/GeneralProgramPage";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Hero from "components/Hero/Hero";
import { MainLayout } from "../../layout";

function GeneralProgram({ data: { queryImage } }) {
  const image = getImage(queryImage);

  return (
    <MainLayout>
      <Hero
        image={image}
        alt="Peru Electrification Program"
        title="Peru Electrification Program"
      />
      <GeneralProgramPage />
    </MainLayout>
  );
}

export const query = graphql`
  {
    queryImage: file(relativePath: { eq: "GeneralProgram/hero.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: TRACED_SVG
          quality: 100
          tracedSVGOptions: { color: "#056839" }
        )
      }
    }
  }
`;

export default GeneralProgram;
