/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";

import MainLayout from "src/layout/MainLayout";
import Hero from "components/Hero/Hero";
import CareersInternships from "components/CareersInternships/index";

const Careers = ({
  data: {
    hero: { title, image },
  },
}) => (
  <MainLayout>
    <Hero image={image.gatsbyImageData} alt={title} title={title} />
    <>
      <CareersInternships />
    </>
  </MainLayout>
);

export const query = graphql`
  {
    hero: contentfulPageHero(contentId: { eq: "careers" }) {
      title
      image {
        gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;

export default Careers;
