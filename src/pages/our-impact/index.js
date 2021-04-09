import * as React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Hero from "components/Hero/Hero";
import MainLayout from "src/layout/MainLayout";

const OurImpact = ({ data: { queryImage } }) => {
  const image = getImage(queryImage);

  return (
    <MainLayout>
      <Hero image={image} alt="hero image" title="Our Impact" />
    </MainLayout>
  );
};

export const query = graphql`
  {
    queryImage: file(relativePath: { eq: "OurImpact/hero.png" }) {
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

export default OurImpact;
