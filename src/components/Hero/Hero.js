import React from "react";
import Box from "@material-ui/core/Box";
import { GatsbyImage } from "gatsby-plugin-image";

import "styles/hero.css";

const Hero = ({ image, alt, title }) => (
  <Box className="hero">
    <div className="hero__title">{title}</div>
    <GatsbyImage image={image} alt={alt} className="hero__image" />
  </Box>
);

export default Hero;