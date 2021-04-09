import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Grid from "@material-ui/core/Grid";

import "../../styles/banner.css";

const query = graphql`
  {
    image: file(relativePath: { eq: "banner_hq.jpg" }) {
      size
      relativePath
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

const FullpageBanner = () => {
  const data = useStaticQuery(query);
  const image = getImage(data.image);

  return (
    <Grid container className="banner-container">
      <Grid item className="banner-container">
        <GatsbyImage image={image} className="banner-pic" alt="banner" />
        <div className="banner-text">
          Working with peruvian communities to nurture an energy independent
          future.
        </div>
      </Grid>
    </Grid>
  );
};

export default FullpageBanner;
