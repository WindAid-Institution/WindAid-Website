import React from "react";
import Grid from "@material-ui/core/Grid";
import { GatsbyImage } from "gatsby-plugin-image";

import "../../styles/OurMission/MissionImages.css";

const MissionImages = ({ imagesData }) => (
  <Grid container alignItems="center" justify="center">
    <Grid className="mission-container">
      {imagesData.map(({ title, description, gatsbyImageData }) => (
        <GatsbyImage
          image={gatsbyImageData}
          className={title}
          alt={description}
          key={title}
        />
      ))}
    </Grid>
  </Grid>
);

export default MissionImages;
