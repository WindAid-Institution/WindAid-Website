import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Grid from "@material-ui/core/Grid";

import useHomepageData from "src/hooks/queries/homepage";

import "../../styles/banner.css";

const FullpageBanner = () => {
  const {
    hero: {
      title,
      image: { description, gatsbyImageData },
    },
  } = useHomepageData();
  return (
    <Grid container className="banner-container">
      <Grid item className="banner-container">
        <GatsbyImage
          image={gatsbyImageData}
          className="banner-pic"
          alt={description}
          backgroundColor="#056839"
        />
        <div className="banner-text">{title}</div>
      </Grid>
    </Grid>
  );
};

export default FullpageBanner;
