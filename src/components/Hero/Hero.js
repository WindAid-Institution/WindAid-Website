import React from "react";
import Box from "@material-ui/core/Box";
import { GatsbyImage } from "gatsby-plugin-image";

import HeroTitle from "components/Hero/HeroTitle";
import "styles/hero.css";

const Hero = ({ image, alt, title }) => (
  <Box className="hero">
    <HeroTitle title={title} />
    <GatsbyImage image={image} alt={alt} className="hero__image" />
  </Box>
);

export default Hero;
