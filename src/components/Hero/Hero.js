import React from "react";
import Box from "@material-ui/core/Box";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: { position: "relative" },
  image: {
    height: "calc(19.7vw + 329px)",
    maxHeight: "613px",
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    position: "absolute",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    top: "50%",
    transform: "translateY(-50%)",
    width: "auto",
    height: "67px",
    paddingRight: "16px",
    paddingLeft: "48px",
    zIndex: 99,
    color: theme.palette.secondary.main,
    background: "rgba(0, 0, 0, 0.4)",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "35px",

    [theme.breakpoints.up("xs")]: {
      paddingLeft: "calc(-0.036 * 100vw + 59.43px)",
    },

    [theme.breakpoints.up("sm")]: {
      height: "calc(0.061 * 100vw + 30.4px)",
      paddingRight: "calc(0.019 * 100vw + 4.6px)",
      fontSize: "calc(0.02 * 100vw + 12px)",
      lineHeight: "calc(0.0226 * 100vw + 21.4px)",
    },

    [theme.breakpoints.up("xmd")]: {
      paddingLeft: "calc(0.155 * 100vw - 70.86px)",
    },

    [theme.breakpoints.up("xl")]: {
      paddingLeft: "152px",
      height: "118px",
      paddingRight: "32px",
      fontSize: "40px",
      lineHeight: "54px",
    },
  },
}));

const Hero = ({ image, alt, title }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.title}>{title}</Box>
      <GatsbyImage image={image} alt={alt} className={classes.image} />
    </Box>
  );
};

Hero.propTypes = {
  image: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Hero;
