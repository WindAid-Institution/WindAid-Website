import React from "react";
import Box from "@material-ui/core/Box";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";

import "styles/hero.css";

const Hero = ({ image, alt, title }) => (
  <Box className="hero">
    <Box className="hero__title">{title}</Box>
    <GatsbyImage image={image} alt={alt} className="hero__image" />
  </Box>
);

Hero.propTypes = {
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Hero;
